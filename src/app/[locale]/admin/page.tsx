'use client'
import Link from 'next/link';
import React from 'react';

export const route = [{
    label:'App and Website',
    value:'website-app'
},{
    label:'Social Media',
    value:'social-media'
},{
    label:'Problem and Solution',
    value:'peoblem-solution'
},{
    label:'Interview Tips',
    value:'interviewtips'
}]

function Admin() {
  return (
    <div className="flex flex-wrap gap-4 p-8 justify-center h-[100px]">
      {route?.map((rt, index) => (
          <Link href={`admin/${rt.value}`} key={index}>
            <button
          key={index}
          className="px-6 py-3 text-white font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          {rt.label}
        </button>
          </Link>
      ))}
    </div>
  );
}

export default Admin;
