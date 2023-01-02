

import { useEffect } from 'react';
import auto2 from './images/auto2.jpg';
import auto3 from './images/auto3.jpg';
import auto4 from './images/auto4.jpg';
import auto5 from './images/auto5.jpg';
import militaty from './images/military.jpg';
import service from './images/service.jpg'
import scheme1 from './images/scheme1.jpg'
import scheme2 from './images/scheme2.jpg'
import scheme3 from './images/scheme3.jpg'
import plan1 from './images/plan1.jpg'
import plan2 from './images/plan2.jpg'
import vid1 from './images/vid1.mp4';
import vid2 from './images/vid2.mp4';
import vid3 from './images/vid3.mp4';
import vid4 from './images/vid4.MP4';
import torpedo from './images/torpedo.png'
import Header from './Header';
import Aos from 'aos';
import 'aos/dist/aos.css';
import kulikov from './images/team/kulikov.jpg'
import anton from './images/team/anton.jpg'
import artem from './images/team/artem.jpg'
import nikol from './images/team/nikol.png'
import vlad from './images/team/vlad.jpg'
import viktor from './images/team/viktor.jpg'


const Main = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
            <Header/>
            <div className='flex flex-col bg-black scroll-smooth'>
                <div className="overflow-hidden flex sm:bg-center justify-center items-center h-screen bg-no-repeat w-screen bg-cover sm:w-auto">
                    <div className='text-green-500 font-bold' data-aos='fade'>Torpedo Military</div>
                    <div className='text-white' data-aos='fade'>Проект разработки современной электрической военной техники для армии Российской Федерации.</div>
                </div>
                <div id='advt' className='text-center w-100% p-5'>
                    <div className='m-auto text-[200%] sm:text-[300%] font-bold w-max bg-gradient-to-r bg-clip-text text-transparent from-purple-500 via- to-sky-400 animate-text'>ПРЕИМУЩЕСТВА</div>
                </div>
                <div className='flex flex-col justify-center items-center text-white gap-10'>
                    <div className='flex flex-col gap-3 text-white text-center items-center'>
                        <div><img src={auto3} alt='auto2' className='w-[100%] m-auto' data-aos='fade-up'/></div>
                        <div className='font-bold text-[130%]' data-aos='fade-up'>Простая конструкция</div>
                        <div className='sm:w-[50%] w-[90%]' data-aos='fade-up'>Дешевле за счет модульной унифицированной конструкции и отсутствия сложных для производства деталей, требующих дорогостоящего оборудования (узкопрофильных станков)</div>
                    </div>
                    <div className='flex flex-col gap-3 text-white text-center items-center'>
                        <div><img src={auto2} alt='auto2' className='w-[100%] m-auto' data-aos='fade-up'/></div>
                        <div className='font-bold text-[130%]' data-aos='fade-up'>Высокая маневренность</div>
                        <div className='sm:w-[50%] w-[90%]' data-aos='fade-up'>Машина обладает более высокой маневренностью среди конкурентов, упрощает парковку (имеется боковой ход) может делать разворот на месте.</div>
                    </div>
                    <div className='flex flex-col gap-3 text-white text-center items-center'>
                        <div><img src={auto4} alt='auto2' className='w-[100%] m-auto' data-aos='fade-up'/></div>
                        <div className='font-bold text-[130%]' data-aos='fade'>Лучшая безопасность</div>
                        <div className='sm:w-[50%] w-[90%]' data-aos='fade'>Обладает инновационной системой курсовой устойчивости за счет управления каждым мотором на каждое колесо в зависимости от угла поворота руля.</div>
                    </div>
                    <div className='flex flex-col gap-3 text-white text-center items-center'>
                        <div><img src={auto5} alt='auto2' className='w-[100%] m-auto' data-aos='fade-up'/></div>
                        <div className='font-bold text-[130%]' data-aos='fade'>Возможность передвижения по воде</div>
                        <div className='sm:w-[50%] w-[90%]' data-aos='fade'>Имеет возможность преодолевать водные преграды за счет возможности использования герметичного корпуса тк нету рулевых тяг и проводов на колеса.</div>
                    </div>
                </div>
                <div id='eng' className='text-center w-100% p-5'>
                    <div className='m-auto text-[200%] sm:text-[300%] font-bold w-max bg-gradient-to-r bg-clip-text text-transparent from-purple-500 via- to-sky-400 animate-text w-auto'>РАЗРАБОТКА</div>
                </div>
                <div className='flex flex-col justify-center items-center text-white gap-10'>
                    <div className='flex flex-col gap-3 text-white text-center items-center'>
                        <video src={vid4} className='w-[100%] h-[100%] sm:w-screen' loop autoPlay muted/>
                    </div>
                    <div className='flex flex-col gap-3 text-white text-center items-center'>
                        <video src={vid2} className='w-[100%] h-[100%] sm:w-screen' loop autoPlay muted/>
                    </div>
                    <div className='flex flex-col gap-3 text-white text-center items-center'>
                        <video src={vid3} className='w-[100%] h-[100%] sm:w-screen' loop autoPlay muted/>
                    </div>
                    <div className='flex flex-col gap-3 text-white text-center items-center'>
                        <video src={vid1} className='w-[100%] h-[100%] sm:w-screen' loop autoPlay muted/>
                    </div>
                    <div><img src={scheme1} alt='auto2' className='w-[100%] m-auto' data-aos='fade-up'/></div>
                    <div><img src={scheme2} alt='auto2' className='w-[100%] m-auto' data-aos='fade-up'/></div>
                    <div><img src={scheme3} alt='auto2' className='w-[100%] m-auto' data-aos='fade-up'/></div>
                </div>
                <div id='act' className='text-center w-100% p-5'>
                     <div className='m-auto text-[200%] sm:text-[300%] font-bold w-max bg-gradient-to-r bg-clip-text text-transparent from-purple-500 via- to-sky-400 animate-text w-auto'>БИЗНЕС-ПЛАН</div>
                </div>
                <div className='flex flex-col items-center justify-center text-white gap-5 text-center sm:text-[50px] text-[140%]'>
                    <div className='flex flex-col text-white' data-aos='slide-up'>
                        <div><img src={plan1} alt='auto2' className='w-[100%] m-auto'/></div>
                        <div className='font-bold text-green-500'>Вложения в производство</div>
                        <div>Примерные цифры для вложения в первую линию производства</div>
                    </div>
                    <div className='flex flex-col text-white' data-aos='slide-up'>
                        <div><img src={plan2} alt='auto2' className='w-[100%] m-auto'/></div>
                        <div className='font-bold text-green-500'>Вложения в опытный образец</div>
                        <div>Необходимые расходы, чтобы протестировать первый образец и закончить его окончательный вариант</div>
                    </div>
                </div>

                <div id='tem' className='text-white m-auto sm:text-[100px] text-[150%] pt-[30%] pb-[10%] sm:pt-[15%]'>
                    Команда проекта
                </div>

                <div className='sm:flex sm:items-center sm:w-auto sm:justify-center bg-black pt-20 pb-10'>
                <div className='flex flex-col sm:flex-row justify-center text-center text-white gap-10 mb-[10vh] sm:flex-wrap sm:w-[70%]'>
                    <div className='flex flex-col gap-3 items-center' data-aos='fade'>
                        <img src={kulikov} alt='kulikov' className='rounded-full w-[30vh]'/>
                        <div className='font-bold sm:w-[300px]'>Вадим Геннадьевич Куликов</div>
                        <div className='w-[55%] sm:w-[230px]'>Окончил Энергетический факультет МГТУ им. Баумана, является Заслуженным изобретателем России.</div>
                        <a href='https://industrytv.ru/series/vadim_kulikov/' className='w-[55%] sw:w-[230px] text-blue-800'>Интервью</a>
                    </div>
                    <div className='flex flex-col gap-3 items-center' data-aos='fade'>
                        <img src={anton} alt='anton' className='rounded-full w-[30vh]'/>
                        <div className='font-bold sm:w-[300px]'>Троицкий Антон Александрович</div>
                        <div className='w-[55%] sm:w-[230px]'>Окончил Специальный машиностроительный факультет МГТУ им. Баумана, экономический университет им. Г.В Плеханова, является квалифицированным инженером.</div>
                    </div>
                    <div className='flex flex-col gap-3 items-center' data-aos='fade'>
                        <img src={nikol} alt='nikol' className='rounded-full w-[30vh]'/>
                        <div className='font-bold sm:w-[300px]'>Серов Николай Владимирович</div>
                        <div className='w-[55%] sm:w-[230px]'>Специалист программирования на языках близких к железу. Закончил МГТУ "Станкин", MBA Engineering Wilhelm Buchner Hochschule, СберУниверситет.</div>
                    </div>
                    <div className='flex flex-col gap-3 items-center' data-aos='fade'>
                        <img src={artem} alt='artem' className='rounded-full w-[30vh]'/>
                        <div className='font-bold sm:w-[300px]'>Троицкий Артем Александрович</div>
                        <div className='w-[65%] sm:w-[230px]'>Окончил аспирантуру МИРЭА, написал диссератцию на тему «Распознавание изображений в сверхширокополосном радиовидении при обнаружении беспилотных летательных аппаратов», присвоена квалификация «Исследователь. Преподаватель-исследователь».</div>
                    </div>
                    <div className='flex flex-col gap-3 items-center' data-aos='fade'>
                        <img src={vlad} alt='vlad' className='rounded-full w-[30vh]'/>
                        <div className='font-bold sm:w-[300px]'>Кошевой Владимир Николаевич</div>
                        <div className='w-[55%] sm:w-[230px]'>Независимый дизайнер. Окончил университет машиностроения МАМИ по специальности "Дизайн автомобилей". Участник конкурса "Боевой автомобиль XXI века".</div>
                        <a href='https://www.behance.net/koshevoy28c645' className='w-[55%] sw:w-[230px] text-blue-800'>Портфолио</a>
                    </div>
                    <div className='flex flex-col gap-3 items-center' data-aos='fade'>
                        <img src={viktor} alt='viktor' className='rounded-full w-[30vh]'/>
                        <div className='font-bold sm:w-[300px]'>Колесников Виктор Андреевич</div>
                        <div className='w-[55%] sm:w-[230px]'>Студент 4го курса Финансового университета при Правительстве РФ, специализируется на веб-разработке, макроэкономике, цифровых финансах.</div>
                    </div>
                </div>

            </div>


            <div className='flex flex-col sm:flex gap-6 text-white justify-center items-center w-[100%]'>
                <div className='sm:w-[50%] w-[100%]'><img src={torpedo} alt='torpedoimg'/></div>
                <a href='https://qiwi.com/p/79686829745'><div className='border-solid border-4 rounded-tl-lg rounded-br-lg border-white text-center justify-center m-auto sm:text-[40px] text-[110%] p-5 mb-20 cursor-pointer font-bold hover:bg-white hover:text-black'>Инвестировать</div></a>
            </div>

            <div className="black">
            <div className="flex flex-col items-center justify-center text-white p-2">
                <a href='https://t.me/fakelEl'>Telegram</a>
                <a href='#'>anton-troickii@mail.ru</a>
                <a href='#'>+7 916 971 5291</a>
            </div>
        </div>




            </div>
        </>
    )
}

export default Main;
