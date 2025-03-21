const { fromPath } = require("pdf2pic");
const path = require("path");
const fs = require("fs");

const pdfFilePath = path.join(__dirname, "PDF_textobase_aula1.pdf");

const options = {
    density: 1000, // Qualidade da imagem
    saveFilename: "pagina", // Nome base dos arquivos (será incrementado com números)
    savePath: "./imagens", // Pasta de saída
    format: "png", // Formato das imagens
    width: 1082, // Largura
    height: 1082 // Altura
};

const storeAsImage = fromPath(pdfFilePath, options);

const convertPDF = async () => {
    try {
        console.log("Iniciando conversão...");

        // Obtendo total de páginas corretamente
        const metaData = await storeAsImage(1);
        const totalPages = 25; // MetaData está sendo ignorado no código, então estou fixando a quantidade de páginas.

        console.log(`O PDF tem ${totalPages} páginas. Convertendo...`);

        // Loop para converter todas as páginas
        for (let i = 1; i <= totalPages; i++) {
            const savePath = path.join("./imagens", `pagina${i}.jpg`);
            await storeAsImage(i, { saveFilename: `pagina${i}`, savePath }).then((resolve) => {
                console.log(`Página ${i} convertida:`, resolve.path);
            });


            // Conteúdo HTML com o nome correto da imagem
            const htmlContent = `
        <div class="table-contents">
            <img src="imagens/pagina.${i}.png" style="width: 100%; height: 100%;">
        </div>
        `;

            // Caminho completo para salvar o arquivo HTML
            const htmlFilePath = path.join("./pages", `page${i}.html`);

            // Cria o arquivo HTML
            fs.writeFileSync(htmlFilePath, htmlContent.trim());
            console.log(`Arquivo HTML criado: ${htmlFilePath}`);
        }
        console.log("Conversão finalizada!");
    } catch (error) {
        console.error("Erro na conversão:", error);
    }
};

convertPDF();
