var bio = {
	name: "Kangrui",
	role: "Web Developer",
	welcomeMessage: "Welcome",
	bioic: "images/fry.jpg",
	contacts: {
		mobile: "138-0000-0000",
		email: "gaokangrui@gmail.com",
		github: "Geekerui",
		twitter: "@gaokangrui",
		location: "Hefei"
	},
	skills: ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"]
};
var education = {
	schools: [{
		name: "No.50 Middle School",
		location: "Hefei",
		degree: "Junior High School",
		date: "2010-06-30",
		major: ["CS"],
		url: "null"
	}, {
		name: "Senior High School attached HFUT",
		location: "Hefei",
		degree: "Senior High School",
		date: "2013-06-30",
		major: ["CS"],
		url: "null"
	}, {
		name: "AHCME",
		location: "Wuhu",
		degree: "Colledge",
		date: "2010-06-30",
		major: ["CS"],
		url: "null"
	}]
};
var work = {
	jobs: [{
		employer: "null",
		title: "null",
		location: "Hefei",
		dates: "null",
		description: "null"
	}, {
		employer: "null_2",
		title: "null",
		location: "Hefei",
		dates: "null",
		description: "null"
	}, {
		employer: "null_3",
		title: "null",
		location: "Hefei",
		dates: "null",
		description: "null"
	}]
};
var projects = {
	projects: [{
		title: "null",
		dates: "null",
		description: "null",
		images: ["http://placehold.it/150x150"]
	}]
};
$("#header").prepend(HTMLheaderName);
var formattedName = HTMLheaderName.replace("%data%", bio.name);;
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);

}
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);


}