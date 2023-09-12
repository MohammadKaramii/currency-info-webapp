import React from 'react';

const ErrorHandling = ({ errorMessage, onRetry, onGoBack }) => {
  return (
    <div>
      <p>Error: {errorMessage}</p>
      <button onClick={onRetry}>Retry</button>
      <button onClick={onGoBack}>Go Back</button>
    </div>
  );
};

export default ErrorHandling;