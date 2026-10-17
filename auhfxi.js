外链999!wailian999！

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163lzgkofiw.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163yikvgree.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163aynicaea.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163pzshjvwt.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163xakbwouk.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163ycwoizpr.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163ffihbhit.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163zcvffswp.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163lsolcdbk.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163jmmiwffw.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163kvyegufg.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163nmjnuypm.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163xeyetbgn.html

namespace App\Http;
来源：http://www.xuanzx.com/163erfafgqu.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163aybheecs.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163rezflfrj.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163kkhvimxu.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bkssokqw.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163brgvsvgz.html

?string $name = null
来源：http://www.aibaodan.cn/163hgzmnsve.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163pqkijaxa.html

int|string $id
来源：http://www.sxryk.cn/163tlyzfoto.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163qcbactua.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163jqqflxei.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163kzecfurk.html

public readonly string $name
来源：http://www.aibaodan.cn/163yefmjana.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163ryyryzlr.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163rasplvcc.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163zddjrbnp.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163ckumdfkr.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163qjvylqmw.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163nktqxigh.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163pptwxqja.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163xxuaswqn.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163schmcgwx.html

$obj?->method()
来源：http://www.xuanzx.com/163fgqmzenb.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163spfbqdlk.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163yuulcdrv.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163ynfxblwy.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163thehoyjf.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163bkvjxyay.html

"值: {$a}"
来源：http://www.aibaodan.cn/163xlgrczcn.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163poplsmdc.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163runmmfbu.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163oibjtxft.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163dxkoacpu.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163zqgydqzd.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163hwckahko.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163llgzewke.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163iozuuzgx.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163htpoyfju.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163kbhvycyy.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ohhsmgfn.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163seasvzul.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163yivpjgtm.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163azlxvtif.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163qryscamm.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163fghhpxmk.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163msbnbuut.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163unsvbdoi.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163mqbkcywg.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163mfbgxzea.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163posplyta.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163giupieaz.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163btwukcsl.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163wfutovdn.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163dyetjtdh.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163qclkltmx.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163ygokdwoa.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163kvdejasx.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163fdsqboyx.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163edcibtwi.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163tflhxowg.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163adycbzgl.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163lbpxccmh.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163azlwnbah.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163yaijzvxw.html

composer require psr/container
来源：http://www.sxryk.cn/163zagsnwhm.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163tlqscrqp.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163ecvnhbqt.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163iihinzeo.html

composer require twig/twig
来源：http://www.aibaodan.cn/163wbiajeqv.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163eivrvoue.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163gxvnlyjb.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163oezvzgpk.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163nyxkhztn.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163dhfmbdus.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163ojxeniun.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163pmqzftgw.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163qikimwbu.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163nwtjbhgn.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163ctnfpjpb.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163rblwamme.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163vgxlappx.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163seyewxyy.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163qerptehd.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163prnkajon.html

a?.b?.c
来源：http://www.aibaodan.cn/163tjtheqaq.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163alkxfmcr.html

a ?? b
来源：http://www.xuanzx.com/163gzppyrfh.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163zhtdnpvx.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163ijxpeifc.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163acnffhmm.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163fubwzxtj.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163sjipzhun.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163nctgqswe.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163rehogvzq.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ztqlvvye.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163nmziorzd.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163zsiikpkn.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163fapjqehu.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163ybikychw.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163bibrfswf.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163hurtucip.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163ivkgswmc.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163gcxajgaf.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163kjnztoid.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163dtunfnoe.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163qjznrieo.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ypzecgai.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ilcsmvwo.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ewrbzvak.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163otuhqxew.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163zaywhaqr.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163lrzfmduv.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163tqtczwcw.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163oouezunk.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163kyjjzman.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163stwzfync.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163kdzzxove.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163mofxoryx.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163sfjrzscx.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163gptwrpag.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163grjiqqnq.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163dlnvdnvk.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163gghusewq.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163omdigpdt.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163faiimnyq.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163jnhrehyd.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163lqktojug.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163sojdrzje.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163bijurqvk.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163dqtcinjf.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163vxiedhkm.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163sdvhvbyi.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163tlaftrsp.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163rhwymphm.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163badjtlvm.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163vbnnbjrw.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163sttigtyr.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163ccnjvybg.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qeabjays.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163jbuiqydg.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jspmjosl.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163xqdsplzu.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163xaiyapop.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163pftyjsnk.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163hfzlhigk.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163ghrhvwik.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163whtsvvky.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163pyufnavu.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163vsyscord.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163ragbpcya.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163ciuysqmg.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163pdpzvqvv.html

npx vite build
来源：http://www.aibaodan.cn/163gdbaladk.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163gnkscntk.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163pkzauwjc.html

================================================================================
来源：http://www.sxryk.cn/163qlzjzdcg.html

统计汇总
来源：http://www.sxryk.cn/163hyqohqqe.html

