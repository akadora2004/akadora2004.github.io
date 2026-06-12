document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const storageKey = 'site-theme';
    const savedTheme = localStorage.getItem(storageKey);
    const initialTheme = savedTheme || 'dark';

    const applyTheme = (theme) => {
        const isLight = theme === 'light';
        document.documentElement.dataset.theme = theme;
        themeToggle.setAttribute('aria-pressed', String(isLight));
        themeToggle.setAttribute(
            'aria-label',
            isLight ? 'ダークモードに切り替え' : 'ライトモードに切り替え'
        );
        themeToggle.innerHTML = `
            <i class="fa-solid ${isLight ? 'fa-moon' : 'fa-sun'}" aria-hidden="true"></i>
            <span>${isLight ? 'Dark' : 'Light'}</span>
        `;
    };

    applyTheme(initialTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.dataset.theme;
        const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem(storageKey, nextTheme);
        applyTheme(nextTheme);
    });
});
