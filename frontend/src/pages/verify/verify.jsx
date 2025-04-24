import "./verify.css";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export const Verify = () => {
    // const navigate = useNavigate();
    const [success, setSuccess] = useState(false);
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();

    const verify = async (e) => {
        e.preventDefault();

        // Check if OTP is entered before making the request
        if (!otp) {
            alert("Please enter OTP");
            return;
        }

        try {
            const response = await axios.post("/api/v1/user/verify", { otp });

            // Handle success response
            if (response.status === 200) {
                setSuccess(true);
                console.log("success verify");
                navigate("/login");
            }
        } catch (error) {
            // Check if the error is an AxiosError
            if (error.isAxiosError) {
                // You can access the error response using error.response
                const { response } = error;

                if (response) {
                    const { status } = response;
                    // Handle based on status code from the server
                    if (status === 400) {
                        alert("Bad Request: Please check your OTP and try again.");
                    } else if (status === 401) {
                        alert("Invalid OTP. Please try again.");
                    } else if (status === 404) {
                        alert("User not found. Please register first.");
                    } else {
                        alert("An unexpected error occurred. Please try again.");
                    }
                } else {
                    // If no response from server, possibly network issue
                    alert("Network error: Please check your connection.");
                }
            } else {
                // Handle non-Axios errors (e.g., programming errors)
                alert("An error occurred. Please try again.");
            }

            // Log the full error for debugging
            console.error("Error occurred during OTP verification:", error);
        }
    };

    return (
        <>
            {!success ? (<form>
                <div className="inputBox">
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}  // Update OTP state
                        required
                    />
                    <span>OTP</span>
                </div>

                <button type="submit" onClick={verify}>Verify OTP</button>
            </form>) : <h1>Success</h1>}


        </>
    );
};
