
import Content from "@/components/layouts/wykonawstwo/Content";
import CtaNormal from "@/components/layouts/CtaNormal";
import DefaultHeader from "@/components/layouts/header/DefaultHeader";

export default function Home() {
  return (
    <>
      <DefaultHeader title={'Wykonawstwo'} description={"Specjalizujemy się w nowoczesnym budownictwie wielkopowierzchniowym, odpornym na zmienność trendów i wyprzedzającym swoje czasy."}>
          Wielkopowierzchniowe budownictwo w formacie <span className="text-accent"> all-in-one</span>
      </DefaultHeader>
      <Content />
      <CtaNormal />

    </>
  );
}
