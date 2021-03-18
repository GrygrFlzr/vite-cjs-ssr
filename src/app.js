import cookie from 'cookie';

const parsed = cookie.parse('foo=bar; equation=E%3Dmc%5E2');

export default `<pre>${JSON.stringify(parsed, null, 2)}</pre>`;
