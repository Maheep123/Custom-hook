import React, { useState } from 'react';
import useLogger from '/hooks/useLogger';

function App() {
  const [scope, setScope] = useState('DeleteFriend');
  const [message, setMessage] = useState('');
  const { logLevel, setLogLevel, addLog, clearLogs, logs } = useLogger('LOG');

  const handleSubmit = (e) => {
    e.preventDefault();
    addLog(`${scope}: ${message}`, logLevel);
  };

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>SCOPE</label>
          <input
            type="text"
            value={scope}
            onChange={(e) => setScope(e.target.value)}
          />
        </div>

        <div>
          <label>Log Level</label>
          <select value={logLevel} onChange={(e) => setLogLevel(e.target.value)}>
            <option value="ERROR">ERROR</option>
            <option value="WARN">WARN</option>
            <option value="LOG">LOG</option>
            <option value="DEBUG">DEBUG</option>
          </select>
        </div>

        <div>
          <label>Message</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <div>
        <h3>Console Output</h3>
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
          {logs.map((log, index) => (
            <p key={index}>{log}</p>
          ))}
        </div>
        <button onClick={clearLogs}>Clear Logs</button>
      </div>
    </div>
  );
}

export default App;
