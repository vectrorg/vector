// Basic code
// "use client";
// import React, { FormEvent } from "react";
// import { Label } from "./label";
// import { Input } from "./input";
// import { cn } from "../../../lib/utils";

// type LabelInputContainerProps = {
//     children: React.ReactNode;
//     className?: string;
// };

// type BottomGradientProps = Record<string, never>;

// export function JoinTheWaitlist() {
//     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         console.log("Form submitted!!");
//     };

//     return (
//         <div className="w-full mx-auto rounded-none md:rounded-2xl shadow-input text-gray-300 flex items-center justify-center min-h-screen select-none">
//             <div className="flex-col items-center justify-center w-full max-w-2xl p-2">
//                 <h2 className="font-bold text-6xl text-neutral-200 dark:text-neutral-200">Welcome to <span className="text-purple-600">Vectr.</span></h2>
//                 {/* <h2 className="font-bold text-6xl text-neutral-200 dark:text-neutral-200 flex items-baseline">Welcome to <span className="text-purple-600" style={{ textShadow: '3px 3px 1px #FFFFFF'}}>Vectr.</span></h2> */}
//                 <p className="flex text-2xl mt-2 text-neutral-500 dark:text-neutral-100">
//                     Join the waitlist to get every notification of our platform.
//                 </p>
//             </div>
//             <form className="my-8" onSubmit={handleSubmit}>
//                 <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
//                     <LabelInputContainer>
//                         <Label htmlFor="firstname">First name</Label>
//                         <Input id="firstname" placeholder="First name" type="text" />
//                     </LabelInputContainer>
//                     <LabelInputContainer>
//                         <Label htmlFor="lastname">Last name</Label>
//                         <Input id="lastname" placeholder="Last name" type="text" />
//                     </LabelInputContainer>
//                 </div>
//                 <LabelInputContainer className="mb-4">
//                     <Label htmlFor="email">Email Address</Label>
//                     <Input id="email" placeholder="mail@example.com" type="email" />
//                 </LabelInputContainer>
//                 <LabelInputContainer className="mb-4">
//                     <Label htmlFor="phone">Phone Number</Label>
//                     <Input
//                         id="phone"
//                         placeholder="+91 1234567890"
//                         type="tel"
//                         inputMode="tel"
//                     />
//                 </LabelInputContainer>


//                 <button
//                     className="relative group/btn bg-gray-950 w-full text-white rounded-md h-10 font-medium hover:text-violet-300 transition duration-300 ease-in-out flex items-center justify-center"
//                     type="submit"
//                 >
//                     Register &rarr;
//                     <BottomGradient />
//                 </button>

//                 <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

//             </form>
//         </div>
//     );
// }

// const BottomGradient: React.FC<BottomGradientProps> = () => {
//     return (
//         <>
//             <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
//             <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
//         </>
//     );
// };

// const LabelInputContainer: React.FC<LabelInputContainerProps> = ({ children, className }) => {
//     return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
// };











// Errors handled
// "use client";
// import React, { FormEvent, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Input } from "./input";

// interface FormValues {
//   firstname: string;
//   lastname: string;
//   email: string;
//   phone: string;
// }

// interface FormErrors {
//   firstname?: string;
//   lastname?: string;
//   email?: string;
//   phone?: string;
// }

// export function JoinTheWaitlist() {
//   const router = useRouter();
//   const [values, setValues] = useState<FormValues>({
//     firstname: "",
//     lastname: "",
//     email: "",
//     phone: "",
//   });
//   const [errors, setErrors] = useState<FormErrors>({});

//   const validate = (): FormErrors => {
//     const errs: FormErrors = {};
//     const nameRegex = /^[A-Za-z]+$/;
//     const emailRegex = /^[\w-.]+@[\w-]+\.[A-Za-z]{2,}$/;
//     const phoneRegex = /^\+?[0-9]{7,15}$/;

//     if (!values.firstname) {
//       errs.firstname = "First name is required.";
//     } else if (!nameRegex.test(values.firstname)) {
//       errs.firstname = "First name should contain letters only.";
//     }

//     if (!values.lastname) {
//       errs.lastname = "Last name is required.";
//     } else if (!nameRegex.test(values.lastname)) {
//       errs.lastname = "Last name should contain letters only.";
//     }

//     if (!values.email) {
//       errs.email = "Email address is required.";
//     } else if (!emailRegex.test(values.email)) {
//       errs.email = "Please enter a valid email address.";
//     }

