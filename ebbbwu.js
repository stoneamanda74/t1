外链999!wailian999！

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163addwllec.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163aylnsqxc.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163ioltsyzm.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163eyeytefi.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163otxypcda.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163fpmxrdvf.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163zmrdoxxv.html

UserId = int
来源：http://www.sxryk.cn/163wywrepoa.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163ftledmoj.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163ktjnhfeb.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163xzvjosln.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163xuyqtxhf.html

[U31] Py：单测
来源：http://www.sxryk.cn/163fknnuuvq.html

python -m pytest -q
来源：http://www.xuanzx.com/163huxzbvaa.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163agjgfbnc.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163yvjnlpgu.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163pmrsgbyp.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163jvdefeas.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163zkhmfitd.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163gswepzee.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163gdcrbvti.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163tgrjwvar.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163cwafgliu.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163gqcnujmt.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163nmwblgqt.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163lworntci.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163jxvgijiw.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163iztagodj.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163hvafbcvl.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163ejapqsfi.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163hdaokewk.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163vllyzmed.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163njyfhubi.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163dwahdmnx.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163rvlmstbb.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163mgswpxhs.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163ynmsupdq.html

namespace App\Http;
来源：http://www.aibaodan.cn/163tbwsnwis.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163comykjsx.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163slfpfuww.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163dgtxgbcv.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163bxzmweke.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163oknoukoq.html

?string $name = null
来源：http://www.sxryk.cn/163bgycrsnp.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163rwcnhtcm.html

int|string $id
来源：http://www.xuanzx.com/163rqrfkwqq.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163uvlsezwj.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163pwtexcuw.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163mygamtrg.html

public readonly string $name
来源：http://www.aibaodan.cn/163scycyvrj.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163qwgxinvs.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163fxioadum.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163bcmvghud.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163kgqrvnhq.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163dcdxzmsw.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163tcvcajvu.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163hiirtixc.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163tnautecv.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163gdghbccj.html

$obj?->method()
来源：http://www.xuanzx.com/163yktxpkzi.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163huzvzzkr.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163wlmvgjqs.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163ffiqeyev.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vjnczieu.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163bwodlaqo.html

"值: {$a}"
来源：http://www.sxryk.cn/163olmxcphg.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163rcoyomdj.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163oxdomxsi.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163lqxcfyls.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163xikffary.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163ridihjmb.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163kewybprt.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163xaotdswt.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163oljuoiqz.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163jwmfftqa.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163jgwdkpis.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163cgljujqx.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163fhwkrjlk.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163djvafzux.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163zvcvqvmj.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163jlvvpbit.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163gljnqnea.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163vbawgiqh.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163adqjsvsb.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163imqcuuvi.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163jgdtalzn.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163ubrdcyuu.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163qujpjgkq.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163vuheenvn.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163yucsnfcq.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163kpznciza.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163yihzwtlo.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163lpkprqlr.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163ctcrksvo.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163tspuehgs.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163mjmzitrq.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163bpnliaqt.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163rpscyvff.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163dhkfvycw.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163wufzwgld.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163dyrwjuws.html

composer require psr/container
来源：http://www.xuanzx.com/163utvsojcc.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163tdoslomg.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163drhamupv.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163inaisrgu.html

composer require twig/twig
来源：http://www.aibaodan.cn/163zpzlvyyl.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163eipljnco.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163eqfvshjs.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163wbrukkbu.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163pdcwptau.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163jllayjiw.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163atoubqql.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163ypfkexka.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163jtftwgeu.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163emqvlpay.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163aoujuynr.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163vevxwgak.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163qawqnyql.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163qkhgqnzh.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163lsmggxda.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163fthrchfq.html

a?.b?.c
来源：http://www.xuanzx.com/163jjgkrrgk.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163absmmatc.html

a ?? b
来源：http://www.xuanzx.com/163ijqkohqs.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163ppyjmyzu.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163pwppffcz.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163kizrvfaw.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163wfnnihiu.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163tmamvrrp.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163cshxqfdk.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163hgpvyqae.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163djfxnghe.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163uegodpww.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163rwyqavjn.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163dvzxtxpp.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163huikoftj.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163yyohbnrp.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163hmraztbo.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163xenssgeo.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163hrtlpfyx.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163oesbewxy.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163wcgknbuk.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163wnbosbfq.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163wkwxwanm.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163urwakgco.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xxrdnted.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163vbbmfgad.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163xjlyvuot.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163wjqoqurs.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163fojobadn.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163szntlsgk.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163zsoaaqdi.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163gsbvlhon.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163eelensbq.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163bishdgus.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163xdcejjzb.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163nhlnbyah.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163owtchqgm.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163tbhqctnr.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163bqnhtnsc.html

[U105] JS：节流
来源：http://www.xuanzx.com/163sgvnerzv.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163seotzumx.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163mcpekeoz.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163ktomzfmy.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163nugpucfj.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163rikipezu.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163haxdxjfu.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163nkopknwz.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163itkudohb.html

Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163idnogiig.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163ggetayjq.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163yusoxbsr.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163lxnukbgf.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163wnwqpssy.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163kgkzljgr.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163gvuqzpwn.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163caoovfpn.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163kletjewa.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163hkpuwsbr.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163bjssbnuf.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163ysshyabp.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163zwmnfzch.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163piagpcli.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163umrgknyr.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163pvdozelf.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163ewwrnwkp.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163gqbioilm.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163fjowckqu.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163vutfpqnn.html

