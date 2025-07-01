import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  Users,
  CreditCard,
  BarChart3,
  Brain,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Award,
  Headphones,
} from "lucide-react"
import Link from "next/link"

export default function Demonstracao() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">🎥 Demonstração Completa</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Veja o GymFlow
              <span className="text-blue-600 block">em Ação</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Assista nossa demonstração completa e descubra como o GymFlow pode revolucionar a gestão da sua academia
              em apenas 15 minutos.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video relative">
              {/* Placeholder para o vídeo - substitua pela URL real do seu vídeo */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4 mx-auto backdrop-blur-sm">
                    <Play className="h-8 w-8 ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Demonstração do GymFlow</h3>
                  <p className="text-blue-100 mb-4">Veja todas as funcionalidades em ação</p>
                  <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                    Assistir Demonstração
                  </Button>
                </div>
              </div>

              {/* Quando tiver o vídeo real, use algo assim: */}
              {/* 
              <iframe 
                src="https://www.youtube.com/embed/SEU_VIDEO_ID" 
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              */}
            </div>
          </div>

          {/* Video Info */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>15 minutos</span>
              </div>
              <div className="flex items-center">
                <Play className="h-5 w-5 mr-2" />
                <span>Demonstração completa</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>Sem cadastro necessário</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que você verá */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O que você verá na demonstração</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma visão completa de como o GymFlow funciona na prática
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Gestão de Alunos</h3>
                <p className="text-gray-600 text-sm">Como cadastrar alunos, criar planos e gerenciar matrículas</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <CreditCard className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Automação de Pagamentos</h3>
                <p className="text-gray-600 text-sm">Configuração de PIX, boleto e notificações automáticas</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Relatórios e Dashboard</h3>
                <p className="text-gray-600 text-sm">Visualização de métricas financeiras e de performance</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Brain className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Insights com IA</h3>
                <p className="text-gray-600 text-sm">Como a IA analisa seus dados e sugere melhorias</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios da Demonstração */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Por que assistir nossa demonstração?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Veja na prática</h3>
                    <p className="text-gray-600">
                      Entenda exatamente como cada funcionalidade funciona no dia a dia da sua academia
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Casos reais</h3>
                    <p className="text-gray-600">
                      Exemplos práticos de como outras academias usam o GymFlow para crescer
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Tire suas dúvidas</h3>
                    <p className="text-gray-600">Veja respostas para as principais dúvidas sobre implementação e uso</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Sem compromisso</h3>
                    <p className="text-gray-600">Assista quando quiser, quantas vezes precisar, sem cadastro</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Demonstração Premiada</h3>
                <p className="text-gray-600 mb-6">
                  Nossa demonstração foi desenvolvida com base no feedback de centenas de proprietários de academias
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">15min</div>
                    <p className="text-sm text-gray-600">Duração ideal</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">98%</div>
                    <p className="text-sm text-gray-600">Aprovação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos sobre a demonstração */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O que dizem sobre nossa demonstração</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  "A demonstração me mostrou exatamente como o GymFlow resolveria meus problemas de inadimplência. Muito
                  clara e objetiva!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold">DP</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Diego Prado</p>
                    <p className="text-sm text-gray-600">Proprietário - CT Diego Prado</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  "Em 15 minutos entendi perfeitamente como o sistema funciona. A demonstração é muito bem feita e
                  esclarecedora."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-semibold">LS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Luciana Santos</p>
                    <p className="text-sm text-gray-600">Gerente - Academia Vida</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  "Adorei poder assistir no meu tempo. A demonstração me convenceu de que o GymFlow é exatamente o que
                  precisava."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-semibold">RF</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ricardo Ferreira</p>
                    <p className="text-sm text-gray-600">Dono - CrossFit Elite</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Gostou da demonstração?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Agora que você viu como o GymFlow funciona, que tal conversar com nossa equipe para entender como
            implementar na sua academia?
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
            >
              <Headphones className="mr-2 h-5 w-5" />
              (16) 98157-0419
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
