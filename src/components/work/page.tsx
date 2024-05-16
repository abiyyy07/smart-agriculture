import Image from "next/image"

export default function WorkLayout() {
    return (
    <div className="container mx-auto mt-12 mb-5">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-green-700 mb-8">Cara Kerja</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center">
            <Image src="/work/flowchart.png" alt="Flowchart" width={400} height={400} className="rounded-lg" />
            <h3 className="text-xl font-bold mt-4 text-center">Flowchart</h3>
            <p className="text-center text-gray-700 mt-2">
              Flowchart yang menggambarkan alur kerja sistem Smart Agriculture.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/work/sketch.png" alt="Skematik Rancangan" width={290} height={400} className="rounded-lg" />
            <h3 className="text-xl font-bold mt-4 text-center">Skematik Rancangan</h3>
            <p className="text-center text-gray-700 mt-2">
              Skematik rancangan yang menunjukkan komponen dan koneksi sistem.
            </p>
          </div>
        </div>

        {/* Penjelasan */}
        <h2 className="text-4xl font-bold text-center text-green-700 mb-8 mt-6">Detail Langkah Kerja</h2>
        <div className="bg-green-700 p-6 rounded-lg shadow-lg text-white">
          <ol className="list-decimal list-inside text-white font-semibold">
            <li className="mb-2">
              Sensor kelembaban tanah mendeteksi tingkat kelembaban tanah secara real-time, akan dikategorikan sesuai nilai kelembaban dan didefinisikan sebagai kering/normal/basah.
            </li>
            <li className="mb-2">
              Data kelembaban tanah dikirim ke sistem pengendali pusat.
            </li>
            <li className="mb-2">
              Sistem pengendali pusat memproses data dan menentukan tindakan yang diperlukan (misalnya, mengaktifkan pompa air jika tanah didefinisikan kering menurut nilai yang diambil sensor).
            </li>
            <li className="mb-2">
              Pompa air diaktifkan atau dinonaktifkan berdasarkan instruksi dari sistem pengendali pusat.
            </li>
            <li className="mb-2">
              Sensor DHT11 juga akan mengambil nilai suhu dan kelembaban daerah sekitar yang terjangkau dan akan mengirim data ke pusat.
            </li>
            <li className="mb-2">
              Sistem seacara otomatis akan menampilkan data secara real-time, menampilkan nilai dari kelembaban tanah dengan mendefinisikan kondisinya, menampilkan nilai suhu dan kelembaban dan juga status pompa melalui LCD.
            </li>
            <li className="mb-2">
              Selain LCD, data juga akan ditampilkan seacara real-time melalui aplikasi Blynk yang sudah terkonek dengan jaringan yang sama.
            </li>
          </ol>
        </div>
    </div>
    )
}