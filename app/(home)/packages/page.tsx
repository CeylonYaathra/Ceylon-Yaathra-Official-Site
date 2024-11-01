import HeroCarousel from '@/components/HeroCarousel'
import React from 'react'

export default function PackagesPage() {
  return (
    <main>
      <HeroCarousel
        className="text-center"
        title={<>SRI LANKA TOURS</>}
        titleMini={<>Tour Packages</>}
        subTitle={
          <>Feel free to contact us and turn your dream tour into reality!</>
        }
      ></HeroCarousel>
    </main>
  )
}
