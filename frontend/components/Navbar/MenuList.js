export const myMenu = [
  {
    title: "Home",
    plink: "/",
  },

  {
    title: "About Us",
    plink: "/about",
  },
  {
    title: "Services",
    plink: "/services",
    submenu: [
      {
        title: "Bespoke Consultation",
        plink: "/services/bespoke-consultation",
      },
      {
        title: "UK University Admission",
        plink: "/services/uk-university-admission",
      },
      {
        title: "Student Visa Support",
        plink: "/services/student-visa-support",
      },
      { title: "IELTS Examp Preparation", plink: "/services/ielts-coaching" },
      {
        title: "Personal Statement Editing",
        plink: "/services/personal-statement-editing-service",
      },
      {
        title: "Post Arrival Support",
        plink: "/services/post-arrival-support",
      },
    ],
  },
  {
    title: "Blog",
    plink: "/postlist",
    slink: "/posts/",
  },
  {
    title: "Contact",
    plink: "/contact",
    submenu: [
      { title: "London Head Office", plink: "/contact/london" },
      { title: "Sylhet Office", plink: "/contact/sylhet" },
    ],
  },
];
