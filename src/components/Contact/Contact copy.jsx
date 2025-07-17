import phone_logo from "../../images/phone_icon.png"
import email_logo from "../../images/email_icon.png"
import  "./Contact.css"

export default function Contact(){

    return(

        <main>

            <h1>Contact Us</h1>

            <h2>Lakeshore Gardens Co-operative Homes Inc.</h2>



            <div className="outerBox">

            
                <div className="contactBox">

                    <div className="itemHeader">
                        Manager: 
                    </div>

                    <div className="item">
                        Anna Tirca
                    </div>
                                      
                    <div className="itemHeader">
                        <div>Address: </div>  
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                    </div>
                    <div className="item">
                        
                        <div>10 Garnett Janes Rd</div> 
                        <div>Toronto, ON </div>
                        <div>M8V 3Z2 </div> 

                    </div>
                    <div className="itemHeader">
                        Office Phone: 
                    </div>
                    <div className="item">
                
                        <a href="tel:+14162556660" >
                            <img src={phone_logo} alt="Call (416) 255-6660" className="icon" />
                            (416) 255-6660
                        </a>
                        
                    </div>

                    <div className="itemHeader">
                        Email: 
                    </div>
                    <div className="item">
                        <a href="mailto:manager.lakeshore@rogers.com" >
                            <img src={email_logo} alt="Email Us" className="icon" />
                            manager.lakeshore@rogers.com
                        </a>
                    </div>

                    <div className="itemHeader">
                        <div>Office Hours: </div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                    </div>
                    <div className="item">
                        
                        <span>Monday-Thursday</span>
                        <div>Open 9:00 AM - 12:00 PM</div>
                        <div>Closed 12:00PM - 1:00 PM</div>
                        <div>Open 1:00 PM - 3:00 PM</div>

                    </div>

                </div>

            </div>
        </main>

    )

}