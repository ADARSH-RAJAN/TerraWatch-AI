import { useState } from "react";
import "./App.css";
import MissionMap from "./MissionMap";

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState("Moon");
  const [selectedObject, setSelectedObject] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMission, setSelectedMission] = useState("All");

  const moonObjects = [
    {
      name: "Apollo Lunar Module",
      category: "Landing Equipment",
      mission: "Apollo 11",
      image: "/apollo11.jpg",
      description: "The descent stage that helped astronauts land on the Moon.",
      history: "The Apollo 11 Lunar Module was named Eagle. It carried Neil Armstrong and Buzz Aldrin to the Moon in July 1969. Its descent stage remained at the landing site.",
      importance: "It made the first crewed Moon landing possible and became an important milestone in human space exploration.",
      whyLeft: "The descent stage was intentionally left on the Moon. It served as the launch platform for the astronauts' return ascent stage. Bringing it back to Earth was unnecessary.",
      location: "Tranquility Base, Mare Tranquillitatis, on the Moon.",
      fact: "Neil Armstrong and Buzz Aldrin spent about 21 hours and 36 minutes on the lunar surface.",
      icon: "🚀",

    },
    {
      name: "Lunar Rover",
      image: "/lunar-rover.jpg",
      category: "Surface Exploration",
      mission: "Apollo 15",
      description: "A vehicle used by astronauts to explore the lunar surface.",
      history: "The Lunar Roving Vehicle was first used during Apollo 15 in 1971. It allowed astronauts to travel farther across the lunar surface and collect more samples.",
      importance: "The rover increased astronaut mobility and helped scientists explore a much larger area of the Moon.",
      whyLeft: "The Lunar Roving Vehicle was designed only for use on the Moon. It was left behind because the astronauts returned to Earth using the Lunar Module ascent stage, and the rover was not designed to make the journey back.",
      location: "The Apollo 15 Lunar Rover was left near the Hadley-Apennine region of the Moon.",
      fact: "The Lunar Rover was also used during Apollo 16 and Apollo 17.",
      icon: "🛻",
    },
    {
      name: "Scientific Instruments",
      image: "/scientific-instruments.jpg",
      category: "Scientific Instrument",
      mission: "Apollo Missions",
      description: "Equipment left to collect scientific data from the Moon.",
      history: "Apollo astronauts deployed scientific equipment on the Moon to study its environment. Later Apollo missions used the Apollo Lunar Surface Experiments Package (ALSEP).",
      importance: "These instruments helped scientists study moonquakes, the lunar atmosphere and the Moon's internal structure.",
      whyLeft: "Astronauts deployed scientific instruments on the Moon to collect data about moonquakes, lunar soil and the Moon's environment. The instruments were designed to remain on the lunar surface and transmit scientific measurements.",
      location: "Different Apollo landing sites across the lunar surface.",
      fact: "Some Apollo scientific instruments sent data back to Earth for several years after the astronauts returned home.",
      icon: "🔬",
    },
  ];

  const marsObjects = [
    {
      name: "Parachute",
      category: "Landing Equipment",
      image: "/mars-debris.png",
      mission: "Perseverance",
      description: "Helped slow the spacecraft during its landing on Mars.",
      history: "NASA's Perseverance rover used a large supersonic parachute during its landing on Mars in February 2021. The parachute slowed the spacecraft during its descent.",
      importance: "It helped reduce the spacecraft's speed and made a safe landing possible.",
      whyLeft: "The parachute slowed Perseverance during its descent through the Martian atmosphere. Once its job was complete, it separated from the spacecraft and fell onto the Martian surface. It was not designed to return.",
      location: "The parachute was discarded during landing and came to rest on the surface of Mars.",
      fact: "The parachute carried a hidden message encoded in its pattern: Dare Mighty Things.",
      icon: "🪂",
    },
    {
      name: "Backshell",
      category: "Protective Equipment",
      image: "/mars-debris.png",
      mission: "Perseverance",
      description: "Protected the rover during its journey through the atmosphere.",
      history: "The Perseverance rover's backshell protected the spacecraft during its journey through space and the initial stages of its entry into the Martian atmosphere. It was released before the rover's final descent.",
      importance: "It protected the rover and helped guide it safely through the atmosphere during landing.",
      whyLeft: "The backshell protected the parachute and rover during the journey through space and entry into the Martian atmosphere. After deployment, it separated from the rover and fell onto the Martian surface.",
      location: "The backshell was discarded during the landing of Perseverance in Jezero Crater, Mars.",
      fact: "The backshell contained the parachute that helped slow the spacecraft during its descent.",
      icon: "🛡️",
    },
    {
      name: "Landing Hardware",
      image: "/curiosity-hardware.jpg",
      category: "Landing Equipment",
      mission: "Mars Missions",
      description: "Parts of the landing system left on the Martian surface.",
      history: "NASA's Perseverance rover used a sky crane landing system in February 2021. During the final descent, the system lowered the rover onto the Martian surface using cables. The descent stage then flew away and crashed at a distance.",
      importance: "The sky crane system made it possible to land a large rover safely on Mars without using a traditional landing platform.",
      whyLeft: "The landing hardware helped deliver the rover safely to the Martian surface. Components such as the descent stage separated after landing and were left behind because they were not needed for the rover's exploration.",
      location: "Jezero Crater, Mars, near the Perseverance landing site.",
      fact: "The descent stage used rockets to hover while lowering Perseverance onto the surface.",
      icon: "🛰️",
    },
  ];
  const timeline = [
    {
      year: "1969",
      title: "Apollo 11",
      description: "Humans landed on the Moon for the first time."
    },
    {
      year: "1971",
      title: "Apollo 15",
      description: "Astronauts used the Lunar Roving Vehicle on the Moon."
    },
    {
      year: "1972",
      title: "Apollo 17",
      description: "Apollo 17 was the final crewed Moon landing mission in December 1972. Astronauts explored the lunar surface using the Lunar Roving Vehicle and collected valuable scientific samples."
    },
    {
      year: "2021",
      title: "Perseverance",
      description: "NASA's Perseverance rover successfully landed on Mars."
    }
  ];
  const objects = (
    selectedPlanet === "Moon" ? moonObjects : marsObjects
  ).filter((item) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      item.name.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search) ||
      item.mission.toLowerCase().includes(search) ||
      (item.history || "").toLowerCase().includes(search) ||
      (item.location || "").toLowerCase().includes(search) ||
      (item.importance || "").toLowerCase().includes(search);

    const matchesMission =
      selectedMission === "All" || item.mission === selectedMission;

    return matchesSearch && matchesMission;
  });

  return (
    <div className="app">

      <nav className="navbar">
        <h2>🌌 SPACE EXPLORER</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#explore">Explore</a>
          <a href="#timeline">Timeline</a>
          <a href="#gallery">Gallery</a>
          <a href="#mission-map">Mission Map</a>
          <a href="#importance">Why It Matters</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <section className="hero" id="home">

        <div className="space-scene" aria-hidden="true">
          <div className="stars"></div>

          <div className="planet planet-earth">
            <div className="planet-shadow"></div>
          </div>

          <div className="planet planet-moon"></div>

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
        </div>
        <p className="tagline">THE HISTORY BEYOND THE STARS</p>

        <h1>
          Forgotten Missions.
          <br />
          <span>Unforgotten Stories.</span>
        </h1>

        <p className="hero-description">
          Discover the human-made objects left behind on
          the Moon and Mars. Every forgotten object has
          a story to tell.
        </p>

        <a href="#explore" className="explore-button">
          Start Exploring →
        </a>

      </section>

      <section className="explore-section" id="explore">

        <p className="section-label">DISCOVER THE UNKNOWN</p>

        <h2>Explore Forgotten Worlds</h2>

        <p className="section-description">
          Choose a world and discover the equipment and
          stories left behind by space explorers.
        </p>

        <div className="planet-buttons">

          <button
            className={selectedPlanet === "Moon" ? "active" : ""}
            onClick={() => setSelectedPlanet("Moon")}
          >
            🌕 Moon
          </button>

          <button
            className={selectedPlanet === "Mars" ? "active" : ""}
            onClick={() => setSelectedPlanet("Mars")}
          >
            🔴 Mars
          </button>

        </div>
        <div className="equipment-search">
          <input
            type="text"
            placeholder="🔍 Search forgotten equipment..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={selectedMission}
            onChange={(e) => setSelectedMission(e.target.value)}
          >
            <option value="All">All Missions</option>
            <option value="Apollo 11">Apollo 11</option>
            <option value="Apollo 15">Apollo 15</option>
            <option value="Perseverance">Perseverance</option>
            <option value="Curiosity">Curiosity</option>
          </select>
          <button onClick={() => setSearchTerm("")}>
            Clear Search
          </button>
        </div>

        {objects.length === 0 && (
          <p className="no-results">
            No forgotten equipment found. Try another search!
          </p>
        )}

        <div className="object-grid">

          {objects.map((item, index) => (
            <div className="object-card" key={index}>

              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-image"
                />
              ) : (
                <div className="object-icon">{item.icon}</div>
              )}


              <p className="mission">{item.mission}</p>

              {item.category && (
                <span className="object-category">
                  {item.category}
                </span>
              )}

              <h3>{item.name}</h3>


              <p>{item.description}</p>

              <button
                className="story-button"
                onClick={() => setSelectedObject(item)}
              >
                Discover Story →
              </button>

            </div>
          ))}

        </div>

      </section>
      {/* NASA Mission Timeline */}

      <section className="timeline-section" id="timeline">
        <h2>NASA Mission Timeline</h2>
        <p>Important milestones in space exploration</p>

        <div className="timeline-container">
          {timeline.map((item, index) => (
            <div className="timeline-card" key={index}>
              <span className="mission-year">{item.year}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Object Story Panel */}
      {/* NASA Image Gallery */}

      <section className="gallery-section" id="gallery">

        <h2>NASA Mission Gallery</h2>

        <p>Explore photographs of forgotten space equipment.</p>

        <div className="gallery-container">

          <div className="gallery-card">
            <img
              src="/apollo11.jpg"
              alt="Apollo Lunar Module"
            />
            <h3>Apollo Lunar Module</h3>
            <p>Equipment left behind on the Moon.</p>
          </div>

          <div className="gallery-card">
            <img
              src="/mars-debris.png"
              alt="Perseverance landing debris"
            />
            <h3>Perseverance Landing Debris</h3>
            <p>Parachute and backshell from the Mars landing.</p>
          </div>
          <div className="gallery-card">
            <img
              src="/lunar-rover.jpg"
              alt="Apollo Lunar Rover"
            />
            <h3>Lunar Roving Vehicle</h3>
            <p>The vehicle used by Apollo astronauts to explore the Moon.</p>
          </div>
        </div>

        <p className="gallery-credit">
          Images and mission information: NASA / JPL-Caltech
        </p>

      </section>
      {selectedObject && (
        <div className="story-overlay">

          <div className="story-modal">

            <button
              className="close-story"
              onClick={() => setSelectedObject(null)}
            >
              ✕
            </button>
            {selectedObject.image && (
              <img
                src={selectedObject.image}
                alt={selectedObject.name}
                className="object-image"
              />
            )}

            <p className="mission">
              {selectedObject.mission}
            </p>

            {selectedObject.category && (
              <span className="object-category">
                {selectedObject.category}
              </span>
            )}

            <h2>{selectedObject.name}</h2>


            <div className="story-icon">
              {selectedObject.icon}
            </div>

            <p className="story-description">
              {selectedObject.description}
            </p>
            <div className="story-details">
              <h3>Mission History</h3>
              <p>{selectedObject.history}</p>

              <h3>Scientific Importance</h3>
              <p>{selectedObject.importance}</p>
              {selectedObject.whyLeft && (
                <div className="story-details">
                  <h3>💡 Why Was It Left Behind?</h3>
                  <p>{selectedObject.whyLeft}</p>
                </div>
              )}

              <h3>Current Location</h3>
              <p>{selectedObject.location}</p>

              <h3>Did You Know?</h3>
              <p>{selectedObject.fact}</p>


            </div>



            <button
              className="close-button"
              onClick={() => setSelectedObject(null)}
            >
              Close Story
            </button>

          </div>

        </div>
      )}

      
      {/* Interactive Mission Map */}

      <section className="map-section" id="mission-map">

        <h2>Forgotten Mission Locations</h2>

        <p>
          Discover where historical space equipment was left behind.
        </p>

        <p className="map-note">
          These locations mark historic mission sites where astronauts
          and robotic explorers left equipment on the lunar and Martian surfaces.
        </p>
        <p className="map-note">
          Note: Coordinates indicate approximate mission landing
          sites. Individual equipment locations may differ.
        </p>
        <div className="map-legend">
          <span>🌕 Moon — Lunar landing sites</span>
          <span>🔴 Mars — Rover landing sites</span>
        </div>
        <MissionMap />
        

        

      </section>

      

      {/* Why These Objects Matter */}
      <section className="importance-section" id="importance">
        <h2>Why These Objects Matter</h2>

        <p>
          Space equipment left behind on the Moon and Mars tells
          important stories about human exploration, scientific
          discoveries and technological achievements.
        </p>

        <div className="importance-container">

          <div className="importance-card">
            <h3>🔬 Scientific Research</h3>
            <p>
              Some instruments left on the Moon continue to provide
              valuable scientific data about our universe.
            </p>
          </div>

          <div className="importance-card">
            <h3>🚀 Engineering History</h3>
            <p>
              Abandoned spacecraft components show how engineers
              developed technologies for landing on other worlds.
            </p>
          </div>

          <div className="importance-card">
            <h3>🌍 Human Heritage</h3>
            <p>
              These objects preserve the history of space exploration
              and represent important achievements of humanity.
            </p>
          </div>

        </div>
      </section>
      {/* Mission Statistics */}

      <section className="stats-section">

        <h2>Space Exploration in Numbers</h2>

        <div className="stats-container">

          <div className="stat-card">
            <h3>6</h3>
            <p>Apollo Moon Landings</p>
          </div>

          <div className="stat-card">
            <h3>5</h3>
            <p>Successful Mars Rover Missions</p>
          </div>

          <div className="stat-card">
            <h3>2</h3>
            <p>Celestial Bodies Explored</p>
          </div>
        </div>

      </section>

      <section className="about-section" id="about">

        <h2>Every Object Has a Story</h2>

        <p>
          Space missions leave behind more than footprints.
          They leave scientific instruments, landing equipment
          and memories of human exploration.
        </p>

      </section>

      <div className="stats-action">
        <a href="#explore" className="discover-button">
          Start Exploring Missions 🚀
        </a>
      </div>
      <div className="back-to-top">
        <a href="#home">⬆ Back to Top</a>
      </div>
      <footer className="footer">
        <h3>SPACE EXPLORER</h3>
        <p>Forgotten Missions, Unforgotten Stories.</p>
        <p className="footer-credit">
          Space imagery and mission information: NASA / JPL-Caltech
        </p>
        <p>Created for Space Explorer Hackathon 2026</p>
        <p>© 2026 Space Explorer. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;