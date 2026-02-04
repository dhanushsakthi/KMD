import { Builder, By, Key, until } from 'selenium-webdriver';
import { fileURLToPath } from 'url';

// Environment configuration
const TARGET_URL = 'http://localhost:5173';
const BROWSER = 'chrome';

async function runRegressionTests() {
    let driver;

    try {
        console.log('Starting regression tests...');
        driver = await new Builder().forBrowser(BROWSER).build();

        // 1. Home Page Load Test
        console.log('Test 1: Home Page Load');
        await driver.get(TARGET_URL);
        await driver.wait(until.titleIs('KMD Food Products'), 20000);
        console.log('PASS: Title is correct.');

        // Check for Hero section (using a known element in Hero, e.g., h1 text)
        const heroHeading = await driver.findElement(By.xpath("//h1[contains(text(), 'Bringing Authentic')]"));
        if (await heroHeading.isDisplayed()) {
            console.log('PASS: Hero section is visible.');
        } else {
            console.error('FAIL: Hero section not visible.');
        }


        // 2. Navigation Test
        console.log('\nTest 2: Navigation');

        // Go to Products
        const productsLink = await driver.findElement(By.linkText('Products'));
        await productsLink.click();
        await driver.wait(until.urlContains('/products'), 20000);
        console.log('PASS: My Products navigation works.');

        // Go to About
        const aboutLink = await driver.findElement(By.linkText('About Us'));
        await aboutLink.click();
        await driver.wait(until.urlContains('/about'), 20000);
        console.log('PASS: About Us navigation works.');

        // Go back Home
        const homeLink = await driver.findElement(By.linkText('Home'));
        await homeLink.click();
        await driver.wait(until.urlIs(`${TARGET_URL}/`), 20000);
        console.log('PASS: Home navigation works.');


        // 3. Search Functionality
        console.log('\nTest 3: Search Functionality');
        const searchInput = await driver.findElement(By.css('input[placeholder="Search export products..."]'));
        await searchInput.sendKeys('Rice', Key.RETURN);
        await driver.wait(until.urlContains('search=Rice'), 20000);
        console.log('PASS: Search URL updated correctly.');


        // 4. Contact Form Submission (Non-destructive/Safe)
        console.log('\nTest 4: Contact Form Submission');
        await driver.get(`${TARGET_URL}/contact`);

        const nameInput = await driver.findElement(By.name('name'));
        const emailInput = await driver.findElement(By.name('email'));
        const subjectSelect = await driver.findElement(By.name('subject'));
        const messageInput = await driver.findElement(By.name('message'));
        const submitBtn = await driver.findElement(By.css('button[type="submit"]'));

        await nameInput.sendKeys('Selenium Test User');
        await emailInput.sendKeys('test@example.com');
        await subjectSelect.sendKeys('Other');
        await messageInput.sendKeys('This is a regression test message. Please ignore.');

        // Click submit
        await submitBtn.click();

        // Verify success message
        const successMsg = await driver.wait(until.elementLocated(By.xpath("//span[contains(text(), 'Thank you!')]")), 20000);
        if (await successMsg.isDisplayed()) {
            console.log('PASS: Form submitted successfully (Client-side).');
        } else {
            console.error('FAIL: Success message not displayed.');
        }

        console.log('\nAll regression tests completed successfully.');

    } catch (error) {
        console.error('An error occurred during testing:', error);
        process.exit(1);
    } finally {
        if (driver) {
            await driver.quit();
        }
    }
}

runRegressionTests();
