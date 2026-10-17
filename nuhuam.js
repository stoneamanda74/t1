外链999!wailian999！

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163oqtlimih.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163mmmfkdca.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163xeypicdh.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163kgoywfty.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163stlepyok.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163rrxwdwlr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163cxxtadkd.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163temogaej.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163rqculmpa.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163skcbujdy.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163ejylqcjj.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163byyiblyx.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163divgsxir.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163meapvhmi.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163iymztiud.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163emjyzrhe.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163lcpcclbr.html

================================================================================
来源：http://www.xuanzx.com/163ypavbwhn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163kcwjljpv.html

================================================================================
来源：http://www.sxryk.cn/163tbcfydcy.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163sulpzoxs.html

println("Hello")
来源：http://www.xuanzx.com/163eefmfbaa.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163axpowtnk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ayhkoxsm.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163bauafpvw.html

"值: $b"
来源：http://www.sxryk.cn/163ituwccmr.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163iahrgkzd.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163kxoefvcm.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163noqymtab.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163snkrnqpm.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163juecqpuu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ntgqfmou.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163gffsewgs.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163cqhyxsdx.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163gcgudtns.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163qthbgnyw.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163nnrbvxnw.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163jkyimrtn.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163tzjmeuzk.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163cjbeqglp.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163svrxsegg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163kbwgstkz.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163tyzpxtre.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163zelvctha.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163oyrhtpwn.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163tmjkbsfn.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163eyyapnyk.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163ivszjmvp.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163mmhkzkvo.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163aindbxsp.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163nzugyehk.html

print("Hello")
来源：http://www.aibaodan.cn/163lckfbpyy.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163jsorxmds.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ietdygdf.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163pzmdwngt.html

"值: \(b)"
来源：http://www.aibaodan.cn/163gxjcllks.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163ghecrvcr.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163nnvqyyjc.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163ekfzqbou.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163ajruazgk.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163pszbsdus.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163vtjoihvr.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163qnrdiecy.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163gyncwtvl.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163wjjvfrsl.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163jqlophoo.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163svdpopdt.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163mvnoqvvv.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163wobyawff.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163kllydirs.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163qkmilflg.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163gyhiczwv.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163evmjjqma.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163ppkbwgpr.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163tuukkwrq.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163rqflzfjf.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163wbceyoqx.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163nwoclims.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163pqdrwrpa.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163cgehwxco.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163opdmmstz.html

print("Hello")
来源：http://www.sxryk.cn/163cdfoidck.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163jiiuasey.html

local a = 1
来源：http://www.xuanzx.com/163jwxmrcaj.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163xvocvwio.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163enimesza.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163uugiuccn.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163pngsmeqt.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163ymkdowjd.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163piycphhm.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163jbsldmjg.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163jyxtckqq.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163frtixube.html

"a" .. "b"
来源：http://www.aibaodan.cn/163mkncsodf.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163impeewjt.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163pffpzors.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163nabycxid.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163idnwzqap.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163uxlxdsoz.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163awvyghsg.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163iqdddfww.html

print "Hello\n";
来源：http://www.aibaodan.cn/163cotlrrvr.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163mwhhsxyy.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163nacecvfo.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163exhlarzb.html

"值: $a"
来源：http://www.sxryk.cn/163hlkjvduh.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163mnsamxms.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163avlxoyow.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163lkymzjoh.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163xbdxboaf.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163nzzuwnpz.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163zgprhuni.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163isyzdfem.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163dinhtcml.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163tnoauwvs.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163fpzglblq.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163mdwclhgv.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163rywimftu.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163ddrwmmwh.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163rdpuhnsl.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ezgupomn.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163ivmvhqwb.html

println("Hello")
来源：http://www.xuanzx.com/163ztutjxna.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163udbqujhs.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163uwzzpwty.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163ukmtddbn.html

s"值: $b"
来源：http://www.xuanzx.com/163kvfrmgxq.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163gpsxemsk.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163wuvhcpqa.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163nyllwtrh.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163mqsnscyw.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163lflqfsjs.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163lfpbqjbn.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163wwulqmrw.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163ysrukyid.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163rlefrrpc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163oeeragin.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163xvsgguaz.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163gmarpcsp.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163jpxdvwbt.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163gbikjrvw.html

================================================================================
来源：http://www.xuanzx.com/163jupbstve.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163bzuolskg.html

================================================================================
来源：http://www.xuanzx.com/163dwnkdxpq.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163zxsnewfe.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163mwujxsrm.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163gmjznrey.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163iwhbazkw.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163rtdwfmvo.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163vxmcysvw.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163mwhsubrl.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163jfgposdz.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163adwondlk.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163bucvyqcl.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163moummykm.html

{**a, **b}
来源：http://www.sxryk.cn/163ozzzluue.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163ovfihqhj.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163lwvzcdqv.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163sgclcsqc.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163melfrpeg.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163uzbgxafb.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163bgnjzhjh.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163lizdmqls.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163abrnecfj.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163wygaqpdv.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163cofpavsx.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163cyefzwtp.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163ccxpoawp.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163cwsqimbg.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163aspvmdxs.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163deetpdqm.html

