import "./CancellationAndReturns.css";

function CancellationAndReturns({ className }) {
    return(
        <main className={`cancellation-and-returns-main ${className}`} id="/cancellation-and-returns#main">
            <h2 className="cancellation-and-returns-main__heading">Cancellation and Return Policy</h2>
            <h3 className="cancellation-and-returns-main__subheading">Cancellation Policy</h3>
            <p className="cancellation-and-returns-main__paragraph">The customer has the choice to cancel their order under certain conditions. The order cannot be cancelled once it is out for delivery. Additionally, there is a certain time window under which the customer is allowed to cancel the order. Thus cancellation is only possible when the order is not out for delivery and the cancellation window has not passed yet</p>
            <h3 className="cancellation-and-returns-main__subheading">Return Policy</h3>
            <p className="cancellation-and-returns-main__paragraph">Every order has a 10 days return and refund policy from the time of receiving the order. However, during the return process if the product is found to be damaged after being delivered to you, then this policy no longer applies.</p>
        </main>
    );
    
}

export default CancellationAndReturns;