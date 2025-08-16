---
layout: default
title: Projects
permalink: /projects/
---

# Technical Projects

Quantitative finance and econometric modeling implementations with production-ready code and comprehensive documentation.

---

## Advanced Portfolio Optimization Suite

**Repository:** [github.com/isaacvm98/portfolio-optimization](https://github.com/isaacvm98/portfolio-optimization)

### Overview
Complete portfolio construction pipeline implementing multiple optimization strategies with regime-aware allocation. Designed for institutional asset management with realistic trading constraints and cost modeling.

### Implementation Details

**Core Strategies:**
- Markowitz mean-variance optimization
- Black-Litterman model with investor views
- Risk parity (Equal Risk Contribution)
- Hierarchical Risk Parity (López de Prado methodology)
- VaR/CVaR optimization using CVXPY
- Robust optimization under parameter uncertainty

**Regime Detection Framework:**
```python
# Hidden Markov Model for market regime identification
from hmmlearn import hmm

def fit_regime_model(returns, n_regimes=2):
    model = hmm.GaussianHMM(n_components=n_regimes, 
                           covariance_type="full")
    features = self._prepare_features(returns)
    model.fit(features)
    return model.predict(features)
```

**Risk Management:**
- Transaction cost modeling with market impact
- Position size constraints and turnover optimization  
- Stress testing across multiple market scenarios
- Comprehensive performance attribution

**Technologies:** Python, CVXPY, HMMlearn, PyPortfolioOpt, NumPy, SciPy, Pandas

### Results
- 11 distinct portfolio strategies backtested over 4-year period
- Regime detection accuracy validated against known market cycles
- Transaction cost implementation reduces turnover by 23% while maintaining performance
- Sharpe ratio improvements of 15-30% over equal-weight benchmarks

---

## Stochastic Calculus & Derivatives Pricing

### Black-Scholes Implementation with Greeks

**Mathematical Foundation:**
```
dS = rS dt + σS dW
V(S,t) = S₀N(d₁) - Ke^(-rt)N(d₂)

Greeks:
Δ = ∂V/∂S = N(d₁)
Γ = ∂²V/∂S² = φ(d₁)/(S₀σ√T)
Θ = ∂V/∂t = -S₀φ(d₁)σ/(2√T) - rKe^(-rt)N(d₂)
```

**Features:**
- Analytical Greeks calculation optimized for real-time systems
- Monte Carlo pricing for path-dependent options (Asian, Barrier, Lookback)
- Finite difference methods for American options
- Stochastic volatility models (Heston, SABR)

**Numerical Methods:**
- Variance reduction techniques (antithetic variates, control variates)
- Quasi-random sequences (Sobol, Halton) for improved convergence
- GPU acceleration for large-scale simulation

**Applications:** Market making, risk management, exotic derivatives pricing

---

## NCAA Tournament Prediction (Kaggle Top 1%)

**Repository:** [github.com/isaacvm98/march-madness](https://github.com/isaacvm98/march-madness)

### Methodology

**Statistical Framework:**
Hierarchical Bayesian model accounting for conference-level effects and tournament-specific dynamics.

```python
# Mixed Effects Model Implementation
import statsmodels.formula.api as smf

model = smf.mixedlm("score_diff ~ efficiency_diff + tempo + experience", 
                    data=tournament_data, 
                    groups=tournament_data["conference"])
```

**Feature Engineering:**
- 200+ team performance metrics
- Advanced basketball analytics (effective field goal percentage, turnover rates)
- Coaching experience and tournament history
- Strength of schedule adjustments

**Model Ensemble:**
- XGBoost for non-linear patterns
- Generalized Linear Mixed Effects for hierarchical structure
- Bayesian optimization for hyperparameter tuning
- Out-of-sample validation on historical tournaments

### Results
- **12th place out of 1,200 teams** (Top 1%)
- Consistent performance across multiple competition years
- Model successfully identified 67% of upset victories
- Feature importance analysis revealed key predictive factors

**Business Applications:** Sports betting, risk assessment, predictive modeling under uncertainty

---

## Spatial Econometrics: Poverty-Crime Analysis

### Research Question
How do regional poverty levels influence local crime rates when accounting for spatial dependencies between neighboring states?

### Methodology

**Spatial Lag Model:**
```
y = ρWy + Xβ + ε
```
Where W is the spatial weight matrix and ρ captures spatial autocorrelation.

**Implementation:**
```r
# Spatial analysis in R
library(spdep)
library(spatialreg)

# Contiguity-based weight matrix
nb <- poly2nb(mexico_shapes)
w <- nb2listw(nb, style="W")

# Spatial lag model with robust standard errors
model <- lagsarlm(crime_rate ~ poverty_index + unemployment + education,
                  data=mexico_data, listw=w, method="eigen")
```

**Robustness Checks:**
- Multiple weight matrix specifications (contiguity, distance-based, k-nearest neighbors)
- Temporal stability analysis across multiple years
- Sensitivity analysis for outlier states

### Key Findings
- Significant positive spatial autocorrelation (Moran's I = 0.34, p < 0.01)
- 10% increase in neighboring states' poverty associated with 3.2% local crime increase
- Regional policy coordination more effective than isolated interventions

**Supervision:** Dr. Jose Miguel Torres, Universidad Panamericana  
**Policy Impact:** Contributed to understanding of regional spillover effects in socioeconomic policy

---

## NBA Analytics Platform

**Live Demo:** [isaacvm98-player-profile.streamlit.app](https://isaacvm98-player-profile.streamlit.app)

### Player Evaluation Framework

**Novel Metrics:**
- **Value Above Contract:** Performance efficiency relative to salary cost
- **Shot Selection Expected Value:** Court-region specific scoring probability
- **Assist Network Analysis:** Team ball movement optimization

**Technical Implementation:**
```python
def calculate_added_value(player_stats, contract_value):
    """
    Calculate player value above replacement relative to contract cost
    """
    performance_metrics = ['PER', 'BPM', 'VORP', 'Win_Shares']
    normalized_performance = standardize_metrics(player_stats[performance_metrics])
    cost_efficiency = normalized_performance / (contract_value / league_avg_salary)
    return cost_efficiency.sum()
```

**Data Sources:** NBA API, Basketball Reference, salary databases  
**Visualization:** Interactive Plotly dashboards with real-time updates  
**Applications:** Team roster construction, contract negotiations, player development

---

## NFL Big Data Bowl 2024

### Tackle Evaluation Using Tracking Data

**Problem Statement:** Develop objective metrics for defensive player evaluation using high-frequency positional data.

**Novel Metrics:**
1. **Time to Tackle Opportunity Above Replacement (TTOAR)**
2. **Tackles Above Replacement (TAR)**

**Data Processing:**
- 22-player tracking data at 10Hz frequency
- Spatial-temporal feature extraction
- Machine learning models for tackle probability prediction

**Methodology:**
```python
def calculate_tackle_probability(player_position, ball_carrier_position, velocity_vectors):
    """
    Estimate tackle probability based on spatial relationships and momentum
    """
    distance = euclidean_distance(player_position, ball_carrier_position)
    angle_of_approach = calculate_angle(velocity_vectors)
    closing_speed = relative_velocity(velocity_vectors)
    
    features = [distance, angle_of_approach, closing_speed, field_position]
    return trained_model.predict_proba(features)
```

**Industry Relevance:** Demonstrates ability to work with high-frequency data and develop novel performance metrics applicable to trading strategy evaluation.

---

## Research Publications

### "Analyzing NBA Timeouts" (Medium, Editor's Pick)
**Link:** [medium.com/@isaacvm98/analyzing-nba-timeouts](https://medium.com/@isaacvm98/analyzing-nba-timeouts)

Multilevel logistic regression analysis examining timeout effectiveness across game situations using comprehensive play-by-play data.

**Statistical Methods:** Hierarchical modeling, logistic regression, causal inference  
**Impact:** 10,000+ views, featured in basketball analytics communities  
**Business Application:** Strategic decision-making under pressure, resource allocation optimization

---

## Technical Infrastructure

**Development Environment:**
- Version control: Git with comprehensive documentation standards
- Testing: Unit tests for all mathematical implementations
- Performance: Profiling and optimization for computational efficiency
- Documentation: Jupyter notebooks with theoretical background and practical examples

**Production Considerations:**
- Error handling and input validation
- Scalability for institutional portfolio sizes
- API design for integration with existing trading systems
- Monitoring and logging for risk management compliance

**Code Quality Standards:**
- PEP 8 compliance for Python implementations
- Comprehensive docstrings with mathematical notation
- Type hints for better code maintainability
- Performance benchmarking against industry standards

---

[← Back to Home](/) | [View CV](assets/IsaacVergaraCV.pdf) | [Contact](mailto:isaacvergaram@hotmail.com)