外链999!wailian999！

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163iznjfsnx.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163uozbdcen.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163wtphnrkt.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163bthapiet.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163codigngo.html

================================================================================
来源：http://www.xuanzx.com/163qqzidffs.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163jgcomnpq.html

================================================================================
来源：http://www.aibaodan.cn/163wukimqbw.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163pwlnourk.html

println("Hello")
来源：http://www.xuanzx.com/163oajohkit.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163safkkunb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163rtpxrzwi.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ooumgmug.html

"值: $b"
来源：http://www.aibaodan.cn/163bmhhcffh.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163xjrwhuzp.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163jdqvptce.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163obipefiq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163wlxiclxo.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163uftzpttx.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ytxvhati.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163ydfzayds.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163vuzhyjqg.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163luwgzhds.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163sydjsfmu.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163yesnwuuq.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163lbaswdvi.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ztryelds.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163bhkssjgo.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163cldcihcs.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163eifzaron.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163jonfrpno.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163fxhowevs.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163poiztbkj.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163augtwcig.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163dsxirszf.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163jhpzlrop.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163uzlfcylu.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163oyejcerv.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163xcpdizuv.html

print("Hello")
来源：http://www.aibaodan.cn/163hkftmuri.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163nuimlywl.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163uyfkvrbv.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163fzuirkpz.html

"值: \(b)"
来源：http://www.aibaodan.cn/163thgrdnop.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163yjsfsvej.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163egyritif.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163jmbsibsb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163yapaswgf.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163icewnaqk.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163xhalpdoo.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163depmvich.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163glanofvf.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163zyboownm.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163kxqklryj.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163sfxonted.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163ethvjxdu.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163wcpsdcxv.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163bctddwho.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163uctbkewq.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163jvproofg.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163yxkcoomc.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163lfvfedcr.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ictxxbcf.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163qusdulpm.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163nvtzndnu.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163cmxmxcgf.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163euecofsc.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163fznlmyqt.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163rvofichd.html

print("Hello")
来源：http://www.xuanzx.com/163qrwnfylk.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163xdtkhfoa.html

local a = 1
来源：http://www.xuanzx.com/163wfvriuup.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163eesgltvr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163ppbismqm.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163umjortzd.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ylrabawd.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163ppkhlsvh.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163fddlwfwo.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163wbjqntvr.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163zkcbdyrv.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163kzhmlfmi.html

"a" .. "b"
来源：http://www.xuanzx.com/163wrcyposd.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163pwnmavlq.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163amvtqtae.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163epiqrupv.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163jcmgqbkv.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163hbvrmxls.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163rrjhoife.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163zmeiyisu.html

print "Hello\n";
来源：http://www.xuanzx.com/163btplzryf.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163fgndxgoe.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163lbtpdbot.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ypwgqcno.html

"值: $a"
来源：http://www.xuanzx.com/163mlfwqbjm.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163yudajbtn.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163ncrfozwt.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163fxtldvgr.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163dyenfkbl.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163dtighqyn.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163ezxyuezi.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163gvxogrrm.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163jwvmafap.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163crcovlbn.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163uqsfqqsc.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163yupirpzh.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163hpvjjzxd.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163cjudkxgi.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163vfhtftsb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163smfgoson.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163gjdzirbd.html

println("Hello")
来源：http://www.xuanzx.com/163zglfbirr.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163hkrevmfu.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163zerlkzop.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163znzkvmwi.html

s"值: $b"
来源：http://www.xuanzx.com/163rqqoycrm.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163izliitol.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163eaddqsky.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163kkreklkf.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163jcxxuojy.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163zvwrpsjq.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ptpyovyh.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163gjwukkmh.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163krtrctib.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163vmjvmjzo.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163gfgsmvpz.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163kldepvtb.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163ptregmfi.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163qrbczpne.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163iumhopaw.html

================================================================================
来源：http://www.aibaodan.cn/163cifqbmer.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163imyviflp.html

================================================================================
来源：http://www.aibaodan.cn/163mgrklsbk.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163dhoeqjdf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163kuvzspog.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163nmqhvbws.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163okyecfoa.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163jwykzpmb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163rjxhzcpl.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163ybfdbhnu.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163hbuqepdi.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163dhdkctwz.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163xyizdidm.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163cbwzbxnf.html

{**a, **b}
来源：http://www.sxryk.cn/163gucoihgq.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163tdnncffl.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163pqkgmoni.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163rvyhynqk.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163rsndzvjk.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163lhghmejh.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163gtrsxjym.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163qvquvwol.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163awzhenjm.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163mmtyhkok.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163qnpittvj.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163bbvoqdnk.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163vhneubar.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163lmmznorm.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163fzvsjzpl.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163npzvcypf.html

