import Logo from "@/components/logo";
import classNames from "classnames";
import PageTitle from "@/components/Typography/PageTitle";
import Container from "@/components/layouts/container";
import Button from "@/components/Button";
import Menu from "@/components/menu";
import LangSwitcher from "@/components/LangSwitcher";

const menuHeader = classNames( 'flex', 'justify-center', 'items-center', 'w-full',
    'xs:p-5',
    'sm:p-5',
    'md:p-[30px]',
    'lg:p-[30px]',
    'xl:p-5',
    '2xl:p-[30px]',
    '3xl:p-[40px]',
    '4xl:p-[40px]',
)
const mainHeader = classNames('w-full', 'h-[100vh]',

    'xs:pt-[160px]',
    'sm:pt-[227px]',
    'md:pt-[225px]',
    'lg:pt-[324px]',
    'xl:pt-[187px]',
    '2xl:pt-[221px]',
    '3xl:pt-[270px]',
    '4xl:pt-[341px]',
    );

const buttonsContainer = classNames('flex', 'gap-[10px]',
    'xs:mt-[30px]',
    'sm:mt-[40px]',
    'md:mt-[40px]',
    'lg:mt-[50px]',
    'xl:mt-[40px]',
    '2xl:mt-[60px]',
    '3xl:mt-[70px]',
    '4xl:mt-[100px]',



    )
const menuButtonWrapper = classNames(  'inline-flex', 'items-center','xs:top-[20px] xs:right-[20px]',
    'sm:top-[20px] sm:right-[20px]',
    'md:top-[20px] md:right-[20px] ',
    'lg:top-[30px] lg:right-[30px]',
    'xl:top-[30px] xl:right-[30px]',
    '2xl:top-[20px] 2xL:right-[20px]',
    '3xl:top-[30px] 3xl:right-[30px]',
    '4xl:top-[40px] 4xl:right-[40px]',
    'fixed',
    'hover:z-[50]',
    )
const leftMenuWrapper = classNames( 'inline-flex', 'items-center','xs:top-[34px] xs:left-[20px]',
'sm:top-[34px] sm:left-[20px]',
    'md:top-[20px] md:left-[20px] ',
    'lg:top-[30px] lg:left-[30px]',
    'xl:top-[30px] xl:left-[30px]',
    '2xl:top-[20px] 2xL:left-[20px]',
    '3xl:top-[30px] 3xl:left-[30px]',
    '4xl:top-[40px] 4xl:left-[40px]',
    'fixed',
    'hover:z-[50]', );
const HomepageHeader = () => {

    return (
        <div className='relative'>
        <div className={menuHeader}>
            <div className={leftMenuWrapper}>
                <LangSwitcher mobile={true} />
            </div>

            <Logo />

            <div className={menuButtonWrapper}>
                <LangSwitcher />

                <Menu/>
            </div>

        </div>

            <div className={mainHeader}>

            <Container>
                <div className={'relative'}>
                <div className={'border-[#505050] border-l pl-[40px]'}>
                    <PageTitle>Jagodne – satysfakcja i sukces mierzone w m2.</PageTitle>
                </div>
                <div className={buttonsContainer}>
                    <Button>Dowiedz się więcej</Button>
                    <Button dark={true}>Poznajmy się</Button>
                </div>
                </div>

            </Container>
                 <div className="circle-bg"><img src={'/assets/circle-blue-gradient.svg'}/></div>


            </div>

        </div>
    )
}

export default HomepageHeader