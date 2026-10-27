Based on the MASTER_HANDOFF.md content, I'll provide you with the complete platform structure, route mapping, and content architecture. Here's the comprehensive analysis you requested:

## **MASTER_HANDOFF.md Analysis & Platform Structure**

### **1. Complete Route Map & Navigation Structure**

#### **Primary Navigation (Header)**
- **Logo**: Balança da Justiça + "Portal do Indenizado"
- **Core Links**:
  - `/simulacao` - Simulação Rápida
  - `/como-funciona` - Como Funciona
  - `/noticias` - Buscar Direitos (News Hub)
  - `/duvidas-frequentes` - FAQ
- **Action Buttons**:
  - `/para-advogados` - Para Advogados (B2B)
  - WhatsApp Float Button (B2C)

#### **Complete Route Structure**
```
/
├── /simulacao
├── /como-funciona
├── /noticias
│   └── /noticias/:slug (dynamic article routes)
├── /para-advogados
└── /duvidas-frequentes
└── /termos-lgpd (compliance page)
```

### **2. SEO Content Hub - 4 Pain Niches Structure**

#### **Niche 1: Direito do Passageiro Aéreo**
**Primary Keywords**: "voo cancelado indenização", "atraso voo compensação", "overbooking direito", "extravio bagagem"
**Target Articles**:
- "Como solicitar indenização por voo cancelado"
- "Direitos em caso de overbooking"
- "Extravio de bagagem: como proceder"

#### **Niche 2: Negativação Indevida**
**Primary Keywords**: "nome sujo indevidamente", "serasa negativação", "dívida paga ainda sujo"
**Target Articles**:
- "Como limpar nome sujo indevidamente"
- "Negativação indevida: direitos e indenização"

#### **Niche 3: Fraudes e Golpes Bancários**
**Primary Keywords**: "golpe pix indenização", "estorno não reconhecido", "fraude bancária"
**Target Articles**:
- "Golpe do Pix: como se proteger e indenizar"
- "Empréstimo não reconhecido: direitos do consumidor"

#### **Niche 4: Interrupção de Serviços Essenciais**
**Primary Keywords**: "corte energia indenização", "corte água direito", "telecom interrupção"
**Target Articles**:
- "Corte indevido de energia: como indenizar"
- "Interrupção de água: direitos e compensação"

### **3. 5-Block Anatomy Applied to Each Article**

#### **Template Structure for All Articles**
```jsx
// Article Component Structure
{
  "featuredSnippet": {
    "title": "Resposta direta no 1º parágrafo",
    "content": "Resposta objetiva à pergunta do título nas primeiras 3 linhas",
    "optimization": "Posição Zero do Google"
  },
  "interactiveWidget": {
    "type": "EligibilityCalculator",
    "title": "Calcule sua elegibilidade em 1 minuto",
    "description": "Preencha dados básicos para verificar viabilidade jurídica",
    "integration": "No meio do texto, como bloco visual destacado"
  },
  "rightsInPlainLanguage": {
    "title": "Seus direitos explicados de forma simples",
    "content": "Tradução de leis/anac/cdc/súmulas em linguagem acessível",
    "focus": "Sem juridiquês, prático e aplicável"
  },
  "proofChecklist": {
    "title": "Documentos que você precisa guardar agora",
    "items": [
      "Prints de telas",
      "Cartões de embarque",
      "Fotos do painel",
      "Protocolos",
      "Comprovantes de pagamento"
    ],
    "urgency": "O que coletar imediatamente"
  },
  "closingForm": {
    "title": "Pronto para indenizar?",
    "description": "Formulário de triagem embutido para capturar leads",
    "integration": "Box de fechamento no final do artigo",
    "conversion": "Lead qualificado para advogados parceiros"
  }
}
```

### **4. Complete Article Data Structure**

#### **Example Article: "Como solicitar indenização por voo cancelado"**

```jsx
{
  "slug": "como-solicitar-indenizacao-por-voo-cancelado",
  "title": "Como solicitar indenização por voo cancelado",
  "metaDescription": "Resposta direta: Simule agora e descubra se tem direito a R$ 10.000 por voo cancelado. Sem juridiquês, com calculadora interativa.",
  "keywords": ["voo cancelado indenização", "cancelamento voo compensação", "ANAC resolução 400"],
  "content": {
    "featuredSnippet": "Se seu voo foi cancelado, você tem direito a indenização de até R$ 10.000, além de assistência material e reacomodação. Simule agora mesmo e descubra se seu caso se encaixa na Resolução 400 da ANAC.",
    "interactiveWidget": {
      "component": "FlightRightsCalculator",
      "props": {
        "type": "cancellation",
        "maxCompensation": 10000,
        "assistanceIncluded": true
      }
    },
    "rightsInPlainLanguage": "De acordo com a Resolução 400 da ANAC, companhias aéreas devem indenizar passageiros em caso de cancelamento, além de fornecer assistência material (refeição, hospedagem) e opção de reacomodação em outro voo.",
    "proofChecklist": [
      "Comprovante de compra do bilhete",
      "Print da página de cancelamento (companhia aérea)",
      "Fotos das telas mostrando o cancelamento",
      "Cartão de embarque (se houver)",
      "E-mail de comunicação do cancelamento",
      "Comprovantes de despesas extras (refeição, hospedagem, transporte)"
    ],
    "closingForm": {
      "type": "LeadCapture",
      "fields": ["Nome", "E-mail", "Telefone", "Voo (nº)", "Data do cancelamento"],
      "conversionText": "Analisaremos seu caso e conectaremos você a advogados especializados em direito aéreo."
    }
  }
}
```

### **5. OAB Compliance Specifications (Provimento 205/2021)**

#### **Legal Positioning Requirements**
- **Platform Nature**: Portal informativo de direitos do consumidor + ferramenta tecnológica de triagem prévia
- **B2C Separation**: Não presta consultoria jurídica privativa, apenas educação e organização documental
- **B2B Monetization**: 
  - Software subscription model
  - Publicidade informativa permitida (Provimento 205/2021)
  - Technology triage fees (CPL - Cost Per Lead)

#### **Compliance Checklist**
- [ ] All content includes "Informação jurídica gratuita" disclaimer
- [ ] Lead forms clearly state data will be shared with OAB-inscribed lawyers
- [ ] No promises of specific legal outcomes
- [ ] Clear separation between educational content and legal services
- [ ] Privacy policy compliant with LGPD
- [ ] Terms of service include OAB compliance statement

### **