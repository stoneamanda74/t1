外链999!wailian999！

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163rmkmbwni.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163zkatydsy.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163eidkkian.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163xpnxfbft.html

[S35] C++：map
来源：http://www.xuanzx.com/163kibrowbs.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163fhochqtg.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163wqsqispo.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163rrftdcft.html

[S37] C++：set
来源：http://www.xuanzx.com/163mbzaupph.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163jjiibpqx.html

[S38] C++：排序
来源：http://www.xuanzx.com/163kwjupmns.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163rckbwqko.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ghgbgzps.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163nbfoiwdq.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163kppknnmz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ptnzktye.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163cvogzmwo.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163iafzwovz.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163kxtdvloe.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163ikeahlqx.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163uuczysiu.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163reerngug.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163dsmvlrcs.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163gqcvanoz.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163vbohzxla.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163xcddhpgw.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163pczkxdfb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163sdqkgzcn.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163qwxnpbcc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163geiozxdo.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163yeljgfys.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163hbkzbqlg.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163wdedlbyn.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163yasfxokc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163hulxuhof.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163zxnqphqf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163vzltlyes.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163wddzzidu.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ybrvhhfr.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163pttveqgu.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163gakhuiuk.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163hvyspwot.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163zwmzivsc.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163cclpeycq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163wldgkhtn.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163lojivuqs.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163wijihosv.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163tyysvhgz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ahzwavex.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163rvkafdni.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163uhcdwwkw.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163gfcobfgz.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163qkdatphb.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163siektugn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163wzoypjom.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ollyhxtq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163gbeptegq.html

================================================================================
来源：http://www.sxryk.cn/163lxtujacv.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163uceepmdh.html

================================================================================
来源：http://www.sxryk.cn/163qyjbbdtw.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163adkbmuml.html

println("Hello")
来源：http://www.xuanzx.com/163bjvskyaw.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163pagwpmxx.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163ohksochn.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163wuaojknt.html

"值: $b"
来源：http://www.sxryk.cn/163tyspkhje.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163yoysjsjz.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163zzxaphqw.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163rzdvltlp.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163oznahshc.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163ttheydeb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ztzcpand.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163hagboftx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163edwiyvgr.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163uznhkyji.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163kzwljgvl.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163sscznrrx.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163rglrjleo.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163xpcvsnif.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163ydwnkeou.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163yjewmiqa.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163lrqicwij.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163plrsyvhj.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163mrpbxtuz.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ubrlakjo.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163gczgglbe.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163txheukox.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163lfveruex.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163rpnwhvhn.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163agpznlbh.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163luzhenrn.html

print("Hello")
来源：http://www.aibaodan.cn/163bownngdd.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163epqrrmod.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ogmqwstk.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163llxrixad.html

"值: \(b)"
来源：http://www.aibaodan.cn/163buqxfqzw.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163pohfyvtr.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163aokudnnl.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ocqgfozf.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163imouqoqg.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163hcsitgga.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163jnqzanbo.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163mekkzzsj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163nvjkhsac.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163girmcgab.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163hhzidxva.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163iznxkemh.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163pviecxzo.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163lgqegklk.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163nowpysqd.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163mmawpjwv.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163vytutoqi.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163awuqfywg.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163muxotcff.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ughrodil.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163ujypewgb.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163xdpimner.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163axjuzhob.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163qjmxqxtm.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163dghzjccx.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163giswqlqm.html

print("Hello")
来源：http://www.xuanzx.com/163lzaejmmo.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163uyuwgfjn.html

local a = 1
来源：http://www.sxryk.cn/163timbkhkz.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163hdybvrfo.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163szjgrqap.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163brdyvcnp.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163fklebizl.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163ycwbskdg.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163oblqdhhg.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163tbellxeh.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163nhujhssq.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163piotnmie.html

"a" .. "b"
来源：http://www.xuanzx.com/163hzmpafov.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163isacbeca.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163mvpmzilw.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163rzizxdzh.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163olrudlrk.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163ipsbedmf.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163jiunyzmy.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163qbawgtkq.html

print "Hello\n";
来源：http://www.xuanzx.com/163ptpzjcmo.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163wbgoaeal.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163fzcbucsl.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163bnywzsch.html

