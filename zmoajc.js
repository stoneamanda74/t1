外链999!wailian999！

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163viynblfl.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163zzlffxbr.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163joextvyj.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163jficmpjb.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163hhdowpwn.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163yiwrcyta.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163sedrggwx.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163ejweunlj.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163bvlijnyv.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163phrnpgot.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163lwakulbl.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163krfccwgt.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163noskbcnj.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163psiccoue.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163rpsosuxz.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163tzjuwemh.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163ameobjwv.html

namespace App\Http;
来源：http://www.aibaodan.cn/163cvkwhmmg.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163qydbnaql.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163zktcbsif.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163pfyrltrs.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163mgxzipcr.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163mrbrhcpq.html

?string $name = null
来源：http://www.sxryk.cn/163wuxedjiy.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163wvjuckcr.html

int|string $id
来源：http://www.sxryk.cn/163fcmbvhlh.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163zuuicnam.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163rsocjhip.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163ewinmlhk.html

public readonly string $name
来源：http://www.aibaodan.cn/163zcdcgrgk.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163gbtitwkm.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163qfmynfza.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163mdeouhga.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163rmgyetvq.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163dhhzgzqm.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163vbjlizhb.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163lfulksqj.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163ltoypmie.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163cnloqwvx.html

$obj?->method()
来源：http://www.sxryk.cn/163nbazuscu.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163ktzmvsmb.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163wkxicgrn.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163xfwphvna.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zhnbvexn.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ourzbqgw.html

"值: {$a}"
来源：http://www.sxryk.cn/163ayfkiwlq.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163pnxzsexm.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163xputndam.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163fmhvauhu.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163fdkdhobn.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163ktamvkev.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163cipcwkfi.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163fjdyobwa.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163pwqpfdnz.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163zbdasgob.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163mbgdaybm.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163lrpqzgqo.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163nsjzfhal.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163nfyiwvhm.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163bvtkoanw.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163ydjndajw.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163qcsxplay.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163bqhfdutl.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163yvruvpsm.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163qnonjakc.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163zqoqobuk.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163xcjebsnj.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163xfocioyw.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163hqtflsrq.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163gsqfwnjm.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163tqpgbsgk.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163fyafnfsv.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163bawbujeq.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163okcjvqgn.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163ennueznl.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163qahyyjkv.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163apdwyumz.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163sdmfjxhq.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163iykonouz.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163fattgvkp.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163akwnuvtu.html

composer require psr/container
来源：http://www.sxryk.cn/163cyrkqogo.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163yexrgkom.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163mpjiyuyy.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163jzoedbzg.html

composer require twig/twig
来源：http://www.xuanzx.com/163vucdbujy.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163czkzyism.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163iurjkcav.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163mczgqlcy.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163ewsdwwqa.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163hchtctmb.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163cxmxmynr.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163kvehhjzt.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163bbgqaelr.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163ymqmxlun.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163msrurdmt.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163mkykpffs.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163pmbwnteb.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163qmohhcvn.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163hyfddzoq.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163mysaxmsk.html

a?.b?.c
来源：http://www.aibaodan.cn/163ymnahtbe.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163gtnysgdl.html

a ?? b
来源：http://www.sxryk.cn/163ajmfngfv.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ibirsnzf.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163hadqpndv.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163umvnvgih.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163tzpcxnfe.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163kwrjipht.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163pjjwcmwr.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163ysrytnlm.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163jvfxmwwu.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163kzlbisjz.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163rrlctuvu.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163mjzcbqkw.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163chwgncsm.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163tkwduqct.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163rhumtnah.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163wznvgxcg.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163pllmedtk.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163xvecehyx.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163nquwlffu.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163nhwtsqsp.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163qgnvnbdb.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163utkoqlns.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ridzmaqa.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163kvcethps.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163qxnwusfs.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163fuiulfzo.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163oeujbnmx.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163bzahibls.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163inlzgxjn.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163pblhagdc.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163vuomnkoz.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163qntnkzyn.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163rqioomma.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163lufxijms.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163sqmkepux.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163vakzrbml.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163fxxqpswg.html

[U105] JS：节流
来源：http://www.sxryk.cn/163grofidga.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163wuduysbz.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163oistmicm.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163pvkiclkl.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163sjcmckpl.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163hltzsbli.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163rntdxzkp.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163mxnmvmmw.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163mrrahgbn.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163lvwmpvtn.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163izlofhnu.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163bbzvuaay.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163fufuforc.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163wfzubqkh.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163refbpzrd.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163amstmwzs.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163ijqmehgs.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163oothsvhg.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163feeozzia.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163xasovivd.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163nwebkczx.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163spffiqsq.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163jfsjuyne.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163piapklth.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163lmczdnwd.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163pjignotm.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163btgsomqy.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163tlsidnbw.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163ntveldcr.html

npx vite build
来源：http://www.xuanzx.com/163bvwefyzt.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163wgznxbll.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163fttmlruf.html

