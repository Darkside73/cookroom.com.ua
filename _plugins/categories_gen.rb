module Jekyll

  class CategoryIndex < Page
    def initialize(site, base, dir, category)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'category_index.html')
      self.data['category'] = category
      category_data = site.data['categories'].find { |c| c['slug'] == category }
      raise "Add category #{category} to _data/categories.yml" unless category_data
      self.data['title'] = category_data['name']
    end
  end

  class CategoryGenerator < Generator
    safe true

    def generate(site)
      if site.layouts.key? 'category_index'
        dir = site.config['destination']
        site.categories.keys.each do |category|
          write_category_index(site, File.join(dir, category), category)
        end
      end
    end

    def write_category_index(site, dir, category)
      index = CategoryIndex.new(site, site.source, dir, category)
      index.data['posts'] = site.posts.select { |post| post.categories.include? category }
      index.render(site.layouts, site.site_payload)
      index.write(site.dest)
      site.pages << index
    end
  end

end
