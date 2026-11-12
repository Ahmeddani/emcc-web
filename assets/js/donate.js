// EMCC donate page — payment method toggle + PayPal/card donations

document.addEventListener('DOMContentLoaded', () => {
  const panels = {
    zelle: document.getElementById('give-panel-zelle'),
    paypal: document.getElementById('give-panel-paypal'),
  };
  if (!panels.zelle || !panels.paypal) return;

  const methodRadios = document.querySelectorAll('input[name="give-method"]');
  const amountButtons = document.querySelectorAll('.amount-btn');
  const customAmountInput = document.getElementById('custom-amount');
  const status = document.getElementById('give-amount-status');

  let selectedAmount = null;
  let paypalSdkRequested = false;

  methodRadios.forEach((radio) => {
    radio.addEventListener('change', () => {
      Object.entries(panels).forEach(([key, panel]) => {
        panel.hidden = key !== radio.value;
      });
      if (radio.value === 'paypal' && !paypalSdkRequested) {
        paypalSdkRequested = true;
        loadPayPalSdk();
      }
    });
  });

  amountButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      selectedAmount = Number(btn.dataset.amount);
      amountButtons.forEach((b) => b.classList.toggle('active', b === btn));
      customAmountInput.value = '';
      clearStatus();
    });
  });

  customAmountInput.addEventListener('input', () => {
    const value = parseFloat(customAmountInput.value);
    selectedAmount = value > 0 ? value : null;
    amountButtons.forEach((b) => b.classList.remove('active'));
    clearStatus();
  });

  function clearStatus() {
    status.textContent = '';
    status.classList.remove('show', 'ok', 'error');
  }

  function showStatus(message, kind) {
    status.textContent = message;
    status.classList.add('show', kind);
  }

  function getAmount() {
    return selectedAmount && selectedAmount > 0 ? selectedAmount.toFixed(2) : null;
  }

  // TODO: replace 'sb' with EMCC's real PayPal Business Client ID before launch
  // (developer.paypal.com → Apps & Credentials → Live). Sandbox "sb" renders
  // buttons for testing but cannot process real payments.
  const PAYPAL_CLIENT_ID = 'sb';

  function loadPayPalSdk() {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD&enable-funding=card`;
    script.onload = renderPayPalButtons;
    script.onerror = () => showStatus('Could not load PayPal — please try again later or use Zelle instead.', 'error');
    document.body.appendChild(script);
  }

  function renderPayPalButtons() {
    if (!window.paypal) return;
    window.paypal.Buttons({
      style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'donate' },
      createOrder: (data, actions) => {
        const amount = getAmount();
        if (!amount) {
          showStatus('Please choose or enter a donation amount first.', 'error');
          return Promise.reject(new Error('No amount selected'));
        }
        clearStatus();
        return actions.order.create({
          purchase_units: [{
            description: 'EMCC Donation',
            amount: { value: amount, currency_code: 'USD' },
          }],
        });
      },
      onApprove: (data, actions) => actions.order.capture().then((details) => {
        const givenName = details.payer && details.payer.name ? details.payer.name.given_name : '';
        showStatus(`Jazakum Allahu khayran${givenName ? ', ' + givenName : ''}! Your donation was received.`, 'ok');
      }),
      onError: () => showStatus('Something went wrong processing your payment. Please try again or use Zelle instead.', 'error'),
    }).render('#paypal-button-container');
  }
});
