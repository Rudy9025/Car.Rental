'use client';

import { useState } from 'react';
import NavBar from '../NavBar/page';
import Styles from '../../css/Admin.module.css';

const Page = () => {

  const [formData, setFormData] = useState({
    carName: '',
    yearOfManufacture: '',
    mileage: '',
    fuelType: '',
    carCategory: '',
    emissionStandard: '',
    transmissionType: '',
    seatCapacity: '',
    pricePerDay: '',
    pricePerWeek: '',
    pricePerMonth: '',
  });

  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null); 
 
   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);   
     }
  };
  const imageData = new FormData();
  imageData.append("file", file);
  imageData.append("carName", formData.carName);

   const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = `${key.replace(/([A-Z])/g, ' $1').toUpperCase()} is required`;
        isValid = false;
      }
    });

    if (formData.yearOfManufacture && !/^\d{4}$/.test(formData.yearOfManufacture)) {
      newErrors.yearOfManufacture = 'Please enter a valid 4-digit year';
      isValid = false;
    }

    if (formData.mileage && (isNaN(formData.mileage) || Number(formData.mileage) <= 0)) {
      newErrors.mileage = 'Please enter a valid mileage';
      isValid = false;
    }

    if (formData.pricePerDay && isNaN(formData.pricePerDay)) {
      newErrors.pricePerDay = 'Please enter a valid number for price per day';
      isValid = false;
    }

    if (formData.pricePerWeek && isNaN(formData.pricePerWeek)) {
      newErrors.pricePerWeek = 'Please enter a valid number for price per week';
      isValid = false;
    }

    if (formData.pricePerMonth && isNaN(formData.pricePerMonth)) {
      newErrors.pricePerMonth = 'Please enter a valid number for price per month';
      isValid = false;
    }
 
    setErrors(newErrors);
    return isValid;
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
      const formDataToSend = {
      carName: formData.carName,
      yearOfManufacture: formData.yearOfManufacture,
      mileage: formData.mileage,
      fuelType: formData.fuelType,
      carCategory: formData.carCategory,
      emissionStandard: formData.emissionStandard,
      transmissionType: formData.transmissionType,
      seatCapacity: formData.seatCapacity,
      pricePerDay: formData.pricePerDay,
      pricePerWeek: formData.pricePerWeek,
      pricePerMonth: formData.pricePerMonth,
     };
     console.log(imageData)
     try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(formDataToSend),  
      });
      const imageUpload = await fetch("/api/images", {
        method: "POST",
        body: imageData,
      });
      const Imageresult = await imageUpload.json();
      const result = await response.json();

      if (result.success) {
        alert('Car uploaded successfully');
      } 
      if(Imageresult.success){ console.log(`Image Upload successful: ${result.name}`);}
      else {
        alert('Error uploading car data');
      }
    } catch (error) {
      console.error('Error uploading car data:', error);
      alert('Error uploading car data');
    }
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.main}>
        <NavBar />
        
        <form onSubmit={handleSubmit} className={Styles.upload}>
          {/* Car Name */}
          <div>
            <label>Car Name:</label>
            <input
              type="text"
              name="carName"
              value={formData.carName}
              onChange={handleChange}
            />
            {errors.carName && <p className={Styles.error}>{errors.carName}</p>}
          </div>

          {/* Year of Manufacture */}
          <div>
            <label>Year of Manufacture:</label>
            <input
              type="text"
              name="yearOfManufacture"
              value={formData.yearOfManufacture}
              onChange={handleChange}
            />
            {errors.yearOfManufacture && <p className={Styles.error}>{errors.yearOfManufacture}</p>}
          </div>

          {/* Mileage */}
          <div>
            <label>Mileage:</label>
            <input
              type="text"
              name="mileage"
              value={formData.mileage}
              onChange={handleChange}
            />
            {errors.mileage && <p className={Styles.error}>{errors.mileage}</p>}
          </div>

          {/* Fuel Type */}
          <div>
            <label>Fuel Type:</label>
            <select
              name="fuelType"
              value={formData.fuelType}
              onChange={handleChange}
            >
              <option value="">Select Fuel Type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
            {errors.fuelType && <p className={Styles.error}>{errors.fuelType}</p>}
          </div>

          {/* Car Category */}
          <div>
            <label>Car Category:</label>
            <select
              name="carCategory"
              value={formData.carCategory}
              onChange={handleChange}
            >
              <option value="">Select Car Category</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Truck">Truck</option>
            </select>
            {errors.carCategory && <p className={Styles.error}>{errors.carCategory}</p>}
          </div>

          {/* Emission Standard */}
          <div>
            <label>Emission Standard:</label>
            <select
              name="emissionStandard"
              value={formData.emissionStandard}
              onChange={handleChange}
            >
              <option value="">Select Emission Standard</option>
              <option value="BS5">BS5</option>
              <option value="BS6">BS6</option>
            </select>
            {errors.emissionStandard && <p className={Styles.error}>{errors.emissionStandard}</p>}
          </div>

          {/* Transmission Type */}
          <div>
            <label>Transmission Type:</label>
            <select
              name="transmissionType"
              value={formData.transmissionType}
              onChange={handleChange}
            >
              <option value="">Select Transmission Type</option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
            </select>
            {errors.transmissionType && <p className={Styles.error}>{errors.transmissionType}</p>}
          </div>

          {/* Seat Capacity */}
          <div>
            <label>Seat Capacity:</label>
            <select
              name="seatCapacity"
              value={formData.seatCapacity}
              onChange={handleChange}
            >
              <option value="">Select Seat Capacity</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            {errors.seatCapacity && <p className={Styles.error}>{errors.seatCapacity}</p>}
          </div>

          {/* Price Per Day */}
          <div>
            <label>Price per Day:</label>
            <input
              type="number"
              name="pricePerDay"
              value={formData.pricePerDay}
              onChange={handleChange}
            />
            {errors.pricePerDay && <p className={Styles.error}>{errors.pricePerDay}</p>}
          </div>

          {/* Price Per Week */}
          <div>
            <label>Price per Week:</label>
            <input
              type="number"
              name="pricePerWeek"
              value={formData.pricePerWeek}
              onChange={handleChange}
            />
            {errors.pricePerWeek && <p className={Styles.error}>{errors.pricePerWeek}</p>}
          </div>

          {/* Price Per Month */}
          <div>
            <label>Price per Month:</label>
            <input
              type="number"
              name="pricePerMonth"
              value={formData.pricePerMonth}
              onChange={handleChange}
            />
            {errors.pricePerMonth && <p className={Styles.error}>{errors.pricePerMonth}</p>}
          </div>

          <div>
          <input
        type="file"
        name="file"
        onChange={handleFileChange}
        />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;








