class Api::BoardsController < ApplicationController
        def index
        @boards = Board.all
        render :index
    end

    def show 
        @board = Board.find(params[:id])
        render :show
    end

    def create
        @board = Board.new(board_params)
        if @board.save
          render :show
        else
           render json: @board.errors.full_messages, status: 401
        end
    end


    def update
         @board = Board.find(params[:id])
        if @board.update(board_params)
            render :show
        else
            render json: @board.errors.full_messages, status: 401
        end
    end


    def destroy
        @board = Board.find_by(id: params[:id])
        if @board && @board.destroy
            flash[:success] = 'Object was successfully deleted.'
        else
            flash[:error] = 'Something went wrong'
        end
    end
    

    private 

    def board_params 
        params.require(:board).permit(:name, :creator_id, :description, :pin_ids)
    end
end