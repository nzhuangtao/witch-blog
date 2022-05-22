import "./bookcase.css"
import avatar from "../../assets/images/profile.png";
import avatarIcon from "../../assets/images/side-profile.png";
export default function Bookcase(){
    return (
        <div className="bookcase">
            <div className="bookcase-layer">
                <p className="bookcase-title">
                    <img src={avatarIcon} alt="自我介绍" className="side-profile"/>
                    <span>自我介绍</span>
                </p>
                <div className="bookcase-info">
                    <img src={avatar} alt="头像图片" className="avatar"/>
                    <p>
                        25岁的超级切图仔
                    </p>
                </div>
            </div>
            <div className="bookcase-layer">
        
            </div>
            <div className="bookcase-layer">
        
            </div>
        </div>
    )
}