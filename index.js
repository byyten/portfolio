
     
    cards = document.querySelector(".cards")
    card = cards.querySelector(".card")
    
    cards.removeChild(card)

    const projects = {
        rock_paper_scissors: {
            name: "Rock / Paper / Scissors", 
            description:[ "Foundations Course",
                "The first real project to bring together CSS, HTML and JS, built on top of alot of foundational knowledge where you had to demonstrate an ability to solve problems.",
                "Prior projects (x2 Recipes & Landing Page 'holy grail'), were done to exercise & reinforce CSS and HTML in static pages"
            ], 
            image: "screen_rock_paper_scissors_02.png", 
            url_code: "https://github.com/byyten/rock_paper_scissors", 
            url_site: "https://byyten.github.io/rock_paper_scissors"
        }, 
        calculator: {
            name: "Calculator", 
            description:[ "Foundations Course",
                "The project brought to a conclusion the Foundations Course and the project required and flexed all abilities and knowledge using basic javascript, HTML and CSS"
            ], 
            image: "screen_calculator_02.png", 
            url_code: "https://github.com/byyten/calculator", 
            url_site: "https://byyten.github.io/calculator"
        }, 
        dashboard: {
            name: "Dashboard", 
            description:[ "Intermediate HTML and CSS Course",
                "The project followed and required use of CSS flex and grid layout compositing with external resources, zero javascript"
            ], 
            image: "screen_dashboard.png", 
            url_code: "https://github.com/byyten/dashboard", 
            url_site: "https://byyten.github.io/dashboard"
        }, 
        tic_tac_toe: {
            name: "Tic / Tac / Toe", 
            description:[ "Javascript Course",
                "A project required code organisation (separation of concerns, et al) and using objects + constructors followed on from learning factory functions and module patterns"
            ], 
            image: "screen_tic_tac_toe_02.png", 
            url_code: "https://github.com/byyten/tic_tac_toe", 
            url_site: "https://byyten.github.io/tic_tac_toe"
        }, 
        todo: {
            name: "Todo List", 
            description:[ "Javascript Course",
                "Following on from classes, modules, closure, factory functions etc, a project to reinforce Object Oriented Programming principals"
            ], 
            image: "screen_todo_02.png", 
            url_code: "https://github.com/byyten/todo", 
            url_site: "https://byyten.github.io/todo"
        }, 
        knightstravails: {
            name: "Knights Travails", 
            description:[ "Javascript Course",
                "The fifth of five mini javascript projects (weather app, recursion, linked list, binary search BSF, DSF) to explore computer science, algorithms, space/time complexity, recursion/iteration, asyncronous js and APIs, json and code testing (using Jest)"
            ], 
            image: "screen_knights_travails.png", 
            url_code: "https://github.com/byyten/rock_paper_scissors", 
            url_site: "https://github.com/byyten/rock_paper_scissors"
        },     
        battleship: {
            name: "Battleship", 
            description:[ "Javascript Course",
                "A project building on all technical disciplines covered previously to develop a reasonably complex code exercise and interface"
            ], 
            image: "screen_battleship_02.png", 
            url_code: "https://github.com/byyten/battleship", 
            url_site: "https://byyten.github.io/battleship"
        }
    }
    
    project_names = Object.keys(projects) 
    project_names.forEach(key => {
        prj = projects[key]
        let clone = card.cloneNode(true)
        
        clone.querySelector("img.project").src = prj.image 
        clone.querySelector("img.project").alt = prj.image.slice(0, -4).replace('_', 'shot of ')
        //            .src .alt .srcset .... 
        clone.querySelector("a.link.github_code").href = prj.url_code
        clone.querySelector("a.link.page").href = clone.querySelector("a.href").href =  prj.url_site 
        clone.querySelector("span.project_name").textContent = prj.name
        clone.querySelector("p.description").innerHTML = '<p class="description">' + prj.description.join('</p><p class="description">')
        cards.appendChild(clone)
    })
    















    /* 
    querySelector("img.project")            .src .alt .srcset .... 
    querySelector("a.link.github_code")     .href
    querySelector("a.link.page")            .href  
    querySelector("span.project_name")      .textContent
    querySelector("p.description")          .textContent


    projects = {
        dashboard: {name: "", description: "", image: "", url_code: "", url_site: ""}, 
        battleship: {name: "", description: "", image: "", url_code: "", url_site: ""}, 
        tic_tac_toe: {name: "", description: "", image: "", url_code: "", url_site: ""}, 
        rock_paper_scissors: {name: "", description: "", image: "", url_code: "", url_site: ""}, 
        restaurant: {name: "", description: "", image: "", url_code: "", url_site: ""}, 
        calculator: {name: "", description: "", image: "", url_code: "", url_site: ""}, 
        todo: {name: "", description: "", image: "", url_code: "", url_site: ""}, 
        imageslider: {name: "", description: "", image: "", url_code: "", url_site: ""}, 
        knightstravails: {name: "", description: "", image: "", url_code: "", url_site: ""}
    }
    

                <!-- cards --> 
            <!-- srcset=" " media="" -->
            <!-- battleship, tic tac toe, rock paper scissors, restaurant, calculator, todo, imageslider, knightstravails  -->
            <!-- 
                <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
            -->
            <!--
                battleship
                calculator
                dashboard
                etch_a_sketch
                form_validation
                imageSlider
                knightsTravails
                todo

                advancingGit
                assignment_1
                forkCurriculum
                library_101
                odin-recipes
                portfolio
                restaurant
                rewriteDualBoot
                rock_paper_scissors
                signup
                signup_recover
                tdd
                tic_tac_toe
                todo
                udacity_algorithms
                weather
             -->


    */

