外链999!wailian999！

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163nsneudlk.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163mwdcfjot.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163xnlykauj.html

{**a, **b}
来源：http://www.xuanzx.com/163yigiadey.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163gvbrbafm.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163deqvhmjn.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163afmmjpgn.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163zpqqutte.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163msvjrrfj.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163ambpcohc.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163tefbdqds.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163usrjxlmk.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163exqofpot.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163nthkzrdi.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163voucxrnd.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163fqznfvgp.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163glcsgngz.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163kizzrwqs.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163aopbbmhe.html

defaultdict(list)
来源：http://www.aibaodan.cn/163pgegubfd.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163xfbqvnnh.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163gpgtozik.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163wanhjiea.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163xsnzpbob.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163mogwvsnk.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163qxutdles.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163xpglwfah.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163fbwcetzi.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163schprzvt.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163gcmsdssz.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163rakdrptm.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163azenimvr.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163ldtstisx.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163fehgixmz.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163ndesgwfn.html

list(zip(*m))
来源：http://www.sxryk.cn/163ivwgsezf.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163qiqdjgaq.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163ajivspbb.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163qeuzebzk.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163gkxzatau.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163gjbarayj.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163bgjohvgg.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163ixylhhps.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163qmsnaczu.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163zragwunk.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163khcngrsk.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163cmxxdfmd.html

UserId = int
来源：http://www.xuanzx.com/163aqtdgidk.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163cewpvfcu.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163vjwlmyjh.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163mljydmri.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163xfkqgcvo.html

[U31] Py：单测
来源：http://www.sxryk.cn/163kbuugidb.html

python -m pytest -q
来源：http://www.xuanzx.com/163cgmuipgg.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163railuzix.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163hgcrpxgf.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163mwsrcmaq.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163touhisbo.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163nwlipzah.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163cbbdvbpl.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163mbroshlm.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163ihkgnecs.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163yfwnwmbr.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163njskaajv.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163qxaifrpv.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163wxpqlvyy.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163zpldwitn.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163mpbwehxe.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163lzswxglf.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163fuosrcsg.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163kydxomvt.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163qycmdcby.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163sbxovhuc.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ngcefckm.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163dvswrnur.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163amumbksn.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163chvffhtw.html

namespace App\Http;
来源：http://www.sxryk.cn/163grveftfw.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163npqcyhre.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163wncimihi.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163fcmmlimd.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ozzphyaw.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163imbnsrnx.html

?string $name = null
来源：http://www.xuanzx.com/163aaaygdsb.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163qypfyssa.html

int|string $id
来源：http://www.sxryk.cn/163qxkwuoub.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163omlzqqlz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ynnknrgo.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163gedfwpqy.html

public readonly string $name
来源：http://www.xuanzx.com/163isgxscqi.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163zpwcgnoz.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163phdycdwq.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163sacsvtrw.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163oxglveue.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163elxgtcbw.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163khrudcel.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163unyjgtkk.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163wyfasrgs.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163apzurcsz.html

$obj?->method()
来源：http://www.sxryk.cn/163mtwfzmmj.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163pjsknbth.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163ubyfjirv.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163oevsbxvm.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163smetqbka.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163evwrastg.html

"值: {$a}"
来源：http://www.aibaodan.cn/163hxnejeei.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163pblsikns.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163thpvihpd.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163lkckmina.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163inxtftpx.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163uhjpotce.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163dhgdoenp.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163injmnwuh.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163qfbekvhf.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163qelssbbc.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163laprqqyk.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163oiiuemci.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163dutrbtkp.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163hxwgvmhy.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163qnfezelr.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163ebxczcgz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163vbkwjmem.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163lxwaxbbt.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163vqciirmr.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163ceudcijm.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163exeholox.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163mvrdbxfe.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163lawfpqff.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163zianubtm.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.aibaodan.cn/163igbpyqvi.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163cpewqydx.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163vfwhxnvb.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163qziayjyi.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163dgwmrdko.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163clbspwyd.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163sacppqqj.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163wfrulomn.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163ymwqwkch.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163fibaqftu.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163jdswfivm.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163dzpxyyog.html

