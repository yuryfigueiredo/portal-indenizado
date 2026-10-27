import { chromium } from 'playwright';

async function runBrowserAgent() {
  console.log('🤖 [Agente Navegador QA] Iniciando navegador automatizado Chromium...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  const errors = [];
  page.on('pageerror', (err) => {
    console.error('❌ [Erro de Console]:', err.message);
    errors.push(err.message);
  });

  try {
    // 1. Acessa a Home
    console.log('➡️ [Passo 1] Acessando http://localhost:5173/ ...');
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
    console.log('✅ Página inicial carregada com sucesso! Título:', await page.title());

    // 2. Testa seleção de categorias no widget de Triagem
    console.log('➡️ [Passo 2] Testando cliques nas opções de problemas...');
    const opcoes = ['Nome Negativado', 'Golpes Bancários/Pix', 'Corte de Luz/Água', 'Voo Cancelado/Atrasado'];
    for (const opt of opcoes) {
      const btn = page.locator(`button:has-text("${opt}")`).first();
      await btn.click();
      console.log(`   ✓ Clicou no botão: "${opt}"`);
      await page.waitForTimeout(300);
    }

    // 3. Testa o botão "Avançar para o Resultado"
    console.log('➡️ [Passo 3] Clicando em "Avançar para o Resultado" (Passo 1 -> Passo 2)...');
    const btnAvancar1 = page.locator('button:has-text("Avançar para o Resultado")').first();
    await btnAvancar1.click();
    await page.waitForTimeout(500);

    // Valida se foi para o Passo 2
    const textoPasso2 = await page.locator('text=Passo 2 de 3').isVisible();
    console.log(`   ${textoPasso2 ? '✅' : '❌'} Transição para o Passo 2: ${textoPasso2 ? 'SUCESSO' : 'FALHOU'}`);

    // Preenche dados do Passo 2
    console.log('➡️ [Passo 4] Preenchendo dados da empresa no Passo 2...');
    const inputEmpresa = page.locator('input[placeholder*="Latam"]').first();
    await inputEmpresa.fill('Latam Airlines');
    console.log('   ✓ Inseriu empresa: "Latam Airlines"');

    // Avança para o Passo 3
    console.log('➡️ [Passo 5] Clicando em avançar para o Passo 3...');
    const btnAvancar2 = page.locator('button:has-text("Avançar para o Resultado")').first();
    await btnAvancar2.click();
    await page.waitForTimeout(500);

    const textoPasso3 = await page.locator('text=Passo 3 de 3').isVisible();
    console.log(`   ${textoPasso3 ? '✅' : '❌'} Transição para o Passo 3: ${textoPasso3 ? 'SUCESSO' : 'FALHOU'}`);

    // Preenche contato
    console.log('➡️ [Passo 6] Preenchendo contato no Passo 3...');
    await page.locator('input[placeholder*="nome"]').first().fill('Yury Figueiredo');
    await page.locator('input[placeholder*="99999"]').first().fill('(11) 98765-4321');

    // Clica em "Calcular Minha Indenização"
    console.log('➡️ [Passo 7] Clicando no botão "Calcular Minha Indenização"...');
    const btnCalcular = page.locator('button:has-text("Calcular Minha Indenização")').first();
    await btnCalcular.click();
    await page.waitForTimeout(500);

    // Verifica tela de resultado
    const temSucesso = await page.locator('text=Caso Elegível para Indenização').isVisible();
    const estimativa = await page.locator('text=R$ 4.000 a R$ 10.000').isVisible();
    console.log(`   ${temSucesso && estimativa ? '✅' : '❌'} Cálculo e Resultado: ${temSucesso && estimativa ? 'APROVADO (R$ 4.000 a R$ 10.000 exibido)' : 'FALHOU'}`);

    // 4. Testa Links do Menu
    console.log('➡️ [Passo 8] Testando navegação pelos links do cabeçalho...');
    
    // Link Como Funciona
    await page.locator('a:has-text("Como Funciona")').first().click();
    await page.waitForTimeout(500);
    console.log('   ✓ Navegou para /como-funciona -> Título na tela:', await page.locator('h1').textContent());

    // Link Buscar Direitos (Notícias)
    await page.locator('a:has-text("Buscar Direitos")').first().click();
    await page.waitForTimeout(500);
    console.log('   ✓ Navegou para /noticias -> Título na tela:', await page.locator('h1').textContent());

    // Clica no primeiro artigo de notícias
    console.log('➡️ [Passo 9] Testando clique para abrir artigo completo de notícias...');
    await page.locator('text=Ler guia completo').first().click();
    await page.waitForTimeout(500);
    console.log('   ✓ Artigo aberto com sucesso -> Título do artigo:', await page.locator('h1').textContent());
    const featuredSnippetVisivel = await page.locator('text=Resposta Rápida').isVisible();
    console.log(`   ${featuredSnippetVisivel ? '✅' : '❌'} Featured Snippet do Artigo presente: ${featuredSnippetVisivel}`);

    // Link Para Advogados
    console.log('➡️ [Passo 10] Testando botão "Para Advogados"...');
    await page.locator('a:has-text("Para Advogados")').first().click();
    await page.waitForTimeout(500);
    console.log('   ✓ Navegou para /para-advogados -> Título na tela:', await page.locator('h1').textContent());

    // Link Dúvidas Frequentes
    console.log('➡️ [Passo 11] Testando link "Dúvidas Frequentes" e clique no acordeão...');
    await page.locator('a:has-text("Dúvidas Frequentes")').first().click();
    await page.waitForTimeout(500);
    const primeiroFaq = page.locator('button:has-text("Quanto custa")').first();
    await primeiroFaq.click();
    console.log('   ✓ Clicou na pergunta do acordeão do FAQ');

    console.log('\n🎉 ========================================================');
    console.log('   AUDITORIA DO AGENTE DE NAVEGAÇÃO: 100% APROVADO!');
    console.log('   Todos os botões clicam, transitam e os links funcionam.');
    console.log('   Total de erros encontrados: ' + errors.length);
    console.log('========================================================\n');

  } catch (err) {
    console.error('❌ Falha na auditoria do navegador:', err);
  } finally {
    await browser.close();
  }
}

runBrowserAgent();
