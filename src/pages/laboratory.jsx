import "./page.css"
import avatar from "../assets/images/profile.png";
export default function Laboratory(){
    return (
        <div className="page">
            <section className="laboratory">
                <div className="author-info">
                    <div className="page-title">
                        魔女的实验室
                    </div>
                    <img src={avatar} alt="" className="laboratory-avatar" />
                </div>
            </section>
        </div>
    )
}