import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import records from "../records.json";
import CustomMarker from "./missionmarker.png";

function Maps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCe2OPPDBp4vgb-cj3jGf8E31wnSREbuSE",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
function Map() {
  const center = useMemo(() => ({ lat: 37.98381, lng: 23.727539 }), []);
  const [selected, setSelected] = useState(null);
  return (
    <>
      <div className="places-container">
        <PlacesAutocomplete setSelected={setSelected}></PlacesAutocomplete>
      </div>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        {selected && <MarkerF position={selected} />}
        {records.employees.map((record) => {
          return (
            <div key={record.id}>
              <MarkerF
                position={{
                  lng: parseFloat(record.long),
                  lat: parseFloat(record.lat),
                }}
                options={{ icon: CustomMarker }}
              />
            </div>
          );
        })}
      </GoogleMap>
    </>
  );
}

const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();
  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };
  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        style={{ width: "100%", padding: "0.5rem" }}
        placeholder="Search an address"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ places_id, description }) => (
              <ComboboxOption key={places_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default Maps;
