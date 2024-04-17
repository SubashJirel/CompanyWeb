import React from 'react';

const TableRow = ({ jobTitle, jobType, location, status }) => {
  return (
    <tr className="border-b">
      <td className="p-2 align-middle font-semibold">{jobTitle}</td>
      <td className="p-2 align-middle">{jobType}</td>
      <td className="p-2 align-middle">{location}</td>
      <td className="p-2 align-middle text-right">
        {status === 'Closed' ? (
          <span className="flex items-center justify-center gap-1 rounded-full bg-red-100 px-2 py-1 font-medium text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-dot"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="1"></circle>
            </svg>
            {status}
          </span>
        ) : (
          <a
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium border shadow-sm h-10 rounded-md px-8 border-orange text-orange"
            href="#"
          >
            Apply
          </a>
        )}
      </td>
    </tr>
  );
};

function CareerOpportunitiesTable() {
  return (
    <table className="w-full caption-bottom text-sm">
      <tbody>
        <TableRow
          jobTitle="Frontend Intern (MERN Stack)"
          jobType="Full Time"
          location="Lalitpur, Kathmandu"
          status="Closed"
        />
        <TableRow
          jobTitle="Marketing Executive"
          jobType="Full Time"
          location="Nepal (with potential for international travel)"
          status="Apply"
        />
      </tbody>
    </table>
  );
}

export default CareerOpportunitiesTable;
