import Content from "@/components/layouts/polityka-prywatności/Content";
import CtaNormal from "@/components/layouts/CtaNormal";
import DefaultHeader from "@/components/layouts/header/DefaultHeader";

export default function Home() {
    return (
        <>
          <DefaultHeader title={'jagodne.com'} description={'Jagodne Sp. z o.o. z siedzibą w Siedlcach'}>
              Polityka Prywatności i Cookies
          </DefaultHeader>
            <Content />
            <CtaNormal />
        </>
    );
}
