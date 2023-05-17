package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/nadongjun/dongthereum/x/portfolio/types"
)

func (k msgServer) CreateProject(goCtx context.Context, msg *types.MsgCreateProject) (*types.MsgCreateProjectResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	newProject := types.Project{
        	Name: msg.Title,
        	Link: msg.Link,
    	}
	k.SetProject(ctx, newProject)
	_ = ctx

	return &types.MsgCreateProjectResponse{Id : 0}, nil
}
