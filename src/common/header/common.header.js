(function(){
    var header = angular.module('header', []);
    header.controller('headerController', headerController);
    headerController.$inject = ['$scope'];
    function headerController($scope){
        $scope.header = "Header Component NEW Component";
    }
})();