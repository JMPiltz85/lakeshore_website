import { Link } from 'react-router-dom';
import welcomePDF from "../../documents/Move_In_Information.pdf"

export default function Home(props){

    console.log(props.link )

    return(

        <main>

            <h1>Welcome to Lakeshore Gardens Co-op!</h1>


            <h2>Members Section</h2>
            <ul>
                <li>
                    <a href = {welcomePDF} target = "_blank" rel="noreferrer">Welcome Letter</a>
                </li>
                <li>
                     <Link to={props.link }>Work Order</Link>
                </li>
                
            </ul>
        </main>

    )

}