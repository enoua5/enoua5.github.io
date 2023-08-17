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

        a.href = "tech.html?tag="+this.tag;
        img.src = IMG_BASE+this.icon;
        img.alt = this.name;
        span.innerText = this.name;

        return a;
    }
}

class Project
{
    constructor(name, tags=[], desc="", demo_url="", code_url="",img=null)
    {
        this.name = name;
        this.tags = tags;
        this.desc = desc;
        this.demo_url = demo_url;
        this.code_url = code_url;
        this.img = img;
    }

    get html()
    {
        const IMG_BASE = "img/splash/"

        let container = document.createElement("div");
        container.classList.add("example", "clearfix");

        let heading = document.createElement("h2");
        heading.innerHTML = this.name;
        container.appendChild(heading);

        let tagContainer = document.createElement("div");
        tagContainer.classList.add("tag-container");
        for(let tag of this.tags)
        {
            let a = document.createElement("a");
            a.innerText = tag;
            a.classList.add("btn", "btn-secondary", "tag");
            a.href = `?tag=${tag}`;
            tagContainer.appendChild(a);

            let hue = hashToHue(tag)

            a.style.setProperty("--bs-btn-color", "#fff");
            a.style.setProperty("--bs-btn-bg", rgbArrayToColor(hslToRgb(hue, 1, 0.25)));
            a.style.setProperty("--bs-btn-border-color", rgbArrayToColor(hslToRgb(hue, 1, 0.25)));
            a.style.setProperty("--bs-btn-hover-bg", rgbArrayToColor(hslToRgb(hue, 0.8, 0.5)));
            a.style.setProperty("--bs-btn-hover-border-color", rgbArrayToColor(hslToRgb(hue, 0.8, 0.5)));
        }
        container.appendChild(tagContainer);

        if(this.img)
        {
            let img = document.createElement("img");
            img.src = IMG_BASE + this.img;
            container.appendChild(img);
        }

        let desc_p = document.createElement("p");
        desc_p.innerText = this.desc;
        container.appendChild(desc_p);

        if(this.demo_url)
        {
            let a = document.createElement("a");
            a.href = this.demo_url;
            a.innerText = "Project link";
            a.classList.add("btn", "btn-primary", "project-link");
            container.appendChild(a);
        }
        if(this.code_url)
        {
            let a = document.createElement("a");
            a.href = this.code_url;
            a.innerText = "Code link";
            a.classList.add("btn", "btn-secondary", "code-link");
            container.appendChild(a);
        }

        
        return container;
    }
}

const ANGULAR = "angular";
const HTML = "html";
const CSS = "css";
const JS = "js";
const TS = "ts";
const WASM = "wasm";
const WEBWORKERS = "webworkers";
const WEBSOCKETS = "websockets";
const RESTAPI = "restapi";
const DJANGO = "django";
const SPRING = "spring";
const C = "c";
const CPP = "cpp";
const JAVA = "java";
const PYTHON = "python";
const CSHARP = "csharp";
const SQL = "sql";
const ANDROID = "android";
const ROOMDB = "roomdb";
const NASM = "nasm";
const ASM6F = "asm6f";

