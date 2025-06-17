document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('[data-sidebar]');
    const mainContent = document.querySelector('.main-content');

    // --- Data ---
    const personalInfo = {
        name: 'MRITUNJAY SAINI',
        title: 'Web Developer',
        avatar: 'photo.jpg',
        email: 'sainimritunjay2003@gmail.com',
        phone: '+91 9950677356',
        birthday: '15 Dec 2003',
        location: 'Kota ,Rajasthan',
        social: [
  { name: 'logo-github', link: 'https://github.com/Mritunjay-saini' },
  { name: 'logo-linkedin', link: 'https://www.linkedin.com/in/mritunjaysaini' },
  { name: 'code-slash-outline', link: 'https://leetcode.com/u/MritunjaySaini/' } // used for LeetCode
]
    };

    const aboutMe = {
  title: 'About Me',
  description1:
    "I'm Mritunjay Saini, a passionate and detail-oriented web developer currently pursuing my Master of Computer Applications (MCA) from Parul University. I completed my Bachelor's in Computer Applications (BCA) from Career Point University. I specialize in creating responsive and functional web applications using HTML, CSS, JavaScript, and React.",
  description2:
    "I enjoy solving real-world problems by building clean and user-friendly interfaces. From budgeting tools to employee portals, my goal is to write code that not only works well but also delivers a smooth user experience. I'm constantly learning and exploring new technologies to improve my skill set and deliver better digital solutions."
};

    const services = [
        { icon: 'https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-design.svg', title: 'Web Design', text: 'The most modern and high-quality design made at a professional level.' },
        { icon: 'https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-dev.svg', title: 'Web Development', text: 'High-quality development of sites at the professional level.' },
        { icon: 'https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-app.svg', title: 'Mobile Apps', text: 'Professional development of applications for iOS and Android.' },
        { icon: 'https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-photo.svg', title: 'Photography', text: 'I make high-quality photos of any category at a professional level.' }
    ];

    const testimonials = [
        { avatar: 'https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/avatar-1.png', name: 'Daniel Lewis', text: 'Shubh was hired to create a corporate identity. We were very pleased with the work done.' },
        { avatar: 'https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/avatar-2.png', name: 'Jessica Miller', text: 'Shubh has a lot of experience and is very concerned about the needs of client.' },
        { avatar: 'https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/avatar-3.png', name: 'Emily Evans', text: 'We were very pleased with the work done. She has a lot of experience.' },
        { avatar: 'https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/avatar-4.png', name: 'Henry William', text: 'Her work is both functional and user-friendly but at the same time attractive.' }
    ];

    const education = [
  {
    institution: 'Parul University',
    period: '2024 — 2026',
    description: 'Pursuing Master of Computer Applications (MCA) with a strong focus on full-stack development and project-based learning. Current CGPA: 8.50.'
  },
  {
    institution: 'Career Point University',
    period: '2021 — 2024',
    description: 'Completed Bachelor of Computer Applications (BCA). Focused on programming fundamentals, web development, and database management. CGPA: 6.80.'
  },
  {
    institution: 'Shiv Jyoti Senior Secondary School',
    period: '2019 — 2021',
    description: 'Completed HSC in the Commerce stream with core subjects including mathematics, accounting, and economics.'
  },
  {
    institution: 'Shiv Jyoti Senior Secondary School',
    period: '2017 — 2019',
    description: 'Completed SSC with strong performance in science, mathematics, and computer fundamentals.'
  }
];

  const experience = [
  {
    role: 'Sports Coordinator – Career Point University',
    period: '2022 — 2024',
    description: 'Managed university-level sports event planning, team coordination, and logistics for multiple inter-departmental tournaments.'
  },
  {
    role: 'Volunteer – Technical Events, Parul University',
    period: '2024 — Present',
    description: 'Actively involved in organizing technical events like hackathons and coding challenges under MCA department and student clubs.'
  }
];

    const skills = [
        { name: 'Web design', value: '80' },
        { name: 'Graphic design', value: '70' },
        { name: 'Branding', value: '90' },
        { name: 'WordPress', value: '50' }
    ];
    
    const portfolioItems = [
  {
    img: 'https://user-images.githubusercontent.com/134743065/269176768-1982cfed-4a02-437c-8281-39b7b06f622d.png',
    link :"https://budget-tracker-systemm.netlify.app/",
    title: 'Budget Tracker System',
    category: 'Web Application'
  },
  {
    img: 'https://user-images.githubusercontent.com/134743065/269177011-28bcf59e-9a83-4be3-870c-c2c7fd78fc62.png',
    title: 'Employee Management Portal',
    category: 'Web Application'
  },
  {
    img: 'https://user-images.githubusercontent.com/134743065/269177219-2cb0ad07-f91b-4a4c-a024-e9ed2db64cb8.png',
    title: 'Online Quiz Platform',
    category: 'Web Application'
  },
  {
    img: 'https://user-images.githubusercontent.com/134743065/269177419-226d379c-7064-4e7f-84ef-04226d1e800d.png',
    title: 'GitHub Profile Tracker',
    category: 'Frontend Tool'
  }
];
    
    const blogPosts = [
  {
    img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*EInckgdxDC58QJAp2jUfiA.png',
    category: 'Development',
    date: 'May 20, 2024',
    title: 'Top Projects to Include in Your MCA Portfolio',
    text: 'Explore the must-have projects for MCA students to impress recruiters and build strong resumes.'
  },
  {
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--1W59Ztkb--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l5z5ymj3c1xk36dx87qs.png',
    category: 'Web Design',
    date: 'Apr 16, 2024',
    title: 'Designing Responsive Layouts with Flex and Grid',
    text: 'A beginner-friendly guide to mastering responsive layouts using modern CSS techniques.'
  }
];


    // --- Helper Functions ---
    const createElement = (tag, className, content = '') => {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (content) el.innerHTML = content;
        return el;
    };

    // --- Build UI ---
    const buildSidebar = () => {
        const sidebarInfo = createElement('div', 'sidebar-info');
        sidebarInfo.innerHTML = `
            <figure class="avatar-box">
                <img src="${personalInfo.avatar}" alt="${personalInfo.name}" width="80">
            </figure>
            <div class="info-content">
                <h1 class="name" title="${personalInfo.name}">${personalInfo.name}</h1>
                <p class="title">${personalInfo.title}</p>
            </div>
            <button class="info_more-btn" data-sidebar-btn>
                <span>Show Contacts</span>
                <ion-icon name="chevron-down"></ion-icon>
            </button>
        `;

        const sidebarMore = createElement('div', 'sidebar-info_more');
        sidebarMore.innerHTML = `
            <div class="separator"></div>
            <ul class="contacts-list">
                <li class="contact-item">
                    <div class="icon-box"><ion-icon name="mail-outline"></ion-icon></div>
                    <div class="contact-info">
                        <p class="contact-title">Email</p>
                        <a href="mailto:${personalInfo.email}" class="contact-link">${personalInfo.email}</a>
                    </div>
                </li>
                <li class="contact-item">
                    <div class="icon-box"><ion-icon name="phone-portrait-outline"></ion-icon></div>
                    <div class="contact-info">
                        <p class="contact-title">Phone</p>
                        <a href="tel:${personalInfo.phone.replace(/\s/g, '')}" class="contact-link">${personalInfo.phone}</a>
                    </div>
                </li>
                <li class="contact-item">
                    <div class="icon-box"><ion-icon name="calendar-outline"></ion-icon></div>
                    <div class="contact-info">
                        <p class="contact-title">Birthday</p>
                        <time datetime="1982-06-23">${personalInfo.birthday}</time>
                    </div>
                </li>
                <li class="contact-item">
                    <div class="icon-box"><ion-icon name="location-outline"></ion-icon></div>
                    <div class="contact-info">
                        <p class="contact-title">Location</p>
                        <address>${personalInfo.location}</address>
                    </div>
                </li>
            </ul>
            <div class="separator"></div>
            <ul class="social-list">
                ${personalInfo.social.map(s => `
                    <li class="social-item">
                        <a href="${s.link}" class="social-link">
                            <ion-icon name="${s.name}"></ion-icon>
                        </a>
                    </li>
                `).join('')}
            </ul>
        `;
        sidebar.append(sidebarInfo, sidebarMore);
    };

    const buildMainContent = () => {
        const navbar = createElement('nav', 'navbar');
        navbar.innerHTML = `
            <ul class="navbar-list">
                <li class="navbar-item"><button class="navbar-link active" data-nav-link>About</button></li>
                <li class="navbar-item"><button class="navbar-link" data-nav-link>Resume</button></li>
                <li class="navbar-item"><button class="navbar-link" data-nav-link>Portfolio</button></li>
                <li class="navbar-item"><button class="navbar-link" data-nav-link>Blog</button></li>
                <li class="navbar-item"><button class="navbar-link" data-nav-link>Contact</button></li>
            </ul>
        `;
        mainContent.appendChild(navbar);

        const pages = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];
        pages.forEach((page, index) => {
            const article = createElement('article', `page ${page.toLowerCase()} ${index === 0 ? 'active' : ''}`);
            article.dataset.page = page;
            article.innerHTML = `<header><h2 class="h2 article-title">${page === 'About' ? aboutMe.title : page}</h2></header>`;
            
            if (page === 'About') buildAboutPage(article);
            if (page === 'Resume') buildResumePage(article);
            if (page === 'Portfolio') buildPortfolioPage(article);
            if (page === 'Blog') buildBlogPage(article);
            if (page === 'Contact') buildContactPage(article);
            
            mainContent.appendChild(article);
        });
    };

    const buildAboutPage = (article) => {
        const aboutText = createElement('section', 'about-text');
        aboutText.innerHTML = `<p>${aboutMe.description1}</p><p>${aboutMe.description2}</p>`;
        
        const serviceSection = createElement('section', 'service');
        serviceSection.innerHTML = `
            <h3 class="h3 service-title">What I'm doing</h3>
            <ul class="service-list">
                ${services.map(s => `
                    <li class="service-item">
                        <div class="service-icon-box"><img src="${s.icon}" alt="" width="40"></div>
                        <div class="service-content-box">
                            <h4 class="h4 service-item-title">${s.title}</h4>
                            <p class="service-item-text">${s.text}</p>
                        </div>
                    </li>
                `).join('')}
            </ul>
        `;
        
        const testimonialsSection = createElement('section', 'testimonials');
        testimonialsSection.innerHTML = `
            <h3 class="h3 testimonials-title">Testimonials</h3>
            <ul class="testimonials-list">
                ${testimonials.map(t => `
                    <li class="testimonials-item">
                        <div class="content-card">
                            <figure class="testimonials-avatar-box"><img src="${t.avatar}" alt="${t.name}" width="60"></figure>
                            <h4 class="h4 testimonials-item-title">${t.name}</h4>
                            <div class="testimonials-text"><p>${t.text}</p></div>
                        </div>
                    </li>
                `).join('')}
            </ul>
        `;
        article.append(aboutText, serviceSection, testimonialsSection);
    };
    
    const buildResumePage = (article) => {
        const educationSection = createElement('section', 'timeline');
        educationSection.innerHTML = `
            <div class="title-wrapper"><div class="icon-box"><ion-icon name="book-outline"></ion-icon></div><h3 class="h3">Education</h3></div>
            <ol class="timeline-list">
                ${education.map(e => `
                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title">${e.institution}</h4>
                        <span>${e.period}</span>
                        <p class="timeline-text">${e.description}</p>
                    </li>`).join('')}
            </ol>
        `;
        const experienceSection = createElement('section', 'timeline');
        experienceSection.innerHTML = `
            <div class="title-wrapper"><div class="icon-box"><ion-icon name="book-outline"></ion-icon></div><h3 class="h3">Experience</h3></div>
            <ol class="timeline-list">
                 ${experience.map(e => `
                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title">${e.role}</h4>
                        <span>${e.period}</span>
                        <p class="timeline-text">${e.description}</p>
                    </li>`).join('')}
            </ol>
        `;
        const skillsSection = createElement('section', 'skill');
        skillsSection.innerHTML = `
            <h3 class="h3 skills-title">My skills</h3>
            <ul class="skills-list content-card">
                ${skills.map(s => `
                    <li class="skills-item">
                        <div class="title-wrapper">
                            <h5 class="h5">${s.name}</h5>
                            <data value="${s.value}">${s.value}%</data>
                        </div>
                        <div class="skill-progress-bg"><div class="skill-progress-fill" style="width: ${s.value}%;"></div></div>
                    </li>`).join('')}
            </ul>
        `;
        article.append(educationSection, experienceSection, skillsSection);
    };

    const buildPortfolioPage = (article) => {
        const projectSection = createElement('section', 'projects');
        projectSection.innerHTML = `
            <ul class="project-list">
                ${portfolioItems.map(p => `
                    <li class="project-item" data-category="${p.category.toLowerCase()}">
                        <a href="#">
                            <figure class="project-img"><img src="${p.img}" alt="${p.title}" loading="lazy"></figure>
                            <h3 class="project-title">${p.title}</h3>
                            <p class="project-category">${p.category}</p>
                        </a>
                    </li>
                `).join('')}
            </ul>
        `;
        article.appendChild(projectSection);
    };

    const buildBlogPage = (article) => {
        const blogSection = createElement('section', 'blog-posts');
        blogSection.innerHTML = `
            <ul class="blog-posts-list">
                ${blogPosts.map(b => `
                    <li class="blog-post-item">
                        <a href="#">
                            <figure class="blog-banner-box"><img src="${b.img}" alt="${b.title}" loading="lazy"></figure>
                            <div class="blog-content">
                                <div class="blog-meta">
                                    <p class="blog-category">${b.category}</p><span class="dot"></span><time datetime="2022-02-23">${b.date}</time>
                                </div>
                                <h3 class="h3 blog-item-title">${b.title}</h3>
                                <p class="blog-text">${b.text}</p>
                            </div>
                        </a>
                    </li>
                `).join('')}
            </ul>
        `;
        article.appendChild(blogSection);
    };
    
    const buildContactPage = (article) => {
        const mapSection = createElement('section', 'mapbox');
        mapSection.innerHTML = `<figure><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199733.99968478335!2d-121.58348226953124!3d38.5617267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b243ce3b%3A0x4896ce738b7c844!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1687890123456!5m2!1sen!2sin" width="400" height="300" loading="lazy"></iframe></figure>`;
        
        const formSection = createElement('section', 'contact-form');
        formSection.innerHTML = `
            <h3 class="h3 form-title">Contact Form</h3>
            <form action="#" class="form" data-form>
                <div class="input-wrapper">
                    <input type="text" name="fullname" class="form-input" placeholder="Full name" required>
                    <input type="email" name="email" class="form-input" placeholder="Email address" required>
                </div>
                <textarea name="message" class="form-input" placeholder="Your Message" required></textarea>
                <button class="form-btn" type="submit" data-form-btn disabled>
                    <ion-icon name="paper-plane"></ion-icon>
                    <span>Send Message</span>
                </button>
            </form>
        `;
        article.append(mapSection, formSection);
    };

    // --- Event Listeners ---
    const addEventListeners = () => {
        const sidebarBtn = document.querySelector('[data-sidebar-btn]');
        const sidebarMore = document.querySelector('.sidebar-info_more');
        sidebarBtn.addEventListener('click', () => {
            sidebarMore.classList.toggle('active');
        });

        const navLinks = document.querySelectorAll('[data-nav-link]');
        const pages = document.querySelectorAll('[data-page]');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                const targetPage = link.textContent;
                
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                pages.forEach(page => {
                    if (page.dataset.page === targetPage) {
                        page.classList.add('active');
                    } else {
                        page.classList.remove('active');
                    }
                });
            });
        });

        const form = document.querySelector('[data-form]');
        const formInputs = form.querySelectorAll('.form-input');
        const formBtn = form.querySelector('[data-form-btn]');

        formInputs.forEach(input => {
            input.addEventListener('input', () => {
                if (form.checkValidity()) {
                    formBtn.disabled = false;
                } else {
                    formBtn.disabled = true;
                }
            });
        });
    };

    // --- Initialization ---
    buildSidebar();
    buildMainContent();
    addEventListeners();
});
