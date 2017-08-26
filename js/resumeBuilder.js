var bio = {
	name: "Kangrui",
	role: "Web Developer",
	contacts: {
		mobile: "138-0000-0000",
		email: "gaokangrui@gmail.com",
		github: "Geekerui",
		twitter: "@gaokangrui",
		blog: "geekerui.blogspot.com",
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
	}],
	onlineCourses: [{
		title: "FEND",
		school: "Udacity",
		date: "2017-08",
		url: "cn.udacity.com"
	}]
};
var work = {
	jobs: [{
		employer: "TGBus",
		title: "Editor",
		location: "Wuhu",
		dates: "2015-09",
		description: "Add content to website. Write article about games news. Add content to website. Write article about games news. Add content to website. Write article about games news. Add content to website. Write article about games news. Add content to website. Write article about games news."
	}, {
		employer: "CRC",
		title: "Cashier",
		location: "Hefei",
		dates: "2016-07",
		description: "Sold products. Get money. Change money. Sold products. Get money. Change money. Sold products. Get money. Change money. Sold products. Get money. Change money. Sold products. Get money. Change money. Sold products. Get money. Change money. Sold products. Get money. Change money. Sold products. Get money. Change money. "
	}, {
		employer: "Dell",
		title: "Delear",
		location: "Hefei",
		dates: "2017-01",
		description: "Sold Computer. Sold Computer. Sold Computer. Sold Computer. Sold Computer. Sold Computer. Sold Computer. Sold Computer. Sold Computer. Sold Computer. Sold Computer. Sold Computer. Sold Computer. Sold Computer. Sold Computer. Sold Computer. Sold Computer. Sold Computer. Sold Computer. Sold Computer. Sold Computer. "
	}]
};
var projects = {
	project: [{
		title: "Aloha OE",
		dates: "2016-03",
		description: "An android APP. Make some classicla senteces from given model. ",
		images: ["http://placehold.it/400x300", "http://placehold.it/400x300"]
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
	// $("#footerContacts").append(formattedMobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#footerContacts").append(formattedEmail);
	$("#topContacts").append(formattedEmail);
	var formattedTwiter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#footerContacts").append(formattedTwiter);
	$("#topContacts").append(formattedTwiter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#footerContacts").append(formattedGithub);
	$("#topContacts").append(formattedGithub);
	var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
	$("#footerContacts").append(formattedBlog);
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
	// 线下课程
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
	// 在线课程
	education.onlineCourses.forEach(function(onlineCourse) {
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart)
		var formattedTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
		$(".education-entry:last").append(formattedTitle);
		var formattedSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
		$(".education-entry:last").append(formattedSchool);
		var formattedDates = HTMLonlineDates.replace("%data%", onlineCourse.date);
		$(".education-entry:last").append(formattedDates);
		var formattedURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
		$(".education-entry:last").append(formattedURL);
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

		for (var j = 0; j < projects.project[i].images.length; j++) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.project[i].images[j]);
			$(".project-entry:last").append(formattedImage);
		}
	}
}

// 添加国际化名称显示按钮

// $("#main").append(internationalizeButton);

// // 显示国际化名称
// function inName(nameString) {
// 	var nameArray = nameString.split(" ");
// 	// 名全部小写
// 	nameArray[0] = nameArray[0].toLowerCase();
// 	// 姓全部大写
// 	nameArray[1] = nameArray[1].toUpperCase();
// 	// 分割姓的首字母转为大写，其他保持不变
// 	var giveName = nameArray[0].substr(0, 1).toUpperCase() + nameArray[0].substr(1);
// 	return giveName + " " + nameArray[1];
// }
// // 获取鼠标点击时在页面上的坐标
// $(document).click(function(loc) {
// 	var x = loc.pageX;
// 	var y = loc.pageY;
// 	logClicks(x, y);
// });

// 调用函数
bio.display();
education.display();
work.display();
projects.display();

// 添加Map Key字符串
// var addMap = function() {
// 	$("#mapDiv").append(map);
// }
// addMap();

// 添加地图
function addMap() {
	$("#mapDiv").append(googleMap);
}
addMap();