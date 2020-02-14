module PageflowScrolled
  # Render seed data for published scrolled entries.
  #
  # @api private
  module EntryJsonSeedHelper
    include Pageflow::ConfigHelper
    include Pageflow::RenderJsonHelper
    include Pageflow::FilesHelper
    include Pageflow::EntriesHelper
    include Pageflow::SocialShareLinksHelper
    include Pageflow::PublicI18nHelper

    def scrolled_entry_json_seed_script_tag(scrolled_entry, options = {})
      seed_json = render_json do |json|
        scrolled_entry_json_seed(json, scrolled_entry, options)
      end

      content_tag(:script, <<-JS.html_safe)
        pageflowScrolledRender(#{sanitize_json(seed_json)});
      JS
    end

    def scrolled_entry_json_seed(json, scrolled_entry, options = {})
      main_storyline = Storyline.all_for_revision(scrolled_entry.revision).first
      main_storyline ||= Storyline.new

      json.partial!('pageflow_scrolled/entry_json_seed/entry',
                    chapters: main_storyline.chapters,
                    entry: scrolled_entry,
                    entry_config: Pageflow.config_for(scrolled_entry),
                    sections: main_storyline.sections,
                    content_elements: main_storyline.content_elements,
                    options: options,
                    i18n_translations: public_scrolled_i18n_translations(scrolled_entry))
    end
  end
end
