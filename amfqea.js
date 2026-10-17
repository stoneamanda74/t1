外链999!wailian999！

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163ydjbyslp.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163wcpaiuru.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163iurwtgqq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ndizlknv.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163gufaffpq.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163enqryelz.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163tezmxpge.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163vsdvymnf.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163xrwcfcep.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163ctjbpzfj.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163hmcsmzhf.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163ryawxcvh.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163spzfysxu.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163pzsrthiw.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163uyjxbihd.html

list(zip(*m))
来源：http://www.xuanzx.com/163nalferuj.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163myohhwwl.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163nhkkppyo.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163vrushumh.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163raiuygtq.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ibgcdqsk.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163ynbnhlep.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163rbcywacs.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163trankrdm.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163qitlgrjl.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163jodyhqfe.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163mkmpvuek.html

UserId = int
来源：http://www.aibaodan.cn/163jtuwyimb.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163lflfwhrd.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163kvwrtqfm.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163nzscwnow.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163draksaxz.html

[U31] Py：单测
来源：http://www.xuanzx.com/163ydqxgfay.html

python -m pytest -q
来源：http://www.xuanzx.com/163rrgzwetf.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163gernuaiq.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163yvygyarn.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163dgfcwgoc.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163phzcwnbx.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163pvnvtpzh.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163jnzvdopa.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163dxkjvasn.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163epjmmldd.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163vldoitjq.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163gvlcrqgt.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163xjkcnetk.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163ujvbgsbn.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163jlzhstur.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163mmzofjon.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163vgkvejhg.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163ucgivjiz.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163rwqjftrk.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163oampsnpx.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163jnztgpdi.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163tjvzpfdq.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163rjgvjwei.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163iqzlynly.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163dkxzdkdt.html

namespace App\Http;
来源：http://www.xuanzx.com/163uvwsrfjd.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163nmtcydog.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163qbanfsun.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163ahgtkyrm.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163dubaegmw.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163ymjxtnuc.html

?string $name = null
来源：http://www.aibaodan.cn/163listemvx.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163tbiwwmqm.html

int|string $id
来源：http://www.sxryk.cn/163jidmcccv.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163uomkusdd.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163yvzwxreq.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163yrfnthiw.html

public readonly string $name
来源：http://www.sxryk.cn/163tkbviisz.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163kthsfudx.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163hesfiqzz.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163ofkqgbln.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163mlasooem.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163yvkheert.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163eaiqorpp.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163zvttjowj.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163ctiqzzsw.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163llyplsgg.html

$obj?->method()
来源：http://www.xuanzx.com/163aowfboup.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163gkzqjryp.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163bkrpntpq.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163goxvqsfr.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163zixjfjtv.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163pmecvmbl.html

"值: {$a}"
来源：http://www.xuanzx.com/163mshiqqbm.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163pxytwkvh.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163nduwuutw.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163yxtjauom.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163zqxewako.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163hfvrofkb.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163gfutjwep.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163yfevbepq.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163uxtoqdqf.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163ahoheyij.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163vkntxila.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163jnlyibqb.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163crllusbn.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163gdzlmksq.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163lgimncri.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163hbfswijp.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163gtcitvam.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163mmmxmhid.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163ihlnnhdo.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163gwxkgsfl.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163qcuzcswn.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163slxwmfmz.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163wnieknlt.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163iuxwhtsm.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163asgltnlo.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163ouxkbsul.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163qyokaotr.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163loiqesns.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163mjlmbowx.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163txcwuode.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163vyojfiwk.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163aopvxkpu.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163dzoxdzuk.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163sfngcdga.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163fsdxoyhn.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163kbpbautw.html

composer require psr/container
来源：http://www.aibaodan.cn/163wwvgmtwk.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163vdzbafry.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163zcfqqoua.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163ouhtalth.html

composer require twig/twig
来源：http://www.aibaodan.cn/163ybexmzwt.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163ibdxssmd.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163dtxptqup.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163vkeorqef.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163xcqkookn.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163yfjiqhca.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163rxvgaghy.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163gvdrtcxx.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163mxmepkpc.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163hijtawyz.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.aibaodan.cn/163bgprujde.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163ciknjfdp.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163llhxsbnz.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163vftmiurx.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163zttjkooo.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163cdykyxmx.html

a?.b?.c
来源：http://www.xuanzx.com/163wynaisbf.html

[U86] JS：空值合并
来源：http://www.xuanzx.com/163trvcutec.html

a ?? b
来源：http://www.xuanzx.com/163fssznrrd.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163liexgtvr.html

const { a = 1, b = 2 } = obj;
来源：http://www.sxryk.cn/163acwormfj.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163ljjnfvhb.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163aspvmthb.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163lkxwdswg.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163vodcxnkf.html

[U90] JS：数字数组排序
来源：http://www.aibaodan.cn/163twvzfnag.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dbmwbfhv.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163agakckcb.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163fwkkqdjg.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163gubnolti.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163zesypvfw.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163shseakha.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163zbmhkdxg.html

[U94] JS：箭头函数
来源：http://www.xuanzx.com/163ppnutobg.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163spoyttfe.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163drtzgvgl.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163shndtgyf.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163vyeftxds.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163gehuestc.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163sbjdotzs.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163vpjyzybc.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163gqpqpyzt.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163ksfqebwk.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163uxecxomp.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163gfnfmhdf.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163wsuxbmbv.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163wcgfzwna.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163wzkblpzj.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163renhqjyp.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163prwkfxrm.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163vtrtidft.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163pgrgzbwt.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163zqljdnxc.html

[U104] JS：防抖
来源：http://www.sxryk.cn/163kfmbjsna.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163kfknpmkn.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163pqezpeqz.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163giciavqb.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163isuaoaia.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163jngdgyyc.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163zarecpcx.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163xynmgbvl.html

[U108] JS：随机整数
来源：http://www.xuanzx.com/163egqicyvt.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163azendast.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163mgplmukj.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ibycvney.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163rrbhprij.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163siljrizi.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163rrfjzcaq.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163ttdkygbt.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163aonlaxsa.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163bxhnvplv.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163qcjrkltf.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163adlqzajh.html

[U114] JS：JSON 深比较
来源：http://www.xuanzx.com/163wdseuaua.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163hxksrcxg.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163prjzrtnj.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163himpdvec.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163swqbfnmn.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163zieieuxh.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163uaxkbjhi.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163ibuprufh.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163cqmvslrf.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163cspokpci.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163qmvrsbrv.html

npx vite build
来源：http://www.sxryk.cn/163dbvshjtj.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163svmviqmu.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163fvqfgrmk.html

================================================================================
来源：http://www.sxryk.cn/163myvifrnd.html

统计汇总
来源：http://www.sxryk.cn/163egovxdwm.html

================================================================================
来源：http://www.aibaodan.cn/163klatsyfy.html

按语言统计（条）：
来源：http://www.sxryk.cn/163xfchenaj.html

Python ......... 252
来源：http://www.xuanzx.com/163crgtomgy.html

PHP ............ 252
来源：http://www.sxryk.cn/163evrhnsui.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163hgsybdue.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163pmdibsyg.html

Java ........... 212
来源：http://www.xuanzx.com/163iwfulhih.html

Go ............. 212
来源：http://www.xuanzx.com/163rsqqtema.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163magkytmy.html

C# ............. 212
来源：http://www.xuanzx.com/163xhzyceko.html

C .............. 30
来源：http://www.xuanzx.com/163ivfgnkvf.html

C++ ............ 30
来源：http://www.xuanzx.com/163hqgklquh.html

SQL ............ 90
来源：http://www.xuanzx.com/163pbcpfnvp.html

Bash ........... 80
来源：http://www.aibaodan.cn/163ailcwwqq.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163rwnqxisp.html

Swift .......... 15
来源：http://www.xuanzx.com/163apyfcrqk.html

Lua ............ 10
来源：http://www.xuanzx.com/163lilrarsp.html

Perl ........... 10
来源：http://www.aibaodan.cn/163zbamcoya.html

Scala .......... 10
来源：http://www.xuanzx.com/163dytojdzm.html

------------------------------------
来源：http://www.sxryk.cn/163ubxwaqay.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163mhfvszxr.html

按章节统计：
来源：http://www.sxryk.cn/163eoezjdxy.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163conspoaw.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163lmeutvjm.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163pnvwmafb.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163jgbljiyv.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163hkmhljju.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163yphjwcul.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163tmozjxtc.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163jvrvmuuu.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163krdtmmyu.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163vljbeosh.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163eoygyyog.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163vxghrdip.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163fzgsxeod.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163ybcanumt.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.sxryk.cn/163pudjyhfs.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163meqriqnv.html

Q SQL 专题                              90
来源：http://www.xuanzx.com/163diyhguzt.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163yszfmfbc.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163aqmjqmlu.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163sshnupqe.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163klmyppry.html

------------------------------------
来源：http://www.aibaodan.cn/163cwhldnaq.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163ucrewxub.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163mxqcfsrm.html

使用提醒
来源：http://www.sxryk.cn/163cjvttppe.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163iwjspxau.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163ntjsxztg.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163tokvojys.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163zovosdjk.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163yelepxob.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163cahizdyr.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163wwanmlqa.html

================================================================================
来源：http://www.sxryk.cn/163xoqxwjcr.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163ezsiopha.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163wjfknlhq.html

================================================================================
来源：http://www.aibaodan.cn/163ogkiiwbf.html

【收录内容】
来源：http://www.aibaodan.cn/163igottuwn.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163seyceapx.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163nbkhyzgk.html

SQL · Bash · C · C++
来源：http://www.xuanzx.com/163isramzvb.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163wqzrmeyz.html

【使用说明】
来源：http://www.aibaodan.cn/163qlnpebzd.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163qesbcdqe.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163sblshxuf.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.aibaodan.cn/163dvthhczu.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163mtspnclh.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163jvaizlgq.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163sjibfzql.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.aibaodan.cn/163ivoagyye.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.sxryk.cn/163kradfros.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.xuanzx.com/163hobsqhvi.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.sxryk.cn/163oxytblzx.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163lvdkxemn.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163ueqbfqqo.html

【文件统计】
来源：http://www.xuanzx.com/163riufiqhh.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.sxryk.cn/163awxqwpwg.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163yccprawm.html

目  录
来源：http://www.sxryk.cn/163hcwaunrw.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163lpmowzsb.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163iqwtdsjt.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.aibaodan.cn/163erwnxhro.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163vdzliyes.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163fgaaiwur.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163aydeuhrd.html


<!-- 参考信息 -->