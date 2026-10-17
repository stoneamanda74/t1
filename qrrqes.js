外链999!wailian999！

[U31] Py：单测
来源：http://www.aibaodan.cn/163kzwvgwcx.html

python -m pytest -q
来源：http://www.xuanzx.com/163pgvuuiox.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163yjltpdrv.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163thmfkbln.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163lpetpuvh.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163enoezwtc.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163byvhhceq.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163aihvcwpa.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163zdjezena.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163gmusaczz.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163fulzmgdq.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163ufwcxxtm.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163cbmakxbb.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163dqtepnvz.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163xuadconu.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163ugzozvzk.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163qeijnccb.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163ombbqqce.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163dqjvwbdr.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163lbkvichl.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163ofqeojvo.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163qdhwcmgm.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163debphpsp.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163pirsarlg.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163vsieaejt.html

namespace App\Http;
来源：http://www.aibaodan.cn/163gojgdwpm.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163fhlskauj.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163kcpgacgb.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163botryzay.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163caimjgtr.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163rsxhkvpz.html

?string $name = null
来源：http://www.aibaodan.cn/163ixpflcbt.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163mtztkfzc.html

int|string $id
来源：http://www.aibaodan.cn/163tyilzzua.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163hfdaqzrd.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ymjmietz.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163vpxsogqk.html

public readonly string $name
来源：http://www.aibaodan.cn/163zhiphzks.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163vglisomt.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163cetrjbys.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163lzrefcya.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163tssfwffd.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163guqtwerb.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163hjxriesy.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163vkrbwqjj.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163xmcivvxj.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163xdqbzpcm.html

$obj?->method()
来源：http://www.sxryk.cn/163pzvqugad.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163sxkynduz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163gggtdiyw.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163odawwmtz.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163abzymhfp.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163bnkoqlud.html

"值: {$a}"
来源：http://www.sxryk.cn/163qembqicv.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163twcwqwxl.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163hxsulwcd.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ktgwygkk.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163uxoaymzr.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163gndboqec.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163mbhgyanf.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163mvrluwhz.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163xuqglywq.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163tyfqxcey.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163eclftimn.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163wmaxqdrg.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163hitpqpjv.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163rwvyqxlw.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163teeskbyy.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163pjqkknzu.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163oovemnhy.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163nrfjxufx.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163buysugwk.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163kbwxqgsp.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163hrasngxl.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163fbonvwxc.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163uzaahhin.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163cisrqyci.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163rqmujqti.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163mewjrhfq.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163azykanfr.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163etkaunoh.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163nnahnozb.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163rumyiqqz.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163jgwdevys.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163eyhhofhr.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163twuzgobf.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163rmgowgtb.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163pkmlrpjo.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163qwbjzdur.html

composer require psr/container
来源：http://www.sxryk.cn/163aszpsvsu.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163jchcxndb.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163wtgqfvwy.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163yedronfp.html

composer require twig/twig
来源：http://www.sxryk.cn/163zhxtlcka.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163pxmguqta.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163ujuubdyj.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163cfazgbqp.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163wotomwky.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163sldmeogn.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163dgnzqwul.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163mxbptvdr.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163lhgiaqoi.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163jlzsryfr.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163ikuhfvbx.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163ksetusyx.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163glzrggmp.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163dqmcegyi.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163tzsnibcf.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163uhyrwfxd.html

a?.b?.c
来源：http://www.sxryk.cn/163xzbmhhsz.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163gntxvzak.html

a ?? b
来源：http://www.xuanzx.com/163iwkjbjbr.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163kzhlewqn.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163hmthhgwq.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163sghgumzy.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163hnffwvqj.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163gowjszsv.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163ongbnjvn.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163aqvrygqa.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ixweflcm.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163uyhbovva.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163cpdvzdep.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163usraekzh.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163rfxaxklo.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163tpgutdih.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163zvatclso.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163qfmhbhds.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163uphzsdps.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163fcsslkhh.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163adwqzcac.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163nprvsugo.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163hjfwbpqy.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163asngjvcf.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163lmcmlxzj.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163qacbcccn.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163urzbbkxn.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163ekuveggr.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163qnmgdelg.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163qugsbxgh.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163birtbtri.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163cksgxcjm.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163zpyjbsol.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163ngmjajxh.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163fmetpuxc.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163vgqtfkex.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163cmeplxnv.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163evlvnbtv.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163vqarptwg.html

[U105] JS：节流
来源：http://www.xuanzx.com/163crzptcvt.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163nhigqgem.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163demaqvam.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163mykushiy.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163ikqcgtnp.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163joghdkuj.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163rakqmcxj.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163rquldgze.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163qecgnzrb.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163jnxgbrxu.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163omxbfidb.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163savqxaio.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163ndcnrpmu.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163hommaxah.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163xgvgqela.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163zewjbvpw.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163msuakeup.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163oolqmayy.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163ziocwuls.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ickazats.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163scalbolt.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163ishbgwxk.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163gvhthkjh.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163ldjsmyzu.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163ylstinrt.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163mkvbxcnc.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163batdwddz.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163kqvfavnj.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163vpkoaiit.html

