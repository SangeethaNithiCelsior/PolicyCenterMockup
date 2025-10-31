// Associated Manual Test Case Details:
// Test Case ID: TC002-1
// Title: Attempt to submit the form with one mandatory field empty
// Steps: 1. Fill in all the fields on the form except for one mandatory field.
2. Click on the submit button.
// Expected Result: An error message should be displayed indicating that the mandatory field is empty and the form should not be submitted.

```java
package test.java.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class TC002_1 extends BaseClass {

    @BeforeMethod
    public void initialize() {
        setUp(); // Initialize WebDriver (inherited from BaseClass)
    }

    @Test
    public void submitFormWithMandatoryFieldEmpty() {
        driver.get(config.getAppURL());

        WebElement organizationInput = driver.findElement(By.id("organization"));
        organizationInput.sendKeys("Test Organization");

        WebElement dateInput = driver.findElement(By.id("dateApplicationReceived"));
        dateInput.sendKeys("2022-12-31");

        WebElement nameInput = driver.findElement(By.id("name"));
        nameInput.sendKeys("Test User");

        WebElement address1Input = driver.findElement(By.id("addressLine1"));
        address1Input.sendKeys("123 Test Street");

        WebElement cityInput = driver.findElement(By.id("city"));
        cityInput.sendKeys("Test City");

        WebElement countyInput = driver.findElement(By.id("county"));
        countyInput.sendKeys("Test County");

        WebElement stateDropdown = driver.findElement(By.id("state"));
        stateDropdown.sendKeys("Alabama");

        WebElement updateButton = driver.findElement(By.id("update-button"));
        updateButton.click();

        WebElement errorMessage = driver.findElement(By.id("error-message"));
        Assert.assertEquals(errorMessage.getText(), "Please fill in all mandatory fields.", "Error message mismatch");

        Assert.assertTrue(errorMessage.isDisplayed(), "Error message not displayed");

        // Additional validation can be added here

    }

    @AfterMethod
    public void cleanup() {
        tearDown(); // Quit WebDriver (inherited from BaseClass)
    }
}
```