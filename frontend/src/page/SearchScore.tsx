import { Button } from "@/components/ui/button";
import useGetScoreBySbd from "@/hooks/service/useGetScoreBySbd";
import { useState } from "react";

export default function SearchScore() {
    const [registrationNumber, setRegistrationNumber] = useState("");
    const { data, fetchScore } = useGetScoreBySbd()

    return (
        <div className="p-6 space-y-6">

            {/* User Registration */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">
                    User Registration
                </h2>

                <div className="flex gap-3">
                    <input
                        type="number"
                        className="border p-2 w-80 rounded"
                        placeholder="Enter registration number"
                        value={registrationNumber}
                        onChange={(e) => setRegistrationNumber(e.target.value)}
                    />

                    <Button onClick={() => {
                        fetchScore(registrationNumber)
                        console.log(data)
                    }} >
                        Submit
                    </Button>
                </div>
            </div>

            {/* Detailed Scores */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-2">
                    Detailed Scores
                </h2>

                {
                    data ?
                        <div>
                            <p><strong>SBD:</strong> {data.sbd || '__'}</p>
                            <p><strong>Math:</strong> {data.toan || '__'}</p>
                            <p><strong>Literature:</strong> {data.ngu_van || '__'}</p>
                            <p><strong>English:</strong> {data.ngoai_ngu || '__'}</p>
                            <p><strong>Physics:</strong> {data.vat_li || '__'}</p>
                            <p><strong>Chemistry:</strong> {data.hoa_hoc || '__'}</p>
                            <p><strong>Biology:</strong> {data.sinh_hoc || '__'}</p>
                            <p><strong>History:</strong> {data.lich_su || '__'}</p>
                            <p><strong>Geography:</strong> {data.dia_li || '__'}</p>
                            <p><strong>Civics:</strong> {data.gdcd || '__'}</p>
                            <p><strong>Foreign Language Code:</strong> {data.ma_ngoai_ngu || '__'}</p>
                        </div>
                        :
                        <p>Detailed view of search scores here!</p>
                }
            </div>

        </div>
    )
}