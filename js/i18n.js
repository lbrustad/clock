const langsToFetch = ['en', 'no'];
const i18n = {};

for (let language of langsToFetch) {
    const data = await fetch(`./i18n/${language}.json`);
    if (data.ok) {
        i18n[language] = await data.json();
    }
}

export default i18n;
export const languages = langsToFetch;