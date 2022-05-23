import { Link } from "react-router-dom"
import "./blog.css"
import preview from "../../assets/images/img_gothic.png";
export default function Blog() {
    return (
        <li className="blog">    
            <img src={preview} alt="" className="preview"/>
            <div className="blog-info">
                <h2 className="blog-title">文章的标题</h2>
                <div className="blog-brief">
                    <p className="brief-title">简要</p>
                    <p className="brief-content">
                        现如今，要说比较火的编程语言当属 JavaScript 和 Python 了，这两门语言都可以独立编写前端页面、后端服务器、
                        手机 APP、电脑客户端等等，无所不能。不过，不同的编程语言有不同的侧重点。比如 JavaScript 写网页得心应手，
                        Python 处理大数据信手拈来。那么，能不能取两者的优点，构建一个跨平台客户端框架呢？这就有了今天的主角
                    </p>
                </div>
            </div>
        </li>
    )
}