<div class="button-area"><?php
    $class = $args['class'];
    $openModal = $args['open_modal'];
    $title = $args['title'];
    $url = $args['url'];

    if($openModal){ ?>
        <span class="<?php echo $class; ?> open-consult-modal"><?php echo $title; ?></span>
    <?php } else { ?>
        <a href="<?php echo $url; ?>" class="<?php echo $class; ?>"><?php echo $title; ?></a>
    <?php } ?>

</div>