const PORTFOLIO_DATA = {
    tech: [
        {
            header: new TechHeader("Frontend Web Technologies"),
            skills: [
                new TechSkill("Angular", ANGULAR, "angular.png"),
                new TechSkill("HTML5", HTML, "html5.png"),
                new TechSkill("CSS3", CSS, "css3.png"),
                new TechSkill("Javascript", JS, "js.png"),
                new TechSkill("Typescript", TS, "ts.png"),
                new TechSkill("WebAssembly", WASM, "wasm.png"),
                new TechSkill("Web Workers", WEBWORKERS),
                new TechSkill("WebSockets", WEBSOCKETS, "websocket.png"),
                new TechSkill("REST API", RESTAPI),
            ]
        },
        {
            header: new TechHeader("Backend Web Technologies"),
            skills: [
                new TechSkill("Django", DJANGO, "django.png"),
                new TechSkill("Spring Boot", SPRING, "spring.png"),
            ]
        },
        {
            header: new TechHeader("Application Programming"),
            skills: [
                //new TechSkill("C", C, "c.png"),
                new TechSkill("C++", CPP, "cpp.png"),
                new TechSkill("Java", JAVA, "java.png"),
                new TechSkill("Python", PYTHON, "python.png"),
                new TechSkill("C#", CSHARP, "csharp.png"),
                new TechSkill("SQL", SQL, "sql.png"),
            ]
        },
        {
            header: new TechHeader("Android App Development"),
            skills: [
                new TechSkill("Android Studio", ANDROID, "android-studio.png"),
                new TechSkill("RoomDB", ROOMDB),
            ]
        },
        {
            header: new TechHeader("Low-level Programming"),
            skills: [
                new TechSkill("NASM", NASM, "nasm.png"),
                new TechSkill("6502-asm6f", ASM6F),
            ]
        }
    ],
    projects: [
        new Project(
            "Tarp LMS",
            [PYTHON, DJANGO, SQL, RESTAPI, HTML, CSS, JS],
            `Tarp LMS was a group project for my Software Engineering II class. It's a learning management service, similar to Canvas. It was created using primarily Django Python, with some HTML, Bootstrap CSS, and Javascript for the pages. The project implements REST API both front and back-end to interface with the SQL database. My personal contribution to the project focused mostly on REST API, testing, bug-fixing, and back-end functionality.`,
            '',
            'https://github.com/enoua5/tarp-lms-clone',
            'tarp.png'
        ),
        new Project(
            "Revenge Chess",
            [HTML, CSS, JS, WASM, WEBWORKERS, WEBSOCKETS, CPP],
            `Revenge Chess is my original variant on the classic game. This project is composed of multiple interacting parts. The user interface is created using HTML/CSS/JS. The game logic is created using C++, and interacts with the frontend via WebAssembly/Emscripten. The game also features an AI opponent, also created in C++, which uses a WebWorker for multithreading. The game also has full support for online multiplayer, connecting to the backend via WebSocket. The backend is also created in C++ and reuses the same game logic code, just complied differently via different Makefile rules.`,
            'https://enoua5.github.io/revenge-chess-online',
            'https://github.com/enoua5/revengechessII',
            'rc2.png'
        ),
        new Project(
            "TH-DF 4: Iota Crawler NES",
            [ASM6F],
            `TH-DF 4: Iota Crawler NES was more of a challange to myself than anything else. I wanted to see if I could make an NES game. While it's relatively simple, I did it. The game is programmed in assembly code, specific the asm6f dialect of 6502 assembly. While never technically finished, it gave a lot of understanding of how computers work at a low level and the how to work with them on their own terms.`,
            '',
            'https://github.com/enoua5/thdf-nes',
            'thdf.png'
        ),
        new Project(
            "Open Legend Roller",
            [JAVA, ANDROID, ROOMDB, SQL, RESTAPI],
            `Open Legend Roller began as a project for my Android Development class. It's a character-oriented dice-roller for the table-top roll-playing game Open Legend. The app features persistent data via a local SQL database managed with RoomDB, and REST API functionality to import characters from the popular Open Legend character manager Heromuster. After the class concluded, I put further work into the app to prepare it for release on Google Play. Many of these changes focused on accessibilty, reorganizing panes and using Live Regions to ensure the app works great with screen readers.`,
            'https://play.google.com/store/apps/details?id=io.github.enoua5.openlegendroller',
            'https://github.com/enoua5/openlegend-roller-app',
            'olroll.webp'
        ),
        new Project(
            "Basic compiler project",
            [PYTHON, NASM],
            `This is a simple compiler I made for a Compiler Design class. The compiler is programmed in Python and takes input in the form of a programming language the class created together. The output is in the form of NASM x64 assembly.`,
            '',
            'https://github.com/enoua5/compiler-hw2',
            ''
        ),
        new Project(
            "Django Reversi",
            [PYTHON, DJANGO, SQL, HTML, CSS],
            `This is an online Reversi game created for my Backend Web Development class. It uses Django Python and SQL for the backend, and HTML, Bootstrap CSS, and a tiny bit of Javascript for the frontend. It features online multiplayer, multiple board shapes, rank tracking, and game tracking.`,
            '',
            'https://github.com/enoua5/cs3620-reversi',
            'reversi.png'
        ),
        new Project(
            "WebScholar",
            [SPRING, JAVA, ANGULAR, TS, HTML, CSS, RESTAPI, SQL],
            `Webscholar was my Capstone project for my Bachelor degree, and is a scholarship management service created using Spring Boot Java and Angular TypeScript. The class was given the partially finished project, and was put to organizing ourselves to continue its progress. I was part of the team working with the Angular pages interacting with the Account microservices. The project was completely inoperable when we inheritated it, so I focused a lot on testing and bug-fixing. I ended up helping the other teams a decent amount with the backend as well. I also lead efforts to implement much needed documentation, adding JavaDoc and JSDoc, bringing front-end to full documentation, and fixing/implementing front-end automated tests.`,
            '',
            'https://github.com/enoua5/webscholar-clone',
            ''
        ),
        new Project(
            "Shuffle",
            [PYTHON],
            `This may be a bit of an esoteric pick for my portfolio, but this is an implementation of an esoteric programming language I created: Shuffle. This programming language (if you even think it's fair to call it that) encodes programs as two decks of cards being used in the card game War. All looping is done by forcing the decks to return to their initial setup after a certain number of moves. I managed to prove that it's Turning complete as long as you accept the 12,321 of Hearts as a 'real' playing card.`,
            'https://esolangs.org/wiki/Shuffle',
            'https://github.com/enoua5/shuffle2',
            ''
        ),
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
    else if(PAGE_ID == "tech")
    {
        let search = new URLSearchParams(location.search);
        let tag = search.get("tag");

        // find TechSkill
        let techSkill = null;
        for(let section of PORTFOLIO_DATA.tech)
            for(let skill of section.skills)
                if(skill.tag == tag)
                    techSkill = skill;
        if(techSkill == null)
        {
            console.warn("skill not found")
            return;
        }
        // set the header
        let headerText = `${techSkill.name} Examples`;
        document.getElementById("header").innerText = headerText;
        document.getElementsByTagName("title")[0].innerText = headerText;

        // find examples
        let exampleBox = document.getElementById("example-box");
        let foundAny = false;
        for(let project of PORTFOLIO_DATA.projects)
        {
            for(let projectTag of project.tags)
            {
                if(projectTag == tag)
                {
                    foundAny = true;

                    exampleBox.appendChild(project.html);

                    // we found the tag, move on to the next project
                    break;
                }
            }
        }

        if(!foundAny)
        {
            let p = document.createElement("p");
            p.innerText = "Sorry! I haven't uploaded any examples of this technology yet!";
            exampleBox.appendChild(p);
        }
    }
});
