import "./pageStyles/LogsStyles.css";
import Transition from "../Transition";

function Logs() {
  return (
    <Transition>
    <div className="logs-container">
      <div className="logs-content">
        <h2>Welcome to the Clam Lords' World of Logs Page!</h2>
        <p>
          Embark on an epic journey through our conquests in the realms of World
          of Warcraft.
        </p>
        <div>
          <a
            href="https://sod.warcraftlogs.com/guild/us/chaos-bolt/clam%20lords"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://assets.rpglogs.com/img/warcraft/favicon.png?v=2"
              alt="Warcraft Logs"
            />
          </a>
          <p>Click the icon to open the World of Logs Page</p>
        </div>
        <p className="log-title">
          Dive into the heart of our adventures and explore the intricate logs
          of our conquests across the realms of World of Warcraft. Witness our
          triumphs, unravel our strategies, and delve into the depths of our
          encounters. Embark on a journey through our legendary logs, where
          every click unveils tales of valor, camaraderie, and epic loot. Join
          us in reliving the moments that define our Clan's legacy.
        </p>
      </div>
      </div>
    </Transition>
  );
}

export default Logs;
