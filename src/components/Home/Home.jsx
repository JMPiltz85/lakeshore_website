import { Link } from 'react-router-dom';
import welcomePDF from "../../documents/Move_In_Information.pdf"
import frontPic from "../../images/pictures/Lakeshore_Gardens_Front.jpg"
import "./Home.css"

export default function Home(){


    return(

        <main>

            

            <div className='outerBox'>

                <div className='topBox'>
                    <span className="topHeader">Welcome to Lakeshore Gardens Co-op!</span>
                </div>

                <div className="imgSection">
                    <img src={frontPic} loading="lazy" decoding="async"
                        alt="LakeShore Gardens" className='homeImg'/>

                </div>

                <div className='memberSection'>

                    <div className='header'>Members Section</div>

                    <table className='linkTable'>
                        <tbody>
                            <tr>
                                <td> <a href = {welcomePDF} target = "_blank" rel="noreferrer">Welcome Letter</a> </td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="workorder">Work Order</Link>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <Link to="incidentreport">Incident Report</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>

    )

}