package net.serenity.bdd.junit.cucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(features="src/test/resources/features/",
				plugin= {"pretty","html:traget/cucumber","json:target/json/cucumber.json"})
public class Runner {
	
}
