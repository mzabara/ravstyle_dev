<div class="bx-wrapper">
    <div class="bx-window">
        <div id="slider_creative">
            <div>
                {$img = $CI->load->module('gallery')->gallery_m->get_category_images(50, 8)}
                {$total = count($img)}
                {$index = 1}
                {$counter = 1}
                {foreach $img as $image}
                    <img src="{site_url('uploads/gallery')}/{$image.album_id}/{$image.file_name}{$image.file_ext}" alt="{$image.description}" title="{$total}" class="img{$index}">
                    {if $counter++ % 6 == 0} {$index = 0}</div><div>{/if}
                    {$index++;}
                {/foreach}
            </div>
        </div>
    </div>
</div>
<div class="clearfix"></div>
{$category = $CI->load->module('gallery')->gallery_m->get_category(8)}
<div class="text">
    <h1>
        <span class="left-shape"></span>
        {$category['name']}
        <span class="right-shape"></span>
    </h1>
    <p>{$category['description']}</p>
</div>
