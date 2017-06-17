	var Cat = function(data){
		this.clickCount = ko.observable(data.clickCount);
		this.imgSrc= ko.observable(data.imgSrc);
		this.name = ko.observable(data.name);
		}	

	var initialCats = [
			{
				name : 'Laddu',
				imgSrc : 'https://s-media-cache-ak0.pinimg.com/736x/08/6c/27/086c27ddaf5ac977e37a4c88dc5063d0--cute-cats-adorable-animals.jpg',
				clickCount : 0
			},

			{
				name : 'Teddy',
				imgSrc : 'http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg',
				clickCount : 0,
			}
		];


	var ViewModel = function(){
		var self = this;

		this.catList = 	ko.observableArray([]);

		initialCats.forEach(function (catItem){
			self.catList.push(new Cat(catItem));
		});

		this.currentCat = ko.observable(this.catList()[0]);

		this.incrementCounter = function(){
			this.clickCount(this.clickCount()+1);
		};

		this.setCat = function(clickedCat){
			self.currentCat(clickedCat);
		}
	}	

	ko.applyBindings(new ViewModel());