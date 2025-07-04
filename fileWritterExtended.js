const fs = require('fs').promises;

const ENCODING = 'utf-8';
const IDS_FILE = 'ids.txt';
const CODS_FILE = 'cods.txt';
const EXIT_FILE = 'saida.sql';

const queryFormatter = (id, cod) => {
    return `${id} ${cod}`;
};

const processFiles = async () => {
    try {
        const [idsData, codsData] = await Promise.all([
            fs.readFile(IDS_FILE, ENCODING),
            fs.readFile(CODS_FILE, ENCODING)
        ]);

        const ids = idsData.split('\n').map(line => line.trim());
        const cods = codsData.split('\n').map(line => line.trim());

        if (ids.length !== cods.length) {
            throw new Error('Os arquivos de entrada têm quantidades diferentes de linhas.');
        }

        const queries = ids.map((id, index) => queryFormatter(id, cods[index]));

        await fs.writeFile(EXIT_FILE, queries.join('\n'), ENCODING);

        console.log('Arquivo processado com sucesso.');

    } catch (error) {
        console.error(`Erro ao processar os arquivos: ${error.message}`);
    }
};

processFiles();
