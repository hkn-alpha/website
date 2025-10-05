<script>
    import Events from "../../components/Events.svelte";
    import calendar from "./calendar";
    import { googleCalendar } from "./calendar";
</script>

# Our Mission

Eta Kappa Nu (HKN) strives to assist its members and those in the broader Illinois ECE community throughout their lives in becoming better professionals by encouraging its members to improve the standards of their profession, courses of instruction, and the institutions where they belong. In this spirit, we provide an array of services to Illinois students, including free one-on-one peer tutoring and exam review sessions for core ECE courses.

HKN membership is selective. Prospective members, known as initiates, must be in the top third of their class by GPA and complete at least ten hours of service in a semester to demonstrate their character and attitude towards the community.

![asdf](https://www.smithgroup.com/sites/default/files/styles/slideshow_mobile_1x/public/2018-07/UIUC-ECE-10_1.jpg?h=33c22240&itok=B05fCdr5)

# Upcoming Events

HKN regularly hosts events for both members and non-members, ranging from tech talks to fun social gatherings like Friday Activities. To encourage involvement, HKN initiates earn points by attending events. Learn more about each event by clicking or tapping it.
<!-- <Events events={calendar}/> -->
<!-- New way with Google Calendar -->
<div style="
  max-width: 1200px;
  margin: 3rem auto;
  padding: 2rem;
  background: linear-gradient(135deg, #1a2332 0%, #0f1419 100%);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
">
  <iframe
    src={googleCalendar.embedUrl}
    style="
      border: 0;
      width: 100%;
      height: 650px;
      border-radius: 8px;
      display: block;
    "
    frameborder="0"
    scrolling="no"
    title="HKN Calendar">
  </iframe>
</div>

