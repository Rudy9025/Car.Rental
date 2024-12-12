 import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "dotenv/config";

export const metadata = {
  title: "Car Rental System",
  icons: {
    icon: "/images/icons/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
