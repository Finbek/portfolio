import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-129.2381, -35.553, 0],
        scale: 2000,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/portFolioApp/features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo}></Geography>
          ))
        }
      </Geographies>
      <Annotation
        subject={[129.2381, 35.553]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          Ulsan, South Korea
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
