export default function Relay() {
    return (
        <div className="text-start">
            <h2 className="font-bold text-green-700 text-xl">Relay Expansion</h2>
            <p className="mt-1">Relay sendiri memiliki fungsi sebagai pemutus dan pembuka arus untuk daya pompa nantinya jika kondisi on/off dalam status kondisi kelembaban tanah. Relay nantinya yang mengatur peran penting dalam memutus atau membuka aliran listrik dari baterai untuk pompa yang terpasang sesuai program.</p>
            <p className="mt-2 font-semibold text-gray-800">Cara menyambungkan dengan Nodemcu ESP8266:</p>
            <ul>
                <li>- VCC to 3v3</li>
                <li>- GND to GND</li>
                <li>- In to D4</li>
            </ul>
        </div>
    )
}