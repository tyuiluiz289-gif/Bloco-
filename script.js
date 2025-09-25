class BlocoDeNotas {
    constructor() {
        this.noteEditor = document.getElementById('noteEditor');
        this.statusText = document.getElementById('statusText');
        this.charCount = document.getElementById('charCount');
        this.currentNoteKey = 'nota_atual';
        
        this.initializeEventListeners();
        this.loadLastNote();
        this.updateCharCount();
    }
    
    initializeEventListeners() {
        // Botões da toolbar
        document.getElementById('newNote').addEventListener('click', () => this.newNote());
        document.getElementById('saveNote').addEventListener('click', () => this.saveNote());
        document.getElementById('loadNote').addEventListener('click', () => this.loadNote());
        document.getElementById('deleteNote').addEventListener('click', () => this.deleteNote());
        
        // Editor de texto
        this.noteEditor.addEventListener('input', () => {
            this.updateCharCount();
            this.updateStatus('Modificado');
        });
        
        // Auto-save a cada 30 segundos
        setInterval(() => {
            if (this.noteEditor.value.trim()) {
                this.autoSave();
            }
        }, 30000);
        
        // Salvar com Ctrl+S
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                this.saveNote();
            }
        });
    }
    
    newNote() {
        if (this.noteEditor.value.trim() && !confirm('Tem certeza que deseja criar uma nova nota? As alterações não salvas serão perdidas.')) {
            return;
        }
        
        this.noteEditor.value = '';
        this.updateCharCount();
        this.updateStatus('Nova nota criada');
        this.noteEditor.focus();
    }
    
    saveNote() {
        const content = this.noteEditor.value;
        
        if (!content.trim()) {
            this.updateStatus('Nada para salvar', 'error');
            return;
        }
        
        try {
            // Salvar no localStorage
            localStorage.setItem(this.currentNoteKey, content);
            
            // Também salvar com timestamp para histórico
            const timestamp = new Date().toISOString();
            const historyKey = `nota_${timestamp}`;
            localStorage.setItem(historyKey, content);
            
            // Atualizar lista de notas salvas
            this.updateSavedNotesList(historyKey, timestamp);
            
            this.showSaveAnimation();
            this.updateStatus('Nota salva com sucesso!', 'success');
            
        } catch (error) {
            console.error('Erro ao salvar:', error);
            this.updateStatus('Erro ao salvar a nota', 'error');
        }
    }
    
    loadNote() {
        try {
            const savedNote = localStorage.getItem(this.currentNoteKey);
            
            if (savedNote) {
                this.noteEditor.value = savedNote;
                this.updateCharCount();
                this.updateStatus('Nota carregada', 'success');
            } else {
                this.updateStatus('Nenhuma nota salva encontrada', 'error');
            }
        } catch (error) {
            console.error('Erro ao carregar:', error);
            this.updateStatus('Erro ao carregar a nota', 'error');
        }
    }
    
    deleteNote() {
        if (!confirm('Tem certeza que deseja excluir a nota atual?')) {
            return;
        }
        
        try {
            localStorage.removeItem(this.currentNoteKey);
            this.noteEditor.value = '';
            this.updateCharCount();
            this.updateStatus('Nota excluída', 'success');
        } catch (error) {
            console.error('Erro ao excluir:', error);
            this.updateStatus('Erro ao excluir a nota', 'error');
        }
    }
    
    autoSave() {
        const content = this.noteEditor.value;
        if (content.trim()) {
            localStorage.setItem(this.currentNoteKey, content);
            this.updateStatus('Auto-salvo', 'info');
        }
    }
    
    loadLastNote() {
        try {
            const lastNote = localStorage.getItem(this.currentNoteKey);
            if (lastNote) {
                this.noteEditor.value = lastNote;
                this.updateStatus('Última nota carregada');
            }
        } catch (error) {
            console.error('Erro ao carregar última nota:', error);
        }
    }
    
    updateCharCount() {
        const count = this.noteEditor.value.length;
        this.charCount.textContent = `${count} caracteres`;
        
        // Adicionar informação de palavras
        const words = this.noteEditor.value.trim() ? this.noteEditor.value.trim().split(/\s+/).length : 0;
        this.charCount.textContent += ` • ${words} palavras`;
    }
    
    updateStatus(message, type = 'info') {
        this.statusText.textContent = message;
        
        // Remover classes anteriores
        this.statusText.classList.remove('status-success', 'status-error', 'status-info');
        
        // Adicionar nova classe baseada no tipo
        if (type !== 'info') {
            this.statusText.classList.add(`status-${type}`);
        }
        
        // Limpar status após 3 segundos
        setTimeout(() => {
            if (this.statusText.textContent === message) {
                this.statusText.textContent = 'Pronto';
                this.statusText.classList.remove('status-success', 'status-error', 'status-info');
            }
        }, 3000);
    }
    
    showSaveAnimation() {
        const saveBtn = document.getElementById('saveNote');
        saveBtn.classList.add('saving');
        saveBtn.textContent = 'Salvando...';
        
        setTimeout(() => {
            saveBtn.classList.remove('saving');
            saveBtn.classList.add('saved');
            saveBtn.textContent = 'Salvo!';
            
            setTimeout(() => {
                saveBtn.classList.remove('saved');
                saveBtn.textContent = 'Salvar';
            }, 1000);
        }, 500);
    }
    
    updateSavedNotesList(key, timestamp) {
        let savedNotes = JSON.parse(localStorage.getItem('lista_notas_salvas') || '[]');
        
        // Adicionar nova nota à lista
        savedNotes.unshift({
            key: key,
            timestamp: timestamp,
            preview: this.noteEditor.value.substring(0, 50) + (this.noteEditor.value.length > 50 ? '...' : '')
        });
        
        // Manter apenas as últimas 10 notas
        savedNotes = savedNotes.slice(0, 10);
        
        localStorage.setItem('lista_notas_salvas', JSON.stringify(savedNotes));
    }
    
    // Método para exportar nota como arquivo de texto
    exportNote() {
        const content = this.noteEditor.value;
        if (!content.trim()) {
            this.updateStatus('Nada para exportar', 'error');
            return;
        }
        
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `nota_${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.updateStatus('Nota exportada!', 'success');
    }
}

// Adicionar estilos para status
const statusStyles = `
.status-success {
    color: #28a745 !important;
    font-weight: bold;
}

.status-error {
    color: #dc3545 !important;
    font-weight: bold;
}

.status-info {
    color: #17a2b8 !important;
    font-weight: bold;
}
`;

// Adicionar estilos ao documento
const styleSheet = document.createElement('style');
styleSheet.textContent = statusStyles;
document.head.appendChild(styleSheet);

// Inicializar a aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new BlocoDeNotas();
});

// Adicionar informações sobre o aplicativo no console
console.log('📝 Bloco de Notas Simples v1.0');
console.log('Funcionalidades:');
console.log('- Salvar/Carregar notas no navegador');
console.log('- Auto-save a cada 30 segundos');
console.log('- Contador de caracteres e palavras');
console.log('- Atalho Ctrl+S para salvar');
console.log('- Histórico das últimas 10 notas');

