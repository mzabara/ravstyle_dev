<ul class="roundabout-holder">
    {$img = $CI->load->module('gallery')->gallery_m->get_category_images(50, 6)}
    {foreach $img as $image}
    <li class="roundabout-moveable-item">
        <img src="{site_url('uploads/gallery')}/{$image.album_id}/{$image.file_name}{$image.file_ext}" alt="{$image.description}" title="{$image.description}">
    </li>
    {/foreach}
</ul>
<div class="text">
    <h1>
        <span class="left-shape"></span>
        Свадьба
        <span class="right-shape"></span>
    </h1>
    {$category = $CI->load->module('gallery')->gallery_m->get_category(6)}
    <p>{$category['description']}</p>
</div>
