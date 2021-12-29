import React, { useReducer, useState, useEffect } from 'react';

// https://api.cloudflare.com/#zone-list-zones
const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}
const DATA_FILE = "/data/domains.txt";

function App() {
  const zones = useZones();
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

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
    </div>
  );
}

function useZones() {
  //alert('line 106'); 
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
