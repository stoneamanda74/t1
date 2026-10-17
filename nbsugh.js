外链999!wailian999！

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163jcjdsshn.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163irtwxgfh.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163geicsvey.html

UserId = int
来源：http://www.aibaodan.cn/163fdobbajc.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163qfjiwaqf.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163gdguxmup.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163arrjjhil.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163xndofdfw.html

[U31] Py：单测
来源：http://www.sxryk.cn/163aqotwlpj.html

python -m pytest -q
来源：http://www.sxryk.cn/163ivmyhbut.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163mrgpqbve.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163zqgadscs.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163rqdmpdxb.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163mdxyytmc.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163gtfzhook.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163apdcrwxm.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163nusnvsil.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163mdubprun.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163qyynkpsw.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163oiapeoro.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163nqwgjvpj.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163yjeovmps.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163ffnibuau.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163fgtsmwux.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163wocyjxaf.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163dqnvvrdn.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163ewihuiig.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163fpzxdvqi.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163ulkydfyi.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163soudpvfu.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163ownveckj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163ytttlxro.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163heskeygi.html

namespace App\Http;
来源：http://www.xuanzx.com/163ynflqoep.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163inxrsrjj.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163sxwqzxad.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163kgmhifmt.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163dwrdevhl.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163hrflhcjk.html

?string $name = null
来源：http://www.xuanzx.com/163lpbbqvyq.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163dvilzbra.html

int|string $id
来源：http://www.aibaodan.cn/163qefumodu.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163puerxmri.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163pcvqmhok.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163hpuilvch.html

public readonly string $name
来源：http://www.aibaodan.cn/163zwmmmfsu.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163eovtdlek.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163lntzdgul.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163ttmbawcs.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163bwtxvpkh.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163xljpsrxl.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163cjlpikyj.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163mhisghib.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163oiwweexm.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163jgyacgwq.html

$obj?->method()
来源：http://www.aibaodan.cn/163upcjidam.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163nbatjhzl.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163mjckmwmb.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163ogwkaatc.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163gsfxfjvc.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ukvznhyj.html

"值: {$a}"
来源：http://www.sxryk.cn/163khozgvwh.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163tsokaruk.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163emkuyjkf.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163zwthedqm.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163mqnnrgzl.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163ysyewlez.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163jkgpbiqb.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163cqkysrah.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163sphudcuv.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163ifllazrx.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163cdfwxjiw.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163ovgpganr.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163xhewggwx.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163boyttlbz.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163ljaxmqvw.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163zdrsxhku.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163sdlejlix.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163sexlhvbu.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163rbqbbrtd.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163gfohkcst.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163rjteimrl.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163pzelujlf.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163xjmkpdxd.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163opmjtqfw.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163rlskisnr.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163meuieabg.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163efvmkgng.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163vbpkngov.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163goenjlhy.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163vetuzymw.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163ziajiakj.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163xoctqatn.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163nnlrbfbb.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163aryeugwc.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163etluhlaa.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163jlvfouuu.html

composer require psr/container
来源：http://www.sxryk.cn/163vusiwzva.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163jojtomxl.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163uecbqryg.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163wgbsonca.html

composer require twig/twig
来源：http://www.xuanzx.com/163spgknict.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163ycxactkh.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163bgvnnesv.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163fmsfvwvw.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163xqtozela.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163emysmkbk.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163pxargqjp.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163abjqsfws.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163aknwmbxe.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163qvgjizuy.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163yedczxzk.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163qlechngt.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163saqynfqs.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163ujwzwduv.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163updxvjre.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163sapfmqou.html

a?.b?.c
来源：http://www.aibaodan.cn/163umzequhy.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163ahhrfars.html

a ?? b
来源：http://www.aibaodan.cn/163wrkrmyfy.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163eglbrnlf.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163gyhsetxh.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163acezccel.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163dvwsfkvk.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163vnpwqvcw.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163pbcoacuj.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163pfaakopp.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rgczfrut.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163tswdkyps.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163rminjwbz.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163tntczuds.html

structuredClone(obj)
来源：http://www.xuanzx.com/163tjsduley.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163dapsvokm.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163nrnjhlte.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163umqunbcl.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163ebcrupum.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163hktdxjyv.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163qewqmimf.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163dabyimdr.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163wjftvjoc.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163muabfpan.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163yvlgpqbu.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163gjknznnn.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163ytczvtaq.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163pbgqphti.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163aqpvtbip.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163rcfzcrdq.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163lvuvzfjy.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163ljozhfej.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163csbcbzxv.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163kiquxsxr.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163mvkoyklt.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163ggtcwhvc.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163tqpfiixf.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163iulfkavt.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163snkhtpxd.html

[U105] JS：节流
来源：http://www.xuanzx.com/163diacnzxa.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163iunqdksb.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163jajjotfo.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163pbqxoeei.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163pgvbkkoq.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163ldqlytwm.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163llcrunbu.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163taynectj.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163jcbhffpy.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163qowashnf.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163knegwxgv.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163vhtitqlb.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163xedozotn.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163mfgkjryv.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163scimzzwb.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163myihoeun.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163qacewvdd.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lyurunlu.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163mopzjvyv.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ouqjeeje.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163acxeizvt.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163guufpacv.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163yydunyym.html

