import Image from 'next/image'; 
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

export default function MemberComponents() {
    const anggota = [
        {
          nama: 'Abiyan Mirza I.A',
          instagram: 'https://www.instagram.com/abiyanm_?igsh=aHJ0cWdqcmZqY2l2',
          username: '@abiyanm_',
        },
        {
          nama: 'Damar Wulan D.',
          instagram: 'https://www.instagram.com/mr.dhsba?igsh=MW1lM3N4dWtkejZyYg==',
          username: '@mr.dhsba',
        },
        {
          nama: 'Fahrel Alridho S.',
          instagram: 'https://www.instagram.com/fahrrelalridho?igsh=cnNrMnE2aHd2MXc0',
          username: '@fahrrelalridho',
        },
        {
          nama: 'Justin Michael L.',
          instagram: 'https://www.instagram.com/fanglumin?igsh=aXgwczlvdmo4Ynhh',
          username: '@fanglumin',
        },
        {
          nama: 'Miky Alvin R.',
          instagram: 'https://www.instagram.com/mikyalvnnn?igsh=MTc1MDk1OHN2cTNheA==',
          username: '@mikyalvnnn',
        },
        {
          nama: 'Radityo Prahmana P.',
          instagram: 'https://www.instagram.com/radityoo._?igsh=bzNjYmRzcjhjbmsz',
          username: '@radityoo._',
        },
      ];
    
      return (
        <div className="container mx-auto mt-12 mb-6">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-8">Anggota Kelompok</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {anggota.map((anggota, index) => (
              <div key={index} className="bg-green-700 p-6 rounded-lg shadow-lg flex flex-col items-center">
                <h3 className="text-xl font-bold text-center mb-2 text-white">{anggota.nama}</h3>
                <a href={anggota.instagram} target='_blank' className="text-gray-100 hover:underline flex items-center">
                  <FaInstagram className="mr-2" />
                  {anggota.username}
                </a>
              </div>
            ))}
          </div>
        </div>
    )
}