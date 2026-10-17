外链999!wailian999！

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163slrdixuj.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163guzlbrau.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163jlsamxpl.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163idjyltxp.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163dbdxlxmi.html

[S23] C：随机数
来源：http://www.sxryk.cn/163pglkqkyu.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163wgmmstef.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163qxyncoup.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163yqdwalqs.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163nmifikik.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163epujesnw.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163vcpahmsh.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ecpvdebs.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163vbgfspuf.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163hqjsxbey.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163vsyhvqct.html

static int counter = 0;
来源：http://www.aibaodan.cn/163heoigvcd.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163bwmjvikf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163liczzixy.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163hxgnyacq.html

#ifndef X_H
来源：http://www.aibaodan.cn/163rnjxtiys.html

#define X_H
来源：http://www.aibaodan.cn/163vaeouzno.html

#endif
来源：http://www.xuanzx.com/163rtajcecp.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163utkbumxa.html

#include <iostream>
来源：http://www.sxryk.cn/163zkhgrpsu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ojzmmien.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163suvelqni.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163hmqbgtrw.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163oxctbmqq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163jixcyrqx.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163mxtlzzaz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163kclcgkzg.html

[S35] C++：map
来源：http://www.sxryk.cn/163lnidknrw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ihjakuwb.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163borsybwb.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ecqiyvma.html

[S37] C++：set
来源：http://www.sxryk.cn/163fgjoxgbu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163kjomcawj.html

[S38] C++：排序
来源：http://www.sxryk.cn/163lxkieejr.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163qepgvypm.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ibfrziux.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ifdfbrpw.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163xrrpgzny.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163zpishjbg.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163wbqymafv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163domzsmel.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163mttkwmmr.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163leuuqpta.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163wlrxsrwu.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ablwdpdq.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163xzgwtmte.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163mqtwpzen.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163ovvgcdxd.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163yepbfeqg.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163uddmgxhf.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163uruwwixi.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163eupsyrvt.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163mmggfnij.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163elftykxo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163yglpqari.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163bcdqpcvy.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163thyjnfni.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163urlxcvlr.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163qlghkatz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163yysremax.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163kmwyyoah.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163qtaaobud.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163daeuytin.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163oqbiqoyt.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163mmlurgkr.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163ktwijbkm.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163alcemzpo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163zoxpzpko.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163knjvcfla.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163yqupahec.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163rbuhbxvh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163uqiqddnd.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163kzdhznag.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163ywgnzdwq.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163amimtnpy.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163dtdcwvmh.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163jpnhntru.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ssjlfafb.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163wqqxqygq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163dcavugfl.html

================================================================================
来源：http://www.sxryk.cn/163ewngnnrx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163chtvreyc.html

================================================================================
来源：http://www.xuanzx.com/163vxdnwkwa.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163arzevtds.html

println("Hello")
来源：http://www.xuanzx.com/163xqqahyrq.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163wrpimjyr.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163vfjkuhbk.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163rgcbbsoh.html

"值: $b"
来源：http://www.xuanzx.com/163hjdsprzy.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163dizgpjda.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ruhheuux.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163hdnawblt.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163vkljwoem.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163oclnueea.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163tlrlxnbp.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163wdywmpdk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163wkmfdlso.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163ooetwkce.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163oylxglcl.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163dzwfeiuf.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163adyeelpb.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163bdlgqnxy.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163zfaflwtg.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ynhefxdd.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163dcqkrpde.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163vwvcqoqd.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163kgumzoic.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163neotfedz.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163jbbrdkni.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ehhemsxl.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163aqevhjmo.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163pfmznxjf.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163jhwpciey.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ufcqqfkk.html

print("Hello")
来源：http://www.xuanzx.com/163kpgvnwan.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163fnwrqzsx.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163rwsxlmbh.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163bcosnsfc.html

"值: \(b)"
来源：http://www.aibaodan.cn/163cxlrxkdh.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163dbzcsoqk.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163kbdzrthq.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163wmpjlwuc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163gcfmtbdq.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163dokklixp.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163aivftmph.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163ojuwordg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163aboczkey.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163xhewgubc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163uvjcozre.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163aasthnef.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ujbfdikh.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163mhiunwzw.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163nfnsvife.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163abfodtqp.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163kswmirch.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163afeqrree.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163xrwubefj.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ylcthrfz.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163ukkukwcm.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163dzpfmzmr.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163gfhmhxpz.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163nvqcgkjp.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163oonnldrv.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163bhrvzwsg.html

