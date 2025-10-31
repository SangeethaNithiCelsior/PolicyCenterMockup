# Manual Test Cases for New Submissions - PolicyMaster

## Test Suite Information
- **Feature**: New Submissions
- **Module**: Policy Management
- **Application**: PolicyMaster
- **Version**: 1.0
- **Created Date**: July 28, 2025
- **Test Environment**: Development

---

## Test Case 1: New Submissions Page Navigation
**Test Case ID**: NS_TC001  
**Test Case Title**: Verify navigation to New Submissions page from Desktop  
**Test Priority**: High  
**Test Type**: Functional  

### Pre-conditions:
- User is logged into PolicyMaster application
- User is on the Desktop page
- Application is running on the specified environment

### Test Steps:
1. Verify user is on Desktop page (URL contains "/desktop")
2. Locate the navigation bar at the top of the page
3. Click on "Submission" tab in the navigation bar
4. Wait for page to load completely

### Expected Results:
- User is redirected to New Submissions page (URL contains "/new-submissions")
- Page loads without errors
- "Submission" tab is highlighted/active in the navigation bar
- Page title displays "New Submissions"
- Page description displays "Please select a product to proceed with your submission."

### Post-conditions:
- User remains on New Submissions page
- Navigation bar remains functional

---

## Test Case 2: New Submissions Page Content Verification
**Test Case ID**: NS_TC002  
**Test Case Title**: Verify all page elements are displayed correctly  
**Test Priority**: High  
**Test Type**: Functional  

### Pre-conditions:
- User is logged into PolicyMaster application
- User has successfully navigated to New Submissions page

### Test Steps:
1. Verify page header elements:
   - Application name "PolicyMaster" is displayed
   - Navigation bar with all tabs is present
2. Verify page content elements:
   - Page title "New Submissions" is displayed
   - Page description text is visible and correct
   - Product table is displayed
3. Verify product table structure:
   - Table has appropriate headers
   - Table contains product rows
   - Each row has selection mechanism

### Expected Results:
- Page header displays "PolicyMaster" correctly
- Navigation bar contains tabs: Desktop, Account, Submission, Contact, Search, Administration
- Page title "New Submissions" is prominently displayed
- Description text "Please select a product to proceed with your submission." is visible
- Product table is rendered with proper structure
- Table headers are: [Select], Product Name, Product Description, Status

### Post-conditions:
- All page elements remain stable and functional

---

## Test Case 3: Product Table Display and Content
**Test Case ID**: NS_TC003  
**Test Case Title**: Verify product table displays all available products  
**Test Priority**: High  
**Test Type**: Functional  

### Pre-conditions:
- User is on New Submissions page
- Product table is visible

### Test Steps:
1. Examine the product table headers
2. Verify each column header text:
   - Column 1: Select (empty header with select buttons)
   - Column 2: "Product Name"
   - Column 3: "Product Description" 
   - Column 4: "Status"
3. Count the number of product rows displayed
4. Verify each product entry contains:
   - Select button
   - Product name
   - Product description
   - Status information

### Expected Results:
- Table headers are correctly labeled
- Exactly 5 products are displayed:
  1. Commercial Property
  2. General Liability
  3. Cyber
  4. Inland Marine
  5. Workers' Compensation
- Each product row shows:
  - Select button in first column
  - Product name matching product description
  - Status shows "Available" for all products
- Table is properly formatted and readable

### Post-conditions:
- Product table remains accessible and functional

---

## Test Case 4: Product Selection - Commercial Property
**Test Case ID**: NS_TC004  
**Test Case Title**: Verify selection of Commercial Property product  
**Test Priority**: High  
**Test Type**: Functional  

### Pre-conditions:
- User is on New Submissions page
- Product table is displayed with all products
- Commercial Property product is visible and available

### Test Steps:
1. Locate "Commercial Property" row in the product table
2. Verify the product details:
   - Product Name: "Commercial Property"
   - Product Description: "Commercial Property"
   - Status: "Available"
3. Click the "Select" button for Commercial Property
4. Observe system response

### Expected Results:
- Commercial Property row is clearly visible
- Product information is correctly displayed
- Select button is clickable and responsive
- System provides appropriate feedback when button is clicked
- No errors occur during selection process

### Post-conditions:
- User can proceed with Commercial Property submission process
- Other products remain selectable

---

## Test Case 5: Product Selection - General Liability
**Test Case ID**: NS_TC005  
**Test Case Title**: Verify selection of General Liability product  
**Test Priority**: High  
**Test Type**: Functional  

### Pre-conditions:
- User is on New Submissions page
- Product table is displayed with all products
- General Liability product is visible and available

### Test Steps:
1. Locate "General Liability" row in the product table
2. Verify the product details:
   - Product Name: "General Liability"
   - Product Description: "General Liability"
   - Status: "Available"
3. Click the "Select" button for General Liability
4. Observe system response

### Expected Results:
- General Liability row is clearly visible
- Product information is correctly displayed
- Select button is clickable and responsive
- System provides appropriate feedback when button is clicked
- No errors occur during selection process

