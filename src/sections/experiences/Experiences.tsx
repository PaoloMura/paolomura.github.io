import experiences from "@/data/experience.json";
import Experience from "@/components/experience/Experience";
import Section from "@/components/section/Section";

export default function Experiences() {
  return (
    <Section name="experiences" size="xs">
      {experiences.map((experience, index) => (
        <Experience {...experience} key={`experience-${index}`} />
      ))}
    </Section>
  );
}
