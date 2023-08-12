import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import records from "../records.json";
function Maps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCe2OPPDBp4vgb-cj3jGf8E31wnSREbuSE",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
function Map() {
  const center = useMemo(() => ({ lat: 37.98381, lng: 23.727539 }), []);

  // const employees = [
  //   {
  //     id: 8,
  //     name: "vc",
  //     birth: "2023-08-24",
  //     address: "Βυζαντίου 4, Παλλήνη, Ελλάδα",

  //     lng: 23.8806118,
  //     lat: 38.005209,

  //     license: "YES",
  //   },
  //   {
  //     id: 9,
  //     name: "Damian",
  //     birth: "2023-08-12",
  //     address: "Athens, Ελλάδα",

  //     lng: 23.7275388,
  //     lat: 37.9838096,

  //     license: "no",
  //   },
  // ];

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      {records.employees.map((record) => {
        return (
          <div key={record.id}>
            <MarkerF
              position={{
                lng: parseFloat(record.long),
                lat: parseFloat(record.lat),
              }}
            />
          </div>
        );
      })}
    </GoogleMap>
  );
}
export default Maps;
