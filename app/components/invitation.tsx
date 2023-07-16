"use client"

import { useState, useEffect } from 'react'
import cn from 'classnames'
// import Image from 'next/image'
// import Link from 'next/link'
// import { Fade } from "react-awesome-reveal";
// import localFont from 'next/font/local'
// import { Titillium_Web } from 'next/font/google'

import styles from '../styles.module.css'

// const titillium_web = Titillium_Web({
//   weight: ['400', '600', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// })
 

// const snellRoundhand = localFont({
//   src: [
//     {
//       path: '../fonts/snell-roundhand/SnellBT-Regular.otf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../fonts/snell-roundhand/SnellRoundhand-BoldScript.otf',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
// })

export default function Invitation() {
  const [open, setOpen] = useState(false);
  const [letter, setLetter] = useState(false);

  let timeout: string | number | NodeJS.Timeout | undefined

  const toggleOpen = () => {
    setOpen(true);
    clearTimeout(timeout)
    if (open) return
    timeout = setTimeout(() => {
      setLetter(true)
    }, 1400)
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      toggleOpen();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={cn(`bg-[url('/bg.png')] bg-cover bg-no-repeat h-screen bg-top`, letter ? 'overflow-auto' : 'overflow-hidden')}>
      {!letter &&
        <div className="flex items-center justify-center w-full h-screen overflow-hidden animate-zoomFadeIn">
          <div className={cn(styles.envelopeWrapper, open ? styles.open : styles.close)}>
            <div className={cn('sm:scale-150', styles.envelope, open ? styles.open : styles.close)}>
              <div className={cn(styles.front, styles.flap)}></div>
              <div className={cn(styles.front, styles.pocket)}></div>
              <div className={styles.letter}>
                <div className={styles.paper} />
              </div>
            </div>
          </div>
        </div>
      }
      {letter &&
        <div className="max-w-[800px] mx-auto animate-slideFadeUp p-4 pt-72">
          <div className="overflow-hidden bg-white">
            <div className="relative flex flex-col p-6 sm:p-10">
                32 AÑOS
                Celebraremos juntos
                de la fidelidad de dios
                pacto•Unidad•Frutos
                reservá las fechas
                Sábado
                19hs.
                Domingo
                18hs.
                ¡Agendá estos días de fiesta y disfrutemos el regalo de ser iglesia!
            </div>
          </div>
        </div>
      }
    </div>
  )
}