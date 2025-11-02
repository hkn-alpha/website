/**
 * How outside links work: Any links you speicfy here will be shown
 * in up to two locations, using the following rules:
 * Does the link have an icon?
 *  Yes -> Desktop: shown in navigation bar as icon. Mobile: shown in footer as icon,
 *      and navigation menu as text.
 *  No -> Desktop and mobile: shown only in navigation menu
 *
 * You should import icons from feather following the existing imports below.
 * To find a list of all available feather icons, see https://feathericons.com.
 *
 * MAKE SURE LINKS START WITH THE PROTOCOL OTHERWISE THEY WILL NOT WORK!
 */

import { YoutubeIcon } from "svelte-feather-icons";
import {InstagramIcon} from "svelte-feather-icons";

type Link = {
  href: string;
  name: string;
  icon?: any;
};

export const links: Link[] = [
  {
    href: "https://wiki.hkn.illinois.edu",
    name: "Wiki",
  },
  {
    href: "https://www.youtube.com/channel/UCvLlbypT6kzTjeVPh1NlOwg",
    name: "YouTube",
    icon: YoutubeIcon,
  },
  {
    href: "https://www.instagram.com/hkn_alpha/",
    name: "Instagram",
    icon: InstagramIcon
  }
];
