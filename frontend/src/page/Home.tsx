export default function Home() {
    return (
        <div className="p-6 space-y-6">

            {/* User Registration */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">
                    User Registration
                </h2>

                <div className="flex gap-3">
                    <input
                        className="border p-2 w-80 rounded"
                        placeholder="Enter registration number"
                    />

                    <button className="bg-black text-white px-4 py-2 rounded">
                        Submit
                    </button>
                </div>
            </div>

            {/* Detailed Scores */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-2">
                    Detailed Scores
                </h2>

                <p>Detailed view of search scores here!</p>
            </div>

        </div>
    )
}