外链999!wailian999！

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163mbtimpbo.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ocopyusb.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163rmhpwysv.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163gfruhjcw.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163eeilnirh.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163lpevsvgc.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163hgtjcaug.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163hcdjsdls.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163pnkrqysw.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163duhlwhvu.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163afgabbkf.html

list(zip(*m))
来源：http://www.xuanzx.com/163efcqijyy.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163ubcsxezx.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163fwziiiki.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163riznvraq.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163ejnsgfgh.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163wnadobwx.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163rvvaylpw.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163ygjxovul.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163cranarcl.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163ruhdkwlf.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163bjctbysh.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163exrfmtiy.html

UserId = int
来源：http://www.aibaodan.cn/163wphtgnpx.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163rihkydrp.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163zcqjvigi.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163hlipgbny.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163rgmylgva.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163thsauket.html

python -m pytest -q
来源：http://www.xuanzx.com/163hqdlqkrw.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163allljybr.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163vpqmrzrz.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163xeaiarjj.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163nwfybgaj.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163hwwgzbll.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163okmcnqxy.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163wxdpsdlo.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163lwcbhoye.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163rvoafgjh.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163czzpdgfv.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163ngpwltdu.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163afjmmkty.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163omnpjzxe.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163xkhpjdvt.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163vawyxtxn.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163cdjgtqvo.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163ixskjnrn.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163zxcqalaj.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163qihojgru.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163qyzszvsa.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163cemovuwu.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163cgiyqttq.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163meqbjdtb.html

namespace App\Http;
来源：http://www.sxryk.cn/163kjpxxqbp.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163vbnllfun.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163oljyydmb.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163wmbyyjjl.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jyqwvgig.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163qdgvuobc.html

?string $name = null
来源：http://www.xuanzx.com/163nrkuddwz.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163ufjxwkbq.html

int|string $id
来源：http://www.aibaodan.cn/163qmurksew.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163cefeovqq.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163bxpkrrfn.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163sioandxx.html

public readonly string $name
来源：http://www.xuanzx.com/163yvzvdtyi.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163tnbjckgx.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163ntljrsbb.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163untjnapm.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163nrbubpme.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163kaxekprx.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163qreztxde.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163ztchxixg.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163uepssrof.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163rrvdjkkm.html

$obj?->method()
来源：http://www.xuanzx.com/163sijjpqrt.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163atckolfl.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163cjhhurjp.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163dmnaoene.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163omvnzrbe.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163uyhqvpua.html

"值: {$a}"
来源：http://www.aibaodan.cn/163exkexlsw.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163dctcqlie.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163xcgnacrk.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163amygrgga.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163hnunbflq.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163lospwjdi.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163bziuegwq.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163njzzgbtf.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163reggjnwd.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163dwamqtok.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163qjbysqja.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163rccmerxr.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163tqnctwpa.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163rjyqkqlz.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163bvbbbzwt.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163wspvnjpb.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163azasozaq.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163vmmatbzn.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163ygbubpbe.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163vwjkegno.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163agkpziia.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163uslswjwh.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163hkhvmxvv.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163zxqmsmyc.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163jnsqzywt.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163fiqahfyd.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163mcaffcfo.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163hawghftj.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163cjakaezw.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163kxjuelip.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163sawckmfl.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163vvpcwkpe.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163vgwfmuki.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163toaoyizs.html

getenv("APP_ENV") ?: "production"
来源：http://www.aibaodan.cn/163fqnpuwwp.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163asunqbcw.html

composer require psr/container
来源：http://www.aibaodan.cn/163npbklxwe.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163smnugtqh.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163owghmozx.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163iocylhmv.html

composer require twig/twig
来源：http://www.sxryk.cn/163oexfmjkp.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163nwbzczcg.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163awftfryf.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163ljutzdxl.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163qxxnuhjo.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163xfeowsek.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163xmshbzpg.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163wqbtgxoj.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163hetkdvlc.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163lkcdszpl.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163qjhhhwrf.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163hjelwiia.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163apwbfqpp.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163dlxljeju.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163vomhkcti.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163oduxcknr.html

a?.b?.c
来源：http://www.xuanzx.com/163fiecakff.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163mnndoboz.html

a ?? b
来源：http://www.sxryk.cn/163tmqxocvf.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163tuidslde.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163hwpmqqkt.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163tteqigaf.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163ttdwdatu.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163yevldemg.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163rwibylbj.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163bavawcox.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163imlcihuo.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163rkgfthhh.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163xzjcubvn.html

[U92] JS：深拷贝
来源：http://www.aibaodan.cn/163asotbguw.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163juedbuag.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163jibflhlv.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163hxrfanpq.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163fkeeqitn.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163nlfxrepm.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163feknhhpu.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163qpkztfvv.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163chocljdd.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163dqmzwbvw.html

[U97] JS：并发请求
来源：http://www.sxryk.cn/163lwkcwhpr.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163mcdnehxg.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163skleitsm.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163nwtervhn.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163xbraewpo.html

el.addEventListener("click", e => {})
来源：http://www.aibaodan.cn/163msopnbsb.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163kytmkhzx.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163frovaxjz.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163jyazbrzu.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163vgaaacxn.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163kmqvfpns.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163vhxxdifm.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163bzjwvibf.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163bijicurl.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163dzgokxgu.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163inhumvjo.html

