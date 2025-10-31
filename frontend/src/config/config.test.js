import config from './config';

describe('Config Module', () => {
  test('exports config object', () => {
    expect(config).toBeDefined();
    expect(typeof config).toBe('object');
  });

  test('contains credentials object', () => {
    expect(config.credentials).toBeDefined();
    expect(typeof config.credentials).toBe('object');
  });

  test('credentials contain username and password', () => {
    expect(config.credentials.username).toBeDefined();
    expect(config.credentials.password).toBeDefined();
    expect(typeof config.credentials.username).toBe('string');
    expect(typeof config.credentials.password).toBe('string');
  });

  test('contains apiBaseUrl', () => {
    expect(config.apiBaseUrl).toBeDefined();
    expect(typeof config.apiBaseUrl).toBe('string');
  });

  test('apiBaseUrl is a valid URL format', () => {
    expect(config.apiBaseUrl).toMatch(/^https?:\/\/.+/);
  });

  test('username is not empty', () => {
    expect(config.credentials.username.length).toBeGreaterThan(0);
  });

  test('password is not empty', () => {
    expect(config.credentials.password.length).toBeGreaterThan(0);
  });

  test('config structure matches expected format', () => {
    expect(config).toEqual({
      credentials: {
        username: expect.any(String),
        password: expect.any(String)
      },
      apiBaseUrl: expect.any(String)
    });
  });

  test('config values match expected defaults', () => {
    expect(config.credentials.username).toBe('su');
    expect(config.credentials.password).toBe('gw');
    expect(config.apiBaseUrl).toBe('http://localhost:3000/api');
  });
});