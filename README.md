# HKN Website

This repository hosts all content for the HKN Alpha Chapter website.

## Getting Started

To work on the HKN website, you should install Node. It is recommended to install Node with [NVM](https://github.com/nvm-sh/nvm). Once you've installed Node, do the following things:

1. `git clone https://github.com/hkn-alpha/website`
2. `cd website`
3. `npm install`
4. `npm run dev`

Congratulations! You can begin editing the website!

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Making Changes

_You should make all your changes on a new branch, and then open a pull request on GitHub. An HKN lead will review the changes, and upon approval, the public website will update automatically._

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

That's it! If you want, you can set the `cutoff` parameter to configure
how many upcoming events the calendar will show:

```
<Events cutoff={5} events={events}>
```

The above will only show the 5 closest events. _By default, only the 10 closest events are shown_.

## Adding a New Page

You shouldn't have to do this too often after the initial creation of the website: it's far better to add a section to an existing page, since it reduces the maintenance burden. You should also consider how often your new page would need to be updated: if it needs frequent updating, will that updating _really_ happen?
If your answer is yes (a miracle!) follow these steps:
