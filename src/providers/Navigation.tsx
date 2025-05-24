// Create a navigation context provider to manage navigation state
import React, { createContext, useContext } from "react";
import { useScrollIntoView } from "@mantine/hooks";
import { useInViewport } from "@mantine/hooks";

type SectionRefs = {
  ref: (node: any) => void;
  targetRef: React.RefObject<HTMLDivElement> | null;
};

type NavigationContextType = {
  activeSection: string;
  navigateToSection: (section: SectionName) => void;
  refs: { [key in SectionName]: SectionRefs };
};

type NavigationProviderProps = {
  children: React.ReactNode;
};

const NavigationContext = createContext<NavigationContextType | null>(null);

export function NavigationProvider({ children }: NavigationProviderProps) {
  const { ref: heroRef, inViewport: heroInView } = useInViewport();
  const { scrollIntoView: scrollToHero, targetRef: heroTarget } =
    useScrollIntoView<HTMLDivElement>();

  const { ref: projectsRef, inViewport: projectsInView } = useInViewport();
  const { scrollIntoView: scrollToProjects, targetRef: projectsTarget } =
    useScrollIntoView<HTMLDivElement>();

  const { ref: experiencesRef, inViewport: experiencesInView } =
    useInViewport();
  const { scrollIntoView: scrollToExperiences, targetRef: experiencesTarget } =
    useScrollIntoView<HTMLDivElement>();

  const { ref: skillsRef, inViewport: skillsInView } = useInViewport();
  const { scrollIntoView: scrollToSkills, targetRef: skillsTarget } =
    useScrollIntoView<HTMLDivElement>();

  const refs = {
    hero: { ref: heroRef, targetRef: heroTarget },
    projects: { ref: projectsRef, targetRef: projectsTarget },
    experiences: { ref: experiencesRef, targetRef: experiencesTarget },
    skills: { ref: skillsRef, targetRef: skillsTarget },
  };

  const sectionsInViewport: { [key in SectionName]: boolean } = {
    hero: heroInView,
    projects: projectsInView,
    experiences: experiencesInView,
    skills: skillsInView,
  };

  const activeSection =
    Object.keys(sectionsInViewport).find(
      (section) => sectionsInViewport[section as SectionName]
    ) || "hero";

  const navigateToSection = (section: SectionName) => {
    console.log(`Navigating to section: ${section}`);
    switch (section) {
      case "hero":
        scrollToHero({ alignment: "start" });
        break;
      case "projects":
        scrollToProjects({ alignment: "start" });
        break;
      case "experiences":
        scrollToExperiences({ alignment: "start" });
        break;
      case "skills":
        scrollToSkills({ alignment: "start" });
        break;
      default:
        break;
    }
  };

  return (
    <NavigationContext.Provider
      value={{ activeSection, navigateToSection, refs }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }

  const { refs, ...rest } = context;
  return { ...rest };
};

export const useNavigationRefs = (section: SectionName) => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error(
      "useNavigationRefs must be used within a NavigationProvider"
    );
  }

  const sectionRefs = context.refs[section];
  if (!sectionRefs) {
    throw new Error(`No refs found for section: ${section}`);
  }

  return sectionRefs;
};
