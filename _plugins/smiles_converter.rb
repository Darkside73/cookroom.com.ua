module Jekyll
  class SmilesConverter < Converter

    SMILES = {
      ':)' => 'smile', ':-)' => 'smile', '8-[' => 'angry', ':-/' => 'confused',
      'B-)' => 'cool', ':-P' => 'tongue', '8-o' => 'surprised',
      ':-D' => 'grin', ':-))' => 'happy', ';)' => 'wink', ';-)' => 'wink',
      ':-S' => 'worried'
    }

    def matches(ext)
      true
    end

    def output_ext(ext)
      ".html"
    end

    def convert(content)
      regexp = Regexp.new SMILES.keys.map { |v| Regexp.quote(v) }.join("|")
      content.gsub(regexp) do |m|
        m.gsub m, %Q{<img src="/img/smiles/#{SMILES[m]}.gif" alt="#{SMILES[m]}" class="smile">}
      end
    end
  end
end
