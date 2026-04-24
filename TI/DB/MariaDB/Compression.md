# Compression

Os plugins de compressão (`MariaDB-provider-*`) são usados para compactar:
1. **Tabelas InnoDB**: Com a opção `ROW_FORMAT=COMPRESSED` e `COMPRESSION=<algoritmo>`.
2. **Backups**: Usando o `mariabackup` com opções de compressão.
3. **Outros dados**: Como logs ou arquivos exportados.

Para habilitar um plugin, você precisa carregá-lo no MariaDB. Execute no cliente MariaDB:

```sql
INSTALL SONAME 'provider_<nome>';
```

Substitua `<nome>` pelo algoritmo desejado (`bzip2`, `lz4`, `lzma`, `lzo`, `snappy`). Verifique se o plugin está carregado com:

```sql
SELECT * FROM information_schema.plugins WHERE plugin_name LIKE '%provider%';
```

## 1. **MariaDB-provider-bzip2**

O `bzip2` oferece alta compressão, mas é mais lento. Ideal para backups ou tabelas onde o espaço é crítico.

**Exemplo 1: Compactar uma tabela InnoDB**:

```sql
INSTALL SONAME 'provider_bzip2';
CREATE TABLE exemplo_bzip2 (
    id INT PRIMARY KEY,
    dados TEXT
) ENGINE=InnoDB ROW_FORMAT=COMPRESSED KEY_BLOCK_SIZE=8 COMPRESSION='bzip2';
```

- `ROW_FORMAT=COMPRESSED`: Ativa compressão.
- `KEY_BLOCK_SIZE=8`: Define o tamanho do bloco (em KB) para compressão.
- `COMPRESSION='bzip2'`: Especifica o algoritmo bzip2.

**Exemplo 2: Backup com bzip2**:

```bash
mariabackup --backup --compress=bzip2 --target-dir=/backup/mariadb
```

Isso cria um backup comprimido com bzip2 no diretório especificado.

## 2. **MariaDB-provider-lz4**

O `lz4` é otimizado para alta velocidade, com compressão moderada. Ideal para cenários que exigem desempenho.

**Exemplo 1: Compactar uma tabela InnoDB**:

```sql
INSTALL SONAME 'provider_lz4';
CREATE TABLE exemplo_lz4 (
    id INT PRIMARY KEY,
    dados TEXT
) ENGINE=InnoDB ROW_FORMAT=COMPRESSED KEY_BLOCK_SIZE=4 COMPRESSION='lz4';
```

- `KEY_BLOCK_SIZE=4`: Um valor menor pode ser usado com `lz4` devido à sua eficiência.
- `COMPRESSION='lz4'`: Usa o algoritmo LZ4.

**Exemplo 2: Backup com LZ4**:

```bash
mariabackup --backup --compress=lz4 --target-dir=/backup/mariadb
```

O backup será rápido de criar e descomprimir, ideal para sistemas com alta rotatividade.

## 3. **MariaDB-provider-lzma**

O `lzma` oferece compressão muito alta, mas é mais lento. Bom para arquivamento de longo prazo.

**Exemplo 1: Compactar uma tabela InnoDB**:

```sql
INSTALL SONAME 'provider_lzma';
CREATE TABLE exemplo_lzma (
    id INT PRIMARY KEY,
    dados TEXT
) ENGINE=InnoDB ROW_FORMAT=COMPRESSED KEY_BLOCK_SIZE=8 COMPRESSION='lzma';
```

- `COMPRESSION='lzma'`: Usa o algoritmo LZMA, adequado para tabelas grandes com dados raramente acessados.

**Exemplo 2: Backup com LZMA**:

```bash
mariabackup --backup --compress=lzma --target-dir=/backup/mariadb
```

O backup será altamente comprimido, mas a restauração pode ser mais lenta.

## 4. **MariaDB-provider-lzo**

O `lzo` oferece um equilíbrio entre velocidade e compressão, sendo uma opção intermediária.

**Exemplo 1: Compactar uma tabela InnoDB**:

```sql
INSTALL SONAME 'provider_lzo';
CREATE TABLE exemplo_lzo (
    id INT PRIMARY KEY,
    dados TEXT
) ENGINE=InnoDB ROW_FORMAT=COMPRESSED KEY_BLOCK_SIZE=4 COMPRESSION='lzo';
```

- `COMPRESSION='lzo'`: Usa o algoritmo LZO, ideal para cenários com escrita/leitura frequentes.

**Exemplo 2: Backup com LZO**:

```bash
mariabackup --backup --compress=lzo --target-dir=/backup/mariadb
```

O backup terá boa compressão com desempenho razoável.

## 5. **MariaDB-provider-snappy**

O `snappy` é projetado para alta velocidade com compressão moderada, similar ao `lz4`.

**Exemplo 1: Compactar uma tabela InnoDB**:

```sql
INSTALL SONAME 'provider_snappy';
CREATE TABLE exemplo_snappy (
    id INT PRIMARY KEY,
    dados TEXT
) ENGINE=InnoDB ROW_FORMAT=COMPRESSED KEY_BLOCK_SIZE=4 COMPRESSION='snappy';
```

- `COMPRESSION='snappy'`: Usa o algoritmo Snappy, ideal para aplicações que precisam de baixa latência.

**Exemplo 2: Backup com Snappy**:

```bash
mariabackup --backup --compress=snappy --target-dir=/backup/mariadb
```

O backup será rápido de criar e descomprimir, com compressão eficiente.

## Notas Gerais

- **Habilitando Plugins**: Antes de usar qualquer algoritmo, verifique se o plugin está instalado e carregado. Alguns sistemas podem requerer a instalação dos pacotes correspondentes (ex.: `libbz2-dev` para bzip2).
- **Escolha do Algoritmo**:
  - **bzip2** e **lzma**: Priorize para backups ou tabelas com foco em economia de espaço.
  - **lz4** e **snappy**: Priorize para desempenho, como em tabelas com acesso frequente.
  - **lzo**: Bom meio-termo para casos gerais.
- **Testando Compressão**: Use `ANALYZE TABLE exemplo_<algoritmo>` para verificar o impacto da compressão no tamanho da tabela.
- **Backups**: Para restaurar backups comprimidos, use `mariabackup --decompress=<algoritmo>` antes de restaurar.
- **Compatibilidade**: Nem todos os algoritmos são suportados em todas as versões do MariaDB. Consulte a documentação oficial em mariadb.com para verificar suporte na sua versão.
