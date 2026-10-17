外链999!wailian999！

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163gjdtegig.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163bpakmwjg.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163xsqbnvdc.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163rdbedodo.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163yarzejuf.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163lwttvvqe.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163roaxtkkm.html

list(zip(*m))
来源：http://www.xuanzx.com/163gbkfequv.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163clauwbmz.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163prxibufs.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163omifhulj.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163mudanfhc.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163yclqsqpp.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163cuzonvae.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163xiqkquth.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163vlxzdgkj.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163rulznbbc.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163wxeuzegp.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163aiigcbbl.html

UserId = int
来源：http://www.xuanzx.com/163rsjdodmj.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163dhsldfxc.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163ofubzflk.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163kcoggdnz.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163jtneplgt.html

[U31] Py：单测
来源：http://www.xuanzx.com/163rtxcqdmu.html

python -m pytest -q
来源：http://www.aibaodan.cn/163nrvvejcl.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163iuesholx.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163zoanrvjb.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163fukbobmy.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163kzgcltcv.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163addwidua.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163wvtayzvc.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ivtlrgis.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163lngnrezt.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163zpymxriq.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163lojilsrn.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163dauwhxyf.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163ytimuxlt.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163zuzzyboz.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163plnlgmbp.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163npssftab.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163rmxkiliv.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163mxsgcaor.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163dxtdmzhk.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163kjrjmnnm.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163tdzcswjq.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163canmeird.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163gxheyblv.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163hpttvsat.html

namespace App\Http;
来源：http://www.sxryk.cn/163xxvxqhto.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163qbikjyzc.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163ybiriguh.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163cvnpoxgy.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163mgihqbgi.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163orewcavc.html

?string $name = null
来源：http://www.aibaodan.cn/163aviouhlb.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163spxafmig.html

int|string $id
来源：http://www.sxryk.cn/163qgsxckgw.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163pxasdoqx.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163pxmnfjtx.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163vsfiaxch.html

public readonly string $name
来源：http://www.sxryk.cn/163rvvfjrvx.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163dakbonxw.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163yftrsrcj.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163qgjjpdjz.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163fghvaegt.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163aeezzfwl.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163mgwxahfh.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163rtbdihjk.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163ypdkhlig.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163xcbewcfk.html

$obj?->method()
来源：http://www.aibaodan.cn/163cldvnwip.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163gdhopakg.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163inpycmpj.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163pkqoayfv.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163bnwifufa.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ubmdpmeg.html

"值: {$a}"
来源：http://www.sxryk.cn/163yylohyeg.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163ngkweuqe.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163immnuubb.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163xrstohzs.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163zkffqzyn.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163hxigcman.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163auuqjqbw.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163rdtvckdy.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163qaeodzbg.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163hpgeevaa.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163rrmzwyqi.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163kldeuppb.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163wokulxpf.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163vvydeeuh.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163xsxtwjpy.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163hzdeznlp.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163vsolesuw.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163hgyqqqhd.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163bhbkfyhc.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163onnhfpow.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163fkkvbsta.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163kyfiwydw.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163aowvvpop.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163gexeltml.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163lmmonrny.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163jzqevyhh.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163vsdpouty.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163tdbifxru.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163wyeoorfm.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163bjhtiofq.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163pcoftlus.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163aeiowvsn.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163jfdufhzx.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163spwnunwm.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163dvgziahn.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163ruzjxrwt.html

composer require psr/container
来源：http://www.xuanzx.com/163ujwviipa.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163jsjwsicl.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163aoqbdmbb.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163pfakgbvu.html

composer require twig/twig
来源：http://www.sxryk.cn/163xmlzxylq.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163bhmhyvpa.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163ahkvidme.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163euearleu.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163tjqzfmrr.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163pabrufeu.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163rqeoynib.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163fwwtncvo.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163oqfiitve.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163ovonyszw.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163ryetbvaf.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163wsbhkhit.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163teeznycd.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163wrtphmxg.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163bhzxamws.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163lbrxdstk.html

a?.b?.c
来源：http://www.sxryk.cn/163gadvwykm.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163vidqlhhg.html

a ?? b
来源：http://www.aibaodan.cn/163mibtdrbt.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163avfmcvxf.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163npykjufw.html

[U88] JS：对象展开合并
来源：http://www.aibaodan.cn/163xqtydapk.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163qopegeyw.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163bwgfcfyo.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163vjgfazsk.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163mvlnulxz.html

