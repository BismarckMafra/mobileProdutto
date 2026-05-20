import { View, TextInput, TouchableOpacity, Text, ActivityIndicator, Alert } from "react-native";
import styles from "../estilos/estilos";
import { useEffect, useState } from "react";
import { firebaseUsuariosService as usuariosService } from "../../services/firebase/firebaseUsuariosService";

export default function LoginFuncionario() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!email.trim()) newErrors.email = 'Email é obrigatório';
        if (email.trim() && !email.includes('@')) newErrors.email = 'Email inválido';
        if (!senha.trim()) newErrors.senha = 'Senha é obrigatória';
        if (senha.trim() && senha.length < 6) newErrors.senha = 'Senha deve ter pelo menos 6 caracteres';
        return newErrors;
    }

    



}