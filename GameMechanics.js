const startGame = true;

var Data = {
	currency: "History Unit",
    propertyNames: ["Advance History", "Eurasia", "United Nations", 
		"Papua New Guinea", "Natural Disaster",
        "Location Railroad", "Steel, the Great Conqueror", "RandomQuestion",
        "Geographic Luck", "Development of Disease", "Epidemic Zone", "Population Growth", 
		"Region", "Mountain Ranges", "Rivers and Plateaus", "Place Railroad", "Brazil", 
		"United Nations", "Colombia", "The Panama Canal", "Neutral Territory", "Egypt",
		"Random Question", "Sudan", "South Africa", "Human/Environment Railroad",
		"China", "India", "Earth 2100", "Nepal", "Goto Epidemic Zone",
		"China 2.0", "India 2.0", "United Nations", "Nepal 2.0", "Movement Railroad",
		"Random Question", "Human currency", "National Debt", "World Geography Boardwalk"
	],
    propertyColors: [null, "#00FF00", null, "#00FF00", null, null, "#00FFFF", null, "#00FFFF", "#00FFFF",
		null, "#AA00FF", null, "#AA00FF", "#AA00FF", null, "#FFFF00", null, "#FFFF00", "#FFFF00", null,
		"#FF7700", null, "#FF7700", "#FF7700", null, "#FF0000", "#FF0000", null, "#FF0000", null, "#000000",
		"#000000", null, "#000000", null, null, "#0000FF", null, "#0000FF"
	],
    propertyImages: ["AdvanceHistory.png", null, "UnitedNations.png", 
		null, "NaturalDisaster.jpg", "Location.png",
        null, "RandomQuestion.png", null, null, "EpidemicZone.png", null, "Region.png", null,
		null, "Place.png", null, "UnitedNations.png", null, null, "NeutralTerritory.png", null,
		"RandomQuestion.png", null, null, "Human_Environment.png", null, null, null, null, "EpidemicZone.png",
		null, null, "UnitedNations.png", null, "Movement.png", "RandomQuestion.png", null, "NationalDebt.jpg",
		null
	],
    propertyValues: [null, 80, null, 100, null, 200, 120, null, 120, 140, null, 180, 200,
		180, 200, 200, 220, null, 220, 240, null, 250, null, 250, 270, 200, 280, 280, null,
		300, null, 320, 320, null, 340, 200, null, 350, null, 400
	],
	countryNames: ["America", "Australia", "Austria", "Brazil", "Canada", "China", "Denmark",
		"Finland", "Germany", "India", "Japan", "Netherlands", "New Zealand", "Norway",
		"Peru", "Sweden"],
	countrySources: ["FlagAmerica.png", "FlagAustralia.png",
		"FlagAustria.png", "FlagBrazil.png", "FlagCanada.png",
		"FlagChina.png", "FlagDenmark.jpg",
		"FlagFinland.jpg", "FlagGermany.png",
		"FlagIndia.png", "FlagJapan.png",
		"FlagNetherlands.png", "FlagNewZealand.gif",
		"FlagNorway.png", "FlagPeru.gif", "FlagSweden.png"
	], 
	questions: ["The two types of Location are:", "What two types of coordinates are used to measure Exact Location?",
	"Which of the following would be an example of Exact Location?", "What does the Theme 'Place' describe?",
	"What is an example of a physical feature?", "What is an example of a human feature?",
	"True or False: Humans have changed the environment, and the environment has changed Humans as well.",
	"What is one way that humans have changed the environment?", "People move around the globe based on what factors?",
	"Which of the following is a true statement?",
	"True or False: The borders humans place on maps define the physical characteristics of regions.",
	"From where did Europe receive domesticated crops?", "What advantages did the Spaniards have over the Native Americans during their conquest?",
	"What are the three kinds of writing strategies?", "What is the order of society types from smallest to largest?",
	"Why was China's north-south crop diffusion able to occur?",
	"What ethnic group dominated southern Africa due to its invasion of the continent about 3,000 years ago?",
	"Which of the following is NOT one of the severe environmental events which occurs during Earth 2100?",
	"Which two countries get into a war over oil in Earth 2100?", "Why was the virus able to spread so easily in Earth 2100?",
	"What is the capital of Ethiopia?", "What landform in North Africa has been a geographical barrier for centuries?",
	"How many official languages does South Africa have?", "What is the primary export of Venezuela?", "What is the capital of Brazil?",
	"What percent of the world's population is the population of China?", "Which of the following is NOT a country in East Asia?",
	"What are the 3 most prominent rivers in China?", "Which of the following civilizations did NOT have a writing system?",
	"Which of the following, by the Anna Karenina principle, is NOT one of the characteristics an animal needs in order to be domesticated?"
	],
	correctAnswers: [3, 1, 3, 4, 2, 1, 1, 3, 4, 4, 2, 1, 2, 4, 3, 1, 2, 2, 3, 1, 4, 3, 2, 1, 2, 4, 3, 1, 2, 3],
	questionAnswers: [["Relative and Kinetic","Realistic and Exact","Exact and Relative","Longitude and Latitude"],
	["Latitude and Longitude","Shortitude and Longitude","Exact and Relative","Latitude and Lateraltude"], 
	["I am currently located 2 million miles from the sun.", "I am at the supermarket on 12th Avenue.",
	"I am located at  approximately 40 degrees North, 75 degrees West.", "I am about 15 minutes away from the school."
	], ["An area's latitude and longitude", "What kind of people settled a particular area", "The location of a particular area",
	"An area's human and physical features"], ["The Eiffel Tower", "Rocky Mountains", "Prime Meridian", "Oxidative Phosphorylation"],
	["The Eiffel Tower", "Appalachian Mountains", "Mount Everest", "Pacific Ocean"], ["True", "False", " ", " "],
	["Humans had to adapt to the colder temperatures of the ice age.", "Humans farmed based on what crops were available to them.",
	"Humans have cut down trees to accommodate their needs.", "Humans formed countries that chose not to interact at all with the environment."
	], ["What is easiest for them to live a good life", "What resources a particular place has to offer", "To share cultures and ideas",
	"All of the Above"], ["Resources do not exist on earth.", "Resources are placed evenly throughout the globe.", 
	"Humans are placed evenly throughout the globe.", "Humans are placed unevenly throughout the globe."],
	["True", "False", " ", " "], ["Southwest Asia", "Africa", "New Guinea", "South America"],
	["Verbal language, ships, and intelligence", "Written language, steel, and diseases", "Hablo, espanol, tambien", 
	"Guns, medicine, and numbers"], ["One syllable, two syllables, and three syllables", "alphabet, spoken, and written",
	"Linear A, alphabet, and hieroglyphics", "Alphabetic, logograms, and and Linear B"],
	["State, Chiefdom, Tribe, Band", "Tribe, Band, Chiefdom, State", "Band, Tribe, Chiefdom, State",
	"Band, Chiefdom, Tribe, State"], ["Its north-south distances were smaller.", 
	"The weather patterns allowed for the same climate all along that longitude.", "It didn't occur.", "None of the Above."],
	["Khoisan", "Bantu", "Pygmy", "Niger-Congo"], ["The rising sea levels", "Volcanic Eruption", "A worldwide epidemic", "A severe drought"],
	["The U.S. and Mexico", "Russia and China", "China and India", "Brazil and Venezuela"],
	["The flood left New York ruined, so the virus could spread easily.", "The people didn't have sufficient technology to develop a cure."
	, "The people didn't know there was a virus.", "They had never seen the virus before."],
	["Djibouti", "Asmara", "Nairobi", "Addis Ababa"], ["The Gobi Desert", "The Mediterranean Sea", "The Sahara Desert", "The Himalayas"],
	["3", "11", "2", "4"], ["Fossil Fuels", "Auto mobiles", "Plastic", "Iron"], ["Brazil City", "Bras&iacute;lia", "Bogot&aacute;", "Addis Ababa"],
	["5%", "10%", "15%", "20%"], ["China", "Mongolia", "Russia", "South Korea"], ["The Yellow River, The Yangtze River, and The Xi Jiang",
	"The Yellow River, The Gobi River, and The Xi Jiang", "The Blue River, the Amazon, and The Nile",
	"The Yellow River, The Yahtzee River, and The Xi Jiang"], ["The Roman Empire", "The Inca Empire", 
	"The Aztec Empire", "The Chinese Empire"], ["Quick Growth Rate", "Social Structure", "Can be used for food", "Herbivore Diet"]
	],
	UNevents: ["Your nation has profited off of a new technology!  Collect $100!",
		"National Debt was over-calculated.  Collect $100.", "It's your country's centennial celebration! Collect $10 from every player!",
		"You have lied about your National Debt.  Pay $100 to make up for what you owe.", "Advance to Eurasia.", 
		"Advance to World Geography Boardwalk",
		"Your country's oil supplies are depleting.  Pay every player $5 so you will have enough oil for a few years.",
	],
	propertiesWithHouses: [2, 4, 7, 9, 10, 12, 14, 15, 17, 19, 20, 22, 24, 25, 27, 28, 30, 32, 33, 35, 38, 40],
	colorSets: [[2, 4], [7, 9, 10], [12, 14, 15], [17, 19, 20], [22, 24, 25], [27, 28, 30], [32, 33, 35], [38, 40]]
};

