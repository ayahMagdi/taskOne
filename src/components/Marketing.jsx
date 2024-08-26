import servImg from '../assets/832 1.png'

const Marketing = () => {

  return (
    <div className='py-16 flex justify-between'>
        <div>
            <h3 className='text-lg font-medium text-[rgba(0,19,90,1)] mb-8'>يتعدد التسويق الالكتروني الي عده اقسام</h3>
            <ul>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>إدارة حسابات التواصل الاجتماعي</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>التسويق على فيسبوك</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>التسويق عبر الانستقرام</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>التسويق عبر البريد الإلكتروني</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>تحليل SEO شامل</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>تحليل SEO المتاجر الإلكترونية</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>خطط تسويقية</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>التسويق عبر محركات البحث SEM</li>
            </ul>
        </div>
        <div>
            <h3 className='text-lg font-medium text-[rgba(0,19,90,1)] mb-8'>تحسين محركات البحث</h3>
            <ul>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>بحث كلمات مفتاحيه</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>باك لينك</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>جيست بوست</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>ال SEO المحلي LOCAL SEO</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>تحليل SEO شامل</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>تحليل SEO المتاجر الإلكترونية</li>
            </ul>
        </div>
        <div>
            <h3 className='text-lg font-medium text-[rgba(0,19,90,1)] mb-8'>اساليب التسويق</h3>
            <ul>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>اعلانات المواقع</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>التسويق عبر المنتديات</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>تسويق قواعد البيانات</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>تسويق تطبيقات الجوال</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>التسويق عبر الشبكات الاعلانيه</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>التسويق عبر محركات البحث SEM</li>
            </ul>
        </div>
        <div>
            <img src={servImg} alt='service'/>
        </div>
    </div>
  )
}

export default Marketing