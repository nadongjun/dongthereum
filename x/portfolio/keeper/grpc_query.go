package keeper

import (
	"github.com/nadongjun/dongthereum/x/portfolio/types"
)

var _ types.QueryServer = Keeper{}
