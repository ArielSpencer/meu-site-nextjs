"use client"

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaWhatsapp, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const BriefingLandingPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [missingFields, setMissingFields] = useState([]);
  const [showValidationErrors, setShowValidationErrors] = useState(false);
  
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    descricao_negocio: '',
    servicos: '',
    diferencial: '',
    publico_alvo: '',
    problema_resolve: '',
    objetivo_principal: '',
    acao_visitante: '',
    divulgacao: '',
    tem_logo: '',
    logo_file: '',
    cores_marca: '',
    estilo_visual: '',
    tipografia: '',
    secoes: [],
    como_chamar: '',
    texto_apresentacao: '',
    resultados_conquistas: '',
    depoimentos: '',
    cases_sucesso: '',
    tipo_formulario: '',
    link_agendamento: '',
    integracao_whatsapp: '',
    site_referencia: '',
    site_concorrente: '',
    tom_comunicacao: '',
    dominio: '',
    email_profissional: '',
    redes_sociais: '',
    funcionalidade_especial: '',
    observacoes: ''
  });

  const sections = [
    {
      title: "Informações Iniciais",
      fields: ['nome', 'email']
    },
    {
      title: "Informações sobre seu Negócio",
      fields: ['descricao_negocio', 'servicos', 'diferencial', 'publico_alvo', 'problema_resolve']
    },
    {
      title: "Objetivos da Landing Page",
      fields: ['objetivo_principal', 'acao_visitante', 'divulgacao']
    },
    {
      title: "Identidade Visual",
      fields: ['tem_logo', 'logo_file', 'cores_marca', 'estilo_visual', 'tipografia']
    },
    {
      title: "Estrutura e Conteúdo",
      fields: ['secoes', 'como_chamar', 'texto_apresentacao', 'resultados_conquistas']
    },
    {
      title: "Depoimentos e Cases",
      fields: ['depoimentos', 'cases_sucesso']
    },
    {
      title: "Funcionalidades Específicas",
      fields: ['tipo_formulario', 'link_agendamento', 'integracao_whatsapp']
    },
    {
      title: "Referências e Inspirações",
      fields: ['site_referencia', 'site_concorrente', 'tom_comunicacao']
    },
    {
      title: "Informações Técnicas",
      fields: ['dominio', 'email_profissional', 'redes_sociais', 'funcionalidade_especial']
    },
    {
      title: "Observações Finais",
      fields: ['observacoes']
    }
  ];

  useEffect(() => {
    const savedData = localStorage.getItem('briefing-progress');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setFormData(parsed.formData || formData);
      setCurrentStep(parsed.currentStep || 0);
    }
  }, []);

  useEffect(() => {
    if (!submitted) {
      localStorage.setItem('briefing-progress', JSON.stringify({
        formData,
        currentStep
      }));
    }
  }, [formData, currentStep, submitted]);

  const getFieldClassName = (field, baseClassName = "w-full") => {
    const isMissing = showValidationErrors && missingFields.includes(field);
    return isMissing ? `${baseClassName} border-2 border-orange-500 bg-orange-100/10` : baseClassName;
  };

  const getFieldLabelClassName = (field, baseClassName = "text-white/90 block mb-2") => {
    const isMissing = showValidationErrors && missingFields.includes(field);
    return isMissing ? `${baseClassName} text-orange-400 font-semibold` : baseClassName;
  };

  const updateField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    const isFieldValid = () => {
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      return value && (typeof value !== 'string' || value.trim() !== '');
    };
    
    if (isFieldValid() && missingFields.includes(field)) {
      setMissingFields(prev => prev.filter(f => f !== field));
      
      if (missingFields.length === 1) {
        setShowValidationErrors(false);
      }
    }
  };

  const nextStep = () => {
    if (currentStep < sections.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const requiredFields = ['nome', 'email', 'descricao_negocio', 'servicos', 'publico_alvo', 'objetivo_principal', 'acao_visitante', 'tem_logo', 'cores_marca', 'estilo_visual', 'secoes', 'como_chamar', 'tipo_formulario', 'integracao_whatsapp', 'tom_comunicacao'];
    const missing = requiredFields.filter(field => {
      const value = formData[field];
      if (Array.isArray(value)) {
        return value.length === 0;
      }
      return !value || (typeof value === 'string' && value.trim() === '');
    });
    
    if (missing.length > 0) {
      setMissingFields(missing);
      setShowValidationErrors(true);
      
      alert('Por favor, preencha todos os campos obrigatórios destacados em laranja.');
      setCurrentStep(0);
      
      setTimeout(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }, 100);
      return;
    }
    
    setMissingFields([]);
    setShowValidationErrors(false);
    
    const templateParams = {
      nome: formData.nome,
      email: formData.email,
      briefing_data: JSON.stringify(formData, null, 2)
    };

    emailjs.send('service_2td4316', 'template_h7boeyc', templateParams, 'dkMvJ_Mm6jXkEKkIu')
      .then((result) => {
        setSubmitted(true);
        localStorage.removeItem('briefing-progress');
      }, (error) => {
        alert('Erro ao enviar: ' + error.text);
      });
  };

  const validateCurrentStep = () => {
    const currentSection = sections[currentStep];
    const requiredFields = ['nome', 'email', 'descricao_negocio', 'servicos', 'publico_alvo', 'objetivo_principal', 'acao_visitante', 'tem_logo', 'cores_marca', 'estilo_visual', 'secoes', 'como_chamar', 'tipo_formulario', 'integracao_whatsapp', 'tom_comunicacao'];
    
    for (const field of currentSection.fields) {
      if (requiredFields.includes(field)) {
        const value = formData[field];
        if (Array.isArray(value)) {
          if (value.length === 0) return false;
        } else {
          if (!value || (typeof value === 'string' && value.trim() === '')) return false;
        }
      }
    }
    return true;
  };

  const validateAllFields = () => {
    const requiredFields = ['nome', 'email', 'descricao_negocio', 'servicos', 'publico_alvo', 'objetivo_principal', 'acao_visitante', 'tem_logo', 'cores_marca', 'estilo_visual', 'secoes', 'como_chamar', 'tipo_formulario', 'integracao_whatsapp', 'tom_comunicacao'];
    return requiredFields.every(field => {
      const value = formData[field];
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      return value && (typeof value !== 'string' || value.trim() !== '');
    });
  };

  const renderField = (field) => {
    switch (field) {
      case 'nome':
        return (
          <div key={field}>
            <label className={getFieldLabelClassName(field)}>Seu nome completo *</label>
            <Input
              type="text"
              placeholder="Seu nome completo"
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
              className={getFieldClassName(field)}
              required
            />
          </div>
        );
      
      case 'email':
        return (
          <div key={field}>
            <label className={getFieldLabelClassName(field)}>Seu email principal *</label>
            <Input
              type="email"
              placeholder="Seu email principal"
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
              className={getFieldClassName(field)}
              required
            />
          </div>
        );

      case 'descricao_negocio':
        return (
          <div key={field}>
            <label className={getFieldLabelClassName(field)}>1. Descreva seu negócio em uma frase (como você se apresentaria em um pitch de elevador de 30 segundos com pontos-chave do seu negócio, produto ou ideia): *</label>
            <Textarea
              placeholder="Ex: Ajudo empreendedores a criar sua presença digital através de sites personalizados..."
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
              className={getFieldClassName(field)}
              required
            />
          </div>
        );

      case 'servicos':
        return (
          <div key={field}>
            <label className={getFieldLabelClassName(field)}>2. Liste todos os serviços que você oferece: *</label>
            <Textarea
              placeholder="Ex: Consultoria, Mentoria 1:1, Cursos online, Workshops..."
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
              className={getFieldClassName(field)}
              required
            />
          </div>
        );

      case 'diferencial':
        return (
          <div key={field}>
            <label className="text-white/90 block mb-2">3. Qual é o seu diferencial competitivo? O que te torna único(a) no mercado?</label>
            <Textarea
              placeholder="Ex: 10 anos de experiência, metodologia própria, garantia de resultados..."
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
              className="w-full"
            />
          </div>
        );

      case 'publico_alvo':
        return (
          <div key={field}>
            <label className={getFieldLabelClassName(field)}>4. Descreva seu público-alvo ideal (idade, profissão, onde estão): *</label>
            <Textarea
              placeholder="Ex: Homens e Mulheres de 25-45 anos, empreendedores iniciantes, com dificuldade em vender online, ativos no Instagram..."
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
              className={getFieldClassName(field)}
              required
            />
          </div>
        );

      case 'problema_resolve':
        return (
          <div key={field}>
            <label className="text-white/90 block mb-2">5. Qual o principal problema do seu público você resolve?</label>
            <Textarea
              placeholder="Ex: Falta de visibilidade para vendas online, dificuldade em atrair clientes qualificados..."
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
              className="w-full"
            />
          </div>
        );

      case 'objetivo_principal':
        return (
          <div key={field}>
            <label className={getFieldLabelClassName(field)}>6. Qual é o objetivo principal para sua landing page? *</label>
            <Select onValueChange={(value) => updateField(field, value)} value={formData[field]}>
              <SelectTrigger className={getFieldClassName(field)}>
                <SelectValue placeholder="Selecione o objetivo principal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gerar-leads">Gerar leads</SelectItem>
                <SelectItem value="venda-direta">Venda direta</SelectItem>
                <SelectItem value="agendar-calls">Agendar calls</SelectItem>
                <SelectItem value="download-material">Download de material</SelectItem>
                <SelectItem value="inscricao-evento">Inscrição em evento</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
            {formData[field] === 'outro' && (
              <Input
                className="w-full mt-2"
                placeholder="Especifique qual outro objetivo..."
                value={formData.objetivo_principal_outro || ''}
                onChange={(e) => updateField('objetivo_principal_outro', e.target.value)}
              />
            )}
          </div>
        );

      case 'acao_visitante':
        return (
          <div key={field}>
            <label className={getFieldLabelClassName(field)}>7. Que ação você quer que o visitante tome? (inclua o link se for redirecionamento para fora da landing page) *</label>
            <Textarea
              placeholder="Ex: Preencher formulário, agendar consulta gratuita, baixar ebook, comprar curso - link: https://..."
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
              className={getFieldClassName(field)}
              required
            />
          </div>
        );

      case 'divulgacao':
        return (
          <div key={field}>
            <label className="text-white/90 block mb-2">8. Como você pretende divulgar a landing page?</label>
            <Textarea
              placeholder="Ex: Instagram, Google Ads, Facebook Ads, indicações, email marketing..."
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
              className="w-full"
            />
          </div>
        );

      case 'tem_logo':
        return (
          <div key={field}>
            <label className={getFieldLabelClassName(field)}>9. Você já tem logo? *</label>
            <Select onValueChange={(value) => updateField(field, value)} value={formData[field]}>
              <SelectTrigger className={getFieldClassName(field)}>
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sim">Sim, tenho logo</SelectItem>
                <SelectItem value="preciso-criar">Não tenho, mas preciso criar</SelectItem>
                <SelectItem value="nao">Não tenho logo e não gostaria de ter</SelectItem>
              </SelectContent>
            </Select>
          </div>
        );

      case 'logo_file':
        return (
          <div key={field}>
            <label className="text-white/90 block mb-2">Se tem logo, envie aqui o arquivo em alta qualidade (PNG):</label>
            <Input
              type="file"
              accept=".png"
              onChange={(e) => updateField(field, e.target.files?.[0]?.name || '')}
              className="w-full"
            />
          </div>
        );

      case 'cores_marca':
        return (
          <div key={field}>
            <label className={getFieldLabelClassName(field)}>10. Quais cores representam sua marca? *</label>
            <Input
              placeholder="Ex: Verde pinheiro, dourado, branco ou #916E5E..."
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
              className={getFieldClassName(field)}
              required
            />
          </div>
        );

      case 'estilo_visual':
        return (
          <div key={field}>
            <label className={getFieldLabelClassName(field)}>11. Que estilo visual você prefere? *</label>
            <Select onValueChange={(value) => updateField(field, value)} value={formData[field]}>
              <SelectTrigger className={getFieldClassName(field)}>
                <SelectValue placeholder="Selecione o estilo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="moderno-minimalista">Moderno/Minimalista</SelectItem>
                <SelectItem value="elegante-sofisticado">Elegante/Sofisticado</SelectItem>
                <SelectItem value="colorido-vibrante">Colorido/Vibrante</SelectItem>
                <SelectItem value="clean-profissional">Clean/Profissional</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
            {formData[field] === 'outro' && (
              <Input
                className="w-full mt-2"
                placeholder="Especifique qual estilo..."
                value={formData.estilo_visual_outro || ''}
                onChange={(e) => updateField('estilo_visual_outro', e.target.value)}
              />
            )}
          </div>
        );

      case 'tipografia':
        return (
          <div key={field}>
            <label className="text-white/90 block mb-2">12. Tem alguma fonte (tipografia) específica que gosta?</label>
            <Input
              placeholder="Ex: JetBrains, Montserrat, Roboto, Open Sans..."
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
              className="w-full"
            />
          </div>
        );

      case 'secoes':
        return (
          <div key={field}>
            <label className={getFieldLabelClassName(field)}>13. Que seções você gostaria na landing page? (marque todas que se aplicam) *</label>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {[
                'Banner com chamada principal',
                'Sobre você/sua história',
                'Serviços oferecidos',
                'Depoimentos de clientes',
                'Cases de sucesso/resultados',
                'Formulário de contato',
                'Valores/preços',
                'FAQ (perguntas frequentes)'
              ].map(secao => (
                <label key={secao} className="flex items-center space-x-2 text-sm">
                  <input
                    type="checkbox"
                    checked={formData[field].includes(secao)}
                    onChange={(e) => {
                      const current = formData[field];
                      if (e.target.checked) {
                        updateField(field, [...current, secao]);
                      } else {
                        updateField(field, current.filter(s => s !== secao));
                      }
                    }}
                  />
                  <span>{secao}</span>
                </label>
              ))}
            </div>
            <Input
              className="w-full"
              placeholder="Outras seções que não estão listadas..."
              value={formData.outras_secoes || ''}
              onChange={(e) => updateField('outras_secoes', e.target.value)}
            />
          </div>
        );

      case 'como_chamar':
        return (
          <div key={field}>
            <label className={getFieldLabelClassName(field)}>14. Como você gostaria de ser chamado(a) no site? *</label>
            <Input
              placeholder="Ex: Ariel Spencer, Dra. Mari, Professor João..."
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
              className={getFieldClassName(field)}
              required
            />
          </div>
        );

      case 'texto_apresentacao':
        return (
          <div key={field}>
            <label className="text-white/90 block mb-2">15. Você possui algum texto de apresentação pronto? (opcional)</label>
            <Textarea
              placeholder="Se já tem um texto sobre você ou sua empresa, cole aqui..."
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
              className="w-full"
            />
          </div>
        );

      case 'resultados_conquistas':
        return (
          <div key={field}>
            <label className="text-white/90 block mb-2">16. Quais resultados ou conquistas importantes gostaria de destacar?</label>
            <Textarea
              placeholder="Ex: +500 clientes atendidos, 95% de satisfação, prêmios recebidos..."
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
              className="w-full"
            />
          </div>
        );

      case 'depoimentos':
        return (
          <div key={field}>
            <label className="text-white/90 block mb-2">17. Você tem depoimentos de clientes para usar?</label>
            <Textarea
              className="h-[150px] w-full"
              placeholder="Liste todos os depoimentos, incluindo nome do cliente e resultado obtido..."
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
            />
          </div>
        );

      case 'cases_sucesso':
        return (
          <div key={field}>
            <label className="text-white/90 block mb-2">18. Tem cases de sucesso específicos para destacar?</label>
            <Textarea
              className="h-[150px] w-full"
              placeholder="Descreva casos específicos de clientes e os resultados alcançados..."
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
            />
          </div>
        );

      case 'tipo_formulario':
        return (
          <div key={field}>
            <label className={getFieldLabelClassName(field)}>19. Que tipo de formulário você prefere? *</label>
            <Select onValueChange={(value) => updateField(field, value)} value={formData[field]}>
              <SelectTrigger className={getFieldClassName(field)}>
                <SelectValue placeholder="Selecione o tipo de formulário" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nome-email">Só nome e email</SelectItem>
                <SelectItem value="nome-email-telefone">Nome, email e telefone</SelectItem>
                <SelectItem value="completo">Formulário mais completo com área de interesse</SelectItem>
                <SelectItem value="agendamento">Agendamento direto na agenda</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
            {formData[field] === 'outro' && (
              <Input
                className="w-full mt-2"
                placeholder="Especifique que tipo de formulário..."
                value={formData.tipo_formulario_outro || ''}
                onChange={(e) => updateField('tipo_formulario_outro', e.target.value)}
              />
            )}
          </div>
        );

      case 'link_agendamento':
        return (
          <div key={field}>
            <label className="text-white/90 block mb-2">20. Caso possua, qual o link de agendamento direto (Calendly, etc.)</label>
            <Input
              placeholder="https://calendly.com/seunome ou outro link"
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
              className="w-full"
            />
          </div>
        );

      case 'integracao_whatsapp':
        return (
          <div key={field}>
            <label className={getFieldLabelClassName(field)}>21. Gostaria de direcionar contatos ao WhatsApp para contato direto? *</label>
            <Select onValueChange={(value) => updateField(field, value)} value={formData[field]}>
              <SelectTrigger className={getFieldClassName(field)}>
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sim">Sim, quero essa integração com WhatsApp</SelectItem>
                <SelectItem value="nao">Não precisa</SelectItem>
              </SelectContent>
            </Select>
          </div>
        );

      case 'site_referencia':
        return (
          <div key={field}>
            <label className="text-white/90 block mb-2">22. Tem algum site que admira ou gostaria de usar como referência?</label>
            <Textarea
              placeholder="Cole os links dos sites que gosta e explique o que mais gosta neles..."
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
              className="w-full"
            />
          </div>
        );

      case 'site_concorrente':
        return (
          <div key={field}>
            <label className="text-white/90 block mb-2">23. Há algum site concorrente que você gosta (ou não gosta)?</label>
            <Textarea
              placeholder="Links de concorrentes e o que gosta/não gosta em cada um..."
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
              className="w-full"
            />
          </div>
        );

      case 'tom_comunicacao':
        return (
          <div key={field}>
            <label className={getFieldLabelClassName(field)}>24. Que tom de comunicação você usa com seus clientes? *</label>
            <Select onValueChange={(value) => updateField(field, value)} value={formData[field]}>
              <SelectTrigger className={getFieldClassName(field)}>
                <SelectValue placeholder="Selecione o tom" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="formal-profissional">Formal/Profissional</SelectItem>
                <SelectItem value="descontraido-amigavel">Descontraído/Amigável</SelectItem>
                <SelectItem value="inspirador-motivacional">Inspirador/Motivacional</SelectItem>
                <SelectItem value="direto-objetivo">Direto/Objetivo</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
            {formData[field] === 'outro' && (
              <Input
                className="w-full mt-2"
                placeholder="Especifique qual seu tom de comunicação..."
                value={formData.tom_comunicacao_outro || ''}
                onChange={(e) => updateField('tom_comunicacao_outro', e.target.value)}
              />
            )}
          </div>
        );

      case 'dominio':
        return (
          <div key={field}>
            <label className="text-white/90 block mb-2">25. Você já tem domínio registrado? Qual?</label>
            <Input
              placeholder="Ex: www.seusite.com.br"
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
              className="w-full"
            />
          </div>
        );

      case 'email_profissional':
        return (
          <div key={field}>
            <label className="text-white/90 block mb-2">26. Possui outro email para receber os contatos do formulário?</label>
            <Input
              placeholder="Ex: contato@seusite.com.br"
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
              className="w-full"
            />
          </div>
        );

      case 'redes_sociais':
        return (
          <div key={field}>
            <label className="text-white/90 block mb-2">27. Integrações com redes sociais (Instagram, LinkedIn, etc.)?</label>
            <Textarea
              placeholder="Liste suas redes sociais que gostaria de integração: @arielspencer.dev, linkedin.com/in/seuperfil..."
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
              className="w-full"
            />
          </div>
        );

      case 'funcionalidade_especial':
        return (
          <div key={field}>
            <label className="text-white/90 block mb-2">28. Precisa de alguma funcionalidade especial?</label>
            <Textarea
              placeholder="Ex: chat online, blog, quiz, área de membros..."
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
              className="w-full"
            />
          </div>
        );

      case 'observacoes':
        return (
          <div key={field}>
            <label className="text-white/90 block mb-2">29. Observações adicionais (dúvidas ou algo importante que não foi perguntado):</label>
            <Textarea
              className="h-[150px] w-full"
              placeholder="Qualquer informação adicional que considere importante para o projeto..."
              value={formData[field]}
              onChange={(e) => updateField(field, e.target.value)}
            />
          </div>
        );

      default:
        return null;
    }
  };

  if (submitted) {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-6 min-h-screen flex items-center justify-center"
      >
        <div className="container mx-auto max-w-2xl text-center">
          <div className="bg-[#27272c] rounded-xl p-10">
            <h2 className="text-4xl text-accent mb-6">Obrigado!</h2>
            <p className="text-white/80 text-lg mb-4">
              Seu briefing foi enviado com sucesso!
            </p>
            <p className="text-white/60">
              Em breve estarei analisando todas as informações e entrarei em contato para darmos início ao seu projeto.
            </p>
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <div className="mb-6">
                <h3 className="text-4xl text-accent mb-4">Briefing - Landing Page</h3>
                <p className="text-white/80 mb-2">
                  Vamos criar a landing page perfeita para o seu negócio!
                </p>
                <p className="text-white/60 text-sm mb-1">
                  Tempo médio: 15-25 minutos | * Campos obrigatórios
                  
                </p>
                <p className="text-white/60 text-xs">
                  {/* | Progresso salvo automaticamente */}
                </p>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm text-white/60 mb-2">
                  <span>Etapa {currentStep + 1} de {sections.length}</span>
                  <span>{Math.round(((currentStep + 1) / sections.length) * 100)}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-accent h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / sections.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <h4 className="text-2xl text-white mb-4">{sections[currentStep].title}</h4>

              <div className="space-y-6">
                {sections[currentStep].fields.map(field => renderField(field))}
              </div>

              <div className="flex justify-between mt-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="flex items-center gap-2"
                >
                  <FaArrowLeft size={14} />
                  Voltar
                </Button>

                {currentStep === sections.length - 1 ? (
                  <Button
                    type="button"
                    onClick={handleSubmit}
                    className="flex items-center gap-2 bg-accent hover:bg-accent/90"
                  >
                    Enviar Briefing
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-2"
                  >
                    Próximo
                    <FaArrowRight size={14} />
                  </Button>
                )}
              </div>

              {showValidationErrors && missingFields.length > 0 && currentStep === 0 && (
                <div className="mt-4 p-3 bg-orange-500/20 border border-orange-500 rounded-lg">
                  <p className="text-orange-400 text-sm">
                    ⚠️ Complete os campos destacados em laranja para continuar
                  </p>
                </div>
              )}
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <div className="bg-[#27272c] rounded-xl p-8 max-w-sm">
              <h4 className="text-xl text-accent mb-4">Dúvidas?</h4>
              <p className="text-white/80 mb-6">
                Se tiver qualquer dúvida durante o preenchimento, me chame no WhatsApp que explico!
              </p>
              <a
                href="https://wa.me/5511991007079"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors"
              >
                <FaWhatsapp size={20} />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default BriefingLandingPage;