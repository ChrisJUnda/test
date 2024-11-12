// import { useEffect, useState } from "react";
// // import '../styles/login.css'
// import axios from "axios";

// function Login() {
//   useEffect(()=>{
//     axios.get('http://localhost:9090/users')
//     .then((response)=>{
//       console.log(response);
//     })
//     .catch((error)=>{
//       console.log(error);
//   })
//   }, [] )

    
//   return (
// //   {/* https://play.tailwindcss.com/MIwj5Sp9pw */}
// //   <div className="py-16">
// //     <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
// //       <div
// //         className="hidden lg:block lg:w-1/2 bg-cover"
// //         style={{
// //           backgroundImage:
// //             'url("https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80")'
// //         }}
// //       ></div>
// //       <div className="w-full p-8 lg:w-1/2">
// //         <h2 className="text-2xl font-semibold text-gray-700 text-center">
// //           Brand
// //         </h2>
// //         <p className="text-xl text-gray-600 text-center">Welcome back!</p>
// //         <a
// //           href="#"
// //           className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
// //         >
// //           <div className="px-4 py-3">
// //             <svg className="h-6 w-6" viewBox="0 0 40 40">
// //               <path
// //                 d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
// //                 fill="#FFC107"
// //               />
// //               <path
// //                 d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
// //                 fill="#FF3D00"
// //               />
// //               <path
// //                 d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
// //                 fill="#4CAF50"
// //               />
// //               <path
// //                 d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
// //                 fill="#1976D2"
// //               />
// //             </svg>
// //           </div>
// //           <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
// //             Sign in with Google
// //           </h1>
// //         </a>
// //         <div className="mt-4 flex items-center justify-between">
// //           <span className="border-b w-1/5 lg:w-1/4" />
// //           <a href="#" className="text-xs text-center text-gray-500 uppercase">
// //             or login with email
// //           </a>
// //           <span className="border-b w-1/5 lg:w-1/4" />
// //         </div>
// //         <div className="mt-4">
// //           <label className="block text-gray-700 text-sm font-bold mb-2">
// //             Email Address
// //           </label>
// //           <input
// //             className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
// //             type="email"
// //           />
// //         </div>
// //         <div className="mt-4">
// //           <div className="flex justify-between">
// //             <label className="block text-gray-700 text-sm font-bold mb-2">
// //               Password
// //             </label>
// //             <a href="#" className="text-xs text-gray-500">
// //               Forget Password?
// //             </a>
// //           </div>
// //           <input
// //             className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
// //             type="password"
// //           />
// //         </div>
// //         <div className="mt-8">
// //           <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
// //             Login
// //           </button>
// //         </div>
// //         <div className="mt-4 flex items-center justify-between">
// //           <span className="border-b w-1/5 md:w-1/4" />
// //           <a href="#" className="text-xs text-gray-500 uppercase">
// //             or sign up
// //           </a>
// //           <span className="border-b w-1/5 md:w-1/4" />
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// // </>
// <div className="py-20">
//   <div className="flex h-full items-center justify-center">
//     <div className="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-900 flex-col flex h-full items-center justify-center sm:px-4">
//       <div className="flex h-full flex-col justify-center gap-4 p-6">
//         <div className="left-0 right-0 inline-block border-gray-200 px-2 py-2.5 sm:px-4">
//           <form className="flex flex-col gap-4 pb-4">
//             <h1 className="mb-4 text-2xl font-bold  dark:text-white">Login</h1>
//             <div>
//               <div className="mb-2">
//                 <label
//                   className="text-sm font-medium text-gray-900 dark:text-gray-300"
//                   htmlFor="email"
//                 >
//                   Email:
//                 </label>
//               </div>
//               <div className="flex w-full rounded-lg pt-1">
//                 <div className="relative w-full">
//                   <input
//                     className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
//                     id="email"
//                     type="email"
//                     name="email"
//                     placeholder="email@example.com"
//                     required=""
//                   />
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="mb-2">
//                 <label
//                   className="text-sm font-medium text-gray-900 dark:text-gray-300"
//                   data-testid="flowbite-label"
//                   htmlFor="password"
//                 >
//                   Password
//                 </label>
//               </div>
//               <div className="flex w-full rounded-lg pt-1">
//                 <div className="relative w-full">
//                   <input
//                     className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
//                     id="password"
//                     type="password"
//                     name="password"
//                     required=""
//                   />
//                 </div>
//               </div>
//               <p className="mt-2 cursor-pointer text-blue-500 hover:text-blue-600">
//                 Forgot password?
//               </p>
//             </div>
//             <div className="flex flex-col gap-2">
//               <button
//                 type="submit"
//                 className="border transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed border-transparent bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white disabled:bg-gray-300 disabled:text-gray-700 rounded-lg "
//               >
//                 <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
//                   Login
//                 </span>
//               </button>
//               <button
//                 type="button"
//                 className="transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 disabled:bg-gray-300 disabled:text-gray-700 rounded-lg "
//               >
//                 <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
//                   <svg
//                     stroke="currentColor"
//                     fill="currentColor"
//                     strokeWidth={0}
//                     version="1.1"
//                     x="0px"
//                     y="0px"
//                     viewBox="0 0 48 48"
//                     enableBackground="new 0 0 48 48"
//                     height="1em"
//                     width="1em"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       fill="#FFC107"
//                       d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
//                     ></path>
//                     <path
//                       fill="#FF3D00"
//                       d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
//                     ></path>
//                     <path
//                       fill="#4CAF50"
//                       d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
//                     ></path>
//                     <path
//                       fill="#1976D2"
//                       d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
//                     ></path>
//                   </svg>
//                   Sign in with Google
//                 </span>
//               </button>
//               <button
//                 type="button"
//                 className="transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 disabled:bg-gray-300 disabled:text-gray-700 rounded-lg "
//               >
//                 <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
//                   <svg
//                     stroke="currentColor"
//                     fill="currentColor"
//                     strokeWidth={0}
//                     viewBox="0 0 448 512"
//                     height="1em"
//                     width="1em"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
//                   </svg>
//                   Sign in with Facebook
//                 </span>
//               </button>
//             </div>
//           </form>
//           <div className="min-w-[270px]">
//             <div className="mt-4 text-center dark:text-gray-200">
//               New user?
//               <a
//                 className="text-blue-500 underline hover:text-blue-600"
//                 href="/signup"
//               >
//                 Create account here
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>



//   );
// }

// export default Login;

import { useEffect, useState } from "react";
// import '../styles/login.css'
import axios from "axios";
import { Link } from "react-router-dom";
 
function Login() {
  useEffect(()=>{
    axios.get('http://localhost:8080/users')
    .then((response)=>{
      console.log(response);
    })
    .catch((error)=>{
      console.log(error);
  })
  }, [] )
 
   
  return (<div className="min-h-screen bg-gray-50 flex flex-col justify-center sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900">
        Login
      </h2>
    </div>
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form method="POST" action="#">
          <div className="mt-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Indirizzo email
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="email"
                name="email"
                placeholder="user@example.com"
                type="email"
                required=""
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Password
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="password"
                name="password"
                type="password"
                required=""
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="mt-6">
            <span className="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Log in
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
    <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
        Or <Link
          to="/registration"
          className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
        >
          create an account
        </Link>
      </p>
  </div>
 
 
 
  );
}
 
export default Login;