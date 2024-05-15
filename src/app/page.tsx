'use client'

import Image from "next/image";
import Banner from "@/components/banner";
import { useRef } from 'react';

export default function Home() {
  const scrollToRef = (ref: any) => window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
  const pengertianRef = useRef(null);
  const fungsiRef = useRef(null);
  const toolsRef = useRef(null);
  const workRef = useRef(null);
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
        <p className="text-center">Dari terjemabahan Smart Agriculture memiliki arti agrikultur pintar yang artinya adalah teknologi yang membantu meningkatkan efektifitas dibidang pertanian.</p>
        <p className="text-center">Smart Agriculture sendiri menekankan pada teknologi yang dirancang untuk dapat mendeteksi kelembaban tanah yang nantinya diprogram sebagai patokan untuk menghidupkan pompa air untuk menyiram tanaman tersebut. Selain itu juga dipasangi sensor lain seperti DHT11 untuk mendeteksi berapa suhu dan kelembaban daerah sekitar. Hal tersebut membantu dalam meningkatkan efisiensi penggunaan tenaga konvensional.</p>
      </div>

      {/* Poin Penting */}
      <div className="bg-green-700 py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAalJREFUSEvV1TtoVEEUBuBvhdiJFokPVERsjCBWNhYBIYJoEdBCEBXsTB+wsVd7CztBDdqlE4Mg2mmKNCns1EQRX5BKLATNnDAr19m4matu4TQLu2fO/zj/nO0Y8OkMuL82ABdxPRO6jFs15NoAfMRIbvoJW/87gIFbVONIT03NDCZwDfuL2y8whQf9kGsA3mLnb5q8xL6/Bfixjjd9SdYo+OcAGzCGJ5l5LcBRPMX3puJSwS7M4GB6qXvwATUAO7CEeZxGzG31NAF2Yw7bc/FxRFK6pwRq3j2AWQTBaH4Y70uAOziXFZzHl2K4/QCidFOK8v1E8kQieTOpnywBursmdkzsmvKsBxD1exHRDRXhyC8WRdPhnPl3fwgQFr1BkN1WAoS8M5hG7J1vLS3aiHs4lR5f2H2hBIjULGQvn+EsXlUuoFgjQfAQljGaE9jzh3MSd7ElxzP2zG08T6oWG2DxVsLvI5npeP7tc3bh8Vox7X4XQ76SYnYJQ5UKvqb53cDVrODntX6rYnOO3LH8uTq0xnmds/8ID9eIdc9DqyTbrqxm2bXrWFSvAPKETRmSlguPAAAAAElFTkSuQmCC" alt="Ilustrasi" className="mb-4"/>
              <h3 className="text-xl font-bold mb-2">Fungsi Smart Agriculture</h3>
              <button className="bg-green-700 transition hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={() => scrollToRef(fungsiRef)}>Eksplor Fungsi</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAiJJREFUSEu11UuoT1EUBvDfFSIDSqEMzJQyFnmmMJOBMkEhbxIpj8g1kFck7/KYmKAMFIVEGImSgVeMpCgDDIXYq/a57U7/e8///nVXncnZ+3zfWt+31jpdBji6BhhffwgGYzXmYBIm4h1e4xEu4nc94XYJJuAWJvdR8Spc7oRgNF5iPL7hBO5jOo5kwN042Iq8qYJBeIhZSZZrWIfvWI+zvYAvzXd/xXkTwRJcxeP0zMUfrCik2IMDReYrcQmLcaMdgidJjhmYl2UZh48JdAjiLCqroiS+guXtEPzAiAz4NyMtzNlFV4UfWxNplXlF9jVJOKaJIABCx58YVjNwPm7m9w+yfHHlMHbku0Pj+yYPvmBs7vn3NZKZuJtAhyOq24hn+elJvokgOigGKz6uuqbkmYY72JbNPZQreJreT22SaDNOZrQwLIxrFaNy68acfMiyRRuf74sgjDue0TYkmc417KyYl2jLRXieOy+8azkHYVKUGlEH34KRqT3D2JAhJJ6d5mMvwpNPmILPVUJ1D/alg+58uCathwtF5ptwqo9KbmNZXic910qCGKgYnog6eJh4LJ+9zV0VnfMKb3Cv1aKrSxSmrMX19FGsiCpKyWKhxWJrO8oKQsPYORHVdtyeJvlofhfS7W8bOV+se7CzWLvlhO4qjO8XR6tBix4+U3RYzMPpfqEWl3ub5AVpDcSUvsg7p1P8xv9Bx8C9zcF/A9YB/gHj5GUZGP+85QAAAABJRU5ErkJggg==" alt="Ilustrasi" className="mb-4"/>
              <h3 className="text-xl font-bold mb-2">Alat dan Bahan</h3>
              <button className="bg-green-700 transition hover:bg-green-800 text-white font-bold py-2 px-4 rounded">Eksplor Alat & Bahan</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALRJREFUSEvtlbENgzAQRZ+nSBcJUYRtWCYNGyQLMUiadBF02SIIZEvG4syBASkSlNz5v/P3xxh2fszO+mgAJfAAimCYN3AH6tiQGsAXuAgiHyBPBfysQDiM9H7E0+zgBMwGtQWuQlcDZKmH3Mf0CdwCoRdQbRFTX1eVHH+BJkX/B3A2zJ6+0DByZcqiwwAxuLqmbrR2xFI0WTscEPrvD7CqJl3BLiAnQPVPXvvBDeuW3kWLYR0a2ywZdIyBpQAAAABJRU5ErkJggg==" alt="Ilustrasi" className="mb-4"/>
              <h3 className="text-xl font-bold mb-2">Cara Kerja</h3>
              <button className="bg-green-700 transition hover:bg-green-800 text-white font-bold py-2 px-4 rounded">Eksplor Cara Kerja</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
