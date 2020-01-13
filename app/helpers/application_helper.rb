module ApplicationHelper
  def display_date(date)
    if date
      formatted = date.strftime("%m/%d/%Y")
    else
      formatted = ' '
    end
  end
end
