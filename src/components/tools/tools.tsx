'use client'

import { useState } from "react"

export default function ToolsComponents() {
    const [popupContent, setPopupContent] = useState(null);

    const openPopup = (content: any) => {
        setPopupContent(content);
    };

    const closePopup = () => {
        setPopupContent(null);
    };

    return (
    <div className="bg-green-700 py-8 mt-20">
        <div className="text-center mb-4">
          <h3 className="font-semibold text-4xl text-white">Alat dan Bahan</h3>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2">Fungsi Smart Agriculture</h3>
              <button className="bg-green-700 transition hover:bg-green-800 text-white font-bold py-2 px-4 rounded">Eksplor Fungsi</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2">Alat dan Bahan</h3>
              <button className="bg-green-700 transition hover:bg-green-800 text-white font-bold py-2 px-4 rounded">Eksplor Alat & Bahan</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2">Cara Kerja</h3>
              <button className="bg-green-700 transition hover:bg-green-800 text-white font-bold py-2 px-4 rounded">Eksplor Cara Kerja</button>
            </div>
          </div>
        </div>
    </div>
    )
}