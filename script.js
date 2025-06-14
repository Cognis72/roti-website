// Language Toggle Functionality
const translations = {
    en: {
        // Navigation
        'Teng 1 Roti': 'Teng 1 Roti',
        'Home': 'Home',
        'About': 'About',
        'Menu': 'Menu',
        'Franchise': 'Franchise',
        'Contact': 'Contact',
        
        // Hero Section
        'Authentic Thai Roti & Cha Chak': 'Authentic Thai Roti & Cha Chak',
        'Experience the crispy golden perfection of traditional Thai roti paired with our signature cha chak tea': 'Experience the crispy golden perfection of traditional Thai roti paired with our signature cha chak tea',
        'Join Our Franchise': 'Join Our Franchise',
        'View Menu': 'View Menu',
        
        // About Section
        'About Teng 1 Roti': 'About Teng 1 Roti',
        'Our story of authentic flavors and franchise success': 'Our story of authentic flavors and franchise success',
        'A Legacy of Authentic Thai Flavors': 'A Legacy of Authentic Thai Flavors',
        'Founded in 2010, Teng 1 Roti began as a small family business with a passion for creating the perfect crispy roti and traditional cha chak tea. Our founder, Mr. Teng, learned the art of roti making from his grandmother, preserving centuries-old techniques that create the distinctive golden, crispy texture our customers love.': 'Founded in 2010, Teng 1 Roti began as a small family business with a passion for creating the perfect crispy roti and traditional cha chak tea. Our founder, Mr. Teng, learned the art of roti making from his grandmother, preserving centuries-old techniques that create the distinctive golden, crispy texture our customers love.',
        'Today, we operate over 150 franchise locations across Thailand and Southeast Asia, each maintaining our commitment to quality, authenticity, and exceptional customer service. Our franchise partners become part of the Teng 1 family, supported by comprehensive training, proven business systems, and ongoing operational support.': 'Today, we operate over 150 franchise locations across Thailand and Southeast Asia, each maintaining our commitment to quality, authenticity, and exceptional customer service. Our franchise partners become part of the Teng 1 family, supported by comprehensive training, proven business systems, and ongoing operational support.',
        
        // Menu Section
        'Our Signature Menu': 'Our Signature Menu',
        'Authentic Thai flavors that keep customers coming back': 'Authentic Thai flavors that keep customers coming back',
        'Original Crispy Roti': 'Original Crispy Roti',
        'Hand-stretched golden roti, crispy on the outside, soft on the inside. Served with curry dipping sauce and sweet condensed milk.': 'Hand-stretched golden roti, crispy on the outside, soft on the inside. Served with curry dipping sauce and sweet condensed milk.',
        'Traditional Cha Chak': 'Traditional Cha Chak',
        'Perfectly pulled Thai tea with evaporated milk, creating the signature creamy layers and rich orange color.': 'Perfectly pulled Thai tea with evaporated milk, creating the signature creamy layers and rich orange color.',
        'Roti Banana Special': 'Roti Banana Special',
        'Sweet crispy roti filled with fresh banana slices, drizzled with condensed milk and sugar.': 'Sweet crispy roti filled with fresh banana slices, drizzled with condensed milk and sugar.',
        'Matcha Roti Fusion': 'Matcha Roti Fusion',
        'Modern twist on classic roti with premium matcha flavor and white chocolate drizzle.': 'Modern twist on classic roti with premium matcha flavor and white chocolate drizzle.',
        '฿35': '฿35',
        '฿25': '฿25',
        '฿45': '฿45',
        '฿55': '฿55',
        
        // Franchise Section
        'Join Our Franchise Family': 'Join Our Franchise Family',
        'Start your successful business journey with proven systems and support': 'Start your successful business journey with proven systems and support',
        'Why Choose Teng 1 Roti Franchise?': 'Why Choose Teng 1 Roti Franchise?',
        'Proven Success': 'Proven Success',
        'Over 150 successful locations with consistent profitability': 'Over 150 successful locations with consistent profitability',
        'Complete Training': 'Complete Training',
        '2-week intensive training program covering all operations': '2-week intensive training program covering all operations',
        'Ongoing Support': 'Ongoing Support',
        'Marketing, operations, and technical support throughout': 'Marketing, operations, and technical support throughout',
        'Low Investment': 'Low Investment',
        'Starting from ฿800,000 total investment package': 'Starting from ฿800,000 total investment package',
        'Simple 4-Step Process': 'Simple 4-Step Process',
        'Application': 'Application',
        'Submit your franchise application and initial investment': 'Submit your franchise application and initial investment',
        'Training': 'Training',
        'Complete our comprehensive 2-week training program': 'Complete our comprehensive 2-week training program',
        'Setup': 'Setup',
        'We help set up your location with equipment and supplies': 'We help set up your location with equipment and supplies',
        'Launch': 'Launch',
        'Grand opening with marketing support and ongoing assistance': 'Grand opening with marketing support and ongoing assistance',
        
        // Contact Section
        'Get In Touch': 'Get In Touch',
        'Ready to start your franchise journey? Contact us today!': 'Ready to start your franchise journey? Contact us today!',
        'Contact Information': 'Contact Information',
        'Address': 'Address',
        '123 Sukhumvit Road, Bangkok 10110, Thailand': '123 Sukhumvit Road, Bangkok 10110, Thailand',
        'Phone': 'Phone',
        'Email': 'Email',
        'Business Hours': 'Business Hours',
        'Mon - Fri: 9:00 AM - 6:00 PM': 'Mon - Fri: 9:00 AM - 6:00 PM',
        'Send Us a Message': 'Send Us a Message',
        'Full Name': 'Full Name',
        'Phone Number': 'Phone Number',
        'Email Address': 'Email Address',
        'Interest Level': 'Interest Level',
        'Select your interest': 'Select your interest',
        'Franchise Opportunity': 'Franchise Opportunity',
        'Business Partnership': 'Business Partnership',
        'Supplier Inquiry': 'Supplier Inquiry',
        'General Information': 'General Information',
        'Message': 'Message',
        'Send Message': 'Send Message',
        'Tell us about your interest in Teng 1 Roti franchise...': 'Tell us about your interest in Teng 1 Roti franchise...',
        
        // Footer
        'Authentic Thai roti and cha chak franchise. Join our growing family of successful business owners.': 'Authentic Thai roti and cha chak franchise. Join our growing family of successful business owners.',
        'Quick Links': 'Quick Links',
        '© 2025 Teng 1 Roti. All rights reserved.': '© 2025 Teng 1 Roti. All rights reserved.'
    },
    th: {
        // Navigation
        'Teng 1 Roti': 'เต็ง 1 โรตี',
        'Home': 'หน้าแรก',
        'About': 'เกี่ยวกับเรา',
        'Menu': 'เมนู',
        'Franchise': 'แฟรนไชส์',
        'Contact': 'ติดต่อ',
        
        // Hero Section
        'Authentic Thai Roti & Cha Chak': 'โรตีและชาชักแท้ ๆ',
        'Experience the crispy golden perfection of traditional Thai roti paired with our signature cha chak tea': 'สัมผัสความกรอบสีทองแบบดั้งเดิมของโรตีไทย คู่กับชาชักสูตรเด็ด',
        'Join Our Franchise': 'เข้าร่วมแฟรนไชส์',
        'View Menu': 'ดูเมนู',
        
        // About Section
        'About Teng 1 Roti': 'เกี่ยวกับเต็ง 1 โรตี',
        'Our story of authentic flavors and franchise success': 'เรื่องราวของรสชาติแท้และความสำเร็จของแฟรนไชส์',
        'A Legacy of Authentic Thai Flavors': 'มรดกแห่งรสชาติไทยแท้',
        'Founded in 2010, Teng 1 Roti began as a small family business with a passion for creating the perfect crispy roti and traditional cha chak tea. Our founder, Mr. Teng, learned the art of roti making from his grandmother, preserving centuries-old techniques that create the distinctive golden, crispy texture our customers love.': 'ก่อตั้งในปี 2553 เต็ง 1 โรตี เริ่มต้นจากธุรกิจครอบครัวเล็ก ๆ ด้วยความหลงใหลในการสร้างโรตีกรอบที่สมบูรณ์แบบและชาชักดั้งเดิม คุณเต็ง ผู้ก่อตั้ง ได้เรียนรู้ศิลปะการทำโรตีจากคุณยาย โดยรักษาเทคนิคโบราณนับร้อยปีที่สร้างเนื้อสัมผัสสีทองกรอบที่โดดเด่นและเป็นที่รักของลูกค้า',
        'Today, we operate over 150 franchise locations across Thailand and Southeast Asia, each maintaining our commitment to quality, authenticity, and exceptional customer service. Our franchise partners become part of the Teng 1 family, supported by comprehensive training, proven business systems, and ongoing operational support.': 'วันนี้เรามีร้านแฟรนไชส์กว่า 150 สาขาทั่วประเทศไทยและเอเชียตะวันออกเฉียงใต้ แต่ละสาขายังคงรักษาความมุ่งมั่นในคุณภาพ ความแท้จริง และการบริการลูกค้าที่ยอดเยี่ยม พันธมิตรแฟรนไชส์ของเราจะกลายเป็นส่วนหนึ่งของครอบครัวเต็ง 1 ได้รับการสนับสนุนด้วยการฝึกอบรมที่ครอบคลุม ระบบธุรกิจที่พิสูจน์แล้ว และการสนับสนุนการดำเนินงานอย่างต่อเนื่อง',
        
        // Menu Section
        'Our Signature Menu': 'เมนูซิกเนเจอร์ของเรา',
        'Authentic Thai flavors that keep customers coming back': 'รสชาติไทยแท้ที่ทำให้ลูกค้ากลับมาอีก',
        'Original Crispy Roti': 'โรตีกรอบดั้งเดิม',
        'Hand-stretched golden roti, crispy on the outside, soft on the inside. Served with curry dipping sauce and sweet condensed milk.': 'โรตีสีทองขึ้นด้วยมือ กรอบนอกนุ่มใน เสิร์ฟพร้อมน้ำแกงจิ้มและนมข้นหวาน',
        'Traditional Cha Chak': 'ชาชักดั้งเดิม',
        'Perfectly pulled Thai tea with evaporated milk, creating the signature creamy layers and rich orange color.': 'ชาไทยชักแบบดั้งเดิมด้วยนมข้นจืด สร้างชั้นครีมที่เป็นเอกลักษณ์และสีส้มเข้ม',
        'Roti Banana Special': 'โรตีกล้วยพิเศษ',
        'Sweet crispy roti filled with fresh banana slices, drizzled with condensed milk and sugar.': 'โรตีกรอบหวานไส้กล้วยสดหั่นชิ้น ราดด้วยนมข้นหวานและน้ำตาล',
        'Matcha Roti Fusion': 'โรตีมัทฉะฟิวชั่น',
        'Modern twist on classic roti with premium matcha flavor and white chocolate drizzle.': 'โรตีคลาสสิกแบบใหม่ด้วยรสมัทฉะพรีเมียมและราดช็อกโกแลตขาว',
        '฿35': '35 บาท',
        '฿25': '25 บาท',
        '฿45': '45 บาท',
        '฿55': '55 บาท',
        
        // Franchise Section
        'Join Our Franchise Family': 'เข้าร่วมครอบครัวแฟรนไชส์ของเรา',
        'Start your successful business journey with proven systems and support': 'เริ่มต้นการเดินทางธุรกิจที่ประสบความสำเร็จด้วยระบบและการสนับสนุนที่พิสูจน์แล้ว',
        'Why Choose Teng 1 Roti Franchise?': 'ทำไมต้องเลือกแฟรนไชส์เต็ง 1 โรตี?',
        'Proven Success': 'ความสำเร็จที่พิสูจน์แล้ว',
        'Over 150 successful locations with consistent profitability': 'มากกว่า 150 สาขาที่ประสบความสำเร็จด้วยผลกำไรที่สม่ำเสมอ',
        'Complete Training': 'การฝึกอบรมครบถ้วน',
        '2-week intensive training program covering all operations': 'โปรแกรมการฝึกอบรมเข้มข้น 2 สัปดาห์ครอบคลุมการดำเนินงานทั้งหมด',
        'Ongoing Support': 'การสนับสนุนต่อเนื่อง',
        'Marketing, operations, and technical support throughout': 'การสนับสนุนด้านการตลาด การดำเนินงาน และเทคนิคตลอดไป',
        'Low Investment': 'การลงทุนต่ำ',
        'Starting from ฿800,000 total investment package': 'เริ่มต้นจากแพ็คเกจการลงทุนรวม 800,000 บาท',
        'Simple 4-Step Process': 'กระบวนการ 4 ขั้นตอนง่าย ๆ',
        'Application': 'ใบสมัคร',
        'Submit your franchise application and initial investment': 'ส่งใบสมัครแฟรนไชส์และการลงทุนเริ่มต้น',
        'Training': 'การฝึกอบรม',
        'Complete our comprehensive 2-week training program': 'เข้าร่วมโปรแกรมการฝึกอบรมครอบคลุม 2 สัปดาห์',
        'Setup': 'การติดตั้ง',
        'We help set up your location with equipment and supplies': 'เราช่วยตั้งค่าสถานที่ของคุณด้วยอุปกรณ์และเครื่องมือ',
        'Launch': 'เปิดตัว',
        'Grand opening with marketing support and ongoing assistance': 'เปิดใหญ่ด้วยการสนับสนุนการตลาดและความช่วยเหลือต่อเนื่อง',
        
        // Contact Section
        'Get In Touch': 'ติดต่อเรา',
        'Ready to start your franchise journey? Contact us today!': 'พร้อมที่จะเริ่มต้นการเดินทางแฟรนไชส์ของคุณหรือยัง? ติดต่อเราวันนี้!',
        'Contact Information': 'ข้อมูลการติดต่อ',
        'Address': 'ที่อยู่',
        '123 Sukhumvit Road, Bangkok 10110, Thailand': '123 ถนนสุขุมวิท กรุงเทพ 10110 ประเทศไทย',
        'Phone': 'โทรศัพท์',
        'Email': 'อีเมล',
        'Business Hours': 'เวลาทำการ',
        'Mon - Fri: 9:00 AM - 6:00 PM': 'จันทร์ - ศุกร์: 9:00 น. - 18:00 น.',
        'Send Us a Message': 'ส่งข้อความถึงเรา',
        'Full Name': 'ชื่อ-นามสกุล',
        'Phone Number': 'หมายเลขโทรศัพท์',
        'Email Address': 'ที่อยู่อีเมล',
        'Interest Level': 'ระดับความสนใจ',
        'Select your interest': 'เลือกความสนใจของคุณ',
        'Franchise Opportunity': 'โอกาสแฟรนไชส์',
        'Business Partnership': 'หุ้นส่วนทางธุรกิจ',
        'Supplier Inquiry': 'สอบถามซัพพลายเออร์',
        'General Information': 'ข้อมูลทั่วไป',
        'Message': 'ข้อความ',
        'Send Message': 'ส่งข้อความ',
        'Tell us about your interest in Teng 1 Roti franchise...': 'บอกเราเกี่ยวกับความสนใจของคุณในแฟรนไชส์เต็ง 1 โรตี...',
        
        // Footer
        'Authentic Thai roti and cha chak franchise. Join our growing family of successful business owners.': 'แฟรนไชส์โรตีและชาชักไทยแท้ เข้าร่วมครอบครัวที่เติบโตของเจ้าของธุรกิจที่ประสบความสำเร็จ',
        'Quick Links': 'ลิงก์ด่วน',
        '© 2025 Teng 1 Roti. All rights reserved.': '© 2025 เต็ง 1 โรตี สงวนลิขสิทธิ์'
    }
};

