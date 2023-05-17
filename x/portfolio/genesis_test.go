package portfolio_test

import (
	"testing"

	keepertest "github.com/nadongjun/dongthereum/testutil/keeper"
	"github.com/nadongjun/dongthereum/testutil/nullify"
	"github.com/nadongjun/dongthereum/x/portfolio"
	"github.com/nadongjun/dongthereum/x/portfolio/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		ProjectList: []types.Project{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.PortfolioKeeper(t)
	portfolio.InitGenesis(ctx, *k, genesisState)
	got := portfolio.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.ProjectList, got.ProjectList)
	// this line is used by starport scaffolding # genesis/test/assert
}
