// Associated Manual Test Case Details:
// Test Case ID: TC001-1
// Title: User logs in with valid credentials and accesses NewSubmissionsPage
// Steps: 1. Navigate to the login page
2. Enter valid username and password
3. Click on the login button
4. Verify that the user is redirected to the NewSubmissionsPage
// Expected Result: User successfully logs in and accesses the NewSubmissionsPage

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

        WebElement loginButton = driver.findElement(By.xpath("//button[@id='login-button']"));
        loginButton.click();

        WebElement pageTitle = driver.findElement(By.xpath("//h1[@id='page-title']"));
        wait.until(ExpectedConditions.visibilityOf(pageTitle));
        Assert.assertEquals(pageTitle.getText(), "New Submissions", "Page title does not match");

        WebElement productTable = driver.findElement(By.xpath("//table[@id='product-table']"));
        wait.until(ExpectedConditions.visibilityOf(productTable));
        Assert.assertTrue(productTable.isDisplayed(), "Product table is not displayed");
    }

    @AfterMethod
    public void cleanup() {
        tearDown(); // Quit WebDriver (inherited from BaseClass)
    }
}
```