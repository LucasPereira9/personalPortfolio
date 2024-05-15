import {AiFillTool, AiOutlineApi, AiOutlineAppstore, AiOutlineDesktop, AiOutlineGateway, AiOutlineHighlight, AiOutlineLineChart, AiOutlineMobile } from 'react-icons/ai';
import { FaAppStore } from 'react-icons/fa';


export const navOptions = [
    {
        id: 'home',
        title: 'Início'       
    },
    {
        id: 'about',
        title: 'Sobre'
    },
    {
        id: 'services',
        title: 'Serviços'
    },
    {
        id: 'experience',
        title: 'Experiência Profissional'
    },
    {
        id: 'contact',
        title: 'Contato'

    }
]
export const Languages = [
    {
        url: '/assets/images/united_state.png',
        value: 'en',
    },
    {
        url: '/assets/images/brazil.png',
        value: 'pt',
    },
    {
        url: '/assets/images/spain.png',
        value: 'es',
    }
]
export const Abilities = [
    {
        icon: AiOutlineGateway,
        title: 'Arquitetura de Software',
        description: 'software_description'
    },
    {
        icon: AiOutlineHighlight,
        title: 'Criatividade',
        description: 'Creativity_description'
    },
    {
        icon: AiOutlineLineChart,
        title: 'Análise de Dados',
        description: 'Data_Analysis_description'
    }
]

export const firstComplement = [
    {
        title: 'Nome',
        name: 'Lucas Almeida',
    },
    {
        title: 'Email',
        name: 'lucas970997@gmail.com',
    },
    {
        title: 'Telefone',
        name: '+55(31) 99345-4507',
    }
]
export const secondComplement = [
    {
        title: 'Endereço',
        name: 'Vila Cristina, Betim-MG Brasil',
    }
]

export const Skills = [
    {
        title: 'React.js',
        level: 97
    },
    {
        title: 'React Native',
        level: 97
    },
    {
        title: 'Next.js',
        level: 90
    },
    {
        title: 'Typescript',
        level: 90
    },
    {
        title: 'Node.js',
        level: 80
    },
    {
        title: 'Firebase',
        level: 88
    },
    {
        title: 'REST API',
        level: 90
    },
    {
        title: 'MySQL',
        level: 85
    }
]
export const ServicesOptions = [
    {
        title: 'Design Responsivo para Web',
        description: 'Desenvolvimento de interfaces web adaptáveis',
        icon: AiOutlineDesktop
    },
    {
        title: 'Experiência Mobile',
        description: 'Criação de interfaces móveis intuitivas e eficientes',
        icon: AiOutlineMobile
    },
    {
        title: 'Implementação de RESTful APIs',
        description: 'Desenvolvimento de APIs RESTful robustas e escaláveis',
        icon: AiOutlineApi
    },
    {
        title: 'Componentes Web Modularizados',
        description: 'Construção de componentes web modulares e flexíveis',
        icon: AiOutlineAppstore
    },
    {
        title: 'Publicação de Aplicativos Mobile',
        description: 'Assistência completa no processo de publicação de aplicativos',
        icon: FaAppStore
    },
    {
        title: 'Serviços Personalizados sob Medida',
        description: 'Adaptação de serviços para atender às necessidades específicas de cada cliente',
        icon: AiFillTool
    },
]

export const WorkedCompanyes = [
    {
        title: 'Front-End Developer',
        date: '(10/2021 - 02/2024)',
        company: 'Qesh Payments',
        description: 'foco em suporte e desenvolvimento. Correções de bugs e melhorias em produção, garantindo conformidade com os requisitos da Play Store.'
    }
]
export const StudyHistory = [
    {
        title: 'Typescript Online Course',
        date: '(2022 - 2022)',
        company: 'Udemy',
        description: 'Curso online sobre TypeScript, cobrindo desde a sintaxe básica até conceitos avançados como tipos avançados, interfaces e generics.'
    },
    {
        title: 'React Native',
        date: '(2020 - 2020)',
        company: 'RocketSeat',
        description: ' Curso prático voltado para o desenvolvimento de aplicativos móveis usando React Native, incluindo navegação, componentes nativos e integração com APIs externas.'
    },
    {
        title: 'React.js',
        date: '(2020 - 2020)',
        company: 'Alura',
        description: ' Treinamento focado na biblioteca React.js, abordando desde conceitos básicos até tópicos avançados como Hooks, Context API e Redux.'
    },
]