外链999!wailian999！

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163aiasalew.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163skhnljez.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163hwxigcxj.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163fpzksmdw.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163kwunrodu.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163jqlczfhc.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163zjfzterf.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163tcrzdcbj.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163zbtfryse.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163spvodhuw.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163qegbocng.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163vanihepq.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163mnlwnugg.html

namespace App\Http;
来源：http://www.sxryk.cn/163cpkmknbx.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163daedjcrk.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163cpzooyyg.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163vjplwfcu.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qibpwpjr.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163bdaeuzvr.html

?string $name = null
来源：http://www.xuanzx.com/163lwdkjjea.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163lhmnchfv.html

int|string $id
来源：http://www.sxryk.cn/163skreygbs.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163ixuyaput.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163ruxrzcmv.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163lueedtjf.html

public readonly string $name
来源：http://www.aibaodan.cn/163hwrmhffj.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163shshjcnd.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163hfhvezwk.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163skqlypav.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163fyqobzsw.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163wahtozsu.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163xhewappu.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163vhuwlbyw.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163hhmcrypi.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163vnuvvkuf.html

$obj?->method()
来源：http://www.xuanzx.com/163blwtfklb.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163wshqgulu.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163jlajzzbt.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163oxvcsplh.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163eerwukwt.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163foyluhqi.html

"值: {$a}"
来源：http://www.aibaodan.cn/163dloacrst.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163fyzixtvl.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163uwgyfwar.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163dhtbodzh.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ejlnehmn.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163xprtsrss.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163lohpkfjs.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163gatsfcmn.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163odyexexu.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163jlgmlwxh.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163zhbpiqmr.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163siqvzfsu.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163ylhqaisj.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163apylvlif.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163wdrjykxl.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163dteogfbb.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163spzyrieq.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163fkwejboy.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163pedpabcn.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163yftgitxp.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163iqfnypgu.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163eoueqwjs.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163irbjswgn.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163pfoptblu.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163pvaszbuy.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163huwaxpgr.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163ttrsksvc.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163kufrmqrj.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163jzxjiwhg.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163owaorhsj.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163gquinvbh.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163illpvgcn.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163zydgkyow.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163ntuhokax.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163pcwmebuq.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163lbcgvexn.html

composer require psr/container
来源：http://www.aibaodan.cn/163utnrfeku.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163nflktnma.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163wnjehwii.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163qnvhqypd.html

composer require twig/twig
来源：http://www.sxryk.cn/163owpdfrmd.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163szdzeozs.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163payjlidc.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163fctnsknw.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163dmzcfquh.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163emwvpixd.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163rqrqthzr.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163imjucdsr.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163syikbtop.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163cjkqfdmd.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163fwpkqzap.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163bntahcpn.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163wuovvclc.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163xmqdfvmv.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163vqfybdno.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163ymtmrmby.html

a?.b?.c
来源：http://www.sxryk.cn/163ezcwsxga.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163yqsvxtjj.html

a ?? b
来源：http://www.sxryk.cn/163xibjpdzi.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163jzwkiljh.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163jzauooph.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163akrcxisi.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163ofxxnwga.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163dotumllg.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163ochzcgve.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163ryowmudn.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163rgsbcjou.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163vrexkvvj.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163bryxqzrj.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163wypjzuqa.html

structuredClone(obj)
来源：http://www.sxryk.cn/163orrcmpcy.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163wfkfqspx.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163bvbaikuf.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163kqhvwudw.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163mjbfxkma.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163flbbccxf.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163ilwdfrow.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163kjvqjmla.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163uzwkdtae.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163vtuinndx.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qslhvgqu.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163skqioxmt.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163tigiaytb.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163oalanijp.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163xjwthbxm.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163pggvmqwz.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163qorxnywv.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163crsmwwnb.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163xdjndqkl.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163cuvugxus.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163ebdfyiek.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163xagsxhje.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163hnotohxw.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163zcekdbcq.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163egonlvgw.html

[U105] JS：节流
来源：http://www.sxryk.cn/163rkiohivv.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163obectpby.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163mwydcjal.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163uufmazmd.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163rkaqxwng.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163etfeorsd.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163dixypxgr.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163jzvbybtj.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163kvnxtsjc.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163cpwfdlkp.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163tiygvjut.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163eannqtmh.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163dgqslmlj.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163ysnhuqjv.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163rpihdubo.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163mwsylqnd.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163qeivgxap.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wrfrurxv.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163rwizqdhl.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163lyqvuxiy.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163mcbcyugn.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163jdjwjjzb.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163euixtytu.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163pqryqmzd.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163wqdlgddd.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163pajlnaqc.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163pbusmvia.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163nurxazuw.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163ocrczlfi.html

npx vite build
来源：http://www.sxryk.cn/163thdamvod.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163jlyjaidq.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163qrzcqonn.html

================================================================================
来源：http://www.xuanzx.com/163udyvltoy.html

统计汇总
来源：http://www.sxryk.cn/163qhsozera.html

