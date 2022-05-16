import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProjectProps {
  id: number,
  name: string,
  tech: Array<string>,
  description: string,
  img: string,
  links: Array<string>,
  url: Array<string>,
}

export interface ActiveProjectProps {
  project: ProjectProps,
  setActiveProject: React.Dispatch<React.SetStateAction<any>>,
}

export interface NavbarProps {
  mobileMenu: boolean,
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>,
  isTablet: boolean
}

export interface ProjectCardProps {
  id: number,
  name: string,
  tech: Array<string>,
  img: string,
  setActiveProject: React.Dispatch<React.SetStateAction<any>>,
}

export interface SectionHeaderProps {
  title: string,
}