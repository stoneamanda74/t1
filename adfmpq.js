外链999!wailian999！

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163wfbaysaw.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163vvitxeqk.html

s"值: $b"
来源：http://www.sxryk.cn/163pqqtreoo.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163gscwpini.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163lahjmxen.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163gflnwomb.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163ntodzqrx.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163wkpjwxra.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163sjscnlbq.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163unuzxfrc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163byrsfpxt.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163iljvhlmh.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163seyvjwfg.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163iubrvzso.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163gqrycmge.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163khgopvmi.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163rykizmkk.html

================================================================================
来源：http://www.sxryk.cn/163mccggkjc.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163cqkcofma.html

================================================================================
来源：http://www.sxryk.cn/163yqevnpyf.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163jtxjurjb.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163hvwpwmsd.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163aediurly.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163mfmtlqbu.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163kgqvopee.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163dssosvhg.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163qyfcndkz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163nebnndeb.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163wvxghbge.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163mrosqmyb.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163lmdrzrqo.html

{**a, **b}
来源：http://www.xuanzx.com/163rwxiopog.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163tpvoyesh.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163qccaopez.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163glkowwqq.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163biniykuq.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163wffwsqyz.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163wszsikwy.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163zwqodgbf.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163mfmoyrxg.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163vrdthawy.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163yjuthwyk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163usghfait.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163hcmotlnp.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163xvfovqih.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163ykkmnnau.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163waybuxtd.html

defaultdict(list)
来源：http://www.xuanzx.com/163gdfjfmro.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163ahivhzxy.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163jjfehtcj.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163nktlcbpo.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163xarmcssu.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163fgxgqzfl.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163sxefxyao.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163ksenooeg.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163uecwdreu.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163owhqncsj.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163tvlhojxo.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163kmbgqefb.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163yjzqnxif.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163pfakguyk.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163enwmezhp.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163mqdkvmmp.html

list(zip(*m))
来源：http://www.aibaodan.cn/163wikeyswb.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163snxmuzfk.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163vfykypgy.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163zltefvst.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163euoqrpyk.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163zvlvmbkv.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163zqilogjx.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163kokihsum.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163txnloafo.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163wzlqhtjg.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163yvnilgsv.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163rrphdbwv.html

UserId = int
来源：http://www.aibaodan.cn/163jkoymrqu.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163wcxdvhvs.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163mhvgxdfo.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163vlqravss.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163yuchnpse.html

[U31] Py：单测
来源：http://www.sxryk.cn/163clyecimb.html

python -m pytest -q
来源：http://www.xuanzx.com/163bpacnzcg.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163vvzzhtns.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163jgtgvhbo.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163anluexiy.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163tyridjjc.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163bjkekhbf.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163xljnfahb.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163dpcjcwtu.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163dcxjcphw.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163cdjzjqrg.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163qzhubjzp.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163sotfzpuv.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163kybfctfm.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163ajsxpuaw.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163jtgiqxfi.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163wkartypm.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163okqpzpdk.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163xahkbyid.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163uppfvwnl.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163hsdeumfj.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163befvaifj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163vcrxlhhv.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163rzihmrjb.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163eotgsppx.html

namespace App\Http;
来源：http://www.aibaodan.cn/163vsvrhnmo.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163sfmlfvsn.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163kwmpqrlo.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163bphkctzq.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zsslcjmu.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163hytclqns.html

?string $name = null
来源：http://www.aibaodan.cn/163kearhold.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163wevekqym.html

int|string $id
来源：http://www.aibaodan.cn/163gbutmgut.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163kzdaadzj.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163toyfgzdb.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163nkhmjuzo.html

public readonly string $name
来源：http://www.aibaodan.cn/163jtlsjjtx.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163jztofzno.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163xwwoqhlf.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163tpfwhesh.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163jdvrsowa.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163cxhovcfz.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163kvjtbvaa.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163vvmnreap.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163ncvopvgf.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163gioazcfi.html

$obj?->method()
来源：http://www.aibaodan.cn/163ayeolxku.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163vlserdoy.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163yzvufkdo.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163ovbkijzr.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vinbtrdi.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163cfotjjwh.html

