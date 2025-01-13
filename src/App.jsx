import { useState, useRef, useEffect } from "react"
import { Header, AdditionalInfoSection, ProjectsSection, Contact, Experience, NavBar } from "./sections"

const ZeeInfo = {
  name: `Hey, I'm Fatima!`,
  intro: `Welcome to my little corner of the internet, 
            where I bring creativity to life through designs that are as functional as they are beautiful.`,
  specialization: ['Product Design', 'UI/UX design', 'UX research'],
  designThinking: {
    heading: `My Design Thinking Process`,
    details: `I believe in empathy-driven design, starting every project by deeply understanding the users and their pain points. My process involves thorough research, wireframing, prototyping, and usability testing to ensure designs not only look good but are also functional and accessible. 
    I thrive on collaboration and iteration, knowing that the best designs come from continual feedback and improvement.`,
  },
  projects: [
    {
      projectName: `Show Delve`,
      projectTypes: ['webapp', 'website'],
      projectDetails: `Show Delve is a discovery Webapp for movies, TV shows, and animations,
                       offering seamless navigation and innovative features to help users find streaming links,
                        create personalized collections, and share recommendations with friends.`,
      liveLinkName: 'Live',
      liveLink: `#`,
      designLinkName: 'Behance',
      designLink: `#`,
    },
    {
      projectName: `Abitop`,
      projectTypes: ['website'],
      projectDetails: `A sleek, user-friendly website for an architectural firm, showcasing their expertise, portfolio, 
      and services, making it easy for clients to explore their offerings and connect with them effortlessly.`,
      liveLinkName: 'Live',
      liveLink: `#`,
      designLinkName: 'Behance',
      designLink: `#`,

    },
    {
      projectName: `Norae`,
      projectTypes: ['mobile app', 'website'],
      projectDetails: `Norae is a niche K-pop mobile app designed to enhance fan experiences,
       featuring intuitive interfaces and creative elements that seamlessly blend social networking, and entertainment for the K-pop community.`,
      liveLinkName: 'Live',
      liveLink: `#`,
      designLinkName: 'Behance',
      designLink: `#`,
    },
    {
      projectName: `My100UI`,
      projectTypes: ['mobile app', 'website', 'webapp', 'elements'],
      projectDetails: `A diverse collection of 100 UI designs covering various industries,
       including e-commerce, fintech, healthcare, education, social media, and entertainment. Each design demonstrates creativity, adaptability, and attention to detail.`,
      liveLinkName: 'X',
      liveLink: `#`,
      designLinkName: 'Dribble',
      designLink: `#`,

    },
  ],
  experiences: [
    {
      type: 'freelance',
      duration: '2024-Present',
      experience: [
        {
          companyName: 'Abitop',
          jobRole: `Designed a fully responsive website for an architectural firm, ensuring a seamless user experience across desktop, tablet, and mobile platforms. Delivered tailored UI designs that align with the firm's branding and developed interactive prototypes to enhance navigation and functionality.`,
          liveLinkName: 'Live',
          liveLink: `#`,
          designLinkName: 'Behance',
          designLink: `#`,
        },
        {
          companyName: 'Divine-G Cakes and Event',
          jobRole: `Created a responsive website design for a catering and event planning company, prioritizing consistency and usability across devices. Developed high-fidelity prototypes featuring intuitive functionality and engaging interactions to reflect the company’s vibrant and professional ethos.`,
          liveLinkName: 'Live',
          liveLink: `#`,
          designLinkName: 'Behance',
          designLink: `#`,
        }
      ]
    },
  ]

}



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [arrowVisible, setArrowVisible] = useState(false)
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const projectCardRef = useRef(null)
  const projectDetailsRef = useRef(null)

  const openCV = () => {
    // window.open('link to cv')
  }
  const toggleNavigationMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const handleShowArrow = () => {
    setArrowVisible(!arrowVisible)
  }
 
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if the click is outside both menu and button
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);
  console.log(isMenuOpen)
  const dataProps = {
    ZeeInfo,
    openCV,
    toggleNavigationMenu,
    isMenuOpen,
    menuRef,
    buttonRef,
    handleShowArrow,
    arrowVisible,
    projectCardRef,
    projectDetailsRef,
  }

  return (
    <>
      <Header {...dataProps}>
        <NavBar {...dataProps} />
      </Header>
      <ProjectsSection {...dataProps} />
      <AdditionalInfoSection {...dataProps} />
      <Experience {...dataProps} />
      <Contact />

    </>
  )
}

export default App
