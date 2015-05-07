var app = angular.module('reddit');
app.controller('PostsController', function($scope, FirebaseService) {

    $scope.getPosts = function() {
        FirebaseService.getPostsData()
            .then(function(data) {
                $scope.posts = data;
                console.log(data);
            });

    };
    $scope.getPosts();

    //$scope.newPost = {};

    $scope.addPost = function() {
        FirebaseService.addPost($scope.newPost);
    };
});