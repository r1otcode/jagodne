import React from "react";
import useSWR from "swr";
import MemberImage from "./teamMember/memberImage";
import MemberPosition from "./teamMember/memberPosition";
import MemberTitle from "./teamMember/memberTitle";
import classNames from "classnames";
interface Member {
  img: string;
  name: string;
  position: string;
}
const teamClasses = classNames(
  "mx-[40px] flex flex-row flex-wrap justify-between items-start content-start gap-y-[50px] gap-x-[20xp]",
  "xs:mx-[40px] ",
  "sm:mx-[43px] ",
  "md:mx-[9.37vw]",
  "lg:mx-[9.37vw] ",
  "xl:mx-[9.37vw] ",
  "2xl:mx-[9.37vw]",
  "3xl:mx-[13.37vw] ",
  "4xl:mx-auto  4xl:justify-evenly 4xl:max-w-[1800px] "
);
const singleClasses = classNames(
  "",
  "xs:w-[50%] xs:last:max-w-full xs:mx-auto",
  "sm:w-[50%] sm:last:max-w-full sm:mx-auto",
  "md:w-[50%] md:last:max-w-full md:mx-auto",
  "lg:w-[50%] lg:last:w-full lg:last:max-w-full",
  "xl:w-[33.33%] xl:last:w-[33.33%] xl:last:max-w[33.33%]",
  "2xl:w-[33.33%] 2xl:last:w-[33.33%] 2xl:last:max-w[33.33%]",
  "3xl:w-[33.33%] 3xl:last:w-[33.33%] 3xl:last:max-w[33.33%]",
  "4xl:w-[25%] 4xl:last:w-[25%] 4xl:last:max-w[25%]"
);
const headingClasses = classNames(
  "font-light text-light text-center ",
  "xs:text-xsmall xs:my-[120px]",
  "sm:text-small sm:my-[120px]",
  "md:text-medium md:my-[120px]",
  "lg:text-large lg:my-[160px]",
  "xl:text-large xl:my-[160px]",
  "2xl:text-2extralarge 2xl:my-[160px]",
  "3xl:text-3extralarge 3xl:my-[160px]",
  "4xl:text-3extralarge 4xl:my-[160px]"
);
const TeamFlex = () => {
  const { data: teamMembers, error } = useSWR(
    "/api/team-members",
    async (url) => {
      const response = await fetch(url);
      return await response.json();

    }
  );

  if (error) {
    return <div>Wystąpił błąd podczas pobierania danych.</div>;
  }

  if (!teamMembers) {
    return <div>Ładowanie...</div>;
  }
  return (
    <>
      <h3 className={headingClasses}>Poznaj zespół</h3>
      <div className={teamClasses}>
        {teamMembers.map((member: Member) => (
          <div className={singleClasses + " team_member"} key={member.name}>
            <MemberImage src={member.img} alt="1" />
            <MemberTitle>{member.name}</MemberTitle>
            <MemberPosition>{member.position}</MemberPosition>
          </div>
        ))}
      </div>
    </>
  );
};
export default TeamFlex