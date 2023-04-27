import React from 'react'

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const AdressDetails = () => {
  const { pcode } = useParams();

  const [adressdata, adressdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/Adress/" + pcode).then((res) => {
      return res.json();
    }).then((resp) => {
      adressdatachange(resp);
    }).catch((err) => {
      console.log(err.message);
    })
  }, []);
  return (
    <div>
      {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

      <div className="container">

        <div className="card row" style={{ "textAlign": "left" }}>
          <div className="card-title">
            <h2> Adress details</h2>
          </div>
          <div className="card-body"></div>

          {adressdata &&
            <div>
              <h2>The Adress is : <b>{adressdata.city}</b>  ({adressdata.State})</h2>
              <h3>stata Details</h3>
              <h5>Email is : {adressdata.city}</h5>
              <h5>Phone is : {adressdata.State}</h5>
              <Link className="btn btn-danger" to="/">Back to Listing</Link>
            </div>
          }
        </div>
      </div>
      {/* </div>
            </div> */}
    </div >
  );
}

export default AdressDetails;