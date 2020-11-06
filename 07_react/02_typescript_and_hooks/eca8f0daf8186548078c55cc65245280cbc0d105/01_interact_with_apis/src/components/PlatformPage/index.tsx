import React from "react";
import platforms from "../../../tests/data/platforms";

const PlatformPage = (): JSX.Element => {
  const [platforms, setPlatforms] = React.useState([{ name: "name"}] )

fetch('https://videogames-sparta.herokuapp.com/platforms', {method: "GET", headers: {accept: "application/json"}})
.then(response => Response.json()),
})
  return (<>Platforms
  <div>
    platforms.map (
      platform => <div key={platforms.slug}>
      {platforms.name}
      </div>
    )
  </div>
  </>
  )
  
  ;
};




export default PlatformPage;
