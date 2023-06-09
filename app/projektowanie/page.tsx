
import Content from "@/components/layouts/projektowanie/Content";
import CtaNormal from "@/components/layouts/CtaNormal";
import DefaultHeader from "@/components/layouts/header/DefaultHeader";


export default function Home() {
  return (
    <>
        <DefaultHeader title={'Projektowanie'} description={'Nie boimy się odważnych i złożonych projektów zorientowanych na maksymalizację zwrotu z inwestycji. Budujemy dziś z myślą o potrzebach jutra.'}>
            Twój pomysł na<br/> inwestycję w skali
            <span className={"text-accent"}> big picture</span>
        </DefaultHeader>

      <Content />
      <CtaNormal />
    </>
  );
}