// Global variables
let currentLanguage = 'en';
let isMenuOpen = false;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize website functionality
function initializeWebsite() {
    setupLanguageToggle();
    setupMobileMenu();
    setupSmoothScrolling();
    setupNavbarScrollEffect();
    setupFormHandling();
    setupIntersectionObserver();
    setupLoadingAnimations();
}

// Language Toggle Functionality
function setupLanguageToggle() {
    const langToggle = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    
    if (langToggle && langText) {
        langToggle.addEventListener('click', function() {
            currentLanguage = currentLanguage === 'en' ? 'th' : 'en';
            updateLanguage();
            langText.textContent = currentLanguage === 'en' ? 'TH' : 'EN';
            
            // Add animation effect
            langToggle.style.transform = 'scale(0.9)';
            setTimeout(() => {
                langToggle.style.transform = 'scale(1)';
            }, 150);
        });
    }
}

// Update language content
function updateLanguage() {
    const elements = document.querySelectorAll('[data-en], [data-th]');
    
    elements.forEach(element => {
        const key = currentLanguage === 'en' ? 'data-en' : 'data-th';
        const text = element.getAttribute(key);
        
        if (text && translations[currentLanguage][text]) {
            element.textContent = translations[currentLanguage][text];
        } else if (text) {
            element.textContent = text;
        }
    });
    
    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-en-placeholder], [data-th-placeholder]');
    placeholderElements.forEach(element => {
        const key = currentLanguage === 'en' ? 'data-en-placeholder' : 'data-th-placeholder';
        const placeholder = element.getAttribute(key);
        if (placeholder) {
            element.placeholder = placeholder;
        }
    });
    
    // Update document title and meta description
    const title = document.title;
    const titleKey = currentLanguage === 'en' ? 'data-en' : 'data-th';
    const newTitle = document.querySelector('title').getAttribute(titleKey);
    if (newTitle) {
        document.title = newTitle;
    }
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        const descKey = currentLanguage === 'en' ? 'data-en' : 'data-th';
        const newDesc = metaDesc.getAttribute(descKey);
        if (newDesc) {
            metaDesc.setAttribute('content', newDesc);
        }
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

