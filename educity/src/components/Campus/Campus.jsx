import './Campus.css'
import g1 from "../../assets/g1.jpg";
import g2 from "../../assets/g2.jpg";
import g3 from "../../assets/g3.jpg";
import g4 from "../../assets/g4.jpg";


export default function Campus() {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={g1} alt="" height="250px"/>
            <img src={g2} alt="" height="250px"/>
            <img src={g3} alt=""  height="250px"/>
            <img src={g4} alt="" height="250px"/>
        </div>
        <button className='btn1'>See more here </button>
    </div>
  )
}
