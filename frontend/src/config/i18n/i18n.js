import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {ruTranslations} from '../../translations/ru';
import {enTranslations} from '../../translations/en';
import moment from "moment";
import {RU, EN} from "./languages";

const DEFAULT_LNG = RU.code;

moment.locale(DEFAULT_LNG);

i18n
    .use(initReactI18next)
    .init({
        lng: DEFAULT_LNG,
        nsSeparator: '##',
        keySeparator: '',

        resources: {
            ru: {
                translation: ruTranslations,
            },
            en: {
                translation: enTranslations,
            },
        },

        interpolation: {
            escapeValue: false,
            prefix: '{',
            suffix: '}',
        },

        fallbackLng: {
            default: [RU.code, EN.code],
        },
    });

export default i18n;
