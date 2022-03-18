export default function Home() {
  return (
    <div className="flex justify-between w-full py-5 pb-10">
      <div
        className="hover:bg-neutral-800 cursor-pointer rounded-md px-2 py-1
hover:bg-neutral-800 cursor-pointer rounded-md px-2 py-1"
      >
        Project Resurrect
      </div>
      <div className="flex space-x-3">
        <a href="#">
          <div className="hover:bg-neutral-800 cursor-pointer rounded-md px-2 py-1">
            About Us
          </div>
        </a>
        <a href="#">
          <div className="hover:bg-neutral-800 cursor-pointer rounded-md px-2 py-1">
            How It Works
          </div>
        </a>
        <a href="https://github.com/demie20/" target="_blank" rel="noreferrer">
          <div className="hover:bg-neutral-800 cursor-pointer rounded-md px-2 py-1">
            Generate
          </div>
        </a>
      </div>
    </div>
  );
}
