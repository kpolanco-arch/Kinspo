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
        @pin = Pin.new(pin_params)
        # debugger
        if @pin.save
          render :show
        else
        # debugger
           render json: @pin.errors.full_messages, status: 401
           
        end
    end


    def update
         @pin = Pin.find(params[:id])
        if @pin.update(pin_params)
            render :show
        else
            render json: @pin.errors.full_messages, status: 401
        end
    end


    def destroy
        @pin = Pin.find(params[:id])
        if @pin && @pin.destroy
            flash[:success] = 'Object was successfully deleted.'
        else
            # debugger
             render json: @pin.errors.full_messages, status: 401
        end
    end
    

    private 

    def pin_params 
        params.require(:pin).permit(:title, :image_url, :creator_id, :description, :board_id, :photo)
    end

end