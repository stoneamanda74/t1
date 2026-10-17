外链999!wailian999！

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163jsoaqhsa.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163thzaaypj.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163xjusjivc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163bjnpqfsx.html

[S35] C++：map
来源：http://www.xuanzx.com/163otftwwgj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163schnomwv.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163btzgruxo.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163tunduyrg.html

[S37] C++：set
来源：http://www.xuanzx.com/163iassathw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163flndvicr.html

[S38] C++：排序
来源：http://www.xuanzx.com/163qtvmbgui.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163thqkfuzn.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163zvjtdcws.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163gsobaxfo.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163kigemavd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163zlkgmtmk.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163grcutfgr.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ukrxkkvs.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163numcuuof.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163dbuljopv.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163nvuufxno.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163rshdczfm.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163izeucfov.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163qcbprgxt.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163bilguxdk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163bbhcvoes.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163pqxwhfsa.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163swszadhg.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163wfeicubj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163wbswxfnn.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163vxxmsouh.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163kqvopyzo.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163fwivvcsh.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163drpdffrh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163zxbyvxtk.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163rkcchdhv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163toccqosf.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163yztejqiw.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ujofdhec.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163mmxbahyx.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163koonwqlt.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163pqthhjtb.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163xarkgmjy.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163obfbxpct.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163vqyyvoqm.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163kfsesczl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163qbetjeos.html

[S56] C++：optional
来源：http://www.xuanzx.com/163ymksavgo.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163jsuiwsys.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163lrdzjiuz.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163huhxbffu.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163otfdpyya.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163nnunmzcz.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163tahmggge.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163zbknkdtt.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163rlrpklcq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163yxibetch.html

================================================================================
来源：http://www.xuanzx.com/163gwtitkem.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163jjozcglv.html

================================================================================
来源：http://www.sxryk.cn/163iccuirlp.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163eiilgsic.html

println("Hello")
来源：http://www.aibaodan.cn/163aupvosqj.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ihkdylku.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163fneyjljk.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ofcqlirz.html

"值: $b"
来源：http://www.sxryk.cn/163zeugmxdl.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163wrowopos.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163jraczkll.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163ckhjdvcp.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163kuwexpiq.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163jrglwzkm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163nqspimce.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163evmisnlv.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163mejcqtva.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163xwlowytl.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163jeyrifzq.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163fbukpzfp.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ynieshex.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ppibvawv.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163vacoseja.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163nvgeehks.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163vzdnubit.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163udyyfahr.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163izjqcavx.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163pendjnml.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163ewnlsjek.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163twywohrs.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163wfvscyud.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163hldxcmdk.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163drnzltgq.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163nwmmvipl.html

print("Hello")
来源：http://www.sxryk.cn/163otydrvgw.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163ireentpr.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163yvjmitug.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163pifiwugt.html

"值: \(b)"
来源：http://www.xuanzx.com/163ofrfreib.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163nmgfqgdw.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ylfejyab.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163bgdezefj.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ltmekxlz.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163errrnbek.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163lxaaiofa.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163hxddyjjb.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163gzxftwjl.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163fpcdcenz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163iuqakokr.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163vhlbtpbl.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163qieqeich.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163smrnnujw.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163gbeeogoo.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163xqvwxrgt.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163trzhbkif.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163msszwhhd.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163xlqrzhwv.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163cwcndsfk.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163tiymnkyz.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163tnccxity.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163gpkcpnfz.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163irodjvnp.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163uhxlpxtt.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163lfbhcrdr.html

print("Hello")
来源：http://www.sxryk.cn/163tlpobejn.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163xycygvjj.html

local a = 1
来源：http://www.xuanzx.com/163asgktltt.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163kkvehcyp.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163bzfbhjqn.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163mpfqwajo.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163ungkosla.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163fysueyeu.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163fqrevjjy.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163idkehjzm.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163tmpulmzs.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163yitqhnre.html

"a" .. "b"
来源：http://www.xuanzx.com/163trzubgac.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163oxdrnxha.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163hzpugoyw.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163gqkgbgid.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163xwkqbauo.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163qxthisqb.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163btnhhevu.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163rhmukmtr.html

print "Hello\n";
来源：http://www.sxryk.cn/163pyzdphxo.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163utsxnlwp.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163gfmjetyy.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163esuvipky.html

"值: $a"
来源：http://www.sxryk.cn/163aajlrgur.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163cxzfhsfg.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163vuximtmt.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163aekvnuqu.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163wsmkrvnt.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163mybhzbie.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163ijyhhyxa.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163hbayiinn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163hzsaimrn.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163wqkaroaf.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163rmsigrft.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163kpamufsy.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163yiityvot.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163rixmrzrl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163fczukzcu.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163czlewegl.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163uyorxqjk.html

