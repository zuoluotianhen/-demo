import React from 'react';
import { LeaveSummary as LeaveSummaryType } from '../types';
import { 
  Briefcase, 
  Calendar, 
  Stethoscope, 
  Heart, 
  Clock, 
  HeartHandshake, 
  Baby, 
  Navigation 
} from 'lucide-react';

interface Props {
  summary: LeaveSummaryType;
}

export default function LeaveSummary({ summary }: Props) {
  const items = [
    { label: '事假申请', value: summary.事假, icon: Briefcase },
    { label: '年休假申请', value: summary.年休假, icon: Calendar },
    { label: '病假申请', value: summary.病假, icon: Stethoscope },
    { label: '丧假申请', value: summary.丧假, icon: Heart },
    { label: '调休假申请', value: summary.调休假, icon: Clock },
    { label: '婚假申请', value: summary.婚假, icon: HeartHandshake },
    { label: '生育假申请', value: summary.生育假, icon: Baby },
    { label: '外勤申请', value: summary.外勤, icon: Navigation },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {items.map(({ label, value, icon: Icon }) => (
        <div key={label} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-2">
            <Icon className="text-green-500" size={24} />
            <span className="text-3xl font-bold text-green-500">{value}</span>
          </div>
          <p className="text-gray-600 text-sm">{label}</p>
        </div>
      ))}
    </div>
  );
}