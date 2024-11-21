<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hecate - Roupas Alternativas</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

    <!-- Top Fixed Bar -->  
<div class="fixed-top-bar">
        <div class="left-side">
            <span>FRETE GRÁTIS APARTIR DE R$150</span>
        </div>
        <div class="right-side">
            <span>ONDE ENCONTRAR</span>
            <span>RASTREAR PEDIDO</span>
            <span>CONTATO</span>
            <div class="social-icons">
                <a href="#"><i class="fab fa-whatsapp"></i></a>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </div>

</body>
</html>

    <!-- Main Navbar -->
 <nav class="navbar navbar-expand-lg navbar-white bg-white">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="https://www.google.com.br/?hl=pt-BR">
            <img src="./img/logo.png" width="80" alt="Logo Hecate">
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fas fa-search"></i> pesquisar</a>
                </li>
                 <li class="nav-item">
         <a class="nav-link" href="#"><i class="fas fa-heart"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#collection"><i class="fas fa-shopping-cart"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="file:///C:/Users/beatr/OneDrive/Área%20de%20Trabalho/hecate/login.htm"><i class="fas fa-user"></i> Entrar/Cadastre-se</a>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Secondary Navbar -->
   <nav class="navbar secondary-nav navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse justify-content-center" id="secondaryNav">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Todos</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Femininos</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Masculino</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Plus Size</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Calçados</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Acessórios</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Ofertas</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Reposições</a></li>
            </ul>
        </div>
    </nav>

    <!-- Carousel -->
