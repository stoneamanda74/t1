外链999!wailian999！

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163gbtcqnxz.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163jpwjwztl.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163uywkboqe.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163oeuarrcp.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163miuavaut.html

namespace App\Http;
来源：http://www.xuanzx.com/163nuypkfky.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163gyjhwibu.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163zxitupma.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163btzjddpr.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163iouandse.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163bdnljnbs.html

?string $name = null
来源：http://www.aibaodan.cn/163iuemuyvd.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163ryuvkuzw.html

int|string $id
来源：http://www.sxryk.cn/163hxswclwh.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163mwdbvhej.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163fglebpcg.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163wnpqxcbd.html

public readonly string $name
来源：http://www.aibaodan.cn/163lfkecjqj.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163uqcfdxgj.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163wonkhpqt.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163shawlulj.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163hpxxgyvo.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163ixiluibg.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163ilvjkern.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163uqftkdnf.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163gjvnijkh.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163njwhxjdc.html

$obj?->method()
来源：http://www.sxryk.cn/163sucjiwkn.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163gtbuhvhl.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163plxifnqw.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163yqgzgzkw.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163kgiqcyba.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163cipmkvkg.html

"值: {$a}"
来源：http://www.sxryk.cn/163xnmqrebc.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163gkabbtqx.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163itpmjmue.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163wwaeaeld.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163alxcpitc.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163sdwmtkvp.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ghyscmav.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163lvbmwefg.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163vezpdxga.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163zdodvmxv.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163tbzdqxsd.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163lqlhhxur.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163gajiwcaq.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163jsljqpde.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163ukwesnps.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163tueimotq.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ohnmebuo.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163hhjwrbej.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163vonzrpeu.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163fnpfbjlb.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163gwnmweoh.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163pzozelmf.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163fcanjmsg.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163jflkgtrx.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163cogktxvy.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163xlgdllhu.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163nphmufvv.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163lkpincmf.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163mevspcqb.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163inanaexz.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163gupupnxz.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163volticvn.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163njlvgmss.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163tuafcgcx.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163zfsvcxjf.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163hykngagv.html

composer require psr/container
来源：http://www.aibaodan.cn/163xnobrywo.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163cnfrneqj.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163yjcazphl.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163cwxsnjnp.html

composer require twig/twig
来源：http://www.aibaodan.cn/163gtkyccod.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163clpxgzou.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163wyzkjmxs.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163gevxxust.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163ibqknyou.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163ymloseeh.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163gwllepcs.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163vuxbwemq.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163drwpwsca.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163yatsrmch.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163syumttal.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163vlabjiji.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163tjkxpjdi.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163ragvjgih.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163fxhtoaxf.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163vqfwndwd.html

a?.b?.c
来源：http://www.sxryk.cn/163xvipntiv.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163xiusehxz.html

a ?? b
来源：http://www.xuanzx.com/163fewnxcin.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163kfliyogr.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163abiulrwb.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163gxatrcou.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163pmwiexer.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163aszywjjs.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163winlzkzy.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163oluioklj.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163efdwmqyz.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163gxgqpkyw.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163kcqckare.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163qybuxyge.html

structuredClone(obj)
来源：http://www.sxryk.cn/163qsxlofrx.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163ygvuazup.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163fbietkyy.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163kmztuadh.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163dpaejnyo.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163rhvoiyiw.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163odehhjih.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163dgvocjse.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163cgrbrjrz.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163zuecuuuu.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163dbfzmwre.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163hyifolte.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163ihnonxgs.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163gkfmcdmn.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163gtetbxty.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163ddgcnysl.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163gvtbcnbo.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163xyrkxexp.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163yvdrdcyx.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163tmgbwedx.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163opmlmsvj.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163bollymbq.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163vlwlcdcj.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163ybzhnsan.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163mezlxfwa.html

[U105] JS：节流
来源：http://www.sxryk.cn/163esspfafy.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163zrfnjogi.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163szuruxxz.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163vkfswqnx.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163wxduvzex.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163pigkrtgd.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163cpwzqhxt.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163cysperfq.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163gjructhq.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ksuuauyx.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163vecmkrzo.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163zvuwlevh.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163nnobbhxd.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163owxewpeh.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163mbceulaa.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163aqqtaivw.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163fexaelgt.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lgofbruv.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163kurjlagw.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163xczqfuko.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163cbniinsw.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163uptfhhvw.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163xccjjfbv.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163ihriaifc.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163xrafqdlj.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163rimcieok.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163jwvsyprm.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163ytxlteos.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163auzoqiav.html

npx vite build
来源：http://www.sxryk.cn/163geuciauh.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163jwgdavfn.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163hsufszrr.html

================================================================================
来源：http://www.xuanzx.com/163rkldupkp.html

统计汇总
来源：http://www.aibaodan.cn/163oxigngwu.html

================================================================================
来源：http://www.sxryk.cn/163kvmgcink.html

按语言统计（条）：
来源：http://www.xuanzx.com/163tqksrkvi.html

