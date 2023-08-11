import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { checkCustomRoutes } from "next/dist/lib/load-custom-routes";
import { Children } from "react";

export const metadata = {
  title: "littlewins.",
  description: "Share your little wins with the world.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
