module ApplicationHelper

  def display_date(date)
    if date
      formatted = date.strftime("%m/%d/%Y")
    else
      formatted = ' '
    end
  end

  def display_time(time)
    if time
      formatted = time.strftime("%l:%M:%S %p")
    else
      formatted = ' '
    end
  end

  def display_name(name)
    if name
      e = Employee.find_by(Badge_: name)
      formatted = e.Firstname + ' ' + e.Lastname
    else
      formatted = ' '
    end
  end

  def human_boolean(boolean)
      boolean ? 'Yes' : 'No'
  end

end
