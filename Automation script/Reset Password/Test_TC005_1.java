// Associated Manual Test Case Details:
// Test Case ID: TC005-1
// Title: Redirect to login page after successful password reset
// Steps: 1. Open the browser and navigate to the website's password reset page.
2. Enter a valid email address and request a password reset.
3. Check the email inbox for the password reset link.
4. Click on the password reset link and enter a new password.
5. Click on the "Reset Password" button.
6. Verify that the page redirects to the login page.
// Expected Result: After successful password reset, the user should be redirected to the login page.

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
    public void resetPasswordAndRedirectToLoginPage() {
        driver.get(config.getAppURL());

	WebElement resetPasswordBtn = driver.findElement(By.xpath("//button[@class='LoginPage_resetPasswordLink__uqiyo']"));
        resetPasswordBtn.click();

        WebElement newPasswordInput = driver.findElement(By.xpath("//input[@id='newPassword']"));
        newPasswordInput.sendKeys("newPassword123");

        WebElement confirmPasswordInput = driver.findElement(By.xpath("//input[@id='confirmPassword']"));
        confirmPasswordInput.sendKeys("newPassword123");

        WebElement resetButton = driver.findElement(By.xpath("//button[text()='Reset Password']"));
        resetButton.click();

        wait.until(ExpectedConditions.urlContains("/login"));
        String currentUrl = driver.getCurrentUrl();
        Assert.assertEquals(currentUrl, config.getAppURL() + "/login", "Page did not redirect to login page after password reset");
    }

    @AfterMethod
    public void cleanup() {
        tearDown(); // Quit WebDriver (inherited from BaseClass)
    }
}
```