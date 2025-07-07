import phone_logo from "../../images/phone_icon.png"
import  "./Contact.css"

export default function Contact(){

    return(

        <main>

            <h1>Contact</h1>
            
            <div className="contactBox">
                <div className="itemHeader">Address:  </div>
                <div className="item">10 Garnett Janes Rd, Toronto, ON M8V 3Z2 </div>
                <div className="itemHeader">
                    Office Phone: 
                </div>
                <div className="item">
               
                    <a href="tel:+14162556660" >
                        <img src={phone_logo} alt="Call (416) 255-6660" className="phoneLogo" />
                        (416) 255-6660
                    </a>
                </div>
            </div>
        </main>

    )

}