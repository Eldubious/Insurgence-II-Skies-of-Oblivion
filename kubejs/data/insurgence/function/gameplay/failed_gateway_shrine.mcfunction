# Resets the shrine which summoned a gateway if it was failed
# Function is run when the gateway is failed

data modify block ~ ~-1 ~ data.trialInProgress set value 0b