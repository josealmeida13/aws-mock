export class SyntaxUtils {
    static snakeCaseToCamelCase(str: string): string {
        return str.replace(/_\w/gi, (m) => m[1].toUpperCase());
    }

    static capitalize(str: string) {
        return str.substr(0,1).toUpperCase() + str.substr(1);
    }
}