# Update de Kernel Linux

1. Identifica o Kernel usado
   ```bash
   uname -r
   ```
2. Atualize todos os pacotes
3. Faça o reboot
4. Se tudo ok, Elimine o kernel antigo
5. Faça o reboot novamente

## Em Red Hat, Fedora, CentOS

```bash
# identificando kernel
uname -a
# Linux evoice_db4 4.18.0-553.54.1.el8_10.x86_64 #1 SMP Sat May 17 16:41:33 EDT 2025 x86_64 x86_64 x86_64 GNU/Linux

# listando kernels
rpm -q kernel
# kernel-4.18.0-553.54.1.el8_10.x86_64
# kernel-4.18.0-553.58.1.el8_10.x86_64

# update de tudo
dnf update -y

# reiniciar
reboot

######

# se tudo ok
# dnf remove kernel-<versão> # manualmente
dnf remove --oldinstallonly -y
reboot
```

## Em Debian, Ubuntu

```bash
# identificando kernel
uname -a

# listando kernels
dpkg --list | grep linux-image

# update de tudo
apt upgrade
apt update -y

# reiniciar
reboot

######

# apt remove --purge linux-image-<versão> # manualmente
apt autoremove --purge
reboot
```
