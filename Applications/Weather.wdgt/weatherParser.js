// https://developer.here.com/sign-up?create=Freemium-Basic
var HereApiKey = ""

//Needed on old versions of OS X if you use your own API key. If unsure, leave this blank.
var proxyURL = ""


//-------------------------------------------------------------------------------------

/*
This Apple widget originally (at different times) pulled data from yahooWeather or weather.com. Both APIs died in 2019.
I (Wowfunhappy) have heavily modified this file to use the HERE API instead.

Copyright ＿ 2005, Apple Computer, Inc.  All rights reserved.
NOTE:  Use of this source code is subject to the terms of the Software
License Agreement for Mac OS X, which accompanies the code.  Your use
of this source code signifies your agreement to such license terms and
conditions.  Except as expressly granted in the Software License Agreement
for Mac OS X, no other copyright, patent, or other intellectual property
license or right is granted, either expressly or by implication, by Apple.
*/

var yahooWeatherTypes = 
[
    "lightening",             		// 0 Tornado
    "lightening",             		// 1 tropical storm
    "lightening",             		// 2 hurricane
    "lightening",             		// 3 severe thunderstorm
    "lightening",             		// 4 thunderstorm
    "rain&snow",               		// 5 mixed rain and snow
    "rain&snow",               		// 6 mixed rain and sleet
    "rain&snow",               		// 7 mixed snow and sleet
    "rain&clouds",              	// 8 freezing drizzle
    "rain&clouds",              	// 9 drizzle
    "hail",                   		// 10 freezing rain
    "rain",                   		// 11 showers
    "rain",                   		// 12 showers
    "flurries",               		// 13 snow flurries
    "flurries",               		// 14 light snow flurries
    "snow",                   		// 15 blowing snow
    "snow",                   		// 16 snow
    "hail",                   		// 17 hail
    "hail",                   		// 18 sleet
    "sun",                    		// 19 dust                      "haze"
    "fog",                    		// 20 foggy
    "sun",                    		// 21 haze                      "haze"
    "sun",                    		// 22 smoky                     "haze"
    "wind",                   		// 23 bustery
    "wind",                   		// 24 windy
    "ice",                    		// 25 cold
    "clouds",                 		// 26 clouds
    "clouds",                 		// 27 mostly cloudy (night)   
    "clouds",                 		// 28 mostly cloudy (day)
    ["moon", "partlycomboclouds"],	// 29 partly cloudy (night)     //was suncloud
    "partlycloudy",           		// 30 partly cloudy (day)
    "moon",                    		// 31 clear (night)	//was sun
    "sun",                     		// 32 sunny
    ["moon", "partlycomboclouds"],	// 33 fair (night)         //was suncloud  
    "partlycloudy",            		// 34 fair (day)
    "rain&snow",              		// 35 mixed rain and hail
    "sun",                     		// 36 hot
    "lightening",               		// 37 isolated thunderstorms    
    "lightening",               		// 38 scattered thunderstorms
    "rain&sun",                		// 39 scattered thunderstorm (yahoo icon is rain & sun)
    "rain",                    		// 40 scattered showers
    "snow",                    		// 41 heavy snow
    "snow",                    		// 42 scattered snow
    "snow",                    		// 43 heavy snow
    "partlycloudy",            		// 44 partly cloudy (yahoo icon is n/a)
    "rain&sun",                		// 45 thundershowers (yahoo icon is rain & sun)
    "snow",                    		// 46 snow showers
    "lightening",                   // 47 isolated thundershowers   "lightning"   //was sun
    
    //Wowfunhappy added
    ["sun", "haze"],								//48 Haze Day
    ["moon", "haze"],							//49 Haze Night
];

