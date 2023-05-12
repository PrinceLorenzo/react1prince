import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import './AddEdit.css';
import fireDb from "../firebase";


const initialState = {
    name: "",
    email: "",
    comment: "",
}

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});
  
  const { name, email, comment } = state;

  const navigate = useNavigate();

  const {id} = useParams();

  useEffect(() => {
    fireDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, [id]);

  useEffect(() => {
    if (id) {
        setState({ ...data[id] });
    } else {
        setState({ ...initialState });
    }
    
    return () => {
        setState({ ...initialState });
    };
  }, [id, data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !comment) {
    } else {
     if(!id) {
        fireDb.child("contacts").push(state, (err) => {
          if (err) {
          } else {
          }
        });
     } else {
        fireDb.child(`contacts/${id}`).set(state, (err) => {
          if (err) {
          } else {
          }
        });
     }
        
     setTimeout(() => navigate("/", {replace:true}), 500);
    }
  };
    return (
    <div style={{marginTop: "30px"}}>
      <h1>Please fill the form below for information</h1>
      <br/>
      <form style={{margin: "auto", padding: "30px", maxWidth:"600px", alignContent: "center"}} onSubmit={handleSubmit}>
        <label htmlFor="name">Fullname:</label>
        <input type="text" id="name" name="name" placeholder="Type your fullname" value={name || ""} onChange={handleInputChange} />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Type your email" value={email || ""} onChange={handleInputChange} />
        
        <label htmlFor="comment">Address:</label>
        <input type="text" id="comment" name="comment" placeholder="Type your address" value={comment || ""} onChange={handleInputChange} />        
      
        <input type="submit" value={id ? "Update" : "Submit"} />

      </form>
      </div>
  )
}

export default AddEdit;
