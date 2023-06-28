import React from "react";
import classNames from "classnames";
import Container from "@/components/layouts/container";
import BorderedContainer from "@/components/layouts/BorderedContainer";
import Paragraph from "@/components/Typography/Paragraph";
import SmallerContainer from "@/components/layouts/SmallerContainer";
import BiggerContainer from "@/components/layouts/BiggerContainer";
import TextSpacer from "@/components/layouts/TextSpacer";
import H3Title from "@/components/Typography/H3Title";
import SmallButton from "@/components/SmallButton";
import H2Title from "@/components/Typography/H2Title";
import H4TitleNoMG from "@/components/Typography/H4TitleNoMG";
import H4Title from "@/components/Typography/H4Title";

const titleClasses = classNames(
  "text-light font-light",
  "xs:text-[16px] leading-[26px] ",
  "sm:text-[16px] leading-[26px]",
  "md:text-[17px] leading-[26px]",
  "lg:text-[17px] leading-[21px]",
  "xl:text-[17px] leading-[21px]",
  "2xl:text-[17px] leading-[23px]",
  "3xl:text-[19px] leading-[28px]",
  "4xl:text-[23px] leading-[33px]"
);
const semiTitleClasses = classNames(
  "text-light font-light",
  "xs:text-[16px] leading-[24px] ",
  "sm:text-[16px] leading-[24px]",
  "md:text-[17px] leading-[26px]",
  "lg:text-[17px] leading-[26px]",
  "xl:text-[17px] leading-[26px]",
  "2xl:text-[17px] leading-[26px]",
  "3xl:text-[19px] leading-[30px]",
  "4xl:text-[23px] leading-[30px]"
);

const singlePost = (props) => {
  return <img src={props.img} alt={props.alt} />;
};

const postsData = [
    {
        img: '/images/aktualnosci_1.png',
        alt: 'aktualnosci_1',
        title: 'Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo.',
        date: '10/04/2023'
    },
    {
        img: '/images/aktualnosci_2.png',
        alt: 'aktualnosci_1',
        title: 'Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo.',
        date: '10/04/2023'
    },
    {
        img: '/images/aktualnosci_3.png',
        alt: 'aktualnosci_1',
        title: 'Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo.',
        date: '10/04/2023'
    },
    {
        img: '/images/aktualnosci_4.png',
        alt: 'aktualnosci_1',
        title: 'Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo.',
        date: '10/04/2023'
    },
    {
        img: '/images/aktualnosci_5.png',
        alt: 'aktualnosci_1',
        title: 'Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo.',
        date: '10/04/2023'
    },
    {
        img: '/images/aktualnosci_6.png',
        alt: 'aktualnosci_1',
        title: 'Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo.',
        date: '10/04/2023'
    },
    {
        img: '/images/aktualnosci_7.png',
        alt: 'aktualnosci_1',
        title: 'Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo.',
        date: '10/04/2023'
    }

]


const AnotherPosts = () => {
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
  const gridClasses = classNames(            "grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 4xl:grid-cols-3  text-center text-light",
      "xs:gap-[40px]",
"sm:gap-[40px]",
"md:gap-[10px]",
"lg:gap-[10px]",
"xl:gap-[20px]",
"2xl:gap-[40px]",
"3xl:gap-[40px]",
"4xl:gap-[40px]"

    )
    const titleClasses = classNames('text-light font-bold text-left',
        'xs:text-[14px] xs:leading-[20px] ',
        'sm:text-[14px] sm:leading-[20px]',
        'md:text-[14px] md:leading-[20px]',
        'lg:text-[14px] lg:leading-[20px]',
        'xl:text-[14px] xl:leading-[20px]',
        '2xl:text-[16px] 2xl:leading-[21px]',
        '3xl:text-[20px] 3xl:leading-[26px]',
        '4xl:text-[20px] 4xl:leading-[26px]'
        );
  const dateClasses = classNames('text-light font-semibold text-left',
      'xs:text-[13px] xs:leading-[20px] xs:mt-[20px] xs:mb-[10px]',
        'sm:text-[13px] sm:leading-[20px] sm:mt-[20px] sm:mb-[10px]',
        'md:text-[13px] md:leading-[20px] md:mt-[20px] md:mb-[10px]',
          'lg:text-[13px] lg:leading-[20px] lg:mt-[20px] lg:mb-[10px]',
          'xl:text-[13px] xl:leading-[20px] xl:mt-[20px] xl:mb-[10px]',
            '2xl:text-[14px] 2xl:leading-[20px] 2xl:mt-[20px] 2xl:mb-[10px]',
            '3xl:text-[14px] 3xl:leading-[20px] 3xl:mt-[20px] 3xl:mb-[10px]',
            '4xl:text-[15px] 4xl:leading-[22px] 4xl:mt-[20px] 4xl:mb-[10px]'
      )

    const featuredImg = classNames('w-full  object-cover object-center',
        'xs:h-[280px]',
        'sm:h-[350px]',
        'md:h-[420px]',
        'lg:h-[342px]',
        'xl:h-[350px]',
        '2xl:h-[450px]',
        '3xl:h-[500px]',
        '4xl:h-[700px]',
        "xl:mb-[20px]",
        "2xl:mb-[40px]",
        "3xl:mb-[40px]",
        "4xl:mb-[40px]"
        )
const featuredPostContent = classNames('bg-accent xs:w-full sm:w-full  md:w-full lg:w-full w-3/10 flex flex-col justify-center',

    "xl:mb-[20px]",
    "2xl:mb-[40px]",
    "3xl:mb-[40px]",
    "4xl:mb-[40px]"
    )
const h4Classes = classNames(
    'text-light font-light',
    'xs:text-[18px] xs:leading-[26px]  xs:mb-[30px]',
    'sm:text-[18px] sm:leading-[26px] sm:mb-[30px]',
    'md:text-[24px] md:leading-[36px] md:mb-[30px]',
    'lg:text-[26px] lg:leading-[39px] lg:mb-[30px]',
    'xl:text-[20px] xl:leading-[31px] xl:mb-[30px]',
    '2xl:text-[23px] 2xl:leading-[35px] 2xl:mb-[30px]',
    '3xl:text-[30px] 3xl:leading-[45px] 3xl:mb-[30px]',
    '4xl:text-[40px] 4xl:leading-[60px] 4xl:mb-[30px]',

)    
    const randomPosts = postsData
  .sort(() => 0.5 - Math.random()) // Losowe sortowanie tablicy
  .slice(0, 3); // Wybierz pierwsze trzy elementy
    return (
    <div className={howWedoItClasses} id={"section-1"}>
      <Container>
       <h4 className={h4Classes}>Inne Artykuły</h4>
        <div
          className={gridClasses}
        >

            {randomPosts.map((post) => {
                return (
                   <a className={'single_post_item'} href={'#'}>
                       <div className={'single_post_item_img'}>
                           <img className={'go_button nomix'} src={'/assets/button_post.svg'} alt={'go_Button'} />
                            <img className={'thumb '} src={post.img} alt={post.alt} />
                       </div>

                       <div className={dateClasses}>{post.date}</div>
                            <h3 className={titleClasses}>{post.title}</h3>



                   </a>

                )
            })}



        </div>
      </Container>
    </div>
  );
};
export default AnotherPosts;