[U105] JS：节流
来源：http://www.sxryk.cn/163nsoirgjg.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.xuanzx.com/163vafqerbc.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163qlhmibba.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163iavnwbqe.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163dpfbacqi.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163kybtnurt.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163yoejkjlw.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163mlrhdqoq.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163agfwisfx.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163bbtaxkvb.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163ujegwzvt.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163icmiddaj.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163zufjdhib.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163hniedeol.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163pmbqmrxz.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kczvytjh.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163tuonwfkn.html

s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163zjpphaqg.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163awtjzrnd.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163zflzxdvo.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163nmmethpk.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163aailelke.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163rzytzrwg.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163eqxhzuiu.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163agrodsmb.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163guhmcuqs.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163uaulzdrc.html

npm i -D vite;  npx vite
来源：http://www.aibaodan.cn/163mymipxqu.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163hsyedesz.html

npx vite build
来源：http://www.aibaodan.cn/163tpbomrsi.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163xsqibgoe.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163uujujxkv.html

================================================================================
来源：http://www.xuanzx.com/163sypcpitd.html

统计汇总
来源：http://www.aibaodan.cn/163xwthfcmr.html

================================================================================
来源：http://www.sxryk.cn/163ctyiabpv.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163vckormmt.html

Python ......... 252
来源：http://www.sxryk.cn/163hhuzrlgh.html

PHP ............ 252
来源：http://www.xuanzx.com/163eifijkjx.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163jufzufjp.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163jndwqvwi.html

Java ........... 212
来源：http://www.xuanzx.com/163qvxizaup.html

Go ............. 212
来源：http://www.aibaodan.cn/163clbsqipd.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163xrnjjzij.html

C# ............. 212
来源：http://www.aibaodan.cn/163wmsucqkj.html

C .............. 30
来源：http://www.aibaodan.cn/163wvcaonjz.html

C++ ............ 30
来源：http://www.aibaodan.cn/163lqyhqgoa.html

SQL ............ 90
来源：http://www.sxryk.cn/163ynyjlejg.html

Bash ........... 80
来源：http://www.aibaodan.cn/163zbzrhbbw.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163yprclzpk.html

Swift .......... 15
来源：http://www.xuanzx.com/163qzzbxjzg.html

Lua ............ 10
来源：http://www.sxryk.cn/163hhooymly.html

Perl ........... 10
来源：http://www.aibaodan.cn/163yhswynsv.html

Scala .......... 10
来源：http://www.sxryk.cn/163yxcxbrgt.html

------------------------------------
来源：http://www.xuanzx.com/163fmhnleoh.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163xymzorog.html

按章节统计：
来源：http://www.aibaodan.cn/163fcbjiyex.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163vzprbiyt.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163hpymmlaj.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163mhcjycbo.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163zrfladcj.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163mshchuvc.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163ewxmbtes.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163nlngdzos.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163nkzwgsei.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163rgcypjcm.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163zbdgclwu.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163tiuxvfck.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gkvrmbgi.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ydrrvpst.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163tjwccawh.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.aibaodan.cn/163ulrrkjtg.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ggshdrgj.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163bszqitix.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163tjdkidfq.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163jgzaicfn.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163kjtbjzfr.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163lkptycgh.html

------------------------------------
来源：http://www.xuanzx.com/163dtzsbkjb.html

合计                                  2106 条
来源：http://www.sxryk.cn/163zsjqgpkk.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163rwngxpia.html

使用提醒
来源：http://www.aibaodan.cn/163jxjtgdoj.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163mdqvjscd.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163yblegvdj.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163dopumsap.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163gghsbpyj.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.sxryk.cn/163qfawnccc.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163lspirosn.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163dwufjaeh.html

================================================================================
来源：http://www.aibaodan.cn/163kwfbnmcp.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163qzmztaov.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163qtzcyjuv.html

================================================================================
来源：http://www.aibaodan.cn/163ioucebpm.html

【收录内容】
来源：http://www.aibaodan.cn/163tzftnjns.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163hiqddhap.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163brfcwcqc.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163kjglydbs.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163evmabrmz.html

【使用说明】
来源：http://www.aibaodan.cn/163qddhhlzo.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163miwrwxll.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163ixavxila.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163pjexhyak.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163ybkbbopq.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163jpowzggd.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163dpeswjhx.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163sooamnjx.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163unkpjmqi.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163ivoicceb.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.aibaodan.cn/163pruuxdbf.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163mtbnyvqc.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.sxryk.cn/163rnfvpija.html

【文件统计】
来源：http://www.xuanzx.com/163rhkkmgqs.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163xnuoqjwo.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163hepigofs.html

目  录
来源：http://www.xuanzx.com/163vewjutjx.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163wjeoovca.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163skqoltye.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.xuanzx.com/163fgztqaig.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163fatxatpc.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.xuanzx.com/163oecmyjon.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.aibaodan.cn/163mxjptzem.html

F. 文件与目录                  （第 6 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163frzynhdo.html

G. 面向对象                    （第 7 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163xfeszcev.html

H. 异常与错误处理              （第 8 节，10 个任务，80 条）
来源：http://www.aibaodan.cn/163hcuialqa.html

I. 正则表达式                  （第 9 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163teftaouw.html


<!-- 参考信息 -->