import axios from 'axios';

export async function sendEmail({ to, subject, text }) {
  const url = process.env.REACT_APP_API_URL;

    try {
        const response = await axios.post(
            url,
            { to, subject, text },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        console.log('Success:', response.data);

        return response.data; 
    } 
    catch (error) {

        if (error.response) {
            // Server responded with a non-2xx status code
            console.error('Server Error:', error.response.status, error.response.data);
        } 
        else if (error.request) {
            // Request was made but no response
            console.error('Network Error:', error.request);
        } 
        else {
            // Other errors
            console.error('Error:', error.message);
        }
        
        // console.error("Error sending email:", error);
         throw error; // propagate error to the caller
    }
}
