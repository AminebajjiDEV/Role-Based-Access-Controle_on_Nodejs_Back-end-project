# Role-Based-Access-Controle_Back-end-project
RBAC implementation runing on Nodejs / Express &amp; Mongodb 

- This back-end project implements Role-Based Access Control (RBAC) using Express.js, JWT for authentication, and middleware(auth & role middleware) to enforce authorization. Upon registration, users are assigned a role (admin, manager, or user). During login, a JWT token is generated containing the user’s ID and role. Protected routes (/admin, /manager, /user) use a combination of middleware to:

- 1 verifyToken – check if the request has a valid JWT token.

- 2 authorizeRole("admin") – check if the authenticated user has permission to access the route.

  ## Project root structure & files relationships
  
```
project-root/
│
├── src/
│   ├── config/
│   │   └── dbConnect.js      → Establishes MongoDB connection
│   │
│   ├── controllers/
│   │   └── authController.js → Handles logic for registration & login (uses USER model from userModel.js)
│   │
│   ├── midellwares/
│   │   ├── authMidellware.js → Verifies JWT token from request header
│   │   └── roleMidellware.js → Restricts access based on user role
│   │
│   ├── models/
│   │   └── userModel.js      → Mongoose schema defining user structure including roles
│   │
│   ├── routes/
│   │   ├── authRoutes.js     → Routes for `/register` and `/login` → uses authController
│   │   ├── userRoutes.js     → Protected routes for admin/manager/user
│   │
│   
├──  index.js                 → Express app setup, route mounting, and server start
├── .env                      → Environment variables (DB URI, JWT_SECRET, PORT)
├── package.json              → Lists dependencies & dev commands

```

  ## Sequence diagrame representing mutiple scenarios


![sequence diagrame](https://github.com/AminebajjiDEV/Role-Based-Access-Controle_on_Nodejs_Back-end-project/blob/main/pictures/Sequence%20diagram.png)


  ## Benefits of RBAC:
  - To restrict system access only to authorized users depending on what role they have. This implementation ensures that users can only perform actions appropriate to their roles & responsibilities.
    
```
 - Security – Prevents unauthorized users from accessing sensitive operations or data.

 - Simplicity – Easier to manage permissions by assigning roles rather than per-user settings.

 - Scalability – New users can inherit correct permissions automatically based on their role.

 - Compliance – Helps meet data security regulations by enforcing least-privilege principles.
```
  ## Limitations of RBAC :
```
- Requires Business Knowledge: Implementing RBAC effectively demands a clear understanding of the organization’s structure and responsibilities, or roles may be misassigned.

- Demands Thoughtful Implementation: Poor initial planning can result in confusing or overlapping permissions, making the system hard to maintain.

- Lacks Flexibility: RBAC can struggle with edge cases where individual users need temporary or customized access beyond their role.

- Leads to Role Explosion: As unique permission combinations increase, more roles must be created, resulting in a complex and bloated role hierarchy.
```



<h1>Contributing</h1>

- I’m open to contributions! If you have any ideas for improvements, bug fixes, or want to add new features, feel free to fork the repository and submit a pull request. Here’s how you can get involved:

<h3>Submit a Pull Request:</h3>

- Go back to the original repository and submit a pull request.

<h1>License</h1>
   <h3>This project is licensed under the MIT License. Feel free to check out the LICENSE file for more details.</h3>
