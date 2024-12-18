<?php
  include_once('/var/www/api/sunrise.php');
  $isDtail = false;
  if(isset($_GET['id'])){
    //GET値にidがある場合
    $id = $_GET['id'];
    // id値のニュースを取得。
    $detail = News::findById($id, 'Y.m.d', 'utf-8');
    //var_dump($detail);
    if(News::isBelongsTitle($detail,570) || News::isBelongsTitle($detail,571) || News::isBelongsTitle($detail,572) || News::isBelongsTitle($detail,573) || News::isBelongsTitle($detail,605)) {
      //作品に属してる場合
      $isDtail = true;
    } else {
      //作品に属しない場合
      header("Location: ./");
      exit;
    }
  }
?>

<!doctype html>
<html lang="ja">
<head>
<!-- OptanonConsentNoticeStart -->
<script type="text/javascript" src="https://cdn-au.onetrust.com/consent/6f613c89-0e13-403c-89fd-98a770d7c5e8/OtAutoBlock.js" ></script>
<script src="https://cdn-au.onetrust.com/scripttemplates/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script="6f613c89-0e13-403c-89fd-98a770d7c5e8" ></script>
<script type="text/javascript">
function OptanonWrapper() { }
</script>
<!-- OptanonConsentNoticeEnd -->
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M9TJTCT');</script>
<!-- End Google Tag Manager -->

  <meta charset="UTF-8">
  <meta http-equiv="X-UA-COMPATIBLE" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0">

   <link rel="icon" href="/favicon.ico">
  <title><?php print_r($detail['title']); ?> | SAND LAND Portal Site</title>
  <meta name="description" content="鳥山明最高峰クオリティ‼『SAND LAND』project公式ポータルサイト　最新情報はこちらでチェック！">
  <meta name="twitter:card" content="summary_large_image">
  <meta property="og:title" content="<?php print_r($detail['title']); ?> | SAND LAND Portal Site">
  <meta property="og:type" content="website">
  <meta property="og:description" content="鳥山明最高峰クオリティ‼『SAND LAND』project公式ポータルサイト　最新情報はこちらでチェック！">
  <meta property="og:url" content="https://sandland.jp/news/article.php?id=<?php print_r($detail['id']); ?>">
  <meta property="og:image" content="https://sandland.jp/assets/img/og_img_ja.png">
  <meta property="og:site_name" content="SAND LAND Portal Site">
  <meta property="og:locale" content="ja_JP">

  <meta name="format-detection" content="telephone=no">
  <link rel="stylesheet" href="../assets/css/html5reset-1.6.1.css">
  <link rel="stylesheet" href="../assets/css/slick-theme.css">
  <link rel="stylesheet" href="../assets/css/slick.css">
  <link rel="stylesheet" href="../assets/css/style.css">
