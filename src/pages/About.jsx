import React from 'react';
import './pageStyles/AboutStyles.css';

const About = () => {
  return (
    <div className="about-us-section">
      <div className="about-us-info">
        <h2>ABOUT US</h2>
        <p>
          We are founded by a group of friends who played as &lt;Rock Bottom&gt;
          from late Classic into WoTLK. (Arcanite Reaper + Grobbulus Alliance)
        </p>
        <p>
          We were obviously the most successful reroll project guild in
          existence, so popular that Asmongold himself even interviewed
          Metaslave about what raiding on a dead realm was like! We definitely
          full cleared SWP pre-nerf, and thrived in wotlk classic. Sadly, due
          to.. factors.., Rock Bottom temporarily disbanded in Summer 2023
          because Naxx literally was the peak of wotlk classic, and Ulduar gave
          us the big sad.
        </p>
        <p>
          Enter Spring 2023.. We are currently doing business as &lt;CLAM
          LORDS&gt; in CLASSIC SEASON OF DISCOVERY! We are on the CHAOS BOLT
          (Horde) RP-PVP Realm. We currently hold the server best Gnomeregan 10
          man speed run time at 26:47, and are continuously looking to make
          improvements each lockout. We currently host 7 independent raids each
          lockout, all with varying goals. At &lt;CLAM LORDS&gt;, we aim to
          provide guild members with the tools they need to successfully
          organize and execute successful raids that reflect their vision, and
          playstyle. Whether you want to casually clear, or sweaty speed-run,
          &lt;CLAM LORDS&gt; has a home for all ranges of WoW gamers.
        </p>
        <div className="about-us-video">
          <h4>
            YouTube
            <br />
            Asmongold TV
            <br />
            Playing on a Dead Server - Asmongold Interviews Player That Won't
            Q...
          </h4>
          <iframe
            title="Website Viewer"
            src="https://www.youtube.com/embed/IH3ZtyyQJuc"
          ></iframe>
        </div>
      </div>
      <div className="conduct">
        <h2>Our current code of conduct</h2>
        <ul>
          <li>
            😎 1. Be you. Be free, Be humble, know your audience and take care
            of your homies. Our goals are to cultivate long lasting friendships.
            please don't go out of your way to offend others. If you have issues
            please contact &lt;Rowjimmy&gt; as they are the secretary of
            diversity DN [diversity and deez nuts] or any clam police member.
            *Our mantra is GOOD VIBES and positivity through the power of clams
            and friendship. if you go against this, you're out!
          </li>
          <li>
            😎 2. There will be no filtering or restricted speech. though, be
            thoughtful and know your audience amongst fellow homies in VC/text.
            shitposting and memery is fine, though if you generally piss off a
            majority of people for being too "special", you'll be forced to
            watch a one hour disciplinary video over discord (probably the films
            CATS)
          </li>
          <li>
            😎 3. Loot drama is stupid as hell and we don't want to hear about
            you losing your BIS item to another guildie, root for each other and
            build each other up. simple as that
          </li>
          <li>
            😎 4. Griefing of your own guildmates or people on the realm will
            not be tolerated. this is non-negotiable. We want to be a force
            recognized for being homies to others on our realm.
          </li>
        </ul>
        <p>-krix</p>
      </div>
    </div>
  );
};

export default About;
