package keeper_test

import (
	"testing"

	testkeeper "github.com/nadongjun/dongthereum/testutil/keeper"
	"github.com/nadongjun/dongthereum/x/portfolio/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.PortfolioKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
