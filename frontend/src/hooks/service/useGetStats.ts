import { useEffect, useState } from "react";
import type { StatsResponse } from "@/types/stats";

export function useStats(subject: string) {
  const [data, setData] = useState<StatsResponse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!subject) return;

    const fetchStats = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `http://localhost:8000/api/stats?subject=${subject}`,
        );

        const json = await res.json();

        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [subject]);

  return { data, loading };
}
