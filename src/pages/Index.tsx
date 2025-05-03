import { useState } from 'react';

const Index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('Insira um endereço de email válido');
  const [passwordError, setPasswordError] = useState('Insira a senha correta');

  return (
    <div className="bg-gradient-full flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md">
        <div className="flex items-center justify-end mb-12">
          <img src="/healplanner.png" alt="Vision Planner Logo" className="flex items-center" />
        </div>

        <form className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              className="input-field"
              placeholder="Insira seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="error-message">{emailError}</p>
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Senha</label>
            <input 
              type="password" 
              id="password" 
              className="input-field"
              placeholder="Insira sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="error-message">{passwordError}</p>
          </div>

          <div className="pt-2">
            <a href="#" className="text-sm hover:underline" style={{ color: '#d70d66' }}>
              Esqueceu a senha?
            </a>
          </div>

          <button 
            type="button"
            className="gradient-border w-full bg-white font-medium py-3 px-4 rounded-full flex items-center justify-center hover:bg-[#fce6ef] transition-colors shadow-custom"
            style={{ color: '#d70d66' }}
          >
            <img src="/symbol.png" alt="Login Icon" className="h-5 w-5 mr-2" />
            <span>Login</span>
          </button>
        </form>

        <div className="mt-8 text-center space-y-4">
          <a href="#" className="hover:underline" style={{ color: '#d70d66' }}>
            Criar conta
          </a>
          <p className="text-gray-500 font-semibold">HEALYTICS</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