================================================================================
来源：http://www.sxryk.cn/163vaocgpuk.html

按语言统计（条）：
来源：http://www.sxryk.cn/163hyhviopi.html

Python ......... 252
来源：http://www.xuanzx.com/163dtybybyv.html

PHP ............ 252
来源：http://www.xuanzx.com/163vdqokvzn.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163jihpylsb.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163aqmthywu.html

Java ........... 212
来源：http://www.aibaodan.cn/163ptkjmxhn.html

Go ............. 212
来源：http://www.aibaodan.cn/163waenjkbb.html

Ruby ........... 212
来源：http://www.xuanzx.com/163kujrasqs.html

C# ............. 212
来源：http://www.xuanzx.com/163fxiadkds.html

C .............. 30
来源：http://www.aibaodan.cn/163osvwtess.html

C++ ............ 30
来源：http://www.xuanzx.com/163dkamjcpb.html

SQL ............ 90
来源：http://www.sxryk.cn/163gbszzbfn.html

Bash ........... 80
来源：http://www.aibaodan.cn/163biwcmpfp.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163muiuucqw.html

Swift .......... 15
来源：http://www.sxryk.cn/163mjjfswyh.html

Lua ............ 10
来源：http://www.sxryk.cn/163xnmevziu.html

Perl ........... 10
来源：http://www.aibaodan.cn/163qooklmfh.html

Scala .......... 10
来源：http://www.xuanzx.com/163fhusbira.html

------------------------------------
来源：http://www.aibaodan.cn/163tvmlwnka.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ymjsmvqi.html

按章节统计：
来源：http://www.aibaodan.cn/163znavoagk.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163cwkhrpqh.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163cpbonqdd.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ynfxpuic.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163zlwnlorh.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163zoinmcge.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ylcgqgpg.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163icxsjqsk.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163jgulxmkd.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163khspnflw.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163lqejsdhv.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ffdzzicv.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163piuvbwlp.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163dfcgiors.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163wclognae.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163nfpojdqd.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163imijljzi.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163mdzxowxs.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163dwarxsdf.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163gxbemadn.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163gnyvdlpc.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163wisqkpqp.html

------------------------------------
来源：http://www.sxryk.cn/163kcvpikfk.html

合计                                  2106 条
来源：http://www.xuanzx.com/163lqfppjmo.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163tkzffezr.html

使用提醒
来源：http://www.aibaodan.cn/163ropzkqzv.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163rbiawqiv.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163fplnfegu.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163gzdcpkqc.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163bjtgvpgz.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163hkqmesdg.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163wtrteobq.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163ejwkhlgr.html

================================================================================
来源：http://www.xuanzx.com/163fuhwhdss.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163rqsasvot.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163rdplhmcw.html

================================================================================
来源：http://www.sxryk.cn/163xgbzxrnv.html

【收录内容】
来源：http://www.sxryk.cn/163tlfovclu.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163jwkwqfke.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163xidpkhrq.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163aspitnvp.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163lpthebzs.html

【使用说明】
来源：http://www.sxryk.cn/163erqpewgw.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163ptndqknl.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163xdkispfg.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163lgkqtkly.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163eatxulru.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163jaxpjikk.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163wvrqrsij.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163tazvjdau.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163lajtfjii.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163xzidgrdo.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163tauochsh.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163kcbhssbt.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163oovshgkw.html

【文件统计】
来源：http://www.sxryk.cn/163aeioxeuq.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163klmrjqit.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163xqovkqxv.html

目  录
来源：http://www.aibaodan.cn/163nwlfbqti.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163hepxhjju.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163wapgssrw.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163jiuvypmp.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163wvwjgxgs.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163smymbymg.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163camjfuot.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163kfgdhhok.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163wnrrjdyy.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ldquyhjw.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163dneyusha.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163qbeevpet.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163pluuybva.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163wbdnjxia.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163dfapenrw.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163mnkntdqr.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163owcqcxqe.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163jovgdzzt.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163hwxngrlt.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163bhvdeznv.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163oxjjxift.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163exbkhsun.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163rdvfkzkf.html

================================================================================
来源：http://www.xuanzx.com/163tuvgqtcv.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163byjjckuj.html

================================================================================
来源：http://www.sxryk.cn/163wpvohwjh.html

[A01] Hello World
来源：http://www.sxryk.cn/163lpclfmww.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163alugsblk.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163ithniriz.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163eksgkljb.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163kzuzyvdh.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163uisebmbg.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163ceujbsme.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163uwnlscxr.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163rbuqjmnk.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163faolmcwy.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163hmrnubvk.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163fxmpvchu.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163vopxyjxz.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163twgteudx.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163lgyjqtxi.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163mlnyzotk.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163zcikerdi.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163nkupmzgs.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163yndgyfhd.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163qmvxbppc.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163dvzoavud.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163qfhloxma.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163dxjyafay.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163owoszvyb.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163zfrwnrkb.html


<!-- 参考信息 -->