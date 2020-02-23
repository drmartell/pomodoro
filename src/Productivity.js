import React from 'react';

export default function Productivity({ hideProductivity }) {
  const handleClick = value => {

    fetch('https://cors-anywhere.herokuapp.com/https://e8jvkmfrj7.execute-api.us-west-2.amazonaws.com/dep1', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify({ rating: value }) // body data type must match "Content-Type" header
    })
    .then(console.log)
    .catch(console.log);
    
    hideProductivity();
  };

  return (
  <div>
    <button value="low" onClick={({ target }) => handleClick(target.value)}>low</button>
    <button value="med" onClick={({ target }) => handleClick(target.value)}>medium</button>
    <button value="high" onClick={({ target }) => handleClick(target.value)}>high</button>
  </div>
  );
}
