export default function Anchor({ description, id }) {
  return (
    <a className="text-container flex flex-row items-center hover:text-blue-600" href={id}>
      <svg
        className="w-5 h-5 mr-2"
        transform="scale(-1 -1)"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          transform="rotate(0 0 33)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
        ></path>
      </svg>
      <span className="text-xl">{description}</span>
    </a>
  )
}