//     if (!values.phone) {
//       errs.phone = "Phone number is required.";
//     } else if (!phoneRegex.test(values.phone)) {
//       errs.phone = "Please enter a valid phone number.";
//     }

//     return errs;
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setValues((prev) => ({ ...prev, [name]: value }));

//     // Clear error on change
//     setErrors((prev) => ({ ...prev, [name]: undefined }));
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     alert("🎉 You're Registered!");
//     router.push("/");
//   };

//   return (
//     <div className="w-full mx-auto rounded-none md:rounded-2xl shadow-input text-gray-300 flex items-center justify-center min-h-screen select-none">
//       <div className="flex-col items-center justify-center w-full max-w-2xl p-2">
//         <h2 className="font-bold text-6xl text-neutral-200 flex items-baseline">
//           <span>Welcome to&nbsp;</span>
//           <span className="text-purple-600">Vectr.</span>
//         </h2>
//         <p className="text-2xl mt-2 text-neutral-500">
//           Join the waitlist to get every notification of our platform.
//         </p>
//       </div>

//       <form onSubmit={handleSubmit} className="my-8 space-y-6 w-full max-w-md">
//         <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
//           <div className="relative w-full">
//             <Input
//               id="firstname"
//               name="firstname"
//               type="text"
//               placeholder=" "
//               value={values.firstname}
//               onChange={handleChange}
//               className="peer w-full bg-transparent border border-gray-600 rounded-md px-3 pt-6 pb-2 text-white focus:outline-none focus:border-purple-500"
//             />
//             <label
//               htmlFor="firstname"
//               className="absolute left-3 top-2 text-gray-400 transition duration-200 transform origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
//             >
//               First Name
//             </label>
//             {errors.firstname && <p className="mt-1 text-sm text-red-500">{errors.firstname}</p>}
//           </div>

//           <div className="relative w-full">
//             <Input
//               id="lastname"
//               name="lastname"
//               type="text"
//               placeholder=" "
//               value={values.lastname}
//               onChange={handleChange}
//               className="peer w-full bg-transparent border border-gray-600 rounded-md px-3 pt-6 pb-2 text-white focus:outline-none focus:border-purple-500"
//             />
//             <label
//               htmlFor="lastname"
//               className="absolute left-3 top-2 text-gray-400 transition duration-200 transform origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
//             >
//               Last Name
//             </label>
//             {errors.lastname && <p className="mt-1 text-sm text-red-500">{errors.lastname}</p>}
//           </div>
//         </div>

//         <div className="relative">
//           <Input
//             id="email"
//             name="email"
//             type="email"
//             placeholder=" "
//             value={values.email}
//             onChange={handleChange}
//             className="peer w-full bg-transparent border border-gray-600 rounded-md px-3 pt-6 pb-2 text-white focus:outline-none focus:border-purple-500"
//           />
//           <label
//             htmlFor="email"
//             className="absolute left-3 top-2 text-gray-400 transition duration-200 transform origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
//           >
//             Email Address
//           </label>
//           {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
//         </div>

//         <div className="relative">
//           <Input
//             id="phone"
//             name="phone"
//             type="tel"
//             placeholder=" "
//             value={values.phone}
//             onChange={handleChange}
//             className="peer w-full bg-transparent border border-gray-600 rounded-md px-3 pt-6 pb-2 text-white focus:outline-none focus:border-purple-500"
//           />
//           <label
//             htmlFor="phone"
//             className="absolute left-3 top-2 text-gray-400 transition duration-200 transform origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
//           >
//             Phone Number
//           </label>
//           {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
//         </div>

//         <button
//           type="submit"
//           className="relative group/btn bg-gray-950 w-full text-white rounded-md h-10 font-medium hover:text-violet-300 transition duration-300 ease-in-out flex items-center justify-center"
//         >
//           Register &rarr;
//           <BottomGradient />
//         </button>

//         <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
//       </form>
//     </div>
//   );
// }

// const BottomGradient: React.FC = () => (
//   <>
//     <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
//     <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
//   </>
// );














// TO DO & More interactive >>>
'use client'

import React, { FormEvent, useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Input } from './input'

interface FormValues {
  firstname: string
  lastname: string
  email: string
  phone: string
}

interface FormErrors {
  firstname?: string
  lastname?: string
  email?: string
  phone?: string
}

