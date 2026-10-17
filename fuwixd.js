外链999!wailian999！

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163fmhsknpz.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163uyllmbfb.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ooraeaon.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163vqcgjfcr.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163aczwsvjk.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163dcylgaiw.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163vmifqons.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163ofptkotq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163mhmraavs.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163rjyclwkd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163barmlqjv.html

[S56] C++：optional
来源：http://www.sxryk.cn/163piitdcyw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163kyjekykv.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163sdvqtefz.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163doltnoee.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163oqsbhxzy.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163kyvaqubv.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163wttsljqq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163apvtzjzg.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163nntytnaj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163kmfoqjmb.html

================================================================================
来源：http://www.sxryk.cn/163yprokoxw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163vdjvwkeg.html

================================================================================
来源：http://www.xuanzx.com/163wpyiguep.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163mikuomhv.html

println("Hello")
来源：http://www.xuanzx.com/163wqxfwsxv.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ctxihety.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163eyqyvbst.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163cjvzvrsb.html

"值: $b"
来源：http://www.sxryk.cn/163rapftepe.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163zylxglgd.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163mrjtfgwt.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163kefytpha.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163jcsagxwk.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163qxpoyznc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163pikvukcu.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163hjjtqqxa.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163szpaenxo.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163knbfpfgk.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163knetemcu.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163cjfdfihm.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163mugslbbz.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163lrrgpeui.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163lhyakwge.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163qxhatzrx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163pvlmzweo.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163tcvfuqjs.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163abqbeenm.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163vmfxjrdh.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163vzunvald.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163kionsixv.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163mtzpdutz.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163rimhnqbq.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163qdaapvam.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163zhfzcrun.html

print("Hello")
来源：http://www.sxryk.cn/163wiwuiahk.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163zwtfbnzv.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163kwpyggsv.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163doyfhslh.html

"值: \(b)"
来源：http://www.aibaodan.cn/163aksvxhbl.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163oxyepwld.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ahswgryc.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163omefvulm.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163eizllhpa.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163klohfxnc.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163yspomqtm.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163upjeykzr.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163wzvwvoac.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163dzkgjujy.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163gurilevy.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163biylgrme.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163tnaxmaop.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163emufwhfv.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163ituiiuex.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163gemcdgpi.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163khjavsal.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163htfaincl.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163fpskpuvo.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163yhluhpgr.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163eftdqilw.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163gimioxxt.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163mujxvhve.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163ppkeansc.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163eiwbwnah.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163cntajxyu.html

print("Hello")
来源：http://www.sxryk.cn/163fmsrfbfl.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163qblzxwqc.html

local a = 1
来源：http://www.xuanzx.com/163vbydqfzb.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163fvsrkoif.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163zmizthgf.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163mdibtnrw.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163uxtgthvu.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163jhvpolvw.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163qthukzzo.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163bcecqryq.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163mmztfoko.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163ytuuribp.html

"a" .. "b"
来源：http://www.aibaodan.cn/163tohdunem.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163hgiwtstn.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163ygbpvedu.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163zeybogxd.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163bdezvgwc.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163dcizomgt.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163hhdtpqwf.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163zjjrvgvd.html

print "Hello\n";
来源：http://www.xuanzx.com/163uhpvntmr.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163zhgtxlvh.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163rufqetbw.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163bffbsxzf.html

"值: $a"
来源：http://www.aibaodan.cn/163pbvwgrsa.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163nxpcksez.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163qrelkrdi.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163mcnbawrt.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163trjuvqts.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163lidbckmq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163rpwmmufl.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163qsrgozpy.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163okcsfatl.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163waffihdv.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ayzithyv.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163bcvulnnq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163quldodoi.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163anklpqnv.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ikqjqegv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163wcsrguzv.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163tmoavmsc.html

println("Hello")
来源：http://www.xuanzx.com/163sfaaxbxo.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163arbypquu.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163fpdlqger.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163cdnzqtap.html

s"值: $b"
来源：http://www.aibaodan.cn/163qcjmzhnv.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163ztubdrac.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163pwinpodk.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163bzkukdnx.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163haodycbn.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163gjqzvvgc.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163niktpyto.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163jqmpxite.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163wdvkdswm.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163gcpfzkgc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163pnbwekvg.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163akgpxpfd.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163dgsgtein.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163jtxnzxep.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163dgujkway.html

================================================================================
来源：http://www.sxryk.cn/163khtcqtbr.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163htkigirw.html

