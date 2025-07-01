import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Clock, Bell, BookOpen, Video, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Documentacao() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100">🚧 Em Desenvolvimento</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Documentação
              <span className="text-blue-600 block">Em Breve</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Estamos preparando uma documentação completa e detalhada para ajudar você a aproveitar ao máximo todas as
              funcionalidades da Wellnest.
            </p>
          </div>
        </div>
      </section>

      {/* O que está vindo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O que você encontrará em breve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa documentação será completa e fácil de seguir, com tudo que você precisa para dominar a Wellnest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Guias Passo a Passo</h3>
                <p className="text-gray-600">
                  Tutoriais detalhados para configurar e usar cada funcionalidade do sistema
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Video className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Vídeo Tutoriais</h3>
                <p className="text-gray-600">
                  Demonstrações em vídeo mostrando como realizar tarefas específicas na Wellnest
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">API e Integrações</h3>
                <p className="text-gray-600">
                  Documentação técnica para desenvolvedores e integrações com outros sistemas
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <MessageCircle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">FAQ Completo</h3>
                <p className="text-gray-600">Respostas para as perguntas mais frequentes sobre o uso do sistema</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Guia de Início Rápido</h3>
                <p className="text-gray-600">Como começar a usar a Wellnest em poucos minutos após a contratação</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Bell className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Melhores Práticas</h3>
                <p className="text-gray-600">Dicas e estratégias para otimizar o uso do sistema na sua academia</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cronograma de Lançamento</h2>
            <p className="text-xl text-gray-600">Acompanhe o progresso da nossa documentação</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">Estrutura da Documentação</h3>
                <p className="text-gray-600">Organização e planejamento do conteúdo - Concluído</p>
              </div>
              <Badge className="bg-green-100 text-green-800">Concluído</Badge>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">Guias Básicos</h3>
                <p className="text-gray-600">Primeiros passos e configurações iniciais</p>
              </div>
              <Badge className="bg-blue-100 text-blue-800">Em Andamento</Badge>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-sm font-bold">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">Tutoriais Avançados</h3>
                <p className="text-gray-600">Funcionalidades avançadas e personalizações</p>
              </div>
              <Badge className="bg-gray-100 text-gray-800">Próximo</Badge>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-sm font-bold">4</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">Vídeos e Exemplos</h3>
                <p className="text-gray-600">Conteúdo visual e casos práticos</p>
              </div>
              <Badge className="bg-gray-100 text-gray-800">Planejado</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Notificação */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-50 rounded-2xl p-8">
            <Bell className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Seja notificado quando estiver pronto</h2>
            <p className="text-gray-600 mb-6">
              Deixe seus dados e te avisaremos assim que a documentação completa estiver disponível
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="px-6 py-2">Notificar-me</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Alternativas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Precisa de ajuda agora?</h2>
            <p className="text-xl text-gray-600">Enquanto a documentação não fica pronta, você pode:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Video className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ver Demonstração</h3>
                <p className="text-gray-600 mb-4">Assista nossa demonstração completa do sistema</p>
                <Button variant="outline" asChild>
                  <Link href="/demonstracao">Assistir Demo</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Falar com Especialista</h3>
                <p className="text-gray-600 mb-4">Converse com nossa equipe especializada</p>
                <Button variant="outline" asChild>
                  <Link href="/orcamento">Falar Agora</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Entrar em Contato</h3>
                <p className="text-gray-600 mb-4">Envie suas dúvidas ou reporte problemas</p>
                <Button variant="outline" asChild>
                  <Link href="/contato">Contatar</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
