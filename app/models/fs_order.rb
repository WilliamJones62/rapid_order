class FsOrder < ApplicationRecord
  establish_connection "e21prod".to_sym
  has_many :fs_order_parts, inverse_of: :fs_order, :dependent => :destroy
  accepts_nested_attributes_for :fs_order_parts, reject_if: proc { |attributes| attributes['partdesc'].blank? }

  def self.get_orders
    all.each do |o|
      if o.status == "ACTIVE" && o.in_process == true && o.updated_at < 30.minutes.ago
        # order has been waiting for an order number for over 30 minutes
        o.in_process = false
        o.save
      end
    end
  end

end
