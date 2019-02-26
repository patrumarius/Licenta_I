$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login/loginScenarios.feature");
formatter.feature({
  "line": 1,
  "name": "Login into app",
  "description": "As a valid user\r\nI want to login into the app\r\nSo that I can see my mails.",
  "id": "login-into-app",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Succes Login",
  "description": "",
  "id": "login-into-app;succes-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I use Valid \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I perform login Action",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see my account mails.",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "Succes Data",
  "description": "",
  "id": "login-into-app;succes-login;succes-data",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 13,
      "id": "login-into-app;succes-login;succes-data;1"
    },
    {
      "cells": [
        "serenitytraining",
        "Password01"
      ],
      "line": 14,
      "id": "login-into-app;succes-login;succes-data;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Succes Login",
  "description": "",
  "id": "login-into-app;succes-login;succes-data;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I use Valid \"serenitytraining\" and \"Password01\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I perform login Action",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see my account mails.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "serenitytraining",
      "offset": 13
    },
    {
      "val": "Password01",
      "offset": 36
    }
  ],
  "location": "LoginTestStepDef.i_use_Valid_and(String,String)"
});
formatter.result({
  "duration": 301226173,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDef.i_perform_login_Action()"
});
formatter.result({
  "duration": 111589,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDef.i_should_see_my_account_mails()"
});
formatter.result({
  "duration": 78769,
  "status": "passed"
});
});