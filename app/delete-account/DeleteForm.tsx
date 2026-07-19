// "use client";
// import React, { useState, ChangeEvent, FormEvent } from 'react';

// interface FormData {
//   name: string;
//   number: string;
//   email: string;
// }

// const DeleteForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     number: '',
//     email: ''
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Simulate sending delete request
//     console.log('Sending delete request...');
//     console.log(formData);

//     setTimeout(() => {
//       setIsSubmitted(true);
//     }, 1000);
//   };

//   return (
//     <div className="flex bg-black items-center justify-center text-white select-none p-4">
//       <div className="w-full max-w-2xl font-light">

//         {!isSubmitted ? (
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block mb-2 text-sm">Full Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full bg-transparent border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-400"
//                 placeholder="Enter your full name"
//               />
//             </div>

//             <div>
//               <label className="block mb-2 text-sm">Phone Number</label>
//               <input
//                 type="tel"
//                 name="number"
//                 value={formData.number}
//                 onChange={handleChange}
//                 required
//                 className="w-full bg-transparent border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-400"
//                 placeholder="Enter your phone number"
//               />
//             </div>

//             <div>
//               <label className="block mb-2 text-sm">Email Address</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full bg-transparent border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-400"
//                 placeholder="Enter your email"
//               />
//             </div>

//             <button
//               type="submit"
//               className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
//             >
//               Delete My Account
//             </button>
//           </form>
//         ) : (
//           <div className="mt-10 bg-purple-800 bg-opacity-20 border border-purple-600 p-6 rounded">
//             <h2 className="text-2xl font-semibold mb-2">Request Sent!</h2>
//             <p>
//               Your deletion request has been submitted. We'll email you at{' '}
//               <span className="text-purple-400 font-medium">{formData.email}</span> once your account is deleted.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DeleteForm;
