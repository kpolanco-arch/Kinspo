class Api::SavepinsController < ApplicationController
        def index
        @savepins = Savepin.all
        render :index
    end

    def create
        # debugger
        # p "hello"
        @savepin = Savepin.new(savepin_params)
        # debugger
        if @savepin.save
          render :show
        else
           render json: @savepin.errors.full_messages, status: 401
        end
    end


    def update
         @savepin = Savepin.find(params[:id])
        if @savepin.update(savepin_params)
            render :show
        else
            render json: @savepin.errors.full_messages, status: 401
        end
    end


    def destroy
        @savepin = Savepin.find(id: params[:id])
        if @savepin && @savepin.destroy
            flash[:success] = 'Object was successfully deleted.'
        else
            flash[:error] = 'Something went wrong'
        end
    end
    

    private 

    def savepin_params 
        params.require(:savepin).permit(:pin_id, :user_id)
    end
    
end