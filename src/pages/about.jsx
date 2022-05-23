import "./about.css"
import avatar from "../assets/images/profile.png";
import moon from "../assets/icons/moon.svg";
import star from "../assets/icons/star.svg";
export default function About(){
    return (
        <main className="about">
            <section className="about-banner">
            <div className="line top-line"></div>

                <div className="author-info">
                    <div className="section-title">
                        这里是关于我的一些信息
                    </div>
                    <img src={avatar} alt="头像" className="avatar"/>
                    <p className="author-name">
                        <span>nzhuangtao</span>
                    </p>
                </div>
                <div className="line bottom-line"></div>
            </section>
            <section className="author-base-info">
                <h3 className="section-title">基本信息</h3>
                <table className="">
                    <tr>
                        <td>性别</td>
                        <td>男</td>
                    </tr>
                    <tr>
                        <td>籍贯</td>
                        <td>广东省</td>
                    </tr>
                    <tr>
                        <td>技术上的追求</td>
                        <td>
                            颜值即是正义
                        </td>
                    </tr>
                    <tr>
                        <td>近期目标</td>
                        <td>
                            <ul>
                                <li>找到一份新工作</li>
                                <li>希望有些不错的同事</li>
                                <li>填完组件库的坑</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>喜好技术</td>
                        <td>
                            <p>JavaScript，css,html5canvas,webpack,gulp...</p>
                        </td>
                    </tr>
                    <tr>
                        <td>工作经历</td>
                        <td>
                            <p>广东世纪丰源设备制造饮水有限公司</p>
                            <p>
                                呆了快两年了，毕业后就一直呆在这，技术也很久没长进过了，
                                急切需要换个团队了。
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>开源</td>
                        <td>
                            <p>组件库的坑还没填完。。。</p>
                        </td>
                    </tr>
                </table>
            </section>
            
        </main>
    )
}