<div id="bannerCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#bannerCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#bannerCarousel" data-slide-to="1"></li>
            <li data-target="#bannerCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active" style="background-image: url('./img/1.png');">
                <div class="carousel-caption d-none d-md-block">
                </div>
            </div>
            <div class="carousel-item" style="background-image: url('./img/2.png');">
                <div class="carousel-caption d-none d-md-block">
                </div>
            </div>
            <div class="carousel-item" style="background-image: url('./img/3.png');">
                <div class="carousel-caption d-none d-md-block">
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#bannerCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Anterior</span>
        </a>
        <a class="carousel-control-next" href="#bannerCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Próximo</span>
        </a>
    </div>

    <!-- Seção de Caixas de Compras -->
  <section id="shop" class="py-5 bg-light">
        <div class="container-fluid">
            <h2 class="text-center">novidades</h2>
            <div class="row no-gutters">
                <div class="col-md-2">
                    <div class="card mb-4">
                        <img src="./img/hecate1.png" class="card-img-top" alt="Produto 1">
                        <div class="card-body">
                            <h5 class="card-title">pijama</h5>
                    <p class="card-text">Nome do produto</p>
                    <p class="card-text"><strong>R$ 169,90</strong></p>
                    <p class="card-text">em até 6x de R$ 28,32 sem juros</p>
                    <p class="card-text">Por R$ 161,41 no PIX</p>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">pp</button>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">p</button>
                           <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">m</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">g</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">gg</button>
                </button>
                    <a href="#" class="btn btn-primary" style="margin-top:20px;">Ver opções</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="card mb-4">
                        <img src="./img/hecate2.png" class="card-img-top" alt="Produto 2">
                        <div class="card-body">
                           <h5 class="card-title">meia calça rasgada</h5>
                    <p class="card-text">Nome do produto</p>
                    <p class="card-text"><strong>R$ 32,00</strong></p>
                    <p class="card-text">em até 2x de R$ 16,00 sem juros</p>
                    <p class="card-text">Por R$ 31,40 no PIX</p>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">pp</button>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">p</button>
                          <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">m</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">g</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">gg</button>
                </button>
                    <a href="#" class="btn btn-primary" style="margin-top:20px;">Ver opções</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="card mb-4">
                        <img src="./img/hecate3.png" class="card-img-top" alt="Produto 3">
                        <div class="card-body">
                            <h5 class="card-title">Produto 3</h5>
                    <p class="card-text">Nome do produto</p>
                    <p class="card-text"><strong>R$ 169,90</strong></p>
                    <p class="card-text">em até 6x de R$ 28,32 sem juros</p>
                    <p class="card-text">Por R$ 161,41 no PIX</p>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">pp</button>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">p</button>
                            <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">m</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">g</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">gg</button>
                </button>
                    <a href="#" class="btn btn-primary" style="margin-top:20px;">Ver opções</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="card mb-4">
                        <img src="./img/hecate4.png" class="card-img-top" alt="Produto 4">
                        <div class="card-body">
                            <h5 class="card-title">Produto 3</h5>
                    <p class="card-text">Nome do produto</p>
                    <p class="card-text"><strong>R$ 169,90</strong></p>
                    <p class="card-text">em até 6x de R$ 28,32 sem juros</p>
                    <p class="card-text">Por R$ 161,41 no PIX</p>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">pp</button>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">p</button>
                           <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">m</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">g</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">gg</button>
                </button>
                    <a href="#" class="btn btn-primary" style="margin-top:20px;">Ver opções</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="card mb-4">
                        <img src="./img/hecate5.png" class="card-img-top" alt="Produto 5">
                        <div class="card-body">
                            <h5 class="card-title">Produto 3</h5>
                    <p class="card-text">Nome do produto</p>
                    <p class="card-text"><strong>R$ 169,90</strong></p>
                    <p class="card-text">em até 6x de R$ 28,32 sem juros</p>
                    <p class="card-text">Por R$ 161,41 no PIX</p>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">pp</button>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">p</button>
                          <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">m</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">g</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">gg</button>
                </button>
                    <a href="#" class="btn btn-primary" style="margin-top:20px;">Ver opções</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="card mb-4">
                        <img src="./img/hecate6.png" class="card-img-top" alt="Produto 6">
                        <div class="card-body">
                            <h5 class="card-title">Produto 3</h5>
                    <p class="card-text">Nome do produto</p>
                    <p class="card-text"><strong>R$ 169,90</strong></p>
                    <p class="card-text">em até 6x de R$ 28,32 sem juros</p>
                    <p class="card-text">Por R$ 161,41 no PIX</p>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">pp</button>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">p</button>
                           <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">m</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">g</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">gg</button>
                </button>
                    <a href="#" class="btn btn-primary" style="margin-top:20px;">Ver opções</a>
                    </div>
                </div>
            </div>
            <!-- Segunda Linha de Caixas de Compras -->
            <div class="container-fluid">
            <h2 class="text-center">voltarams</h2>
            <div class="row no-gutters">
                <div class="col-md-2">
                    <div class="card mb-4">
                        <img src="/img/hecate7.png" class="card-img-top" alt="Produto 1">
                        <div class="card-body">
                            <h5 class="card-title">Produto 3</h5>
                    <p class="card-text">Nome do produto</p>
                    <p class="card-text"><strong>R$ 169,90</strong></p>
                    <p class="card-text">em até 6x de R$ 28,32 sem juros</p>
                    <p class="card-text">Por R$ 161,41 no PIX</p>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">pp</button>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">p</button>
                         <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">m</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">g</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">gg</button>
                </button>
                    <a href="#" class="btn btn-primary" style="margin-top:20px;">Ver opções</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="card mb-4">
                        <img src="./img/hecate8.png" class="card-img-top" alt="Produto 2">
                        <div class="card-body">
                           <h5 class="card-title">Produto 3</h5>
                    <p class="card-text">Nome do produto</p>
                    <p class="card-text"><strong>R$ 169,90</strong></p>
                    <p class="card-text">em até 6x de R$ 28,32 sem juros</p>
                    <p class="card-text">Por R$ 161,41 no PIX</p>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">pp</button>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">p</button>
                           <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">m</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">g</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">gg</button>
                </button>
                    <a href="#" class="btn btn-primary" style="margin-top:20px;">Ver opções</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="card mb-4">
                        <img src="./img/hecate9.png" class="card-img-top" alt="Produto 3">
                        <div class="card-body">
                            <h5 class="card-title">Produto 3</h5>
                    <p class="card-text">Nome do produto</p>
                    <p class="card-text"><strong>R$ 169,90</strong></p>
                    <p class="card-text">em até 6x de R$ 28,32 sem juros</p>
                    <p class="card-text">Por R$ 161,41 no PIX</p>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">pp</button>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">p</button>
                          <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">m</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">g</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">gg</button>
                </button>
                    <a href="#" class="btn btn-primary" style="margin-top:20px;">Ver opções</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="card mb-4">
                        <img src="./img/hecate10.png" class="card-img-top" alt="Produto 4">
                        <div class="card-body">
                            <h5 class="card-title">Produto 3</h5>
                    <p class="card-text">Nome do produto</p>
                    <p class="card-text"><strong>R$ 169,90</strong></p>
                    <p class="card-text">em até 6x de R$ 28,32 sem juros</p>
                    <p class="card-text">Por R$ 161,41 no PIX</p>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">pp</button>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">p</button>
                           <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">m</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">g</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">gg</button>
                </button>
                    <a href="#" class="btn btn-primary" style="margin-top:20px;">Ver opções</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="card mb-4">
                        <img src="./img/hecate11.png" class="card-img-top" alt="Produto 5">
                        <div class="card-body">
                            <h5 class="card-title">Produto 3</h5>
                    <p class="card-text">Nome do produto</p>
                    <p class="card-text"><strong>R$ 169,90</strong></p>
                    <p class="card-text">em até 6x de R$ 28,32 sem juros</p>
                    <p class="card-text">Por R$ 161,41 no PIX</p>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">pp</button>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">p</button>
                           <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">m</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">g</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">gg</button>
                    <a href="#" class="btn btn-primary" style="margin-top:20px;">Ver opções</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="card mb-4">
                        <img src="./img/hecate12.png" class="card-img-top" alt="Produto 5">
                        <div class="card-body">
                            <h5 class="card-title">Produto 3</h5>
                    <p class="card-text">Nome do produto</p>
                    <p class="card-text"><strong>R$ 169,90</strong></p>
                    <p class="card-text">em até 6x de R$ 28,32 sem juros</p>
                    <p class="card-text">Por R$ 161,41 no PIX</p>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">pp</button>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">p</button>
                          <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">m</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">g</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">gg</button>
                </button>
                    <a href="#" class="btn btn-primary" style="margin-top:20px;">Ver opções</a>
                        </div>
                </div>
            </div>

    <!--  Banner Abaixo da segunda Fileira -->

