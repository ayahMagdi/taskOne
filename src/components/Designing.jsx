import design from '../assets/hero-img-sm 1.png'
import hoisting from '../assets/افضل-استضافة-مواقع 1.png'

const Designing = () => {
  return (
    <div className='py-16'>
        <h3 className='font-medium text-lg text-[rgba(0,19,90,1)] mb-8'>نقوم بإنشاء وتصميم مواقع الكترونية ذو تصميم إبداعي فريد مخصص فقط من أجلك. وذلك لأننا لا نستخدم التصميمات <br></br>الجاهزة ومن ثم التعديل عليها ولكننا نقوم بتصميم وإنشاء موقعك الإلكتروني بالكامل من البداية.</h3>
        <div className='flex justify-between'>
            <ul>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>دراسة محتوى موقعك ونشاطك التجاري ومنافسيك.</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>رسم مخطط مبدئي لتنظيم مراحل تنفيذ الموقع الإلكتروني.</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>البدء بتنفيذ التصميم بما يتناسب مع ألوان هوية اللوجو الخاص بك.</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>نتابع أساسيات SEO أثناء التنفيذ حتى يسهل استهداف محركات البحث.</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>نراعي في تنفيذنا أن يكون الموقع متوافق مع جميع الأجهزة والموبايلات.</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>نراعي أن يكون الموقع سريع وسهل الإستخدام وغير معقد.</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>تنفيذ التعديلات المطلوبة وإنشاء نسخة إحتياطية قبل التسليم.</li>
                <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>تسليم الموقع مع شرح كيفية إستخدامه وتعديل المحتوى فيه.</li>
            </ul>
            <div>
                <img src={design} alt='design' />
            </div>
        </div>
        <div className='flex justify-between pt-8'>
             <div>
                <img src={hoisting} alt='hoisting' />
            </div>
           <div>
                <h4 className='font-bold text-lg text-[rgba(0,19,90,1)] mb-8'>إستضافة المواقع الإلكترونية</h4>
                <ul>
                        <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>تتميز استضافة المواقع الإلكترونية لدينا بما يلي:</li>
                        <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>سيرفرات سريعة.</li>
                        <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>مدة تشغيل بنسبة 99.99%.</li>
                        <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>لوحة تحكم cPanel كاملة.</li>
                        <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>نسخ إحتياطية دورية بشكل مستمر.</li>
                        <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>مواصفات عالية ومساحات حسب الطلب.</li>
                        <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>شهادة SSL مجانية لأمان الموقع.</li>
                        <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>إيميلات رسمية بإسم موقعك.</li>
                        <li className='font-medium text-[rgba(0,19,90,1)] mb-5'>إستضافة خاصة وليست مشتركة .</li>
                    </ul>
           </div>
        </div>
    </div>
  )
}

export default Designing