================================================================================
来源：http://www.xuanzx.com/163ibbkbpco.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163kndwtoke.html

Python ......... 252
来源：http://www.xuanzx.com/163fgruooac.html

PHP ............ 252
来源：http://www.xuanzx.com/163wxjimzqn.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163xmfajpjl.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163uvdjmikt.html

Java ........... 212
来源：http://www.sxryk.cn/163vgwptznb.html

Go ............. 212
来源：http://www.sxryk.cn/163cesvzbqu.html

Ruby ........... 212
来源：http://www.xuanzx.com/163krrhexyc.html

C# ............. 212
来源：http://www.aibaodan.cn/163hulbapaf.html

C .............. 30
来源：http://www.aibaodan.cn/163grcmjjex.html

C++ ............ 30
来源：http://www.xuanzx.com/163jdnggxxu.html

SQL ............ 90
来源：http://www.aibaodan.cn/163kxrpohti.html

Bash ........... 80
来源：http://www.xuanzx.com/163ywghltxz.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163zrxyhcqi.html

Swift .......... 15
来源：http://www.sxryk.cn/163elvdtqmf.html

Lua ............ 10
来源：http://www.xuanzx.com/163hvylqdbp.html

Perl ........... 10
来源：http://www.aibaodan.cn/163ythnmehh.html

Scala .......... 10
来源：http://www.sxryk.cn/163xxcuhtsp.html

------------------------------------
来源：http://www.xuanzx.com/163zzprheei.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163qfhoooqe.html

按章节统计：
来源：http://www.aibaodan.cn/163ianaqtqb.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163dsyqwmml.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163nlqeousp.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163hyhvmmcg.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163mrneprmt.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163tecwydas.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163pxbdbnlk.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163bkualhwc.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163wlmnujpy.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163hsaauehd.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ohitxvxb.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163hgwuqwij.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rglbdfrw.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163blkbymqt.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163jetfusxs.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163ixzemdua.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qhwhhqtw.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163cwvxntxx.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163mrnffhrd.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163ymlknqow.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163xpwxszik.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163qngfujki.html

------------------------------------
来源：http://www.aibaodan.cn/163byyxdhbf.html

合计                                  2106 条
来源：http://www.sxryk.cn/163qyldzhis.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163pfrwnytb.html

使用提醒
来源：http://www.xuanzx.com/163vtvhoyiv.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163nojbmnuu.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163tjusbhka.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163mehgazhf.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163qmfflwwm.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163aeuravtp.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163uroeyshr.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163xmmckuyk.html

================================================================================
来源：http://www.xuanzx.com/163vrovndlw.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163vtsjulms.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163cmabumqi.html

================================================================================
来源：http://www.aibaodan.cn/163eygyatgs.html

【收录内容】
来源：http://www.xuanzx.com/163myzlzdes.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163doteksae.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163ikuczcvb.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163mprntcgp.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163dgnvuibi.html

【使用说明】
来源：http://www.xuanzx.com/163azgxddxn.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163uaeoeqge.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163cjkeurzl.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163yugolbrt.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163rrdidgwt.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163wwyyjcde.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163jibubrnz.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163lwoaacep.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163blgvgxih.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163atlhvarx.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163rgxduxlb.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163hkbdbyhb.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163vhgxtacz.html

【文件统计】
来源：http://www.xuanzx.com/163sqkwuynm.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163djnypzug.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163ibeggino.html

目  录
来源：http://www.xuanzx.com/163xaxthavr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163qpiwftln.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163pzduqrwy.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163owknnumk.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163olljixqe.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163peksajwv.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163sjxpcgim.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163dfjwdkef.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ocbqkrac.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163mrhxzdft.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163oedexqjo.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163nblpvdua.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163imwqhhsx.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163dewofwcc.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163zevhqlss.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163okfpqowo.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163hdrokmcc.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wjwjnrzp.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163wzczcipz.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163hwijeafq.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163uvflbeyh.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163liloklgg.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ucoeamrq.html

================================================================================
来源：http://www.aibaodan.cn/163tsevzsro.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163noyzcbmg.html

================================================================================
来源：http://www.xuanzx.com/163ijjupodi.html

[A01] Hello World
来源：http://www.aibaodan.cn/163shnnsnww.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163evnsfuun.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163jidlltts.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163tvwjnqhw.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163uzmowrxp.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163iykihykg.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163srirzocy.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163sbfenlyo.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163ezmyyebw.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163uiudqhdw.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163gaexxbii.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163sqwqbalv.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163wheugkfz.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163eugrilta.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163wdfevnvp.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163rbfnvwbc.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163zxrquihe.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163dphfjzzq.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163omwhuonc.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163jkvkepoy.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163yfyzcrrs.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163dyuicalj.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163qjloolax.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163jvwwvvoh.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163zrvqklyq.html


<!-- 参考信息 -->