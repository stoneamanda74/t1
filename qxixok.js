外链999!wailian999！

#include <iostream>
来源：http://www.xuanzx.com/163rthuynwo.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163jctailbh.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163kchfyasf.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163paotutlj.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163euwutcws.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163jozvguaf.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163gludonze.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163grtktiqm.html

[S35] C++：map
来源：http://www.sxryk.cn/163ftyzuxjw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ctcryfzp.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163aoscnvbb.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163kaausfod.html

[S37] C++：set
来源：http://www.xuanzx.com/163pxyqvfam.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163twpnsxge.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163krzhmwqq.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163yspldxzr.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163jvlwlvdl.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163bldpeguv.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163jtyjqwok.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163pljlcspv.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163ncvwqaln.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163dadyrupp.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163vqnbasyp.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163vyvwcygo.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163jeovqrdt.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163lgwugeab.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163xneludjy.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163kplhqfyk.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ujeijlfn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163wwhizwxh.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163qgujigie.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163vipnuvbp.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163lojvdtzg.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163kmoxvuup.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163sdxbvxpu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163umoifbza.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163dffryyij.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ueyymwev.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163sadtzahm.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163qitujazo.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163hqnmwluk.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163tclnqgxa.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163xzdywhww.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163qtxfkibb.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163tvjoiwnt.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163jhzjbkzi.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163elbrmryc.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163mvvorgcb.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163mhgtjras.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163pgrwetvh.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163fsitohzd.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163mjiaciyv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163plkproeo.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163tckegxdm.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163mzqpcwgu.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163trjtgjcm.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163cwnetekk.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163bcclcyal.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163itrqggai.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163olftlqad.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163vtqvpfmw.html

================================================================================
来源：http://www.sxryk.cn/163mdatacqr.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163sojcvzjm.html

================================================================================
来源：http://www.aibaodan.cn/163xicqfgzi.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163huwywqqx.html

println("Hello")
来源：http://www.xuanzx.com/163ymynkinp.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163bgmudbfm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ykkkdaye.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163tdryodlw.html

"值: $b"
来源：http://www.xuanzx.com/163qydjvhov.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163cbenryyq.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163vjsjgklw.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ghqqlqnz.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163xvesujoi.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163svwsxusz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163sskyqqvz.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163nzfmctmn.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ifjrzlgi.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163juztetco.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163vwbotblx.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163gufotmdh.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ifjprrdx.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ukjdkefo.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163dgmgorot.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163brdydjzi.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163fwrspgak.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163mfncqasg.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163ezgmnrgy.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163fgacroiu.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163eymkfkzl.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163mxfunwid.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163lgmunhzj.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163kvagbprg.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163eiaqnbim.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ftfwyurl.html

print("Hello")
来源：http://www.sxryk.cn/163gnhhmipx.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163rbukvwgy.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163kqujaxma.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163gstzyjug.html

"值: \(b)"
来源：http://www.xuanzx.com/163xubupcjz.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163igywzlbh.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163cajcblzn.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163yrmxnojc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163kjehtokp.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163cgiqpljn.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163hawwetxv.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163gzujnfiq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163yrpmesgz.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163eaafpumj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163xgrtwwts.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ooalznow.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163cvsprrvp.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163yljdriqj.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163ijsnzksw.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163cglcmqan.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163rzesgrzd.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163xongzbfx.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ltyjdnuy.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163oucbysgl.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163bzfiilre.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163wyzhdtfr.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163wkrvluxm.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163cgkqgwum.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163lbzsgvxz.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163tnryvbfw.html

print("Hello")
来源：http://www.xuanzx.com/163kffexdfb.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163wfzmyvba.html

local a = 1
来源：http://www.xuanzx.com/163xkpvyoyi.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163gvienlzo.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163zcfywfxe.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163gorwxiig.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163zylfqnrg.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163cspexulw.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163gldcttzr.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163lloycxbw.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163tkbzpisz.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163rznckmxz.html

"a" .. "b"
来源：http://www.aibaodan.cn/163jrtzacqw.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163pewfpuvw.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163ubsuczpz.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163vziojwnb.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163lnjtzeiu.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163ruvhfxzp.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163abauawzh.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163ipddzafp.html

print "Hello\n";
来源：http://www.aibaodan.cn/163pizytgzr.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163orvvafbw.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163nlolfjie.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163zslcbsug.html

