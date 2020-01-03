module Pageflow
  module TestEntryType
    def self.register(config, options = {})
      config.entry_types.register(new(options))
    end

    def self.new(options = {})
      EntryType.new(name: 'test',
                    editor_fragment_renderer: nil,
                    frontend_app: -> {},
                    configuration: TestEntryTypeConfiguration,
                    **options)
    end

    class TestEntryTypeConfiguration
      include Configuration::EntryTypeConfiguration
    end
  end
end
