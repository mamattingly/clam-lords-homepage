import "./componentStyles/MemberStyles.css";
import { FaShieldAlt, FaChartBar } from "react-icons/fa";

const Member = ({ member }) => {
  const getRankLabel = (rank) => {
    switch (rank) {
      case 0:
        return "Clamgodx";
      case 1:
        return "God Clam";
      case 2:
        return "Demon Clam";
      case 3:
        return "Clam Police";
      case 4:
        return "Seasoned Clam";
      case 5:
        return "Clammer";
      case 6:
        return "Baby Clam";
      default:
        return "Ghost Clam";
    }
  };

  return (
    <li className="card">
      <p>{member.character.name}</p>
      <p>Rank: {getRankLabel(member.rank)}</p>
      <div>
        <a
          href={`https://www.classic-armory.org/character/us/vanilla/chaos-bolt/${member.character.name}`}
          target="_blank"
          rel="noreferrer"
        >
          <FaShieldAlt />
        </a>
        <a
          href={`https://sod.warcraftlogs.com/character/us/chaos-bolt/${member.character.name}`}
          target="_blank"
          rel="noreferrer"
        >
          <FaChartBar />
        </a>
      </div>
    </li>
  );
};

export default Member;
