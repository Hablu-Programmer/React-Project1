import { SectionTitle } from "./common/title";

export const FindVehicles = () => {
  return (
    <div style={{ paddingTop: "100px" }} className="container">
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: 39, width: "100%" }}>
          <SectionTitle>Find vehicles near you</SectionTitle>
        </div>
        <img src="/map.png" alt="..." />
      </div>
    </div>
  );
};
