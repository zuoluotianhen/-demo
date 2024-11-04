import React, { useState } from 'react';
import { LeaveRequest, LeaveType, LeaveSummary } from './types';
import LeaveForm from './components/LeaveForm';
import LeaveSummaryComponent from './components/LeaveSummary';
import LeaveTable from './components/LeaveTable';

function App() {
  const [requests, setRequests] = useState<LeaveRequest[]>([
    {
      id: '1',
      name: '向巍',
      type: '事假',
      dates: '2024年10月06日',
      days: 1,
    },
  ]);

  const summary: LeaveSummary = requests.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.type]: acc[curr.type as keyof LeaveSummary] + 1,
    }),
    { 事假: 0, 年休假: 0, 病假: 0, 丧假: 0, 调休假: 0, 婚假: 0, 生育假: 0, 外勤: 0 }
  );

  const handleSubmit = (data: Omit<LeaveRequest, 'id'>) => {
    const newRequest: LeaveRequest = {
      ...data,
      id: Date.now().toString(),
    };
    setRequests((prev) => [...prev, newRequest]);
  };

  const handleDelete = (id: string) => {
    setRequests((prev) => prev.filter((request) => request.id !== id));
  };

  const leaveTypes: LeaveType[] = ['事假', '年休假', '病假', '丧假', '调休假', '婚假', '生育假', '外勤'];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">请假记录表</h1>
          <p className="text-gray-600">2024年10月份请假统计</p>
        </div>

        <LeaveForm onSubmit={handleSubmit} />
        <LeaveSummaryComponent summary={summary} />

        {leaveTypes.map((type) => (
          <LeaveTable
            key={type}
            title={type}
            requests={requests.filter((r) => r.type === type)}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;