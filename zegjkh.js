外链999!wailian999！

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163dkvcbopk.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163zkkmzbfe.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163okihtxpi.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163jnmdmhqo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ywqrfhrg.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163irmdmwvd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163yziknntj.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ogwewttb.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163azayarxk.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163qvpdsbbb.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163bjphedya.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163opnabdbi.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163vgikfjfd.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163gjqrvuep.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ieigujxh.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163ufmeofpq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163ftlnvfil.html

================================================================================
来源：http://www.sxryk.cn/163pnuaelvw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163uyqwfeup.html

================================================================================
来源：http://www.xuanzx.com/163wrbbbycl.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163kpfblnvj.html

println("Hello")
来源：http://www.xuanzx.com/163vqvbdlxg.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163tlavalnv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163xkrccegb.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163mtmiiijh.html

"值: $b"
来源：http://www.aibaodan.cn/163oyriwvti.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163cegsbmkl.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163xzbcgygj.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163nhaydxdx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163kanixmbr.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163qplziuzl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163brtpoltu.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163zmiuxozu.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163tuenkpiv.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163tinxjvrk.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163uepirtag.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163tvhfhtpx.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163yhboxmta.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163rnhzubky.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163glcplwaa.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163bjychubr.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ufwgbnal.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163pcexboye.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163usrctcfl.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163nethnaiy.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163dsfxqewf.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163klrdiuym.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163nrdafiwb.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163hrwcpiuq.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163inbtrpyp.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163msgicnsk.html

print("Hello")
来源：http://www.aibaodan.cn/163jsbqciyy.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163dixowdrf.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163zqpdwweb.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163spbyuuxr.html

"值: \(b)"
来源：http://www.sxryk.cn/163yptsrkmz.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163vhzjmnco.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163bbfgjqsb.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163strsmcdi.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163nocvfgev.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163vfygevky.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163lnjyabid.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163lzcxeydy.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163fepepuzn.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163xkocmgzl.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163gghagydi.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163yqfnsjjd.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163dzcckpac.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163ufqdksip.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163sdrxqdyv.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163vdqrosir.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163hqhycsqg.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163izilcifa.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163xbtlwlih.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163muocoyfn.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163alxsrsvj.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163kmgqfznj.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163sdhtsslv.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163nvoxmmuj.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163detimmxv.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163cheoohgs.html

print("Hello")
来源：http://www.xuanzx.com/163mqzvevlo.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163uqhgqmdt.html

local a = 1
来源：http://www.xuanzx.com/163zazfscli.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163wonmyruy.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163nxwwkurk.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163eofnixzn.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163wekkhiro.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163hefxxizb.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163aiydosmz.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163erdlipny.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163mrbgoqae.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163idbhddbb.html

"a" .. "b"
来源：http://www.xuanzx.com/163vnmpmsyt.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163wgnkcuyo.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163iejrhnfr.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163epzrowxe.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163rhvvzslu.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163shlynolf.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163cynvhjym.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163zijzkljd.html

print "Hello\n";
来源：http://www.sxryk.cn/163tdimzwwb.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163sanwmzuh.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163wdsvyvnz.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ezozaiic.html

"值: $a"
来源：http://www.aibaodan.cn/163elazjeem.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163odndfdgz.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163kovrftmk.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163ammmygwl.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ivxcyvjz.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163tovbysbl.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163mwcikkpy.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163qxfaaucc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163vznrtdpy.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163cnpdjiar.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ojenuodq.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163enebohrf.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163nivdeqbj.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163yqmovoow.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163upimwshn.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ipbdtyfu.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163kxbyvrve.html

println("Hello")
来源：http://www.aibaodan.cn/163qitbsyof.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163xxlxllgs.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163qkyzgwdo.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163wqllsuxj.html

s"值: $b"
来源：http://www.aibaodan.cn/163aryhkjuq.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163evxwtdez.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163mqflqyxs.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163diqcpytz.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163ozlvtufn.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163ncwljlmu.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163geplogyc.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163bjhjqton.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163vxaaterf.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163wmeyyxqh.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163mrdrpcrz.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163bxfldjzc.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163hicavkqd.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163nvxklfbi.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163eomgespi.html

================================================================================
来源：http://www.xuanzx.com/163fljmkcto.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163zagnqhlp.html

================================================================================
来源：http://www.sxryk.cn/163buvdoxbv.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163udzoaiyl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163eralpjix.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163yupjpodq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163gunsmaoe.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163ekovjxyx.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163kjyfzzpc.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163cuhieaej.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163oiemxfhi.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163kfbshqvi.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163pcyipyyt.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163allkmlup.html

