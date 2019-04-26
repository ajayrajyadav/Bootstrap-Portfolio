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
        $("#subject-panel").append($("<input>").addClass("validate").attr({mid:"subject", type: "text", id: "subject"}));
        $("#subject-panel").append($("<label>").attr("for","subject").html("Subject"));
        $("#the-form").append($("<div>").addClass("row").attr("id","message-row"));
        $("#message-row").append($("<div>").addClass("input-field col s12").attr("id","message-panel"));
        $("#message-panel").append($("<textarea>").addClass("materialize-textarea").attr("id","message"));
        $("#message-panel").append($("<label>").addClass("").attr("for", "message").html("Your Message"));
        $("#the-form").append($("<div>").addClass("row").attr("id","btn-row"));
        $("#btn-row").append($("<div>").addClass("row").attr("id","btn-panel"));
        $("#btn-panel").append($("<button>").addClass("btn waves-effect waves-light").attr({type: "submit", name:"action", id: "submit-btn"}).html("Submit"));
    }

    function buildPortfolioPage(){
        $("#main-container").empty();
        $("#main-container").append($("<div>").addClass("container").attr("id","portfolio-container"));
        $("#portfolio-container").append($("<ul>").addClass("collapsible").attr("id","main-ul").attr("data-collapsible", "accordion"));
        $('.collapsible').collapsible();

        $("#main-ul").append($("<li>").attr("id","first-li"));
        $("#first-li").append($("<div>").addClass("collapsible-header").attr("id","first-header"));
        $("#first-header").append($("<i>").addClass("material-icons").html("filter_drama"));
        $("#first-header").append($("<a>").html("Giftastic"));
        $("#first-li").append($("<div>").addClass("collapsible-body").attr("id","first-li-body"));
        $("#first-li-body").append($("<div>").addClass("card").attr("id","first-card"));
        $("#first-card").append($("<div>").addClass("card-image").attr("id","first-card-image"));
        $("#first-card-image").append($("<img>").addClass("").attr({src:"../assets/images/giftastic.png"}));
        $("#first-card-image").append($("<span>").addClass("card-title").html("Giftastic"));
        $("#first-card").append($("<div>").addClass("card-content").attr("id", "first-card-content"));
        $("#first-card-content").append($("<p>").html("Giphy API, bootstrap and jQuery"));

        $("#main-ul").append($("<li>").attr("id","second-li"));
        $("#second-li").append($("<div>").addClass("collapsible-header").attr("id","second-header"));
        $("#second-header").append($("<i>").addClass("material-icons").html("filter_drama"));
        $("#second-header").append($("<a>").html("Hangman"));
        $("#second-li").append($("<div>").addClass("collapsible-body").attr("id","second-li-body"));
        $("#second-li-body").append($("<div>").addClass("card").attr("id","second-card"));
        $("#second-card").append($("<div>").addClass("card-image").attr("id","second-card-image"));
        $("#second-card-image").append($("<img>").addClass("").attr({src:"../assets/images/hangman.png"}));
        $("#second-card-image").append($("<span>").addClass("card-title").html("Giftastic"));
        $("#second-card").append($("<div>").addClass("card-content").attr("id", "second-card-content"));
        $("#second-card-content").append($("<p>").html("bootstrap, Javascript and jQuery"));

        $("#main-ul").append($("<li>").attr("id","third-li"));
        $("#third-li").append($("<div>").addClass("collapsible-header").attr("id","third-header"));
        $("#third-header").append($("<i>").addClass("material-icons").html("filter_drama"));
        $("#third-header").append($("<a>").html("Train Scheduler"));
        $("#third-li").append($("<div>").addClass("collapsible-body").attr("id","third-li-body"));
        $("#third-li-body").append($("<div>").addClass("card").attr("id","third-card"));
        $("#third-card").append($("<div>").addClass("card-image").attr("id","third-card-image"));
        $("#third-card-image").append($("<img>").addClass("").attr({src:"../assets/images/train.scheduler.png"}));
        $("#third-card-image").append($("<span>").addClass("card-title").html("Giftastic"));
        $("#third-card").append($("<div>").addClass("card-content").attr("id", "third-card-content"));
        $("#third-card-content").append($("<p>").html("bootstrap, Javascript and jQuery"));

        $("#main-ul").append($("<li>").attr("id","fourth-li"));
        $("#fourth-li").append($("<div>").addClass("collapsible-header").attr("id","fourth-header"));
        $("#fourth-header").append($("<i>").addClass("material-icons").html("filter_drama"));
        $("#fourth-header").append($("<a>").html("Trivia Game"));
        $("#fourth-li").append($("<div>").addClass("collapsible-body").attr("id","fourth-li-body"));
        $("#fourth-li-body").append($("<div>").addClass("card").attr("id","fourth-card"));
        $("#fourth-card").append($("<div>").addClass("card-image").attr("id","fourth-card-image"));
        $("#fourth-card-image").append($("<img>").addClass("").attr({src:"../assets/images/triviagame.png"}));
        $("#fourth-card-image").append($("<span>").addClass("card-title").html("Giftastic"));
        $("#fourth-card").append($("<div>").addClass("card-content").attr("id", "fourth-card-content"));
        $("#fourth-card-content").append($("<p>").html("bootstrap, Javascript and jQuery"));
        
    }

    function popupErrorModal(message){
        // $("#errorModal").empty();

        var modalDiv = $("<div>").addClass("modal").attr("id", "error-modal");
        modalDiv.append($("<div>").addClass("modal-content").attr("id","error-modal-content"));
        $("#error-modal-content").append($("<h4>").html("information"));
        $("#error-modal-content").append($("<p>").html(message));
        $("#error-modal").append($("<div>").addClass("modal-footer").attr("id","error-modal-footer"));
        $("#error-modal-footer").append($("<a>").addClass("modal-action modal-close waves-effect waves-red btn red lighten-1").html("close"));

        $(".modal").modal();


        // $(".container").append($("<div>").addClass("modal fade").attr({id: "errorModal", role: "dialog",}));

        // $("#errorModal").append($("<div>").addClass("modal-dialog").attr({id:"errDialog", role: "document"}));
        // $("#errDialog").append($("<div>").addClass("modal-content").attr("id", "errModalContent"));
        // $("#errModalContent").append($("<div>").addClass("modal-header").attr("id","errModalheader"));
        // $("#errModalheader").append($("<h5>").addClass("modal-title").attr("id", "errModalTitle").html("Error!"));
        // $("#errModalContent").append($("<div>").addClass("modal-body").attr("id", "errModalBody").html(message))
        // $("#errModalContent").append($("<div>").addClass("modal-footer").attr("id", "errModalFooter"));
        // $("#errModalFooter").append($("<button>").addClass("btn btn-secondary").attr({id: "closeButton", type: "button"}).attr("data-dismiss", "modal").html("close"))
        // $("#errorModal").modal("show");
    }

    function sendEmail(){
        var usrAddress = $("#email").val().trim();
        var usrSubject = $("#subject").val().trim();
        var usrMessage = $("#message").val().trim();
        
        Email.send({
            SecureToken : "268bc38c-e38b-4b77-8ccf-2309aaf935b1",
            To : 'ajay.yadav@nidhiandajay.com',
            From : usrAddress,
            Subject : usrSubject,
            Body : usrMessage
        }).then(
            message => alert(message)
            // popupErrorModal(message)
        );
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
        $("#main-container").empty();
        buildAboutMePage();   
    });
    $(document).on("click", "#submit-btn", function () {
        event.preventDefault();
        sendEmail();
    });

});