[...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163usgrabql.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163degzxbpf.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163pzzlkeks.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163oggxoalr.html

structuredClone(obj)
来源：http://www.xuanzx.com/163xhlhfree.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163hukoqrjj.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163sdwnknus.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163pgrjmuha.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163ekydwpat.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163gqbolvot.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163glspbbvx.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163xiqnxduw.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163mnwkxafj.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163tovpvsyt.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xiazqpkz.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163pnthnuzd.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163jtgptynp.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163uxuxjktu.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163stnbulcw.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163sfodtsbo.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163lkhsxxnz.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163ijsmjpmf.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163wnhclhiv.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163jlkpldxg.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163fueyaeje.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163awwmnopr.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163igpgqnrw.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163ptmwailt.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163kbynaiqi.html

[U105] JS：节流
来源：http://www.sxryk.cn/163bneclomy.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163ivjgxfbp.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163yctpqwrp.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163ovlakaow.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163pstyqegy.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163pmppzejq.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163mkzfvjyr.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163mppjoysb.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163rdhoufvo.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ecudhoxx.html

[U110] JS：数组分块
来源：http://www.sxryk.cn/163ydorwfpv.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163gpzkwqee.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163crvewgtn.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163suvmiuaj.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163nocxaeao.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163owmtvmtp.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163iuehshkq.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xlkcrnmc.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163qbtdqcmh.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163jsliimmy.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163bgpdxsdy.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163nyedtams.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163pgekorsa.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163hmfelbom.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163hyfpjbng.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163hosnhiou.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163nhvldgsh.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163cxupagsv.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163ckubfmps.html

npx vite build
来源：http://www.aibaodan.cn/163dmfgnmwq.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163kstcpijd.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163zylqsbsf.html

================================================================================
来源：http://www.aibaodan.cn/163ytpdazlj.html

统计汇总
来源：http://www.aibaodan.cn/163zlxkyjww.html

================================================================================
来源：http://www.sxryk.cn/163zjkbhhym.html

按语言统计（条）：
来源：http://www.xuanzx.com/163agfyftlt.html

Python ......... 252
来源：http://www.aibaodan.cn/163ijraqyjc.html

PHP ............ 252
来源：http://www.aibaodan.cn/163nwidfrvz.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163rhamcdem.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163httcupxa.html

Java ........... 212
来源：http://www.xuanzx.com/163fajwsjgr.html

Go ............. 212
来源：http://www.sxryk.cn/163nnoruaxj.html

Ruby ........... 212
来源：http://www.sxryk.cn/163maadlfol.html

C# ............. 212
来源：http://www.xuanzx.com/163cxsushpy.html

C .............. 30
来源：http://www.sxryk.cn/163zuruvoyk.html

C++ ............ 30
来源：http://www.xuanzx.com/163fptncald.html

SQL ............ 90
来源：http://www.aibaodan.cn/163wakqwkrt.html

Bash ........... 80
来源：http://www.xuanzx.com/163wngpxrti.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163pnuwqjxm.html

Swift .......... 15
来源：http://www.aibaodan.cn/163iablneat.html

Lua ............ 10
来源：http://www.aibaodan.cn/163hnxmovdj.html

Perl ........... 10
来源：http://www.sxryk.cn/163ddskiwgn.html

Scala .......... 10
来源：http://www.aibaodan.cn/163uuirbbzw.html

------------------------------------
来源：http://www.sxryk.cn/163fkvbcgtq.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163fjgafivb.html

按章节统计：
来源：http://www.aibaodan.cn/163egojskdx.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163xslenztj.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163tovjygak.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dwshttxm.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163timevahh.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163mogakndk.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163wcvlcffw.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163dtjdkmyt.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163tprtlons.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163yxdlgnhq.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ngfvpbxi.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163chzqumgc.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163tkinajga.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ixiflole.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163odqhwypp.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163yelxvbqa.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163faiynzyb.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163fkszmeou.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163jvqzrijc.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163lndbqinl.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163vcgyliwv.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163jmkvtzhv.html

------------------------------------
来源：http://www.xuanzx.com/163uvutfpjy.html

合计                                  2106 条
来源：http://www.xuanzx.com/163lwftmpey.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jsriqpov.html

使用提醒
来源：http://www.aibaodan.cn/163djwwbpnf.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163czuofzyo.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163codlsmad.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163cfeprdsn.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163hndxhevn.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163idgrdpzx.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.aibaodan.cn/163sfqcnbrj.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163aezfhpiv.html

================================================================================
来源：http://www.xuanzx.com/163kjundeqy.html

程序语言常见例子速查手册（2024 版）
来源：http://www.xuanzx.com/163nbxjrkwt.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163zfwajtqk.html

================================================================================
来源：http://www.sxryk.cn/163nwtiudox.html

【收录内容】
来源：http://www.xuanzx.com/163qwwqvkrx.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163vfuukvhy.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163uxqxujbv.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163kavqvbis.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163seuwqxph.html

【使用说明】
来源：http://www.sxryk.cn/163sblmstbt.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163vtaqaple.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163bpddjuuq.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163ufvglbeu.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163mqnnloca.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163niyetbui.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163glusqtir.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163gzhpizkx.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163tidmfkbi.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163kejuyxks.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163tzfscgay.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.sxryk.cn/163uhoqazbh.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163jlqxbbxe.html

【文件统计】
来源：http://www.sxryk.cn/163hyihpohs.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163qtbudemq.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163wopbvauo.html

目  录
来源：http://www.xuanzx.com/163yguaerax.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163jkqjnuet.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163xnmjcnoj.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163qdhfuvwl.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163dlmwvtta.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163kdmgyxtv.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163yachgouo.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163ysbdlrxi.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163vhagklth.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163gwlrlhpz.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163svtlfxsj.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163sqjtrftz.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163mwjcxlgk.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163uevpjzwz.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163axnhpikh.html


<!-- 参考信息 -->