var getYahooWeatherIconNumFromHereIcon = {
	//https://developer.here.com/documentation/destination-weather/dev_guide/topics/resource-type-weather-items.html
	
	//Clear Day
	"sunny": 32, //32
	"clear": 32,
	"mostly_sunny": 32,
	"mostly_clear": 32,
	
	//Clear Night
	"night_clear": 31,
	"night_mostly_clear": 31,

	//Partly Cloudy Day
	"passing_clounds": 30,
	"more_sun_than_clouds": 30,
	"scattered_clouds": 30,
	"partly_cloudy": 30,
	"a_mixture_of_sun_and_clouds": 30,
	"increasing_cloudiness": 30,
	"breaks_of_sun_later": 30,
	"afternoon_clouds": 30,
	"morning_clouds": 30,
	"partly_sunny": 30,
	"decreasing_cloudiness": 30,
	"clearing_skies": 30,
	"more_clouds_than_sun": 30,
	
	//Partly Cloudy Night
	"night_decreasing_cloudiness": 29,
	"night_clearing_skies": 29,
	"night_passing_clouds": 29,
	"night_scattered_clouds": 29,
	"night_partly_cloudy": 29,
	"night_afternoon_clouds": 29,
	"night_morning_clouds": 29,
	
	//Clouds
	"high_level_clouds": 28,
	"high_clouds": 28,
	"cloudy": 28,
	"overcast": 28,
	"night_high_level_clouds": 28,
	"night_high_clouds": 28,
	"low_clouds": 28,
	"mostly_cloudy": 28,
	"broken_clouds": 28,
	"night_broken_clouds": 28,
	"night_mostly_cloudy": 28,
	
	//Light Rain
	"light_showers": 9,
	"night_sprinkles": 9,
	"drizzle": 9,
	"sprinkles": 9,
	"light_rain": 9,
	"sprinkles_early": 9,
	"light_rain_early": 9,
	"sprinkles_late": 9,
	"light_rain_late": 9,
	
	//Rain
	"rain_early": 11,
	"heavy_rain_early": 11,
	"scattered_showers": 11,
	"a_few_showers": 11,
	"passing_showers": 11,
	"rain_showers": 11,
	"showers": 11,
	"night_scattered_showers": 11,
	"night_a_few_showers": 11,
	"night_light_showers": 11,
	"night_passing_showers": 11,
	"night_rain_showers": 11,
	"night_showers": 11,
	"heavy_rain": 11,
	"lots_of_rain": 11,
	"tons_of_rain": 11,
	"heavy_rain_late": 11,
	"flash_floods": 11,
	"flood": 11,
	"rain": 11,
	"numerous_showers": 11,
	"showery": 11,
	"showers_early": 11,
	"showers_late": 11,
	"rain_late": 11,
	
	//Thunderstorms
	"strong_thunderstorms": 4,
	"severe_thunderstorms": 4,
	"thundershowers": 4,
	"thunderstorms": 4,
	"tstorms_early": 4,
	"isolated_tstorms_late": 4,
	"scattered_tstorms_late": 4,
	"tstorms_late": 4,
	"tstorms": 4,
	"widely_scattered_tstorms": 4,
	"isolated_tstorms": 4,
	"a_few_tstorms": 4,
	"scattered_tstorms": 4,
	"night_widely_scattered_tstorms": 4,
	"night_isolated_tstorms": 4,
	"night_a_few_tstorms": 4,
	"night_scattered_tstorms": 4,
	"night_tstorms": 4,
	"tornado": 4,
	"tropical_storm": 4,
	"hurricane": 4,
	
	//Freezing Rain, Hail
	"hail": 10,
	"light_freezing_rain": 10,
	"freezing_rain": 10,
	
	//Flurries, Light Snow
	"scattered_flurries": 19,
	"snow_flurries": 19,
	"light_snow": 19,
	"flurries_early": 19,
	"light_snow_early": 19,
	"flurries_late": 19,
	"light_snow_late": 19,
	
	//Snow
	"light_snow_showers": 13,
	"snow_showers": 13,
	"snow_showers_early": 13,
	"snow_showers_late": 13,
	"snow": 13,
	"moderate_snow": 13,
	"snow_early": 13,
	"snow_late": 13,
	"heavy_snow": 13,
	"heavy_snow_early": 13,
	"heavy_snow_late": 13,
	"snowstorm": 13,
	"blizzard": 13,
	
	//Snow & Rain
	"sleet": 5,
	"light_mixture_of_precip": 5,
	"icy_mix": 5,
	"mixture_of_precip": 5,
	"heavy_mixture_of_precip": 5,
	"snow_changing_to_rain": 5,
	"snow_changing_to_an_icy_mix": 5,
	"an_icy_mix_changing_to_snow": 5,
	"an_icy_mix_changing_to_rain": 5,
	"rain_changing_to_snow": 5,
	"rain_changing_to_an_icy_mix": 5,
	"icy_mix_early": 5,
	"light_icy_mix_late": 5,
	"icy_mix_late": 5,
	"snow_rain_mix": 5,
	
	//Mist, Fog
	"ice_fog": 20,
	"early_fog_followed_by_sunny_skies": 20,
	"early_fog": 20,
	"light_fog": 20,
	"fog": 20,
	"dense_fog": 20,
	
	//Haze, Sand, Dust, Smoke (Day)
	"hazy_sunshine": 48,
	"haze": 48,
	"smoke": 48,
	"low_level_haze": 48,
	"sandstorm": 48,
	"duststorm": 48,
	
	//Haze, Smoke (Night)
	"night_haze": 49,
	"night_low_level_haze": 49,
	"night_smoke": 49,
	
	//Inferred
	"wind": 24,
	
	//WTF
	"cw_no_report_icon": 99
	
};