println("Hello")
来源：http://www.sxryk.cn/163bgpgmqoj.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163szrwanzt.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163wxzqpuhc.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163gqslwarv.html

s"值: $b"
来源：http://www.xuanzx.com/163zmwhqrhb.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163jzghkqnv.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163svgrfmmh.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163eosxrktd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163xvznnwzj.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163kfzlzlpk.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163xxtdzlyx.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163nnhetbpi.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163kihyygla.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163hmomgywt.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163cubgnrdw.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163stawbhli.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163daxulkno.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ojlhsema.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163wceojgrx.html

================================================================================
来源：http://www.aibaodan.cn/163fctkqcpg.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163buizewzx.html

================================================================================
来源：http://www.aibaodan.cn/163bzhnfvhg.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163wptrqaxz.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163ypqtpeac.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163ymaspyir.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163wxnaqnpq.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163gfyozqqp.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ajrirzjb.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163mahwvmno.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163srcxgwvw.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163wtgsgdtl.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qknmiewu.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163hviszmvr.html

{**a, **b}
来源：http://www.xuanzx.com/163fgyacjee.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163yeycbidf.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163vjuqfexg.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163ooecfwom.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163tfaowzum.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163aaqcxkme.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163wnvrfbqc.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163xqxfdtxc.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163fcmomkvl.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163dqkpxdiu.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163tfbyzhuy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163itduvrhj.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163hyclvdkr.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ordtnntu.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163fqemenrm.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163qaawzmfl.html

defaultdict(list)
来源：http://www.sxryk.cn/163genlzdms.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163aryfdfuc.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163zpbwgyyh.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163ectibrcf.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163omploonh.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163qgtlhpxk.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163mifiagkn.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163tnvefnhb.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163pqknsqrj.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163tthyhsol.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163vyqolkhl.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163jiiznedn.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163mzqaovmr.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163kfrzgoxk.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163zbyzplrd.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163uaezkzas.html

list(zip(*m))
来源：http://www.aibaodan.cn/163swiqhpxf.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163lovogdum.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163urlhsfpc.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163zevxjcid.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163flghrnwf.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163qdwggwxn.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163cuueqypa.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163dwmyixpf.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163mtxdtrbm.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163ribrqpwt.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163yclpeeki.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163stiwmxee.html

UserId = int
来源：http://www.aibaodan.cn/163idvbpvph.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163jtpmwbgf.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163ohanzftb.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163wroznslh.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163xfmbsvdk.html

[U31] Py：单测
来源：http://www.sxryk.cn/163gtrtomks.html

python -m pytest -q
来源：http://www.xuanzx.com/163dyenvmqc.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163sbmcwhfr.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163tylvngro.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163jeicbqlb.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163jciraapv.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163cmjxweha.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163ddhrhouo.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163htweofbu.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163enonvaxi.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163xolglcig.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163jtbeyxvj.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163wmwjgpyh.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163dvhyhzev.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163lxcszwrm.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163yjizeils.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163lzuvnvjj.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163gxczifxi.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163euiioewt.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163czelayzn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163qudgpqrg.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163qfkiaxfl.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163djnvpjob.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163epeeaoyq.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163depzexst.html

namespace App\Http;
来源：http://www.aibaodan.cn/163zhvpzuxc.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163oqukjbwn.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163cpvsrqah.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163cgyjlsjl.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ttjzruvd.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163fowhzqfd.html

?string $name = null
来源：http://www.sxryk.cn/163irzzpltp.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163cdrkcoyb.html

int|string $id
来源：http://www.aibaodan.cn/163zmdngfvp.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163fayhdfoo.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163bpelmtjo.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163mhdoiqiq.html

public readonly string $name
来源：http://www.sxryk.cn/163lkzvwqck.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163zsmimwtd.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163bumcahym.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163sxedrmeu.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163fqvuliiu.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163tvljkjam.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163niefejeh.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163hpprhsnr.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163vboujiae.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163mpughwal.html

$obj?->method()
来源：http://www.aibaodan.cn/163qwdsaujy.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163qqnluies.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163snntozmo.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163ywajeazy.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hdnppepm.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163zkaxlhtd.html

"值: {$a}"
来源：http://www.xuanzx.com/163aobhrjwh.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163fmhrxbdj.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163wkgvmgnd.html


<!-- 参考信息 -->