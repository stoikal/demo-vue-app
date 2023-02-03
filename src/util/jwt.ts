// https://stackoverflow.com/a/30106551
function b64DecodeUnicode (str: string): string {
  return decodeURIComponent(
    atob(str)
      .split('')
      .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join(''),
  )
}

// https://stackoverflow.com/a/38552302
function parsePayload (token: string): any {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const json = b64DecodeUnicode(base64)

  return JSON.parse(json)
}

export default {
  parsePayload,
}
