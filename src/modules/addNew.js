async function addNew() {
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  const id = JSON.parse(localStorage.getItem('gameID'));
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`, {
    method: 'POST',
    body:
      JSON.stringify({
        user: name.value,
        score: score.value,
      }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
}

export default addNew;