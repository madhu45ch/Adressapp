import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import AdressDetails from "./AdressDetails";
const AdressList = () => {
    const [adressesdata, adressdatachange] = useState(null);
    const navigate = useNavigate();

    const AdressDetailes = (pincode) => {
        navigate("/Adress/details/:pincode");
    }
    const Edit = (pincode) => {
        navigate("/employee/edit/");
    }
    const Removefunction = (pincode) => {
        if (window.confirm('Do you want to remove?')) {
            fetch('http://localhost:8000/Adress/', {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }



    useEffect(() => {
        fetch('http://localhost:8000/Adress').then((res) => {
            return res.json();
        }).then((resp) => {
            console.log(resp);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Adresses </h2>
                </div>
                <div className="card-body">
                    <div>
                        <Link to="Adress/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <div className="divbtn">

                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>sNo</td>
                                <td>City</td>
                                <td>State</td>
                                <td>pincode</td>

                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {adressesdata &&
                                adressesdata.map(item => (
                                    <tr key={item.pincode}>
                                        <td>{ }item.sNo</td>
                                        <td>{item.city}</td>
                                        <td>{item.this.State}</td>
                                        <td>{item.pincode}</td>
                                        <td><a onClick={() => { Edit(item.pincode) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.pincode) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { AdressDetailes(item.pincode) }} className="btn btn-primary">Details</a>
                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>


                </div>
            </div>
        </div>
    );
}

export default AdressList;
