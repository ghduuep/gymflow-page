import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, Users, Award, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Sobre() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">💪 Nossa História</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Sobre a<span className="text-blue-600 block">Wellnest</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Nascemos da necessidade de simplificar a gestão de negócios esportivos, oferecendo tecnologia de ponta para
              proprietários focarem no que realmente importa: seus alunos e resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Democratizar o acesso a ferramentas de gestão profissionais para negócios esportivos de todos os tamanhos,
                  automatizando processos e maximizando resultados.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-6">
                  <Eye className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ser a plataforma de gestão mais utilizada por negócios esportivos no Brasil, reconhecida pela inovação,
                  simplicidade e resultados excepcionais.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-6">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossos Valores</h3>
                <p className="text-gray-600 leading-relaxed">
                  Inovação constante, transparência total, foco no cliente e compromisso com o sucesso de cada academia
                  que confia em nós.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Como tudo começou</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  a Wellnest nasceu da experiência real de proprietários de negócios esportivos que enfrentavam diariamente os
                  desafios de gestão: controle de pagamentos, inadimplência, relatórios manuais e falta de insights para
                  tomar decisões estratégicas.
                </p>
                <p>
                  Percebemos que muitos negócios esportivos perdiam tempo e dinheiro com processos manuais que poderiam ser
                  automatizados. Foi então que decidimos criar uma solução completa, intuitiva e acessível.
                </p>
                <p>
                  Hoje, a Wellnest é utilizado por centenas de negócios esportivos em todo o Brasil, ajudando proprietários a
                  reduzir custos operacionais, aumentar receitas e focar no que realmente importa: proporcionar a melhor
                  experiência para seus alunos.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <p className="text-gray-600">Negócios Atendidos</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">2K+</div>
                  <p className="text-gray-600">Alunos Gerenciados</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                  <p className="text-gray-600">Uptime Garantido</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <p className="text-gray-600">Suporte Disponível</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Por que somos diferentes?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Não somos apenas um software, somos parceiros no crescimento do seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Inovação Constante</h3>
              <p className="text-gray-600">
                Sempre atualizamos nossa plataforma com as últimas tecnologias e funcionalidades baseadas no feedback
                dos nossos clientes.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Suporte Especializado</h3>
              <p className="text-gray-600">
                Nossa equipe conhece profundamente o mercado fitness e está sempre pronta para ajudar você a crescer.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Resultados Comprovados</h3>
              <p className="text-gray-600">
                Nossos negócios parceiros relatam redução de 60% na inadimplência e aumento de 40% na receita média.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Vamos crescer juntos?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Faça parte da nossa comunidade de negócios esportivos de sucesso. Teste a Wellnest gratuitamente e veja a diferença.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
              <Link href="/orcamento">
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/demonstracao">Ver Demonstração</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
