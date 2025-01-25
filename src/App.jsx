import React, { useState, useRef, useEffect } from "react"
import { Header, AdditionalInfoSection, ProjectsSection, Contact, Experience, NavBar } from "./sections"
import { useExperiences, useProjects } from "./utils/api"

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [arrowVisible, setArrowVisible] = useState(false)
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const projectCardRefs = useRef([]);
  const CVButtonRef = useRef(null)
  const { data: ZeeProjects } = useProjects()
  const { data: ZeeExperiences } = useExperiences()

  // Initialize refs only once
  if (ZeeProjects && projectCardRefs.current.length !== ZeeProjects?.length) {
    projectCardRefs.current = ZeeProjects?.map((_, i) => projectCardRefs.current[i] || React.createRef());
  }
  const openCV = () => {
    window.open('https://drive.google.com/file/d/1Bw2-OIwWhtdL2DTJYk97YAlSWA3LZEC6/view')
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
  const handleSetName = (e) => {
    setName(e.target.value)
  }
  const handleSetEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleSetMessage = (e) => {
    setMessage(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("access_key", apiKey);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const submitForm = await response.json();
      if (submitForm.success) {
        console.log("submitted successfully ", formData);
        setEmail('')
        setName('')
        setMessage('')
      }
    } catch (error) {
      console.log(error);

    }

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
  const dataProps = {
    ZeeProjects,
    ZeeExperiences,
    openCV,
    toggleNavigationMenu,
    isMenuOpen,
    menuRef,
    buttonRef,
    handleShowArrow,
    arrowVisible,
    projectCardRefs,
    CVButtonRef,
    handleShowDetails,
    handleSubmit,
    handleSetEmail,
    handleSetMessage,
    handleSetName,
    name,
    email,
    message
  }

  return (
    <>
      <Header {...dataProps}>
        <NavBar {...dataProps} />
      </Header>
      <ProjectsSection {...dataProps} />
      <AdditionalInfoSection {...dataProps} />
      <Experience {...dataProps} />
      <Contact {...dataProps} />

    </>
  )
}

export default App
