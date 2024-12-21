var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+917350880493'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>7350880493</label></div> </a> <a href='mailto:nakulsatishkulkarni@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/Nacool97'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/917350880493'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/alchemist16'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/nacoolkarni'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/nakul-satish-kulkarni/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Nakul Kulkarni's Resume</label></div><a href='assets/NakulSatishKulkarni.pdf' download='Nakul Kulkarni Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
//var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.63833262443757!2d74.19014864534314!3d16.865338763272877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1a7dcf40f5dd7%3A0xd7b69fe1fcfa9877!2zMTbCsDUxJzU1LjQiTiA3NMKwMTEnMjUuMyJF!5e0!3m2!1sen!2sin!4v1645079906766!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>B2 'Asara'<br>Kodoli<br>Kolhapur, Maharashtra, INDIA 416114</address>";
var experienceString = "<b>Software Engineer Platform</b><br>\
<span class='italic'>PromptCloud Technologies Pvt. Ltd.</span><br>\
May 2023 to Present <br> \
<span class='italic'> <a herf='#' onclick=\"waitAndResponce('software_engineer_platform')\" > See the deliveriables </a></span> <br>\
\
<br> <b>Software Developer Engineer</b> <br>\
<span class='italic'>PromptCloud Technologies Pvt. Ltd.</span><br>\
Jul 2022 to May 2023<br> \<span class='italic'> <a herf='#' onclick=\"waitAndResponce('software_engineer_developer')\" > See the deliveriables </a></span> <br>\
\
<br> <b>Senior Data Engineer</b> <br>\
<span class='italic'>Provakil Technologies Pvt. Ltd.</span><br>\
Dec 2021 to Jun 2022 <br> \
<span class='italic'> <a herf='#' onclick=\"waitAndResponce('senior_data_engineer')\" > See the deliveriables </a></span> <br>\
\
<br> <b>Programmar Analyst</b> <br>\
<span class='italic'>Cognizant Technologies Solution</span><br>\
Jul 2019 to Nov 2021 <br> \
<span class='italic'> <a herf='#' onclick=\"waitAndResponce('programmar_analyst')\" > See the deliveriables </a></span> <br>\
"
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function todaysDate(){
    var date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
      var  today_date = document.getElementById('current-date');
      today_date.innerText =  formattedDate;
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "Active"
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    const formattedTime = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23', // Ensures 24-hour format
    }).format(date);
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    myDiv.innerHTML = "<div class='profile-container'><div class='profile-picture'></div><span class='profile-name'>User </span><span class='profile-label'> &nbsp;• " + formattedTime + "</span></div>";
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    //greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    //lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hi there👋🏽,<br> \
                    My name is Nakul Satish Kulkarni,<br> \
                    And currently I am working at PromptCloud Technologies as Software Engineer Platform.🧑🏾‍💻<br> \
                    I am eager to explore potential career opportunities and would be delighted to discuss any available positions within your organization<br> \
                    <br> Send 'Help' to know more about me.<br>");
            }, 950);
            todaysDate();
            playSound();
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send the following keywords if you want to know more about me ...<br> \
                e.g <br>\
                'Skills' - To know my skills <br>\
                'Resume' - To get my resume <br> \
                'Education' - To get my education details <br> \
                'Contact' - To get my connect details <br> \
                'Experience' - To get details of about my work experience <br> \
                'Clear' - To clear the chat window <br>" );
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            var skills = " I am currently working at PromptCloud Technologies as Software Engineer Platform.<br><i>Here are skills that I use on daily basis.</i><br><br> \
            Programming Languages: Python, Ruby, SQL, Shell Scripting.<br> \
            Web Scraping: Expertise in extracting data using BeautifulSoup, Selenium, Playwright, and Puppeteer. <br> \
            Frameworks & Tools: Flask, FastAPI, Resque, Docker, Airflow, Jenkins. <br> \
            Data Processing: Proficient in ElasticSearch, Kibana, MySQL, and MongoDB. <br> \
            Data Visualization: Skilled in creating insightful dashboards with Kibana. <br> \
            Problem-Solving: Experience in debugging, optimizing scripts, and addressing production issues. <br> \
            Infrastructure Optimization: Scaling systems to handle millions of requests and reducing costs effectively. <br> \
            Unit Testing & Code Review: Ensuring quality in deliverables. <br> \
            <br> Send 'Help' to know more about me.<br>"
            setTimeout(() => {
                sendTextMessage(skills);
            }, 500);
            break;

        case "education":
            var education = "Here are my education details.<br>\
            <br>\
            <font weight='strong' size='5'> Bachelors </font> <br>\
            Bachelor's in Engineering in <span class='italics'> Electronics and Telecommunication Engineering </span> <br>\
            Maharashtra Academy of Engineering, Pune <br>\
            <span class='italic'>Affiliated with SPPU (formerly known as Pune University) </span><br>\
            <b>SGPA of 7.44 </b><br>\
            From Aug 2015 - May 2019 <br>\
            <br> \
            <font weight='strong' size='5'> Higher Secondary </font> <br>\
            Shree Fatechand Jain Vidyalaya <br>\
            <b> 79.38% </b><br>\
            From Aug 2013 - May 2015 <br>\
            <br> \
            <font weight='strong' size='5'> Secondary </font> <br>\
            St.Ursula High School <br>\
            <b>79.64%</b> <br>\
            Passed out: Mar 2012 <br>\
            <br> Send 'Help' to know more about me.<br>";
            setTimeout(() => {
                sendTextMessage(education);
            }, 500);
            break;

        case "experience":
            setTimeout(() => {
                sendTextMessage(experienceString);
            }, 500);
            break;
        case "clear":
            clearChat();
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "software_engineer_platform":
            var skills = "<div class='grey'> <ol> <b> Deliveriables for Software Engineer Platform </b> \
            <li>Reduced QA checks by 60% using python and pandas </li>\
            <li>Engineered and optimised web scraping pipelines to collect, extract, clean, and store data from multiple websites, ensuring efficient and accurate data ingestion. </li> \
            <li>Enhanced platform performance by identifying and resolving vulnerabilities, optimising resource usage, and improving scripts for scalability. </li>\
            <li>Designed and implemented infrastructure capable of handling millions of requests per month, significantly improving system reliability and reducing infrastructure costs. </li> \
            <li>Developed tools and automation frameworks to enhance platform efficiency, streamlining workflows and reducing manual effort. </li> \
            <li>Created and delivered labelled datasets for ML models, enabling accurate and robust machine learning development.</li>\
            </ol></div><br><br> Send 'Help' to know more about me"
            setTimeout(() => {
                sendTextMessage(skills);
            }, 500);
            break
        case "software_engineer_developer":
            var skills = "<div class='grey'> <ol> <b> Deliveriables for Software Engineer Developer </b> \
            <li>Added and integrated new websites into the platform, ensuring seamless data flow and system compatibility.</li>\
            <li>Developed and implemented new features while enhancing existing code to improve performance and functionality.</li>\
            <li>Solved Captchas efficiently using automated solutions to enable uninterrupted data extraction.</li>\
            <li>Utilised Regex and parses for accurate data parsing and transformation.</li>\
            <li>Collaborated on coding, unit testing, and system reviews to maintain high-quality standards and optimise reliability.</li>\
            </ol></div><br><br> Send 'Help' to know more about me";
            setTimeout(() => {
                sendTextMessage(skills);
            }, 500);
            break
        case "senior_data_engineer":
            var skills = "<div class='grey'> <ol> <b > Deliveriables for Senior Data Engineer </b> \
            <li>Collected and extracted data from multiple courthouses, cleaned it, and efficiently stored it in the database for further processing.</li>\
            <li>Solved complex Captchas to ensure seamless and accurate data retrieval, overcoming website challenges.</li>\
            <li>Resolved production issues promptly to maintain system uptime and reliability.</li>\
            <li>Maintained data quality standards by implementing checks and optimising extraction pipelines for accuracy and consistency.</li>\
            </ol></div><br><br> Send 'Help' to know more about me"
            setTimeout(() => {
                sendTextMessage(skills);
            }, 500);
            break
        case "programmar_analyst":
            var skills = "<div class='grey'> <ol> <b > Deliveriables for Programmar Analyst </b> \
            <li>Performed requirement analysis to gather and understand project specifications.</li>\
            <li>Monitored systems daily and addressed issues proactively to ensure smooth operations.</li>\
            <li>Contributed to coding, unit testing, and code reviews to ensure high-quality deliverables.</li>\
            <li>Created WSDL and XSD files for efficient development and integration.</li>\
            <li>Utilized XQuery for seamless data transformation across systems.</li>\
            <li>Worked extensively with databases and SOA adapters to streamline data flow and system connectivity.</li>\
            </ol></div><br><br> Send 'Help' to know more about me"
            setTimeout(() => {
                sendTextMessage(skills);
            }, 500);
            break
            
        default:
            setTimeout(() => {
                sendTextMessage("Apologies, I couldn't get you...😢<br>Send 'Help' to know more about usage.");
            }, 1000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    const formattedTime = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23', // Ensures 24-hour format
    }).format(date);
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var profilepic = document.createElement("div")
    var profilename = document.createElement("span")
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");

    greendiv.setAttribute("class", "grey");

    myDiv.innerHTML = "<div class='profile-container'><div class='profile-picture'></div><span class='profile-name'>Nakul Kulkarni </span><span class='profile-label'> &nbsp;• " + formattedTime + "</span></div>";
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);

    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