// Mobile Menu Functionality
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            isMenuOpen = !isMenuOpen;
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        });
        
        // Close menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (isMenuOpen) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                    isMenuOpen = false;
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (isMenuOpen && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                isMenuOpen = false;
            }
        });
    }
}

// Smooth Scrolling for Navigation Links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar Scroll Effect
function setupNavbarScrollEffect() {
    const navbar = document.getElementById('navbar');
    let scrollTimer = null;
    
    window.addEventListener('scroll', function() {
        if (scrollTimer !== null) {
            clearTimeout(scrollTimer);
        }
        
        scrollTimer = setTimeout(function() {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, 10);
    });
}

// Form Handling
function setupFormHandling() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = currentLanguage === 'en' ? 'Sending...' : 'กำลังส่ง...';
            submitBtn.disabled = true;
            
            // Validate form
            if (validateForm(contactForm)) {
                // Submit form using Formspree
                const formData = new FormData(contactForm);
                
                fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    if (response.ok) {
                        showFormMessage('success', currentLanguage === 'en' ? 
                            'Thank you for your message! We will contact you soon.' : 
                            'ขอบคุณสำหรับข้อความของคุณ! เราจะติดต่อกลับเร็วๆ นี้');
                        contactForm.reset();
                    } else {
                        throw new Error('Form submission failed');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    showFormMessage('error', currentLanguage === 'en' ? 
                        'Sorry, there was an error sending your message. Please try again.' : 
                        'ขออภัย เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง');
                })
                .finally(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
            } else {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
}

// Form Validation
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, currentLanguage === 'en' ? 'This field is required' : 'ฟิลด์นี้จำเป็น');
            isValid = false;
        } else {
            clearFieldError(field);
            
            // Email validation
            if (field.type === 'email' && !isValidEmail(field.value)) {
                showFieldError(field, currentLanguage === 'en' ? 'Please enter a valid email address' : 'กรุณากรอกอีเมลที่ถูกต้อง');
                isValid = false;
            }
            
            // Phone validation
            if (field.type === 'tel' && !isValidPhone(field.value)) {
                showFieldError(field, currentLanguage === 'en' ? 'Please enter a valid phone number' : 'กรุณากรอกหมายเลขโทรศัพท์ที่ถูกต้อง');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

// Show field error
function showFieldError(field, message) {
    clearFieldError(field);
    field.style.borderColor = '#e74c3c';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

// Clear field error
function clearFieldError(field) {
    field.style.borderColor = '';
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

// Show form message
function showFormMessage(type, message) {
    const existingMessage = document.querySelector('.form-success, .form-error');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'form-success' : 'form-error';
    messageDiv.textContent = message;
    
    const form = document.getElementById('contact-form');
    form.parentNode.insertBefore(messageDiv, form);
    
    // Auto remove message after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
    
    // Scroll to message
    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation
function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{8,}$/;
    return phoneRegex.test(phone.trim());
}

// Intersection Observer for Animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for fade-in animation
    const fadeElements = document.querySelectorAll('.menu-item, .benefit-item, .step, .contact-item');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Loading Animations
function setupLoadingAnimations() {
    // Add loading class to main sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
        section.classList.add('loading');
    });
    
    // Trigger animations after page load
    window.addEventListener('load', function() {
        setTimeout(() => {
            sections.forEach(section => {
                section.style.opacity = '1';
            });
        }, 100);
    });
}

// Utility Functions

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Get scroll position
function getScrollPosition() {
    return window.pageYOffset || document.documentElement.scrollTop;
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Analytics and Performance Tracking
function trackEvent(eventName, properties = {}) {
    // Placeholder for analytics tracking
    console.log(`Event: ${eventName}`, properties);
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // Here you could send error reports to your analytics service
});

// Performance Monitoring
window.addEventListener('load', function() {
    // Log performance metrics
    setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0];
        if (navigation) {
            console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart);
        }
    }, 0);
});

// Accessibility Enhancements
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && isMenuOpen) {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
        isMenuOpen = false;
    }
});

// Lazy Loading for Images (if needed)
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const lazyImageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazy');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
}

// Service Worker Registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment when you have a service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(function(registration) {
        //         console.log('SW registered: ', registration);
        //     })
        //     .catch(function(registrationError) {
        //         console.log('SW registration failed: ', registrationError);
        //     });
    });
}
