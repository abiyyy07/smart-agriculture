'use client'

import { useState } from "react"
import Image from 'next/image'

import Nodemcu from "./content/nodemcu";
import Soil from "./content/soil";
import Dht from "./content/dht";
import LCD from "./content/lcd";
import I2C from "./content/i2c";
import Jumper from "./content/jumper";
import Pompa from "./content/pompa";
import Baterai from "./content/baterai"
import Relay from "./content/relay"
import Micro from "./content/micro";

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
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
              <Image src='/tools/nodemcu.png' alt="" width={100} height={100}></Image>
              <h3 className="text-xl font-bold mb-2">Nodemcu Esp8266</h3>
              <button className="bg-green-700 transition hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={() => openPopup(<Nodemcu />)}>Detail Pengertian</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
              <Image src="/tools/moisture.png" alt="Soil Moisture Sensor" width={75} height={100}></Image>
              <h3 className="text-xl font-bold mb-2">Soil Moisture Sensor</h3>
              <button className="bg-green-700 transition hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={() => openPopup(<Soil />)}>Detail Pengertian</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
              <Image src="/tools/dht11.jpeg" alt="DHT11" width={75} height={100}></Image>
              <h3 className="text-xl font-bold mb-2">DHT11 Sensor</h3>
              <button className="bg-green-700 transition hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={() => openPopup(<Dht />)}>Detail Pengertian</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
              <Image src="/tools/lcd.jpeg" alt="LCD 16x2" width={75} height={100}></Image>
              <h3 className="text-xl font-bold mb-2">LCD 16x2</h3>
              <button className="bg-green-700 transition hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={() => openPopup(<LCD />)}>Detail Pengertian</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
              <Image src="/tools/i2c.jpeg" alt="Modul i2c" width={120} height={100}></Image>
              <h3 className="text-xl font-bold mb-2">Modul I2C</h3>
              <button className="bg-green-700 transition hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={() => openPopup(<I2C />)}>Detail Pengertian</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
              <Image src="/tools/jumper.jpeg" alt="Kabel Jumper" width={75} height={100}></Image>
              <h3 className="text-xl font-bold mb-2">Kabel Jumper</h3>
              <button className="bg-green-700 transition hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={() => openPopup(<Jumper />)}>Detail Pengertian</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
              <Image src="/tools/pompa.jpeg" alt="Pompa Mini" width={110} height={100}></Image>
              <h3 className="text-xl font-bold mb-2">Pompa Mini</h3>
              <button className="bg-green-700 transition hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={() => openPopup(<Pompa />)}>Detail Pengertian</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
              <Image src="/tools/baterai.jpeg" alt="Baterai" width={75} height={100}></Image>
              <h3 className="text-xl font-bold mb-2">Baterai</h3>
              <button className="bg-green-700 transition hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={() => openPopup(<Baterai />)}>Detail Pengertian</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
              <Image src="/tools/relay.jpeg" alt="Relay" width={110} height={100}></Image>
              <h3 className="text-xl font-bold mb-2">Relay</h3>
              <button className="bg-green-700 transition hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={() => openPopup(<Relay />)}>Detail Pengertian</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
              <Image src="/tools/micro.png" alt="Kabel Micro USB" width={120} height={100}></Image>
              <h3 className="text-xl font-bold mb-2">Kabel Micro USB</h3>
              <button className="bg-green-700 transition hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={() => openPopup(<Micro />)}>Detail Pengertian</button>
            </div>
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