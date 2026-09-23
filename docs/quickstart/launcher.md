# 启动器设置

HLJUMC 使用 Authlib Injector 外置登录。无论用 PCL 还是 HMCL，都要填写同一个验证服务器地址：

```text
https://skin.qlu.life/api/yggdrasil
```

注册入口是 [HLJUMC 认证站](https://skin.qlu.life/login?mode=register)。还没有账号或玩家角色时，请先完成[进服指南](./join-guide)前四节。

::: warning 外置登录的范围
外置登录只负责 HLJUMC 的身份验证和材质加载，不能代替正版账号登录其他正版验证服务器。
:::

## PCL2

PCL 的第三方登录设置通常跟随游戏实例。新建或更换实例后，可能需要重新配置。

1. 在 PCL 中安装 Minecraft 26.2。
2. 回到主界面，点击“版本设置”。
3. 在左侧打开“设置”，向下找到“服务器选项”或“登录方式”。不同版本的文字可能略有差别。
4. 把登录方式改为“第三方登录：Authlib Injector”或“第三方登录：Authlib Injector 或 LittleSkin”。
5. 按下面的内容填写：

| 项目 | 内容 |
| --- | --- |
| 认证服务器 | `https://skin.qlu.life/api/yggdrasil` |
| 注册链接 | `https://skin.qlu.life/login?mode=register` |
| 服务器名称 | `HLJUMC` |

6. 如果页面上有“设置为 LittleSkin”按钮，不要点击。它会把认证服务器改成 LittleSkin 的地址，而不是 HLJUMC。
7. 返回 PCL 主界面，填写认证站账号名和密码。账号名默认是学号邮箱。
8. 点击“启动游戏”。如果启动器要求选择角色，请选择你在认证站创建的玩家。

::: tip 多玩家账号
支持使用玩家名称登录，这样在多用户的情况下可以选择指定的玩家进入服务器。
:::

![PCL 启动器主界面，展示版本设置按钮和 HLJUMC 服务器入口。](/assets/pcl-home.png)

![PCL 版本设置界面，展示第三方登录、认证服务器和注册链接。](/assets/pcl-settings.png)

![PCL 登录界面，展示 HLJUMC 服务器、邮箱、密码和启动游戏按钮。](/assets/pcl-login.png)

## HMCL

1. 在 HMCL 中安装 Minecraft 26.2。
2. 点击主界面的头像或账户区域，进入账户列表。
3. 在左侧选择“添加认证服务器”。如果当前版本显示加号按钮，点击后再选择外置登录或 Authlib Injector。
4. 输入验证服务器地址：

```text
https://skin.qlu.life/api/yggdrasil
```

5. 确认添加。启动器应显示 HLJUMC 认证服务器。
6. 选择刚添加的服务器，输入认证站账号名和密码。账号名默认是学号。
7. 选择要使用的玩家。账号下只有一个玩家时，HMCL 通常会自动选中；有多个玩家时请确认名称。
8. 返回主界面并启动 Minecraft 26.2。

![HMCL 主界面，展示添加游戏账户的入口。](/assets/hmcl-home.png)

![HMCL 添加认证服务器界面，已填入 HLJUMC 验证服务器地址。](/assets/hmcl-auth.png)

![Minecraft 启动器认证界面，展示用户名和密码输入框。](/assets/hmcl-login.png)

## 添加 HLJUMC 服务器

进入 Minecraft 后，依次点击“多人游戏”和“添加服务器”，填写：

| 项目 | 内容 |
| --- | --- |
| 服务器名称 | `HLJUMC` |
| 服务器地址 | `mc.hljumc.cn` |

保存后即可加入。玩家不需要为了进服单独安装服务端使用的辅助或优化 Mod。

## 常见问题

::: warning 地址可能变化
认证服务器地址后期可能更变为 `auth.hljumc.cn`，请以后续 QQ 群通知为准。
:::

### 提示账号或密码错误

确认填写的是认证站账号，而不是临时起的玩家名称。也可以先在[认证站登录页](https://skin.qlu.life/login)测试账号和密码是否正确。

### 启动后仍然是离线登录或正版登录

回到当前 Minecraft 26.2 实例的设置页，检查登录方式和验证服务器地址。PCL 更换实例后尤其容易漏掉这一步。

### 验证服务器无法识别

重新复制下面的地址，注意不要带句号、中文括号或前后空格：

```text
https://skin.qlu.life/api/yggdrasil
```

### 不想手动设置

加入 QQ 群 `1108761647`，在群文件中下载懒人整合包：[点击加群](https://qm.qq.com/q/GmMbDg05yg)。

如果认证网站本身报错，也在群里联系服主。提问时可以发启动器名称和报错截图，但不要发送密码或邮箱验证码。

## 参考资料

- [LittleSkin：在客户端配置 Yggdrasil 外置登录](https://manual.littlesk.in/yggdrasil/client)
- [HMCL：Authlib-Injector 服务器设置指南](https://docs.hmcl.net/launcher/authlib-injector.html)
- [authlib-injector 启动器技术规范](https://yushijinhun.github.io/authlib-injector/zh-cn/launcher-technical-specification.html)