var Game = {
	inViewState: false,
	numberOfPlayers: 0, //starts at 1
	currentPlayerTurn: 0, //starts at 0
	playerList: [],
	boardWidth: 0,
	boardMargin: 0,
	diceState: 1,
	currentDice: [0, 0],
	gameExists: true,
    playerCountries: [],
	playerMoney: [],
	playerLocations: [],
	propertyOwners: [],
	mortgagedProperties: [],
	housesOnProperty: [],
	inJail: [],
	currentCost: 0,
	goAgain: false,
	jailWorking: false,
    returnToTitleScreen: function(){
		location.replace("MainBoardGame.html");
	},
	openPropertyInfo: function(landedOn, propertyNum){//propertyNumber starts at 1, not 0
		
		//reference http://www.jdawiseman.com/papers/trivia/monopoly-rents.html when I get to coding the property values
		propertyNum--;
        if(!landedOn && Data.propertyColors[propertyNum] !== null && Game.inViewState){
            $('#tileInfoBox').css('visibility', 'visible');
			$("#propertyInfo").css('visibility', 'visible');
            $('#colorBox').css('visibility', 'visible');
			$("#closeInfoButton").css('visibility', 'hidden');
            $('#colorBox').css('background-color', Data.propertyColors[propertyNum]);
            $('#colorBox p:nth-child(3)').html(Data.propertyNames[propertyNum]);
            var houseHotelAm;
            if(propertyNum > 0 && propertyNum < 10){
                houseHotelAm = 50;
            }
            else if(propertyNum > 10 && propertyNum < 20){
                houseHotelAm = 100;
            }
            else if(propertyNum > 20 && propertyNum < 30){
                houseHotelAm = 150;
            }
            else if(propertyNum > 30){
                houseHotelAm = 200;
            }
			if(Data.propertyColors[propertyNum] === "#000000"){
				$("#colorBox p:nth-child(1)").css('color', 'white');
				$("#colorBox p:nth-child(3)").css('color', 'white');
			}
			else{
				$("#colorBox p:nth-child(1)").css('color', 'black');
				$("#colorBox p:nth-child(3)").css('color', 'black');
			}
            $('#propertyInfo p:nth-child(2)').html(
            "<center>RENT $" + (Data.propertyValues[propertyNum] / 10) + "<br> With 1 House " + "&emsp;&emsp;&emsp;" + "$" +
			  (Data.propertyValues[propertyNum] / 2 - 10) + ".<br> With 2 Houses " + "&emsp;&emsp;&emsp;" +
              ((Data.propertyValues[propertyNum] / 2 - 10) * 3) + ".<br>With 3 Houses" + "&emsp;&emsp;&emsp;" + 
              ((Data.propertyValues[propertyNum] / 2 - 10) * 5) + ".<br>With 4 Houses" + "&emsp;&emsp;&emsp;" + 
              ((Data.propertyValues[propertyNum] / 2 - 10) * 7 + 200) + ".<br> With HOTEL $" + 
              ((Data.propertyValues[propertyNum] / 2 - 10) * 5 + 600) + ".<br> Mortgage Value $" +  
              (Data.propertyValues[propertyNum] / 2) + ".<br> Houses cost $" + houseHotelAm + ". each<br>" +
              "Hotels, $" + houseHotelAm + ". plus 4 houses" + "<div style=font-size:10px;><br>If a player owns all properties of a color group, the rent for each of those properties, without a house, is doubled.</div>" +
                "</center>"
            );
			$('#propertyInfo p:nth-child(2)').css('font-size', ($('#propertyInfo').height() / 18) + "px");
        }
		else if(landedOn && Data.propertyColors[propertyNum] !== null && Game.propertyOwners[propertyNum] === 0){
			$('#tileInfoBox').css('visibility', 'visible');
			$("#propertyInfo").css('visibility', 'visible');
            $('#colorBox').css('visibility', 'visible');
            $('#colorBox').css('background-color', Data.propertyColors[propertyNum]);
            $('#colorBox p:nth-child(3)').html(Data.propertyNames[propertyNum]);
            var houseHotelAm;
            if(propertyNum > 0 && propertyNum < 10){
                houseHotelAm = 50;
            }
            else if(propertyNum > 10 && propertyNum < 20){
                houseHotelAm = 100;
            }
            else if(propertyNum > 20 && propertyNum < 30){
                houseHotelAm = 150;
            }
            else if(propertyNum > 30){
                houseHotelAm = 200;
            }
			if(Data.propertyColors[propertyNum] === "#000000"){
				$("#colorBox p:nth-child(1)").css('color', 'white');
				$("#colorBox p:nth-child(3)").css('color', 'white');
			}
			else{
				$("#colorBox p:nth-child(1)").css('color', 'black');
				$("#colorBox p:nth-child(3)").css('color', 'black');
			}
            $('#propertyInfo p:nth-child(2)').html(
            "<center>RENT $" + (Data.propertyValues[propertyNum] / 10) + "<br> With 1 House " + "&emsp;&emsp;&emsp;" + "$" +
			  (Data.propertyValues[propertyNum] / 2 - 10) + ".<br> With 2 Houses " + "&emsp;&emsp;&emsp;" +
              ((Data.propertyValues[propertyNum] / 2 - 10) * 3) + ".<br>With 3 Houses" + "&emsp;&emsp;&emsp;" + 
              ((Data.propertyValues[propertyNum] / 2 - 10) * 5) + ".<br>With 4 Houses" + "&emsp;&emsp;&emsp;" + 
              ((Data.propertyValues[propertyNum] / 2 - 10) * 7 + 200) + ".<br> With HOTEL $" + 
              ((Data.propertyValues[propertyNum] / 2 - 10) * 5 + 600) + ".<br> Mortgage Value $" +  
              (Data.propertyValues[propertyNum] / 2) + ".<br> Houses cost $" + houseHotelAm + ". each<br>" +
              "Hotels, $" + houseHotelAm + ". plus 4 houses" + "<div style=font-size:10px;><br>If a player owns all properties of a color group, the rent for each of those properties, without a house, is doubled.</div>" +
                "</center>"
            );
			$('#propertyInfo p:nth-child(2)').css('font-size', ($('#propertyInfo').height() / 18) + "px");
	
			$("#closeInfoButton").css('visibility', 'hidden');
			var questionNum = Util.randInt(0, (Data.questions.length - 1));
			$("#question").html(
			Data.questions[questionNum] + "<div style='border: 1px solid black;' onClick='Game.pickAnswer(1," + questionNum+ ", false)'>a)"
			+ Data.questionAnswers[questionNum][0] + 
			"</div><div style='border: 1px solid black;' onClick='Game.pickAnswer(2," + questionNum + ", false)'>b)" + Data.questionAnswers[questionNum][1] + 
			"</div><div style='border: 1px solid black;' onClick='Game.pickAnswer(3," + questionNum +", false)'>c)" + Data.questionAnswers[questionNum][2]
			+ "</div><div style='border: 1px solid black;' onClick='Game.pickAnswer(4," + questionNum + ", false)'>d)" + Data.questionAnswers[questionNum][3] + "</div>"
			);
			Game.currentCost = Data.propertyValues[propertyNum];
		}
		else if(landedOn && Data.propertyColors[propertyNum] !== null && 
		Game.propertyOwners[propertyNum] === Game.currentPlayerTurn + 1
		){
			alert("You own this property");
			Game.closePropertyInfo();
			Game.showDataBox(1);
		}
		else if(landedOn && Game.mortgagedProperties[propertyNum]){
			alert("This property is currently mortgaged, and you do not own it.");
			Game.closePropertyInfo();
			Game.showDataBox(1);
		}
		else if(landedOn && Data.propertyColors[propertyNum] !== null && Game.propertyOwners[propertyNum] !== 0
			&& Game.propertyOwners[propertyNum] !== (Game.currentPlayerTurn + 1)
		){
			$("#propertyInfo").css('visibility', 'visible');
			$('#tileInfoBox').css('visibility', 'visible');
            $('#colorBox').css('visibility', 'visible');
            $('#colorBox').css('background-color', Data.propertyColors[propertyNum]);
            $('#colorBox p:nth-child(3)').html(Data.propertyNames[propertyNum]);
            var houseHotelAm;
            if(propertyNum > 0 && propertyNum < 10){
                houseHotelAm = 50;
            }
            else if(propertyNum > 10 && propertyNum < 20){
                houseHotelAm = 100;
            }
            else if(propertyNum > 20 && propertyNum < 30){
                houseHotelAm = 150;
            }
            else if(propertyNum > 30){
                houseHotelAm = 200;
            }
			if(Data.propertyColors[propertyNum] === "#000000"){
				$("#colorBox p:nth-child(1)").css('color', 'white');
				$("#colorBox p:nth-child(3)").css('color', 'white');
			}
			else{
				$("#colorBox p:nth-child(1)").css('color', 'black');
				$("#colorBox p:nth-child(3)").css('color', 'black');
			}
            $('#propertyInfo p:nth-child(2)').html(
            "<center>RENT $" + (Data.propertyValues[propertyNum] / 10) + "<br> With 1 House " + "&emsp;&emsp;&emsp;" + "$" +
			  (Data.propertyValues[propertyNum] / 2 - 10) + ".<br> With 2 Houses " + "&emsp;&emsp;&emsp;" +
              ((Data.propertyValues[propertyNum] / 2 - 10) * 3) + ".<br>With 3 Houses" + "&emsp;&emsp;&emsp;" + 
              ((Data.propertyValues[propertyNum] / 2 - 10) * 5) + ".<br>With 4 Houses" + "&emsp;&emsp;&emsp;" + 
              ((Data.propertyValues[propertyNum] / 2 - 10) * 7 + 200) + ".<br> With HOTEL $" + 
              ((Data.propertyValues[propertyNum] / 2 - 10) * 5 + 600) + ".<br> Mortgage Value $" +  
              (Data.propertyValues[propertyNum] / 2) + ".<br> Houses cost $" + houseHotelAm + ". each<br>" +
              "Hotels, $" + houseHotelAm + ". plus 4 houses" + "<div style=font-size:10px;><br>If a player owns all properties of a color group, the rent for each of those properties, without a house, is doubled.</div>" +
                "</center>"
            );
			$('#propertyInfo p:nth-child(2)').css('font-size', ($('#propertyInfo').height() / 18) + "px");
			$("#closeInfoButton").css('visibility', 'hidden');
			var rentCost;
			switch(Game.housesOnProperty[propertyNum]){
				case 0:
					rentCost = (Data.propertyValues[propertyNum] / 10);
					break;
				case 1:
					rentCost = (Data.propertyValues[propertyNum] / 2 - 10);
					break;
				case 2:
					rentCost = ((Data.propertyValues[propertyNum] / 2 - 10) * 3);
					break;
				case 3:
					rentCost = ((Data.propertyValues[propertyNum] / 2 - 10) * 5);
					break;
				case 4:
					rentCost = ((Data.propertyValues[propertyNum] / 2 - 10) * 7 + 200);
					break;
				case 5:
					rentCost = ((Data.propertyValues[propertyNum] / 2 - 10) * 5 + 600);
					break;
				default:
					rentCost = (Data.propertyValues[propertyNum] / 10);
					break;
			}
			$("#question").html(
			"You must pay $" + rentCost + " in rent to " + Game.playerCountries[Game.propertyOwners[propertyNum] - 1] + "!"
			)
			$("#payRentButton").css('visibility', 'visible');
			$("#payRentButton").html('Pay rent');
			if(Game.playerMoney[Game.currentPlayerTurn] - rentCost >= 0){
				$("#payRentButton").attr('onClick', "Game.payRent(" + (Game.propertyOwners[propertyNum] - 1).toString() + ", " + rentCost + ");");
			}
			else{
				$("#payRentButton").attr('onClick', "Game.payRent(" + (Game.propertyOwners[propertyNum] - 1).toString() + ", " + rentCost + ");Game.showEndMessage('Cant pay rent');");
			}
		}
		else if(landedOn && Data.propertyColors[propertyNum] === null){
			$("#closeInfoButton").css('visibility', 'hidden');
			var loc = Game.playerLocations[Game.currentPlayerTurn];
			if(loc === 3 || loc === 18 || loc === 34){
				$('#tileInfoBox').css('visibility', 'visible');
				$("#propertyInfo").css('visibility', 'hidden');
				$("#propImage").css('visibility', 'visible');
				$("#propImage").css("background", "url(Resources/" + Data.propertyImages[loc - 1] + ") no-repeat");
				//$(".action:nth-child(3)").css("background", "url(Resources/EndTurn.png) no-repeat");
				$("#propImage").css('background-size', '100%');
				var eventNum = Util.randInt(0, Data.UNevents.length - 1);
				//var eventNum = 5;
				$("#question").html(Data.UNevents[eventNum]);
				$("#payRentButton").css('visibility', 'visible');
				$("#payRentButton").html('OK');
				$("#payRentButton").attr('onClick', "Game.doUNaction(" + eventNum + ")");
				/**
					UNevents: ["Your nation has profited off of a new technology!  Collect $100!",
					"National Debt was over-calculated.  Collect $100.", "It's your country's centennial celebration! Collect $10 from every player!",
					"You have lied about your National Debt.  Pay $100 to make up for what you owe.", "Advance to Eurasia.", 
					"Advance to World Geography Boardwalk",
					"Your country's oil supplies are depleting.  Pay every player $5 so you will have enough oil for a few years.",
				]
				**/
			}
			else if(loc === 8 || loc === 23 || loc === 37){
				$('#tileInfoBox').css('visibility', 'visible');
				$("#propertyInfo").css('visibility', 'hidden');
				$("#propImage").css('visibility', 'visible');
				$("#propImage").css("background", "url(Resources/" + Data.propertyImages[loc - 1] + ") no-repeat");
				//$(".action:nth-child(3)").css("background", "url(Resources/EndTurn.png) no-repeat");
				$("#propImage").css('background-size', '100%');
				//var eventNum = Util.randInt(0, Data.UNevents.length - 1);
				var questionNum = Util.randInt(0, (Data.questions.length - 1));
				$("#question").html(
					Data.questions[questionNum] + "<div style='border: 1px solid black;' onClick='Game.pickAnswer(1," + questionNum+ ", true)'>a)"
					+ Data.questionAnswers[questionNum][0] + 
					"</div><div style='border: 1px solid black;' onClick='Game.pickAnswer(2," + questionNum + ", true)'>b)" + Data.questionAnswers[questionNum][1] + 
					"</div><div style='border: 1px solid black;' onClick='Game.pickAnswer(3," + questionNum +", true)'>c)" + Data.questionAnswers[questionNum][2]
					+ "</div><div style='border: 1px solid black;' onClick='Game.pickAnswer(4," + questionNum + ", true)'>d)" + Data.questionAnswers[questionNum][3] + "</div>"
				);
			}
			else if(loc === 6 || loc === 16 || loc === 26 || loc === 36 || loc === 13){
				if(Game.propertyOwners[propertyNum] === 0){
					$('#tileInfoBox').css('visibility', 'visible');
					$("#propertyInfo").css('visibility', 'visible');
					$('#colorBox').css('visibility', 'visible');
					$('#colorBox').css('background-color', '#FFFFFF');
					$('#colorBox p:nth-child(3)').html(Data.propertyNames[propertyNum]);
					$('#propertyInfo p:nth-child(2)').html(
					"<br><br><center>Rent: &emsp; $25" +
					"<br>If 2 railroads are owned: $50" +
					"<br>If 3 railroads are owned: $100" +
					"<br>If 4 railroads are owned: $200" +
					"<br>If 5 railroads are owned: $400" +
					"<br>Mortgage value $100</center>"
					);
					$('#propertyInfo p:nth-child(2)').css('font-size', ($('#propertyInfo').height() / 18) + "px");
			
					$("#closeInfoButton").css('visibility', 'hidden');
					var questionNum = Util.randInt(0, (Data.questions.length - 1));
					$("#question").html(
					Data.questions[questionNum] + "<div style='border: 1px solid black;' onClick='Game.pickAnswer(1," + questionNum+ ", false)'>a)"
					+ Data.questionAnswers[questionNum][0] + 
					"</div><div style='border: 1px solid black;' onClick='Game.pickAnswer(2," + questionNum + ", false)'>b)" + Data.questionAnswers[questionNum][1] + 
					"</div><div style='border: 1px solid black;' onClick='Game.pickAnswer(3," + questionNum +", false)'>c)" + Data.questionAnswers[questionNum][2]
					+ "</div><div style='border: 1px solid black;' onClick='Game.pickAnswer(4," + questionNum + ", false)'>d)" + Data.questionAnswers[questionNum][3] + "</div>"
					);
					Game.currentCost = Data.propertyValues[propertyNum];
				}
				else if(Game.propertyOwners[propertyNum] !== Game.currentPlayerTurn + 1){
					$('#tileInfoBox').css('visibility', 'visible');
					$("#propertyInfo").css('visibility', 'visible');
					$('#colorBox').css('visibility', 'visible');
					$('#colorBox p:nth-child(3)').html(Data.propertyNames[propertyNum]);
					$('#propertyInfo p:nth-child(2)').html(
					"<br><br><center>Rent: &emsp; $25" +
					"<br>If 2 railroads are owned: $50" +
					"<br>If 3 railroads are owned: $100" +
					"<br>If 4 railroads are owned: $200" +
					"<br>If 5 railroads are owned: $400" +
					"<br>Mortgage value $100</center>"
					);
					$('#propertyInfo p:nth-child(2)').css('font-size', ($('#propertyInfo').height() / 18) + "px");
					$("#closeInfoButton").css('visibility', 'hidden');
					var rentCost;
					var railroadProperties = [6, 13, 16, 26, 36];
					var railroadsOwned = 0;
					for(var i = 0;i < railroadProperties.length;i++){
						if(Game.propertyOwners[propertyNum] === Game.propertyOwners[railroadProperties[i] - 1]){
							railroadsOwned++;
						}
					}	
					switch(railroadsOwned){
						case 1:
							rentCost = 25;
							break;
						case 2:
							rentCost = 50;
							break;
						case 3:
							rentCost = 100;
							break;
						case 4:
							rentCost = 200;
							break;
						case 5:
							rentCost = 400;
							break;
					}
					
					$("#question").html(
						"You must pay $" + rentCost + " in rent to " + Game.playerCountries[Game.propertyOwners[propertyNum] - 1] + "!"
					)
					$("#payRentButton").css('visibility', 'visible');
					$("#payRentButton").html('Pay rent');
					if(Game.playerMoney[Game.currentPlayerTurn] - rentCost < 0){
						$("#payRentButton").attr('onClick', "Game.payRent(" + (Game.propertyOwners[propertyNum] - 1).toString() + ", " + rentCost + ");Game.closePropertyInfo();Game.showEndMessage('Cant pay rent', null);");
					}
					else{
						$("#payRentButton").attr('onClick', "Game.payRent(" + (Game.propertyOwners[propertyNum] - 1).toString() + ", " + rentCost + ");");
					}
				}
				else if(Game.propertyOwners[propertyNum] === Game.currentPlayerTurn + 1){
					Game.closePropertyInfo();
					Game.showDataBox(1);
				}
			}
			else if(loc === 1 || loc === 11 || loc === 21){
				$('#tileInfoBox').css('visibility', 'visible');
				$("#propertyInfo").css('visibility', 'hidden');
				$("#propImage").css('visibility', 'visible');
				$("#propImage").css("background", "url(Resources/" + Data.propertyImages[loc - 1] + ") no-repeat");
				//$(".action:nth-child(3)").css("background", "url(Resources/EndTurn.png) no-repeat");
				$("#propImage").css('background-size', '100%');
				//var eventNum = 5;
				var message;
				switch(loc){
					case 1:
						message = "Collect $200 as you advance your history!";
						break;
					case 11:
						message = "Just visiting!";
						break;
					case 21:
						message = "Neutral Territory.";
						break;
				}
				$("#question").html(message);
				$("#payRentButton").css('visibility', 'visible');
				$("#payRentButton").html('OK');
				$("#payRentButton").attr('onClick', "Game.closePropertyInfo();Game.showDataBox(1);");
			}
			else if(loc === 31){
				Game.closePropertyInfo();
				Game.showDataBox(1);
				//need to add jail code here
			}
			else if(loc === 39){
				$('#tileInfoBox').css('visibility', 'visible');
				$("#propertyInfo").css('visibility', 'hidden');
				$("#propImage").css('visibility', 'visible');
				$("#propImage").css("background", "url(Resources/" + Data.propertyImages[loc - 1] + ") no-repeat");
				//$(".action:nth-child(3)").css("background", "url(Resources/EndTurn.png) no-repeat");
				$("#propImage").css('background-size', '100%');
				$("#question").html("Your country owes debt to the United Nations!  Pay $100!");
				$("#payRentButton").css('visibility', 'visible');
				$("#payRentButton").html('Pay amount');
				$("#payRentButton").attr('onClick', "Game.changePlayerMoney(" + Game.currentPlayerTurn +", -100);Game.closePropertyInfo();Game.showDataBox(1);");
			}
			else if(loc === 5){
				$('#tileInfoBox').css('visibility', 'visible');
				$("#propertyInfo").css('visibility', 'hidden');
				$("#propImage").css('visibility', 'visible');
				$("#propImage").css("background", "url(Resources/" + Data.propertyImages[loc - 1] + ") no-repeat");
				//$(".action:nth-child(3)").css("background", "url(Resources/EndTurn.png) no-repeat");
				$("#propImage").css('background-size', '100%');
				$("#question").html("Your country has suffered a natural Disaster!  Pay $200!");
				$("#payRentButton").css('visibility', 'visible');
				$("#payRentButton").html('Pay amount');
				if(Game.playerMoney[Game.currentPlayerTurn] - 200 < 0){
					$("#payRentButton").attr('onClick', "Game.changePlayerMoney(" + Game.currentPlayerTurn +", -200);Game.showEndMessage('Cant pay rent', null);");
				}
				else{
					$("#payRentButton").attr('onClick', "Game.changePlayerMoney(" + Game.currentPlayerTurn +", -200);Game.closePropertyInfo();Game.showDataBox(1);");
				}
			}
			else if(loc === 29){
				Game.closePropertyInfo();
				Game.showDataBox(1);
				//need to Earth 2100 code here
			}
		}
    },
	doUNaction: function(num){
		switch(num){
			case 0:
				Game.changePlayerMoney(Game.currentPlayerTurn, 100);
				Game.closePropertyInfo();
				Game.showDataBox(1);
				break;
			case 1:
				Game.changePlayerMoney(Game.currentPlayerTurn, 100);
				Game.closePropertyInfo();
				Game.showDataBox(1);
				break;
			case 2:
				for(var i = 0;i < Game.numberOfPlayers;i++){
					if(i !== Game.currentPlayerTurn){
						Game.changePlayerMoney(Game.currentPlayerTurn, 10);
						Game.changePlayerMoney(i, -10);
					}
				}
				Game.closePropertyInfo();
				Game.showDataBox(1);
				break;
			case 3:
				Game.changePlayerMoney(Game.currentPlayerTurn, -100);
				Game.closePropertyInfo();
				Game.showDataBox(1);
				break;
			case 4:
				Game.closePropertyInfo();
				Game.movePlayer(Game.currentPlayerTurn, 2, true);
				break;
			case 5:
				Game.closePropertyInfo();
				Game.movePlayer(Game.currentPlayerTurn, 40, true);
				break;
			case 6:
				for(var i = 0;i < Game.numberOfPlayers;i++){
					if(i !== Game.currentPlayerTurn){
						Game.changePlayerMoney(Game.currentPlayerTurn, -5);
						Game.changePlayerMoney(i, 5);
					}
				}
				Game.closePropertyInfo();
				Game.showDataBox(1);
				break;
			default:
				Game.closePropertyInfo();
				Game.showDataBox(1);
				break;
		}
	},
	payRent: function(owner, amount){
		Game.changePlayerMoney(Game.currentPlayerTurn, -1 * amount);
		Game.changePlayerMoney(owner, amount);
		$("#payRentButton").css('visibility', 'hidden');
		Game.closePropertyInfo();
		Game.showDataBox(1);
	},
	showEndMessage: function(message, player){
		switch(message){
			case "Cant pay rent":
				alert("If you can't mortgage properties or sell houses right now, then you're out of the game!");
				Game.closePropertyInfo();
				Game.showDataBox(2);
				break;
			case "Purchasing Property":
				alert("You cannot buy this item; you'll run out of money!");
				Game.closePropertyInfo();
				Game.showDataBox(1);
				break;
			case "Can't pay tax":
				alert("If you can't mortgage properties or sell houses right now, then you're out of the game!");
				Game.closePropertyInfo();
				Game.showDataBox(2);
				break;
			case "Default":
				alert("Player " + (player + 1).toString() + " ran out of money and is now out of the game!");
				Game.destroyPlayer(player);
				break;
		}
	},
	pickAnswer: function(answer, question, randomQuestion){
		if(!randomQuestion){
			if(answer === Data.correctAnswers[question]){
				if (confirm("Correct Answer!  Would you like to buy this property for $" + Game.currentCost + " ?") == true) {
					if(Game.playerMoney[Game.currentPlayerTurn] - Game.currentCost < 0){
						Game.showEndMessage("Purchasing Property", null);
					}
					else{
						Game.givePlayerProperty();
					}
					Game.closePropertyInfo();
					Game.showDataBox(1);
				} 
				else {
					Game.closePropertyInfo();
					Game.showDataBox(1);
				}
			}
			else{
				alert("Incorrect answer; You cannot buy the property.");
				Game.closePropertyInfo();
				Game.showDataBox(1);
			}
		}
		else if(randomQuestion){
			if(answer === Data.correctAnswers[question]){
				alert("Correct Answer!  You get $75!")
				Game.changePlayerMoney(Game.currentPlayerTurn, 75);
				Game.closePropertyInfo();
				Game.showDataBox(1);
			}
			else{
				alert("Incorrect answer; You lose $75.");
				Game.changePlayerMoney(Game.currentPlayerTurn, -75);
				Game.closePropertyInfo();
				Game.showDataBox(1);
			}
		}
	},
	givePlayerProperty: function(){
		Game.changePlayerMoney(Game.currentPlayerTurn, -1 * Game.currentCost);
		Game.propertyOwners[Game.playerLocations[Game.currentPlayerTurn] - 1] = Game.currentPlayerTurn + 1;
		Game.playerProperties[Game.currentPlayerTurn].push(Game.playerLocations[Game.currentPlayerTurn] - 1);
		$("#Owner" + (Game.playerLocations[Game.currentPlayerTurn]).toString()).html((Game.currentPlayerTurn + 1).toString());
	},
	changePlayerMoney: function(player, amount){//player starts at 0
		//if(Game.playerMoney[player] + amount >= 0){
			Game.playerMoney[player] += amount;
			$("#pNum" + (player + 1).toString()).html(
				"Player " + (player + 1).toString() + 
				"(" + Game.playerCountries[player].toString() + ") $" + 
				Game.playerMoney[player].toString()
			);
		//}
		if(Game.currentPlayerTurn !== player && Game.playerMoney[player] + amount < 0){
			Game.showEndMessage("Default", player);
		}
		/**}
		else{
			if(Game.propertyOwners[Game.currentPlayerTurn] > 0 && Game.currentPlayerTurn === player){
				alert("Game over for the current player!  He/She could not afford to pay the property owner!");
				Game.destroyPlayer(Game.currentPlayerTurn);
			}
			else if(Game.propertyOwners[Game.currentPlayerTurn] === 0 && Game.currentPlayerTurn === player){
				alert("You cannot buy this property; you'll run out of money!");
				Game.closePropertyInfo();
				Game.showDataBox(1);
			}
			else{
				alert("Game over for player number " + player + "!  He/She could not afford to pay!");
				Game.destroyPlayer(player);
			}
		}**/
	},
	stillInGame: [],
	destroyPlayer: function(player){//starts at 0
		$("#pNum" + (player + 1).toString()).css('visibility', 'hidden');
		Game.stillInGame[player] = false;
		Game.playerProperties[player] = [];
		$("#PlayerNum" + (player + 1).toString()).css('visibility', 'hidden');
		for(var i = 0;i < Game.propertyOwners.length;i++){
			if(Game.propertyOwners[i] === (player + 1)){
				Game.propertyOwners[i] = 0;
				$("#Owner" + (i + 1).toString()).html("");
				if(Game.housesOnProperty[i] > 0 && Game.housesOnProperty[i] < 5){
					for(var it = 1;it <= 4;it++){
						$("#House" + it + "_Prop" + (i + 1).toString()).css('visibility', 'hidden');
					}
					Game.housesOnProperty[i] = 0;
				}
				else if(Game.housesOnProperty[i] === 5){
					$("#Hotel" +  "_Prop" + (i + 1).toString()).css('visibility', 'hidden');
					Game.housesOnProperty[i] = 0;
				}
			}
		}
		if(Util.checkForOneTrue(Game.stillInGame)){
			Game.endGame();
		}
		else{
			Game.closePropertyInfo();
			Game.endPlayerTurn();
		}
	},
	endGame: function(){
		var winner = Game.playerMoney.indexOf(Math.max.apply(Math,Game.playerMoney));
		alert("Game over!  The player with the most money was " + Game.playerCountries[winner]);
		location.replace("MainBoardGame.html");
	},
	closePropertyInfo: function(){
		$('#tileInfoBox').css('visibility', 'hidden');
		$('#colorBox').css('visibility', 'hidden');
		$("#propertyInfo").css('visibility', 'hidden');
		$("#propImage").css('visibility', 'hidden');
		$("#payRentButton").css('visibility', 'hidden');
	},
	rollDice: function(){
		switch(Game.diceState){
			case 1:
				$("#diceAnim").css('visibility', 'visible');
				$("#throwDiceButton p").html('Stop Dice');
				break;
			case 2:
				var dice1 = Util.randInt(1, 6);
				var dice2 = Util.randInt(1, 6);
				//var dice1 = 1;
				//var dice2 = 2;
				Game.currentDice[0] = dice1;
				Game.currentDice[1] = dice2;
				if(dice1 === dice2){
					Game.goAgain = true;
				}
				else{
					Game.goAgain = false;
				}
				$("#diceAnim").css('visibility', 'hidden');
				$("#diceFace1").css('visibility', 'visible');
				$("#diceFace1").css('background', 'url("Resources/DiceFace' + dice1 + '.jpg") no-repeat');
				$("#diceFace1").css('background-size', '100%');
				$("#diceFace2").css('visibility', 'visible');
				$("#diceFace2").css('background', 'url("Resources/DiceFace' + dice2 + '.jpg") no-repeat');
				$("#diceFace2").css('background-size', '100%');
				$("#throwDiceButton p").html('Continue');
				break;
			case 3:
				$('#diceThrowingScreen').css('visibility', 'hidden');
				$("#diceFace1").css('visibility', 'hidden');
				$("#diceFace2").css('visibility', 'hidden');
				//console.log(Game.currentDice);
				if(!Game.inJail[Game.currentPlayerTurn]){
					Game.movePlayer(Game.currentPlayerTurn, Game.currentDice[0] + Game.currentDice[1], false);
                }
                //console.log("Calling method with params: " + Game.currentPlayerTurn + ", "
                //+ (Game.currentDice[0] + Game.currentDice[1]) + ", " + false
                //);
				break;
		}
		if(Game.diceState < 3){
			Game.diceState++;
		}
		else{
			Game.diceState = 1;
		}
	},
	setButtonVisible: false,
	showSelects: function(){
		if(!Game.setButtonVisible){
			$("#startGameButton").css('visibility', 'visible');
			Game.setButtonVisible = true;
		}
		var amount = parseInt($("#playerSelectionScreen select:nth-child(2)").val());
		for(var i = 1;i <= amount;i++){
			$("#playerSelectionScreen p:nth-child(" + (i * 2 + 2) + ")").css("visibility", "visible");
			$("#playerSelectionScreen select:nth-child(" + (i * 2 + 3) + ")").css("visibility", "visible");
		}
		for(var i = (amount + 1);i <= 10;i++){
			$("#playerSelectionScreen p:nth-child(" + (i * 2 + 2) + ")").css("visibility", "hidden");
			$("#playerSelectionScreen select:nth-child(" + (i * 2 + 3) + ")").css("visibility", "hidden");
		}
	},
	submitPlayers: function(){
		var selectList = $("#playerSelectionScreen select:nth-child(2)").val().toString();
		var testSelect= [];
		for(var i = 0;i < parseInt(selectList);i++){
			var currentSelect = document.getElementsByClassName("selectOption")[i];
			testSelect.push(currentSelect.options[currentSelect.selectedIndex].text);
		}
		if(Util.hasDuplicates(testSelect)){
			alert("No two players can have the same country name.");
		}
		else{
			Game.playerCountries = testSelect;
			Game.numberOfPlayers = parseInt(selectList);
			$("#playerSelectionScreen, #playerSelectionScreen select," +
			"#playerSelectionScreen p, #playerSelectionScreen #startGameButton").fadeOut(1500);
			window.setTimeout(function(){Game.loadPlayers();}, 1500);
		}
	},
	playerProperties: [],
	playersLoaded: false,
	loadPlayers: function(){
		//if(!Game.playersLoaded){
			for(var i = Game.numberOfPlayers - 1;i >= 0;i--){
				var player = document.createElement("div");
				$(player).attr('class', 'player noSelect');
				$(player).attr('id', 'PlayerNum' + (i + 1));
				$(player).css('background', "url(Resources/" + Data.countrySources[Data.countryNames.indexOf(Game.playerCountries[i])]
				 + ") no-repeat "
				);
				$(player).css('background-size', '100%');
				document.getElementById("gameBoard").appendChild(player);
				Game.playerMoney.push(1500);
				//Game.playerMoney.push(100);
				Game.playerLocations.push(1);
				Game.playerProperties.push([]);
				Game.stillInGame.push(true);
				Game.inJail.push(false);
			}
			$("#moneyAmountsContain").css('visibility', 'visible')
			Game.propertyOwners.length = 40;
			Util.fillArray(Game.propertyOwners, 0);
			Game.mortgagedProperties.length = 40;
			Util.fillArray(Game.mortgagedProperties, false);
			Game.housesOnProperty.length = 40;
			Util.fillArray(Game.housesOnProperty, 0);
			//Game.playersLoaded = true;
			for(var i = 0;i < Game.numberOfPlayers;i++){
				var moneyP = document.createElement("p");
				$(moneyP).attr("id", "pNum" + (i + 1));
				document.getElementById("moneyAmountsContain").appendChild(moneyP);
				Game.changePlayerMoney(i, 0);
			}
			Game.startPlayerTurn();
		//}
	},
	startPlayerTurn: function(){
		$("#playerTurnHeader").css('visibility', 'visible');
		$("#playerTurnHeader").html("It's " + Game.playerCountries[Game.currentPlayerTurn] + "(P" + (Game.currentPlayerTurn + 1) +
		")'s turn!");
		window.setTimeout(
			function(){
				Game.showDataBox(0);
			}, 2000
		);
	},
	inMortgageState: false,
	openMortgaging: function(){
		$("#gameBoardMargin").html("Exit Mortgaging");
		$("#dataBox").css('visibility', 'hidden');
		Game.inMortgageState = true;
	},
	closeMortgaging: function(){
		$("#gameBoardMargin").html("");
		$("#dataBox").css('visibility', 'visible');
		Game.inMortgageState = false;
	},
	inHouseSelection: false,
	openHouseSelection: function(){
		$("#gameBoardMargin").html("Exit House Selection");
		$("#dataBox").css('visibility', 'hidden');
		Game.inHouseSelection = true;
	},
	buyHouse: function(propertyNum){
		var canBuyHouse = false;
		var houseCost;
		var pl = Game.currentPlayerTurn + 1;
		var owners = Game.propertyOwners;
		//colorSets: [[2, 4], [7, 9, 10], [12, 14, 15], [17, 19, 20], [22, 24, 25], [27, 28, 30], [32, 33, 35], [38, 40]]
		if(propertyNum === 2 || propertyNum === 4){
			if(owners[1] === pl && owners[3] === pl){
				canBuyHouse = true;
				houseCost = 50;
			}
		}
		else if(propertyNum === 7 || propertyNum === 9 || propertyNum === 10){
			if(owners[6] === pl && owners[8] === pl && owners[9] === pl){
				canBuyHouse = true;
				houseCost = 50;
			}
		}
		else if(propertyNum === 12 || propertyNum === 14 || propertyNum === 15){
			if(owners[11] === pl && owners[13] === pl && owners[14] === pl){
				canBuyHouse = true;
				houseCost = 100;
			}
		}
		else if(propertyNum === 17 || propertyNum === 19 || propertyNum === 20){
			if(owners[16] === pl && owners[18] === pl && owners[19] === pl){
				canBuyHouse = true;
				houseCost = 100;
			}
		}
		else if(propertyNum === 22 || propertyNum === 24 || propertyNum === 25){
			if(owners[21] === pl && owners[23] === pl && owners[24] === pl){
				canBuyHouse = true;
				houseCost = 150;
			}
		}
		else if(propertyNum === 27 || propertyNum === 28 || propertyNum === 30){
			if(owners[26] === pl && owners[27] === pl && owners[29] === pl){
				canBuyHouse = true;
				houseCost = 150;
			}
		}
		else if(propertyNum === 32 || propertyNum === 33 || propertyNum === 35){
			if(owners[31] === pl && owners[32] === pl && owners[34] === pl){
				canBuyHouse = true;
				houseCost = 200;
			}
		}
		else if(propertyNum === 38 || propertyNum === 40){
			if(owners[37] === pl && owners[39] === pl){
				canBuyHouse = true;
				houseCost = 200;
			}
		}
		if(canBuyHouse){
			var validInput = false;
			var input = prompt("Enter 1 to add a house(or hotel), 0 to exit, or -1 to remove a house.");
			input = Math.round(parseFloat(input));
			if(input >= -1 && input <= 1){
				validInput = true;
			}
			while(!validInput){
				input = prompt("Enter 1 to add a house(or hotel), 0 to exit, or -1 to remove a house.");
				input = Math.round(parseFloat(input));
				if(input >= -1 && input <= 1){
					validInput = true;
				}
			}
			var currHouses = Game.housesOnProperty[propertyNum - 1]; 
			switch(input){
				case 0:
					Game.closeHouseSelection();
					break;
				case 1:
					if(Game.playerMoney[Game.currentPlayerTurn] - houseCost >= 0){
						if(currHouses < 5){
							Game.changePlayerMoney(Game.currentPlayerTurn, -1 * houseCost);
							Game.housesOnProperty[propertyNum - 1]++;
							//$(house).attr('id', 'House' + (it + 1).toString() + '_Prop' + prop);
							//$(hotel).attr('id', 'Hotel' + '_Prop' + prop);
							if(Game.housesOnProperty[propertyNum - 1] === 5){
								for(var i = 1;i <= 4;i++){
									$("#House" + i + "_Prop" + propertyNum.toString()).css('visibility', 'hidden');
								}
								$("#Hotel" +  "_Prop" + propertyNum.toString()).css('visibility', 'visible');
								alert("You have purchased a hotel on this property.");
							}
							else{
								$("#House" + Game.housesOnProperty[propertyNum - 1].toString() + "_Prop" + propertyNum.toString()).css('visibility', 'visible');
								alert("You have purchased a house on this property.");
							}
						}
						else{
							alert("You already have a hotel on this property!");
						}
					}
					else{
						alert("You cannot afford to buy this house!");
					}
					break;
				case -1:
					if(currHouses > 0){
						Game.changePlayerMoney(Game.currentPlayerTurn, 1 * houseCost);
						Game.housesOnProperty[propertyNum - 1]--;
						//$(house).attr('id', 'House' + (it + 1).toString() + '_Prop' + prop);
						//$(hotel).attr('id', 'Hotel' + '_Prop' + prop);
						if(Game.housesOnProperty[propertyNum - 1] === 4){
							$("#Hotel" +  "_Prop" + propertyNum.toString()).css('visibility', 'hidden');
							for(var i = 1;i <= 4;i++){
								$("#House" + i + "_Prop" + propertyNum.toString()).css('visibility', 'visible');
							}
							alert("You have sold a hotel on this property.");
						}
						else{
							$("#House" + (Game.housesOnProperty[propertyNum - 1] + 1).toString() + "_Prop" + propertyNum.toString()).css('visibility', 'hidden');
							alert("You have sold a house on this property.");
						}
					}
					else{
						alert("You don't have any houses on this property!");
					}
					break;
			}
		}
	},
	chooseClickEvent: function(propertyNum){
		if(Game.inViewState){
			Game.openPropertyInfo(false, propertyNum);
		}
		else if(Game.inHouseSelection){
			Game.buyHouse(propertyNum);
		}
		else if(Game.inMortgageState){
			Game.mortgage(propertyNum);
		}
	},
	mortgage: function(propertyNum){
		propertyNum--;
		if(Game.propertyOwners[propertyNum] === Game.currentPlayerTurn + 1){
			if(!Game.mortgagedProperties[propertyNum]){
				var cost = Math.round(Data.propertyValues[propertyNum] / 2);
				var alertMsg = "Are you sure that you want to mortgage this property?  You will get ";
				alertMsg += "\n$" + cost;
				alertMsg += ", which is half of this property's value."
				if(confirm(alertMsg)){
					Game.changePlayerMoney(Game.currentPlayerTurn, cost);
					Game.mortgagedProperties[propertyNum] = true;
					propertyNum++;
					$("#Prop" + propertyNum).css({ opacity: 0.4 });
				}
			}
			else{
				var cost = Math.round(1.1 * (Data.propertyValues[propertyNum] / 2));
				var alertMsg = "Are you sure that you want to un-mortgage this property for a cost of ";
				alertMsg += "$" + cost + "?";
				if(confirm(alertMsg)){
					if(Game.playerMoney[Game.currentPlayerTurn] - cost <= 0){
						alert("You can't un-mortgage this property!  You'll go bankrupt!");
					}
					else{
						Game.changePlayerMoney(Game.currentPlayerTurn, -1 * cost);
						Game.mortgagedProperties[propertyNum] = false;
						propertyNum++;
						$("#Prop" + propertyNum).css({ opacity: 0.0 });
					}
				}
			}
		}
	},
	closeHouseSelection: function(){
		$("#gameBoardMargin").html("");
		$("#dataBox").css('visibility', 'visible');
		Game.inHouseSelection = false;
	},
	showDataBox: function(endTurn){
		if(endTurn === 0){
			$("#dataBox").css('visibility', 'visible');
			$("#playerTurnHeader").css('visibility', 'hidden');
			$(".action:nth-child(3)").css('background', 'url(Resources/DiceFace5.jpg) no-repeat');
			$(".action:nth-child(3)").css('background-size', '100%');
			$(".action:nth-child(3)").attr('onClick', 'Game.showDiceBox()');
			$("#throwDiceButton p").html('Roll Dice');
		}
		else if(endTurn === 1){
			$("#dataBox").css('visibility', 'visible');
			$(".action:nth-child(3)").css("background", "url(Resources/EndTurn.png) no-repeat");
			$(".action:nth-child(3)").css('background-size', '100%');
			$(".action:nth-child(3)").attr('onClick', 'Game.endPlayerTurn();');
		}
		else if(endTurn === 2){
			$("#dataBox").css('visibility', 'visible');
			$(".action:nth-child(3)").css("background", "url(Resources/EndTurn.png) no-repeat");
			$(".action:nth-child(3)").css('background-size', '100%');
			$(".action:nth-child(3)").attr('onClick', 
			'if(Game.playerMoney[Game.currentPlayerTurn] < 0){Game.destroyPlayer(Game.currentPlayerTurn)}else{Game.endPlayerTurn();}'
			);
		}
	},
	endPlayerTurn: function(){
		if(!Game.goAgain){
			if(Game.currentPlayerTurn + 1 === Game.numberOfPlayers){
				Game.currentPlayerTurn = 0;
			}
			else{
				Game.currentPlayerTurn++;
			}
		}
		while(!Game.stillInGame[Game.currentPlayerTurn]){
			if(Game.currentPlayerTurn + 1 === Game.numberOfPlayers){
				Game.currentPlayerTurn = 0;
			}
			else{
				Game.currentPlayerTurn++;
			}
		}
		$("#dataBox").css('visibility', 'hidden');
		Game.startPlayerTurn();
	},
	showDiceBox: function(){
		$("#dataBox").css('visibility', 'hidden');
		$("#diceThrowingScreen").css('visibility', 'visible');
	},
	movePlayer: function(playerNum, spaces, teleport){
		var loc = Game.playerLocations[playerNum];
		//$(clickBox).attr('id', 'Prop' + numericId);
		if(!teleport){
			if(spaces + loc <= 40){
				Game.playerLocations[playerNum] += spaces;
			}
			else{
				Game.playerLocations[playerNum] = (loc + spaces) - 40;
			}
			if(loc >= 1 && loc <= 11){
				if(spaces + loc > 11){
					if(spaces + loc > 21){
						var moveRight = Util.pxToNum($("#Prop" + (spaces + loc).toString()).css('left'));
						$("#PlayerNum" + (playerNum + 1).toString()).animate({left:0}, 1500);
						$("#PlayerNum" + (playerNum + 1).toString()).animate({top:0}, 1500);
						$("#PlayerNum" + (playerNum + 1).toString()).animate({left:moveRight}, 1500, 
							function(){Game.openPropertyInfo(true, Game.playerLocations[playerNum]);}
						);
					}
					else{
						var moveUp;
						if(spaces + loc === 21){
							moveUp = 0;
						}
						else{
							moveUp = Util.pxToNum($("#Prop" + (spaces + loc).toString()).css('top'));
							moveUp += Math.round(0.03 * Game.boardWidth);
						}
						$("#PlayerNum" + (playerNum + 1).toString()).animate({left:0}, 1500);
						$("#PlayerNum" + (playerNum + 1).toString()).animate({top:moveUp}, 1500, 
							function(){Game.openPropertyInfo(true, Game.playerLocations[playerNum]);}
						);
						//$("#PlayerNum" + (playerNum + 1).toString()).css('bottom', Math.round(.13054216867 * Game.boardWidth) + "px");
					}
				}
				else{
					var moveToLeft;
					if(spaces + loc === 11){
						moveToLeft = 0;
					}
					else{
						moveToLeft = Util.pxToNum($("#Prop" + (spaces + loc).toString()).css('left'));
                        //console.log("Going to property number " + (spaces + loc));
					}
					//console.log("Moving player " + spaces + " spaces...");
					$("#PlayerNum" + (playerNum + 1).toString()).animate({left:moveToLeft}, 1500, 
						function(){Game.openPropertyInfo(true, Game.playerLocations[playerNum]);}
					);
				}
			}
			else if(loc >= 12 && loc <= 21){
				if(spaces + loc > 21){
					if(spaces + loc > 31){
						var moveDown = Util.pxToNum($("#Prop" + (spaces + loc).toString()).css('top'));
						moveDown += Math.round(0.03 * Game.boardWidth);
						$("#PlayerNum" + (playerNum + 1).toString()).animate({top:0}, 1500);
						$("#PlayerNum" + (playerNum + 1).toString()).animate({left:Math.round(Game.boardWidth * 0.93)}, 1500);
						$("#PlayerNum" + (playerNum + 1).toString()).animate({top:moveDown}, 1500, 
							function(){Game.openPropertyInfo(true, Game.playerLocations[playerNum]);}
						);
					}
					else{
						var moveRight;
						if(spaces + loc === 31){
							moveRight = Math.round(Game.boardWidth * 0.93);
						}
						else{
							moveRight = Util.pxToNum($("#Prop" + (spaces + loc).toString()).css('left'));
						}
						$("#PlayerNum" + (playerNum + 1).toString()).animate({top:0}, 1500);
						$("#PlayerNum" + (playerNum + 1).toString()).animate({left:moveRight}, 1500, 
							function(){Game.openPropertyInfo(true, Game.playerLocations[playerNum]);}
						);
					}
				}
				else{
					var moveUp;
					if(spaces + loc === 21){
						moveUp = 0;
					}
					else{
						moveUp = Util.pxToNum($("#Prop" + (spaces + loc).toString()).css('top'));
						moveUp += Math.round(0.03 * Game.boardWidth);
					}
					$("#PlayerNum" + (playerNum + 1).toString()).animate({top:moveUp}, 1500,
						function(){Game.openPropertyInfo(true, Game.playerLocations[playerNum]);}
					);
				}
			}
			else if(loc >= 22 && loc <= 31){
				if(spaces + loc > 31){
					if(spaces + loc > 41){
						var moveLeft;
						moveLeft = Util.pxToNum($("#Prop" + ((spaces + loc) - 40).toString()).css('left'));
						$("#PlayerNum" + (playerNum + 1).toString()).animate({left:Math.round(Game.boardWidth * 0.93)}, 1500);
						$("#PlayerNum" + (playerNum + 1).toString()).animate({top:Math.round(Game.boardWidth * 0.9)}, 1500);
						$("#PlayerNum" + (playerNum + 1).toString()).animate({left:moveLeft}, 1500, 
							function(){Game.openPropertyInfo(true, Game.playerLocations[playerNum]);}
						);
						Game.changePlayerMoney(Game.currentPlayerTurn, 200);
					}
					else{
						var moveDown;
						if(spaces + loc === 41){
							moveDown = Math.round(Game.boardWidth * 0.94);
							Game.changePlayerMoney(Game.currentPlayerTurn, 200);
						}
						else{
							moveDown = Util.pxToNum($("#Prop" + (spaces + loc).toString()).css('top'));
							moveDown += Math.round(0.03 * Game.boardWidth);
						}
						$("#PlayerNum" + (playerNum + 1).toString()).animate({left:Math.round(Game.boardWidth * 0.93)}, 1500);
						$("#PlayerNum" + (playerNum + 1).toString()).animate({top:moveDown}, 1500, 
							function(){Game.openPropertyInfo(true, Game.playerLocations[playerNum]);}
						);
					}
				}
				else{
					var moveRight;
					if(spaces + loc === 31){
						moveRight = Math.round(Game.boardWidth * 0.93);
					}
					else{
						moveRight = Util.pxToNum($("#Prop" + (spaces + loc).toString()).css('left'));
					}
					$("#PlayerNum" + (playerNum + 1).toString()).animate({left:moveRight}, 1500, 
							function(){Game.openPropertyInfo(true, Game.playerLocations[playerNum]);}
					);
				}
			}
			else if(loc >= 32 && loc <= 40){
				if(spaces + loc > 41){
					if(spaces + loc > 51){
						var moveUp;
						moveUp = Util.pxToNum($("#Prop" + ((spaces + loc) - 40).toString()).css('down'));
						$("#PlayerNum" + (playerNum + 1).toString()).animate({top:Math.round(Game.boardWidth * 0.9)}, 1500);
						$("#PlayerNum" + (playerNum + 1).toString()).animate({left:0}, 1500);
						$("#PlayerNum" + (playerNum + 1).toString()).animate({top:moveUp}, 1500,
							function(){Game.openPropertyInfo(true, Game.playerLocations[playerNum]);}
						);
						Game.changePlayerMoney(Game.currentPlayerTurn, 200);
					}
					else{
						var moveLeft;
						if(spaces + loc === 51){
							moveLeft = 0;
						}
						else{
							moveLeft = Util.pxToNum($("#Prop" + ((spaces + loc) - 40).toString()).css('left'));
						}
						$("#PlayerNum" + (playerNum + 1).toString()).animate({top:Math.round(Game.boardWidth * 0.94)}, 1500);
						$("#PlayerNum" + (playerNum + 1).toString()).animate({left:moveLeft}, 1500, 
							function(){Game.openPropertyInfo(true, Game.playerLocations[playerNum]);}
						);
						Game.changePlayerMoney(Game.currentPlayerTurn, 200);
					}
				}
				else{
					var moveDown;
					if(spaces + loc === 41){
						moveDown = Math.round(Game.boardWidth * 0.9);
						Game.changePlayerMoney(Game.currentPlayerTurn, 200);
					}
					else{
						moveDown = Util.pxToNum($("#Prop" + (spaces + loc).toString()).css('top'));
						moveDown += Math.round(0.03 * Game.boardWidth);
					}
					$("#PlayerNum" + (playerNum + 1).toString()).animate({top:moveDown}, 1500, 
						function(){Game.openPropertyInfo(true, Game.playerLocations[playerNum]);}
					);
				}
			}
		}
		else if(teleport){
			//spaces will be the number of the property that the player is moving to.
			Game.playerLocations[playerNum] = spaces;
			var moveUpOrDown = Util.pxToNum($("#Prop" + (spaces).toString()).css('top'));
			var moveLeftorRight = Util.pxToNum($("#Prop" + (spaces).toString()).css('left'));
			$("#PlayerNum" + (playerNum + 1).toString()).animate({top:moveUpOrDown,left:moveLeftorRight}, 1500, 
				function(){Game.openPropertyInfo(true, Game.playerLocations[playerNum]);}
			);
		}
		
	}
};