================================================================================
来源：http://www.sxryk.cn/163bnaadfkr.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163cfaceseq.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163jlrqgoxn.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163vxeopgyj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163zevxlzhx.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163rvbedhza.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163gzhfcyah.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163mgxcgqxn.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163kvqeykam.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163nlxmhfxb.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163hlyxxulq.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163kojqnjrk.html

{**a, **b}
来源：http://www.sxryk.cn/163femocnpv.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163jbtgxvkw.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163ohsrwjth.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163ediprspo.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163ekjuyabb.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163ydqwroaw.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163yqqtyimg.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163nrbjbpsd.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163dtvkwrye.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163cfleyjlp.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163uuyfdgmp.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163iohfxxvk.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163iarvtoez.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163rghgvybk.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163vkettmpk.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163hruozfjl.html

defaultdict(list)
来源：http://www.xuanzx.com/163qilefysi.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163xtunhcea.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163jsrfsemr.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163vpvauzeh.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163cqpzpbma.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163yelzzgnf.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163hdhelepc.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163nruqlnez.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163onishcqz.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163fedbdglb.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163eykotpqk.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163gkbhkprc.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163cvvuihfu.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163ewyneucy.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163fsnzkgip.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163hfhcgmmj.html

list(zip(*m))
来源：http://www.xuanzx.com/163mkyssgbb.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163pwjqwvna.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163mbtturgb.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163ggiatiyq.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163wifltaps.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163ddzcpmfb.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163brpbakye.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163xueofsms.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163zgrqxljz.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163fsepncfh.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163qhnwkwov.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163guanrxpw.html

UserId = int
来源：http://www.xuanzx.com/163syabchoc.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163lnnvgqre.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163negdsdeu.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ukjasmyv.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163vsektgda.html

[U31] Py：单测
来源：http://www.sxryk.cn/163ditrdnye.html

python -m pytest -q
来源：http://www.xuanzx.com/163xypebunr.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163dfbnzbul.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163kknhdqka.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163uiwpatvk.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163wurufwie.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163tnzodkfz.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163rjbynnmb.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163mnutfgzj.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163tshcqsoa.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163hllvmukj.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163efnfebsr.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163cpqsqtuy.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163vgqeteoa.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163unnrzawv.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163rzwyogox.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163fpdqrsio.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163tijnrpdu.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163dodsrviw.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163jdcrssqh.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163jzprkwpe.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163mzvwdrtv.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163wrbgxhvu.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163ajplzufm.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163gwprzmkk.html

namespace App\Http;
来源：http://www.aibaodan.cn/163bbjxnllo.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163spnckpxm.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163fvolalod.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163zypdzueu.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qvxzpzid.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163rcnjtkdn.html

?string $name = null
来源：http://www.xuanzx.com/163xnyqzors.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163vlceyrhc.html

int|string $id
来源：http://www.aibaodan.cn/163syhjglee.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163hervqofe.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ukifniat.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163nyoievmu.html

public readonly string $name
来源：http://www.sxryk.cn/163xiqxwcsu.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163fxbggqya.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163hufqbsur.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163nzrgzzgv.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163ypdngdbi.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163gwiissuw.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163aqlzhodd.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163zgdsdadz.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163ghblqpxn.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163kkbarthc.html

$obj?->method()
来源：http://www.aibaodan.cn/163legucbfq.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163jkcsembf.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163msygegzi.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163slarfspc.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dffchser.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163usjoszeo.html

"值: {$a}"
来源：http://www.xuanzx.com/163cktvebjo.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163tgmgzzcl.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163jzwlpltd.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163ppybltaq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ojrpqbiu.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163iqqznfhh.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163gnjchwix.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163mfvxafsq.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163kkhhggnt.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163zmgulvii.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163qsywxlah.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163rnpribzp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163yicfwudk.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163vuemkeek.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163vvfhteaa.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163ohfnewvc.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163aeoszlfi.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163xpxfjwnl.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163behkzkuu.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163evgkejum.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.sxryk.cn/163yvsjsmfj.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163tyrvvarw.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163qyieqyqu.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163vjviosxs.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163ccieixph.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163cvxfrooy.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163hwsfcean.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163jdpbmdgy.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163xzyconfv.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163ywtyfjca.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163glwavixw.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163qekwnovf.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163betictel.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163aykqsmuz.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163ihonoyae.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163yhgmzdyy.html

composer require psr/container
来源：http://www.aibaodan.cn/163eetcuhvn.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163deafqsgq.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163mxcjrpzc.html


<!-- 参考信息 -->