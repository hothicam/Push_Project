package test;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import runner.TestRunner;

public class loginTest extends pageProvider {
    @Given("^Open website (.*)$")
    public void Open_banking_website(String website) throws InterruptedException{
        Thread.sleep(3000);
        TestRunner.driver.get(website);
        TestRunner.driver.manage().window().maximize();
        Thread.sleep(3000);
    }


}
