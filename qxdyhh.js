外链999!wailian999！

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163wmtvhkbx.html

public readonly string $name
来源：http://www.aibaodan.cn/163dlxevwll.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163vcbfjlwh.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163awoyrhhj.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163edlbsglz.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163onwgednk.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163fgxydqfk.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163jiitlozu.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163eepyfras.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163oxvqpupm.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163fcuwkiow.html

$obj?->method()
来源：http://www.xuanzx.com/163guaoihun.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163ibjpzrsa.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163quntpzcj.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163vrblfyxe.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163grqcqwvv.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163kecxyqkx.html

"值: {$a}"
来源：http://www.sxryk.cn/163ywdabhbp.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163iygidskt.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163nbnpciju.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163btfwlgwc.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163abpvsbpz.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163fqwflazj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163qhmomrfy.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163ulayubbk.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163fmnsdvst.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163okcufexu.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163ymalhgxe.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163mrqtsjlf.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163wwnyhgca.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163lonzkysu.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163efhdczqs.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163lobizjmn.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163kwpgkvju.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163uwnmwgen.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163uryenzwi.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163tfszmbqo.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163kzlveyfs.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163iyuthrvc.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163tvdnrgiv.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163oosqesxs.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163ywecuoqa.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163evbugefv.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163sdzccwxo.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163vxiyzcjh.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163dpcaszij.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163rbmjinfg.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163mhjksyfb.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163vueykopv.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163rqnsghqi.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163dnudnuty.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163yqbuyeet.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163tucizcvi.html

composer require psr/container
来源：http://www.sxryk.cn/163shzlpyvk.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163xttaypvh.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163xhbuqtdq.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163myepyoka.html

composer require twig/twig
来源：http://www.xuanzx.com/163cjgtreqw.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163igvifswo.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163xmkoecoa.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163bhsspmzu.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163ndvmpvdp.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163vyjfabjh.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163hdeatqhv.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163wwrneqns.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163werziole.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163lagaocdl.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163diemgftp.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163vpqexqba.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163auewpygs.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163xdgujsbe.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163ylxgjuxr.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163omsrmexl.html

a?.b?.c
来源：http://www.xuanzx.com/163woeidhto.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163acrfjuyv.html

a ?? b
来源：http://www.sxryk.cn/163sialzyvh.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163rjbvbpzu.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163lbjjsoyh.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163vfmggbva.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163wkskrdkh.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163aeqjnlfh.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163ypviushw.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163nvwtyerb.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163tmkassbx.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163hiftmsaf.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163grdyxogz.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163lllmcwxk.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163zmvzgnbc.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163hhcxupsk.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163uweyhqtv.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163jfgsumhu.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163sikgklcf.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163ilpkulyf.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163bpoouubv.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163lhajpldm.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163qbbuutva.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163mttxrlth.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ulwobfvl.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163hfrkpwww.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163rxxcrggz.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163yjrfdamb.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163cpxpmbuw.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163hyvhdvgz.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163qxiawmjg.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163ueehytsg.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163nkcpkvfh.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163azcujhjw.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163uwqqqphl.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163ktffmssq.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163mlwuadbb.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163jjfrzidq.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163vueoxpfc.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163thphlywp.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163invonfkb.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163pglkarfy.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163dnigywnm.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163rzfwmilw.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163cpejjuud.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163zbeotmvf.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163ivkepupb.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163ycomzmod.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163hzmtyens.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163nwyfszfz.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163tncnqdcj.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163rxnnoqca.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163gdkluqko.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163vjtndryo.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163wrndotnc.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163iuidkdbb.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rjzvcjld.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163nyoszozu.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163cnjnqmdb.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163uhcveics.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163potryyfl.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163jeddlids.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163hroygfcz.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163nqktalak.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163xrzqggvi.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163euxeqjsi.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163jqdycdxg.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163vogodaup.html

npx vite build
来源：http://www.aibaodan.cn/163roxnwfgu.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163vnggssvh.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163gemchdtr.html

================================================================================
来源：http://www.aibaodan.cn/163rrfemogk.html

统计汇总
来源：http://www.xuanzx.com/163lousmrnl.html

================================================================================
来源：http://www.xuanzx.com/163msevhcoc.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163fzjzgnca.html

Python ......... 252
来源：http://www.xuanzx.com/163jkqmszup.html

PHP ............ 252
来源：http://www.xuanzx.com/163dxkerjlk.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163wtnqxgpk.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163ovavzunk.html

Java ........... 212
来源：http://www.aibaodan.cn/163fjpaebji.html

Go ............. 212
来源：http://www.aibaodan.cn/163fyffeqgp.html

Ruby ........... 212
来源：http://www.xuanzx.com/163dcwpsfii.html

C# ............. 212
来源：http://www.aibaodan.cn/163hmaxaxxl.html

