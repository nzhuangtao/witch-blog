import { Link } from "react-router-dom"
import "./nav.css"
export default function Nav(){
    return (
        <div className="nav">
            <ul className="navbar">
                <li className="nav-item">
                    <Link to="/">首页</Link>
                </li>
                <li className="nav-item">
                    <Link to="/tag">分类</Link>
                </li>
                <li className="nav-item">
                    <Link to="/laboratory">实验室</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about">关于</Link>
                </li>
            </ul>
        </div>
    )
}