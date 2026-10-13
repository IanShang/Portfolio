# Your Portfolio Site

A small static portfolio built with HTML, CSS, and vanilla JavaScript. There is no build step, database, framework, or account system.

## Personalize it

1. Open `index.html` and replace each instance of `YOUR NAME`. Update the page title, description, discipline label, and intro copy with your details.
2. Replace `YOUR-EMAIL@example.com` with the email address you want visitors to use. Remove the contact link if you do not want to publish an email address.
3. Open `app.js`. Replace the two starter objects in `projects` with your own Design and Hands On projects. Each project has:

   - `id`: a unique short identifier made from lowercase letters, numbers, and hyphens.
   - `category`: a category id from the `categories` array.
   - `date`: a date in `YYYY-MM` or `YYYY-MM-DD` format, or `null` until you want to show one.
   - `title` and `summary`: the project heading and short description.
   - `images`: zero or more image objects with `src`, `alt`, and optional `caption` fields.

   Projects with dates appear newest-first. Display dates use `YYYY/MM/DD`; unknown months or days are shown as `—`. Seasonal dates retain their season, and school-grade labels retain their grade. Undated entries stay after dated ones, in their original order.

## Add project photos

Create an `images` folder beside `index.html`, put your image files there, and add them to a project's `images` array. For example:

```js
images: [
  {
    src: "images/fixture-design.jpg",
    alt: "A machined aluminum fixture on a workbench",
    caption: "First prototype",
  },
],
```

Write alt text that describes what the image shows. If a project's `images` array is empty, the site shows a technical image placeholder.

## Add Minecraft or Art later

Add one category object to `categories` in `app.js`:

```js
{ id: "minecraft", label: "Minecraft" },
```

Then add project objects using `category: "minecraft"`. For Art, add `{ id: "art", label: "Art" }` and use `category: "art"` on its entries. The top-right navigation, category filter, and project cards are generated from this data, so they need no category-specific code or layout changes.

## Preview locally

Open `index.html` in a browser. The page uses only local files and works without a package install. To preview through a local web server, run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Publish with GitHub Pages

The site is ready for static hosting. To publish with GitHub Pages, place the contents of this folder in the root of a GitHub repository, push the files, then select that repository's main branch and root folder in the repository's **Settings → Pages** page. GitHub will provide a public site URL after it finishes publishing. A custom domain is optional. You will need to use your own GitHub account and choose the repository and public URL.

Before sharing the site, replace the personal placeholders and add only the project details and contact information you want to make public.
