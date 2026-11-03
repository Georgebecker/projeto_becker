<!--
  ============================================================
  WIDGET DE PRODUTOS - MERCADO LIVRE (link de afiliado)
  Gerado em 03/11/2026 | 53 produtos | fonte: listalinks.txt
  ============================================================

  COMO USAR NO BLOGGER (NAO precisa de upload - e so copiar e colar):
  -------------------------------------------------------------------
  OPCAO 1 - EM UMA ABA/PAGINA DO BLOG:
    Blogger > Paginas > "Nova pagina" (ou editar a aba desejada) >
    no editor, clique em "Exibir HTML" > cole TUDO deste arquivo >
    "Publicar" > adicione a pagina ao menu do blog.
  OPCAO 2 - COMO GADGET NO LAYOUT (barra lateral):
    Blogger > Layout > "Adicionar um gadget" > HTML/JavaScript >
    cole TUDO deste arquivo > Salvar.

  O card troca de produto sozinho (a cada 30 segundos) e tem botoes
  de anterior/proximo para o visitante navegar manualmente.
  O visual acompanha o modo noite/dia do blog automaticamente.
  Pode repetir este widget em mais de um lugar (ex.: o post e a barra
  lateral); cada copia funciona sozinha.

  AJUSTES RÁPIDOS (pode editar sem medo):
  - Tempo entre as trocas: procure "var CFG" mais abaixo e mude os segundos.
  - Textos, cores: procure a seção <style>.

  COMO TESTAR SEM PUBLICAR:
  - Abra este arquivo no seu navegador (duplo clique).
  ============================================================
-->
<div id="mlw-widget">
<style>
  /* ============================================================
     Cores do widget. O MODO NOITE e aplicado automaticamente:
     - acompanha a preferencia noite/dia do aparelho do visitante;
     - e tambem acompanha o botao noite/dia do tema do blog.
     ============================================================ */
  #mlw-widget {
    --mlw-azul: #3483fa;
    --mlw-azul-escuro: #2968c8;
    --mlw-verde: #00a650;
    --mlw-fundo: #ffffff;
    --mlw-borda: #e6e6e6;
    --mlw-sombra: 0 2px 10px rgba(0, 0, 0, 0.06);
    --mlw-sombra-hover: 0 4px 18px rgba(0, 0, 0, 0.12);
    --mlw-img-fundo: #f8f8f8;
    --mlw-titulo-cor: #333333;
    --mlw-preco-cor: #111111;
    --mlw-antigo-cor: #999999;
    --mlw-meta-cor: #666666;
    --mlw-divisor: #f0f0f0;
    --mlw-botao-fundo: #ffffff;
    --mlw-botao-borda: #dcdcdc;
    --mlw-botao-cor: #444444;
    --mlw-chip-frete-fundo: #e8f7ee;
    --mlw-chip-frete-cor: #0a7d3f;
    --mlw-chip-full-fundo: #e3f0ff;
    --mlw-chip-full-cor: #1f6fd6;
    --mlw-chip-selo-fundo: #fff3e0;
    --mlw-chip-selo-cor: #b25e00;
    container-type: inline-size; /* permite o layout se adaptar ao ESPACO do local */
    max-width: 680px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  }
  #mlw-widget * { box-sizing: border-box; }

  #mlw-card {
    background: var(--mlw-fundo);
    border: 1px solid var(--mlw-borda);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--mlw-sombra);
    transition: box-shadow 0.25s ease;
  }
  #mlw-card:hover { box-shadow: var(--mlw-sombra-hover); }

  #mlw-corpo {
    display: flex;
    gap: 16px;
    padding: 16px;
    align-items: center;
    text-decoration: none;
    color: inherit;
    opacity: 1;
    transition: opacity 0.35s ease;
  }
  #mlw-corpo.mlw-fade { opacity: 0; }

  #mlw-imgbox {
    flex: 0 0 150px;
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--mlw-img-fundo);
    border-radius: 10px;
    overflow: hidden;
  }
  #mlw-img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    display: block;
  }

  #mlw-dados { flex: 1 1 auto; min-width: 0; }

  #mlw-badges { margin-bottom: 6px; min-height: 24px; }
  #mlw-badges span {
    display: inline-block;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.3px;
    padding: 3px 8px;
    border-radius: 5px;
    margin: 0 6px 4px 0;
  }
  #mlw-badges .mlw-b-frete { background: var(--mlw-chip-frete-fundo); color: var(--mlw-chip-frete-cor); }
  #mlw-badges .mlw-b-full  { background: var(--mlw-chip-full-fundo); color: var(--mlw-chip-full-cor); }
  #mlw-badges .mlw-b-selo  { background: var(--mlw-chip-selo-fundo); color: var(--mlw-chip-selo-cor); }

  #mlw-titulo {
    font-size: 15px;
    line-height: 1.35;
    font-weight: 600;
    color: var(--mlw-titulo-cor);
    margin: 0 0 8px 0;
    min-height: 40px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  #mlw-precos { margin-bottom: 8px; }
  #mlw-preco { font-size: 22px; font-weight: 700; color: var(--mlw-preco-cor); }
  #mlw-antigo {
    font-size: 13px;
    color: var(--mlw-antigo-cor);
    text-decoration: line-through;
    margin-left: 8px;
  }
  #mlw-desconto {
    font-size: 13px;
    font-weight: 700;
    color: var(--mlw-verde);
    margin-left: 8px;
  }

  #mlw-meta {
    font-size: 12px;
    color: var(--mlw-meta-cor);
    margin-bottom: 12px;
  }

  #mlw-cta {
    display: inline-block;
    background: var(--mlw-azul);
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    padding: 9px 18px;
    border-radius: 8px;
    transition: background 0.2s ease;
  }
  #mlw-card:hover #mlw-cta { background: var(--mlw-azul-escuro); }

  #mlw-barra {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px 10px 16px;
    border-top: 1px solid var(--mlw-divisor);
  }
  #mlw-nav { display: flex; gap: 6px; }
  #mlw-nav button {
    width: 32px;
    height: 32px;
    padding: 0;
    border-radius: 50%;
    border: 1px solid var(--mlw-botao-borda);
    background: var(--mlw-botao-fundo);
    color: var(--mlw-botao-cor);
    font-size: 17px;
    line-height: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s ease, color 0.15s ease, transform 0.1s ease;
  }
  #mlw-nav button:hover {
    background: var(--mlw-azul);
    border-color: var(--mlw-azul);
    color: #ffffff;
  }
  #mlw-nav button:active { transform: scale(0.94); }

  /* MODO NOITE 1/2: preferencia do aparelho do visitante */
  @media (prefers-color-scheme: dark) {
    #mlw-widget:not([data-mlw-tema="light"]) {
      --mlw-fundo: #1e1e1e;
      --mlw-borda: #343434;
      --mlw-sombra: 0 2px 10px rgba(0, 0, 0, 0.45);
      --mlw-sombra-hover: 0 4px 18px rgba(0, 0, 0, 0.6);
      --mlw-img-fundo: #2a2a2a;
      --mlw-titulo-cor: #eaeaea;
      --mlw-preco-cor: #ffffff;
      --mlw-antigo-cor: #8f8f8f;
      --mlw-meta-cor: #aaaaaa;
      --mlw-divisor: #303030;
      --mlw-botao-fundo: #2a2a2a;
      --mlw-botao-borda: #454545;
      --mlw-botao-cor: #dddddd;
      --mlw-chip-frete-fundo: #14351f;
      --mlw-chip-frete-cor: #6fdc9b;
      --mlw-chip-full-fundo: #12294a;
      --mlw-chip-full-cor: #7ab3ff;
      --mlw-chip-selo-fundo: #3a2a12;
      --mlw-chip-selo-cor: #ffb45e;
    }
  }

  /* MODO NOITE 2/2: tema com botao dia/noite do blog */
  #mlw-widget[data-mlw-tema="dark"] {
    --mlw-fundo: #1e1e1e;
    --mlw-borda: #343434;
    --mlw-sombra: 0 2px 10px rgba(0, 0, 0, 0.45);
    --mlw-sombra-hover: 0 4px 18px rgba(0, 0, 0, 0.6);
    --mlw-img-fundo: #2a2a2a;
    --mlw-titulo-cor: #eaeaea;
    --mlw-preco-cor: #ffffff;
    --mlw-antigo-cor: #8f8f8f;
    --mlw-meta-cor: #aaaaaa;
    --mlw-divisor: #303030;
    --mlw-botao-fundo: #2a2a2a;
    --mlw-botao-borda: #454545;
    --mlw-botao-cor: #dddddd;
    --mlw-chip-frete-fundo: #14351f;
    --mlw-chip-frete-cor: #6fdc9b;
    --mlw-chip-full-fundo: #12294a;
    --mlw-chip-full-cor: #7ab3ff;
    --mlw-chip-selo-fundo: #3a2a12;
    --mlw-chip-selo-cor: #ffb45e;
  }

  /* Ajuste ao espaco do LOCAL onde o widget foi colocado: se o espaco
     for estreito (ex.: barra lateral), o cartao vira coluna - imagem
     em cima, informacoes embaixo. Funciona tambem no computador. */
  @container (max-width: 520px) {
    #mlw-corpo { flex-direction: column; align-items: stretch; }
    #mlw-imgbox { width: 100%; flex-basis: auto; height: 200px; }
  }

  /* Ajuste para telas pequenas (celular), como antes. */
  @media (max-width: 520px) {
    #mlw-corpo { flex-direction: column; align-items: stretch; }
    #mlw-imgbox { width: 100%; flex-basis: auto; height: 200px; }
  }
