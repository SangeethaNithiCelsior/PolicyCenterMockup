// Associated Manual Test Case Details:
// Test Case ID: TC001-2
// Title: Invalid username and valid password provided, click on Login button
// Steps: 1. Enter an invalid username in the username field
2. Enter a valid password in the password field
3. Click on the Login button
// Expected Result: User receives an error message indicating invalid username

```java
package test.java.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class TC001_2 extends BaseClass {

    @BeforeMethod
    public void initialize() {
        setUp(); // Initialize WebDriver (inherited from BaseClass)
    }

    @Test
    public void invalidUsernameValidPassword() {
        driver.get(config.getAppURL());

        WebElement usernameInput = driver.findElement(By.xpath("//input[@id='username']"));
        usernameInput.sendKeys("invalidUsername");

        WebElement passwordInput = driver.findElement(By.xpath("//input[@id='password']"));
        passwordInput.sendKeys(config.getPassword());

        WebElement loginButton = driver.findElement(By.xpath("//button[text()='Login']"));
        loginButton.click();

        WebElement errorMessage = driver.findElement(By.xpath("//p[@id='login-error']"));
        String actualErrorMessage = errorMessage.getText();
        String expectedErrorMessage = "Your username or password may be incorrect. Please try again";
        Assert.assertEquals(actualErrorMessage, expectedErrorMessage, "Error message mismatch");

    }

    @AfterMethod
    public void cleanup() {
        tearDown(); // Quit WebDriver (inherited from BaseClass)
    }
}
```