composer require psr/container
来源：http://www.xuanzx.com/163lpbkyeoy.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163palyrztj.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163npnbxpru.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163hegoiwva.html

composer require twig/twig
来源：http://www.sxryk.cn/163mccbqipp.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163uuxlcufu.html

composer require --dev phpunit/phpunit
来源：http://www.xuanzx.com/163uzxdmxgf.html

[U79] PHP：静态分析
来源：http://www.sxryk.cn/163joespqzf.html

composer require --dev phpstan/phpstan
来源：http://www.aibaodan.cn/163elpnqrqw.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163bpxqguvn.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.sxryk.cn/163vljhzpbe.html

[U81] JS：初始化项目
来源：http://www.sxryk.cn/163ympvtwfe.html

npm init -y;  npm i express
来源：http://www.xuanzx.com/163pqnxqriv.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163xqwasmaw.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163tmzamapw.html

[U83] JS：ES Module 导入导出
来源：http://www.aibaodan.cn/163gshjkeev.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163ctjrvfyj.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163uztoqcaa.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163rtycwzlc.html

[U85] JS：可选链
来源：http://www.sxryk.cn/163eyujzdfz.html

a?.b?.c
来源：http://www.sxryk.cn/163udorzsqm.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163koxsdyxn.html

a ?? b
来源：http://www.sxryk.cn/163eoyydxmn.html

[U87] JS：解构默认值
来源：http://www.aibaodan.cn/163ouorijdl.html

const { a = 1, b = 2 } = obj;
来源：http://www.aibaodan.cn/163lhmheuby.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163ceoiedxg.html

{ ...a, ...b }
来源：http://www.aibaodan.cn/163fcguhqkn.html

[U89] JS：数组去重
来源：http://www.aibaodan.cn/163usgxydbe.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163yafqdknz.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163mxakgykm.html

