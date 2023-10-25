type ImageModalType = {
  showModal:boolean
  title: string
  message: string
  closeModal:()=>void
}
const ImageModal = ({ showModal, title, message, closeModal }:ImageModalType) => {
  const confirm = () => {
    
  }
   return (
    <div className={`bg-red-500 ${showModal ? 'block' : 'hidden'}`}>
      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
          {title}
        </h3>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            {message}
          </p>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button onClick={confirm} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
          Confirm
        </button>
        <button onClick={closeModal} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:w-auto sm:text-sm">
          Decline
        </button>
      </div>
    </div>
  );
}

export default ImageModal;
