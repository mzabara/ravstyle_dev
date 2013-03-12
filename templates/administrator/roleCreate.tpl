<section class="mini-layout">
    <div class="frame_title clearfix">
        <div class="pull-left">
            <span class="help-inline"></span>
            <span class="title">{lang('a_role_create')}</span>
        </div>
        <div class="pull-right">
            <div class="d-i_b">
                <a href="{$BASE_URL}admin/rbac/roleList" class="t-d_n m-r_15 pjax"><span class="f-s_14">←</span> <span class="t-d_u">{lang('a_back')}</span></a>
                <button type="button" class="btn btn-small btn-success formSubmit" data-form="#role_cr_form" data-action="new" data-submit><i class="icon-ok icon-white"></i>{lang('a_save')}</button>
                <button type="button" class="btn btn-small formSubmit" data-form="#role_cr_form" data-action="exit"><i class="icon-check"></i>{lang('a_save_and_exit')}</button>
            </div>
        </div>

    </div>
    <div class="row-fluid">

        <div class="tab-content clearfix">
            <form method="post" action="{$ADMIN_URL}roleCreate" class="form-horizontal" id="role_cr_form">

                <div class="tab-pane active">
                    <div class="tab-pane active">
                        <table class="table table-striped table-bordered table-hover table-condensed content_big_td">
                            <thead>
                                <tr>
                                    <th colspan="6">
                                        {lang('a_param')}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="6">
                                        <div class="inside_padd">
                                            <div class="row-fluid">
                                                <div class="control-group m-t_10">
                                                    <label class="control-label" for="Name">{lang('a_name')}:</label>
                                                    <div class="controls">
                                                        <input type="text" name="Name" id="Name" value="" required/>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label" for="Description">{lang('a_desc')}:</label>
                                                    <div class="controls">
                                                        <input type="text" name="Description" id="Description" value=""/>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label" for="Description">{lang('a_imp_rbak')}:</label>
                                                    <div class="controls">
                                                        <input type="text" name="Importance" id="Description" value=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-content clearfix">
                        <div class="btn-group myTab m-t_20 pull-left" data-toggle="buttons-radio">
                            <a href="#base" class="btn btn-small active">Base</a>
                            <a href="#module" class="btn btn-small">Modules</a>
                        </div> 
                    </div>

                    <div class="tab-content">
                        {foreach $types as $key => $type} 
                            <div class="tab-pane {if $key == 'base'}active{/if}" id="{echo $key}">
                                {foreach $type as $k => $groups} 
                                    <div class="span3">
                                        <table class="table table-striped table-bordered table-hover table-condensed">
                                            <thead>
                                                <tr>
                                                    <th class="t-a_c span1">
                                                        <span class="frame_label">
                                                            <span class="niceCheck b_n">
                                                                <input type="checkbox" />
                                                            </span>
                                                        </span>
                                                    </th>                           
                                                    <th>{echo $groups['description']}</th>
                                                </tr>                        
                                            </thead>
                                            <tbody class="sortable">
                                                {foreach $groups['privileges'] as $privilege}
                                                    <tr>       
                                                        <td class="t-a_c">
                                                            <span class="frame_label">
                                                                <span class="niceCheck b_n">  
                                                                    <input type="checkbox" class="chldcheck"  value="{echo $privilege['id']}" name="Privileges[]"/>
                                                                </span>
                                                            </span>
                                                        </td>
                                                        <td style="word-wrap : break-word;">
                                                            <p title="{echo $privilege['description']}">{echo $privilege['title']}</p>
                                                        </td>                              
                                                    </tr>
                                                {/foreach}
                                            </tbody>
                                        </table>
                                    </div>
                                {/foreach}
                            </div>
                        {/foreach}
                    </div>
                </div>
                {form_csrf()}
            </form>
        </div>
    </div>
</section>
