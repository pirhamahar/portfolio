
/* ---------- 1. PAGE LOADER ---------- */
window.addEventListener('load', function () {
  var loader = document.querySelector('#loader');
  if (loader) {
    setTimeout(function () { loader.classList.add('hide'); }, 600);
  }
});

/* ---------- 2. MOBILE MENU (hamburger) ---------- */
var menuBtn = document.querySelector('.menu-btn');
var navLinks = document.querySelector('.nav-links');
if (menuBtn) {
  menuBtn.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });
}

/* ---------- 3. ACTIVE NAV LINK (highlight the current page) ---------- */
var currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(function (link) {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

/* ---------- 4. SCROLL EFFECTS: header shadow, progress bar, back to top ---------- */
var header = document.querySelector('header');
var progress = document.querySelector('#progress');
var topBtn = document.querySelector('#top-btn');

window.addEventListener('scroll', function () {
  var scrollTop = window.scrollY;
  var pageHeight = document.documentElement.scrollHeight - window.innerHeight;

  header.classList.toggle('scrolled', scrollTop > 20);
  progress.style.width = (scrollTop / pageHeight) * 100 + '%';
  topBtn.classList.toggle('show', scrollTop > 400);
});

if (topBtn) {
  topBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- 5. CURSOR GLOW (soft light that follows the mouse) ---------- */
var glow = document.querySelector('#cursor-glow');
document.addEventListener('mousemove', function (e) {
  if (glow) {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  }
});

/* ---------- 6. SCROLL REVEAL (fade in when section enters the screen) ---------- */
var revealItems = document.querySelectorAll('.reveal');
var revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });
revealItems.forEach(function (item) { revealObserver.observe(item); });

/* ---------- 7. TYPING EFFECT (home page) ---------- */
var typingEl = document.querySelector('#typing');
if (typingEl) {
  var words = ['Web Developer', 'CS Student @ Sukkur IBA', 'Database Enthusiast', 'Problem Solver'];
  var wordIndex = 0;
  var charIndex = 0;
  var deleting = false;

  function type() {
    var word = words[wordIndex];
    if (deleting) {
      charIndex--;
    } else {
      charIndex++;
    }
    typingEl.textContent = word.substring(0, charIndex);

    var speed = deleting ? 50 : 100;
    if (!deleting && charIndex === word.length) {
      speed = 1500;          // wait when the word is complete
      deleting = true;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 400;
    }
    setTimeout(type, speed);
  }
  type();
}

/* ---------- 8. ANIMATED COUNTERS (home page) ---------- */
var counters = document.querySelectorAll('.counter');
var counterObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var el = entry.target;
      var target = Number(el.dataset.target);
      var count = 0;
      var step = Math.max(1, Math.ceil(target / 50));
      var timer = setInterval(function () {
        count += step;
        if (count >= target) {
          count = target;
          clearInterval(timer);
        }
        el.textContent = count + (el.dataset.plus ? '+' : '');
      }, 30);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
counters.forEach(function (c) { counterObserver.observe(c); });

 /* ---------- 9. PROJECTS DATA ----------*/

var projects = [
  {
    title: 'Student Result Management System',
    category: 'Programming',
    icon: 'fa-graduation-cap',
    color: 'linear-gradient(135deg, #10b981, #34d399)',
    tech: ['C++', 'OOP', 'File Handling'],
    description: 'A console program where a teacher can add students, enter marks for each subject and see the grade of every student.',
    features: ['Add, search and delete student records', 'Calculates total, percentage and grade', 'Saves data in a text file']
  },
  {
    title: 'Library Management Database',
    category: 'Database',
    icon: 'fa-book',
    color: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
    tech: ['MySQL', 'ERD', 'Normalization'],
    description: 'A database design for a small library with books, members and issued books. Made for the Database Systems course.',
    features: ['ER diagram with relationships', 'Tables normalized up to 3NF', 'SQL queries for issued and overdue books']
  },
  {
    title: 'To-Do List Web App',
    category: 'Web',
    icon: 'fa-list-check',
    color: 'linear-gradient(135deg, #10b981, #3b82f6)',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description: 'A simple task manager in the browser. Tasks stay saved even after closing the page because of localStorage.',
    features: ['Add, complete and delete tasks', 'Saves tasks in localStorage', 'Responsive dark design']
  },
  {
    title: 'Weather App',
    category: 'Web',
    icon: 'fa-cloud-sun',
    color: 'linear-gradient(135deg, #38bdf8, #3b82f6)',
    tech: ['HTML', 'CSS', 'JavaScript', 'Fetch API'],
    description: 'Type a city name and the app shows its temperature and weather using a free weather API.',
    features: ['Uses fetch() to call an API', 'Shows temperature, humidity and wind', 'Shows an error for a wrong city name']
  },
  {
    title: 'Quiz App',
    category: 'Web',
    icon: 'fa-circle-question',
    color: 'linear-gradient(135deg, #a3e635, #10b981)',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description: 'A multiple choice quiz with a countdown timer. At the end it shows your score.',
    features: ['Questions stored in a JavaScript array', 'Timer for every question', 'Final score screen with restart button']
  },
  {
    title: 'Bank Account System',
    category: 'Programming',
    icon: 'fa-building-columns',
    color: 'linear-gradient(135deg, #34d399, #3b82f6)',
    tech: ['Java', 'OOP', 'Inheritance'],
    description: 'A Java program that shows OOP ideas with Savings and Current accounts. Users can deposit, withdraw and check the balance.',
    features: ['Parent class Account with child classes', 'Uses inheritance and polymorphism', 'Checks for low balance before withdraw']
  },
  {
    title: 'Hospital Appointment Database',
    category: 'Database',
    icon: 'fa-hospital',
    color: 'linear-gradient(135deg, #60a5fa, #10b981)',
    tech: ['SQL', 'Joins', 'Keys'],
    description: 'A database for doctors, patients and appointments. I practiced primary keys, foreign keys and JOIN queries.',
    features: ['Tables with primary and foreign keys', 'INNER JOIN and LEFT JOIN queries', 'Query to list a doctor\'s appointments by date']
  },
  {
    title: 'Expense Tracker',
    category: 'Programming',
    icon: 'fa-wallet',
    color: 'linear-gradient(135deg, #10b981, #a3e635)',
    tech: ['Python', 'CSV'],
    description: 'A Python program to record daily expenses and see the monthly total. Data is saved in a CSV file.',
    features: ['Add expense with category and amount', 'Monthly total and category summary', 'Reads and writes a CSV file']
  }
];

/* ---------- 10. SHOW PROJECTS ---------- */
var grid = document.querySelector('#project-grid');
var modal = document.querySelector('#modal');

function showProjects(filter) {
  grid.innerHTML = '';
  var limit = Number(grid.dataset.limit) || projects.length;
  var count = 0;

  projects.forEach(function (project, index) {
    if (count >= limit) { return; }
    if (filter !== 'All' && project.category !== filter) { return; }
    count++;

    var tags = project.tech.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('');
    var card = document.createElement('div');
    card.className = 'card project-card reveal visible';
    card.innerHTML =
      '<div class="project-thumb" style="background:' + project.color + '"><i class="fa-solid ' + project.icon + '"></i></div>' +
      '<div class="project-body">' +
        '<h3>' + project.title + '</h3>' +
        '<span class="tag cat">' + project.category + '</span>' + tags +
      '</div>';
    card.addEventListener('click', function () { openModal(index); });

    // 3D tilt when the mouse moves over the card
    card.addEventListener('mousemove', function (e) {
      var box = card.getBoundingClientRect();
      var x = (e.clientX - box.left) / box.width - 0.5;
      var y = (e.clientY - box.top) / box.height - 0.5;
      card.style.transform = 'perspective(700px) rotateY(' + x * 14 + 'deg) rotateX(' + y * -14 + 'deg)';
    });
    card.addEventListener('mouseleave', function () { card.style.transform = 'none'; });

    grid.appendChild(card);
  });
}

function openModal(index) {
  var p = projects[index];
  var features = p.features.map(function (f) { return '<li>' + f + '</li>'; }).join('');
  var tags = p.tech.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('');
  document.querySelector('#modal-content').innerHTML =
    '<h3 class="gradient-text">' + p.title + '</h3>' +
    '<p>' + p.description + '</p>' +
    '<ul>' + features + '</ul>' + tags +
    '<div class="modal-buttons">' +
      '<a class="btn btn-primary" href="https://github.com/pirhamahar" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> GitHub</a>' +
      '<a class="btn btn-outline" href="#" onclick="return false;">Live Demo (soon)</a>' +
    '</div>';
  modal.classList.add('open');
}

function closeModal() { modal.classList.remove('open'); }

if (grid) {
  showProjects('All');

  // filter buttons (only exist on the projects page)
  document.querySelectorAll('.filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      showProjects(btn.dataset.filter);
    });
  });

  // close the modal: X button, click outside the box, or Escape key
  document.querySelector('.modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) { if (e.target === modal) { closeModal(); } });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeModal(); } });
}

/* ---------- 11. CONTACT FORM VALIDATION ---------- */
var form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();            // stop the page from reloading
    var valid = true;

    function check(id, message, isOk) {
      var input = document.querySelector('#' + id);
      var error = document.querySelector('#' + id + '-error');
      if (!isOk(input.value.trim())) {
        error.textContent = message;
        valid = false;
      } else {
        error.textContent = '';
      }
    }

    check('name', 'Please enter your name.', function (v) { return v.length >= 2; });
    check('email', 'Please enter a valid email.', function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); });
    check('subject', 'Please enter a subject.', function (v) { return v.length > 0; });
    check('message', 'Message must be at least 10 characters.', function (v) { return v.length >= 10; });

    var success = document.querySelector('#success');
    if (valid) {
      success.classList.add('show');
      form.reset();
      setTimeout(function () { success.classList.remove('show'); }, 5000);
    } else {
      success.classList.remove('show');
    }
  });
}
