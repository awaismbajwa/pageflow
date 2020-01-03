module PageflowPaged
  # @api private
  class Plugin < Pageflow::Plugin
    def configure(config)
      config.entry_types.register(PageflowPaged.entry_type)
    end

    class PagedConfiguration
      include Pageflow::Configuration::EntryTypeConfiguration
    end
  end
end
