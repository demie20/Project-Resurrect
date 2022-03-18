export default function Home() {
  return (
    <div className="flex justify-between w-full py-5 pb-10">
      <div
        className="hover:bg-neutral-800 cursor-pointer rounded-md px-2 py-1
hover:bg-neutral-800 cursor-pointer rounded-md px-2 py-1"
      >
        Home
      </div>
      <div className="flex space-x-3">
        <a href="#contact-us">
          <div className="hover:bg-neutral-800 cursor-pointer rounded-md px-2 py-1">
            Contact Us
          </div>
        </a>
        <a href="#how-it-works">
          <div className="hover:bg-neutral-800 cursor-pointer rounded-md px-2 py-1">
            How It Works
          </div>
        </a>
        <a href="https://github.com/sudo-logic/ProjectRessurect" target="_blank" rel="noreferrer">
          <div className="hover:bg-neutral-800 cursor-pointer rounded-md px-2 py-1">
            Generate
          </div>
        </a>
      </div>
    </div>
  );
}
