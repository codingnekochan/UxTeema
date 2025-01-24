import React, { useState, useRef, useEffect } from "react"
import { Header, AdditionalInfoSection, ProjectsSection, Contact, Experience, NavBar } from "./sections"
import { useExperiences, useProjects } from "./utils/api"

const ZeeInfo = {
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
  const projectCardRefs = useRef([]);
  const CVButtonRef = useRef(null)
  const { data: ZeeProjects, isLoading: projectsLoading, isError: projectError } = useProjects()
  const { data: ZeeExperiences, isLoading: experiencesLoading, isError: experienceError } = useExperiences()

  // Initialize refs only once
  if (ZeeProjects && projectCardRefs.current.length !== ZeeProjects?.length) {
    projectCardRefs.current = ZeeProjects?.map((_, i) => projectCardRefs.current[i] || React.createRef());
  }
  const openCV = () => {
    // window.open('link to cv')
  }
  const toggleNavigationMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const handleShowArrow = () => {
    setArrowVisible(!arrowVisible)
  }
  const handleShowDetails = (index) => {
    projectCardRefs.current[index]?.current?.focus();
    console.log('is focused')
  }
  // ZeeProjects?.forEach(project => {
  //   console.log(project.Name)
  //   console.log(project.Summary[0].children[0].text)
  //   project.uxteema_project_types.forEach((type) => {
  //     console.log(type.id)
  //     console.log(type.type)
  //   })
  //   project.Links.forEach((type) => {
  //     console.log(type.LinkName)
  //     console.log(type.LinkURL)
  //   })
  //   console.log(`https://our-portfolio-backend.fly.dev${project.Thumbnail.url}`)

  // });
  console.log(ZeeProjects, 'is here')
  console.log('here is', ZeeExperiences)


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
    ZeeProjects,
    ZeeExperiences,
    projectsLoading,
    openCV,
    toggleNavigationMenu,
    isMenuOpen,
    menuRef,
    buttonRef,
    handleShowArrow,
    arrowVisible,
    projectCardRefs,
    CVButtonRef,
    handleShowDetails
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
