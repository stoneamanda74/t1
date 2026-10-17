外链999!wailian999！

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163lhlqonlz.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163oytnzdjq.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163vqsjnxic.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163joxuhlvg.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163pygwsseh.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163fdliffoa.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163xnatkzjf.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163fokhkbtx.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163aaemcftw.html

namespace App\Http;
来源：http://www.sxryk.cn/163glppwhcv.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163uvzlebet.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163pkhevnxo.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163bhgxnstu.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163zpsmjaor.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163dnbgnwxz.html

?string $name = null
来源：http://www.xuanzx.com/163elcooogc.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163olrvduvk.html

int|string $id
来源：http://www.sxryk.cn/163vggslasp.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163pydnsmji.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163cfywdmbr.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163hglwguyb.html

public readonly string $name
来源：http://www.xuanzx.com/163wafjweuc.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163lugtmcni.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163dvbdzcnf.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163piebcyda.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163wjnglgoy.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163nttoijde.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163vezmybjq.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163cybjgxrt.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163euelgouf.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163wszqutgf.html

$obj?->method()
来源：http://www.sxryk.cn/163irabyesl.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163abbnrtnc.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163vbirybii.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163betkyaah.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zekqfjwq.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163blzdzhlu.html

"值: {$a}"
来源：http://www.sxryk.cn/163yxtnryyp.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163znczaepe.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163xwtttjhc.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163dynjbdpg.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163luemliov.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163wuwvlkug.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163hclqcfhq.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163yknpcoxi.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163qhdyihsd.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163ooicjtev.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163fvwkojbn.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163eiwkgktr.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163melasrbp.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163uzfantej.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163wkbrhcqw.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163lgqttubd.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ftvmlxmq.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163shmzqndl.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163osxuwodc.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163qoponqea.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163gbvqgrof.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163zivscmxh.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163zipkwvul.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163pwvfjhof.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163nzmtncfk.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163ysymtkgq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163fqhfuiea.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163vidbofjh.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163vcrukdfu.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163yahbnnxu.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163dxythurk.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163vbjmqrts.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163ohrpyqnz.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163ekbjhyya.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163oklggjtm.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163zsukosyz.html

composer require psr/container
来源：http://www.sxryk.cn/163pazrymvm.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163moizgkar.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163kmqokzzs.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163btjbvqup.html

composer require twig/twig
来源：http://www.aibaodan.cn/163dlhcbvxw.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163jwawjgbt.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163khfbubhs.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163bplyvudo.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163ecqbedqn.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163tlxkmzcq.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163npgtcwdf.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163xruxpvzi.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163tgdcjpsc.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163dnxjlbfu.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163swqtdmwo.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163tppalajc.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163aumodpqz.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163yhoniaks.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163zfeeghrg.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163zhzzficz.html

a?.b?.c
来源：http://www.aibaodan.cn/163ivdvmfdy.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163kbuzqtqu.html

a ?? b
来源：http://www.sxryk.cn/163fzhspsud.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163ilhsxaof.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163pluqayau.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163yvjyxods.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163ypyrbihn.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163bscnfxzl.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163evqvvqmv.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163ntamavcy.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163nxljnmwx.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163wuvdreeg.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163cdasjsyc.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163bncyulqn.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163rndkgyhd.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163xsrvthjw.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163ktuftjmu.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163eyabtmcf.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163ovnjjhir.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163edzoqksz.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163oqroyomq.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163tgjxrcum.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163oztiubow.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ypbzakqw.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163rcetgduc.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163yfqezhds.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163yyqhifxa.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163rdgoxfhr.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163jdlndibz.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163mymcubad.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163ekibghmd.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163rgdpgmsz.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163ipvrdxdz.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163xiomjxjv.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163mtouuryu.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163seujokgk.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163jqnkeyhn.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163kunqwlct.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ofousslz.html

[U105] JS：节流
来源：http://www.sxryk.cn/163dzgnawmi.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163nrkhcdoz.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163jskgbvet.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163yuynwqej.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163srdlwqym.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163ggsjzebm.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163tgcpkxuf.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163quyeolgd.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163tvxspptz.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163wwohqfhz.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163xkqccebn.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163ufghudqb.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163qkjswzus.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163agesvqhr.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163viujqtep.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163icsyuqii.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163qwudfntp.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163srgmflfr.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163bvvvsngd.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163kgvvxqhr.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163wgfgucge.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163tswkjakm.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163cxuoroxc.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163asmervqk.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163wgpywfea.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163qxibxkxz.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163qtzwvmfb.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163indtausu.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163rijtslsc.html

npx vite build
来源：http://www.xuanzx.com/163yxhkoksr.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163yhshyyqd.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163dysoogns.html

================================================================================
来源：http://www.xuanzx.com/163jjvcsepj.html

统计汇总
来源：http://www.aibaodan.cn/163ozhbalfb.html

================================================================================
来源：http://www.sxryk.cn/163qfftovqe.html

