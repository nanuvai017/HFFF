// Toggle menu popup
function toggleMenu() {
    const menu = document.querySelector('.menu-popup');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

// Change Language
function changeLanguage(lang) {
    const elements = {
        'home-title': {
            'en': 'Welcome to Hilful Fuzul Foundation',
            'bn': 'হিলফুল ফুজুল ফাউন্ডেশন এ স্বাগতম'
        },
        'home-description': {
            'en': 'Your trusted platform for donations and services.',
            'bn': 'আপনার বিশ্বস্ত প্ল্যাটফর্ম দান এবং সেবার জন্য।'
        },
        'home-intro': {
            'en': 'We are dedicated to making a difference in the world by providing free services and humanitarian aid. Our mission is to bring smiles to those in need through education, healthcare, and disaster relief.',
            'bn': 'আমরা বিশ্বের মধ্যে পার্থক্য তৈরিতে নিবেদিত, বিনামূল্যে সেবা এবং মানবিক সাহায্য প্রদান করে। আমাদের লক্ষ্য শিক্ষা, স্বাস্থ্যসেবা, এবং দুর্যোগ ত্রাণের মাধ্যমে মানুষের মুখে হাসি আনা।'
        },
        'news-title': {
            'en': 'Latest News',
            'bn': 'সর্বশেষ খবর'
        },
        'about-title': {
            'en': 'About Us',
            'bn': 'আমাদের সম্পর্কে'
        },
        'about-description': {
            'en': 'The Hilful Fuzul Foundation is a nonprofit organization dedicated to improving lives and supporting communities through various humanitarian initiatives.',
            'bn': 'হিলফুল ফুজুল ফাউন্ডেশন একটি অলাভজনক প্রতিষ্ঠান যা জীবনের উন্নতি এবং বিভিন্ন মানবিক উদ্যোগের মাধ্যমে সম্প্রদায়গুলিকে সমর্থন করে।'
        },
        'donation-title': {
            'en': 'Donate to a Cause',
            'bn': 'একটি কারণের জন্য দান করুন'
        },
        'contact-title': {
            'en': 'Contact Us',
            'bn': 'আমাদের সাথে যোগাযোগ করুন'
        }
    };

    // Update content based on selected language
    for (const [key, value] of Object.entries(elements)) {
        document.getElementById(key).innerText = value[lang];
    }
        }
            
