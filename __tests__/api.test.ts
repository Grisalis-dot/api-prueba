
/**
 * Test script for the Asset API.
 * Running these requires a running server or a mocked environment.
 * For this implementation, we use a conceptual integration test approach.
 */

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000/api';

describe('Asset API Integration Tests', () => {
  let createdAssetId: string;

  // 1. Test POST /assets (Success)
  test('POST /assets should create a new asset', async () => {
    const assetData = {
      titulo: 'Servidor Test Jest',
      cuerpo: 'Este es un activo creado por una prueba unitaria.',
      marca: 'TestBrand'
    };

    const response = await fetch(`${BASE_URL}/assets`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(assetData)
    });

    const data = await response.json();
    expect(response.status).toBe(201);
    expect(data.titulo).toBe(assetData.titulo);
    expect(data.id).toBeDefined();
    createdAssetId = data.id;
  });

  // 2. Test GET /assets (Success)
  test('GET /assets should list all assets', async () => {
    const response = await fetch(`${BASE_URL}/assets`);
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(Array.isArray(data)).toBe(true);
  });

  // 3. Test GET /assets/{id} (Success)
  test('GET /assets/{id} should return a specific asset', async () => {
    const response = await fetch(`${BASE_URL}/assets/${createdAssetId}`);
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.id).toBe(createdAssetId);
  });

  // 4. Test GET /assets/{id} (Error 404)
  test('GET /assets/{non-existent-id} should return 404', async () => {
    const fakeId = '00000000-0000-0000-0000-000000000000';
    const response = await fetch(`${BASE_URL}/assets/${fakeId}`);
    expect(response.status).toBe(404);
  });

  // 5. Test DELETE /assets/{id} (Success)
  test('DELETE /assets/{id} should remove the asset', async () => {
    const response = await fetch(`${BASE_URL}/assets/${createdAssetId}`, {
      method: 'DELETE'
    });
    expect(response.status).toBe(204);
    
    // Verify it's gone
    const verifyResponse = await fetch(`${BASE_URL}/assets/${createdAssetId}`);
    expect(verifyResponse.status).toBe(404);
  });
});
