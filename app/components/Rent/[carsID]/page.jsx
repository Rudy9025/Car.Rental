 "use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import NavBar from "../../NavBar/page";
import Styles from "../../../css/Dynamic.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCookie } from 'cookies-next';
 
const CarDetails = () => {
  const searchParams = useSearchParams();
  const carParam = searchParams.get("car");
  const [car, setCar] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupArea, setPickupArea] = useState("");
  const [pincode, setPincode] = useState("");
  const [rentedDays, setRentedDays] = useState(0);
  const [rentedWeeks, setRentedWeeks] = useState(0);
  const [rentedMonths, setRentedMonths] = useState(0);
  const [pickupDate, setPickupDate] = useState("");

  const handleDurationChange = (e) => {
    setSelectedDuration(e.target.value);
  };

  const validateForm = () => {
    let isValid = true;

    if (!pickupLocation.trim()) {
      toast.warn("Pickup location is required");
      isValid = false;
    }

    if (!pickupArea.trim()) {
      toast.warn("Pickup area is required");
      isValid = false;
    }

    if (!pincode.trim() || !/^\d{6}$/.test(pincode)) {
      toast.warn("Please enter a valid 6-digit pin code");
      isValid = false;
    }

    if (!selectedDuration) {
      toast.warn("Please select a duration");
      isValid = false;
    }

    if (selectedDuration === "Days" && (rentedDays <= 0 || isNaN(rentedDays))) {
      toast.warn("Please enter a valid number of days");
      isValid = false;
    }
    if (
      selectedDuration === "Weeks" &&
      (rentedWeeks <= 0 || isNaN(rentedWeeks))
    ) {
      toast.warn("Please enter a valid number of weeks");
      isValid = false;
    }
    if (
      selectedDuration === "Months" &&
      (rentedMonths <= 0 || isNaN(rentedMonths))
    ) {
      toast.warn("Please enter a valid number of months");
      isValid = false;
    }

    const currentDate = new Date();
    const selectedDate = new Date(pickupDate);
    if (!pickupDate || selectedDate <= currentDate) {
      toast.warn("Pickup DateTime must be future with time.");
      isValid = false;
    }

    return isValid;
  };

  // const username =  JSON.parse(localStorage.getItem("userData"))?.username || "guest";
  // const Email = JSON.parse(localStorage.getItem("userData"))?.email || "guest";

  const userData = getCookie("userData");

 const username = userData ? JSON.parse(userData).username : "guest";
