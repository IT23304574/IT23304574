const { test, expect } = require('@playwright/test');

test.describe('IT3040 Assignment 1: Singlish to Sinhala Transliteration', () => {

    test.beforeEach(async ({ page }) => {
        // Navigate to the base URL defined in playwright.config.js
        await page.goto('/', { waitUntil: 'load', timeout: 60000 });
    });

    /** * POSITIVE FUNCTIONAL TESTS (24 Scenarios).
     */
    const positiveScenarios = [
        { id: '0001', input: 'adha panthi yanavadha?', expected: 'අද පන්ති යනවද?' },
        { id: '0002', input: 'Mama paarata yanavaa haebaeyi thava paeyak vithara yayi', expected: 'මම පාරට යනවා හැබැයි තව පැයක් විතර යයි' },
        { id: '0003', input: 'oyaa enakan maath methanata velaa innan', expected: 'ඔයා එනකන් මාත් මෙතනට වෙලා ඉන්නන්' },
        { id: '0004', input: ' thaaththata kohomadha?', expected: ' තාත්තට කොහොමද?' },
        { id: '0005', input: 'dhaemma mata paeenak dhenna', expected: 'දැම්ම මට පෑනක් දෙන්න' },
        { id: '0006', input: 'Mama heta gedhara enavaa', expected: 'මම හෙට ගෙදර එනවා' },
        { id: '0007', input: 'Mama bonne naehae', expected: 'මම බොන්නෙ නැහැ' },
        { id: '0008', input: 'aayuboovan', expected: 'ආයුබෝවන්' },
        { id: '0009', input: 'Mata vathura boothalee dhenna puluvandha?', expected: 'මට වතුර බෝතලේ දෙන්න පුලුවන්ද?' },
        { id: '0010', input: 'Hari mama dhaen ennan', expected: 'හරි මම දැන් එන්නන්' },
        { id: '0011', input: 'karunaakarala mata oya potha aran dhenna', expected: 'කරුනාකරල මට ඔය පොත අරන් දෙන්න' },
        { id: '0012', input: 'kata vahapan', expected: 'කට වහපන්' },
        { id: '0013', input: 'ohu thaama kana gaman', expected: 'ඔහු තාම කන ගමන්' },
        { id: '0014', input: 'vathura ekak bonna ', expected: 'වතුර එකක් බොන්න ' },
        { id: '0015', input: 'dhuvanne naee', expected: 'දුවන්නෙ නෑ' },
        { id: '0016', input: 'Mata bath kanna onee', expected: 'මට බත් කන්න ඔනේ' },
        { id: '0017', input: 'Mama bas ekatanaeggaa', expected: 'මම බස් එකටනැග්ගා' },
        { id: '0018', input: 'podda  podda', expected: 'පොඩ්ඩ  පොඩ්ඩ' },
        { id: '0019', input: 'Mama pereedha panthi giyaa', expected: 'මම පෙරේද පන්ති ගියා' },
        { id: '0020', input: 'Mama bicycle padhinavaa', expected: 'මම bicycle පදිනවා' },
        { id: '0021', input: 'Mama heta gedhara enavaa', expected: 'මම හෙට ගෙදර එනවා' },
        { id: '0022', input: 'Mata okkoma karanna baee', expected: 'මට ඔක්කොම කරන්න බෑ' },
        { id: '0023', input: 'Malli gedhara yanna hadhanne', expected: 'මල්ලි ගෙදර යන්න හදන්නෙ' },
        { id: '0024', input: 'oogollo heta trip ekak yanavadha?', expected: 'ඕගොල්ලො හෙට trip එකක් යනවද?' },
        { id: '0025', input: 'Karunakarala yanawadha', expected: 'කරුනාකරල යනවද' },
        { id: '0026', input: 'Email', expected: 'ඊමේල්' },
        { id: '0027', input: 'malli school yannee bus ekee.', expected: 'මල්ලි school යන්නෙ bus එකේ.' },
        { id: '0028', input: 'URL', expected: 'යූආර් එල්' },
        { id: '0029', input: 'Mama kamareta yanawa', expected: 'මම කාමරේට යනව' },
        { id: '0030', input: 'Mama iye ude campus yagin gedara enakota 6 wage wela thibune ee time ekata thama oha hariye wahanayak happila thibbe. Mata mathaka na kauruhari ee wahane athule hitiyada kiyala mokadha mata time ekak thibbe na eka check keranna eka nisa mata hariyatama kiyanna amarui sir . namuth mata mona hari mathak unoth man aniwaryen inform kerannan police station ekata .mata sir ge contact number eka denna puluwandha. habai sir samahara wita ara eha paththe podi camera ekak thiyei gate eke eka check keranan hoduwawak hoyaganna puluwan wei samahara wita  ', expected: 'මම ඊයෙ උදේ campus ගිහින් ගෙදර එනකොට 6 වගේ වෙලා තිබුනෙ ඒ time එකට තම ඔහ හරියෙ වාහනයක් හැප්පිල තිබ්බෙ. මට මතක නෑ කෞරුහරි ඒ වහනේ ඇතුලෙ හිටියද කියල මොකද මට time එකක් තිබ්බෙ නෑ ඒක check කරන්න එක නිස මට හරියටම කියන්න අමාරුයි sir . නමුත් මට මොන හරි මතක් උනොත් man අනිවාර්යෙන් inform කරන්නන් police station එකට .මට sir ගෙ contact number එක දෙන්න පුලුවන්ද. හැබැයි sir සමහර විට අරා එහ පැත්තෙ පොඩි camera එකක් තියේ gate එකේ ඒක check කරානන් හොඩුවාවක් හොයාගන්න පුලුවන් වෙයි සමහර විට ' },
        { id: '0031', input: 'Mata rupiyak wissak denna puluwanda?', expected: 'මට රුපියල් විස්සක් දෙන්න පුලුවන්ද?' },
        { id: '0032', input: 'Dan nan mata athi', expected: 'දැන්නන් මට ඇති' },
        { id: '0033', input: 'Meka kawadda iwara wenne', expected: 'මේක කවද්ද ඉවර වෙන්නෙ' },
        { id: '0034', input: 'Assignment eka kerada?', expected: 'Assignment එක කරාද?' }
    ];

    for (const data of positiveScenarios) {
        test(`Pos_Fun_${data.id}: ${data.input}`, async ({ page }) => {
            // Locate the input field by its placeholder and fill it
            const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
            await inputField.fill(data.input);
            // Trigger input event by typing to ensure the transliteration logic runs
            await inputField.dispatchEvent('input');
            // Also trigger change event
            await inputField.dispatchEvent('change');
            // Trigger blur as well
            await inputField.blur();
            
            // Locate the output field (the element following "Sinhala" label) and wait for it to have text
            const outputLocator = page.locator('text=Sinhala').locator('xpath=following-sibling::*').first();
            await expect(outputLocator).toHaveText(data.expected, { timeout: 15000 });
        });
    }

    /** * NEGATIVE FUNCTIONAL TESTS (10 Scenarios)
     */
    const negativeScenarios = [
        { id: '0040', input: 'mma geDhra yanvaa.', desc: 'Vowel omission' },
        { id: '0041', input: 'mama @#$% yanavaa!', desc: 'Excessive symbols' }
    ];

    for (const data of negativeScenarios) {
        test(`Neg_Fun_${data.id}: ${data.desc}`, async ({ page }) => {
            const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
            await inputField.fill(data.input);
            // Trigger input/change/blur events
            await inputField.dispatchEvent('input');
            await inputField.dispatchEvent('change');
            await inputField.blur();
            
            // Locate the output field
            const outputLocator = page.locator('text=Sinhala').locator('xpath=following-sibling::*').first();
            // Check that it doesn't match a perfect sentence
            await expect(outputLocator).not.toHaveText('මම ගෙදර යනවා', { timeout: 15000 }); 
        });
    }

    /** * UI TEST (1 Scenario)
     */
    test('Pos_UI_0002: Out put is updeated real time', async ({ page }) => {
        const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
        const outputArea = page.locator('text=Sinhala').locator('xpath=following-sibling::*').first();

        await inputArea.fill('Test text');
        await inputArea.dispatchEvent('input');
        await inputArea.fill(''); // Clear input
        await inputArea.dispatchEvent('input');
        
        // Wait for the UI to clear the output
        await expect(outputArea).toHaveText('', { timeout: 10000 });
    });
});