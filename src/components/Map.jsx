import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-20.0, -50.0, 0],
        center: [28, -4],
        //yaxinliq
        scale: 600,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        // color changes

        fill="#2c065d"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[49.867092, 40.409264]}
        dx={-90}
        dy={-30}
        connectorProps={{
          //xett
          stroke: "white",
          //qalinniq xet
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Baku"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
