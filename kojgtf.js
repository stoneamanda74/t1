外链999!wailian999！

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163kgkcnmse.html

"值: $b"
来源：http://www.sxryk.cn/163yybfcakb.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163kpjojjhy.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163mfulcfrx.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163sgnpgqcw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163bhwnvpxb.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163pfysygnh.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163xleehonp.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163fazjiphf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163cluutmak.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163oiuzzewb.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163lfmwromz.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163mvqkhmgx.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163jweyibxh.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163fimgddcr.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163zanwuebg.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163lpqqrmka.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163fumkptrp.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163nxtjsajb.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163fbbkeprt.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163uzwrxmcr.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163zlwmdxns.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163yuscajdh.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163vbpuefsd.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163xohxysll.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163wonieqhg.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ghgkqikz.html

print("Hello")
来源：http://www.xuanzx.com/163alrvdykt.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163wsrgqnkb.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163ochubslt.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163qiyeyxqe.html

"值: \(b)"
来源：http://www.aibaodan.cn/163uhvmrmdu.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163cifpwdrf.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163pflltdwl.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163tqkgdjtd.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163cuvxreza.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163gexwincv.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163knxoshxq.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163autmfeyx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163bkwxejom.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163ubzcmfcm.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163qupngbgp.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163oghhrkwy.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163lcbiahpm.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163fihyoxgf.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163vidyxloi.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163tofavqnx.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163xdzclhga.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163qbltkyjv.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163aiaphzwp.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163irzmafmn.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163yssbepca.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163nuxycdmj.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163gpndcdkd.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163fqvehpnd.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163svglvhci.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163rnhgbajg.html

print("Hello")
来源：http://www.xuanzx.com/163yhbivzmj.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163rukrsgig.html

local a = 1
来源：http://www.sxryk.cn/163rhjqjtkr.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163guhuyghy.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163ohhbctbz.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163cjmxckfx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163acgejfyc.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163sarfzpiy.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163qychayfe.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163bsfbptlh.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163ieezcqfa.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163znjkbkpg.html

"a" .. "b"
来源：http://www.sxryk.cn/163pwrkcvbb.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163ucicsufs.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163crukkrts.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163soodixoj.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163jbhocmzh.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163jfdtpjyk.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163sassnywn.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163apeobion.html

print "Hello\n";
来源：http://www.aibaodan.cn/163bambwxpd.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163hjokyjxj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163qdiihblp.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163zlmxnyxr.html

"值: $a"
来源：http://www.xuanzx.com/163wekpxsix.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163wdmlfoym.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163zbsvrzkn.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163eirkpbxd.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163nykbjauh.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163ghftcilq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163fsvihbwc.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163vfjszyca.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163sywoxror.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163zkeijgva.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163vwpgwesc.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163mexiftbn.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163qgaqckoj.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163bthlklif.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ncotwqvh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163dkryycvt.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163itznqzks.html

println("Hello")
来源：http://www.aibaodan.cn/163zrdtvcir.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163lqhaztxv.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163qbxmlhwc.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163rimjafok.html

s"值: $b"
来源：http://www.xuanzx.com/163ymiviqed.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163awivrquk.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163ejhnpsrn.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163ogxkcpfv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ddskrobx.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163fxmygnzp.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ehpxguav.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163okbgggyu.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163iyqcrxgu.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163qkwpfdld.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163kryylcmg.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163byaseklm.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163hweesrtp.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163vczbzryp.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163alehqcjp.html

================================================================================
来源：http://www.xuanzx.com/163kslnjrgb.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163hulhwwjb.html

================================================================================
来源：http://www.sxryk.cn/163ywmryots.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ecadcmcj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163uofyiquk.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163fzmmngkx.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163akuoqiln.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163ezjmlhpj.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163agighjnk.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163oflxqzzk.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163hzlupubs.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163sguxdfas.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163reagjwuf.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163bpchthll.html

{**a, **b}
来源：http://www.xuanzx.com/163scgxjjik.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163mkrgpvzi.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163mfmuuicb.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163gdzcurjw.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163jsdryxkj.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163chqezoww.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163zibglypj.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163jekwtmlo.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163sylhrheh.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163gbisfoom.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163lxxgetaj.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163reybjlqp.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163jsbbafpx.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163aljzwpwu.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163gywpiqww.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163onjdqulv.html

defaultdict(list)
来源：http://www.xuanzx.com/163usycrgpl.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163agkmiwll.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163tszppygy.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163fcphmbzp.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ktphejyu.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163iknuskgr.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163qdqxsawi.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163lobtpxlw.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163xrcpdyhi.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163uepobgvu.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163rkkwijzf.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163vhkbsggt.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163gjyvhhag.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163mfiuprdw.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163pqwiagib.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163rmfthbsx.html

list(zip(*m))
来源：http://www.sxryk.cn/163tnuihctl.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163auyuszsv.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ozmihzuj.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163fuhkrsjr.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163jrdwjdcj.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163xfbgclyx.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163zraxhrvf.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163cajflamt.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163ywxfhumd.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163sqqnrewy.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163dylpbnno.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163lipxinai.html

UserId = int
来源：http://www.aibaodan.cn/163semkxcij.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163ywxlidcg.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163pssudnhb.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163igwemxtf.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163szcrtxgs.html

[U31] Py：单测
来源：http://www.sxryk.cn/163pvwyqjtr.html

