// Дані про мови (розширені)
const languagesData = {
    html: { title: "HTML", text: "HTML (HyperText Markup Language) - є основою всього вебу. Він використовується для структурування вмісту веб-сторінок. За самопомогою HTML створюємо сторінки. Наприклад, використовуємо заголовки, абзаци, зображення, таблиці та інші елементи. HTML сам по собі не відповідає за вигляд чи функціональність сторінки, а лише за надання її структури. Основні елементи: Теги: HTML складається з різних тегів, які вказують, який тип вмісту буде відображатися. Наприклад: <h1> — заголовок першого рівня, <p> — абзац, <img> — зображення, <a> — гіперпосилання. Як використовувати HTML? HTML написаний у простому тексті, який можна редагувати будь-яким текстовим редактором. Для створення веб-сторінки програміст пише код HTML, щоб визначити структуру сторінки, а далі застосовує стилі (CSS) та додає функціональність (JavaScript)." },
    css: { title: "CSS", text: "CSS (Cascading Style Sheets) - використовується для створення вигляду стилю веб-сторінок. За допомогою CSS визначаються кольори, шрифти, розміри елементів, їхнє розташування на сторінці, а також анімації та ефекти при взаємодії з користувачем. Основні можливості CSS: Шрифти та кольори: ви можете визначати колір тексту, фон, шрифти тощо. Моделі коробок: визначаємо відступи, розміри елементів, їхнє позиціонування. Респонсивність: CSS дозволяє створювати адаптивний дизайн, щоб сторінка коректно відображалася на різних пристроях — комп'ютерах, смартфонах, планшетах. Анімація та трансформація: CSS дозволяє створювати різноманітні ефекти для елементів сторінки (наприклад, зміна кольору кнопки при наведенні). Як використовувати CSS? CSS можна самопомогою додавати всередину HTML-коду, так і в окремих файлах, які підключаються до сторінки." },
    javascript: { title: "JavaScript", text: "JavaScript - додає інтерактивність та динамічні функції на веб-сторінки. З JavaScript можна: Реалізувати валідацію форм. Змінювати вміст веб-сторінки без її перезавантаження (AJAX). Реалізовувати інтерактивні елементи, такі як слайдери, каруселі, анімації. Створювати ігри та інші інтерактивні додатки в браузері. Як працює JavaScript? JavaScript виконується на стороні клієнта, тобто прямо в браузері користувача. Це дозволяє веб-сторінкам бути швидкими та взаємодіяти з користувачем без необхідності постійно звертатися до сервера. Основні концепції: Події: JavaScript дозволяє реагувати на дії користувача (наприклад, натискання кнопки). Моделі об'єктів: взаємодія з елементами HTML за допомогою DOM (Document Object Model). Асинхронність: завдяки обробці асинхронних операцій (наприклад, запитів до сервера) можна створювати швидкі та відгукливі додатки." },
    python: { title: "Python", text: "Python - це мова програмування загального призначення, яка використовується в багатьох сферах: від веб-розробки до аналізу даних, штучного інтелекту, автоматизації, тестування і багатьох інших. Вона є однією з найпопулярніших мов завдяки простому синтаксису та величезній кількості бібліотек. Основні сфери використання: Веб-розробка: Django, Flask — ці популярні фреймворки Python для створення веб-додатків. Аналіз даних: Бібліотеки на зразок Pandas та NumPy використовуються для обробки та аналізу великих обсягів даних. Машинне навчання та штучний інтелект: За допомогою таких бібліотек, як TensorFlow або PyTorch, можна створювати моделі машинного навчання. Автоматизація: Python чудово підходить для написання скриптів для автоматизації рутинних завдань. Як використовувати Python? Python має чіткий та зрозумілий синтаксис, що робить його ідеальним для початківців. Кожен програміст може використовувати Python як для простих завдань, так і для створення складних програм, оскільки мова підтримує різноманітні бібліотеки та фреймворки." },
    java: { title: "Java", text: "Java — це об'єктно-орієнтована мова програмування, що використовується для розробки мобільних додатків, веб-додатків, великих корпоративних рішень та Інтернету речей (IoT). Вона підтримує принципи ООП і дозволяє створювати масштабовані та надійні програми. Основні характеристики: кросплатформність завдяки Java Virtual Machine (JVM), підтримка багатозадачності і потоковість, висока безпека завдяки вбудованим механізмам захисту, можливість створення багатозадачних програм. Java є основною мовою для розробки додатків для Android, а також використовується у фреймворках як Spring та JavaServer Faces для веб-розробки. Для розробки використовуються IDE, такі як IntelliJ IDEA, Eclipse, а також стандартні бібліотеки Java (JDK)." },
    csharp: { title: "C#", text: "C# — це мова програмування, розроблена компанією Microsoft, і широко використовується для створення програм під платформу Windows, також для розробки ігор. Вона є частиною екосистеми .NET і підтримує об'єктно-орієнтоване програмування. Основні сфери використання: Розробка програм для Windows: C# і .NET фреймворки дозволяють створювати десктопні додатки. Розробка ігор: Завдяки Unity, C# є основною мовою для створення ігор для ПК, мобільних пристроїв та консолей. Веб-розробка: З ASP.NET можна створювати потужні веб-додатки. Мобільні додатки: За допомогою Xamarin можна створювати кроссплатформенні мобільні додатки. Як використовувати C#? Для розробки додатків зазвичай використовують Microsoft Visual Studio або інші IDE, що підтримують C#." },
    php: { title: "PHP", text: "PHP - це серверна мова програмування, яка широко використовується для створення динамічних веб-сайтів та веб-додатків. Вона дозволяє генерувати код HTML на сервері і передавати його користувачеві, що дає змогу створювати інтерактивні сторінки, обробляти дані форм та працювати з базами даних. Основні сфери використання: Веб-розробка: PHP є основою для створення динамічних сайтів і популярних CMS (наприклад, WordPress). Інтеграція з базами даних: PHP активно використовується для роботи з базами даних, зокрема MySQL, для збереження і виведення даних. Як використовувати PHP? PHP код виконується на сервері, а результат (зазвичай HTML) відправляється користувачеві. Для розробки використовуються сервери, такі як Apache або Nginx, з підтримкою PHP." }
};

