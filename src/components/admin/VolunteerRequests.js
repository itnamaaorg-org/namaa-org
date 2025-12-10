'use client';

import { useState, useEffect } from 'react';

export default function VolunteerRequests() {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await fetch('/api/volunteer-requests');
      
      if (res.ok) {
        const data = await res.json();
        setRequests(data);
      } else if (res.status === 401) {
        setError('غير مصرح لك بالوصول');
      } else {
        setError('فشل تحميل طلبات التطوع');
      }
    } catch (err) {
      setError('حدث خطأ أثناء تحميل طلبات التطوع');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectRequest = async (requestId) => {
    try {
      const res = await fetch(`/api/volunteer-requests/${requestId}`);
      if (res.ok) {
        const data = await res.json();
        setSelectedRequest(data);
      } else {
        setError('فشل تحميل تفاصيل الطلب');
      }
    } catch (err) {
      setError('حدث خطأ أثناء تحميل تفاصيل الطلب');
    }
  };

  const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('ar-JO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusBadge = (status) => {
    const statusMap = {
      pending: { text: 'قيد الانتظار', color: 'bg-yellow-100 text-yellow-800' },
      reviewed: { text: 'تمت المراجعة', color: 'bg-blue-100 text-blue-800' },
      contacted: { text: 'تم التواصل', color: 'bg-green-100 text-green-800' },
    };
    const statusInfo = statusMap[status] || statusMap.pending;
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color}`}>
        {statusInfo.text}
      </span>
    );
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - Request Details */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            {selectedRequest ? (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-gray-800">تفاصيل طلب التطوع</h2>
                  <button
                    onClick={() => setSelectedRequest(null)}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md transition-colors text-sm"
                  >
                    العودة للقائمة
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-500 mb-1">الاسم الكامل</label>
                    <p className="text-lg text-gray-900">{selectedRequest.fullName}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-500 mb-1">البريد الإلكتروني</label>
                    <p className="text-lg text-gray-900">{selectedRequest.email}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-500 mb-1">رقم الهاتف</label>
                    <p className="text-lg text-gray-900">{selectedRequest.phone}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-500 mb-1">المجال التطوعي المفضل</label>
                    <p className="text-lg text-gray-900">{selectedRequest.preferredField}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-500 mb-1">الرسالة</label>
                    <p className="text-lg text-gray-900 whitespace-pre-wrap bg-gray-50 p-4 rounded-md">
                      {selectedRequest.message}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-500 mb-1">الحالة</label>
                      {getStatusBadge(selectedRequest.status)}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-500 mb-1">تاريخ التقديم</label>
                      <p className="text-sm text-gray-700">{formatDate(selectedRequest.createdAt)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">اختر طلب تطوع لعرض التفاصيل</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar - Requests List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">قائمة الطلبات</h3>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {requests.length}
              </span>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-md text-sm">
                {error}
              </div>
            )}

            <div className="space-y-2 max-h-[calc(100vh-250px)] overflow-y-auto">
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <svg className="animate-spin h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              ) : requests.length === 0 ? (
                <p className="text-center text-gray-500 py-8">لا توجد طلبات تطوع</p>
              ) : (
                requests.map((request) => (
                  <div
                    key={request._id}
                    onClick={() => handleSelectRequest(request._id)}
                    className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      selectedRequest?._id === request._id
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-gray-800 flex-1">
                        {request.fullName}
                      </h4>
                      {getStatusBadge(request.status)}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{request.email}</p>
                    <p className="text-sm text-gray-500 mb-2">{request.preferredField}</p>
                    <p className="text-xs text-gray-400">{formatDate(request.createdAt)}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

