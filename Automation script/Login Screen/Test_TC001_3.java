// Associated Manual Test Case Details:
// Test Case ID: TC001-3
// Title: Valid username and invalid password provided, click on Login button
// Steps: 1. Enter a valid username in the username field
2. Enter an invalid password in the password field
3. Click on the Login button
// Expected Result: User receives an error message indicating invalid password

```java
package test.java.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class TC001_3 extends BaseClass {

    @BeforeMethod
    public void initialize() {
        setUp(); // Initialize WebDriver (inherited from BaseClass)
    }

    @Test
    public void loginWithInvalidPassword() {
        driver.get(config.getAppURL());

        WebElement usernameInput = driver.findElement(By.id("username"));
        usernameInput.sendKeys(config.getUsername());

        WebElement passwordInput = driver.findElement(By.id("password"));
        passwordInput.sendKeys("invalidPassword");

        WebElement loginButton = driver.findElement(By.xpath("//button[text()='Login']"));
        loginButton.click();

        WebElement errorMessage = driver.findElement(By.id("login-error"));
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