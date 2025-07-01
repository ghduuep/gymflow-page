"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Mail, Phone, MapPin, MessageCircle, AlertTriangle, HelpCircle } from "lucide-react"

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    tipoContato: "",
    assunto: "",
    mensagem: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria o envio do formulário
    console.log("Dados do contato:", formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mensagem Enviada com Sucesso!</h3>
              <p className="text-gray-600 mb-4">
                Recebemos sua mensagem e nossa equipe entrará em contato em até 24 horas. Obrigado por entrar em contato
                conosco!
              </p>
              <Badge className="bg-blue-100 text-blue-800">Resposta em até 24h</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">📞 Estamos Aqui</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Entre em
              <span className="text-blue-600 block">Contato</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Tem dúvidas, sugestões ou precisa reportar algum problema? Nossa equipe está pronta para ajudar você.
            </p>
          </div>
        </div>
      </section>

      {/* Tipos de Contato */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-4">
              <CardContent className="pt-4">
                <HelpCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Dúvidas Gerais</h3>
                <p className="text-sm text-gray-600">Perguntas sobre funcionalidades e uso</p>
              </CardContent>
            </Card>

            <Card className="text-center p-4">
              <CardContent className="pt-4">
                <AlertTriangle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Reportar Problema</h3>
                <p className="text-sm text-gray-600">Bugs, erros ou dificuldades técnicas</p>
              </CardContent>
            </Card>

            <Card className="text-center p-4">
              <CardContent className="pt-4">
                <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">Sugestões</h3>
                <p className="text-sm text-gray-600">Ideias para melhorar o sistema</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulário e Informações */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Formulário */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
                  <p className="text-gray-600">Preencha o formulário abaixo e entraremos em contato rapidamente</p>
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
                        <Label htmlFor="telefone">Telefone/WhatsApp</Label>
                        <Input
                          id="telefone"
                          value={formData.telefone}
                          onChange={(e) => setFormData((prev) => ({ ...prev, telefone: e.target.value }))}
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="empresa">Academia/Empresa</Label>
                        <Input
                          id="empresa"
                          value={formData.empresa}
                          onChange={(e) => setFormData((prev) => ({ ...prev, empresa: e.target.value }))}
                          placeholder="Nome da sua academia"
                        />
                      </div>
                    </div>

                    {/* Tipo de Contato */}
                    <div className="space-y-2">
                      <Label htmlFor="tipoContato">Tipo de Contato *</Label>
                      <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, tipoContato: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo de contato" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="duvida">Dúvida Geral</SelectItem>
                          <SelectItem value="problema">Reportar Problema</SelectItem>
                          <SelectItem value="sugestao">Sugestão de Melhoria</SelectItem>
                          <SelectItem value="suporte">Suporte Técnico</SelectItem>
                          <SelectItem value="comercial">Questão Comercial</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Assunto */}
                    <div className="space-y-2">
                      <Label htmlFor="assunto">Assunto *</Label>
                      <Input
                        id="assunto"
                        value={formData.assunto}
                        onChange={(e) => setFormData((prev) => ({ ...prev, assunto: e.target.value }))}
                        required
                        placeholder="Resumo do que você precisa"
                      />
                    </div>

                    {/* Mensagem */}
                    <div className="space-y-2">
                      <Label htmlFor="mensagem">Mensagem *</Label>
                      <Textarea
                        id="mensagem"
                        value={formData.mensagem}
                        onChange={(e) => setFormData((prev) => ({ ...prev, mensagem: e.target.value }))}
                        required
                        placeholder="Descreva detalhadamente sua dúvida, problema ou sugestão..."
                        rows={6}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Enviar Mensagem
                    </Button>

                    <div className="text-center text-sm text-gray-500">
                      <p>* Campos obrigatórios</p>
                      <p className="mt-1">Responderemos em até 24 horas úteis.</p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Outras Formas de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">E-mail</h4>
                      <p className="text-gray-600">contato@gymflow.com</p>
                      <p className="text-sm text-gray-500">Resposta em até 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Telefone/WhatsApp</h4>
                      <p className="text-gray-600">(16) 98157-0419</p>
                      <p className="text-sm text-gray-500">Seg-Sex: 9h às 18h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Localização</h4>
                      <p className="text-gray-600">Altinópolis, SP</p>
                      <p className="text-sm text-gray-500">Atendimento remoto</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tempo de Resposta</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Dúvidas Gerais</span>
                      <Badge className="bg-blue-100 text-blue-800">24h</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Problemas Técnicos</span>
                      <Badge className="bg-orange-100 text-orange-800">12h</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Questões Urgentes</span>
                      <Badge className="bg-red-100 text-red-800">4h</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
