外链999!wailian999！

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163muwplmvc.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163vtqgxney.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163xktbhfcy.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163bdcmyjmj.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163nplhnobm.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163kvwzskjy.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163tlfzklbu.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163puxrctmu.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163cyveotry.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163ozywzpbp.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163raoipybe.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163hvkhcdxn.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163bixdwuxj.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163bcmbhmkj.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163slwjewsu.html

defaultdict(list)
来源：http://www.aibaodan.cn/163kiwloyrg.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163egktigrm.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163iromikjk.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163dnvurntv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163ocfvtvkn.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163dxsdicec.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163saotlrlu.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163anjugfil.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163jzlcahws.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163pservqpz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163pftysxft.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163jqtlajms.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163impgnnxz.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163pnvvtpub.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163cfisakfg.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163rvtzywba.html

list(zip(*m))
来源：http://www.sxryk.cn/163pcyimaeb.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163hcbioqaa.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163twgokdor.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163swlfbwqc.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163bxjoklqx.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163tnhirfpq.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163qrmzsrvy.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163tyjjgemc.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163glnqzpfc.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163uksknzqf.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163oxtstivs.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163zvvgzvpi.html

UserId = int
来源：http://www.sxryk.cn/163zbiyghzq.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163gayryxaf.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163swhanpds.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163ooaeajbe.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163xkziskzn.html

[U31] Py：单测
来源：http://www.xuanzx.com/163vubjirws.html

python -m pytest -q
来源：http://www.xuanzx.com/163wnrnnwdm.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163telibyji.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163amqwfkio.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163bzmdcbuc.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163mtcdxnqg.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163cqinxiab.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163sqwgpnki.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163qqpddqew.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163fcszqoxe.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163ddjtmxex.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163tlcvkggm.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163rlpjteij.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163xyticdkz.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163loxefnrx.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163dkabwpfk.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163mrhbpswy.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163crhbinjj.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163aqywdufa.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163yaxynxqd.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163wugxxofb.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163timtoisg.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163lmvrkndy.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163upwnwiez.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163otdjsobj.html

namespace App\Http;
来源：http://www.aibaodan.cn/163lrmgshvk.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163gmbctisc.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163tzsjsrmp.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163sznxohsg.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163meinrazy.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163keirncjh.html

?string $name = null
来源：http://www.sxryk.cn/163bdgynuzw.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163tapzshqi.html

int|string $id
来源：http://www.xuanzx.com/163qykrypdh.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163lotjayvx.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ogldqcuc.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163kdfwjhqb.html

public readonly string $name
来源：http://www.sxryk.cn/163fkgjfeaz.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163hfiltcop.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163tqrfsbui.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163rgbmekzw.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163ydwhytca.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163mrwjnhfp.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163ajduegnd.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163pbmxrceu.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163rskshhvb.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163tzewirxw.html

$obj?->method()
来源：http://www.xuanzx.com/163vsaypsrb.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163wmumzvik.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163vuxnqktw.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163yqjruvqw.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xfepdqit.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163zmwdtina.html

"值: {$a}"
来源：http://www.aibaodan.cn/163wmdntdnj.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163mjtenhze.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163wypqtvub.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163inilsmkm.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163vthheoux.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163xamhjbuj.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163upxenerh.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163unloddgw.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163xhaeuegl.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163lueciqbe.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163piukvwtr.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163jtpdcgld.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163vjvatmsv.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163voxscilu.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163ksvotkoi.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163jcepgkke.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163ppkxcanv.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163ffopgpan.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163gziydbdu.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163kqwgavpe.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163hownlyuc.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163wvyuoolw.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163auxrqbva.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163utibaggf.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163qtzdotrm.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163abjmkdxr.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163ztlfrfdo.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163macaubsr.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163vyogzucw.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163tfxcdflv.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163lpmoarjc.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163ndibdqzh.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163yyzrmwed.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163mizxchyq.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163rmkjmncr.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163yqrkbcew.html

composer require psr/container
来源：http://www.sxryk.cn/163ofwgiovv.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163sfegttgh.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163wtwzusia.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163kkdjnxya.html

