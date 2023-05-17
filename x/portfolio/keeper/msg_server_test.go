package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/nadongjun/dongthereum/testutil/keeper"
	"github.com/nadongjun/dongthereum/x/portfolio/keeper"
	"github.com/nadongjun/dongthereum/x/portfolio/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.PortfolioKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
