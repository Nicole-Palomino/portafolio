const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text')

const toogleColors = document.getElementById('toggle-colors');

const rootStyles = document.documentElement.style;

const flagsElement = document.getElementById('flags');

const textsToChanges = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for (const textToChanges of textsToChanges) {
        const section = textToChanges.dataset.section;
        const value = textToChanges.dataset.value;

        textToChanges.innerHTML = texts[section][value];
    }
}

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
})

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (toggleIcon.src.includes('moon.svg')) {
        toggleIcon.src = 'assets/icons/sun.svg'
        toggleText.textContent = 'Light Mode'
    } else {
        toggleIcon.src = 'assets/icons/moon.svg'
        toggleText.textContent = 'Dark Mode'
    }
})

toogleColors.addEventListener("click", (e) => {
    rootStyles.setProperty("--primary-color", e.target.dataset.color);
})