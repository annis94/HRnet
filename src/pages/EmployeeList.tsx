import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
} from '@tanstack/react-table';
import { RootState } from '../store/store';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface Employee {
  firstName: string;
  lastName: string;
  startDate: string;
  department: string;
  dateOfBirth: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

function EmployeeList() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const employees = useSelector((state: RootState) => state.employees.list);
  
  const columnHelper = createColumnHelper<Employee>();
  
  const columns = useMemo(
    () => [
      columnHelper.accessor('firstName', {
        header: 'First Name',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('lastName', {
        header: 'Last Name',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('startDate', {
        header: 'Start Date',
        cell: info => new Date(info.getValue()).toLocaleDateString(),
      }),
      columnHelper.accessor('department', {
        header: 'Department',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('dateOfBirth', {
        header: 'Date of Birth',
        cell: info => new Date(info.getValue()).toLocaleDateString(),
      }),
      columnHelper.accessor('street', {
        header: 'Street',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('city', {
        header: 'City',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('state', {
        header: 'State',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('zipCode', {
        header: 'Zip Code',
        cell: info => info.getValue(),
      }),
    ],
    [columnHelper]
  );

  const table = useReactTable({
    data: employees,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-xl font-semibold text-gray-900">Current Employees</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center space-x-1">
                      <span>{flexRender(header.column.columnDef.header, header.getContext())}</span>
                      {header.column.getIsSorted() ? (
                        header.column.getIsSorted() === 'asc' ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )
                      ) : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map(cell => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {employees.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No employees found. Create a new employee to see them listed here.
        </div>
      )}
    </div>
  );
}

export default EmployeeList;