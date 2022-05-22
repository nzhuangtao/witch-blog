import "./page.css"
import Banner from "../components/banner/banner";
import Blog from "../components/blog/blog";
import Bookcase from "../components/bookcase/bookcase";

import { useEffect } from "react";

export default function Home() {
    
    return (
        <div className="page">
           <section>
               <div className="banner home-banner">

               </div>
           </section>
           <section className="box">
                <ul className="left-bar">
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                </ul>
                <div className="right-bar">

                </div>
           </section>
        </div>
    )
}