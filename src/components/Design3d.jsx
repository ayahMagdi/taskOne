import img1 from '../assets/1486548184_1380994313_1 1.png'
import img2 from '../assets/1690380673582 1 (1).png'
import img3 from '../assets/images (5) 1.png'
import img4 from '../assets/44be323d-ddd2-4b16-868d-cd163d08e528 1.png'
import img5 from '../assets/d4faf525-9703-44c6-8ecf-b803a395d4c5 1.png'
import img6 from '../assets/difference-earchive-e-invoice 1.png'
import img7 from '../assets/dizajn-interera-3d-modelirovanie.png'
import img8 from '../assets/images (1) 1.png'

const Design3d = () => {
  return (
    <div className='py-16'>
        <div className='mb-12'>
           <h3 className='font-medium text-lg text-[rgba(0,19,90,1)] mb-6'>مفهوم التصميم ال 3D</h3>
           <p className='font-medium text-[rgba(0,19,90,1)]'>يشير مصطلح تصميم 3D إلى إنشاء تصميمات ثلاثية الأبعاد؛ البُعد الأول (X) هو الطول، والبعد الثاني (Y) هو العرض، والبعد الثالث (Z) هو العمق <br></br>أو الارتفاع، باستخدام الأدوات والبرامج الحاسوبية. تُستخدم تصاميم 3D في العديد من المجالات، وتهدف إلى بناء فكرة واضحة عن المشروع أو المنتج، <br></br> إذ يمكنك تخيل الشكل النهائي بأبعاده الحقيقية، مما يساعد على إيصال الأفكار إلى العملاء بسهولة قبل تنفيذها.</p>
        </div>
        <div className='mb-12'>
           <h3 className='font-medium text-lg text-[rgba(0,19,90,1)] mb-6'>تصميم مؤتمرات و فاعليات</h3>
           <div className='flex justify-start items-center gap-10 h-[156px]'>
              <img src={img1} alt='img1' className='h-full w-[279px]' />
              <img src={img2} alt='img1' className='h-full w-[279px]' />
              <img src={img3} alt='img1' className='h-full w-[279px]' />
              <img src={img4} alt='img1' className='h-full w-[279px]' />
           </div>
        </div>
        <div className='mb-12'>
           <h3 className='font-medium text-lg text-[rgba(0,19,90,1)] mb-6'>تصميم وحدات و تصميمات خارجيه</h3>
           <div className='flex justify-start items-center gap-10 h-[156px]'>
              <img src={img5} alt='img1' className='h-full w-[279px]' />
              <img src={img6} alt='img1' className='h-full w-[279px]' />
              <img src={img7} alt='img1' className='h-full w-[279px]' />
              <img src={img8} alt='img1' className='h-full w-[279px]' />
           </div>
        </div>
    </div>
  )
}

export default Design3d