"值: {$a}"
来源：http://www.aibaodan.cn/163eojzytdb.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163asipypam.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163draicimp.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163rayctdkv.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163llmtjrnu.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163ahhdozqd.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163vspblnny.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163jexevwky.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163aitkjpzq.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163kbqskjjr.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163crxefmna.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163rqvjxjiv.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163zsmuifdr.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163ykowmvxf.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163znfpknbx.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163woncpkmn.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163cclvjqom.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163jihmyrpl.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163zhypbhby.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163ffimfwlp.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163jivjfqqm.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163gxngyhhf.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163ormnfmwo.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163gophzksl.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163oqcwxvom.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163opnmheib.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163jpplitji.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163utmphvqe.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163vndkslwb.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163wdjfdhjl.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163obpgaiuj.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163nzwzyzlh.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163tyyzpfpw.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163arnbdboz.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163ceyndduu.html

[U75] PHP：依赖注入
来源：http://www.xuanzx.com/163akmrqdvl.html

composer require psr/container
来源：http://www.xuanzx.com/163melhdqka.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163dtgmvbnn.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163lfevskap.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163mrqrrmtq.html

composer require twig/twig
来源：http://www.sxryk.cn/163nrkvtcjg.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163oyiakhcw.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163jqopmjva.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163khxwuazd.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163ataxhlrj.html

[U80] PHP：代码规范修复
来源：http://www.xuanzx.com/163xprtbiey.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163jlucvxyf.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163hwstzxym.html

npm init -y;  npm i express
来源：http://www.aibaodan.cn/163wrhlondt.html

[U82] JS：package.json 脚本
来源：http://www.aibaodan.cn/163uojimbgw.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163lviscetx.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163wbbcrdzs.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163ftbqglvc.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163lxracqom.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.sxryk.cn/163blkjixwg.html

[U85] JS：可选链
来源：http://www.xuanzx.com/163crtxkuer.html

a?.b?.c
来源：http://www.xuanzx.com/163ayypftxc.html

[U86] JS：空值合并
来源：http://www.sxryk.cn/163milguljh.html

a ?? b
来源：http://www.sxryk.cn/163ncpgldic.html

[U87] JS：解构默认值
来源：http://www.xuanzx.com/163yeznolst.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163mxggwubc.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163oidvzehw.html

{ ...a, ...b }
来源：http://www.sxryk.cn/163vjtwfguz.html

[U89] JS：数组去重
来源：http://www.xuanzx.com/163ylmxgkvh.html

[...new Set(arr)]
来源：http://www.aibaodan.cn/163delrdjfp.html

[U90] JS：数字数组排序
来源：http://www.sxryk.cn/163qappgzkq.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ultiippd.html

[U91] JS：对象键值遍历
来源：http://www.aibaodan.cn/163ttmilytq.html

Object.entries(obj).forEach(([k, v]) => {});
来源：http://www.sxryk.cn/163vvqifldw.html

[U92] JS：深拷贝
来源：http://www.xuanzx.com/163wlhydcnd.html

structuredClone(obj)
来源：http://www.xuanzx.com/163nzlcakie.html

[U93] JS：模板字符串
来源：http://www.sxryk.cn/163ywpiezsh.html

`共 ${n} 条`
来源：http://www.sxryk.cn/163htyxtjcj.html

[U94] JS：箭头函数
来源：http://www.sxryk.cn/163vocjfdzn.html

const double = x => x * 2;
来源：http://www.aibaodan.cn/163dgzxxmin.html

[U95] JS：Promise 包装
来源：http://www.sxryk.cn/163fmtkedre.html

new Promise((resolve, reject) => {})
来源：http://www.sxryk.cn/163vahliaqm.html

[U96] JS：async/await 与异常
来源：http://www.xuanzx.com/163yikfxxzl.html

