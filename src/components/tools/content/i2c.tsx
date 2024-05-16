export default function I2C() {
    return (
        <div className="text-start">
            <h2 className="font-bold text-green-700 text-xl">Modul I2C</h2>
            <p className="mt-1">Modul I2C sendiri adalah modul tambahan untuk LCD 16x2 yang berfungsi mengurangi penggunaan pin kabel jumper agar Nodemcu ESp8266 tidak terpakai semua pin nya. Jika tidak menggunakan Modul I2C adalah berjumlah 16 pin yang termasuk sangat boros dalam penggunaan pin. Jika menggunakan Modul I2C, dapat dikurangi dalam penggunaan pin yang semula 16 menjadi hanya 4 pin saja, jauh perbedaanya.</p>
            <p className="mt-2 font-semibold text-gray-800">Cara menyambungkan dengan LCD:</p>
            <p className="-mt-1">Dapat menyambungkan dengan pin yang tersedia dibelakang LCD</p>
        </div>
    )
}