import { css } from 'styled-components'

import MontserratExtraLight from '../fonts/Montserrat/Montserrat-ExtraLight.ttf'
import MontserratRegular from '../fonts/Montserrat/Montserrat-Regular.ttf'
import MontserratMedium from '../fonts/Montserrat/Montserrat-Medium.ttf'
import MontserratSemiBold from '../fonts/Montserrat/Montserrat-SemiBold.ttf'

import MontserratExtraLightItalic from '../fonts/Montserrat/Montserrat-ExtraLightItalic.ttf'
import MontserratRegularItalic from '../fonts/Montserrat/Montserrat-RegularItalic.ttf'
import MontserratMediumItalic from '../fonts/Montserrat/Montserrat-MediumItalic.ttf'
import MontserratSemiBoldItalic from '../fonts/Montserrat/Montserrat-SemiBoldItalic.ttf'

import PoppinsExtraLight from '../fonts/Poppins/Poppins-ExtraLight.ttf'
import PoppinsRegular from '../fonts/Poppins/Poppins-Regular.ttf'
import PoppinsMedium from '../fonts/Poppins/Poppins-Medium.ttf'
import PoppinsSemiBold from '../fonts/Poppins/Poppins-SemiBold.ttf'

import PoppinsExtraLightItalic from '../fonts/Poppins/Poppins-ExtraLightItalic.ttf'
import PoppinsRegularItalic from '../fonts/Poppins/Poppins-RegularItalic.ttf'
import PoppinsMediumItalic from '../fonts/Poppins/Poppins-MediumItalic.ttf'
import PoppinsSemiBoldItalic from '../fonts/Poppins/Poppins-SemiBoldItalic.ttf'

const MontserratNormalWeights = {
    200: MontserratExtraLight,  
    400: MontserratRegular,
    500: MontserratMedium,
    600: MontserratSemiBold,
}

const MontserratItalicWeights = {
    200: MontserratExtraLightItalic,  
    400: MontserratRegularItalic,
    500: MontserratMediumItalic,
    600: MontserratSemiBoldItalic,
}

const PoppinsNormalWeights = {
    200: PoppinsExtraLight,  
    400: PoppinsRegular,
    500: PoppinsMedium,
    600: PoppinsSemiBold,
}

const PoppinsItalicWeights = {
    200: PoppinsExtraLightItalic,  
    400: PoppinsRegularItalic,
    500: PoppinsMediumItalic,
    600: PoppinsSemiBoldItalic,
}

const montserrat = {
    name: 'Montserrat',
    normal: MontserratNormalWeights,
    italic: MontserratItalicWeights,
}

const poppins = {
    name: 'Poppins',
    normal: PoppinsNormalWeights,
    italic: PoppinsItalicWeights,
}

const createFontFaces = (family, style = 'normal') => {
    let styles = ''

    for (const [weight, format] of Object.entries(family[style])) {

        styles += `
            @font-face {
                font-family: '${family.name}';
                src: url(${format}) format('ttf'),
                font-weight: ${weight};
                font-style: ${style};
                font-display: auto;
            }
        `
    }

    return styles;
}

const montserratNormal = createFontFaces(montserrat)
const montserratItalic = createFontFaces(montserrat, 'italic')

const poppinsNormal = createFontFaces(poppins)
const poppinsItalic = createFontFaces(poppins, 'italic')

const Fonts = css`
    ${montserratNormal + montserratItalic + poppinsNormal + poppinsItalic}
`

export default Fonts