// 'use client';

// import { useState } from 'react';
// import NavBar from '../NavBar/page';
// import Styles from '../../css/Admin.module.css';

// const Page = () => {

//   const [formData, setFormData] = useState({
//     carName: '',
//     yearOfManufacture: '',
//     mileage: '',
//     fuelType: '',
//     carCategory: '',
//     emissionStandard: '',
//     transmissionType: '',
//     seatCapacity: '',
//     pricePerDay: '',
//     pricePerWeek: '',
//     pricePerMonth: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [file, setFile] = useState(null); 


//   const handleFileChange = (e) => {
//     if (e.target.files) {
//       setFile(e.target.files[0]);   
//      }
//   };
 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     let isValid = true;

//     Object.keys(formData).forEach((key) => {
//       if (!formData[key].trim()) {
//         newErrors[key] = `${key.replace(/([A-Z])/g, ' $1').toUpperCase()} is required`;
//         isValid = false;
//       }
//     });

//     if (formData.yearOfManufacture && !/^\d{4}$/.test(formData.yearOfManufacture)) {
//       newErrors.yearOfManufacture = 'Please enter a valid 4-digit year';
//       isValid = false;
//     }

//     if (formData.mileage && (isNaN(formData.mileage) || Number(formData.mileage) <= 0)) {
//       newErrors.mileage = 'Please enter a valid mileage';
//       isValid = false;
//     }

//     if (formData.pricePerDay && isNaN(formData.pricePerDay)) {
//       newErrors.pricePerDay = 'Please enter a valid number for price per day';
//       isValid = false;
//     }

//     if (formData.pricePerWeek && isNaN(formData.pricePerWeek)) {
//       newErrors.pricePerWeek = 'Please enter a valid number for price per week';
//       isValid = false;
//     }

//     if (formData.pricePerMonth && isNaN(formData.pricePerMonth)) {
//       newErrors.pricePerMonth = 'Please enter a valid number for price per month';
//       isValid = false;
//     }

//     if (!file) {
//       newErrors.file = 'File is required';
//       isValid = false;
//     }
    

//     setErrors(newErrors);
//     return isValid;
//   };
 
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     // Create a new FormData object
//     const formDataToSend = new FormData();
    
//     // Append all the other fields from formData state
//     Object.keys(formData).forEach((key) => {
//       formDataToSend.append(key, formData[key]);
//     });

//     // Append the file
//     if (file) {
//       formDataToSend.append("imageDetails", file);
//     }

//     try {
//       const response = await fetch('/api/upload', {
//         method: 'POST',
//         body: formDataToSend, // Send the FormData (not JSON)
//       });

//       const result = await response.json();

//       if (result.success) {
//         alert('Car uploaded successfully');
//       } else {
//         alert('Error uploading car data');
//       }
//     } catch (error) {
//       console.error('Error uploading car data:', error);
//       alert('Error uploading car data');
//     }
//   };

//   return (
//     <div className={Styles.container}>
//       <div className={Styles.main}>
//         <NavBar />
        
