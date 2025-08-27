import "./UnitSample.css"
import pic1 from "../../images/pictures/IMG_3485.jpg"
import pic2 from "../../images/pictures/IMG_3486.jpg"
import pic3 from "../../images/pictures/IMG_3487.jpg"
import pic4 from "../../images/pictures/IMG_3490.jpg"
import pic5 from "../../images/pictures/IMG_3491.jpg"
import pic6 from "../../images/pictures/IMG_3494.jpg"

export default function UnitSample(){

    return (
        <main>
            


            <div className='outerBox'>
                <h1>Unit Sample</h1>

                <div className="sampleInnerBox">

                    <div>
                        <img alt="pic1" loading="lazy" src={pic1} className="picDimension" />
                        <img alt="pic2" loading="lazy" src={pic2} className="picDimension" />
                        <img alt="pic3" loading="lazy" src={pic3} className="picDimension" />
                        <img alt="pic4" loading="lazy" src={pic4} className="picDimension" />
                        <img alt="pic5" loading="lazy" src={pic5} className="picDimension" />
                        <img alt="pic6" loading="lazy" src={pic6} className="picDimension" />
                    </div>

                </div>
                
            </div>

        </main>


    )

}