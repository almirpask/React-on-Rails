class AppController < ApplicationController
    def index
        @persons = Person.all
    end
end