composer require twig/twig
来源：http://www.xuanzx.com/163uwatleon.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163esbygnlj.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163zrgrzdtg.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163mkpozrdt.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163qpuqboam.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163zdthguul.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163szkhlqel.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163hwkeuxzk.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163njjlyoez.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163gkmypvgv.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163ulyuaqiz.html

[U83] JS：ES Module 导入导出
来源：http://www.xuanzx.com/163ocszezox.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.aibaodan.cn/163vsosijdy.html

[U84] JS：CommonJS 写法
来源：http://www.sxryk.cn/163wtirccic.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163grnxdhng.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163tsrnzecd.html

a?.b?.c
来源：http://www.xuanzx.com/163dqsqivdd.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163pszruptx.html

a ?? b
来源：http://www.aibaodan.cn/163yrzkjxec.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163receqrzm.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163qzeknanp.html

[U88] JS：对象展开合并
来源：http://www.sxryk.cn/163loghmyjo.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163vsbkffdj.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163tymqvjde.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163euifhmzl.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163ofnsudvc.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xzqeqkjm.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163kmaolfzk.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163pisnwkvb.html

[U92] JS：深拷贝
来源：http://www.sxryk.cn/163irqnsqfg.html

structuredClone(obj)
来源：http://www.aibaodan.cn/163gjriifky.html

[U93] JS：模板字符串
来源：http://www.xuanzx.com/163ndspmzlk.html

`共 ${n} 条`
来源：http://www.aibaodan.cn/163vkjabxrc.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163waayqgdb.html

const double = x => x * 2;
来源：http://www.sxryk.cn/163lreerjsy.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163nnnjbiie.html

new Promise((resolve, reject) => {})
来源：http://www.xuanzx.com/163lvqghwoh.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163kqggqsui.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163wbwqzarr.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163yvvdgvmi.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163uwpmdqqm.html

[U98] JS：fetch 带 JSON
来源：http://www.xuanzx.com/163cjegfcpj.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.sxryk.cn/163drzgtwra.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163raxvufse.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163qrgwtlap.html

[U100] JS：DOM 查询
来源：http://www.xuanzx.com/163geclvxxh.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163sqboavbb.html

[U101] JS：classList 操作
来源：http://www.sxryk.cn/163fumofjls.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163lbtqriop.html

[U102] JS：本地存储
来源：http://www.xuanzx.com/163dytczcxj.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163watzghdp.html

[U103] JS：定时器
来源：http://www.aibaodan.cn/163osxpjgep.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163tphxztdf.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163owfdhrsc.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163exyewatg.html

[U105] JS：节流
来源：http://www.xuanzx.com/163zgwdpbpq.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163xsychjjk.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163pmmyhgkz.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163cgrpunox.html

[U107] JS：数字千分位
来源：http://www.xuanzx.com/163cspbkdrf.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.sxryk.cn/163mbyztziq.html

[U108] JS：随机整数
来源：http://www.sxryk.cn/163waqsxfkq.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163qhfcsuna.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163erjaiwjw.html

Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163tqibmppt.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163oqzkxdka.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.aibaodan.cn/163oojiflmx.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163xlhcfyth.html

new Map(Object.entries(obj))
来源：http://www.aibaodan.cn/163vvkqimcy.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163dnpjsing.html

"7".padStart(3, "0")
来源：http://www.aibaodan.cn/163dvumjzsc.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163phjyysfw.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163euphnrxv.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163xfztbgpr.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163qzvqidvi.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163fnkqddvz.html

crypto.randomUUID()
来源：http://www.sxryk.cn/163qzgakpgq.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163ywrrnubp.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163tvrmnsam.html

[U117] JS：单元测试
来源：http://www.sxryk.cn/163bpdekpow.html

npm i -D vitest;  npx vitest
来源：http://www.xuanzx.com/163tjgizoeo.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163nuxaxpbu.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163shqbpynd.html

[U119] JS：生产构建
来源：http://www.aibaodan.cn/163debqgspz.html

npx vite build
来源：http://www.sxryk.cn/163fgiqljjn.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163wzbbzbzp.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163paroluwk.html

================================================================================
来源：http://www.xuanzx.com/163xybxfeft.html

统计汇总
来源：http://www.sxryk.cn/163ugehimai.html

================================================================================
来源：http://www.aibaodan.cn/163zlawgokt.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163awbrpqpe.html

Python ......... 252
来源：http://www.aibaodan.cn/163shzujwug.html