export function JoinTheWaitlist() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const incomingEmail = searchParams.get('email') ?? ''

  const [values, setValues] = useState<FormValues>({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})

  // If there's an incoming email query, seed it once
  useEffect(() => {
    if (incomingEmail) {
      setValues((v) => ({ ...v, email: incomingEmail }))
    }
  }, [incomingEmail])

  const validate = (): FormErrors => {
    const errs: FormErrors = {}
    const nameRegex = /^[A-Za-z]+$/
    const emailRegex = /^[\w-.]+@[\w-]+\.[A-Za-z]{2,}$/
    const phoneRegex = /^\+?[0-9]{7,15}$/

    if (!values.firstname) {
      errs.firstname = 'First name is required.'
    } else if (!nameRegex.test(values.firstname)) {
      errs.firstname = 'First name should contain letters only.'
    }

    if (!values.lastname) {
      errs.lastname = 'Last name is required.'
    } else if (!nameRegex.test(values.lastname)) {
      errs.lastname = 'Last name should contain letters only.'
    }

    if (!values.email) {
      errs.email = 'Email address is required.'
    } else if (!emailRegex.test(values.email)) {
      errs.email = 'Please enter a valid email address.'
    }

    if (!values.phone) {
      errs.phone = 'Phone number is required.'
    } else if (!phoneRegex.test(values.phone)) {
      errs.phone = 'Please enter a valid phone number.'
    }

    return errs
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    try {
      const response = await fetch('https://api.vectr.co.in/api/v1/form/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: values.firstname,
          lastName: values.lastname,
          email: values.email,
          contactNumber: values.phone,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        alert('You\'re Registered! 🎉🎉')
        router.push('/')
      } else {
        if (response.status === 400 && result.error === 'Email already exists.') {
          setErrors((prev) => ({ ...prev, email: result.error }))
        } else {
          alert(`Error: ${result.error || 'An unexpected error occurred.'}`)
        }
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('An error occurred while submitting the form. Please try again.')
    }
  }

  const labelClasses =
    'absolute left-3 top-2 text-gray-400 transition-opacity duration-200 ' +
    'opacity-0 peer-placeholder-shown:opacity-100'

  return (
    <div className="w-full mx-auto md:rounded-2xl shadow-input text-gray-300 flex items-center justify-center min-h-screen max-sm:flex-col">
      <div className="flex-col items-center justify-center w-full max-w-2xl p-2 select-none">
        <h2 className="font-bold text-6xl text-neutral-200 block sm:flex items-center sm:items-baseline">
          <span>Welcome to&nbsp;</span>
          <span className="text-purple-600">Vectr.</span>
        </h2>
        <p className="text-xl sm:text-2xl mt-2 text-neutral-500">
          Join the waitlist to get every notification of our platform.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="my-8 space-y-6 w-[90%] sm:w-full max-w-md">
        {/* Name fields */}
        <div className="flex flex-row space-y-2 md:space-y-0 md:space-x-2">
          {['firstname', 'lastname'].map((key) => (
            <div key={key} className="relative w-full">
              <Input
                id={key}
                name={key}
                type="text"
                placeholder=" "
                value={values[key as 'firstname' | 'lastname']}
                onChange={handleChange}
                className="peer w-full bg-transparent border border-gray-600 rounded-md px-3 pt-3 pb-2 text-white focus:outline-none focus:border-purple-500"
              />
              <label htmlFor={key} className={labelClasses}>
                {key === 'firstname' ? 'First Name' : 'Last Name'}
              </label>
              {errors[key as keyof FormErrors] && (
                <p className="mt-1 text-sm text-red-500">
                  {errors[key as keyof FormErrors]!}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Email field (seeded if ?email=) */}
        <div className="relative">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder=" "
            value={values.email}
            onChange={handleChange}
            className="peer w-full bg-transparent border border-gray-600 rounded-md px-3 pt-3 pb-2 text-white focus:outline-none focus:border-purple-500"
          />
          <label htmlFor="email" className={labelClasses}>
            Email Address
          </label>
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Phone field */}
        <div className="relative">
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder=" "
            value={values.phone}
            onChange={handleChange}
            className="peer w-full bg-transparent border border-gray-600 rounded-md px-3 pt-3 pb-2 text-white focus:outline-none focus:border-purple-500"
          />
          <label htmlFor="phone" className={labelClasses}>
            Phone Number
          </label>
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

        <button
          type="submit"
          className="relative group/btn bg-gray-950 w-full text-white rounded-md h-10 font-medium hover:text-violet-300 transition duration-300 ease-in-out flex items-center justify-center"
        >
          Join Waitlist &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  )
}

const BottomGradient: React.FC = () => (
  <>
    <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
    <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
)