'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { label: 'مشروع تمكين', href: '/projects/tamkeen' },
  { label: 'مشروع رفقاء نماء', href: '/projects/refaqa-namaa' },
  { label: 'المشاريع الموسمية', href: '/projects/seasonal-projects' },
];

export default function ProjectTabs() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-6">
      {tabs.map((tab) => (
        <Link key={tab.href} href={tab.href}>
          <span className={`block px-5 py-2.5 rounded-full border transition-all shadow-sm cursor-pointer text-sm font-medium whitespace-nowrap ${
            pathname === tab.href
              ? 'bg-green-600 text-white border-green-600 shadow-md'
              : 'bg-white text-gray-700 border-gray-200 hover:border-green-400 hover:text-green-700'
          }`}>
            {tab.label}
          </span>
        </Link>
      ))}
    </div>
  );
}
