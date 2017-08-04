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

// 添加一个函数到代码中用来显示之前的内容
function displayWork() {
	// 显示名字
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").append(formattedName);

	// 显示技能
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

	// 显示详情
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedDatesLocationDesc = formattedDates + formattedLocation + formattedDescription;
		$(".work-entry:last").append(formattedDatesLocationDesc);

	}

}
// 调用函数
displayWork();

// 添加国际化名称显示按钮
// 获取鼠标点击时在页面上的坐标
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x, y);
});