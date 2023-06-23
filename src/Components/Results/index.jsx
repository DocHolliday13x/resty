import React from 'react';
import JSONPretty from 'react-json-pretty';
const JSONPrettyTheme = require('react-json-pretty/dist/adventure_time');

function Results(props){
  return (
    <section >
      {
        props.loading
        ? <div>Waiting for search query!</div>
        : <JSONPretty data-testid="results-section" id="json-pretty" theme={JSONPrettyTheme} data={props.data}></JSONPretty>
      }
    </section>
  );
}


export default Results;
