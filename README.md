# All In One System - Hosting & Tracking Guide

This guide will walk you through hosting your website on **Netlify** and setting up **Server-Side Tracking (SST)** using **Stape.io** and **Google Tag Manager (GTM)**. This setup ensures maximum data accuracy and bypasses most ad-blockers for your analytics.

---

## Part 1: Publishing on GitHub Pages & Hosting on Netlify

Because we are using a pre-compiled Tailwind CSS workflow for maximum performance, you must build the CSS file locally before pushing your code. This ensures both GitHub Pages and Netlify can serve the site instantly without complex build pipelines.

### Step 1: Build the CSS Locally
Before committing your code, run the Tailwind build command in your terminal to generate the final CSS file:
```bash
npm install
npm run build:css
```
*(Note: We have removed `dist/` from `.gitignore` so this compiled CSS file will be successfully pushed to your repository).*

### Step 2: Push your code to GitHub
1. Initialize a Git repository locally (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Systeme.io landing page with compiled CSS"
   ```
2. Create a new repository on [GitHub](https://github.com/).
3. Link your local repository to GitHub and push your code:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### Step 3: Enable GitHub Pages
If you want to view your site on GitHub Pages before moving to Netlify:
1. Go to your repository on GitHub.
2. Click **Settings** > **Pages** (on the left sidebar).
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then click **Save**.
5. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/` within a few minutes.

### Step 4: Host on Netlify (Recommended for Custom Domains)
Netlify is the most reliable way to host your static landing page and offers better performance and easier custom domain management.
1. Log in to [Netlify](https://app.netlify.com/).
2. Click **Add new site** > **Import an existing project**.
3. Select **GitHub** and authorize Netlify to access your account.
4. Choose the repository you just created.

### Step 5: Configure Netlify Build Settings
Since you already built the CSS locally and pushed it to GitHub, Netlify doesn't need to run any build commands. Use these exact settings:
* **Base directory:** *(Leave blank)*
* **Build command:** *(Leave blank)*
* **Publish directory:** `/` (or `.` to represent the root folder)
* Click **Deploy site**.

### Step 6: Add Your Custom Domain
1. In your Netlify dashboard, go to **Domain management**.
2. Click **Add custom domain** and enter your domain (e.g., `allinonesystem.online`).
3. Follow the instructions to update your DNS records (usually at your domain registrar like Namecheap or GoDaddy).

---

## Part 2: Server-Side Tracking Setup (GTM + Stape.io)

Server-Side Tracking (SST) moves your tracking tags from the user's browser to a private server, making your data more secure and accurate.

### Step 1: Create Google Tag Manager (GTM) Containers
You need **two** containers in GTM:
1. **Web Container:** This goes on your website.
   - Create a new container, select **Web**.
   - Copy the GTM ID (e.g., `GTM-XXXXXX`).
2. **Server Container:** This handles the server-side logic.
   - Create another container, select **Server**.
   - Choose **Manually provision tagging server** and copy the **Container Config** string (you'll need this for Stape).

### Step 2: Set up Stape.io (The Server)
Stape.io provides the actual server that runs your GTM Server Container.
1. Create an account at [Stape.io](https://stape.io/).
2. Click **Create Container**.
3. Give it a name (e.g., `All In One System SST`).
4. Paste the **Container Config** string you copied from the GTM Server Container.
5. Select your server location (choose the one closest to your target audience).
6. Once created, Stape will give you a **Tagging Server URL** (e.g., `https://sst.allinonesystem.online`).

### Step 3: Connect GTM Server to Stape
1. Go back to your **GTM Server Container**.
2. Go to **Admin** > **Container Settings**.
3. Paste your **Tagging Server URL** from Stape into the "Server container URL" field.
4. Save the changes.

### Step 4: Install GTM on your Website
Add your **GTM Web Container** code to your `index.html` (and other pages).
1. In the **GTM Web Container**, go to **Admin** > **Install Google Tag Manager**.
2. Copy the `<script>` and `<noscript>` blocks and paste them into your HTML files as instructed.

### Step 5: Configure Web Container to send to Server
1. In your **GTM Web Container**, create a new **Google Tag** (or update your GA4 config).
2. Set the **Server Container URL** to your Stape URL (e.g., `https://sst.allinonesystem.online`).
3. Now, instead of sending data directly to Google/Meta, the browser sends it to your Stape server first.

---

## Summary of Workflow
1. **User visits site** (Hosted on Netlify).
2. **GTM Web Tag fires** and sends data to **Stape.io Server**.
3. **GTM Server Container** receives data and sends it to **Meta Pixel / Google Analytics**.

This setup is compliant, stealthy, and provides the best possible data for your marketing campaigns!
