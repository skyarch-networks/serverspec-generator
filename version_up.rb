require 'json'

j = JSON.parse(File.read('package.json'))
j['version'] = j['version'].sub(/^(\d+)\.(\d+)\.(\d+)$/) do
  "#{$1}.#{$2.to_i+1}.0"
end
File.write('package.json', JSON.pretty_generate(j))
