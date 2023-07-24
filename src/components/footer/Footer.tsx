import "./footer.scss";

const Footer = () => {
  const getFullYear = new Date().getFullYear();

  return (
    <div className="footer">
      <span>Olatoy Dashboard</span>
      <span>&copy; {getFullYear} | All Right Reserved</span>
    </div>
  );
};

export default Footer;
