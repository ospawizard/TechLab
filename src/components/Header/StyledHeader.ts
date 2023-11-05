import styled from "styled-components";
import { brandColors, backgroundColors, desktopSizes, weights, containerParams } from "../../styledConstants";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
max-width: ${containerParams.width};
margin: 0 auto;
padding: 0 ${containerParams.padding};
display:flex;
justify-content:space-between;
align-items:center;
`

export const StyledHeaderWrap = styled.header`
position:fixed;
top:0;
left:0;
width:100%;
background: ${backgroundColors.black};
padding:26px 0px;
z-index:4;
`

export const StyledLogoWrap = styled(Link)`
display:flex;
align-items:center;
gap:8px;

& svg{
    fill:${brandColors.green};
}
&:hover svg{
    fill:${brandColors.yellow};
    transition:all 0.5s;
}

&:hover h3{
    color:${brandColors.yellow};
    transition:all 0.5s;
}
`

export const StyledName = styled.h3`
margin:0;
font-size:${desktopSizes.titleSizes.T3};
font-weight:${weights.semibold};
color:${brandColors.green}
`