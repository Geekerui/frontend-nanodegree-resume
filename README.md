# Project Details
## How do I complete this project?
Review the Online Resume [Project Rubric](https://review.udacity.com/?_ga=1.189245867.12280332.1465333852#!/projects/2962818615/rubric).

1. In this project you will store your resume data in four javaScript objects according to the schema given below. As is often the case when leveraging an API, the objects must follow the schema exactly. All properties must be present and have real or fake values. The names must match those in the schema (note that object and property names are case-sensitive). All property values should be of the data-type given for the property in the schema. For example if the data-type is given as an array, it is not acceptable to use a string as a value for that property.
2. Once you've created your javaScript objects, you will write the code needed to display all of the resume data contained within these objects in your resume.
3. All of the HTML code needed to build the resume is stored in **js/helper.js** variables. The variable names indicate their function. You will replace substrings in these variable string values such as **%data%** and **#** with the data in your javaScript objects, and append or prepend the formatted result to your resume in the appropriate location.
4. If you need a refresher on JavaScript syntax, go to the [Javascript Basics](https://classroom.udacity.com/nanodegrees/nd001/parts/0011345406/modules/296281861575460/lessons/1946788554/concepts/25505685350923) course; if you would like to understand how this project is manipulating and traversing the DOM, check out [Intro to jQuery](https://classroom.udacity.com/nanodegrees/nd001/parts/0011345406/modules/296281861575461/lessons/3314378535/concepts/33166386820923).
5. Go through the videos and assignments in this course to learn the JavaScript necessary to build your resume.
6. Fork the project repo from [Github](https://github.com/udacity/frontend-nanodegree-resume) and begin building you resume.
7. If you are prompted to do so, you may want to get a [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key), and include it as the value of the `key` parameter when loading the Google Maps API in **index.html**:
```<script  src="http://maps.googleapis.com/maps/api/js?libraries=places&key=[YOUR_API_KEY]"></script> ``` You may have some initial concerns with placing your API key directly within your JavaScript source files, but rest assured this is perfectly safe. All client-side code must be downloaded by the client; therefore, the client must download this API key - it is not intended to be secret. Google has security measures in place to ensure your key is not abused. **It is not technically possible to make anything secret on the client-side.**
8. Check your work against the [Project Rubric](https://review.udacity.com/?_ga=1.189245867.12280332.1465333852#!/projects/2962818615/rubric).
9. When you are satisfied with your project, submit it according to the Submission Instructions below.

### By the end:
Your resume will look something like this
![](http://i.imgur.com/pWU1Xbl.png)

And your repository will include the following files:

* **index.html**: The main HTML document. Contains links to all of the CSS and JS resources needed to render the resume, including resumeBuilder.js.
* **js/helper.js**: Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality. More on helper.js further down.
* **js/resumeBuilder.js**: This file is empty. You should write your code here.
* **js/jQuery.js**: The jQuery library.
* **css/style.css**: Contains all of the CSS needed to style the page.
* **README.md**: 
The GitHub readme file.
* and some images in the images directory.

## Your starting point...
### js/helper.js
Within helper.js, you’ll find a large collection of strings containing snippets of HTML. Within many snippets, you’ll find placeholder data in the form of `%data%` or `%contact%`.

Each string has a title that describes how it should be used. For instance, `HTMLworkStart` should be the first `<div>` in the Work section of the resume. `HTMLschoolLocation` contains a `%data%` placeholder which should be replaced with the location of one of your schools.