// Дані про штучний інтелект
const aiData = {
    ai_basics: { 
        title: "Основи ШІ", 
        text: "Штучний інтелект (ШІ) — це галузь комп'ютерних наук, яка займається створенням машин, здатних виконувати завдання, що вимагають людського інтелекту. Це включає навчання, мислення, планування, розпізнавання образів, розуміння мови та прийняття рішень. Основні підходи до ШІ включають машинне навчання, глибоке навчання, обробку природної мови та комп'ютерний зір." 
    },
    machine_learning: { 
        title: "Машинне навчання", 
        text: "Машинне навчання — це підгалузь штучного інтелекту, яка використовує алгоритми для аналізу даних, навчання на їх основі та прогнозування майбутніх результатів. Основні типи машинного навчання: 1) Навчання з учителем — алгоритм навчається на позначених даних. 2) Навчання без учителя — алгоритм знаходить закономірності в непозначених даних. 3) Навчання з підкріпленням — алгоритм навчається через взаємодію з навколишнім середовищем, отримуючи винагороду за правильні дії." 
    },
    neural_networks: { 
        title: "Нейронні мережі", 
        text: "Нейронні мережі — це математичні моделі, натхненні біологічними нейронними мережами. Вони складаються з взаємопов'язаних вузлів (нейронів), які обробляють інформацію. Глибоке навчання використовує багатошарові нейронні мережі для вирішення складних завдань. Застосування нейронних мереж включає розпізнавання зображень, обробку природної мови, рекомендаційні системи та багато іншого." 
    },
    nlp: { 
        title: "Обробка природної мови", 
        text: "Обробка природної мови (NLP) — це галузь ШІ, яка займається взаємодією між комп'ютерами та людською мовою. NLP дозволяє машинам розуміти, інтерпретувати та генерувати людську мову. Застосування включає: машинний переклад, чат-боти, аналіз тональності тексту, голосові помічники (як Siri або Alexa) та автоматичне реферирування текстів." 
    },
    computer_vision: { 
        title: "Комп'ютерний зір", 
        text: "Комп'ютерний зір — це галузь ШІ, яка навчає комп'ютери інтерпретувати та розуміти візуальний світ. За допомогою цифрових зображень з камер та відео і глибокого навчання, системи можуть точно ідентифікувати та класифікувати об'єкти. Застосування включає: розпізнавання облич, автономні транспортні засоби, медичну діагностику за зображеннями, промислову перевірку якості та доповнену реальність." 
    },
    ai_ethics: { 
        title: "Етика ШІ", 
        text: "Етика штучного інтелекту вивчає моральні питання, пов'язані з розвитком та використанням ШІ. Ключові проблеми включають: упередженість алгоритмів, конфіденційність даних, вплив на зайнятість, автономні системи зброї та відповідальність за рішення, прийняті ШІ. Важливо розвивати ШІ відповідально, щоб він приносив користь людству та не завдавав шкоди." 
    }
};

