import "./pageStyles/DiscordStyles.css";
import discordQR from "../assets/discordQR.svg";
import Transition from "../Transition";

export default function Discord() {
  return (
    <Transition>
    <div className="discord blur-background">
      <div className="discord-content">
      <h2>Join The Clam Lord's Discord Server!</h2>
        <p>Scan the QR Code on your mobile device or click the QR Code below</p>
        <a
          href="https://discord.gg/7ufyqJtA3q"
          target="_blank"
          rel="noreferrer"
        >
          <img src={discordQR} className="qr-code" alt="Discord QR Code" />
        </a>
      </div>
      </div>
      </Transition>
  );
}
