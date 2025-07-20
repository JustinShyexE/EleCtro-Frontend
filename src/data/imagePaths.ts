import airpods from "../assets/appliancesImg/mainImg/airpods.png"
import airpodsImg from "../assets/appliancesImg/mainImg/appleIMg.jpg.webp"
import canon from "../assets/appliancesImg/mainImg/canon.png"
import canonIMG from "../assets/appliancesImg/mainImg/canonIMG.webp"
import samsung from "../assets/appliancesImg/mainImg/samsung.webp"
import iphone from "../assets/appliancesImg/mainImg/iphone.png"
import iphoneImg from "../assets/appliancesImg/mainImg/iphoneImg.png"
import mac from "../assets/appliancesImg/mainImg/macbook.png"
type ImageValue = string | URL;
type ImageMap = {
    [key: string]: ImageValue[];
};
let obj: ImageMap = {
    "camera": [canon, canonIMG],
    "phone": [iphone, iphoneImg],
    "airpods": [airpods, airpodsImg],
    "tv":[samsung, samsung],
    "laptop":[mac, mac]
}
export default obj