import webbrowser
import hashlib
import getpass

# Predefined username and hashed password
username = "admin"
stored_password_hash = hashlib.sha256("password123".encode()).hexdigest()

# User input
input_username = input("Enter username: ")
input_password = getpass.getpass("Enter password: ")  

# Hash the input password
input_password_hash = hashlib.sha256(input_password.encode()).hexdigest()

# Authenticate
if input_username == username and input_password_hash == stored_password_hash:
    webbrowser.open("http://127.0.0.1:5500/dist/admin.html")
else:
    print("Access Denied!")
