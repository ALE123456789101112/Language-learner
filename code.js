
var languageList = getColumn("languageData","languages");
var hourList = getColumn("languageData","hours");
var languagesFilteredList = [];


onEvent("startButton", "click",function () {
  setScreen("Languages");
  
});
onEvent("submit", "click", function( ) {
  filterData(getText("textInput"));
});


onEvent("exampleButton", "click", function( ) {
  filterData(1000);
});


function filterData(hours) {
   if (hours<48) {
     setText("textOutput", "Nobody can learn a language in that amount of time silly ;)");
   } else if (hours >= 48) {
     languagesFilteredList = [];
     for (var i = 0; i < languageList.length; i++) {
       if (hourList[i]<= hours) {
         appendItem(languagesFilteredList, languageList[i]);
         setText("textOutput", "With"+" "+hours+ " "+
         "hours of study, you can learn the following languages:\n"+languagesFilteredList.join("\n"));
       }
     }
   } else {
     setText("textOutput", "only put numbers!!!!!!");
   }
  }
