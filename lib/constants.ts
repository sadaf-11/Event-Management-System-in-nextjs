export type EventItem={
    title:string;
    image:string;
    slug:string;
    location:string;
    date:string;
    time:string;
}

export const events:EventItem[] = [
  {
    image: "/images/event1.png",
    title: "React Summit 2026",
    slug: "react-summit-2026",
    location: "Seattle, USA",
    date: "Oct 18-19, 2026",
    time: "9:00 AM",
  },
  {
    image: "/images/event2.png",
    title: "GitHub Universe",
    slug: "github-universe",
    location: "San Francisco, USA",
    date: "Nov 10-12, 2026",
    time: "8:30 AM",
  },
  {
    image: "/images/event3.png",
    title: "AI Engineer World Fair",
    slug: "ai-engineer-world-fair",
    location: "New York, USA",
    date: "Sep 22-24, 2026",
    time: "10:00 AM",
  },
  {
    image: "/images/event4.png",
    title: "Hack the North",
    slug: "hack-the-north",
    location: "Waterloo, Canada",
    date: "Aug 29-31, 2026",
    time: "11:00 AM",
  },
  {
    image: "/images/event5.png",
    title: "DevOpsDays London",
    slug: "devopsdays-london",
    location: "London, UK",
    date: "May 14-15, 2026",
    time: "9:15 AM",
  },
  {
    image: "/images/event6.png",
    title: "NodeConf EU",
    slug: "nodeconf-eu",
    location: "Limerick, Ireland",
    date: "Jun 27-29, 2026",
    time: "8:45 AM",
  },
];
