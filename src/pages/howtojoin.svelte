<script>
  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";
</script>

<svelte:head>
  <title>How to Join HKN</title>
  <meta
    name="description"
    content="Learn about the steps and requirements to join Eta Kappa Nu (HKN), the honor society for electrical and computer engineers."
  />
</svelte:head>

<div class="page">
  <Nav />
  <div class="page-body">
    <div class="container">
      <header class="page-header">
        <h1>How to Join HKN</h1>
        <p class="lede">
          Interested in joining HKN? To become a fully inducted member, you must
          first be invited to initiate. HKN seeks prospective initiates through
          one of three paths.
        </p>
      </header>

      <ol class="paths">
        <li>
          <h2>GPA invitation</h2>
          <p>
            You have completed your introductory ECE class and are within the
            top percentage of your cohort based on GPA.
          </p>
        </li>
        <li>
          <h2>Project proposal</h2>
          <p>
            You approach the HKN Board with a project proposal that demonstrates
            technical competence in an ECE-related field. If the board
            approves, the GPA requirement is waived and you are invited to
            initiate, provided you meet initiation requirements and present
            your completed project.
          </p>
        </li>
        <li>
          <h2>Board invitation</h2>
          <p>
            You demonstrate outstanding commitment to the ECE community and to
            excellence within ECE, and the HKN Board directly invites you to
            initiate.
          </p>
        </li>
      </ol>

      <section class="section next-steps">
        <h2>After invitation</h2>
        <p>
          Once invited to initiate, initiates have a semester to show commitment
          to HKN and the ECE community through outreach and service. At the end
          of the semester, initiates who meet those expectations are inducted as
          full members.
        </p>
        <a class="text-link" href="mailto:hkn@illinois.edu"
          >Questions? Email us</a
        >
      </section>

      <img
        src="/WebsiteImages/GetInvolvedPage/ResizedPotluck.jpg"
        alt="HKN members at a potluck"
        width="720"
        height="480"
        loading="lazy"
        decoding="async"
        class="hero-image"
      />
    </div>
  </div>
  <Footer />
</div>

<style>
  .page-header {
    margin-bottom: var(--space-6);
  }

  .lede {
    max-width: 40rem;
    color: var(--color-muted);
  }

  .paths {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .paths li {
    padding: var(--space-2) 0;
    border-bottom: 1px solid var(--color-border);
    counter-increment: path;
  }

  .paths {
    counter-reset: path;
  }

  .paths h2 {
    font-size: 1.1rem;
    margin-bottom: var(--space-2);
  }

  .paths h2::before {
    content: counter(path) ". ";
    color: var(--color-orange);
  }

  .paths p {
    margin: 0;
    color: var(--color-muted);
  }

  .next-steps {
    border-top: 1px solid var(--color-border);
    margin-top: var(--space-6);
  }

  .next-steps p {
    margin-bottom: var(--space-5);
    max-width: 40rem;
  }

  .hero-image {
    margin-top: var(--space-6);
    width: 100%;
    border-radius: var(--radius);
    border: 1px solid var(--color-border);
    aspect-ratio: 3 / 2;
    object-fit: cover;
  }
</style>
