import isEmail from 'validator/lib/isEmail'

const isEmptyObject = (obj: object): boolean => {
  return Object.keys(obj).length === 0
}

export const required = (value: unknown): boolean | string => {
  return (
    (typeof value === 'string' && value.length > 0) ||
    (typeof value === 'object' && value !== null && !isEmptyObject(value)) ||
    (typeof value === 'number') ||
    (typeof value === 'boolean')
  ) || (
    'Field is required'
  )
}

export const email = (value: string): boolean | string => {
  return isEmail(value) || 'Must be a valid email'
}

export const indonesianIntlPhone = (value: string): boolean | string => {
  const regex = /^\+62([0-9]){5,13}$/
  return regex.test(value) || 'Must be a valid phone number (+62)'
}
