export default function LCD() {
    return (
        <div className="text-start">
            <h2 className="font-bold text-green-700 text-xl">Liquid Crystal Display (LCD) 16x2</h2>
            <p className="mt-1">LCD 16x2 atau Liquid Crystal Display adalah alat yang digunakan untuk menampilkan informasi real-time mengenai data dari Soil Moisture Sensor, DHT11, dan status pompa yang dikirim dari Nodemcu ESP8266. Alat ini adalah memiliki peran penambah dalam menampilkan informasi selain memakai aplikasi Blynk yang diprogram untuk jarak sedikit jauh (selama masih di area WiFi yang sama). LCD yang dipakai sendiri berfariasi dengan ukuran yang muat untuk ditampilkan, dan kita menggunakan yang 16x2.</p>
            <p className="mt-2 font-semibold text-gray-800">Cara menyambungkan dengan Nodemcu ESP8266:</p>
            <ul>
                <li>- VCC to VV</li>
                <li>- GND to GND</li>
                <li>- SDA to D2</li>
                <li>- SCL to D1</li>
            </ul>
        </div>
    )
}