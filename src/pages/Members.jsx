import "./pageStyles/MembersStyles.css";
import { useEffect, useState } from "react";
import Member from "../components/Member";
import axios from "axios";


const Members = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenResponse = await axios.post(
          "https://us.battle.net/oauth/token",
          new URLSearchParams({ grant_type: "client_credentials" }).toString(),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization:
                "Basic " +
                btoa(
                  import.meta.env.VITE_CLIENT_ID +
                    ":" +
                  import.meta.env.VITE_SECRET
                ),
            },
          }
        );

        const accessToken = tokenResponse.data.access_token;
        const response = await axios.get(
          `https://us.api.blizzard.com/data/wow/guild/chaos-bolt/clam-lords/roster?namespace=profile-classic1x-us&locale=en_US&access_token=${accessToken}`
        );

        const rosterData = response.data.members;
        const sortedData = rosterData.sort((a, b) => a.rank - b.rank);

        setData(sortedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="members-container">
      {data ? (
        <div>
          <ul className="members-grid">
            {data.map((member) => (
              <Member key={member.character.id} member={member} />
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading members...</p>
      )}
    </div>
  );
};

export default Members;
