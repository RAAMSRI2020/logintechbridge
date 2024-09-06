import {
    facebook,
    instagram,
    twitter,
    linkedin,
    call,
    mail,
    course,
    certificate,
    establishment,
    placement,
    civil,
    mechanical,
    programming,
    graphicdesign,
    tally,
    msoffice,
    academy,
    academyImg,
    campus,
    campusImg,
    elearning,
    eleraningImg,
    guidance,
    realtimelearning,
    rating,
    support,
} from "../assets";

export const navLinks = [{
        id: "home",
        title: "Home",
    },
    {
        id: "courses",
        title: "Courses",
    },
    {
        id: "about-us",
        title: "About Us",
    },
    {
        id: "why-us",
        title: "Why us",
    },
    {
        id: "gallery",
        title: "Gallery",
    },
    {
        id: "testimonials",
        title: "Testimonials",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const socialMedia = [{
        id: "social-media-1",
        icon: facebook,
        link: "https://www.facebook.com/techbridge.mmpt",
    },
    {
        id: "social-media-2",
        icon: twitter,
        link: "https://x.com/Logintechbridge",
    },
    {
        id: "social-media-3",
        icon: linkedin,
        link: "https://www.linkedin.com/",
    },
    {
        id: "social-media-4",
        icon: instagram,
        link: "https://www.instagram.com/logintechbridge/",
    },
];

export const callNumbers = [{
    id: "call-number",
    icon: call,
    label: "Customer Support",
    content: "Having any queries",
    links: [{
        name: "number-1",
        number: "+918015030882"
    }, {
        name: "number-2",
        number: "+918015030883"
    }]
}];

export const emailAddress = [{
    id: "email",
    icon: mail,
    email: "info@logintechbridge.com"
}]

export const footerLinks = [{
        title: "Useful Links",
        links: [{
                name: "Content",
                link: "https://www.hoobank.com/content/",
            },
            {
                name: "How it Works",
                link: "https://www.hoobank.com/how-it-works/",
            },
            {
                name: "Create",
                link: "https://www.hoobank.com/create/",
            },
            {
                name: "Explore",
                link: "https://www.hoobank.com/explore/",
            },
            {
                name: "Terms & Services",
                link: "https://www.hoobank.com/terms-and-services/",
            },
        ],
    },
    {
        title: "Community",
        links: [{
                name: "Help Center",
                link: "https://www.hoobank.com/help-center/",
            },
            {
                name: "Partners",
                link: "https://www.hoobank.com/partners/",
            },
            {
                name: "Suggestions",
                link: "https://www.hoobank.com/suggestions/",
            },
            {
                name: "Blog",
                link: "https://www.hoobank.com/blog/",
            },
            {
                name: "Newsletters",
                link: "https://www.hoobank.com/newsletters/",
            },
        ],
    },
    {
        title: "Partner",
        links: [{
                name: "Our Partner",
                link: "https://www.hoobank.com/our-partner/",
            },
            {
                name: "Become a Partner",
                link: "https://www.hoobank.com/become-a-partner/",
            },
        ],
    },
];

export const BannerList = [{
        id: "tile-1",
        icon: course,
        title: "45+",
        value: "Advanced Courses",
    },
    {
        id: "tile-2",
        icon: establishment,
        title: "2019",
        value: "Since Established",

    },
    {
        id: "tile-3",
        icon: certificate,
        title: "45+",
        value: "Certified Partner",

    },
    {
        id: "tile-4",
        icon: placement,
        title: "100%",
        value: "Placement Assistance",

    },
];

export const CategoryList = [{
        id: "category-1",
        title: "Civil Engineering",
        icon: civil,
    }, {
        id: "category-2",
        title: "Mechanical Engineering",
        icon: mechanical,
    },
    {
        id: "category-3",
        title: "Software Training",
        icon: programming,
    },
    {
        id: "category-4",
        title: "Graphical Design",
        icon: graphicdesign,
    },
    {
        id: "category-5",
        title: "Tally Software",
        icon: tally,
    },
    {
        id: "category-6",
        title: "Microsoft Office",
        icon: msoffice,
    },
]

export const ServiceList = [{
        id: "service-1",
        title: "Campus Training",
        description: "Our training programs to ensure effective career preparedness and placement",
        icon: campus,
        image: campusImg,
    },
    {
        id: "service-2",
        title: "E-Learning Services",
        description: "Our platform to provide comprehensive and up-to-date IT courses",
        icon: elearning,
        image: eleraningImg,
    },
    {
        id: "service-3",
        title: "Academy Services",
        description: "Our dedicated training academy to provide personalized and customized IT training solutions",
        icon: academy,
        image: academyImg,
    }
]

export const LearningAdavantagesList = [{
        id: 'advantage-1',
        icon: rating,
        title: "4.5/5 Rating"
    },
    {
        id: 'advantage-2',
        icon: guidance,
        title: "1 to 1 Guidance"
    },
    {
        id: 'advantage-3',
        icon: realtimelearning,
        title: "Realtime Learning"
    },
    {
        id: 'advantage-4',
        icon: support,
        title: "24/7 Support"
    }
]