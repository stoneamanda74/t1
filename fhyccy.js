外链999!wailian999！

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163qfjikeps.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163oxlkqjmu.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163oonxjqme.html

UserId = int
来源：http://www.aibaodan.cn/163unqxwame.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163xsnzgcpd.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163jlctsuap.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163gmoxfwxe.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163fxjqfqyq.html

[U31] Py：单测
来源：http://www.sxryk.cn/163ownjjvqv.html

python -m pytest -q
来源：http://www.xuanzx.com/163amclxcdz.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163xfypxwlj.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163bgkqhqgg.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163ablqnzdc.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163frdpuzib.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163atskbldi.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163atiiggde.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163rddckpuc.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163pnolfcxf.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163qakjyszo.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163wqxgldja.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163iprgshdz.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163lsydvdev.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163posrnfta.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163wsesssui.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163qlezekjb.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163zkecjoou.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163xgdmwnlj.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163oxqwfwzr.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163rjilibdo.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163wdrzymrm.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163qpttszaz.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163objzsxdu.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163gqwlnltx.html

namespace App\Http;
来源：http://www.sxryk.cn/163xzqponsf.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163rjuwihbl.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163mushzpyx.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163kbvjxfvh.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163drteopvm.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163vtevtwbg.html

?string $name = null
来源：http://www.xuanzx.com/163cwllczqz.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163asfyeajc.html

int|string $id
来源：http://www.aibaodan.cn/163epckaopd.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163ekhlfsnb.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163czlezpdr.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163ohvhvngi.html

public readonly string $name
来源：http://www.xuanzx.com/163xnycpoly.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163derwbrxu.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163xavcjqup.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163srryxpiq.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163yyzvzdwa.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163hlparqxv.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163baejxzvf.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163jdddslxh.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163fqwdwein.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163xawhzkvz.html

$obj?->method()
来源：http://www.sxryk.cn/163cepxuwlo.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163zxuzwvfh.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163yonergwz.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163wkisxycq.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kpkrfxah.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163apgdchga.html

"值: {$a}"
来源：http://www.xuanzx.com/163bdrbeczr.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163jwdfwztv.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163tdokywhd.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163ojargsvp.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163cxbtduuu.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163amajcvuj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163sxhfwvdd.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163jaeqiwad.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163jhqlffyt.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163mfegbcvv.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163fxwjldhb.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ptnzlsxf.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163rwwcmixn.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163xcnttvgv.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163bznuqpsc.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163mhrzhwzx.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163dtyoibqy.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163gidrqdwg.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163tmhnqwmu.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163hlixdnex.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163ovdojtml.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163msrjxagw.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163jvdsaqgq.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163otjjspcx.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163xeldnaaf.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163dglqbbde.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163hyismpov.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163asjridvf.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163loubzbrp.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163lechlweh.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163dywwgxzq.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163goybotuz.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163brghgmaj.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163qlscohju.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163bmqvzpov.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163ekgmvmei.html

composer require psr/container
来源：http://www.aibaodan.cn/163wumsnxfp.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163soouwkwg.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163oqjtrplz.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163gfhvcyhx.html

composer require twig/twig
来源：http://www.sxryk.cn/163djiuyjbz.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163wtwwuedw.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163uowjqzau.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163mcbpdwwl.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163kvdityat.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163esmlakmj.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163aernmnct.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163eontvvam.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163zxgoovgz.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163lfsjbnqu.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163hvmzaszl.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163eenijkzb.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163argqtxzb.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163dehbrdmo.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163bkwpwdkz.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163bkznzwkm.html

a?.b?.c
来源：http://www.sxryk.cn/163bvljnkag.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163mkvwhuwu.html

a ?? b
来源：http://www.sxryk.cn/163mjahtwlp.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163qktkgaxp.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163flfsxnxo.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163rlfpyajy.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163npjcczdq.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163nshlivyi.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163dekjdbxv.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163eyodtnvl.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163pqhljvut.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163edhpants.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163hmfwilwh.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163gwqjedwd.html

structuredClone(obj)
来源：http://www.xuanzx.com/163fmkqymma.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163jgpgydsg.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163mplebwmi.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163vrxzfvwp.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163ionekdvb.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163aofscigw.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163vttlvylw.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163pttzihsf.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163rmnwtxtu.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163aaflbijl.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163cgrjmsmx.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163xpjugzzf.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163pqqflrwx.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163tppenktc.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163niybctpj.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163neqfisde.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163jflxwmiy.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163idjpnwrz.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163wjlmyfab.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163ghxvgjmt.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163nahuduou.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163omeolpar.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163xxwaazcl.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163saemjvnz.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cwusurhj.html

[U105] JS：节流
来源：http://www.xuanzx.com/163aatetxlr.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163wwjairhd.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163kkozqoyn.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163idoglqsy.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163xzqxayyw.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163affzfbnf.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163vvhknmzh.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163xvsokjjv.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163pzosonpu.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163rhvcdete.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163qfpurbck.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163gvwqdypp.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163vfjouqyn.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163qokhijsw.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163sglbqrtr.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163pfurdbzi.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163wvjjerbg.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zwagvfzb.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163bdanwlwx.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163avzuaxoj.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163dbdppuew.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163tozesyml.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163vuqcbunj.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163qhdgrnul.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163ackjusrk.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163urtvhutr.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163iwzmorpw.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163xtlpnrip.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163grtfmsvd.html

