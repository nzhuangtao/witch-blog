import { Link } from "react-router-dom"
import "./blog.css"
import preview from "../../assets/images/pop_trader.jpg";
export default function Blog() {
    return (
        <li className="blog">
            <h2 className="blog-title">
                <Link to="/">文章标题</Link>
            </h2>
            <img src={preview} alt="" className="preview"/>
            <div className="blog-content">
                文章的内容简介，这里随便写点什么
                1.首页banner遇到了问题，没有合适的素材，非常尴尬
                2.昨晚看了剧情，有点被恶心了
                3.书橱没想好怎么展示，而且没办法顺利定位到指定地点
                4.实验室首页确定了，需要做些试剂瓶，古书
                5.关于还没有做，最后一天在做吧
                6.分类方面，也还没想好
                7.争取4天完成，首页与详情
            </div>
        </li>
    )
}