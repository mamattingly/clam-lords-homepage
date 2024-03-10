import "./componentStyles/MemberStyles.css";
import { FaShieldAlt, FaChartBar } from "react-icons/fa";
import druidIcon from "../assets/classIcons/druid.png";
import hunterIcon from "../assets/classIcons/hunter.png";
import mageIcon from "../assets/classIcons/mage.png";
import paladinIcon from "../assets/classIcons/paladin.png";
import priestIcon from "../assets/classIcons/priest.png";
import rogueIcon from "../assets/classIcons/rogue.png";
import shamanIcon from "../assets/classIcons/shaman.png";
import warlockIcon from "../assets/classIcons/warlock.png";
import warriorIcon from "../assets/classIcons/warrior.png";

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

  const classId = {
    1: warriorIcon,
    3: hunterIcon,
    4: rogueIcon,
    5: priestIcon,
    7: shamanIcon,
    8: mageIcon,
    9: warlockIcon,
    11: druidIcon,
  };

  console.log(member);

  return (
    <li className="card" >
      <p>{member.character.name}</p>
      <p>Rank: {getRankLabel(member.rank)}</p>
      <img
        src={classId[member.character.playable_class.id]}
        alt={member.character.class}
      />
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
36449619