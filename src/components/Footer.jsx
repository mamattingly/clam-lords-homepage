import './componentStyles/FooterStyles.css';
import { useState, useEffect } from "react";
import { FaDog } from "react-icons/fa";

function Footer() {
  const [bark, setBark] = useState(false);

  const barkToggle = () => {
    setBark(!bark);
  };

  useEffect(() => {
    setBark(false);
  }, []);

  return (
    <footer>
      <p>Clam Lords © 2024</p>
      <p>Powered by React</p>
      <div className="bark" onClick={barkToggle} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
        <FaDog size={25} style={{ color: "#FFF" }} />
        {bark && <p style={{ color: '#FFF', marginLeft: '5px' }}>Bark!</p>}
      </div>
    </footer>
  );
}

export default Footer;
