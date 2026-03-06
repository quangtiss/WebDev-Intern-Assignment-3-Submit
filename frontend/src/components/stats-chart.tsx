import { useState } from "react"
import { useStats } from "@/hooks/service/useGetStats"
import { subjects } from "@/constants/subjects"

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts"

export default function StatsChart() {
    const [subject, setSubject] = useState("toan")

    const { data, loading } = useStats(subject)

    const chartData = data
        ? [
            { level: ">=8", students: data.level1 },
            { level: "6-8", students: data.level2 },
            { level: "4-6", students: data.level3 },
            { level: "<4", students: data.level4 },
        ]
        : []

    return (
        <div className="w-full max-w-2xl mx-auto space-y-6">

            <h2 className="text-xl font-bold">Score Statistics</h2>

            {/* Subject Dropdown */}

            <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="border p-2 rounded"
            >
                {subjects.map((s) => (
                    <option key={s.value} value={s.value}>
                        {s.label}
                    </option>
                ))}
            </select>

            {/* Chart */}

            {loading ? (
                <p>Loading...</p>
            ) : (
                <ResponsiveContainer width="95%" height={350}>
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="level" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="students" />
                    </BarChart>
                </ResponsiveContainer>
            )}
        </div>
    )
}