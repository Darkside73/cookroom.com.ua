module Jekyll

  class TagIndex < Page
    def initialize(site, base, dir, tag)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'tag_index.html')
      self.data['tag'] = tag
      tag_data = site.data['tags'].find { |t| t['slug'] == tag }
      raise "Add tag #{tag} to _data/tags.yml" unless tag_data
      self.data['title'] = "Посты, отмеченные тегом &ldquo;#{tag_data['name']}&rdquo;"
      self.data['description'] = tag_data['description']
    end
  end

  class TagGenerator < Generator
    safe true

    def generate(site)
      if site.layouts.key? 'tag_index'
        dir = site.config['tags_dir']
        site.tags.keys.each do |tag|
          write_tag_index(site, File.join(dir, tag), tag)
        end
      end
    end

    def write_tag_index(site, dir, tag)
      index = TagIndex.new(site, site.source, dir, tag)
      index.data['posts'] = site.posts.select { |post| post.tags.include? tag }
      index.render(site.layouts, site.site_payload)
      index.write(site.dest)
      site.pages << index
    end
  end

end
