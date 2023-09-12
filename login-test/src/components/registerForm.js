import React, { useState } from 'react'
import { registerService, uploadImageService } from '../services/services';

const RegisterForm = () => {
  const [formValues, setFormValues] = useState({});
  const [uploadImage, setUploadImage] = useState(null);
  const [image, setImage] = useState('');

  const values = (event) => {
    let objData = formValues;
    objData[event.target.name] = event.target.value;

    setFormValues(objData);
  }

  const imageUploaded = (e) => {
    let objData = formValues;
    const reader = new FileReader();
    objData[e.target.name] = e.target.files[0];
    
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setUploadImage(reader.result);
      setImage(e.target.files[0])
    }
    reader.onerror = error => {
      console.log("Error: ", error);
    }
    setFormValues(objData);
    // setUploadImage(URL.createObjectURL(e.target.files[0]))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    registerService(formValues);

    const formData = new FormData();
    formData.append("image", image);
    uploadImageService(formData);
  };

  console.log(formValues)

  return (
    <form id="Regform" onSubmit={handleSubmit}>
      {uploadImage &&
        <img src={uploadImage} alt='profile' width={60} height={60}></img>
      }
      <input type="file" accept='image/*' placeholder="Photo" name='photo' onChange={imageUploaded}/>
      <input type="text" placeholder="First Name" name='firstName' onChange={values}/>
      <input type="text" placeholder="Last Name" name='lastName' onChange={values}/>
      <input type="E-mail" placeholder="Email" name='email' onChange={values}/>
      <input type="password" placeholder="Password" name='password' onChange={values}/>
      <button type="submit" className="btn">
        Register
      </button>
    </form>
  )
}

export default RegisterForm
