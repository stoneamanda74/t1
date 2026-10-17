外链999!wailian999！

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163pyqkgdld.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163bbqblbjh.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163kyulwlpi.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163nbaewrno.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163bkuzrvbj.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163blhapjek.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163iftrmche.html

defaultdict(list)
来源：http://www.aibaodan.cn/163nifsnelj.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163femxpivg.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163qdmxcjtl.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163licskkjc.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163fmsolenw.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163rtcvukqp.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163paqhmxqv.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163ntbqzyzq.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163saescopu.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163ediahsha.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163nrzfcpun.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163redytqac.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163vqcihmvc.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163ptuviyzp.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163zeqinyqg.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163querumtw.html

list(zip(*m))
来源：http://www.sxryk.cn/163czrgmkmx.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163xsqnnlry.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163srhaddmj.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163ymjpvngp.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163rmclnkau.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163fjlzixpl.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163yimbjoov.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163jxiajiwz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163wsdslozp.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163qtxrqnzw.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163cvkixuge.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163taxbjnjv.html

UserId = int
来源：http://www.aibaodan.cn/163ssfclqvg.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163bokejtzn.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163awaxulfm.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163mqapkpdc.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163opxjjavs.html

[U31] Py：单测
来源：http://www.xuanzx.com/163mlehzhrt.html

python -m pytest -q
来源：http://www.aibaodan.cn/163kcrrdzjl.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163xckwflbr.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163xqmjwyvj.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163wvoxoqmy.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163xyantlsi.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163bnsveani.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163gpkexhxb.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163onwpieno.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163jthxfpfp.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163gnylpwzu.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163asqhzflt.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163tnmsztwh.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163qasxrqmk.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163ojvfzhrj.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163thrjunvl.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163xqohyqfv.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163xjsntrvv.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163suvlwoll.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163vrbnpdxi.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163tpzntktf.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163jfazexdv.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163qmbwjhpj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163megacacs.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163uctlokxd.html

namespace App\Http;
来源：http://www.sxryk.cn/163ziosuakt.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163rnwvscuo.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163mhodcsik.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163kjimlbwq.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ozmahduu.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163enqjeknu.html

?string $name = null
来源：http://www.aibaodan.cn/163deauebeo.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163ocmpfnvw.html

int|string $id
来源：http://www.xuanzx.com/163ytutzfgy.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163lnawvyba.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163oulhzfwn.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163wxusuotf.html

public readonly string $name
来源：http://www.aibaodan.cn/163rqjvojtv.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163oxguhvyp.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163mmikixli.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163tbmobghv.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163jherbzrj.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163gcwerdsm.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163gvnqjpka.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163qmlpepzb.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163xrxxdylo.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163honfreko.html

$obj?->method()
来源：http://www.aibaodan.cn/163gugsujtv.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163jiqlonfb.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163nvgoiuxr.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163lmjwfzhd.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163kcyfgecv.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163wjpqizui.html

"值: {$a}"
来源：http://www.xuanzx.com/163jngqzebv.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163yrnhxeor.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163evrkkgva.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163pgpvkgtl.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163kozmuzbe.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163gfakduau.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163ksnncsdo.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163fhyxiarf.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ubmdshyf.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163yyniaawr.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163faevjjjp.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163ymrjtnsb.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163amoatfav.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163kgyadlyd.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163irgfyijf.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163nnslrxmk.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163mmxudldt.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163jzgulcvz.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163yvoprbgz.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163xlgkxuca.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163wlzvmcas.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163wdxqpxfv.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163ocbbemvc.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163ylrwpost.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163uroeacan.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163wuhafcsc.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163lbaizpmu.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163grstmlxb.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163jgzuqkvs.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163gtuhjjoh.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163ndzbkpvm.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163mwnahldg.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163bhmpbslx.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163squioado.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163mfwythna.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163qaqlxvek.html

composer require psr/container
来源：http://www.xuanzx.com/163ndnhkllf.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163cvqsuzjv.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163tfjuhnai.html

[U77] PHP：模板渲染
来源：http://www.sxryk.cn/163zjroszjq.html

composer require twig/twig
来源：http://www.xuanzx.com/163wyhzvywu.html

[U78] PHP：单元测试
来源：http://www.aibaodan.cn/163sbbhsnra.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163agvtkjyx.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163vjfjqtcl.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163hspxcjeb.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163bqpzmfua.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163rwwxazir.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163skjcfuxc.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163lzidigrg.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163wvntnyfh.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163zcouqpxp.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163kcpyvpdu.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.xuanzx.com/163rxdiybix.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163papoisik.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163vhgzbfzp.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163czhhkulv.html

a?.b?.c
来源：http://www.xuanzx.com/163vqynloce.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163agyquwri.html

a ?? b
来源：http://www.xuanzx.com/163swpyssyt.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163kxebjmxm.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163clunqjic.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163pcdtipcs.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163yqrsxxur.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163xoqaiftd.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163ehxrrmxl.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163dblebrip.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163buanntvo.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163ddfjyoju.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.xuanzx.com/163rmtoaeom.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163krvogvuy.html

