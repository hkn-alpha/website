<script>
    import Events from "../Events.svelte";
    import calendar from "./calendar";
</script>

# Our Mission

This is some text about how great HKN is. The width should not be too big so that the text is easier to read. Did you know that pictures look better when displayed on a dark background? That’s part of why I’m keeping the background dark blue for the rest of the page. Why not use a two column layout for the remainder of the page? The angle + arrow design above would point to the middle gap, which is visually unsatisfying! It should act as a guide for where your eyes should go. There’s no orange in this design yet, and I’ll have to figure out how to use it sparingly as to not jar you.

![asdf](https://www.smithgroup.com/sites/default/files/styles/slideshow_mobile_1x/public/2018-07/UIUC-ECE-10_1.jpg?h=33c22240&itok=B05fCdr5)

# Upcoming Events

HKN regularly hosts events for both members and non-members, ranging from
tech talks to fun social gatherings like our weekly happy hour. To
encourange involvement, HKN initiates earn points by attending events.
Learn more about each event by clicking or tapping it.
<Events events={calendar}/>
