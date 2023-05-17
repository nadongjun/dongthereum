package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/nadongjun/dongthereum/testutil/keeper"
	"github.com/nadongjun/dongthereum/x/dongthereum/keeper"
	"github.com/nadongjun/dongthereum/x/dongthereum/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.DongthereumKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
