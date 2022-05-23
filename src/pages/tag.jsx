import "./tag.css"
import{ useEffect, useState} from "react";
const tags = [
    'css','js','web安全','canvas','svg','node','mysql','性能调优','webpack','webgl','cocos'
]
export default function Tag(props){
    let [currentTabIndex, setCurrentIndex] = useState(0);
    let [cache,setCache] = useState({});
    let [articles,setArticles] = useState({});
    function changeTab(tabIndex){
        // if(tabIndex === currentTabIndex) return false;

        // let tag = tags[tabIndex];
        // if(cache[tag]) {
        //     let _articles = cache[tag];
        //     setArticles(_articles);
        // } else {
        //     // 请求
            
        //     setCache(cache[tag]);
        //     setArticles(cache[tag]);
           
        // }
    }
    useEffect(()=>{
        console.log('tag组件被渲染');
    });
    function addTabItems(){
        let tabItems = [];
        for(let i=0;i<tags.length;i++){
            tabItems.push(
                <div className="tab-item" key={i} onClick={()=>changeTab(i)}>
                    <span className="tag-name">{tags[i]}</span>
                </div>
            );
        };
        return tabItems;
    }
    return (
        <section className="tag">
            <div className="tabs">
                <div className="tab">
                   {addTabItems()}
                </div>
                <div className="tab-contents">
                    <div className="tab-content">
                        <h2 className="tag-title">
                            
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}