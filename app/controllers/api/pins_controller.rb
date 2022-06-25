class Api::PinsController < ApplicationController
    def index
        @pins = Pin.all
        render :index
    end

    def show 
        @pin = Pin.find(params[:id])
        render :show
    end

    def create
    end

    def update
    end

    def destroy
    end

    private 

    def pin_params 
        params.require(:pin).permit()
    end

end