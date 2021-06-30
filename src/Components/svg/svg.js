const HamburgerIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};

const CloseIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const ScrollDownIcon = ({ className }) => {
  return (
    <svg
      width="48"
      height="38"
      viewBox="0 0 48 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g opacity="0.7">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.5629 18.392L41.3533 3.59733C42.2156 2.736 42.2156 1.41867 41.3533 0.608C40.491 -0.202667 39.0359 -0.202667 38.1737 0.608L24 13.9333L9.82635 0.608C8.91018 -0.202667 7.50898 -0.202667 6.64671 0.608C5.78443 1.41867 5.78443 2.736 6.64671 3.59733L22.3832 18.392C23.2994 19.2027 24.7006 19.2027 25.5629 18.392Z"
          fill="#159782"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.0838 37.136L47.1377 16.112C48.2874 14.888 48.2874 13.016 47.1377 11.864C45.988 10.712 44.0479 10.712 42.8982 11.864L24 30.8L5.1018 11.864C3.88024 10.712 2.01198 10.712 0.862275 11.864C-0.287425 13.016 -0.287425 14.888 0.862275 16.112L21.8443 37.136C23.0659 38.288 24.9341 38.288 26.0838 37.136Z"
        fill="#159782"
      />
    </svg>
  );
};

const ChevronDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};

const ModalCloseIcon = ({ className }) => {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z"></path>
    </svg>
  );
};

export {
  HamburgerIcon,
  CloseIcon,
  ScrollDownIcon,
  ChevronDown,
  ModalCloseIcon,
};
