export const FormatterService = {
    currency_value(value: number): string {
        return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
    },
    limit_text(text: string, maxLength: number): string {
        if (text.length < maxLength) {
            return text;
        }

        return text.slice(0, maxLength) + '...';
    }
}