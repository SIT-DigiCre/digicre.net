export type Team = {
  id: string;
  name: string;
  about: About;
  activity: Activity;
  learn_more: LearnMore[];
};

type About = {
  content: string;
};

type Activity = {
  content: string;
  works: Work[];
};

type Work = {
  title: string;
  image: string;
  href: null;
};

type LearnMore = {
  title: string;
  content: string;
};
