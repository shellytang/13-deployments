'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // TODO: Refactor your ajax call to use the $.get method, and make a request to our new proxy route.
    $.ajax({
      url: `https://api.github.com/user/repos
            ?per_page=5
            &sort=updated`,
      type: 'GET',
      headers: {'Authorization': `token ${githubToken}`}
    })
    .then(data => repos.all = data, err => console.error(err)) // es6 syntax arrow functions
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