// Дані про подкасти
const podcastsData = [
    { id: "podcast1", title: "Байки Програміста Випуск #1", comments: "Тарас Шеремета", audioUrl: "podcast1.mp3" },
    { id: "podcast2", title: "Байки Програміста Випуск #2", comments: "Тарас Шеремета", audioUrl: "podcast2.mp3" },
    { id: "podcast3", title: "Байки Програміста Випуск #3", comments: "Тарас Шеремета", audioUrl: "podcast3.mp3" },
    { id: "podcast4", title: "Байки Програміста Випуск #4", comments: "Тарас Шеремета", audioUrl: "podcast4.mp3" },
    { id: "podcast5", title: "Байки Програміста Випуск #5", comments: "Тарас Шеремета", audioUrl: "podcast5.mp3" },
    { id: "podcast6", title: "Байки Програміста Випуск #6", comments: "Тарас Шеремета", audioUrl: "podcast6.mp3" },
    { id: "podcast7", title: "Байки Програміста Випуск #7", comments: "Тарас Шеремета", audioUrl: "podcast7.mp3" },
    { id: "podcast8", title: "Байки Програміста Випуск #8", comments: "Тарас Шеремета", audioUrl: "podcast8.mp3" },
    { id: "podcast9", title: "Байки Програміста Випуск #9", comments: "Тарас Шеремета", audioUrl: "podcast9.mp3" },
    { id: "podcast10", title: "Байки Програміста Випуск #10", comments: "Тарас Шеремета", audioUrl: "podcast10.mp3" },
    { id: "podcast11", title: "Байки Програміста Випуск #11", comments: "Тарас Шеремета", audioUrl: "podcast11.mp3" },
    { id: "podcast12", title: "Байки Програміста Випуск #12", comments: "Тарас Шеремета", audioUrl: "podcast12.mp3" },
    { id: "podcast13", title: "Байки Програміста Випуск #13", comments: "Тарас Шеремета", audioUrl: "podcast13.mp3" },
    { id: "podcast14", title: "Байки Програміста Випуск #14", comments: "Тарас Шеремета", audioUrl: "podcast14.mp3" }
];

// Дані про музику з посиланнями на MP3 файли
const musicData = [
    { id: "music1", title: "Stressless State", artist: "Oleksandr Chukhlib", audioUrl: "music1.mp3" },
    { id: "music2", title: "Sad Emotional Violin Music", artist: "Ecveezer", audioUrl: "music2.mp3" },
    { id: "music3", title: "En Passant", artist: "Secret Garden", audioUrl: "music3.mp3" },
];

// Перетворюємо об'єкти даних у масиви для зручного пошуку
const allLanguages = Object.keys(languagesData).map(key => ({
    id: key,
    title: languagesData[key].title.toLowerCase(),
    fullTitle: languagesData[key].title,
    description: languagesData[key].text.toLowerCase()
}));

const allAITopics = Object.keys(aiData).map(key => ({
    id: key,
    title: aiData[key].title.toLowerCase(),
    fullTitle: aiData[key].title,
    description: aiData[key].text.toLowerCase()
}));

// Елементи DOM
const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeBtn = document.getElementById("closeBtn");
const menuItems = document.querySelectorAll(".menu li");
const sections = {
    home: document.getElementById("homeSection"),
    podcasts: document.getElementById("podcastsSection"),
    music: document.getElementById("musicSection"),
    books: document.getElementById("booksSection"),
    languages: document.getElementById("languagesSection"),
    interactive: document.getElementById("interactiveSection"),
    artificialintelligence: document.getElementById("artificialintelligenceSection")
};
const searchInput = document.querySelector(".search");
const autocompleteList = document.getElementById("autocompleteList");
const languageCardsContainer = document.getElementById("languageCards");
const aiCardsContainer = document.getElementById("aiCards");
const languageBookCard = document.getElementById("languageBookCard");
const interactiveHTMLCard = document.getElementById("interactiveHTMLCard");
const podcastsContainer = document.getElementById("podcastsCards");
const musicCardsContainer = document.getElementById("musicCards");

