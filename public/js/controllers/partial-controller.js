var app = angular.module('detroitMod');


//Most Popular Controller

app.controller('popularCtrl', function($scope,detroitFactory,$rootScope){
$scope.areaName = "Most Popular";
detroitFactory.getPopular().then(function(){
	$scope.posts = detroitFactory.returnList();
});

$scope.upvotePost = function(post, id, index) {
		console.log(post, id, index);
	detroitFactory.voteUp(post, id).then(function(){
		$scope.posts = detroitFactory.returnList();
		//disables the upvote button for 12 seconds
		$scope.posts[index].disableUpVote = true;
		setTimeout(function(){
			$scope.$apply(function(){
			$scope.posts[index].disableUpVote = false;

			})
		 }, 12000)

	});
}

	$scope.downvotePost = function(post, id, index){
	console.log(post, id)
	detroitFactory.voteDown(post, id).then(function(){
		$scope.posts = detroitFactory.returnList();
		//disables the downvote button for 12 seconds
		$scope.posts[index].disableDownVote = true;
		setTimeout(function(){
			$scope.$apply(function(){
			$scope.posts[index].disableDownVote = false;

			})
		 }, 12000)

	})
};

$scope.myBackgroundUrl = "../images/Grand-River-Creative-Corridor_0706.jpg"
});

//BEGIN CORKTOWN CONTROLLER
app.controller('corktown', function($scope, detroitFactory, $rootScope){
	$scope.areaName = "Corktown"
	$scope.thisZip = "48216"
	$scope.blockProf=detroitFactory.blockProf;
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
		$scope.placeholder = "what's on your mind?"
	} else {
		$scope.hide = true
		$scope.placeholder = "be sure to let us know what's happening once you get here!"
	};
	detroitFactory.getPosts("48216").then(function(){
		$scope.posts = detroitFactory.returnList();
	});
	//function below parses input and sends to route and then to database, returns to ng repeat
	$scope.newPost = function(content) {
		console.log('working from click')
		content.zip = $rootScope.zip
		detroitFactory.addPost(content).then(function(){
			$scope.posts = detroitFactory.returnList();
			console.log($scope.posts);

		})
	}

	$scope.formHide = true

	$scope.upvotePost = function(post, id, index) {
    	console.log(post, id, index);
		detroitFactory.voteUp(post, id).then(function(){
			$scope.posts = detroitFactory.returnList();
			//disables the upvote button for 12 seconds
			$scope.posts[index].disableUpVote = true;
			setTimeout(function(){
				$scope.$apply(function(){
			 	$scope.posts[index].disableUpVote = false;

			 	})
			 }, 12000)

		});
	}

		$scope.downvotePost = function(post, id, index){
		console.log(post, id)
		detroitFactory.voteDown(post, id).then(function(){
			$scope.posts = detroitFactory.returnList();
			//disables the downvote button for 12 seconds
			$scope.posts[index].disableDownVote = true;
			setTimeout(function(){
				$scope.$apply(function(){
			 	$scope.posts[index].disableDownVote = false;

			 	})
			 }, 12000)

		})
	};

	$scope.myBackgroundUrl = "../images/corktown.jpg"
});
//-----END------


//BEGIN DOWNTOWN CONTROLLER
app.controller('downtown', function($scope, detroitFactory, $rootScope){
	$scope.posts = [];
	$scope.areaName = "Downtown"
	$scope.thisZip = "48226"
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
		$scope.placeholder = "what's on your mind?"
	} else {
		$scope.hide = true
		$scope.placeholder = "be sure to let us know what's happening once you get here!"
	};
	detroitFactory.getPosts("48226").then(function(){
		$scope.posts = detroitFactory.returnList();
	});

	$scope.formHide = true

	//function below parses input and sends to route and then to database, returns to ng repeat
	$scope.newPost = function(content) {
		content.zip = $rootScope.zip
		console.log(content.zip)
		detroitFactory.blockProf(content.post).then(function(){
			detroitFactory.addPost().then(function() {
				$scope.posts = detroitFactory.returnList();
				console.log($scope.posts);
			})
		})
	}


	$scope.upvotePost = function(post, id, index) {
    	console.log(post, id, index);
		detroitFactory.voteUp(post, id).then(function(){
			$scope.posts = detroitFactory.returnList();
			//disables the upvote button for 12 seconds
			$scope.posts[index].disableUpVote = true;
			setTimeout(function(){
				$scope.$apply(function(){
			 	$scope.posts[index].disableUpVote = false;

			 	})
			 }, 12000)

		});
	}


	$scope.downvotePost = function(post, id, index){
		console.log(post, id)
		detroitFactory.voteDown(post, id).then(function(){
			$scope.posts = detroitFactory.returnList();
			//disables the downvote button for 12 seconds
			$scope.posts[index].disableDownVote = true;
			setTimeout(function(){
				$scope.$apply(function(){
			 	$scope.posts[index].disableDownVote = false;

			 	})
			 }, 12000)

		})
	};

	$scope.myBackgroundUrl = "../images/downtown.jpg"

});
//-----END------

