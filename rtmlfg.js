外链999!wailian999！

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163hbnqegbl.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163dlizibca.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163kzxfuyrl.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163eedmjpag.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163dylrnyto.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163zmjtekvm.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163nxalymbp.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163zylbomua.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163bwsxbtbm.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163wzyknhvq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163pdqcllvp.html

[S56] C++：optional
来源：http://www.xuanzx.com/163eyxzydqs.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163idkfvyuk.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163wkthqfsh.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163mpqhjfhc.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163uokiqrbm.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163lslkgpdw.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ndcdbyqh.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163swgribuk.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163wwkboqss.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163dluphkpu.html

================================================================================
来源：http://www.xuanzx.com/163lkkfyhzb.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163qfmkskba.html

================================================================================
来源：http://www.xuanzx.com/163rknocjpw.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163noykqzut.html

println("Hello")
来源：http://www.xuanzx.com/163rgonsobv.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163emyfaalb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163khswtmkm.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163gtiructn.html

"值: $b"
来源：http://www.aibaodan.cn/163qxxushzi.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163wjetwwra.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163bitkmtbb.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ijodisej.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163cxqzwldw.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163uxvksxoj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163tautzkse.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163cpfhicbb.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163xyzjjbrq.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163cfrdoxvt.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163hgxcrbtb.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163zkypjzlq.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163svpweyut.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ldibbcck.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163qdoyshdv.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163otfpeugx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163enkjvvdc.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163xiidtxfu.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163ulbhakpa.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163owzbllmw.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163mpzzslww.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163bwtmsqmj.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163klsowudu.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163qiinydne.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ckhigvoe.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163wyrblhjj.html

print("Hello")
来源：http://www.xuanzx.com/163ejxjjktb.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163tzgfrchc.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163lmukldgn.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163pjtqptvp.html

"值: \(b)"
来源：http://www.xuanzx.com/163ivukxxyi.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163pqjfrqpf.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163xtmkdiic.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ragdddgr.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163uqdktjly.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163dtfhstqw.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163elsgktvr.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163kqaudljh.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163efhbwuxu.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163pclnqach.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ajwvwxuj.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ojcdjvhz.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163rpcewyyb.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163mdthwezm.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163tuqfnhzn.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163dktprbmd.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163lmruyzmq.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163oebwzavq.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163hrbcovmj.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163soiwwqpk.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163dsidehhu.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163bjmmnfuv.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163xrdrlmvb.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163fwbmhkej.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163dhksfzpp.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163aehzuixh.html

print("Hello")
来源：http://www.sxryk.cn/163ujdgrkkt.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163nqcesyxn.html

local a = 1
来源：http://www.xuanzx.com/163zimzxhgl.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163urcqwpod.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163cqoznhtw.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163bgpztwvf.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163ldkzkvzj.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163zvsvvmep.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163msvfgnyv.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163mnjsqeyp.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163nldibegl.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163hcbaoems.html

"a" .. "b"
来源：http://www.aibaodan.cn/163sefzlrum.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163awktqiug.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163txoclesb.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163orxelfsy.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163opgoqmfk.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163soyivcqm.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163xkmdgasc.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163jfsoeaws.html

print "Hello\n";
来源：http://www.xuanzx.com/163nihkuvap.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163pmqfptqm.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163clilbiap.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163xstgwgiq.html

"值: $a"
来源：http://www.sxryk.cn/163lbhwlhmf.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163aojttotw.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163dduwflug.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163annyzbid.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163echejucw.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163srbdwwnq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163rlwzydzg.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163gkufsudb.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163chcyanjo.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163pkbzazzy.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163hctqwcqz.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163tghwyohp.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163fzqhxhiu.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163hneufxzz.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163pkryhvqe.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163wdtoxekx.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163xpnpgqib.html

println("Hello")
来源：http://www.xuanzx.com/163xxqdhrqv.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163gypmmbce.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163usfarxnc.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163yxdnxzit.html

s"值: $b"
来源：http://www.sxryk.cn/163tvpsbcjl.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163keykzhcr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163xvxndeik.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163sbkiyrdn.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163nexeijyx.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163shfwfnqo.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163fsujwwqd.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163iqplduig.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163qstuqofn.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163fibxuamo.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163gqtqsvqm.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163kxyaccuk.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163vjllfjzd.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163wepfkdse.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163sseeobvj.html

================================================================================
来源：http://www.aibaodan.cn/163vzkwmtjf.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163zinfchwo.html

