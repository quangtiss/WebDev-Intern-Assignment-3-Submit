import { useGetTop10 } from "@/hooks/service/useGetTop10"

export default function ListTop10() {
    const { data, loading, error } = useGetTop10()

    if (loading) return <div className="text-center p-10">Loading...</div>
    if (error) return <div className="text-red-500 text-center p-10">Error: {error.message}</div>

    return (
        <div className="p-5">
            <h2 className="text-center font-bold text-xl">Top 10 Students of Group A</h2>

            {data.map((student, index) => (
                <div key={student.sbd} className="bg-white p-5 rounded-lg shadow mb-5">
                    <h3 className="font-bold text-lg mb-2 underline">Rank #{index + 1}</h3>
                    <p><strong>SBD:</strong> {student.sbd}</p>
                    <p><strong>Math:</strong> {student.toan ?? "__"}</p>
                    <p><strong>Physics:</strong> {student.vat_li ?? "__"}</p>
                    <p><strong>Chemistry:</strong> {student.hoa_hoc ?? "__"}</p>
                </div>
            ))}
        </div>
    )
}