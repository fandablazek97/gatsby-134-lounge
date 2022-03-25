import { useState, Fragment } from "react";
import { Dialog as Modal, Transition } from "@headlessui/react";

// Assets
import preview from "assets/videos/134-preview.mp4";
import aftermovie from "assets/videos/134-aftermovie-full.mp4";

// Icons
import { BsFillPlayFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";

export default function Aftermovie() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <section id="aftermovie" className="ui-wrapper py-16 md:py-28">
      <button
        className="group relative aspect-video w-full cursor-pointer"
        onClick={openModal}
      >
        <video autoPlay loop muted className="object-cover">
          <source src={preview} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 h-full w-full bg-gray-950 bg-opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 z-1 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white transition-transform duration-300 ease-out-back group-hover:scale-125">
            <BsFillPlayFill className="text-3xl text-black" />
          </div>
          {/* <span className="mt-3 text-sm font-medium uppercase tracking-wider">
            Přehrát video
          </span> */}
        </div>
      </button>
      <span className="pt-8 text-xs font-medium uppercase tracking-wider">
        Проиграть видео
      </span>

      {/* Samotný modal */}
      <Transition show={isOpen} as={Fragment}>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-[200] h-screen w-screen"
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-default"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Overlay */}
            <Modal.Overlay className="fixed inset-0 z-[200] h-screen w-screen bg-gray-950 bg-opacity-80 backdrop-blur-md" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition duration-400"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="transition duration-300"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            {/* Obsah modalu */}
            <div className="relative top-1/2 z-[200] mx-auto max-h-[80vh] w-[80%] max-w-sm -translate-y-1/2 transform">
              <div className="aspect-[9/16]">
                <video controls className="object-cover">
                  <source src={aftermovie} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-default"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Tlačítko pro zavření (křížek) */}
            <button
              type="button"
              onClick={closeModal}
              className="fixed top-6 right-6 z-[210] rounded-default bg-transparent p-2 text-4xl text-white transition-colors duration-default hover:bg-white hover:bg-opacity-15 focus:bg-white focus:bg-opacity-15"
            >
              <span className="sr-only">Zavřít</span>
              <MdClose />
            </button>
          </Transition.Child>
        </Modal>
      </Transition>
    </section>
  );
}