[...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163neeivhdg.html

[U91] JS：对象键值遍历
来源：http://www.xuanzx.com/163ngvdghkn.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.aibaodan.cn/163uwqxyqoa.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163cukrgldt.html

structuredClone(obj)
来源：http://www.xuanzx.com/163nrshbfqt.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163zkqtqrrn.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163gdprynyp.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163xdtdtlfi.html

const double = x => x * 2;
来源：http://www.xuanzx.com/163yjvgbohi.html

[U95] JS：Promise 包装
来源：http://www.xuanzx.com/163finykrud.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163eeiddkdo.html

[U96] JS：async/await 与异常
来源：http://www.aibaodan.cn/163mfbklqdu.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ytyjxapc.html

[U97] JS：并发请求
来源：http://www.aibaodan.cn/163urvqbwjj.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163dzxcofsf.html

[U98] JS：fetch 带 JSON
来源：http://www.sxryk.cn/163dtbnqfyh.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163xrztaeyy.html

[U99] JS：事件监听
来源：http://www.aibaodan.cn/163pbztsfsu.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163gdciykie.html

[U100] JS：DOM 查询
来源：http://www.sxryk.cn/163jtrkhupu.html

document.querySelector(".item")
来源：http://www.xuanzx.com/163ddiaqney.html

[U101] JS：classList 操作
来源：http://www.aibaodan.cn/163njihrkar.html

el.classList.toggle("active")
来源：http://www.xuanzx.com/163dvuchezi.html

[U102] JS：本地存储
来源：http://www.sxryk.cn/163izvfyfww.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.aibaodan.cn/163fqbpeldr.html

[U103] JS：定时器
来源：http://www.sxryk.cn/163usbfpleb.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.xuanzx.com/163xnmltikf.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163ggnugkct.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163sphtugpa.html

[U105] JS：节流
来源：http://www.aibaodan.cn/163nadbflre.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163ydyhichn.html

[U106] JS：日期格式化
来源：http://www.aibaodan.cn/163lqcgdybl.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.xuanzx.com/163fvkcbzic.html

[U107] JS：数字千分位
来源：http://www.aibaodan.cn/163iesqgama.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.aibaodan.cn/163pdplstvr.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163kmlvrjoy.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.aibaodan.cn/163wdgwenos.html

[U109] JS：数组分组
来源：http://www.xuanzx.com/163cvremntd.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163jojszslm.html

[U110] JS：数组分块
来源：http://www.xuanzx.com/163wldohwqj.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163kpapcbzw.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163rrclqzcj.html

new Map(Object.entries(obj))
来源：http://www.sxryk.cn/163fwkletbl.html

[U112] JS：字符串补位
来源：http://www.aibaodan.cn/163whokeqso.html

"7".padStart(3, "0")
来源：http://www.sxryk.cn/163blabijyk.html

[U113] JS：正则替换全部
来源：http://www.xuanzx.com/163llsfsdeh.html

s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kzqwbkfg.html

[U114] JS：JSON 深比较
来源：http://www.sxryk.cn/163nxrrugnj.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ititqhkl.html

[U115] JS：生成 UUID
来源：http://www.sxryk.cn/163kiiquhmt.html

crypto.randomUUID()
来源：http://www.xuanzx.com/163ontiukfz.html

[U116] JS：类型检查（JSDoc）
来源：http://www.aibaodan.cn/163dxrunauj.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163trsafsvv.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163sgufpgaj.html

npm i -D vitest;  npx vitest
来源：http://www.sxryk.cn/163ytagezfl.html

[U118] JS：开发服务器
来源：http://www.aibaodan.cn/163dupdewab.html

npm i -D vite;  npx vite
来源：http://www.xuanzx.com/163yzdxychr.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163qfvytcjh.html

npx vite build
来源：http://www.aibaodan.cn/163qxidsirf.html

[U120] JS：读取环境变量（Vite）
来源：http://www.xuanzx.com/163yntvvddm.html

import.meta.env.VITE_API_URL
来源：http://www.aibaodan.cn/163aorvabcb.html

================================================================================
来源：http://www.sxryk.cn/163ukfflzod.html

统计汇总
来源：http://www.aibaodan.cn/163lqxkdwcl.html

================================================================================
来源：http://www.aibaodan.cn/163fwgnytuh.html

按语言统计（条）：
来源：http://www.xuanzx.com/163nqjrmjxr.html

Python ......... 252
来源：http://www.aibaodan.cn/163osdbzrms.html

PHP ............ 252
来源：http://www.sxryk.cn/163owxqtpti.html

JavaScript ..... 252
来源：http://www.aibaodan.cn/163sckwvwbq.html

TypeScript ..... 212
来源：http://www.aibaodan.cn/163qdgkscoo.html

Java ........... 212
来源：http://www.xuanzx.com/163puvfrgvd.html

Go ............. 212
来源：http://www.sxryk.cn/163efzbwmuu.html

Ruby ........... 212
来源：http://www.xuanzx.com/163oujwlmjq.html

C# ............. 212
来源：http://www.aibaodan.cn/163aicytthp.html

C .............. 30
来源：http://www.xuanzx.com/163xxzracrp.html

C++ ............ 30
来源：http://www.xuanzx.com/163fzqhbgdf.html

SQL ............ 90
来源：http://www.aibaodan.cn/163ksjvvxwb.html

Bash ........... 80
来源：http://www.sxryk.cn/163fverbxmy.html

Kotlin ......... 15
来源：http://www.xuanzx.com/163wyeucgte.html

Swift .......... 15
来源：http://www.aibaodan.cn/163cbolahqt.html

Lua ............ 10
来源：http://www.aibaodan.cn/163zdnptbte.html

Perl ........... 10
来源：http://www.aibaodan.cn/163ijltqjzb.html

Scala .......... 10
来源：http://www.aibaodan.cn/163gzntyxoy.html

------------------------------------
来源：http://www.aibaodan.cn/163ashqvucg.html

合计 ........... 2106 条
来源：http://www.aibaodan.cn/163aulegxfz.html

按章节统计：
来源：http://www.xuanzx.com/163ipbcftjt.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163xqcpxyqf.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163bszzbdvb.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163lbdrlaik.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.aibaodan.cn/163peitkzgi.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163csfsjgxg.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.sxryk.cn/163cydjehox.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163jcipemgd.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163whxpgfdf.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163cjkswyfr.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163rqswvbre.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163ebisddrh.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ewnhgtnd.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dckwsgnx.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163kpgjriuz.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163kmxxjrhr.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163ayecebyp.html

Q SQL 专题                              90
来源：http://www.sxryk.cn/163vwabriky.html

R Bash 专题                             80
来源：http://www.sxryk.cn/163pofuvoob.html

S C / C++ 专题                          60
来源：http://www.sxryk.cn/163jalzpwle.html

T 其他语言补充                          60
来源：http://www.xuanzx.com/163hchwpvrf.html

U 高频实用片段                         120
来源：http://www.aibaodan.cn/163wbouidlf.html

------------------------------------
来源：http://www.sxryk.cn/163weacfqtt.html

合计                                  2106 条
来源：http://www.aibaodan.cn/163cnktajwr.html

--------------------------------------------------------------------------------
来源：http://www.sxryk.cn/163lybapqlv.html

使用提醒
来源：http://www.xuanzx.com/163dxxlirsw.html

--------------------------------------------------------------------------------
来源：http://www.xuanzx.com/163pnhayapr.html

1. 示例追求"最小可用"，正式项目中请补齐导入、错误处理与边界判断。
来源：http://www.sxryk.cn/163risuzlbq.html

2. 涉及文件、网络、数据库的示例，注意资源释放与异常捕获。
来源：http://www.sxryk.cn/163xbjtxpre.html

3. 语言版本差异较大（如 Python 3.10 的 match、Java 17 的 record/switch 箭头），
来源：http://www.sxryk.cn/163zynhginq.html

在旧版本上使用前请先确认语法支持情况。
来源：http://www.aibaodan.cn/163jrddljth.html

4. 标注"手写"的条目是因为该语言缺少对应内置能力，实际项目中可引入成熟库。
来源：http://www.sxryk.cn/163ukvpozge.html

—— 文件结束 ——
来源：http://www.aibaodan.cn/163ikardsqu.html

================================================================================
来源：http://www.aibaodan.cn/163cbymmcnw.html

程序语言常见例子速查手册（2024 版）
来源：http://www.sxryk.cn/163pgosmvao.html

Common Programming Examples Cheat Book
来源：http://www.xuanzx.com/163lnzuxksi.html

================================================================================
来源：http://www.xuanzx.com/163bgmxwgsg.html

【收录内容】
来源：http://www.xuanzx.com/163kspbwpau.html

覆盖 12 种语言 / 语法与常见 API：
来源：http://www.aibaodan.cn/163issfocdb.html

Python · PHP · JavaScript · TypeScript · Java · Go · Ruby · C#
来源：http://www.aibaodan.cn/163yaeyfxfc.html

SQL · Bash · C · C++
来源：http://www.aibaodan.cn/163mhjviihu.html

按「任务」分组：每个任务下按语言各给出一条最小可用示例。
来源：http://www.aibaodan.cn/163mwrtnhpu.html

【使用说明】
来源：http://www.xuanzx.com/163ppfytmlg.html

1. 每个任务形如 "[编号] 任务名"，下面每行以语言标记开头：
来源：http://www.sxryk.cn/163mnugyrga.html

Py:    Python        PHP:   PHP           JS:    JavaScript
来源：http://www.aibaodan.cn/163segqixnh.html


<!-- 参考信息 -->