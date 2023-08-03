class TechHeader
{
    constructor(name)
    {
        this.name = name;
    }

    get html()
    {
        let h3 = document.createElement("h3");
        h3.innerText = this.name;
        return h3;
    }
}

class TechSkill
{
    constructor(name, tag="none", icon="generic.png")
    {
        this.name = name;
        this.icon = icon;
        this.tag = tag;
    }

    get html()
    {
        const IMG_BASE = "img/logo/"

        let a = document.createElement("a");
        let img = document.createElement("img");
        let span = document.createElement("span");
        a.appendChild(img);
        a.appendChild(span);

        a.href = "tech.html#"+this.tag;
        img.src = IMG_BASE+this.icon;
        img.alt = this.name;
        span.innerText = this.name;

        return a;
    }
}

const PORTFOLIO_DATA = {
    tech: [
        {
            header: new TechHeader("Frontend Web Technologies"),
            skills: [
                new TechSkill("Angular", "angular", "angular.png"),
                new TechSkill("HTML5", "html", "html5.png"),
                new TechSkill("CSS3", "css", "css3.png"),
                new TechSkill("Javascript", "js", "js.png"),
                new TechSkill("Typescript", "ts", "ts.png"),
                new TechSkill("WebAssembly", "wasm", "wasm.png"),
                new TechSkill("Web Workers", "webworkers"),
                new TechSkill("WebSockets", "websockets", "websocket.png"),
                new TechSkill("REST API", "restapi"),
            ]
        },
        {
            header: new TechHeader("Backend Web Technologies"),
            skills: [
                new TechSkill("Django", "django", "django.png"),
                new TechSkill("Spring Boot", "spring", "spring.png"),
            ]
        },
        {
            header: new TechHeader("Application Programming"),
            skills: [
                new TechSkill("C", "c", "c.png"),
                new TechSkill("C++", "cpp", "cpp.png"),
                new TechSkill("Java", "java", "java.png"),
                new TechSkill("Python", "python", "python.png"),
                new TechSkill("C#", "csharp", "csharp.png"),
                new TechSkill("SQL", "sql", "sql.png"),
            ]
        },
        {
            header: new TechHeader("Android App Development"),
            skills: [
                new TechSkill("Android Studio", "android", "android-studio.png"),
                new TechSkill("RoomDB", "roomdb"),
            ]
        },
        {
            header: new TechHeader("Low-level Programming"),
            skills: [
                new TechSkill("NASM", "nasm", "nasm.png"),
                new TechSkill("6502-asm6f", "asm6f"),
            ]
        }
    ]
}

registerOnloadFunction(()=>{
    
    if(PAGE_ID == "main")
    {
        let parent = document.getElementById("tech-list-target");

        for(let section of PORTFOLIO_DATA.tech)
        {
            parent.appendChild(section.header.html);

            for(let skill of section.skills)
            {
                parent.appendChild(skill.html);
            }
        }
    }
});
