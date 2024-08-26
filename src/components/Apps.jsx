import apps from '../assets/Mobile-App-Development 1.png'

const Apps = () => {
  return (
    <div className='py-16 flex justify-between'>
        <div className='w-2/4'>
             <div>
               <h3 className='font-bold text-lg text-[rgba(0,19,90,1)] mb-6'>تصميم تطبيقات الجوال</h3>
               <p className='font-medium text-[rgba(0,19,90,1)] mb-6'>تصميم تطبيقات الجوال تصميم تطبيقات الجوال أو استخدام تطبيقات الهواتف الذكية وسيلة تعد تواصل فعالة بينك وبين عملائك فهي تسهل عليهم الوصول الفعال للخدمات أو المنتجات الخاصة بك عبر الجوال الخاص بهم بالإضافة أنها تزيد من تفاعل العملاء مع نشاطك التجاري وتحقق لك الوعي بالعلامة التجارية بما تقدمه من معلومات وعروض حول المنتجات الخاصة بك مما يمكنك من الحصول على أكبر عدد من العملاء المحتملين وزيادة حجم المبيعات</p>
             </div>
             <div>
               <h3 className='font-bold text-lg text-[rgba(0,19,90,1)] mb-6'>أهم فوائد تطبيقات الجوال لأعمالك:</h3>
               <ul>
                 <li className='text-sm font-medium text-[rgba(0,19,90,1)] mb-3'>الوصول إلى أكبر عدد ممكن من الفئات المختلفة للعملاء المستهدفين</li>
                 <li className='text-sm font-medium text-[rgba(0,19,90,1)] mb-3'>سهولة الوصول إلى بيانات العملاء المحتملين كالبريد الإلكتروني – حسابات التواصل الاجتماعي</li>
                 <li className='text-sm font-medium text-[rgba(0,19,90,1)] mb-3'>الترويج للمنتجات الجديدة من خلال العروض والخصومات الموسمية</li>
                 <li className='text-sm font-medium text-[rgba(0,19,90,1)] mb-3'>التواصل مع العملاء بشكل شخصي وبأقل مجهود في أقصر فترة ممكنة</li>
                 <li className='text-sm font-medium text-[rgba(0,19,90,1)] mb-3'>تحليل وقياس تفاعل العملاء مع محتوى التطبيق</li>
               </ul>
             </div>
        </div>
        <div>
            <img src={apps} alt='apps' />
        </div>
    </div>
  )
}

export default Apps