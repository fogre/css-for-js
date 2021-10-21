// Find if childs parents has overflow set
const selector = '.the-fixed-child';
function findCulprits(elem) {
  if (!elem) {
    throw new Error(
      'Could not find element with that selector'
    );
  }
  let parent = elem.parentElement;
  while (parent) {
    const hasOverflow = getComputedStyle(parent).overflow;
    if (hasOverflow !== 'visible') {
      console.log(hasOverflow, parent);
    }
    parent = parent.parentElement;
  }
}
findCulprits(document.querySelector(selector));

/*
https://courses.joshwcomeau.com/playground/css-variables/beachday
*/

/*Count scrollbar width: We want to make sure to set the --scrollbar-width as early as possible.*/
document.documentElement.style.setProperty(
  '--scrollbar-width',
  scrollbarWidth + 'px'
);
/*react:*/
  React.useEffect(() => {
    document.documentElement.style.setProperty(
      '--scrollbar-width',
      window.innerWidth - document.documentElement.clientWidth + 'px'
    );
  }, []);

/*css
html {
  --full-width: calc(100vw - var(--scrollbar-width));
}
body {
  overflow-y: scroll; needed if the page doesn't always have a scroll
}
.wrapper {
  width: var(--full-width);
}
*/
