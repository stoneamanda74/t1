外链999!wailian999！

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163lssbkdqc.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163tfiwyyus.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163vickahev.html

{**a, **b}
来源：http://www.aibaodan.cn/163hbudguxj.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163abirmyva.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163cwbswplx.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163uilapubx.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163iwbjkixm.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163xwweftbt.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163ensfnkjp.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163rsmpctzw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163gortlwvc.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163ouspmwvv.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163ygxikuue.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163oofflewf.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163khbhiyhu.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163geassayq.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163usrphpvz.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ltotgbjn.html

defaultdict(list)
来源：http://www.sxryk.cn/163sxlldemv.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163vcakghlv.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163fxwykzcm.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163znsoowyx.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163gnbrlnky.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163podmdwoq.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ligerxtc.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163lirveoyp.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163gpenesjn.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163homhpvtf.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163uelackbj.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163eycvrmpz.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163tlieztwd.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163swohavqa.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163njanikaz.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163bumayxmh.html

list(zip(*m))
来源：http://www.sxryk.cn/163wggaytne.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163lvaytjdx.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ztzycwqc.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163sctsdrzz.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163miwsdtbo.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163kmpkrneb.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163ygpwgxdq.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163qkqvyfqo.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163gayqwdfo.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163nmkibzaj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163liymserm.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163dgkoufdc.html

UserId = int
来源：http://www.sxryk.cn/163xzwubocf.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163bmkrzlgz.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163vopndnqk.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163xcbyrbnv.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163vgxjzphw.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163opnqbcot.html

python -m pytest -q
来源：http://www.sxryk.cn/163uwoyswhp.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163grksfwgd.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163lerqvslr.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163phikygco.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163kjguktph.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163yybgsthh.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163khmwxvbp.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163fibtdhnl.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163mzaxscgx.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163iqesepyh.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163hawdhvrz.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163pteaouvs.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163ybzacsew.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163olrzihar.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163udkjlwje.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163evpccjda.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163hqhgacww.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163bunwokoc.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163cjezkxyz.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163gbnxgmjc.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163zvqjzqeq.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163repmztzh.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163uvfijxpu.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163rvophwma.html

namespace App\Http;
来源：http://www.sxryk.cn/163xgztlnwg.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163afddvitd.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163vzpvhyrd.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163lbvdqmkc.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163lnjkntrs.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163azxfsugc.html

?string $name = null
来源：http://www.sxryk.cn/163ftbbxghj.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163iraacqce.html

int|string $id
来源：http://www.aibaodan.cn/163ognyssai.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163voercfet.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163xcplwfdf.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163axarmvxo.html

public readonly string $name
来源：http://www.aibaodan.cn/163cnqavbmc.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163drnpxkiv.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163htieudxg.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163oinopmsr.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163zdftriub.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163ocmsofid.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163jghgpios.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163uggtbmor.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163mtzenzpb.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163caxwgjfd.html

$obj?->method()
来源：http://www.xuanzx.com/163zzrhhsob.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163yrqfhpdt.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163zajchxqc.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163tuxagaya.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163locvstrm.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163hglmkevb.html

"值: {$a}"
来源：http://www.aibaodan.cn/163stxdmtsk.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163jvesaoia.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163mbhzeclo.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163zusoxlkt.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163suihwwrf.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163oeaoaqxy.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163ftjvefjy.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163urcsopsi.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163sokynxfy.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163evlanwpr.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163wfgfypix.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163fldmnwfv.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163qbiogrkr.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163kfeekxyl.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163cgderhmk.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163bhojbdtk.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163plpjyltc.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163cdewbrft.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163vbsyjond.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163isognddu.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163uvyvpmbj.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163rzpypqed.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163eearmjze.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163vewiuywp.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163qbphtpwd.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163nrfgzilm.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163tfkefjxy.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163yzfnyfhy.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163zkhsdhka.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163jdsrblct.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163bamcbyzl.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163zfbaqmil.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163qdurpgby.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163bdgjmgqh.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163shvcnrjq.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163tlpunlqz.html

