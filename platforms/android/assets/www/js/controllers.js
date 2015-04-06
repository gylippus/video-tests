angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $timeout) {
	if (ionic.Platform.isAndroid()){
		$timeout(function(){
			window.plugins.html5Video.initialize({
			      "video1" : "ankleOnKnee.mp4"
			})
	    }, 2000)

		$timeout(function(){
			window.plugins.html5Video.play("video1", function videoIsFinished() {
			  console.log("Video is finished")
			})
	    }, 4000)

	}
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
