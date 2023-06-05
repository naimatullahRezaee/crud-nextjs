import "@styles/globals.css";

export const metadata = {
  title: "CRUD-App",
  description: "This CRUD NextJs App ",
};

const RoutLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
          <main className="app">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RoutLayout;
