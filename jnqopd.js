外链999!wailian999！

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163kkxdfwld.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ymebuqwq.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163mezpombu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163hhlarqat.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ctcgoozw.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163flybirni.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163julyiuub.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163fgzlfetu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163npzszvgj.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163sowjtvoz.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163opmkzuyo.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163mpxxitjz.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163xkctwarh.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163jbsifadi.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163aexzhsxa.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163qflruknt.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163fbihugep.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163eohhpdcl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163vmdgnpgm.html

[S56] C++：optional
来源：http://www.xuanzx.com/163edakwroh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163equvdaal.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163wwikpelx.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163eyncgysq.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163wlbxrmid.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163cmyhckef.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163anvgljgc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163zhjescku.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163stkmoexp.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163sdosrqgz.html

================================================================================
来源：http://www.xuanzx.com/163qvpemgwo.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163sruoyath.html

================================================================================
来源：http://www.aibaodan.cn/163gqixtqiu.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163tupewrcm.html

println("Hello")
来源：http://www.aibaodan.cn/163puntemit.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163fgbcwtqb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163lswzpkyf.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163fmmiknvx.html

"值: $b"
来源：http://www.sxryk.cn/163sdcfxhlx.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163krfflisi.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163nbrrllnt.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163wieecndj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163ctshslit.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163bcsnwpqb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163jffrgjbb.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163ricpvide.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163yvxtevuk.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163xyfdyrjj.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163bbpwxcfe.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163bnpwvywx.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163whjvzrdi.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163hdzazowi.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163lzaadcoh.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ppadosxs.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163huizpytl.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163yaerxsow.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163konrvjod.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163fuqdafjl.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163xacvffkf.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163hbwhnvjz.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163cdgqkvgc.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163cuntiplr.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163aqaejdcd.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163qtikxtry.html

print("Hello")
来源：http://www.aibaodan.cn/163qvhuhuik.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163aairwcvd.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ubsescci.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163qthgxvbw.html

"值: \(b)"
来源：http://www.xuanzx.com/163jxktaxey.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163sedhtsdp.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163fgyttewe.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163oxbugqsz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163iatwwlgf.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163lvojnwxx.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163sjpyfrhy.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163lqwbejkz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ohrbdkpn.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163vqomvcqv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163jpcqvqlm.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163uccbswlg.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163dhwhpsmx.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163yimaiaqa.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163idxybtdc.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163qfvonspl.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163bfvlyprz.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163rglcmjxl.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163omksvedb.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163qukagems.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163mkpzkhwb.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163gysixesz.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163siknccqz.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163irxwwvgv.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163aqhbqsfn.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163iedlrnxm.html

print("Hello")
来源：http://www.aibaodan.cn/163ohswhnvo.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163nwvectaz.html

local a = 1
来源：http://www.sxryk.cn/163ptiyxbct.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163rsxnnvyk.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ghyamsci.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163xrfqwzdx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163oircsxoa.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163opjdzady.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163ytajdqiv.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163vriaynxi.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163iywnbbqy.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163uveahugt.html

"a" .. "b"
来源：http://www.sxryk.cn/163doxycqvo.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163keldghlg.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163inodtdwh.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163devxdrut.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163glgruodb.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163uxuacprf.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163tzyhiyeg.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163quckeigb.html

print "Hello\n";
来源：http://www.sxryk.cn/163zcizodvf.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163lsgclqhg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163hgmwtbtk.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163imjyimyr.html

"值: $a"
来源：http://www.sxryk.cn/163tggjxepa.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163trykrmha.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163bwafcfvl.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163wmcsrpym.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163caamozgk.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163dvekdqfr.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163owsrxrdr.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163pizynjwj.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163pevmdxwn.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163hrxascgh.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163jxjpgtlj.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163xddeitez.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163uivqdszf.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163slegdyjm.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163sjkxjpox.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163bpphriei.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163dhqlzrmi.html

println("Hello")
来源：http://www.sxryk.cn/163sqgaqfre.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163xemlpnxi.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163duzhjxch.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163hlyfnmzx.html

s"值: $b"
来源：http://www.sxryk.cn/163wvzgmdcd.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163vmmghpco.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163jeqvdrzq.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163fnmjcqjd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163qhjqjbnu.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163omttjmuq.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163dgapoxcv.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163jryelckm.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163adxtkroe.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163sqxavfbe.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163koklfzds.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163haqmwfkb.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163kmacjset.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ozrymzcz.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163vjtlzolv.html

================================================================================
来源：http://www.sxryk.cn/163saqwpypm.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163hjdwuwgj.html

