import React, { useState } from "react";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

function Longlat() {
  const [addresses, setAddresses] = useState("");
  const [coordinates, setCoordinates] = useState({
    location: [
      {
        lat: null,
        lng: null,
      },
    ],
  });
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0]);
    console.log(ll);
    setAddresses(value);
    setCoordinates(ll);
  };
  return (
    <>
      <hr />

      <p>Enter the address and set the coordinates in the input below</p>
      <PlacesAutocomplete
        value={addresses}
        onChange={setAddresses}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input",
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>{" "}
            <p>lat : {coordinates.lat}</p>
            <p>lng : {coordinates.lng}</p>
            <p>Address : {addresses}</p>
          </div>
        )}
      </PlacesAutocomplete>
    </>
  );
}

export default Longlat;
