import { GlobeIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">
        <p>Indonesia</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-4 grid-flow-row-dense px-7 py-3 cursor-pointer">
        <div className="flex justify-center space-x-2 whitespace-nowrap md:justify-self-start">
          <p className="hover:underline">About</p>
          <p className="hover:underline">Advertising</p>
          <p className="hover:underline">Business</p>
          <p className="hover:underline">How Search works</p>
        </div>
        <div className="flex justify-center space-x-2 md:ml-auto">
          <p className="hover:underline">Privacy</p>
          <p className="hover:underline">Terms</p>
          <p className="hover:underline">Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
