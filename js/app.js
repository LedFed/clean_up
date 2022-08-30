document.addEventListener('DOMContentLoaded', () => {
    let burger = document.querySelector('.menu');
    let navigation = document.querySelector('.header_itme')
    let checker = burger.querySelector('input[type=checkbox]');
    // let time = document.querySelector('inner')
    // console.log(document.querySelector('.page'));
    const BlcokScrol = () => {
        if(checker.checked) {
            navigation.classList.toggle('active');
            burger.classList.toggle('active');
            checker.checked = false;
            document.body.style.removeProperty('overflow');
        }
    }

    
    burger.addEventListener('change', () => {
        event.preventDefault();
        // if (checker.checked !== false) {
            navigation.classList.toggle('active');
            burger.classList.toggle('active');
            document.body.style.overflow = 'hidden'
            if(!checker.checked) {
                checker.checked = false;
                document.body.style.removeProperty('overflow');
            }
           
            // burger.closest('.active') 
            //     ? document.body.style.overflow = 'hidden'
            //         :document.body.style.removeProperty('overflow');
            // console.log(checker.checked);
            navigation.addEventListener('click', () => {
                BlcokScrol();
            })
    })

 

    const header = document.querySelector('header');
    const first = document.querySelector('.inner');
    let conteiner =  document.querySelector('.container');

    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;
        if (parseInt(scrollDistance) >= 250) {
            header.classList.add('fixed')
            conteiner.classList.add('crice')
        } else {
            header.classList.remove('fixed')
            first.style.marginTop = null;
        }
    })

    //Принимает два параметра функцию и опцию '0,7'
    const observer = new IntersectionObserver((entry) => {
        entry.forEach((entryes) => {
            // Если элемент пересекает
            if (entryes.isIntersecting) {
                //Находим все ссылки в QS и сравниваем с переданой секцией(entryes) если ок то выдаем класс active
                document.querySelectorAll('.heade_links').forEach((link) => {
                    link.classList.toggle('active',
                        link.getAttribute('href').replace('#', '') === entryes.target.id)
                })
            }
        })
    }, {
        threshold: 1.0,
        rootMargin: '90px',
    });
    // Тут мы нашли все наши секции и перебираем их вызывая для каждого элемента observer
    document.querySelectorAll('.section').forEach((section) => {
        observer.observe(section);
    })

    // Вешаем обработчик на все ссылки 
    document.querySelector('.header_itme').addEventListener('click', (event) => {
        // Если ссылка есть по клику то получаем ее href без "#" 
        if (event.target.classList.contains('heade_links')) {
            event.preventDefault();
            // const id = getId(event.target)
            const id = event.target.getAttribute('href').replace('#', '');
            // console.log(document.getElementById(id).offsetTop);
            // console.log(1);
            // Скролимся к блоку 
            window.scrollTo({
                top: document.getElementById(id).offsetTop-30,
                behavior: 'smooth',

            })
        }
    })

    new WOW().init();

    let Mblock = document.querySelector('.map_block')
    console.log(Mblock);
    let elipse = document.querySelector('.map_elipse_info');
    console.log(elipse);
    elipse.addEventListener('click' , () =>{
        Mblock.classList.toggle('flex');
    })

    document.addEventListener('click', (event) => {
        console.log(event.target);
    })
    // let aud = document
    // console.log(document.getElementById('servis').offsetTop);

    // let header = document.querySelector('header');
    // const inner = document.querySelector('inner');
    // // inner.innerHeight();
    // console.log(inner.innerHeight)
    // console.log(header);
    // const scroolOfsset = window.querySelector.scrollTop();

})