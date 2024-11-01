import HeroCarousel from '@/components/HeroCarousel'
import React from 'react'

export default function ContactUsPage() {
  return (
    <main>
      <HeroCarousel
        className="text-center"
        title={<>CONTACT US</>}
        titleMini={<>LET’S KEEP IN TOUCH</>}
        subTitle={
          <>Feel free to contact us and turn your dream tour into reality!</>
        }
      ></HeroCarousel>
    </main>
  )
}
