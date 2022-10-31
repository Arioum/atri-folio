import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { usenavSectionCb, usenavbarContainerCb, useLogoCb, useNavItemContainerCb, useHeroSectionCb, useHeroContainerCb, useHeroHeadingContainerCb, useHeroCb, useProjectSectionCb, useProjectSectionContainerCb, useProjectItemsContainerCb, useProjectItem1Cb, useProjectPreviewImageCb, useProjectItemInfoCb, useProjectItemInfoContainerCb, useViewProject1Cb, useProjectItemInfoHeaderCb, useFlex14Cb, useFlex13Cb, useFlex12Cb, useFlex11Cb, useDiv15Cb, useDiv16Cb, useFlex18Cb, useFlex17Cb, useFlex16Cb, useFlex15Cb, useDiv17Cb, useProjectPreviewImage3Cb, useBrowseProjectContainerCb, useAboutMeSectionCb, useAboutMeSectionContainerCb, useFlex21Cb, useFlex22Cb, useFlex23Cb, useDiv21Cb, useSectionDivider1Cb, useSectionDivider2Cb, useSectionDivider3Cb, usebrandNameCb, useLink13Cb, usePortfolioCb, useLink15Cb, useButton3Cb, useImage8Cb, useTextBox2Cb, useTextBox4Cb, useHeroBodyContainerCb, useProjectsHeadingCb, useImage1Cb, useLinkViewProject1Cb, useProjectInfoNameCb, useProjectInfoHeaderCb, useProjectInfoDescCb, useTextBox10Cb, useTextBox11Cb, useTextBox12Cb, useLinkViewProject2Cb, useImage5Cb, useTextBox13Cb, useTextBox14Cb, useTextBox15Cb, useLinkViewProject3Cb, useImage4Cb, useImage6Cb, useBtnBrowsePortfolioCb, useTextBox17Cb, useTextBox18Cb, useLink11Cb, useImage3Cb, useImage7Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const navSectionProps = useStore((state)=>state["Home"]["navSection"]);
const navSectionIoProps = useIoStore((state)=>state["Home"]["navSection"]);
const navSectionCb = usenavSectionCb()
const navbarContainerProps = useStore((state)=>state["Home"]["navbarContainer"]);
const navbarContainerIoProps = useIoStore((state)=>state["Home"]["navbarContainer"]);
const navbarContainerCb = usenavbarContainerCb()
const LogoProps = useStore((state)=>state["Home"]["Logo"]);
const LogoIoProps = useIoStore((state)=>state["Home"]["Logo"]);
const LogoCb = useLogoCb()
const NavItemContainerProps = useStore((state)=>state["Home"]["NavItemContainer"]);
const NavItemContainerIoProps = useIoStore((state)=>state["Home"]["NavItemContainer"]);
const NavItemContainerCb = useNavItemContainerCb()
const HeroSectionProps = useStore((state)=>state["Home"]["HeroSection"]);
const HeroSectionIoProps = useIoStore((state)=>state["Home"]["HeroSection"]);
const HeroSectionCb = useHeroSectionCb()
const HeroContainerProps = useStore((state)=>state["Home"]["HeroContainer"]);
const HeroContainerIoProps = useIoStore((state)=>state["Home"]["HeroContainer"]);
const HeroContainerCb = useHeroContainerCb()
const HeroHeadingContainerProps = useStore((state)=>state["Home"]["HeroHeadingContainer"]);
const HeroHeadingContainerIoProps = useIoStore((state)=>state["Home"]["HeroHeadingContainer"]);
const HeroHeadingContainerCb = useHeroHeadingContainerCb()
const HeroProps = useStore((state)=>state["Home"]["Hero"]);
const HeroIoProps = useIoStore((state)=>state["Home"]["Hero"]);
const HeroCb = useHeroCb()
const ProjectSectionProps = useStore((state)=>state["Home"]["ProjectSection"]);
const ProjectSectionIoProps = useIoStore((state)=>state["Home"]["ProjectSection"]);
const ProjectSectionCb = useProjectSectionCb()
const ProjectSectionContainerProps = useStore((state)=>state["Home"]["ProjectSectionContainer"]);
const ProjectSectionContainerIoProps = useIoStore((state)=>state["Home"]["ProjectSectionContainer"]);
const ProjectSectionContainerCb = useProjectSectionContainerCb()
const ProjectItemsContainerProps = useStore((state)=>state["Home"]["ProjectItemsContainer"]);
const ProjectItemsContainerIoProps = useIoStore((state)=>state["Home"]["ProjectItemsContainer"]);
const ProjectItemsContainerCb = useProjectItemsContainerCb()
const ProjectItem1Props = useStore((state)=>state["Home"]["ProjectItem1"]);
const ProjectItem1IoProps = useIoStore((state)=>state["Home"]["ProjectItem1"]);
const ProjectItem1Cb = useProjectItem1Cb()
const ProjectPreviewImageProps = useStore((state)=>state["Home"]["ProjectPreviewImage"]);
const ProjectPreviewImageIoProps = useIoStore((state)=>state["Home"]["ProjectPreviewImage"]);
const ProjectPreviewImageCb = useProjectPreviewImageCb()
const ProjectItemInfoProps = useStore((state)=>state["Home"]["ProjectItemInfo"]);
const ProjectItemInfoIoProps = useIoStore((state)=>state["Home"]["ProjectItemInfo"]);
const ProjectItemInfoCb = useProjectItemInfoCb()
const ProjectItemInfoContainerProps = useStore((state)=>state["Home"]["ProjectItemInfoContainer"]);
const ProjectItemInfoContainerIoProps = useIoStore((state)=>state["Home"]["ProjectItemInfoContainer"]);
const ProjectItemInfoContainerCb = useProjectItemInfoContainerCb()
const ViewProject1Props = useStore((state)=>state["Home"]["ViewProject1"]);
const ViewProject1IoProps = useIoStore((state)=>state["Home"]["ViewProject1"]);
const ViewProject1Cb = useViewProject1Cb()
const ProjectItemInfoHeaderProps = useStore((state)=>state["Home"]["ProjectItemInfoHeader"]);
const ProjectItemInfoHeaderIoProps = useIoStore((state)=>state["Home"]["ProjectItemInfoHeader"]);
const ProjectItemInfoHeaderCb = useProjectItemInfoHeaderCb()
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Flex13Props = useStore((state)=>state["Home"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["Home"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Flex12Props = useStore((state)=>state["Home"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Home"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Flex11Props = useStore((state)=>state["Home"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Home"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Div15Props = useStore((state)=>state["Home"]["Div15"]);
const Div15IoProps = useIoStore((state)=>state["Home"]["Div15"]);
const Div15Cb = useDiv15Cb()
const Div16Props = useStore((state)=>state["Home"]["Div16"]);
const Div16IoProps = useIoStore((state)=>state["Home"]["Div16"]);
const Div16Cb = useDiv16Cb()
const Flex18Props = useStore((state)=>state["Home"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["Home"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const Flex17Props = useStore((state)=>state["Home"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Home"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Flex16Props = useStore((state)=>state["Home"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Home"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Flex15Props = useStore((state)=>state["Home"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Home"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Div17Props = useStore((state)=>state["Home"]["Div17"]);
const Div17IoProps = useIoStore((state)=>state["Home"]["Div17"]);
const Div17Cb = useDiv17Cb()
const ProjectPreviewImage3Props = useStore((state)=>state["Home"]["ProjectPreviewImage3"]);
const ProjectPreviewImage3IoProps = useIoStore((state)=>state["Home"]["ProjectPreviewImage3"]);
const ProjectPreviewImage3Cb = useProjectPreviewImage3Cb()
const BrowseProjectContainerProps = useStore((state)=>state["Home"]["BrowseProjectContainer"]);
const BrowseProjectContainerIoProps = useIoStore((state)=>state["Home"]["BrowseProjectContainer"]);
const BrowseProjectContainerCb = useBrowseProjectContainerCb()
const AboutMeSectionProps = useStore((state)=>state["Home"]["AboutMeSection"]);
const AboutMeSectionIoProps = useIoStore((state)=>state["Home"]["AboutMeSection"]);
const AboutMeSectionCb = useAboutMeSectionCb()
const AboutMeSectionContainerProps = useStore((state)=>state["Home"]["AboutMeSectionContainer"]);
const AboutMeSectionContainerIoProps = useIoStore((state)=>state["Home"]["AboutMeSectionContainer"]);
const AboutMeSectionContainerCb = useAboutMeSectionContainerCb()
const Flex21Props = useStore((state)=>state["Home"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["Home"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const Flex22Props = useStore((state)=>state["Home"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["Home"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const Flex23Props = useStore((state)=>state["Home"]["Flex23"]);
const Flex23IoProps = useIoStore((state)=>state["Home"]["Flex23"]);
const Flex23Cb = useFlex23Cb()
const Div21Props = useStore((state)=>state["Home"]["Div21"]);
const Div21IoProps = useIoStore((state)=>state["Home"]["Div21"]);
const Div21Cb = useDiv21Cb()
const SectionDivider1Props = useStore((state)=>state["Home"]["SectionDivider1"]);
const SectionDivider1IoProps = useIoStore((state)=>state["Home"]["SectionDivider1"]);
const SectionDivider1Cb = useSectionDivider1Cb()
const SectionDivider2Props = useStore((state)=>state["Home"]["SectionDivider2"]);
const SectionDivider2IoProps = useIoStore((state)=>state["Home"]["SectionDivider2"]);
const SectionDivider2Cb = useSectionDivider2Cb()
const SectionDivider3Props = useStore((state)=>state["Home"]["SectionDivider3"]);
const SectionDivider3IoProps = useIoStore((state)=>state["Home"]["SectionDivider3"]);
const SectionDivider3Cb = useSectionDivider3Cb()
const brandNameProps = useStore((state)=>state["Home"]["brandName"]);
const brandNameIoProps = useIoStore((state)=>state["Home"]["brandName"]);
const brandNameCb = usebrandNameCb()
const Link13Props = useStore((state)=>state["Home"]["Link13"]);
const Link13IoProps = useIoStore((state)=>state["Home"]["Link13"]);
const Link13Cb = useLink13Cb()
const PortfolioProps = useStore((state)=>state["Home"]["Portfolio"]);
const PortfolioIoProps = useIoStore((state)=>state["Home"]["Portfolio"]);
const PortfolioCb = usePortfolioCb()
const Link15Props = useStore((state)=>state["Home"]["Link15"]);
const Link15IoProps = useIoStore((state)=>state["Home"]["Link15"]);
const Link15Cb = useLink15Cb()
const Button3Props = useStore((state)=>state["Home"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["Home"]["Button3"]);
const Button3Cb = useButton3Cb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const TextBox2Props = useStore((state)=>state["Home"]["TextBox2"]);
const TextBox2IoProps = useIoStore((state)=>state["Home"]["TextBox2"]);
const TextBox2Cb = useTextBox2Cb()
const TextBox4Props = useStore((state)=>state["Home"]["TextBox4"]);
const TextBox4IoProps = useIoStore((state)=>state["Home"]["TextBox4"]);
const TextBox4Cb = useTextBox4Cb()
const HeroBodyContainerProps = useStore((state)=>state["Home"]["HeroBodyContainer"]);
const HeroBodyContainerIoProps = useIoStore((state)=>state["Home"]["HeroBodyContainer"]);
const HeroBodyContainerCb = useHeroBodyContainerCb()
const ProjectsHeadingProps = useStore((state)=>state["Home"]["ProjectsHeading"]);
const ProjectsHeadingIoProps = useIoStore((state)=>state["Home"]["ProjectsHeading"]);
const ProjectsHeadingCb = useProjectsHeadingCb()
const Image1Props = useStore((state)=>state["Home"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Home"]["Image1"]);
const Image1Cb = useImage1Cb()
const LinkViewProject1Props = useStore((state)=>state["Home"]["LinkViewProject1"]);
const LinkViewProject1IoProps = useIoStore((state)=>state["Home"]["LinkViewProject1"]);
const LinkViewProject1Cb = useLinkViewProject1Cb()
const ProjectInfoNameProps = useStore((state)=>state["Home"]["ProjectInfoName"]);
const ProjectInfoNameIoProps = useIoStore((state)=>state["Home"]["ProjectInfoName"]);
const ProjectInfoNameCb = useProjectInfoNameCb()
const ProjectInfoHeaderProps = useStore((state)=>state["Home"]["ProjectInfoHeader"]);
const ProjectInfoHeaderIoProps = useIoStore((state)=>state["Home"]["ProjectInfoHeader"]);
const ProjectInfoHeaderCb = useProjectInfoHeaderCb()
const ProjectInfoDescProps = useStore((state)=>state["Home"]["ProjectInfoDesc"]);
const ProjectInfoDescIoProps = useIoStore((state)=>state["Home"]["ProjectInfoDesc"]);
const ProjectInfoDescCb = useProjectInfoDescCb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const LinkViewProject2Props = useStore((state)=>state["Home"]["LinkViewProject2"]);
const LinkViewProject2IoProps = useIoStore((state)=>state["Home"]["LinkViewProject2"]);
const LinkViewProject2Cb = useLinkViewProject2Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const LinkViewProject3Props = useStore((state)=>state["Home"]["LinkViewProject3"]);
const LinkViewProject3IoProps = useIoStore((state)=>state["Home"]["LinkViewProject3"]);
const LinkViewProject3Cb = useLinkViewProject3Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const BtnBrowsePortfolioProps = useStore((state)=>state["Home"]["BtnBrowsePortfolio"]);
const BtnBrowsePortfolioIoProps = useIoStore((state)=>state["Home"]["BtnBrowsePortfolio"]);
const BtnBrowsePortfolioCb = useBtnBrowsePortfolioCb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const Link11Props = useStore((state)=>state["Home"]["Link11"]);
const Link11IoProps = useIoStore((state)=>state["Home"]["Link11"]);
const Link11Cb = useLink11Cb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const Image7Props = useStore((state)=>state["Home"]["Image7"]);
const Image7IoProps = useIoStore((state)=>state["Home"]["Image7"]);
const Image7Cb = useImage7Cb()

  return (<>
  <Div className="p-Home navSection bpt" {...navSectionProps} {...navSectionCb} {...navSectionIoProps}>
<Flex className="p-Home navbarContainer bpt" {...navbarContainerProps} {...navbarContainerCb} {...navbarContainerIoProps}>
<Div className="p-Home Logo bpt" {...LogoProps} {...LogoCb} {...LogoIoProps}>
<TextBox className="p-Home brandName bpt" {...brandNameProps} {...brandNameCb} {...brandNameIoProps}/>
</Div>
<Flex className="p-Home NavItemContainer bpt" {...NavItemContainerProps} {...NavItemContainerCb} {...NavItemContainerIoProps}>
<Link className="p-Home Link13 bpt" {...Link13Props} {...Link13Cb} {...Link13IoProps}/>
<Link className="p-Home Portfolio bpt" {...PortfolioProps} {...PortfolioCb} {...PortfolioIoProps}/>
<Link className="p-Home Link15 bpt" {...Link15Props} {...Link15Cb} {...Link15IoProps}/>
<Button className="p-Home Button3 bpt" {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
<Image className="p-Home Image8 bpt" {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home HeroSection bpt" {...HeroSectionProps} {...HeroSectionCb} {...HeroSectionIoProps}>
<Flex className="p-Home HeroContainer bpt" {...HeroContainerProps} {...HeroContainerCb} {...HeroContainerIoProps}>
<Div className="p-Home HeroHeadingContainer bpt" {...HeroHeadingContainerProps} {...HeroHeadingContainerCb} {...HeroHeadingContainerIoProps}>
<TextBox className="p-Home TextBox2 bpt" {...TextBox2Props} {...TextBox2Cb} {...TextBox2IoProps}/>
<TextBox className="p-Home TextBox4 bpt" {...TextBox4Props} {...TextBox4Cb} {...TextBox4IoProps}/>
</Div>
<Div className="p-Home Hero bpt" {...HeroProps} {...HeroCb} {...HeroIoProps}>
<TextBox className="p-Home HeroBodyContainer bpt" {...HeroBodyContainerProps} {...HeroBodyContainerCb} {...HeroBodyContainerIoProps}/>
</Div>
</Flex>
</Div>
<Div className="p-Home SectionDivider1 bpt" {...SectionDivider1Props} {...SectionDivider1Cb} {...SectionDivider1IoProps}/>
<Div className="p-Home ProjectSection bpt" {...ProjectSectionProps} {...ProjectSectionCb} {...ProjectSectionIoProps}>
<Div className="p-Home ProjectSectionContainer bpt" {...ProjectSectionContainerProps} {...ProjectSectionContainerCb} {...ProjectSectionContainerIoProps}>
<TextBox className="p-Home ProjectsHeading bpt" {...ProjectsHeadingProps} {...ProjectsHeadingCb} {...ProjectsHeadingIoProps}/>
<Flex className="p-Home ProjectItemsContainer bpt" {...ProjectItemsContainerProps} {...ProjectItemsContainerCb} {...ProjectItemsContainerIoProps}>
<Flex className="p-Home ProjectItem1 bpt" {...ProjectItem1Props} {...ProjectItem1Cb} {...ProjectItem1IoProps}>
<Flex className="p-Home ProjectItemInfo bpt" {...ProjectItemInfoProps} {...ProjectItemInfoCb} {...ProjectItemInfoIoProps}>
<Flex className="p-Home ProjectItemInfoContainer bpt" {...ProjectItemInfoContainerProps} {...ProjectItemInfoContainerCb} {...ProjectItemInfoContainerIoProps}>
<Flex className="p-Home ProjectItemInfoHeader bpt" {...ProjectItemInfoHeaderProps} {...ProjectItemInfoHeaderCb} {...ProjectItemInfoHeaderIoProps}>
<TextBox className="p-Home ProjectInfoName bpt" {...ProjectInfoNameProps} {...ProjectInfoNameCb} {...ProjectInfoNameIoProps}/>
<TextBox className="p-Home ProjectInfoHeader bpt" {...ProjectInfoHeaderProps} {...ProjectInfoHeaderCb} {...ProjectInfoHeaderIoProps}/>
<TextBox className="p-Home ProjectInfoDesc bpt" {...ProjectInfoDescProps} {...ProjectInfoDescCb} {...ProjectInfoDescIoProps}/>
</Flex>
<Div className="p-Home ViewProject1 bpt" {...ViewProject1Props} {...ViewProject1Cb} {...ViewProject1IoProps}>
<Link className="p-Home LinkViewProject1 bpt" {...LinkViewProject1Props} {...LinkViewProject1Cb} {...LinkViewProject1IoProps}/>
</Div>
</Flex>
</Flex>
<Div className="p-Home ProjectPreviewImage bpt" {...ProjectPreviewImageProps} {...ProjectPreviewImageCb} {...ProjectPreviewImageIoProps}>
<Image className="p-Home Image1 bpt" {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Flex className="p-Home Flex13 bpt" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<Flex className="p-Home Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Flex className="p-Home Flex11 bpt" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<TextBox className="p-Home TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
<TextBox className="p-Home TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<TextBox className="p-Home TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
</Flex>
<Div className="p-Home Div15 bpt" {...Div15Props} {...Div15Cb} {...Div15IoProps}>
<Link className="p-Home LinkViewProject2 bpt" {...LinkViewProject2Props} {...LinkViewProject2Cb} {...LinkViewProject2IoProps}/>
</Div>
</Flex>
</Flex>
<Div className="p-Home Div16 bpt" {...Div16Props} {...Div16Cb} {...Div16IoProps}>
<Image className="p-Home Image5 bpt" {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex18 bpt" {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<Flex className="p-Home Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<Flex className="p-Home Flex16 bpt" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Flex className="p-Home Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<TextBox className="p-Home TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
<TextBox className="p-Home TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<TextBox className="p-Home TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
</Flex>
<Div className="p-Home Div17 bpt" {...Div17Props} {...Div17Cb} {...Div17IoProps}>
<Link className="p-Home LinkViewProject3 bpt" {...LinkViewProject3Props} {...LinkViewProject3Cb} {...LinkViewProject3IoProps}/>
<Image className="p-Home Image4 bpt" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
</Div>
</Flex>
</Flex>
<Div className="p-Home ProjectPreviewImage3 bpt" {...ProjectPreviewImage3Props} {...ProjectPreviewImage3Cb} {...ProjectPreviewImage3IoProps}>
<Image className="p-Home Image6 bpt" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home BrowseProjectContainer bpt" {...BrowseProjectContainerProps} {...BrowseProjectContainerCb} {...BrowseProjectContainerIoProps}>
<TextBox className="p-Home BtnBrowsePortfolio bpt" {...BtnBrowsePortfolioProps} {...BtnBrowsePortfolioCb} {...BtnBrowsePortfolioIoProps}/>
</Flex>
</Div>
</Div>
<Div className="p-Home SectionDivider2 bpt" {...SectionDivider2Props} {...SectionDivider2Cb} {...SectionDivider2IoProps}/>
<Div className="p-Home AboutMeSection bpt" {...AboutMeSectionProps} {...AboutMeSectionCb} {...AboutMeSectionIoProps}>
<Flex className="p-Home AboutMeSectionContainer bpt" {...AboutMeSectionContainerProps} {...AboutMeSectionContainerCb} {...AboutMeSectionContainerIoProps}>
<Flex className="p-Home Flex21 bpt" {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<Flex className="p-Home Flex22 bpt" {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<TextBox className="p-Home TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
<TextBox className="p-Home TextBox18 bpt" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
</Flex>
<Flex className="p-Home Flex23 bpt" {...Flex23Props} {...Flex23Cb} {...Flex23IoProps}>
<Link className="p-Home Link11 bpt" {...Link11Props} {...Link11Cb} {...Link11IoProps}/>
<Image className="p-Home Image3 bpt" {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
</Flex>
</Flex>
<Div className="p-Home Div21 bpt" {...Div21Props} {...Div21Cb} {...Div21IoProps}>
<Image className="p-Home Image7 bpt" {...Image7Props} {...Image7Cb} {...Image7IoProps}/>
</Div>
</Flex>
</Div>
<Div className="p-Home SectionDivider3 bpt" {...SectionDivider3Props} {...SectionDivider3Cb} {...SectionDivider3IoProps}/>
  </>);
}
