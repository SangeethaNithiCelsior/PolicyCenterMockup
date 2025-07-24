// Associated Manual Test Case Details:
// Test Case ID: TC006-4
// Title: User is redirected to the New Submissions page when clicking on "New Submission" option from a different page
// Steps: 1. Launch the application and log in with valid credentials.
2. Navigate to a different page within the application.
3. Locate the Navbar at the top of the page.
4. Click on the "New Submission" option in the Navbar.
5. Click on the "New Submission" option in the Navbar again.
// Expected Result: The user is redirected to the New Submissions page successfully, regardless of the current page.

```java
package test.java.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class TC006_4 extends BaseClass {

    @BeforeMethod
    public void initialize() {
        setUp(); // Initialize WebDriver (inherited from BaseClass)
    }

    @Test
    public void redirectToNewSubmissionsPage() {
        driver.get(config.getAppURL());

        WebElement usernameInput = driver.findElement(By.xpath("//input[@id='username']"));
        usernameInput.sendKeys(config.getUsername());

        WebElement passwordInput = driver.findElement(By.xpath("//input[@id='password']"));
        passwordInput.sendKeys(config.getPassword());

        WebElement loginButton = driver.findElement(By.xpath("//button[text()='Login']"));
        loginButton.click();

        WebElement navbar = driver.findElement(By.id("navbar"));
        WebElement newSubmissionOption = navbar.findElement(By.xpath("//div[text()='New Submission']"));
        newSubmissionOption.click();

        WebElement newSubmissionOptionAgain = navbar.findElement(By.xpath("//div[text()='New Submission']"));
        newSubmissionOptionAgain.click();

        // Wait for redirection to New Submissions page
        WebElement newSubmissionsTitle = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h1[@id='summary-title' and text()='My Summary']"));

        Assert.assertEquals(newSubmissionsTitle.getText(), "My Summary", "User not redirected to New Submissions page");
    }

    @AfterMethod
    public void cleanup() {
        tearDown(); // Quit WebDriver (inherited from BaseClass)
    }
}
```