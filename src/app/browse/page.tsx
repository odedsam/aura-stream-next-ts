// import Link from 'next/link'

// type Item = {
//   id: string
//   type: 'movie' | 'show'
//   title: string
// }

// async function fetchItems(): Promise<Item[]> {
//   const res = await fetch('https://api.example.com/items', {
//     next: { revalidate: 60 }, // ISR
//   })
//   return res.json()
// }

// export default async function page() {
//   const items = await fetchItems()

//   return (
//     <main className="p-4 space-y-4">
//       <h1 className="text-2xl font-bold">Browse Movies & Shows</h1>
//       <ul className="space-y-2">
//         {items.map((item) => (
//           <li key={item.id}>
//             <Link
//               href={`/browser/${item.type}s/${item.id}`}
//               className="text-blue-500 hover:underline"
//             >
//               {item.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </main>
//   )
// }


import { sampleMovies } from "@/config/mock";
import { StreamVibeApp } from "../components/sections/AbouSection";
import { HeroSlider } from "../components/sliders/HeroSlider";

export default function page() {
  return (
    <div className="">
      <HeroSlider movies={sampleMovies} />
      <StreamVibeApp />
    </div>
  );
}