// Створення міні-плеєра
const miniPlayer = document.createElement('div');
miniPlayer.classList.add('mini-player', 'hidden');
miniPlayer.innerHTML = `
    <div class="mini-player-controls">
        <button id="miniPlayerRewind"><i class="fas fa-backward"></i></button>
        <button id="miniPlayerPlayPause"><i class="fas fa-play"></i></button>
        <button id="miniPlayerForward"><i class="fas fa-forward"></i> </button>
    </div>
    <div class="mini-player-progress">
        <div class="mini-player-progress-bar" id="miniPlayerProgressBar"></div>
    </div>
    <div class="mini-player-time" id="miniPlayerTimeDisplay">0:00 / 0:00</div>
    <button class="mini-player-close" id="miniPlayerClose">✖</button>
`;
document.body.appendChild(miniPlayer);

// Елементи міні-плеєра
const miniPlayerElement = document.querySelector('.mini-player');
const miniPlayerPlayPauseBtn = document.getElementById('miniPlayerPlayPause');
const miniPlayerProgressBar = document.getElementById('miniPlayerProgressBar');
const miniPlayerCloseBtn = document.getElementById('miniPlayerClose');
const miniPlayerRewindBtn = document.getElementById('miniPlayerRewind');
const miniPlayerForwardBtn = document.getElementById('miniPlayerForward');
const miniPlayerTimeDisplay = document.getElementById('miniPlayerTimeDisplay');

let currentPodcastAudio = null;
let isPlaying = false;

// Функція для відображення всього вмісту книги
function displayBookContent() {
    modalTitle.textContent = "Book Language";
    modalText.innerHTML = languageBookContent || '';
}

// Обробник кліку на картку "Book Language"
languageBookCard.addEventListener("click", () => {
    modalText.innerHTML = "";
    modalTitle.textContent = "Book Language";
    modalOverlay.style.display = "block";
    modal.style.display = "block";

    fetch('language_book.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            modalText.textContent = data;
        })
        .catch(error => {
            modalText.textContent = 'Не вдалося завантажити вміст файлу.';
            console.error('Помилка завантаження файлу:', error);
        });
});

// Обробник кліку на картку "HTML Example"
interactiveHTMLCard.addEventListener("click", () => {
    modalText.innerHTML = '<iframe src="interactive.html" style="width:100%; height:70vh; border:none;"></iframe>';
    modalTitle.textContent = "HTML Example";
    modalOverlay.style.display = "block";
    modal.style.display = "block";
});

// Закриття модального вікна
closeBtn.addEventListener("click", () => {
    modalOverlay.style.display = "none";
    modal.style.display = "none";
    modalText.innerHTML = "";
});

modalOverlay.addEventListener("click", () => {
    modalOverlay.style.display = "none";
    modal.style.display = "none";
    modalText.innerHTML = "";
});

// Функція для відображення карток мов
function displayLanguageCards(languagesToShow) {
    languageCardsContainer.innerHTML = "";
    languagesToShow.forEach(lang => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-lang", lang.id);
        card.innerHTML = `
            <h3>${languagesData[lang.id].title}</h3>
            <p>${languagesData[lang.id].text.substring(0, 50)}...</p>
        `;
        card.addEventListener("click", () => openLanguageModal(lang.id));
        languageCardsContainer.appendChild(card);
    });
}

// Функція для відображення карток ШІ
function displayAICards(topicsToShow) {
    if (!aiCardsContainer) return;
    
    aiCardsContainer.innerHTML = "";
    topicsToShow.forEach(topic => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-ai-topic", topic.id);
        card.innerHTML = `
            <h3>${aiData[topic.id].title}</h3>
            <p>${aiData[topic.id].text.substring(0, 50)}...</p>
        `;
        card.addEventListener("click", () => openAIModal(topic.id));
        aiCardsContainer.appendChild(card);
    });
}

// Функція для відображення карток подкастів
function displayPodcasts() {
    podcastsContainer.innerHTML = "";
    podcastsData.forEach(podcast => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-podcast-id", podcast.id);
        card.innerHTML = `
            <h3>${podcast.title}</h3>
            <p>${podcast.comments ? 'Автор: ' + podcast.comments.substring(0, 30) + '...' : 'Немає коментарів'}</p>
        `;
        card.addEventListener("click", () => openAudio(podcast.audioUrl));
        podcastsContainer.appendChild(card);
    });
}

