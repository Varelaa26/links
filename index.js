function instagram(event)
{
    event.preventDefault();

    try
    {
        window.location.href = "https://www.instagram.com/victor.techlab"
    }
    catch (e)
    {
        alert("Não foi possível redirecionar, enviando notificação ao servidor...")
        enviar_notificacao("instagram_erro")
    }
}

function whatsapp(event)
{
    event.preventDefault()

    try
    {
        window.location.href = "https://wa.me/5549998289806"
    }
    catch (e)
    {
        alert("Não foi possível redirecionar, enviando notificação ao servidor...")
        enviar_notificacao("whattsap_erro")
    }
}

function portifolio(event)
{
    event.preventDefault()

    try
    {
        window.location.href = "https://portifolio-neon-eta.vercel.app/"
    }
    catch (e)
    {
        alert("Não foi possível redirecionar, enviando notificação ao servidor...")
        enviar_notificacao("whattsap_erro")
    }
}

function github(event)
{
    event.preventDefault()

    try
    {
        window.location.href = "github.com/varelaa26"
    }
    catch (e)
    {
        alert("Não foi possível redirecionar, enviando notificação ao servidor...")
        enviar_notificacao("whattsap_erro")
    }

}

function enviar_notificacao(erro)
{
    //Função ainda não implementada
}