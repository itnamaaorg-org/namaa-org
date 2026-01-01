function Achievements() {
  return (
    <div className="w-full bg-white py-16 lg:py-24 relative overflow-hidden">
      
      {/* خلفيات ضبابية */}
      <div className="absolute inset-0 opacity-[0.10] pointer-events-none">
        <div className="absolute top-32 right-40 w-72 h-72 bg-teal-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-green-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        
        {/* العناوين */}
        <div className="text-center mb-16">
          <p className="text-gray-600 text-sm mb-2">المزيد من إنجازاتنا</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            المزيد من الأرقام التي نفتخر بها
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* الأرقام */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <div className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-40 bg-teal-200/30 blur-3xl rounded-full"></div>
              <h3 className="text-3xl font-bold mb-2">350 ألف</h3>
              <p className="text-gray-700">
                ساعة تطوعية من شباب وشابات مؤمنين بالتغيير
              </p>
            </div>

            <div className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-40 bg-green-200/30 blur-3xl rounded-full"></div>
              <h3 className="text-3xl font-bold mb-2">+700</h3>
              <p className="text-gray-700">
                مشروع تم إنشاؤه مع &rdquo;تمكين&rdquo;
              </p>
            </div>

            <div className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-40 bg-teal-200/30 blur-3xl rounded-full"></div>
              <h3 className="text-3xl font-bold mb-2">5</h3>
              <p className="text-gray-700">
                حملة موسمية غيّرت ملامح المجتمعات المحلية
              </p>
            </div>

            <div className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-40 bg-green-200/30 blur-3xl rounded-full"></div>
              <h3 className="text-3xl font-bold mb-2">+229</h3>
              <p className="text-gray-700">
                ساعة تدريبية متخصصة
              </p>
            </div>

            {/* العنصر العريض */}
            <div className="md:col-span-2 relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-40 bg-teal-200/30 blur-3xl rounded-full"></div>
              <h3 className="text-3xl font-bold mb-2">عدد لا يُحصى</h3>
              <p className="text-gray-700">
                من القصص الملهمة التي بدأت من هنا
              </p>
            </div>

            <div className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-40 bg-green-200/30 blur-3xl rounded-full"></div>
              <h3 className="text-3xl font-bold mb-2">+7000</h3>
              <p className="text-gray-700">
                متدرب اكتسبوا مهارات تفتح لهم أبواب المستقبل
              </p>
            </div>

          </div>

                    {/* الصور */}
          <div className="relative w-full flex justify-center lg:center">
            {/* الصورة الكبيرة */}
            <div className="w-72 h-[420px] rounded-[200px] overflow-hidden shadow-md">
              <img
                src="/image11.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* الصورة الصغيرة */}
            <div className="absolute -bottom-10 -right-10 w-40 h-56 rounded-[120px] overflow-hidden shadow-lg">
              <img
                src="/image10.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Achievements;
