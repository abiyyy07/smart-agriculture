'use client'

import Image from "next/image"
import { useState } from "react"

import { FaFile } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { SiArduino } from "react-icons/si";

import CodeComponents from "./content/code";
import CaraComponents from "./content/cara";
import ArduinoComponents from "./content/arduino";

export default function WorkLayout() {
    const [popupContent, setPopupContent] = useState(null);

    const openPopup = (content: any) => {
        setPopupContent(content);
    };

    const closePopup = () => {
        setPopupContent(null);
    };
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

        {/* Source Code */}
        <h2 className="text-4xl font-bold text-center text-green-700 mb-8 mt-6">Mengenai Source Code</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-500 p-4 rounded-lg shadow-lg flex items-center justify-center">
                <h3 className="text-xl font-bold mr-2">Source Code</h3>
                <button className="bg-green-700 transition hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={() => openPopup(<CodeComponents />)}><FaFile size={30} className="text-white"/></button>
              </div>
              <div className="bg-orange-500 p-4 rounded-lg shadow-lg flex items-center justify-center">
                <h3 className="text-xl font-bold mr-2">Cara Penggunaan</h3>
                <button className="bg-green-700 transition hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={() => openPopup(<CaraComponents />)}><TfiWrite size={30} className="text-white"/></button>
              </div>
              <div className="bg-yellow-500 p-4 rounded-lg shadow-lg flex items-center justify-center">
                <h3 className="text-xl font-bold mr-2">Arduino IDE</h3>
                <button className="bg-green-700 transition hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={() => openPopup(<ArduinoComponents />)}><SiArduino size={30} className="text-white"/></button>
              </div>
            </div>
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

        {popupContent && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg" style={{ maxWidth: '80vw', maxHeight: '80vh', overflowY: 'auto' }}> {/* Mengatur lebar maksimum dan tinggi maksimum pop-up */}
            <p>{popupContent}</p>
            <button className="mt-4 bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={closePopup}>
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
    )
}