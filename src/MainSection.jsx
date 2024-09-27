import React from 'react'
import FifthPart from "../src/components/FifthPart"
import ForthPart from "../src/components/ForthPart"
import HeroSection from "../src/components/HeroSection"
import SecondPart from "../src/components/SecondPart"
import SixthPart from "../src/components/SixthPart"
import ThirdPart from "../src/components/ThirdPart"
import Navbar from '../src/components/Navbar'
const MainSection = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <SecondPart />
            <ThirdPart />
            <ForthPart />
            <FifthPart />
            <SixthPart />
        </div>
    )
}

export default MainSection