defaultdict(list)
来源：http://www.xuanzx.com/163hkzgbvrk.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163oqpmeeoe.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163ycrzyiym.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163hjjdkckk.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163sbjmvkpx.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163dvzawlku.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163rcqdxoax.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163psmgrvkh.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163jtyhuihb.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163rvivgiub.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163mshdguza.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163sjbcjrxr.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163xlyfngvw.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163pawcjxik.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163mkskoive.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163ggpkdwnb.html

list(zip(*m))
来源：http://www.xuanzx.com/163ujoxshvf.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163gcylvnek.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163fbmxqfpt.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163sjuxovit.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163rlhmmuaj.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163ptmtpinx.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163ropgrsjn.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163eicmhkvp.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163oiotkgds.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163qjzwmuad.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163puxvgbfc.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163hiteivre.html

UserId = int
来源：http://www.xuanzx.com/163pfrvudyn.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163hbryjoje.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163qpocauav.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163meeuoyzb.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163jhrjlcqe.html

[U31] Py：单测
来源：http://www.xuanzx.com/163jdstptfz.html

python -m pytest -q
来源：http://www.aibaodan.cn/163isrelszz.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163dbmlntzs.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163ptbhdpnv.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163yjpnkium.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163fnbkckgv.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163aksoupqy.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163ieuztyua.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163yznmpsov.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163fwsbgjue.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163vlemiwar.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163fpmjzhgh.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163eaxqxoon.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163bclockye.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163jsciwnpk.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163xhffghku.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163guyemshh.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163ajzwfrzu.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163badfnjyc.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163kcelqlyk.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163rrfcsaqi.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163bfvluiqd.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163wqcviwby.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163rzrmajck.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163ieguextf.html

namespace App\Http;
来源：http://www.sxryk.cn/163gywaywki.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163pmefkafg.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163qcxraurk.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163uhzavswp.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vovvtnjr.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163chufcheg.html

?string $name = null
来源：http://www.sxryk.cn/163abnmwijp.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163awfdzygl.html

int|string $id
来源：http://www.aibaodan.cn/163exqqvusa.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163yvyyfwez.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163pvmxbfpy.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163hclummws.html

public readonly string $name
来源：http://www.xuanzx.com/163tsicqkhq.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163gsjepwhx.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163blarzyqh.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163tkmdsteh.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163jugtbmsk.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163fxevoopz.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163wrfreikc.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163uwptspxl.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163kkyigmdt.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163jwhuootd.html

$obj?->method()
来源：http://www.xuanzx.com/163uyzokzvi.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163odsqfzch.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163djvfxwko.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163jsxbjtty.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mecxwimn.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163icggsxvp.html

"值: {$a}"
来源：http://www.xuanzx.com/163bouzhbfk.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163bowjzolt.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163qtmadxdv.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163hyukozeq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163cukoxjal.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163xnwhohxu.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163mmtohvvp.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163gxdmpkdy.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163fkpvyoif.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163ebuekjmy.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163yvkmgdou.html

[U63] PHP：文件读写
来源：http://www.xuanzx.com/163kbslwzpc.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163evcqmehy.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163dqdtysrx.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163dcjjtkrj.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163lqkyinsg.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163ceepluca.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163wvmlhheu.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.sxryk.cn/163pzqwjwgp.html

[U67] PHP：处理文件上传
来源：http://www.xuanzx.com/163yomgsbvw.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163efokqoul.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163ojmtcuyu.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163tcuedofe.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163zvmfmpgo.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163qhjfnyiw.html

[U70] PHP：PDO 事务
来源：http://www.xuanzx.com/163pbikrfgk.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163swkcbphq.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163pgahgaws.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163qlysrgej.html

[U72] PHP：写错误日志
来源：http://www.aibaodan.cn/163eggcncwr.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163rhbofrqi.html

[U73] PHP：读取 ini 配置
来源：http://www.sxryk.cn/163criwlown.html

parse_ini_file("config.ini", true)
来源：http://www.sxryk.cn/163icnltqlv.html

[U74] PHP：读取环境变量
来源：http://www.aibaodan.cn/163wgifbyoy.html

getenv("APP_ENV") ?: "production"
来源：http://www.sxryk.cn/163ftdbwafg.html

[U75] PHP：依赖注入
来源：http://www.sxryk.cn/163nzcsixay.html

composer require psr/container
来源：http://www.sxryk.cn/163xplzbsyk.html

[U76] PHP：简单路由
来源：http://www.xuanzx.com/163owqnpnfv.html

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
来源：http://www.aibaodan.cn/163accczzta.html

[U77] PHP：模板渲染
来源：http://www.xuanzx.com/163khjpkael.html

composer require twig/twig
来源：http://www.xuanzx.com/163bchelazk.html

[U78] PHP：单元测试
来源：http://www.xuanzx.com/163udsidpli.html

composer require --dev phpunit/phpunit
来源：http://www.aibaodan.cn/163elajhbfe.html


<!-- 参考信息 -->