import React, { useState } from 'react';
import "./WorkOrder.css"
import LoadSpinner from '../LoadSpinner/LoadSpinner';
import {sendEmail} from "../../util/email_worker"

export default function WorkOrder(){

    const [formData, setFormData] = useState({
            fname: '',
            lname: '',
            phone: '',
            unitNum: '',
            description:''
        });

    const [isLoading, setIsLoading] = useState(false);
    let loadMessage = "Sending...";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const clearForm = () =>{

        setFormData(() => ({ 
            fname: '',
            lname: '',
            phone: '',
            unitNum: '',
            description:''
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); //stops post back

        //const to="manager.lakeshore@rogers.com";
        const to=process.env.REACT_APP_TO_EMAIL;

        let currentDate = new Date().toLocaleString(); //gets the current date and time. Looks like: "09/08/2014, 2:35:56 AM"
        let text = 
        `
        First Name : ${formData.fname}
        Last Name: ${formData.lname}
        Phone: ${formData.phone}
        Unit Number: ${formData.unitNum}
        Description of maintenance problem: ${formData.description}
        Date Submitted: ${currentDate}
        `
        let subject = `Work order from Unit #${formData.unitNum}`;

        setIsLoading(true);

        try {
            // calls "sendEmail", which is found in "util/email_worker.js"
            await sendEmail({ to, subject, text }); 
            alert("Your work order has been successfully submitted.");
            clearForm();
        } 
        catch (error) {
            alert("There was a problem sending your work order. Please try again.");
        } 
        finally {
            setIsLoading(false);
        }

    };

    return (
        <main>
            

            <div className='outerBox'>

                <LoadSpinner isLoading={isLoading} message={loadMessage} />

                <h1>Work Order</h1>

                <div className="innerBox">
                    <form className="workForm" onSubmit={handleSubmit}>

                        <div className="form-control">
                            <label htmlFor="fname">First Name</label>
                            <input
                                type="text" 
                                id="fname"
                                name="fname"
                                value={formData.fname}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-control" >
                            <label htmlFor="lname">Last Name</label>
                            <input
                                type="text" 
                                id="lname"
                                name="lname"
                                value={formData.lname}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="text" 
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label htmlFor="unitNum">Unit Number</label>
                            <input
                                type="text" 
                                id="unitNum"
                                name="unitNum"
                                value={formData.unitNum}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label htmlFor="description">Description</label>
                            <textarea 
                                className="description"
                                rows="5" cols="40"
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-control">
                            <button type="submit">Submit</button>
                        </div>

                    </form>

                </div>

            </div>
            
        </main>

    )
}