"值: $a"
来源：http://www.xuanzx.com/163ookmupxs.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163miuxngov.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163btftzbil.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163rigesviu.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163accklwli.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163unzonmkk.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163xcfylkfh.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163sbhvjnfq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163sevcgotg.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ncnzhgzu.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163spwfifbl.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163qrfkmxmy.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163rwrbubgu.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163thurgoel.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163rcjchnnr.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163fngtmxmq.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163kxhsmlof.html

println("Hello")
来源：http://www.xuanzx.com/163qfdlunrs.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163yzdulgio.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163vmtdxleq.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163mwvjtqky.html

s"值: $b"
来源：http://www.xuanzx.com/163ubihzbhl.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163iooxzlfk.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163mjdzeayo.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163nskagtuq.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163yltcdzvb.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163qhszobay.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163sqtuzutw.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163hsxmoqyb.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163scruumgc.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163lvqlhnky.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163zswrwfqr.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163heppoxfd.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163rzscppsm.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163qmxqijnm.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163hoieadqo.html

================================================================================
来源：http://www.aibaodan.cn/163emxitjnp.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163dsmvgkmv.html

================================================================================
来源：http://www.sxryk.cn/163acrnnwbh.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163cnrfdorw.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163cnnbirzx.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163eycqvtqi.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163rndikdcd.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163bomekgpm.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163jtlzyeoo.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163psboebnp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163jkxtwuhn.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163nffepbdt.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jmessbdd.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163zxmwxlir.html

{**a, **b}
来源：http://www.aibaodan.cn/163pqnjiikc.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163lppwrgsf.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ujhsdjub.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163jljfdldl.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163jviwxvkx.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163nchhfklm.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163ccswcwyq.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163pebplgcm.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163lczopqji.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163coilxwgi.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163dcwxwqjn.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163mdoctxie.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163mqxfizdq.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163bvbrhwfh.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163oifgosrj.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163cfijsedf.html

defaultdict(list)
来源：http://www.xuanzx.com/163dktpumvl.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163uyivmlvy.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163eanwarhe.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163hpdywixh.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163eatjfjaf.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163nsriufft.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163ktjqjpyk.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163eigqfjqg.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163hpgjkzob.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163niacnepa.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163vcpletlc.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163snqwtery.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163qbpawzyx.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163vacpemaz.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163goiyumzq.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163drtsffhu.html

list(zip(*m))
来源：http://www.xuanzx.com/163oibmrffv.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163nfptzhzo.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163enavjsjr.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163rvkykpjc.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163zlpuidop.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163chdgezbe.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163vktzgtkx.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163rlsqsrxj.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163nbnoioam.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163przxrmqb.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163makiguqc.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163jzjxpfxf.html

UserId = int
来源：http://www.aibaodan.cn/163osfluqbq.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163hqgwrtgs.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163ntoftmfp.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163csuyqdtx.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163qxvkmxra.html

[U31] Py：单测
来源：http://www.xuanzx.com/163cujrpdci.html

python -m pytest -q
来源：http://www.xuanzx.com/163ikzyubfr.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163ozulqkxv.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163zmnxdjej.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163rhyfjkob.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163niknpzxd.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163znbwvllz.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163zltyonia.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163znudonpg.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163xswxtxqu.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163ajxlotkg.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163tklmlabs.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163jbsncimc.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163hctvauan.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163xcmueszd.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163qlkyhttl.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163chsxprtb.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163bmhqkcbt.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163rrycgzqv.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163rtqctviw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163orulepis.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163cccfhasv.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163bjzxemay.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163siuqbpzu.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163rypjhzty.html

namespace App\Http;
来源：http://www.aibaodan.cn/163jhfoxwjg.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163opxfaugw.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163zmxrllhk.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163hmekipja.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163axodtvwg.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163ugelqnhx.html

?string $name = null
来源：http://www.aibaodan.cn/163swcvtftc.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163rhbpvgdj.html

int|string $id
来源：http://www.sxryk.cn/163gflyygji.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163pdmvbiyw.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ofhoygur.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163bhfvpdry.html

public readonly string $name
来源：http://www.sxryk.cn/163zbkrioty.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163vynibpoo.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163pqywmazh.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163qbtqhekt.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163aisqfuee.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163pbixhoui.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163hygapcox.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163sfpzobxl.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163bmmxjecu.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163dfuehpqg.html

$obj?->method()
来源：http://www.aibaodan.cn/163zjoeujef.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163shxbyxlr.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163visclehu.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163ivgwzscc.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163jmkjtogw.html


<!-- 参考信息 -->