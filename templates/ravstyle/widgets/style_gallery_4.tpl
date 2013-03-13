{$album = $CI->load->module('gallery')->gallery_m->get_album(10)}
<div class="label">
    {$album['name']}
</div>
<div class="hover"></div>
<div class="slider">
    <ul class="roundabout-holder-waterWheel">
        {foreach $album['images'] as $image}
        <li class="roundabout-moveable-item">
            <img src="{site_url('uploads/gallery')}/{$image.album_id}/{$image.file_name}{$image.file_ext}" alt="{$image.description}" title="{$image.description}">
        </li>
        {/foreach}
    </ul>
</div>
<div class="text">
    {$album['description']}
</div>