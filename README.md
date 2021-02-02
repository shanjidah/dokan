CodeceptJS END 2 END Testing


Step 1
Server Configuration
Selenium server installation:
npm install selenium-standalone@latest -g
selenium-standalone install
selenium-standalone start


Step 2
Getting started
git clone https://github.com/Rink9/wp-erp.git
cd wp-erp
npm install
Step 3
Running Test
Run The following command:

npx codeceptjs run tests/e2e/explore_01_backend_test.js 
or 
npx codeceptjs run tests/e2e/modules/auction_product_01_admin_settings_test.js

// write the test scenario which you want to run.

Run Test Suit:

npx codeceptjs run --grep @auction // Run multiple test cases at a time by using --grep function