import Head from 'next/head'
import { useState, useEffect } from 'react';
import css from '@/styles/home.module.css';
import TopNavbar from '@/components/page-elements/TopNavbar';
import Hero from '@/components/page-elements/Hero';
import About from '@/components/page-elements/About';
import Navbar from '@/components/page-elements/Navbar';
import Contact from '@/components/page-elements/Contact';
import Footer from '@/components/page-elements/Footer';

export default function Home() {
    const [theme, setTheme] = useState<string | null>("dark");

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    useEffect(() => {
        const existingTheme = localStorage.getItem("theme");
        setTheme(existingTheme ? existingTheme : "dark");
    }, [])

    return (
        <div >
            <Head>
                <title>aguythatcodes | Frontend Developer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div data-theme={theme} className={css.container}>
                <Navbar theme={theme} />
                <TopNavbar theme={theme} toggleTheme={toggleTheme} />
                <Hero theme={theme} />
                <About theme={theme} />
                <Contact />
                <Footer />
            </div>

        </div>
    )
}
