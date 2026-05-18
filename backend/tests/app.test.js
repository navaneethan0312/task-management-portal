const request = require('supertest');
const { app, server } = require('../app');

describe('Task Management API', () => {

  afterAll((done) => {
    server.close(done);
  });

  test('GET /health should return status ok', async () => {
    const res = await request(app).get('/health');

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  test('GET /tasks should return array', async () => {
    const res = await request(app).get('/tasks');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

});
