import { NextResponse } from 'next/server';

export function middleware(req) {
//    const adminLogged = req.cookies.get('AdminLogged');
//   const validUserLogged = req.cookies.get('validUserLogged');

const adminLogged = req.cookies.get('userData') && req.cookies.get('userData').username === "Admin";
const validUserLogged = req.cookies.get('userData') && req.cookies.get('userData').username !== "Admin";


   if (adminLogged || validUserLogged) {
    return NextResponse.next();
  } else {
     return NextResponse.redirect(new URL('/', req.url));   
  }
}

 export const config = {
  matcher: [
    '/components/HomePage',
    '/components/Contact',
    '/components/History',
    '/components/Logs',
    '/components/NavBar',
    '/components/Rent',
     '/components/Admin'
  ],
};

