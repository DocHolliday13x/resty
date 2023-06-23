import React from 'react';
// import { useState } from 'react';
import './Form.scss';

const Form = (props) => {

  const [url, setUrl] = React.useState('https://pokeapi.co/api/v2/pokemon');
  const [method, setMethod] = React.useState('GET');
  const [json, setJson] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method,
      url,
      json,
    };
    props.handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' value={url} onChange={e => setUrl(e.target.value)} />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span data-test-id="form-get" id="get" onClick={() => setMethod('GET')} style={{ backgroundColor: method === 'GET' ? 'green': 'grey'}}>GET</span>
          <span data-test-id="form-post" id="post" onClick={() => setMethod('POST')} style={{ backgroundColor: method === 'POST' ? 'green': 'grey'}}>POST</span>
          <span data-test-id="form-put" id="put" onClick={() => setMethod('PUT')} style={{ backgroundColor: method === 'PUT' ? 'green': 'grey'}}>PUT</span>
          <span data-test-id="formj-delete" id="delete" onClick={() => setMethod('DELETE')} style={{ backgroundColor: method === 'DELETE' ? 'red': 'grey'}}>DELETE</span>
        </label>
        <label>
          <span>JSON: </span>
          <textarea name="json" value={json} onChange={e => setJson(e.target.value)} />
        </label>
        {method === 'POST' || method === 'PUT' ? <button type="submit">GO!</button> : <></>}
      </form>
    </>
  );
}


export default Form;
