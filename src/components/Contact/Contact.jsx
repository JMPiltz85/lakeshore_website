import phone_logo from "../../images/phone_icon.png"
import email_logo from "../../images/email_icon.png"
import  "./Contact.css"

export default function Contact(){

    return(

        <main>

            <div className="outerBox">

                <h1>Contact Us</h1>

                <div className="contractHeader">Lakeshore Gardens Co-operative Homes Inc.</div>

                <table className="contractTable">
                    <tbody>
                        <tr>
                            <td className="leftCell"> Manager:  </td>
                            <td> Anna Tirca</td>
                        </tr>
                        <tr>
                            <td className="leftCell">
                                Address: 
                            </td>
                            <td>
                                10 Garnett Janes Rd
                                <div>Toronto, ON </div>
                                <div>M8V 3Z2 </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="leftCell"> Office Phone: </td>
                            <td>
                                <a href="tel:+14162556660" >
                                    <img src={phone_logo} alt="Call (416) 255-6660" className="icon" />
                                    (416) 255-6660
                                </a>

                            </td>
                        </tr>
                        <tr>
                            <td className="leftCell">Email: </td>
                            <td>

                                <a href="mailto:manager.lakeshore@rogers.com" >
                                    <img src={email_logo} alt="Email Us" className="icon" />
                                    manager.lakeshore@rogers.com
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="leftCell">Office Hours:</td>
                            <td>
                                Monday-Thursday
                                <div> Open 9:00 AM - 12:00 PM </div>
                                <div>Closed 12:00PM - 1:00 PM </div>
                                <div>Open 1:00 PM - 3:00 PM </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </main>

    )

}