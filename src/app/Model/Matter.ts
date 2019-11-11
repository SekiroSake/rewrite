export class Matter {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public lfeStartDate: string,
        public lfeEndDate: string,
        public firmCountry: string,
        public matterTier: string,
        public exceed100k: boolean
    ){}
}