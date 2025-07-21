import React, { useState } from 'react';
import axios from 'axios';
import "./IncidentReport.css"
import LoadSpinner from '../LoadSpinner/LoadSpinner';
import tipsPDF from "../../documents/Incident_Reports_Tips.pdf"

export default function IncidentReport(){


    const [formData, setFormData] = useState({
                name: '',
                unitNum:'',
                phone:'',
                incidentDate:'',
                incidentTime:'',
                location:'',
                category:'',
                description:'',
                witnesses:'',
                witnessDescription:'',
                injured:'',
                injuredDescription:'',
                treatment:'',
                treatmentDescription:'',
                police:'',
                policeDescription:''

            });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        

        if(name === "witnesses" && value !=='yes'){
            setFormData((prevState) => ({ ...prevState, [name]: value, ['witnessDescription']: '' }));
        }

        else if(name === "injured" && value !=='yes'){
            setFormData((prevState) => ({ ...prevState, [name]: value, ['injuredDescription']: '' }));
        }

        else if(name === "treatment" && value !=='yes'){
            setFormData((prevState) => ({ ...prevState, [name]: value, ['treatmentDescription']: '' }));
        }

        else{
            setFormData((prevState) => ({ ...prevState, [name]: value }));
        }
        
    };

    const clearForm = () =>{

        setFormData(() => ({ 
            name: '',
            unitNum:'',
            phone:'',
            incidentDate:'',
            incidentTime:'',
            location:'',
            category:'',
            description:'',
            witnesses:'',
            witnessDescription:'',
            injured:'',
            injuredDescription:'',
            treatment:'',
            treatmentDescription:'',
            police:'',
            policeDescription:''
        }));
    };

    const handleReportSubmit = async (e) => {
            e.preventDefault(); //stops post back

            const to=process.env.REACT_APP_TO_EMAIL;
            const url=process.env.REACT_APP_API_URL;

            let currentDate = new Date().toLocaleString(); //gets the current date and time. Looks like: "09/08/2014, 2:35:56 AM"
            let subject = `Incident Report from Unit #${formData.unitNum}`;
            let incidentLocation="";

            if(formData["location"] === 'commonArea')
                incidentLocation ="In Building - Common Area";
            else if(formData["location"] === 'unit')
                incidentLocation ="In Building - Unit";
            else
                incidentLocation ="Outdoors";
            
            let witnessDescript = formData.witnesses === 'Yes'? `Witness Description: ${formData.witnessDescription}` :"";
            let injuredDescript = formData.injured === 'Yes' ? `Injury Description: ${formData.injuredDescription}` :"";
            let medDescript = formData.treatment === 'Yes' ? `Medical Treatment Description: ${formData.treatmentDescription}` :"";
            let policeDescript = formData.police === 'Yes' ? 
                    `Attending Officer Information: ${formData.policeDescription}` 
                    : 
                    `Explanation Why Police Not Contacted: ${formData.policeDescription}`;

            let text=
            `
            Full Name of Reporting Person: ${formData.name}
            Date Reported: ${currentDate}
            Unit Number: ${formData.unitNum}
            Phone Number: ${formData.phone}

            Date of Incident: ${formData.incidentDate}
            Time of Incident: ${formData.incidentTime}
            Location of Incident: ${incidentLocation}

            Category of Incident: ${formData.category}
            Description of Incident: ${formData.description}
            
            Where there any Witnesses to incident: ${formData.witnesses}
            ${witnessDescript}

            Was anyone Injured: ${formData.injured}
            ${injuredDescript}

            Was there Medical Treatment provided: ${formData.treatment}
            ${medDescript}
            
            Were the Police contacted: ${formData.police}
            ${policeDescript}
            `
            console.log(text);

        setIsLoading(true);

        //NOTE: Scrolls to top of page. NEcessary since form is tall.
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // or 'auto' for instant scroll
        });

        try {
            const response = await axios.post(url, 
                {
                    to,
                    subject,
                    text
                }
            );
            console.log('Email sent successfully!');
            alert("Your incident report has been successfully submitted.");

            clearForm();
            
        } 
        catch (error) {
            console.log('Error sending email: ' + error.message);
        }

        finally{
            setIsLoading(false);
        }

    };

    return (
        <main>

            <div className='outerBox'>

                <LoadSpinner isLoading={isLoading} />

                <h1>Incident Report</h1>

                <div className="innerBox">

                    <form className="incidentForm" onSubmit={handleReportSubmit}>

                        <div className="incidentForm-control">
                            <label htmlFor="name">Reporting Person's Full Name </label>
                            <input
                                type="text" 
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="incidentForm-control">
                            <label htmlFor="unitNum">Unit Number</label>
                            <input
                                type="text" 
                                id="unitNum"
                                name="unitNum"
                                value={formData.unitNum}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="incidentForm-control">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel" 
                                id="phone"
                                name="phone"
                                placeholder="123-4567-8901"
                                size="20" minlength="11" maxLength="17"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="incidentForm-control">
                            <label htmlFor="incidentDate">Date of Incident</label>
                            <input
                                type="date" 
                                id="incidentDate"
                                name="incidentDate"
                                value={formData.incidentDate}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="incidentForm-control">
                            <label htmlFor="incidentTime">Time of Incident</label>
                            <input
                                type="time" 
                                id="incidentTime"
                                name="incidentTime"
                                value={formData.incidentTime}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="incidentForm-radioSection">
                            <div className="radioHeader">Location of Incident</div>

                            <div className="radio-group">

                                <div>
                                    <label>
                                        <input
                                            type="radio"
                                            name="location"
                                            value="commonArea"
                                            checked={formData.location === 'commonArea'}
                                            onChange={handleChange}
                                            required
                                        />
                                        In Building - Common Area
                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input
                                            type="radio"
                                            name="location"
                                            value="unit"
                                            checked={formData.location === 'unit'}
                                            onChange={handleChange}
                                            required
                                        />
                                        In Building - Unit
                                    </label>
                                </div>

                                <div>
                                    <label>
                                        <input
                                            type="radio"
                                            name="location"
                                            value="outdoors"
                                            checked={formData.location === 'outdoors'}
                                            onChange={handleChange}
                                            required
                                        />
                                        Outdoors
                                    </label>
                                </div>

                            </div>
                        </div>

                        <div className="incidentForm-radioSection">

                            <div className="radioHeader">Category of Incident</div>

                            <div className="radio-group">

                                <label>
                                    <input
                                        type="radio"
                                        name="category"
                                        value="Life"
                                        checked={formData.category === 'Life'}
                                        onChange={handleChange}
                                        required
                                    />
                                    Life
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="category"
                                        value="Building"
                                        checked={formData.category === 'Building'}
                                        onChange={handleChange}
                                        required
                                    />
                                    Building
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="category"
                                        value="Security"
                                        checked={formData.category === 'Security'}
                                        onChange={handleChange}
                                        required
                                    />
                                    Security
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="category"
                                        value="Breach"
                                        checked={formData.category === 'Breach'}
                                        onChange={handleChange}
                                        required
                                    />
                                    Breach
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="category"
                                        value="Other"
                                        checked={formData.category === 'Other'}
                                        onChange={handleChange}
                                        required
                                    />
                                    Other
                                </label>

                            </div>

                        </div>

                        <div className="incidentForm-control">
                            <label htmlFor="description">Description of Incident</label>
                            <textarea
                                id="description"
                                name="description"
                                rows="5" cols="40"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />

                        </div>


                        <div className="incidentForm-radioSection">

                            <div className="radioHeader">Where there any WITNESSES?</div>

                            <div className="radio-group">
                                <label>
                                    <input
                                        type="radio"
                                        name="witnesses"
                                        value="Yes"
                                        checked={formData.witnesses === 'Yes'}
                                        onChange={handleChange}
                                        required
                                    />
                                    Yes
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="witnesses"
                                        value="No"
                                        checked={formData.witnesses === 'No'}
                                        onChange={handleChange}
                                        required
                                    />
                                    No
                                </label>

                            </div>

                        </div>

                        {
                            formData.witnesses === 'Yes'?


                                <div className="incidentForm-control">
                                    <label htmlFor="witnessDescription">
                                        Please enter in the names, addresses and phone numbers of all witnesses
                                    </label>
                                    <textarea
                                        id="witnessDescription"
                                        name="witnessDescription"
                                        rows="5" cols="40"
                                        value={formData.witnessDescription}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                            :
                            ""
                        }

                        <div className="incidentForm-radioSection">

                            <div className="radioHeader">Was anyone INJURED?</div>

                            <div className="radio-group">
                                <label>
                                    <input
                                        type="radio"
                                        name="injured"
                                        value="Yes"
                                        checked={formData.injured === 'Yes'}
                                        onChange={handleChange}
                                        required
                                    />
                                    Yes
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="injured"
                                        value="No"
                                        checked={formData.injured === 'No'}
                                        onChange={handleChange}
                                        required
                                    />
                                    No
                                </label>

                            </div>

                        </div>

                        {
                            formData.injured === 'Yes'?

                                <div className="incidentForm-control">
                                    <label htmlFor="injuredDescription">
                                        Describe the injury (laceration, sprain, etc.), the part of the body injured, 
                                        and any other information known about the resulting injury/injuries
                                    </label>
                                    <textarea
                                        id="injuredDescription"
                                        name="injuredDescription"
                                        rows="5" cols="40"
                                        value={formData.injuredDescription}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                            :
                            ""
                        }

                        <div className="incidentForm-radioSection">

                            <div className="radioHeader">Was there MEDICAL TREATMENT provided?</div>

                            <div className="radio-group">
                                <label>
                                    <input
                                        type="radio"
                                        name="treatment"
                                        value="Yes"
                                        checked={formData.treatment === 'Yes'}
                                        onChange={handleChange}
                                        required
                                    />
                                    Yes
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="treatment"
                                        value="No"
                                        checked={formData.treatment === 'No'}
                                        onChange={handleChange}
                                        required
                                    />
                                    No
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="treatment"
                                        value="Refused"
                                        checked={formData.treatment === 'Refused'}
                                        onChange={handleChange}
                                        required
                                    />
                                    Refused
                                </label>

                            </div>

                        </div>

                        {
                            formData.treatment === 'Yes'?

                                <div className="incidentForm-control">
                                    <label htmlFor="treatmentDescription">
                                        Please describe what was provided. (Ambulance / Paramedics; Member; etc.)
                                    </label>
                                    <textarea
                                        id="treatmentDescription"
                                        name="treatmentDescription"
                                        rows="5" cols="40"
                                        value={formData.treatmentDescription}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                            :
                            ""
                        }

                        <div className="incidentForm-radioSection">

                            <div className="radioHeader">Were the POLICE contacted?</div>

                            <div className="radio-group">
                                <label>
                                    <input
                                        type="radio"
                                        name="police"
                                        value="Yes"
                                        checked={formData.police === 'Yes'}
                                        onChange={handleChange}
                                        required
                                    />
                                    Yes
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="police"
                                        value="No"
                                        checked={formData.police === 'No'}
                                        onChange={handleChange}
                                        required
                                    />
                                    No
                                </label>

                            </div>

                        </div>

                        {
                            (formData.police === 'Yes' || formData.police === 'No' ) ?


                                <div className="incidentForm-control">
                                    <label htmlFor="policeDescription">
                                        {
                                        formData.police === 'Yes'?
                                            "Who was the attending officer and contact information"
                                            :
                                            "Why were they not contacted?"
                                        }
                                    </label>
                                    <textarea
                                        id="policeDescription"
                                        name="policeDescription"
                                        rows="5" cols="40"
                                        value={formData.policeDescription}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                            :
                            ""
                        }



                        <div className="form-control">
                            <button type="submit">Submit</button>
                        </div>

                    </form>

                    
                    

                </div>
                
                <div>
                    <a href = {tipsPDF} target = "_blank" rel="noreferrer">Useful Incident Report Tips</a>
                </div>

            </div>

        </main>


    )

}