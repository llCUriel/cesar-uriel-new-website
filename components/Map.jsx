import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <iframe
          className="embed-responsive-item"
          title="my location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60217.78421877582!2d-99.26160906920994!3d19.385967013932582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201ac48275263%3A0x74eb214ea864a76f!2sSanta%20Fe%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1731294721471!5m2!1ses!2smx"
        ></iframe>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
