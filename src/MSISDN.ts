import { Schema } from "./schema.js";
import { cleanPhoneNumber, dropLeading, getRegexString, internationalize, localize } from "./utils.js";

class MSISDN {
    private phone: string;
    private readonly country: keyof typeof Schema;
    private readonly type: keyof typeof Schema["MW"]["types"] | null;

    constructor(phoneNumber: string, country: keyof typeof Schema = "MW", type: keyof typeof Schema["MW"]["types"] | null = null) {
        this.phone = phoneNumber
        this.country = country;
        this.type = type;
    }

    isValid() {
        if (this.type) {
            return RegExp(new RegExp(`${getRegexString(Schema[this.country].countryCode,
                Schema[this.country].types[this.type].codes,
                Schema[this.country].types[this.type].localNumberLength
            )}`)).exec(this.phone) !== null;
        }

        const regex = new RegExp(`${Object.values(Schema[this.country].types).map((type) => getRegexString(
            Schema[this.country].countryCode,
            type.codes,
            type.localNumberLength
        )).join("|")}`);

        return RegExp(regex).exec(this.phone) !== null;
    }

    clean() {
        this.phone = cleanPhoneNumber(this.phone, Schema[this.country].countryCode)
        return this;
    }

    internationalize() {
        this.phone = internationalize(this.phone, Schema[this.country].countryCode);
        return this;
    }

    localize() {
        this.phone = localize(this.phone, Schema[this.country].countryCode);
        return this;
    }

    dropLeading() {
        this.phone = dropLeading(this.phone, Schema[this.country].countryCode);
        return this;
    }

    format(separator: string = " ", groupSize: number = 3) {
        const regex = new RegExp(`(\\d{${groupSize}})`, "g");
        const formatted = this.phone.replace(regex, `$1${separator}`);
        this.phone = formatted.trim();
        return this.phone;
    }

    get() {
        return this.isValid() ? this.phone : null;
    }

    getRaw() {
        return this.phone;
    }
}

export const msisdn = (phoneNumber: string, options: {
    autoClean?: boolean,
    country?: keyof typeof Schema,
    type?: keyof typeof Schema["MW"]["types"] | null
} = {
        autoClean: true,
        country: "MW",
        type: null
    }): MSISDN => {
    const defaultOptions = {
        autoClean: true,
        country: "MW" as keyof typeof Schema,
        type: null
    };
    const { country, type, autoClean } = { ...defaultOptions, ...options };

    const instance = new MSISDN(phoneNumber, country, type);

    if (autoClean) {
        return instance.clean();
    }

    return instance;
}