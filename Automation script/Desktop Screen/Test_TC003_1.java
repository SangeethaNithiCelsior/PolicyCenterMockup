// Associated Manual Test Case Details:
// Test Case ID: TC003-1
// Title: Navbar is displayed on DesktopPage
// Steps: 1. Open the DesktopPage on a desktop browser.
2. Look for the Navbar component at the top of the page.
// Expected Result: The Navbar component is displayed at the top of the DesktopPage.

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
    public void verifyNavbarDisplayedOnDesktopPage() {
        driver.get(config.getAppURL());

        WebElement desktopContainer = driver.findElement(By.id("desktop-container"));
        WebElement topBar = desktopContainer.findElement(By.id("top-bar"));
        WebElement navbar = topBar.findElement(By.id("navbar"));

        Assert.assertTrue(navbar.isDisplayed(), "Navbar component is not displayed on DesktopPage");
    }

    @AfterMethod
    public void cleanup() {
        tearDown(); // Quit WebDriver (inherited from BaseClass)
    }
}
```