import Content from "@/components/layouts/generalny/Content";
import CtaNormal from "@/components/layouts/CtaNormal";
import DefaultHeader from "@/components/layouts/header/DefaultHeader";

export default function Home() {
  return (
    <>
      <DefaultHeader
        title={"Generalny patronat projektowo-wykonawczy"}
        description={
          "Ambitne wizje przekształcamy w szanse biznesowe. Zabezpieczamy inwestycje na nieprzewidziane zmiany i oferujemy gotowe rozwiązania na wypadek planu B."
        }
      >
        Antykruche budownictwo odporne na kryzysy
      </DefaultHeader>
      <Content />
      <CtaNormal />
    </>
  );
}
