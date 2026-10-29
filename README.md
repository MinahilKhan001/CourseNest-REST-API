# CourseNest — Express.js REST API (Modular MVC)

Online course management project with **Authentication**, **Category CRUD**, and **Course CRUD**. This is a separate example project with its own app name and database. It uses a local JSON file, so MongoDB is not needed. The dataset starts empty for each student.

## Requirements
- Node.js 18+ (includes npm)
- VS Code
- Postman

## Quick start on Windows
1. Extract this ZIP (don't run it inside the ZIP).
2. Double-click **START_HERE.bat**. Leave the terminal window open.
3. Open **http://localhost:5050** in your browser. You should see `CourseNest Learning API is running`.
4. In Postman: **Import** → choose `postman/CourseNest-API.postman_collection.json`.
5. Run the requests from top to bottom. Registration uses a fresh email every time, and login automatically saves the Bearer token.

Alternate start in VS Code terminal:

```powershell
npm.cmd install
npm.cmd start
```

**Note:** Port is `5050`, so this project can run alongside another server using port `5000`. If you customize the port in `.env`, also update the Postman collection's `baseUrl` variable.

## API endpoints

| HTTP | Path | Purpose | Authentication |
|---|---|---|---|
| POST | /api/auth/register | Register (201) | Public |
| POST | /api/auth/login | Login (200) | Public |
| GET | /api/categories | List categories (200) | Public |
| GET | /api/categories/:id | Get a category (200/404) | Public |
| POST | /api/categories | Create category (201/400) | Bearer token |
| PUT | /api/categories/:id | Update category (200) | Bearer token |
| DELETE | /api/categories/:id | Delete category (200) | Bearer token |
| GET | /api/courses | List courses (200) | Public |
| GET | /api/courses/:id | Get course (200/404) | Public |
| POST | /api/courses | Create course (201/400) | Bearer token |
| PUT | /api/courses/:id | Update course (200) | Bearer token |
| DELETE | /api/courses/:id | Delete course (200) | Bearer token |

Use `Content-Type: application/json`. Login returns a JWT that must be sent as `Authorization: Bearer <token>` for write requests. The Postman collection handles the token automatically after login.

## Mandatory Postman evidence

| Evidence case | Postman request(s) | Expected |
|---|---|---|
| 1 | 01 Register **and** 01 Login | 201 and 200 |
| 2 | 02 Create Category | 201 Created |
| 3 | 03 Get Categories | 200 OK |
| 4 | 04 Missing Category Name | 400 Bad Request |
| 5 | 05 Unknown Route | 404 Not Found |

These are **six screenshots** (register and login are separate) across **five cases**. Show the Postman top bar, URL, HTTP method, request Headers and response status/body. Put your **own name and roll number** at the top of each printed evidence page. Print and submit as required.

Extra requests in the Postman collection demonstrate **full Category and Course CRUD**. Run those too to verify the assignment's functionality, but the teacher's five evidence cases are the mandatory printouts.

## Folders

```text
src/
  controllers/      API logic and validation
  models/           JSON storage operations
  routes/           API endpoints
  middleware/       JWT authentication
  utils/            JSON data store
postman/            Ready-to-import collection
screenshots/        Your real Postman evidence
storage/            Auto-created database (excluded from Git)
scripts/            Auto-create local JWT config
```

## GitHub upload

Create a new repository **with your own GitHub account**. Upload the source code and your real `screenshots` folder, but do **NOT** upload `node_modules`, `.env`, or `storage/db.json`. The `.gitignore` file already excludes them when using Git. If uploading manually through GitHub's website, deselect them yourself.

**Security:** Passwords are hashed using bcrypt, and JWT secrets are randomly generated in the local `.env`. The `.env` file and local data should stay private. This filesystem database is intended only for a learning assignment, not multi-server production use.
