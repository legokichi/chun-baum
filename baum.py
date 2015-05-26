import json

f = open(".data.json")
data = json.load(f)
f.close()
#print data

from ghmm import *



sigma = IntegerRange(0,2)
print sigma

A = [
  [0.15, 0.60, 0.25],
  [0.25, 0.15, 0.60],
  [0.60, 0.25, 0.15]
]
B = [
  [0.3, 0.7],
  [0.5, 0.5],
  [0.7, 0.3]
]
pi = [1, 0, 0]

m = HMMFromMatrices(sigma, DiscreteDistribution(sigma), A, B, pi)

print m

observed = data
train_seqs = EmissionSequence(sigma, observed)


m.baumWelch(train_seqs)

print m
