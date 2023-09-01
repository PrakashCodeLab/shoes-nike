import { spring } from "framer-motion";

export const leftAnimation = {
    hidden: {
      opacity: 0,
      x: -50,
      transition: {
        type: spring,
        stiffness: 120,
        damping: 80,
        duration: 0.7,
        delay: 1,
      },
    },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: spring, stiffness: 120, duration: 0.7, delay: 1 },
    },
  };

  export const opacityAnimation = {
    hidden: {
      opacity: 0,
     
      transition: {
        type: spring,
        stiffness: 120,
        damping: 80,
        duration: 0.7,
        delay: 1,
      },
    },
    show: {
      opacity: 1,
      
      transition: { type: spring, stiffness: 120, duration: 0.7, delay: 1 },
    },
  };

  export const rightAnimation = {
    hidden: {
      opacity: 0,
      x: 50,
      transition: {
        type: spring,
        stiffness: 120,
        damping: 80,
        duration: 0.7,
        delay: 1,
      },
    },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: spring, stiffness: 120, duration: 0.7, delay: 1},
    },
  };

  export const upAnimation = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        type: spring,
        stiffness: 120,
        damping: 80,
        duration: 1,
        delay: 0.7,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: spring, stiffness: 120, duration: 1, delay: 0.7 },
    },
  };

  export const downAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: spring,
        stiffness: 120,
        damping: 80,
        duration: 1,
        delay: 0.7,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: spring, stiffness: 120, duration: 1, delay: 0.7 },
    },
  };


  export const CardAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      transition: {
        type: spring,
        stiffness: 120,
        damping: 80,
        duration: 1,
        delay: 0.7,
      },
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: spring, stiffness: 120, duration: 1, delay: 0.7 },
    },
  };

