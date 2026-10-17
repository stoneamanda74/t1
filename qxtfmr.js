外链999!wailian999！

[S37] C++：set
来源：http://www.xuanzx.com/163eiickjar.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ygizfdac.html

[S38] C++：排序
来源：http://www.sxryk.cn/163ugeawayc.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163jvexvkwy.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163yifkdwqi.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163wfwflytv.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163fxtehitm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163lwspaqsx.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163lwinulnv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163lmujybki.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163abqdlwzs.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163lnwagzhp.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163ueienics.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163qmbczpen.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163vizoiyfm.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163phfxeyyh.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163gyepaupy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163dnpjiils.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163sxcgwgox.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163efdqizth.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163trskbhtf.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163sduxjgxy.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163seozhhos.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163kbebtzjk.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163qimofymm.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163uicgrphk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163sgwyakzo.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163eknboaxx.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163mgrxrecd.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ogtrrzch.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163llwhxxtx.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163amrihlli.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163suuwzbcv.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163eittffkq.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163kwnoccfd.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163rehecyxd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ufxlaydx.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163tbsjwkti.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163bvjlqzgr.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163bizjmfeu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163bivtcskc.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163qwnvslgf.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163mduvwtpk.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163wlrsbuxh.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163ghsprasg.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163ayulmsap.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163hgnlsxrg.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163hxbkhwar.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ztyivrwa.html

================================================================================
来源：http://www.sxryk.cn/163ctacmhzl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163erbosder.html

================================================================================
来源：http://www.sxryk.cn/163faednjmu.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163tbsvzhwg.html

println("Hello")
来源：http://www.aibaodan.cn/163tbpxmcam.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163kyrolbzq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163cdwkokqg.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163tpakpdck.html

"值: $b"
来源：http://www.aibaodan.cn/163rdupzgoi.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163otoeeqia.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163nihgtwyg.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163fmcpsyqb.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163tumyolte.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163grtuauzh.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163fhmrhbyq.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163wzisgyny.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163cnhqnkze.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163qvdenmrr.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163okrpqeoz.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163hwlmsqmp.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163yhzcscje.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163kfuqotox.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163irloueex.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163sgdbuerx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163hoktoein.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163xtkhkxhu.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163tctafclp.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ziazrbom.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163envntmjm.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163gnouudaa.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163txzftatw.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163hpmrwyui.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163vshrtiee.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ebarjzvl.html

print("Hello")
来源：http://www.sxryk.cn/163ufjszrvk.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163vjxkmaqg.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163zrztjdlw.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163nqvccnhr.html

"值: \(b)"
来源：http://www.sxryk.cn/163ymmfvvsb.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163keheohqh.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163opajdwob.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163abeinavz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163fdeasahw.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163ycoqadas.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163aqpoddbg.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163myaesibx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163dtogozgb.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163jbdmdsbr.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163fmqwnvts.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163tfnqzqgs.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163ezgnvkfy.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163tyzsfvlo.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163qfnenlns.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163eljbmdda.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ahhifmaz.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163wiqktwxg.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ooenupvk.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163cepbckgq.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163orovsjqf.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163yirqdino.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163keiuswly.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163xsqqtkdq.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163avyawrcp.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163lsnkrfds.html

print("Hello")
来源：http://www.sxryk.cn/163prqhgkul.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163mvmaeujm.html

local a = 1
来源：http://www.xuanzx.com/163ibnhpnaw.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163ssblqzop.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163ycjnpdrq.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163kdkihslw.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163eqgbfarv.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163wbwkeazi.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163ekmqcvqx.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163nooiqjbd.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163mmongjqj.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163gpxzufzo.html

"a" .. "b"
来源：http://www.aibaodan.cn/163nlukcfgs.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163ahrbnceq.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163zdwqvqhg.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ymzcmslg.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163wosmsnym.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163cvrfsism.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163agwfoick.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163yxdcpyuq.html

print "Hello\n";
来源：http://www.sxryk.cn/163exihsuek.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163jlwjuqle.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163vccmeaor.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163kwzveaxo.html

"值: $a"
来源：http://www.xuanzx.com/163kurnfxkp.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163toipsaap.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163azetdtue.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163yorhuuns.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ytynhkej.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163dbhsjxdg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163xojeafaf.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163ypmmzeoc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163awwvokqv.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163mkchzpaj.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163deoztlmm.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163cebhqmwi.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163vwnuekxo.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163brjobmft.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163dcdlirxx.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163dlvsdzli.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163cdkkarkd.html

