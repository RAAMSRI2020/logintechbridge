import { facebook, instagram, twitter, linkedin, call, mail } from "../assets";

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
    id: "call-number-1",
    icon: call,
    label: "Customer Support",
    content: "Having any queries",
    links: [{
        name: "number",
        number: "+918015030882"
    }, {
        name: "number",
        number: "+918015030883"
    }]
}];

export const emailAddress = [{
    id: "email",
    icon: mail,
    email: "info@logintechbridge.com"
}]