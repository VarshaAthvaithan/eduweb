import "./About.css"
import about  from "../../assets/about.jpg"
import play from "../../assets/play-button.png"


export default function About() {
  return (
    <div className="about">
        <div className="about-left">
                <img src={about}alt="" className="about-img" />
                <img src={play} alt="" className="play-icon" />
        </div>
        <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Ratione iusto vero omnis libero laudantium? Minus corrupti velit sequi. 
                    Repudiandae, totam magni ipsam est rem vitae!</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Ratione iusto vero omnis libero laudantium? Minus corrupti velit sequi. 
                    Repudiandae, totam magni ipsam est rem vitae!</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Ratione iusto vero omnis libero laudantium? Minus corrupti velit sequi. 
                    Repudiandae, totam magni ipsam est rem vitae!</p>
        </div>
    </div>
  )
}
