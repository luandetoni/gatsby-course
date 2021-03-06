import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import getThemeColor from "../../utils/getThemeColor";

import Avatar from "../Avatar";
import * as S from "./styled"

const Profile = () => {
    const {
        site: {
            siteMetadata: { 
                title,
                description,
                position 
            }
        },
    } = useStaticQuery(graphql`

        query MySiteMetadata {
            site {
            siteMetadata {
                title
                description
                position
            }
            }
        }
    
    `)

    return (
        <S.ProfileWrapper>
            <S.ProfileLink cover direction="right" bg={getThemeColor()} duration={0.6} to="/">
                <Avatar />
                <S.ProfileAuthor>
                    {title}
                    <S.ProfilePosition>{position}</S.ProfilePosition>
                </S.ProfileAuthor>
            </S.ProfileLink>
            <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileWrapper>
    )
}

export default Profile