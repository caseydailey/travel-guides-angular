"use strict";

app.controller("BookCtrl", function($scope, GuideFactory){

	let printGuides = function(){
		console.log('inside print guides');
		GuideFactory.getGuides()
			.then((guides)=>{
				console.log('guides:', guides);
				console.log('guides.data.guides:', guides.data.guides);
				$scope.guides = guides.data.guides;
			});
	};

	printGuides();

	$scope.newGuide = {
		title: "Baltimore",
		type: "The best city evaaa"
	};

});