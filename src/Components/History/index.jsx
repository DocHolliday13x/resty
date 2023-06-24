const History = (props) => {

  return (
    <section className="history">
      <h2>History</h2>
      <ul>
        {props.history.map((request, idx) => (
          <li key={idx}>
            <span className="method">{request.method}</span>
            <span className="url">{request.url}</span>
            <button onClick={() => props.handleHistory(request)}>Re-Run</button>
          </li>
        ))}
      </ul>
    </section>
  );
};


export default History;


