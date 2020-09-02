export const required = (value) => {
    return value ? undefined : "Field must be filled"
}
export const maxLength = max => value =>
value.length > max ? `Must be ${max} characters or less` : undefined