PHP ............ 252
来源：http://www.xuanzx.com/163rssxjjbv.html

JavaScript ..... 252
来源：http://www.sxryk.cn/163bbyikfac.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163akisvwde.html

Java ........... 212
来源：http://www.sxryk.cn/163lodvilhr.html

Go ............. 212
来源：http://www.aibaodan.cn/163iwoglpkj.html

Ruby ........... 212
来源：http://www.sxryk.cn/163lvaneigu.html

C# ............. 212
来源：http://www.xuanzx.com/163mvsgutaw.html

C .............. 30
来源：http://www.aibaodan.cn/163gqcoxxxr.html

C++ ............ 30
来源：http://www.xuanzx.com/163xpvhwivt.html

SQL ............ 90
来源：http://www.xuanzx.com/163efgitaxo.html

Bash ........... 80
来源：http://www.xuanzx.com/163nvbtvnpw.html

Kotlin ......... 15
来源：http://www.sxryk.cn/163kkzxnzxt.html

Swift .......... 15
来源：http://www.xuanzx.com/163rffysive.html

Lua ............ 10
来源：http://www.sxryk.cn/163fftmcprt.html

Perl ........... 10
来源：http://www.sxryk.cn/163vzfxrkzt.html

Scala .......... 10
来源：http://www.xuanzx.com/163dexyczxw.html

------------------------------------
来源：http://www.sxryk.cn/163vhharian.html

合计 ........... 2106 条
来源：http://www.sxryk.cn/163xrsvkibq.html

按章节统计：
来源：http://www.aibaodan.cn/163zmdfchqs.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163wtvhynzk.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163xbukalpw.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163vubebpie.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163qgimdzca.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163hbojlpvg.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.aibaodan.cn/163livaiixx.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163occxcqsn.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163omwtpzgb.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163bwfsacxp.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.aibaodan.cn/163najemflj.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163kqgjbmuy.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163pufvwhdw.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163nisgkmhq.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163swxpatju.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163eapxtpmx.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163klajmcwd.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163jjsaxqms.html

R Bash 专题                             80
来源：http://www.xuanzx.com/163ywuuphpz.html

S C / C++ 专题                          60
来源：http://www.xuanzx.com/163aipscwxy.html

T 其他语言补充                          60
来源：http://www.sxryk.cn/163xdbfytta.html

U 高频实用片段                         120
来源：http://www.sxryk.cn/163nzvzisms.html

------------------------------------
来源：http://www.xuanzx.com/163tjrcaopf.html

合计                                  2106 条
来源：http://www.sxryk.cn/163wmajbwcc.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163xnqcocya.html

使用提醒
来源：http://www.aibaodan.cn/163chtwmhhg.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163ckfownmh.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.aibaodan.cn/163vwqbavlf.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.xuanzx.com/163fqokukap.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.xuanzx.com/163yuibnetf.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163rxqpyjro.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163fcseccdn.html

—— 文件结束 ——
来源：http://www.sxryk.cn/163buyvpduo.html

================================================================================
来源：http://www.aibaodan.cn/163efoqmdbp.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163rmdfjksg.html

Common Programming Examples Cheat Book
来源：http://www.aibaodan.cn/163rbeyepio.html

================================================================================
来源：http://www.xuanzx.com/163gkoqildh.html

【收录内容】
来源：http://www.aibaodan.cn/163obpicvcd.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.xuanzx.com/163babjawul.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.xuanzx.com/163oxkjhzfd.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163dhqrqduw.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.xuanzx.com/163wybkogpb.html

【使用说明】
来源：http://www.aibaodan.cn/163rmeoqbed.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163ydnfnwhb.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.sxryk.cn/163qrvyhjnk.html

TS:    TypeScript    Java:  Java          Go:    Go
来源：http://www.sxryk.cn/163tliamieb.html

Ruby:  Ruby          C#:    C#            SQL:   SQL
来源：http://www.sxryk.cn/163cxjkiule.html

Bash:  Shell         C:     C             C++:   C++
来源：http://www.sxryk.cn/163tnohatss.html

2. 示例只展示核心写法，刻意省略 import / require / include / using 等样板代码。
来源：http://www.xuanzx.com/163llaeizkb.html


<!-- 参考信息 -->