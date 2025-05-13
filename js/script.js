function toggleSkillList(id) {
    // Получаем все элементы ul с классом hidden
    const allLists = document.querySelectorAll('.skill-list ul');
    
    // Закрываем все списки и возвращаем стрелки в исходное положение
    allLists.forEach(list => {
        if (list.id !== id) {
            list.classList.add('hidden');
            if (list.previousElementSibling) {
                list.previousElementSibling.querySelector('.arrow-down').style.transform = 'rotate(0deg)';
            }
        }
    });

    // Получаем текущий список по id
    const currentList = document.getElementById(id);

    // Переключаем состояние текущего списка
    if (currentList.classList.contains('hidden')) {
        currentList.classList.remove('hidden');
        currentList.previousElementSibling.querySelector('.arrow-down').style.transform = 'rotate(180deg)';
    } else {
        currentList.classList.add('hidden');
        currentList.previousElementSibling.querySelector('.arrow-down').style.transform = 'rotate(0deg)';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: [0.5] });

    document.querySelectorAll('.animate').forEach(el => {
        observer.observe(el);
    });
});

document.getElementById('toggleButton').addEventListener('click', function() {
    var hiddenText = document.querySelector('.hidden-text');
    if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
        hiddenText.style.display = 'block';
        this.textContent = translations[document.documentElement.lang].toggleButton.replace("Развернуть", "Свернуть").replace("Expand", "Collapse").replace("Разгарнуць", "Згарнуць");
    } else {
        hiddenText.style.display = 'none';
        this.textContent = translations[document.documentElement.lang].toggleButton;
    }
});

