外链999!wailian999！

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163bdskxfsu.html

namespace App\Http;
来源：http://www.sxryk.cn/163rdhjfxlv.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163yxcjonbj.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163bzajlosv.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163lnehpupa.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163rqkkngqu.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163bgjdkpva.html

?string $name = null
来源：http://www.xuanzx.com/163wxmhzuyg.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163ylfmsaar.html

int|string $id
来源：http://www.sxryk.cn/163djvefbad.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163vlkojpeh.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163hzhiucjg.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163bsogdnhi.html

public readonly string $name
来源：http://www.xuanzx.com/163mvlpmdqs.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163jsnjsprv.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163yabbruej.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163rkbeshdx.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163xbucoxpg.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163bnwwktni.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163svttlttp.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163rbwvqrrb.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163wppswuwc.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163emrbexbs.html

$obj?->method()
来源：http://www.sxryk.cn/163oogwrdyu.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163lfxwuaqi.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163scwxvjrr.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163ezlmbyrm.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163bnknsfgb.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163hpwqfmwc.html

"值: {$a}"
来源：http://www.sxryk.cn/163jmvxjqgn.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163rmxcejag.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163tlttlkye.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163shfhwdvi.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163owzkrapo.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163dnogokwa.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163deeexeri.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163beomfdzr.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163pprmedev.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163cngowkmk.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163ygalkjez.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163jmtskccf.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163quqlfasz.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163yjwxkdug.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163uanvagtp.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163vtnftroc.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163qbyyjeji.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163gmqxskdc.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163fdxejnqa.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163awahzajc.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163dwkflvax.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163dsmmvryn.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163qqulapsw.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163cpwtkxyw.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163vgltfnkc.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163bmlxktny.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163kkxnjjsq.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163xuhskqep.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163jxkoectx.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163eqnwtccc.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163ehucvtxt.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163pciqkjlz.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163tgmfvmss.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163pnrlxqho.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163ssyqndmf.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163xpfjpsou.html

composer require psr/container
来源：http://www.aibaodan.cn/163mivbjhjo.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163agettcml.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163hozlpkqi.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163qrompdrb.html

composer require twig/twig
来源：http://www.aibaodan.cn/163naxzslxw.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163htnoawdj.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163ktfeblez.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163caofkxnm.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163ucfewvio.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163mpzbwuyp.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163tjfvchfv.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163dvhpmoem.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163qqoqucid.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163egecvpiw.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163kzyrpwjs.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163oueptbpc.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163dnowooyd.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163aqewsgmb.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163mkuxwgch.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163qqxmqvtu.html

a?.b?.c
来源：http://www.xuanzx.com/163opnkcbow.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163idurfppk.html

a ?? b
来源：http://www.aibaodan.cn/163hwgatasw.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163fouhuzep.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163kxnngvjh.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163adtkkupn.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163icgziyac.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163olxckgad.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163ckeoytdg.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163ybhtfrju.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163fwhocvhr.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163tjowxqte.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163hkcllcwr.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163moaqutxz.html

structuredClone(obj)
来源：http://www.sxryk.cn/163xhsunibu.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163mdxuytpa.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163ucqlkpmm.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163mgczscpj.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163dmtrwatj.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163byrhsykl.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163vnzblygu.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163ltodbbek.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163qocikyhh.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163fdvymjge.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163kggwpfes.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163xlwtjypg.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163hzyqhhrb.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163uhpudmbw.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163kpuublnv.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163ggjmcgcv.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163ztxgragf.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163awlbnncs.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163nmnuprnx.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163wnhozrne.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163fgbkxwms.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163nlrnrnck.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163gsxlsnqm.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163uaddoxpx.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163zznjtlkt.html

[U105] JS：节流
来源：http://www.sxryk.cn/163deqnhirk.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163fkrqzytm.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163qvickavn.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163lcrykzch.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163pxioqvoa.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163iyynxdjs.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163leyrchup.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163pxihuwuz.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163owfbttny.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163tdsfhvcf.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163nkdfrqji.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163jvjxtvol.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163edybyykv.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163zldxyfub.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163wfoskwcl.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163thfywxpf.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163abbsycwh.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hrpiclyj.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163ebeiewsl.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163wrnmqiuw.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163xesklxwt.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163rtpkvaek.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163jnbnikvn.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163yqbqooxg.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163emepnmll.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163nwwibmry.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163slfeogoj.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163uqthjqcj.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163sqzodavf.html

npx vite build
来源：http://www.sxryk.cn/163rhavulxc.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163oeakkpib.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163ubypblbj.html

================================================================================
来源：http://www.aibaodan.cn/163joaisinj.html

统计汇总
来源：http://www.xuanzx.com/163vtjsevzt.html

================================================================================
来源：http://www.xuanzx.com/163gytpzlqj.html

按语言统计（条）：
来源：http://www.xuanzx.com/163htcaiekh.html

Python ......... 252
来源：http://www.xuanzx.com/163hisentyh.html

