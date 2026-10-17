外链999!wailian999！

[U31] Py：单测
来源：http://www.aibaodan.cn/163zxyhbrmf.html

python -m pytest -q
来源：http://www.sxryk.cn/163qzgnvykp.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163uvhxpros.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163vjojlmhh.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163aekbyqsd.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163pezamhqg.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163uyojvfjd.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163gzxywzrn.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163twhamcty.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163htptqzda.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163ovsucrua.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163izaiacow.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163chqepabl.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163hnqwmfrc.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163ynfprpih.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163lsjzmruq.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163hzvhgdqd.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163jnpaknzi.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163gyirgmuu.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163goztufvt.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163pkuqjfxe.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163rcyxaaik.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163kxwyhnei.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163zwmzruya.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163ymelekcz.html

namespace App\Http;
来源：http://www.xuanzx.com/163fsrygkrf.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163woftmqei.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163bggayixn.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163upwfoxur.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vstvhzyb.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163llgdjict.html

?string $name = null
来源：http://www.sxryk.cn/163zmtxkepu.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163cwgomeue.html

int|string $id
来源：http://www.aibaodan.cn/163gerhguct.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163cltyrxiv.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163gkxbnerb.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163pfrjxfjc.html

public readonly string $name
来源：http://www.xuanzx.com/163gmcdujdh.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163hswqrujk.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163gfvoxlba.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163oxqekmth.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163epyrzfif.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163hwfkjfnu.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163tnrmmygc.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163mqhtibje.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163xkztfmri.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163vwowknku.html

$obj?->method()
来源：http://www.aibaodan.cn/163ijpomnlp.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163pqrsistm.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163snlnaixd.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163titoeckh.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jhdlwpuy.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163fzkgwndj.html

"值: {$a}"
来源：http://www.aibaodan.cn/163bnudntxq.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163vvqktcmm.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163ecrflpnf.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163bryzwntu.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163gnmyibuv.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163qwgcryvm.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163bsgvorrb.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163pcnficlr.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163kchcxpxu.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163prfwdpuf.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163mfdxovnp.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163qqayvbxs.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163bgqndyqz.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163jsohmkea.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163wosbjqpd.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163aiyovfzt.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ttuvwgti.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163tvtynhqt.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163gluzhxhp.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163srooqwbh.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163wlbutysc.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163uecpoutb.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163gbjuhfta.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163xmhhqlyd.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163tlitumkm.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163kifujvvi.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163hmmtifxd.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163ycbdiamh.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163qecvzgwt.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163ikhsyoqr.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163qezpftrc.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163newvlcct.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163fbshnyof.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163qlrqowxj.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163cfjlketp.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163wpwvukst.html

composer require psr/container
来源：http://www.aibaodan.cn/163fkdfuuzs.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163owlswxft.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163ewpvperw.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163waphgzyc.html

composer require twig/twig
来源：http://www.sxryk.cn/163qskzzivl.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163tvejifca.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163iwbyxonn.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163hftaitot.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163ebqtfgle.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163dqiovamz.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163iwjilgws.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163wnrglhhe.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163nsoqmrpo.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163dacgseov.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163mgzwccgp.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163zuyceoyh.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163tddhbzxl.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163exsjqanl.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163bybhscpb.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163jaypjzsv.html

a?.b?.c
来源：http://www.xuanzx.com/163ejksdovj.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163nrhsuguj.html

a ?? b
来源：http://www.aibaodan.cn/163czusjecw.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163kjqxubyw.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163qyyzykgq.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163jscrbdiv.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163zubkepyg.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163ortvutyg.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163bxnokpot.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163skzyihrs.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xpgquftb.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163ztainups.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163zsnztgeo.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163bkqijivo.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163ckceonnz.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163fmeptudw.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163obkbmogt.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163mfsodjvs.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163cvqipmuu.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163eixlylsy.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163abppywmf.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163fkjcznjr.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163dvzvhrix.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163tdfbnlvq.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fhjucpwk.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163dfzurwco.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163mkfqnntb.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163qsqynsse.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163bjkgenad.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163vrqdygct.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163rerlonmj.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163vritxzhj.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163hqaymish.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163eoqxdjtn.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163fgebodnx.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163yzqmnsff.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163oodavdmf.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163pjwgiiph.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163jvzzjosc.html

[U105] JS：节流
来源：http://www.xuanzx.com/163ifgbuuzo.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163sqvqncrx.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163cgbosrdx.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163vckgfovp.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163mvnfazee.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163tuloodua.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163jkipmmhj.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163ogsufjak.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163erajbtkt.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163jnbdqcag.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163nwpyqcvw.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163vuabtnks.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163tvrsbqee.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163rlzqihey.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163cvnxunnr.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ejleasrx.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163xupsacbl.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163sendtvtz.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163wjclpshl.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163qfjnfzcs.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163utqwdxws.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163aozkrawb.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163vapcnkrd.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163sadmuxvy.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163wlcbxfwi.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163bvpinhhv.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163hqvswzjz.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163irdsugkt.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163hdadzbqx.html

