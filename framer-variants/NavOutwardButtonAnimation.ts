export const NavOutwardButtonAnimation = {
  rest: {
    opacity: 1,
    scale: 0,
    // transition: {
    //   duration: 0.1,
    //   ease: "easeOut",
    // },
  },
  hover: {
    opacity: 1,
    scale: [0.1, 0.2, 0.4, 0.6, 0.8, 1],
    transition: {
      duration: 0.1,
      type: "tween",
    },
  },
};

export const outwardButtonAnimation = {
  rest: {
    opacity: 1,
    color: "#FFA31A",
  },
  hover: {
    color: "white",
    rotate: [0, 360],
    transition: {
      delay: 0.2,
      duration:.6,
      type: "tween",
    },
  },
};