// Объект с переводами
const translations = {
    ru: {
        headerTitle: "Александр Витко",
        email: "sasavitko552@gmail.com",
        phone: "+375 (29) 360-81-84",
        aboutMe: "О себе",
        aboutText1: "Я — целеустремленный и креативный программист с более чем 13 годами опыта разработки веб-приложений, мобильных решений и серверных систем. Мой профессиональный путь начался с простых скриптов на языке программирования Basic еще в школьные годы, а сегодня я занимаюсь созданием сложных и масштабируемых приложений, которые решают реальные проблемы пользователей по всему миру.",
        aboutText2: "За эти годы я успел поработать над множеством проектов различной сложности, от небольших стартапов до крупных корпоративных решений. Один из моих первых значимых проектов был связан с созданием системы управления контентом для интернет-магазина, который затем вырос в успешную платформу с тысячами активных пользователей. Этот опыт позволил мне глубже понять принципы работы с клиентами, требованиями и их ожиданиями от продукта.",
        aboutText3: "Моя основная специализация лежит в области веб-разработки, где я работаю с такими технологиями, как JavaScript, TypeScript, React, Angular, Vue.js, Node.js и Django. Я также имею богатый опыт в разработке мобильных приложений под Android и iOS, используя такие фреймворки, как React Native и Flutter. Эти технологии позволяют мне создавать кросс-платформенные решения, которые работают одинаково хорошо на всех устройствах и обеспечивают отличный пользовательский опыт.",
        aboutText4: "Помимо фронтенда и бэкенда, я также занимался разработкой серверных систем и микросервисной архитектуры. В этом направлении я использовал такие технологии, как Docker, Kubernetes, PostgreSQL, MongoDB, Redis и RabbitMQ. Эти инструменты позволяют создавать высоконадежные и масштабируемые системы, которые могут обрабатывать огромные объемы данных и обеспечивать бесперебойную работу даже при высоких нагрузках.",
        aboutText5: "В своей работе я всегда стремлюсь к тому, чтобы код был не только функциональным, но и чистым, легко поддерживаемым и расширяемым. Я твердо убежден, что хороший код — это тот, который можно легко понять и модифицировать другим разработчикам. Поэтому я уделяю большое внимание документации, тестированию и рефакторингу. Кроме того, я стараюсь следовать современным методологиям разработки, таким как Agile и Scrum, которые помогают эффективно организовать процесс работы и взаимодействие внутри команды.",
        aboutText6: "Работая в команде, я всегда стараюсь быть гибким и адаптироваться к текущим условиям. Я умею четко формулировать свои мысли и идеи, а также внимательно слушать других участников команды. Это позволяет нам находить наиболее оптимальные решения и быстро достигать поставленных целей. В то же время, я способен работать самостоятельно и брать на себя ответственность за выполнение задач любой сложности. Независимость и самостоятельность в работе — важные качества, которые я развивал на протяжении всей своей карьеры.",
        aboutText7: "Инновационные подходы и креативное мышление — это то, что отличает меня как специалиста. Я всегда стараюсь предлагать нестандартные решения, которые могут дать новый импульс развитию проекта. Например, в одном из проектов мне удалось предложить использовать машинное обучение для анализа пользовательских данных и автоматизации рутинных процессов. Этот подход значительно повысил эффективность работы системы и улучшил пользовательский опыт.",
        aboutText8: "Профессиональный рост и развитие — это одна из главных целей в моей жизни. Я постоянно изучаю новые технологии, читаю книги и статьи, посещаю конференции и вебинары. Это позволяет мне оставаться на переднем крае прогресса и внедрять самые современные решения в свои проекты. В последние годы я активно интересуюсь облачными технологиями, такими как AWS, Google Cloud и Azure, а также искусственным интеллектом и анализом больших данных. Эти направления открывают передо мной новые горизонты и дают возможность создавать действительно уникальные и перспективные продукты.",
        aboutText9: "Кроме технических навыков, я также уделяю большое внимание развитию своих «мягких» навыков, таких как коммуникация, управление временем и лидерство. Я считаю, что успех любого проекта зависит не только от качественного кода, но и от того, насколько эффективно команда может работать вместе. Поэтому я всегда стараюсь создавать позитивную и поддерживающую атмосферу в коллективе, где каждый участник чувствует себя ценным и значимым.",
        aboutText10: "Также я активно участвую в сообществе разработчиков. Я регулярно публикую статьи и материалы на тему программирования, делюсь своими знаниями и опытом с другими коллегами. Это не только помогает мне систематизировать свои знания, но и позволяет быть частью большого и дружного сообщества, которое стремится к общему прогрессу.",
        aboutText11: "В заключение хочу отметить, что мой основной мотиватор — это создание продуктов, которые действительно влияют на жизнь людей. Мне важно видеть, как мои решения помогают пользователям решать их повседневные задачи и улучшать качество их жизни. Именно это стремление к полезным и значимым результатам двигает меня вперед и вдохновляет на новые свершения.",
        toggleButton: "Развернуть",
        skills: "Навыки",
        languagesProgramming: "Языки программирования",
        frameworksLibraries: "Фреймворки и библиотеки",
        developmentTools: "Инструменты разработки",
        databases: "Базы данных",
        portfolio: "Примеры работ",
        project1: "Проект 1",
        project2: "Проект 2",
        project3: "Проект 3",
        project4: "Проект 4",
        project5: "Проект 5",
        project6: "Проект 6",
        project7: "Проект 7",
        project8: "Проект 8",
        projectDescription1: "Описание проекта 1...",
        projectDescription2: "Описание проекта 2...",
        projectDescription3: "Описание проекта 3...",
        projectDescription4: "Описание проекта 4...",
        projectDescription5: "Описание проекта 5...",
        projectDescription6: "Описание проекта 6...",
        projectDescription7: "Описание проекта 7...",
        projectDescription8: "Описание проекта 8...",
        goToProject: "Перейти к проекту",
        footer: "© 2025 Александр Витко. Все права защищены."
    },
    by: {
        headerTitle: "Аляксандр Вітко",
        email: "sasavitko552@gmail.com",
        phone: "+375 (29) 360-81-84",
        aboutMe: "Пра сябе",
        aboutText1: "Я мэтанакіраваны і творчы праграміст з больш чым 13 гадоў вопыту распрацоўкі вэб-прыкладанняў, мабільных рашэнняў і серверных сістэм. Мой прафесійны шлях пачаўся з простых скрыптоў на мове праграмавання Basic яшчэ ў школьныя гады, а сёння я займаюся стварэннем складаных і маштабуюцца прыкладанняў, якія вырашаюць рэальныя праблемы карыстальнікаў па ўсім свеце.",
        aboutText2: "ЗЗа гэтыя гады я паспеў папрацаваць над мноствам праектаў рознай складанасці, ад невялікіх стартапов да буйных карпаратыўных рашэнняў. Адзін з маіх першых значных праектаў быў звязаны са стварэннем сістэмы кіравання кантэнтам для інтэрнэт-крамы, які затым вырас у паспяховую платформу з тысячамі актыўных карыстальнікаў. Гэты вопыт дазволіў мне глыбей зразумець прынцыпы працы з кліентамі, патрабаваннямі і іх чаканнямі ад прадукту.",
        aboutText3: "Мая асноўная спецыялізацыя ляжыць у галіне вэб-распрацоўкі, дзе я працую з такімі тэхналогіямі, як JavaScript, TypeScript, React, Angular, Vue.js, Node.js і Django. Я таксама маю багаты вопыт у распрацоўцы мабільных прыкладанняў пад Android і iOS, выкарыстоўваючы такія фреймворки, як React Native і Flutter. Гэтыя тэхналогіі дазваляюць мне ствараць крос-платформенныя рашэнні, якія працуюць аднолькава добра на ўсіх прыладах і забяспечваюць выдатны карыстацкі досвед.",
        aboutText4: "Акрамя фронтенда і бэкенда, я таксама займаўся распрацоўкай серверных сістэм і микросервисной архітэктуры. У гэтым кірунку я выкарыстаў такія тэхналогіі, як Docker, Kubernetes, PostgreSQL, MongoDB, Redis і RabbitMQ. Гэтыя інструменты дазваляюць ствараць высоканадзейныя і маштабуюцца сістэмы, якія могуць апрацоўваць велізарныя аб'ёмы дадзеных і забяспечваць бесперабойную працу нават пры высокіх нагрузках.",
        aboutText5: "У сваёй працы я заўсёды імкнуся да таго, каб код быў не толькі функцыянальным, але і чыстым, лёгка падтрымоўваным і пашыраецца. Я цвёрда перакананы, што добры код-гэта той, які можна лёгка зразумець і мадыфікаваць іншым распрацоўнікам. Таму я надаю вялікую ўвагу дакументацыі, тэсціраванню і рэфактарынгу. Акрамя таго, я стараюся прытрымлівацца сучасным метадалогіям распрацоўкі, такім як Agile і Scrum, якія дапамагаюць эфектыўна арганізаваць працэс працы і ўзаемадзеянне ўнутры каманды.",
        aboutText6: "Працуючы ў камандзе, я заўсёды імкнуся быць гнуткім і адаптавацца да бягучых умоў. Я ўмею выразна фармуляваць свае думкі і ідэі, а таксама ўважліва слухаць іншых удзельнікаў каманды. Гэта дазваляе нам знаходзіць найбольш аптымальныя рашэнні і хутка дасягаць пастаўленых мэтаў. Я здольны працаваць самастойна і браць на сябе адказнасць за выкананне задач любой складанасці. Незалежнасць і самастойнасць у працы-важныя якасці, якія я развіваў на працягу ўсёй сваёй кар'еры.",
        aboutText7: "Інавацыйныя падыходы і крэатыўнае мысленне-гэта тое, што адрознівае мяне як спецыяліста. Я заўсёды імкнуся прапаноўваць нестандартныя рашэнні, якія могуць даць новы імпульс развіццю праекта. Напрыклад, у адным з праектаў мне ўдалося прапанаваць выкарыстоўваць машыннае навучанне для аналізу карыстацкіх дадзеных і аўтаматызацыі руцінных працэсаў. Гэты падыход значна павысіў эфектыўнасць працы сістэмы і палепшыў карыстацкі досвед.",
        aboutText8: "Прафесійны рост і развіццё - гэта адна з галоўных мэтаў у маім жыцці. Я ўвесь час вывучаю новыя тэхналогіі, чытаю кнігі і артыкулы, наведваю канферэнцыі і вебинары. Гэта дазваляе мне заставацца на пярэднім краі прагрэсу і ўкараняць самыя сучасныя рашэнні ў свае праекты. У апошнія гады я актыўна цікаўлюся воблачнымі тэхналогіямі, такімі як AWS, Google Cloud і Azure, а таксама штучным інтэлектам і аналізам вялікіх дадзеных. Гэтыя напрамкі адкрываюць перада мной новыя гарызонты і даюць магчымасць ствараць сапраўды унікальныя і перспектыўныя прадукты.",
        aboutText9: "Акрамя тэхнічных навыкаў, я таксама надаю вялікую ўвагу развіццю сваіх мяккіх  навыкаў, такіх як камунікацыя, кіраванне часам і лідэрства. Я лічу, што поспех любога праекта залежыць не толькі ад якаснага кода, але і ад таго, наколькі эфектыўна каманда можа працаваць разам. Таму я заўсёды імкнуся ствараць пазітыўную і падтрымлівае атмасферу ў калектыве, дзе кожны ўдзельнік адчувае сябе каштоўным і значным.",
        aboutText10: "Таксама я актыўна ўдзельнічаю ў супольнасці распрацоўнікаў. Я рэгулярна публікую артыкулы і матэрыялы на тэму праграмавання, дзялюся сваімі ведамі і вопытам з іншымі калегамі. Гэта не толькі дапамагае мне сістэматызаваць свае веды, але і дазваляе быць часткай вялікага і Дружнага супольнасці, якое імкнецца да агульнага прагрэсу.",
        aboutText11: "У заключэнне хачу адзначыць, што мой асноўны матыватар-гэта стварэнне прадуктаў, якія сапраўды ўплываюць на жыццё людзей. Мне важна бачыць, як мае рашэнні дапамагаюць карыстальнікам вырашаць іх паўсядзённыя задачы і паляпшаць якасць іх жыцця. Менавіта гэта імкненне да карысным і значным выніках рухае мяне наперад і натхняе на новыя здзяйсненні.",
        toggleButton: "Разгарнуць",
        skills: "Навык",
        languagesProgramming: "Мовы праграмавання",
        frameworksLibraries: "Фрэймворкі і бібліятэкі",
        developmentTools: "Інструменты распрацоўкі",
        databases: "Базы дадзеных",
        portfolio: "Прыклады работ",
        project1: "Працяг 1",
        project2: "Працяг 2",
        project3: "Працяг 3",
        project4: "Працяг 4",
        project5: "Працяг 5",
        project6: "Працяг 6",
        project7: "Працяг 7",
        project8: "Працяг 8",
        projectDescription1: "Апісанне працівы 1...",
        projectDescription2: "Апісанне працівы 2...",
        projectDescription3: "Апісанне працівы 3...",
        projectDescription4: "Апісанне працівы 4...",
        projectDescription5: "Апісанне працівы 5...",
        projectDescription6: "Апісанне працівы 6...",
        projectDescription7: "Апісанне працівы 7...",
        projectDescription8: "Апісанне працівы 8...",
        goToProject: "Перайсці да праекта",
        footer: "© 2025 Аляксандр Вітко. Усе правы абаронены."
    },
    en: {
        headerTitle: "Alexandr Vitko",
        email: "sasavitko552@gmail.com",
        phone: "+375 (29) 360-81-84",
        aboutMe: "About Me",
        aboutText1: "I am a dedicated and creative programmer with over 13 years of experience in developing web applications, mobile solutions, and server systems. My professional career began with simple scripts in the Basic programming language back in my school years, and today I am creating complex and scalable applications that solve real-world user problems.",
        aboutText2: "Over the years, I have worked on many projects of varying complexity, from small startups to large corporate solutions. One of my first significant projects was to create a content management system for an online store, which later grew into a successful platform with thousands of active users. This experience allowed me to gain a deeper understanding of the principles of working with clients, requirements and their expectations of the product.",
        aboutText3: "My main specialization lies in the field of web development, where I work with technologies such as JavaScript, TypeScript, React, Angular, Vue.js, Node.js and Django. I also have extensive experience in developing mobile apps for Android and iOS using frameworks such as React Native and Flutter. These technologies allow me to create cross-platform solutions that work equally well on all devices and provide a great user experience.",
        aboutText4: "In addition to the front-end and backend, I also worked on the development of server systems and microservice architecture. In this direction, I have used technologies such as Docker, Kubernetes, PostgreSQL, MongoDB, Redis, and RabbitMQ. These tools allow you to create highly reliable and scalable systems that can process huge amounts of data and ensure uninterrupted operation even under high loads.",
        aboutText5: "In my work, I always strive to ensure that the code is not only functional, but also clean, easy to maintain and extensible. I firmly believe that good code is one that can be easily understood and modified by other developers. That's why I pay a lot of attention to documentation, testing, and refactoring. In addition, I try to follow modern development methodologies such as Agile and Scrum, which help to effectively organize the work process and interaction within the team.",
        aboutText6: "When working in a team, I always try to be flexible and adapt to the current conditions. I am able to articulate my thoughts and ideas clearly, as well as listen carefully to other team members. This allows us to find the most optimal solutions and achieve our goals quickly. At the same time, I am able to work independently and take responsibility for tasks of any complexity. Independence and independence in work are important qualities that I have developed throughout my career.",
        aboutText7: "Innovative approaches and creative thinking are what sets me apart as a specialist. I always try to offer non-standard solutions that can give a new impetus to the development of the project. For example, in one of the projects I managed to suggest using machine learning to analyze user data and automate routine processes. This approach has significantly increased the efficiency of the system and improved the user experience.",
        aboutText8: "Professional growth and development is one of the main goals in my life. I am constantly studying new technologies, reading books and articles, attending conferences and webinars. This allows me to stay at the forefront of progress and implement the most advanced solutions in my projects. In recent years, I have been actively interested in cloud technologies such as AWS, Google Cloud and Azure, as well as artificial intelligence and big data analysis. These areas open up new horizons for me and give me the opportunity to create truly unique and promising products.",
        aboutText9: "In addition to technical skills, I also pay great attention to developing my soft skills such as communication, time management, and leadership. I believe that the success of any project depends not only on high-quality code, but also on how effectively the team can work together. That's why I always try to create a positive and supportive atmosphere in the team, where each participant feels valued and important.",
        aboutText10: "I am also actively involved in the development community. I regularly publish articles and materials on programming, and share my knowledge and experience with other colleagues. This not only helps me to systematize my knowledge, but also allows me to be part of a large and friendly community that strives for common progress.",
        aboutText11: "In conclusion, I would like to note that my main motivator is to create products that really affect people's lives. It is important for me to see how my solutions help users solve their daily tasks and improve their quality of life. It is this desire for useful and meaningful results that moves me forward and inspires me to new achievements.",
        toggleButton: "Expand",
        skills: "Skills",
        languagesProgramming: "Programming Languages",
        frameworksLibraries: "Frameworks and Libraries",
        developmentTools: "Development Tools",
        databases: "Databases",
        portfolio: "Portfolio",
        project1: "Project 1",
        project2: "Project 2",
        project3: "Project 3",
        project4: "Project 4",
        project5: "Project 5",
        project6: "Project 6",
        project7: "Project 7",
        project8: "Project 8",
        projectDescription1: "Project description 1...",
        projectDescription2: "Project description 2...",
        projectDescription3: "Project description 3...",
        projectDescription4: "Project description 4...",
        projectDescription5: "Project description 5...",
        projectDescription6: "Project description 6...",
        projectDescription7: "Project description 7...",
        projectDescription8: "Project description 8...",
        goToProject: "Go to Project",
        footer: "© 2025 Alexandr Vitko. All rights reserved."
    }
};

