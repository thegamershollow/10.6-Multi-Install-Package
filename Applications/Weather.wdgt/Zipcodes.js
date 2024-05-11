
var zipcodes = {
	"Honolulu": {postal: "USHI0026|2423945", state: "HI", country: "US"}, 
	"Anchorage": {postal: "USAK0012|2354490", state: "AK", country: "US"}, 
	"Los Angeles": {postal: "USCA0638|2442047", state: "CA", country: "US"}, 
	"Vancouver": {postal: "CAXX0518|9807", state: "British Columbia", country: "Canada"}, 
	"San Francisco": {postal: "USCA0987|2487956", state: "CA", country: "US"}, 
	"Seattle": {postal: "USWA0395|2490383", state: "WA", country: "US"}, 
	"Cupertino": {postal: "USCA0273|2388327", state: "CA", country: "US"}, 
	"San Diego": {postal: "USCA0982|2487889", state: "CA", country: "US"}, 
	"Portland": {postal: "USOR0275|2475687", state: "OR", country: "US"}, 
	"Phoenix": {postal: "USAZ0166|2471390", state: "AZ", country: "US"}, 
	"Calgary": {postal: "CAXX0054|8775", state: "Alberta", country: "Canada"}, 
	"Salt Lake City": {postal: "USUT0225|2487610", state: "UT", country: "US"}, 
	"Denver": {postal: "USCO0105|2391279", state: "CO", country: "US"}, 
	"Mexico City": {postal: "MXDF0403|116545", state: "Distrito Federal", country: "Mexico"}, 
	"Las Vegas": {postal: "USNV0049|2436704", state: "NV", country: "US"},
	"Chicago": {postal: "USIL0225|2379574", state: "IL", country: "US"}, 
	"San Salvador": {postal: "ESXX0001|79825", state: "San Salvador", country: "El Salvador"}, 
	"Managua": {postal: "NUXX0004|153523", state: "Managua", country: "Nicaragua"}, 
	"Tegucigalpa": {postal: "HOXX0008|107681", state: "Francisco Morazán", country: "Honduras"}, 
	"Guatemala City": {postal: "GTXX0002|83123", state: "Guatemala", country: "Guatemala"}, 
	"Winnipeg": {postal: "CAXX0547|2972", state: "Manitoba", country: "Canada"}, 
	"Regina": {postal: "CAXX0397|2512", state: "Saskatchewan", country: "Canada"}, 
	"Dallas": {postal: "USTX0327|2388929", state: "TX", country: "US"}, 
	"Minneapolis": {postal: "USMN0503|2452078", state: "MN", country: "US"}, 
	"Houston": {postal: "USTX0617|2424766", state: "TX", country: "US"}, 
	"San Jose": {postal: "ARCT9005|59426", state: "San Jose", country: "Costa Rica"}, 
	"Austin": {postal: "USTX0057|2357536", state: "TX", country: "US"}, 
	"St. Louis": {postal: "USMO0787|2486982", state: "MO", country: "US"}, 
	"Memphis": {postal: "USTN0325|2449323", state: "TN", country: "US"}, 
	"New York": {postal: "USNY0996|2459115", state: "NY", country: "US"}, 
	"Lima": {postal: "ARBA2806|418440", state: "Lima Metropolitan Area", country: "Peru"}, 
	"Bogota": {postal: "COXX0004|368148", state: "Distrito Especial", country: "Colombia"}, 
	"Toronto": {postal: "CAXX0504|4118", state: "Ontario", country: "Canada"}, 
	"Panama City": {postal: "PMXX0004|159386", state: "Panama", country: "Panama"}, 
	"Montreal": {postal: "CAXX0301|3534", state: "Quebec", country: "Canada"}, 
	"Havana": {postal: "CUXX0003|63817", state: "Ciudad de la Habana", country: "Cuba"}, 
	"Quito": {postal: "ECXX0008|375732", state: "Pichincha", country: "Ecuador"}, 
	"Philadelphia": {postal: "USPA1276|2471217", state: "PA", country: "US"}, 
	"Ottawa": {postal: "CAXX0343|3369", state: "Ontario", country: "Canada"}, 
	"Indianapolis": {postal: "USIN0305|2427032", state: "IN", country: "US"}, 
	"Port-au-Prince": {postal: "HAXX0004|96110", state: "Ouest", country: "Haiti"}, 
	"Washington": {postal: "USDC0001|2514815", state: "DC", country: "US"}, 
	"Columbus": {postal: "USOH0212|2383660", state: "OH", country: "US"}, 
	"Knoxville": {postal: "USTN0268|2433662", state: "TN", country: "US"}, 
	"Blacksburg": {postal: "USVA0068|2365044", state: "VA", country: "US"}, 
	"Manchester": {postal: "USNH0136|2444674", state: "NH", country: "US"}, 
	"Boston": {postal: "USMA0046|2367105", state: "MA", country: "US"}, 
	"Miami": {postal: "USFL0316|2450022", state: "FL", country: "US"}, 
	"Atlanta": {postal: "USGA0028|2357024", state: "GA", country: "US"}, 
	"Detroit": {postal: "USMI0229|2391585", state: "MI", country: "US"}, 
	"Santiago": {postal: "CIXX0011|349859", state: "Santiago", country: "Chile"}, 
	"Santo Domingo": {postal: "DRXX0009|76456", state: "Distrito Nacional", country: "Dominican Republic"}, 
	"Caracas": {postal: "VEXX0008|395269", state: "Distrito Federal", country: "Venezuela"}, 
	"La Paz": {postal: "BLXX0006|346057", state: "La Paz", country: "Bolivia"}, 
	"Asuncion": {postal: "PAXX0001|379176", state: "Asunción", country: "Paraguay"}, 
	"San Juan": {postal: "USPR0087|161685", state: "PR", country: "US"}, 
	"Halifax": {postal: "CAXX0183|4177", state: "Nova Scotia", country: "Canada"}, 
	"Georgetown": {postal: "GYXX0001|376765", state: "Demerara-Mahaica", country: "Guyana"}, 
	"St. John's": {postal: "CAXX0310|3996", state: "Newfoundland and Labrador", country: "Canada"}, 
	"Bridgetown": {postal: "BBXX0001|56334", state: "Saint Michael", country: "Barbados"}, 
	"Rio de Janeiro": {postal: "BRXX0201|455825", state: "Rio de Janeiro", country: "Brazil"}, 
	"Buenos Aires": {postal: "ARSF3070|468739", state: "Ciudad de Buenos Aires", country: "Argentina"}, 
	"Sao": {postal: "BRXX3525|458066", state: "Maranhao", country: "Brazil"}, 
	"Brasilia": {postal: "BRXX0043|455819", state: "Distrito Federal", country: "Brazil"}, 
	"Recife": {postal: "BRXX0195|455824", state: "Pernambuco", country: "Brazil"}, 
	"Montevideo": {postal: "UYXX0006|468052", state: "Montevideo", country: "Uruguay"}, 
	"Paramaribo": {postal: "NSXX0002|377227", state: "Paramaribo", country: "Suriname"}, 
	"Cayenne": {postal: "FGXX0001|379832", state: "Cayenne", country: "French Guyana"}, 
	//Grytviken - no data
	"Nuuk": {postal: "GLXX0003|472856", state: "Vestgronland", country: "Greenland"}, 
	"Ponta Delgada": {postal: "POXX0020|538216", state: "Azores", country: "Portugal"}, 
	"London": {postal: "UKXX0318|44418", state: "England", country: "United Kingdom"}, 
	"Dakar": {postal: "SGXX0001|1411986", state: "Dakar", country: "Senegal"}, 
	"Accra": {postal: "GHXX0001|1326075", state: "Greater Accra", country: "Ghana"}, 
	"Conakry": {postal: "GVXX0002|1334760", state: "Conakry", country: "Guinea"}, 
	"Ouagadougou": {postal: "UVXX0001|1461080", state: "Kadiogo", country: "Burkina Faso"}, 
	"Dublin": {postal: "EIXX0014|560743", state: "Ireland", country: "US"}, 
	"Bamako": {postal: "MLXX0001|1369729", state: "Bamako", country: "Mali"}, 
	"Monrovia": {postal: "LIXX0002|1350536", state: "Monrovia", country: "Liberia"}, 
	"Freetown": {postal: "SLXX0001|1419467", state: "Western Area", country: "Sierra Leone"}, 
	"Nouakchott": {postal: "MRXX0004|1504735", state: "Nouakchott", country: "Mauritania"}, 
	"Rabat": {postal: "MOXX0007|1539359", state: "Rabat-Sale", country: "Morocco"}, 
	"Cork": {postal: "EIXX0011|560472", state: "Ireland", country: "US"}, 
	"Lisbon": {postal: "POXX0039|742676", state: "Lisbon", country: "Portugal"}, 
	"Edinburgh": {postal: "UKXX1457|19344", state: "Scotland", country: "United Kingdom"}, 
	"Cardiff": {postal: "UKXX0030|15127", state: "Wales", country: "United Kingdom"}, 
	"Reykjavik": {postal: "ICXX0002|980389", state: "Reykjavik", country: "Iceland"}, 
	"Lagos": {postal: "NIXX0012|1398823", state: "Lagos", country: "Nigeria"}, 
	"Kinshasa": {postal: "CGXX0005|1290062", state: "Kinshasa", country: "Democratic Republic of Congo"}, 
	"Madrid": {postal: "SPXX0050|766273", state: "Madrid", country: "Spain"}, 
	"Berlin": {postal: "GMXX0007|638242", state: "Berlin", country: "Germany"}, 
	"Luanda": {postal: "AOXX0008|1261906", state: "Luanda", country: "Angola"}, 
	"Rome": {postal: "ITXX0067|721943", state: "Lazio", country: "Italy"}, 
	"Paris": {postal: "FRXX0295|615702", state: "Ile-de-France", country: "France"}, 
	"Algiers": {postal: "AGXX0001|1253079", state: "Alger", country: "Algeria"}, 
	"Douala": {postal: "CMXX0003|1478198", state: "Littoral", country: "Cameroon"}, 
	"Stockholm": {postal: "SWXX0031|906057", state: "Stockholm", country: "Sweden"}, 
	"Hamburg": {postal: "GMXX2496|656958", state: "Hamburg", country: "Germany"}, 
	"Vienna": {postal: "AUXX0017|551801", state: "Vienna", country: "Austria"}, 
	"Budapest": {postal: "HUXX0002|804365", state: "Budapest", country: "Hungary"}, 
	"Warsaw": {postal: "PLXX0028|523920", state: "Mazowieckie", country: "Poland"}, 
	"Munich": {postal: "GMXX3042|676757", state: "Bavaria", country: "Germany"}, 
	"Zurich": {postal: "SZXX0033|784794", state: "Canton of Zurich", country: "Switzerland"}, 
	"Tripoli": {postal: "LYXX0009|1353281", state: "Tsarrbuus", country: "Libya"},
	"Prague": {postal: "EZXX0012|796597", state: "Hlavni mesto Praha", country: "Czech Republic"}, 
	"Belgrade": {postal: "USMT0040|2361638", state: "MT", country: "US"}, 
	"Bruxelles": {postal: "BEXX0024|968019", state: "Vlaams Brabant", country: "Belgium"}, 
	"Tunis": {postal: "TSXX0010|1442746", state: "Tunis", country: "Tunisia"}, 
	"N'Djamena": {postal: "CDXX0003|1277402", state: "Chari-Baguirmi", country: "Chad"}, 
	"Amsterdam": {postal: "NLXX0002|727232", state: "North Holland", country: "Netherlands"}, 
	"Bangui": {postal: "CTXX0001|1306666", state: "Bangui", country: "Central African Republic"}, 
	"Oslo": {postal: "NOXX0029|862592", state: "Oslo Fylke", country: "Norway"}, 
	"Copenhagen": {postal: "DAXX0009|554890", state: "Hovedstaden", country: "Denmark"}, 
	"Geneva": {postal: "SZXX0008|782538", state: "Canton of Geneva", country: "Switzerland"}, 
	"Bratislava": {postal: "LOXX0001|818717", state: "Bratislavsky", country: "Slovakia"}, 
	"Zagreb": {postal: "HRXX0005|851128", state: "Grad Zagreb", country: "Croatia"}, 
	"Ljubljana": {postal: "SIXX0002|530634", state: "Ljubljana", country: "Slovenia"}, 
	"Istanbul": {postal: "TUXX0014|2344116", state: "Istanbul", country: "Turkey"}, 
	"Cairo": {postal: "EGXX0004|1521894", state: "Al Qahirah", country: "Egypt"}, 
	"Ankara": {postal: "TUXX0002|2343732", state: "Ankara", country: "Turkey"}, 
	"Cape Town": {postal: "SFXX0010|1591691", state: "Western Cape", country: "South Africa"}, 
	"Khartoum": {postal: "SUXX0002|1433559", state: "Al Khartum", country: "Sudan"}, 
	"Kiev": {postal: "UPXX0016|924938", state: "Kyyiv, Misto", country: "Ukraine"}, 
	"Beirut": {postal: "LEXX0003|1960307", state: "Bayrut", country: "Lebanon"}, 
	"Bucharest": {postal: "ROXX0003|868274", state: "Bucuresti", country: "Romania"}, 
	"Lusaka": {postal: "ZAXX0004|1569006", state: "Lusaka", country: "Zambia"}, 
	"Harare": {postal: "ZIXX0004|1467052", state: "Harare", country: "Zimbabwe"}, 
	"Amman": {postal: "JOXX0002|1968902", state: "'Amman", country: "Jordan"}, 
	"Sofia": {postal: "BUXX0005|839722", state: "Sofiya-Grad", country: "Bulgaria"}, 
	"Maputo": {postal: "MZXX0003|1550363", state: "Maputo", country: "Mozambique"}, 
	"Jerusalem": {postal: "ISXX0010|1968222", state: "Yerushalayim", country: "Israel"}, 
	"Athens": {postal: "GRXX0004|946738", state: "Attiki", country: "Greece"}, 
	"Helsinki": {postal: "FIXX0002|565346", state: "Southern Finland", country: "Finland"}, 
	"Moscow": {postal: "RSXX0063|2122265", state: "Moskva", country: "Russia"}, 
	"Baghdad": {postal: "IZXX0008|1979455", state: "Baghdad", country: "Iraq"}, 
	"Antananarivo": {postal: "MAXX0002|1358594", state: "Antananarivo", country: "Madagascar"}, 
	"Riyadh": {postal: "SAXX0017|1939753", state: "Ar Riyad", country: "Saudi Arabia"}, 
	"St. Petersburg": {postal: "RSXX0089|2123260", state: "St. Peterburg", country: "Russia"}, 
	"Addis Ababa": {postal: "ETXX0001|1313090", state: "Debub Shewa", country: "Ethiopia"}, 
	"Nairobi": {postal: "KEXX0009|1528488", state: "Nairobi Area", country: "Kenya"}, 
	"Dar es Salaam": {postal: "TZXX0001|1443415", state: "Dar es Salaam", country: "Tanzania"}, 
	"Volgograd": {postal: "RSXX0117|2124298", state: "Volgogradskaya Oblast", country: "Russia"}, 
	"San'a": {postal: "YMXX0005|1958237", state: "San`a´", country: "Yemen"}, 
	"Mogadisho": {postal: "SOXX0002|1428567", state: "Banaadir", country: "Somalia"},
	"Damascus": {postal: "SYXX0004|1947122", state: "Dimashq", country: "Syria"}, 
	"Kampala": {postal: "UGXX0002|1451962", state: "Kampala", country: "Uganda"}, 
	"Makkah": {postal: "SAXX0013|1939897", state: "Makka", country: "Saudi Arabia"},
	"Asmara": {postal: "ERXX0001|1312120", state: "Maekel", country: "Eritrea"}, 
	// Djibouti - no data
	"Kuwait City": {postal: "KUXX0003|1940631", state: "Al Asimah", country: "Kuwait"},
	"Doha": {postal: "QAXX0003|1940517", state: "Ad Dawhah", country: "Qatar"}, 
	"Manama": {postal: "BAXX0001|1967057", state: "Al Manamah", country: "Bahrain"}, 
	"Tehran": {postal: "IRXX0018|2251945", state: "Tehran", country: "Iran"}, 
	"Yerevan": {postal: "AMXX0003|2214662", state: "Yerevan", country: "Armenia"}, 
	"Baku": {postal: "AJXX0001|1951874", state: "Baki", country: "Azerbaijan"}, 
	"Abu Dhabi": {postal: "AEXX0001|1940330", state: "Abu Zaby", country: "United Arab Emirates"}, 
	"Muscat": {postal: "MUXX0001|2268284", state: "Masqat", country: "Oman"}, 
	"Port Louis": {postal: "GPXX0004|1377436", state: "Port Louis", country: "Mauritius"}, 
	"Victoria": {postal: "SEXX0001|1411024", state: "English River", country: "Seychelles"}, 
	"Kabul": {postal: "AFXX0003|1922738", state: "Kabul", country: "Afghanistan"}, 
	"Tashkent": {postal: "UZXX0004|2272113", state: "Toshkent", country: "Uzbekistan"}, 
	"Yekaterinburg": {postal: "RSXX0123|2112237", state: "Sverdlovskaya Oblast", country: "Russia"}, 
	"Ashgabat": {postal: "TXXX0002|1935520", state: "Ashkhabad", country: "Turkmenistan"}, 
	"Islamabad": {postal: "PKXX0006|2211027", state: "Islamabad", country: "Pakistan"}, 
	"Male": {postal: "MVXX0001|2268295", state: "Maale", country: "Maldives"}, 
	"Mumbai": {postal: "INXX0026|2295411", state: "Maharashtra", country: "India"}, 
	"Kolkata": {postal: "INXX0028|2295386", state: "West Bengal", country: "India"}, 
	"Chennai": {postal: "INXX0075|2295424", state: "Tamil Nadu", country: "India"}, 
	"Itapecuru-Mirim": {postal: "BRXX2159|457052", state: "Maranhao", country: "Brazil"}, 
	"Colombo": {postal: "CEXX0001|2189783", state: "Western", country: "Sri Lanka"}, 
	"New Delhi": {postal: "INXX0038|2295019", state: "Delhi", country: "India"}, 
	"Kathmandu": {postal: "NPXX0002|2269179", state: "Central", country: "Nepal"}, 
	"Dhaka": {postal: "BGXX0003|1915035", state: "Dhaka", country: "Bangladesh"}, 
	"Novosibirsk": {postal: "RSXX0077|2122541", state: "Novosibirskaya Oblast", country: "Russia"}, 
	"Omsk": {postal: "RSXX0080|2122641", state: "Omskaya Oblast", country: "Russia"}, 
	"Yangon": {postal: "BMXX0004|1015662", state: "Yangon", country: "Myanmar"}, 
	"Jakarta": {postal: "IDXX0022|1047378", state: "Jakarta Raya", country: "Indonesia"}, 
	"Bangkok": {postal: "THXX0002|1225448", state: "Bangkok", country: "Thailand"}, 
	"Ho Chi Minh City": {postal: "VMXX0007|1247343", state: "Ho Chi Minh", country: "Vietnam"}, 
	"Krasnoyarsk": {postal: "RSXX0267|2029043", state: "Krasnoyarskiy Kray", country: "Russia"}, 
	"Hanoi": {postal: "VMXX0006|1236594", state: "Ha Noi", country: "Vietnam"}, 
	"Phnom Penh": {postal: "CBXX0001|1020985", state: "Phnum Penh", country: "Cambodia"}, 
	"Shanghai": {postal: "CHXX0116|2151849", state: "Shanghai", country: "China"}, 
	"Beijing": {postal: "CHXX0008|2151330", state: "Beijing", country: "China"}, 
	"Manila": {postal: "RPXX0003|1199477", state: "National Capital Region", country: "Philippines"}, 
	"Hong Kong": {postal: "CHXX0049|2165352", state: "Hong Kong Island", country: "Hong Kong"}, 
	"Singapore": {postal: "SNXX0006|1062617", state: "Central Singapore", country: "Singapore"}, 
	"Tianjin": {postal: "CHXX0133|2159908", state: "Tianjin", country: "China"}, 
	"Guangzhou": {postal: "CHXX0037|2161838", state: "Guangdong", country: "China"}, 
	"Taipei City": {postal: "TWXX0021|2306179", state: "Taipei City", country: "Taiwan"}, 
	"Kuala Lumpur": {postal: "MYXX0008|1154781", state: "Wilayah Persekutuan", country: "Malaysia"}, 
	"Ulan Bator": {postal: "MGXX0003|2266535", state: "Ulaanbaatar", country: "Mongolia"}, 
	"Perth": {postal: "ASXX0231|1098081", state: "Western Australia", country: "Australia"}, 
	"Tokyo": {postal: "JAXX0085|1118370", state: "Tokyo Prefecture", country: "Japan"}, 
	"Seoul": {postal: "KSXX0037|1132599", state: "Seoul", country: "South Korea"}, 
	"Osaka-shi": {postal: "JAXX0071|15015370", state: "Osaka Prefecture", country: "Japan"}, 
	"Pyongyang": {postal: "KNXX0006|1079132", state: "P´yongyang-si", country: "North Korea"}, 
	"Yakutsk": {postal: "RSXX0122|2110973", state: "Sakha", country: "Russia"}, 
	"Adelaide": {postal: "ASXX0001|1099805", state: "South Australia", country: "Australia"}, 
	"Darwin": {postal: "ASXX0032|1101597", state: "Northern Territory", country: "Australia"}, 
	"Sydney": {postal: "ASXX0086|1105779", state: "New South Wales", country: "Australia"}, 
	"Melbourne": {postal: "ASXX0075|1103816", state: "Victoria", country: "Australia"}, 
	"Brisbane": {postal: "ASXX0220|1100661", state: "Queensland", country: "Australia"}, 
	"Vladivostok": {postal: "RSXX0116|2124288", state: "Primorskiy Kray", country: "Russia"}, 
	"Canberra": {postal: "ASXX0056|1100968", state: "Australian Capital Territory", country: "Australia"}, 
	// Guam - no data
	"Hobart": {postal: "ASXX0057|1102670", state: "Tasmania", country: "Australia"}, 
	"Magadan": {postal: "RSXX0057|2122039", state: "Magadanskaya Oblast", country: "Russia"}, 
	"Noumea": {postal: "NCXX0006|1049640", state: "Sud", country: "New Caledonia"}, 
	"Wellington": {postal: "NZXX0049|2351310", state: "Wellington", country: "New Zealand"}, 
	"Anadyr'": {postal: "RSXX0003|1982503", state: "Chukotskiy Avtonomnyy Okrug", country: "Russia"}, 
	"Pago Pago": {postal: "USAS0001|1062841", state: "AS", country: "US"}, 
	"Adak": {postal: "USAK0001|2351864", state: "AK", country: "US"}
}
