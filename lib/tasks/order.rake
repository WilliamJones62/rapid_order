task :fs_orders => :environment do
  FsOrder.get_orders
end
