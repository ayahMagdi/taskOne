import React from 'react'
import ServWithImg from './ServWithImg'

import serv1 from '../assets/أنواع-وخصائص-التسويق-الإلكتروني 3.png'
import serv2 from '../assets/تصميم-واجهات-معمارية-3D 1.png'
import serv3 from '../assets/difference-earchive-e-invoice 1.png'
import serv4 from '../assets/web-development-aux-1 2.png'
import serv5 from '../assets/images (5) 1.png'
import SectionBtn from './SectionBtn'

const Services = () => {
  return (
    <div className='py-8 bg-serv-bg bg-cover bg-no-repeat'>
        <h2 className='text-[rgba(0,19,90,1)] font-bold text-xl text-center'>الخدمات</h2>
        <div className='my-12 mx-[200px]'>
            <div className='flex items-center gap-40 mb-12'>
               <ServWithImg title='تسويق الكتروني' img={serv1} />
               <div className='w-[70%] flex gap-28 text-[rgba(0,19,90,1)]'>
                 <ul>
                    <li className='font-medium mb-3'>إدارة حسابات التواصل الاجتماعي</li>
                    <li className='font-medium mb-3'>التسويق على فيسبوك</li>
                    <li className='font-medium mb-3'>التسويق عبر الانستقرام</li>
                    <li className='font-medium mb-3'>التسويق عبر البريد الإلكتروني</li>
                 </ul>
                 <ul>
                    <li className='font-medium mb-3'>تحليل SEO شامل</li>
                    <li className='font-medium mb-3'>تحليل SEO المتاجر الإلكترونية</li>
                    <li className='font-medium mb-3'>خطط تسويقية</li>
                    <li className='font-medium mb-3'>التسويق عبر محركات البحث SEM</li>
                 </ul>
               </div>
            </div>
            <div className='flex items-center gap-40 mb-12'>
               
               <div className='w-[55%] flex gap-28 text-[rgba(0,19,90,1)]'>
                  <p className='text-[rgba(0,19,90,1)] font-medium text-lg leading-8'>نقوم بإنشاء وتصميم مواقع الكترونية ذو تصميم إبداعي فريد مخصص فقط من أجلك. وذلك لأننا لا نستخدم التصميمات الجاهزة ومن ثم التعديل عليها ولكننا نقوم بتصميم وإنشاء موقعك الإلكتروني بالكامل من البداية.</p>
               </div>
               <ServWithImg title='تصميم مواقع و انظمه' img={serv4} />
            </div>
            <div className='flex items-center gap-40 mb-12'>
               <ServWithImg title='تصميم 3D' img={serv2} />
               
               <div className='w-[55%] flex gap-28 text-[rgba(0,19,90,1)]'>
                  <p className='text-[rgba(0,19,90,1)] font-medium text-lg leading-8'>يشير مصطلح تصميم 3D إلى إنشاء تصميمات ثلاثية الأبعاد؛ البُعد الأول (X) هو الطول، والبعد الثاني (Y) هو العرض، والبعد الثالث (Z) هو العمق أو الارتفاع، باستخدام الأدوات والبرامج الحاسوبية. تُستخدم تصاميم 3D في العديد من المجالات، وتهدف إلى بناء فكرة واضحة عن المشروع أو المنتج، إذ يمكنك تخيل الشكل النهائي بأبعاده الحقيقية، مما يساعد على إيصال الأفكار إلى العملاء بسهولة قبل تنفيذها.</p>
               </div>
            </div>
            <div className='flex items-center gap-40 mb-12'>
               
               <div className='w-[55%] flex gap-28 text-[rgba(0,19,90,1)]'>
                  <p className='text-[rgba(0,19,90,1)] font-medium text-lg leading-8'>تصميم تطبيقات الجوال أو استخدام تطبيقات الهواتف الذكية وسيلة تعد تواصل فعالة بينك وبين عملائك فهي تسهل عليهم الوصول الفعال للخدمات أو المنتجات الخاصة بك عبر الجوال الخاص بهم بالإضافة أنها تزيد من تفاعل العملاء مع نشاطك التجاري وتحقق لك الوعي بالعلامة التجارية بما تقدمه من معلومات وعروض حول المنتجات الخاصة بك مما يمكنك من الحصول على أكبر عدد من العملاء المحتملين وزيادة حجم المبيعات</p>
               </div>

               <ServWithImg title='تطبيقات موبايل Android _ ios' img={serv5} />
            </div>
            <div className='flex items-center gap-40 mb-12'>

               <ServWithImg title='خدمات ارشفه الكترونيه' img={serv3} />
               
               <div className='w-[55%] flex gap-28 text-[rgba(0,19,90,1)]'>
                  <p className='text-[rgba(0,19,90,1)] font-medium text-lg leading-8'>تعد الأرشفة الألكترونية من الأساليب الحديثة في نظم المعلومات والأتصالات والتي احدثت انقلاباً جذرياً على المفهوم التقليدي القديم للوثائق الورقية وآلية حفظها وأرشفتها وتداولها . حيث شهد العقد الأخير من القرن العشرين تطورات عميقة وشاملة</p>
               </div>

            </div>
        </div>
        <SectionBtn link='/services' />
    </div>
  )
}

export default Services