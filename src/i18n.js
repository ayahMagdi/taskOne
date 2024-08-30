import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'

i18n
  .use(LanguageDetector)
  .use(initReactI18next).init({
    debug: true,
    returnObjects: true,
    lng: "ar",
    resources: {
        en:{
             translation:{
                navlinks: ['home','about','services','works','contact'],
                main: {text1: 'enjoy the best',text2: 'technological services',btn:"join us"},
                services:[
                  {text: 'digital marketing',active: 'marketing'},
                  {text: 'website and system design' , active: 'design'},
                  {text: '3d design' , active: '3d'},
                  {text: 'electronic archiving services' , active: 'archive'},
                  {text: 'mobile apps' , active: 'apps'}
                ]
             }
        },
        ar:{
            translation:{
                navlinks: ['الرئيسية','من نحن','الخدمات','اعمالنا','تواصل معنا'],
                main: {text1: 'تمتع بأفضل ' ,text2: "الخدمات التكنولوجية",btn:"انضم الينا"},
                services:[
                  {text: 'تسويق الكتروني',active: 'marketing'},
                  {text: 'تصميم مواقع وانظمة' , active: 'design'},
                  {text: 'تصميم 3d' , active: '3d'},
                  {text: 'خدمات ارشفة الكترونية' , active: 'archive'},
                  {text: 'تطبيقات الموبايل Android_ios' , active: 'apps'}
                ]
             }
        }
    }
  })