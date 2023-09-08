import gsap from "gsap";
import { unref } from "vue";

// shared / global state
let master;
let elements = {};

const register = (element, timelineName, option) => {
  const domElement = unref(element);

  if (elements[timelineName]) {
    elements[timelineName] = {
      ...elements[timelineName],
      doms: [...elements[timelineName].doms, domElement],
    };
  } else {
    elements[timelineName] = {
      option: option,
      doms: [domElement],
    };
  }
};

const animate = () => {
  // https://greensock.com/docs/v3/Staggers
  // you can refer to the above link for more information about stagger given in the option

  // https://greensock.com/docs/v3/GSAP/Timeline
  // you can refer to the above link for more information about nested timeline

  master = gsap.timeline();

  Object.keys(elements).map((key) => {
    const { doms, option } = elements[key];
    const timeline = gsap.timeline({});
    timeline.from(doms, option, "-=50%");
    master.add(timeline);
  });
};

const clear = () => {
  elements = {};
  // TODO: not so sure of it is necessary
  master.clear();
};

const run = () => {
  const _elements = elements;
  const interval = setInterval(() => {
    if (Object.keys(_elements).length === 2) {
      animate();
      clearInterval(interval);
    }
  }, 100);
};

const undo = () => {
  return new Promise((resolve) => {
    master.reverse();
    master.eventCallback("onReverseComplete", () => {
      resolve(true);
      clear();
    });
  });
};

export default function useStagger(element, options) {
  return {
    register,
    run,
    undo,
  };
}