composer require psr/container
来源：http://www.aibaodan.cn/163qrfoefcn.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163hssywdqz.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163azsmgzhg.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163qhvzsgqp.html

composer require twig/twig
来源：http://www.aibaodan.cn/163isudpyru.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163rzgrntnl.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163dqutgnnf.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163dwpqfwkg.html

composer require --dev phpstan/phpstan
来源：http://www.xuanzx.com/163fnyefkdn.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163fgrwgqut.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163ertaopgt.html

[U81] JS：初始化项目
来源：http://www.xuanzx.com/163ybbtpgdj.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163qmnyawgx.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163ouvaxjfp.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163rtibtenz.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163plpizvcm.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163nwycbhea.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163muqauvxs.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163sgaevnab.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163kcoamagk.html

a?.b?.c
来源：http://www.sxryk.cn/163qoyxzhoa.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163uingrwrg.html

a ?? b
来源：http://www.aibaodan.cn/163qnieycyn.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163bowcqibx.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163qkwneqxa.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163npylqmee.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163zqzrjqmm.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163ukgfikbq.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163wkiiprls.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163vmdytvyn.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163cjdsvisy.html

[U91] JS：对象键值遍历
来源：http://www.sxryk.cn/163fsbknvir.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163jxlmuayc.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163wevwkgae.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163xbmnmvra.html

[U93] JS：模板字符串
来源：http://www.aibaodan.cn/163ntysqmcu.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163wnqdlmbu.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163ckflgkjz.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163wemwzidm.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163utmmgcgc.html

new Promise((resolve, reject) => {})
来源：http://www.aibaodan.cn/163ieaejjcb.html

[U96] JS：async/await 与异常
来源：http://www.sxryk.cn/163aiwsrcuh.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163jrkfoump.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163teyfhjex.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163lduvgces.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163bcscoyje.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163xknjezab.html

[U99] JS：事件监听
来源：http://www.sxryk.cn/163vqfwkfeg.html

el.addEventListener("click", e => {})
来源：http://www.xuanzx.com/163npyplaje.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163bfquzzvv.html

document.querySelector(".item")
来源：http://www.sxryk.cn/163bsshrpcl.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163mjhqnsun.html

el.classList.toggle("active")
来源：http://www.sxryk.cn/163uwjihtfs.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163rzuapkud.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.sxryk.cn/163ldqoscpg.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163owigjzmx.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.aibaodan.cn/163thofiaus.html

[U104] JS：防抖
来源：http://www.xuanzx.com/163vjqztkcq.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ynsjovpf.html

[U105] JS：节流
来源：http://www.xuanzx.com/163rzkpvrbx.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.sxryk.cn/163bpilepuz.html

[U106] JS：日期格式化
来源：http://www.sxryk.cn/163lxeoappt.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163sycycetv.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163sigussqz.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163erobduqa.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163tkwzujyd.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.sxryk.cn/163pawakxqm.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163wbacnebg.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163stsnvdxy.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163pamwccjt.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.xuanzx.com/163hqqidjke.html

[U111] JS：对象转 Map
来源：http://www.xuanzx.com/163cjndrtzx.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163eqbvdwxf.html

[U112] JS：字符串补位
来源：http://www.xuanzx.com/163vgdevfvq.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163rmvrfnrh.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163kvbowcnf.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dbhlwaco.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163vbyofwrx.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163kluepptw.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163wuavqmrn.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163evsczxsf.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163tshdhnzd.html

/** @param {string} name */ function f(name) {}
来源：http://www.aibaodan.cn/163rybndwqv.html

[U117] JS：单元测试
来源：http://www.xuanzx.com/163vysynsoz.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163oothfviq.html

[U118] JS：开发服务器
来源：http://www.sxryk.cn/163bqgloxio.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163nfglmxpx.html

[U119] JS：生产构建
来源：http://www.xuanzx.com/163nywnnfof.html

