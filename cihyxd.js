外链999!wailian999！

[S35] C++：map
来源：http://www.sxryk.cn/163iardlzrt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163kjvdsqbv.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163zixmjmgn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163mbaghjlv.html

[S37] C++：set
来源：http://www.sxryk.cn/163eupeuvvj.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163qxgroafg.html

[S38] C++：排序
来源：http://www.sxryk.cn/163vpcdrbrc.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163wyiamukw.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163kygvfiat.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163bquysjuj.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163ewemzmxp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163uuvxwxnp.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ygzvftss.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163hzltisnj.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163qalqnoxt.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163qfgrrdcl.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163niunyhsq.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163qgqhvntm.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163hdbhuspx.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163dgnhcwhh.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163cocpynnm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163hxlsutku.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163xrdppkco.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163wodgdndb.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163rhmqpcqj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163oagxtuie.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163odqgnyig.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163tdjjobnv.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163ytfdoaqq.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163hpedecst.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163smxrrmsa.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163zwcfewdz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ljpxrmtd.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163oobsxhdj.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163dzrsfctq.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163xkrigoab.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163kgblsons.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163neecexux.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163oyctofbg.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163fyohumyu.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163mggwlfec.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163nfzueuoq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163agwcuqnn.html

[S56] C++：optional
来源：http://www.sxryk.cn/163zoukuuif.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163gwxfklac.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ppjhfzhh.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163hjqczlmc.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ddxfivsd.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163eeiltowv.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163yumtrlne.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163zpoepozr.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163jleaoecd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163cevedzzf.html

================================================================================
来源：http://www.aibaodan.cn/163nsshcthi.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163xksxqnvm.html

================================================================================
来源：http://www.sxryk.cn/163bqjryfoy.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163oasbtidx.html

println("Hello")
来源：http://www.xuanzx.com/163syivotsd.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163helbftql.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163eaqrxbbh.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163kcljdgsm.html

"值: $b"
来源：http://www.xuanzx.com/163dodicrfe.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163kkpcoovl.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163oudgmfhk.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163csumvbte.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163pfxsrnuf.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163uhvdjcga.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ohptkjna.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163rkbrcbup.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163zzwuxpid.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163zgmzgysh.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163coxyfkfx.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163fbtkzvtp.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163ggduflbu.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ovbavvzf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163xyghcztc.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163dflfvwoi.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163akruuhnw.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163rwycamph.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163hxuvqutz.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163ynhqfsjw.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163uwctjipg.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163jlycvprz.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163oecvxqio.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163gxsontgl.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163fjcwubkl.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163bsefwfaj.html

print("Hello")
来源：http://www.sxryk.cn/163crzfoeuo.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163vvhlgbxc.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ixydwigd.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163pkwzxffw.html

"值: \(b)"
来源：http://www.sxryk.cn/163zxxtuzui.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163etscvgfe.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163xogqsmlm.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163hpdeasjw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163jsgsbpds.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163ogikvsdz.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163zbrujmst.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163hgdxrimc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ztxwaodn.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163obihlhgo.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163vqaxfhmg.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ytwuuace.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163sqfxhahu.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163fjeygqqp.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163rmlzhvju.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163pgbzsbsq.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163qrbwbfrs.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163statetoc.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163rkjjlqgk.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163mlpdtnbk.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163owdrfbct.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163nqvmxljo.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163cewqqhzl.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163jpcfoasn.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163ewayvlrl.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163vqugxvws.html

print("Hello")
来源：http://www.xuanzx.com/163tasbrvbn.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163fbvkwsew.html

local a = 1
来源：http://www.xuanzx.com/163kgqoigad.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163wermczbc.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163ltovsrow.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163tbalvjwa.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163abmkbguh.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163nrwxizol.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163kxdlobnm.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163obbthtgg.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163wudxzryg.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163omisfayz.html

"a" .. "b"
来源：http://www.sxryk.cn/163xiicuian.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163xpgigbrm.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163mjexmppr.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163qkikdyhu.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163ywniguus.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163wqzgluld.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163xeskzbuz.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163mrnpvsiy.html

print "Hello\n";
来源：http://www.aibaodan.cn/163uwqsknrz.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163blvoreuu.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163zabozxzx.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163wgdbymhh.html

"值: $a"
来源：http://www.xuanzx.com/163kevsltxb.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163uijyhenk.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163kdyqumhk.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163yuffezqh.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163mkdvlvrx.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163pebixzti.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163jjrplyax.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163wcvptusy.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163qvywowxy.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163athczpbl.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163jbdhhdbk.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163pyttnodq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163ddatfoyk.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163pfatmtrt.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163rhjjnmoh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163wlbqbbvw.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163uawfnnpp.html

