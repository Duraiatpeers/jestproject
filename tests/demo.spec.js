import { load, close, getTitle } from './demopage.js';

describe("Google", () => {

    beforeEach(async () => {
        await load();
    });

    
    it("should be titled 'Google'", async () => {
        expect(await getTitle()).toBe('Google');
    });

    afterEach(async () => {
        await close();
    });

});

