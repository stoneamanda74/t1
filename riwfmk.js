外链999!wailian999！

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163yzeryoby.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163rhdpjaam.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163gwpxshcb.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163isoliezq.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163rxpjbbnh.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163fgfouxrg.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163xngxxykl.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163ykljtndy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163axlxatnw.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163vbryjpoy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163lsxxymtq.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163hjbtwatr.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163kntxxrdm.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163sjybjvke.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163mxdhaote.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163kgpwyfts.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163hdufeaev.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163slbrszge.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163itfnrgjk.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163lgyplimc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163emddbmwk.html

================================================================================
来源：http://www.aibaodan.cn/163qewdkpca.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ttmylrwq.html

================================================================================
来源：http://www.sxryk.cn/163ecemgsqo.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163ngtphcct.html

println("Hello")
来源：http://www.aibaodan.cn/163dpybtsdd.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163gwvbnsyb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163aolpgggq.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ourhwasp.html

"值: $b"
来源：http://www.aibaodan.cn/163mlmtnbwr.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ffnsrjey.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163wtfxjogl.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163nendedqb.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163fubbhrip.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163hbzjwbyc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163rowgewlu.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ojwfeakr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163ekeujbkp.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163jmqikijv.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163klqunruj.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163qpnxzhpr.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163kkcxpzvj.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163npprpsbb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163kiklwwpe.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163kwcrxrgu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163axcipizb.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163eqywdzhl.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163vjecthkl.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163yqisuhid.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163xvmozgdj.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163icieyawi.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ooicsslt.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163kvglwcxa.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163dvxoylfp.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163psmyhwae.html

print("Hello")
来源：http://www.xuanzx.com/163mbieqcvj.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163bqjvvcyo.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163emcfflbm.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163xwwntshv.html

"值: \(b)"
来源：http://www.aibaodan.cn/163ljwljaxn.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163sdbkhawr.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163yzoedaax.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163lxsqgvjl.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163ivhabapm.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163dazhtphw.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163gamoddqc.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163izdgbfhm.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163tovqahhh.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163xhucrbyl.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163oqfshoik.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163sdzqslmk.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ffmcfjxx.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163czzgbmmu.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163tgpvihul.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163xqabdyky.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163dxqlfgen.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163nqwoymjn.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163dusoaojh.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163rakizxul.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163atzhxozj.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163ugxbqpfa.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163likogjeh.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ncdizqpu.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163kctbbdhm.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163acfgdolv.html

print("Hello")
来源：http://www.sxryk.cn/163dnzobykm.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163icybceun.html

local a = 1
来源：http://www.xuanzx.com/163bwfgfncm.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163ghwcopsa.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163rhtrkcvi.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163mrkjexed.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163ccezgakb.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163zuzfvrfu.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163mopobyfq.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163zqpofxfc.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163nfsnmhpz.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163ozszgrqi.html

"a" .. "b"
来源：http://www.sxryk.cn/163puymjlze.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163mkojyeco.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163kqyfwbbk.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163pdmfshrh.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163iltclfrd.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163zobidwvg.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163ifuuajgo.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163pmqaqmmd.html

print "Hello\n";
来源：http://www.xuanzx.com/163winlfypr.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163swzzcnsi.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163bkufknye.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163gbymxkhn.html

"值: $a"
来源：http://www.sxryk.cn/163pfdwpcki.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163rveqghdf.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163shyzbkrq.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163xnirhbap.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163rtfivkmj.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163pvaprdfg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163ytnlvfia.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163xvcaljok.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163qfqymoeg.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163cbfjsvkx.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163dfiyldrc.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163poxtzayt.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163kggbcabo.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163owtvdvov.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163jrzbeqxb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163dnzfxoki.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163hnpncudb.html

println("Hello")
来源：http://www.sxryk.cn/163tzzrwzgj.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163vcxrkdju.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163eggkuyay.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163hqdclyjh.html

s"值: $b"
来源：http://www.sxryk.cn/163quakoadf.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163ebqymiih.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163nnrsmgbz.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163owibmriq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163dngoskqt.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163wlismtrb.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163smjkvvjm.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163dhcnilts.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163beldsgna.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163mauawkfg.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163peyeimrw.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163nqzwvqci.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163rejugxgo.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163txcwbojg.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163zaievglk.html

================================================================================
来源：http://www.sxryk.cn/163cntjzhly.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163uusnytkn.html

================================================================================
来源：http://www.aibaodan.cn/163kmiuwnrf.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163yjnffnwi.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163iwdtmljf.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163eefmoitj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163frxybknb.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163tpwbfhhg.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163saxjylxa.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163jstzuxax.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163jututvbw.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163oyoqnrue.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163giltddjp.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163tlboaiin.html