// Функция для установки языка
function setLanguage(lang) {
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        } else {
            element.textContent = key; // Фоллбэк к ключу, если перевод не найден
        }
    });

    // Сохранение выбранного языка в localStorage
    localStorage.setItem('selectedLanguage', lang);

    // Обработка специфических элементов
    document.querySelector('.header-content h1').textContent = translations[lang].headerTitle;
    document.querySelector('.header-content p a:nth-child(1)').textContent = translations[lang].email;
    document.querySelector('.header-content p a:nth-child(2)').textContent = translations[lang].phone;

    // Обработка текста о себе
    const aboutTextElements = document.querySelectorAll('.text-container p');
    for (let i = 1; i <= aboutTextElements.length; i++) {
        aboutTextElements[i - 1].textContent = translations[lang][`aboutText${i}`];
    }

    // Обработка названий проектов в портфолио
    const projectNames = document.querySelectorAll('.project h3');
    projectNames.forEach((name, index) => {
        name.textContent = `${translations[lang][`project${index + 1}`]}`;
    });

    // Обработка описаний проектов в портфолио
    const projectDescriptions = document.querySelectorAll('.project p');
    projectDescriptions.forEach((description, index) => {
        description.textContent = translations[lang][`projectDescription${index + 1}`];
    });

    // Обработка ссылок на проекты в портфолио
    const projectLinks = document.querySelectorAll('.project a.project-link');
    projectLinks.forEach(link => {
        link.textContent = translations[lang].goToProject;
    });

    // Обработка футера
    document.querySelector('footer p').textContent = translations[lang].footer;
}

// Установка языка из localStorage при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'ru';
    setLanguage(savedLang);
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) { // Значение 50 можно изменить в зависимости от желаемого поведения
        header.classList.add('sticky-header');
        setTimeout(() => {
            header.classList.add('active');
        }, 10); // Задержка для плавного появления
    } else {
        header.classList.remove('active');
        setTimeout(() => {
            header.classList.remove('sticky-header');
        }, 300); // Задержка для плавного исчезновения
    }
});
