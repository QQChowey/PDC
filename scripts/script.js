window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("jQuery loaded");
    } else {
        // jQuery is not loaded
        alert("no jQuery");
    }
}

var teamALeader = null;
var teamASub1 = null;
var teamASub2 = null;
var teamASub3 = null;
var teamASub4 = null;
var teamAFriend = null;

var teamBLeader = null;
var teamBSub1 = null;
var teamBSub2 = null;
var teamBSub3 = null;
var teamBSub4 = null;
var teamBFriend = null;

var teamCLeader = null;
var teamCSub1 = null;
var teamCSub2 = null;
var teamCSub3 = null;
var teamCSub4 = null;
var teamCFriend = null;

/*
 * Fill Monster Overlay with entries
 */

var requestURL = 'https://raw.githubusercontent.com/QQChowey/PDC/master/monster.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
	var monster = request.response;
	var list = document.getElementById("MOlist");

	var newdisplay, newleft, newpic, newtype1, newtype2, newtype3;
	var newright, newrow1, newname, newrow2, newstat1, newhp, newstat2, newatk, newstat3, newrcv, newstat4, newrarity, newrow3;
	for (var i = 0; i < monster.length; i++) {
		newdisplay = document.createElement("div");
		newdisplay.className = "display";
		newdisplay.addEventListener("click", function(e) {
    		alert('something');
		}, false);

		newleft = document.createElement("span");
		newleft.className = "leftContainer";

		newpic = document.createElement("img");
		newpic.className = "pic";
		newpic.alt = monster[i]['id'];
		newpic.src = "https://raw.githubusercontent.com/QQChowey/PDC/master/images/portrait/" + monster[i]['id'] + ".png";

		newtyperow = document.createElement("div");
		newtyperow.className = "typerow";

		newtype1 = document.createElement("img");
		newtype1.className = "type";
		newtype1.src = "https://raw.githubusercontent.com/QQChowey/PDC/master/images/type/" + monster[i]["type"] + ".png";
		newtype1.alt = monster[i]["type"]

		newtype2 = document.createElement("img");
		newtype2.className = "type";
		if (monster[i]["type2"] != null) {
			newtype2.src = "https://raw.githubusercontent.com/QQChowey/PDC/master/images/type/" + monster[i]["type2"] + ".png";
		}
		else { 
			newtype2.style.display = "none";
		}
		newtype2.alt = monster[i]["type2"];

		newtype3 = document.createElement("img");
		newtype3.className = "type";
		if (monster[i]["type3"] != null) {
			newtype3.src = "https://raw.githubusercontent.com/QQChowey/PDC/master/images/type/" + monster[i]["type3"] + ".png";
		}
		else { 
			newtype3.style.display = "none";
		}
		newtype3.alt = monster[i]["type3"];



		newright = document.createElement("span");
		newright.className = "rightContainer";

		newrow1 = document.createElement("div");
		newrow1.className = "row";

		newname = document.createElement("div");
		newname.className = "name";
		newname.innerHTML = "No." + monster[i]['id'] + "&nbsp;" + monster[i]['name'];

		newrow2 = document.createElement("div");
		newrow2.className = "row";

		newstat1 = document.createElement("span");
		newstat1.className = "statText";
		newstat1.innerHTML = "HP";

		newhp = document.createElement("span");
		newhp.className = "hp";
		newhp.innerHTML = monster[i]['hp_max']

		newstat2 = document.createElement("span");
		newstat2.className = "statText";
		newstat2.innerHTML = "ATK";

		newatk = document.createElement("span");
		newatk.className = "atk";
		newatk.innerHTML = monster[i]['atk_max']

		newstat3 = document.createElement("span");
		newstat3.className = "statText";
		newstat3.innerHTML = "RCV";

		newrcv = document.createElement("span");
		newrcv.className = "rcv";
		newrcv.innerHTML = monster[i]['rcv_max']

		newstat4 = document.createElement("span");
		newstat4.className = "statText";
		newstat4.innerHTML = "&#9733;";

		newrarity = document.createElement("span");
		newrarity.className = "rarity";
		newrarity.innerHTML = monster[i]['rarity'];

		newrow3 = document.createElement("div");
		newrow3.className = "row";

		newregawake = document.createElement("span");
		newregawake.className = "regAwakening"
		for (var j = 0; j < monster[i]['awoken_skills'].length; j++) {
			newawake = document.createElement("img");
			newawake.className = "awakening";
			newawake.src = "https://raw.githubusercontent.com/QQChowey/PDC/master/images/awake/" + monster[i]['awoken_skills'][j] + ".png";
			newawake.alt = monster[i]['awoken_skills'][j];

			newregawake.append(newawake);
		}

		//newsuperawake = document.createElement("span");
		//newsuperawake.className = "superAwakening"

		list.append(newdisplay);

		newdisplay.append(newleft);
		newleft.append(newpic);
		newleft.append(newtyperow);
		newtyperow.append(newtype1);
		newtyperow.append(newtype2);
		newtyperow.append(newtype3);


		newdisplay.append(newright);
		newright.append(newrow1);
		newrow1.append(newname);

		newright.append(newrow2);
		newrow2.append(newstat1);
		newrow2.append(newhp);
		newrow2.append(newstat2);
		newrow2.append(newatk);
		newrow2.append(newstat3);
		newrow2.append(newrcv);
		newrow2.append(newstat4);
		newrow2.append(newrarity);

		newright.append(newrow3);
		newrow3.append(newregawake);
	}
}

