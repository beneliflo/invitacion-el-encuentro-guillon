"use client"

import { useState, useEffect } from 'react'
import cn from 'classnames'
import localFont from 'next/font/local'

import styles from '../styles.module.css'
 

const corporateACondPro = localFont({
  src: [
    {
      path: '../fonts/corporate-a-pro/CorporateACondPro-Light.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/corporate-a-pro/CorporateACondPro-Bold.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
})

const sherika = localFont({
  src: [
    {
      path: '../fonts/sherika/Sherika-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/sherika/Sherika-Medium.otf',
      weight: '500',
      style: 'normal',
    },
  ],
})

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
    }, 1200)
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      toggleOpen();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={cn(`bg-[url('/bg.png')] bg-contain lg:bg-cover bg-no-repeat h-screen bg-top`, letter ? 'overflow-auto' : 'overflow-hidden')}>
      {!letter &&
        <div className="flex items-center justify-center w-full h-screen overflow-hidden animate-zoomFadeIn font">
          <div className={cn(styles.envelopeWrapper, open ? styles.open : styles.close)}>
            <div className={cn('sm:scale-150', styles.envelope, open ? styles.open : styles.close)}>
              <div className={cn(styles.front, styles.flap)}></div>
              <div className={cn(styles.front, styles.pocket)}></div>
              <div className={styles.letter}>
                <div className={cn(styles.words, styles.line1)}></div>
                <div className={cn(styles.words, styles.line2)}></div>
                <div className={cn(styles.words, styles.line3)}></div>
                <div className={cn(styles.words, styles.line4)}></div>
              </div>
            </div>
          </div>
        </div>
      }
      {letter &&
        <div className="max-w-[832px] mx-auto animate-slideFadeUp p-4 pt-20 md:pt-40 lg:pt-[227px]">
          <div className="overflow-hidden bg-white rounded-lg">
            <div className="relative flex flex-col">
              <div className="bg-[url('/bg-top.png')] bg-contain bg-no-repeat bg-top text-center pt-14 sm:pt-[150px] pb-8 sm:pb-20">
                <p className={cn(sherika.className, 'uppercase font-medium text-xs sm:text-2xl bg-[#C7FD01] p-1 sm:p-[10px] w-max mx-auto tracking-wider sm:-mb-1')}>Celebremos juntos</p>
                <h2 className={cn(corporateACondPro.className, 'uppercase font-medium text-7xl sm:text-[180px] leading-none text-center')}>32 AÑOS</h2>
                <p className={cn(sherika.className, 'uppercase font-normal text-base sm:text-[40px] sm:leading-snug tracking-wider -mt-1 sm:-mt-4')}>de la fidelidad de dios</p>
              </div>
              <div className="bg-[url('/bg-sky.png')] bg-cover bg-no-repeat text-center font-">
                <p className={cn(corporateACondPro.className, 'font-extralight text-5xl sm:text-7xl md:text-8xl lg:text-[105px] leading-snug tracking-tight')}>Pacto•Unidad•Frutos</p>
              </div>
              <div className="px-9 sm:px-20 bg-[url('/bg-bottom.png')] bg-contain bg-no-repeat bg-bottom pb-28 sm:pb-[280px] pt-11 sm:pt-[100px]">
                <p className={cn(sherika.className, 'uppercase font-medium text-xs sm:text-2xl bg-[#C7FD01] p-1 sm:p-[10px] w-max tracking-wider')}>reservá las fechas</p>
                <h2 className="flex justify-between items-end border-b sm:border-b-2 border-black mt-4 sm:mt-10"><span className={cn(corporateACondPro.className, 'font-medium text-4xl sm:text-7xl md:text-8xl')}>Sábado</span><span className={cn(sherika.className, 'uppercase font-normal text-2xl sm:text-5xl md:text-[52px] leading-none sm:leading-[58px] tracking-wider')}>19hs.</span></h2>
                <h2 className="flex justify-between items-end border-b sm:border-b-2 border-black mt-6 sm:mt-10"><span className={cn(corporateACondPro.className, 'font-medium text-4xl sm:text-7xl md:text-8xl')}>Domingo</span><span className={cn(sherika.className, 'uppercase font-normal text-2xl sm:text-5xl md:text-[52px] leading-none sm:leading-[58px] tracking-wider')}>18hs.</span></h2>
                <p className={cn(sherika.className, 'text-center font-normal text-lg sm:text-4xl md:text-[40px] sm:leading-snug mt-8 sm:mt-20')}>¡Agendá estos días de fiesta y disfrutemos el regalo de ser iglesia!</p>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
