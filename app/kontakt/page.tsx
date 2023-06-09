import Content from "@/components/layouts/contact/Content";
import DefaultHeader from "@/components/layouts/header/DefaultHeader";
import CtaContact from "@/components/layouts/CtaContact";

export default function Home() {
    return (
        <>
            <DefaultHeader title={'Kontakt'} description={'Masz pytania lub potrzebujesz wyjaśnienia? Zadzwoń lub napisz do nas, posługując się danymi poniżej.'}>
                Masz pytania? Zapraszamy do kontaktu
            </DefaultHeader>
            <Content />
            <CtaContact />
        </>
    );
}
