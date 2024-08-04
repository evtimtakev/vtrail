import smc from "../../social-media-crawler/index.js"
const { crawlSocialMedia } = smc;

export const getSocialMediaData = async (req: any, res: any) => {

    try {
        const socialNetworks = req.body;
        const data = await crawlSocialMedia(socialNetworks);

        res.send(JSON.stringify(data));
    } catch (e) {
        res.status(500).send(e);
    }
}
