
# Hello Full Stack

## Purpose

A simple full-stack application demonstrating how a browser communicates with a Node.js backend.

## Technologies

- HTML
- JavaScript
- Node.js (built-in HTTP module)
- Git and GitHub

## Project Structure

```text
hello-full-stack/
├── server.js
├── .gitignore
└── README.md
```

## How to Run

1. Open Terminal.
2. Navigate to the project folder:

```bash
cd ~/Projects/hello-full-stack
```

3. Start the server:

```bash
node server.js
```

4. Open http://localhost:3000/ in your browser.

5. Press Control + C in the server's Terminal to stop it.

## How It Works

1. Browser sends an HTTP GET request.
2. Node.js receives the request.
3. The server responds with status 200, an HTML content-type header, and the HTML document.
4. Browser renders the HTML page.

## Manual Testing

- Confirm that the server starts.
- Check the heading, paragraph, and browser tab title.
- Inspect the HTTP response using Chrome DevTools.
- Stop the server and verify that a new request fails.
- Restart the server and confirm that the page works again.

## Limitations

- Runs locally only.
- No database or authentication.
- No API or additional routes.
- No automatic server restart.
- Requires Node.js to be installed.

## What I Learned

- Difference between frontend and backend.
- How Node.js runs a server.
- HTTP requests and responses.
- Status codes, headers, and response bodies.
- How to edit, restart, and debug an application.
- How Git records project history.
