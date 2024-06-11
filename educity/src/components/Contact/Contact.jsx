import { useState } from "react";
import "./Contact.css"

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "f9b93038-53b3-4a14-9365-56ac9468b794");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className="contact">
        <div className="contact-call">
            <div className="msg">
                <h3>Send us a Message</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eos, 
                    porro beatae similique quod in inventore, vero impedit voluptatibus voluptas 
                    possimus repellat, quae est amet velit fuga dicta alias molestias.</p>

                <ul>
                    <li>varshan@karunya.edu.in</li>
                    <li>85485362955</li>
                    <li>Coimbatore</li>
                </ul>
                </div>
        </div>

        <div className="contact-call">
            <form onSubmit={onSubmit}>
                <label htmlFor="">Your name</label>
                <input type="text"  name="name" placeholder="Enter your name" required /><br />
                <label htmlFor="">Phone number</label>
                <input type="tel" name="phone" placeholder="Enter your Mobile number"/><br />
                <label htmlFor="">Write your message here</label>
                <input type="text" name="message" placeholder="Enter you message" required /><br />

                <button type="submit" className="btn1" >Submit</button>

            </form>

            <span>{result}</span>

        </div>
    </div>
  )
}
