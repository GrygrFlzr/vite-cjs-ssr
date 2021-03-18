import cookie from 'cookie';

const parsed = cookie.parse(`foo="bar=123456789&name=Magic+Mouse"`);

export default parsed;