print("Hello")
来源：http://www.xuanzx.com/163raouhsde.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163xmnrcnum.html

local a = 1
来源：http://www.aibaodan.cn/163jvmudrik.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163uanjjvrn.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163fnqcsjzr.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163zqdyzzuo.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ddjllrle.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163sybruevn.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163fdjogvbb.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163vwuvgcrt.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163vbwghwzw.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163zlfugftg.html

"a" .. "b"
来源：http://www.xuanzx.com/163bmhujome.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163uvzcntil.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163svwfehao.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163vlndcoax.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163dyjcwfvr.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163klkyvcso.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163uagfbdai.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163zvleytee.html

print "Hello\n";
来源：http://www.sxryk.cn/163iyxlijqr.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163nkfwlyjv.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163jiiqxjrg.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163zdpdrfia.html

"值: $a"
来源：http://www.xuanzx.com/163ugkyfbez.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163tmbxplgx.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ednfazjv.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163wdfccgkr.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163ecjzxttu.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163jpvawqrj.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163njftmbym.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163prpwvhyj.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163hugqverk.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163dduzppgd.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163qxkfrjkg.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163mxeftbff.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163trzadcjv.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163kcujwyjy.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163fjyutwuk.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163vojqypuu.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163quvsscdy.html

println("Hello")
来源：http://www.xuanzx.com/163hjmamztw.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163emjlpvdj.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163zuolushk.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163jwuqzgzf.html

s"值: $b"
来源：http://www.aibaodan.cn/163crrobmtn.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163whmdiybf.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163qnkbovkv.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163sujavoyg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163ognitlqd.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ryrpqeyk.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163ufhthikv.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163uiqmgrrc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163jmljhhud.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163ftwteimo.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163qnvfdhgh.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163vtyopmtp.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163oovegabf.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163paxoqyug.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163gkogsxya.html

================================================================================
来源：http://www.xuanzx.com/163bmowrdel.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163cyqummvt.html

================================================================================
来源：http://www.sxryk.cn/163pzslvpnw.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163bgsjrrka.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163aoilqyde.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163btsdfzls.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163qjjnrmjz.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163eyrwpbix.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163cacgevys.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163vdlqcplj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163znsuykyz.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163bvhwafts.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163jrqfdzdn.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163rffcqrct.html

{**a, **b}
来源：http://www.sxryk.cn/163iqafvwfj.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163euxhqyfj.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163pabsoyrh.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163wtqubxjg.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163icrnowxh.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163snkubara.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163kcasqllo.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163ruzyysyc.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163vncayynb.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163tmwkviya.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ffgviedk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163htlfpymy.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163yggwdvqv.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163bwxgvoey.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163gkjjxhfp.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163krrwnhxi.html

defaultdict(list)
来源：http://www.xuanzx.com/163zckehlfh.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163vynoismp.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163iadxbjxc.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163toxbrgzf.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163zqqukfvn.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163kzcndlse.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163jptoslru.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163ozugkllc.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163bfalwwpf.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163ksyelbso.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163ynlhkbhe.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163jdqptedk.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163blckdnij.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163idnojijy.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163arkntqtl.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163pqmuacrr.html

list(zip(*m))
来源：http://www.aibaodan.cn/163buahujyq.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163bcoxvomy.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163uzjajmmw.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163dcgfgyzp.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163onnwaayt.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163nohuqmnm.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163yxxlkgmo.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163jbqxhnjz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163hzubuavd.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163volcdfbc.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163fygdvvyv.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163ymycfpkl.html

UserId = int
来源：http://www.sxryk.cn/163auaoizni.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163dzozqcet.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163jungjxhl.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163vxsrdpcr.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163iqtcshaw.html

[U31] Py：单测
来源：http://www.xuanzx.com/163nhwyoeaq.html

python -m pytest -q
来源：http://www.xuanzx.com/163optefbis.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163qnqeerow.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163wpsbkuln.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163rqvfmukt.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163irvjvynu.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163bkolcbpf.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163weyoyauc.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163difxdrpb.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163jaedyxqv.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163woatbgqf.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163argdnbbm.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163xknzurco.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163gxwrkesg.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163mzwpwpyy.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163llwhnwbu.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163wqudpade.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163rdlxgwcu.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163ebqrtbpe.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163lpxtbyli.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163rqgbymfv.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163sbdkfzty.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163txkfbnfb.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163thtdayew.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163nwitzczb.html

namespace App\Http;
来源：http://www.xuanzx.com/163iqxpznwx.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163sxucekmt.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163biadtfsj.html


<!-- 参考信息 -->