


function doGet(e) {
//var id = e.parameter.id;
//var cache = CacheService.getUserCache().put("id", id);
var whatversion = e.parameter.version;

if(whatversion == "?"){
  return HtmlService.createHtmlOutput("<p>current version: 1.0.0</p>")
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
      return;
      }

  return HtmlService.createHtmlOutputFromFile('form')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);

}

function getDefaults(){
  var defaults = {};
//  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var ss = SpreadsheetApp.openById("Your id goes here");
  
  //Get Names
  var nameSheet = ss.getSheetByName("Names");
  var nameData = nameSheet.getDataRange().getValues();
  var names = getJustRow_(nameData);
  defaults.names = names;
  
   //Get Chromebooks
  var cbSheet = ss.getSheetByName("Chroembooks");
  var cbData = cbSheet.getDataRange().getValues();
  var cbNum = getJustRow_(cbData);
  defaults.cbNum = cbNum;
  
  
  return defaults;
}


function addToSheet(data){
  var ss = SpreadsheetApp.openById("Your id goes here");
  var sheet = ss.getSheetByName("Data");
  sheet.insertRowAfter(1);
  sheet.getRange(2, 1, 1, data[0].length).setValues(data);
  return;
}






function getJustRow_(a){
  var a2 = [];
  var skip = 1;
  for (i in a){
    if (skip < 1){
    a2.push(a[i][0]); 
    }
    skip--;
  }
  return a2
}
