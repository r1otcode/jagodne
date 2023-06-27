import H2TitleWpis from "@/components/Typography/H2TitleWpis";
import Paragraph from "@/components/Typography/Paragraph";
import TextSpacer from "@/components/spacers/textSpacer";
import classNames from "classnames";
import H3TitleWpis from "@/components/Typography/H3TitleWpis";
import {AnimatePresence, motion} from "framer-motion";

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
    return (


        <div  className={SinglePostContentClasses}>
          <H2TitleWpis>H2 Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</H2TitleWpis>
          <TextSpacer/>
          <Paragraph>Paragraph – cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum.
            Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.</Paragraph>
            <TextSpacer/>
            <H3TitleWpis>H3 Vestibulum id ligula porta felis euismod</H3TitleWpis>
        </div>
        
    );
}
export default SinglePostContent;