<div class="banner-container">
    <div class="banner-full-width" style="background-image: url('./img/banner1.png');"></div>
    <div class="banner-full-width" style="background-image: url('./img/banner2.png');"></div>
    <div class="banner-full-width" style="background-image: url('./img/banner4.png');"></div>
    <div class="banner-full-width" style="background-image: url('./img/banner5.png');"></div>
    <div class="banner-full-width" style="background-image: url('./img/banner3.png');"></div>
</div>

<div class="container-fluid">
            <h2 class="text-center">mais vendidos</h2>
            <div class="row no-gutters">
                <div class="col-md-2">
                    <div class="card mb-4">
                        <img src="./img/hecate13.png" class="card-img-top" alt="Produto 1">
                        <div class="card-body">
                            <h5 class="card-title">Produto 3</h5>
                    <p class="card-text">Nome do produto</p>
                    <p class="card-text"><strong>R$ 169,90</strong></p>
                    <p class="card-text">em até 6x de R$ 28,32 sem juros</p>
                    <p class="card-text">Por R$ 161,41 no PIX</p>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">pp</button>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">p</button>
                            <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">m</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">g</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">gg</button>
                </button>
                    <a href="#" class="btn btn-primary" style="margin-top:20px;">Ver opções</a>
                        </div>
                    </div>
                </div>
                   
 <div class="col-md-2">
                    <div class="card mb-4">
                        <img src="./img/hecate14.png" class="card-img-top" alt="Produto 2">
                        <div class="card-body">
                           <h5 class="card-title">Produto 3</h5>
                    <p class="card-text">Nome do produto</p>
                    <p class="card-text"><strong>R$ 169,90</strong></p>
                    <p class="card-text">em até 6x de R$ 28,32 sem juros</p>
                    <p class="card-text">Por R$ 161,41 no PIX</p>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">pp</button>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">p</button>
                         <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">m</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">g</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">gg</button>
                </button>
                    <a href="#" class="btn btn-primary" style="margin-top:20px;">Ver opções</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="card mb-4">
                        <img src="./img/hecate15.png" class="card-img-top" alt="Produto 3">
                        <div class="card-body">
                            <h5 class="card-title">Produto 3</h5>
                    <p class="card-text">Nome do produto</p>
                    <p class="card-text"><strong>R$ 169,90</strong></p>
                    <p class="card-text">em até 6x de R$ 28,32 sem juros</p>
                    <p class="card-text">Por R$ 161,41 no PIX</p>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">pp</button>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">p</button>
                           <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">m</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">g</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">gg</button>
                </button>
                    <a href="#" class="btn btn-primary" style="margin-top:20px;">Ver opções</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="card mb-4">
                        <img src="./img/hecate16.png" class="card-img-top" alt="Produto 4">
                        <div class="card-body">
                            <h5 class="card-title">Produto 3</h5>
                    <p class="card-text">Nome do produto</p>
                    <p class="card-text"><strong>R$ 169,90</strong></p>
                    <p class="card-text">em até 6x de R$ 28,32 sem juros</p>
                    <p class="card-text">Por R$ 161,41 no PIX</p>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">pp</button>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">p</button>
                           <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">m</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">g</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">gg</button>
                </button>
                    <a href="#" class="btn btn-primary" style="margin-top:20px;">Ver opções</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="card mb-4">
                        <img src="./img/hecate17.png" class="card-img-top" alt="Produto 5">
                        <div class="card-body">
                            <h5 class="card-title">Produto 3</h5>
                    <p class="card-text">Nome do produto</p>
                    <p class="card-text"><strong>R$ 169,90</strong></p>
                    <p class="card-text">em até 6x de R$ 28,32 sem juros</p>
                    <p class="card-text">Por R$ 161,41 no PIX</p>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">pp</button>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">p</button>
                            <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">m</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">g</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">gg</button>
                </button>
                    <a href="#" class="btn btn-primary" style="margin-top:20px;">Ver opções</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="card mb-4">
                        <img src="./img/hecate18.png" class="card-img-top" alt="Produto 6">
                        <div class="card-body">
                            <h5 class="card-title">Produto 3</h5>
                    <p class="card-text">Nome do produto</p>
                    <p class="card-text"><strong>R$ 169,90</strong></p>
                    <p class="card-text">em até 6x de R$ 28,32 sem juros</p>
                    <p class="card-text">Por R$ 161,41 no PIX</p>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">pp</button>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">p</button>
                           <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">m</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">g</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">gg</button>
                </button>
                    <a href="#" class="btn btn-primary" style="margin-top:20px;">Ver opções</a>
                    </div>
                </div>
            </div>
 <!-- Banner e Última Linha de Produtos -->
