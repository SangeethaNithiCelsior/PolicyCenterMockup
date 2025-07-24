// Associated Manual Test Case Details:
// Test Case ID: TC003-1
// Title: Verify all predefined products are displayed in the table on the NewSubmissionsPage
// Steps: 1. Navigate to the NewSubmissionsPage
2. Check the table displaying predefined products
3. Verify that all predefined products are listed in the table
// Expected Result: All predefined products are displayed in the table without any missing entries.

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
    public void verifyPredefinedProductsDisplayed() {
        driver.get(config.getAppURL());

        WebElement productTable = driver.findElement(By.id("product-table"));
        WebElement commercialPropertyButton = productTable.findElement(By.id("select-commercial-property"));
        WebElement generalLiabilityButton = productTable.findElement(By.id("select-general-liability"));
        WebElement cyberButton = productTable.findElement(By.id("select-cyber"));
        WebElement inlandMarineButton = productTable.findElement(By.id("select-inland-marine"));
        WebElement workersCompensationButton = productTable.findElement(By.id("select-workers-compensation"));

        Assert.assertTrue(commercialPropertyButton.isDisplayed(), "Commercial Property button is not displayed");
        Assert.assertTrue(generalLiabilityButton.isDisplayed(), "General Liability button is not displayed");
        Assert.assertTrue(cyberButton.isDisplayed(), "Cyber button is not displayed");
        Assert.assertTrue(inlandMarineButton.isDisplayed(), "Inland Marine button is not displayed");
        Assert.assertTrue(workersCompensationButton.isDisplayed(), "Workers' Compensation button is not displayed");
    }

    @AfterMethod
    public void cleanup() {
        tearDown(); // Quit WebDriver (inherited from BaseClass)
    }
}
```