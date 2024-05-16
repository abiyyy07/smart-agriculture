export default function Dht() {
    return (
        <div className="text-start">
            <h2 className="font-bold text-green-700 text-xl">DHT11 Sensor</h2>
            <p className="mt-1">DHT11 adalah sensor atau alat untuk mendeteksi suhu atau kelembaban di daerah sekitar yang dapat dijangkau sensor tersebut. Kegunaanya agar pengguna dapat memantau suhu dan kelembaban didaerah sekitar tersebut dan memastikan agar tanaman tumbuh dengan baik.</p>
            <p className="mt-2 font-semibold text-gray-800">Cara menyambungkan dengan Nodemcu ESP8266:</p>
            <ul>
                <li>- + to 3v3</li>
                <li>- Out to D7</li>
                <li>- - to GND</li>
            </ul>
        </div>
    )
}