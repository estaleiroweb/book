# Promises em JavaScript

Uma **Promise** representa um valor que pode estar disponível agora, no futuro, ou nunca.
É a base do código assíncrono moderno em JS.

## Estados de uma Promise

Uma Promise sempre está em um destes 3 estados:

- **Pending** → estado inicial, operação ainda em andamento
- **Fulfilled** → operação concluída com sucesso
- **Rejected** → operação falhou

Uma vez resolvida (fulfilled ou rejected), a Promise é **imutável** — não muda mais de estado.

## Criando uma Promise

```js
const minhaPromise = new Promise((resolve, reject) => {
  const sucesso = true;

  if (sucesso) {
    resolve("Deu certo!"); // → fulfilled
  } else {
    reject("Algo deu errado."); // → rejected
  }
});
```

## Consumindo com `.then()`, `.catch()` e `.finally()`

```js
minhaPromise
  .then((resultado) => {
    console.log("Sucesso:", resultado); // "Deu certo!"
  })
  .catch((erro) => {
    console.error("Erro:", erro);
  })
  .finally(() => {
    console.log("Sempre executa, independente do resultado.");
  });
```

| Método         | Quando executa                 |
| -------------- | ------------------------------ |
| `.then(fn)`    | Promise fulfilled              |
| `.catch(fn)`   | Promise rejected               |
| `.finally(fn)` | Sempre (fulfilled ou rejected) |

## Encadeamento (chaining)

Cada `.then()` retorna uma nova Promise, permitindo encadear operações:

```js
fetch("https://api.example.com/user")
  .then((response) => response.json())   // transforma a resposta
  .then((user) => fetch(`/posts/${user.id}`)) // nova requisição
  .then((response) => response.json())
  .then((posts) => console.log(posts))
  .catch((err) => console.error(err));   // captura qualquer erro da cadeia
```

## `async/await` — sintaxe moderna para Promises

`async/await` é açúcar sintático sobre Promises. O código fica mais legível, mas por baixo dos panos ainda são Promises.

```js
async function buscarUsuario() {
  try {
    const response = await fetch("https://api.example.com/user");
    const user = await response.json();
    console.log(user);
  } catch (err) {
    console.error("Erro:", err);
  }
}
```

> `await` só pode ser usado dentro de funções `async`.

## Métodos estáticos

### `Promise.all()` — espera todas resolverem

Falha imediatamente se **qualquer uma** rejeitar.

```js
const [users, posts] = await Promise.all([
  fetch("/users").then(r => r.json()),
  fetch("/posts").then(r => r.json()),
]);
```

### `Promise.allSettled()` — espera todas terminarem

Não falha — retorna o status de cada uma.

```js
const resultados = await Promise.allSettled([p1, p2, p3]);
resultados.forEach(({ status, value, reason }) => {
  if (status === "fulfilled") console.log(value);
  else console.error(reason);
});
```

### `Promise.race()` — resolve/rejeita com a primeira que terminar

```js
const resultado = await Promise.race([promisaRapida, promissaLenta]);
```

### `Promise.any()` — resolve com a primeira que for fulfilled

Só rejeita se **todas** falharem.

```js
const primeiro = await Promise.any([p1, p2, p3]);
```

## Criando Promises utilitárias

```js
// Promise já resolvida
const ok = Promise.resolve(42);

// Promise já rejeitada
const erro = Promise.reject(new Error("Falhou"));

// Simular delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

await delay(1000); // espera 1 segundo
```

## Armadilhas comuns

**1. Esquecer o `return` no encadeamento:**
```js
// ❌ errado — próximo .then recebe undefined
.then(data => { transformar(data); })

// ✅ correto
.then(data => transformar(data))
```

**2. Promise não tratada (unhandled rejection):**
```js
// ❌ sem .catch → erro silencioso em produção
fetch("/api/dados").then(r => r.json());

// ✅ sempre trate erros
fetch("/api/dados").then(r => r.json()).catch(console.error);
```

**3. `await` fora de contexto `async`:**
```js
// ❌ erro de sintaxe
const data = await fetch("/api"); // no top-level sem suporte

// ✅ dentro de função async (ou use top-level await em módulos ES2022+)
async function main() {
  const data = await fetch("/api");
}
```

## Resumo visual do fluxo

```text
new Promise(executor)
        │
   [pending] ──────────────────────┐
        │                          │
   resolve(val)              reject(err)
        │                          │
  [fulfilled]               [rejected]
        │                          │
     .then()                   .catch()
        └──────────┬───────────────┘
                .finally()
```

