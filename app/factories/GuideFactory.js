"use strict";

app.factory("GuideFactory", function($http, $q){

	let getGuides = function(){
		return $q((resolve, reject)=>{
			$http.get("data/guides.json")
		.then((guides)=>{
			resolve(guides);
		})
		.catch((error)=>{
			reject(error);
		});
	});
	};

	return {getGuides};
});