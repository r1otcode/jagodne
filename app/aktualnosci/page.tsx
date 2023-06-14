
import Content from "@/components/layouts/aktualnosci/Content";
import CtaNormal from "@/components/layouts/CtaNormal";
import DefaultHeader from "@/components/layouts/header/DefaultHeader";

export default function Home() {
    return (
        <>
            <DefaultHeader title={'Aktualności'} description={"Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere ."}>
                Aenean eu leo quam pellentesque ornare sem lacinia quam
            </DefaultHeader>
            <Content />
            <CtaNormal />

        </>
    );
}
