//PNG
import logo from './png/logo.png'
import quinta from './png/quinta.png'
import background1 from './png/background.png'
import background2 from './png/projects/urquinaona1.jpg'
import background3 from './png/projects/urquinaona2.jpg'
import background4 from './png/projects/urquinaona3.jpg'

import urquinaona1 from './png/projects/urquinaona1.jpg'
import urquinaona2 from './png/projects/urquinaona2.jpg'
import urquinaona3 from './png/projects/urquinaona3.jpg'
import urquinaona4 from './png/projects/urquinaona4.jpg'
import urquinaona5 from './png/projects/urquinaona5.jpg'

//SVG
import backSVG from './svg/back.svg'
import emailSVG from './svg/email.svg'
import linkedinSVG from './svg/linkedin.svg'
import locationSVG from './svg/location.svg'
import menuSVG from './svg/menu.svg'

const assets = {
    png: {
        logo: logo,
        quinta: quinta,
        background: [
            background1,
            background2,
            background3,
            background4
        ],
        projects: {
            urquinaona: {
                urquinaona1: urquinaona1,
                urquinaona2: urquinaona2,
                urquinaona3: urquinaona3,
                urquinaona4: urquinaona4,
                urquinaona5: urquinaona5
            }
        }
    },
    svg: {
        backSVG: backSVG,
        emailSVG: emailSVG,
        linkedinSVG: linkedinSVG,
        locationSVG: locationSVG,
        menuSVG: menuSVG
    }
}

export default assets