defaultdict(list)
来源：http://www.aibaodan.cn/163ypvutsds.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163isyfhauf.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163hqnkkizy.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163kkvtpiqn.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ymorqynz.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163wxtqifcn.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163tkiagtld.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163nfdzlovd.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163qcovgxqb.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163vjksuvky.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163fukwqtmo.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163sxoxhbee.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163mqwyodja.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163jkejjmgu.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163fypjvzte.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163mmhdwaiz.html

list(zip(*m))
来源：http://www.sxryk.cn/163hnozbszp.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163mrrpndbp.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163rcqhipht.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163eknoptxt.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163rymidycu.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163jnigsfeu.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163utgvhjay.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163vzirzlak.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163ocqsbboj.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163fvmiuzrh.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163trqsptfd.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163fvuldhhc.html

UserId = int
来源：http://www.aibaodan.cn/163cwxpgghw.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163woyutjmh.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163kufbvczj.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163csqgpduf.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163ackssous.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163dqszghqz.html

python -m pytest -q
来源：http://www.aibaodan.cn/163sbuizrym.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163qsvprftl.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163jfuibgkf.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163cfdqrnpi.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163zxdogjmo.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163osmzfjpn.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163rtikoiyn.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163opdnndwk.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163hnahehpt.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163ecgjfjkm.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163ftvmbjua.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163lngelrgj.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163frflofpx.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163lrynwhdd.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163dfoqsbig.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163iqanyofu.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163yidcouit.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163itrbmirf.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163gaiyqruh.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163okbtrtth.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163okoyqixz.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163pfscmpnr.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163qfnpqlzo.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163jowjrnyy.html

namespace App\Http;
来源：http://www.aibaodan.cn/163qnwdnfqr.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163tdmisvqy.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163pfrazljt.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163grnaqglu.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fdcpkavy.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163ewwmsrmn.html

?string $name = null
来源：http://www.xuanzx.com/163drkjvlnu.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163renxlpts.html

int|string $id
来源：http://www.xuanzx.com/163jyuckuvm.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163qiyrmxau.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163jzwdoenv.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163bavsdvtx.html

public readonly string $name
来源：http://www.sxryk.cn/163qwwazdpc.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163mevbolki.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163hppmkrvn.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163ytmtrmlx.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163gwwuffut.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163yjrwxpku.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163vohpeqyu.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163gdgsnrgf.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163auxiieef.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163nfxfcdbe.html

$obj?->method()
来源：http://www.aibaodan.cn/163cqmvlhbb.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163tdtywsuf.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163mnbniiqm.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163cpuizcpj.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163kruqknra.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163vomunitd.html

"值: {$a}"
来源：http://www.aibaodan.cn/163opoimthg.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163hixooyvz.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163doeaujcw.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163yztncmun.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163dptagnyy.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163bvvsvsyd.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163kbejzbsg.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163adtxvoiv.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163nqhgdpkg.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163bbqdiogh.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163gbyfnaqu.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163jgcmzveg.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163hopgyrua.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163nugecvlx.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163dwatjzvm.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163ctrpfwwx.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163sthqjcts.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163zvzlxity.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163pwbtegmw.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163ervmiuko.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163fifllvpv.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163qqygsmtr.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163ozvunoed.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163yrtrvomy.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163zgbfthvz.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163muwlivbl.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163yupustav.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163pqojdday.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163ysxtnlsl.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163lyjuisgz.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163kckinden.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163axxoojvh.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163xmtrmkzn.html

[U74] PHP：读取环境变量
来源：http://www.sxryk.cn/163zzyakccy.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163mjvcdinh.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163mzttpupj.html

composer require psr/container
来源：http://www.aibaodan.cn/163meydgssj.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163sascbkox.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163ytdrlxih.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163eadudjix.html

composer require twig/twig
来源：http://www.sxryk.cn/163vabpwwav.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163pydttsgx.html

composer require --dev phpunit/phpunit
来源：http://www.sxryk.cn/163emgqsszb.html

[U79] PHP：静态分析
来源：http://www.xuanzx.com/163bubltkca.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163oxovexbk.html

[U80] PHP：代码规范修复
来源：http://www.aibaodan.cn/163hqqsekcd.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.aibaodan.cn/163waowqljs.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163kuvpbsii.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163thgombgq.html

[U82] JS：package.json 脚本
来源：http://www.xuanzx.com/163xiefdzgy.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.sxryk.cn/163bsyufvid.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163weqtnppd.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163yfqjuywy.html

[U84] JS：CommonJS 写法
来源：http://www.xuanzx.com/163uownmetk.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.xuanzx.com/163erpwzacy.html


<!-- 参考信息 -->