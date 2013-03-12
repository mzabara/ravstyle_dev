<section class="mini-layout">
    <div class="frame_title clearfix">
        <div class="pull-left">
            <span class="help-inline"></span>
            <span class="title">{lang('amt_category_edit')}</span>
        </div>
        <div class="pull-right">
            <div class="d-i_b">
                <a href="/admin/components/cp/gallery" class="t-d_n m-r_15"><span class="f-s_14">←</span> <span class="t-d_u">{lang('a_back')}</span></a>
                <button type="button" class="btn btn-small formSubmit btn-primary" data-form="#create_category_form" data-action="edit" data-submit><i class="icon-ok"></i>{lang('a_save')}</button>
                <button type="button" class="btn btn-small formSubmit" data-form="#create_category_form" data-action="close"><i class="icon-check"></i>{lang('a_footer_save_exit')}</button>
            </div>
        </div>
    </div>
    <div class="inside_padd">
        <div class="form-horizontal row-fluid">
            <div class="span9">
                <form method="post" action="{site_url('admin/components/cp/gallery/update_category/' . $category.id)}" id="create_category_form">
                    <div class="control-group">
                        <label class="control-label" for="name">{lang('amt_name')}:</label>
                        <div class="controls">
                            <input type="text" name="name" id="name" value="{$category.name}" required=""/>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="g_c_desc">{lang('amt_description')}:</label>
                        <div class="controls">
                            <textarea name="description" id="g_c_desc" class="elRTE">{htmlspecialchars($category.description)}</textarea>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="position">{lang('amt_position')}:</label>
                        <div class="controls number">
                            <input type="text" name="position" id="position" value="{$category.position}" class="textbox_long" />
                        </div>
                    </div>
                    {form_csrf()}
                </form>
            </div>
        </div>
    </div>
</section>
<div class="modal hide fade">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h3>Удаление категорий</h3>
    </div>
    <div class="modal-body">
        <p>Удалить выбранные категории?</p>
    </div>
    <div class="modal-footer">
        <a href="#" class="btn" onclick="$('.modal').modal('hide');">{lang('a_cancel')}</a>
        <a href="#" class="btn btn-primary" onclick="GalleryCategories.deleteCategoriesConfirm()" >{lang('a_delete')}</a>
    </div>
</div>