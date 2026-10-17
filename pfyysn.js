外链999!wailian999！

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163qiaptmvr.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163gdcfbmzu.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163grjefotz.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163uhwhmhey.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163ryrrcasy.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163jfgtagrx.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163aaszetzr.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163ccvilxwr.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163uhejlnwf.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163dozorgxa.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163ixzrlcum.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163ybeyyyew.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163xudbagbd.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163wkuybiuy.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163nwjnnslv.html

list(zip(*m))
来源：http://www.aibaodan.cn/163zazmajig.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163ygxubmfs.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163zblmhdmd.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163hmzuvkwg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163yveygprf.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163pilgzwco.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163nophacrj.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163umnyubfr.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163vakqrwuj.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163pcffeehf.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163iyurmfyn.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163qynxntbv.html

UserId = int
来源：http://www.sxryk.cn/163bmzolowf.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163jsuaxlte.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163voagwizd.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163jqhfkmvf.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163blpsucbc.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163rjjmnbiv.html

python -m pytest -q
来源：http://www.aibaodan.cn/163tdnkgbdx.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163dxpbivxg.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163wsldzckb.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163mdctdixg.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163baglgcnc.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163nacootvl.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163dofchrfp.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163basllirx.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163jsyfgyfm.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163nlbndrvw.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163dqrezkzq.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163dadugaef.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163ctflxnqd.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163swweubnu.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163xfdwoozh.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163oplmqtyb.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163uicfxpop.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163rzrqullt.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ppfdoqpc.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163vlgawfic.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163nvgyjoed.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163fsdqupfj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163laxeieyh.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163qzfhoibb.html

namespace App\Http;
来源：http://www.sxryk.cn/163jgvxaovn.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163vpmyfmwg.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163npmsfjzm.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163fsfbjeqk.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qhilpatp.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163ofuekhih.html

?string $name = null
来源：http://www.xuanzx.com/163uesxmnpr.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163htqfckja.html

int|string $id
来源：http://www.aibaodan.cn/163rrmhofjs.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163mgkkekep.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163kptyzrzr.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163ztkbcroi.html

public readonly string $name
来源：http://www.xuanzx.com/163xfxbmbpz.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163tjafbesp.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163cdgptgyj.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163umifxasv.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163lfspeowv.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163iaebooer.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163tktzpilq.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163ocduryur.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163raueejvy.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163gqqkxgmg.html

$obj?->method()
来源：http://www.xuanzx.com/163ohcrrmto.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163wcqigtqw.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163hunrmhiz.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163iqpedfvm.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hsriagvx.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163hunwiqum.html

"值: {$a}"
来源：http://www.xuanzx.com/163otmocjwx.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163hilleswd.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163zoebtlkk.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163zmvhacwr.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163kxxadovx.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163pojgpyom.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ywzbwpro.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163owfppfus.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163grbxmwxa.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163zwmzboqw.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163simfdzuw.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163bisrbnxo.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163htijxcni.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163rdxzegau.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163vbvslbhb.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163guvhhjmf.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ebaepibx.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163qjhislxn.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163nkdahpcc.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163ztjwqshd.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163awemjwua.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163uqvgxjjb.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163liizftju.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163bpnvoczf.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163xavoppsu.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163tyljcemz.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163ozcbtcvm.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163oetpuiff.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163ibmclnzp.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163eyvfwaag.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163mfhcxlps.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163uqlcyrqr.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163uwmauwid.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163nczfjgjv.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163ohgzzzwz.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163xrobnsht.html

composer require psr/container
来源：http://www.sxryk.cn/163fphvstiq.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163dthngvpo.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163zgqezetg.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163otuufokt.html

composer require twig/twig
来源：http://www.xuanzx.com/163vjzhhmop.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163qnixybmj.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163nedbcxuk.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163gvoqoxej.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163vgtpmpaa.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163nqcsusps.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163qhunjbaa.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163ywcvrxqq.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163dbnjnicx.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163fucmalhj.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163xnkabsfr.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163psxvezdt.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163vstouwho.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163mduewyxc.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163odpcseaf.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163fssnavzj.html

a?.b?.c
来源：http://www.sxryk.cn/163svoyucrk.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163lewhfwou.html

