import "./pageStyles/MembersStyles.css";
import { useEffect, useState } from "react";
import Member from "../components/Member";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Fuse from "fuse.js";

const Members = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [pageData, setPageData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const pageSize = 30;

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

  useEffect(() => {
    if (data.length > 0) {
      loadPageState();
    }
  }, [data, searchQuery]);

  const loadPageState = () => {
    let filteredData = data;
    if (searchQuery) {
      const fuse = new Fuse(data, { keys: ["character.name"] });
      console.log("Fuse instance:", fuse);
      const result = fuse.search(searchQuery);
      filteredData = result.map((item) => item.item);
    }

    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    setPageData(filteredData.slice(start, end));
    setPage(1);
    setHasMore(end < filteredData.length);
  };

  const handleScrollThreshold = 0.9;

  console.log("data", data);
  return (
    <div className="members-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search members..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {data.length > 0 ? (
        <InfiniteScroll
          dataLength={pageData.length}
          next={loadPageState}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          scrollThreshold={handleScrollThreshold}
        >
          <ul className="members-grid">
            {pageData.map((member) => (
              <Member key={member.character.id} member={member} />
            ))}
          </ul>
        </InfiniteScroll>
      ) : (
        <div className="members-container-loading">
          <p>Loading members...</p>
        </div>
      )}
    </div>
  );
};

export default Members;
