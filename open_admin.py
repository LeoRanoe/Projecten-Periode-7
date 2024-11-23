import webbrowser

username = input("Enter username: ")
password = input("Enter password: ")

if username == "admin" and password == "password123":
    webbrowser.open("http://127.0.0.1:5500/dist/admin.html")
else:
    print("Access Denied!")