/*
 * Add handleClicks for A - B - C later
 * maybe prompt delete of C?
 */

var currentValue = "1";

function handleSwitchClick(switch_team) {
	if (currentValue != switch_team.value) {
		currentValue = switch_team.value;
		if (currentValue == "1") {
			document.getElementById("playerSwitch").innerHTML = "";
			var parent = document.getElementById("playerSwitch");
			var newform = document.createElement("form");
			var newdiv = document.createElement("div");
			newdiv.className = "switch_2opt";

			var newinputA = document.createElement("input");
			newinputA.setAttribute("type", "radio");
			newinputA.setAttribute("id", "playerA");
			newinputA.setAttribute("name", "switch_player");
			newinputA.setAttribute("value", "1");
			newinputA.setAttribute("checked", "checked");
			newinputA.setAttribute("autocomplete", "off");

			var newlabelA = document.createElement("label");
			newlabelA.setAttribute("for", "playerA");
			newlabelA.innerHTML = "A";

			var newinputB = document.createElement("input");
			newinputB.setAttribute("type", "radio");
			newinputB.setAttribute("id", "playerB");
			newinputB.setAttribute("name", "switch_player");
			newinputB.setAttribute("value", "2");
			newinputB.setAttribute("autocomplete", "off");

			var newlabelB = document.createElement("label");
			newlabelB.setAttribute("for", "playerB");
			newlabelB.innerHTML = "B";

			newdiv.append(newinputA);
			newdiv.append(newlabelA);
			newdiv.append(newinputB);
			newdiv.append(newlabelB);

			newform.append(newdiv);
			parent.append(newform);
		}

		else if(currentValue == "2") {
			document.getElementById("playerSwitch").innerHTML = "";
			var parent = document.getElementById("playerSwitch");
			var newform = document.createElement("form");
			var newdiv = document.createElement("div");
			newdiv.className = "switch_3opt";


			var newinputA = document.createElement("input");
			newinputA.setAttribute("type", "radio");
			newinputA.setAttribute("id", "playerA");
			newinputA.setAttribute("name", "switch_player");
			newinputA.setAttribute("value", "1");
			newinputA.setAttribute("checked", "checked");
			newinputA.setAttribute("autocomplete", "off");

			var newlabelA = document.createElement("label");
			newlabelA.setAttribute("for", "playerA");
			newlabelA.innerHTML = "A";

	
			var newinputB = document.createElement("input");
			newinputB.setAttribute("type", "radio");
			newinputB.setAttribute("id", "playerB");
			newinputB.setAttribute("name", "switch_player");
			newinputB.setAttribute("value", "2");
			newinputB.setAttribute("autocomplete", "off");

			var newlabelB = document.createElement("label");
			newlabelB.setAttribute("for", "playerB");
			newlabelB.innerHTML = "B";


			var newinputC = document.createElement("input");
			newinputC.setAttribute("type", "radio");
			newinputC.setAttribute("id", "playerC");
			newinputC.setAttribute("name", "switch_player");
			newinputC.setAttribute("value", "3");
			newinputC.setAttribute("autocomplete", "off");

			var newlabelC = document.createElement("label");
			newlabelC.setAttribute("for", "playerC");
			newlabelC.innerHTML = "C";


			newdiv.append(newinputA);
			newdiv.append(newlabelA);
			newdiv.append(newinputB);
			newdiv.append(newlabelB);
			newdiv.append(newinputC);
			newdiv.append(newlabelC);

			newform.append(newdiv);
			parent.append(newform);
		}
	}
}

