import { View, TextInput, TouchableOpacity, Text, ActivityIndicator, Alert } from "react-native";
import styles from "../estilos/estilos";
import { useState } from "react";
import { firebaseUsuariosService as usuariosService } from "../../services/firebase/firebaseUsuariosService";
import { useAuth } from "../contexto/useAuth";

export default function LoginFuncionario() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const { login } = useAuth();

    const validateForm = () => {
        const newErrors = {};
        if (!email.trim()) newErrors.email = 'Email é obrigatório';
        if (email.trim() && !email.includes('@')) newErrors.email = 'Email inválido';
        if (!senha.trim()) newErrors.senha = 'Senha é obrigatória';
        if (senha.trim() && senha.length < 6) newErrors.senha = 'Senha deve ter pelo menos 6 caracteres';
        return newErrors;
    }

    const loginUsuario = async () => {
        const newErrors = validateForm();
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setLoading(true);
            try {
                const response = await usuariosService.login(email, senha);
                if (response) {
                    // Armazenar usuário no contexto de autenticação
                    await login(response);
                    Alert.alert('✅ Sucesso', 'Login realizado com sucesso!');
                    setEmail('');
                    setSenha('');
                }
            } catch (error) {
                Alert.alert('❌ Erro', 'Falha ao fazer login. Por favor, verifique suas credenciais.');
            } finally {
                setLoading(false);
            }
        }
    }

    return (
        <View style={styles.formContainer}>
            <Text style={styles.formTitle}>🔐 Login Funcionário</Text>

            <Text style={styles.cardLabel}>Email</Text>
            <TextInput
                style={[styles.input, errors.email && styles.inputError]}
                placeholder="seu.email@exemplo.com"
                value={email}
                onChangeText={(text) => {
                    setEmail(text);
                    if (errors.email) setErrors({ ...errors, email: '' });
                }}
                keyboardType="email-address"
                editable={!loading}
            />
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <Text style={styles.cardLabel}>Senha</Text>
            <TextInput
                style={[styles.input, errors.senha && styles.inputError]}
                placeholder="Digite sua senha"
                value={senha}
                onChangeText={(text) => {
                    setSenha(text);
                    if (errors.senha) setErrors({ ...errors, senha: '' });
                }}
                secureTextEntry
                editable={!loading}
            />
            {errors.senha && <Text style={styles.errorText}>{errors.senha}</Text>}

            <TouchableOpacity
                style={[styles.button, loading && { opacity: 0.6 }]}
                onPress={loginUsuario}
                disabled={loading}
            >
                {loading ? (
                    <ActivityIndicator color="white" />
                ) : (
                    <Text style={styles.buttonText}>✓ Fazer Login</Text>
                )}
            </TouchableOpacity>
        </View>
    )
}