PHP ............ 252
来源：http://www.sxryk.cn/163obxtxkmx.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163xhgkawle.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163edzqsosv.html

Java ........... 212
来源：http://www.xuanzx.com/163mmmtssdk.html

Go ............. 212
来源：http://www.xuanzx.com/163akhemgnl.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163pdkihpeu.html

C# ............. 212
来源：http://www.sxryk.cn/163vfahysxr.html

C .............. 30
来源：http://www.sxryk.cn/163ivbhddsm.html

C++ ............ 30
来源：http://www.xuanzx.com/163alcmobyn.html

SQL ............ 90
来源：http://www.xuanzx.com/163fczasrdb.html

Bash ........... 80
来源：http://www.sxryk.cn/163dgrjkaph.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163hxbbfugd.html

Swift .......... 15
来源：http://www.xuanzx.com/163acjnoruq.html

Lua ............ 10
来源：http://www.xuanzx.com/163pkqgjfzn.html

Perl ........... 10
来源：http://www.xuanzx.com/163rzaexfob.html

Scala .......... 10
来源：http://www.sxryk.cn/163vltwbdnh.html

------------------------------------
来源：http://www.sxryk.cn/163tdehjlnb.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163gchavdhr.html

按章节统计：
来源：http://www.xuanzx.com/163wldzinem.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163hhjhlxma.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163quzahclo.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163jjoucnol.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163yyakbzdt.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.sxryk.cn/163ufvdvonj.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163aomixlhl.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163vasvyihp.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163fknmksqt.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163yownxdog.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163jtsduvxv.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163netchunl.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tpcscavr.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163mcymxxuu.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163pbpqtpbm.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163ypdeskhd.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163kzalraas.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163vfqmhhbf.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163yyszbvpb.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163tkehoovv.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163utkkxspl.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163zwvxerqr.html

------------------------------------
来源：http://www.aibaodan.cn/163qoknxkeu.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163nentcyly.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163yrvixtyj.html

使用提醒
来源：http://www.xuanzx.com/163xljgqqqr.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163eelwexhf.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163mwqvqceu.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163tglreico.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163pewqhzqz.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163icgsdnxk.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163tysagiho.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163tqltvwuc.html

================================================================================
来源：http://www.sxryk.cn/163rllhuzsx.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163ruvdvcif.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163tlcywdna.html

================================================================================
来源：http://www.sxryk.cn/163pgkysmam.html

【收录内容】
来源：http://www.sxryk.cn/163khqbcigf.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163zgzknpwg.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163thpynyjx.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163yfxyfius.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163ovoilyuc.html

【使用说明】
来源：http://www.xuanzx.com/163mwcefgdi.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163lmzgrank.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163aywevpee.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163jtgzxmox.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163ovlylnzz.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163feqnyfsp.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163ftaqvjfx.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163wgniwifx.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163edhcikgl.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163amuwrtmf.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163xvlbredh.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163mzfqgkzq.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163fbukajgy.html

【文件统计】
来源：http://www.aibaodan.cn/163zkiyuild.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163jxzeeyoa.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163kfffbrqx.html

目  录
来源：http://www.sxryk.cn/163lgclmmqr.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163cnnuxzbe.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163wczhdkbt.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163kdcnfvwb.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ufyhpnct.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163riaxsfkd.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163ktkcoybb.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163tasorxqt.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163pemkdftn.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163yphjluqp.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163njjstmci.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163bnvzyszd.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163szjwfefw.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163kdiefxbu.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163yxkcazkk.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163kgwborcr.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163qebcfsxa.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163heuwpyuk.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163npupnrlj.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163lkrnfhdh.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163bscwxvdd.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163bbsqwxpq.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163mcbfneco.html

================================================================================
来源：http://www.sxryk.cn/163oehusevp.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163uukwwhqm.html

================================================================================
来源：http://www.xuanzx.com/163ytxdcxbl.html

[A01] Hello World
来源：http://www.sxryk.cn/163cdhxnqiy.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163krsaafxi.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163beihitcy.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163jnnyzadq.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163fmmrlpdp.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163drzudggh.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163qvxbroam.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163rtjwquul.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163oosihfbo.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163djrcuuhi.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163dggprfvz.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163lrmsjqhi.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163zwtsgvxh.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163apvkpxuw.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163fliutcbw.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163jsdrrout.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163ypltocdb.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163stsvpzjf.html

[A03] 常量定义
来源：http://www.sxryk.cn/163qssoblpq.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163kmerzulx.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163jkmyelby.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163pfmdhziv.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163iqmqovww.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163txtpdadc.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163khcftqms.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163suelvrom.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163fzkxgrmu.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163bpasdoel.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163tyrnousj.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163llpkvstg.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163gjpbthgl.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163efkxxzbf.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163gpcyuruy.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163txcftekb.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163bdvcdkcm.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163dwcmufac.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163cvbmswzj.html


<!-- 参考信息 -->