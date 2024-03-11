import "./pageStyles/MembersStyles.css";
import { FaReact } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import Member from "../components/Member";
import axios from "axios";
import Fuse from "fuse.js";
import Transition from "../Transition";

const Members = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [pageData, setPageData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const pageSize = 30;
  const loader = useRef(null);

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

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [page]);

  const loadPageState = () => {
    let filteredData = data;
    let start = (page - 1) * pageSize;
    let end = start + pageSize;
    const slicedData = filteredData.slice(start, end);

    if (searchQuery) {
      const fuse = new Fuse(data, { keys: ["character.name"] });
      const result = fuse.search(searchQuery);
      filteredData = result.map((item) => item.item);
      const slicedData = filteredData.slice(0, pageSize);
      setPageData(slicedData);
    } else {
      setPageData((prevPageData) => [...prevPageData, ...slicedData]);
      setPage(page + 1);
      setHasMore(end < filteredData.length);
    }
  };

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting && hasMore) {
      loadPageState();
    }
  };

  return (
    <Transition>
    <div className="members-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search members..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {data.length > 0 ? (
        <ul className="members-grid">
          {pageData.map((member, index) => (
            <Member key={member.character.id + index} member={member} />
          ))}
          <div ref={loader}>1
          </div>
        </ul>
      ) : (
        <div className="members-container-loading">
          <p>Loading members... <FaReact size={20} className="react-icon" /></p>
        </div>
      )}
      </div>
    </Transition>
  );
};

export default Members;
