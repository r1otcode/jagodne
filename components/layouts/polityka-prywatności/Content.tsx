import React from "react";
import classNames from "classnames";
import Container from "@/components/layouts/container";
import BorderedContainer from "@/components/layouts/BorderedContainer";
import Paragraph from "@/components/Typography/Paragraph";
import SmallerContainer from "@/components/layouts/SmallerContainer";
import BiggerContainer from "@/components/layouts/BiggerContainer";
import TextSpacer from "@/components/layouts/TextSpacer";
import H4TitleNoMG from "@/components/Typography/H4TitleNoMG";

const Content = () => {
  const howWedoItClasses = classNames(
    "xs:mt-[40px]",
    "sm:mt-[110px]",
    "md:mt-[120px]",
    "lg:mt-[120px]",
    "xl:mt-[120px]",
    "2xl:mt-[120px]",
    "3xl:mt-[120px]",
    "4xl:mt-[120px]"
  );

  return (
    <div className={howWedoItClasses} id={"section-1"}>
      <Container>
        <div className={"flex flex-col"}>
          <SmallerContainer right={false}>
            <BorderedContainer>
              <TextSpacer>
                <H4TitleNoMG>1. Podstawa prawna</H4TitleNoMG>
              </TextSpacer>
            </BorderedContainer>
          </SmallerContainer>

          <BiggerContainer right={true}>
            <BorderedContainer>
              <TextSpacer>
                <Paragraph>
                  Niniejsza „Polityka Prywatności” została opracowana zgodnie
                  z wymaganiami Rozporządzenia Parlamentu Europejskiego i Rady
                  (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony
                  osób fizycznych w związku z przetwarzaniem danych osobowych i
                  w sprawie swobodnego przepływu takich danych oraz uchylenia
                  dyrektywy 95/46/WE (zwanego dalej RODO).
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </BiggerContainer>

          <SmallerContainer right={false}>
            <BorderedContainer>
              <TextSpacer>
                <H4TitleNoMG>2. Informacje ogólne</H4TitleNoMG>
              </TextSpacer>
            </BorderedContainer>
          </SmallerContainer>

          <BiggerContainer right={true}>
            <BorderedContainer>
              <TextSpacer>
                <Paragraph>
                  <ol type={"1"} className={"list-decimal"}>
                    <li>
                      <Paragraph>
                        Administratorem danych osobowych jest JAGODNE spółka z
                        ograniczoną odpowiedzialnością, z siedzibą w
                        miejscowości Siedlce, przy ulicy Brzeskiej 65, 08-110
                        Siedlce, REGON: 383076118, NIP: 8212662856, KRS:
                        0000780630, wpisanej do rejestru przedsiębiorców
                        Krajowego Rejestru Sądowego prowadzonego przez Sąd
                        Rejonowy Lublin-Wschód w Lublinie, z siedzibą w
                        Świdniku, VI Wydział Gospodarczy Krajowego Rejestru
                        Sądowego, (zwanego dalej Administratorem).
                        <br />
                        <br />
                      </Paragraph>
                    </li>

                    <li>
                      <Paragraph>
                        Kontakt w sprawie ochrony danych osobowych jest możliwy
                        pod adresem e-mail ……………………….
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Polityka prywatności określa zasady oraz warunki
                        przetwarzania przez Administratora Danych osobowych
                        Użytkowników serwisu jagodne.com (zwanego dalej
                        Serwisem)
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Za dane osobowe uznaje się wszelkie informacje o
                        zidentyfikowanej lub możliwej do zidentyfikowania osobie
                        fizycznej ("osobie, której dane dotyczą") (zwanej dalej
                        Użytkownikiem); możliwa do zidentyfikowania osoba
                        fizyczna to osoba, którą można bezpośrednio lub
                        pośrednio zidentyfikować, w szczególności na podstawie
                        identyfikatora takiego jak imię i nazwisko, numer
                        identyfikacyjny, dane o lokalizacji, identyfikator
                        internetowy lub jeden bądź kilka szczególnych czynników
                        określających fizyczną, fizjologiczną, genetyczną,
                        psychiczną, ekonomiczną, kulturową lub społeczną
                        tożsamość osoby fizyczne, (zwane dalej Dane osobowe).
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                  </ol>
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </BiggerContainer>

          <SmallerContainer right={false}>
            <BorderedContainer>
              <TextSpacer>
                <H4TitleNoMG>
                  3. Zakres i cel stosowania Polityki prywatności
                </H4TitleNoMG>
              </TextSpacer>
            </BorderedContainer>
          </SmallerContainer>

          <BiggerContainer right={true}>
            <BorderedContainer>
              <TextSpacer>
                <Paragraph>
                  <ol type={"1"} className={"list-decimal"}>
                    <li>
                      <Paragraph>
                        Dane osobowe są zabezpieczone przed bezprawnym
                        udostępnieniem osobom nieupoważnionym, zabraniem przez
                        osoby nieupoważnione, zniszczeniem, utratą, uszkodzeniem
                        lub zmianą oraz przetwarzaniem niezgodnym z przepisami
                        prawa powszechnie obowiązującego. Administrator stosuje
                        odpowiednie środki bezpieczeństwa w celu ochrony Danych
                        osobowych. Zaliczają się do nich wewnętrzne kontrole
                        zebranych danych, procedury przechowywania i
                        przetwarzania oraz fizyczne i informatyczne środki
                        bezpieczeństwa mające na celu ochronę przed
                        nieupoważnionym dostępem do systemów, w których
                        przechowujemy Dane osobowe.
                        <br />
                        <br />
                      </Paragraph>
                    </li>

                    <li>
                      <Paragraph>
                        Polityka prywatności dotyczy przetwarzania wszystkich
                        Danych osobowych, przetwarzanych przez Administratora w
                        sposób całkowicie lub częściowo zautomatyzowany oraz do
                        przetwarzania w sposób inny niż zautomatyzowany Danych
                        osobowych stanowiących część zbioru danych lub mających
                        stanowić część zbioru danych, w szczególności
                        przetwarzanych w systemach informatycznych będących w
                        dyspozycji Administratora.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Podanie Danych osobowych jest dobrowolne, jednakże
                        niezbędne np.: w celu przygotowania i udzielenia
                        odpowiedzi na kierowane do Administratora zapytania. W
                        formularzu, w celu kontaktu, niezbędne jest podanie
                        następujących danych: imię i nazwisko, telefon
                        kontaktowy, adres e-mail oraz treść wiadomości –
                        zapytania.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        W formularzu, w celu kontaktu, niezbędne jest podanie
                        następujących danych: imię i nazwisko, telefon
                        kontaktowy, adres e-mail oraz treść wiadomości –
                        zapytania.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Administrator przetwarza Dane osobowe Użytkowników
                        Serwisu, w celu wynikającym z funkcji formularza - w
                        celu i zakresie niezbędnym do kontaktu informacyjnego
                        tj. do przygotowania i udzielenia odpowiedzi na
                        wiadomość za pomocą formularza znajdującego się w
                        Serwisie.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Dane sobowe są również potrzebne do: <br />
                        <br />
                        <ol type={"a"} className={"abc"}>
                          <li>przesyłania powiadomień e-mail, </li>
                          <li>
                            marketingu bezpośredniego produktów i usług
                            Administratora,
                          </li>
                          <li>
                            tworzenia rejestrów i ewidencji związanych z RODO.
                          </li>
                        </ol>
                      </Paragraph>
                    </li>
                  </ol>
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </BiggerContainer>

          <SmallerContainer right={false}>
            <BorderedContainer>
              <TextSpacer>
                <H4TitleNoMG>
                  4. Podstawa prawna przetwarzania danych osobowych
                </H4TitleNoMG>
              </TextSpacer>
            </BorderedContainer>
          </SmallerContainer>

          <BiggerContainer right={true}>
            <BorderedContainer>
              <TextSpacer>
                <Paragraph>
                  <ol type={"1"} className={"list-decimal"}>
                    <li>
                      <Paragraph>
                        Podstawa prawna przetwarzania danych, uzależniona jest
                        od celu przetwarzania danych, a więc
                        <br />
                        <br />
                        <ol type={"a"} className={"abc"}>
                          <li>
                            w celu obsługi zapytania przesłanego przez formularz
                            lub bezpośrednio drogą elektroniczną przetwarzane są
                            podane Dane osobowe, jak: imię, nazwisko, dane
                            kontaktowe. Podstawą prawną takiego przetwarzania
                            danych jest art. 6 ust. 1 lit. b RODO. Jeżeli
                            Użytkownik zdecyduje się podać również inne dane,
                            uznajemy, że wyraził zgodę na przetwarzanie również
                            tych danych — wtedy podstawą prawną takiego
                            przetwarzania jest art. 6 ust. 1 lit. a RODO, który
                            pozwala przetwarzać Dane osobowe na podstawie
                            dobrowolnie udzielonej zgody;{" "}
                          </li>
                          <li>
                            {" "}
                            w przypadku przyjęcia oferty/złożenia zamówienia – w
                            celu zawarcia i realizacji umowy, przetwarzane są
                            takie Dane osobowe jak: imię i nazwisko lub
                            ewentualnie firmę, adres zamieszkania lub siedziba,
                            numer PESEL lub numer NIP, adres e-mail. Podstawą
                            prawna takiego przetwarzania danych jest art. 6 ust.
                            1 lit. b RODO;
                          </li>
                          <li>
                            w celu realizacji marketingu bezpośredniego
                            Administratora – przetwarzane są takie Dane osobowe
                            jak: imię i nazwisko lub ewentualnie firmę, adres
                            e-mail, numer telefonu. Podstawą prawna takiego
                            przetwarzania danych jest art. 6 ust. 1 lit. f)
                            RODO,
                          </li>
                          <li>
                            w celu administrowania stroną internetową
                            przetwarzane są takie dane osobowe, jak: adres IP,
                            data i czas serwera, informacje o przeglądarce
                            internetowej, informacje o systemie operacyjnym —
                            dane te są zapisywane automatycznie w tzw. logach
                            serwera, przy każdorazowym korzystaniu z Serwisu.
                            Podstawą prawną takiego przetwarzania danych jest
                            art. 6 ust. 1 lit. f RODO, który pozwala przetwarzać
                            dane osobowe, jeżeli tym sposobem Administrator
                            realizuje swój prawnie uzasadniony interes (w tym
                            przypadku interesem Administratora jest
                            administrowanie stroną internetową).
                          </li>
                        </ol>
                      </Paragraph>
                    </li>
                  </ol>
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </BiggerContainer>

          <SmallerContainer right={false}>
            <BorderedContainer>
              <TextSpacer>
                <H4TitleNoMG>5. Prawa osoby, której dane dotyczą</H4TitleNoMG>
              </TextSpacer>
            </BorderedContainer>
          </SmallerContainer>

          <BiggerContainer right={true}>
            <BorderedContainer>
              <TextSpacer>
                <Paragraph>
                  <ol type={"1"} className={"list-decimal"}>
                    <li>
                      <Paragraph>
                        Jeżeli przetwarzanie Danych osobowych odbywa się na
                        podstawie zgody, w każdej chwili Użytkownik może tę
                        zgodę cofnąć — wedle własnego uznania.
                        <br />
                        <br />
                      </Paragraph>
                    </li>

                    <li>
                      <Paragraph>
                        Jeżeli Użytkownik chciałby cofnąć zgodę na przetwarzanie
                        Danych osobowych, to w tym celu wystarczy wysłać maila
                        na adres wskazany w pkt 2 Polityki lub listownie na
                        adres siedziby Administratora.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Osobie, której Dane osobowe dotyczą, przysługuje prawo
                        dostępu do treści swoich Danych osobowych oraz prawo ich
                        sprostowania, usunięcia lub ograniczenia przetwarzania,
                        prawo do przenoszenia danych oraz w zakresie celów
                        marketingowych, prawo wniesienia sprzeciwu wobec ich
                        przetwarzania.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Osobie, której Dane osobowe dotyczą, przysługuje prawo
                        wniesienia skargi do organu nadzorczego, gdy uzna, iż
                        przetwarzanie Danych osobowych narusza przepisy
                        powszechnie obowiązującego prawa.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                  </ol>
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </BiggerContainer>

          <SmallerContainer right={false}>
            <BorderedContainer>
              <TextSpacer>
                <H4TitleNoMG>6. Okres przechowywania danych</H4TitleNoMG>
              </TextSpacer>
            </BorderedContainer>
          </SmallerContainer>

          <BiggerContainer right={true}>
            <BorderedContainer>
              <TextSpacer>
                <Paragraph>
                  <ol type={"1"} className={"list-decimal"}>
                    <li>
                      <Paragraph>
                        Dane osobowe są przechowywane przez:
                        <br />
                        <br />
                        <ol type={"a"} className={"abc"}>
                          <li>
                            okres trwania korespondencji w sprawie i niezbędny
                            do realizacji celu wynikającego z treści zapytania,
                            a następnie, w zależności od tego, jakie będą
                            rezultaty korespondencji – albo zasilą bazę Klientów
                            i będą dalej przetwarzane w celu realizacji umowy
                            albo dane zostaną usunięte jeżeli nie zaistnieje
                            możliwość nawiązania współpracy. W przypadku
                            czytelnego zamknięcia rozmów i nie nawiązania
                            współpracy, dane zostaną niezwłocznie usunięte. W
                            przypadku zawarcia umowy, dane będą przetwarzane
                            przez czas niezbędny do realizacji i korzystania z
                            praw i obowiązków z niej wynikających, w tym przez
                            czas niezbędny do realizacji obowiązków wynikających
                            z przepisów prawa nałożonych na Administratora i
                            dochodzenia roszczeń oraz obrony przed roszczeniami;
                          </li>
                          <li>
                            do czasu cofnięcia zgody lub osiągnięcia celu
                            przetwarzania — w odniesieniu do Danych osobowych
                            przetwarzanych na podstawie zgody;
                          </li>
                          <li>
                            do czasu skutecznego wniesienia sprzeciwu lub
                            osiągnięcia celu przetwarzania — w odniesieniu do
                            danych osobowych przetwarzanych na podstawie prawnie
                            uzasadnionego interesu Administratora Danych
                            Osobowych,
                          </li>
                          <li>
                            w celu realizacji marketingu bezpośredniego
                            Administratora – przetwarzane są takie Dane osobowe
                            jak: imię i nazwisko lub ewentualnie firmę, adres
                            e-mail, numer telefonu. Podstawą prawna takiego
                            przetwarzania danych jest art. 6 ust. 1 lit. f)
                            RODO,
                          </li>
                          <li>
                            do czasu zdezaktualizowania się lub utraty
                            przydatności — w odniesieniu do Danych osobowych
                            przetwarzanych głównie do celów wykorzystania
                            cookies i administrowania stroną internetową. <br/><br/>
                          </li>
                        </ol>
                      </Paragraph>
                    </li>

                    <li>
                      <Paragraph>
                        Okresy przechowywania danych mogą zostać przedłużone w
                        przypadku, gdy dane są niezbędne do ustalenia,
                        dochodzenia lub obrony przed ewentualnymi roszczeniami,
                        a po tym okresie jedynie w przypadku i zakresie, w jakim
                        będą wymagać tego przepisy prawa. Po upływie okresu
                        przetwarzania, dane są nieodwracalnie usuwane lub
                        anonimizowane.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                  </ol>
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </BiggerContainer>

          <SmallerContainer right={false}>
            <BorderedContainer>
              <TextSpacer>
                <H4TitleNoMG>7. Odbiorcy danych</H4TitleNoMG>
              </TextSpacer>
            </BorderedContainer>
          </SmallerContainer>

          <BiggerContainer right={true}>
            <BorderedContainer>
              <TextSpacer>
                <Paragraph>
                  <ol type={"1"} className={"list-decimal"}>
                    <li>
                      <Paragraph>
                        Dane osobowe Użytkownika są ujawniane upoważnionym
                        pracownikom oraz partnerom, takim jak: dostawcy
                        odpowiedzialni za obsługę systemów informatycznych i
                        sprzętu, podmioty świadczącym usługi prawne lub
                        księgowe, kurierzy, agencje marketingowe, podmioty
                        świadczące usługi wysyłania maili lub smsów i operatorzy
                        płatności
                        <br />
                        <br />
                      </Paragraph>
                    </li>

                    <li>
                      <Paragraph>
                        Jeżeli Użytkownik chciałby cofnąć zgodę na przetwarzanie
                        Danych osobowych, to w tym celu wystarczy wysłać maila
                        na adres wskazany w pkt 2 Polityki lub listownie na
                        adres siedziby Administratora.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Możemy ujawnić wybrane informacje właściwym organom lub
                        osobom trzecim, które zgłoszą żądanie udzielenia takich
                        informacji w oparciu o odpowiednią podstawę prawną oraz
                        zgodnie z obowiązującymi przepisami prawa.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Administrator nie przekazuje danych osobowych do państw
                        trzecich.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                  </ol>
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </BiggerContainer>

          <SmallerContainer right={false}>
            <BorderedContainer>
              <TextSpacer>
                <H4TitleNoMG>
                  8. Polityka „cookies” i wymagania techniczne
                </H4TitleNoMG>
              </TextSpacer>
            </BorderedContainer>
          </SmallerContainer>

          <BiggerContainer right={true}>
            <BorderedContainer>
              <TextSpacer>
                <Paragraph>
                  <ol type={"1"} className={"list-decimal"}>
                    <li>
                      <Paragraph>
                        W związku z korzystaniem z Serwisu, zbierane są pliki
                        typu cookies („ciasteczka”),obejmujące zawartość
                        tekstową które mogą zawierać dane osobowe w postaci
                        adresu IP komputera oraz unikalnego identyfikatora
                        urządzenia zapisanego w pliku.
                        <br />
                        <br />
                      </Paragraph>
                    </li>

                    <li>
                      <Paragraph>
                        Podstawą prawną dla zbierania danych odczytywanych z
                        plików cookies jest art. 6 ust. 1 lit. f) RODO,
                        dopuszczający przetwarzanie danych osobowych dla
                        osiągnięcia usprawiedliwionego celu Administratora.
                        Celem takim jest dostosowanie strony do indywidualnych
                        ustawień Użytkownika oraz zapamiętanie wprowadzanych
                        przez Użytkownika danych związanych z korzystaniem z
                        Serwisu, jak również prowadzenie analiz statystycznych
                        dotyczących Użytkowników i odwiedzających stronę na
                        potrzeby Administratora.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Można zrezygnować ze zbierania plików cookies wybierając
                        odpowiednie ustawienia przeglądarki, z której
                        korzystasz, jednak należy pamiętać, że w takim przypadku
                        korzystanie z wszystkich funkcji Serwisu może okazać się
                        utrudnione.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Można uzyskać dostęp do swoich danych w formie zbieranej
                        poprzez analizę zawartości plików cookies, w treści w
                        jakiej znajdują się na dysku komputera, które są
                        następnie wykorzystywane przez witrynę oraz w każdej
                        chwili je usunąć.
                        <br />
                        <br />
                      </Paragraph>
                    </li>

                    <li>
                      <Paragraph>
                        Użytkownikowi przysługuje prawo ich usunięcia,
                        wniesienia sprzeciwu wobec ich przetwarzania, jak
                        również prawo wniesienia skargi do organu nadzorczego.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Wyłączenie stosowania cookies może spowodować
                        utrudnienia korzystanie z niektórych usług w ramach
                        Serwisu, w szczególności wymagających logowania.
                        Wyłączenie opcji przyjmowania cookies nie powoduje
                        natomiast braku możliwości czytania lub oglądania treści
                        zamieszczanych w Serwisie z zastrzeżeniem tych, do
                        których dostęp wymaga logowania.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                  </ol>
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </BiggerContainer>
        </div>
      </Container>
    </div>
  );
};
export default Content;