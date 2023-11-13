const getReposButton = document.getElementById('get-repos');
const reposList = document.getElementById('repos-list');

getReposButton.addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    /* Send an HTTP GET request to the GitHub /users/{username}/repos end point and 
    display the list of repositories in the <ul> element provided in the HTML code.
    */
    // Example: https://api.github.com/users/facebook/repos
    const url = `https://api.github.com/users/${username}/repos`;
    const ulElement = document.getElementById('repos-list');
    // Fetch and display the list of repositories as li elements inside the ul element.

});

