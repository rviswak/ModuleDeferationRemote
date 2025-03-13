export const mfConfig = {
  name: "remote",
  exposes: {'./Counter': "./src/counter.tsx",
    './ImgMediaCard': "./src/imgCard.tsx",
    './ApiCollection': "./src/apicollection.tsx",
  },  
  filename: "remoteEntry.js",
  shared: ["react", "react-dom"],
};
