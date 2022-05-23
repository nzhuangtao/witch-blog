import "./tag.css"
import{ useState} from "react";
import tag1 from "../assets/images/pop_trader.jpg";
const tags = [
    'css','js','web安全','canvas','svg','node','mysql','性能调优','webpack','webgl','cocos'
]
export default function Tag(){
    let [currentTabIndex, setCurrentIndex] = useState(0);
    let createTabItem = ()=>{
        let items = [];
        for(let i=0;i<tags.length;i++){
            items.push(
                <div 
                    style={{animationDelay:i*0.2+'s'}}
                    className={"tab-item "+(currentTabIndex===i?'active':"")} 
                    key={i} 
                    onClick={()=>handleTabClick(i)}>
                    {tags[i]}
                </div>
            )
        }
        return items;
    };
    function  createTabContent(params) {
        let items = [];
        for(let i=0;i<tags.length;i++){
            items.push(
                (
                    <div className={"tab-content "+(currentTabIndex==i?'tab-content--active':'')} key={i}>
                        <div>JavaScript类型总共有</div>
                        <ul>
                            <li 
                                
                                className="tag-blog-title">{tags[i]}</li>
                            <li className="tag-blog-title">{tags[i]}</li>
                            <li className="tag-blog-title">{tags[i]}</li>
                            <li className="tag-blog-title">{tags[i]}</li>
                            <li className="tag-blog-title">{tags[i]}</li>
                            <li className="tag-blog-title">{tags[i]}</li>
                            <li className="tag-blog-title">{tags[i]}</li>
                            <li className="tag-blog-title">{tags[i]}</li>
                        </ul>
                    </div>
                )
            )
        }
        return items;
    };
    let handleTabClick = (tabIndex)=>{
        setCurrentIndex(tabIndex);
    }
    return (
        <section className="tag">
            <div className="head"></div>
            <div className="tabs">
                <div className="tab">
                   {
                       createTabItem()
                   }
                </div>
                <div className="tab-contents">
                   {
                       createTabContent()
                   }
                </div>
            </div>
        </section>
    )
}