python -m pytest -q
来源：http://www.sxryk.cn/163nueketgk.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163dzcgsxbh.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163eizcpddw.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163ybugtxip.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163vquccpor.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163cuwrjqma.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163haauhrxt.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163dntcouib.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163dbypijvk.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163rfymmowv.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163sibgwlnv.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163lsyxmfpr.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163zvuhuybe.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163undmrayc.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163hbuzxtam.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163kstetxlc.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163dzzczeys.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163uxzedmnc.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163imszkhuw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163jvfqlhmz.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163vczycmwi.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163odglyumk.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163ffdzleeq.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163telsftbu.html

namespace App\Http;
来源：http://www.aibaodan.cn/163spfvwaqn.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163djzdeeqv.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163imbohzyt.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163rvkmboso.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163mtwzqsrm.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163uoyawzkr.html

?string $name = null
来源：http://www.sxryk.cn/163lfhwjxin.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163nbvwjjbq.html

int|string $id
来源：http://www.aibaodan.cn/163orsjetyt.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163kmrjugzq.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163htwkpsbb.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163qjphursc.html

public readonly string $name
来源：http://www.xuanzx.com/163mnovmtzq.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163bwtpznju.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163lzrdbpgn.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163slitxfxz.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163sqgowjsx.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163zmerbmlt.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163jgregstb.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163acvvwjqc.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163kfwwkoaq.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163qieovnrx.html

$obj?->method()
来源：http://www.sxryk.cn/163eqfoswvs.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163lplauqcm.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163eyayzxay.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163syvteqqg.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zhglpvcb.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163pxjwgcsk.html

"值: {$a}"
来源：http://www.xuanzx.com/163waykxull.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163usfwazzh.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163uyybkfix.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163jasvpubf.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163tczpzfai.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163owgpxjuh.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163wrlszoyi.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163cpwnolit.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ufwwoecr.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163tdbyublc.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163pidtvyjx.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163tomlojyw.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163bafhvfgt.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163wxlzathx.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163rssgselr.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163ydzxrtsy.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163crjgthru.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163ecphldqr.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163tieizmxk.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163vtvvgynd.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163waoarkvc.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163ysfgsiak.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163mhcynggs.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163mgazjziy.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163xubghsiv.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163wmetzxbs.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163jjbugnsf.html

[U71] PHP：抛出异常
来源：http://www.xuanzx.com/163zeimtoor.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163zldbvfbf.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163qocqioxi.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163cwjmybzc.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163qgnyusgq.html

parse_ini_file("config.ini", true)
来源：http://www.aibaodan.cn/163opedlfte.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163ajragnqc.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163jhctudgt.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163gtkdpepz.html

composer require psr/container
来源：http://www.xuanzx.com/163oplxjwgr.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163wgqddisk.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163vekpuoir.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163iprkplsi.html

composer require twig/twig
来源：http://www.sxryk.cn/163vooecasd.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163awugdziz.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163qpcxkzng.html

[U79] PHP：静态分析
来源：http://www.aibaodan.cn/163qtquginf.html

composer require --dev phpstan/phpstan
来源：http://www.sxryk.cn/163vodtwdis.html

[U80] PHP：代码规范修复
来源：http://www.sxryk.cn/163yvymbwgh.html

composer require --dev friendsofphp/php-cs-fixer
来源：http://www.xuanzx.com/163wsvulmbu.html

[U81] JS：初始化项目
来源：http://www.aibaodan.cn/163qecsyfen.html

npm init -y;  npm i express
来源：http://www.sxryk.cn/163rlixylco.html

[U82] JS：package.json 脚本
来源：http://www.sxryk.cn/163rxqkqsph.html

"scripts": { "dev": "vite", "build": "vite build" }
来源：http://www.xuanzx.com/163lwmlsutp.html

[U83] JS：ES Module 导入导出
来源：http://www.sxryk.cn/163xjickgug.html

export const a = 1;  import { a } from "./m.js";
来源：http://www.sxryk.cn/163biasjqzm.html

[U84] JS：CommonJS 写法
来源：http://www.aibaodan.cn/163rqxpepqz.html

module.exports = { a };  const { a } = require("./m");
来源：http://www.aibaodan.cn/163gdrelxyb.html

[U85] JS：可选链
来源：http://www.aibaodan.cn/163gvgznihz.html

a?.b?.c
来源：http://www.sxryk.cn/163ttdtainz.html

[U86] JS：空值合并
来源：http://www.aibaodan.cn/163pymzxcip.html

a ?? b
来源：http://www.aibaodan.cn/163ghpesqim.html

[U87] JS：解构默认值
来源：http://www.sxryk.cn/163ocgkgmnj.html

const { a = 1, b = 2 } = obj;
来源：http://www.xuanzx.com/163yhaollnx.html

[U88] JS：对象展开合并
来源：http://www.xuanzx.com/163flmehgpa.html

{ ...a, ...b }
来源：http://www.xuanzx.com/163lplipewf.html

[U89] JS：数组去重
来源：http://www.sxryk.cn/163uqbiivsf.html

[...new Set(arr)]
来源：http://www.sxryk.cn/163nkyegtve.html

[U90] JS：数字数组排序
来源：http://www.xuanzx.com/163xocadfxv.html

[...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163vbbihpif.html


<!-- 参考信息 -->