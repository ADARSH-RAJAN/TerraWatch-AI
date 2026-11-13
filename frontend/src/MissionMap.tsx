import { useState } from "react";

function MissionMap() {
  const [selectedPlanet, setSelectedPlanet] = useState("Moon");

  const missions = {
    Moon: [
      {
        name: "Apollo 11",
        location: "Tranquility Base",
        year: "1969",
        coordinates: "0.71° N, 23.63° E",
        equipment: "Apollo Lunar Module descent stage",
        category: "Lunar landing hardware",
        legacy: "The descent stage remains at the historic site of humanity's first crewed Moon landing.",
        source: "https://science.nasa.gov/resource/apollo-11-landing-site/",
        description:
          "The landing site of the first crewed Moon landing. The Apollo Lunar Module descent stage was left behind.",
      },
      {
        name: "Apollo 15",
        location: "Hadley Rille",
        year: "1971",
        coordinates: "26.132° N, 3.634° E",
        equipment: "Lunar Roving Vehicle (Moon buggy)",
        category: "Lunar surface vechile",
        legacy: "The Lunar Roving Vehicle helped astronauts travel farther and explore more of the lunar surface.",
        source: "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html",
        description:
          "Astronauts explored the lunar surface using the Lunar Roving Vehicle.",
      },
    ],
    Mars: [
      {
        name: "Perseverance",
        location: "Jezero Crater",
        year: "2021",
        coordinates: "18.44° N, 77.45° E",
        equipment: "Parachute, backshell and landing hardware",
        category: "Mars landing debr",
        legacy: "The landing system helped deliver a rover designed to investigate ancient Martian environments.",
        source: "https://science.nasa.gov/resource/perseverance-and-mars-2020-spacecraft-components-on-the-surface/",
        description:
          "The rover landed in Jezero Crater to search for signs of ancient microbial life.",
      },
      {
        name: "Curiosity",
        location: "Gale Crater",
        year: "2012",
        coordinates: "4.59° S, 137.44° E",
        equipment: "Parachute, backshell and landing hardware",
        category: "Mars landing debris",
        legacy: "Its landing system helped deliver a rover that investigates Mars' geological history.",
        source: "https://science.nasa.gov/resource/scene-of-a-martian-landing/",
        description:
          "The rover explores Mars and studies whether the planet once had conditions suitable for life.",
      },
    ],
  };

  return (
    <section className="interactive-map">
      <h2>Interactive Mission Explorer</h2>

      <p>
        Explore historic landing sites and forgotten space equipment.
      </p>

      <div className="planet-buttons">
        <button
          onClick={() => setSelectedPlanet("Moon")}
          className={selectedPlanet === "Moon" ? "active" : ""}
        >
          🌕 Explore Moon
        </button>

        <button
          onClick={() => setSelectedPlanet("Mars")}
          className={selectedPlanet === "Mars" ? "active" : ""}
        >
          🔴 Explore Mars
        </button>
      </div>

      <div className={`planet-display ${selectedPlanet.toLowerCase()}`}>
        <h3>{selectedPlanet} Mission Locations</h3>

        <div className="mission-location-list">
          {missions[selectedPlanet as keyof typeof missions].map(
            (mission, index) => (
              <div className="location-card" key={index}>
                <h3>{mission.name}</h3>
                <span className="equipment-status">
                  ● Historical Equipment
                </span>
                <p><strong>Location:</strong> {mission.location}</p>
                <p><strong>Year:</strong> {mission.year}</p>
                <p><strong>Coordinates:</strong> {mission.coordinates}</p>
                <a
                  href="https://trek.nasa.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mission-link"
                >
                  Explore NASA Surface Map ↗
                </a>
                <p className="equipment-info">
                  <strong>Forgotten Equipment:</strong> {mission.equipment}
                </p>
                <p className="category-info">
                  <strong>Category:</strong> {mission.category}
                </p>
                <p>{mission.description}</p>
                <div className="legacy-info">
                  <strong>Historical Significance</strong>
                  <p>{mission.legacy}</p>
                </div>
                <a
                  href={mission.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="source-link"
                >
                  📖 View Official NASA Source ↗
                </a>
              </div>
            )
          )}
        </div>
      </div>

      <a
        href={
          selectedPlanet === "Moon"
            ? "https://science.nasa.gov/moon/"
            : "https://science.nasa.gov/mars/"
        }
        target="_blank"
        rel="noopener noreferrer"
        className="mission-link"
      >
        Explore Interactive NASA {selectedPlanet} Map ↗
      </a>
      <a
        href="https://trek.nasa.gov/"
        target="_blank"
        rel="noopener noreferrer"
        className="mission-link"
      >
        🌍 Open NASA 3D Surface Explorer ↗
      </a>
    </section>
  );
}

export default MissionMap;