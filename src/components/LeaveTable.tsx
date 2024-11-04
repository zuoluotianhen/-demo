import React from 'react';
import { LeaveRequest, LeaveType } from '../types';
import { Trash2 } from 'lucide-react';

interface Props {
  title: LeaveType;
  requests: LeaveRequest[];
  onDelete: (id: string) => void;
}

export default function LeaveTable({ title, requests, onDelete }: Props) {
  if (requests.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="bg-green-500 text-white px-6 py-3 rounded-t-lg text-lg font-medium">
        {title}
      </h2>
      <div className="bg-white rounded-b-lg shadow-md overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">姓名</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">日期</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">天数</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {requests.map((request) => (
              <tr key={request.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {request.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {request.dates}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-green-600">
                  {request.days}天
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => onDelete(request.id)}
                    className="text-red-500 hover:text-red-700 transition-colors duration-200"
                    title="删除"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}