//         <form onSubmit={handleSubmit} className={Styles.upload}>
//           {/* Car Name */}
//           <div>
//             <label>Car Name:</label>
//             <input
//               type="text"
//               name="carName"
//               value={formData.carName}
//               onChange={handleChange}
//             />
//             {errors.carName && <p className={Styles.error}>{errors.carName}</p>}
//           </div>

//           {/* Year of Manufacture */}
//           <div>
//             <label>Year of Manufacture:</label>
//             <input
//               type="text"
//               name="yearOfManufacture"
//               value={formData.yearOfManufacture}
//               onChange={handleChange}
//             />
//             {errors.yearOfManufacture && <p className={Styles.error}>{errors.yearOfManufacture}</p>}
//           </div>

//           {/* Mileage */}
//           <div>
//             <label>Mileage:</label>
//             <input
//               type="text"
//               name="mileage"
//               value={formData.mileage}
//               onChange={handleChange}
//             />
//             {errors.mileage && <p className={Styles.error}>{errors.mileage}</p>}
//           </div>

//           {/* Fuel Type */}
//           <div>
//             <label>Fuel Type:</label>
//             <select
//               name="fuelType"
//               value={formData.fuelType}
//               onChange={handleChange}
//             >
//               <option value="">Select Fuel Type</option>
//               <option value="Petrol">Petrol</option>
//               <option value="Diesel">Diesel</option>
//               <option value="Electric">Electric</option>
//               <option value="Hybrid">Hybrid</option>
//             </select>
//             {errors.fuelType && <p className={Styles.error}>{errors.fuelType}</p>}
//           </div>

//           {/* Car Category */}
//           <div>
//             <label>Car Category:</label>
//             <select
//               name="carCategory"
//               value={formData.carCategory}
//               onChange={handleChange}
//             >
//               <option value="">Select Car Category</option>
//               <option value="SUV">SUV</option>
//               <option value="Sedan">Sedan</option>
//               <option value="Hatchback">Hatchback</option>
//               <option value="Truck">Truck</option>
//             </select>
//             {errors.carCategory && <p className={Styles.error}>{errors.carCategory}</p>}
//           </div>

//           {/* Emission Standard */}
//           <div>
//             <label>Emission Standard:</label>
//             <select
//               name="emissionStandard"
//               value={formData.emissionStandard}
//               onChange={handleChange}
//             >
//               <option value="">Select Emission Standard</option>
//               <option value="BS5">BS5</option>
//               <option value="BS6">BS6</option>
//             </select>
//             {errors.emissionStandard && <p className={Styles.error}>{errors.emissionStandard}</p>}
//           </div>

//           {/* Transmission Type */}
//           <div>
//             <label>Transmission Type:</label>
//             <select
//               name="transmissionType"
//               value={formData.transmissionType}
//               onChange={handleChange}
//             >
//               <option value="">Select Transmission Type</option>
//               <option value="Manual">Manual</option>
//               <option value="Automatic">Automatic</option>
//             </select>
//             {errors.transmissionType && <p className={Styles.error}>{errors.transmissionType}</p>}
//           </div>

//           {/* Seat Capacity */}
//           <div>
//             <label>Seat Capacity:</label>
//             <select
//               name="seatCapacity"
//               value={formData.seatCapacity}
//               onChange={handleChange}
//             >
//               <option value="">Select Seat Capacity</option>
//               <option value="4">4</option>
//               <option value="5">5</option>
//               <option value="6">6</option>
//               <option value="7">7</option>
//               <option value="8">8</option>
//               <option value="9">9</option>
//               <option value="10">10</option>
//             </select>
//             {errors.seatCapacity && <p className={Styles.error}>{errors.seatCapacity}</p>}
//           </div>

//           {/* Price Per Day */}
//           <div>
//             <label>Price per Day:</label>
//             <input
//               type="number"
//               name="pricePerDay"
//               value={formData.pricePerDay}
//               onChange={handleChange}
//             />
//             {errors.pricePerDay && <p className={Styles.error}>{errors.pricePerDay}</p>}
//           </div>

//           {/* Price Per Week */}
//           <div>
//             <label>Price per Week:</label>
//             <input
//               type="number"
//               name="pricePerWeek"
//               value={formData.pricePerWeek}
//               onChange={handleChange}
//             />
//             {errors.pricePerWeek && <p className={Styles.error}>{errors.pricePerWeek}</p>}
//           </div>

//           {/* Price Per Month */}
//           <div>
//             <label>Price per Month:</label>
//             <input
//               type="number"
//               name="pricePerMonth"
//               value={formData.pricePerMonth}
//               onChange={handleChange}
//             />
//             {errors.pricePerMonth && <p className={Styles.error}>{errors.pricePerMonth}</p>}
//           </div>

//           {/* File Upload */}
//           <div>
//             <input
//               type="file"
//               name="file"
//               onChange={handleFileChange}
//             />
//             {errors.file && <p className={Styles.error}>{errors.file}</p>}
//           </div>

//           <div>
//             <button type="submit">Submit</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Page;
