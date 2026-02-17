import { styled } from "@mui/material/styles";
import Avatar from "../../../../../src/assets/images/Profile_DB.jpg";

    const Hero = () => {

        const StyledHero = styled("div")(() => ({
            blackgroundColor: "black"

        }))

        const StyledImg = styled("img")(() => ({
            width: "30%",
            borderRadius: "50%"
        }))

        return (
            <>
                <StyledHero>
                    ola
                    <StyledImg src={Avatar} />
                </StyledHero>
            </>
        )
    }

    export default Hero