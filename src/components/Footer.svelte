<script>
  import nationals from "../content/national_link.json";
  import { links } from "../content/outside_links";
</script>

<div class="footer">
  <span class="left">
    &copy; {new Date().getFullYear()}
    <a class="general_link" href={nationals.nationals}>HKN</a> @ UIUC</span
  ><span class="middle"
    ><span class="wide_chapter_line">&vert;</span><a
      class="wide_chapter"
      href={nationals.nationals}>A Chapter of Eta Kappa Nu</a
    ></span
  >
  <span class="right">
    {#each links as NLink}
      {#if NLink.icon}
        <span class="icon">
          <a href={NLink.href}>
            <NLink.icon size="23" />
          </a>
        </span>
      {/if}
    {/each}
  </span>
</div>

<style>
  @media only screen and (min-width: 600px) {
    .footer {
      background-color: #0f2040;
      width: 100%;
      height: 70px;
      text-align: center;
      color: white;
      line-height: 70px;
    }

    .footer a {
      text-decoration: underline;
      color: white !important;
    }

    .wide_chapter_line {
      margin-left: 5px;
      margin-right: 5px;
    }

    .general_link {
      text-decoration: none !important;
    }

    .right {
      display: none;
    }
  }

  @media only screen and (max-width: 600px) {
    .middle {
      display: none;
    }
    .left,
    .right {
      display: block;
    }

    .footer {
      display: flex;
      flex-direction: row;
      color: white;
      padding-left: 23px;
      padding-right: 23px;
      justify-content: space-between;
      font-size: 16px;
      height: 70px;
      align-items: center;
      /* padding-bottom: 23px; */
    }

    a {
      color: white !important;
    }

    .icon:not(:last-child) {
      margin-right: 8px;
    }

    .icon * {
      text-decoration: none !important;
      text-decoration-thickness: 0px;
    }

    .right {
      padding-top: 4px;
    }
  }

  .footer {
    /* font-family: "DM Serif Text", sans-serif; */
    font-size: 18px;
    background-color: #2f3e59;
  }
</style>