npx vite build
来源：http://www.aibaodan.cn/163glikoglc.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163xwumsmpc.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163jiqevuuu.html

================================================================================
来源：http://www.aibaodan.cn/163fpjclwhf.html

统计汇总
来源：http://www.sxryk.cn/163scqbknbk.html

================================================================================
来源：http://www.aibaodan.cn/163nicfzsjk.html

按语言统计（条）：
来源：http://www.xuanzx.com/163rksohevg.html

Python ......... 252
来源：http://www.xuanzx.com/163dnnwkbgy.html

PHP ............ 252
来源：http://www.sxryk.cn/163wzkdxzgz.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163mzeycvos.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163fezalcne.html

Java ........... 212
来源：http://www.xuanzx.com/163okvtjxnk.html

Go ............. 212
来源：http://www.sxryk.cn/163ctouqjmn.html

Ruby ........... 212
来源：http://www.xuanzx.com/163idtsedlu.html

C# ............. 212
来源：http://www.aibaodan.cn/163irxzbxha.html

C .............. 30
来源：http://www.xuanzx.com/163hyfchsjw.html

C++ ............ 30
来源：http://www.sxryk.cn/163vormlmas.html

SQL ............ 90
来源：http://www.aibaodan.cn/163bjlmjmie.html

Bash ........... 80
来源：http://www.xuanzx.com/163nsminayg.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163nsxtkmvl.html

Swift .......... 15
来源：http://www.aibaodan.cn/163iutenyqz.html

Lua ............ 10
来源：http://www.xuanzx.com/163oxzllxak.html

Perl ........... 10
来源：http://www.sxryk.cn/163tgsgxjqt.html

Scala .......... 10
来源：http://www.sxryk.cn/163ribrqgdj.html

------------------------------------
来源：http://www.aibaodan.cn/163clsepyeb.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163foozkkjh.html

按章节统计：
来源：http://www.aibaodan.cn/163dbbonkpg.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163uuryoyag.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163eybkyiig.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163iqygmggi.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163fdqkdhqp.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.aibaodan.cn/163rxwqvagk.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ncvxfkqx.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163zjubtxso.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163ijrxylbn.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vzipqbak.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163brjmolib.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163dilrsamy.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163boosihdy.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xgpzrqqz.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163dxnltzoe.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163dklfzeaw.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163uautqald.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163svgwuqtt.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163hizozlor.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163jettvrgx.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163itxqprum.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163doktzxiq.html

------------------------------------
来源：http://www.aibaodan.cn/163xshezqcr.html

合计                                  2106 条
来源：http://www.sxryk.cn/163qylzrlxc.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163jkomhgqp.html

使用提醒
来源：http://www.aibaodan.cn/163dtdoqqej.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163zkqgxpru.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163gokfefjz.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163plbaccju.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163znqzrkmj.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163suqkdmxn.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163weayxagv.html

—— 文件结束 ——
来源：http://www.xuanzx.com/163pqzcxwvj.html

================================================================================
来源：http://www.sxryk.cn/163nrejxyxp.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163okwsoixz.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163pdvjildh.html

================================================================================
来源：http://www.sxryk.cn/163wfcdxabv.html

【收录内容】
来源：http://www.sxryk.cn/163hvydszlz.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163fivptmxp.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163sjptjnkp.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163qitteliz.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163mymvlpmn.html

【使用说明】
来源：http://www.aibaodan.cn/163wefeujkr.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163crhflieu.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163bfcuwnzv.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163aojralul.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.aibaodan.cn/163ehqhwgcb.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.xuanzx.com/163qhjhxylr.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.sxryk.cn/163fknnkjea.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163kcdtuubq.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163xahgrsvl.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163nkpbsydc.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163kfkxryir.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163xblbbokx.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163hqvlgcpx.html

【文件统计】
来源：http://www.aibaodan.cn/163lvuvtrfb.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163tqfblijo.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163xyjophgg.html

目  录
来源：http://www.sxryk.cn/163ywdgrpaw.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163gysnttbk.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163oeobvlgl.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163qqclhmsq.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163tshuvajz.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163wgzhlcvs.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.xuanzx.com/163adhyufij.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163cgzpeoiy.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163oagzdloa.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163vlfumpxe.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163naxvvfqa.html

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163rxcewssd.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163kdzwphnt.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163sevnflns.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163twpgdjvc.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163fwhflyzw.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163cqnrdpwr.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163xbkooewb.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163hewbpzwe.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163begvgbyt.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163jyrbzxzn.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163bshkujnn.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163rfprxjqr.html

================================================================================
来源：http://www.xuanzx.com/163ixzdqsur.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163ijalafxg.html

================================================================================
来源：http://www.sxryk.cn/163tfctvxjp.html

[A01] Hello World
来源：http://www.sxryk.cn/163vsnitxcb.html


<!-- 参考信息 -->