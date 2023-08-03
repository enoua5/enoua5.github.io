(()=>{

    function getDefaultTheme()
    {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    function getTheme()
    {
        return localStorage.getItem('theme')
    }
    function setTheme(theme)
    {
        localStorage.setItem('theme', theme);
    }
    function applyTheme(theme)
    {
        document.documentElement.dataset.bsTheme = theme;
    }

    let theme = getTheme();
    switch(theme)
    {
        case null:
            // localStorage not set, fall back to device preference
            setTheme("auto");
            // no break, fallthrough to auto case
        case "auto":
            theme = getDefaultTheme();
    }

    applyTheme(theme);
    
    // leave the relevant callbacks for the page widget
    window.setTheme = (theme) => {
        setTheme(theme);
        applyTheme(theme == "auto" ? getDefaultTheme() : theme);
    }

})();