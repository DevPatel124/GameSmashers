from selenium import webdriver
from time import sleep
from selenium.webdriver.firefox.firefox_binary import FirefoxBinary
binary = FirefoxBinary(r'C:\Program Files\Mozilla Firefox\firefox.exe')
options = webdriver.FirefoxOptions()
options.binary = binary
driver = webdriver.Firefox( options=options)
driver.get("file:///C:/Users/DELL/OneDrive/Desktop/GameSmashers/index.html")
print ("Opened User Login Page")
sleep(4)

login_box = driver.find_element('id','open_login')
login_box.click()
sleep(4)
username_box = driver.find_element("id",'email-login')
username_box.send_keys("devd.patel1204@gmail.com")
print ("Email Id entered")
sleep(4)
password_box = driver.find_element('id','pass-login')
password_box.send_keys("1234578")
print ("Password entered")
sleep(4)
login_box = driver.find_element('id','sub-login')
login_box.click()
sleep(4)
# if driver.current_url == "https://main--majestic-lily-427e71.netlify.app/user":
# print("Test passed! ->Login Successfully")
# else:
# print("Test Passed. ->Invalid User")
print ("Testing Complete !")
input('Press anything to quit')
driver.quit()
print("Finished")