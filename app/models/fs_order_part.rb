class FsOrderPart < ApplicationRecord
  establish_connection "e21prod".to_sym
  belongs_to :fs_order, :foreign_key => "fs_order_id"
end