structuredClone(obj)
来源：http://www.sxryk.cn/163ntuclsqr.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163qbctmmdq.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163qsicelig.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163vommtjzp.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163xqfcgkev.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163cjesmewb.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ihcagjal.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163duldcddp.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163khteeugn.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163dmgcmkxv.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163lpcbwlyh.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163bymjymwu.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163xlxewmcn.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163uprgyhzi.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163tmevicxf.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163driduzvd.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163lhwphpjc.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163whkakilq.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163qxflwmhh.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163sjqaivfg.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163uuhewckl.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163pkpnmsua.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163mfpxkfkx.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163nzkzwzyr.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163glzrzvga.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163alzzgntc.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163jnxniynm.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163znlrssft.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.aibaodan.cn/163mygtmswe.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163wbtaehyp.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163xcssrqjd.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163yzrlazba.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163rrcesppz.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163fgqewrsg.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163bmsickzz.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163cfchlrny.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163pyuafflp.html

[U111] JS：对象转 Map
来源：http://www.sxryk.cn/163vhurbhxd.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163nqvndiyo.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163rjxfedqy.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163fixuzuzc.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163avgzalby.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163itqoxhdh.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163nissdqdh.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163pcmogclf.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163hadtwuaf.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163hgwdxxpk.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163rspabzmc.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163lkewowxz.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163pnpuwzxy.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163hgelinxm.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163cyukxspa.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163ohlsolji.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163nespknhe.html

npx vite build
来源：http://www.xuanzx.com/163xpeaemdh.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163zvfotuue.html

import.meta.env.VITE_API_URL
来源：http://www.sxryk.cn/163khzgctam.html

================================================================================
来源：http://www.aibaodan.cn/163kkihrxzh.html

统计汇总
来源：http://www.xuanzx.com/163zqxhazlo.html

================================================================================
来源：http://www.sxryk.cn/163tedpmpik.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163hkiiuamu.html

Python ......... 252
来源：http://www.xuanzx.com/163smmjburz.html

PHP ............ 252
来源：http://www.sxryk.cn/163bropgqix.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163lvesbavo.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163tjqvmsho.html

Java ........... 212
来源：http://www.aibaodan.cn/163qfvgyhtt.html

Go ............. 212
来源：http://www.sxryk.cn/163fekvyxoj.html

Ruby ........... 212
来源：http://www.sxryk.cn/163xdrfzzff.html

C# ............. 212
来源：http://www.aibaodan.cn/163ljiaackm.html

C .............. 30
来源：http://www.xuanzx.com/163vhqffkky.html

C++ ............ 30
来源：http://www.sxryk.cn/163fhkdlutb.html

SQL ............ 90
来源：http://www.sxryk.cn/163isbdcbuw.html

Bash ........... 80
来源：http://www.sxryk.cn/163qoroorzc.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163swynkwrs.html

Swift .......... 15
来源：http://www.xuanzx.com/163jhmgaelx.html

Lua ............ 10
来源：http://www.xuanzx.com/163kemiuqio.html

Perl ........... 10
来源：http://www.sxryk.cn/163giczmhgn.html

Scala .......... 10
来源：http://www.sxryk.cn/163ijzunpxr.html

------------------------------------
来源：http://www.sxryk.cn/163qcdajxpm.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163yippixel.html

按章节统计：
来源：http://www.xuanzx.com/163xggzijhh.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163qydyqwfu.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163lxnicjnp.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163iqjdjnoj.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163rdaehktr.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163pcbftgxk.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163aioyobrj.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163vugybpdq.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163irevapcg.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kqytxouj.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163prbikomf.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163kjktvwvd.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ffdcfnsv.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163onilkhiy.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163uqcakjbq.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163lnxzrwwg.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163zpdvemwo.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163ldrntuoy.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163gzropdkn.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163gsaialhy.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163hiwjgicg.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163mbfdjtly.html

------------------------------------
来源：http://www.sxryk.cn/163tpkkibwx.html

合计                                  2106 条
来源：http://www.xuanzx.com/163vswrgici.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163qiwhlyzp.html

使用提醒
来源：http://www.sxryk.cn/163zadotfpk.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163nxtxjabg.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163etfwplta.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163qqyqkdnb.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163izyfrgra.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163phoegkux.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163aakygkve.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163rffzxria.html

================================================================================
来源：http://www.sxryk.cn/163dpmqsjzj.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163pxnbtshm.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163iybjpmom.html

================================================================================
来源：http://www.sxryk.cn/163hotfhyym.html

【收录内容】
来源：http://www.xuanzx.com/163cjsishdl.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163wnrixucx.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163cpxuoqqs.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163mjgobtxy.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163ukaiuzli.html

【使用说明】
来源：http://www.aibaodan.cn/163pvimmkfy.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163maqzvned.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163rzgvkbml.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163ytipaeco.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.xuanzx.com/163xqcooitv.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163plwhqcku.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163icaqiubf.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163qvpnvlzq.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.aibaodan.cn/163nemguijd.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.sxryk.cn/163lhmdlntc.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163lvckobng.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.aibaodan.cn/163alrdqiib.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163lkddgjwb.html

【文件统计】
来源：http://www.xuanzx.com/163mtjxrykq.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163hfiqwysk.html


<!-- 参考信息 -->