</style>

  <div id="mlw-card">
    <a id="mlw-corpo" href="#" target="_blank" rel="sponsored nofollow noopener">
      <div id="mlw-imgbox"><img id="mlw-img" src="" alt="Produto" loading="lazy" /></div>
      <div id="mlw-dados">
        <div id="mlw-badges"></div>
        <div id="mlw-titulo"></div>
        <div id="mlw-precos">
          <span id="mlw-preco"></span><span id="mlw-antigo"></span><span id="mlw-desconto"></span>
        </div>
        <div id="mlw-meta"></div>
        <span id="mlw-cta">Ver oferta &raquo;</span>
      </div>
    </a>
    <div id="mlw-barra">
      <div id="mlw-nav">
        <button type="button" id="mlw-anterior" title="Ver o produto anterior" aria-label="Produto anterior">&lsaquo;</button>
        <button type="button" id="mlw-proximo" title="Ver o próximo produto" aria-label="Próximo produto">&rsaquo;</button>
      </div>
    </div>
  </div>

<script>
(function () {
  "use strict";

  // ============================================================
  // AJUSTES RÁPIDOS
  // intervaloMinSegundos / intervaloMaxSegundos:
  //   tempo entre as trocas automáticas (em segundos).
  //   Padrão: 30 e 30 = troca automática a cada 30 segundos.
  // Os botões (ao lado do aviso) permitem ao visitante navegar
  // manualmente para o produto anterior/próximo.
  // ============================================================
  var CFG = {"intervaloMinSegundos": 30, "intervaloMaxSegundos": 30};

  var DADOS = [{"id":"MLB4040078892","titulo":"Sofá Retrátil Reclinável 2,50m Nivus Cinza Molas Ensacadas - King House","link":"https://www.mercadolivre.com.br/sofa-retratil-reclinavel-250m-nivus-cinza-molas-ensacadas-king-house/p/MLB26978758?matt_event_ts=1793702164307&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=29717e85-43a6-4dba-8ea6-02af22c2b0d0#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=c499b2bc-c61f-4de5-a1b8-03c11a65d607&tracking_id=49a09e39-0798-4586-8c45-a1f7fa778825&wid=MLB4040078892&sid=recos&c_id=/home/card-featured/element&c_uid=9f4988cc-e737-40c2-8f0e-1bc1b1fb4b47","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_831936-MLA96118028059_102025-V.webp","preco":"R$ 1.999","preco_anterior":"R$ 3.343","desconto":"40% OFF no Pix","loja":"King House","avaliacao":null,"total_avaliacoes":null,"frete_gratis":false,"full":false,"selos":["MAIS VENDIDO","R$1.775,20 com Cupom"]},{"id":"MLB6420203084","titulo":"Smartphone Motorola Moto G67 5g - 256gb 4gb Ram + 8gb Ram Boost, Camera 50mp Sony Lytia 600, Tela 1.5k Extreme Amoled 120hz, Ultrarresistente - Chumbo","link":"https://www.mercadolivre.com.br/smartphone-motorola-moto-g67-5g-256gb-4gb-ram-8gb-ram-boost-camera-50mp-sony-lytia-600-tela-15k-extreme-amoled-120hz-ultrarresistente-chumbo/p/MLB65319819?matt_event_ts=1793702168957&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=3e21ec9f-0d10-40e0-83a3-12e5d1574631#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=53767303-4816-4071-ade8-d07e94e0e78e&tracking_id=31539d52-b6b8-4cb8-8462-62f25d6d8df0&wid=MLB6420203084&sid=recos&c_id=/home/card-featured/element&c_uid=1f4b41ad-e050-45fd-a73f-ce00f75e7f14","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_859554-MLA106048223542_022026-V.webp","preco":"R$ 1.392","preco_anterior":"R$ 2.099","desconto":"33% OFF no Pix","loja":"Motorola","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":[]},{"id":"MLB4091456221","titulo":"Cooktop 5 Bocas a Gás Electrolux Mesa de Vidro Efficient Grade de Aço Fosco (KE5GR) Bivolt","link":"https://www.mercadolivre.com.br/cooktop-5-bocas-a-gas-electrolux-mesa-de-vidro-efficient-grade-de-aco-fosco-ke5gr-bivolt/p/MLB50374350?matt_event_ts=1793702173515&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=011b4fbb-82e4-45aa-b952-806cbfe0d7e6#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=e16e8d18-5478-4017-99e3-adfbc38ced69&tracking_id=8fb1c3e8-11eb-406d-a06e-eba2b499b5af&wid=MLB4091456221&sid=recos&c_id=/home/card-featured/element&c_uid=aaacfbb2-7186-45f5-bec2-f1f50ace6162","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_720909-MLA99966292541_112025-V.webp","preco":"R$ 570,14","preco_anterior":"R$ 629","desconto":"9% OFF no Pix","loja":"Mercado Livre","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB3829671002","titulo":"Vaso Sanitário Monobloco Caixa Acoplada Completo Privada Cor Branco Tubrax - VAB0003","link":"https://www.mercadolivre.com.br/vaso-sanitario-monobloco-caixa-acoplada-completo-privada-cor-branco-tubrax-vab0003/p/MLB24428758?matt_event_ts=1793702177913&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=35133f17-8287-43a2-949d-24c9ccbc61f4#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=97efcd3e-4e87-46ca-a8b7-0b1c08647507&tracking_id=bb862ac1-d6a0-4754-a435-151937a55616&wid=MLB3829671002&sid=recos&c_id=/home/card-featured/element&c_uid=7bd035f0-a160-44c7-a753-176071b81db3","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_746046-MLA96084254075_102025-V.webp","preco":"R$ 539,71","preco_anterior":"R$ 1.074","desconto":"49% OFF","loja":"Tubrax","avaliacao":null,"total_avaliacoes":null,"frete_gratis":false,"full":false,"selos":["MAIS VENDIDO"]},{"id":"MLB3533684445","titulo":"Projetor Portátil 4k Hd Android 11.0 Smart Wifi 5g Bluetooth Branco 127/220v","link":"https://www.mercadolivre.com.br/projetor-portatil-4k-hd-android-110-smart-wifi-5g-bluetooth/up/MLBU767944712?pdp_filters=item_id%3AMLB3533684445&matt_event_ts=1793702182283&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=ecda00f0-68de-4005-8a03-ee5463501e7b#polycard_client=recommendations_home_affiliate-profile&wid=MLB3533684445&sid=recos&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=c36e8585-acfe-4343-85b0-aa5e9eb4c5f3&tracking_id=f5ecb947-c48d-412b-b217-5fa654077ba8&c_id=/home/card-featured/element&c_uid=cd90a204-8cfe-43f7-a372-6b62ca71d666","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_828936-MLB88748640584_082025-V.webp","preco":"R$ 177","preco_anterior":"R$ 349,90","desconto":"49% OFF","loja":"DUOSEG","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":false,"selos":["MAIS VENDIDO"]},{"id":"MLB6972453978","titulo":"Câmera de Segurança Wi-Fi iCSee/Yoosee A28B 4K Dupla Lente Visão Noturna Colorida Full Hd Externa Prova D'água Ip66 Sensor Movimento Woosh","link":"https://www.mercadolivre.com.br/camera-de-seguranca-wi-fi-icseeyoosee-a28b-4k-dupla-lente-visao-noturna-colorida-full-hd-externa-prova-dagua-ip66-sensor-movimento-woosh/p/MLB60074213?matt_event_ts=1793702186749&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=713b4dbc-844b-4769-8e2d-63cf0d84f312#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=1cf50685-e212-47fe-b90e-2f990dd63cb0&tracking_id=8126cde1-150c-4547-832e-38a761b7df24&wid=MLB6972453978&sid=recos&c_id=/home/card-featured/element&c_uid=207fbd26-2c87-4adf-9f64-8d53764098dd","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_798945-MLA112454329586_062026-V.webp","preco":"R$ 112,49","preco_anterior":"R$ 399","desconto":"71% OFF no Pix","loja":"Woosh","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":[]},{"id":"MLB4604524273","titulo":"Air Fryer Oven Philco 16L Digital com Visor PAF16C","link":"https://www.mercadolivre.com.br/air-fryer-oven-philco-16l-digital-com-visor-paf16c/p/MLB66895633?matt_event_ts=1793702191231&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=35fe6d41-c40e-4c64-b8a6-1b1d90934014#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=4e7b76d8-ef58-4e93-9bed-4adcd5e157a0&tracking_id=6072134a-4b9f-42e2-b2ca-5b3112a2d16a&wid=MLB4604524273&sid=recos&c_id=/home/card-featured/element&c_uid=391902b7-f122-4d35-8873-0ff07eeb025d","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_787079-MLA118415710750_102026-V.webp","preco":"R$ 439","preco_anterior":"R$ 623,96","desconto":"29% OFF","loja":"Mercado Livre","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB4243087779","titulo":"Máquina De Lavar Branca Consul 12kg Com Dosagem Econômica E Cor Branco 110v","link":"https://www.mercadolivre.com.br/maquina-de-lavar-branca-consul-12kg-com-dosagem-economica-e-cor-branco-110v/p/MLB59322248?matt_event_ts=1793702195833&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=bd996563-6d7a-4365-ac82-a94b53f4787c#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=a034d7ef-2318-4c6a-9f50-f77f1929dc62&tracking_id=cb0d11c8-ecd7-4656-84da-a1f78374798c&wid=MLB4243087779&sid=recos&c_id=/home/card-featured/element&c_uid=2267cc38-6330-4ca7-bc60-398c415f422c","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_612560-MLA99968162739_112025-V.webp","preco":"R$ 1.519","preco_anterior":"R$ 1.719","desconto":"11% OFF no Pix","loja":"Consul","avaliacao":null,"total_avaliacoes":null,"frete_gratis":false,"full":false,"selos":["MAIS VENDIDO"]},{"id":"MLB4228627923","titulo":"Smartphone Motorola Moto G06 128gb Azul-marinho","link":"https://www.mercadolivre.com.br/smartphone-motorola-moto-g06-128gb-azul-marinho/p/MLB81041922?matt_event_ts=1793702200366&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=fefaf2cb-b25a-45d4-8840-79188696908f#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=1be44cb4-6df0-4cbe-a870-566252baf4e5&tracking_id=0609f03e-7420-4b02-bb32-34d29fecb476&wid=MLB4228627923&sid=recos&c_id=/home/card-featured/element&c_uid=b1aa4bcd-2c28-43a4-90e6-a67539526fe8","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_621856-MLA120233755023_102026-V.webp","preco":"R$ 799","preco_anterior":"R$ 1.399","desconto":"42% OFF no Pix","loja":"Motorola","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB6232648420","titulo":"Tablet Samsung Galaxy Tab A11+, 128gb, 6gb Ram, Tela De 11 , Câmera Traseira 8mp, Wifi, Android 16","link":"https://www.mercadolivre.com.br/tablet-samsung-galaxy-tab-a11-128gb-6gb-ram-tela-de-11-camera-traseira-8mp-wifi-android-16/p/MLB64090053?matt_event_ts=1793702204904&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=19641d8f-1c48-4ad4-bfb2-48ee7d677665#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=388603cf-34dd-4f38-8fe5-d14f4e62db16&tracking_id=75b0bf4f-94ed-4a1d-8da0-e0845f186f2b&wid=MLB6232648420&sid=recos&c_id=/home/card-featured/element&c_uid=24c0cf68-b30c-4a10-90e1-9bcccbf976a3","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_922232-MLA104267686953_012026-V.webp","preco":"R$ 1.487","preco_anterior":"R$ 2.349","desconto":"36% OFF","loja":"Samsung","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB7706950600","titulo":"Smartphone Motorola Moto G06 - 64GB 4GB RAM + 8GB Ram Boost, Camera 50MP com AI, Bateria de 5200 mAh e Tela 6.9\" - Azul Marinho","link":"https://www.mercadolivre.com.br/smartphone-motorola-moto-g06-64gb-4gb-ram-8gb-ram-boost-camera-50mp-com-ai-bateria-de-5200-mah-e-tela-69-azul-marinho/p/MLB79484492?matt_event_ts=1793702209296&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=eaedd7e3-003e-4493-88d5-876b88fdc655#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=5a4f6751-ab49-4c86-a13f-79cd9faaa220&tracking_id=96d0e220-1f76-4df3-8a94-48e1e16dd5da&wid=MLB7706950600&sid=recos&c_id=/home/card-featured/element&c_uid=6cb2c32f-dfe7-47cc-93b3-396c43acf88c","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_879828-MLA116321124714_092026-V.webp","preco":"R$ 698,40","preco_anterior":"R$ 1.299","desconto":"46% OFF no Pix","loja":"Motorola","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB5800037458","titulo":"Smart Tv Tcl 32 Polegadas Qled Full Hd S5k Wifi Bluetooth Google Tv 2 Hdmi Hdr10 Dolby Audio 32s5k","link":"https://www.mercadolivre.com.br/smart-tv-tcl-32-polegadas-qled-full-hd-s5k-wifi-bluetooth-google-tv-2-hdmi-hdr10-dolby-audio-32s5k/p/MLB49197371?matt_event_ts=1793702213867&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=b95bcb75-7934-4ff9-859b-ed81b8a711c3#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=b8dd12e5-61d4-4aaa-a13d-7175f5e7ca71&tracking_id=bd86ac52-cc12-4d00-8654-53d663412f81&wid=MLB5800037458&sid=recos&c_id=/home/card-featured/element&c_uid=faac8eb2-03e9-4f60-ae8e-9399fde7a903","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_895373-MLA115962251521_082026-V.webp","preco":"R$ 1.104","preco_anterior":"R$ 1.249","desconto":"11% OFF","loja":"Mercado Livre","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB5457116760","titulo":"Fritadeira Air Fryer 4,5l Widemax Com Interior De Alumínio 1500w Midea","link":"https://www.mercadolivre.com.br/fritadeira-air-fryer-45l-widemax-com-interior-de-aluminio-1500w-midea/p/MLB51032488?matt_event_ts=1793702218515&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=c8148503-84ba-4779-a588-2a6b9632abc8#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=e9201dc5-8c82-4a17-832e-fa6b4599b1a8&tracking_id=aea9045f-6ab4-462d-b0f2-4adde266a540&wid=MLB5457116760&sid=recos&c_id=/home/card-featured/element&c_uid=6cf2363a-2869-4515-94c2-2b0453a7a1d2","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_733418-MLA99504461002_112025-V.webp","preco":"R$ 203,31","preco_anterior":"R$ 289","desconto":"29% OFF no Pix","loja":"Mercado Livre","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB7535842350","titulo":"Câmera de Segurança Wi-Fi A28B 4K Dupla Lente Visão Noturna Colorida Full Hd Externa Prova D'água Ip66 Sensor Movimento iCSee DUOSEG","link":"https://www.mercadolivre.com.br/camera-de-seguranca-wi-fi-a28b-4k-dupla-lente-visao-noturna-colorida-full-hd-externa-prova-dagua-ip66-sensor-movimento-icsee-duoseg/p/MLB46329411?pdp_filters=item_id%3AMLB7535842350&matt_event_ts=1793702223045&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=c93c10f4-f391-413c-bb34-88940212b85f#polycard_client=recommendations_home_affiliate-profile&wid=MLB7535842350&sid=recos&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=92bf8e09-eea2-4d8c-8cd4-a3ed2cc91980&tracking_id=90eb21ed-410c-4389-98d9-4dc84c74a77f&c_id=/home/card-featured/element&c_uid=144d56a5-fd6f-4bee-a7ae-4842ae79cc5e","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_744022-MLA117281808570_102026-V.webp","preco":"R$ 111,94","preco_anterior":"R$ 229,36","desconto":"51% OFF no Pix","loja":"Aquanano","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":[]},{"id":"MLB2631867798","titulo":"Aspirador De Pó e Água Wap Gtw 10 Compacto 1400w 10 Litros Amarelo","link":"https://www.mercadolivre.com.br/aspirador-de-po-e-agua-wap-gtw-10-compacto-1400w-10-litros-amarelo/p/MLB8923630?matt_event_ts=1793702227483&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=0abb8541-4c3a-4d41-bd93-4e29f6229b1a#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=89a6ed1d-20fa-4ede-aa62-a518c124e86a&tracking_id=3714d771-255e-4aea-aefd-11b36001fd21&wid=MLB2631867798&sid=recos&c_id=/home/card-featured/element&c_uid=5c883030-21d3-484a-a5b5-6378d7576388","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_944970-MLA99949674111_112025-V.webp","preco":"R$ 239,11","preco_anterior":"R$ 399","desconto":"40% OFF no Pix","loja":null,"avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB3374647205","titulo":"Micro-ondas Electrolux Prata 23L Efficient ME23S 127V","link":"https://www.mercadolivre.com.br/micro-ondas-electrolux-prata-23l-efficient-me23s-127v/p/MLB19617680?matt_event_ts=1793702232046&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=9a1ef690-6931-41a9-8e7e-354cc381bc65#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=90f7f596-f760-45f2-b721-0c237f69c10a&tracking_id=61379a80-5448-41b3-8a0c-14fe6ce8df5c&wid=MLB3374647205&sid=recos&c_id=/home/card-featured/element&c_uid=3f5a374b-3231-4c75-bcb9-2a9eb64bae87","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_789869-MLA99700643206_122025-V.webp","preco":"R$ 519","preco_anterior":"R$ 699","desconto":"25% OFF no Pix","loja":"Mercado Livre","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB6275688670","titulo":"Mercusys MC210 Câmera Segurança Wifi 2K 3MP 360° por TP-Link","link":"https://www.mercadolivre.com.br/mercusys-mc210-camera-seguranca-wifi-2k-3mp-360-por-tp-link/p/MLB65352564?matt_event_ts=1793702236724&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=c82f7725-98ad-4567-97ca-e990a85448ea#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=1bf0c098-d235-40ce-86b9-03c0381dcfab&tracking_id=fe02490c-3859-46b9-930b-02a7dbe4accd&wid=MLB6275688670&sid=recos&c_id=/home/card-featured/element&c_uid=7a9d53cc-65db-4df2-bd9c-80509cdf5c1b","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_949687-MLA107423093255_022026-V.webp","preco":"R$ 102,75","preco_anterior":"R$ 159,90","desconto":"35% OFF no Pix","loja":"TP-Link","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO","R$87,75 com Cupom"]},{"id":"MLB4051583600","titulo":"Multiprocessador Mondial MPN-01-B Preto 127V","link":"https://www.mercadolivre.com.br/multiprocessador-mondial-mpn-01-b-preto-127v/p/MLB27010607?matt_event_ts=1793702241267&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=06eeb192-6437-4053-a520-f82cb3d0977e#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=a232a75a-6584-4cfe-b651-74c4f6f0246c&tracking_id=658e8c05-780a-4d8b-8200-ac1baf01d8da&wid=MLB4051583600&sid=recos&c_id=/home/card-featured/element&c_uid=c28bfa5f-facd-421e-a7dc-c740a1aceaba","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_658732-MLA99506612662_112025-V.webp","preco":"R$ 219,99","preco_anterior":"R$ 462,90","desconto":"52% OFF","loja":"Mercado Livre","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB4835189031","titulo":"Smart Tv Tcl 55 Polegadas Qled 4k T6c Wifi Bluetooth Google Tv Tela Hva E Hdr10+ 55t6c","link":"https://www.mercadolivre.com.br/smart-tv-tcl-55-polegadas-qled-4k-t6c-wifi-bluetooth-google-tv-tela-hva-e-hdr10-55t6c/p/MLB47845899?matt_event_ts=1793702245688&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=37bb7384-59ae-44d2-860e-99aa24b0730c#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=b7509b28-6627-4a9e-a6de-b5ec7dc7eb5e&tracking_id=febff9ef-3fa3-4f9f-8d23-52853bceb0ee&wid=MLB4835189031&sid=recos&c_id=/home/card-featured/element&c_uid=266c6e4f-cbba-410b-a1e1-6cb31f8913a0","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_657072-MLA114584519748_082026-V.webp","preco":"R$ 2.324","preco_anterior":"R$ 2.899","desconto":"19% OFF no Pix","loja":"Mercado Livre","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB7756809638","titulo":"Smartphone Motorola Moto G Max 5g - 256gb 8gb Ram + 16gb Ram Boost, Câmera 200mp, Ois, Tela 1.5k Extreme Amoled 120hz, Ip68 E Ip69 - Azul Claro","link":"https://www.mercadolivre.com.br/smartphone-motorola-moto-g-max-5g-256gb-8gb-ram-16gb-ram-boost-camera-200mp-ois-tela-15k-extreme-amoled-120hz-ip68-e-ip69-azul-claro/p/MLB69700673?matt_event_ts=1793702250138&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=a33dca70-7d1b-4760-9513-ff983796135c#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=409faba6-1ade-4e63-9dfd-ca051ab3fa6a&tracking_id=2ddd6286-fe0c-4c3f-9547-d6ad3c529972&wid=MLB7756809638&sid=recos&c_id=/home/card-featured/element&c_uid=fb1027d9-fc16-478a-ab7c-b5ad2432ea51","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_698621-MLA110748614648_052026-V.webp","preco":"R$ 1.639","preco_anterior":"R$ 2.355","desconto":"30% OFF no Pix","loja":null,"avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB7477347686","titulo":"Micro-ondas Philco 20L 1100W Limpa Fácil Tira Odor PMO24E","link":"https://www.mercadolivre.com.br/micro-ondas-philco-20l-1100w-limpa-facil-tira-odor-pmo24e/p/MLB77252607?matt_event_ts=1793702254594&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=1beb10c4-2997-46e3-a8a0-d013f8763ab3#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=c02e2cb1-875c-4245-886c-b051f5c68621&tracking_id=d1596b59-504d-4634-92d0-dd57a772a6e4&wid=MLB7477347686&sid=recos&c_id=/home/card-featured/element&c_uid=478f2da8-0bff-4559-ba7f-33b987510537","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_637755-MLA114754266804_082026-V.webp","preco":"R$ 499","preco_anterior":"R$ 649","desconto":"23% OFF","loja":"Mercado Livre","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB4408547152","titulo":"Apple iPhone 15 (128 GB) - Azul - Distribuidor Autorizado","link":"https://www.mercadolivre.com.br/apple-iphone-15-128-gb-azul-distribuidor-autorizado/p/MLB1027172667?matt_event_ts=1793702258959&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=187f982d-f84e-482b-aa67-58a11ad539c1#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=4ef99264-4bed-4eac-84ef-7c3bd92c5811&tracking_id=ce467709-900a-49b3-9647-d5d816de17f5&wid=MLB4408547152&sid=recos&c_id=/home/card-featured/element&c_uid=e10e2ea8-4617-4d21-8fee-033e8b6d9d75","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_831434-MLA96401363339_102025-V.webp","preco":"R$ 3.779","preco_anterior":"R$ 7.209","desconto":"47% OFF no Pix","loja":"Apple","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["LOJA OFICIAL APPLE"]},{"id":"MLB4367472233","titulo":"Smart Tv 32 Philco P32vik Roku Led Dolby Audio Hdr Wi-fi 110/220v","link":"https://www.mercadolivre.com.br/smart-tv-32-philco-p32vik-roku-led-dolby-audio-hdr-wi-fi-110220v/p/MLB63036814?matt_event_ts=1793702263361&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=48027856-fda5-41a2-ac0a-22e242c87c25#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=39a49cf1-bc17-4548-ab0d-f5de9d0cb4ac&tracking_id=5a7eaff2-5e32-4a5c-99f7-d9f44a62d5b6&wid=MLB4367472233&sid=recos&c_id=/home/card-featured/element&c_uid=e03e63d4-4e15-4627-a1d5-04aa4bc7ef38","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_904550-MLA100972962937_122025-V.webp","preco":"R$ 999","preco_anterior":"R$ 1.499","desconto":"33% OFF no Pix","loja":"Vikings","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB1473758753","titulo":"Kit 10 Cuecas Boxer Lupo Algodão Confortável Box Original","link":"https://produto.mercadolivre.com.br/MLB-1473758753-kit-10-cuecas-boxer-lupo-algodo-confortavel-box-original-_JM?searchVariation=203477553195&matt_event_ts=1793702267983&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=1a606bec-f2f8-40f1-bb40-7932955148a3#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=659ffac4-0e6a-4233-b9bd-a6147962d3bc&tracking_id=2738a6dc-9c65-4954-86d8-aebb90dba628&sid=recos&c_id=/home/card-featured/element&c_uid=c7b18123-7fc1-4ac7-9f09-fccf15d3b92e","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_825030-MLB112935647657_062026-V-kit-10-cuecas-boxer-lupo-algodo-confortavel-box-original.webp","preco":"R$ 188,95","preco_anterior":"R$ 449,99","desconto":"58% OFF no Pix","loja":"Osure","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB3941733035","titulo":"Fritadeira Elétrica AFON-12L-BG Forno Oven 12 Litros Preto Mondial","link":"https://www.mercadolivre.com.br/fritadeira-eletrica-afon-12l-bg-forno-oven-12-litros-preto-mondial/p/MLB45070708?matt_event_ts=1793702272767&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=a7e53ec1-76df-49ff-b499-601a1796ad59#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=e40099d6-0b87-4100-b152-b90c5531a4d3&tracking_id=1dd31b7a-3947-460a-9292-3d74f0e802d1&wid=MLB3941733035&sid=recos&c_id=/home/card-featured/element&c_uid=fa43dae7-110d-452e-8015-9d964ad8e999","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_900387-MLA109507200694_042026-V.webp","preco":"R$ 514,09","preco_anterior":"R$ 899","desconto":"42% OFF no Pix","loja":"Mercado Livre","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB2645813318","titulo":"Bicicleta Spinning Com Roda De Inércia De 13kg Wct Fitness Original Cor Preto Preto/amarelo","link":"https://www.mercadolivre.com.br/bicicleta-spinning-com-roda-de-inercia-de-13kg-wct-fitness-original-cor-preto-pretoamarelo/p/MLB34219371?pdp_filters=item_id%3AMLB2645813318&matt_event_ts=1793702277512&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=7dd80ecf-e870-4c1f-8527-1c59a5d77374#polycard_client=recommendations_home_affiliate-profile&wid=MLB2645813318&sid=recos&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=fa474ca8-cd15-4185-8971-3f16c68b6c5c&tracking_id=0632ab2f-c66b-487c-b911-e02dbcbce4a1&c_id=/home/card-featured/element&c_uid=63c9b4e8-ad21-4187-8fad-aa9f834e76b6","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_874975-MLA103430021763_012026-V.webp","preco":"R$ 1.389","preco_anterior":"R$ 2.290","desconto":"39% OFF","loja":"Wct Fitness","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":false,"selos":[]},{"id":"MLB5367526364","titulo":"Perfume Árabe Masculino Fakhar Black Eau De Parfum 100 Ml","link":"https://www.mercadolivre.com.br/perfume-arabe-masculino-fakhar-black-eau-de-parfum-100-ml/up/MLBU3145047223?pdp_filters=item_id%3AMLB5367526364&matt_event_ts=1793702282069&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=4db86052-0dc8-4d47-9f36-367b8121a2cc#polycard_client=recommendations_home_affiliate-profile&wid=MLB5367526364&sid=recos&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=36a44ece-66c7-4213-8655-9508e74e089f&tracking_id=0a043c02-2197-41cb-8e46-bdaa61dfce13&c_id=/home/card-featured/element&c_uid=19acac3f-29db-44ac-967d-0e0c1f49abff","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_974316-MLB84126834827_042025-V.webp","preco":"R$ 169,91","preco_anterior":"R$ 229,90","desconto":"26% OFF no Pix","loja":"KID'S LIFE","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB5044170500","titulo":"Kit 2 Calças Jogger Tactel Com Elastano Impulse","link":"https://produto.mercadolivre.com.br/MLB-5044170500-kit-2-calcas-jogger-tactel-com-elastano-impulse-_JM?searchVariation=188576909041&matt_event_ts=1793702286561&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=427b0c5b-2aad-4c76-9ba3-471a8aeab887#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=d26ebcbd-a1f8-434f-a2e9-800d8f5a952b&tracking_id=fcc41939-295f-41f6-9ff8-c3667663218d&sid=recos&c_id=/home/card-featured/element&c_uid=6dd83604-9c28-4ee2-bb1b-85fe549aa2b1","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_664658-MLB96932532195_112025-V-kit-2-calcas-jogger-tactel-com-elastano-impulse.webp","preco":"R$ 63,96","preco_anterior":"R$ 112,71","desconto":"43% OFF","loja":null,"avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB2820206240","titulo":"Máquina de Lavar Electrolux 15kg Branca Essential Care com Cesto Inox e Jet&Clean LED15","link":"https://www.mercadolivre.com.br/maquina-de-lavar-electrolux-15kg-branca-essential-care-com-cesto-inox-e-jetclean-led15/p/MLB19037310?matt_event_ts=1793702290993&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=4c673e49-25ac-4700-8a43-3b457e69b8bb#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=fe1611b4-2eb5-4830-bdeb-30d803d1c9bb&tracking_id=f7729cc1-1e2a-4570-97d0-6817d21f7587&wid=MLB2820206240&sid=recos&c_id=/home/card-featured/element&c_uid=b5230adf-9c5e-4e78-88e4-9d6724a1b66c","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_633382-MLA100008492027_122025-V.webp","preco":"R$ 1.899","preco_anterior":null,"desconto":"11% OFF","loja":"Electrolux","avaliacao":null,"total_avaliacoes":null,"frete_gratis":false,"full":false,"selos":["MAIS VENDIDO"]},{"id":"MLB3964141405","titulo":"Tablet VAIO TL10 8GB 128GB Octa-Core, Tela 10.4” 2K, 4G WiFi, Câmera 8MP + Selfie 5MP, 7000mAh, Android 13, com Teclado de Conexão Inteligente – Preto","link":"https://www.mercadolivre.com.br/tablet-vaio-tl10-8gb-128gb-octa-core-tela-104-2k-4g-wifi-camera-8mp-selfie-5mp-7000mah-android-13-com-teclado-de-conexao-inteligente-preto/p/MLB23612880?matt_event_ts=1793702295393&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=7807a8ee-97ab-452a-bdc7-1a729ad5383b#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=6e5dc55f-46c1-4787-91ea-17cbb620a30b&tracking_id=78f11e65-532d-4c02-9f43-71402f4899a6&wid=MLB3964141405&sid=recos&c_id=/home/card-featured/element&c_uid=3899607c-f763-4cb8-974f-4dab3bbd64ab","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_765639-MLA112801114353_062026-V.webp","preco":"R$ 1.499","preco_anterior":"R$ 1.899","desconto":"21% OFF","loja":"VAIO","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB6764386730","titulo":"Colchão Inflável Queen Nepul Duplo Com 2 Travesseiro Inflável NE-999 cor Cinza","link":"https://www.mercadolivre.com.br/colchao-inflavel-queen-nepul-duplo-com-2-travesseiro-inflavel-ne-999-cor-cinza/p/MLB67290243?pdp_filters=item_id%3AMLB6764386730&matt_event_ts=1793702299802&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=b4d35713-5b3f-4bae-90d9-242bcd3a2340#polycard_client=recommendations_home_affiliate-profile&wid=MLB6764386730&sid=recos&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=79095e31-0445-4af4-9f66-a52555490bf5&tracking_id=4a37305d-afd9-448e-9636-c66f0eb0c710&c_id=/home/card-featured/element&c_uid=8beae9a5-3442-4acd-b3d3-97ec7132d3d9","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_850286-MLA113912301526_072026-V.webp","preco":"R$ 349","preco_anterior":"R$ 600","desconto":"41% OFF","loja":null,"avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":[]},{"id":"MLB7606575730","titulo":"Projetor HY320 Hardline Smart TV Android WiFi 6 390 ANSI Lumens Full HD Suporte 4K HDMI Bluetooth 85-200 Polegadas Alto Falante Com Controle Remoto Bivolt Portátil Mini","link":"https://www.mercadolivre.com.br/projetor-hy320-hardline-smart-tv-android-wifi-6-390-ansi-lumens-full-hd-suporte-4k-hdmi-bluetooth-85-200-polegadas-alto-falante-com-controle-remoto-bivolt-portatil-mini/p/MLB59660744?matt_event_ts=1793702304536&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=6d814f47-d524-4da1-91bd-5a147214d2d0#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=00fdb192-35ba-45f8-918f-a8d6c440c5d0&tracking_id=c36ea2c0-413c-4bab-9786-2e7a08bca87f&wid=MLB7606575730&sid=recos&c_id=/home/card-featured/element&c_uid=18c62f4f-4a83-42d4-bddc-7fe257dd915e","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_784663-MLA117801956087_092026-V.webp","preco":"R$ 227,99","preco_anterior":"R$ 359,99","desconto":"36% OFF no Pix","loja":null,"avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB5453920876","titulo":"Bicicleta Elétrica Scooter Bikelete Mt2 500w Bateria 48v","link":"https://produto.mercadolivre.com.br/MLB-5453920876-bicicleta-eletrica-scooter-bikelete-mt2-500w-bateria-48v-_JM?searchVariation=188591869917&matt_event_ts=1793702308954&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=d15fa8a4-34fc-4ff4-8656-80f6be8a0596#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=a0bfb211-d044-420d-a74f-1c36ae5a149b&tracking_id=c40c8d06-fb72-4815-94e1-6b77899cfa58&sid=recos&c_id=/home/card-featured/element&c_uid=65f2de7a-6f71-442d-a8d4-eb703ff40658","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_707904-MLB96517092225_102025-V-bicicleta-eletrica-scooter-bikelete-mt2-500w-bateria-48v.webp","preco":"R$ 3.006","preco_anterior":"R$ 5.199","desconto":"42% OFF","loja":"Bikelete","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":false,"selos":[]},{"id":"MLB3846628433","titulo":"Liquidificador Pratic Turbo, Mondial, 550W - L-98-B","link":"https://www.mercadolivre.com.br/liquidificador-pratic-turbo-mondial-550w-l-98-b/p/MLB38503899?matt_event_ts=1793702313389&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=3a135df3-503c-4727-abef-3201532e5c58#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=74d2667f-0d08-4396-a52b-57d3f8ad1fe4&tracking_id=77d6440c-1565-444d-a7f2-735b56109674&wid=MLB3846628433&sid=recos&c_id=/home/card-featured/element&c_uid=0856d562-df51-4179-85b7-e3d608b3eaa7","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_982834-MLA99402107530_112025-V.webp","preco":"R$ 82,10","preco_anterior":"R$ 154,90","desconto":"46% OFF no Pix","loja":"Mercado Livre","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB5482910067","titulo":"Máquina de Gelo Turbo Ice Premium, Mondial, 130W - MG-12-GI","link":"https://www.mercadolivre.com.br/maquina-de-gelo-turbo-ice-premium-mondial-130w-mg-12-gi/p/MLB34968647?matt_event_ts=1793702317889&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=4c67609d-3051-4456-99f7-722977b28441#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=34c868df-a3de-49e9-b3e0-b0c689399533&tracking_id=6cb8288a-ad40-4201-98c4-cf93f693f7cd&wid=MLB5482910067&sid=recos&c_id=/home/card-featured/element&c_uid=b089930e-32f4-4a2e-a229-f7abb54d3002","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_915798-MLA99932749011_112025-V.webp","preco":"R$ 450,92","preco_anterior":"R$ 599,90","desconto":"24% OFF no Pix","loja":"Mercado Fácil","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB3288828491","titulo":"Multiprocessador Turbo Chef 5 Em 1 Mondial 1000W MPN-01-B","link":"https://www.mercadolivre.com.br/multiprocessador-turbo-chef-5-em-1-mondial-1000w-mpn-01-b/p/MLB19714500?matt_event_ts=1793702322344&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=a696b26a-2017-4dc6-a2c5-34adc1f491c2#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=046d564c-4fe3-4599-b3a5-cfa5f3803457&tracking_id=18a85081-e753-436b-9854-1eba297273e4&wid=MLB3288828491&sid=recos&c_id=/home/card-featured/element&c_uid=17d44b9c-be13-485e-a513-aad68314eae2","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_894335-MLA99469939386_112025-V.webp","preco":"R$ 220,15","preco_anterior":"R$ 462,90","desconto":"52% OFF","loja":"Mercado Livre","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB2631902457","titulo":"Aspirador de Pó e Água WAP GTW 10 1400W de Potência com Bocal de Sopro","link":"https://www.mercadolivre.com.br/aspirador-de-po-e-agua-wap-gtw-10-1400w-de-potencia-com-bocal-de-sopro/p/MLB8923631?matt_event_ts=1793702326798&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=5ecb5b95-8c9d-4390-bd90-c348e774462b#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=502882ba-c5d9-4e31-acaa-8a855f562178&tracking_id=5e9dae22-d442-4a83-adef-2f835f8ec00b&wid=MLB2631902457&sid=recos&c_id=/home/card-featured/element&c_uid=9b3ef04f-a96e-43b9-be19-c5c90f01346e","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_985627-MLA100060225801_122025-V.webp","preco":"R$ 259,90","preco_anterior":"R$ 485,57","desconto":"46% OFF","loja":null,"avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB3988105539","titulo":"Notebook Samsung Galaxy Book4 Intel® Core™ i5-1335U (1.3 Ghz, até 4.6GHz, 12 MB L3 Cache), Windows 11 Home, 8GB, 512GB SSD, Iris Xe, 15.6'' Full HD LED, 1.55kg","link":"https://www.mercadolivre.com.br/notebook-samsung-galaxy-book4-intel-core-i5-1335u-13-ghz-ate-46ghz-12-mb-l3-cache-windows-11-home-8gb-512gb-ssd-iris-xe-156-full-hd-led-155kg/p/MLB37044038?matt_event_ts=1793702331270&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=da48b70b-3659-48d0-9ba7-c25b87f68aef#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=d2149f4d-d18b-4787-93ec-0be23a0cb4ba&tracking_id=beec5833-52b9-4679-82c0-ad27c2a1bfa2&wid=MLB3988105539&sid=recos&c_id=/home/card-featured/element&c_uid=077aba99-8c64-40d8-b265-d068bbf7cfa0","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_902725-MLA113038325332_072026-V.webp","preco":"R$ 4.063","preco_anterior":"R$ 5.799","desconto":"29% OFF","loja":"Mercado Livre","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB4701505013","titulo":"Panela De Pressão Elétrica Fmaxx Kitchen Chef 4 Litros 800w 60hz","link":"https://www.mercadolivre.com.br/panela-de-pressao-eletrica-fmaxx-kitchen-chef-4-litros-800w-60hz/p/MLB66160197?matt_event_ts=1793702335830&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=727b9f9a-4407-4373-a29a-6796bac8fd66#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=35b1be03-6f04-43b0-97c6-fe185ac43ba0&tracking_id=c4095561-c24f-42d9-a4f4-7920d0f8f474&wid=MLB4701505013&sid=recos&c_id=/home/card-featured/element&c_uid=06bda908-a4c1-4dec-9660-0d27792b45d0","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_722954-MLA108805964525_032026-V.webp","preco":"R$ 197,91","preco_anterior":"R$ 499","desconto":"60% OFF no Pix","loja":null,"avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB7818802816","titulo":"Guarda Sol Gigante 2,40m Uv Praia Piscina Camping Pesca Verão Cor Azul Marinho Vai De Tech","link":"https://www.mercadolivre.com.br/guarda-sol-gigante-240m-uv-praia-piscina-camping-pesca-verao-cor-azul-marinho-vai-de-tech/p/MLB80519717?pdp_filters=item_id%3AMLB7818802816&matt_event_ts=1793702340269&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=59927e57-05dd-4e54-a961-0ca5861c39b6#polycard_client=recommendations_home_affiliate-profile&wid=MLB7818802816&sid=recos&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=26b7144f-609a-4c3b-9d9c-a12d73ebba3f&tracking_id=1b8c0c2f-d20e-4355-979f-06b053ed3c2d&c_id=/home/card-featured/element&c_uid=3a3ba58a-acca-48c4-a0da-a5d006b86a20","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_651621-MLA117648908194_102026-V.webp","preco":"R$ 89,90","preco_anterior":"R$ 189,90","desconto":"52% OFF","loja":"Vai de Tech","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":false,"selos":[]},{"id":"MLB6781976994","titulo":"Latex acrílica tinta coral anti mofo branco 18l coralar branco fosco","link":"https://www.mercadolivre.com.br/latex-acrilica-tinta-coral-anti-mofo-branco-18l-coralar-branco-fosco/p/MLB38477725?matt_event_ts=1793702344691&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=736efea6-3a7e-4ff9-8629-c84674579ae4#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=16e775ab-decb-4c25-984e-910175e024f1&tracking_id=b926146b-0373-4989-ab46-d1a5745870e7&wid=MLB6781976994&sid=recos&c_id=/home/card-featured/element&c_uid=77f4cfad-8740-40bf-82a7-914037c870cf","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_807241-MLA99565665626_122025-V.webp","preco":"R$ 221,76","preco_anterior":"R$ 320,90","desconto":"30% OFF no Pix","loja":"SOLUWAN","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":false,"selos":["MAIS VENDIDO"]},{"id":"MLB6091025890","titulo":"Fritadeira Airfryer Digital Philips Walita NA230/00","link":"https://www.mercadolivre.com.br/fritadeira-airfryer-digital-philips-walita-na23000/p/MLB62495301?matt_event_ts=1793702349105&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=33407668-3e90-41dd-b967-147f5c2152a3#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=f016ab0b-1c06-4d7e-a9ce-5af6efc210af&tracking_id=bd9b3d02-40d7-4681-bcd5-11b4ec32affe&wid=MLB6091025890&sid=recos&c_id=/home/card-featured/element&c_uid=aa0559c4-dbcf-4443-87e6-77ee04483c94","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_833981-MLA99378767609_112025-V.webp","preco":"R$ 414","preco_anterior":"R$ 749,90","desconto":"44% OFF","loja":"Mercado Livre","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB7693128360","titulo":"Smart TV Box Aquário STV-3000 Plus Sistema Android TV 4K 16GB Cor Preto","link":"https://www.mercadolivre.com.br/smart-tv-box-aquario-stv-3000-plus-sistema-android-tv-4k-16gb-cor-preto/p/MLB35587178?matt_event_ts=1793702353536&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=69a20f16-749f-422d-88e8-ba2e3a47c154#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=29f04135-6a8a-43ed-9157-677fc8a0f2dd&tracking_id=73abe448-fd13-48aa-b158-32de26e6a75d&wid=MLB7693128360&sid=recos&c_id=/home/card-featured/element&c_uid=2e208d3a-690c-45fc-aa40-cffc382e8c26","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_646607-MLA117112608354_102026-V.webp","preco":"R$ 229","preco_anterior":null,"desconto":null,"loja":"Eletrohome","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB7007860672","titulo":"Mochila Masculina Tatica 50l Impermeavel Militar Reforçada Preto","link":"https://www.mercadolivre.com.br/mochila-masculina-tatica-50l-impermeavel-militar-reforcada/up/MLBU4147200056?pdp_filters=item_id%3AMLB7007860672&matt_event_ts=1793702357960&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=30ddfe64-f5a0-47f8-98bd-5878bca9f1a3#polycard_client=recommendations_home_affiliate-profile&wid=MLB7007860672&sid=recos&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=30bde928-069f-4dbd-b90f-3a95b110dd1b&tracking_id=44326f75-5358-4490-ae64-81dd7133a69c&c_id=/home/card-featured/element&c_uid=42461e06-9dc2-42d2-8db7-fe0a4cf51e82","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_892776-MLB118845680293_102026-V.webp","preco":"R$ 78,20","preco_anterior":"R$ 189,99","desconto":"58% OFF no Pix","loja":null,"avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":false,"selos":["MAIS VENDIDO"]},{"id":"MLB4638505847","titulo":"Prateleira 6 Andares De Ferro Estante Para Escritório Aço Preto","link":"https://www.mercadolivre.com.br/prateleira-6-andares-de-ferro-estante-para-escritorio-aco/up/MLBU3932895698?pdp_filters=item_id%3AMLB4638505847&matt_event_ts=1793702362331&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=fe286adb-2563-435f-b179-919d3d3282ce#polycard_client=recommendations_home_affiliate-profile&wid=MLB4638505847&sid=recos&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=15c01261-5a67-4e71-a71f-ec8be5595ef9&tracking_id=e9ed4b3d-f880-415c-9dce-3c2b1bc51713&c_id=/home/card-featured/element&c_uid=742b4fe1-094f-4aa4-8f50-e23f34484830","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_780630-MLB112601050654_062026-V.webp","preco":"R$ 184,28","preco_anterior":"R$ 299,97","desconto":"38% OFF","loja":null,"avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":false,"selos":["MAIS VENDIDO"]},{"id":"MLB4195198970","titulo":"Protetor Solar Facial Antioleosidade FPS 80 Anthelios La Roche-Posay 40g","link":"https://www.mercadolivre.com.br/protetor-solar-facial-antioleosidade-fps-80-anthelios-la-roche-posay-40g/p/MLB19755099?matt_event_ts=1793702366784&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=6ecf02de-1463-4df4-88f8-fac041fcf0b2#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=189bbb71-fc9d-44c6-958e-d6a0cacf70f1&tracking_id=b53a4a92-a8fe-4ae8-a550-1f85434021cc&wid=MLB4195198970&sid=recos&c_id=/home/card-featured/element&c_uid=e665ff18-a133-410c-a2ea-b115e88aba8d","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_752201-MLA113617929791_062026-V.webp","preco":"R$ 79,39","preco_anterior":"R$ 120,90","desconto":"34% OFF no Pix","loja":"La Roche Posay","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO","10% OFF com Cupom"]},{"id":"MLB5665419638","titulo":"Fogão Consul 4 Bocas Inox Mesa de Vidro CFO4VAR","link":"https://www.mercadolivre.com.br/fogao-consul-4-bocas-inox-mesa-de-vidro-cfo4var/p/MLB7939151?matt_event_ts=1793702371269&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=27b56cae-5194-418a-a739-d55cb32a63e1#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=2702c63b-f28d-4a16-ba5d-8060ce21bd38&tracking_id=0d80a719-4ff4-457d-9d99-17f864cc5c2b&wid=MLB5665419638&sid=recos&c_id=/home/card-featured/element&c_uid=0efeccd4-0687-44ec-9c0f-a2becc6030af","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_918727-MLA99394051486_112025-V.webp","preco":"R$ 1.320","preco_anterior":"R$ 1.942","desconto":"32% OFF no Pix","loja":"Mega Mamute","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":false,"selos":["MAIS VENDIDO"]},{"id":"MLB5021389961","titulo":"Câmera De Segurança Wifi Yoosee Externa Mini Dome Full Hd Infravermelho Prova D'água Woosh","link":"https://www.mercadolivre.com.br/camera-de-seguranca-wifi-yoosee-externa-mini-dome-full-hd-infravermelho-prova-dagua-woosh/p/MLB26988439?matt_event_ts=1793702375726&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=fdb8a371-8fb5-4be7-b428-1fe2442c9de3#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=8e7334ce-2dbc-4c5c-849d-2630de7c9a9f&tracking_id=95aec4c4-9987-4f7b-8859-12c6c66a4e2f&wid=MLB5021389961&sid=recos&c_id=/home/card-featured/element&c_uid=35c3f161-3592-44e3-86c7-cf8c63d393b5","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_660918-MLA117911296795_092026-V.webp","preco":"R$ 78,29","preco_anterior":"R$ 89,99","desconto":"13% OFF no Pix","loja":"Woosh","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB3570742559","titulo":"Kit 2 Pneus 175/70r13 Kelly Edge Touring Goodyear 82t","link":"https://www.mercadolivre.com.br/kit-2-pneus-17570r13-kelly-edge-touring-goodyear-82t/p/MLB34078616?matt_event_ts=1793702380152&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=f7eebec2-b1b3-470e-b7da-b08a3a6fc2dd#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=97b4cc46-f76a-4d37-92ef-8ab8b34028c9&tracking_id=0b53c513-385f-438c-8690-4bf888078104&wid=MLB3570742559&sid=recos&c_id=/home/card-featured/element&c_uid=07f3ab5d-f89b-43f8-8bae-cf9a82553742","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_635368-MLA99927677415_112025-V.webp","preco":"R$ 562,90","preco_anterior":"R$ 881,91","desconto":"36% OFF no Pix","loja":"Achei Pneus","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":false,"selos":["MAIS VENDIDO"]},{"id":"MLB4125095325","titulo":"Geladeira 437L Philco Inverter Side by Side Inox PRF535I","link":"https://www.mercadolivre.com.br/geladeira-437l-philco-inverter-side-by-side-inox-prf535i/p/MLB24044938?matt_event_ts=1793702384586&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=91456c07-3d5b-404d-a78c-63974b55a327#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=4095e225-3dd7-4348-908a-32542560cd98&tracking_id=6879f7ce-1706-4739-9eba-c298841ea693&wid=MLB4125095325&sid=recos&c_id=/home/card-featured/element&c_uid=99a15d8b-f68c-43e5-a3cd-f3e841a575bf","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_827837-MLA99988655703_112025-V.webp","preco":"R$ 3.514","preco_anterior":"R$ 5.634","desconto":"37% OFF no Pix","loja":"Philco","avaliacao":null,"total_avaliacoes":null,"frete_gratis":false,"full":false,"selos":["MAIS VENDIDO"]},{"id":"MLB4262767821","titulo":"Notebook 2 em 1 Positivo Duo Intel Celeron N4500 4GB RAM 128GB SSD Windows 11 Home - Tela 11\" HD IPS Touch com Caneta Capacitiva – Cinza","link":"https://www.mercadolivre.com.br/notebook-2-em-1-positivo-duo-intel-celeron-n4500-4gb-ram-128gb-ssd-windows-11-home-tela-11-hd-ips-touch-com-caneta-capacitiva-cinza/p/MLB54525194?matt_event_ts=1793702389096&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=81f1133d-12e2-44c2-9539-8c45478fd1ab#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=5ab85cb3-f7be-4f5e-a8eb-a8329e4aec5c&tracking_id=76ab02a7-a5b5-4628-82b4-6ad3cc955fd3&wid=MLB4262767821&sid=recos&c_id=/home/card-featured/element&c_uid=fd85538e-05a8-4696-bb18-f36fdcbbb743","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_834223-MLA113139188033_062026-V.webp","preco":"R$ 1.455","preco_anterior":"R$ 2.399","desconto":"39% OFF no Pix","loja":"Positivo","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]},{"id":"MLB7748716946","titulo":"Scooter Elétrica Haixia 1000W 60V 20Ah Até 55km/h Autonomia 45km Bateria Removível Freio a Disco Painel Digital","link":"https://www.mercadolivre.com.br/scooter-eletrica-haixia-1000w-60v-20ah-ate-55kmh-autonomia-45km-bateria-removivel-freio-a-disco-painel-digital/p/MLB80232001?pdp_filters=item_id%3AMLB7748716946&matt_event_ts=1793702393549&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=441b2bc0-ab1d-4581-92d1-d1457d2fbb46#polycard_client=recommendations_home_affiliate-profile&wid=MLB7748716946&sid=recos&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=c0426efb-2ea9-440d-bfe3-df84d11cab90&tracking_id=ceffa969-36f6-436d-9a25-2376ce943490&c_id=/home/card-featured/element&c_uid=c4b6f9bb-de3c-48cd-b976-0d96d4b11fd9","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_600051-MLA118748529169_102026-V.webp","preco":"R$ 7.670","preco_anterior":"R$ 9.999","desconto":"23% OFF","loja":"Haixia","avaliacao":null,"total_avaliacoes":null,"frete_gratis":false,"full":false,"selos":[]},{"id":"MLB5324781926","titulo":"Caixa de Som AIWA Boombox Plus 200W Bivolt AWS-BBS-01-B","link":"https://www.mercadolivre.com.br/caixa-de-som-aiwa-boombox-plus-200w-bivolt-aws-bbs-01-b/p/MLB46439669?matt_event_ts=1793702397957&matt_d2id=b2433dd1-7287-48c3-b558-9b8846938a16&matt_tracing_id=ff882f2a-8907-43ee-963a-1ac1c893e001#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&matt_tool_id=12856574&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=02fc5a97-be89-45f9-9e54-f49c465b2b00&tracking_id=79851d6b-302b-4f0d-a722-cfeb74641c19&wid=MLB5324781926&sid=recos&c_id=/home/card-featured/element&c_uid=fe2e8684-87fb-41d6-b589-290cd37e1774","imagem":"https://http2.mlstatic.com/D_Q_NP_2X_853211-MLA89578985576_082025-V.webp","preco":"R$ 1.419","preco_anterior":null,"desconto":null,"loja":"Mercado Fácil","avaliacao":null,"total_avaliacoes":null,"frete_gratis":true,"full":true,"selos":["MAIS VENDIDO"]}];

  // IMPORTANTE: cada bloco controla SOMENTE o proprio widget. Assim voce
  // pode usar o widget mais de uma vez na mesma pagina (ex.: post +
  // barra lateral) sem um atrapalhar o outro.
  var raiz = (document.currentScript && document.currentScript.parentElement)
             || document.getElementById("mlw-widget");
  function achar(id) {
    return raiz ? raiz.querySelector('[id="' + id + '"]') : null;
  }

  var corpo = achar("mlw-corpo");
  var img = achar("mlw-img");
  var elBadges = achar("mlw-badges");
  var elTitulo = achar("mlw-titulo");
  var elPreco = achar("mlw-preco");
  var elAntigo = achar("mlw-antigo");
  var elDesconto = achar("mlw-desconto");
  var elMeta = achar("mlw-meta");
  var btnAnterior = achar("mlw-anterior");
  var btnProximo = achar("mlw-proximo");
  var widget = (raiz && raiz.id === "mlw-widget") ? raiz : document.getElementById("mlw-widget");

  if (!corpo || !DADOS || !DADOS.length) return;

  var atual = -1;
  var timer = null;
  var pausado = false;
  var versaoAnimacao = 0;

  function escolher() {
    if (DADOS.length < 2) return 0;
    var indice;
    do { indice = Math.floor(Math.random() * DADOS.length); } while (indice === atual);
    return indice;
  }

  function preencher(produto) {
    corpo.href = produto.link || "#";
    corpo.title = produto.titulo ? "Ver oferta: " + produto.titulo : "Ver oferta";
    img.src = produto.imagem || "";
    img.alt = produto.titulo || "Produto";
    elTitulo.textContent = produto.titulo || "Produto";

    elPreco.textContent = produto.preco || "";
    elAntigo.textContent = produto.preco_anterior || "";
    elAntigo.style.display = produto.preco_anterior ? "" : "none";
    elDesconto.textContent = produto.desconto || "";
    elDesconto.style.display = produto.desconto ? "" : "none";

    elBadges.innerHTML = "";
    var chips = [];
    if (produto.frete_gratis) chips.push(["Frete grátis", "mlw-b-frete"]);
    if (produto.full) chips.push(["FULL", "mlw-b-full"]);
    (produto.selos || []).forEach(function (selo) { chips.push([selo, "mlw-b-selo"]); });
    chips.forEach(function (chip) {
      var span = document.createElement("span");
      span.className = chip[1];
      span.textContent = chip[0];
      elBadges.appendChild(span);
    });

    var meta = [];
    if (produto.avaliacao) {
      meta.push(produto.total_avaliacoes
        ? ("\u2605 " + produto.avaliacao + " (" + produto.total_avaliacoes + ")")
        : ("\u2605 " + produto.avaliacao));
    }
    if (produto.loja) meta.push(produto.loja);
    elMeta.textContent = meta.join("  \u00b7  ");
    elMeta.style.display = meta.length ? "" : "none";
  }

  function aplicarComFade(produto, indice) {
    atual = indice;
    var minhaVersao = ++versaoAnimacao;
    corpo.classList.add("mlw-fade");
    setTimeout(function () {
      if (minhaVersao !== versaoAnimacao) return; // outro clique chegou antes
      preencher(produto);
      corpo.classList.remove("mlw-fade");
    }, 360);
  }

  function trocarPara(indice) {
    var produto = DADOS[indice];
    var pronto = false;

    function aplicar() {
      if (pronto) return;
      pronto = true;
      aplicarComFade(produto, indice);
    }

    if (produto.imagem) {
      var pre = new Image();
      pre.onload = aplicar;
      pre.onerror = aplicar;
      pre.src = produto.imagem;
      setTimeout(aplicar, 2500); // se a imagem demorar, troca mesmo assim
    } else {
      aplicar();
    }
  }

  function trocar() {
    trocarPara(escolher());
  }

  function avancarManual(passo) {
    if (DADOS.length < 2) return;
    var indice = (atual + passo + DADOS.length) % DADOS.length;
    trocarPara(indice);
    agendar(); // reinicia a contagem do tempo a cada clique
  }

  function agendar() {
    clearTimeout(timer);
    if (pausado || DADOS.length < 2) return;
    var minimo = CFG.intervaloMinSegundos;
    var maximo = Math.max(minimo, CFG.intervaloMaxSegundos);
    var espera = minimo + Math.random() * (maximo - minimo);
    timer = setTimeout(function () {
      if (!document.hidden) trocar();
      agendar();
    }, espera * 1000);
  }

  corpo.addEventListener("mouseenter", function () {
    pausado = true;
    clearTimeout(timer);
  });
  corpo.addEventListener("mouseleave", function () {
    pausado = false;
    agendar();
  });

  if (btnAnterior) {
    btnAnterior.addEventListener("click", function () { avancarManual(-1); });
  }
  if (btnProximo) {
    btnProximo.addEventListener("click", function () { avancarManual(1); });
  }

  // ---- Modo noite/dia: acompanha o tema do blog ----
  function corDeFundoReal() {
    // Le a cor de fundo que o visitante REALMENTE ve (html/body).
    var alvos = [document.body, document.documentElement];
    for (var i = 0; i < alvos.length; i++) {
      var el = alvos[i];
      if (!el) continue;
      var achado = getComputedStyle(el).backgroundColor.match(
        /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/
      );
      if (achado) {
        var alfa = achado[4] === undefined ? 1 : parseFloat(achado[4]);
        if (alfa > 0.5) {
          return [parseInt(achado[1], 10), parseInt(achado[2], 10),
                  parseInt(achado[3], 10)];
        }
      }
    }
    return null;
  }

  function detectarTemaEscuro() {
    // 1) Marcadores do tema do blog (ex.: classe "darkTheme", "dark",
    //    "light", data-theme="dark"...)
    var elementos = [document.documentElement, document.body];
    var texto = " ";
    for (var i = 0; i < elementos.length; i++) {
      var el = elementos[i];
      if (!el) continue;
      texto += (el.className || "") + " " +
               (el.getAttribute("data-theme") || "") + " " +
               (el.getAttribute("data-bs-theme") || "") + " ";
    }
    texto = texto.toLowerCase();
    if (/(^|[\s_-])(dark|night|escuro|noite)(theme|mode)?([\s_-]|$)/.test(texto)) return true;
    if (/(^|[\s_-])(light|day|claro|dia)(theme|mode)?([\s_-]|$)/.test(texto)) return false;
    // 2) Cor de fundo real da pagina: decide pelo que o visitante ve
    //    (temas que nao marcam nada: ex. dia = sem classe, fundo claro).
    var cor = corDeFundoReal();
    if (cor) {
      var luminancia = 0.2126 * cor[0] + 0.7152 * cor[1] + 0.0722 * cor[2];
      return luminancia < 140;
    }
    // 3) Ultimo recurso: preferencia do aparelho do visitante.
    return !!(window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  }
  function aplicarTema() {
    if (widget) {
      widget.setAttribute("data-mlw-tema", detectarTemaEscuro() ? "dark" : "light");
    }
  }
  aplicarTema();
  try {
    function observarTema(el) {
      if (el && window.MutationObserver) {
        new MutationObserver(aplicarTema).observe(el, {
          attributes: true,
          attributeFilter: ["class", "data-theme", "data-bs-theme"]
        });
      }
    }
    observarTema(document.documentElement);
    observarTema(document.body);
    if (window.matchMedia) {
      var mqNoite = window.matchMedia("(prefers-color-scheme: dark)");
      if (mqNoite.addEventListener) mqNoite.addEventListener("change", aplicarTema);
      else if (mqNoite.addListener) mqNoite.addListener(aplicarTema);
    }
  } catch (erroTema) { /* sem problema: o modo 1/2 em CSS cobre o sistema */ }

  // Primeira exibicao (sem esperar)
  atual = escolher();
  preencher(DADOS[atual]);
  agendar();
})();
</script>
</div>