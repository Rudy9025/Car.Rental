"use client";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/page";
import Styles from "../../css/History.module.css";
import axios from "axios";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCookie } from 'cookies-next';

const page = () => {
  const [bookingHistory, setBookingHistory] = useState(null);
  const [loading, setLoading] = useState(true);  

  const userData = getCookie("userData");
  const username = userData ? JSON.parse(userData).username : "guest";
  const Email = userData ? JSON.parse(userData).email : "guest";

  const getCars = async () => {
    try {
      const response = await axios.post("/api/history", { username, Email });
      setBookingHistory(response.data[0]);
      setLoading(false);  
    } catch (error) {
      console.log("Error fetching Booking History:", error);
      setLoading(false);  
    }
  };

  useEffect(() => {
    if (username !== "guest" && Email !== "guest") {
      getCars();
    } else {
      setLoading(false);  
    }
  }, []);

  const cancelBooking = async (Booking_id) => {
    try {
      const response = await axios.patch("/api/bookings", { Booking_id });
      if (response.status === 200) {
        getCars();
        console.log("Booking cancelled successfully");
      }
    } catch (error) {
      console.log("Error canceling booking:", error);
    }
  };

  return (
    <div className={Styles.container}>
      <ToastContainer stacked />
      <div className={Styles.main}>
        <NavBar />
        <h1>Booking History</h1>

         {loading ? (
          <div style={{ position: "absolute", top: "50%", bottom: "50%" }}>
            <span className={Styles.loader}></span>
          </div>
        ) : (
           <div className={Styles.History}>
            {bookingHistory && bookingHistory.length > 0 ? (
              bookingHistory.map((booking, index) => {
                const rentedDays = booking.Rented_Days || 0;
                const rentedWeeks = booking.Rented_Weeks || 0;
                const rentedMonths = booking.Rented_Months || 0;

                let duration = "";
                if (rentedDays > 0) {
                  duration = `${rentedDays} Days`;
                } else if (rentedWeeks > 0) {
                  duration = `${rentedWeeks} Weeks`;
                } else if (rentedMonths > 0) {
                  duration = `${rentedMonths} Months`;
                } else {
                  duration = "Duration not available";
                }

                return (
                  <div key={index} className={Styles.cars}>
                    <Image
                      src={`${booking.path}`}
                      height={200}
                      width={200}
                      alt="car img"
                      priority
                    />
                    <div className={Styles.CarDetails}>
                      <p className={Styles.carName}>{booking.CarName}</p>
                      <p>
                        <Image
                          src="/svg/duration.svg"
                          width={1}
                          height={1}
                          alt="duration logo"
                        />{" "}
                        {duration}
                      </p>
                      <p>
                        <Image
                          src="/svg/pickupDate.svg"
                          width={1}
                          height={1}
                          alt="pickupDate logo"
                        />{" "}
                        {booking.pickupDate}
                      </p>
                      <p className={Styles.amount}>
                        <Image
                          src="/svg/dollar.svg"
                          width={1}
                          height={1}
                          alt="dollar logo"
                        />{" "}
                        $ <strong>{booking.TotalAmount}</strong>
                      </p>
                    </div>

                    <button
                      className={Styles.button}
                      onClick={() =>
                        (confirm("Are you sure to cancel booking?") &&
                          cancelBooking(booking.Booking_id)) ||
                        toast.warn("Cancellation terminated.")
                      }
                    >
                      Cancel Booking{" "}
                      <Image
                        src="/svg/cancel.svg"
                        width={1}
                        height={1}
                        alt="cancel logo"
                      />
                    </button>
                  </div>
                );
              })
            ) : (
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <p>No Bookings Found....</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;



//  "use client";
// import { useEffect, useState } from "react";
// import NavBar from "../NavBar/page";
// import Styles from "../../css/History.module.css";
// import axios from "axios";
// import Image from "next/image";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { getCookie } from 'cookies-next';
 
// const page = () => {
//   const [bookingHistory, setBookingHistory] = useState(null);
//   // const username = JSON.parse(localStorage.getItem("userData"))?.username || "guest";
//   // const Email = JSON.parse(localStorage.getItem("userData"))?.email || "guest";
  
//   const userData = getCookie("userData");

//    const username = userData ? JSON.parse(userData).username : "guest";
//   const Email = userData ? JSON.parse(userData).email : "guest";

//   const getCars = async () => {
//     try {
//       const response = await axios.post("/api/history", { username, Email });
//       // console.log("Booking History Response:", response.data[0]);
//       setBookingHistory(response.data[0]);
//     } catch (error) {
//       console.log("Error fetching Booking History:", error);
//     }
//   };

//   useEffect(() => {
//     if (username !== "guest" && Email !== "guest") {
//       getCars();
//     }
//   }, []);

//   const cancelBooking = async (Booking_id) => {
//     try {
//       const response = await axios.patch("/api/bookings", { Booking_id });
//       if (response.status === 200) {
//         getCars();
//         console.log("Booking cancelled successfully");
//       }
//     } catch (error) {
//       console.log("Error canceling booking:", error);
//     }
//   };

//   return (
//     <div className={Styles.container}>
//       <ToastContainer stacked />
//       <div className={Styles.main}>
//         <NavBar />
//         <h1>Booking History</h1>
//         {bookingHistory && bookingHistory.length > 0 ? (
//           <div className={Styles.History}>
//             {bookingHistory.map((booking, index) => {
//               const rentedDays = booking.Rented_Days || 0;
//               const rentedWeeks = booking.Rented_Weeks || 0;
//               const rentedMonths = booking.Rented_Months || 0;

//               let duration = "";
//               if (rentedDays > 0) {
//                 duration = `${rentedDays} Days`;
//               } else if (rentedWeeks > 0) {
//                 duration = `${rentedWeeks} Weeks`;
//               } else if (rentedMonths > 0) {
//                 duration = `${rentedMonths} Months`;
//               } else {
//                 duration = "Duration not available";
//               }

//               return (
//                 <div key={index} className={Styles.cars}>
//                   <Image
//                     src={`${booking.path}`}
//                     height={200}
//                     width={200}
//                     alt="car img"
//                     priority
//                   />
//                   <div className={Styles.CarDetails}>
//                     <p className={Styles.carName}>{booking.CarName}</p>
//                     <p>
//                       {" "}
//                       <Image
//                         src="/svg/duration.svg"
//                         width={1}
//                         height={1}
//                         alt="duration logo"
//                       />{" "}
//                       {duration}
//                     </p>
//                     <p>
//                       <Image
//                         src="/svg/pickupDate.svg"
//                         width={1}
//                         height={1}
//                         alt="pickupDate logo"
//                       />{" "}
//                       {booking.pickupDate}
//                     </p>
//                     <p className={Styles.amount}>
//                       <Image
//                         src="/svg/dollar.svg"
//                         width={1}
//                         height={1}
//                         alt="dollar logo"
//                       />{" "}
//                       $ <strong>{booking.TotalAmount}</strong>
//                     </p>
//                   </div>

//                   <button
//                     className={Styles.button}
//                     onClick={() =>
//                       (confirm("Are you sure to cancel booking?") &&
//                         cancelBooking(booking.Booking_id)) ||
//                       toast.warn("Cancellation terminated.")
//                     }
//                   >
//                     Cancel Booking{" "}
//                     <Image
//                       src="/svg/cancel.svg"
//                       width={1}
//                       height={1}
//                       alt="cancel logo"
//                     />
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           <div style={{position:"absolute",top:'50%',bottom:"50%"}}>
//     <span className={Styles.loader}></span>
//     {/* No Bookings Found.... */}
//     </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default page;