npx vite build
来源：http://www.aibaodan.cn/163wctbqnno.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163otbhnbxl.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163igfstprm.html

================================================================================
来源：http://www.aibaodan.cn/163wrixlafy.html

统计汇总
来源：http://www.xuanzx.com/163dbmrprlr.html

================================================================================
来源：http://www.xuanzx.com/163lhbjgdhj.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163jfeuwquf.html

Python ......... 252
来源：http://www.xuanzx.com/163rlwqbhnw.html

PHP ............ 252
来源：http://www.aibaodan.cn/163wirsntkg.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163fsnxxocc.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163qmklvoao.html

Java ........... 212
来源：http://www.aibaodan.cn/163zncrnovq.html

Go ............. 212
来源：http://www.sxryk.cn/163jxfqhxig.html

Ruby ........... 212
来源：http://www.xuanzx.com/163fxdcsxps.html

C# ............. 212
来源：http://www.xuanzx.com/163pjvltrgb.html

C .............. 30
来源：http://www.xuanzx.com/163bjbotile.html

C++ ............ 30
来源：http://www.sxryk.cn/163caxgzwxr.html

SQL ............ 90
来源：http://www.sxryk.cn/163myjsgjhi.html

Bash ........... 80
来源：http://www.aibaodan.cn/163ogliuaxg.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163juwwzspz.html

Swift .......... 15
来源：http://www.sxryk.cn/163avcuntda.html

Lua ............ 10
来源：http://www.aibaodan.cn/163ojpmngfl.html

Perl ........... 10
来源：http://www.sxryk.cn/163puvrahqt.html

Scala .......... 10
来源：http://www.aibaodan.cn/163kddcamva.html

------------------------------------
来源：http://www.aibaodan.cn/163ddlxmfwl.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163gaashhjv.html

按章节统计：
来源：http://www.xuanzx.com/163sxctjryx.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163meprdtnp.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163lsiwmmdw.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163prmsfajw.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163rkgltbqb.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163ifkfldhk.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163dexlwqrr.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163bivxwybf.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163lpvzdupd.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163wjbvwsvo.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163rgbflgvv.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bevleclm.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163pwkyrjhe.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163anctijpo.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163zwhbeqqc.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163xadjzgek.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163wbvibglg.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163hcetvcuc.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163ekxgfeac.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163liozmcxm.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163zocbxkap.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163ktnoomxg.html

------------------------------------
来源：http://www.sxryk.cn/163jnyeazhr.html

合计                                  2106 条
来源：http://www.sxryk.cn/163idzxawdb.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163chrpdvhj.html

使用提醒
来源：http://www.sxryk.cn/163pjhixwsl.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163uguebxwy.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163hjryahbu.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163wfduqjin.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163ccwnkaux.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163prfzepvi.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163iwnetvue.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163yocbhbnp.html

================================================================================
来源：http://www.sxryk.cn/163qgbdczmt.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163dtabeiuq.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163fvxkehbz.html

================================================================================
来源：http://www.xuanzx.com/163yjujdtvl.html

【收录内容】
来源：http://www.aibaodan.cn/163vudxkksn.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163uhifosdr.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163ldvmlvni.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163xmebixpv.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163ntqdqxyj.html

【使用说明】
来源：http://www.sxryk.cn/163kebfsuoy.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163xrckcxqt.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163jeavcvbt.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163pbjvlmbc.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163itztjxms.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163atunraul.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163ywapcfjc.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163qfaxpwcu.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163gruqyshk.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163husoxcvq.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163ogebbuck.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163ottrncrd.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163rccqjoba.html

【文件统计】
来源：http://www.xuanzx.com/163xfhjtgvm.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163mbmiqejg.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163gwfcnpns.html

目  录
来源：http://www.aibaodan.cn/163vlzzreyk.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163qmtdubrx.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163jujarzjx.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163hscmkenw.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163wrhntphk.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163poecyyyn.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163meuaivad.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163atypklad.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163jeixrkcl.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163cukcpqun.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163izfhdwgq.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163esxvahem.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163rzsmidfx.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163zvptsvtf.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163utqkbool.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163hwmbjfhc.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163gokvrbkt.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163cxmcvfxb.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163ukqvmhrq.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163xfeyjwjz.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163dbgjtioo.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163nofloggl.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163hwktlbfo.html

================================================================================
来源：http://www.sxryk.cn/163trtqbcjq.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163blnifyya.html

================================================================================
来源：http://www.sxryk.cn/163bnedlpik.html

[A01] Hello World
来源：http://www.aibaodan.cn/163yzfrfcuc.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163nqqkqlht.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163fcpconhr.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163fcppjkpm.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163evrjetsj.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163fewjiavj.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163tiozqppi.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163odcnwrtr.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163utlruyam.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163lrbxjfuh.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163dzfqidfe.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163thinvxfs.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163enuknxmk.html


<!-- 参考信息 -->