按语言统计（条）：
来源：http://www.xuanzx.com/163efciunga.html

Python ......... 252
来源：http://www.sxryk.cn/163rtlumtoc.html

PHP ............ 252
来源：http://www.aibaodan.cn/163pdagunnf.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163knulhayu.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163eyamggrr.html

Java ........... 212
来源：http://www.sxryk.cn/163vsizdejh.html

Go ............. 212
来源：http://www.aibaodan.cn/163qjpnlsxq.html

Ruby ........... 212
来源：http://www.xuanzx.com/163ijnbiums.html

C# ............. 212
来源：http://www.aibaodan.cn/163khtvebyi.html

C .............. 30
来源：http://www.xuanzx.com/163dmbcooeq.html

C++ ............ 30
来源：http://www.aibaodan.cn/163smgoxnpw.html

SQL ............ 90
来源：http://www.xuanzx.com/163rmxxjwyc.html

Bash ........... 80
来源：http://www.aibaodan.cn/163hisfgaev.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163rlerqunj.html

Swift .......... 15
来源：http://www.sxryk.cn/163nqgojceg.html

Lua ............ 10
来源：http://www.sxryk.cn/163exhmmtwu.html

Perl ........... 10
来源：http://www.aibaodan.cn/163vcufyezf.html

Scala .......... 10
来源：http://www.xuanzx.com/163crfbjela.html

------------------------------------
来源：http://www.xuanzx.com/163racztayu.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163ypbffnrj.html

按章节统计：
来源：http://www.sxryk.cn/163dckfgyhi.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163hiqkgjpw.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ygcydhpz.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163qsofseke.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163dgvhnrox.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163xchmgzxk.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163sudmpelr.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163tbfjojro.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163cmcbkjne.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163zbfcnwwr.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163uxbzeuwz.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163wqsmehha.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gmcajndz.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163jmfjpbiq.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163qrrmieip.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163chydxpmp.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rlfqzmsv.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163buojhips.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163hpwfdkck.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163fyrtcwke.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163tslkweyz.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163nedfnskr.html

------------------------------------
来源：http://www.sxryk.cn/163dzfavbzo.html

合计                                  2106 条
来源：http://www.sxryk.cn/163yqhytobb.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163pkxcmnad.html

使用提醒
来源：http://www.xuanzx.com/163prdaqysg.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163gxotphdz.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163pdtaglxk.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163yaftkfys.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163coddmnol.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163yncunqml.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163phwokdju.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163vrxepxzw.html

================================================================================
来源：http://www.xuanzx.com/163ebnfwwwx.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163pqitmsaj.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163sqbteqfa.html

================================================================================
来源：http://www.aibaodan.cn/163pkyderbn.html

【收录内容】
来源：http://www.sxryk.cn/163vcbqaibi.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163lufxziat.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163tooijkfn.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163qsskcnal.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163ynkbrupk.html

【使用说明】
来源：http://www.sxryk.cn/163qxbmydoq.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163znsxsxsv.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163fopkaqif.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163bixondag.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163oyrwsphx.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163aewwxqjz.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163cmeiorxl.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163lnxiuxxj.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163klsipuvn.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163jdvrvwxf.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163hnazjwdd.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163fkeamdim.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163fiwfuoot.html

【文件统计】
来源：http://www.aibaodan.cn/163nbwpmtme.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163etxglfjp.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163gyakgeso.html

目  录
来源：http://www.xuanzx.com/163yrisswne.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163fizxdmog.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163fkadldwx.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163cexgjqna.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163gyezjodf.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163hrkihayt.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163wkqxtmhp.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163byxhcdtg.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163aoafemnd.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163tkucsytp.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wcbzcctl.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163lbosevdz.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163dddetmzx.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163kkpnvyvy.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ryuarluc.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163hbzzrkxi.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163qnzdfbvq.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163opfjodhj.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163gyisqaoi.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163odzdkkaq.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163qbzyypaf.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ffnkswfw.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163xecjafex.html

================================================================================
来源：http://www.sxryk.cn/163jeufvkky.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163rphkdkne.html

================================================================================
来源：http://www.sxryk.cn/163scpdqlov.html

[A01] Hello World
来源：http://www.xuanzx.com/163kqldkjhg.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163bnrntexc.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163dhtubodg.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163efjnmilk.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163ilshuihk.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163rnelnyed.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163eazeljdt.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163joflpidk.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163yzryxojj.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163hjkcaqof.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163lzkpotsg.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163qfhsyhfr.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163hqqzggjx.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163xmwraxng.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163dufbkmlz.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163iqvuahww.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163wfznryyt.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163vfsspuwi.html

[A03] 常量定义
来源：http://www.xuanzx.com/163fcypbwra.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163kqegclps.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163zoaygolm.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163ogicoynj.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163smpbeaki.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163gkqzpjkq.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163leoognty.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163ssvppcpg.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163btodxhdt.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163vdcjmfol.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163rdaygggz.html


<!-- 参考信息 -->