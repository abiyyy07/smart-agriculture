export default function PopUpTanaman() {
    return (
        <div className="text-start">
            <h2 className="font-semibold text-xl">Pemantauan Tanaman Melalui Kondisi Tanah</h2>
            <p className="mt-1">Smart Agriculture dilengkapi oleh teknologi atau alat bernama 'Soil Moisture Sensor' atau sensor kelembaban tanah. Nantinya akan diketahui nilai-nya yang diambil dari sensor kelembaban tanah yang diprogram khusus yang dapat mengirim sinya ke pompa dan mendefinisikan itu sebagai kondisi tanah kering/normal/basah nantinya dan ditampilkan dalam teks LCD atau Aplikasi Blynk</p>

            {/* Tabel Data */}
            <div className="overflow-x-auto mt-4">
                <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Nilai Kelembaban
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status Tanah
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status Pompa
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            1024-800
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Kering
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            ON / Aktif
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            800-600
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Normal
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            ON / Aktif
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            600-0
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            Basah
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            OFF / Mati
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    )
}