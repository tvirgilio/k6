import { check } from 'k6';
import http from 'k6/http';
import { sleep } from 'k6';

// Configuração de opções do teste
export const options = {
  stages: [
    { duration: '2m', target: 100 }, // 2 minutos com 100 usuários
  ],
  // Configura o intervalo entre as requisições (1 segundo)
  rps: 1, // Requests per second (1 requisição por segundo)
};

export default function () {
  // Realiza uma requisição GET para o site
  const res = http.get('https://www.promobit.com.br');

  // Verifica se o status da resposta é 200
  check(res, {
    'status é 200': (r) => r.status === 200,
  });

  // Pausa de 1 segundo antes de fazer a próxima requisição
  sleep(1);
}