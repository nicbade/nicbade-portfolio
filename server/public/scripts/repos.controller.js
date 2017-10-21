myApp.controller('ReposController', ['GithubService', function(GithubService) {
    console.log('ReposController loaded.');
    var vm = this;
    vm.repos = GithubService.repos;


}]);