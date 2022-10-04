import type {NextPage} from 'next'
import Head from 'next/head'
import HeroSection, { HeroSectionSiblings } from "../components/Sections/HeroSection";
import FeaturesSection from "../components/Sections/FeaturesSection";
import CTASection from "../components/Sections/CTASection";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Dummy Next.js Project</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="relative overflow-hidden bg-white">
                <div className="mx-auto max-w-7xl">
                    <HeroSection/>
                </div>
                <HeroSectionSiblings />
            </div>
        </>
    )
}

export default Home
