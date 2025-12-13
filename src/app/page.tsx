"use client";

import { ArrowRight, Mail, Instagram, MessageCircle, CheckCircle, Target, Wrench, Rocket, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e0e55315-3b82-4d7d-b90b-1bcbe7e9d8b3.png" 
              alt="Viragem Digital Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="font-geist-sans font-bold text-xl text-[#412C78]">Viragem Digital</h1>
              <p className="font-inter text-xs text-emerald-600">A Co-produção do Amanhã</p>
            </div>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#sobre" className="font-inter text-sm text-gray-600 hover:text-emerald-600 transition-colors">Sobre</a>
            <a href="#cases" className="font-inter text-sm text-gray-600 hover:text-emerald-600 transition-colors">Cases</a>
            <a href="#metodologia" className="font-inter text-sm text-gray-600 hover:text-emerald-600 transition-colors">Metodologia</a>
            <a href="#contato" className="font-inter text-sm text-gray-600 hover:text-emerald-600 transition-colors">Contato</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Background Image com 40% de opacidade */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/6b064274-9361-40c4-ac50-9931b6bc672c.png')"
          }}
        ></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-inter font-medium">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                Transformando Expertise em Sucesso Digital
              </span>
            </div>
            
            <h1 className="font-geist-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#412C78] leading-tight">
              A Co-produção do <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Amanhã</span>
            </h1>
            
            <p className="font-inter text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Muitos Experts têm um conhecimento transformador, mas a complexidade de criar, lançar e escalar um infoproduto digital faz com que a maioria desista no primeiro obstáculo.
            </p>


          </div>
        </div>
      </section>

      {/* Pitch Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto max-w-5xl">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur">
            <CardContent className="p-8 sm:p-12">
              <div className="space-y-6 font-inter text-gray-700 leading-relaxed">
                <p className="text-lg sm:text-xl">
                  <strong className="text-emerald-700">É aí que entra a Viragem Digital.</strong>
                </p>
                
                <p className="text-lg sm:text-xl">
                  Nós somos a <strong className="text-emerald-700">Co-produção do Amanhã</strong>. Nossa missão é ser o catalisador que transforma a expertise do zero ao sucesso.
                </p>
                
                <p className="text-lg sm:text-xl">
                  Nós cuidamos de toda a <strong className="text-emerald-700">estratégia, tecnologia, tráfego e gestão de lançamentos</strong>. O Expert foca no conteúdo; nós focamos na revolução digital.
                </p>
                
                <div className="pt-6 border-t border-emerald-100">
                  <p className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Se você tem um conhecimento único e está pronto para a sua grande virada no mercado digital, está no lugar certo.
                  </p>
                  <p className="text-lg sm:text-xl mt-4 text-emerald-700 font-semibold">
                    Nós estamos aqui para coproduzir prosperidade e abundância 🌟
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cases de Sucesso */}
      <section id="cases" className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-geist-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#412C78] mb-4">
              Cases de Sucesso
            </h2>
            <p className="font-inter text-lg text-gray-600">
              Resultados reais de quem já fez a virada digital
            </p>
          </div>

          <div className="space-y-12">
            {/* Case Elisandra Bordin */}
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Imagens do Case - Duas fotos lado a lado - REDUZIDAS EM 30% */}
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-8 flex items-center justify-center">
                    <div className="space-y-4 w-[70%]">
                      <div className="bg-white rounded-lg p-4 shadow-md">
                        <img 
                          src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/7d5caa58-a052-4ebc-8f42-458ee243431e.png" 
                          alt="Case de Sucesso - Revisão de Aposentadorias - Foto 1" 
                          className="w-full h-auto rounded"
                        />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-md">
                        <img 
                          src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/f1bc6dc5-fc51-4cd5-9ffe-fd5186ad9318.png" 
                          alt="Case de Sucesso - Revisão de Aposentadorias - Foto 2" 
                          className="w-full h-auto rounded"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Conteúdo do Case */}
                  <div className="p-8 sm:p-12 bg-white">
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-geist-sans font-bold text-2xl sm:text-3xl text-[#412C78] mb-2">
                          Elisandra Bordin
                        </h3>
                        <p className="font-inter text-emerald-700 font-semibold">
                          Advogada Especialista em Direito Previdenciário
                        </p>
                      </div>

                      <div className="space-y-4 font-inter text-gray-700">
                        <p>
                          Treinamento desenvolvido em <strong>2021</strong>, inspirado pelo método do mentor Elton Itokazu, com aulas ao vivo e pequenos lançamentos mesmo sem ter autoridade estabelecida.
                        </p>
                        
                        <p>
                          O treinamento ensinava advogados a analisar e fazer revisões de aposentadorias.
                        </p>
                      </div>

                      <div className="pt-6 border-t border-gray-200">
                        <h4 className="font-geist-sans font-bold text-xl text-[#412C78] mb-4">Resultados:</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-emerald-50 rounded-lg p-4">
                            <p className="text-3xl font-bold text-emerald-700">R$ 28k+</p>
                            <p className="text-sm text-gray-600 font-inter">em vendas</p>
                          </div>
                          <div className="bg-teal-50 rounded-lg p-4">
                            <p className="text-3xl font-bold text-teal-700">~300</p>
                            <p className="text-sm text-gray-600 font-inter">alunos</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 font-inter mt-4">
                          Resultados alcançados em apenas 2 meses
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-geist-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#412C78] mb-4">
              Sobre Nós
            </h2>
            <p className="font-inter text-lg text-gray-600">
              Autoridade e confiança construídas com experiência
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Card com foto do Rodrigo Bordin */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-emerald-500 shadow-xl">
                    <img 
                      src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/6baf81c1-2b3c-4ce2-abc8-17c1392f05d3.jpg" 
                      alt="Rodrigo Bordin - Fundador da Viragem Digital" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-geist-sans font-bold text-2xl text-[#412C78] mb-1">Rodrigo Bordin</h3>
                  <p className="font-inter text-emerald-700 font-semibold">Fundador da Viragem Digital</p>
                </div>
                
                <div className="space-y-4 font-inter text-gray-700">
                  <p>
                    Apaixonado pelo digital, sempre se aperfeiçoando nas estratégias com treinamentos como:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>"Coprodutor Pró" da Nova Fala Marketing Digital</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>"Mentoria Nova" - Programa de Mentoria Avançada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>"Manual do Milhão" do Ruyter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>Especialização em IAs para desenvolvimento e estratégias</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-geist-sans font-bold text-2xl text-[#412C78] mb-4">Nossa Missão</h3>
                <div className="space-y-4 font-inter text-gray-700">
                  <p>
                    A Viragem Digital nasceu da observação de uma falha no mercado: existem excelentes Experts com conhecimento incrível que por falta de estratégia ou suporte técnico não conseguem passar sua mensagem para o mundo.
                  </p>
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6 border-l-4 border-emerald-600">
                    <p className="font-semibold text-gray-900">
                      Existimos para garantir que a melhor expertise chegue ao maior número de pessoas, transformando vidas e gerando riqueza para os nossos parceiros.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
            <CardContent className="p-8 text-center">
              <p className="font-inter text-xl sm:text-2xl font-semibold">
                A parceria é um compromisso de longo prazo, com alinhamento de riscos e resultados.
              </p>
              <p className="font-inter text-2xl sm:text-3xl font-bold mt-4">
                Se você ganha, nós ganhamos. 🤝
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Metodologia */}
      <section id="metodologia" className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-geist-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#412C78] mb-4">
              Nossa Metodologia
            </h2>
            <p className="font-inter text-lg text-gray-600">
              Um processo estruturado para o seu sucesso
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Fase 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-emerald-50 to-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-geist-sans font-bold text-xl text-[#412C78] mb-2">
                  🧭 Mapeamento Estratégico
                </h3>
                <p className="font-inter text-gray-600 text-sm">
                  Fase de diagnóstico e planejamento, onde o conhecimento do Expert encontra a estratégia da Viragem Digital.
                </p>
              </CardContent>
            </Card>

            {/* Fase 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-teal-50 to-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-geist-sans font-bold text-xl text-[#412C78] mb-2">
                  🛠️ Estrutura e Setup
                </h3>
                <p className="font-inter text-gray-600 text-sm">
                  Onde o projeto sai do papel e a máquina de lançamentos é montada.
                </p>
              </CardContent>
            </Card>

            {/* Fase 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-emerald-50 to-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-geist-sans font-bold text-xl text-[#412C78] mb-2">
                  🚀 A Grande Virada
                </h3>
                <p className="font-inter text-gray-600 text-sm">
                  O momento da verdade, focado na conversão e na entrega da proposta de valor.
                </p>
              </CardContent>
            </Card>

            {/* Fase 4 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-teal-50 to-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-geist-sans font-bold text-xl text-[#412C78] mb-2">
                  📈 O Amanhã
                </h3>
                <p className="font-inter text-gray-600 text-sm">
                  O ciclo não termina na venda. Esta fase garante que o sucesso se repita e cresça.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 px-4 sm:px-6 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="font-geist-sans font-bold text-3xl sm:text-4xl md:text-5xl mb-6">
            Pronto para a sua Viragem Digital?
          </h2>
          <p className="font-inter text-lg sm:text-xl mb-8 opacity-90">
            Acreditamos que o seu conhecimento merece ser o próximo grande lançamento. Se você busca uma verdadeira Viragem Digital na sua carreira, o caminho começa aqui.
          </p>
          
          <a 
            href="https://forms.gle/U6N2WCNLexnSSYSD9" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-white text-emerald-700 hover:bg-gray-100 font-inter font-bold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Candidate-se à Coprodução
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer / Contato */}
      <footer className="py-12 px-4 sm:px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/e0e55315-3b82-4d7d-b90b-1bcbe7e9d8b3.png" 
                  alt="Viragem Digital Logo" 
                  className="h-10 w-auto"
                />
                <div>
                  <h3 className="font-geist-sans font-bold text-lg">Viragem Digital</h3>
                  <p className="font-inter text-sm text-emerald-400">A Co-produção do Amanhã</p>
                </div>
              </div>
              <p className="font-inter text-gray-400">
                Transformando expertise em sucesso digital através de parcerias estratégicas.
              </p>
            </div>

            <div>
              <h4 className="font-geist-sans font-bold text-lg mb-4">Entre em Contato</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:contato@viragemdigital.com.br"
                  className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-inter">contato@viragemdigital.com.br</span>
                </a>
                
                <a 
                  href="https://www.instagram.com/viragemdigital?igsh=bXNiazR3Znh5M2xx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="font-inter">@viragemdigital</span>
                </a>
                
                <a 
                  href="https://wa.me/5554999606077"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-inter">(54) 99960-6077</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="font-inter text-gray-400 text-sm">
              © 2024 Viragem Digital. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
