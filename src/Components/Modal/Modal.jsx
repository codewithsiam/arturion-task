// import React, { useState } from "react";

// const Modal = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <>
//       {/* Button to open the modal */}
//       <button
//         onClick={openModal}
//         className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Open Modal
//       </button>

//       {/* Modal Overlay */}
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           {/* Modal Content */}
//           <div className="bg-white w-1274px h-763px p-6 rounded-lg relative">
//             {/* Close Button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
//             >
//               &times;
//             </button>

//             {/* Modal Content */}
//             <div className="text-center">
//               <h2 className="text-2xl font-semibold mb-4">Modal Content</h2>
//               {/* Add your modal content here */}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Modal;
