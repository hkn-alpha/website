# HKN Website

This repository hosts all content for the HKN Alpha Chapter website.

## Prerequisites and IDE Setup

To work on the HKN website, you should install Node. It is recommended to install Node with [NVM](https://github.com/nvm-sh/nvm). We recommend editing with [VS Code](https://code.visualstudio.com/) and the [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) extension, however anything that can edit Markdown, JSON, and JavaScript will work fine.

## Making Changes

**First time setup:**

1. Make sure you have a GitHub account and have configured the `git` cli.
2. Find what folder you want your local copy of the HKN website to live in, and in your terminal `cd` to this folder.
3. Run `git clone git@github.com:hkn-alpha/website`. You'll see a new folder called `website`.
4. `cd` into the `website` folder in your terminal.
5. Run `npm install`.

**To make your changes:**

1. Run `git checkout master; git pull`. This will update your local copy to have the most current version of the HKN website.
2. Run `git checkout -b <your name>/<branch-name>`, where `branch-name` describes what changes you're going to make. For example, if Ryan wants to update the list of leaders, he would run `git checkout -b ryan/update-leaders`.
3. Run `npm run dev`. This will open a local preview of your website at `http://localhost:5173`
4. Make changes locally. Whenever you save a file, the changes will be automatically applied to your local copy of the website.
5. When you're done, make a commit by running `git commit -m "description of what you did"`. You can create as many commits as you want: they're nice checkpoints.

**Now, to request review of your changes by an HKN lead:**

1. Run `git push origin <your name>/<branch-name>` matching what you did in step 2 above.
2. Open `https://github.com/hkn-alpha/website`. You'll see a popup prompting you to open a Pull Request. In the PR UI, set a title and description that describe what you did in more detail. Optionally, include screenshots if you think they would be helpful.
3. That's it! An HKN leader will review your change. Once they "merge" your PR (add your code to master copy), the website will automatically update. Your reviewer may ask you to make changes first. Follow the steps below to do that.

**Making changes to your PR:**

1. First make sure you are on the correct branch by running `git checkout <your name>/<branch name>` where `<your name>/<branch name>` corresond to the PR you want to edit.
2. Make your changes, and commit them like you normally would
3. Run `git push origin <your name>/<branch name>`. The PR will automatically update.

## Where is it?

Want to edit something you see on the website? Below is a (hopefully-updated) mapping of where you can find things. All files referenced are in the `src/content` folder.

1. Navigation links and socials links: `outside_links.ts`
2. Homepage header text: `Home/hero_text.md`
3. First blue section on homepage: `Home/main1.md`
4. List of leadership people: `Home/leadership.json`
5. Text above list of leaders: `Home/leadership_text.md`
6. Second blue section on homepage: `Home/main2.md`
7. Link to HKN nationals: `national_link.json`
8. Scheduled review sessions: `StudentServices/review_sessions.ts`
9. List of tutors: `StudentServices/tutors.ts`
10. Description of student services (below "Student Services" heading): `StudentServices/description.md`
11. Description of tutoring: `StudentServices/tutoring.md`

If the process to edit one of these files is non-obvious, you can find documentation in the file itself, and/or in the sections below.

### Uploading Images/Media

Images should be placed in the `public` folder with a descriptive name. You can reference images from that folder in Markdown like this:

```
![description of image](/image_name.jpg)
```

_Note that you do not need the `/public` prefix in Markdown._

Some dos:

- Use a descriptive name
- Compress images first (use [Squoosh](https://squoosh.app))

Some dont's:

- Delete images that are still in use (use Ctrl + F to find uses of a filename)
- Delete `logo.svg`, ever
- Delete anything that starts with `favicon` or is not an image file.

## Adding a New Page

You shouldn't have to do this too often after the initial creation of the website: it's far better to add a section to an existing page, since it reduces the maintenance burden. You should also consider how often your new page would need to be updated: if it needs frequent updating, will that updating _really_ happen?
If your answer is yes (a miracle!) follow these steps:

1. Create the content you want in a markdown file at `src/content/NameOfPage/content.md`
2. Create a file called `NameOfPage.svelte` in `src/pages`, and paste in the following as a starter:

```
<script>
import Content from "../content/NameOfPage/content.md";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
</script>

<div class="container">
    <div class="footer-push>
        <Nav/>
        <div class="container">
            <Content/>
        </div>
    </div>
    <Footer/>
</div>

<style>
    .container {
        max-width: 746px;
        padding-left: 23px;
        padding-right: 23px;
        margin-left: auto;
        margin-right: auto;
        background-color: #0f2040;
    }

    .footer-push {
        min-height: calc(100vh - 70px);
    }
</style>
```

3. Add the URL to the page in `App.svelte` following what's already there.
4. If you want your page to appear on the navigation bar, open `components/Nav.svelte` and update the links there following the existing links for home and student services.
5. Copy-paste the search engine optimization snippet from Home/Student Services and update it for your page.

### Adding a Calendar to a Page

1. At the top of your markdown, add

```
<script>
    import events from "./path-to-calendar"
    import Events from "../Events.svelte"
</script>
```

2. Copy-paste the following where you want to insert the calendar:

```
<Events events={events}/>
```

That's it! If you want, you can set the `cutoffCount` and `cutoffDays` parameter to configure
how many upcoming events the calendar will show:

```
<Events maxCount={10} cutoff={5} cutoffDays={14} events={events}>
```

The above will show the 5 closest events, _or_ the up to 10 next events in the next 14 days, whichever is greater. _The values above are the default values._

## Search Engine Optimization

You _really_ shouldn't have to do this if I did my job properly. But if you want to change the snippet of text that Google shows below each page on our website, you can do it by finding the `.svelte` file for the page you want to change and finding and editing the `meta` value inside of `svelte:head` (these strings appear only once, use Ctrl/Cmd + F to get to the right place).
