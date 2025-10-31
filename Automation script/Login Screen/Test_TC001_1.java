// Associated Manual Test Case Details:
// Test Case ID: TC001-1
// Title: Valid username and password provided, click on Login button successfully
// Steps: 1. Enter a valid username in the username field
2. Enter a valid password in the password field
3. Click on the Login button
// Expected Result: User is successfully logged in to the system

```java
package test.java.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class TC001_1 extends BaseClass {

    @BeforeMethod
    public void initialize() {
        setUp(); // Initialize WebDriver (inherited from BaseClass)
    }

    @Test
    public void login() {
        driver.get(config.getAppURL());

        WebElement usernameInput = driver.findElement(By.xpath("//input[@id='username']"));
        usernameInput.sendKeys(config.getUsername());

        WebElement passwordInput = driver.findElement(By.xpath("//input[@id='password']"));
        passwordInput.sendKeys(config.getPassword());

        WebElement loginButton = driver.findElement(By.xpath("//button[text()='Login']"));
        loginButton.click();

        // Wait for redirect to happen
        wait.until(ExpectedConditions.urlContains("/desktop"));

        // Assert the redirected URL
        Assert.assertEquals(driver.getCurrentUrl(), config.getAppURL() + "/desktop", "User is not logged in successfully");
    }

    @AfterMethod
    public void cleanup() {
        tearDown(); // Quit WebDriver (inherited from BaseClass)
    }
}
```