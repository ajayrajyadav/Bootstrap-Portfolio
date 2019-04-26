$(document).ready(function () {

    // var elem = document.querySelector('.collapsible');
 
    // var instance = M.Collapsible.init(elem, {
 
    //     accordion: false
       
    //   });
      

    main();
    function main(){
        buildNavbar();
        $("body").append($("<div>").addClass("container").attr("id", "main-container"));
        buildAboutMePage();
    }

    function buildNavbar(){
        $("body").append($("<div>").addClass("container").attr("id", "navbar-container"));
        $("#navbar-container").append($("<nav>").attr("id", "navbar"));
        $("#navbar").append($("<div>").addClass("nav-wrapper").attr("id", "navWrapper"));
        $("#navWrapper").append($("<a>").addClass("brand-logo left").html("Ajay Yadav"));
        $("#navWrapper").append($("<ul>").addClass("right hide-on-med-down").attr("id", "nav-mobile"));
        $("#nav-mobile").append($("<li>").attr("id", "contact-link"));
        $("#contact-link").append($("<a>").html("Contact Me"));
        $("#nav-mobile").append($("<li>").attr("id", "portfolio-link"));
        $("#portfolio-link").append($("<a>").html("Portfolio"));
        $("#nav-mobile").append($("<li>").attr("id", "AboutMe-link"));
        $("#AboutMe-link").append($("<a>").html("About Me"))
    }
    

    function buildAboutMePage(){
        $("#main-container").empty();
        $("#main-container").append($("<div>").addClass("col s12 m8 offset-m2  offset-l3").attr("id", "aboutme-first-column"));
        $("#aboutme-first-column").append($("<div>").addClass("card-panel grey lighten-5 z-depth-1").attr("id", "the-card"));
        $("#the-card").append($("<div>").addClass("row valign-wrapper").attr("id","first-row"));
        $("#first-row").append($("<div>").addClass("col s2 l6").attr("id", "img-column"));
        $("#img-column").append($("<img>").addClass("circle responsive-img").attr("src", "../assets/images/bio.jpg"));
        $("#first-row").append($("<div>").addClass("col s10").attr("id", "desc-column"));
        $("#desc-column").append($("<span>").addClass("black-text").html("Experienced Technical Lead with a demonstrated history of working in the computer software industry. Skilled in Software development, Team Building, Functional Management, Java, and Rational DOORS. Strong engineering professional with a MS focused in Computer Science from National University. I have worked with C++ and Java programming languages for most of my career. In 2014, my manager asked me to hire some new grads at Northrop Grumman. I interviewed many candidates and one thing I realized is that I was becoming ancient in this industry. So I decided to quit that job and find something new and be on-hands programming lead position."))
    }
    function buildContactPage(){
        $("#main-container").empty();
        $("#main-container").append($("<div>").addClass("row").attr("id", "contact-first-row"));
        $("#contact-first-row").append($("<form>").addClass("col s12").attr("id", "the-form"));
        $("#the-form").append($("<div>").addClass("row").attr("id", "name-row"));
        $("#name-row").append($("<div>").addClass("input-field col s6").attr("id","first-name-panel"));
        $("#first-name-panel").append($("<input>").addClass("validate").attr({"id":"firstName", mid: "last_name", type:"text"}));
        $("#first-name-panel").append($("<label>").attr("for","firstName").html("First Name"));
        $("#name-row").append($("<div>").addClass("input-field col s6").attr("id","last-name-panel"));
        $("#last-name-panel").append($("<input>").addClass("validate").attr({"id":"lastName", mid: "last_name", type:"text"}));
        $("#last-name-panel").append($("<label>").addClass("").attr("for","lastName").html("Last Name"));
        $("#the-form").append($("<div>").addClass("row").attr("id","email-row"));
        $("#email-row").append($("<div>").addClass("input-field col s12").attr("id","email-panel"));
        $("#email-panel").append($("<input>").addClass("validate").attr({id:"email", placeholder: "ironman@starkindustry.com", type: "email"}));
        $("#email-panel").append($("<label>").attr("for","email").html("Email"));
        $("#the-form").append($("<div>").addClass("row").attr("id","subject-row"));
        $("#subject-row").append($("<div>").addClass("input-field col s12").attr("id","subject-panel"));
        $("#subject-panel").append($("<input>").addClass("validate").attr({mid:"subject", type: "text"}));
        $("#subject-panel").append($("<label>").attr("for","subject").html("Subject"));
        $("#the-form").append($("<div>").addClass("row").attr("id","message-row"));
        $("#message-row").append($("<div>").addClass("input-field col s12").attr("id","message-panel"));
        $("#message-panel").append($("<textarea>").addClass("materialize-textarea").attr("id","message"));
        $("#message-panel").append($("<label>").addClass("").attr("for", "message").html("Your Message"));
        $("#the-form").append($("<div>").addClass("row").attr("id","btn-row"));
        $("#btn-row").append($("<div>").addClass("row").attr("id","btn-panel"));
        $("#btn-panel").append($("<button>").addClass("btn waves-effect waves-light").attr({type: "submit", name:"action"}).html("Submit"));
    }

    function buildPortfolioPage(){
        $("#main-container").empty();
        $("#main-container").append($("<div>").addClass("container").attr("id","portfolio-container"));
        $("#portfolio-container").append($("<ul>").addClass("collapsible").attr("id","main-ul").attr("data-collapsible", "accordion"));
        $('.collapsible').collapsible();
        $("#main-ul").append($("<li>").attr("id","first-li"));
        $("#first-li").append($("<div>").addClass("collapsible-header").attr("id","first-header"));
        $("#first-header").append($("<i>").addClass("material-icons").html("filter_drama"));
        // $("#first-header").html("First Section");
        $("#first-header").append($("<a>").html("First Section"));
        $("#first-li").append($("<div>").addClass("collapsible-body").attr("id","first-li-body"));
        // $("#first-li-body").append($("<div>").addClass("row").attr("id","first-card-row"));
        // $("#first-card-row").append($("<div>").addClass("col s12 m4").attr("id","first-card-column"));
        $("#first-li-body").append($("<div>").addClass("card").attr("id","first-card"));
        $("#first-card").append($("<div>").addClass("card-image").attr("id","first-card-image"));
        $("#first-card-image").append($("<img>").addClass("").attr("src","https://placehold.it/150x80?text=IMAGE"));
        $("#first-card-image").append($("<span>").addClass("card-title").html("Hangman"));
        $("#first-card").append($("<div>").addClass("card-content").attr("id", "first-card-content"));
        $("#first-card-content").append($("<p>").html("The Hangmain game created in c++"));

    }
    
    

    $(document).on("click", "#contact-link", function () {
        event.preventDefault();
        $("#main-container").empty();
        buildContactPage();
        
    });
    $(document).on("click", "#portfolio-link", function () {
        $("#main-container").empty();
        buildPortfolioPage();
        
    });
    $(document).on("click", "#AboutMe-link", function () {
        event.preventDefault();
        console.log("aboutme-cliked");
        
    });
    

});

