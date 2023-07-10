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
                <H4TitleNoMG>1. Legal basis</H4TitleNoMG>
              </TextSpacer>
            </BorderedContainer>
          </SmallerContainer>

          <BiggerContainer right={true}>
            <BorderedContainer>
              <TextSpacer>
                <Paragraph>
                This “Privacy Policy” has been developed in accordance with the requirements of
Regulation (EU) 2016/679 of the European Parliament and of the Council of 27
April 2016 on the protection of natural persons with regard to the processing of
personal data and on the free movement of such data, and repealing Directive
95/46/EC (hereinafter referred to as the GDPR).
                </Paragraph>
              </TextSpacer>
            </BorderedContainer>
          </BiggerContainer>

          <SmallerContainer right={false}>
            <BorderedContainer>
              <TextSpacer>
                <H4TitleNoMG>2. General information</H4TitleNoMG>
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
                      The controller of personal data is Jagodne spółka z ograniczoną
odpowiedzialnością, with its registered office in Siedlce, ul. Brzeska 65, 08-
110 Siedlce, REGON (National Business Registry Number): 383076118, NIP
(Tax ID Number): 8212662856, KRS (National Court Register Number):
0000780630, entered in the Register of Entrepreneurs of the National Court
Register kept by the District Court Lublin-Wschód in Lublin, based in Świdnik,
6 th Commercial Division of the National Court Register (hereinafter referred to
as the Controller).
                        <br />
                        <br />
                      </Paragraph>
                    </li>

                    <li>
                      <Paragraph>
                      If you have any inquiries regarding data protection, you can send them by e-
mail to: biuro@jagodne.com.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                      The Privacy Policy defines the terms and conditions of the Controller’s
processing of the Personal Data of the Users of the Website:
www.jagodne.com (hereinafter referred to as the Website).
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                      Personal data are considered to be any information concerning an identified or
identifiable natural person (“data subject”) (hereinafter referred to as the User);
an identifiable natural person is one who can be identified, directly or
indirectly, in particular by means of an identifier such as a name, an
identification number, location data, an online identifier, or one or more factors
specific to their physical, physiological, genetic, mental, economic, cultural or
social identity (hereinafter referred to as Personal Data).
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
                  3. Scope and purpose of the Privacy Policy
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
                      Personal Data shall be protected against unauthorized access, being taking
possession of by unauthorized persons, destruction, loss, damage or
alteration, and processing in violation of generally applicable laws. The
Controller makes use of appropriate security measures to protect Personal
Data. These measures include internal controls over collected data, storage
and processing procedures, and physical and IT security measures to protect
Personal Data against unauthorized access to the systems where we store
such Personal Data.
                        <br />
                        <br />
                      </Paragraph>
                    </li>

                    <li>
                      <Paragraph>
                      The Privacy Policy applies to the processing of all Personal Data processed by
the Controller in a fully or partially automated manner, and to the non-
automated processing of Personal Data which are part of a set of data or
intended to be part of a set of data — especially of data processed in the
Controller’s computer systems.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                      Providing Personal Data is voluntary, but it is necessary to provide Personal
Data e.g. in order to send inquiries to the Controller and have the Controller
respond to such inquiries.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                      It is necessary to provide the following data in the form for communication
purposes: name and surname, phone number, e-mail address, and the
content of the message (inquiry).
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                      The Controller processes the Personal Data of Website Users for the purpose
determined by the function of the form — for the purpose and to the extent
necessary for communication purposes, i.e. to prepare and respond to a
message using the form featured on the Website.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                      Personal data are also required: <br />
                        <br />
                        <ol type={"a"} className={"abc"}>
                          <li>to send e-mail notifications, </li>
                          <li>
                          to directly market (advertise) the Controller’s products and services,
                          </li>
                          <li>
                          to create records and registers related to the GDPR.
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
                  4. Legal basis for the processing of personal data
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
                      The legal basis for the processing of data depends on the purpose of data
processing, therefore:
                        <br />
                        <br />
                        <ol type={"a"} className={"abc"}>
                          <li>
                          in order to handle the inquiry sent through the form or directly by e-mail, the
Personal Data provided — such as name, surname, contact details — are
processed. The legal basis for such data processing is Article 6(1)(b) of the
GDPR. If the User decides to provide other data as well, it will be considered
that they have consented to the processing of these data as well, in which
case the legal basis for such processing is Article 6(1)(a) of the GDPR, which
allows the processing of Personal Data on the basis of a voluntary consent;{" "}
                          </li>
                          <li>
                            {" "}
                            in the case of acceptance of a proposal/submission of an order — for the
purpose of concluding and carrying out a contract, the Personal Data
processed include: name and surname or possibly company name, address of
residence or registered office, PESEL number or NIP number, e-mail address.
The legal basis for such data processing is Article 6(1)(b) of the GDPR;
                          </li>
                          <li>
                          for the purpose of the Controller’s direct marketing activities, the Personal
Data processed include: name and surname or possibly company, e-mail
address, telephone number. The legal basis for such data processing is Article
6(1)(f) of the GDPR;
                          </li>
                          <li>
                          in order to administer the website, the following Personal Data are
