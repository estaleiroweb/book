# Java

- Docs: [https:/docs.oracle.com/en/java/javase/19/](https:/docs.oracle.com/en/java/javase/19/)
- <https://www.youtube.com/watch?v=I_NvC7DE1IE>
- <https://www.youtube.com/watch?v=d-2E7c2Kfcc&list=PLHz_AreHm4dkI2ZdjTwZA4mPMxWTfNSpR&index=20>
- [youtube List](https:/www.youtube.com/watch?v=yWU5bm_pZzY&list=PLHz_AreHm4dkI2ZdjTwZA4mPMxWTfNSpR&index=5)
- [https:/www.oracle.com/br/java/technologies/downloads/](https:/www.oracle.com/br/java/technologies/downloads/)
- [https:/www.oracle.com/ava/technologies/javafx-scene-builder-source-code.html](https:/www.oracle.com/ava/technologies/javafx-scene-builder-source-code.html)
- [https:/www.oracle.com/java/technologies/downloads/archive/#JavaFX](https:/www.oracle.com/java/technologies/downloads/archive/#JavaFX)

## Links

## Divisions

- JVM: Java Virtual Machine
- JRE: Java Runtime Enviroment (JVM+Lib)
- JDK: Java Development Kit (JRE+JavaLang+JavaTools)
  - J2SE: Standard Edition (Simples, Janelas, Ambientes, Controles e padrões gráficos)
  - J2EE: Enterprise Edition (Empresas, Acesso DB Grandes)
  - J2ME: Micro Edition (Controle de Portáteis)

## JVM

- Loader: Carrega o Bytecode na memória de VM
- Verificador: Checa de o Bytecode pode ser executado sem problemas
- Interpretador: Transforma o Bytecode em código nativo da máquina
- Gerenciador de Memória: Gerencia a memória da JVM
- Complilador JIT: Compilação em JIT (Just In Time)

## JavaTools

- JavaC: Compilador de Código Fonte para Bytecode
- Debugger: Verifica como está sendo executado em tempo real
- APIs: JavaFX etc

## IDEs - Integrated Development Enviroment

- NetBeans: Bom para projetos em desktop
- Eclipse: Bom para projetos em background
- VS Code: Multi uso

## Packages

- java.lang: Padrão default
- java.applet: Criar aplicativos
- java.util: Utilitários (monitoramento de teclado)
- java.math: Funções matemáticas
- java.net: Redes
- java.awt: Abstract Window Toolkit - Criar/Manipular Janelas Nativas
- javax.sound: X(eXtended) Som
- javax.media: X(eXtended) Mídia
- javax.swing: X(eXtended) Criar/Manipular Janelas Java (sucessor AWT)
- javaFx.fxml: Criar/Manipular Janelas Cross (sucessor swing)

## Installing

```bash
java --version # 11
update-alternatives --install /usr/bin/java java /usr/lib/jvm/jdk-19/bin/java 1999
update-alternatives --install /usr/bin/javac javac /usr/lib/jvm/jdk-19/bin/javac 1999
java --version # 19
```

```bash
java --version # 11
update-alternatives --install /usr/bin/java java /usr/lib/jvm/jdk-19/bin/java 1999
update-alternatives --install /usr/bin/javac javac /usr/lib/jvm/jdk-19/bin/javac 1999
java --version # 19
```

```bash
java --version # 11
update-alternatives --install /usr/bin/java java /usr/lib/jvm/jdk1.8.0_361/bin/java 1999
update-alternatives --install /usr/bin/javac javac /usr/lib/jvm/jdk1.8.0_361/bin/javac 1999
java --version # 8
```
