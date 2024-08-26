import React from 'react'

const ContactContent = () => {
  return (
    <div className='bg-[rgba(0,19,90,1)] pt-10'>
        <div className='bg-[#455078] py-36 px-[200px] flex items-center  gap-10'>
            <div className='bg-white rounded-2xl w-7/12 px-14 py-14'>
                <input type='text' placeholder='الاسم كامل' className='border mb-9 py-4 px-6 w-full rounded-xl border-[#00000080]' />
                <input type='text' placeholder='البريد الالكتروني' className='border mb-9 py-4 px-6 w-full rounded-xl border-[#00000080]' />
                <input type='text' placeholder='رقم هاتف' className='border mb-9 py-4 px-6 w-full rounded-xl border-[#00000080]' />
                <textarea placeholder='اكتب رسالة' className='border mb-9 py-4 px-6 w-full rounded-xl border-[#00000080] h-[150px]' />
                <div className='flex justify-center items-center'>
                  <button className='bg-[rgba(0,19,90,1)] text-white text-center font-semibold px-16 rounded-lg py-3'>ارسل</button>
                </div>
            </div>
            <div className='w-5/12'>
               <h3 className='font-bold text-3xl text-white text-center mb-6'>اتصل بنا</h3>
               <div className='mb-9 py-4 px-6 w-full rounded-xl bg-white flex justify-between items-center'>
                  <p className='font-semibold text-lg'>البريد الالكتروني :</p>
                  <span>mangcoding123@gmail.com</span>
               </div>
               <div className='mb-9 py-4 px-6 w-full rounded-xl bg-white flex justify-between items-center'>
                  <p className='font-semibold text-lg'> رقم الهاتف :</p>
                  <span>mangcoding123@gmail.com</span>
               </div>
               <div className='mb-9 py-4 px-6 w-full rounded-xl bg-white flex justify-between items-center'>
                  <p className='font-semibold text-lg'> العنوان :</p>
                  <span>mangcoding123@gmail.com</span>
               </div>
               <div className='mb-9 w-full rounded-xl bg-white flex justify-between items-center'>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27653.563434705284!2d31.26165035!3d29.959438099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847f5e5c8055b%3A0x8b21ef9bc90d1941!2sAl%20Maadi%2C%20Maadi%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1724542424759!5m2!1sen!2seg" height="200" className='rounded-2xl' width='100%' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

               </div>
            </div>
        </div>
    </div>
  )
}

export default ContactContent