// Associated Manual Test Case Details:
// Test Case ID: TC003-1
// Title: Verify "Reset Password" button is disabled when both password fields are are empty
// Steps: 1. Navigate to the "Reset Password" page
2. Leave both password fields empty
3. Check if the "Reset Password" button is disabled
// Expected Result: The "Reset Password" button should be disabled.

```java
package test.java.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class TC003_1 extends BaseClass {

    @BeforeMethod
    public void initialize() {
        setUp(); // Initialize WebDriver (inherited from BaseClass)
    }

    @Test
    public void verifyResetPasswordButtonDisabled() {
        driver.get(config.getAppURL());

        WebElement newPasswordInput = driver.findElement(By.xpath("//input[@id='newPassword']"));
        WebElement confirmPasswordInput = driver.findElement(By.xpath("//input[@id='confirmPassword']"));
        WebElement resetPasswordButton = driver.findElement(By.xpath("//button[text()='Reset Password']"));

        // Leave both password fields empty
        newPasswordInput.clear();
        confirmPasswordInput.clear();

        // Check if the "Reset Password" button is disabled
        Assert.assertFalse(resetPasswordButton.isEnabled(), "Reset Password button should be disabled.");

        // Additional validation can be added here

    }

    @AfterMethod
    public void cleanup() {
        tearDown(); // Quit WebDriver (inherited from BaseClass)
    }
}
```