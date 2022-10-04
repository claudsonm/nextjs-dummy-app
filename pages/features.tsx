import FeaturesSection from "../components/Sections/FeaturesSection";
import React from "react";
import Head from "next/head";
import TopNavbar from "../components/Sections/TopNavbar";

const Features = () => {
    return (
        <>
            <Head>
                <title>Features - Dummy Next.js Project</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="relative overflow-hidden bg-white">
                <div className="mx-auto max-w-7xl">
                    <TopNavbar/>
                    <FeaturesSection />
                </div>
            </div>
        </>
    )
}

export default Features