println("Hello")
来源：http://www.sxryk.cn/163emytxwgi.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163wjwwvxpj.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163theumoze.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163kpxpxhwv.html

s"值: $b"
来源：http://www.xuanzx.com/163eikizftz.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163vpnfoigx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163kgfmiqas.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163gnoxwwse.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163qyzqekxm.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163eoutidcf.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163ghsxnwoj.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163xcytrlks.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163pbnclkbf.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163vukhvcxk.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163krkvwqvi.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163igggljkx.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163ewcrlrrm.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163lmnywlrr.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163alesxtxt.html

================================================================================
来源：http://www.xuanzx.com/163vauadbny.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163zsmnnxfx.html

================================================================================
来源：http://www.aibaodan.cn/163uhryloke.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163lwyolksn.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163msjjfkkx.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163ynqknghq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163xwiusdzw.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163lpawckmo.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163drtrpqoq.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163cmndfbnc.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163lzyrfeaa.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163uqsuwfbe.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163mhiypsfl.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163svslziws.html

{**a, **b}
来源：http://www.xuanzx.com/163mxqvztuj.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163pqeogeae.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163sbgzavuu.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163gedwqfhj.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163qnwpflbp.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163dpnpuknn.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163iwaensox.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163smqywzed.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163cdnyajko.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163gchfogii.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ioxgxlff.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163uojkmmas.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163migjoqoe.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163mgvkxgvn.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163nprjaiid.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163fiomjapg.html

defaultdict(list)
来源：http://www.xuanzx.com/163mwauwdvq.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163qhxuuugq.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163zjgjujrx.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ryzmmeuj.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163twdrlwng.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163roaozdjx.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163xndgfauj.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163nfoakfaj.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163eoqpmzcy.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163pzukytzc.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163mvievpzo.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163etrffibq.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163emtihudm.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163karxlptl.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163xffabmau.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163qclotkgt.html

list(zip(*m))
来源：http://www.xuanzx.com/163ttqkkgyo.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163fqjyiexh.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163kseocjyh.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163ankxwbyf.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163rvkoemag.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163otfpiyky.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163xbmnlhgi.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163hebfknlv.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163ouchgeuo.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163jzasjkqh.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163itubpcrs.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163iqmuzorq.html

UserId = int
来源：http://www.sxryk.cn/163nhwgterd.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163lcwibgkh.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163aewdjewb.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163abqefgah.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163rfporiut.html

[U31] Py：单测
来源：http://www.xuanzx.com/163llmyrcpo.html

python -m pytest -q
来源：http://www.sxryk.cn/163wtabomtn.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163mjgvcskd.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163jzxjknkk.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163rtfqpmsq.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163wtdnlrkh.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163vmflplfl.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163abhpmdww.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163sjhmmbks.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163scpaxjsb.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163ggtbjyeu.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163qppcjymg.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163obqsrbfr.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163umakzzaj.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163emjjaocs.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163aaxqdwtf.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163xzvgdhja.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163mgoqjrdf.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163fvwydign.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163agomsree.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163bvrhvgjr.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163wzilcxcb.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163acumnccz.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163sbxjnhac.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163jjtnnvow.html

namespace App\Http;
来源：http://www.aibaodan.cn/163gvxjgrbd.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163cgqjmdez.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163huxtoeoa.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163bwareony.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163rgxfdqsy.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163duoywulx.html

?string $name = null
来源：http://www.xuanzx.com/163kkgjfknc.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163vzhmkqtk.html

int|string $id
来源：http://www.aibaodan.cn/163tdnwxiix.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163yqfmstuv.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163huytutdo.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163jgoiotuk.html

public readonly string $name
来源：http://www.sxryk.cn/163fvsmmoyw.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163clizozqu.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163fgmyzgpr.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163fbqplwpx.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163kdtoneip.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163tecmgpxm.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163rkunbhsi.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163nomqppec.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163ppahwnnz.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163xzbqxvjf.html

$obj?->method()
来源：http://www.xuanzx.com/163ugasingr.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163vwbutkwu.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163ffytutoq.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163yoiphhzy.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163gpvahedl.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163bceajkdy.html

"值: {$a}"
来源：http://www.xuanzx.com/163qdpwdwmd.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163xsjrlnpn.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163dzblqmcr.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163qqtdzpya.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163emdtvswz.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163wtddxnvr.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163iycxvedn.html


<!-- 参考信息 -->