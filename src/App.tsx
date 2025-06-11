import React from 'react';
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
  Gift
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#1D4ED8] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <span className="text-6xl">🦷</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              DO ZERO AO SUCESSO
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              O GUIA COMPLETO PARA SUA CLÍNICA ODONTOLÓGICA
            </p>
            <p className="text-lg md:text-xl mb-12 text-blue-200 max-w-3xl mx-auto">
              Aprenda com quem transforma a odontologia na prática. Se você é dentista e sonha em abrir sua própria clínica ou consolidar seu consultório, este curso foi feito para você!
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              🚀 GARANTIR MINHA VAGA AGORA
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
              💡 O que você vai encontrar neste curso
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conteúdo completo e prático para transformar sua carreira odontológica
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#1D4ED8]">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-[#1D4ED8] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Montagem e Legalização</h3>
              </div>
              <p className="text-gray-600">
                Da escolha do ponto comercial às normas do CRO/CFO, aprenda todo o processo legal para abrir sua clínica.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#1E3A8A]">
              <div className="flex items-center mb-4">
                <Calculator className="w-8 h-8 text-[#1E3A8A] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Gestão Financeira Eficiente</h3>
              </div>
              <p className="text-gray-600">
                Planilhas e tabelas editáveis para controle de receitas e despesas, garantindo a saúde financeira do seu negócio.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#1D4ED8]">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-[#1D4ED8] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Marketing Digital</h3>
              </div>
              <p className="text-gray-600">
                Estratégias para atrair e fidelizar pacientes, incluindo protocolos de captação local e online.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#1E3A8A]">
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-[#1E3A8A] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Organização Contábil</h3>
              </div>
              <p className="text-gray-600">
                Separação da vida pessoal e profissional, garantindo conformidade fiscal e organização total.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#1D4ED8]">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-[#1D4ED8] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Apresentação de Tratamentos</h3>
              </div>
              <p className="text-gray-600">
                Estratégias comprovadas para apresentar planos de tratamento e fechar mais orçamentos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#1E3A8A]">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-[#1E3A8A] mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Técnicas de Fidelização</h3>
              </div>
              <p className="text-gray-600">
                Métodos eficazes para gerar indicações contínuas e construir uma base sólida de pacientes fiéis.
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
              🧠 Materiais e ferramentas que você receberá
            </h2>
            <p className="text-xl text-gray-600">
              Tudo que você precisa para colocar em prática imediatamente
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#1D4ED8] mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">eBook completo, acesso imediato</h3>
                  <p className="text-gray-600">Material completo para consulta e referência constante</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#1D4ED8] mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Aulas em vídeo com passo a passo prático</h3>
                  <p className="text-gray-600">Conteúdo visual e detalhado para facilitar o aprendizado</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#1D4ED8] mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Modelos de planilhas financeiras editáveis</h3>
                  <p className="text-gray-600">Ferramentas prontas para uso imediato na gestão financeira</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#1D4ED8] mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Exemplos de documentos legais</h3>
                  <p className="text-gray-600">CRO, Vigilância Sanitária, CNPJ - tudo documentado</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#1D4ED8] mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Checklists práticos para cada fase</h3>
                  <p className="text-gray-600">Guias passo a passo para não esquecer nenhum detalhe importante</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-[#1D4ED8] mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Dicas de softwares de gestão clínica</h3>
                  <p className="text-gray-600">Recomendações de ferramentas para otimizar sua operação</p>
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
              🚀 Para quem é este curso
            </h2>
            <p className="text-xl text-gray-600">
              Ideal para profissionais em diferentes momentos da carreira
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-[#1D4ED8]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Dentistas Recém-formados</h3>
              <p className="text-gray-600">Que querem dar os primeiros passos com segurança</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#1E3A8A]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Futuros Empresários</h3>
              <p className="text-gray-600">Planejando abrir a primeira clínica</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#1D4ED8]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Donos de Consultório</h3>
              <p className="text-gray-600">Que buscam organização e crescimento sustentável</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[#1E3A8A]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Profissionais Ambiciosos</h3>
              <p className="text-gray-600">Que desejam acelerar resultados e evitar erros comuns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🎯 Por que você não pode ficar de fora
            </h2>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#1D4ED8] to-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Prof. Túlio Margutti</h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Desenvolvido pelo <strong>Prof. Túlio Margutti</strong> – dentista com mais de <strong>14 anos de atuação clínica e acadêmica</strong>, referência em Implantodontia e Reabilitação Oral – este curso reúne tudo o que a faculdade não ensina: gestão estratégica, marketing eficiente e visão de dono.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  São <strong>centenas de dentistas mentoreados</strong> por um especialista que sabe exatamente os desafios e oportunidades do mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Gift className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🎁 BÔNUS EXCLUSIVO
            </h2>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Download className="w-8 h-8 mr-3" />
              <h3 className="text-xl md:text-2xl font-semibold">eBook Gratuito de Apoio</h3>
            </div>
            <p className="text-lg text-orange-100 mb-6">
              Baixe gratuitamente um eBook completo de apoio e comece hoje mesmo a transformação da sua carreira!
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg">
              📥 BAIXAR EBOOK GRÁTIS
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1E3A8A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            📲 Garanta agora sua vaga!
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-blue-200">
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              <span>🔒 Compra segura</span>
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
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-5 rounded-full text-xl font-bold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-2xl">
            🚀 QUERO TRANSFORMAR MINHA CARREIRA AGORA
            <ArrowRight className="inline-block ml-3 w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <section className="py-20 bg-[#1D4ED8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-100">
            © 2024 Do Zero ao Sucesso - Clínica Odontológica | Todos os direitos reservados
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;