<div class="container-fluid">
    <div class="row no-gutters">
        <div class="col-md-6">
            <div class="banner-full-width last-banner" style="background-image: url('/img/bannerinutil.png');"></div>
        </div>
        <div class="col-md-2">
            <div class="card mb-4">
                <img src="./img/hecate19.png" class="card-img-top" alt="Produto 42">
                <div class="card-body">
                    <h5 class="card-title">Produto 3</h5>
                    <p class="card-text">Nome do produto</p>
                    <p class="card-text"><strong>R$ 169,90</strong></p>
                    <p class="card-text">em até 6x de R$ 28,32 sem juros</p>
                    <p class="card-text">Por R$ 161,41 no PIX</p>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">pp</button>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">p</button>
                    <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">m</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">g</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">gg</button>
                </button>
                    <a href="#" class="btn btn-primary" style="margin-top:20px;">Ver opções</a>
                </div>
            </div>
        </div>
        <div class="col-md-2">
            <div class="card mb-4">
                <img src="./img/hecate20.png" class="card-img-top" alt="Produto 43">
                <div class="card-body">
                    <h5 class="card-title">Produto 3</h5>
                    <p class="card-text">Nome do produto</p>
                    <p class="card-text"><strong>R$ 169,90</strong></p>
                    <p class="card-text">em até 6x de R$ 28,32 sem juros</p>
                    <p class="card-text">Por R$ 161,41 no PIX</p>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">pp</button>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">p</button>
                    <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">m</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">g</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">gg</button>
                </button>
                    <a href="#" class="btn btn-primary" style="margin-top:20px;">Ver opções</a>
                </div>
            </div>
        </div>
        <div class="col-md-2">
            <div class="card mb-4">
                <img src="./img/hecate21.png" class="card-img-top" alt="Produto 44">
                <div class="card-body">
                   <h5 class="card-title">Produto 3</h5>
                    <p class="card-text">Nome do produto</p>
                    <p class="card-text"><strong>R$ 169,90</strong></p>
                    <p class="card-text">em até 6x de R$ 28,32 sem juros</p>
                    <p class="card-text">Por R$ 161,41 no PIX</p>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">pp</button>
                     <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">p</button>
               <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">m</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">g</button>
                <button type="button" class="btn btn-secondary btn-custom" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left">gg</button>
                </button>
                    <a href="#" class="btn btn-primary" style="margin-top:20px;">Ver opções</a>
                </div>
            </div>
        </div>
    </div>
