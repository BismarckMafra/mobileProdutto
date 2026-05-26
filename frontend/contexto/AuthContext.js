import React, { createContext, useState, useCallback } from 'react';
import AsyncStorage from '@react-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [loading, setLoading] = useState(false);

  // Verificar se há usuário logado ao iniciar
  const verificarUsuarioLogado = useCallback(async () => {
    try {
      const usuario = await AsyncStorage.getItem('usuarioLogado');
      if (usuario) {
        setUsuarioLogado(JSON.parse(usuario));
      }
    } catch (error) {
      console.error('Erro ao verificar usuário logado:', error);
    }
  }, []);

  // Login
  const login = useCallback(async (usuario) => {
    try {
      setLoading(true);
      await AsyncStorage.setItem('usuarioLogado', JSON.stringify(usuario));
      setUsuarioLogado(usuario);
      return usuario;
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  // Logout
  const logout = useCallback(async () => {
    try {
      setLoading(true);
      await AsyncStorage.removeItem('usuarioLogado');
      setUsuarioLogado(null);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  // Verificar se é gerente
  const isGerente = useCallback(() => {
    return usuarioLogado?.cargo === 'Gerente';
  }, [usuarioLogado]);

  // Verificar se é funcionário
  const isFuncionario = useCallback(() => {
    return usuarioLogado?.cargo === 'funcionario' || usuarioLogado?.cargo === 'Funcionário';
  }, [usuarioLogado]);

  const value = {
    usuarioLogado,
    loading,
    login,
    logout,
    verificarUsuarioLogado,
    isGerente,
    isFuncionario,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
