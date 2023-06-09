import Content from "@/components/layouts/obiekty/Content";
import CtaNormal from "@/components/layouts/CtaNormal";
import DefaultHeader from "@/components/layouts/header/DefaultHeader";

export default function Home() {
  return (
    <>
      <DefaultHeader
        title={"Obiekty systemowe"}
        description={
          "Krótki czas realizacji, możliwość dalszej rozbudowy i doskonała relacja ceny do jakości, pozwalająca na szybki zwrot z inwestycji."
        }
      >
          Nowoczesne obiekty w systemie modułowym
      </DefaultHeader>
      <Content />
      <CtaNormal />
    </>
  );
}
