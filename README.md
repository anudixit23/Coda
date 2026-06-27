# Coda

> **Status:** Under Active Development

Coda is an AI-powered browser IDE that enables developers to build, edit, and run full-stack applications entirely within the browser. Built with **Next.js**, **WebContainers**, **Monaco Editor**, and **Ollama**, it provides an integrated development environment with AI-assisted coding, browser-based execution, and support for multiple project templates.

## Features

* Browser-native development powered by WebContainers
* AI-assisted code completion using local LLMs through Ollama
* Monaco Editor with syntax highlighting, formatting, and keyboard shortcuts
* Custom file explorer for creating, organizing, and managing project files
* Embedded terminal powered by xterm.js
* Support for multiple project templates including React, Next.js, Express, Vue, Angular, and Hono
* Secure authentication with Google and GitHub OAuth using NextAuth
* Responsive interface built with Tailwind CSS and shadcn/ui
* Light and Dark mode support

## Tech Stack

### Frontend

* Next.js 15 (App Router)
* React
* TypeScript
* Tailwind CSS
* shadcn/ui

### Editor & Runtime

* Monaco Editor
* WebContainers
* xterm.js

### AI

* Ollama
* Local LLMs

### Authentication

* NextAuth
* Google OAuth
* GitHub OAuth

### Database

* MongoDB

## Architecture

```
Client
   │
   ▼
Next.js App Router
   │
   ├── Authentication (NextAuth)
   ├── File Explorer
   ├── Monaco Editor
   ├── AI Services
   ├── Terminal (xterm.js)
   └── WebContainers
            │
            ▼
      Browser Runtime
```

## Core Modules

### Authentication

* Google OAuth
* GitHub OAuth
* Protected Routes

### Editor

* Monaco Editor
* Syntax Highlighting
* Code Formatting
* Keyboard Shortcuts
* AI Code Completion

### File Management

* Create Files
* Create Folders
* Rename Files
* Delete Files
* Project Explorer

### Runtime

* Browser-based application execution
* Integrated Terminal
* Multiple Framework Templates

### AI Assistant

* Local LLM Integration with Ollama
* AI Code Suggestions
* Context-aware Code Completion

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/anudixit23/Coda
cd coda
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env.local` file.

```env
AUTH_SECRET=

AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=

AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

DATABASE_URL=

NEXTAUTH_URL=http://localhost:3000
```

### Start Ollama

Ensure Ollama is installed and running.

```bash
ollama run codellama
```

You may also use any compatible local code-generation model supported by Ollama.

### Run the Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

## Keyboard Shortcuts

| Shortcut     | Action                     |
| ------------ | -------------------------- |
| Ctrl + Space | Trigger AI Code Completion |
| Double Enter | Trigger AI Suggestion      |
| Tab          | Accept AI Suggestion       |

## Future Improvements

* AI-powered chat assistant with project context
* Git integration
* Live collaborative editing
* Extension/plugin support
* Docker-based project templates
* Persistent cloud workspaces
* Workspace sharing
* Integrated debugging tools

## License

This project is intended for educational and portfolio purposes.

## Acknowledgements

* Monaco Editor
* WebContainers
* Ollama
* xterm.js
* NextAuth
* Next.js


