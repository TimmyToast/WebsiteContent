import unittest

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
capabilities = DesiredCapabilities.FIREFOX.copy()
capabilities['marionette'] = False
 
class GoogleSearchTest(unittest.TestCase):
 
    def setUp(self):
        # Create a new Firefox driver instance
        self.driver = webdriver.Firefox(capabilities=capabilities)
 
    def tearDown(self):
        # Close the browser after running the tests
        self.driver.quit()
 
    def testSearch(self):
        # Trigger a Google Search
        self.driver.get('http://www.google.com')
        self.assertEqual(self.driver.title, 'Google')
        searchElement = self.driver.find_element_by_name('q')
        searchElement.send_keys('6020 peaks')
        searchElement.submit()
        WebDriverWait(self.driver, 10).until(EC.title_contains('6020 peaks'))
        self.assertTrue(self.driver.title.startswith('6020 peaks'))