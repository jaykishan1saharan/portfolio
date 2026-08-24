"use client";

import { useEffect, useState } from "react";

import {
  getMessaging,
  getToken,
  onMessage,
} from "firebase/messaging";

import { firebaseApp } from "@/lib/firebase/client";

export default function NotificationsPage() {
    const [status, setStatus] = useState("Not connected");
    const [token, setToken] = useState("");

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        if (!("Notification" in window)) {
            return;
        }

        if (Notification.permission !== "granted") {
            return;
        }

        let unsubscribe: (() => void) | undefined;

        const setupForegroundMessaging = async () => {
            try {
                const messaging = getMessaging(firebaseApp);

                // Wait until Firebase service worker is ready
                const registration =
                    await navigator.serviceWorker.ready;

                unsubscribe = onMessage(
                    messaging,
                    async (payload) => {
                        console.log(
                            "📩 Foreground FCM message:",
                            payload
                        );

                        const title =
                            payload.notification?.title ||
                            "Portfolio Alert";

                        const body =
                            payload.notification?.body ||
                            "Someone visited your portfolio.";

                        // Show notification through Service Worker
                        await registration.showNotification(
                            title,
                            {
                                body,
                                icon: "/favicon.ico",
                            }
                        );
                    }
                );

                console.log(
                    "✅ Foreground FCM listener ready"
                );

            } catch (error) {
                console.error(
                    "❌ Foreground messaging setup failed:",
                    error
                );
            }
        };

        setupForegroundMessaging();

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, []);

    const enableNotifications = async () => {
        try {
            console.log("🔔 Notification setup started");

            setStatus("Checking browser...");

            // 1. Check notification support
            if (!("Notification" in window)) {
                setStatus(
                    "❌ This browser does not support notifications."
                );
                return;
            }

            // 2. Check service worker support
            if (!("serviceWorker" in navigator)) {
                setStatus(
                    "❌ This browser does not support service workers."
                );
                return;
            }

            console.log(
                "Current permission:",
                Notification.permission
            );

            setStatus("Requesting permission...");

            // 3. Ask for notification permission
            const permission =
                await Notification.requestPermission();

            console.log(
                "Permission result:",
                permission
            );

            if (permission !== "granted") {
                setStatus(
                    `❌ Notification permission: ${permission}`
                );
                return;
            }

            setStatus(
                "Permission granted. Registering service worker..."
            );

            // 4. Register Firebase service worker manually
            const serviceWorkerRegistration =
                await navigator.serviceWorker.register(
                    "/firebase-messaging-sw.js"
                );

            console.log(
                "✅ Service worker registered:",
                serviceWorkerRegistration
            );

            setStatus(
                "Service worker registered. Getting FCM token..."
            );

            // 5. Initialize Firebase Messaging
            const messaging =
                getMessaging(firebaseApp);

            // 6. Get FCM token
            const currentToken =
                await getToken(messaging, {
                    vapidKey:
                        process.env
                            .NEXT_PUBLIC_FIREBASE_VAPID_KEY,

                    serviceWorkerRegistration,
                });

            if (!currentToken) {
                setStatus(
                    "❌ FCM token was not generated."
                );
                return;
            }

            console.log(
                "🔥 FCM TOKEN:",
                currentToken
            );

            // Register this device with our backend
            const registerResponse =
                await fetch(
                    "/api/admin/notifications/register",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json",
                        },

                        body: JSON.stringify({
                            token: currentToken,

                            deviceType:
                                /Android|iPhone|iPad|iPod/i.test(
                                    navigator.userAgent
                                )
                                    ? "mobile"
                                    : "desktop",

                            userAgent:
                                navigator.userAgent,
                        }),
                    }
                );

            const registerData =
                await registerResponse.json();

            if (!registerData.success) {
                console.error(
                    "Device registration failed:",
                    registerData
                );

                setStatus(
                    "❌ Device registration failed."
                );

                return;
            }

            console.log(
                "✅ Notification device registered"
            );

            setToken(currentToken);

            setStatus(
                "✅ This device is ready for notifications!"
            );

        } catch (error) {

            console.error(
                "🔥 Notification setup error:",
                error
            );

            setStatus(
                "❌ Notification setup failed. Check console."
            );
        }
    };

    const sendTestNotification = async () => {
        try {
            setStatus(
                "Sending test notification..."
            );

            const response =
                await fetch(
                    "/api/admin/notifications/send-test",
                    {
                        method: "POST",
                    }
                );

            const data =
                await response.json();

            console.log(
                "Test notification response:",
                data
            );

            if (!data.success) {
                setStatus(
                    `❌ ${data.message}`
                );

                return;
            }

            setStatus(
                `✅ Notification sent! Success: ${data.successCount}`
            );

        } catch (error) {
            console.error(
                "Test notification error:",
                error
            );

            setStatus(
                "❌ Failed to send notification."
            );
        }
    };

    return (
        <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">

            <div className="w-full max-w-lg">

                <div className="rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_60px_rgba(34,211,238,0.12)]">

                    <div className="text-center">

                        <div className="text-5xl mb-5">
                            🔔
                        </div>

                        <h1 className="text-3xl font-bold">
                            Portfolio Alerts
                        </h1>

                        <p className="text-white/50 mt-3">
                            Enable notifications to know
                            when someone visits your portfolio.
                        </p>

                    </div>

                    <button
                        onClick={
                            enableNotifications
                        }
                        className="w-full mt-8 rounded-xl bg-cyan-500 py-4 font-semibold text-black transition hover:bg-cyan-400"
                    >
                        Enable Notifications 🔔
                    </button>

                    <button
                        onClick={sendTestNotification}
                        className="
    w-full
    mt-4
    rounded-xl
    border
    border-cyan-400/30
    bg-white/5
    py-4
    font-semibold
    text-cyan-300
    transition
    hover:bg-cyan-400/10
  "
                    >
                        Send Test Notification 📱
                    </button>

                    <div className="mt-6 rounded-xl bg-white/5 border border-white/10 p-4">

                        <p className="text-sm text-white/50">
                            Status
                        </p>

                        <p className="mt-2 text-cyan-300">
                            {status}
                        </p>

                    </div>

                    {token && (
                        <div className="mt-6">

                            <p className="text-sm text-white/50 mb-2">
                                FCM Token
                            </p>

                            <textarea
                                value={token}
                                readOnly
                                rows={5}
                                className="w-full rounded-xl bg-black/50 border border-white/10 p-3 text-xs text-white/70 outline-none resize-none"
                            />

                            <p className="text-xs text-white/30 mt-2">
                                Keep this token private.
                            </p>

                        </div>
                    )}

                </div>

            </div>

        </main>
    );
}