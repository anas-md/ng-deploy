export default [
  {
    context: ["/my", "/many", "/endpoints", "/i", "/need", "/to", "/proxy"],
    target: "http://localhost:5000",
    secure: false,
  },
];
