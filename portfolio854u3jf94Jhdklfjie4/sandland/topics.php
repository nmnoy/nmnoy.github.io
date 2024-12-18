<?php
header("Content-type: text/javascript; Charset=utf-8");

include_once('/var/www/api/sunrise.php');
$records = News::find(array('title_id'=>'570,571,572,573,605', 'limit'=>'6', 'date_format'=>'Y.m.d'));

echo <<<END
function newsHeadline(){
document.write('<ul class="top_news_list">
END;

foreach($records as $record):

echo <<<END
<li><a href="./news/article.php?id=
END;

echo $record['id'];

echo <<<END
" target="_top"><div class="news_thum">
END;


//サムネイル表示
if (isset($record['thumb_url']) && !empty($record['thumb_url'])) {
    echo '<img src="' . $record['thumb_url'] . '">';
} else {
    echo '<img src="./assets/img/thum_logo.png" alt="" class="thum_logo">';//サムネイルが無い場合は代替画像を表示
}

echo <<<END
</div><div class="news_txt_wrap"><p class="news_ttl">
END;

//echo $record['id'];

//タイトル表示
$limit = 32;
$title = $record['title'];
$title = addcslashes($title,"'");
$title = str_replace(array("\r\n","\r","\n"), '', $title);

if (mb_strlen($title) >= $limit) {
    $title = mb_substr($title, 0, $limit) . '…';
}

echo $title;

echo <<<END
</p><p class="news_date">
END;
echo $record['date'];
echo <<<END
</p></div></a></li>
END;

endforeach;

echo <<<END
</ul>');
}
END;
?>
