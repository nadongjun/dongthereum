package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/nadongjun/dongthereum/testutil/keeper"
	"github.com/nadongjun/dongthereum/testutil/nullify"
	"github.com/nadongjun/dongthereum/x/portfolio/keeper"
	"github.com/nadongjun/dongthereum/x/portfolio/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNProject(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Project {
	items := make([]types.Project, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetProject(ctx, items[i])
	}
	return items
}

func TestProjectGet(t *testing.T) {
	keeper, ctx := keepertest.PortfolioKeeper(t)
	items := createNProject(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetProject(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestProjectRemove(t *testing.T) {
	keeper, ctx := keepertest.PortfolioKeeper(t)
	items := createNProject(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveProject(ctx,
			item.Index,
		)
		_, found := keeper.GetProject(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestProjectGetAll(t *testing.T) {
	keeper, ctx := keepertest.PortfolioKeeper(t)
	items := createNProject(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllProject(ctx)),
	)
}