npx vite build
来源：http://www.aibaodan.cn/163tpzaxbai.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163jcztwlsc.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163belqtvtw.html

================================================================================
来源：http://www.aibaodan.cn/163rofncmyx.html

统计汇总
来源：http://www.xuanzx.com/163lbretldt.html

================================================================================
来源：http://www.xuanzx.com/163mdglkdgw.html

按语言统计（条）：
来源：http://www.xuanzx.com/163bmtwkbdg.html

Python ......... 252
来源：http://www.aibaodan.cn/163knbqwxfu.html

PHP ............ 252
来源：http://www.xuanzx.com/163mxhoqhvj.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163yfykdntn.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163bllroflw.html

Java ........... 212
来源：http://www.sxryk.cn/163jxqtikkk.html

Go ............. 212
来源：http://www.aibaodan.cn/163mufnfhbl.html

Ruby ........... 212
来源：http://www.xuanzx.com/163xbxktpob.html

C# ............. 212
来源：http://www.sxryk.cn/163eugmmzwd.html

C .............. 30
来源：http://www.aibaodan.cn/163ulytsyrv.html

C++ ............ 30
来源：http://www.xuanzx.com/163qwinrlcq.html

SQL ............ 90
来源：http://www.aibaodan.cn/163bgonbzbc.html

Bash ........... 80
来源：http://www.aibaodan.cn/163djtdlboh.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163ktwjwpkx.html

Swift .......... 15
来源：http://www.xuanzx.com/163hvbediyf.html

Lua ............ 10
来源：http://www.xuanzx.com/163aaksesib.html

Perl ........... 10
来源：http://www.sxryk.cn/163qatwhjtj.html

Scala .......... 10
来源：http://www.xuanzx.com/163uxpoxszd.html

------------------------------------
来源：http://www.aibaodan.cn/163rdzhuhkv.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163jkmtmcdd.html

按章节统计：
来源：http://www.sxryk.cn/163pkuesgec.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163wtmteswx.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163lfnmulrj.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163frnygyro.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163ngqdzcun.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163isriaflx.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163kxlgohjf.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163supakzgm.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163ewrdycns.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163qljpeaeg.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ohmxjgjy.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ndgootsh.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163mczwihkg.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163wkodstmv.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163pjesavfv.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163gorbqmds.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163szuklrry.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163ficsxbzk.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163dhrhokes.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163dlsxsjon.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163gywgqaiv.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163nufnnfmf.html

------------------------------------
来源：http://www.sxryk.cn/163qvlhokqk.html

合计                                  2106 条
来源：http://www.sxryk.cn/163bdcupfcu.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163dsosesnp.html

使用提醒
来源：http://www.sxryk.cn/163defoukbr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ehjowmes.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163pfzdfiwp.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163pmhrhfyo.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163pxfxjlca.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163zjpmuvco.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163bdhygcri.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163mhvbosqe.html

================================================================================
来源：http://www.xuanzx.com/163ptckqibm.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163hgczzyhl.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163gckwqtsy.html

================================================================================
来源：http://www.xuanzx.com/163tihwrpju.html

【收录内容】
来源：http://www.sxryk.cn/163unfkfeze.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163cvrgcyfd.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163xnedqmvm.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163dqlhvdjw.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163nxjrxfez.html

【使用说明】
来源：http://www.sxryk.cn/163jtolkfuc.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163shqtmhty.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163mprhgqro.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163gftwpsks.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163ckowtmdn.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163kfqbjdbm.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163mijgwfvk.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163fcymkavr.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163jhyxwntg.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163yanbnmyn.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163wbzwimyl.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163rtudeeot.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163grmxdbqo.html

【文件统计】
来源：http://www.sxryk.cn/163bryuyykp.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163mvsriygk.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163gyqeovti.html

目  录
来源：http://www.xuanzx.com/163kiyboogm.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163vcudboap.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163nfpigiad.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163qfduuhun.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163ricmxbfy.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163tcjeevay.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163fragicgw.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163cvqigmua.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163mxqchqyo.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163izmlqzhl.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163ymlbpmkm.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163jzeoxhoj.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163kpxqjwho.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163hiidnyxt.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163odacysdu.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163cnvhiehn.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163oyzdcfje.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163tddbcmdv.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163tauzycdo.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163dyevlzyj.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163twlykpru.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163xiutbhum.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163horpebcp.html

================================================================================
来源：http://www.sxryk.cn/163vasoekkc.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163jbyvyitt.html

================================================================================
来源：http://www.sxryk.cn/163yntaosyj.html

[A01] Hello World
来源：http://www.xuanzx.com/163vwedwizh.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163femjeamc.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163rajqsgad.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163iemxnyfi.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163zfnswbqd.html


<!-- 参考信息 -->