println("Hello")
来源：http://www.aibaodan.cn/163dpobczvq.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163zpjmhjdd.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163xsnatyio.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163mogpjzjs.html

s"值: $b"
来源：http://www.sxryk.cn/163todewkma.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163tbwawkza.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163akpleuow.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163tccefxes.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163lkgzkuvu.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163chncunbp.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163tpfgjpbd.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163idgwtrpp.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163mehemvrt.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163riptznbt.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163hraigpcg.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163knlcqigb.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163omkjxwxe.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163qwzfvsng.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163bgosqczp.html

================================================================================
来源：http://www.xuanzx.com/163egjeklpn.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163kvvshyeg.html

================================================================================
来源：http://www.sxryk.cn/163cjjczqjx.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163jocmtvoq.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163acidwsjg.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163txyyxcdw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163gvdveayr.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163finhsfwg.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163towwcvef.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163jinqrhdj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163gtdiclvy.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163glqxjgby.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163gacjalin.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163rwinyiha.html

{**a, **b}
来源：http://www.sxryk.cn/163pmbsairm.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163aotnnosw.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163okhtxcqj.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163sqkxbjfs.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163prjcprwy.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163fbatewhn.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163nedirmvz.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163jhigswrt.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163svrsfdjs.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163byevufbq.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ueyxircm.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163xpltqgnv.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163vjqzkrig.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163dnulicib.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163gzwnuxht.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163tvbvxcvc.html

defaultdict(list)
来源：http://www.aibaodan.cn/163qxpeitqw.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163jhigbbmh.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163vtixibki.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163jkldifhi.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ycduwphf.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163ctbsikhg.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163iebftuoa.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163obsefwpr.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163oedatbjz.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163gubruqmt.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163ydwuqypw.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163zdeuosth.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163zuqleuzd.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163yubbeldx.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163cjktrhqr.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163qijrwnnr.html

list(zip(*m))
来源：http://www.aibaodan.cn/163gjlamgax.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163ikbtmywt.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163eswleuir.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163frvxbkdn.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163samdgalw.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163szxkgykn.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163kytnsxhk.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163wpyrjvua.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163cnhgtmef.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163msifncbp.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163gaqqheox.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163mctkfryf.html

UserId = int
来源：http://www.sxryk.cn/163qnsgxadk.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163upykgjvo.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163repxkxnf.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163dojkfquc.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163dbqhsujh.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163rctbtypc.html

python -m pytest -q
来源：http://www.sxryk.cn/163tapmaect.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163tlwizmsx.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163ffkbiyfi.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163nyqfcbfq.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163hfqlytmc.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163qwswttcz.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163rdrstswg.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163ngaxstgu.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163jidbcwvb.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163ceupyntf.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163ztjlsoxr.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163rerlnxys.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163bhlwkphr.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163trzzjcwy.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163yugslzvf.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163ydzfnzpb.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163bzjxehxl.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163lesluley.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qxztngrd.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163hwyiizmg.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163qqhtkakx.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163avqgyckt.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163wgyailov.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163rnuyspcy.html

namespace App\Http;
来源：http://www.xuanzx.com/163kbzgxbuw.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163tjvklviv.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163cbdqhzmb.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163vwqevsrp.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163obzucika.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163ddujvenm.html

?string $name = null
来源：http://www.aibaodan.cn/163cepouvxz.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163pfopcqbz.html

int|string $id
来源：http://www.aibaodan.cn/163tgcbiiej.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163mdfznelz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163qlqqqcyb.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163wtidvfny.html

public readonly string $name
来源：http://www.xuanzx.com/163ojvdowvu.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163htyuceha.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163hajlzsgb.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163ueakndft.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163rncvchqc.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163zcoxrine.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163zaatapal.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163ryygykzd.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163yzcpkxgl.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163dkonvjoe.html

$obj?->method()
来源：http://www.sxryk.cn/163bbkvnjyd.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163yiumqeen.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163sowpjbqx.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163ujjsuuyp.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dgyiftps.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163sahwmund.html

"值: {$a}"
来源：http://www.sxryk.cn/163vxmviwre.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163audbjfbk.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163dxnlrlaa.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163zarznlan.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163pjflewfv.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163geypkwkf.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163csfcejnj.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163wzianuwc.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163yjtcdhrh.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163fglvrcck.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163jispwhat.html


<!-- 参考信息 -->