export function getTechnologyName(technology: string): string {
  switch (technology) {
    case "aws-lightsail":
      return "AWS Lightsail";
    case "c-sharp":
      return "C#";
    case "cytoscapejs":
      return "Cytoscape.js";
    case "flask":
      return "Flask";
    case "maya":
      return "Autodesk Maya";
    case "mui":
      return "MUI";
    case "nextjs":
      return "Next.js";
    case "postgresql":
      return "PostgreSQL";
    case "python":
      return "Python";
    case "react":
      return "React";
    case 'unity':
      return "Unity";
    default:
      return technology.charAt(0).toUpperCase();
  }
}
