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

// function Results(props) {
//   return (
//     <section>
//       <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
//     </section>
//   );
// }

// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }

export default Results;
