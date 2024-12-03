import './globals.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

export const metadata = {
  title: "Car Rental System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <GoogleOAuthProvider clientId="608730196327-4bt9nrthqkq7lne1t3g2fmh58rbgni05.apps.googleusercontent.com">
        {children}</GoogleOAuthProvider>
      </body>
    </html>
  );
}
