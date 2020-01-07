$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login banking page",
  "description": "",
  "id": "login-banking-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login banking website",
  "description": "",
  "id": "login-banking-page;login-banking-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open website http://www.way2automation.com/angularjs-protractor/banking/#/login",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "loginTest.Open_banking_website(String)"
});
formatter.result({
  "duration": 8126041300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Login banking website",
  "description": "",
  "id": "login-banking-page;login-banking-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Open website \u003cwebsite\u003e",
  "keyword": "Given "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login-banking-page;login-banking-website;",
  "rows": [
    {
      "cells": [
        "website"
      ],
      "line": 10,
      "id": "login-banking-page;login-banking-website;;1"
    },
    {
      "cells": [
        "http://www.way2automation.com/angularjs-protractor/banking/#/login"
      ],
      "line": 11,
      "id": "login-banking-page;login-banking-website;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Login banking website",
  "description": "",
  "id": "login-banking-page;login-banking-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Open website http://www.way2automation.com/angularjs-protractor/banking/#/login",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.way2automation.com/angularjs-protractor/banking/#/login",
      "offset": 13
    }
  ],
  "location": "loginTest.Open_banking_website(String)"
});
formatter.result({
  "duration": 6037193400,
  "status": "passed"
});
});