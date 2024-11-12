

import { useEffect, useState } from "react";
import axios from "axios";
 

 
function Scelta() {
   return (
    <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
    <thead className="bg-gray-50">
      <tr>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Name
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Title
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Status
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Role
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Email
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Actions
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img
                className="h-10 w-10 rounded-full"
                src="https://i.pravatar.cc/150?img=1"
                alt=""
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
              <div className="text-sm text-gray-500">jane.cooper@example.com</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">
            Regional Paradigm Technician
          </div>
          <div className="text-sm text-gray-500">Optimization</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            Inactive
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          Admin
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          jane.cooper@example.com
        </td>
        <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
          <a href="#" className="text-indigo-600 hover:text-indigo-900">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
  Contatta
</button>
          </a>
          <a href="#" className="ml-2 text-red-600 hover:text-red-900">
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
  Scarta
</button>
          </a>
        </td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img
                className="h-10 w-10 rounded-full"
                src="https://i.pravatar.cc/150?img=1"
                alt=""
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
              <div className="text-sm text-gray-500">jane.cooper@example.com</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">
            Regional Paradigm Technician
          </div>
          <div className="text-sm text-gray-500">Optimization</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Active
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          Admin
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          jane.cooper@example.com
        </td>
        <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
          <a href="#" className="text-indigo-600 hover:text-indigo-900">
            Edit
          </a>
          <a href="#" className="ml-2 text-red-600 hover:text-red-900">
            Delete
          </a>
        </td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img
                className="h-10 w-10 rounded-full"
                src="https://i.pravatar.cc/150?img=1"
                alt=""
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
              <div className="text-sm text-gray-500">jane.cooper@example.com</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">
            Regional Paradigm Technician
          </div>
          <div className="text-sm text-gray-500">Optimization</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Active
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          Admin
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          jane.cooper@example.com
        </td>
        <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
          <a href="#" className="text-indigo-600 hover:text-indigo-900">
            Edit
          </a>
          <a href="#" className="ml-2 text-red-600 hover:text-red-900">
            Delete
          </a>
        </td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img
                className="h-10 w-10 rounded-full"
                src="https://i.pravatar.cc/150?img=1"
                alt=""
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
              <div className="text-sm text-gray-500">jane.cooper@example.com</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">
            Regional Paradigm Technician
          </div>
          <div className="text-sm text-gray-500">Optimization</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Active
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          Admin
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          jane.cooper@example.com
        </td>
        <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
          <a href="#" className="text-indigo-600 hover:text-indigo-900">
            Edit
          </a>
          <a href="#" className="ml-2 text-red-600 hover:text-red-900">
            Delete
          </a>
        </td>
      </tr>
      {/* More rows... */}
    </tbody>
  </table> 
    

    
  );
}
 
export default Scelta;
