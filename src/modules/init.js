/* Init game id */
// Check for an existing gameID, if there isn't create one
async function initID() {
  if (localStorage.getItem('gameID') === null) {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      body: JSON.stringify({
        name: 'My cool new game',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const json = await response.json();
    localStorage.setItem('gameID', JSON.stringify(json.result.slice(14, json.result.length - 7)));
  }
}

export default initID;