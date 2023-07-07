import { NavLink } from "react-router-dom";
import imageNotFound from "../../assets/404.gif";

function PageNotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ cursor: "pointer", textDecoration: 'underline' }}>
        <NavLink to="/">Go to Home</NavLink>
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={imageNotFound} alt="PageNotFound" style={{ height: 'auto', maxWidth: '100%' }} />
        <p style={{ fontSize: '1.5rem' }}>Page Not Found..!!</p>
      </div>
    </div>
  );
}

export default PageNotFound;
