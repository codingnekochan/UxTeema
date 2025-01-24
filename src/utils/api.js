import { useQuery } from "react-query";

const customFetch = async (url) => {
 const response = await fetch(
  `https://our-portfolio-backend.fly.dev/api${url}`
 );
 if (!response.ok) {
  throw new Error(`Error ${response.status} : ${response.statusText}`);
 }
 return response.json();
};

export const useProjects = () => {
 return useQuery({
  queryKey: ["Projects"],
  queryFn: async () => {
   const data = await customFetch("/uxteema-projects?populate=*");
   return data.data;
  },
  onError: (error) => {
   console.error("Error fetching projects:", error.message);
  },
 });
};
export const useExperiences = () => {
 return useQuery({
  queryKey: ["Experiences"],
  queryFn: async () => {
   const data = await customFetch("/uxteema-experiences?populate[experience][populate][0]=Links");
   return data.data;
  },
  onError: (error) => {
   console.error("Error fetching projects:", error.message);
  },
 });
};