//BEGIN MIDTOWN CONTROLLER
app.controller('midtown', function($scope, detroitFactory, $rootScope){
	$scope.areaName = "Midtown"
	$scope.thisZip = "48201"
	$scope.blockProf=detroitFactory.blockProf;
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
		$scope.placeholder = "what's on your mind?"
	} else {
		$scope.hide = true
		$scope.placeholder = "be sure to let us know what's happening once you get here!"
	};

	detroitFactory.getPosts("48201").then(function(){
		$scope.posts = detroitFactory.returnList();
	});
	//function below parses input and sends to route and then to database, returns to ng repeat
	$scope.newPost = function(content) {
		console.log('working from click')
		content.zip = $rootScope.zip
		detroitFactory.addPost(content).then(function(){
			$scope.posts = detroitFactory.returnList();


		})
	}

			$scope.formHide = true
			$scope.upvotePost = function(post, id, index) {
    	console.log(post, id, index);
		detroitFactory.voteUp(post, id).then(function(){
			$scope.posts = detroitFactory.returnList();
			//disables the upvote button for 12 seconds
			$scope.posts[index].disableUpVote = true;
			setTimeout(function(){
				$scope.$apply(function(){
			 	$scope.posts[index].disableUpVote = false;

			 	})
			 }, 12000)

		});
	}

		$scope.downvotePost = function(post, id, index){
		console.log(post, id)
		detroitFactory.voteDown(post, id).then(function(){
			$scope.posts = detroitFactory.returnList();
			//disables the downvote button for 12 seconds
			$scope.posts[index].disableDownVote = true;
			setTimeout(function(){
				$scope.$apply(function(){
			 	$scope.posts[index].disableDownVote = false;

			 	})
			 }, 12000)

		})
	};

	$scope.myBackgroundUrl = "../images/midtown.jpg"
});
//-----END------

//BEGIN WOODBRIDGE CONTROLLER
app.controller('woodbridge', function($scope, detroitFactory, $rootScope){
	$scope.areaName = "Woodbridge"
	$scope.thisZip = "48208"
	$scope.blockProf=detroitFactory.blockProf;
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
		$scope.placeholder = "what's on your mind?"
	} else {
		$scope.hide = true
		$scope.placeholder = "be sure to let us know what's happening once you get here!"
	};
	detroitFactory.getPosts("48208").then(function(){
		$scope.posts = detroitFactory.returnList();
	});
	//function below parses input and sends to route and then to database, returns to ng repeat
	$scope.newPost = function(content) {
		console.log('working from click')
		content.zip = $rootScope.zip
		detroitFactory.addPost(content).then(function(){
			$scope.posts = detroitFactory.returnList();


		})
	}

	$scope.formHide = true

	$scope.upvotePost = function(post, id, index) {
    	console.log(post, id, index);
		detroitFactory.voteUp(post, id).then(function(){
			$scope.posts = detroitFactory.returnList();
			//disables the upvote button for 12 seconds
			$scope.posts[index].disableUpVote = true;
			setTimeout(function(){
				$scope.$apply(function(){
			 	$scope.posts[index].disableUpVote = false;

			 	})
			 }, 12000)

		});
	}

		$scope.downvotePost = function(post, id, index){
		console.log(post, id)
		detroitFactory.voteDown(post, id).then(function(){
			$scope.posts = detroitFactory.returnList();
			//disables the downvote button for 12 seconds
			$scope.posts[index].disableDownVote = true;
			setTimeout(function(){
				$scope.$apply(function(){
			 	$scope.posts[index].disableDownVote = false;

			 	})
			 }, 12000)

		})
	};


	$scope.myBackgroundUrl = "../images/woodbridge.png"
});
//-----END------


//BEGIN NEW CENTER CONTROLLER
app.controller('newCenter', function($scope, detroitFactory, $rootScope){
	$scope.areaName = "New Center"
	$scope.thisZip = "48202"
	$scope.blockProf=detroitFactory.blockProf;
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
		$scope.placeholder = "what's on your mind?"
	} else {
		$scope.hide = true
		$scope.placeholder = "be sure to let us know what's happening once you get here!"
	};
	detroitFactory.getPosts("48202").then(function(){
		$scope.posts = detroitFactory.returnList();
	});
	//function below parses input and sends to route and then to database, returns to ng repeat
	$scope.newPost = function(content) {
		console.log('working from click')
		content.zip = $rootScope.zip
		detroitFactory.addPost(content).then(function(){
			$scope.posts = detroitFactory.returnList();


		})
	}

			$scope.formHide = true

	$scope.upvotePost = function(post, id, index) {
    	console.log(post, id, index);
		detroitFactory.voteUp(post, id).then(function(){
			$scope.posts = detroitFactory.returnList();
			//disables the upvote button for 12 seconds
			$scope.posts[index].disableUpVote = true;
			setTimeout(function(){
				$scope.$apply(function(){
			 	$scope.posts[index].disableUpVote = false;

			 	})
			 }, 12000)

		});
	}

		$scope.downvotePost = function(post, id, index){
		console.log(post, id)
		detroitFactory.voteDown(post, id).then(function(){
			$scope.posts = detroitFactory.returnList();
			//disables the downvote button for 12 seconds
			$scope.posts[index].disableDownVote = true;
			setTimeout(function(){
				$scope.$apply(function(){
			 	$scope.posts[index].disableDownVote = false;

			 	})
			 }, 12000)

		})
	};
	$scope.myBackgroundUrl = "../images/illuminatedmural.JPG"

});
//-----END------


