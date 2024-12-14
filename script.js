// Function to change language
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
            'en': 'We are dedicated to making a difference in the world by providing free services and humanitarian aid.',
            'bn': 'আমরা সমাজে মানুষদের সাহায্য করার জন্য নিবেদিত।'
        },
        'news-title': {
            'en': 'Donations and Aid News',
            'bn': 'দান এবং সাহায্যের নিউজ'
        },
        'about-title': {
            'en': 'About Us',
            'bn': 'আমাদের সম্পর্কে'
        },
        'donation-title': {
            'en': 'Donate to a Cause',
            'bn': 'দান করুন একটি উদ্দেশ্যে'
        },
        'contact-title': {
            'en': 'Contact Us',
            'bn': 'যোগাযোগ করুন'
        },
        'donation-description': {
            'en': 'Your donation can make a significant impact in someone\'s life. Choose one of the causes below to donate:',
            'bn': 'আপনার দান একজনের জীবন পরিবর্তন করতে সাহায্য করবে। নিচের যে কোনো উদ্দেশ্য নির্বাচন করুন:'
        }
    };

    // Update content based on selected language
    for (const [key, value] of Object.entries(elements)) {
        document.getElementById(key).innerText = value[lang];
    }
}
