package test;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import pages.loginPage;
import runner.TestRunner;

public class pageProvider {
    private static loginPage login;

    public  static loginPage getLogin(){
        if (login == null){
            login = PageFactory.initElements(TestRunner.driver, loginPage.class);
        }
        return login;
    }
}