//BEGIN EAST CENTRAL CONTROLLER
app.controller('eastCentral', function($scope, detroitFactory, $rootScope){
	$scope.areaName = "East Central"
	$scope.blockProf=detroitFactory.blockProf;
	$scope.thisZip = "48207"
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
		$scope.placeholder = "what's on your mind?"
	} else {
		$scope.hide = true
		$scope.placeholder = "be sure to let us know what's happening once you get here!"
	};
	detroitFactory.getPosts("48207").then(function(){
		$scope.posts = detroitFactory.returnList();
	});
	//function below parses input and sends to route and then to database, returns to ng repeat
	$scope.newPost = function(content) {
		console.log('working from click')
		content.zip = $rootScope.zip
		detroitFactory.addPost(content).then(function(){
			$scope.posts = detroitFactory.returnList();


		})
	}

	$scope.formHide = true


	$scope.upvotePost = function(post, id, index) {
    	console.log(post, id, index);
		detroitFactory.voteUp(post, id).then(function(){
			$scope.posts = detroitFactory.returnList();
			//disables the upvote button for 12 seconds
			$scope.posts[index].disableUpVote = true;
			setTimeout(function(){
				$scope.$apply(function(){
			 	$scope.posts[index].disableUpVote = false;

			 	})
			 }, 12000)

		});
	}

	$scope.downvotePost = function(post, id, index){
		console.log(post, id)
		detroitFactory.voteDown(post, id).then(function(){
			$scope.posts = detroitFactory.returnList();
			//disables the downvote button for 12 seconds
			$scope.posts[index].disableDownVote = true;
			setTimeout(function(){
				$scope.$apply(function(){
			 	$scope.posts[index].disableDownVote = false;

			 	})
			 }, 12000)

		})
	};

	$scope.myBackgroundUrl = "../images/eastcentral.jpg"

});
//-----END------


//BEGIN SOUTHWEST CONTROLLER
app.controller('southwest', function($scope, detroitFactory, $rootScope){
	$scope.areaName = "Southwest"
	$scope.thisZip = "48209"
	$scope.blockProf=detroitFactory.blockProf;
	if($scope.thisZip === $rootScope.zip) {
		$scope.hide = false
		$scope.placeholder = "what's on your mind?"
	} else {
		$scope.hide = true
		$scope.placeholder = "be sure to let us know what's happening once you get here!"
	};
	detroitFactory.getPosts("48209").then(function(){
		$scope.posts = detroitFactory.returnList();
	});
	//function below parses input and sends to route and then to database, returns to ng repeat
	$scope.newPost = function(content) {
		console.log('working from click')
		content.zip = $rootScope.zip
		detroitFactory.addPost(content).then(function(){
			$scope.posts = detroitFactory.returnList();


		})
	}

			$scope.formHide = true


	$scope.upvotePost = function(post, id, index) {
    	console.log(post, id, index);
		detroitFactory.voteUp(post, id).then(function(){
			$scope.posts = detroitFactory.returnList();
			//disables the upvote button for 12 seconds
			$scope.posts[index].disableUpVote = true;
			setTimeout(function(){
				$scope.$apply(function(){
			 	$scope.posts[index].disableUpVote = false;

			 	})
			 }, 12000)

		});
	}

	$scope.downvotePost = function(post, id, index){
		console.log(post, id)
		detroitFactory.voteDown(post, id).then(function(){
			$scope.posts = detroitFactory.returnList();
			//disables the downvote button for 12 seconds
			$scope.posts[index].disableDownVote = true;
			setTimeout(function(){
				$scope.$apply(function(){
			 	$scope.posts[index].disableDownVote = false;

			 	})
			 }, 12000)

		})
	};

	$scope.myBackgroundUrl = "../images/southwest.jpg"
});
//-----END------


//----controller for redirect over undefined/out of range page

app.controller('sorry', function($scope){
	$scope.areaName = 'Whoops!'
	$scope.myBackgroundUrl = "../images/tumbleweed.jpg"
})


//---end
/*
	Downtown: 48226
	Corktown: 48216
	Woodbridge: 48208
	New Center: 48202
	East Central: 48207
	Southwest: 48209
	*/
