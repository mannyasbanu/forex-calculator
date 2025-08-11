<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="text-center mb-4">
          <h2 class="display-5 fw-bold text-primary">
            <i class="fas fa-chart-line me-2"></i>
            Position Size Calculator
          </h2>
          <p class="lead text-muted">Calculate the optimal position size for your forex trades</p>
        </div>
        
        <div class="alert alert-info d-flex align-items-center" role="alert">
          <i class="fas fa-info-circle me-2"></i>
          <div>
            <strong>Coming Soon!</strong> The Position Size Calculator is currently under development.
          </div>
        </div>
        
        <div class="card shadow-sm">
          <div class="card-body text-center py-5">
            <i class="fas fa-tools display-1 text-muted mb-3"></i>
            <h5 class="card-title">Feature in Development</h5>
            <p class="card-text text-muted">
              This calculator will help you determine the appropriate position size based on your risk tolerance, 
              account balance, and stop loss distance.
            </p>
            <div class="row mt-4">
              <div class="col-md-4 mb-3">
                <div class="p-3 bg-light rounded">
                  <i class="fas fa-percentage text-primary mb-2"></i>
                  <h6>Risk Management</h6>
                  <small class="text-muted">Set your risk percentage</small>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="p-3 bg-light rounded">
                  <i class="fas fa-wallet text-success mb-2"></i>
                  <h6>Account Balance</h6>
                  <small class="text-muted">Input your account size</small>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="p-3 bg-light rounded">
                  <i class="fas fa-stop-circle text-danger mb-2"></i>
                  <h6>Stop Loss</h6>
                  <small class="text-muted">Define your exit point</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PositionCalc'
}
</script>

<style scoped>
.display-1 {
  font-size: 4rem;
}

.card {
  border: none;
  border-radius: 15px;
}

.bg-light {
  border-radius: 10px;
}

.fas {
  font-size: 1.5rem;
}
</style>
