module EventsHelper
  def url_for_twitter(user)
    "#{Settings.twitter.url}#{user.nickname}"
  end
end