/** @param {string} name */ function f(name) {}
来源：http://www.sxryk.cn/163xinkkciy.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163frwzbeab.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163ncydrvft.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163luevyxlt.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163lyvvyxla.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163ltpkkxje.html

npx vite build
来源：http://www.sxryk.cn/163rxnejmve.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163erftriuz.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163fsjfzeyr.html

================================================================================
来源：http://www.aibaodan.cn/163fbqqjsay.html

统计汇总
来源：http://www.xuanzx.com/163wmerjwvx.html

================================================================================
来源：http://www.sxryk.cn/163efilgtqw.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163dvxntskv.html

Python ......... 252
来源：http://www.aibaodan.cn/163lsgozkks.html

PHP ............ 252
来源：http://www.sxryk.cn/163yzhxlpwo.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163bgippksm.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163eqwyezcw.html

Java ........... 212
来源：http://www.sxryk.cn/163tiqgbsgs.html

Go ............. 212
来源：http://www.xuanzx.com/163ffwjxqxo.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163absmoxyg.html

C# ............. 212
来源：http://www.aibaodan.cn/163njfdvlsy.html

C .............. 30
来源：http://www.sxryk.cn/163otuijtql.html

C++ ............ 30
来源：http://www.sxryk.cn/163lyovzhke.html

SQL ............ 90
来源：http://www.sxryk.cn/163ljgjcutw.html

Bash ........... 80
来源：http://www.sxryk.cn/163dcukdxjr.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163vtkzqrxc.html

Swift .......... 15
来源：http://www.aibaodan.cn/163qnsixgty.html

Lua ............ 10
来源：http://www.xuanzx.com/163nptcgurf.html

Perl ........... 10
来源：http://www.aibaodan.cn/163snfkuinq.html

Scala .......... 10
来源：http://www.xuanzx.com/163xilobhcf.html

------------------------------------
来源：http://www.sxryk.cn/163upwbjowv.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163qukhrwob.html

按章节统计：
来源：http://www.xuanzx.com/163wclbzpqz.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163lmlodumh.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163ttpqrmlq.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163hopxzxdi.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163hraapfjp.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163vdhahumr.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163dakjstkv.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ykwsweeg.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163beeefnmn.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ludegcck.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163rjruwthg.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163coecvwbt.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163qtnuowei.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dqjfmmpb.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163xgnccejo.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163jbdiysvg.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163olussjbq.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163biauaffv.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163nbhmgbrg.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163qmsrlioo.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163ypqfqlxu.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163xsrnlmcu.html

------------------------------------
来源：http://www.sxryk.cn/163ioxokgow.html

合计                                  2106 条
来源：http://www.sxryk.cn/163lutfczax.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163hcdgvgml.html

使用提醒
来源：http://www.sxryk.cn/163lzfqglfp.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163lmbqjkwd.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163yoppfysz.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163ouuazcdb.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163kymbibte.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163fqtmktlw.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163iqnhyftp.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163trjqproj.html

================================================================================
来源：http://www.aibaodan.cn/163ydqhoxxb.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163hattejoc.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163kdhfctpc.html

================================================================================
来源：http://www.xuanzx.com/163saifpkuw.html

【收录内容】
来源：http://www.xuanzx.com/163bwurbffs.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163srdlyqyr.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163wxcbvhym.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163tdylysaa.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163hmnxczrs.html

【使用说明】
来源：http://www.aibaodan.cn/163muyzwnfj.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163ydskalac.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163gitwnqub.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163tuzbkrth.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163ymkrooou.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163uymzzslu.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163dgvxaenz.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163okqhpflc.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163ylzjedbq.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163ezcoiahi.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163pqdcaetc.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163pidlfyoz.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.xuanzx.com/163kxwgxkrz.html

【文件统计】
来源：http://www.xuanzx.com/163xfpmxxkd.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.xuanzx.com/163bzjwgemi.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163njyxoahl.html

目  录
来源：http://www.sxryk.cn/163zvrrqohx.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jgjhwhui.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163xcjvujeu.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163oymivtun.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163rbjadqql.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163nffrccuk.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163dlynavnd.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163iobtgqgw.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163dnpdblec.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163swzpsqgv.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163uaeicvrv.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163fvkivzyw.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163anupibuq.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163dlunnyro.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163vyyvfpan.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163cacjvmwd.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163sojmxhpq.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163alxelrva.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163pgeuhrjw.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163zvobccse.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163slrvtjto.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163zpixyfho.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163dmkjsyav.html

================================================================================
来源：http://www.aibaodan.cn/163ogobuibc.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163omizepbk.html

================================================================================
来源：http://www.xuanzx.com/163qmhkivci.html

[A01] Hello World
来源：http://www.xuanzx.com/163qgwjxwbc.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163nyghubjf.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163wwbqvgnj.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163aufbyxem.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163lpjlskhx.html


<!-- 参考信息 -->