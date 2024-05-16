export default function Soil() {
    return (
        <div className="text-start">
            <h2 className="font-bold text-green-700 text-xl">Soil Moisture Sensor</h2>
            <p className="mt-1">Soil Moisture Sensor adalah alat untuk mendeteksi kelembaban tanah yang nantinya dapat dipantau oleh pengguna dan pengguna tersebut dapat tahu kondisi tanah. Selain itu, penggunaannya juga sebagai patokan untuk menyiram air yang diprogram memili nilai tertentu untuk menyalakan pompa.</p>
            <p className="mt-2 font-semibold text-gray-800">Cara menyambungkan dengan Nodemcu ESP8266:</p>
            <ul>
                <li>- VCC to 3v3</li>
                <li>- GND to GND</li>
                <li>- A0 to A0</li>
            </ul>
        </div>
    )
}