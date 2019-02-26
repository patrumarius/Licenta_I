Feature: Login into app
As a valid user
I want to login into the app
So that I can see my mails.

Scenario Outline: Succes Login

Given I use Valid "<userName>" and "<password>"
When I perform login Action
Then I should see my account mails.

Examples: Succes Data
|userName|password|
|serenitytraining|Password01|