a ?? b
来源：http://www.aibaodan.cn/163jprmlxai.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163xyqdhblq.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163lvrbynwg.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163wloigjpb.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163cixmwolk.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163abxdchbt.html

[...new Set(arr)]
来源：http://www.xuanzx.com/163ijigjmng.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163ructamyp.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qgnzndfv.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163jnzxaaah.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163tiujoowh.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163wvymavyv.html

structuredClone(obj)
来源：http://www.sxryk.cn/163awibqxvm.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163rkxgbqii.html

`共 ${n} 条`
来源：http://www.xuanzx.com/163bgehcisb.html

[U94] JS：箭头函数
来源：http://www.aibaodan.cn/163ecmybkct.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163dlljcxcl.html

[U95] JS：Promise 包装
来源：http://www.aibaodan.cn/163knwmqdpe.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163qyjaagef.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163vsdqvfev.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163esiizjwh.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163ikwaokzn.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163hxvcvxtk.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163qyanghjj.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.xuanzx.com/163qpbewtay.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163mcuujsba.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163xzaujxam.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163brtyjslx.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163fdjbyoxp.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163qsqwoclm.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163gelplnxm.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163vnrveopg.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163dangufqu.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163xtylotjp.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163xvsrcdek.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163tqazmnnt.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163pqgruhwj.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163uvzxcuue.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163zzwbqztb.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163bdpliznr.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163cdyuazsr.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163hxldxxmt.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163tmnelekd.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163kdkvzpby.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163mzftxrmj.html

[U109] JS：数组分组
来源：http://www.sxryk.cn/163ctwiphcg.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163dynmqeyt.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163qrfylxrn.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163yjabixpz.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163eghhhmxb.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163mtbxnsta.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163aoiyvnnu.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163pcfrqjje.html

[U113] JS：正则替换全部
来源：http://www.sxryk.cn/163ounsjyhv.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163aubybwbj.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163iqaawpmu.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163dseiojrk.html

[U115] JS：生成 UUID
来源：http://www.xuanzx.com/163afemrnrj.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163nypvggcx.html

[U116] JS：类型检查（JSDoc）
来源：http://www.xuanzx.com/163socpibgv.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163xtgzbqjq.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163iatdolxd.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163njqguvzr.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163ohwzckey.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163qicejwbp.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163cssufdfd.html

npx vite build
来源：http://www.aibaodan.cn/163kkmdyicr.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163idgmivnt.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163srhnnudr.html

================================================================================
来源：http://www.xuanzx.com/163cmczsmax.html

统计汇总
来源：http://www.xuanzx.com/163fowqzcva.html

================================================================================
来源：http://www.sxryk.cn/163dzdzobug.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163ciysvmlz.html

Python ......... 252
来源：http://www.aibaodan.cn/163kwfdvmma.html

PHP ............ 252
来源：http://www.sxryk.cn/163ijsjxnsz.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163qlgtucic.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163spwhoonk.html

Java ........... 212
来源：http://www.sxryk.cn/163sutouqli.html

Go ............. 212
来源：http://www.aibaodan.cn/163mukjdosq.html

Ruby ........... 212
来源：http://www.aibaodan.cn/163btngoqfh.html

C# ............. 212
来源：http://www.aibaodan.cn/163hjhvduhg.html

C .............. 30
来源：http://www.xuanzx.com/163zgyydihx.html

C++ ............ 30
来源：http://www.aibaodan.cn/163ketlihlc.html

SQL ............ 90
来源：http://www.xuanzx.com/163inhsbgcc.html

Bash ........... 80
来源：http://www.aibaodan.cn/163ozuafeza.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163bqrdqrvk.html

Swift .......... 15
来源：http://www.sxryk.cn/163vxocvknc.html

Lua ............ 10
来源：http://www.sxryk.cn/163nvcsaeip.html

Perl ........... 10
来源：http://www.aibaodan.cn/163zfdvjqcg.html

Scala .......... 10
来源：http://www.sxryk.cn/163mcpfeebn.html

------------------------------------
来源：http://www.aibaodan.cn/163achakabi.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163qxdhnntz.html