var Setup = {
	loaded: false,
	startGame: function(){
		if(startGame){
			$("p,div,h1").fadeOut('slow', function(){
                $("p,div,h1").css("visibility", "hidden");
				if(!Game.gameExists){
				    Game.returnToTitleScreen();
			    }
                else{
                    Setup.loadSetup();
                }
            });
		}
		else{
			alert("In Development LOL");
		}
	},
    loadSetup: function(){
        $("#loadingBox").css("visibility", "visible");
		$("#loadingBoxText").css("visibility", "visible");
        $("#loadingBox,#loadingBoxText").fadeIn('slow', function(){
            Setup.setupResources();
        });
    },
    setupResources: function(){
		if(!this.loaded){
			var files = ["monopoly_board.png"];
			for(var i = 0;i < files.length;i++){
				var tempStr = "Loading Resources: " + Math.round(((i + 1) / files.length) * 100) + "%"
				$("#loadingBoxText").html(tempStr); 
				//console.log(tempStr);
			}
			//console.log(files.length);
			$("#loadingBoxText").html("Resources Loaded<br>Loading game...");
			window.setTimeout(
				function(){
					Setup.loadGamePage();
				}, 2000
			);
		}
		this.loaded = true;
    },
	loadGamePage: function(){
		location.replace("Monopoly.html");
	},
	loadGameComponents: function(){
		var officialWidth = $('#gameBoard ').css('height');
		Game.boardWidth = $(window).height();
		Game.boardMargin = ($(window).width() - $(window).height()) / 2;
		$('#gameBoard').css('width', officialWidth);
		$('#gameBoard').css('left', Game.boardMargin + "px");
		$('#tileInfoBox, #playerSelectionScreen').css('width', Game.boardWidth * 0.7 + "px");
		$('#tileInfoBox, #playerSelectionScreen').css('left', (Game.boardMargin + (.15 * Game.boardWidth)) + "px");
		$('#diceThrowingScreen').css('width', Game.boardWidth * 0.7 + "px");
		$('#diceThrowingScreen').css('left', (Game.boardMargin + (.15 * Game.boardWidth)) + "px");
		$('#dataBox').css('width', Game.boardWidth * 0.7 + "px");
		$('#dataBox').css('left', (Game.boardMargin + (.15 * Game.boardWidth)) + "px");
		$('#houseSelection').css('left', Game.boardWidth * 0.7 + "px");
		$('#houseSelection').css('width', (Game.boardMargin + (.15 * Game.boardWidth)) + "px");
		
		/** Conversions::
		
		Square ==> 13.554216867% x 13.554216867% 
		Rectangle ==> 8.13253012% x 13.554216867%
		**/
		//loading click events for all properties
		
		for(var i = 0;i < 9;i++){
			var clickBox = document.createElement("div");
			$(clickBox).attr('class', 'Property');
			$(clickBox).css('left', Game.boardWidth * (.14054216867 + (i * .0803253012)) + "px");
			$(clickBox).css('width', .0783253012 * Game.boardWidth + "px");
			$(clickBox).css('height', .13054216867 * Game.boardWidth + "px");
			$(clickBox).css('top', Game.boardWidth * (1 - .13454216867) + "px");
			var numericId = (8 - i) + 2;
			$(clickBox).attr('id', 'Prop' + numericId.toString());
			clickBox.setAttribute('onClick', 'Game.chooseClickEvent(' + numericId + ')');     
			document.getElementById("gameBoard").appendChild(clickBox);
			var ownerP = document.createElement("p");
			$(ownerP).css('position', 'absolute');
			$(ownerP).css('font-size', '18px');
			$(ownerP).css('font-family', 'Arial');
			$(ownerP).css('top', (Util.pxToNum($(clickBox).css('top')) + ($(clickBox).height() / 2)) + "px");
			$(ownerP).css('left', (Util.pxToNum($(clickBox).css('left')) + ($(clickBox).width() / 2)) + "px");
			//$(ownerP).html("0");
			$(ownerP).attr("id", "Owner" + numericId);
			document.getElementById("gameBoard").appendChild(ownerP);
		}
		
		for(var i = 0;i < 9;i++){
			var clickBox = document.createElement("div");
			$(clickBox).attr('class', 'Property');
			$(clickBox).css('left', "0px");
			$(clickBox).css('width', .13454216867 * Game.boardWidth + "px");
			$(clickBox).css('height', .0783253012 * Game.boardWidth + "px");
			$(clickBox).css('top', .13454216867 * Game.boardWidth + (Game.boardWidth * .0783253012 * i) + "px");
			var numericId = (18 - i) + 2;
			$(clickBox).attr('id', 'Prop' + numericId.toString());
			clickBox.setAttribute('onClick', 'Game.chooseClickEvent(' + numericId + ')');     
			document.getElementById("gameBoard").appendChild(clickBox);
			var ownerP = document.createElement("p");
			$(ownerP).css('position', 'absolute');
			$(ownerP).css('font-size', '18px');
			$(ownerP).css('font-family', 'Arial');
			$(ownerP).css('top', (Util.pxToNum($(clickBox).css('top')) + ($(clickBox).height() / 2)) + "px");
			$(ownerP).css('left', (Util.pxToNum($(clickBox).css('left')) + ($(clickBox).width() / 2)) + "px");
			//$(ownerP).html("0");
			$(ownerP).attr("id", "Owner" + numericId);
			document.getElementById("gameBoard").appendChild(ownerP);
		}
		
		for(var i = 0;i < 9;i++){
			var clickBox = document.createElement("div");
			$(clickBox).attr('class', 'Property');
			$(clickBox).css('left', Game.boardWidth * (.14054216867 + (i * .0803253012)) + "px");
			$(clickBox).css('width', .0783253012 * Game.boardWidth + "px");
			$(clickBox).css('height', .13054216867 * Game.boardWidth + "px");
			$(clickBox).css('top', "0px");
			var numericId = (20 + i) + 2;
			$(clickBox).attr('id', 'Prop' + numericId.toString());
			clickBox.setAttribute('onClick', 'Game.chooseClickEvent(' + numericId + ')');     
			document.getElementById("gameBoard").appendChild(clickBox);
			var ownerP = document.createElement("p");
			$(ownerP).css('position', 'absolute');
			$(ownerP).css('font-size', '18px');
			$(ownerP).css('font-family', 'Arial');
			$(ownerP).css('top', (Util.pxToNum($(clickBox).css('top')) + ($(clickBox).height() / 2)) + "px");
			$(ownerP).css('left', (Util.pxToNum($(clickBox).css('left')) + ($(clickBox).width() / 2)) + "px");
			//$(ownerP).html("0");
			$(ownerP).attr("id", "Owner" + numericId);
			document.getElementById("gameBoard").appendChild(ownerP);
		}
		
		for(var i = 0;i < 9;i++){
			var clickBox = document.createElement("div");
			$(clickBox).attr('class', 'Property');
			$(clickBox).css('left', ((1 - .13454216867) * Game.boardWidth) + "px");
			$(clickBox).css('width', .13454216867 * Game.boardWidth + "px");
			$(clickBox).css('height', .0783253012 * Game.boardWidth + "px");
			$(clickBox).css('top', .13454216867 * Game.boardWidth + (Game.boardWidth * .0783253012 * i) + "px");
			var numericId = (30 + i) + 2;
			$(clickBox).attr('id', 'Prop' + numericId.toString());
			clickBox.setAttribute('onClick', 'Game.chooseClickEvent(' + numericId + ')');     
			document.getElementById("gameBoard").appendChild(clickBox);
			var ownerP = document.createElement("p");
			$(ownerP).css('position', 'absolute');
			$(ownerP).css('font-size', '18px');
			$(ownerP).css('font-family', 'Arial');
			$(ownerP).css('top', (Util.pxToNum($(clickBox).css('top')) + ($(clickBox).height() / 2)) + "px");
			$(ownerP).css('left', (Util.pxToNum($(clickBox).css('left')) + ($(clickBox).width() / 2)) + "px");
			//$(ownerP).html("0");
			$(ownerP).attr("id", "Owner" + numericId);
			document.getElementById("gameBoard").appendChild(ownerP);
		}
        
        for(var i = 1;i <= 10;i++){
            $("#playerSelectionScreen").append("<p class='selectP' style='top:" +
				(25 + i * 5) + "%;visibility:hidden;font-family:Arial;font-size:18px;" + "'>Player " + i + "</p>"
			);
            var selectOption = document.createElement("select");
            $(selectOption).attr('class', 'selectOption');
            $(selectOption).css('top', (25 + i * 5) + "%");
			$(selectOption).css('visibility', 'hidden');
            document.getElementById("playerSelectionScreen").appendChild(selectOption);
            for(var it = 0;it < Data.countryNames.length;it++){
                var option = document.createElement("option");
                $(option).attr('value', it);
                $(option).html(Data.countryNames[it]);
                selectOption.appendChild(option);
            }
        }
		for(var i = 0;i < Data.propertiesWithHouses.length;i++){
			var prop = Data.propertiesWithHouses[i];
			if(prop > 1 && prop < 11){
				for(var it = 0;it < 4;it++){
					var house = document.createElement("div");
					$(house).attr('class', 'House');
					$(house).attr('id', 'House' + (it + 1).toString() + '_Prop' + prop);
					$(house).css('left', Util.pxToNum($("#Prop" + prop).css('left')) + (it * 0.025 * Game.boardWidth) + "px");
					$(house).css('top', Util.pxToNum($("#Prop" + prop).css('top')) + (0.003 * Game.boardWidth) + "px");
					document.getElementById("gameBoard").appendChild(house);
				}
				var hotel = document.createElement("div");
				$(hotel).attr('class', 'Hotel');
				$(hotel).attr('id', 'Hotel' + '_Prop' + prop);
				$(hotel).css('left', Util.pxToNum($("#Prop" + prop).css('left')) + (0.04 * Game.boardWidth) + "px");
				$(hotel).css('top', Util.pxToNum($("#Prop" + prop).css('top')) + (0.003 * Game.boardWidth) + "px");
				document.getElementById("gameBoard").appendChild(hotel);
			}
			else if(prop > 21 && prop < 31){
				for(var it = 0;it < 4;it++){
					var house = document.createElement("div");
					$(house).attr('class', 'House');
					$(house).attr('id', 'House' + (it + 1).toString() + '_Prop' + prop);
					$(house).css('left', Util.pxToNum($("#Prop" + prop).css('left')) + (it * 0.025 * Game.boardWidth) + "px");
					$(house).css('top', (0.113 * Game.boardWidth) + "px");
					document.getElementById("gameBoard").appendChild(house);
				}
				var hotel = document.createElement("div");
				$(hotel).attr('class', 'Hotel');
				$(hotel).attr('id', 'Hotel' + '_Prop' + prop);
				$(hotel).css('left', Util.pxToNum($("#Prop" + prop).css('left')) + (0.04 * Game.boardWidth) + "px");
				$(hotel).css('top', (0.113 * Game.boardWidth) + "px");
				document.getElementById("gameBoard").appendChild(hotel);
			}
			else if(prop > 11 && prop < 21){
				for(var it = 0;it < 4;it++){
					var house = document.createElement("div");
					$(house).attr('class', 'House');
					$(house).attr('id', 'House' + (it + 1).toString() + '_Prop' + prop);
					$(house).css('left', (0.113 * Game.boardWidth) + "px");
					$(house).css('top', Util.pxToNum($("#Prop" + prop).css('top')) + ((it + 0.7) * 0.02 * Game.boardWidth) + "px");
					document.getElementById("gameBoard").appendChild(house);
				}
				var hotel = document.createElement("div");
				$(hotel).attr('class', 'Hotel');
				$(hotel).attr('id', 'Hotel' + '_Prop' + prop);
				$(hotel).css('left', (0.113 * Game.boardWidth) + "px");
				$(hotel).css('top', Util.pxToNum($("#Prop" + prop).css('top')) + (0.04 * Game.boardWidth) + "px");
				document.getElementById("gameBoard").appendChild(hotel);
			}
			else if(prop > 31 && prop <= 40){
				for(var it = 0;it < 4;it++){
					var house = document.createElement("div");
					$(house).attr('class', 'House');
					$(house).attr('id', 'House' + (it + 1).toString() + '_Prop' + prop);
					$(house).css('left', (0.867 * Game.boardWidth) + "px");
					$(house).css('top', Util.pxToNum($("#Prop" + prop).css('top')) + ((it + 0.7) * 0.02 * Game.boardWidth) + "px");
					document.getElementById("gameBoard").appendChild(house);
				}
				var hotel = document.createElement("div");
				$(hotel).attr('class', 'Hotel');
				$(hotel).attr('id', 'Hotel' + '_Prop' + prop);
				$(hotel).css('left', (0.867 * Game.boardWidth) + "px");
				$(hotel).css('top', Util.pxToNum($("#Prop" + prop).css('top')) + (0.04 * Game.boardWidth) + "px");
				document.getElementById("gameBoard").appendChild(hotel);
			}
		}
	}
};

var Util = {
	randInt: function(start, end){
		return Math.round(Math.random() * (end - start)) + start;
	},
	checkInt: function(integer){
		if(Math.floor(integer) === integer && Math.ceil(integer) && Math.round(integer) === integer){
			return true;
		}
		else{
			return false;
		}
	},
	pxToNum: function(pixelString){
		return parseInt(pixelString.substring(0, pixelString.length - 1));
	},
	hasDuplicates: function(array) {
		var valuesSoFar = [];
		for (var i = 0; i < array.length; ++i) {
			var value = array[i];
			if (valuesSoFar.indexOf(value) !== -1) {
				return true;
			}
			valuesSoFar.push(value);
		}
		return false;
	},
	fillArray: function(array, value){
		for(var i = 0;i < array.length;i++){
			array[i] = value;
		}
	},
	checkForOneTrue: function(array){
		var amountOfTrues = 0;
		for(var i = 0;i < array.length;i++){
			if(array[i]){
				amountOfTrues++;
			}
		}
		if(amountOfTrues === 1){
			return true;
		}
		else{
			return false;
		}
	}
};