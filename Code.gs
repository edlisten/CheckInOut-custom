//Latest: https://script.google.com/a/macros/arsu.org/s/AKfycbygNRG3LopebMK0Gv0rBeqeyFfJrFx4sen1JWZf3oc/dev


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
  var ss = SpreadsheetApp.openById("1Y8WV8febZB8N0yi8m4g9plJTA_6VWgA8EJKR0qARkR8");
  
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
  Logger.log(data);
//  return;
//  data = [["Bjorn","6th","D'Avignon, Dylan","1","2","3","4"],["Bjorn","6th","Ducharme, Dwight","11","22","33","44"]];
//  Logger.log(data.length);
//  Logger.log(JSON.stringify(data));
  var ss = SpreadsheetApp.openById("1Y8WV8febZB8N0yi8m4g9plJTA_6VWgA8EJKR0qARkR8");
  var sheet = ss.getSheetByName("Data");
//  sheet.getRange(ss.getLastRow()+1, 2, data.length, data[0].length).setValues(data);
  sheet.insertRowAfter(1);
  sheet.getRange(2, 1, 1, data[0].length).setValues(data);
//  sheet.getRange(row, column, numRows, numColumns)
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