import React, { useEffect } from 'react';
import axios from 'axios';

import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';


function App() {
  const [data, setData] = React.useState(null);
  const [requestParams, setRequestParams] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    console.log('Event Occured!');
  });

  useEffect(() => {
    async function fetchData() {
      if (requestParams.method === 'GET') {
        let response = await fetch(requestParams.url);
        setData(response.data.results)
      }
      if (requestParams.method === 'POST') {
        let response = await axios.post(requestParams.url, requestParams.json);
        setData(response.data.results);
      }
      if (requestParams.method === 'PUT') {
        let response = await axios.put(requestParams.url, requestParams.json);
        setData(response.data.results);
      }
      if (requestParams.method === 'DELETE') {
        let response = await axios.delete(requestParams.url);
        setData(response.data.results);
      }
    }
    if (requestParams.method && requestParams.url) {
      fetchData();
    }
  }, [requestParams]);

  const callApi = (requestParams) => {
    setLoading(true);
    setRequestParams(requestParams);
    setLoading(false);
  }
  

  return (
    <React.Fragment>
      <Header />
      <div data-testid="app-method" className="divvy">Request Method: {requestParams.method}</div>
      <div data-testid="app-url" className="divvy">URL: {requestParams.url}</div>
      {
        requestParams.json
          ? <div data-testid="app-json" className="divvy">JSON: {requestParams.json}</div>
          : <div></div>
      }
      <Form handleApiCall={callApi} />
      <Results data={data} loading={loading} />
      <Footer />
    </React.Fragment>
  );
  
};


export default App;
