// Basic code
// import React from 'react'
// import waitlistBg from '../../assets/waitlist_bg.webp'
// import { Outfit } from 'next/font/google'


// const outfitFont = Outfit({
//   variable: '--font-outfit',
//   subsets: ["latin"],
// })

// const Waitlist = () => {
//   return (
//     <div
//       className="relative flex flex-col items-center justify-center py-[2.3rem] gap-[1rem] overflow-hidden bg-cover bg-center"
//       style={{ backgroundImage: `url(${waitlistBg.src})` }}
//     >

//       <div
//         className="absolute inset-0 z-0 pointer-events-none"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 0.1px),
//             linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 0.1px)
//           `,
//           backgroundSize: '40px 40px',
//           WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, black 10%, transparent 100%)',
//           maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, black 10%, transparent 100%)'
//         }}
//       />

//       <div className="z-10 px-5 text-center">
//         <p className={`text-white text-[2.8rem] font-semibold ${outfitFont.className}`}>
//           Join the Waitlist—Your Distraction-Free Prep Starts Here
//         </p>
//         <p className={`text-[#979797] text-[2.1rem] ${outfitFont.className}`}>
//           We&apos;ll mail you an invite-only link to have early access for our app.
//         </p>
//         <div className='flex items-center justify-center'>

//           <div className="relative mt-[2rem] w-[51rem]">
//             <input
//               className={`bg-transparent backdrop-blur-xs border-1 w-full h-[4rem] rounded-[1rem] placeholder-[#ABB7C2] pl-[2rem] pr-[8rem] ${outfitFont.className} focus:outline-none caret-white text-whit`} placeholder="Enter your E-mail address" />

//             <button
//               className="group absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-b from-purple-500 to-blue-700 text-white px-6 py-2 rounded-[1.2rem] min-w-[8rem] overflow-hidden transition-all focus:outline-none">
//               <span className="relative flex items-center justify-center h-full">
//                 <span
//                   className="transition-opacity duration-300 opacity-100 group-hover:opacity-0">
//                   Register
//                 </span>

//                 <span
//                   className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-3xl">
//                   &rarr;
//                 </span>
//               </span>
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Waitlist













// TO DO:
'use client'

import React, { useEffect, useState } from 'react'
import waitlistBg from '../../assets/waitlist_bg.webp'
import { Outfit } from 'next/font/google'
import { useRouter, useSearchParams } from 'next/navigation'

const outfitFont = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
})

export default function Waitlist() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const incomingEmail = searchParams.get('email') || ''
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (incomingEmail) {
      setEmail(incomingEmail)
    }
  }, [incomingEmail])

  const handleJoinWaitlist = () => {
    router.push(`/waitlist?email=${encodeURIComponent(email)}`)
  }

  return (
    <div
      className="relative flex flex-col items-center justify-center py-[2.3rem] gap-[1rem] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${waitlistBg.src})` }}
    >

      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 0.1px),
            linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 0.1px)
          `,
          backgroundSize: '40px 40px',
          WebkitMaskImage:
            'radial-gradient(ellipse 50% 50% at 50% 50%, black 10%, transparent 100%)',
          maskImage:
            'radial-gradient(ellipse 50% 50% at 50% 50%, black 10%, transparent 100%)',
        }}
      />

      <div className="z-10 px-5 text-center">
        <p className={`text-white text-[0.9rem] sm:text-[3rem] font-semibold ${outfitFont.className}`}>
          Join the Waitlist—Your Distraction-Free Prep Starts Here
        </p>
        <p className={`text-[#979797] text-[0.85rem] sm:text-[2rem] ${outfitFont.className}`}>
          We&apos;ll mail you an invite-only link to have early access for our app.
        </p>

        <div className="flex items-center justify-center">
          <div className="relative mt-[2rem] w-100 sm:w-[51rem]">
            <input
              id="waitlist-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`bg-transparent backdrop-blur-xs border border-white/20 w-full h-[4rem] rounded-[1rem] placeholder-[#ABB7C2] pl-[2rem] pr-[8rem] ${outfitFont.className} focus:outline-none caret-white text-white`} placeholder="Enter your E‑mail address" />

            <button
              onClick={handleJoinWaitlist}
              className="group absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-b from-purple-500 to-blue-700 text-white px-6 py-2 rounded-[1.2rem] min-w-[8rem] overflow-hidden transition-all focus:outline-none" >
              <span className="relative flex items-center justify-center h-full">
                <span className="transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                  Register
                </span>
                <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-3xl">
                  &rarr;
                </span>
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}