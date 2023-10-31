Steps:
1. Start your docker

2. open windows powershell and run the below command,

docker run -p 4000:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:22.0.5 start-dev

Your keycloak server will be running on 4000 port.

3. visit 'http://localhost:4000/' and click on Administration Console.

4. Enter 'admin' as the username and the password.(You will be guided to the master realm Dashboard)

5. Create a new realm called 'myrealm' by clicking on the dropdown which is default selected to master.

6. create a new client called 'myclient' (Clients->Create client)-

Client ID - myclient
Name - myclient
Valid redirect URIs - http://127.0.0.1:5173/
Valid post logout redirect URIs - http://127.0.0.1:5173/
Web origins - http://127.0.0.1:5173/

The rest needs to be set on default

7. Add a user so that u can login when the react app starts(Users->Add user)-

username - desired username
Email - desired email
First name - desired first name
Last name - desired last name

Click create
Afterwards it will guide you to user details page

User details->Credentials->set password

password - desired password
password confirmation - password
untick the temporary radio button
and click save

8. run the react app(App created using vite + React)
clone the react app through the repo and run the command 'npm run dev'

9. Create and assign roles for users
(Realm roles->Create role) to create roles

User details->role mapping->select the created role->assign the role
