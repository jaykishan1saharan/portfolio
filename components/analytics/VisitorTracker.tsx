"use client";

import { useEffect } from "react";

const SESSION_KEY = "portfolio_session_id";

export default function VisitorTracker() {
  useEffect(() => {
    let heartbeatInterval:
      ReturnType<typeof setInterval> | null =
        null;

    const startHeartbeat = (
      sessionId: string
    ) => {
      heartbeatInterval =
        setInterval(async () => {
          try {
            const response =
              await fetch(
                "/api/visitors/heartbeat",
                {
                  method: "POST",

                  headers: {
                    "Content-Type":
                      "application/json",
                  },

                  body: JSON.stringify({
                    sessionId,
                  }),
                }
              );

            const data =
              await response.json();

            if (data.success) {
              console.log(
                "Heartbeat:",
                data.duration,
                "seconds"
              );

              if (
                data.oneMinuteReached
              ) {
                console.log(
                  "🎉 Visitor stayed for 1+ minute"
                );
              }
            }
          } catch (error) {
            console.error(
              "Heartbeat error:",
              error
            );
          }
        }, 20000);
    };

    const trackPageView = async (
      sessionId: string
    ) => {
      try {
        const response =
          await fetch(
            "/api/visitors/page-view",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                sessionId,

                page:
                  window.location.pathname,
              }),
            }
          );

        const data =
          await response.json();

        if (data.success) {
          console.log(
            "Page view tracked:",
            window.location.pathname
          );
        }
      } catch (error) {
        console.error(
          "Page view tracking error:",
          error
        );
      }
    };

    const createSession = async () => {
      try {
        // ==========================================
        // CHECK EXISTING SESSION
        // ==========================================

        const existingSession =
          sessionStorage.getItem(
            SESSION_KEY
          );

        if (existingSession) {
          console.log(
            "Existing visitor session:",
            existingSession
          );

          await trackPageView(
            existingSession
          );

          startHeartbeat(
            existingSession
          );

          return;
        }

        // ==========================================
        // CREATE NEW SESSION
        // ==========================================

        const response =
          await fetch(
            "/api/visitors/session",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                deviceType:
                  getDeviceType(),

                browser:
                  getBrowser(),

                os:
                  getOperatingSystem(),

                screenWidth:
                  window.screen.width,

                screenHeight:
                  window.screen.height,

                language:
                  navigator.language,

                referrer:
                  document.referrer ||
                  "direct",
              }),
            }
          );

        const data =
          await response.json();

        if (!data.success) {
          console.error(
            "Visitor session creation failed:",
            data
          );

          return;
        }

        const sessionId =
          data.session.session_id;

        // ==========================================
        // SAVE SESSION
        // ==========================================

        sessionStorage.setItem(
          SESSION_KEY,
          sessionId
        );

        console.log(
          "New visitor session:",
          sessionId
        );

        // ==========================================
        // TRACK FIRST PAGE
        // ==========================================

        await trackPageView(
          sessionId
        );

        // ==========================================
        // START HEARTBEAT
        // ==========================================

        startHeartbeat(
          sessionId
        );

      } catch (error) {
        console.error(
          "Visitor tracking error:",
          error
        );
      }
    };

    createSession();

    // ==========================================
    // CLEANUP
    // ==========================================

    return () => {
      if (heartbeatInterval) {
        clearInterval(
          heartbeatInterval
        );
      }
    };
  }, []);

  return null;
}

// ======================================================
// DEVICE TYPE
// ======================================================

function getDeviceType() {
  const width =
    window.innerWidth;

  if (width < 768) {
    return "mobile";
  }

  if (width < 1024) {
    return "tablet";
  }

  return "desktop";
}

// ======================================================
// BROWSER
// ======================================================

function getBrowser() {
  const userAgent =
    navigator.userAgent;

  if (userAgent.includes("Edg")) {
    return "Edge";
  }

  if (userAgent.includes("Chrome")) {
    return "Chrome";
  }

  if (userAgent.includes("Firefox")) {
    return "Firefox";
  }

  if (userAgent.includes("Safari")) {
    return "Safari";
  }

  return "Unknown";
}

// ======================================================
// OPERATING SYSTEM
// ======================================================

function getOperatingSystem() {
  const userAgent =
    navigator.userAgent;

  if (userAgent.includes("Windows")) {
    return "Windows";
  }

  if (userAgent.includes("Android")) {
    return "Android";
  }

  if (
    userAgent.includes("iPhone") ||
    userAgent.includes("iPad")
  ) {
    return "iOS";
  }

  if (userAgent.includes("Mac OS")) {
    return "macOS";
  }

  if (userAgent.includes("Linux")) {
    return "Linux";
  }

  return "Unknown";
}