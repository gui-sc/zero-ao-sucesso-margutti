import {
    CheckCircle,
    Users,
    BookOpen,
    TrendingUp,
    Star,
    Download,
    Play,
    FileText,
    Calculator,
    Shield,
    Target,
    Award,
    ArrowRight,
    Gift,
    Clock,
    CreditCard,
} from "lucide-react";

function App() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#1D4ED8] via-[#1D4ED8] to-[#1D4ED8] text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <div className="w-full flex justify-center mb-8">
                            <img
                                src="./logo.png"
                                alt="Logo Irmãos Margutti"
                                className="w-auto h-14 sm:h-20"
                            />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            DO ZERO AO SUCESSO
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
                            O GUIA COMPLETO PARA SUA CLÍNICA ODONTOLÓGICA
                        </p>
                        <p className="text-lg md:text-xl mb-12 text-blue-200 max-w-3xl mx-auto">
                            Aprenda com quem transforma a odontologia na
                            prática. Se você é dentista e sonha em abrir sua
                            própria clínica ou consolidar seu consultório, este
                            curso foi feito para você!
                        </p>
                        <button className="bg-white text-[#1D4ED8] px-8 py-4 rounded-full text-md sm:text-lg font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                            GARANTIR MINHA VAGA AGORA
                            <ArrowRight className="inline-block ml-2 w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* What You'll Learn Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            O que você vai encontrar neste curso
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Conteúdo completo e prático para transformar sua
                            carreira odontológica
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#1D4ED8]">
                            <div className="flex items-center mb-4">
                                <Shield className="w-8 h-8 text-[#1D4ED8] mr-3" />
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Montagem e Legalização
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                Da escolha do ponto comercial às normas do
                                CRO/CFO, aprenda todo o processo legal para
                                abrir sua clínica.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#1D4ED8]">
                            <div className="flex items-center mb-4">
                                <Calculator className="w-8 h-8 text-[#1D4ED8] mr-3" />
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Gestão Financeira Eficiente
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                Planilhas e tabelas editáveis para controle de
                                receitas e despesas, garantindo a saúde
                                financeira do seu negócio.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#1D4ED8]">
                            <div className="flex items-center mb-4">
                                <TrendingUp className="w-8 h-8 text-[#1D4ED8] mr-3" />
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Marketing Digital
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                Estratégias para atrair e fidelizar pacientes,
                                incluindo protocolos de captação local e online.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#1D4ED8]">
                            <div className="flex items-center mb-4">
                                <FileText className="w-8 h-8 text-[#1D4ED8] mr-3" />
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Organização Contábil
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                Separação da vida pessoal e profissional,
                                garantindo conformidade fiscal e organização
                                total.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#1D4ED8]">
                            <div className="flex items-center mb-4">
                                <Target className="w-8 h-8 text-[#1D4ED8] mr-3" />
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Apresentação de Tratamentos
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                Estratégias comprovadas para apresentar planos
                                de tratamento e fechar mais orçamentos.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#1D4ED8]">
                            <div className="flex items-center mb-4">
                                <Users className="w-8 h-8 text-[#1D4ED8] mr-3" />
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Técnicas de Fidelização
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                Métodos eficazes para gerar indicações contínuas
                                e construir uma base sólida de pacientes fiéis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Materials Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Materiais e ferramentas que você receberá!
                        </h2>
                        <p className="text-xl text-gray-600">
                            Tudo que você precisa para colocar em prática
                            imediatamente.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <Calculator className="w-6 h-6 text-[#1D4ED8] mt-1" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Tabela de Precificação e Hora Clínica
                                    </h3>
                                    <p className="text-gray-600">
                                        Ferramenta completa para calcular seus valores de atendimento e precificar serviços
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <Target className="w-6 h-6 text-[#1D4ED8] mt-1" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Tabela de Geolocalização Estratégica
                                    </h3>
                                    <p className="text-gray-600">
                                        Análise de quantidade de dentistas X população para escolher a melhor região para sua clínica
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <Calculator className="w-6 h-6 text-[#1D4ED8] mt-1" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Tabelas de Valores Completas
                                    </h3>
                                    <p className="text-gray-600">
                                        Equipamentos odontológicos, estoque de consumo, estrutura, reforma, instrumentais, mobílias e eletrônicos
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <FileText className="w-6 h-6 text-[#1D4ED8] mt-1" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Lista Completa para Abertura de CNPJ
                                    </h3>
                                    <p className="text-gray-600">
                                        Todos os documentos necessários para abrir sua empresa de forma legal e organizada
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <Shield className="w-6 h-6 text-[#1D4ED8] mt-1" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Modelos de Documentos Legais
                                    </h3>
                                    <p className="text-gray-600">
                                        Alvará municipal, contrato social, certidões, plano de gerenciamento de resíduos e muito mais
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <Award className="w-6 h-6 text-[#1D4ED8] mt-1" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Documentação Completa para CRO
                                    </h3>
                                    <p className="text-gray-600">
                                        Documentos para inscrição pessoal e cadastro da empresa no Conselho Regional de Odontologia
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <Shield className="w-6 h-6 text-[#1D4ED8] mt-1" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Modelos para Vigilância Sanitária
                                    </h3>
                                    <p className="text-gray-600">
                                        Documentos e modelos necessários para aprovação na vigilância sanitária
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <TrendingUp className="w-6 h-6 text-[#1D4ED8] mt-1" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Dados de Mercado por Especialidade
                                    </h3>
                                    <p className="text-gray-600">
                                        Quantidade de especialistas no Brasil para análise de concorrência e oportunidades
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <Users className="w-6 h-6 text-[#1D4ED8] mt-1" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Lista Geral de Dentistas por Estado
                                    </h3>
                                    <p className="text-gray-600">
                                        Dados completos da distribuição de profissionais em todo o território nacional
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <BookOpen className="w-6 h-6 text-[#1D4ED8] mt-1" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        eBook Completo com Acesso Imediato
                                    </h3>
                                    <p className="text-gray-600">
                                        Material completo para consulta e referência constante durante todo o processo
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <Play className="w-6 h-6 text-[#1D4ED8] mt-1" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Aulas em Vídeo com Passo a Passo
                                    </h3>
                                    <p className="text-gray-600">
                                        Conteúdo visual e detalhado para facilitar o aprendizado e implementação
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <CheckCircle className="w-6 h-6 text-[#1D4ED8] mt-1" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Checklists Práticos para Cada Fase
                                    </h3>
                                    <p className="text-gray-600">
                                        Guias detalhados para não esquecer nenhum detalhe importante do processo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Audience Section */}
            <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Para quem é este curso?
                        </h2>
                        <p className="text-xl text-gray-600">
                            Ideal para profissionais em diferentes momentos da
                            carreira.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BookOpen className="w-8 h-8 text-[#1D4ED8]" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Dentistas Recém-formados
                            </h3>
                            <p className="text-gray-600">
                                Que querem dar os primeiros passos com segurança
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Target className="w-8 h-8 text-[#1D4ED8]" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Futuros Empresários
                            </h3>
                            <p className="text-gray-600">
                                Planejando abrir a primeira clínica
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="w-8 h-8 text-[#1D4ED8]" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Donos de Consultório
                            </h3>
                            <p className="text-gray-600">
                                Que buscam organização e crescimento sustentável
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Star className="w-8 h-8 text-[#1D4ED8]" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Profissionais Ambiciosos
                            </h3>
                            <p className="text-gray-600">
                                Que desejam acelerar resultados e evitar erros
                                comuns
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instructor Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12">
                        <div className="text-center">
                            <div className="h-64 relative w-full flex items-center justify-center mb-4">
                                <img
                                    src={'./foto_tulio.jpg'}
                                    alt={'Prof. Túlio Margutti'}
                                    className="object-contain rounded-3xl w-auto h-full"
                                />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Prof. Túlio Margutti
                            </h3>
                            <div className="max-w-5xl mx-auto">
                                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                    Dentista com mais de{" "}
                                    <strong>14 anos de atuação clínica e acadêmica</strong>, 
                                    referência em Implantodontia e Reabilitação Oral.
                                </p>
                                <div className="grid md:grid-cols-2 gap-3 text-left">
                                    <div className="space-y-4">
                                        <div className="space-y-3">
                                            <div className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-[#1D4ED8] mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">
                                                    <strong>Mestre em Prótese Dentária</strong> - PUC-RS
                                                </span>
                                            </div>
                                            <div className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-[#1D4ED8] mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">
                                                    <strong>Especialista em Prótese Dentária</strong> - UNINGÁ
                                                </span>
                                            </div>
                                            <div className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-[#1D4ED8] mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">
                                                    <strong>Especialista em Odontologia Esportiva</strong> - Uni. Positivo
                                                </span>
                                            </div>
                                            <div className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-[#1D4ED8] mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">
                                                    <strong>Pós Graduado em Odontologia Estética</strong> - UNINGÁ
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="space-y-3">
                                            <div className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-[#1D4ED8] mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">
                                                    <strong>Consultor Científico</strong> - Signo Vinces
                                                </span>
                                            </div>
                                            <div className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-[#1D4ED8] mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">
                                                    <strong>Consultor Científico</strong> - FGM
                                                </span>
                                            </div>
                                            <div className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-[#1D4ED8] mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">
                                                    <strong>Consultor Científico</strong> - Yller
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bonus Section */}
            <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100 text-[#1D4ED8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-8">
                        <Gift className="w-16 h-16 mx-auto mb-4" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            BÔNUS EXCLUSIVO
                        </h2>
                    </div>
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 max-w-3xl mx-auto">
                        <div className="flex items-center justify-center mb-4">
                            <Download className="w-8 h-8 mr-3" />
                            <h3 className="text-xl md:text-2xl font-semibold">
                                E-book Gratuito de Apoio
                            </h3>
                        </div>
                        <p className="text-lg text-[#1D4ED8] mb-6"> 
                            Baixe gratuitamente um E-book completo de apoio e
                            comece hoje mesmo a transformação da sua carreira!
                        </p>
                        <button className="bg-white text-[#1D4ED8] px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg">
                            <Download className="inline w-6 h-6 mr-3" />
                            BAIXAR E-BOOK GRÁTIS
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#1D4ED8] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Garanta agora sua vaga!
                    </h2>
                    
                    {/* Pricing Card */}
                    <div className="max-w-md mx-auto mb-8">
                        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
                            {/* Urgency Banner */}
                            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full mb-6 flex items-center justify-center">
                                <span className="text-xs sm:text-sm font-semibold">PROMOÇÃO VÁLIDA POR APENAS 48 HORAS</span>
                            </div>
                            
                            {/* Original Price */}
                            <div className="mb-4">
                                <div className="text-white text-opacity-70 text-lg">De:</div>
                                <div className="text-white text-opacity-70 text-2xl line-through">R$ 997,00</div>
                            </div>
                            
                            {/* Promotional Price */}
                            <div className="mb-6">
                                <div className="text-white text-lg">Por apenas:</div>
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">R$ 497</div>
                                <div className="text-white text-opacity-90 text-lg">à vista</div>
                            </div>
                            
                            {/* Payment Options */}
                            <div className="border-t border-white border-opacity-20 pt-6">
                                <div className="flex items-center justify-center mb-3">
                                    <CreditCard className="w-5 h-5 mr-2 text-white text-opacity-80" />
                                    <span className="text-white text-opacity-90">ou em até 12x de:</span>
                                </div>
                                <div className="text-2xl font-bold text-white mb-1">R$ 49,70</div>
                                <div className="text-white text-opacity-70 text-sm line-through mb-1">
                                    (era 12x de R$ 99,70)
                                </div>
                                <div className="text-white text-opacity-90 text-sm">sem juros no cartão</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-blue-200">
                        <div className="flex items-center">
                            <Shield className="w-5 h-5 mr-2" />
                            <span>Compra segura</span>
                        </div>
                        <div className="flex items-center">
                            <Play className="w-5 h-5 mr-2" />
                            <span>Acesso imediato</span>
                        </div>
                        <div className="flex items-center">
                            <Users className="w-5 h-5 mr-2" />
                            <span>Suporte direto com a equipe</span>
                        </div>
                    </div>
                    <button className="bg-white text-[#1D4ED8] px-12 py-5 rounded-full text-md lg:text-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-2xl">
                        QUERO TRANSFORMAR MINHA CARREIRA AGORA
                        <ArrowRight className="inline-block ml-3 w-6 h-6" />
                    </button>
                </div>
            </section>

            {/* Footer */}
            <section className="py-5 bg-[#1D4ED8] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-blue-100">
                        © {new Date().getFullYear()} Instituto Margutti | Todos
                        os direitos reservados
                    </p>
                </div>
            </section>
        </div>
    );
}

export default App;