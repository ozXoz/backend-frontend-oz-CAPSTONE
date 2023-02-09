
import axios from "axios";
import { useState, useEffect } from 'react';
console.log("top")

const BASE_URL = "https://backend-oz.onrender.com/home"



const DataDisplay = () => {
    const [getValue, setGetValue] = useState([]);
    useEffect(() => {
        const getAllInfo = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/register/user/result`);
                console.log("test here")
                setGetValue(res.data)

                console.log("test 2 here")
                console.log(res.data);
                console.log("middle")



            } catch (error) {
                console.log(error);
            }
            console.log("middleend")
        }
        getAllInfo();
        // eslint-disable-next-line
    }, [])



    return (
        <div className="row">
            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email ID</th>
                            <th>Action</th>
                            {/* <button><Link to='update'>Update Exists Employee</Link></button> */}
                        </tr>

                    </thead>
                    <tbody>

                        {getValue.map(x => <tr>
                            <td >{x._id}</td>
                            <td>{x.firstname}</td>
                            <td>{x.lastname}</td>
                            <td>{x.last_name}</td>
                            <td>{x.phone}</td>
                            <td>{x.email}</td>


                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>

    )

}



export default DataDisplay;