function getAppleMoonIconNum(hereIconName, illumination) {
  //illumination steps = (1/24) + (1/12)X
	if (hereIconName === "cw_new_moon") {
		return 1;
	}
	else if (hereIconName === "cw_waxing_crescent") {
		if (illumination < 0.125) {
			return 2;
		}
		else if (illumination < 0.208) {
			return 3;
		}
		else if (illumination < 0.292) {
			return 4;
		}
		else { //< #0.375
			return 5;
		}
	}
	else if (hereIconName === "cw_first_qtr") {
		if (illumination < 0.458) {
			return 6;
		}
		else if (illumination < 0.542) {
			return 7;
		}
		else { //< #0.625
			return 8;
		}
	}
	else if (hereIconName === "cw_waxing_gibbous") {
		if (illumination < 0.708) {
			return 9;
		}
		else if (illumination < 0.791) {
			return 10;
		}
		else if (illumination < 0.875) {
			return 11;
		}
		else { //< 0.958
			return 12;
		}
	}
	else if (hereIconName === "cw_full_moon") {
		return 13;
	}
	else if (hereIconName === "cw_waning_gibbous") {
		if (illumination > 0.958) {
			return 14;
		}
		else if (illumination > 0.875) {
			return 15;
		}
		else if (illumination > 0.791) {
			return 16;
		}
		else { //> 0.708
			return 17;
		}
	}
	else if (hereIconName === "cw_last_qtr") {
	  //Different thresholds here. Waning phase is missing one image
		if (illumination > 0.583) {
			return 18;
		}
		else { //> 0.5
			return 19;
		}
	}
	else if (hereIconName === "cw_waning_crescent") {
		if (illumination > 0.375) {
			return 20;
		}
		else if (illumination > 0.292) {
			return 21;
		}
		else if (illumination > 0.208) {
			return 22;
		}
		else { //>.125
			return 23;
		}
	}
}

var windThreshold = 25;
var beaufortThreshold = 6;

if (window.timerInterval != 300000)
	window.timerInterval = 300000; // 5 minutes


// returns an anonymous object like so
// object
//		error: 	Boolean false for success
//		errorString: failure string
//		hi:		Fahrenheit
//		lo: 		Fahrenheit
//		temp: 	Fahrenheit
//		icon	:	icon code
//		icons:	our icons to display
//		description:	description
//		city:	City (first caps)
//		time:	time 24 hours(nn:nn)
//		sunset:	time 24 hours (nn:nn)
//		sunrise: time 24 hours (nn:nn)
//		phases: array[7] of integers; -1 means no phase data 1-24
//		forcast: array[6] of anonymous objects like so
//			object
//				hi:			Fahrenheit
//				lo: 		Fahrenheit
//				icon:		icon code
//				ouricon:	our icon code to display
//				description: description
//				daycode:	(MON/TUE/WED/THU/FRI/SAT/SUN)

function fetchWeatherData (callback, postal)
{	
	if (HereApiKey !== "") {
		var url = proxyURL + 'https://weather.ls.hereapi.com/weather/1.0/report.json?product=forecast_7days_simple&product=observation&product=forecast_astronomy&metric=false&oneobservation=true&' + postal + '&apiKey=' + HereApiKey;
	}
	else {
		var url = 'http://weather-widget-578a.wowfunhappy.workers.dev/weather|||' + "&" + postal;
	}
	
	
	if (window.timerInterval != 300000)
		window.timerInterval = 300000; // 5 minutes

	var xml_request = new XMLHttpRequest();
	xml_request.onload = function(e) {xml_loaded(e, xml_request, callback);}
	xml_request.open("GET", url);
	xml_request.setRequestHeader("Cache-Control", "no-cache");
	xml_request.send(null);
	
	//alert("Weather URL: " + url); //uncomment for debugging
	
	return xml_request;
}

function constructError (string)
{
	return {error:true, errorString:string};
}

function getDaycode(dayNum) {
	var weekArray = ["SUN", "MON", "TUES", "WED", "THU", "FRI", "SAT"];
	return weekArray[dayNum - 1];
}