try { const d = await f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163uvhhwqaw.html

[U97] JS：并发请求
来源：http://www.xuanzx.com/163fzysuzgl.html

await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163fpsoeekk.html

[U98] JS：fetch 带 JSON
来源：http://www.aibaodan.cn/163ppptuznb.html

await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
来源：http://www.aibaodan.cn/163xngufmai.html

[U99] JS：事件监听
来源：http://www.xuanzx.com/163yfxrixrv.html

el.addEventListener("click", e => {})
来源：http://www.sxryk.cn/163cwdupewc.html

[U100] JS：DOM 查询
来源：http://www.aibaodan.cn/163jxnpqyyk.html

document.querySelector(".item")
来源：http://www.aibaodan.cn/163atjmqsqf.html

[U101] JS：classList 操作
来源：http://www.xuanzx.com/163pjgleswn.html

el.classList.toggle("active")
来源：http://www.aibaodan.cn/163ifjiyffj.html

[U102] JS：本地存储
来源：http://www.aibaodan.cn/163aamczxrc.html

localStorage.setItem("k", JSON.stringify(v))
来源：http://www.xuanzx.com/163yzazkayl.html

[U103] JS：定时器
来源：http://www.xuanzx.com/163yckfqpqg.html

setTimeout(fn, 1000);  setInterval(fn, 1000);
来源：http://www.sxryk.cn/163megdhyhh.html

[U104] JS：防抖
来源：http://www.aibaodan.cn/163dimncwht.html

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163aasdtlpk.html

[U105] JS：节流
来源：http://www.xuanzx.com/163olilmssa.html

const throttle = (fn, ms) => { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; };
来源：http://www.aibaodan.cn/163mqtwqluw.html

[U106] JS：日期格式化
来源：http://www.xuanzx.com/163cmntzuxo.html

new Intl.DateTimeFormat("zh-CN", { dateStyle: "medium" }).format(new Date())
来源：http://www.sxryk.cn/163bxysewnk.html

[U107] JS：数字千分位
来源：http://www.sxryk.cn/163vgdpdcgd.html

new Intl.NumberFormat("en-US").format(1234567)
来源：http://www.xuanzx.com/163mvarkgki.html

[U108] JS：随机整数
来源：http://www.aibaodan.cn/163zjqkgwnb.html

Math.floor(Math.random() * (max - min + 1)) + min
来源：http://www.xuanzx.com/163szcabtrf.html

[U109] JS：数组分组
来源：http://www.aibaodan.cn/163zxdshgmh.html

Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ischkqnn.html

[U110] JS：数组分块
来源：http://www.aibaodan.cn/163nvrsxvgr.html

arr.reduce((acc, x, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [])
来源：http://www.sxryk.cn/163sqsbiqbn.html

[U111] JS：对象转 Map
来源：http://www.aibaodan.cn/163inwjgzbl.html

new Map(Object.entries(obj))
来源：http://www.xuanzx.com/163jjvfsnxz.html

[U112] JS：字符串补位
来源：http://www.sxryk.cn/163chbdkuur.html

"7".padStart(3, "0")
来源：http://www.xuanzx.com/163qvatfnvd.html

[U113] JS：正则替换全部
来源：http://www.aibaodan.cn/163wnxwwqno.html

s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cuiubpzb.html

[U114] JS：JSON 深比较
来源：http://www.aibaodan.cn/163jwojxrrw.html

JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163zfloqvhx.html

[U115] JS：生成 UUID
来源：http://www.aibaodan.cn/163wouycsgy.html

crypto.randomUUID()
来源：http://www.aibaodan.cn/163fwpvedlq.html

[U116] JS：类型检查（JSDoc）
来源：http://www.sxryk.cn/163bdpxkcfe.html

/** @param {string} name */ function f(name) {}
来源：http://www.xuanzx.com/163rlvjkqbj.html

[U117] JS：单元测试
来源：http://www.aibaodan.cn/163yfhkjslf.html

npm i -D vitest;  npx vitest
来源：http://www.aibaodan.cn/163fqhvqtsx.html

[U118] JS：开发服务器
来源：http://www.xuanzx.com/163wrvtendo.html

npm i -D vite;  npx vite
来源：http://www.sxryk.cn/163mktnyece.html

[U119] JS：生产构建
来源：http://www.sxryk.cn/163zvdiokmz.html

npx vite build
来源：http://www.aibaodan.cn/163jvdqmlrb.html

[U120] JS：读取环境变量（Vite）
来源：http://www.aibaodan.cn/163gmnhzmvi.html

import.meta.env.VITE_API_URL
来源：http://www.xuanzx.com/163cecxccqk.html

================================================================================
来源：http://www.aibaodan.cn/163sgomwzqz.html

统计汇总
来源：http://www.xuanzx.com/163miaewdar.html

================================================================================
来源：http://www.sxryk.cn/163hvyeibka.html

按语言统计（条）：
来源：http://www.aibaodan.cn/163cfdfgfae.html

Python ......... 252
来源：http://www.xuanzx.com/163rideplfy.html

PHP ............ 252
来源：http://www.xuanzx.com/163bqakjdbn.html

JavaScript ..... 252
来源：http://www.xuanzx.com/163fzgyxgmc.html

TypeScript ..... 212
来源：http://www.sxryk.cn/163scscwwsh.html

Java ........... 212
来源：http://www.sxryk.cn/163egcvddxn.html

Go ............. 212
来源：http://www.xuanzx.com/163thluotev.html

Ruby ........... 212
来源：http://www.xuanzx.com/163nvyazncb.html

C# ............. 212
来源：http://www.aibaodan.cn/163ewvuqbpp.html

C .............. 30
来源：http://www.sxryk.cn/163ywphzqdv.html

C++ ............ 30
来源：http://www.xuanzx.com/163gqavgcmm.html

SQL ............ 90
来源：http://www.aibaodan.cn/163qynsmpco.html

Bash ........... 80
来源：http://www.xuanzx.com/163nhleqhep.html

Kotlin ......... 15
来源：http://www.aibaodan.cn/163qlfcqkrn.html

Swift .......... 15
来源：http://www.aibaodan.cn/163hmrxclwc.html

Lua ............ 10
来源：http://www.aibaodan.cn/163tlnvzzde.html

Perl ........... 10
来源：http://www.sxryk.cn/163txsvmomz.html

Scala .......... 10
来源：http://www.sxryk.cn/163rmslwexw.html

------------------------------------
来源：http://www.aibaodan.cn/163dhhafzos.html

合计 ........... 2106 条
来源：http://www.xuanzx.com/163tywzonaa.html

按章节统计：
来源：http://www.xuanzx.com/163uqivncsm.html

A 基础语法与类型       26 个任务 × 8 语言 =  208
来源：http://www.sxryk.cn/163zdhsznir.html

B 流程控制             16 个任务 × 8 语言 =  128
来源：http://www.xuanzx.com/163ghqpuljz.html

C 函数与作用域         16 个任务 × 8 语言 =  128
来源：http://www.aibaodan.cn/163lwjlntfe.html

D 数组 / 列表 / 集合   26 个任务 × 8 语言 =  208
来源：http://www.xuanzx.com/163whxwrxyc.html

E 字符串处理           22 个任务 × 8 语言 =  176
来源：http://www.xuanzx.com/163mcxscovh.html

F 文件与目录           12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163yhmthcix.html

G 面向对象             16 个任务 × 8 语言 =  128
来源：http://www.sxryk.cn/163rwtirdzs.html

H 异常与错误处理       10 个任务 × 8 语言 =   80
来源：http://www.xuanzx.com/163peqgovsd.html

I 正则表达式            8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163nxmfckvu.html

J 日期与时间           10 个任务 × 8 语言 =   80
来源：http://www.sxryk.cn/163xlfdjgpt.html

K JSON 与序列化         8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163dhywttuq.html

L 网络请求              8 个任务 × 8 语言 =   64
来源：http://www.sxryk.cn/163tktgvjba.html

M 命令行 / 进程         8 个任务 × 8 语言 =   64
来源：http://www.xuanzx.com/163wuoxhoqe.html

N 数据结构与算法       12 个任务 × 8 语言 =   96
来源：http://www.xuanzx.com/163zofyvgnn.html

O 并发与异步            6 个任务 × 8 语言 =   48
来源：http://www.xuanzx.com/163nvyopffs.html

P 常用工具函数          8 个任务 × 8 语言 =   64
来源：http://www.aibaodan.cn/163mpmodysg.html


<!-- 参考信息 -->