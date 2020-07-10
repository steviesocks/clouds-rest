import React from "react";

const LogoSvg = props => (
  <svg
    width={70}
    height={70}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <circle id="a" cx={35} cy={35} r={35} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(-241 -177)">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fillOpacity={0} fill="#D8D8D8" xlinkHref="#a" />
        <path
          d="M35 0c19.33 0 35 15.67 35 35S54.33 70 35 70 0 54.33 0 35 15.67 0 35 0zm0 1.694C16.605 1.694 1.694 16.605 1.694 35c0 18.395 14.911 33.306 33.306 33.306 18.395 0 33.306-14.911 33.306-33.306C68.306 16.605 53.395 1.694 35 1.694z"
          fill="#288237"
          fillRule="nonzero"
          mask="url(#b)"
        />
        <path
          fill="#288237"
          fillRule="nonzero"
          mask="url(#b)"
          d="M76.218 37.43l-8.564-19.158-53.643 45.37v18.536l42.56 2.515 25.07-23.006z"
        />
      </g>
      <path
        fill="#288237"
        fillRule="nonzero"
        d="M-219-146.64l12.193-16.36L-191-144.046l-1.303 1.046-14.43-17.302-10.908 14.637z"
      />
      <path
        fill="#288237"
        fillRule="nonzero"
        d="M-241-137.627L-223.03-152l19.03 19.85-1.241 1.15-17.944-18.715-16.739 13.389z"
      />
    </g>
  </svg>
);

export default LogoSvg;