/*Used for compatibility with Tiger, which does not support JSON.parse()*/
/*Eval is unsafe, so be careful not to use it unless absolutely necessary!*/
function parseJson(json) {
	try {
		JSON.parse('{}');
		canParseJSON = true;
	}
	catch(err) {
		canParseJSON = false;
	}
	if (canParseJSON) {
		return JSON.parse(json);
	}
	else {
		return eval('(' + json + ')');
	}
}

function xml_loaded (event, request, callback)
{
		var obj = {error:false, errorString:null};
		var json = parseJson(request.responseText);
		
		var CurrentConditions = json.observations.location[0].observation[0];
		
		obj.time = new Date(CurrentConditions.utcTime);
		obj.city = CurrentConditions.city;
		obj.temp = parseInt(CurrentConditions.temperature);
		obj.description = CurrentConditions.description;
		obj.daylight = CurrentConditions.daylight;
		
		var icon = CurrentConditions.iconName;
		if (CurrentConditions.precipitationDesc === "" && CurrentConditions.windSpeed >= windThreshold) {
			icon = "wind"
		}
		
		var yahooWeatherIconNum = getYahooWeatherIconNumFromHereIcon[icon];		
		obj.icon = yahooWeatherIconNum;
		obj.icons = yahooWeatherTypes[yahooWeatherIconNum];
		
		var Astronomy = json.astronomy.astronomy[0];
		obj.phase = getAppleMoonIconNum(Astronomy.iconName, Astronomy.moonPhase);
		
		var Forecast = json.dailyForecasts.forecastLocation.forecast;
		
		obj.hi = parseInt(Math.round(Forecast[0].highTemperature));
		obj.lo = parseInt(Math.round(Forecast[0].lowTemperature));
		
		obj.forecast = new Array;
		
		for (i = 0; i < 6; i++) {
			var foreobj = {description:null, hi:0, lo:0, icon:-1};
			
			//Likely accessibility-related; not normally visible anywhere in the widget. Untested.
			foreobj.description = Forecast[i].description;
			
			foreobj.hi = parseInt(Math.round(Forecast[i].highTemperature));
			foreobj.lo = parseInt(Math.round(Forecast[i].lowTemperature));

			var icon = Forecast[i].iconName;
			if (Forecast[i].precipitationDesc === "" && CurrentConditions.beaufortScale >= beaufortThreshold) {
				icon = "wind"
			}
			var yahooWeatherIconNum = getYahooWeatherIconNumFromHereIcon[icon];
			foreobj.icon = yahooWeatherIconNum;
			foreobj.ouricon = yahooWeatherTypes[yahooWeatherIconNum];
			
			foreobj.daycode = getDaycode(Forecast[i].dayOfWeek);
			
			obj.forecast[i]=foreobj;
		}
		
		callback (obj);
}

function validateWeatherLocation (location, callback)
{
	if (HereApiKey !== "") {
		var url = proxyURL + 'https://geocode.search.hereapi.com/v1/geocode?apiKey=' + HereApiKey + '&lang=' + navigator.language + '&q=' + location;
	}
	else {
		var url = 'http://weather-widget-578a.wowfunhappy.workers.dev/location|||' + '&lang=' + navigator.language + '&q=' + location;
	}

	//alert("Location URL: " + url); //uncomment for debugging
	
	var xml_request = new XMLHttpRequest();
	xml_request.onload = function(e) {xml_validateloaded(e, xml_request, callback);}
	xml_request.overrideMimeType("text/xml");
	xml_request.open("GET", url);
	xml_request.setRequestHeader("Cache-Control", "no-cache");
	xml_request.send(null);
}

function xml_validateloaded (event, request, callback)
{
	if (request.responseText) {
		var obj = {error:false, errorString:null, cities:new Array, refine:false};
		obj.refine = 0;
		
		var json = parseJson(request.responseText);

		for(var i=0; i < json.items.length; i++)
		{
			var itemElement = json.items[i];

			var city = itemElement.address.city;
			var regionName = itemElement.address.state;
			var country = itemElement.address.countryCode;
			var countryName = itemElement.address.countryName;
			var zip = "latitude=" + itemElement.position.lat + "&longitude=" + itemElement.position.lng;

			var state = regionName;
      if (country != "USA") {
				if (regionName && regionName != "")
					state = regionName + " (" + countryName + ")";
				else if (countryName && countryName != "")
					state = countryName;
				else 
					state = nil;
			}
			if (city && state && zip) {
				obj.cities.push({name: city, state: state, zip: zip});	
			}
		}
		
		callback (obj);
	}
}
