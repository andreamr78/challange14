Kanban Board

Authentication with JSON Web Tokens (JWTs) is crucial for full-stack applications, as it provides a secure and scalable method for verifying user identities. 
JWTs are compact, URL-safe tokens that encode a user's authentication data, allowing servers to authenticate requests. Additionally, 
JWTs can include metadata and be easily verified and decoded, enhancing security while enabling seamless authentication across various parts of an application.


User Story
AS A member of an agile team
I WANT a Kanban board with a secure login page
SO THAT I can securely access and manage my work tasks 

Acceptance Criteria
GIVEN a Kanban board with a secure login page
WHEN I load the login page
THEN I am presented with form inputs for username and password
WHEN I enter my valid username and password
THEN I am authenticated using JSON Web Tokens (JWT) and redirected to the main Kanban board page
WHEN I enter an invalid username or password
THEN I am presented with an error message indicating that the credentials are incorrect
WHEN I successfully log in
THEN a JWT is stored securely in the client's local storage for subsequent authenticated requests
WHEN I log out
THEN the JWT is removed from the client's local storage and I am redirected to the login page
WHEN I try to access the Kanban board page without being authenticated
THEN I am redirected to the login page
WHEN I remain inactive for a defined period
THEN my session expires, the JWT is invalidated, and I am redirected to the login page upon my next action

SCREENSHOTS:
<img width="909" alt="Screenshot 2025-02-17 at 8 49 17 p m" src="https://github.com/user-attachments/assets/88e82ea0-ba55-4518-856e-0d1aaecb0ea4" />
<img width="1406" alt="Screenshot 2025-02-17 at 8 48 52 p m" src="https://github.com/user-attachments/assets/b51e6c87-982c-44dd-b946-f8e50a6a1455" />
<img width="716" alt="Screenshot 2025-02-17 at 8 48 42 p m" src="https://github.com/user-attachments/assets/8f983555-46bb-4849-a178-0c2a297ba9dd" />
<img width="805" alt="Screenshot 2025-02-17 at 8 48 25 p m" src="https://github.com/user-attachments/assets/72182031-d792-4ebd-bb63-da24eb55353c" />
<img width="1391" alt="Screenshot 2025-02-17 at 8 48 18 p m" src="https://github.com/user-attachments/assets/414fe05e-1934-478c-83dc-f24b4c742213" />
<img width="684" alt="Screenshot 2025-02-17 at 8 47 57 p m" src="https://github.com/user-attachments/assets/47854908-22c9-4527-aaad-b4265a551f10" />
<img width="720" alt="Screenshot 2025-02-17 at 8 47 33 p m" src="https://github.com/user-attachments/assets/65142f15-c238-4ee7-9f6d-aeed45f02cb1" />