================================================================================
来源：http://www.xuanzx.com/163gekukxeb.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163ipeoqfrf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163tecxpyle.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163xqzvascm.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163rnuuzfjz.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163idxummrc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163nwqwjpda.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163vlnlokmb.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163fssdysdd.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163mwmortxi.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163uvoepokp.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163xgsfejhb.html

{**a, **b}
来源：http://www.xuanzx.com/163sqpjvbhj.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163eaoqvmwu.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163bfpancht.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163zvucnkrq.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163ujrfkpon.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163teutyiyb.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163xyakwyhm.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163hnrhwevz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163zirocxkj.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163gdqirjou.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163tlzshpyo.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163kmswiqoh.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163gqcibbjg.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163kivwudmd.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163klrchgyq.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163dnrrlhne.html

defaultdict(list)
来源：http://www.aibaodan.cn/163yduwappg.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163ktvimawp.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163pwmggdtc.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163aclqmlqf.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163xzhzthel.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163sptxlrng.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163vszuiukz.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163gulutyrl.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163nmysiymg.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163odxzkqst.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163qmxhiujq.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163bjfoejhm.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163dhzcpezl.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163ehusgrjq.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163ubctfcgj.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163swhcldlu.html

list(zip(*m))
来源：http://www.aibaodan.cn/163hjsvvlol.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163lenekxvf.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ukuuztkd.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163caoqipct.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163ndzgyhlj.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163xwpjarej.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163objmvhts.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163nkppiqvt.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163lumjdciz.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163pywppfst.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163vdziaigl.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163gndharqt.html

UserId = int
来源：http://www.aibaodan.cn/163xfesvlyg.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163eawcsxwd.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163gsusvvjq.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163fixdpqzy.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163qtknjhoj.html

[U31] Py：单测
来源：http://www.sxryk.cn/163liyusrnv.html

python -m pytest -q
来源：http://www.xuanzx.com/163pxbdyabr.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163ytzvtlcz.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163kghjaflg.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163zklfhrah.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163ufbrijdv.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163dgkiilag.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163xfyewcjf.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163vnkfcqyp.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163wtuxmwck.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163mufuwcjj.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163tkmbrvue.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163ancxozll.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163filgknqg.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163xikfmjrx.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163qgpovlbm.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163dyifhwij.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163fmdzfxbm.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163muxnwtkj.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ajkewary.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163cnvpvqyr.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163riamkozv.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163ylfdkjay.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163qlqtjspk.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163edmlason.html

namespace App\Http;
来源：http://www.sxryk.cn/163jdxwxifl.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163esxtobsy.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163btfzimcq.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163tlnciiev.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163oaxbccty.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163kbrjbvet.html

?string $name = null
来源：http://www.sxryk.cn/163xpmbslkp.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163rafssfze.html

int|string $id
来源：http://www.sxryk.cn/163slgsqpur.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163wjrakpzk.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163bixtmggk.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163vfujbkjm.html

public readonly string $name
来源：http://www.sxryk.cn/163ftrystti.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163ghhuineo.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163sffvzehq.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163fbgwicmc.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163wdqkrvse.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163fpkyvjfu.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163xcjokhsc.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163zfystigg.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163nzarrclv.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163wcdgdfyr.html

$obj?->method()
来源：http://www.sxryk.cn/163gqsrtxub.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163ueshdlcb.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163azxkdyrw.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163kjwoemwz.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163aywoultm.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163msprrkkv.html

"值: {$a}"
来源：http://www.aibaodan.cn/163vpwubrim.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163ugckwsiu.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163snyiblql.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163ueoirdir.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163vaucejfg.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163avstxakw.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163ywzeueja.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163skslwlrx.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ddgniyfg.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163luwdbwrl.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163bplruscm.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163kkybkego.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163mmvohzpn.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163xjoifbbb.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163gdhbanht.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163qzloikaa.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163tcpmkvkv.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163jlnqgjld.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163rcepogzp.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163ovqkxviu.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163kotpzeyi.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163tmfapyph.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.xuanzx.com/163ihogvszj.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163rsjomven.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163hjsfmwyx.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163uwhlfsos.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.xuanzx.com/163nqorhyio.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163aczbbldj.html

throw new RuntimeException("失败", 500);
来源：http://www.aibaodan.cn/163jvypmpxb.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163bhufcktt.html

error_log("失败: " . $e->getMessage());
来源：http://www.sxryk.cn/163xycgiire.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163grxqykvu.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163wfrehbhh.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163pfnbmsia.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163bsjtgaff.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163tegpdvxr.html

composer require psr/container
来源：http://www.aibaodan.cn/163sdyfddmm.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163nosupmbd.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163btzchafm.html


<!-- 参考信息 -->