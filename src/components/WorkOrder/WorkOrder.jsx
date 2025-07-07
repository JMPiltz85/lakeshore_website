import React, { useState, useEffect } from 'react';
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

    const handleSubmit = (e) => {
        e.preventDefault(); //stops post back
        
        // You can add functionality to send the data to an API or something here

        console.log(formData);
    };

    return (
        <main>
            <h1>Work Order</h1>


            <form onSubmit={handleSubmit}>

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
            
        </main>

    )
}