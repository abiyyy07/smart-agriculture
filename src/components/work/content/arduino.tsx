import Link from "next/link"

import { FaWindows } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";

export default function ArduinoComponents() {
    return (
        <div className="">
            <p className="text-green-700 font-bold text-xl mb-6">Link Arduino IDE</p>
            <div className="flex bg-blue-600 px-3 py-2 font-semibold">
                <p><FaWindows size={40} className="text-white"/></p>
                <p><FaLinux size={40} className="text-white"/></p>
                <a href="https://www.arduino.cc/en/software" target="_blank" className="text-white px-3 py-2 rounded font-semibold">Download</a>
            </div>
        </div>
    )
}