/*
 Left click to
 select monster.
 - - - - - - -
 Right click for
 more info.
 */

function LR_openOverlay(e, element) {
	e = e || window.event;
	switch(e.which) {
		case 1: 
			openMonsterOverlay(); 
			break;
		case 3: openOptionOverlay(); break;
	}
}

function openOptionOverlay() {
	document.getElementById("optionOverlay").style.width = "550px";
	document.getElementById("optionOverlay").style.opacity = "1";
	document.getElementById("exitOptionOverlay").style.width = "100%";
}

function closeOptionOverlay() {
	document.getElementById("optionOverlay").style.opacity = "0";
	setTimeout(function() { document.getElementById("optionOverlay").style.width = "0"; }, 250);
	document.getElementById("exitOptionOverlay").style.width = "0%";
}

function openMonsterOverlay() {
	document.getElementById("searchMonsterOverlay").style.width = "550px";
	document.getElementById("exitMonsterOverlay").style.width = "100%";
}

function closeMonsterOverlay() {
	document.getElementById("searchMonsterOverlay").style.width = "0";
	document.getElementById("exitMonsterOverlay").style.width = "0";
}

function searchFilter() {
	// Declare variables
	var input, filter, container, item, itemInner, name, i;
	input = document.getElementById("MOsearchInput");
	filter = input.value.toUpperCase();
	container = document.getElementById("MOlist");
	item = container.getElementsByClassName("display");
	itemInner = container.getElementsByClassName("name");
	
	for (i = 0; i < itemInner.length; i++) {
		name = itemInner[i];
		if (name.innerHTML.toUpperCase().indexOf(filter) > -1) {
			item[i].style.display = "";
		}

		else {
			item[i].style.display = "none";
		}
	}
}

function openMOfilter() {
	document.getElementById("MOfilter").style.height = "100px";
	document.getElementById("MOlist").style.height = "calc(100% - 200px)";
	document.getElementById("filterBtn").innerHTML = "Close Filter";
	document.getElementById("filterBtn").setAttribute("onclick","closeMOfilter();");
}

function closeMOfilter() {
	document.getElementById("MOfilter").style.height = "0";
	document.getElementById("MOlist").style.height = "calc(100% - 100px)";
	document.getElementById("filterBtn").innerHTML = "Open Filter";
	document.getElementById("filterBtn").setAttribute("onclick","openMOfilter();");
}

function openInheritOverlay() {
  
}

function closeInheritOverlay() {

}

function openLatentOverlay() {

}

function closeLatentOverlay() {

}

function openBadgeOverlay() {

}

function closeBadgeOverlay() {

}

function openDungeonOverlay() {

}

function closeDungeonOverlay() {

}


















































