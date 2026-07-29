const API_BASE_URL = 'https://api-ebac.vercel.app/api/efood'

export const API_ENDPOINTS = {
  restaurantes: `${API_BASE_URL}/restaurantes`,
  restaurantePorId: (id: string) => `${API_BASE_URL}/restaurantes/${id}`,
  checkout: `${API_BASE_URL}/checkout`
}
