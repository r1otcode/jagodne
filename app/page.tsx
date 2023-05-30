
import Button from '../components/Button'
import PageTitle from '../components/Typography/PageTitle'
import Paragraph from "@/components/Typography/Paragraph";
import Logo from "@/components/logo";
import HomepageHeader from "@/components/layouts/header/homepage";

export default function Home() {
  return (
      <>
          <HomepageHeader/>

        <Button href="#">Dowiedz się więcej</Button>
        <PageTitle>Jagodne – satysfakcja i sukces mierzone w m2</PageTitle>
          <Paragraph>Specjalizujemy się w projektowaniu i wykonawstwie nowoczesnych obiektów budowlanych dla sektora komercyjnego, przemysłowego oraz użyteczności publicznej.</Paragraph>

      </>
  )
}
