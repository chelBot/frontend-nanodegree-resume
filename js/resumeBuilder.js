/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name" : "Chelsea Stauber",
	"role" : "Developer",
	"contact" : {
		"number" : "719-232-5544",
		"email" : "stauberc@colorado.edu",
		"location" : "Boulder, Colorado",
	},

	"pic" : "",
	"message" : "Developer with a sharp attention to detail and a background in geophysical research. "  +
				"Motivated to develop elegant solutions to  complex problems. Committed to " + 
				"thorough research and intellectual growth. Deeply curious and adept at learning " +  
				"new concepts. Experience patiently teaching technical concepts to clients. Strong " +  
				"written and verbal communication of physical, technical, and mathematical ideas.<br/><br/>"
				+ "For a more detailed description of my educational and profesional experience, please download my " + 'cv.pdf'.link('#'),
	"skills" : ["Frontend Development", "Research", "Algorithms", "OOP", "Website Optimization", "Responsive Design"]

};

var education = {
	"school" : {
		"name" : "University of Colorado, Boulder",
		"location" : "Boulder, CO",
		"degree" : "BA of Mathematics",
		"minor" : "Emphasis on Physics",
		"gradYear" : "2013",
		"url" : "http://www.colorado.edu/math/"
	},

	"onlineCourses" : [
	{
		"school" : "Udacity",
		"courses" : "Front-End Web Developer Nanodegree",
		"year" : "2015",
		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001#footer-push"

	},
	// {
	// 	"school" : "Udacity",
	// 	"courses" : "How to Use Git and GitHub",
	// 	"year" : "2015",
	// 	"url" : "https://www.udacity.com/courses/ud775"
	// },
	],
	"display" : function(){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.school.name);
		var formattedName = formattedName.replace("#", education.school.url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.school.degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.school.gradYear);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.school.location);
		var conCat = formattedName + formattedDegree + formattedDates + formattedLocation;

		$(".education-entry:last").append(conCat);

		$("#education").append(HTMLonlineClasses);
		for(var i in education.onlineCourses){
			$("#education").append(HTMLschoolStart);
				var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedCourse = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].courses);
				var formattedCourse = formattedCourse.replace("#", education.onlineCourses[i].url);
				var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].year);
				var formattedPad = "<br/>";
				var conCat = formattedCourse + formattedSchool +  formattedDates + formattedPad;
				$(".education-entry:last").append(conCat);

		}
	}
}
education.display();

var work = {
	"jobs" : [
		{
			"employer" : "XtremeGeo",
			"title" : "Geophysical Developer",
			"location" : "Boulder, CO",
			"dates" : "2014-2015",
			"description" : "Topics of research included Full Waveform Inversion, Wave Equation Modeling, Microseismic Event Location, " +
							"Reverse Time Migration, Finite Difference Methods, and Descent Methods. Java implementations included traditional finite " + 
							"difference scheme for 3D anisotropic " + 
							"pseudo­acoustic wavefield propagation, staggered grid finite " +
							"difference scheme for 2D isotropic acoustic wavefield " +
							"propagation, absorbing boundary conditions, conjugate " +
							"gradient method for rock parameter inversion, advanced " +
							"checkpointing for back propagating wavefield.",
			"url" : ""
		},
		{

			"employer" : "Modular Robotics",
			"title" : "Robatics Technician",
			"location" : "Boulder, CO",
			"dates": "2014",
			"description" : "Daily duties included electronic and mechanical assembly, soldering ciruit boards, bootloading embedded systems, " +
							"troubling shooting robotic components, testing printed circuit boards.",
			"url" : "http://www.modrobotics.com/"
		},
		{
			"employer" : "JB Saunders",
			"title" : "Electronics/Hardware Sales",
			"location" : "Boulder, CO",
			"dates" : "2013­-2014", 
			"description": "I placed orders and made purchasing decisions for all Sparkfun inventory, helped customers find the right parts for " +
						 	"for their projects, and I assembled electronic and robotic displays.",
			"url": "http://jbsaundersco.com/"
		}
	],
	"display" : function() {
		for(index in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			//$("#workExperience").append(HTMLworkLocation);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
			var formattedEmployer = formattedEmployer.replace("#", work.jobs[index].url);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);

			var conCat = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

			$(".work-entry:last").append(conCat);
		}
	}
}
//**********DO OBJECT PROPERTIES NEED TO BE IN QUOTES?************
var projects = {
	"projects" : [
		{
			"title" : "Portfolio Site",
			"date" : "2016",
			"description" : "A fully responsive site to showcase some of my work", 
			"url" : "http://codepen.io/collection/DVvMbJ/2/" 
		},
		{
			"title" : "Natural Simulation Collection",
			"date" : "2016", 
			"description" : "Pens which use mathematics, processingJS, and JavaScript to create fun visualizations.",
			"url" : "http://codepen.io/collection/DVvMbJ/2/" 
		},
		{
			"title" : "STEM Enthusiats",
			"date" : "2015-2016",
			"description" : "Organize a weekly study group dedicated to solving " + 'Project Euler'.link('https://projecteuler.net/') + " problems using efficient algorithms.",
			"url" : "http://www.meetup.com/STEM-Enthusiasts/" 
		},
		// {
		// 	"title" : "GitHub",
		// 	"date" : "2015",
		// 	"description" : ""
		// }
	],
	"display" : function(){
		for(var i in projects.projects){
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			var formattedTitle = formattedTitle.replace("#", projects.projects[i].url);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].date);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			var conCat = formattedTitle + formattedDates + formattedDescription;
			$(".project-entry:last").append(conCat);
			// $(".project-entry:last").append(formattedDates);
			// $(".project-entry:last").append(formattedDescription);
		}
	}

}


work.display();


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

// $('#main').append(internationalizeButton);

var inName = function() {
	console.log(bio.name);
	var nameArray = bio.name.trim().split(" ");
	var firstName = nameArray[0];
	var lastName = nameArray[1];

	newName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + " " + lastName.toUpperCase();
	
	return newName;
}

projects.display();

var formattedName = HTMLheaderName.replace("%data%", bio.name);
// var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// //svar formattedNumber = HTMLmobil.replace("%data", bio.number);
var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.message);

//$("#header").append(HTMLskillsStart);
// var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
// $("#skills").append(formattedSkills);


// $("#header").append(formattedRole);
// $("#about").prepend(formattedName);
//$("#header").append(formattedPic);

$("#about").append(formattedMessage);

if(bio.skills.length !== 0) {
	var conCat = "";
	$("#about").append(HTMLskillsStart);
	for(var i in bio.skills){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		conCat += formattedSkill;
	}
	
	$("#skills:last").append(conCat);
}

$("#mapDiv").append(googleMap);
// //$("#main").append(formattedNumber);


// var work = {};
// var education = {};

// work.position = "Geophysical Developer";
// work.employer = "XtremeGeo";
// work.years = "1 year, 3 months";
// work.city = "Boulder";

// education["name"] = "University of Colorado, Boulder";
// education["years"] = "2009 - 2013";
// education["city"] = "Boulder";

// $("#main").append(work["position"]);
// $("#main").append(education.name);