// Функція для відображення карток музики
function displayMusic() {
    musicCardsContainer.innerHTML = "";
    musicData.forEach(music => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-music-id", music.id);
        card.innerHTML = `
            <h3>${music.title}</h3>
            <p>${music.artist ? 'Виконавець: ' + music.artist : ''}</p>
        `;
        card.addEventListener("click", () => openAudio(music.audioUrl));
        musicCardsContainer.appendChild(card);
    });
}

// Функція для відкриття аудіо (подкасту або музики)
function openAudio(audioUrl) {
    if (currentPodcastAudio) {
        currentPodcastAudio.pause();
        currentPodcastAudio.currentTime = 0;
    }
    currentPodcastAudio = new Audio(audioUrl);
    miniPlayerElement.classList.remove('hidden');
    isPlaying = true;
    currentPodcastAudio.play();
    updatePlayPauseButton();

    currentPodcastAudio.addEventListener('timeupdate', () => {
        updateProgressBar();
        updateTimeDisplay();
    });

    currentPodcastAudio.addEventListener('ended', () => {
        isPlaying = false;
        updatePlayPauseButton();
        miniPlayerProgressBar.style.width = '0%';
        updateTimeDisplay();
    });
}

// Функція для перемикання відтворення/паузи
function togglePlay() {
    if (currentPodcastAudio) {
        if (isPlaying) {
            currentPodcastAudio.pause();
        } else {
            currentPodcastAudio.play();
        }
        isPlaying = !isPlaying;
        updatePlayPauseButton();
    }
}

// Оновлення кнопки play/pause
function updatePlayPauseButton() {
    if (isPlaying) {
        miniPlayerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        miniPlayerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

// Оновлення прогресу відтворення
function updateProgressBar() {
    if (currentPodcastAudio) {
        const percentage = (currentPodcastAudio.currentTime / currentPodcastAudio.duration) * 100;
        miniPlayerProgressBar.style.width = `${percentage}%`;
    }
}

// Оновлення відображення часу
function updateTimeDisplay() {
    if (!currentPodcastAudio || isNaN(currentPodcastAudio.duration)) {
        miniPlayerTimeDisplay.textContent = '0:00 / 0:00';
        return;
    }

    const currentTime = formatTime(currentPodcastAudio.currentTime);
    const duration = formatTime(currentPodcastAudio.duration);
    miniPlayerTimeDisplay.textContent = `${currentTime} / ${duration}`;
}

// Форматування часу у форматі х:хх
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

// Обробник кліку на прогрес-бар
miniPlayerProgressBar.addEventListener('click', (event) => {
    if (currentPodcastAudio) {
        const progressBar = event.currentTarget;
        const clickPosition = event.clientX - progressBar.getBoundingClientRect().left;
        const progressBarWidth = progressBar.offsetWidth;
        const seekTime = (clickPosition / progressBarWidth) * currentPodcastAudio.duration;
        currentPodcastAudio.currentTime = seekTime;
    }
});

// Обробник кнопки закриття міні-плеєра
miniPlayerCloseBtn.addEventListener('click', () => {
    if (currentPodcastAudio) {
        currentPodcastAudio.pause();
        currentPodcastAudio.currentTime = 0;
        currentPodcastAudio = null;
        isPlaying = false;
    }
    miniPlayerElement.classList.add('hidden');
});

// Обробник кнопки перемотки назад
miniPlayerRewindBtn.addEventListener('click', () => {
    if (currentPodcastAudio) {
        currentPodcastAudio.currentTime = Math.max(0, currentPodcastAudio.currentTime - 15);
    }
});

// Обробник кнопки перемотки вперед
miniPlayerForwardBtn.addEventListener('click', () => {
    if (currentPodcastAudio) {
        currentPodcastAudio.currentTime = Math.min(currentPodcastAudio.duration, currentPodcastAudio.currentTime + 15);
    }
});

// Функція для відкриття модального вікна мови
function openLanguageModal(langId) {
    modalTitle.textContent = languagesData[langId].title;
    modalText.textContent = languagesData[langId].text;
    modalOverlay.style.display = "block";
    modal.style.display = "block";
}

// Функція для відкриття модального вікна ШІ
function openAIModal(topicId) {
    modalTitle.textContent = aiData[topicId].title;
    modalText.textContent = aiData[topicId].text;
    modalOverlay.style.display = "block";
    modal.style.display = "block";
}

// Функція для відображення підказок автозаповнення
function displayAutocomplete(results) {
    autocompleteList.innerHTML = "";
    if (results.length > 0 && searchInput.value.trim() !== "") {
        results.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item.fullTitle;
            listItem.addEventListener("click", () => {
                searchInput.value = item.fullTitle;
                autocompleteList.style.display = "none";
                if (item.id in languagesData) {
                    openLanguageModal(item.id);
                } else if (item.id in aiData) {
                    openAIModal(item.id);
                }
            });
            autocompleteList.appendChild(listItem);
        });
        autocompleteList.style.display = "block";
    } else {
        autocompleteList.style.display = "none";
    }
}

