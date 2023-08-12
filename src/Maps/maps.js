import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import records from "../records.json";
function Maps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
function Map() {
  const center = useMemo(() => ({ lat: 37.98381, lng: 23.727539 }), []);

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
