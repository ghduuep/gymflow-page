"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export function OrcamentoForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    nomeAcademia: "",
    cidade: "",
    estado: "",
    numeroAlunos: "",
    tipoNegocio: "",
    funcionalidades: [] as string[],
    observacoes: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria o envio do formulário
    console.log("Dados do formulário:", formData)
    setIsSubmitted(true)
  }

  const handleFuncionalidadeChange = (funcionalidade: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      funcionalidades: checked
        ? [...prev.funcionalidades, funcionalidade]
        : prev.funcionalidades.filter((f) => f !== funcionalidade),
    }))
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-6 text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Solicitação Enviada com Sucesso!</h3>
          <p className="text-gray-600 mb-4">
            Recebemos sua solicitação. Nossa equipe especializada entrará em contato em até 24 horas para uma
            consultoria personalizada sobre como a Wellnest pode transformar sua academia.
          </p>
          <Badge className="bg-blue-100 text-blue-800">Resposta em até 24h</Badge>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Solicite seu Orçamento Personalizado</CardTitle>
        <p className="text-gray-600 text-center">
          Preencha os dados abaixo e receba uma proposta customizada para sua academia
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Dados Pessoais */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome Completo *</Label>
              <Input
                id="nome"
                value={formData.nome}
                onChange={(e) => setFormData((prev) => ({ ...prev, nome: e.target.value }))}
                required
                placeholder="Seu nome completo"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                required
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
              <Input
                id="telefone"
                value={formData.telefone}
                onChange={(e) => setFormData((prev) => ({ ...prev, telefone: e.target.value }))}
                required
                placeholder="(11) 99999-9999"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nomeAcademia">Nome da Academia *</Label>
              <Input
                id="nomeAcademia"
                value={formData.nomeAcademia}
                onChange={(e) => setFormData((prev) => ({ ...prev, nomeAcademia: e.target.value }))}
                required
                placeholder="Nome da sua academia"
              />
            </div>
          </div>

          {/* Localização */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cidade">Cidade *</Label>
              <Input
                id="cidade"
                value={formData.cidade}
                onChange={(e) => setFormData((prev) => ({ ...prev, cidade: e.target.value }))}
                required
                placeholder="Sua cidade"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="estado">Estado *</Label>
              <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, estado: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AC">Acre</SelectItem>
                  <SelectItem value="AL">Alagoas</SelectItem>
                  <SelectItem value="AP">Amapá</SelectItem>
                  <SelectItem value="AM">Amazonas</SelectItem>
                  <SelectItem value="BA">Bahia</SelectItem>
                  <SelectItem value="CE">Ceará</SelectItem>
                  <SelectItem value="DF">Distrito Federal</SelectItem>
                  <SelectItem value="ES">Espírito Santo</SelectItem>
                  <SelectItem value="GO">Goiás</SelectItem>
                  <SelectItem value="MA">Maranhão</SelectItem>
                  <SelectItem value="MT">Mato Grosso</SelectItem>
                  <SelectItem value="MS">Mato Grosso do Sul</SelectItem>
                  <SelectItem value="MG">Minas Gerais</SelectItem>
                  <SelectItem value="PA">Pará</SelectItem>
                  <SelectItem value="PB">Paraíba</SelectItem>
                  <SelectItem value="PR">Paraná</SelectItem>
                  <SelectItem value="PE">Pernambuco</SelectItem>
                  <SelectItem value="PI">Piauí</SelectItem>
                  <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                  <SelectItem value="RN">Rio Grande do Norte</SelectItem>
                  <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                  <SelectItem value="RO">Rondônia</SelectItem>
                  <SelectItem value="RR">Roraima</SelectItem>
                  <SelectItem value="SC">Santa Catarina</SelectItem>
                  <SelectItem value="SP">São Paulo</SelectItem>
                  <SelectItem value="SE">Sergipe</SelectItem>
                  <SelectItem value="TO">Tocantins</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Informações do Negócio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="numeroAlunos">Número de Alunos Ativos *</Label>
              <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, numeroAlunos: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a faixa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-50">0 a 50 alunos</SelectItem>
                  <SelectItem value="51-100">51 a 100 alunos</SelectItem>
                  <SelectItem value="101-200">101 a 200 alunos</SelectItem>
                  <SelectItem value="201-500">201 a 500 alunos</SelectItem>
                  <SelectItem value="500+">Mais de 500 alunos</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="tipoNegocio">Tipo de Negócio *</Label>
              <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, tipoNegocio: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="academia">Academia Tradicional</SelectItem>
                  <SelectItem value="crossfit">Box de CrossFit</SelectItem>
                  <SelectItem value="pilates">Estúdio de Pilates</SelectItem>
                  <SelectItem value="funcional">Treinamento Funcional</SelectItem>
                  <SelectItem value="danca">Estúdio de Dança</SelectItem>
                  <SelectItem value="luta">Academia de Lutas</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Funcionalidades de Interesse */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">Funcionalidades de Interesse</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Gestão de Alunos e Matrículas",
                "Automação de Pagamentos",
                "Relatórios Financeiros",
                "Dashboard Executivo",
                "Insights com IA",
                "Controle de Despesas",
                "Gestão de Tarefas",
                "Notificações Automáticas",
                "Integração com Stripe",
                "Múltiplos Métodos de Pagamento",
              ].map((funcionalidade) => (
                <div key={funcionalidade} className="flex items-center space-x-2">
                  <Checkbox
                    id={funcionalidade}
                    onCheckedChange={(checked) => handleFuncionalidadeChange(funcionalidade, checked as boolean)}
                  />
                  <Label htmlFor={funcionalidade} className="text-sm">
                    {funcionalidade}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Observações */}
          <div className="space-y-2">
            <Label htmlFor="observacoes">Observações Adicionais</Label>
            <Textarea
              id="observacoes"
              value={formData.observacoes}
              onChange={(e) => setFormData((prev) => ({ ...prev, observacoes: e.target.value }))}
              placeholder="Conte-nos mais sobre suas necessidades específicas, desafios atuais ou qualquer informação que possa nos ajudar a criar a melhor proposta para você..."
              rows={4}
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Solicitar Orçamento Personalizado
          </Button>

          <div className="text-center text-sm text-gray-500">
            <p>* Campos obrigatórios</p>
            <p className="mt-1">
              Ao enviar este formulário, você concorda em receber comunicações comerciais da Wellnest.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