## 1. Tratamento de Erros

### Erros em cadeia de `.then()`

O `.catch()` no final captura erros de **qualquer ponto** da cadeia:

```js
fetch("/api/user")
  .then(r => r.json())
  .then(user => JSON.parse(user.dados)) // ← erro aqui...
  .then(dados => console.log(dados))
  .catch(err => console.error("Capturado:", err)); // ...cai aqui
```

### `.catch()` no meio da cadeia

Você pode **recuperar** de um erro e continuar:

```js
fetch("/api/user")
  .then(r => r.json())
  .catch(() => ({ nome: "Anônimo" })) // ← recupera com valor padrão
  .then(user => console.log(user.nome)); // continua normalmente
```

### Erros com `async/await` — try/catch

```js
async function buscar() {
  try {
    const r = await fetch("/api/user");

    if (!r.ok) throw new Error(`HTTP ${r.status}`); // ← trate status de erro!

    const user = await r.json();
    return user;
  } catch (err) {
    if (err instanceof TypeError) {
      console.error("Sem conexão:", err);
    } else {
      console.error("Erro da API:", err);
    }
    return null; // valor de fallback
  } finally {
    console.log("Requisição finalizada.");
  }
}
```

> ⚠️ `fetch()` **não rejeita** em erros HTTP (404, 500). Você precisa checar `response.ok` manualmente!

### Wrapper utilitário — nunca deixar erro escapar

```js
// Retorna [data, null] ou [null, error] — estilo Go
async function safe(promise) {
  try {
    const data = await promise;
    return [data, null];
  } catch (err) {
    return [null, err];
  }
}

// Uso limpo, sem try/catch espalhado
const [user, err] = await safe(fetch("/api/user").then(r => r.json()));
if (err) return console.error(err);
console.log(user);
```

## 2. Paralelismo a Fundo

### Comparativo dos 4 métodos

```js
const p1 = Promise.resolve("A");
const p2 = Promise.reject(new Error("Falhou"));
const p3 = Promise.resolve("C");
```

#### `Promise.all()` — tudo ou nada

```js
// ❌ aborta se qualquer uma falhar
await Promise.all([p1, p2, p3]);
// → rejeita com Error("Falhou")

// ✅ use quando TODAS são necessárias (ex: buscar dados interdependentes)
const [users, posts, config] = await Promise.all([
  getUsers(),
  getPosts(),
  getConfig(),
]);
```

#### `Promise.allSettled()` — resultado de todas, sem falhar

```js
const results = await Promise.allSettled([p1, p2, p3]);
// → [
//     { status: "fulfilled", value: "A" },
//     { status: "rejected",  reason: Error("Falhou") },
//     { status: "fulfilled", value: "C" }
//   ]

// ✅ use para operações independentes onde falhas parciais são aceitáveis
results
  .filter(r => r.status === "fulfilled")
  .forEach(r => console.log(r.value));
```

#### `Promise.race()` — o mais rápido vence (fulfilled OU rejected)

```js
const timeout = new Promise((_, reject) =>
  setTimeout(() => reject(new Error("Timeout!")), 3000)
);

// ✅ padrão clássico de timeout
const data = await Promise.race([fetch("/api/pesada"), timeout]);
```

#### `Promise.any()` — o primeiro sucesso vence

```js
// ✅ redundância / fallback entre múltiplas fontes
const data = await Promise.any([
  fetch("https://cdn1.example.com/data"),
  fetch("https://cdn2.example.com/data"),
  fetch("https://cdn3.example.com/data"),
]);
// Usa o CDN mais rápido que responder com sucesso
```

> Se **todas** rejeitarem, lança um `AggregateError` com todos os erros.

### Paralelismo com limite de concorrência

Às vezes você tem 100 tarefas mas não quer disparar todas de uma vez:

```js
async function parallelLimit(tasks, limit) {
  const results = [];
  const executing = new Set();

  for (const task of tasks) {
    const p = Promise.resolve().then(task).then(r => {
      executing.delete(p);
      return r;
    });

    executing.add(p);
    results.push(p);

    if (executing.size >= limit) {
      await Promise.race(executing); // espera uma liberar
    }
  }

  return Promise.all(results);
}

// Processa 50 itens, mas no máximo 5 ao mesmo tempo
const tarefas = itens.map(item => () => processarItem(item));
const resultados = await parallelLimit(tarefas, 5);
```

## 3. async/await a Fundo

### `await` é só açúcar — entenda o que acontece

