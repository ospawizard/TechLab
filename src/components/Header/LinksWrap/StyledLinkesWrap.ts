import styled from "styled-components";

import { StyledContainer } from "../../../styledConstants";
import { backgroundColor, colors, hoverBtnColor } from "../../../styledConstantsColors";
import { Desktop1920, Desktop1440 } from "../../../styledConstantsFonts";

import { Link } from "react-router-dom";

export const Wrapper = styled.div<{ $isClicked?: boolean }>`
position:absolute;
left:0;
top:0;
visibility:${props => props.$isClicked ? 'visible' : 'hidden'};
transform:${props => props.$isClicked ? 'translateY(77px)' : 'translateY(0px)'};
opacity:${props => props.$isClicked ? '1' : '0'};
width:100%;
height:280px;
background:${backgroundColor.lightBlack};
transition: all 0.5s;

@media(max-width:1440px){
    transform:${props => props.$isClicked ? 'translateY(73px)' : 'translateY(0px)'};
}
`

export const Container = styled(StyledContainer)`
margin: 0 auto;
padding-top: 38px;
display:flex;
gap:200px;
`
export const StyledSectionWrap = styled.div`
display:flex;
gap:40px;
`

export const LinkSection = styled(Link)`
display:block;
color:${colors.neutral.white};
font-size: 24px;
font-weight: 600;
margin-bottom:18px;
transition: all 0.5s;

&:hover{
    color:${hoverBtnColor.darkGray}
}

@media(max-width:1440px){
    font-size:${Desktop1440.headings.h5.size};
    font-weight:${Desktop1440.headings.h5.weight};
}
`

export const SectionTitle = styled.h5`
display:block;
color:${colors.neutral.white};
font-size: 16px;
font-weight: 500;
transition: all 0.5s;

@media(max-width:1440px){
    font-size:${Desktop1440.links.bodyLink.size};
    font-weight:${Desktop1440.links.bodyLink.weight};
}
`
export const StyledDirWrapper = styled.div`
&:hover #linkWrap{
opacity:1;
visibility:visible;
}
&:hover h5{
    color:${hoverBtnColor.darkGray}
}
&:hover svg{
    opacity:1;
}
`
export const StyledLink = styled(Link)`
display:flex;
gap:10px;
margin-bottom:18px;
& svg{
    transition: all 0.5s;
    width:20px;
    height:20px;
    opacity:0;
    fill:${hoverBtnColor.darkGray};
}
`

export const StyledDirLinksWrap = styled.div`
transition: all 0.5s;
opacity:0;
visibility:hidden;
position:absolute;
top:0;
left:173px;
width:168px;
`

export const StyledSecLink = styled(Link)`
display:block;
color:${colors.neutral.white};
font-size: 16px;
font-weight: 500;
transition: all 0.5s;
margin-bottom:18px;

&:last-of-type{
    margin-bottom:0px;
}

@media(max-width:1440px){
    font-size:${Desktop1440.links.bodyLink.size};
    font-weight:${Desktop1440.links.bodyLink.weight};
}
&:hover{
    color:${hoverBtnColor.darkGray}
}
`