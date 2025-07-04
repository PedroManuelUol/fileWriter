# 🔧 Gerador de Arquivo SQL a partir de Arquivos de Texto

Este projeto contém dois scripts Node.js que processam arquivos `.txt` contendo dados e geram um arquivo SQL chamado `saida.sql`. Dependendo da estrutura dos dados de entrada, você pode escolher entre dois modos de operação: com um ou dois arquivos de entrada.

---

## 📂 Estrutura do Projeto

├── fileWritterExtended.js # Usa dois arquivos de entrada (ids.txt + cods.txt) <br>
├── index.js # Usa um único arquivo de entrada (entrada.txt) <br>
├── ids.txt # Lista de IDs (utilizado pelo fileWritterExtended.js) <br>
├── cods.txt # Lista de códigos (utilizado pelo fileWritterExtended.js) <br>
├── entrada.txt # Lista simples de entradas (utilizado pelo index.js) <br>
├── saida.sql # Arquivo de saída gerado por ambos os scripts <br>

---

## 📜 Descrição dos Scripts

### 1. `fileWritterExtended.js`

Processa dois arquivos: `ids.txt` e `cods.txt`, combinando as linhas correspondentes de cada um.

- **Entrada:**  
  - `ids.txt` – Lista de IDs (um por linha)  
  - `cods.txt` – Lista de códigos correspondentes (um por linha)

- **Saída:**  
  - `saida.sql` – Cada linha contém um par `ID COD`, separado por espaço

- **Exemplo de saída:**
123 ABC <br>
456 DEF <br>
789 GHI <br>
  
- **Como usar:**

```bash
node fileWritterExtended.js
```

⚠️ Os arquivos ids.txt e cods.txt devem ter o mesmo número de linhas. Caso contrário, o script emitirá um erro.

### 2. index.js <br>

Processa um único arquivo de entrada: entrada.txt.

- **Entrada:** 

entrada.txt – Lista de itens, um por linha

- **Saída:**  

saida.sql – Cada linha do arquivo é copiada diretamente (ou modificada via queryFormatter, se desejado)

Exemplo de saída:

123
456
789

node index.js

✅ Pré-requisitos
Node.js (versão 12 ou superior)

Os arquivos de entrada devem estar no mesmo diretório dos scripts
