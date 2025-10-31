// Associated Manual Test Case Details:
// Test Case ID: TC001-1
// Title: Fill in all mandatory fields and submit the form successfully
// Steps: 1. Open the form page
2. Fill in all mandatory fields (e.g., name, email, phone number, address)
3. Click on the submit button
// Expected Result: The form is successfully submitted and a success message is displayed.

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
    public void fillFormAndSubmit() {
        driver.get(config.getAppURL());

        WebElement organizationInput = driver.findElement(By.id("organization"));
        organizationInput.sendKeys("Test Organization");

        WebElement dateInput = driver.findElement(By.id("dateApplicationReceived"));
        dateInput.sendKeys("2022-12-31");

        WebElement nameInput = driver.findElement(By.id("name"));
        nameInput.sendKeys("John Doe");

        WebElement address1Input = driver.findElement(By.id("addressLine1"));
        address1Input.sendKeys("123 Main St");

        WebElement address2Input = driver.findElement(By.id("addressLine2"));
        address2Input.sendKeys("Apt 101");

        WebElement cityInput = driver.findElement(By.id("city"));
        cityInput.sendKeys("Springfield");

        WebElement countyInput = driver.findElement(By.id("county"));
        countyInput.sendKeys("Marion");

        WebElement stateDropdown = driver.findElement(By.id("state"));
        stateDropdown.sendKeys("California");

        WebElement updateButton = driver.findElement(By.id("update-button"));
        updateButton.click();

        WebElement successMessage = driver.findElement(By.xpath("//div[@id='page-content']//div[contains(text(),'Account created successfully')]"));
        Assert.assertTrue(successMessage.isDisplayed(), "Success message not displayed after form submission");
    }

    @AfterMethod
    public void cleanup() {
        tearDown(); // Quit WebDriver (inherited from BaseClass)
    }
}
```