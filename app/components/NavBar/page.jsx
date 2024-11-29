'use client'

import Styles from '../../css/NavBar.module.css'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  const username = localStorage.getItem("username");

  return (
    <div className={Styles.nav}>
      
      <div className={Styles.title}>
        <Image src='/svg/logo.svg' alt='logo' height={25} width={50} />
        <i>Car Rental</i>
      </div>

      <div className={Styles.items}> 
         {username !== 'Admin' && (<Link href='/components/HomePage'> <li>Home</li></Link>)}
        <Link href='/components/Rent'>  <li>Book Cars</li>  </Link>
         {username !== 'Admin' && (<Link href='/components/Contact'> <li>Contact Us</li></Link>)}
          {username === 'Admin' && ( <Link href='/components/Admin'> <li>Admin</li> </Link>)}
      </div>

      <div className={Styles.items}> User: {username || "guest"}
        <Link href='/' onClick={() => localStorage.clear()}> <button>Sign Out</button> </Link>
      </div>

    </div>
  )
}

export default page
