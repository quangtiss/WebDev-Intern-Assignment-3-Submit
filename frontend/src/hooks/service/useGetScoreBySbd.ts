import { API_BASE_URL } from "@/constants/api";
import { useState } from "react";

type ScoreData = {
  sbd: string;
  toan: number | null;
  ngu_van: number | null;
  ngoai_ngu: number | null;
  vat_li: number | null;
  hoa_hoc: number | null;
  sinh_hoc: number | null;
  lich_su: number | null;
  dia_li: number | null;
  gdcd: number | null;
  ma_ngoai_ngu: string | null;
};

export default function useGetScoreBySbd() {
  const [data, setData] = useState<ScoreData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchScore = async (sbd: string) => {
    try {
      setLoading(true);

      const res = await fetch(`${API_BASE_URL}/score/${sbd}`);
      const result = await res.json();

      setData(result);
    } catch (err: unknown) {
      setError(err as Error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchScore };
}