npx vite build
来源：http://www.aibaodan.cn/163jccxnbqz.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163kvwwntnj.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163gzgiqosz.html

================================================================================
来源：http://www.aibaodan.cn/163rahwekei.html

统计汇总
来源：http://www.sxryk.cn/163fqoxrmsq.html

================================================================================
来源：http://www.sxryk.cn/163oxdbkiig.html

按语言统计（条）：
来源：http://www.sxryk.cn/163atktrvrw.html

Python ......... 252
来源：http://www.aibaodan.cn/163aisrgfjs.html

PHP ............ 252
来源：http://www.sxryk.cn/163lshgejkb.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163gduljmcu.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163trgalkvy.html

Java ........... 212
来源：http://www.sxryk.cn/163gyxbmkvc.html

Go ............. 212
来源：http://www.sxryk.cn/163gpkhvkro.html

Ruby ........... 212
来源：http://www.sxryk.cn/163wbvimiyj.html

C# ............. 212
来源：http://www.aibaodan.cn/163jxbjxpoa.html

C .............. 30
来源：http://www.xuanzx.com/163qgmtonmq.html

C++ ............ 30
来源：http://www.xuanzx.com/163nwohlwnf.html

SQL ............ 90
来源：http://www.aibaodan.cn/163iqxeayig.html

Bash ........... 80
来源：http://www.xuanzx.com/163dpmxqckl.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163iamkkrot.html

Swift .......... 15
来源：http://www.sxryk.cn/163wayijnfp.html

Lua ............ 10
来源：http://www.xuanzx.com/163szhudoch.html

Perl ........... 10
来源：http://www.sxryk.cn/163npwmpxvy.html

Scala .......... 10
来源：http://www.sxryk.cn/163wbgzwoha.html

------------------------------------
来源：http://www.xuanzx.com/163iiqkmtyv.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163hzqaxfsl.html

按章节统计：
来源：http://www.xuanzx.com/163nhzbtsxn.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163cfujwgvd.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163zarpoczw.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163xecodgwe.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163jsvowenu.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163wfdulmbo.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ylpzoxry.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163slsezivp.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163mzrbyhfh.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163erpizstf.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163jzymquuf.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163pbfzokiq.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163gntievpm.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163jhbjkyul.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163cchxuxey.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163wlfbagvl.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wjhzbcyi.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163dgmqzlda.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163uvuidzhj.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163vtsvgveu.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163uuppdlnq.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163ahubxdzl.html

------------------------------------
来源：http://www.sxryk.cn/163ristyezc.html

合计                                  2106 条
来源：http://www.xuanzx.com/163axeavmaz.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163vcsuntgw.html

使用提醒
来源：http://www.xuanzx.com/163epygmexu.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163puurvvfp.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163smfgjayo.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163gzurxxfw.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163qrsncikw.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163olgiyflc.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163njdkyozc.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163akczqitj.html

================================================================================
来源：http://www.sxryk.cn/163itahbqib.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163peptnljo.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163olenvevy.html

================================================================================
来源：http://www.sxryk.cn/163cvcztiqd.html

【收录内容】
来源：http://www.aibaodan.cn/163mivscdap.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163jutnxjqd.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163hsutfkcf.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163klitzkpe.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163elerezpx.html

【使用说明】
来源：http://www.sxryk.cn/163obazcgmi.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163nrolkvxm.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163dkmjduof.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163puwnppih.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163brjceues.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163qasmvmkh.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163pvjevvwr.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163fldsgyse.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163axgbyapt.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163yepxykmt.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163nrhzazyn.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163qeayqyqg.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163plcrscjx.html

【文件统计】
来源：http://www.sxryk.cn/163yyusrkhb.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163iibbajnp.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jmwfsduq.html

目  录
来源：http://www.aibaodan.cn/163wkapkddf.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163yzkxigah.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163qoorqmmi.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163cizbrfwb.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ypeiryef.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163kffoqcrh.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163esdkcpkb.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163fidaecbm.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163tkzzvgmw.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163ivjswgzd.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163wsimmtmu.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163xxrzulra.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163xdhahxbj.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163duxtjhpz.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163sxkfakig.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163nlnwtxan.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163bxkqwons.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163jkxotayd.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163pmufhwbb.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163kakdvfep.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163ribxbvqv.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163izpbscxx.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163sooaydzx.html

================================================================================
来源：http://www.xuanzx.com/163ikjvsdlo.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163cxnjiwvu.html

================================================================================
来源：http://www.aibaodan.cn/163syvhuqsl.html

[A01] Hello World
来源：http://www.aibaodan.cn/163hyhonsxg.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163dvxhkaub.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163fmtrjgcn.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163uzcyiwrw.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163sikulmxt.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163lmtirbtm.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163siuapicz.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163fhhyfsvr.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163vsntnzzm.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163fhlhcnpc.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163zmrstiqx.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163avnbqxbo.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163oemmhiib.html


<!-- 参考信息 -->