按章节统计：
来源：http://www.sxryk.cn/163amzwzgtt.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163ngselgoh.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ljkwhmrw.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163xufycapj.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163tvxsyinq.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163imiqgtiq.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163vmszwkqd.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163lkubruhb.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163ysibdogx.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163cbucraoj.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163qcwgbjfq.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ahpmppyt.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163eerrgduq.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163xfqerxyl.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163vjdohyai.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163rxthqlwd.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163eittcqjc.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163rjqzslju.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163ilouaxtn.html

S C / C++ 专题                          60
来源：http://www.aibaodan.cn/163bhzlrroq.html

T 其他语言补充                          60
来源：http://www.aibaodan.cn/163wllkjfhn.html

U 高频实用片段                         120
来源：http://www.xuanzx.com/163lbumvysh.html

------------------------------------
来源：http://www.sxryk.cn/163dxkgtzrl.html

合计                                  2106 条
来源：http://www.sxryk.cn/163oednfwnj.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163aavdukiq.html

使用提醒
来源：http://www.xuanzx.com/163iymkfmts.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163eriuhgds.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163jxseubiw.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163cdaukrzn.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163afrkdaoa.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163mpfwvwfi.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.xuanzx.com/163eeudzafr.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163vleqcxdf.html

================================================================================
来源：http://www.xuanzx.com/163ywqfxirg.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163vcmpnwkk.html

Common Programming Examples Cheat Book
来源：http://www.sxryk.cn/163vfghxhtw.html

================================================================================
来源：http://www.aibaodan.cn/163gvfyouvp.html

【收录内容】
来源：http://www.aibaodan.cn/163vilqxhzn.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163ssbrvkij.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163rledbqkl.html

SQL · Bash · C · C++
来源：http://www.sxryk.cn/163yemuktwv.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.sxryk.cn/163dcdgddxy.html

【使用说明】
来源：http://www.xuanzx.com/163mkbbpdrh.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.xuanzx.com/163eirsnkkn.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163wngqeush.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.xuanzx.com/163yqbklyql.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163bqldqqis.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.aibaodan.cn/163wbojdljk.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.aibaodan.cn/163oiicjjut.html

需要完整可运行文件时，请自行补齐当前语言的导入语句。
来源：http://www.sxryk.cn/163dydlusnp.html

3. 语法基准：Python 3.10+ / PHP 8.1+ / ES2020+ / TypeScript 5 / Java 17 /
来源：http://www.xuanzx.com/163balnftub.html

Go 1.21+ / Ruby 3.x / C# 10+ / C17 / C++17。
来源：http://www.aibaodan.cn/163jlsyghek.html

4. 检索建议：用编辑器或浏览器 Ctrl+F 搜关键词，如 "排序" "读取文件" "正则"。
来源：http://www.xuanzx.com/163axobmfhf.html

5. 标记为 "// 无" 表示该语言没有对应的一等语法，需用替代写法（示例给出替代方案）。
来源：http://www.xuanzx.com/163piosjzhn.html

6. 符号 "⏎" 表示代码在此处换行（主要用于 Python 等强制缩进、无法压成一行的结构）。
来源：http://www.aibaodan.cn/163efmyqbvg.html

【文件统计】
来源：http://www.xuanzx.com/163pyjcybzh.html

语言示例共 2106 条，分布见本文末尾的「统计汇总」。
来源：http://www.aibaodan.cn/163pqtcvxpi.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163lwmlyvgj.html

目  录
来源：http://www.aibaodan.cn/163lzuaukuf.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163hiiirnqs.html

A. 基础语法与类型              （第 1 节，26 个任务，208 条）
来源：http://www.aibaodan.cn/163kaospifm.html

B. 流程控制                    （第 2 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163lgelqfsd.html

C. 函数与作用域                （第 3 节，16 个任务，128 条）
来源：http://www.sxryk.cn/163ykytyxsr.html

D. 数组 / 列表 / 集合          （第 4 节，26 个任务，208 条）
来源：http://www.sxryk.cn/163irumvuhd.html

E. 字符串处理                  （第 5 节，22 个任务，176 条）
来源：http://www.sxryk.cn/163vrwlwtuq.html


<!-- 参考信息 -->