"值: $a"
来源：http://www.sxryk.cn/163zdixlmhm.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163ucsacnqz.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163zczobrkg.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163ciqrcmbu.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163detjwxai.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163avuazkrt.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163bqjnkjax.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163fhxewmgi.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163zzxxqlyh.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163jdqnxxcx.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163znnmdxnt.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163fhvewrys.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163emxohpnw.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163dhdvdjxy.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163wszmdzzp.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163dnjelimw.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163rvfytrtf.html

println("Hello")
来源：http://www.xuanzx.com/163ohtrfkoj.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163gftcfxsb.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163eqibsokl.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163yeutirqb.html

s"值: $b"
来源：http://www.sxryk.cn/163zsylgict.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163kcegvcgz.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163dvrkjukp.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163ortcyfce.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163twzflitq.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163vmclenyq.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163cxcxgkfo.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163cfbwwpzq.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163pguwdqpd.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163hfmhcvwm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163ivtckepp.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163udtsdzgy.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163pwvnvqqt.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163whenalwq.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163rwkvmerc.html

================================================================================
来源：http://www.xuanzx.com/163ycnujvgg.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163glpvncta.html

================================================================================
来源：http://www.xuanzx.com/163gcqckuzu.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163vubbyyti.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163oefgfmqk.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163zvacwqyy.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163vangccau.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163ieaabqai.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163fobclhxi.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163ircfrazs.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163ydevpioi.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163pphdwmck.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163sdqlejlf.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163qyljhohd.html

{**a, **b}
来源：http://www.sxryk.cn/163zikonatp.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163ihcftcqu.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163mgggfvnh.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163hdgkeamz.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163mtsbhqfm.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163ykuggjev.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163ivngsevj.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163cixszvgc.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163ybizymcv.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163jswinvff.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163qfjpszhy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163knsrmyaf.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163kcqdnfrc.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163msxpufxk.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163ccwawmxr.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163exuqilyo.html

defaultdict(list)
来源：http://www.xuanzx.com/163gttnwlfy.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163dtmhmhyn.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163seolrfgc.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163hbcxrpwj.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163inhagdbo.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163kmnjyniu.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163fsssbhhq.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163qxvuxycn.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163xueulksc.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163fqydimvu.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163zxtsmsrp.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163skfoswby.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163kqrftsql.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163mgsmbsly.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163dprmbnhe.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163efqhjkjh.html

list(zip(*m))
来源：http://www.aibaodan.cn/163pbyvzswq.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163ompjuztp.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163bvpxfuzx.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163aafhxran.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163ieeguxek.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163phxwldjd.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163johplupv.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163yuxxipge.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163dykvtsxs.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163znqvzwdq.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163fytrqtml.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163vibxohjt.html

UserId = int
来源：http://www.xuanzx.com/163yahavklo.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163kyreyyrg.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163ekcmdrit.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163kpnqaupm.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163kofugdmc.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163twopqcxb.html

python -m pytest -q
来源：http://www.xuanzx.com/163bygelhcl.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163eglcudve.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163foekkilm.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163tzvwkuih.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163wpogqtmx.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163kdgtnseu.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163iwzybwij.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163athtpnmf.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163xrmdendh.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163lpppshhi.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163dydwpukb.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163zpxuagdp.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163vqtjslvh.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163hlfsoifg.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163usgzpdex.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163mhmjtwhb.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163lwqchfpd.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163tgkycbqc.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ctqsosps.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163xsshnude.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163tcqnzbrj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163jaspepbu.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163dzccmplg.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163jprlaqcs.html

namespace App\Http;
来源：http://www.xuanzx.com/163dbwpatkb.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163cnzamile.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163qbabxzop.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163yvdgcpgb.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ssypratw.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163lcawqpom.html

?string $name = null
来源：http://www.sxryk.cn/163ygebbbhf.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163kjwurnjo.html

int|string $id
来源：http://www.aibaodan.cn/163ppxncojx.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163ttiuilnv.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163iotipklj.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163usllycjm.html

public readonly string $name
来源：http://www.sxryk.cn/163wehvvlok.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163qcsphtrs.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163cloabmmp.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163ocgflzik.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163lxcuypbb.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163hscuaqqu.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163pqqubebk.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163lizjzmwm.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163fvhedrkh.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163xtokjehg.html

$obj?->method()
来源：http://www.sxryk.cn/163jbdmerjl.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163fsnpnqac.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163hnbzvtie.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163ppmgujcg.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dlqfxcvp.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163htiqdsmv.html

"值: {$a}"
来源：http://www.xuanzx.com/163zprititn.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163ejdtvoji.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163zsviplgi.html


<!-- 参考信息 -->