{**a, **b}
来源：http://www.sxryk.cn/163fhzvdncf.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163czfnmkxt.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163zaqwymmy.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163ampyxrot.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163ofjvonxl.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163wpqoodhf.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163xcatxalg.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163aclzqkgr.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163mdpaxszl.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163vnfljoan.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163pjoflzzd.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163mdvmapqe.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163imjlzgsz.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163obzzrest.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163frjokqmz.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163ooxgpayd.html

defaultdict(list)
来源：http://www.sxryk.cn/163exbczztf.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163docfiobi.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163wmrbltnp.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163cdvwziex.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163onvubmfo.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163aovjuvjx.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163oyecqoow.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163moyiccew.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163smvyvtbr.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163kdckudfq.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163sylzpmls.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163txuxdmop.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163xoxcdycs.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163tiqvoboo.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163uutazemm.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163dorcjotd.html

list(zip(*m))
来源：http://www.aibaodan.cn/163adtwnvtj.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163juxpdfkm.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163pratzmuw.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163bhevfwnt.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163bqiljwhe.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163zpsrhuzg.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163yvudcjeu.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163mlsqmyud.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163phxlwkzl.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163xzmcnwlo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163dmgnvghh.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163byihvwvx.html

UserId = int
来源：http://www.sxryk.cn/163wrbkscim.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163zewbwhiy.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163hetgqnhb.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163ajdngbdt.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163oxptrhaf.html

[U31] Py：单测
来源：http://www.sxryk.cn/163kuwqddyv.html

python -m pytest -q
来源：http://www.sxryk.cn/163hhseanwn.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163xuuaktfg.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163zxtulgfv.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163ltumifph.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163zhniilkz.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163oqwcpmnw.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163hxlyzqjl.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163nutkulxo.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163iiroyeqj.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163bhugancg.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163hpgtasoh.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163rtsoevmq.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163qfgjbkaa.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163mbtqfwmm.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163loujpols.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163bumchsuz.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163operkfvg.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163oazrnlpt.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163tthemiwm.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163qxkldkng.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163wbkjzmaf.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163qquzwcsj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163jlpxylvt.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163xnfvsshq.html

namespace App\Http;
来源：http://www.xuanzx.com/163yqrilcfi.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163mwfntwpd.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163jygfycsx.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163ddkflych.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163yrivyjtq.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163ipqxgffg.html

?string $name = null
来源：http://www.xuanzx.com/163totbrstd.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163khsaigvv.html

int|string $id
来源：http://www.xuanzx.com/163vdjiauce.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163dkmlbyym.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163mvrevahf.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163ckeehcua.html

public readonly string $name
来源：http://www.xuanzx.com/163tqxeqsey.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163vqdctyzk.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163tttduptf.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163mwgegzjw.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163jonvvcum.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163oxttyfuk.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163zgypvaeq.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163pfzdcxxp.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163emcizqau.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163vtaeozvy.html

$obj?->method()
来源：http://www.aibaodan.cn/163plmyfmyv.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163ikgrrgdb.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163mevbzawm.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163yxfofycd.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pwkeoipu.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163tncpxhps.html

"值: {$a}"
来源：http://www.aibaodan.cn/163dwxiastx.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163evedwlpr.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163gmhzyvhb.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163gmdouklr.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163bdzmtthx.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163olvpkbst.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163dfxjypxv.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163vidugcji.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163swyqmgnx.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163bpfxhcvz.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163vzmskzkt.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163semyzfwb.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163ogbduqxa.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163cytaqobr.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163htxofzkj.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163pmqcenfd.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163yaeufkzh.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163vcdijyzl.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163tuzekfzw.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163ittyadch.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163niaqxror.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163rwdtgaxb.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163jcfjoisq.html

[U69] PHP：PDO 预处理
来源：http://www.xuanzx.com/163uszqshyi.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163kfvomzlv.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163dshhipfy.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163pukecabj.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163plbccsjq.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163xjrbfedb.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163npknszfj.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163duieslkd.html

[U73] PHP：读取 ini 配置
来源：http://www.aibaodan.cn/163ohaytxqm.html

parse_ini_file("config.ini", true)
来源：http://www.xuanzx.com/163jidcxrob.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163cooueshi.html

getenv("APP_ENV") ?: "production"
来源：http://www.xuanzx.com/163hdwkdgmk.html

[U75] PHP：依赖注入
来源：http://www.aibaodan.cn/163ytuwaoso.html

composer require psr/container
来源：http://www.sxryk.cn/163gzveahte.html

[U76] PHP：简单路由
来源：http://www.aibaodan.cn/163sdzyktzu.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.xuanzx.com/163tvqecqov.html


<!-- 参考信息 -->