processed: IP address, server date and time, information about the browser
used, information about the operating system — these data are recorded
automatically in the so-called server logs, each time the Website is visited and
used. The legal basis for such processing is Article 6(1)(f) of the GDPR, which
allows the processing of Personal Data if the processing of Personal Data
enables the Controller to pursue their legitimate interest (in this case the
Controller’s interest is the administration of the Website).
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
                <H4TitleNoMG>5. Rights of data subjects</H4TitleNoMG>
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
                      If the processing of Personal Data takes place on the basis of the User’s
consent, the User may withdraw this consent at any time — at their own
discretion.
                        <br />
                        <br />
                      </Paragraph>
                    </li>

                    <li>
                      <Paragraph>
                      If the User would like to withdraw their consent to the processing of Personal
Data, they need to send an e-mail to the address indicated in item 2 of the
Privacy Policy or a letter by standard mail to the Controller’s registered
address.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                      Data subjects have the right to access the content of their Personal Data and
the right to rectify them, erase them, or restrict the processing thereof, the right
to data portability and, with respect to marketing purposes, the right to object
to the processing of their Personal Data.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                      Data subjects have the right to lodge a complaint with a supervisory authority if
they consider that the processing of their Personal Data violates the provisions
of generally applicable law.
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
                <H4TitleNoMG>6. Data retention period</H4TitleNoMG>
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
                      Personal Data are retained:
                        <br />
                        <br />
                        <ol type={"a"} className={"abc"}>
                          <li>
                          throughout the period of exchange of communication regarding an inquiry,
i.e. as long as it may be necessary to fulfill the purpose arising from the
content of the inquiry, and then, depending on the results of the said
exchange, these data will either be included in the database of customers
and be further processed for the purpose of carrying out the contract
concluded or be erased if there is no possibility to collaborate. If the
exchange of communication ends without any form of collaboration being
established, the data will be erased immediately. If a contract is concluded,
the data will be processed for the time necessary to carry out the contract
and to exercise the rights and obligations arising therefrom — including the
time necessary to fulfill the legal obligations imposed on the Controller and
to assert claims and defend against claims;
                          </li>
                          <li>
                          until the consent given is withdrawn or the purpose of the processing of
Personal Data is achieved — applies to Personal Data processed on the
basis of a consent given;
                          </li>
                          <li>
                          until an objection to the processing of Personal Data is filed or the purpose
of the processing of Personal Data is achieved — applies to Personal Data
processed on the basis of the Personal Data Controller’s legitimate
interest,
                          </li>
                          <li>
                          until the Personal Data processed become out-of-date or no longer useful
— applies to Personal Data processed mainly for the purpose of cookie
use and Website administration,
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
                      The data retention periods may be extended if data are necessary to establish,
assert, or defend against any possible claims, and afterwards only if and to the
extent it is required under the applicable law. After the expiry of the data
retention period, the data are irreversibly erased or anonymized.
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
                <H4TitleNoMG>7. Data recipients</H4TitleNoMG>
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
                      User Personal Data are disclosed to authorized employers and partners such
as: suppliers responsible for the management of IT systems, software, and
hardware, entities providing legal or accounting services, courier companies,
marketing agencies, entities providing e-mailing or SMS services, and
payment operators.
                        <br />
                        <br />
                      </Paragraph>
                    </li>

                    <li>
                      <Paragraph>
                      We may disclose selected information to relevant authorities or third parties
who may request such information based on a relevant legal basis and in
accordance with the law in force.
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
                      The Controller does not transfer Personal Data to third countries.
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
                  8. Cookie policy and technical requirements
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
                      The use of the Website involves the collection of cookie files (“cookies”)
including textual content that may contain Personal Data in the form of the
computer IP address and a unique identifier assigned to the file save on the
device.
                        <br />
                        <br />
                      </Paragraph>
                    </li>

                    <li>
                      <Paragraph>
                      The legal basis for the collection of data read from cookies is Article 6(1)(f) of
the GDPR, which allows Personal Data to be processed to enable the
Controller to pursue and achieve a legitimate interest. Such an interest is
adjusting the Website to the User’s individual setting and saving the data the
User may enter in connection with the use of the Website, as well as carrying
out statistical analyses concerning Website Users and visitors for the
Controller’s needs.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                      You may decide to block the use of cookies by changing the settings in your
browser, but bear in mind that if you do so, you may find it difficult to take full
advantage of all the features of the Website.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                      You can access your data in the form in which they are collected through the
analysis of the content of cookies, with the content in which they are available
on the hard drive of the computer, which are then used by the Website. You
can also erase your data at any time.
                        <br />
                        <br />
                      </Paragraph>
                    </li>

                    <li>
                      <Paragraph>
                      User has the right to erase their data, to object to the processing thereof, and
to lodge a complaint with a supervisory authority.
                        <br />
                        <br />
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                      Blocking the use of cookies may make it difficult to use some of the services
the Website offers, especially those that require logging in. Blocking the use
of cookies will not make it impossible to read or view the content featured on
the Website — except for the content that can be accessed only upon logging
in.
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