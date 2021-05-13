async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((serverResponse) => {
      if (serverResponse.ok) {
        return serverResponse.json();
      }

      throw new Error('Falha em pegar os dados do servidor');
    });
}

export const loginService = {
  async login({ username, password }) {
    return HttpClient('https://instalura-api-git-master-omariosouto.vercel.app/api/login', {
      method: 'POST',
      body: {
        username, // 'dafinysouza'
        password, // 'senhasegura'
      },
    })
      .then((convertedResponse) => {
        // Salvar o Token
        // Escrever os testes
        console.log(convertedResponse);
        return convertedResponse;
      });
  },
};
