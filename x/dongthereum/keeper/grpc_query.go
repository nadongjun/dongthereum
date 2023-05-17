package keeper

import (
	"github.com/nadongjun/dongthereum/x/dongthereum/types"
)

var _ types.QueryServer = Keeper{}