Python ......... 252
来源：http://www.sxryk.cn/163ebjdyjjh.html

PHP ............ 252
来源：http://www.xuanzx.com/163pylzagxs.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163naghcwki.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163hkckmahb.html

Java ........... 212
来源：http://www.sxryk.cn/163dfdeqtdq.html

Go ............. 212
来源：http://www.sxryk.cn/163pmzbkyel.html

Ruby ........... 212
来源：http://www.xuanzx.com/163shqwkqbu.html

C# ............. 212
来源：http://www.sxryk.cn/163wnlbifim.html

C .............. 30
来源：http://www.xuanzx.com/163degjgphn.html

C++ ............ 30
来源：http://www.xuanzx.com/163pgkssfok.html

SQL ............ 90
来源：http://www.aibaodan.cn/163owdyzzcy.html

Bash ........... 80
来源：http://www.sxryk.cn/163izvomqxk.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163bcficmkg.html

Swift .......... 15
来源：http://www.sxryk.cn/163vfgwlutx.html

Lua ............ 10
来源：http://www.sxryk.cn/163olhvkofs.html

Perl ........... 10
来源：http://www.xuanzx.com/163kmedxdla.html

Scala .......... 10
来源：http://www.xuanzx.com/163vxrrxhtu.html

------------------------------------
来源：http://www.xuanzx.com/163dinsxlns.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163qtzorope.html

按章节统计：
来源：http://www.aibaodan.cn/163sngzvcul.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163wvwkacvm.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163ljdgkfws.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163icvwijxp.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163zuwvpapf.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163qltlaifs.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163azryeuqp.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163bemtyivf.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163prpkgoyk.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163wmmntkcn.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163nlxhkjhc.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163uqgmuybd.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bmgwkqph.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ozlsgcfz.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163qkjzyydv.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163ggdkimnk.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dspmhthx.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163mebdwopc.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163yelzmqxr.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163syxdrtid.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163sotvxwrh.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163wngfowwo.html

------------------------------------
来源：http://www.sxryk.cn/163ygbynulr.html

合计                                  2106 条
来源：http://www.sxryk.cn/163izhfavis.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163hohdxwrx.html

使用提醒
来源：http://www.aibaodan.cn/163limagkzv.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163htrphgqs.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163sbakaamq.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163sqpeljai.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163evabmxvq.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163kzoyqidd.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163zwawgdpj.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163hixxrifi.html

================================================================================
来源：http://www.xuanzx.com/163sozydhup.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163suzbepaf.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163emitpdwn.html

================================================================================
来源：http://www.sxryk.cn/163lewokcza.html

【收录内容】
来源：http://www.aibaodan.cn/163zgejihnz.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163uzouzhqe.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163sjbmfhkx.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163kyiiiiom.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163ovwrpjgx.html

【使用说明】
来源：http://www.xuanzx.com/163antrpzru.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163teobtdeq.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163lepxzlgr.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163mqbytefd.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163zlxjwuiz.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163jlwqgmmr.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163lslupxxq.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163drayvuvh.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163mnwciuqn.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163aokcrbwy.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163fsbwabza.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163mxomlpdv.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163iyeavjgf.html

【文件统计】
来源：http://www.sxryk.cn/163kkcqdpjb.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163pmfiuhnm.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163ywkvputh.html

目  录
来源：http://www.sxryk.cn/163hparrexj.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163suxlwuhd.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163epttjskc.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163hbmxrzds.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163cqtymibu.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163xahwpoer.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163cmwqofcn.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163ntknxzuv.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163qobzsrvo.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163nglphljc.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163pepdodys.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163aibkrstl.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ghssjrup.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163aioadgbu.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163gkcmwunx.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163juwsbhso.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163qbvhljvi.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163lgdbwgut.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163wdicmody.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163tkohaevl.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163waqotbqe.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163dovoyrqq.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163qwuqwenu.html

================================================================================
来源：http://www.xuanzx.com/163alzhcfzn.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163flrotkdp.html

================================================================================
来源：http://www.sxryk.cn/163hujkhdlk.html

[A01] Hello World
来源：http://www.aibaodan.cn/163bbdwnfgv.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163ictwugoa.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163mgsrjwwu.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163kbpkioac.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163gckhqewt.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163soshehxx.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163fjbclogq.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163afsrqygf.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163axfjcnzo.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163lsgyfbdn.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163gimjzbed.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163vlaihxyc.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163tmcizsvh.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163vebkntav.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163xibdyytb.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163yvwuouif.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163hoqnwyle.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163uvlxczyt.html

[A03] 常量定义
来源：http://www.sxryk.cn/163qtmpuhrt.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163xidptqik.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163nzrgstab.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163xphognes.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163tzzspmyk.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163twptiamc.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163lrdmmzfi.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163ajhueovx.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163fyomawzz.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163okquoilg.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163ygzonybx.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163pixsslhr.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163rsibsccc.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163fsnebawn.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163idlqluuo.html


<!-- 参考信息 -->