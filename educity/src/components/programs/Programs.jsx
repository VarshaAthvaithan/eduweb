import "./Programs.css"
import s1 from "../../assets/student1.jpg"
import s2 from "../../assets/student2.jpg"
import s3 from "../../assets/student3.jpg"

export default function Programs() {
  return (
    <div className="programs">
      <div className="program">
        <img src={s1} alt="" />
        <div className="overlay">
           <h4>Graduation degree</h4>
        </div>
      </div>
      <div className="program">
        <img src={s2} alt="" />
        <div className="overlay">
           <h4>PostGraduattion degree</h4>
        </div>
      </div>
      <div className="program">
        <img src={s3} alt="" />
        <div className="overlay">
           <h4>Docterates degree</h4>
        </div>
      </div>
    </div>
  )
}
