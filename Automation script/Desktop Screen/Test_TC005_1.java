// Associated Manual Test Case Details:
// Test Case ID: TC005-1
// Title: User successfully navigates to Create Account page by clicking on "New Account" option in Navbar
// Steps: 1. Open the application in a web browser
2. Locate the Navbar at the top of the page
3. Click on the "New Account" option
4. Verify that the user is redirected to the Create Account page
// Expected Result: The user should be successfully navigated to the Create Account page.

```java
package test.java.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class TC005_1 extends BaseClass {

    @BeforeMethod
    public void initialize() {
        setUp(); // Initialize WebDriver (inherited from BaseClass)
    }

    @Test
    public void navigateToCreateAccountPage() {
        driver.get(config.getAppURL());

        WebElement newAccountOption = driver.findElement(By.xpath("//div[@id='top-bar']//div[text()='New Account']"));
        newAccountOption.click();

        WebElement createAccountTitle = driver.findElement(By.xpath("//h1[@id='summary-title' and text()='My Summary']"));
        String actualTitle = createAccountTitle.getText();
        String expectedTitle = "My Summary";
        Assert.assertEquals(actualTitle, expectedTitle, "Title does not match. User not navigated to Create Account page.");

        WebElement createAccountDescription = driver.findElement(By.xpath("//p[@id='summary-description' and text()='Welcome to your Desktop page! Here, you can view your summary.']"));
        String actualDescription = createAccountDescription.getText();
        String expectedDescription = "Welcome to your Desktop page! Here, you can view your summary.";
        Assert.assertEquals(actualDescription, expectedDescription, "Description does not match. User not navigated to Create Account page.");
    }

    @AfterMethod
    public void cleanup() {
        tearDown(); // Quit WebDriver (inherited from BaseClass)
    }
}
```