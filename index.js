const fs = require('fs').promises;

const ENCODING = 'utf-8';
const ENTRY_FILE = 'entrada.txt';
const EXIT_FILE = 'NOR-2019_desativar_garantias.sql';

const queryFormatter = (id) => {
    return `${id}`
};

const processFile = async () => {
    try {
        const data = await fs.readFile(ENTRY_FILE, ENCODING);
        
        const lines = data.split('\n')
            .map((line) => queryFormatter(line));
        
        await fs.writeFile(EXIT_FILE, lines.join('\n'), ENCODING);
        
        console.log('arquivo processado');
        
    } catch (error) {
        console.error(`Error=${error}`);
    }
};

processFile();