// Функція для активації вкладки
function activateTab(tabId) {
    menuItems.forEach(item => item.classList.remove("active"));
    const activeTab = Array.from(menuItems).find(item => item.getAttribute("data-section") === tabId);
    if (activeTab) {
        activeTab.classList.add("active");
    }
    Object.values(sections).forEach(s => s.classList.add("hidden"));
    if (sections[tabId]) {
        sections[tabId].classList.remove("hidden");
    }
    autocompleteList.style.display = "none";
    if (modal.style.display === "block") {
        modalOverlay.style.display = "none";
        modal.style.display = "none";
        modalText.innerHTML = "";
    }

    if (tabId === "languages") {
        displayLanguageCards(allLanguages);
    } else if (tabId === "podcasts") {
        displayPodcasts();
    } else if (tabId === "music") {
        displayMusic();
    } else if (tabId === "artificialintelligence") {
        displayAICards(allAITopics);
    }
}

// Перемикання секцій
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const section = item.getAttribute("data-section");
        activateTab(section);
        searchInput.value = "";
    });
});

// Пошук та відображення підказок
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const allSearchItems = [...allLanguages, ...allAITopics];
    const searchResults = allSearchItems.filter(item =>
        item.title.includes(searchTerm) || item.description.includes(searchTerm)
    );
    displayAutocomplete(searchResults);

    if (!sections.languages.classList.contains("hidden")) {
        const filteredLanguageCards = allLanguages.filter(lang =>
            lang.title.includes(searchTerm) || lang.description.includes(searchTerm)
        );
        displayLanguageCards(filteredLanguageCards);
    } else if (!sections.artificialintelligence.classList.contains("hidden")) {
        const filteredAICards = allAITopics.filter(topic =>
            topic.title.includes(searchTerm) || topic.description.includes(searchTerm)
        );
        displayAICards(filteredAICards);
    }
});

// Обробник натискання Enter у полі пошуку
searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const searchTerm = searchInput.value.toLowerCase();
        const allSearchItems = [...allLanguages, ...allAITopics];
        const searchResults = allSearchItems.filter(item =>
            item.title.includes(searchTerm) || item.description.includes(searchTerm)
        );

        if (searchResults.length > 0) {
            if (searchResults[0].id in languagesData) {
                activateTab("languages");
                const filteredLanguageCards = allLanguages.filter(lang =>
                    lang.title.includes(searchTerm) || lang.description.includes(searchTerm)
                );
                displayLanguageCards(filteredLanguageCards);
            } else if (searchResults[0].id in aiData) {
                activateTab("artificialintelligence");
                const filteredAICards = allAITopics.filter(topic =>
                    topic.title.includes(searchTerm) || topic.description.includes(searchTerm)
                );
                displayAICards(filteredAICards);
            }
        }
        autocompleteList.style.display = "none";
    }
});

// Ховаємо підказки, якщо клікнути за межами поля пошуку та списку підказок
document.addEventListener("click", (event) => {
    if (!searchInput.contains(event.target) && !autocompleteList.contains(event.target)) {
        autocompleteList.style.display = "none";
    }
});

// Початкове відображення контенту для активної вкладки
const initialSection = document.querySelector('.menu li.active').getAttribute('data-section');
activateTab(initialSection);

// Додаємо Font Awesome для іконок
const head = document.head;
const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = 'stylesheet';
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
head.appendChild(fontAwesomeLink);

// Ініціалізація кнопки play/pause
miniPlayerPlayPauseBtn.addEventListener('click', togglePlay);
