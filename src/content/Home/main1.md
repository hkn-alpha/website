<script>
    import Events from "../../components/Events.svelte";
  
    import { googleCalendar } from "./calendar";
</script>

# Our Mission

Eta Kappa Nu (HKN) strives to assist its members and those in the broader Illinois ECE community throughout their lives in becoming better professionals by encouraging its members to improve the standards of their profession, courses of instruction, and the institutions where they belong. In this spirit, we provide an array of services to Illinois students, including free one-on-one peer tutoring and exam review sessions for core ECE courses.

HKN membership is selective. Prospective members, known as initiates, must be in the top third of their class by GPA and complete at least ten hours of service in a semester to demonstrate their character and attitude towards the community.

![asdf](https://www.smithgroup.com/sites/default/files/styles/slideshow_mobile_1x/public/2018-07/UIUC-ECE-10_1.jpg?h=33c22240&itok=B05fCdr5)

# Upcoming Events

HKN regularly hosts events for both members and non-members, ranging from tech talks to fun social gatherings like Friday Activities. To encourage involvement, HKN initiates earn points by attending events. Learn more about each event by clicking or tapping it.
<!-- <Events events={calendar}/> -->
<div style="
  width: 100%;
  max-width: none !important;
  margin: 2rem auto;
  padding: 1.5rem;
  background: rgba(26, 35, 50, 0.4);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
">
  <iframe
    src={googleCalendar.embedUrl}
    style="
      border: 0;
      width: 100%;
      height: 700px;
      border-radius: 10px;
      display: block;
    "
    frameborder="0"
    scrolling="no"
    title="HKN Calendar">
  </iframe>
</div>



