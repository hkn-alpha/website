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

## Managing the Calendar(s)

See `content/calendar.ts` for an example of how to create a calendar. When you want to add a new event to a calendar file (most likely, this means you'll be editing `content/calendar.ts`), simply add the event to the `events` array, and while you're at it, remove any events that have already occurred. You may add as many events as you want into the future, and the calendar will only display the events occurring the most soon.

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
<Events cutoff={5} cutoffDays={14} events={events}>
```

The above will show the 5 closest events, _or_ all events in the next 14 days, whichever is greater. _The values above are the default values._

## Adding a New Page

You shouldn't have to do this too often after the initial creation of the website: it's far better to add a section to an existing page, since it reduces the maintenance burden. You should also consider how often your new page would need to be updated: if it needs frequent updating, will that updating _really_ happen?
If your answer is yes (a miracle!) follow these steps:

## Search Engine Optimization

You _really_ shouldn't have to do this if I did my job properly. But if you want to change the snippet of text that Google shows below each page on our website, you can do it by finding the `.svelte` file for the page you want to change and finding and editing the `meta` value inside of `svelte:head` (these strings appear only once, use Ctrl/Cmd + F to get to the right place).
