import H2TitleWpis from "@/components/Typography/H2TitleWpis";
import Paragraph from "@/components/Typography/Paragraph_light";
import TextSpacer from "@/components/spacers/textSpacer";
import classNames from "classnames";
import H3TitleWpis from "@/components/Typography/H3TitleWpis";
import {AnimatePresence, motion} from "framer-motion";
import LinkWrapper from "@/components/LinkWrapper";
import LinkWpis from "@/components/Typography/LinkWpis";
import H4TitleWpis from "@/components/Typography/H4TitleWpis";
import BorderedContainer from "../BorderedContainer";
import BorderedContainerInline from "../BorderedContainerInline";

const SinglePostContent = () => {
    const SinglePostContentClasses = classNames('z-10', 'mx-auto',
        'xs:w-[280px]',
        'sm:w-[350px]',
        'md:w-[420px]',
        'lg:w-[598px]',
        'xl:w-[796px]',
        '2xl:w-[796px]',
        '3xl:w-[796px]',
        '4xl:w-[796px]',

       

        );
        const videoClasses = classNames(

            "object-cover",
            " xs:h-[240px]",
            " sm:h-[260px]",
            " md:h-[350px]",
            " lg:h-[350px]",
            " xl:h-[420px]",
            " 2xl:h-[490px]",
            " 3xl:h-[600px]",
            " 4xl:h-[700px]"
        );
    return (


        <div  className={SinglePostContentClasses}>
          <H2TitleWpis>H2 Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</H2TitleWpis>
          <TextSpacer/>
          <Paragraph>Paragraph – cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum.
            Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.</Paragraph>
            <TextSpacer/>
            <H3TitleWpis>H3 Vestibulum id ligula porta felis euismod</H3TitleWpis>
            <TextSpacer/>
            <Paragraph>Paragraph – Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum.</Paragraph>
            <TextSpacer/>
            <LinkWpis link="link">Link – purus sit amet fermentum </LinkWpis>
            <TextSpacer/>
            <Paragraph>Paragraph – nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.</Paragraph>
            <TextSpacer/>
            <H4TitleWpis>H4 Vestibulum id ligula porta felis euismod</H4TitleWpis>
            <TextSpacer/>
            <Paragraph>Paragraph – Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</Paragraph>
            <TextSpacer/>
            <BorderedContainer>
            <video width="100%" className={videoClasses} autoPlay muted loop>
                    <source src="/assets/timelapse-1080_resized.mp4" type="video/mp4" />
                </video>
                </BorderedContainer>
                <BorderedContainer>
                <Paragraph>
               
                Krótki opis filmu powyżej (caption) – maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus.
               
                </Paragraph>
                
                </BorderedContainer>  
            <TextSpacer/>
            <Paragraph>Paragraph – Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</Paragraph>
            <TextSpacer/>
            <BorderedContainer>
            <video width="100%" className={videoClasses} autoPlay muted loop>
                    <source src="/assets/timelapse-1080_resized.mp4" type="video/mp4" />
                </video>
                </BorderedContainer>
                <BorderedContainer>
                <Paragraph>
               
                Krótki opis filmu powyżej (caption) – maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus.
               
                </Paragraph>
                
                </BorderedContainer> 
                <TextSpacer/> 
            <Paragraph>Paragraph – Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</Paragraph>
        </div>
        
    );
}
export default SinglePostContent;