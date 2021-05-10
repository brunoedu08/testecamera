export class DocumentoDTO {
    id: number;
    nomeArquivo: string;
    descrArquivo: string;
    tipo?: string;
    conteudoArquivo: string;
    ctrDthInc: string;
    processoId?: number;
    tipoArquivo?: string;
    codArqVpd?: number;
    cpfParticipante?: number;
    nroIP?: string;
    conteudoMiniatura?: string;
    ctrDthAtu?: string;
    intempestivo?: boolean;
    podeExcluir?: boolean;
    visto?: string;
}

export class Endereco {
    cep: number;
    nro: number;
    tipoLograd: string;
    descrLograd: string;
    compl: string;
    bairro: string;
    uf: string;
    descrMunic: string;
}


export class ProcessoInclusaoDTO {
    codAitOft: number;
    codAitSerie: string;
    tpServico: string;
    requerente: string;
    cpf: number;
    cnpj: number;
    razaoDefesa: string;
    tpParticipante: string;
    placa: string;
    ufPlaca: string;
    alegacaoId: number;
    docs: DocumentoDTO[] = [];
    docsExcl: DocumentoDTO[] = [];
    tipoRepresentado: string;
    nomeRepresentado: string;
    doctoRepresentado: number;
    nomeIndicado: string;
    cpfIndicado: number;
    nait: number;
    codProcesso: number;
    tipoCnh: number;
    nroCnh: number;
    endereco: Endereco;
    nroIP: string;
    codTpProcesso: number;
    telefoneFixo: string;
    telefoneCelular: string;
    tpCnh: string;
    cnh: number;
    ufCnh: string;
    codOrgaoExpCnh: string;
    codInfracao: number;
    naturezaInfracao: string;
    orgaoCompetente: number;
    artigoAmpLegal: string;
    artigoAbrevInfr: string;
}
