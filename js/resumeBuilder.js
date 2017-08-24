var bio = {
	name: "Kangrui",
	role: "Web Developer",
	contacts: {
		mobile: "138-0000-0000",
		email: "gaokangrui@gmail.com",
		github: "Geekerui",
		twitter: "@gaokangrui",
		blog: "github.com/geekerui",
		location: "Hefei"
	},
	welcomeMessage: "Resume",
	biopic: "images/avatar.png",
	skills: ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"]
};
var education = {
	schools: [{
		name: "No.50 Middle School",
		location: "Hefei",
		degree: "Junior High School",
		date: "2010-06-30",
		major: ["Student"],
		url: "http://50z.ssjy.cn/"
	}, {
		name: "Senior High School attached HFUT",
		location: "Hefei",
		degree: "Senior High School",
		date: "2013-06-30",
		major: ["Student"],
		url: "http://www.hfgdfz.net/"
	}, {
		name: "AHCME",
		location: "Wuhu",
		degree: "Colledge",
		date: "2010-06-30",
		major: ["CS"],
		url: "http//www.ahcme.edu.cn"
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
	project: [{
		title: "null",
		dates: "null",
		description: "null",
		images: ["http://placehold.it/150x150"]
	}]
};

// 添加一个函数到代码中用来显示之前的内容
bio.display = function() {
	// 身份
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	// 显示名字
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	// 联系方式
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedTwiter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwiter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
	$("#topContacts").append(formattedBlog);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	// 图片
	if (bio.biopic.length > 0) {
		var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedBiopic);
	}
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

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
}

// 显示教育信息
education.display = function() {
	education.schools.forEach(function(school) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.date);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.major);
		$(".education-entry:last").append(formattedSchoolMajor);
	});
}

// 显示技能
// bio.skills.display = function() {

// }
// 显示工作详情
work.display = function() {
	for (var job in work.jobs) {
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

// 在 projects 对象中封装 display()函数
projects.display = function() {
	for (var i = 0; i < projects.project.length; i++) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);
		// 添加各个属性到页面中
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		if (projects.project[i].images.length > 0) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.project[i].images);
			$(".project-entry:last").append(formattedImage);
		}
	}
}

// 添加国际化名称显示按钮
// itnButton.dispaly = function() {
// 	$("#main").append(internationalizeButton);

// 	// 显示国际化名称
// 	function inName(nameString) {
// 		var nameArray = nameString.split(" ");
// 		// 名全部小写
// 		nameArray[0] = nameArray[0].toLowerCase();
// 		// 姓全部大写
// 		nameArray[1] = nameArray[1].toUpperCase();
// 		// 分割姓的首字母转为大写，其他保持不变
// 		var giveName = nameArray[0].substr(0, 1).toUpperCase() + nameArray[0].substr(1);
// 		return giveName + " " + nameArray[1];
// 	}
// 	// 获取鼠标点击时在页面上的坐标
// 	$(document).click(function(loc) {
// 		var x = loc.pageX;
// 		var y = loc.pageY;
// 		logClicks(x, y);
// 	});
// }
bio.display();
education.display();
work.display();