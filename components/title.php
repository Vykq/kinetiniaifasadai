<?php
$type = $args['type'];
$title = $args['title'];

if ($type == 'h1') {
    echo '<h1 class="title">'.$title.'</h1>';
} else if ($type == 'h2') {
    echo '<h2 class="title">'.$title.'</h2>';
} else if ($type == 'h3') {
    echo '<h3 class="title">'.$title.'</h3>';
} else if ($type == 'h4') {
    echo '<h4 class="title">'.$title.'</h4>';
} else if ($type == 'h5') {
    echo '<h5 class="title">'.$title.'</h5>';
} else if ($type == 'h6') {
    echo '<h6 class="title">'.$title.'</h6>';
} else {
    echo '<p class="title">'.$title.'</p>';
}
