from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options

def setup_extension():
    EXTENSION_PATH = "../dist"
    chrome_options = Options()
    chrome_options.add_argument(f"--load-extension={EXTENSION_PATH}")

    driver = webdriver.Chrome(options=chrome_options)
    # driver.get("https://www.youtube.com")
    # search_box = driver.find_element(By.NAME, "search_query")
    # search_box.send_keys("Selenium automation")

    # search_box.send_keys(Keys.RETURN)
    return driver
