require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  configure do
    enable :sessions
    set :session_secret, "secret"
  end
   
  get "/" do
    #query param
    #client limit 5
    @synths=Synth.all
    erb :index
  end

  get "/signup" do
    erb :signup
  end

  post "/signup" do
    if params[:username] != "" && params[:password] != "" then
      @user = User.create(username:params[:username],password:params[:password])
      redirect to '/'
    end
  end

  get "/login" do
    erb :login
  end

  post "/login" do
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect to "/"
    else
      puts "fail"
    end
  end

  get "/synths/new" do
    erb :new_synth
  end

  post "/synths/new" do
    @synth = Synth.create(name:params[:name],user_id:session[:user_id])
    params["synth"]["osc"].each_with_index{ |osc,i|
      Osc.create(waveform:osc[:type],attack:osc[:attack],decay:osc[:decay],sustain:osc[:sustain],release:osc[:release],detune:osc[:detune],synth_id:@synth.id)    
    }
    redirect to "/synths/#{@synth.id}"
  end

  get "/synths/:id" do
    @synth=Synth.find(params[:id])
    puts @synth
    @synth.oscs.each{|osc|
    puts osc.waveform}
    erb :veiw_synth
  end

  post "/synths/:id" do
    #use a second input button to diffrentiate update vs Save
    @synth=Synth.find(params[:id])
    
    if params[:ACTION]=="UPDATE" && @synth.user_id==session[:user_id] then
      @synth.update(name:params[:name])
      @synth.oscs.each_with_index{|osc,i|
        p = params[:synth][:osc][i]
        osc.update(waveform:p[:type],attack:p[:attack],decay:p[:decay],sustain:p[:sustain],release:p[:release],detune:p[:detune])
      }
      redirect to "/synths/#{@synth.id}"
    else
      @synth = Synth.create(name:params[:name],user_id:session[:user_id])
      params["synth"]["osc"].each_with_index{ |osc,i|
        Osc.create(waveform:osc[:type],attack:osc[:attack],decay:osc[:decay],sustain:osc[:sustain],release:osc[:release],detune:osc[:detune],synth_id:@synth.id)    
      }
      redirect to "/synths/#{@synth.id}"
    end
  end

end
