import { API_BASE_URL } from "@/constants/api";
import { useEffect, useState } from "react";

export type TopStudent = {
  sbd: string;
  toan?: number;
  vat_li?: number;
  hoa_hoc?: number;
};

export function useGetTop10() {
  const [data, setData] = useState<TopStudent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchTop10 = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${API_BASE_URL}/top10-group-a`);

      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      const result = await res.json();
      setData(result);
    } catch (err: unknown) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTop10();
  }, []);

  return { data, loading, error, refetch: fetchTop10 };
}