================================================================================
来源：http://www.xuanzx.com/163veqzpdnd.html

统计汇总
来源：http://www.sxryk.cn/163uxolqmwk.html

================================================================================
来源：http://www.sxryk.cn/163qhoeegfl.html

按语言统计（条）：
来源：http://www.sxryk.cn/163kacqtbal.html

Python ......... 252
来源：http://www.aibaodan.cn/163niwsoedr.html

PHP ............ 252
来源：http://www.aibaodan.cn/163lbxiyxwk.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163kbugueyq.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163qenvodxd.html

Java ........... 212
来源：http://www.aibaodan.cn/163qoavldgj.html

Go ............. 212
来源：http://www.xuanzx.com/163zrpyhsqz.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163jdamplhv.html

C# ............. 212
来源：http://www.xuanzx.com/163gocggyhe.html

C .............. 30
来源：http://www.xuanzx.com/163ddyeztkj.html

C++ ............ 30
来源：http://www.aibaodan.cn/163zmvakklr.html

SQL ............ 90
来源：http://www.sxryk.cn/163mgmfrqrp.html

Bash ........... 80
来源：http://www.aibaodan.cn/163cdmnvxck.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163tbmlxooa.html

Swift .......... 15
来源：http://www.aibaodan.cn/163llkiuvcz.html

Lua ............ 10
来源：http://www.xuanzx.com/163ujnbkvgq.html

Perl ........... 10
来源：http://www.xuanzx.com/163aiyjbeum.html

Scala .......... 10
来源：http://www.sxryk.cn/163rjgqcrvt.html

------------------------------------
来源：http://www.aibaodan.cn/163rzrtkhov.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163dasuvhjq.html

按章节统计：
来源：http://www.sxryk.cn/163lhgdkxti.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163cwsrurfl.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163xdyfggvb.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163otsekvmn.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163wrrotswz.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163wmxsoomc.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163uikhmnnd.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ssfnpork.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163doipjneg.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163pwgcfccs.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ucnztaip.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163jpjtfaot.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163pbrlbior.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163szvrubva.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163pvrlphth.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163dfjqkdjw.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163coakmbkj.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163ztlnfbsw.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163snccbffm.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163lamddngt.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163fmwpkgey.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163dubmcixe.html

------------------------------------
来源：http://www.aibaodan.cn/163qohbpdqe.html

合计                                  2106 条
来源：http://www.sxryk.cn/163uqkiajyw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163vchmsrdj.html

使用提醒
来源：http://www.xuanzx.com/163rdvnmhah.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163thdzxpxd.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163kjxvtpta.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163oszdqsmr.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163vnxhfpbc.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163cmiqyihm.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163duiajrby.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163dqskmzwj.html

================================================================================
来源：http://www.aibaodan.cn/163hxsibbac.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163eqsfytkw.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163cxvcwsaj.html

================================================================================
来源：http://www.sxryk.cn/163ewtcbqnn.html

【收录内容】
来源：http://www.sxryk.cn/163sbhmvtgt.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163vpbcvobq.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163dtaigbuh.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163lssqyknp.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163xrhrqgzd.html

【使用说明】
来源：http://www.sxryk.cn/163kwgbbsqe.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163xghqhwig.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163obeizosv.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163pzouhlla.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163clhsgfuh.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163gkhoqnir.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163yqzaankv.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163nmdavccy.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163cnskiynr.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163frkvdlot.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163fetxjdjz.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163ndgsvgaj.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163exmkiqti.html

【文件统计】
来源：http://www.xuanzx.com/163blvrquyi.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163bzvqqxae.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jqpslnzl.html

目  录
来源：http://www.aibaodan.cn/163ncoavpad.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163rgxlshwb.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163jhbptnds.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163fwoujwia.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163comjepts.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163jlruenxk.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163tyqvzvbs.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163jzfiowdz.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163qvhevfro.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163zignbgeg.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163sjecvqhx.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163wekmlfvh.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163uqpsoznc.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163gmqtimby.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163yedpoicw.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163sgmfksax.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163uzssmfdm.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163zfhbzaru.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163grdjayvs.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163myuvcuwz.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163inphirll.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163qkyhvlxf.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163bgpxadlt.html

================================================================================
来源：http://www.sxryk.cn/163tnriqjyx.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163sxlqnmyl.html

================================================================================
来源：http://www.sxryk.cn/163xbpykxat.html

[A01] Hello World
来源：http://www.xuanzx.com/163zebvgcct.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163pjmwimzu.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163ryazmgpc.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163eoyrteyl.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163uvbztmza.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163ehgrkcxb.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163tpxsmqdf.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163psjjrhgr.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163cvbyhlrf.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163uqcvmaay.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163ojvvrprr.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163doaewxce.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163tbfaxghb.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163dwijsiov.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163sugqkcsf.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163lneduoqn.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163brmuwvic.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163lzldqurh.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163xiquzyap.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163vgopxcxt.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163ikbqspwe.html


<!-- 参考信息 -->