package keeper_test

import (
	"testing"

	testkeeper "github.com/nadongjun/dongthereum/testutil/keeper"
	"github.com/nadongjun/dongthereum/x/dongthereum/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.DongthereumKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
