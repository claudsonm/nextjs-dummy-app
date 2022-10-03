import type {NextPage} from 'next'
import Head from 'next/head'
import HeroSection from "../components/Sections/HeroSection";
import FeaturesSection from "../components/Sections/FeaturesSection";
import CTASection from "../components/Sections/CTASection";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Dummy Next.js Project</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <HeroSection/>
            <FeaturesSection/>
            <CTASection/>
        </>
    )
}

export default Home
