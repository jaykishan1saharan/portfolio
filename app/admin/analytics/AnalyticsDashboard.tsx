"use client";

import { useEffect, useState } from "react";

type AnalyticsData = {
  stats: {
    totalVisitors: number;
    liveVisitors: number;
    engagedVisitors: number;
  };

  recentVisitors: any[];
  recentEvents: any[];
};

export default function AnalyticsDashboard() {
  const [data, setData] =
    useState<AnalyticsData | null>(null);

  const [loading, setLoading] =
    useState(true);

  const loadAnalytics = async () => {
    try {
      const response = await fetch(
        "/api/admin/analytics",
        {
          cache: "no-store",
        }
      );

      const result = await response.json();

      if (result.success) {
        setData(result);
      }
    } catch (error) {
      console.error(
        "Analytics loading error:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAnalytics();

    const interval = setInterval(
      loadAnalytics,
      10000
    );

    return () => clearInterval(interval);
  }, []);

  if (loading || !data) {
    return (
      <div className="p-8">
        Loading analytics...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Portfolio Analytics
          </h1>

          <p className="mt-2 text-white/60">
            Live visitor intelligence
          </p>
        </div>

        {/* Stats */}

        <div className="grid gap-4 md:grid-cols-3">

          <StatCard
            title="Total Visitors"
            value={data.stats.totalVisitors}
            icon="👥"
          />

          <StatCard
            title="Live Now"
            value={data.stats.liveVisitors}
            icon="🟢"
          />

          <StatCard
            title="Stayed 1+ Minute"
            value={data.stats.engagedVisitors}
            icon="⏱️"
          />

        </div>

        {/* Recent Visitors */}

        <section className="mt-8">

          <h2 className="mb-4 text-xl font-semibold">
            Recent Visitors
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-white/10">

            <table className="w-full text-left">

              <thead className="border-b border-white/10 bg-white/5">
                <tr>
                  <th className="p-4">Time</th>
                  <th className="p-4">Device</th>
                  <th className="p-4">Browser</th>
                  <th className="p-4">OS</th>
                  <th className="p-4">Duration</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>

              <tbody>

                {data.recentVisitors.map(
                  (visitor) => (
                    <tr
                      key={visitor.session_id}
                      className="border-b border-white/5"
                    >

                      <td className="p-4">
                        {new Date(
                          visitor.started_at
                        ).toLocaleTimeString()}
                      </td>

                      <td className="p-4">
                        {visitor.device_type || "Unknown"}
                      </td>

                      <td className="p-4">
                        {visitor.browser || "Unknown"}
                      </td>

                      <td className="p-4">
                        {visitor.os || "Unknown"}
                      </td>

                      <td className="p-4">
                        {visitor.duration_seconds}s
                      </td>

                      <td className="p-4">
                        {visitor.last_seen_at &&
                        Date.now() -
                          new Date(
                            visitor.last_seen_at
                          ).getTime() <
                          45000 ? (
                          <span className="text-green-400">
                            ● Live
                          </span>
                        ) : (
                          <span className="text-white/40">
                            Offline
                          </span>
                        )}
                      </td>

                    </tr>
                  )
                )}

              </tbody>

            </table>

          </div>

        </section>

        {/* Events */}

        <section className="mt-8">

          <h2 className="mb-4 text-xl font-semibold">
            Recent Activity
          </h2>

          <div className="space-y-3">

            {data.recentEvents.map(
              (event, index) => (
                <div
                  key={`${event.session_id}-${index}`}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >

                  <div className="flex items-center justify-between">

                    <span className="font-medium">
                      {event.event_type}
                    </span>

                    <span className="text-sm text-white/40">
                      {new Date(
                        event.created_at
                      ).toLocaleTimeString()}
                    </span>

                  </div>

                </div>
              )
            )}

          </div>

        </section>

      </div>
    </main>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

      <div className="text-2xl">
        {icon}
      </div>

      <div className="mt-4 text-3xl font-bold">
        {value}
      </div>

      <div className="mt-1 text-sm text-white/50">
        {title}
      </div>

    </div>
  );
}