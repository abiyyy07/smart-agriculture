'use client'

import Image from "next/image";
import Banner from "@/components/banner";
import { useRef } from 'react';
import { FaTools, FaSeedling, FaRegLightbulb, FaWater } from "react-icons/fa";
import { GiFarmer } from "react-icons/gi";
import { RiFlowChart } from "react-icons/ri";
import { HiMiniUserGroup } from "react-icons/hi2";

import FungsiComponent from "@/components/fungsi/fungsi";
import ToolsComponents from "@/components/tools/tools";
import WorkLayout from "@/components/work/page";
import MemberComponents from "@/components/member/page";

export default function Home() {
  const scrollToRef = (ref: any) => window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
  const pengertianRef = useRef(null);
  const informasiRef = useRef(null);
  const fungsiRef = useRef(null);
  const toolsRef = useRef(null);
  const workRef = useRef(null);
  const memberRef = useRef(null);
  return (
    <main>

      {/* Banner */}
      <div className="relative">
        <div className="relative w-full h-[600px]">
          <Image
            src="/banner_landing.jpg"
            alt="Banner"
            layout="fill"
            objectFit="cover"
            className="filter brightness-50"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
              SMART AGRICULTURE
            </h1>
            <button
              onClick={() => scrollToRef(pengertianRef)}
              className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mt-4 transition"
            >
              APA ITU SMART AGRICULTURE?
            </button>
          </div>
        </div>
      </div>

      {/* Pengertian */}
      <div ref={pengertianRef} className="p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Apa itu Smart Agriculture?</h2>
        <p className="text-center">Dari terjemahan Smart Agriculture memiliki arti agrikultur pintar yang artinya adalah teknologi yang membantu meningkatkan efektifitas dibidang pertanian.</p>
        <p className="text-center">Smart Agriculture sendiri menekankan pada teknologi yang dirancang untuk dapat mendeteksi kelembaban tanah yang nantinya diprogram sebagai patokan untuk menghidupkan pompa air untuk menyiram tanaman tersebut. Selain itu juga dipasangi sensor lain seperti DHT11 untuk mendeteksi berapa suhu dan kelembaban daerah sekitar. Hal tersebut membantu dalam meningkatkan efisiensi penggunaan tenaga konvensional.</p>
      </div>

      {/* Poin Penting */}
      <div className="bg-green-700 py-8" ref={informasiRef}>
        <div className="text-center mb-4">
          <h3 className="font-semibold text-2xl text-white">Semua Informasi Yang Akan Didapat</h3>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
              <GiFarmer size={40} className="mb-2"/>
              <h3 className="text-xl font-bold mb-2">Fungsi Smart Agriculture</h3>
              <button className="bg-green-700 transition hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={() => scrollToRef(fungsiRef)}>Eksplor Fungsi</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
              <FaTools size={40} className="mb-2"/>
              <h3 className="text-xl font-bold mb-2">Alat dan Bahan</h3>
              <button className="bg-green-700 transition hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={() => scrollToRef(toolsRef)}>Eksplor Alat & Bahan</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
              <RiFlowChart size={40} className="mb-2"/>
              <h3 className="text-xl font-bold mb-2">Cara Kerja</h3>
              <button className="bg-green-700 transition hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={() => scrollToRef(workRef)}>Eksplor Cara Kerja</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
              <HiMiniUserGroup size={40} className="mb-2"/>
              <h3 className="text-xl font-bold mb-2">Profile Kelompok</h3>
              <button className="bg-green-700 transition hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={() => scrollToRef(memberRef)}>Eksplor Profil</button>
            </div>
          </div>
        </div>
      </div>

      {/* Fungsi Smart Agriculture */}
      <div className="" ref={fungsiRef}>
        <FungsiComponent />
      </div>

      {/* Alat dan Bahan */}
      <div className="" ref={toolsRef}>
        <ToolsComponents />
      </div>

      {/* Cara Kerja */}
      <div className="" ref={workRef}>
        <WorkLayout />
      </div>

      {/* Anggota */}
      <div className="" ref={memberRef}>
        <MemberComponents />
      </div>
    </main>
  );
}