{**a, **b}
来源：http://www.sxryk.cn/163qlbhrciv.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163ortpyyvg.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163bdowqmsr.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163dbaqgrsp.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163rizyjaqo.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163hlgovfjg.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163evegcisq.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163egeixdbm.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163makvoxuz.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163qlafqxmd.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163bqqomotm.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163uqokmshj.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163fyzotzfh.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163bbtucrxi.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163vlsnbsbv.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163wnljxiim.html

defaultdict(list)
来源：http://www.xuanzx.com/163jdfyravd.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163lvaghnst.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163duyxeopx.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163nhnadyey.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163bzrguibj.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163wuykkfer.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163rwwemrqo.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163zbibqypv.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163mxaaxbem.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163rdurojvt.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163tybzsinw.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163qbrjlpav.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163gkzsscah.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163stfxikcj.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163mqbsonjz.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163lkfzckjq.html

list(zip(*m))
来源：http://www.sxryk.cn/163spzkcuur.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163tmhlobsw.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163tnvqawko.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163zkhokfpq.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163gkyyowrt.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ebefgtjo.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163kabyjoru.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163appcxoqi.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163pmgzruaj.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163ssobznbn.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163lqvxyhbk.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163whdoaflf.html

UserId = int
来源：http://www.xuanzx.com/163jeykvotj.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163ddsvpeei.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163nerxbcnu.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163iifwytvg.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163blbbxtus.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163ehesaenz.html

python -m pytest -q
来源：http://www.aibaodan.cn/163ionrpmky.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163haorjmfp.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163uffulfxc.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163bxdjhrjh.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163bzewcuga.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163hufuiktm.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163nglwgxxp.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163nzzyjhiv.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163akqoxopi.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163kypebssp.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163ovnrqawf.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163pxtaplyp.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163acfrlbus.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163tqahumhs.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163guqccvdo.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163yieuvbek.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163zybgofnc.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163afwuanvn.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163nxuvdnqv.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163sdyjepvm.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163gvrvwzms.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163jiprpfsf.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163sgvdwxkd.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163yvbadmbc.html

namespace App\Http;
来源：http://www.xuanzx.com/163rkluimkx.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163crvimrmd.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163fsvjbaxu.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163uoxriuas.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qekjqzbo.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163uwsjpxms.html

?string $name = null
来源：http://www.xuanzx.com/163jjkjahng.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163cjigmwak.html

int|string $id
来源：http://www.xuanzx.com/163olfamncv.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163wvunawkq.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ljlncnzo.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163uctjrhgo.html

public readonly string $name
来源：http://www.xuanzx.com/163akfssccs.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163ajcjcfrz.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163yxuoayee.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163kurjiirk.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163kosdczzz.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163eiwdhnav.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163slrdvpzp.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163ovspdddx.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163pvfbzapf.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163twwxzgov.html

$obj?->method()
来源：http://www.aibaodan.cn/163lhztleuo.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163pddlqgdq.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163xsijhwal.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163mriytyph.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ilatpgzc.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163mcankhcb.html

"值: {$a}"
来源：http://www.xuanzx.com/163onhwbrqt.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163pjxpxomc.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163dphogqtf.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163zcnecnhq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163yqvylzgv.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163dxmtipds.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163wiinbrdl.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163vgvzisbv.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163wcjhndok.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163miydddwy.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163frtkgluw.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163dfcirerf.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163xoxvznvm.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163naewpxjz.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163ghjawtkj.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163wrilxeaw.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163qijdmnoh.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163gxwystzy.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163ezqufvkp.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163naqtnooc.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163yqamwgsh.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163zzqjdngb.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163wzaoqnbz.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163dnqhxbcy.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163wvecnhee.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163hvjqyozv.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163vgktdcfj.html

[U71] PHP：抛出异常
来源：http://www.aibaodan.cn/163kicwkdou.html

throw new RuntimeException("失败", 500);
来源：http://www.xuanzx.com/163ftfbkuve.html

[U72] PHP：写错误日志
来源：http://www.xuanzx.com/163eufhnmex.html

error_log("失败: " . $e->getMessage());
来源：http://www.aibaodan.cn/163obhtudwd.html

[U73] PHP：读取 ini 配置
来源：http://www.xuanzx.com/163hpabkhpm.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163mxowqcjr.html

[U74] PHP：读取环境变量
来源：http://www.xuanzx.com/163ppkieuph.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163rrvvjmpv.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163dttwgwhl.html

composer require psr/container
来源：http://www.aibaodan.cn/163djimlnia.html

[U76] PHP：简单路由
来源：http://www.sxryk.cn/163zjvyrkix.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.sxryk.cn/163iifqwzzf.html

[U77] PHP：模板渲染
来源：http://www.aibaodan.cn/163obxuiziz.html

composer require twig/twig
来源：http://www.sxryk.cn/163yyrfepkj.html

[U78] PHP：单元测试
来源：http://www.sxryk.cn/163frfzkgvu.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163zptysinc.html


<!-- 参考信息 -->