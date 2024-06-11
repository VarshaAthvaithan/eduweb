import "./Testimonials.css"
import back from "../../assets/back.png"
import next from "../../assets/next.png"
import g1 from "../../assets/g1.jpg";
import g2 from "../../assets/g2.jpg";
import g3 from "../../assets/g3.jpg";
import g4 from "../../assets/g4.jpg";


export default function Testimonials() {

  function forward(){

  }

  function backward(){
    
  }
  return (
    <div className="test">
      <img src={back} alt=""  className="back-btn"  onClick={forward}/>
      <img src= {next} alt="" className="next-btn" onClick={backward} />
        <div className="slider">
             <ul>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={g1} alt="" width="300px" height="300px"/>
                    <div>
                      <h3>Krishna</h3>
                      <span>Tirupathi</span>
                    </div>
                  </div>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Illum officiis atque porro aliquid 
                    maiores eos, tempore minus itaque laudantium eveniet.</p>
                </div>
             </li>



             <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={g4} alt="" width="300px" height="300px" />
                    <div>
                      <h3>Krishna</h3>
                      <span>Tirupathi</span>
                    </div>
                  </div>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Illum officiis atque porro aliquid 
                    maiores eos, tempore minus itaque laudantium eveniet.</p>
                </div>
             </li>



             <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={g2} alt="" width="300px" height="300px"/>
                    <div>
                      <h3>Krishna</h3>
                      <span>Tirupathi</span>
                    </div>
                  </div>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Illum officiis atque porro aliquid 
                    maiores eos, tempore minus itaque laudantium eveniet.</p>
                </div>
             </li>



             <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={g3} alt="" width="300px" height="300px"/>
                    <div>
                      <h3>Krishna</h3>
                      <span>Tirupathi</span>
                    </div>
                  </div>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Illum officiis atque porro aliquid 
                    maiores eos, tempore minus itaque laudantium eveniet.</p>
                </div>
             </li>


             </ul>
        </div>
    </div>
  )
}
