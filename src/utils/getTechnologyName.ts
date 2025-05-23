export function getTechnologyName(technology: string): string {
  switch (technology) {
    case "aws-lightsail":
      return "AWS Lightsail";
    case "aws":
      return "AWS";
    case "c-sharp":
      return "C#";
    case "c":
      return "C";
    case "cpp":
      return "C++";
    case "css":
      return "CSS";
    case "cytoscapejs":
      return "Cytoscape.js";
    case "docker":
      return "Docker";
    case "flask":
      return "Flask";
    case "git":
      return "Git";
    case "github":
      return "GitHub";
    case "go":
      return "Go";
    case "haskell":
      return "Haskell";
    case "html":
      return "HTML";
    case "java":
      return "Java";
    case "javascript":
      return "JavaScript";
    case "jest":
      return "Jest";
    case "kubernetes":
      return "Kubernetes";
    case "mantine":
      return "Mantine";
    case "maya":
      return "Autodesk Maya";
    case "mui":
      return "MUI";
    case "nextjs":
      return "Next.js";
    case "postgresql":
      return "PostgreSQL";
    case "prolog":
      return "Prolog";
    case "python":
      return "Python";
    case "react":
      return "React";
    case "react-testing-library":
      return "Testing Library";
    case "sky":
      return "Sky";
    case "sqlite":
      return "SQLite";
    case "styled-components":
      return "Styled Components";
    case "typescript":
      return "TypeScript";
    case 'unity':
      return "Unity";
    case "uob":
      return "University of Bristol";
    default:
      return technology.charAt(0).toUpperCase();
  }
}
