import { EllipsisVerticalIcon, PlusIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="max-w-[1140px] h-[100px] bg-[#2B2C37] flex flex-1 justify-between items-center text-white p-5">
      <h2 className="font-semibold text-2xl">Platform Launch</h2>

      <div className="flex items-center">
        <button class="btn-primary flex items-center">
          <PlusIcon className="h-4 w-4 mr-1" /> Add New Task
        </button>

        <EllipsisVerticalIcon className="h-7 w-7 cursor-pointer ml-3 opacity-80" />
      </div>
    </header>
  );
};

export default Header;
