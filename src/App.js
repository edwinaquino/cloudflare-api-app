import React, { useEffect } from 'react';

// https://api.cloudflare.com/#zone-list-zones

const DATA_FILE = "/data/domains.txt";

function App() {
  const zones = useZones();

  return (
    <div className="wrapper">
      <h1>All Your CloudFlare Domains</h1>
      <h3>Intructions:</h3>
      <ol>
        <li>Run the included Bash Script <strong>getAllDomains.sh</strong></li>
        <li>Provide the required credentials you will need to fetch your domains form CloudFlare
          <ul>
            <li><strong>AccountID</strong> - You can get this long string from the CloudFlare Home Dashboard on the URL: (example: d4ehskshdk3k4h5k3h4k3h4k2)</li>
            <li><strong>CF_API_EMAIL</strong> - This is your account email.</li>
            <li><strong>CF_API_KEY</strong> - This is your global API key</li>
          </ul>
        </li>
        <li>After script has completed successfully. You may look at the <strong>public/data/domains.txt</strong> file for the JSON data which contains a list of all your domains.</li>
        <li>Run this React App: <code>npm start</code></li>
        <li>The React app will fetch the JSON data and format it in a list</li>
        <li>Enjoy</li>
      </ol>
      <hr />
      <h3>Results:</h3>
      <ol>
        {zones.map(zone => (
          <li key={zone.id}>{zone.name}</li>
        ))}
      </ol>
      <hr />
      <p style={{textAlign: 'center'}}>By: <a href="https://github.com/edwinaquino" target="_blank">Edwin Aquino</a></p>
    </div>
  );
}

function useZones() { 
  const [zones, setZones] = React.useState([]);
  useEffect(() => {
    fetch(DATA_FILE, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then(response => response.json())
      .then(data => {
        setZones(data.result);
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);
  return zones;
}
export default App;
