export default function PopUpSuhu() {
    return (
        <div className="text-start">
            <h2 className="font-semibold text-xl">Pemantauan Suhu dan Kelembaban Daerah Sekitar</h2>
            <p className="mt-1">Smart Agriculture dilengkapi oleh teknologi atau alat bernama Sensor DHT11 yang berfungsi dalam menangkap dan menghitung suhu serta kelembaban daerah sekitar yang terjangkau dengan sensor tersebut. Suhu dan Kelembaban nantinya akan ditampilkan di LCD yang terpasang maupun dapat dilihat melalui Aplikasi Blynk.</p>
            <p className="mt-2 font-bold text-red-600">Berikut suhu ideal dalam bidang pertanian:</p>

            {/* Tabel Data */}
            <div className="overflow-x-auto mt-4">
                <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Waktu
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Suhu
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Siang Hari
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            24 - 27
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Malam Hari
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            18 - 21
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>

            <p className="mt-2 font-bold">Kelembaban: </p>
            <p className="-mt-1">Untuk kebanyakan tanaman, kelembaban nisbi yang dibutuhkan sekitar 80%.</p>
        </div>
    )
}