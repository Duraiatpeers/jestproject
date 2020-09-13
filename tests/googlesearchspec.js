import { load, close, getTitle } from './googlesearchpage.js';

describe("Google", () => {

    beforeEach(async () => {
        await load();
    });

    
    test("should be titled 'Google'", async () => {
        expect(await getTitle()).toBe('Google');
    });

    afterEach(async () => {
        await close();
    });

});

