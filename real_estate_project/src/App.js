import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Property from "./components/Property";
import Feature from "./components/Feature";
import Story from "./components/Story";
import Footer from "./components/Footer";
import Video from "./components/Video";

export default function App() {
    return(
        <div>
            <Header />
            <main>
                <article>
                    <Hero />
                    <Property />
                    <Feature />
                    <Video />
                    <Story />
                </article>
            </main>
            <Footer />
        </div>
    )
}