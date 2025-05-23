export function isDarkLogo(logo: string): boolean {
  const darkLogos = [
    "aws",
    "flask",
    "git",
    "github",
    "haskell",
    "nextjs",
    "prolog",
    "styled-components",
    "sqlite",
    "unity",
    "uob",
  ];

  return darkLogos.includes(logo);
}
