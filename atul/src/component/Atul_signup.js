import React from 'react'
import $ from 'jquery';
const Atul_signup = () => {

    // $( document ).ready(function() {
    //     $("#sub").on("click", function(){
    //         alert("clicked");
    //      }); 
    // });

    const atul = async(e) => {
        e.preventDefault();
        // const list = [];
        const email = document.getElementById('Email').value;
        const name = $("#name").val();
        const mobile = document.getElementById('mobile').value
        const password = document.getElementById('Password').value

        const response = await fetch(`http://localhost:8055/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, name, mobile, password})
        });
        const json = await response.json();
        console.log(json);
    }

return (
    <form>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="text" className="form-control" id="Email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">mobile</label>
            <input type="text" className="form-control" id="mobile" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">name</label>
            <input type="text" className="form-control" id="name" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="Password" />
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" id="sub" className="btn btn-primary" onClick={atul}>Submit</button>
    </form>
);
}

export default Atul_signup