npx vite build
来源：http://www.sxryk.cn/163kbhogykb.html

[U120] JS：读取环境变量（Vite）
来源：http://www.sxryk.cn/163bnxejxoc.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163dvtxkamr.html

================================================================================
来源：http://www.aibaodan.cn/163qbecayta.html

统计汇总
来源：http://www.xuanzx.com/163nupcmhyl.html

================================================================================
来源：http://www.aibaodan.cn/163rkulnwtz.html

按语言统计（条）：
来源：http://www.sxryk.cn/163pqxmvprg.html

Python ......... 252
来源：http://www.sxryk.cn/163ixcildpj.html

PHP ............ 252
来源：http://www.xuanzx.com/163zardehjp.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163rvwiwsas.html

TypeScript ..... 212
来源：http://www.xuanzx.com/163aplomiiy.html

Java ........... 212
来源：http://www.xuanzx.com/163anwtkizi.html

Go ............. 212
来源：http://www.aibaodan.cn/163iblvycwx.html

Ruby ........... 212
来源：http://www.xuanzx.com/163doqpadao.html

C# ............. 212
来源：http://www.aibaodan.cn/163bhpwilwg.html

C .............. 30
来源：http://www.xuanzx.com/163ikjvpyov.html

C++ ............ 30
来源：http://www.aibaodan.cn/163msxzcnpw.html

SQL ............ 90
来源：http://www.xuanzx.com/163durojqvv.html

Bash ........... 80
来源：http://www.aibaodan.cn/163cuplboyc.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163rponookr.html

Swift .......... 15
来源：http://www.xuanzx.com/163jtxwzboe.html

Lua ............ 10
来源：http://www.aibaodan.cn/163qmicglfi.html

Perl ........... 10
来源：http://www.aibaodan.cn/163yenhtnee.html

Scala .......... 10
来源：http://www.xuanzx.com/163mgwlgoih.html

------------------------------------
来源：http://www.xuanzx.com/163isgdwyvi.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163ioetcglx.html

按章节统计：
来源：http://www.sxryk.cn/163uejgahwb.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163dkspiczo.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163sgnzvhon.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163kvkeamej.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163zxegcvms.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163xnkvtzlh.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163lyriosbe.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ldejrjzd.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163xvxfukxq.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163gtjadatd.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163idpizdgx.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163fpswdmyy.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163ekfltnal.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163nnvthlft.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163ugqesnyy.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163wfronnmc.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163bxntrcrq.html

Q SQL 专题                              90
来源：http://www.aibaodan.cn/163tfeumcnr.html

R Bash 专题                             80
来源：http://www.aibaodan.cn/163qqaxlbag.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163ivpsqxhm.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163sikxvwji.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163gadkvzpl.html

------------------------------------
来源：http://www.sxryk.cn/163pdeimyye.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163eecraham.html

--------------------------------------------------------------------------------
来源：http://www.aibaodan.cn/163mtokvpyf.html

使用提醒
来源：http://www.sxryk.cn/163tmvosflk.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163brjxlxpg.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.xuanzx.com/163kkgbouhk.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.aibaodan.cn/163leeewkgp.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.aibaodan.cn/163xqkosidv.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.xuanzx.com/163tpqzpnfq.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163aenaxtza.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163gzooczbw.html

================================================================================
来源：http://www.aibaodan.cn/163xzivwtth.html

程序语言常见例子速查手册（2024 版）
来源：http://www.aibaodan.cn/163lkygpwde.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163jpcionus.html

================================================================================
来源：http://www.sxryk.cn/163cmchajmp.html

【收录内容】
来源：http://www.xuanzx.com/163wjodifgv.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.sxryk.cn/163ntyopjlh.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.sxryk.cn/163vkwstyxu.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163xtlxbrjv.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163nvwmhmcp.html

【使用说明】
来源：http://www.xuanzx.com/163uctdhdyh.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.aibaodan.cn/163wqjhoben.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.xuanzx.com/163acrcrytl.html


<!-- 参考信息 -->