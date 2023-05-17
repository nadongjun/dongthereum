package dongthereum_test

import (
	"testing"

	keepertest "github.com/nadongjun/dongthereum/testutil/keeper"
	"github.com/nadongjun/dongthereum/testutil/nullify"
	"github.com/nadongjun/dongthereum/x/dongthereum"
	"github.com/nadongjun/dongthereum/x/dongthereum/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.DongthereumKeeper(t)
	dongthereum.InitGenesis(ctx, *k, genesisState)
	got := dongthereum.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
