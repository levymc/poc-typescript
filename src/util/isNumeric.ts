export default function isNumeric(str: string): boolean {
    for (let i = 0; i < str.length; i++) {
        if (!/^\d$/.test(str[i])) {
            return false;
        }
    }
    return true;
}