### Post-conditions:
- User can proceed with General Liability submission process
- Other products remain selectable

---

## Test Case 6: Product Selection - Cyber Insurance
**Test Case ID**: NS_TC006  
**Test Case Title**: Verify selection of Cyber Insurance product  
**Test Priority**: High  
**Test Type**: Functional  

### Pre-conditions:
- User is on New Submissions page
- Product table is displayed with all products
- Cyber product is visible and available

### Test Steps:
1. Locate "Cyber" row in the product table
2. Verify the product details:
   - Product Name: "Cyber"
   - Product Description: "Cyber"
   - Status: "Available"
3. Click the "Select" button for Cyber insurance
4. Observe system response

### Expected Results:
- Cyber row is clearly visible
- Product information is correctly displayed
- Select button is clickable and responsive
- System provides appropriate feedback when button is clicked
- No errors occur during selection process

### Post-conditions:
- User can proceed with Cyber insurance submission process
- Other products remain selectable

---

## Test Case 7: Product Selection - Inland Marine
**Test Case ID**: NS_TC007  
**Test Case Title**: Verify selection of Inland Marine product  
**Test Priority**: High  
**Test Type**: Functional  

### Pre-conditions:
- User is on New Submissions page
- Product table is displayed with all products
- Inland Marine product is visible and available

### Test Steps:
1. Locate "Inland Marine" row in the product table
2. Verify the product details:
   - Product Name: "Inland Marine"
   - Product Description: "Inland Marine"
   - Status: "Available"
3. Click the "Select" button for Inland Marine
4. Observe system response

### Expected Results:
- Inland Marine row is clearly visible
- Product information is correctly displayed
- Select button is clickable and responsive
- System provides appropriate feedback when button is clicked
- No errors occur during selection process

### Post-conditions:
- User can proceed with Inland Marine submission process
- Other products remain selectable

---

## Test Case 8: Product Selection - Workers' Compensation
**Test Case ID**: NS_TC008  
**Test Case Title**: Verify selection of Workers' Compensation product  
**Test Priority**: High  
**Test Type**: Functional  

### Pre-conditions:
- User is on New Submissions page
- Product table is displayed with all products
- Workers' Compensation product is visible and available

### Test Steps:
1. Locate "Workers' Compensation" row in the product table
2. Verify the product details:
   - Product Name: "Workers' Compensation"
   - Product Description: "Workers' Compensation"
   - Status: "Available"
3. Click the "Select" button for Workers' Compensation
4. Observe system response

### Expected Results:
- Workers' Compensation row is clearly visible
- Product information is correctly displayed
- Select button is clickable and responsive
- System provides appropriate feedback when button is clicked
- No errors occur during selection process

### Post-conditions:
- User can proceed with Workers' Compensation submission process
- Other products remain selectable

---

## Test Case 9: Navigation Bar Functionality from New Submissions
**Test Case ID**: NS_TC009  
**Test Case Title**: Verify navigation bar functionality while on New Submissions page  
**Test Priority**: Medium  
**Test Type**: Functional  

### Pre-conditions:
- User is on New Submissions page
- Navigation bar is visible and functional

### Test Steps:
1. Verify all navigation tabs are present and clickable:
   - Desktop
   - Account  
   - Submission (currently active)
   - Contact
   - Search
   - Administration
2. Click on "Desktop" tab
3. Verify navigation to Desktop page
4. Return to New Submissions page
5. Click on "Account" tab
6. Verify navigation to Account/Create Account page

### Expected Results:
- All navigation tabs are visible and properly labeled
- "Submission" tab appears active/highlighted
- Clicking "Desktop" navigates to Desktop page
- Clicking "Account" navigates to Create Account page
- Navigation occurs without errors
- User can successfully return to New Submissions page

### Post-conditions:
- Navigation functionality remains consistent
- User can access all application sections

---

## Test Case 10: Logout Functionality from New Submissions
**Test Case ID**: NS_TC010  
**Test Case Title**: Verify logout functionality from New Submissions page  
**Test Priority**: Medium  
**Test Type**: Functional  

### Pre-conditions:
- User is logged into the application
- User is on New Submissions page
- Logout option is available in navigation

### Test Steps:
1. Locate the logout button/option in the navigation bar
2. Click on the logout button
3. Observe system behavior
4. Verify logout confirmation or direct logout
5. Check final page destination

### Expected Results:
- Logout option is clearly visible and accessible
- Clicking logout triggers appropriate system response
- User receives logout confirmation (if implemented)
- User is redirected to login page
- Session is properly terminated
- User cannot access protected pages without re-authentication

### Post-conditions:
- User is logged out of the system
- Login page is displayed
- Previous session data is cleared

---

## Test Case 11: Page Responsiveness and Performance
**Test Case ID**: NS_TC011  
**Test Case Title**: Verify New Submissions page performance and responsiveness  
**Test Priority**: Low  
**Test Type**: Non-Functional  

### Pre-conditions:
- User has access to New Submissions page
- Standard test environment conditions

