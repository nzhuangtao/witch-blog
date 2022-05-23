import "./home.css"
import BlogList from "../components/blogList/blogList";
import Blog from "../components/blog/blog";
import BookCase from "../components/bookcase/bookcase";
import { useEffect } from "react";
import Pageination from "../components/pageination/pageination";
import Desk from "../components/desk/desk";
export default function Home() {
    
    return (
        <div className="home">
           <section>
               <div className="home-banner">

               </div>
               <div className="home-line">

               </div>
           </section>
           <section className="home-content">
                <BlogList>
                        <Blog />
                        <Blog />
                        <Blog />
                    </BlogList>
                <Pageination 
                    step={2}
                    showNum={10}
                    total={120}>
                    
                </Pageination>
           </section>
        </div>
    )
}