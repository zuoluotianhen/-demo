import React, { useState } from 'react';
import { LeaveType } from '../types';
import { Calendar, User, Clock } from 'lucide-react';

interface LeaveFormProps {
  onSubmit: (data: {
    name: string;
    type: LeaveType;
    dates: string;
    days: number;
  }) => void;
}

export default function LeaveForm({ onSubmit }: LeaveFormProps) {
  const [name, setName] = useState('');
  const [type, setType] = useState<LeaveType>('事假');
  const [dates, setDates] = useState('');
  const [days, setDays] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      type,
      dates,
      days: Number(days),
    });
    setName('');
    setDates('');
    setDays('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">提交请假申请</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <span className="flex items-center gap-2">
              <User size={18} />
              姓名
            </span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">请假类型</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as LeaveType)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="事假">事假</option>
            <option value="年休假">年休假</option>
            <option value="病假">病假</option>
            <option value="丧假">丧假</option>
            <option value="调休假">调休假</option>
            <option value="婚假">婚假</option>
            <option value="生育假">生育假</option>
            <option value="外勤">外勤</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <span className="flex items-center gap-2">
              <Calendar size={18} />
              请假日期
            </span>
          </label>
          <input
            type="text"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            placeholder="例：2024年10月06日"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <span className="flex items-center gap-2">
              <Clock size={18} />
              天数
            </span>
          </label>
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            step="0.5"
            min="0.5"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-200"
        >
          提交申请
        </button>
      </div>
    </form>
  );
}