const Email = userData ? JSON.parse(userData).email : "guest";

 

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    if (!confirm("Are you sure you want to confirm the booking?")) {
      toast.warn("Booking not confirmed.");
      return;
    }

    let totalAmount = 0;

    if (selectedDuration === "Days") {
      totalAmount = rentedDays * car.pricePerDay;
    } else if (selectedDuration === "Weeks") {
      totalAmount = rentedWeeks * car.pricePerWeek;
    } else if (selectedDuration === "Months") {
      totalAmount = rentedMonths * car.pricePerMonth;
    }

    const bookingData = {
      userName: username,
      email: Email,
      carID: car.id,
      CarName: car.carName,
      path: car.path,
      pickupLocation,
      pickupArea,
      pincode,
      pickupDate,
      Rented_Days: rentedDays,
      Rented_Weeks: rentedWeeks,
      Rented_Months: rentedMonths,
      TotalAmount: totalAmount,
    };

    try {
      const response = await axios.post("/api/bookings", bookingData);
      if (response.status === 200) {
        toast.success("Booking successful!");
      }
    } catch (error) {
      console.log("Error booking the car:", error);
      toast.error("Error booking the car");
    }
  };

  useEffect(() => {
    if (carParam) {
      setCar(JSON.parse(carParam));
    }
  }, [carParam]);

  if (!car) {
    return <p>Loading...</p>;
  }

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateString = minDate.toISOString().split("T")[0];

  return (
    <div className={Styles.container}>
      <ToastContainer stacked />
      <div className={Styles.main}>
        <NavBar />

        <div className={Styles.carsDiv}>
          <div className={Styles.carImage}>
            <Image
              src={car.path || "/images/placeholder.jpg"}
              alt={car.carName}
              height={600}
              width={600}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#282828",
              width: "60%",
              padding: "4dvh 13dvh 4dvh 13dvh",
              borderRadius: "1.5dvh",
              color: "white",
            }}
          >
            <div className={Styles.second}>
              <p className={Styles.carTitle}>{car.carName}</p>
              <div className={Styles.secondBottom}>
                <p>
                  {" "}
                  <Image
                    src="/images/icons/YM.png"
                    width={50}
                    height={50}
                    alt="Year of Manufacture"
                  />
                  <i>Year of Manufacture:</i>
                  {car.yearOfManufacture}
                </p>
                <p>
                  <Image
                    src="/images/icons/Mileage.png"
                    width={50}
                    height={50}
                    alt="Mileage"
                  />
                  <i>Mileage: </i>
                  {car.mileage}
                </p>
                <p>
                  <Image
                    src="/images/icons/FuelType.png"
                    width={50}
                    height={50}
                    alt="FuelType"
                  />
                  <i>Fuel Type: </i>
                  {car.fuelType}
                </p>
                <p>
                  <Image
                    src="/images/icons/CarCategory.png"
                    width={50}
                    height={50}
                    alt="CarCategory"
                  />{" "}
                  <i>Car Category: </i>
                  {car.carCategory}
                </p>
              </div>
            </div>

            <div className={Styles.third}>
              <p>
                <Image
                  src="/images/icons/EmissionStandard.png"
                  width={50}
                  height={50}
                  alt="EmissionStandard"
                />
                <i>Emission Standard: </i>
                {car.emissionStandard}
              </p>
              <p>
                <Image
                  src="/images/icons/TransmissionType.png"
                  width={50}
                  height={50}
                  alt="TransmissionType"
                />
                <i>Transmission Type: </i>
                {car.transmissionType}
              </p>
              <p>
                <Image
                  src="/images/icons/SeatCapacity.png"
                  width={50}
                  height={50}
                  alt="SeatCapacity"
                />
                <i>Seat Capacity: </i>
                {car.seatCapacity}{" "}
              </p>
              <p>
                <Image
                  src="/images/icons/day.png"
                  width={50}
                  height={50}
                  alt="day"
                />
                <i>Price per Day: </i>${car.pricePerDay}
              </p>
              <p>
                <Image
                  src="/images/icons/week.png"
                  width={50}
                  height={50}
                  alt="week"
                />
                <i>Price per Week: </i>${car.pricePerWeek}
              </p>
              <p>
                <Image
                  src="/images/icons/month.png"
                  width={50}
                  height={50}
                  alt="month"
                />
                <i>Price per Month: </i>${car.pricePerMonth}
              </p>
            </div>
          </div>
        </div>

        <div className={Styles.inputDiv}>
          <div className={Styles.wrapper}>
            <span>
              Pick up Location:
              <input
                type="text"
                placeholder="Enter Pick up Location"
                className={Styles.betterOutline}
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
              />
            </span>
            <span>
              Pick up Area:
              <input
                type="text"
                placeholder="Enter Pick up Area"
                className={Styles.betterOutline}
                onChange={(e) => setPickupArea(e.target.value)}
              />
            </span>
            <span>
              Pin code:
              <input
                className={Styles.betterOutline}
                placeholder="Enter Pin code"
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </span>
          </div>

          <div className={Styles.dynamicSelect}>
            <span>
              Select duration: &nbsp;
              <select value={selectedDuration} onChange={handleDurationChange}>
                <option value="">Select duration 🔽</option>
                <option value="Days">Days 🔽</option>
                <option value="Weeks">Weeks 🔽</option>
                <option value="Months">Months 🔽</option>
              </select>
            </span>

            {selectedDuration === "Days" && (
              <span>
                Days: &nbsp;
                <input
                  type="number"
                  id="days"
                  min="0"
                  max="365"
                  className={Styles.betterOutline}
                  value={rentedDays}
                  onChange={(e) => setRentedDays(e.target.value)}
                />
              </span>
            )}

            {selectedDuration === "Weeks" && (
              <span>
                Weeks: &nbsp;
                <input
                  type="number"
                  id="weeks"
                  min="0"
                  max="52"
                  className={Styles.betterOutline}
                  value={rentedWeeks}
                  onChange={(e) => setRentedWeeks(e.target.value)}
                />
              </span>
            )}

            {selectedDuration === "Months" && (
              <span>
                Months: &nbsp;
                <input
                  type="number"
                  id="months"
                  min="0"
                  max="12"
                  className={Styles.betterOutline}
                  value={rentedMonths}
                  onChange={(e) => setRentedMonths(e.target.value)}
                />
              </span>
            )}

            <span>
              Pick up Date and Time: &nbsp;
              <input
                style={{ cursor: "pointer" }}
                type="date"
                className={Styles.betterOutline}
                value={pickupDate}
                min={minDateString + "T00:00"}
                onChange={(e) => setPickupDate(e.target.value)}
              />
            </span>
          </div>

          <div className={Styles.button}>
            <button onClick={handleSubmit}>Book</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;

