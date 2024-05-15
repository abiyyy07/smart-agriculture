'use client'

import {FaSeedling, FaRegLightbulb, FaWater} from 'react-icons/fa'
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { useState } from 'react'

import PopUpTanaman from './popup/tanaman';
import PopUpSuhu from './popup/suhu';
import PopUpPenyiraman from './popup/penyiraman';

export default function FungsiComponent() {
    const [popupContent, setPopupContent] = useState(null);

    const openPopup = (content: any) => {
        setPopupContent(content);
    };

    const closePopup = () => {
        setPopupContent(null);
    };

    return (
        <div className="container mx-auto px-4 mt-20 mb-4">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
            Fungsi Utama Smart Agriculture
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-300 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <FaSeedling size={50} className="text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-center mb-4">Pemantauan Tanaman</h3>
              <p className="text-center text-gray-700 mb-4">
                Memantau kondisi tanah dari tanaman secara real-time untuk pertumbuhan optimal.
              </p>
              <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
                onClick={() => openPopup(<PopUpTanaman />)}
              >
                Selengkapnya
              </button>
            </div>
            {/* Card 2 */}
            <div className="bg-gray-300 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <LiaTemperatureHighSolid size={50} className="text-red-500 mb-4" />
              <h3 className="text-2xl font-bold text-center mb-4">Pemantauan Suhu</h3>
              <p className="text-center text-gray-700 mb-4">
                Pemantauan suhu dan kelembaban daerah sekitar secara real-time.
              </p>
              <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
                onClick={() => openPopup(<PopUpSuhu />)}
              >
                Selengkapnya
              </button>
            </div>
            {/* Card 3 */}
            <div className="bg-gray-300 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <FaWater size={50} className="text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-center mb-4">Penyiraman Otomatis</h3>
              <p className="text-center text-gray-700 mb-4">
                Sistem penyiraman otomatis yang menyesuaikan dengan kondisi tanah.
              </p>
              <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
                onClick={() => openPopup(<PopUpPenyiraman />)}
              >
                Selengkapnya
              </button>
            </div>
          </div>

          {/* Popup */}
          {popupContent && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-8 rounded-lg" style={{ maxWidth: '80vw' }}> {/* Mengatur lebar maksimum pop-up */}
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