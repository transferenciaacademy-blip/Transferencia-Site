import React, { useState, useMemo } from 'react';
import { mockEditais } from '../mock';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Calendar, MapPin, Users, Search, Filter, ExternalLink } from 'lucide-react';

const Editais = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('todos');

  const filteredEditais = useMemo(() => {
    return mockEditais.filter((edital) => {
      const matchesSearch =
      edital.universidade.toLowerCase().includes(searchTerm.toLowerCase()) ||
      edital.curso.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'todos' || edital.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  };

  return (
    <section id="editais" className="py-20 bg-[#0A1A40]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#D4A017]/10 text-[#D4A017] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Editais de Transferência
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Encontre seu edital ideal
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Acompanhe os editais abertos das principais universidades do Brasil
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar por universidade ou curso..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white rounded-lg text-[#0A1A40] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4A017]" />

              </div>

              {/* Status Filter */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white rounded-lg text-[#0A1A40] focus:outline-none focus:ring-2 focus:ring-[#D4A017] appearance-none cursor-pointer">

                  <option value="todos">Todos os Editais</option>
                  <option value="aberto">Editais Abertos</option>
                  <option value="fechado">Editais Fechados</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Editais Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredEditais.length > 0 ?
          filteredEditais.map((edital) =>
          <Card
            key={edital.id}
            className="bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden group">

                <CardHeader className="!opacity-[0%]">
                  <div className="flex items-start justify-between mb-2">
                    <Badge
                  className={`${
                  edital.status === 'aberto' ?
                  'bg-green-500 hover:bg-green-600' :
                  'bg-gray-400 hover:bg-gray-500'} text-white`
                  }>

                      {edital.status === 'aberto' ? 'Aberto' : 'Fechado'}
                    </Badge>
                    <div className="w-10 h-10 bg-[#D4A017]/10 rounded-full flex items-center justify-center group-hover:bg-[#D4A017] transition-colors duration-300">
                      <MapPin className="w-5 h-5 text-[#D4A017] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-[#0A1A40] leading-tight">
                    {edital.universidade}
                  </CardTitle>
                  <p className="text-[#D4A017] font-bold text-lg">{edital.curso}</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="!opacity-[0%]">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Users className="w-4 h-4 text-[#D4A017]" />
                      <span className="!text-sm !opacity-[0%] !shadow-sm">
                        <strong className="text-[#0A1A40]">{edital.vagas}</strong> vagas disponíveis
                      </span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-[#D4A017] mt-0.5" />
                      <div>
                        <div>Abertura: {formatDate(edital.dataAbertura)}</div>
                        <div>Fechamento: {formatDate(edital.dataFechamento)}</div>
                      </div>
                    </div>
                    <div className="!opacity-[0%]">
                      <p className="!text-xs !mb-[1px] text-gray-500">{edital.requisitos}</p>
                      <Button
                    onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Tenho interesse no edital de ' + edital.curso, '_blank')}
                    className="w-full bg-[#D4A017] hover:bg-[#B8900F] text-[#0A1A40] font-bold">

                        Saber Mais
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
          ) :

          <div className="col-span-full text-center py-12">
              <p className="text-white text-lg">Nenhum edital encontrado com os filtros selecionados.</p>
            </div>
          }
        </div>

        {/* CTA Bottom */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">Não encontrou o edital que procura?</p>
          <Button
            onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de informações sobre editais', '_blank')}
            variant="outline"
            className="border-2 border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017] hover:text-[#0A1A40] font-bold">

            Entre em Contato
          </Button>
        </div>
      </div>
    </section>);

};

export default Editais;