</div>
      <footer>
    <div class="footer-container">
        <!-- Informações -->
        <div class="footer-column">
            <h4>INFORMAÇÕES DA EMPRESA</h4>
            <ul>
                <li><a href="#">Hecate no Remessa</a></li>
                <li><a href="#">Conforme</a></li>
                <li><a href="#">Sobre Hecate</a></li>
                <li><a href="#">Venda na Hecate</a></li>
                <li><a href="#">Blogueiros de moda</a></li>
                <li><a href="#">Carreiras</a></li>
                <li><a href="#">Sala de Imprensa</a></li>
            </ul>
        </div>

        <!-- Ajuda e Suporte -->
 <div class="footer-column">
            <h4>AJUDA E SUPORTE</h4>
            <ul>
                <li><a href="#">Política de Frete</a></li>
                <li><a href="#">Devolução</a></li>
                <li><a href="#">Reembolso</a></li>
                <li><a href="#">Como Pedir</a></li>
                <li><a href="#">Como Rastrear</a></li>
                <li><a href="#">Guia de Tamanhos</a></li>
                <li><a href="#">Hecate VIP</a></li>
            </ul>
        </div>

        <!-- Atendimento ao Cliente -->
<div class="footer-column">
            <h4>ATENDIMENTO AO CLIENTE</h4>
            <ul>
                <li><a href="#">Contate-Nos</a></li>
                <li><a href="#">Método de Pagamento</a></li>
                <li><a href="#">Pontos Bônus</a></li>
            </ul>
        </div>

        <!-- Redes sociais e cadastro -->
<div class="footer-column">
            <h4>ENCONTRE-NOS EM</h4>
            <div class="social-icons">
                <a href="#"><img src="https://img.icons8.com/ios-filled/24/000000/facebook.png"/></a>
                <a href="#"><img src="https://img.icons8.com/ios-filled/24/000000/instagram-new.png"/></a>
                <a href="#"><img src="https://img.icons8.com/ios-filled/24/000000/twitter.png"/></a>
                <a href="#"><img src="https://img.icons8.com/ios-filled/24/000000/youtube-play.png"/></a>
            </div>
            <div class="subscribe-section">
                <h4>CADASTRE-SE PARA RECEBER NOTÍCIAS SOBRE HECATE</h4>
                <input type="email" placeholder="Endereço do Seu Email">
                <input type="text" placeholder="Conta WhatsApp">
                <button>Inscreva-se</button>
            </div>
            
            <!-- Pagamento -->
<h4>PAGAMENTO</h4>
            <div class="payment-icons">
                <img src="https://img.icons8.com/ios-filled/35/000000/visa.png"/>
                <img src="https://img.icons8.com/ios-filled/35/000000/mastercard.png"/>
                <img src="https://img.icons8.com/ios-filled/35/000000/paypal.png"/>
            </div>
        </div>
    </div>

 <div class="footer-bottom">
        <p>&copy; 2009-2024 Todos os direitos reservados HECATE</p>
        <p><a href="#">Centro de Privacidade</a> | <a href="#">Política de Privacidade e Cookies</a> | <a href="#">Termos e condições</a></p>
    </div>
</footer>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