```js
// Isso:
async function foo() {
  const x = await bar();
  console.log(x);
}

// É equivalente a isso:
function foo() {
  return bar().then(x => {
    console.log(x);
  });
}
```

### Armadilha: `await` sequencial desnecessário

```js
// ❌ lento — espera um terminar para começar o outro (2s total)
const user  = await getUser();   // 1s
const posts = await getPosts();  // 1s

// ✅ paralelo — dispara os dois juntos (1s total)
const [user, posts] = await Promise.all([getUser(), getPosts()]);
```

### `await` em loops

```js
const ids = [1, 2, 3, 4, 5];

// ❌ sequencial — lento
for (const id of ids) {
  const user = await fetchUser(id); // espera cada um
}

// ✅ paralelo com Promise.all
const users = await Promise.all(ids.map(id => fetchUser(id)));

// ✅ paralelo com limite (use o parallelLimit acima para N grande)
```

> ⚠️ `forEach` **não funciona** com `await` — use `for...of` ou `Promise.all` + `map`.

### Top-level `await` (ES2022+, apenas em módulos)

```js
// arquivo.mjs ou com "type": "module" no package.json
const config = await fetch("/config.json").then(r => r.json());
export default config;
```

### Funções geradoras assíncronas (`async function*`)

Para processar streams ou grandes volumes de dados sob demanda:

```js
async function* paginar(url) {
  let nextUrl = url;
  while (nextUrl) {
    const { data, next } = await fetch(nextUrl).then(r => r.json());
    yield data;       // entrega uma página por vez
    nextUrl = next;   // próxima página
  }
}

// Consome página por página sem carregar tudo na memória
for await (const pagina of paginar("/api/posts")) {
  console.log(pagina);
}
```

## 4. Padrões Avançados

### Promise com cancelamento (AbortController)

```js
async function buscarComCancelamento(url) {
  const controller = new AbortController();

  // Cancela após 5 segundos
  const timer = setTimeout(() => controller.abort(), 5000);

  try {
    const r = await fetch(url, { signal: controller.signal });
    return await r.json();
  } catch (err) {
    if (err.name === "AbortError") {
      console.warn("Requisição cancelada.");
    } else {
      throw err;
    }
  } finally {
    clearTimeout(timer);
  }
}
```

### Memoização de Promises (cache)

```js
const cache = new Map();

function fetchComCache(url) {
  if (cache.has(url)) return cache.get(url); // retorna a MESMA Promise

  const promise = fetch(url).then(r => r.json());
  cache.set(url, promise);
  return promise;
}

// Múltiplas chamadas simultâneas fazem apenas 1 requisição
const [a, b, c] = await Promise.all([
  fetchComCache("/api/config"),
  fetchComCache("/api/config"), // ← reutiliza a mesma Promise
  fetchComCache("/api/config"),
]);
```

### Retry automático com backoff exponencial

```js
async function comRetry(fn, tentativas = 3, delay = 500) {
  for (let i = 0; i < tentativas; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === tentativas - 1) throw err; // última tentativa, propaga
      const espera = delay * 2 ** i; // 500ms, 1000ms, 2000ms...
      console.warn(`Tentativa ${i + 1} falhou. Retry em ${espera}ms`);
      await new Promise(r => setTimeout(r, espera));
    }
  }
}

// Uso
const data = await comRetry(() => fetch("/api/instavel").then(r => r.json()));
```

### Deferred Promise (controle externo)

Útil para integrar código baseado em callbacks com Promises:

```js
function criarDeferred() {
  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

// Exemplo: aguardar um evento externo
const { promise, resolve } = criarDeferred();

document.getElementById("btn").addEventListener("click", () => {
  resolve("botão clicado!");
});

const resultado = await promise;
console.log(resultado);
```

## Resumo de quando usar cada coisa

| Situação                               | Use                             |
| -------------------------------------- | ------------------------------- |
| Operações independentes em paralelo    | `Promise.all()`                 |
| Paralelo tolerando falhas parciais     | `Promise.allSettled()`          |
| Primeiro sucesso entre várias fontes   | `Promise.any()`                 |
| Timeout ou corrida de velocidade       | `Promise.race()`                |
| Muitas tarefas, controlar concorrência | `parallelLimit()` customizado   |
| Código legível e linear                | `async/await`                   |
| Grandes volumes / streams              | `async function*` + `for await` |
| Cancelamento                           | `AbortController`               |
| Resiliência a falhas                   | retry com backoff               |
