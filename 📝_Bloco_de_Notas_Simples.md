# 📝 Bloco de Notas Simples

Um bloco de notas elegante e funcional desenvolvido com HTML, CSS e JavaScript puro. Permite que os usuários criem, editem, salvem e gerenciem suas anotações diretamente no navegador usando localStorage.

## ✨ Funcionalidades

- **Interface Intuitiva**: Design moderno e responsivo com gradientes atraentes
- **Salvamento Local**: As notas são salvas automaticamente no navegador usando localStorage
- **Auto-save**: Salvamento automático a cada 30 segundos
- **Contador Inteligente**: Exibe contagem de caracteres e palavras em tempo real
- **Atalhos de Teclado**: Suporte ao atalho Ctrl+S para salvamento rápido
- **Histórico de Notas**: Mantém um histórico das últimas 10 notas salvas
- **Responsivo**: Funciona perfeitamente em desktop e dispositivos móveis
- **Animações Suaves**: Feedback visual para ações do usuário

## 🚀 Como Usar

### Instalação

1. Clone este repositório:
```bash
git clone https://github.com/seu-usuario/bloco-de-notas.git
```

2. Navegue até o diretório do projeto:
```bash
cd bloco-de-notas
```

3. Abra o arquivo `index.html` em seu navegador preferido:
   - Duplo clique no arquivo `index.html`, ou
   - Arraste o arquivo para o navegador, ou
   - Use um servidor local (recomendado para desenvolvimento)

### Usando um Servidor Local (Recomendado)

Para uma melhor experiência, especialmente durante desenvolvimento, use um servidor local:

**Com Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Com Node.js (npx):**
```bash
npx serve .
```

**Com Live Server (VS Code):**
- Instale a extensão "Live Server"
- Clique com o botão direito em `index.html`
- Selecione "Open with Live Server"

Depois acesse `http://localhost:8000` no seu navegador.

## 🎯 Funcionalidades Detalhadas

### Botões da Barra de Ferramentas

- **Nova Nota**: Limpa o editor para começar uma nova anotação
- **Salvar**: Salva a nota atual no localStorage do navegador
- **Carregar**: Carrega a última nota salva
- **Excluir**: Remove a nota atual do armazenamento local

### Recursos Avançados

- **Auto-save**: As notas são automaticamente salvas a cada 30 segundos
- **Atalho Ctrl+S**: Salve rapidamente usando o atalho de teclado
- **Contador Dinâmico**: Veja em tempo real quantos caracteres e palavras você digitou
- **Feedback Visual**: Animações e mudanças de cor indicam o status das operações
- **Histórico**: As últimas 10 notas são mantidas no histórico local

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e moderna
- **CSS3**: Estilização avançada com gradientes, animações e responsividade
- **JavaScript ES6+**: Lógica da aplicação com classes e métodos modernos
- **localStorage**: Armazenamento local no navegador
- **Responsive Design**: Layout adaptável para diferentes tamanhos de tela

## 📁 Estrutura do Projeto

```
bloco-de-notas/
├── index.html          # Página principal da aplicação
├── styles.css          # Estilos e animações
├── script.js           # Lógica da aplicação
└── README.md           # Documentação do projeto
```

## 🎨 Personalização

### Alterando Cores

Edite o arquivo `styles.css` para personalizar o esquema de cores:

```css
/* Gradiente principal */
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Cabeçalho */
header {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
```

### Modificando Funcionalidades

O arquivo `script.js` contém toda a lógica da aplicação. Você pode:

- Alterar o intervalo do auto-save (padrão: 30 segundos)
- Modificar a quantidade de notas no histórico (padrão: 10)
- Adicionar novos atalhos de teclado
- Implementar exportação para diferentes formatos

## 🔧 Desenvolvimento

### Estrutura do Código JavaScript

A aplicação é organizada em uma classe principal `BlocoDeNotas` que gerencia:

- **Inicialização**: Configuração de event listeners e carregamento da última nota
- **Gerenciamento de Notas**: Criar, salvar, carregar e excluir notas
- **Interface**: Atualização de contadores, status e animações
- **Armazenamento**: Interação com localStorage para persistência

### Adicionando Novas Funcionalidades

Para adicionar uma nova funcionalidade:

1. Adicione o elemento HTML necessário em `index.html`
2. Estilize o elemento em `styles.css`
3. Implemente a lógica em `script.js` dentro da classe `BlocoDeNotas`
4. Adicione event listeners no método `initializeEventListeners()`

## 🌐 Compatibilidade

- **Navegadores Modernos**: Chrome, Firefox, Safari, Edge (versões atuais)
- **Dispositivos**: Desktop, tablet e smartphone
- **Armazenamento**: Requer suporte a localStorage (disponível em todos os navegadores modernos)

## 📱 Responsividade

A aplicação é totalmente responsiva e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout completo com todas as funcionalidades
- **Tablet**: Interface otimizada para toque
- **Smartphone**: Layout compacto com botões maiores para facilitar o uso

## 🔒 Privacidade e Segurança

- **Armazenamento Local**: Todas as notas são salvas apenas no seu navegador
- **Sem Servidor**: Nenhum dado é enviado para servidores externos
- **Privacidade Total**: Suas anotações permanecem privadas em seu dispositivo

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🚀 Próximas Funcionalidades

- [ ] Exportação para PDF
- [ ] Temas personalizáveis
- [ ] Sincronização com nuvem (opcional)
- [ ] Suporte a Markdown
- [ ] Busca em notas
- [ ] Categorização de notas
- [ ] Modo escuro/claro

## 📞 Suporte

Se você encontrar algum problema ou tiver sugestões, por favor:

1. Verifique se o problema já foi reportado nas Issues
2. Crie uma nova Issue com detalhes do problema
3. Inclua informações sobre seu navegador e sistema operacional

---

**Desenvolvido com ❤️ usando tecnologias web modernas**