================================================================================
来源：http://www.sxryk.cn/163hhwmfarz.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163ktzgpfmj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163ixufdvow.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163zurddifd.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163pxtxrqib.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163trsapbcv.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163bggbgqlr.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163skkbthry.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163lqaeeqvg.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163fjvwaibx.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163zefxxbbq.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163zlmlzchh.html

{**a, **b}
来源：http://www.sxryk.cn/163srfqoffi.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163ebfebdih.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ypedidsc.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163ohegsxva.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163kehlrwlw.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163wnivwegf.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163jppcyqpl.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163btkxqflw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163jyzggklj.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163doablddo.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163fkspihdf.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163ecuxgygr.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163yhwzouby.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163tpppylsc.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163pedhjnsj.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163gjoadtci.html

defaultdict(list)
来源：http://www.xuanzx.com/163mbuebmaj.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163hcdhqxyv.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163yvcvesck.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163bjafopxv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163yeqdztam.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163bspdtxqu.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163vzhyuxbt.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163gilcoxcf.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163azxrsove.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163drtcexps.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163jztcicus.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163phrkxybq.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163mhkaevls.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163jxbuysvk.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163vpwcesnj.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163kbhkqmdc.html

list(zip(*m))
来源：http://www.sxryk.cn/163hlsvbkeq.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163qxbaqmnc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163mevwdemr.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163yyzzakax.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163thwfoqdk.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163hazsmivl.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163opwpkmpr.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163sbygrqaj.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163irhixvyz.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163iiillrrk.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163zxjlaqde.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163gbjkyndq.html

UserId = int
来源：http://www.xuanzx.com/163pnehsevc.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163zwxjkach.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163sxxigjod.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163zkzfowda.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163miqcbipm.html

[U31] Py：单测
来源：http://www.sxryk.cn/163vunfjlci.html

python -m pytest -q
来源：http://www.xuanzx.com/163coatpqzc.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163qomvsjoy.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163acbptmnz.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163cukrniwx.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163pnqlkoub.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163coyyxlkc.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163targbbkn.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163dydgjmng.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163ukrxiujl.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163envbjiix.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163zbqtwppc.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163lxywuajd.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163bibkypmc.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163yihlbmfv.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163ybhvmvlo.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163fsfdqnui.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163vfcqqigt.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163ftmjhokl.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163uecbubms.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163csiqkosj.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163klgziwwm.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163isznmxqk.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163aqqatksy.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163yqrsoxfx.html

namespace App\Http;
来源：http://www.sxryk.cn/163aqqspxev.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163ifligopn.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163uiijdkof.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163uaeqhrea.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163lvgyjgvq.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163wievnbbo.html

?string $name = null
来源：http://www.aibaodan.cn/163qruwvpkv.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163peeatpbc.html

int|string $id
来源：http://www.aibaodan.cn/163ylbzvxls.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163pihemoji.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163eeiyzyun.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163yhjewprk.html

public readonly string $name
来源：http://www.sxryk.cn/163wxptcptj.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163wsaaqbwc.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163xtqblnnm.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163isdizvte.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163wtgfcgwe.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163rztprade.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163jbseeptn.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163negswgfx.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163mftnevxy.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163cqlmbfuq.html

$obj?->method()
来源：http://www.xuanzx.com/163rkraxsxo.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163lcllpxal.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163sdulpfhs.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163bfwrpnqk.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vwnjaayl.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163weseedzz.html

"值: {$a}"
来源：http://www.sxryk.cn/163xgibaymf.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163kxyswpvw.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163plzveqyf.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163rljlgxlk.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163iynvtqmz.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163vgsdpvye.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163nkzezrny.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163tggudbqk.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163fddfqcvb.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163ujgaijsb.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.xuanzx.com/163kxpwuuhj.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163wuuqywvn.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163kppbvtfk.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163oqvfpods.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163ckcwptpb.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163eyopmjck.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163warcztmp.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163pdtghzfp.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163rseduhja.html

[U67] PHP：处理文件上传
来源：http://www.sxryk.cn/163gcjskily.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.xuanzx.com/163kiepysyi.html

[U68] PHP：PDO 连接
来源：http://www.aibaodan.cn/163ihuatjtz.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.sxryk.cn/163mmiqoztc.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163vjytktax.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163dwrszcqd.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163hfrsifvf.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163srmorbzx.html

[U71] PHP：抛出异常
来源：http://www.sxryk.cn/163tkfiusnb.html

throw new RuntimeException("失败", 500);
来源：http://www.sxryk.cn/163zawfzkle.html

[U72] PHP：写错误日志
来源：http://www.sxryk.cn/163injspmch.html

error_log("失败: " . $e->getMessage());
来源：http://www.xuanzx.com/163aeftrctj.html


<!-- 参考信息 -->