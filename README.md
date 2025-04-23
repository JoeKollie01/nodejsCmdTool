📡 Live Runner CLI
=======================
A simple CLI utility that watches JavaScript files and automatically reruns them on changes.

✨ Features
============
✅ File watching using chokidar

✅ Debounced automatic restarting with lodash.debounce

✅ Custom script execution via CLI

✅ Friendly output using chalk

✅ CLI interface powered by caporal

📦 Installation
=================
1. Clone the repository:

git clone <your-repo-url>
cd your-project-folder

2. Install dependencies:
    npm install

3. Link the CLI globally (optional):
    npm link

🚀 Usage
==========
watchit yourScript.js
If no filename is provided, it defaults to index.js.

Example:
==========
watchit index.js

Whenever any file in the directory is added, changed, or deleted, the CLI will automatically re-run the target file.

🛠 Tech Stack
================
.Node.js

.chalk

.chokidar

.lodash.debounce

.caporal

