import H4TitleNoMG from "@/components/Typography/H4TitleNoMG";
import Grid from "@/components/layouts/configurator/components/grid";
import GridItem from "@/components/layouts/configurator/components/gridItem";
import Paragraph from "@/components/Typography/Paragraph";
import Container from "@/components/layouts/container";
import TextSpacer from "@/components/spacers/textSpacer";

interface ObjectInformation {
  label: string;
  value: string;
}
interface ConfiguratorInterface {
  title: string;
  objectInformations: {
    [key: string]: ObjectInformation;
  };

  objectDescription: string;
  images: { source: string; alt: string }[];
}

const Configurator = ({
  title,
  objectInformations,
  images,
    objectDescription,
}: ConfiguratorInterface) => {
  return (
    <Container>
      <div className="text-center mb-[40px] 4xl:mb-[60px]">
        <H4TitleNoMG>{title}</H4TitleNoMG>
      </div>

      <Grid>
        {Object.values(objectInformations).map((info, index) => (
          <GridItem key={index} information={info.label} value={info.value} />
        ))}
      </Grid>

        <div className='text-center'>
            <H4TitleNoMG>Wizualizacje</H4TitleNoMG>
            <TextSpacer />
            <Paragraph>{objectDescription}</Paragraph>
        </div>

    </Container>
  );
};
export default Configurator;
