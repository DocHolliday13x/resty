import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';

import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import History from './Components/History';

export const initialState = {
  history: [],
  loading: false,
  data: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'HISTORY': {
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    }
    case 'LOADING': {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case 'DATA': {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
};

function App() {
  // const [data, setData] = React.useState(null);
  const [requestParams, setRequestParams] = useState({});
  // const [loading, setLoading] = React.useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  
  useEffect(() => {
    console.log('Event Occurred!');
    console.log(state);
  }, [state]);

  useEffect(() => {
    console.log('Request Params Changed!');
    console.log(requestParams);

    dispatch({ type: 'LOADING', payload: true });

    async function fetchData() {
      try {
        if (requestParams.method === 'GET') {
          let response = await axios.get(requestParams.url);
          dispatch({ type: 'DATA', payload: response.data.results });
          let historyData = [requestParams, response.data];
          dispatch({ type: 'HISTORY', payload: historyData });
        }
      } catch (error) {
        dispatch({ type: 'DATA', payload: 'No Available Data' });
      } finally {
        dispatch({ type: 'LOADING', payload: false });
      }
    }

    if (requestParams.method && requestParams.url) {
      fetchData();
    }
  }, [requestParams]);

  const callApi = (requestParams) => {
    setRequestParams(requestParams);
  };

  const handleHistory = (results) => {
    dispatch({ type: 'DATA', payload: results });
  };


  // useEffect(() => {
  //   async function fetchData() {
  //     if (requestParams.method === 'GET') {
  //       let response = await fetch(requestParams.url);
  //       let jsonData = await response.json();
  //       setData(jsonData.results);
  //     } else {
  //       let response;
  //       if (requestParams.method === 'POST') {
  //         response = await axios.post(requestParams.url, requestParams.json);
  //       } else if (requestParams.method === 'PUT') {
  //         response = await axios.put(requestParams.url, requestParams.json);
  //       } else if (requestParams.method === 'DELETE') {
  //         response = await axios.delete(requestParams.url);
  //       }
  //       setData(response.data.results);
  //     }
  //   }

  //   if (requestParams.method && requestParams.url) {
  //     fetchData();
  //   }
  // }, [requestParams]);

  // const callApi = (requestParams) => {
  //   setLoading(true);
  //   setRequestParams(requestParams);
  //   setLoading(false);
  // };

  return (
    <React.Fragment>
      <Header />
      <div data-testid="app-method" className="divvy">
        Request Method: {requestParams.method}
      </div>
      <div data-testid="app-url" className="divvy">
        URL: {requestParams.url}
      </div>
      {requestParams.json ? (
        <div data-testid="app-json" className="divvy">
          JSON: {requestParams.json}
        </div>
      ) : (
        <div></div>
      )}
      <Form handleApiCall={callApi} />
      <Results data={state.data} loading={state.loading} />
      <History history={state.history} handleHistory={handleHistory} />
      <Footer />
    </React.Fragment>
  );
}


export default App;



