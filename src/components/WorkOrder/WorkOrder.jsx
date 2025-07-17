import React, { useState } from 'react';
import axios from 'axios';
import "./WorkOrder.css"

export default function WorkOrder(){

    const [formData, setFormData] = useState({
            fname: '',
            lname: '',
            phone: '',
            unitNum: '',
            description:''
        });



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
        const url=process.env.REACT_APP_API_URL;

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

        try {
            const response = await axios.post(url, 
                {
                    to,
                    subject,
                    text
                }
            );
            console.log('Email sent successfully!');
            alert("Your work order has been successfully submitted.");

            clearForm();
        } 
        catch (error) {
            console.log('Error sending email: ' + error.message);
        }

        //console.log(formData);
    };

    return (
        <main>
            


            <div className='outerBox'>

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