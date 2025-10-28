import Image from "next/image";
import "./page.css";

export default function Termos() {
    return (
        <main className="termos">
            <nav className="termos-nav">
                <Image
                    src="/logo.png"
                    alt="AquaBalance Logo"
                    width={150}
                    height={150}
                    className="logo"
                />
                <a href="/cadastro">Termos de Uso</a>
            </nav>
            <div className="termos-content">
                <div className="termos-text">
                    <p>Este Termo de Uso tem como objetivo estabelecer as condições para utilização do aplicativo da empresa TERRA Tech, voltado ao monitoramento e gestão agropecuária. <br />
                        Ao acessar ou utilizar os nossos serviços, você declara que leu, entendeu e concorda com os termos abaixo. </p><br />
                    <ul className="termos-alinhar">
                        <li>1. ATUALIZAÇÕES NESTE TERMO
                            <p>Lembramos que os Termos de Uso, assim como os conteúdos e as funcionalidades do aplicativo AquaBalance, poderão ser atualizados a qualquer momento, pelo uso de novas tecnologias e funcionalidades e sempre que a TERRA Tech entender que as alterações são necessárias.</p>
                        </li>
                        <li>2. IDENTIFICAÇÃO
                            <p>Este serviço é de responsabilidade de TERRA Tech, empresa sediada em Itapetininga – SP, que oferece soluções digitais para o setor agropecuário por meio de seu site e aplicativo mobile.</p>
                        </li>
                        <li>3. CONDIÇÕES DE USO
                            <ul className="termos-condicoes line">
                                <li>3.1 Cadastro
                                    <p>Para utilizar o aplicativo, o usuário deverá realizar um cadastro com informações verdadeiras, atualizadas e completas, que são necessárias para que o aplicativo funcione da forma esperada.</p>
                                </li>
                                <li>3.2 Responsabilidade do Usuário
                                    <p>Manter a confidencialidade de suas credenciais de acesso;</p>
                                    <p>Utilizar a plataforma de forma ética, respeitando as leis;</p>
                                    <p>Não utilizar o serviço para fins ilegais, fraudulentos ou que possam comprometer sua integridade.</p>
                                </li>
                            </ul>
                        </li>
                        <li>4. FUNCIONALIDADES DO APLICATIVO
                            <ul className="termos-condicoes">O aplicativo permite
                               
                                <li>Registro e geolocalização de propriedades rurais;</li>
                                <li>Cadastro de plantações e culturas;</li>
                                <li>Monitoramento e acompanhamento das atividades agrônomas;</li>
                                <li>Controle de irrigação.</li>
                            </ul>
                        </li>
                        <li>5. PRIVACIDADE E DADOS PESSOAIS
                            <p>A TERRA Tech se compromete a tratar os dados pessoais conforme a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).</p>
                            <ul className="termos-condicoes">A coleta de dados é feita com o objetivo de:
                                <li>Oferecer uma experiência personalizada;</li>
                                <li>Melhorar a eficiência da irrigação e do plantio;</li>
                                <li>Fornecer funcionalidades relacionadas à localização da propriedade;</li>
                                <li>Gerar análises e relatórios agrícolas.</li>
                            </ul>
                        </li>
                        <li>6. DIREITOS AUTORAIS E PROPRIEDADE INTELECTUAL
                            <p>Todo o conteúdo presente na plataforma (textos, imagens, códigos, marcas e logotipos) é de propriedade da TERRA Tech, sendo protegido pela legislação brasileira de direitos autorais. <br />
                                É proibida a reprodução, modificação, distribuição ou qualquer uso não autorizado do conteúdo.</p>
                        </li>
                        <li>7. LIMITAÇÃO DE RESPONSABILIDADE
                            <ul className="termos-condicoes">A TERRA Tech se esforça para manter os serviços sempre disponíveis e seguros. Contudo, não se responsabiliza por:
                                <li>Interrupções temporárias no funcionamento do sistema;</li>
                                <li>Danos causados por uso inadequado da plataforma;</li>
                                <li>Decisões tomadas com base em dados inseridos incorretamente pelos próprios usuários.</li>
                            </ul>
                        </li>
                        <li>8. ENCERRAMENTO DE CONTA
                            <p>O usuário pode, a qualquer momento, solicitar o encerramento de sua conta. A TERRA Tech reserva-se o direito de suspender ou excluir contas que violem os termos aqui descritos.</p>
                        </li>
                        <li>9. CONTATO
                            <p>Em caso de dúvidas, sugestões ou solicitações relacionadas a este Termo, entre em contato conosco por meio do formulário: terratechcontato@hotmail.com</p>
                        </li>
                        <li>10. GLOSSÁRIO
                            <p>Usuário: Qualquer pessoa que se registre e utilize os serviços disponibilizados pela TERRA Tech.</p>
                            <p>Plataforma: Conjunto de funcionalidades acessadas por meio do site ou aplicativo TERRA Tech.</p>
                            <p>Dados Pessoais: Informações fornecidas pelo usuário, incluindo nome, e-mail, localização da propriedade rural, número de plantações, entre outros.</p>
                        </li>
                    </ul>
                    <br />

                    <p>Última atualização: [11/09/2025]</p>

                </div>
            </div>
        </main>
    );
}