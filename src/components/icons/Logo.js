import * as React from "react";

function Logo(props) {
  return (
    <svg viewBox="0 0 1000 1000" width="1em" height="1em" {...props}>
      <path d="M48.57 20.76C33.48 25.33 17.4 40.22 12.63 53.92c-5.96 17.47-1.59 39.11 10.92 53.8 8.14 9.53 25.02 17.07 38.71 17.07 6.15 0 12.9-.6 15.09-1.19 3.38-.99 13.3 10.32 61.55 69.29 31.77 38.71 59.16 72.66 61.15 75.44l3.77 4.76-58.97 59.76-59.16 59.76 13.7 13.7c7.54 7.54 14.49 13.7 15.49 13.7 6.55 0 98.08-66.51 123.89-89.74 4.77-4.37 9.33-7.54 10.13-7.15.99.4 67.3 64.92 147.31 143.54 80.2 78.63 189.59 185.84 243 238.06 53.6 52.41 122.3 119.91 152.87 150.29 42.09 41.49 59.96 57.77 73.46 66.71 32.96 21.84 78.82 46.06 104.83 55.19 13.3 4.77 15.88 5.16 18.27 2.78 2.38-2.38 1.99-4.96-3.77-18.66-12.71-30.77-32.16-66.31-54.79-100.26-10.32-15.29-31.17-36.33-227.32-228.31-147.73-144.74-195.78-191.99-321.45-315.28l-65.12-64.13 5.16-6.35c31.57-39.11 90.53-123.29 90.53-129.25 0-1.19-6.15-8.34-13.5-15.68l-13.7-13.5-59.36 60.55-59.36 60.55-75.44-59.56-75.44-59.56.6-12.71c.99-17.87-3.77-31.17-15.29-42.69C86.88 21.36 65.84 15.6 48.57 20.76z" />
    </svg>
  );
}

const MemoLogo = React.memo(Logo);
export default MemoLogo;
