

const api = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

function redirectToGitHubPage(username) {
  const githubUrl = `https://github.com/${username}`;
  window.location.href = githubUrl;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = search.value;

  if (username) {
    redirectToGitHubPage(username);

    search.value = "";
  }
});

// async function redirectToGitHubPage() {
//     let response = ("https://github.com" + username);
//     return response.json();
// }

// redirectToGitHubPage ().then (jsonData => console.log (jsonData));



