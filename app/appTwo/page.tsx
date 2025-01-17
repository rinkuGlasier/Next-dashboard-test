"use client";
import SliderReact from "@/app/appTwo/Common/components/SliderReact";
import LoginPage from "@/app/appTwo/Common/components/Login";
import Head from "next/head";
import DynamicContent from "@/app/appTwo/Common/components/Dynamiccontent";
import ClientSideContent from "@/app/appTwo/Common/components/FatchingData";
import VideoAdd from "@/app/appTwo/Common/components/Vide";
import Header from "./Common/components/Header";
import FaqFunction from "./Common/components/Faq";
import BlogPage from "./Common/components/Blog";

export default function Home() {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Header />
            {/* <FormPage /> */}
            <VideoAdd />
            <ClientSideContent />
            <LoginPage />
            <FaqFunction />
            <BlogPage />
            <SliderReact />
            <div>
                <Head>
                    <title>Dynamic Content with Next.js</title>
                    <meta
                        name="description"
                        content="Create dynamic content in Next.js"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <h1>Dynamic Content Example</h1>
                    <DynamicContent />
                </main>
            </div>
        </div>
    );
}
