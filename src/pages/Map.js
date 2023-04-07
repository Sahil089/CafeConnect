import React,{useState} from "react";
// import { useHistor } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { indiadata } from "../data/india_data";
import { statedata } from "../data/data";
// import Main from "./Main";

const center = [20.5937, 78.9629];


function Map(){

    const [selectedState, setSelectedState] = useState(null);
    

    const handleStateClick = (e, state) => {
      e.target._map.flyTo(e.latlng, 8);
      setSelectedState(state);
    };
  
    const handleBackClick = () => {
      setSelectedState(null);
    };
  
    const handleClick = (e, state) => {
      if (selectedState) {
        window.location.href ="Main";
      } else {
        handleStateClick(e, state);
      }
    };
  
    return (
<div className="map1">
<Navbar/>

      <MapContainer
        center={center}
        zoom={5}
        style={{ width: "100vw", height: "100vh" }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=40ZJ0OCerkKeyohpcz5f"
          attribution="&copy; MapTiler &amp; OpenStreetMap contributors"
        />{" "}
        {indiadata.features.map((state) => {
          const coordinates = state.geometry.coordinates[0].map((item) => [
            item[1],
            item[0],
          ]);
          return (
            <Polygon
              key={state.properties.NAME_1}
              pathOptions={{
                fillColor: "orange",
                fillOpacity: 0.4,
                weight: 2,
                opacity: 1,
                dashArray: 3,
                color: "white",
              }}
              positions={coordinates}
              eventHandlers={{
                click: (e) => {
                  handleClick(e, state);
                },
                mouseover: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    dashArray: "",
                    fillColor: "#BD0026",
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    color: "white",
                  });
                },
                mouseout: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 2,
                    dashArray: "3",
                    color: "white",
                    fillColor: "#FD8D3C",
                  });
                },
              }}
            />
          );
        })}{" "}
        {selectedState &&
          statedata.features.map((state) => {
            const coordinates = state.geometry.coordinates[0].map((item) => [
              item[1],
              item[0],
            ]);
            if (state.properties.NAME === selectedState.properties.NAME_1) {
              return (
                <Polygon
                  key={state.properties.NAME}
                  pathOptions={{
                    fillColor: "blue",
                    fillOpacity: 0.4,
                    weight: 2,
                    opacity: 1,
                    dashArray: 3,
                    color: "white",
                  }}
                  positions={coordinates}
                  eventHandlers={{
                    click: (e) => {
                      window.location.href = "Main";
                    },
                    mouseover: (e) => {
                      const layer = e.target;
                      layer.setStyle({
                        dashArray: "",
                        fillColor: "#FD8D3C",
                        fillOpacity: 0.7,
                        weight: 2,
                        opacity: 1,
                        color: "white",
                      });
                    },
                    mouseout: (e) => {
                      const layer = e.target;
                      layer.setStyle({
                        fillOpacity: 0.7,
                        weight: 2,
                        dashArray: "3",
                        color: "white",
                        fillColor: "blue",
                      });
                    },
                  }}
                />
              );
            }
            return null;
          })}{" "}
        {selectedState && (
          <button className="back-btn" onClick={handleBackClick}>
            Back
          </button>
        )}
      </MapContainer>
      </div>
    );
}
export default Map