// 'use client'
// import { useSearchParams } from 'next/navigation'
// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import NavBar from '../../NavBar/page'
// import Styles from '../../../css/Dynamic.module.css'
// import axios from 'axios'
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const CarDetails = () => {
//   const searchParams = useSearchParams()
//   const carParam = searchParams.get('car')
//   const [car, setCar] = useState(null)
//   const [selectedDuration, setSelectedDuration] = useState("");
//   const [pickupLocation, setPickupLocation] = useState("");
//   const [pickupArea, setPickupArea] = useState("");
//   const [pincode, setPincode] = useState("");
//   const [rentedDays, setRentedDays] = useState(0);
//   const [rentedWeeks, setRentedWeeks] = useState(0);
//   const [rentedMonths, setRentedMonths] = useState(0);
//   const [pickupDate, setPickupDate] = useState("");
//   const [errors, setErrors] = useState({});

//   const handleDurationChange = (e) => {
//     setSelectedDuration(e.target.value);
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!pickupLocation.trim()) {
//       newErrors.pickupLocation = "Pickup location is required";
//     }

//     if (!pickupArea.trim()) {
//       newErrors.pickupArea = "Pickup area is required";
//     }

//     if (!pincode.trim() || !/^\d{6}$/.test(pincode)) {
//       newErrors.pincode = "Please enter a valid 6-digit pin code";
//     }

//     if (!selectedDuration) {
//       newErrors.selectedDuration = "Please select a duration";
//     }

//     if (selectedDuration === "Days" && (rentedDays <= 0 || isNaN(rentedDays))) {
//       newErrors.rentedDays = "Please enter a valid number of days";
//     }
//     if (selectedDuration === "Weeks" && (rentedWeeks <= 0 || isNaN(rentedWeeks))) {
//       newErrors.rentedWeeks = "Please enter a valid number of weeks";
//     }
//     if (selectedDuration === "Months" && (rentedMonths <= 0 || isNaN(rentedMonths))) {
//       newErrors.rentedMonths = "Please enter a valid number of months";
//     }

//      const currentDate = new Date();
//     const selectedDate = new Date(pickupDate);
//     if (!pickupDate || selectedDate <= currentDate) {
//       newErrors.pickupDate = "Pickup DateTime must be future with time.";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const username = JSON.parse(localStorage.getItem("userData"))?.username || "guest";
//   const Email = JSON.parse(localStorage.getItem("userData"))?.email || "guest";

//   const handleSubmit = async () => {
//      if (!validateForm()) {
//       return;
//     }

//      if (!confirm("Are you sure you want to confirm the booking?")) {
//       toast.warn("Booking not confirmed.");
//       return;
//     }

//     let totalAmount = 0;

//      if (selectedDuration === "Days") {
//       totalAmount = rentedDays * car.pricePerDay;
//     } else if (selectedDuration === "Weeks") {
//       totalAmount = rentedWeeks * car.pricePerWeek;
//     } else if (selectedDuration === "Months") {
//       totalAmount = rentedMonths * car.pricePerMonth;
//     }

//     const bookingData = {
//       userName: username,
//       email: Email,
//       carID: car.id,
//       CarName: car.carName,
//       path: car.path,
//       pickupLocation,
//       pickupArea,
//       pincode,
//       pickupDate,
//       Rented_Days: rentedDays,
//       Rented_Weeks: rentedWeeks,
//       Rented_Months: rentedMonths,
//       TotalAmount: totalAmount,
//     };

//     try {
//       const response = await axios.post('/api/bookings', bookingData);
//       if (response.status===200) {
//         toast.success("Booking successful!");
//       }
//     } catch (error) {
//       console.log("Error booking the car:", error);
//       toast.error("Error booking the car");

//     }
//   };

//   useEffect(() => {
//     if (carParam) {
//       setCar(JSON.parse(carParam));
//     }
//   }, [carParam]);

//   if (!car) {
//     return <p>Loading...</p>;
//   }

//    const minDate = new Date();
//   minDate.setDate(minDate.getDate() + 1);
//   const minDateString = minDate.toISOString().split('T')[0];

//   return (
//     <div className={Styles.container}>
//             <ToastContainer />
//        <div className={Styles.main}>
//         <NavBar />
//         <Image src={car.path || '/images/placeholder.jpg'} alt={car.carName} height={100} width={100} />
//         <h1>{car.carName}</h1>
//         <h2>ID : {car.id}</h2>
//         <h2>Year of Manufacture: {car.yearOfManufacture}</h2>
//         <h2>Mileage: {car.mileage}</h2>
//         <h2>Fuel Type: {car.fuelType}</h2>
//         <h2>Car Category: {car.carCategory}</h2>
//         <h2>Emission Standard: {car.emissionStandard}</h2>
//         <h2>Transmission Type: {car.transmissionType}</h2>
//         <h2>Seat Capacity: {car.seatCapacity}</h2>
//         <h2>Price per Day: ${car.pricePerDay}</h2>
//         <h2>Price per Week: ${car.pricePerWeek}</h2>
//         <h2>Price per Month: ${car.pricePerMonth}</h2>

//         <h2>Pick up Location:
//           <input
//             type="text"
//             value={pickupLocation}
//             onChange={(e) => setPickupLocation(e.target.value)}
//           />
//           {errors.pickupLocation && <p className="error">{errors.pickupLocation}</p>}
//         </h2>

//         <h2>Pick up Area:
//           <input
//             type="text"
//             value={pickupArea}
//             onChange={(e) => setPickupArea(e.target.value)}
//           />
//           {errors.pickupArea && <p className="error">{errors.pickupArea}</p>}
//         </h2>

//         <h2>Pin code:
//           <input
//             type="text"
//             value={pincode}
//             onChange={(e) => setPincode(e.target.value)}
//           />
//           {errors.pincode && <p className="error">{errors.pincode}</p>}
//         </h2>

//         <h2>Select duration:
//           <select value={selectedDuration} onChange={handleDurationChange}>
//             <option value="">Select duration</option>
//             <option value="Days">Days</option>
//             <option value="Weeks">Weeks</option>
//             <option value="Months">Months</option>
//           </select>
//           {errors.selectedDuration && <p className="error">{errors.selectedDuration}</p>}
//         </h2>

//         {selectedDuration === "Days" && (
//           <h2>
//             Days:
//             <input
//               type="number"
//               id="days"
//               min="0"
//               max="365"
//               value={rentedDays}
//               onChange={(e) => setRentedDays(e.target.value)}
//             />
//             {errors.rentedDays && <p className="error">{errors.rentedDays}</p>}
//           </h2>
//         )}

//         {selectedDuration === "Weeks" && (
//           <h2>
//             Weeks:
//             <input
//               type="number"
//               id="weeks"
//               min="0"
//               max="52"
//               value={rentedWeeks}
//               onChange={(e) => setRentedWeeks(e.target.value)}
//             />
//             {errors.rentedWeeks && <p className="error">{errors.rentedWeeks}</p>}
//           </h2>
//         )}

//         {selectedDuration === "Months" && (
//           <h2>
//             Months:
//             <input
//               type="number"
//               id="months"
//               min="0"
//               max="12"
//               value={rentedMonths}
//               onChange={(e) => setRentedMonths(e.target.value)}
//             />
//             {errors.rentedMonths && <p className="error">{errors.rentedMonths}</p>}
//           </h2>
//         )}

//         <h2>Pick up Date and Time:
//           <input
//             type="date"
//             value={pickupDate}
//             min={minDateString + "T00:00"}
//             onChange={(e) => setPickupDate(e.target.value)}
//           />
//           {errors.pickupDate && <p className="error">{errors.pickupDate}</p>}
//         </h2>

//         <h2>
//           <button onClick={handleSubmit}>Book</button>
//         </h2>
//       </div>
//     </div>
//   );
// };

// export default CarDetails;