### Test Steps:
1. Navigate to New Submissions page
2. Measure page load time
3. Test page responsiveness:
   - Resize browser window
   - Test on different screen resolutions
   - Verify mobile compatibility (if applicable)
4. Test interactive elements:
   - Button hover effects
   - Table scrolling (if applicable)
   - Click response times

### Expected Results:
- Page loads within acceptable time limits (< 3 seconds)
- Page displays correctly on different screen sizes
- Interactive elements respond promptly to user actions
- No performance degradation during normal usage
- User interface remains functional and usable

### Post-conditions:
- Page performance remains consistent
- User experience is satisfactory

---

## Test Case 12: Error Handling and Edge Cases
**Test Case ID**: NS_TC012  
**Test Case Title**: Verify error handling and edge case scenarios  
**Test Priority**: Medium  
**Test Type**: Negative Testing  

### Pre-conditions:
- User is on New Submissions page
- Standard test environment

### Test Steps:
1. Test rapid clicking on select buttons
2. Test simultaneous selection of multiple products (if applicable)
3. Test page behavior with network interruption
4. Test page refresh functionality
5. Test browser back/forward button behavior
6. Test accessibility features (keyboard navigation)

### Expected Results:
- System handles rapid clicks gracefully without errors
- Multiple selections are handled according to business rules
- Page recovers appropriately from network issues
- Page refresh maintains functionality
- Browser navigation works correctly
- Accessibility features function as expected
- Error messages (if any) are user-friendly and informative

### Post-conditions:
- System remains stable under edge conditions
- User experience is maintained even in error scenarios

---

## Business Rules Validation Test Cases

## Test Case 13: Product Availability Validation
**Test Case ID**: NS_TC013  
**Test Case Title**: Verify all products show "Available" status  
**Test Priority**: High  
**Test Type**: Business Rule Validation  

### Pre-conditions:
- User is on New Submissions page
- Product table is loaded

### Test Steps:
1. Review each product in the table
2. Verify status column for each product
3. Confirm all products show "Available" status
4. Verify no products show "Unavailable" or other statuses

### Expected Results:
- All 5 products display "Available" status
- No products show unavailable or disabled status
- Status information is consistent across all products

### Business Rule Validated:
- All insurance products should be available for new submissions

---

## Test Case 14: Product Catalog Completeness
**Test Case ID**: NS_TC014  
**Test Case Title**: Verify complete product catalog is displayed  
**Test Priority**: High  
**Test Type**: Business Rule Validation  

### Pre-conditions:
- User is on New Submissions page
- Product table is displayed

### Test Steps:
1. Count total number of products displayed
2. Verify each required product type is present:
   - Commercial Property
   - General Liability  
   - Cyber Insurance
   - Inland Marine
   - Workers' Compensation
3. Verify no additional unauthorized products are displayed

### Expected Results:
- Exactly 5 products are displayed
- All required product types are present
- No extra or missing products
- Product catalog matches business requirements

### Business Rule Validated:
- New Submissions must display the complete approved product catalog

---

## Test Case Summary

| Test Case ID | Test Case Title | Priority | Type | Status |
|--------------|-----------------|----------|------|--------|
| NS_TC001 | Navigation to New Submissions | High | Functional | Ready |
| NS_TC002 | Page Content Verification | High | Functional | Ready |
| NS_TC003 | Product Table Display | High | Functional | Ready |
| NS_TC004 | Commercial Property Selection | High | Functional | Ready |
| NS_TC005 | General Liability Selection | High | Functional | Ready |
| NS_TC006 | Cyber Insurance Selection | High | Functional | Ready |
| NS_TC007 | Inland Marine Selection | High | Functional | Ready |
| NS_TC008 | Workers' Compensation Selection | High | Functional | Ready |
| NS_TC009 | Navigation Bar Functionality | Medium | Functional | Ready |
| NS_TC010 | Logout Functionality | Medium | Functional | Ready |
| NS_TC011 | Page Performance | Low | Non-Functional | Ready |
| NS_TC012 | Error Handling | Medium | Negative | Ready |
| NS_TC013 | Product Availability Validation | High | Business Rule | Ready |
| NS_TC014 | Product Catalog Completeness | High | Business Rule | Ready |

**Total Test Cases**: 14  
**High Priority**: 9  
**Medium Priority**: 3  
**Low Priority**: 2  

---

## Test Execution Notes

### Environment Requirements:
- PolicyMaster application deployed and accessible
- Valid user credentials for login
- Supported web browsers (Chrome, Firefox, Edge)
- Stable network connection

### Test Data Requirements:
- Valid login credentials
- Test user account with appropriate permissions
- Product catalog data properly configured

### Defect Reporting:
- Report any deviations from expected results
- Include screenshots for visual issues
- Provide detailed steps to reproduce defects
- Categorize defects by severity and priority

---

**Document Version**: 1.0  
**Last Updated**: July 28, 2025  
**Prepared By**: QA Automation Team  
**Reviewed By**: [To be reviewed]  
**Approved By**: [To be approved]