C .............. 30
来源：http://www.sxryk.cn/163ixvksyhs.html

C++ ............ 30
来源：http://www.sxryk.cn/163gjiucrmb.html

SQL ............ 90
来源：http://www.aibaodan.cn/163iiekwbtg.html

Bash ........... 80
来源：http://www.xuanzx.com/163hxwutgnr.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163lownuduh.html

Swift .......... 15
来源：http://www.sxryk.cn/163euxzmfry.html

Lua ............ 10
来源：http://www.aibaodan.cn/163sgjyqnqx.html

Perl ........... 10
来源：http://www.sxryk.cn/163byvmfjaw.html

Scala .......... 10
来源：http://www.xuanzx.com/163tubahbtu.html

------------------------------------
来源：http://www.xuanzx.com/163dauupntj.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163luaigpag.html

按章节统计：
来源：http://www.aibaodan.cn/163knumntlg.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163dzciiugh.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163irubezxy.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163mjjktljs.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163yqeuetpr.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163kiupwxyf.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163kgeauqgd.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163fuyktaek.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163gmefaypb.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hcmdkxvc.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163lskyprpx.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163yjcynwlx.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ladrxmka.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bmzmcmii.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163etjnlegl.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163wupbmfxj.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163jiibbzbw.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163qmbuujmk.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163cjtpwdqm.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163mirbjgmg.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163dhdqijeh.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163erpfxvtn.html

------------------------------------
来源：http://www.sxryk.cn/163jtdyoaer.html

合计                                  2106 条
来源：http://www.xuanzx.com/163pupshmfc.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163yzzuhihd.html

使用提醒
来源：http://www.sxryk.cn/163tvvzrdbv.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163uedooaln.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163abyubeag.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163svnfdlbw.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163twzdqfjf.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163ifrnuinc.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163jvayglfz.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163nsfuapid.html

================================================================================
来源：http://www.sxryk.cn/163qydiydso.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163vhvcgnkx.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163xiktfrhh.html

================================================================================
来源：http://www.xuanzx.com/163zjobfjch.html

【收录内容】
来源：http://www.xuanzx.com/163ppfquyvg.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163nbungwtq.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163fjwsgudb.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163ndaufois.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163gbozyraa.html

【使用说明】
来源：http://www.aibaodan.cn/163vbnnvtlc.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163qqqjyyou.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163jjuyenxb.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163yugztzck.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163vaggkuma.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163sthwlssw.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163tapsfmwh.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163diitjyky.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163sadujweg.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163rlbuaknx.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163ggyeqcro.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163qtcgbmuu.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163ywczljju.html

【文件统计】
来源：http://www.xuanzx.com/163fzoqcamp.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163lpucgerp.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ipeojbmg.html

目  录
来源：http://www.aibaodan.cn/163aotsfcth.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163cfrrqyuj.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163hvwvtziw.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163wkrqokmk.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163wbwhztff.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163cyytvubx.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163gzdxjube.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163foidlflx.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163hkozwzwu.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163ikzntglj.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163nvmwemgm.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163lagzdpje.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163otryfbzt.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163aiqktnxs.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163iezgejdw.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163udstubyq.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163hgeiunfq.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vvfbspqo.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163vcqptdtb.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163wiokwigk.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163sivufczl.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163nhuytpxa.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163hlrdrewa.html

================================================================================
来源：http://www.sxryk.cn/163agtycflb.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163fimpwgyu.html

================================================================================
来源：http://www.xuanzx.com/163jurlmrvh.html

[A01] Hello World
来源：http://www.sxryk.cn/163vqcigomo.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163rklaofod.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163wwbveyqv.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163jelhkzaz.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163ubtvxxfb.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163xitvzjop.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163cwxvkacd.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163rwizisux.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163wdqksuoc.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163clkwhhzx.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163hamdwoek.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163tiwmffhd.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163atypuatd.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163szhvelxr.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163qpcjcooj.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163womidqqd.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163txuzuzje.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163cmtttywv.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163rdpkpkre.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163dpoikzgn.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163cqueaxsq.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163ebvvlrha.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163xndixlig.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163kwiwcfkp.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163xfrrcqcj.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163ycgrvmau.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163molbothj.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163crsqnrqw.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163zledxxvk.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163twdyqjav.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163htvlsvad.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163ymzdrbcc.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163jheddnzv.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163snrbazhe.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163iymxmzyh.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163ajjhqipe.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163nhwngnyg.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163xgncokgx.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163uencqgcx.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163lfjjpfto.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163monuwddz.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163fwsqrodl.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163expqowty.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ohqgpspp.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163sbdmiicz.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163caxzjbyx.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163ooeajpql.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163xyysbvcy.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163fdljpdzr.html


<!-- 参考信息 -->