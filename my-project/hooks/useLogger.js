import { useState } from 'react';

// Custom useLogger hook to manage log levels and messages
const useLogger = (initialLevel = 'LOG') => {
  const [logLevel, setLogLevel] = useState(initialLevel);
  const [logs, setLogs] = useState([]);

  const levels = ['ERROR', 'WARN', 'LOG', 'DEBUG'];

  const addLog = (message, level = 'LOG') => {
    const timestamp = new Date().toLocaleTimeString();
    const formattedMessage = `[${level}] [${timestamp}] ${message}`;
    
    // Append new message to logs
    setLogs((prevLogs) => [...prevLogs, formattedMessage]);

    // Output message based on level
    if (levels.indexOf(level) <= levels.indexOf(logLevel)) {
      if (level === 'ERROR') {
        console.error(formattedMessage);
      } else if (level === 'WARN') {
        console.warn(formattedMessage);
      } else if (level === 'DEBUG') {
        console.debug(formattedMessage);
      } else {
        console.log(formattedMessage);
      }
    }
  };

  // Function to clear all logs
  const clearLogs = () => {
    setLogs([]);
  };

  return {
    logLevel,
    setLogLevel,
    addLog,
    clearLogs,
    logs,
  };
};

export default useLogger;
