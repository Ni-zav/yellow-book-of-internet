export interface Website {
  id: string;
  name: string;
  url: string;
  description: string;
  tags: string[];
}

export const websites: Website[] = [
  {
    id: "1",
    name: "Google",
    url: "https://www.google.com",
    description: "The world's most popular search engine",
    tags: ["Search", "Tech", "Tools"],
  },
  {
    id: "2",
    name: "YouTube",
    url: "https://www.youtube.com",
    description: "Video sharing platform and social network",
    tags: ["Video", "Entertainment", "Social Media"],
  },
  {
    id: "3",
    name: "Wikipedia",
    url: "https://www.wikipedia.org",
    description: "Free online encyclopedia created and edited by volunteers",
    tags: ["Reference", "Education", "Knowledge"],
  },
  {
    id: "4",
    name: "Amazon",
    url: "https://www.amazon.com",
    description: "Online shopping and cloud computing company",
    tags: ["Shopping", "E-commerce", "Tech"],
  },
  {
    id: "5",
    name: "Reddit",
    url: "https://www.reddit.com",
    description: "Network of communities based on people's interests",
    tags: ["Social Media", "Forums", "Community"],
  },
  {
    id: "6",
    name: "Twitter",
    url: "https://twitter.com",
    description: "Microblogging and social networking service",
    tags: ["Social Media", "News", "Communication"],
  },
  {
    id: "7",
    name: "Netflix",
    url: "https://www.netflix.com",
    description: "Subscription-based streaming service",
    tags: ["Entertainment", "Streaming", "Video"],
  },
  {
    id: "8",
    name: "LinkedIn",
    url: "https://www.linkedin.com",
    description: "Business and employment-oriented online service",
    tags: ["Professional", "Social Media", "Careers"],
  },
  {
    id: "9",
    name: "GitHub",
    url: "https://github.com",
    description: "Software development and version control platform",
    tags: ["Development", "Tech", "Open Source"],
  },
  {
    id: "10",
    name: "Spotify",
    url: "https://www.spotify.com",
    description: "Digital music, podcast, and video streaming service",
    tags: ["Music", "Entertainment", "Streaming"],
  },
  {
    id: "11",
    name: "Medium",
    url: "https://medium.com",
    description:
      "Online publishing platform with a hybrid collection of amateur and professional writers",
    tags: ["Publishing", "Writing", "Content"],
  },
  {
    id: "12",
    name: "Airbnb",
    url: "https://www.airbnb.com",
    description:
      "Online marketplace for lodging, primarily homestays for vacation rentals",
    tags: ["Travel", "Accommodation", "Marketplace"],
  },
  {
    id: "13",
    name: "Instagram",
    url: "https://www.instagram.com",
    description: "Photo and video sharing social networking service",
    tags: ["Social Media", "Photography", "Entertainment"],
  },
  {
    id: "14",
    name: "Stack Overflow",
    url: "https://stackoverflow.com",
    description:
      "Question and answer website for professional and enthusiast programmers",
    tags: ["Development", "Tech", "Q&A"],
  },
  {
    id: "15",
    name: "Notion",
    url: "https://www.notion.so",
    description: "All-in-one workspace for notes, tasks, wikis, and databases",
    tags: ["Productivity", "Tools", "Organization"],
  },
  {
    id: "16",
    name: "Figma",
    url: "https://www.figma.com",
    description:
      "Cloud-based design tool that helps teams create, test, and ship better designs",
    tags: ["Design", "Collaboration", "Tools"],
  },
  {
    id: "17",
    name: "Dribbble",
    url: "https://dribbble.com",
    description:
      "Self-promotion and social networking platform for digital designers",
    tags: ["Design", "Inspiration", "Creative"],
  },
  {
    id: "18",
    name: "Canva",
    url: "https://www.canva.com",
    description:
      "Graphic design platform used to create social media graphics, presentations, posters, and other visual content",
    tags: ["Design", "Tools", "Creative"],
  },
  {
    id: "19",
    name: "New York Times",
    url: "https://www.nytimes.com",
    description: "American daily newspaper based in New York City",
    tags: ["News", "Media", "Publishing"],
  },
  {
    id: "20",
    name: "BBC",
    url: "https://www.bbc.com",
    description: "British public service broadcaster",
    tags: ["News", "Media", "Broadcasting"],
  },
  {
    id: "21",
    name: "TechCrunch",
    url: "https://techcrunch.com",
    description: "News website focusing on high tech and startup companies",
    tags: ["Tech", "News", "Startups"],
  },
  {
    id: "22",
    name: "The Verge",
    url: "https://www.theverge.com",
    description: "Technology news website operated by Vox Media",
    tags: ["Tech", "News", "Reviews"],
  },
  {
    id: "23",
    name: "Wired",
    url: "https://www.wired.com",
    description:
      "Monthly American magazine that focuses on emerging technologies",
    tags: ["Tech", "News", "Culture"],
  },
  {
    id: "24",
    name: "Hacker News",
    url: "https://news.ycombinator.com",
    description:
      "Social news website focusing on computer science and entrepreneurship",
    tags: ["Tech", "News", "Startups"],
  },
  {
    id: "25",
    name: "Product Hunt",
    url: "https://www.producthunt.com",
    description: "Website that lets users share and discover new products",
    tags: ["Tech", "Startups", "Products"],
  },
  {
    id: "26",
    name: "Coursera",
    url: "https://www.coursera.org",
    description:
      "Online learning platform offering courses, specializations, and degrees",
    tags: ["Education", "Learning", "Courses"],
  },
  {
    id: "27",
    name: "edX",
    url: "https://www.edx.org",
    description:
      "Provider of massive open online courses created by Harvard and MIT",
    tags: ["Education", "Learning", "Courses"],
  },
  {
    id: "28",
    name: "Khan Academy",
    url: "https://www.khanacademy.org",
    description:
      "Non-profit educational organization creating online tools for education",
    tags: ["Education", "Learning", "Free"],
  },
  {
    id: "29",
    name: "Codecademy",
    url: "https://www.codecademy.com",
    description: "Online interactive platform offering free coding classes",
    tags: ["Education", "Programming", "Learning"],
  },
  {
    id: "30",
    name: "Duolingo",
    url: "https://www.duolingo.com",
    description: "Platform for language learning with gamified lessons",
    tags: ["Education", "Languages", "Learning"],
  },
  {
    id: "31",
    name: "IMDb",
    url: "https://www.imdb.com",
    description:
      "Online database of information related to films, TV programs, and more",
    tags: ["Entertainment", "Movies", "TV"],
  },
  {
    id: "32",
    name: "Twitch",
    url: "https://www.twitch.tv",
    description:
      "Live streaming service for gaming, entertainment, music, and more",
    tags: ["Entertainment", "Streaming", "Gaming"],
  },
  {
    id: "33",
    name: "Disney+",
    url: "https://www.disneyplus.com",
    description:
      "Subscription video-on-demand streaming service owned by Disney",
    tags: ["Entertainment", "Streaming", "Movies"],
  },
  {
    id: "34",
    name: "SoundCloud",
    url: "https://soundcloud.com",
    description: "Online audio distribution platform and music sharing website",
    tags: ["Music", "Entertainment", "Streaming"],
  },
  {
    id: "35",
    name: "Goodreads",
    url: "https://www.goodreads.com",
    description: "Social cataloging website for tracking and reviewing books",
    tags: ["Books", "Reading", "Community"],
  },
  {
    id: "36",
    name: "Forbes",
    url: "https://www.forbes.com",
    description:
      "American business magazine focusing on business, finance, industry, and investing",
    tags: ["Business", "News", "Finance"],
  },
  {
    id: "37",
    name: "The Wall Street Journal",
    url: "https://www.wsj.com",
    description: "American business-focused, English-language daily newspaper",
    tags: ["Business", "News", "Finance"],
  },
  {
    id: "38",
    name: "Bloomberg",
    url: "https://www.bloomberg.com",
    description: "Business and market news, data, analysis, and video",
    tags: ["Business", "News", "Finance"],
  },
  {
    id: "39",
    name: "Harvard Business Review",
    url: "https://hbr.org",
    description:
      "General management magazine published by Harvard Business Publishing",
    tags: ["Business", "Management", "Education"],
  },
  {
    id: "40",
    name: "Investopedia",
    url: "https://www.investopedia.com",
    description: "Website that focuses on investing and finance education",
    tags: ["Finance", "Education", "Investing"],
  },
  {
    id: "41",
    name: "Trello",
    url: "https://trello.com",
    description: "Web-based Kanban-style list-making application",
    tags: ["Productivity", "Organization", "Tools"],
  },
  {
    id: "42",
    name: "Asana",
    url: "https://asana.com",
    description:
      "Web and mobile application designed to help teams organize, track, and manage their work",
    tags: ["Productivity", "Project Management", "Collaboration"],
  },
  {
    id: "43",
    name: "Evernote",
    url: "https://evernote.com",
    description:
      "App designed for note taking, organizing, task management, and archiving",
    tags: ["Productivity", "Notes", "Organization"],
  },
  {
    id: "44",
    name: "Todoist",
    url: "https://todoist.com",
    description: "To-do list and task manager for managing tasks and projects",
    tags: ["Productivity", "Organization", "Tasks"],
  },
  {
    id: "45",
    name: "Monday.com",
    url: "https://monday.com",
    description:
      "Cloud-based work operating system that allows teams to run processes, workflows, and projects",
    tags: ["Productivity", "Project Management", "Collaboration"],
  },
  {
    id: "46",
    name: "Booking.com",
    url: "https://www.booking.com",
    description:
      "Travel fare aggregator website and travel metasearch engine for lodging reservations",
    tags: ["Travel", "Accommodation", "Booking"],
  },
  {
    id: "47",
    name: "Expedia",
    url: "https://www.expedia.com",
    description:
      "Online travel agency for booking flights, hotels, cars, cruises, and vacation packages",
    tags: ["Travel", "Booking", "Flights"],
  },
  {
    id: "48",
    name: "TripAdvisor",
    url: "https://www.tripadvisor.com",
    description:
      "Online travel company that shows hotel and restaurant reviews, accommodation bookings, and more",
    tags: ["Travel", "Reviews", "Planning"],
  },
  {
    id: "49",
    name: "Lonely Planet",
    url: "https://www.lonelyplanet.com",
    description: "Travel guide book publisher and travel guidebook website",
    tags: ["Travel", "Guides", "Information"],
  },
  {
    id: "50",
    name: "Kayak",
    url: "https://www.kayak.com",
    description: "Travel search engine and online travel agency",
    tags: ["Travel", "Flights", "Hotels"],
  },
  {
    id: "51",
    name: "Unity Learn",
    url: "https://learn.unity.com",
    description: "Official learning platform for Unity game development",
    tags: ["Game Development", "Learning", "Unity"],
  },
  {
    id: "52",
    name: "Unreal Engine Learning",
    url: "https://learn.unrealengine.com",
    description: "Learning resources for Unreal Engine development",
    tags: ["Game Development", "Learning", "Unreal"],
  },
  {
    id: "53",
    name: "Digital Arts Network",
    url: "https://digitalarts.network",
    description: "Community platform for digital artists and creators",
    tags: ["Art", "Digital", "Community"],
  },
  {
    id: "54",
    name: "Game Developer Hub",
    url: "https://gamedev.hub",
    description: "Resources and community for independent game developers",
    tags: ["Game Development", "Community", "Resources"],
  },
  {
    id: "55",
    name: "Code Studio",
    url: "https://code.studio",
    description: "Interactive platform for learning programming basics",
    tags: ["Programming", "Education", "Learning"],
  },
  {
    id: "56",
    name: "Web Design Weekly",
    url: "https://webdesignweekly.com",
    description: "Curated newsletter and resources for web designers",
    tags: ["Web Design", "Newsletter", "Resources"],
  },
  {
    id: "57",
    name: "Design Systems",
    url: "https://www.designsystems.com",
    description: "Resource hub for building and maintaining design systems",
    tags: ["Design", "Systems", "UI"],
  },
  {
    id: "58",
    name: "Coding Tips Daily",
    url: "https://codingtips.daily",
    description: "Daily programming tips and best practices",
    tags: ["Programming", "Tips", "Learning"],
  },
  {
    id: "59",
    name: "AI Research Hub",
    url: "https://airesearch.hub",
    description: "Latest research and developments in artificial intelligence",
    tags: ["AI", "Research", "Technology"],
  },
  {
    id: "60",
    name: "Data Science Central",
    url: "https://datasciencecentral.com",
    description: "Community platform for data scientists and analysts",
    tags: ["Data Science", "Analytics", "Community"],
  },
  {
    id: "61",
    name: "Machine Learning Daily",
    url: "https://mlnews.daily",
    description: "Daily updates on machine learning and AI developments",
    tags: ["AI", "Machine Learning", "News"],
  },
  {
    id: "62",
    name: "VR Tech Hub",
    url: "https://vrtech.hub",
    description: "Latest virtual reality technology news and reviews",
    tags: ["VR", "Technology", "Reviews"],
  },
  {
    id: "63",
    name: "AR World",
    url: "https://arworld.tech",
    description: "Augmented reality news, tutorials, and development resources",
    tags: ["AR", "Technology", "Development"],
  },
  {
    id: "64",
    name: "Mobile Dev Weekly",
    url: "https://mobiledev.weekly",
    description: "Weekly mobile development news and resources",
    tags: ["Mobile", "Development", "News"],
  },
  {
    id: "65",
    name: "UX Design Guide",
    url: "https://uxdesign.guide",
    description: "Comprehensive guide to user experience design",
    tags: ["UX", "Design", "Guide"],
  },
  {
    id: "66",
    name: "UI Patterns",
    url: "https://uipatterns.io",
    description: "Collection of user interface design patterns",
    tags: ["UI", "Design", "Patterns"],
  },
  {
    id: "67",
    name: "Web Performance",
    url: "https://webperf.guide",
    description: "Guide to web performance optimization",
    tags: ["Web", "Performance", "Optimization"],
  },
  {
    id: "68",
    name: "Security Daily",
    url: "https://security.daily",
    description: "Daily cybersecurity news and best practices",
    tags: ["Security", "Cybersecurity", "News"],
  },
  {
    id: "69",
    name: "Cloud Architecture",
    url: "https://cloudarch.guide",
    description: "Cloud architecture patterns and best practices",
    tags: ["Cloud", "Architecture", "Guide"],
  },
  {
    id: "70",
    name: "DevOps Hub",
    url: "https://devops.hub",
    description: "Resources for DevOps practices and tools",
    tags: ["DevOps", "Tools", "Resources"],
  },
  {
    id: "150",
    name: "Tech Insights Daily",
    url: "https://techinsights.daily",
    description: "Daily technology news and analysis platform",
    tags: ["Tech", "News", "Analysis"],
  },
  {
    id: "151",
    name: "New Website Example",
    url: "https://newwebsite.example",
    description: "Description of the new website example",
    tags: ["New", "Website", "Example"],
  },
  {
    id: "995",
    name: "The Internet Archive",
    url: "https://archive.org",
    description:
      "Digital library of Internet sites and other cultural artifacts in digital form",
    tags: ["Archive", "Knowledge", "History"],
  },
  {
    id: "996",
    name: "Wolfram Alpha",
    url: "https://www.wolframalpha.com",
    description: "Computational knowledge engine or answer engine",
    tags: ["Knowledge", "Tools", "Education"],
  },
  {
    id: "997",
    name: "Project Gutenberg",
    url: "https://www.gutenberg.org",
    description: "Volunteer effort to digitize and archive cultural works",
    tags: ["Books", "Education", "Free"],
  },
  {
    id: "998",
    name: "Unsplash",
    url: "https://unsplash.com",
    description:
      "Website dedicated to sharing stock photography under the Unsplash license",
    tags: ["Photography", "Images", "Free"],
  },
  {
    id: "999",
    name: "Bandcamp",
    url: "https://bandcamp.com",
    description:
      "Internet music company for artists and labels to share and sell their music",
    tags: ["Music", "Independent", "Shopping"],
  },
  {
    id: "1000",
    name: "Etsy",
    url: "https://www.etsy.com",
    description:
      "E-commerce website focused on handmade or vintage items and craft supplies",
    tags: ["Shopping", "Handmade", "Crafts"],
  },
  {
    id: "1001",
    name: "Hulu",
    url: "https://www.hulu.com",
    description:
      "American subscription streaming service offering TV shows and movies",
    tags: ["Entertainment", "Streaming", "TV"],
  },
  {
    id: "1002",
    name: "The Guardian",
    url: "https://www.theguardian.com",
    description: "British daily newspaper with digital edition",
    tags: ["News", "Media", "Journalism"],
  },
  {
    id: "1003",
    name: "Behance",
    url: "https://www.behance.net",
    description:
      "Social media platform for creative professionals to showcase their work",
    tags: ["Design", "Portfolio", "Creative"],
  },
  {
    id: "1004",
    name: "Udemy",
    url: "https://www.udemy.com",
    description:
      "Online learning platform aimed at professional adults and students",
    tags: ["Education", "Courses", "Learning"],
  },
  {
    id: "1005",
    name: "Skillshare",
    url: "https://www.skillshare.com",
    description: "Online learning community for creative and curious people",
    tags: ["Education", "Creative", "Learning"],
  },
  {
    id: "1006",
    name: "Vimeo",
    url: "https://vimeo.com",
    description: "Video hosting, sharing, and services platform",
    tags: ["Video", "Creative", "Streaming"],
  },
  {
    id: "1007",
    name: "Mozilla Developer Network",
    url: "https://developer.mozilla.org",
    description: "Documentation site for web standards and Mozilla projects",
    tags: ["Development", "Documentation", "Web"],
  },
  {
    id: "1008",
    name: "CodePen",
    url: "https://codepen.io",
    description:
      "Social development environment for front-end designers and developers",
    tags: ["Development", "Web", "Tools"],
  },
  {
    id: "1009",
    name: "Atlassian",
    url: "https://www.atlassian.com",
    description:
      "Software company that develops products for software developers and project managers",
    tags: ["Development", "Tools", "Project Management"],
  },
  {
    id: "1010",
    name: "JSFiddle",
    url: "https://jsfiddle.net",
    description:
      "Online IDE for testing and showcasing code snippets using HTML, CSS and JavaScript",
    tags: ["Development", "Tools", "Web"],
  },
  {
    id: "1011",
    name: "Quora",
    url: "https://www.quora.com",
    description:
      "Question-and-answer website where questions are asked, answered, and edited by users",
    tags: ["Social Media", "Q&A", "Knowledge"],
  },
  {
    id: "1012",
    name: "Flickr",
    url: "https://www.flickr.com",
    description: "Image and video hosting service with online community",
    tags: ["Photography", "Social Media", "Images"],
  },
  {
    id: "1013",
    name: "Patreon",
    url: "https://www.patreon.com",
    description:
      "Membership platform that connects creators with fans via monthly subscriptions",
    tags: ["Creative", "Funding", "Community"],
  },
  {
    id: "1014",
    name: "Digital Ocean",
    url: "https://www.digitalocean.com",
    description:
      "Cloud infrastructure provider focusing on simplifying web infrastructure for developers",
    tags: ["Hosting", "Cloud", "Development"],
  },
  {
    id: "1015",
    name: "Heroku",
    url: "https://www.heroku.com",
    description:
      "Cloud platform as a service supporting several programming languages",
    tags: ["Hosting", "Development", "Cloud"],
  },
  {
    id: "1016",
    name: "Shopify",
    url: "https://www.shopify.com",
    description:
      "E-commerce platform for online stores and retail point-of-sale systems",
    tags: ["E-commerce", "Business", "Shopping"],
  },
  {
    id: "1017",
    name: "Wix",
    url: "https://www.wix.com",
    description:
      "Cloud-based web development platform that allows users to create HTML5 websites and mobile sites",
    tags: ["Web Development", "Tools", "Design"],
  },
  {
    id: "1018",
    name: "Squarespace",
    url: "https://www.squarespace.com",
    description: "Website building and hosting company",
    tags: ["Web Development", "Design", "Hosting"],
  },
  {
    id: "1019",
    name: "Feedly",
    url: "https://feedly.com",
    description:
      "News aggregator application for various web browsers and mobile devices",
    tags: ["News", "RSS", "Information"],
  },
  {
    id: "1020",
    name: "Steam",
    url: "https://store.steampowered.com",
    description: "Digital distribution platform for video games",
    tags: ["Gaming", "Entertainment", "Store"],
  },
  {
    id: "1021",
    name: "Epic Games Store",
    url: "https://www.epicgames.com/store",
    description: "Digital video game storefront for PC and Mac",
    tags: ["Gaming", "Entertainment", "Store"],
  },
  {
    id: "1022",
    name: "GOG",
    url: "https://www.gog.com",
    description:
      "Digital distribution platform for video games and films, with DRM-free philosophy",
    tags: ["Gaming", "Entertainment", "Store"],
  },
  {
    id: "1023",
    name: "Itch.io",
    url: "https://itch.io",
    description:
      "Open marketplace for independent digital creators with a focus on indie video games",
    tags: ["Gaming", "Indie", "Creative"],
  },
  {
    id: "1024",
    name: "Unity",
    url: "https://unity.com",
    description: "Cross-platform game engine developed by Unity Technologies",
    tags: ["Development", "Gaming", "Tools"],
  },
  {
    id: "1025",
    name: "Unreal Engine",
    url: "https://www.unrealengine.com",
    description: "Game engine developed by Epic Games",
    tags: ["Development", "Gaming", "Tools"],
  },
  {
    id: "1026",
    name: "Pixabay",
    url: "https://pixabay.com",
    description:
      "Vibrant community of creatives, sharing royalty free images, videos and music",
    tags: ["Images", "Free", "Resources"],
  },
  {
    id: "1027",
    name: "Pexels",
    url: "https://www.pexels.com",
    description:
      "Free stock photos, royalty free images & videos shared by creators",
    tags: ["Images", "Free", "Photography"],
  },
  {
    id: "1028",
    name: "Freepik",
    url: "https://www.freepik.com",
    description:
      "Graphic resources for everyone: find free vectors, photos, PSD and icons",
    tags: ["Design", "Resources", "Free"],
  },
  {
    id: "1029",
    name: "FontAwesome",
    url: "https://fontawesome.com",
    description: "Icon toolkit based on CSS and Less",
    tags: ["Design", "Icons", "Web"],
  },
  {
    id: "1030",
    name: "Google Fonts",
    url: "https://fonts.google.com",
    description: "Library of free licensed font families",
    tags: ["Design", "Typography", "Web"],
  },
  {
    id: "1031",
    name: "Adobe",
    url: "https://www.adobe.com",
    description: "American multinational computer software company",
    tags: ["Design", "Software", "Creative"],
  },
  {
    id: "1032",
    name: "Sketch",
    url: "https://www.sketch.com",
    description: "Digital design app for Mac",
    tags: ["Design", "Software", "UI/UX"],
  },
  {
    id: "1033",
    name: "InVision",
    url: "https://www.invisionapp.com",
    description: "Digital product design platform",
    tags: ["Design", "Prototyping", "Collaboration"],
  },
  {
    id: "1034",
    name: "Framer",
    url: "https://www.framer.com",
    description:
      "All-in-one tool that helps teams design, prototype, and ship products",
    tags: ["Design", "Prototyping", "UI/UX"],
  },
  {
    id: "1035",
    name: "Abstract",
    url: "https://www.abstract.com",
    description: "Design workflow management and version control platform",
    tags: ["Design", "Collaboration", "Version Control"],
  },
  {
    id: "1036",
    name: "Zeplin",
    url: "https://zeplin.io",
    description:
      "Connected space for product teams, design handoff and collaboration",
    tags: ["Design", "Collaboration", "Development"],
  },
  {
    id: "1037",
    name: "Miro",
    url: "https://miro.com",
    description: "Online collaborative whiteboard platform",
    tags: ["Collaboration", "Productivity", "Design"],
  },
  {
    id: "1038",
    name: "Slack",
    url: "https://slack.com",
    description: "Business communication platform",
    tags: ["Communication", "Collaboration", "Business"],
  },
  {
    id: "1039",
    name: "Discord",
    url: "https://discord.com",
    description: "VoIP, instant messaging and digital distribution platform",
    tags: ["Communication", "Social", "Gaming"],
  },
  {
    id: "1040",
    name: "Zoom",
    url: "https://zoom.us",
    description:
      "Video communications, online meetings, chat, and mobile collaboration",
    tags: ["Communication", "Video", "Business"],
  },
  {
    id: "1041",
    name: "Microsoft Teams",
    url: "https://www.microsoft.com/microsoft-teams",
    description: "Proprietary business communication platform",
    tags: ["Communication", "Collaboration", "Business"],
  },
  {
    id: "1042",
    name: "StackShare",
    url: "https://stackshare.io",
    description:
      "Software discovery platform where companies share technologies they use",
    tags: ["Tech", "Tools", "Development"],
  },
  {
    id: "1043",
    name: "Wayback Machine",
    url: "https://web.archive.org",
    description: "Digital archive of the World Wide Web",
    tags: ["Archive", "History", "Research"],
  },
  {
    id: "1044",
    name: "Kaggle",
    url: "https://www.kaggle.com",
    description:
      "Online community of data scientists and machine learning practitioners",
    tags: ["Data Science", "AI", "Community"],
  },
  {
    id: "1045",
    name: "HackerRank",
    url: "https://www.hackerrank.com",
    description:
      "Technology company that focuses on competitive programming challenges",
    tags: ["Programming", "Challenges", "Hiring"],
  },
  {
    id: "1046",
    name: "LeetCode",
    url: "https://leetcode.com",
    description:
      "Platform to help you enhance your skills, expand your knowledge and prepare for technical interviews",
    tags: ["Programming", "Interviews", "Challenges"],
  },
  {
    id: "1047",
    name: "DailyUI",
    url: "https://www.dailyui.co",
    description:
      "100-day design challenge focused on improving UI design skills",
    tags: ["Design", "UI/UX", "Challenge"],
  },
  {
    id: "1048",
    name: "Envato",
    url: "https://envato.com",
    description: "Marketplace for creative assets and creative people",
    tags: ["Design", "Resources", "Marketplace"],
  },
  {
    id: "1049",
    name: "Creative Market",
    url: "https://creativemarket.com",
    description:
      "Platform for handcrafted, mousemade design content from independent creators",
    tags: ["Design", "Resources", "Marketplace"],
  },
  {
    id: "1050",
    name: "99designs",
    url: "https://99designs.com",
    description:
      "Global creative platform that makes it easy for designers and clients to work together",
    tags: ["Design", "Freelance", "Marketplace"],
  },
  {
    id: "1051",
    name: "Fiverr",
    url: "https://www.fiverr.com",
    description: "Online marketplace for freelance services",
    tags: ["Freelance", "Services", "Marketplace"],
  },
  {
    id: "1052",
    name: "Upwork",
    url: "https://www.upwork.com",
    description:
      "Freelancing platform connecting businesses with independent professionals",
    tags: ["Freelance", "Jobs", "Remote"],
  },
  {
    id: "1053",
    name: "Freelancer",
    url: "https://www.freelancer.com",
    description: "Crowdsourcing marketplace for freelance jobs",
    tags: ["Freelance", "Jobs", "Remote"],
  },
  {
    id: "1054",
    name: "Indeed",
    url: "https://www.indeed.com",
    description: "Worldwide employment-related search engine for job listings",
    tags: ["Jobs", "Careers", "Employment"],
  },
  {
    id: "1055",
    name: "Glassdoor",
    url: "https://www.glassdoor.com",
    description:
      "Website where current and former employees anonymously review companies",
    tags: ["Jobs", "Careers", "Reviews"],
  },
  {
    id: "1056",
    name: "AngelList",
    url: "https://angel.co",
    description:
      "Website for startups, angel investors, and job-seekers looking to work at startups",
    tags: ["Startups", "Jobs", "Investing"],
  },
  {
    id: "1057",
    name: "Y Combinator",
    url: "https://www.ycombinator.com",
    description: "American seed money startup accelerator",
    tags: ["Startups", "Accelerator", "Venture Capital"],
  },
  {
    id: "1058",
    name: "500 Startups",
    url: "https://500.co",
    description: "Early-stage venture fund and seed accelerator",
    tags: ["Startups", "Accelerator", "Venture Capital"],
  },
  {
    id: "1059",
    name: "IndieHackers",
    url: "https://www.indiehackers.com",
    description: "Community of independent founders learning from each other",
    tags: ["Startups", "Community", "Entrepreneurship"],
  },
  {
    id: "1060",
    name: "ProductHunt",
    url: "https://www.producthunt.com",
    description: "Curation of the best new products, every day",
    tags: ["Products", "Startups", "Tech"],
  },
  {
    id: "1061",
    name: "Crunchbase",
    url: "https://www.crunchbase.com",
    description:
      "Platform for finding business information about companies and investments",
    tags: ["Business", "Startups", "Information"],
  },
  {
    id: "1062",
    name: "Techcrunch",
    url: "https://techcrunch.com",
    description:
      "American online newspaper focusing on high tech and startup companies",
    tags: ["Tech", "News", "Startups"],
  },
  {
    id: "1063",
    name: "Wired",
    url: "https://www.wired.com",
    description:
      "Monthly American magazine that focuses on emerging technologies",
    tags: ["Tech", "News", "Culture"],
  },
  {
    id: "1064",
    name: "Slashdot",
    url: "https://slashdot.org",
    description: "News for nerds, stuff that matters",
    tags: ["Tech", "News", "Community"],
  },
  {
    id: "1065",
    name: "Ars Technica",
    url: "https://arstechnica.com",
    description: "Technology news and information website",
    tags: ["Tech", "News", "Reviews"],
  },
  {
    id: "1066",
    name: "MIT Technology Review",
    url: "https://www.technologyreview.com",
    description:
      "Science and technology magazine published by the Massachusetts Institute of Technology",
    tags: ["Tech", "Science", "Research"],
  },
  {
    id: "1067",
    name: "Nature",
    url: "https://www.nature.com",
    description:
      "International weekly journal of science publishing the finest peer-reviewed research",
    tags: ["Science", "Research", "Academic"],
  },
  {
    id: "1068",
    name: "Science",
    url: "https://www.science.org",
    description:
      "Peer-reviewed academic journal of the American Association for the Advancement of Science",
    tags: ["Science", "Research", "Academic"],
  },
  {
    id: "1069",
    name: "JSTOR",
    url: "https://www.jstor.org",
    description:
      "Digital library of academic journals, books, and primary sources",
    tags: ["Academic", "Research", "Library"],
  },
  {
    id: "1070",
    name: "ResearchGate",
    url: "https://www.researchgate.net",
    description:
      "European commercial social networking site for scientists and researchers",
    tags: ["Science", "Academic", "Social"],
  },
  {
    id: "1071",
    name: "Academia.edu",
    url: "https://www.academia.edu",
    description: "Platform for academics to share research papers",
    tags: ["Academic", "Research", "Social"],
  },
  {
    id: "1072",
    name: "arXiv",
    url: "https://arxiv.org",
    description:
      "Open-access archive for scholarly articles in physics, mathematics, computer science, and more",
    tags: ["Academic", "Research", "Open Access"],
  },
  {
    id: "1073",
    name: "PubMed",
    url: "https://pubmed.ncbi.nlm.nih.gov",
    description:
      "Free search engine accessing primarily the MEDLINE database of references on life sciences and biomedical topics",
    tags: ["Medical", "Research", "Science"],
  },
  {
    id: "1074",
    name: "Google Scholar",
    url: "https://scholar.google.com",
    description:
      "Freely accessible web search engine that indexes the full text or metadata of scholarly literature",
    tags: ["Academic", "Research", "Search"],
  },
  {
    id: "1075",
    name: "Semantic Scholar",
    url: "https://www.semanticscholar.org",
    description: "Free, AI-powered research tool for scientific literature",
    tags: ["Academic", "AI", "Research"],
  },
  {
    id: "1076",
    name: "Sci-Hub",
    url: "https://sci-hub.se",
    description:
      "Shadow library website that provides free access to millions of research papers",
    tags: ["Academic", "Research", "Open Access"],
  },
  {
    id: "1077",
    name: "Mendeley",
    url: "https://www.mendeley.com",
    description:
      "Reference manager and academic social network that helps organize research",
    tags: ["Academic", "Tools", "Social"],
  },
  {
    id: "1078",
    name: "Zotero",
    url: "https://www.zotero.org",
    description: "Free and open-source reference management software",
    tags: ["Academic", "Tools", "Research"],
  },
  {
    id: "1079",
    name: "Open Science Framework",
    url: "https://osf.io",
    description:
      "Free and open platform to support research and enable collaboration",
    tags: ["Academic", "Collaboration", "Open Science"],
  },
  {
    id: "1080",
    name: "Zenodo",
    url: "https://zenodo.org",
    description: "General-purpose open-access repository",
    tags: ["Academic", "Open Access", "Repository"],
  },
  {
    id: "1081",
    name: "Figshare",
    url: "https://figshare.com",
    description:
      "Online open access repository where researchers can preserve and share their research outputs",
    tags: ["Academic", "Repository", "Open Access"],
  },
  {
    id: "1082",
    name: "Overleaf",
    url: "https://www.overleaf.com",
    description:
      "Online LaTeX editor for collaborative writing and publishing scientific documents",
    tags: ["Academic", "Collaboration", "Writing"],
  },
  {
    id: "1083",
    name: "Microsoft Academic",
    url: "https://academic.microsoft.com",
    description:
      "Free public web search engine for academic publications and literature",
    tags: ["Academic", "Search", "Research"],
  },
  {
    id: "1084",
    name: "DataCite",
    url: "https://datacite.org",
    description:
      "Global non-profit organization that provides persistent identifiers for research data",
    tags: ["Academic", "Data", "Research"],
  },
  {
    id: "1085",
    name: "Dimensions",
    url: "https://www.dimensions.ai",
    description:
      "Linked research information system that connects grants, publications, citations, and more",
    tags: ["Academic", "Research", "Analytics"],
  },
  {
    id: "1086",
    name: "ORCID",
    url: "https://orcid.org",
    description:
      "Provides a persistent digital identifier for researchers and contributors",
    tags: ["Academic", "Identity", "Research"],
  },
  {
    id: "1087",
    name: "WebMD",
    url: "https://www.webmd.com",
    description:
      "Online publisher of news and information pertaining to human health and well-being",
    tags: ["Health", "Medical", "Information"],
  },
  {
    id: "1088",
    name: "Mayo Clinic",
    url: "https://www.mayoclinic.org",
    description:
      "Nonprofit American academic medical center focused on integrated health care, education, and research",
    tags: ["Health", "Medical", "Education"],
  },
  {
    id: "1089",
    name: "Cleveland Clinic",
    url: "https://my.clevelandclinic.org",
    description:
      "American academic medical center that integrates clinical and hospital care with research and education",
    tags: ["Health", "Medical", "Research"],
  },
  {
    id: "1090",
    name: "Healthline",
    url: "https://www.healthline.com",
    description: "Website providing health and wellness information",
    tags: ["Health", "Wellness", "Information"],
  },
  {
    id: "1091",
    name: "MedlinePlus",
    url: "https://medlineplus.gov",
    description:
      "Online information service produced by the United States National Library of Medicine",
    tags: ["Health", "Medical", "Information"],
  },
  {
    id: "1092",
    name: "CDC",
    url: "https://www.cdc.gov",
    description: "United States federal agency for health protection",
    tags: ["Health", "Government", "Research"],
  },
  {
    id: "1093",
    name: "NIH",
    url: "https://www.nih.gov",
    description:
      "Primary agency of the United States government responsible for biomedical and public health research",
    tags: ["Health", "Research", "Government"],
  },
  {
    id: "1094",
    name: "WHO",
    url: "https://www.who.int",
    description:
      "Specialized agency of the United Nations responsible for international public health",
    tags: ["Health", "International", "Organization"],
  },
  {
    id: "1095",
    name: "ClinicalTrials.gov",
    url: "https://clinicaltrials.gov",
    description:
      "Database of privately and publicly funded clinical studies conducted around the world",
    tags: ["Medical", "Research", "Database"],
  },
  {
    id: "1096",
    name: "GoodRx",
    url: "https://www.goodrx.com",
    description:
      "American healthcare company that operates a telemedicine platform, free website and mobile app",
    tags: ["Health", "Pharmacy", "Savings"],
  },
  {
    id: "1097",
    name: "Drugs.com",
    url: "https://www.drugs.com",
    description:
      "Online pharmaceutical encyclopedia which provides drug information",
    tags: ["Health", "Pharmacy", "Information"],
  },
  {
    id: "1098",
    name: "UpToDate",
    url: "https://www.uptodate.com",
    description: "Point-of-care medical resource published by Wolters Kluwer",
    tags: ["Medical", "Reference", "Professional"],
  },
  {
    id: "1099",
    name: "AARP",
    url: "https://www.aarp.org",
    description:
      "United States-based interest group focusing on issues affecting those over the age of fifty",
    tags: ["Seniors", "Health", "Lifestyle"],
  },
  {
    id: "1100",
    name: "AllRecipes",
    url: "https://www.allrecipes.com",
    description: "Food-focused online social networking service",
    tags: ["Food", "Recipes", "Cooking"],
  },
  {
    id: "1101",
    name: "Food Network",
    url: "https://www.foodnetwork.com",
    description:
      "Television network that broadcasts both special and regular episodic programs about food and cooking",
    tags: ["Food", "Cooking", "Entertainment"],
  },
  {
    id: "1102",
    name: "Epicurious",
    url: "https://www.epicurious.com",
    description:
      "Digital brand for consumers interested in food and cooking-related content",
    tags: ["Food", "Cooking", "Recipes"],
  },
  {
    id: "1103",
    name: "Serious Eats",
    url: "https://www.seriouseats.com",
    description:
      "Food and cooking website that publishes recipes, how-to guides, and more",
    tags: ["Food", "Cooking", "Recipes"],
  },
  {
    id: "1104",
    name: "Yummly",
    url: "https://www.yummly.com",
    description:
      "Food discovery platform that personalizes recipe recommendations based on your taste preferences",
    tags: ["Food", "Recipes", "Personalization"],
  },
  {
    id: "1105",
    name: "Tasty",
    url: "https://tasty.co",
    description: "Cooking video website from BuzzFeed",
    tags: ["Food", "Recipes", "Videos"],
  },
  {
    id: "1106",
    name: "ChefSteps",
    url: "https://www.chefsteps.com",
    description:
      "Food and technology company focused on making cooking more accessible",
    tags: ["Food", "Cooking", "Technology"],
  },
  {
    id: "1107",
    name: "Bon Appétit",
    url: "https://www.bonappetit.com",
    description:
      "American food magazine that publishes recipes, entertaining ideas, and more",
    tags: ["Food", "Cooking", "Magazine"],
  },
  {
    id: "1108",
    name: "Eater",
    url: "https://www.eater.com",
    description:
      "Food website focused on dining and food news, including restaurant openings and closings",
    tags: ["Food", "Restaurants", "News"],
  },
  {
    id: "1109",
    name: "The Kitchn",
    url: "https://www.thekitchn.com",
    description:
      "Daily web magazine dedicated to home cooking, kitchen design, and food culture",
    tags: ["Food", "Cooking", "Home"],
  },
  {
    id: "1110",
    name: "Food52",
    url: "https://food52.com",
    description:
      "Online community for people who love food, offering recipes, cooking advice, and kitchen tools",
    tags: ["Food", "Community", "Cooking"],
  },
  {
    id: "1111",
    name: "Tasting Table",
    url: "https://www.tastingtable.com",
    description: "Website and newsletter for culinary enthusiasts",
    tags: ["Food", "Cooking", "Dining"],
  },
  {
    id: "1112",
    name: "Saveur",
    url: "https://www.saveur.com",
    description:
      "Gourmet and travel food magazine that specializes in essays about various world cuisines",
    tags: ["Food", "Travel", "Culture"],
  },
  {
    id: "1113",
    name: "TripSavvy",
    url: "https://www.tripsavvy.com",
    description:
      "Online travel publication helping travelers make the most of their trips",
    tags: ["Travel", "Guides", "Tips"],
  },
  {
    id: "1114",
    name: "Atlas Obscura",
    url: "https://www.atlasobscura.com",
    description:
      "American-based online magazine and travel company documenting unusual travel destinations",
    tags: ["Travel", "Unusual", "Exploration"],
  },
  {
    id: "1115",
    name: "Afar",
    url: "https://www.afar.com",
    description:
      "Travel magazine and travel planning website focused on experiential travel",
    tags: ["Travel", "Experience", "Culture"],
  },
  {
    id: "1116",
    name: "Fodor's Travel",
    url: "https://www.fodors.com",
    description:
      "Guidebook series and travel website focused on travel advice and reviews",
    tags: ["Travel", "Guides", "Reviews"],
  },
  {
    id: "1117",
    name: "Frommer's",
    url: "https://www.frommers.com",
    description: "Travel guidebook series and travel publication",
    tags: ["Travel", "Guides", "Reviews"],
  },
  {
    id: "1118",
    name: "Dev.to",
    url: "https://dev.to",
    description:
      "Community of software developers focused on sharing knowledge and career growth",
    tags: ["Development", "Community", "Programming"],
  },
  {
    id: "1119",
    name: "CSS-Tricks",
    url: "https://css-tricks.com",
    description:
      "Website dedicated to teaching all things web design and development",
    tags: ["Web Development", "CSS", "Design"],
  },
  {
    id: "1120",
    name: "Hashnode",
    url: "https://hashnode.com",
    description: "Blogging platform and community for software developers",
    tags: ["Development", "Blogging", "Community"],
  },
  {
    id: "1121",
    name: "Exercism",
    url: "https://exercism.io",
    description:
      "Platform for learning programming languages through practice and mentorship",
    tags: ["Programming", "Learning", "Practice"],
  },
  {
    id: "1122",
    name: "Docker Hub",
    url: "https://hub.docker.com",
    description: "Container image repository and community for Docker images",
    tags: ["Development", "Containers", "DevOps"],
  },
  {
    id: "1123",
    name: "AWS Documentation",
    url: "https://docs.aws.amazon.com",
    description: "Official documentation for Amazon Web Services",
    tags: ["Cloud", "Documentation", "AWS"],
  },
  {
    id: "1124",
    name: "PyPI",
    url: "https://pypi.org",
    description: "Python Package Index repository of software for Python",
    tags: ["Python", "Development", "Packages"],
  },
  {
    id: "1125",
    name: "npm",
    url: "https://www.npmjs.com",
    description:
      "Package manager for JavaScript and world's largest software registry",
    tags: ["JavaScript", "Development", "Packages"],
  },
  {
    id: "1126",
    name: "RubyGems",
    url: "https://rubygems.org",
    description: "Ruby community's gem hosting service",
    tags: ["Ruby", "Development", "Packages"],
  },
  {
    id: "1127",
    name: "Unsplash",
    url: "https://unsplash.com",
    description: "Platform for sharing high-quality stock photography",
    tags: ["Photography", "Images", "Free"],
  },
  {
    id: "1128",
    name: "GitLab",
    url: "https://gitlab.com",
    description: "DevOps platform for software development and deployment",
    tags: ["Development", "DevOps", "Git"],
  },
  {
    id: "1129",
    name: "Bitbucket",
    url: "https://bitbucket.org",
    description: "Git-based source code repository hosting service",
    tags: ["Development", "Git", "Collaboration"],
  },
  {
    id: "1130",
    name: "Stack Overflow",
    url: "https://stackoverflow.com",
    description:
      "Question and answer site for professional and enthusiast programmers",
    tags: ["Development", "Community", "Programming"],
  },
  {
    id: "1131",
    name: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    description:
      "Resources for developers, by developers, with documentation and learning resources",
    tags: ["Web Development", "Documentation", "Learning"],
  },
  {
    id: "1132",
    name: "W3Schools",
    url: "https://w3schools.com",
    description:
      "Web developer information website with tutorials and references",
    tags: ["Web Development", "Learning", "Tutorials"],
  },
  {
    id: "1133",
    name: "Codecademy",
    url: "https://codecademy.com",
    description:
      "Online interactive platform offering coding classes in various programming languages",
    tags: ["Learning", "Programming", "Interactive"],
  },
  {
    id: "1134",
    name: "Coursera",
    url: "https://coursera.org",
    description:
      "Online learning platform offering courses, specializations, and degrees",
    tags: ["Learning", "Courses", "Education"],
  },
  {
    id: "1135",
    name: "edX",
    url: "https://edx.org",
    description:
      "Massive open online course provider offering university-level courses",
    tags: ["Learning", "Courses", "Education"],
  },
  {
    id: "1136",
    name: "Udacity",
    url: "https://udacity.com",
    description:
      "Online education platform offering courses and nanodegree programs",
    tags: ["Learning", "Courses", "Education"],
  },
  {
    id: "1137",
    name: "Udemy",
    url: "https://udemy.com",
    description: "Online learning platform with a wide range of courses",
    tags: ["Learning", "Courses", "Education"],
  },
  {
    id: "1138",
    name: "Pluralsight",
    url: "https://pluralsight.com",
    description: "Technology skills platform offering courses and assessments",
    tags: ["Learning", "Courses", "Technology"],
  },
  {
    id: "1139",
    name: "Khan Academy",
    url: "https://khanacademy.org",
    description:
      "Non-profit educational organization providing free online courses and resources",
    tags: ["Learning", "Courses", "Education"],
  },
  {
    id: "1140",
    name: "freeCodeCamp",
    url: "https://freecodecamp.org",
    description:
      "Non-profit organization offering free coding lessons and certifications",
    tags: ["Learning", "Programming", "Free"],
  },
  {
    id: "1141",
    name: "HackerRank",
    url: "https://hackerrank.com",
    description:
      "Platform for competitive coding and technical interview preparation",
    tags: ["Programming", "Coding", "Interviews"],
  },
  {
    id: "1142",
    name: "LeetCode",
    url: "https://leetcode.com",
    description:
      "Platform for preparing technical coding interviews and practicing coding skills",
    tags: ["Programming", "Coding", "Interviews"],
  },
  {
    id: "1143",
    name: "Codewars",
    url: "https://codewars.com",
    description: "Platform for coding challenges and improving coding skills",
    tags: ["Programming", "Coding", "Challenges"],
  },
  {
    id: "1144",
    name: "Exercism",
    url: "https://exercism.io",
    description:
      "Platform for learning programming languages through practice and mentorship",
    tags: ["Programming", "Learning", "Practice"],
  },
  {
    id: "1145",
    name: "TopCoder",
    url: "https://topcoder.com",
    description: "Competitive programming and crowdsourcing platform",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1146",
    name: "Codeforces",
    url: "https://codeforces.com",
    description:
      "Competitive programming platform with contests and problem sets",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1147",
    name: "Project Euler",
    url: "https://projecteuler.net",
    description: "Platform for mathematical and computational problem solving",
    tags: ["Programming", "Math", "Challenges"],
  },
  {
    id: "1148",
    name: "SPOJ",
    url: "https://spoj.com",
    description:
      "Sphere Online Judge, a platform for coding challenges and competitions",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1149",
    name: "GeeksforGeeks",
    url: "https://geeksforgeeks.org",
    description:
      "Computer science portal with articles, tutorials, and coding challenges",
    tags: ["Programming", "Learning", "Tutorials"],
  },
  {
    id: "1150",
    name: "HackerEarth",
    url: "https://hackerearth.com",
    description:
      "Platform for competitive coding, hackathons, and technical assessments",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1151",
    name: "CodeChef",
    url: "https://codechef.com",
    description:
      "Competitive programming platform with contests and practice problems",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1152",
    name: "AtCoder",
    url: "https://atcoder.jp",
    description:
      "Japanese competitive programming platform with contests and problem sets",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1153",
    name: "Google Code Jam",
    url: "https://codingcompetitions.withgoogle.com/codejam",
    description: "Google's annual coding competition",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1154",
    name: "Facebook Hacker Cup",
    url: "https://www.facebook.com/codingcompetitions/hacker-cup",
    description: "Facebook's annual coding competition",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1155",
    name: "Microsoft Imagine Cup",
    url: "https://imaginecup.microsoft.com",
    description: "Microsoft's global student technology competition",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1156",
    name: "Kaggle",
    url: "https://kaggle.com",
    description: "Platform for data science competitions and collaboration",
    tags: ["Data Science", "Competitions", "Collaboration"],
  },
  {
    id: "1157",
    name: "DataCamp",
    url: "https://datacamp.com",
    description: "Online learning platform for data science and analytics",
    tags: ["Data Science", "Learning", "Courses"],
  },
  {
    id: "1158",
    name: "Dataquest",
    url: "https://dataquest.io",
    description: "Online learning platform for data science and analytics",
    tags: ["Data Science", "Learning", "Courses"],
  },
  {
    id: "1159",
    name: "Coursera",
    url: "https://coursera.org",
    description:
      "Online learning platform offering courses, specializations, and degrees",
    tags: ["Learning", "Courses", "Education"],
  },
  {
    id: "1160",
    name: "edX",
    url: "https://edx.org",
    description:
      "Massive open online course provider offering university-level courses",
    tags: ["Learning", "Courses", "Education"],
  },
  {
    id: "1161",
    name: "Udacity",
    url: "https://udacity.com",
    description:
      "Online education platform offering courses and nanodegree programs",
    tags: ["Learning", "Courses", "Education"],
  },
  {
    id: "1162",
    name: "Udemy",
    url: "https://udemy.com",
    description: "Online learning platform with a wide range of courses",
    tags: ["Learning", "Courses", "Education"],
  },
  {
    id: "1163",
    name: "Pluralsight",
    url: "https://pluralsight.com",
    description: "Technology skills platform offering courses and assessments",
    tags: ["Learning", "Courses", "Technology"],
  },
  {
    id: "1164",
    name: "Khan Academy",
    url: "https://khanacademy.org",
    description:
      "Non-profit educational organization providing free online courses and resources",
    tags: ["Learning", "Courses", "Education"],
  },
  {
    id: "1165",
    name: "freeCodeCamp",
    url: "https://freecodecamp.org",
    description:
      "Non-profit organization offering free coding lessons and certifications",
    tags: ["Learning", "Programming", "Free"],
  },
  {
    id: "1166",
    name: "HackerRank",
    url: "https://hackerrank.com",
    description:
      "Platform for competitive coding and technical interview preparation",
    tags: ["Programming", "Coding", "Interviews"],
  },
  {
    id: "1167",
    name: "LeetCode",
    url: "https://leetcode.com",
    description:
      "Platform for preparing technical coding interviews and practicing coding skills",
    tags: ["Programming", "Coding", "Interviews"],
  },
  {
    id: "1168",
    name: "Codewars",
    url: "https://codewars.com",
    description: "Platform for coding challenges and improving coding skills",
    tags: ["Programming", "Coding", "Challenges"],
  },
  {
    id: "1169",
    name: "Exercism",
    url: "https://exercism.io",
    description:
      "Platform for learning programming languages through practice and mentorship",
    tags: ["Programming", "Learning", "Practice"],
  },
  {
    id: "1170",
    name: "TopCoder",
    url: "https://topcoder.com",
    description: "Competitive programming and crowdsourcing platform",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1171",
    name: "Codeforces",
    url: "https://codeforces.com",
    description:
      "Competitive programming platform with contests and problem sets",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1172",
    name: "Project Euler",
    url: "https://projecteuler.net",
    description: "Platform for mathematical and computational problem solving",
    tags: ["Programming", "Math", "Challenges"],
  },
  {
    id: "1173",
    name: "SPOJ",
    url: "https://spoj.com",
    description:
      "Sphere Online Judge, a platform for coding challenges and competitions",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1174",
    name: "GeeksforGeeks",
    url: "https://geeksforgeeks.org",
    description:
      "Computer science portal with articles, tutorials, and coding challenges",
    tags: ["Programming", "Learning", "Tutorials"],
  },
  {
    id: "1175",
    name: "HackerEarth",
    url: "https://hackerearth.com",
    description:
      "Platform for competitive coding, hackathons, and technical assessments",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1176",
    name: "CodeChef",
    url: "https://codechef.com",
    description:
      "Competitive programming platform with contests and practice problems",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1177",
    name: "AtCoder",
    url: "https://atcoder.jp",
    description:
      "Japanese competitive programming platform with contests and problem sets",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1178",
    name: "Google Code Jam",
    url: "https://codingcompetitions.withgoogle.com/codejam",
    description: "Google's annual coding competition",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1179",
    name: "Facebook Hacker Cup",
    url: "https://www.facebook.com/codingcompetitions/hacker-cup",
    description: "Facebook's annual coding competition",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1180",
    name: "Microsoft Imagine Cup",
    url: "https://imaginecup.microsoft.com",
    description: "Microsoft's global student technology competition",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1181",
    name: "Kaggle",
    url: "https://kaggle.com",
    description: "Platform for data science competitions and collaboration",
    tags: ["Data Science", "Competitions", "Collaboration"],
  },
  {
    id: "1182",
    name: "DataCamp",
    url: "https://datacamp.com",
    description: "Online learning platform for data science and analytics",
    tags: ["Data Science", "Learning", "Courses"],
  },
  {
    id: "1183",
    name: "Dataquest",
    url: "https://dataquest.io",
    description: "Online learning platform for data science and analytics",
    tags: ["Data Science", "Learning", "Courses"],
  },
  {
    id: "1184",
    name: "Coursera",
    url: "https://coursera.org",
    description:
      "Online learning platform offering courses, specializations, and degrees",
    tags: ["Learning", "Courses", "Education"],
  },
  {
    id: "1185",
    name: "edX",
    url: "https://edx.org",
    description:
      "Massive open online course provider offering university-level courses",
    tags: ["Learning", "Courses", "Education"],
  },
  {
    id: "1186",
    name: "Udacity",
    url: "https://udacity.com",
    description:
      "Online education platform offering courses and nanodegree programs",
    tags: ["Learning", "Courses", "Education"],
  },
  {
    id: "1187",
    name: "Udemy",
    url: "https://udemy.com",
    description: "Online learning platform with a wide range of courses",
    tags: ["Learning", "Courses", "Education"],
  },
  {
    id: "1188",
    name: "Pluralsight",
    url: "https://pluralsight.com",
    description: "Technology skills platform offering courses and assessments",
    tags: ["Learning", "Courses", "Technology"],
  },
  {
    id: "1189",
    name: "Khan Academy",
    url: "https://khanacademy.org",
    description:
      "Non-profit educational organization providing free online courses and resources",
    tags: ["Learning", "Courses", "Education"],
  },
  {
    id: "1190",
    name: "freeCodeCamp",
    url: "https://freecodecamp.org",
    description:
      "Non-profit organization offering free coding lessons and certifications",
    tags: ["Learning", "Programming", "Free"],
  },
  {
    id: "1191",
    name: "HackerRank",
    url: "https://hackerrank.com",
    description:
      "Platform for competitive coding and technical interview preparation",
    tags: ["Programming", "Coding", "Interviews"],
  },
  {
    id: "1192",
    name: "LeetCode",
    url: "https://leetcode.com",
    description:
      "Platform for preparing technical coding interviews and practicing coding skills",
    tags: ["Programming", "Coding", "Interviews"],
  },
  {
    id: "1193",
    name: "Codewars",
    url: "https://codewars.com",
    description: "Platform for coding challenges and improving coding skills",
    tags: ["Programming", "Coding", "Challenges"],
  },
  {
    id: "1194",
    name: "Exercism",
    url: "https://exercism.io",
    description:
      "Platform for learning programming languages through practice and mentorship",
    tags: ["Programming", "Learning", "Practice"],
  },
  {
    id: "1195",
    name: "TopCoder",
    url: "https://topcoder.com",
    description: "Competitive programming and crowdsourcing platform",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1196",
    name: "Codeforces",
    url: "https://codeforces.com",
    description:
      "Competitive programming platform with contests and problem sets",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1197",
    name: "Project Euler",
    url: "https://projecteuler.net",
    description: "Platform for mathematical and computational problem solving",
    tags: ["Programming", "Math", "Challenges"],
  },
  {
    id: "1198",
    name: "SPOJ",
    url: "https://spoj.com",
    description:
      "Sphere Online Judge, a platform for coding challenges and competitions",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1199",
    name: "GeeksforGeeks",
    url: "https://geeksforgeeks.org",
    description:
      "Computer science portal with articles, tutorials, and coding challenges",
    tags: ["Programming", "Learning", "Tutorials"],
  },
  {
    id: "1200",
    name: "HackerEarth",
    url: "https://hackerearth.com",
    description:
      "Platform for competitive coding, hackathons, and technical assessments",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1201",
    name: "CodeChef",
    url: "https://codechef.com",
    description:
      "Competitive programming platform with contests and practice problems",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1202",
    name: "AtCoder",
    url: "https://atcoder.jp",
    description:
      "Japanese competitive programming platform with contests and problem sets",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1203",
    name: "Google Code Jam",
    url: "https://codingcompetitions.withgoogle.com/codejam",
    description: "Google's annual coding competition",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1204",
    name: "Facebook Hacker Cup",
    url: "https://www.facebook.com/codingcompetitions/hacker-cup",
    description: "Facebook's annual coding competition",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1205",
    name: "Microsoft Imagine Cup",
    url: "https://imaginecup.microsoft.com",
    description: "Microsoft's global student technology competition",
    tags: ["Programming", "Coding", "Competitions"],
  },
  {
    id: "1206",
    name: "Kaggle",
    url: "https://kaggle.com",
    description: "Platform for data science competitions and collaboration",
    tags: ["Data Science", "Competitions", "Collaboration"],
  },
  {
    id: "1207",
    name: "DataCamp",
    url: "https://datacamp.com",
    description: "Online learning platform for data science and analytics",
    tags: ["Data Science", "Learning", "Courses"],
  },
  {
    id: "1208",
    name: "Dataquest",
    url: "https://dataquest.io",
    description: "Online learning platform for data science and analytics",
    tags: ["Data Science", "Learning", "Courses"],
  },
  {
    id: "1209",
    name: "Coursera",
    url: "https://coursera.org",
    description:
      "Online learning platform offering courses, specializations, and degrees",
    tags: ["Learning", "Courses", "Education"],
  },
  {
    id: "1210",
    name: "edX",
    url: "https://edx.org",
    description:
      "Massive open online course provider offering university-level courses",
    tags: ["Learning", "Courses", "Education"],
  },
  {
    id: "1211",
    name: "Udacity",
    url: "https://udacity.com",
    description:
      "Online education platform offering courses and nanodegree programs",
    tags: ["Learning", "Courses", "Education"],
  },
  {
    id: "1212",
    name: "Udemy",
    url: "https://udemy.com",
    description: "Online learning platform with a wide range of courses",
    tags: ["Learning", "Courses", "Education"],
  },
  {
    id: "1213",
    name: "Pluralsight",
    url: "https://pluralsight.com",
    description: "Technology skills platform offering courses and assessments",
    tags: ["Learning", "Courses", "Technology"],
  },
  {
    id: "1214",
    name: "Khan Academy",
    url: "https://khanacademy.org",
    description:
      "Non-profit educational organization providing free online courses and resources",
    tags: ["Learning", "Courses", "Education"],
  },
  {
    id: "1215",
    name: "freeCodeCamp",
    url: "https://freecodecamp.org",
    description:
      "Non-profit organization offering free coding lessons and certifications",
    tags: ["Learning", "Programming", "Free"],
  },
  {
    id: "1216",
    name: "HackerRank",
    url: "https://hackerrank.com",
    description:
      "Platform for competitive coding and technical interview preparation",
    tags: ["Programming", "Coding", "Interviews"],
  },
  {
    id: "1217",
    name: "Web3 Foundation",
    url: "https://web3.foundation",
    description:
      "Organization supporting the development of decentralized web technologies",
    tags: ["Blockchain", "Web3", "Decentralization"],
  },
];
