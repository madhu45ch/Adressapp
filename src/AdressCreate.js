import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
const AdressCreate = () => {
  const [sNo, sNochange] = useState("");
  const [city, citychange] = useState("");
  const [State, Statechange] = useState("");
  const [pincode, pincodechange] = useState("");
  const [active, activechange] = useState(true);
  const[validation,valchange]=useState(false);
  const [data,setdata]=useState("http://localhost:8000/Adresses")
  const navigate=useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const adddata = { city, State, pincode, active };
   axios.post('https://mobileapp-7448c-default-rtdb.firebaseio.com/adress.json',
   data).then(()=>alert("submited successfully"))
    fetch("http://localhost:8000/Adresses",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(adddata)
    }).then((res)=>{
      alert('Saved successfully.')
      navigate('/');
    }).catch((err)=>{
      console.log(err.message)
    })

  
  }
  return (
    <div className='row'>
      <div className='offset-lg-3 col-lg-6'>
        <form className='container' onSubmit={submitHandler}>


          <div className='card' style={{ "textAlign": "left" }}>
            <div className='card-title'>
              <h2> ADD Adress</h2>
            </div>
            <div className='card-body'>
              <div className="row">
              <div className="col-lg-12">
                  <div className="form-group">
                  <label>sNo</label>
                    <input required value={sNo} onChange={e => sNochange(e.target.value)} className="form-control"></input>
                    </div>
                    </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>city</label>
                    <input required value={city} onChange={e => citychange(e.target.value)} className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>State</label>
                    <input required value={State} onChange={e => Statechange(e.target.value)} className="form-control"></input>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>pincode</label>
                    <input required value={pincode} onChange={e => pincodechange(e.target.value)} className="form-control"></input>
                    {pincode.length==0 && validation && <span className="text-danger">pincode the name</span>}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-check">
                    <input checked={active} onChange={e => activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                    <label className="form-check-label">Is Active</label>

                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <button className="btn btn-success" type="submit">Save</button>
                    <Link to="/" className="btn btn-danger">Back</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default AdressCreate