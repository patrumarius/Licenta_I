package net.serenity.bdd.junit.cucumber.stepDef;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginTestStepDef {

	@Given("^I use Valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_use_Valid_and(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("Given");
	}

	@When("^I perform login Action$")
	public void i_perform_login_Action() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("When");
	}

	@Then("^I should see my account mails\\.$")
	public void i_should_see_my_account_mails() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Then");
	}
}