</head>

  <body>
    <div class="news" id="wrapper">
      <header id="header" class="header_under">
        <div class="inner">
          <div class="in">
            <div class="l">
              <p class="logo"><a href="../"><img src="../assets/img/logo_unh.png" alt="SANDLAND サンドランド"></a></p>
              <p class="subttl">Portal Site</p>
            </div>
            <div class="r">
              <p class="totop"><a href="../">TOP</a></p>
            </div>
          </div>
        </div>
      </header>

      <main class="main">
        <article class="under">
          <section class="news_article">
            <div class="inner">
              <div class="ttl_wrap">
                <h1 class="ttl"><span>NEWS</span></h1>
              </div>
              <div class="in">
                <div class="news_side">
                  <nav>
                    <ul class="news_side_nav">
                      <li class="cat_all"><a href="./"><span>すべて</span></a></li>
                      <li class="cat_news"><a href="cat01.php"><span>ニュース</span></a></li>
                      <li class="cat_broad"><a href="cat02.php"><span>配信・放送</span></a></li>
                      <li class="cat_goods"><a href="cat03.php"><span>商品</span></a></li>
                      <li class="cat_video"><a href="cat04.php"><span>映像商品</span></a></li>
                      <li class="cat_music"><a href="cat05.php"><span>音楽</span></a></li>
                      <li class="cat_event"><a href="cat06.php"><span>イベント</span></a></li>
                      <li class="cat_other"><a href="cat07.php"><span>その他</span></a></li>
                    </ul>
                  </nav>
                </div>

                <div class="news_detail_wrap">
                  <div class="news_detail">

                    <div class="news_txt_wrap01">
                      <p class="news_date"><?php print_r($detail['date']); ?></p>
                      <ul class="cat_list">
                        <?php
                        if(News::isBelongsCategory($detail,1)) {      //カテゴリグループ1に属してる場合
                            echo '<li>ニュース</li>';
                        }
                        if(News::isBelongsCategory($detail,5) || News::isBelongsCategory($detail,6) || News::isBelongsCategory($detail,17)) {      //カテゴリグループ2に属してる場合
                            echo '<li>配信・放送</li>';
                        }
                        if(News::isBelongsCategory($detail,9) || News::isBelongsCategory($detail,10) || News::isBelongsCategory($detail,11) || News::isBelongsCategory($detail,12) || News::isBelongsCategory($detail,13) || News::isBelongsCategory($detail,14)) {      //カテゴリグループ3に属してる場合
                            echo '<li>商品</li>';
                        }
                        if(News::isBelongsCategory($detail,4)) {      //カテゴリグループ4に属してる場合
                            echo '<li>映像商品</li>';
                        }
                        if(News::isBelongsCategory($detail,3) || News::isBelongsCategory($detail,20)) {      //カテゴリグループ5に属してる場合
                            echo '<li>音楽</li>';
                        }
                        if(News::isBelongsCategory($detail,8) || News::isBelongsCategory($detail,16)) {      //カテゴリグループ6に属してる場合
                            echo '<li>イベント</li>';
                        }
                        if(News::isBelongsCategory($detail,2) || News::isBelongsCategory($detail,7) || News::isBelongsCategory($detail,15) || News::isBelongsCategory($detail,18) || News::isBelongsCategory($detail,19) || News::isBelongsCategory($detail,21)) {      //カテゴリグループ7に属してる場合
                            echo '<li>その他</li>';
                        }
                         ?>
                      </ul>
                    </div>
                    <ul class="id_list">
                      <?php
                      foreach($detail['titles'] as $title) {     // 作品ID一覧で繰り返し
                        if (isset($title['id'])) {
                            if ($title['id'] == 570) {
                                echo '<li>POTAL</li>';
                            } elseif ($title['id'] == 571) {
                                echo '<li>POTAL (EN)</li>';
                            } elseif ($title['id'] == 572) {
                                echo '<li>FILM</li>';
                            } elseif ($title['id'] == 573) {
                                echo '<li>THE SERIES (EN)</li>';
                            } elseif ($title['id'] == 605) {
                                echo '<li>THE SERIES</li>';
                            }
                        }
                      }
                       ?>
                    </ul>
                    <div class="detail_body">
                      <h2 class="detail_ttl"><?php print_r($detail['title']); ?></h2>
                      <?php
                        print_r($detail['body']);
                        foreach($detail['links'] as $link){
                          echo '<div class="news-detail-link"><a href="'.$link["url"].'" target="_blank">'.$link["label"]."</a></div>";
                        }
                      ?>
                    </div>
                  </div>
                  <a href="./" class="indexbox">INDEX</a>
                </div>
              </div>
            </div>
          </section>
          <section class="">
            <div class="bnr_area">
              <div class="inner">
                <div class="slide_wrap">
                  <div class="bnr_slide">
                    <div class="bn_slide_item"><a href="../filmbddvd/"><img src="../assets/img/bnr.png" alt="" class="tbpc-only"><img src="../assets/img/bnr_sp.png" alt="" class="sp-only"></a></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>

      <footer class="footer" id="footer">
        <p id="page-top"><a href="#"></a></p>
        <div class="inner">
          <div class="in">
            <div class="l">
              <p class="t01">注意：内容および画像の転載はお断りいたします。</p>
              <p class="t02"><a class="ot-sdk-show-settings" style="color:#3860be; cursor: pointer;"></a></p>
            </div>
            <div class="r">
              <p class="copy">©バード・スタジオ／集英社 ©SAND LAND製作委員会</p>
            </div>
          </div>
        </div>
      </footer>
    </div>

    <script src="../assets/js/jquery-3.7.1.js"></script>
    <script src="../assets/js/slick.min.js"></script>
    <script src="../assets/js/main.js"></script>
  </body>
</html>
