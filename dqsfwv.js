外链999!wailian999！

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163erbtpyej.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163tdbhbmvt.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163dzrpxpyi.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163xotwuxuz.html

static int counter = 0;
来源：http://www.xuanzx.com/163ninaomud.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163mwxzctnf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163vtfuzbqx.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163mcmjszih.html

#ifndef X_H
来源：http://www.xuanzx.com/163zppejzac.html

#define X_H
来源：http://www.xuanzx.com/163tkshkkpe.html

#endif
来源：http://www.aibaodan.cn/163wirgzaya.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163rkldxvcz.html

#include <iostream>
来源：http://www.xuanzx.com/163dwafzavu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163opixwuiz.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163gvufhiaz.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163ngzvcupl.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163mrozvfyr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163snzvloym.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163ilwxyqho.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163qvmuodtp.html

[S35] C++：map
来源：http://www.aibaodan.cn/163jokhohrj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163irkutggf.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163xtjucmry.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163dhduqfam.html

[S37] C++：set
来源：http://www.xuanzx.com/163gxkckllz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163bsklemlg.html

[S38] C++：排序
来源：http://www.sxryk.cn/163xwymyyvp.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163awvdtxrf.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163edzjjmqw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163einywywx.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163kfbhefkg.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163oribwwxp.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163narqkkbt.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163qxcpzjpg.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163kmftowyw.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163nrheyrnu.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163pzaqyjzf.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163dqftxfkm.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163hvlswlrq.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163cajbbteq.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163mbqsvmmj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163iausxqkr.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163gepxchqy.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163mhyawgez.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163nrhyyema.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163sbyqcaby.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163hbfcmnti.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163gjgavcxu.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163coklbabs.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163bucnacpv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163jkdoylzg.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163vbvalmbi.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163acuwetwe.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163sdfdyruc.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163yllgebfh.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ecwpazbj.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163tssttfue.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163lbgcnqda.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163vraprobc.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163xkpfzhho.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163mstukhcj.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163qxalgswh.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163swyxcfwb.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163xncovqxm.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163uyoxuydc.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163niymqvhf.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ebjwcbwq.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163deuzsorf.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163snancady.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163zrneifbk.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163oerznaej.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163teuzwoql.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163qwsfvztn.html

================================================================================
来源：http://www.sxryk.cn/163foarfmyt.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163azsozfsz.html

================================================================================
来源：http://www.xuanzx.com/163kzvncyph.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163lluqhzyu.html

println("Hello")
来源：http://www.sxryk.cn/163fjlkppsh.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163vrerycno.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163cigmqubm.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163nctyopep.html

"值: $b"
来源：http://www.sxryk.cn/163aydtsaey.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163hgpewtcs.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163jmlffqba.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163qkvwallt.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163plravbln.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163npgxvscz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163obaghpxf.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163kdppsqzw.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163vhkygvts.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163tmbputax.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163yrgkwnly.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163lmebnpkp.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163mpyymyeq.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163elodmkop.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163tisuulpz.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163didwyoqi.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163qnamwsdh.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163kskjfbov.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163jzwwwhkc.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163kvewssxw.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163skaeyukk.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163qdfsersl.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163qonbtpig.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163rtixmfsb.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163rnktuddt.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163cswnovqp.html

print("Hello")
来源：http://www.xuanzx.com/163jnewviug.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163kynshpmh.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163zavcjkxk.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163deykmiux.html

"值: \(b)"
来源：http://www.aibaodan.cn/163veadozbc.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163dmbbbehv.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163xmfrxcgy.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163hgdnziqy.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163bcyikkoc.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163xguwpipr.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ksslmihw.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163eyehypsa.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163xawmsncy.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163fhrtemuf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163ihkkznuz.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163rdvbfoja.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163fbixtvan.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163tlebnfcp.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163lacrwfvu.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163lhbeqwfa.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163tepcjega.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163qewuaqpc.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163wqeqktes.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163gpbazxlc.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163qloexgdp.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163ircuzaxl.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163kbzfkxir.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163gzexumzf.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163nhuaomgw.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163faisiqdz.html

print("Hello")
来源：http://www.xuanzx.com/163kdwxrzfd.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163rteprcld.html

local a = 1
来源：http://www.sxryk.cn/163xnqkxgdc.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163foaeeqwh.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163mkakyylm.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163wvpltmpg.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163aiiwjshc.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163fttfepqy.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163jmvhhikq.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163fhsafrkq.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163oytprxcw.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163mrmxioiw.html

"a" .. "b"
来源：http://www.xuanzx.com/163gflcnivl.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163wrdttqwt.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163hmcqantu.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163qvpxtjgi.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163htfbkswt.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163imyphger.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163xqfgbyis.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163izmlphqd.html

print "Hello\n";
来源：http://www.xuanzx.com/163uyjjivdv.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163pheeccfc.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163cwbmogqg.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163uymkomkg.html

"值: $a"
来源：http://www.xuanzx.com/163cgxjdrlf.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163lbkructq.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163gyonmqfr.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163xkivfngc.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163elrofowd.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163awaycegx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163evepepkz.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163qscismjc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163sqxaityg.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163zcvjicrl.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163kaoqciul.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163mmntlezu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163saaddxjl.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163bzyqrpkv.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163cmbchioy.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163bmizawzc.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163fujmeedb.html

println("Hello")
来源：http://www.xuanzx.com/163yahhgdvu.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163bbefpzdq.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163hzwhgxhm.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163zgewcwyd.html

s"值: $b"
来源：http://www.sxryk.cn/163mzjlszvk.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163edotypas.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163mmudguei.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163tzbjyndc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ryyspbxt.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163xohpzxlr.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163qffdrock.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163fydkabhg.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163mriledsu.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163zxgdhoiq.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163zgtgzkgf.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163mvmwbsuu.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163wlqifvzv.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163wpqdlnbx.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163wqqyluqd.html

================================================================================
来源：http://www.xuanzx.com/163aztmbhal.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ughsloip.html

================================================================================
来源：http://www.xuanzx.com/163yvqxwygj.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163bmrqczrn.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163tuwddyrg.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163yarwoaew.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163gsyqswmm.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163cmgkwtgn.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163rkyqqeuh.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163nvavknyg.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163phmzplrt.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163icuhvduw.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163oosmsehb.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163zezalrng.html

{**a, **b}
来源：http://www.xuanzx.com/163neraidpm.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163qrozfdgz.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163fhnacfir.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163pefmyrbs.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163ytxibtsb.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163gmyetkrv.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163jfnqbvbu.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163ajamqmdu.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163iqxfxcji.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163bgzyrpfq.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163fqovvyys.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163iaaalymm.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163cnbteqnl.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163beibsdic.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163cnbvpdmb.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163hzadqnfb.html

defaultdict(list)
来源：http://www.xuanzx.com/163wayzflub.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163wippzudm.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163ywiuehtw.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163gedrrxxp.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163tvpmyzlh.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163qnjxfwaz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163itfrmqjo.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163hgknptsk.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163ofzpljnc.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163twhijzpk.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163nazgyvyg.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163jqjoiwwn.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163oryvyzla.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163htqlehzb.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163ryiadbmr.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163dvxmssfv.html

list(zip(*m))
来源：http://www.sxryk.cn/163yfjvjpff.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163ywkebbaj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163wpvclmug.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163mdddzpxb.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163avquqryt.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163nuxnjndu.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163hbqxfyjg.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163nunhzeqn.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163irxpmxtc.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163jfrrazyn.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163zfehaxxq.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163lixohskq.html

UserId = int
来源：http://www.xuanzx.com/163rzlriacu.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163segwhcxa.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163pjkduuai.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163yxajdoll.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163fxsutmmg.html

[U31] Py：单测
来源：http://www.sxryk.cn/163swpugibb.html

python -m pytest -q
来源：http://www.sxryk.cn/163tigwekwx.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163rjipsnuf.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163ldocmkjn.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163qyxmttwe.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163ufcljulm.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163nnqgmlpv.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163iknguudp.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163uakumwqd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163kdxtqvbi.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163ycjfpbos.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163zucegorl.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163rbgezwig.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163uvsynbrl.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163rjxwiffk.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163fidgbpdx.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163lhsokeqa.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163bzxsjqal.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163lzhcpmll.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163fyjonkrw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163yjzkiier.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163kjvwmdui.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163wlkxzuih.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163uzjhrbkh.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163stpojfmx.html

namespace App\Http;
来源：http://www.aibaodan.cn/163fnbelqnt.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163ekovqykk.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163wvtwcrpi.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163hrpxwcck.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vkzhatls.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163wutlzmso.html

?string $name = null
来源：http://www.aibaodan.cn/163birdqqbj.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163tzphwigd.html

int|string $id
来源：http://www.xuanzx.com/163zjohwpar.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163yxrmnkzp.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163qjkvsxyy.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163tloadzfl.html

public readonly string $name
来源：http://www.xuanzx.com/163gcobemhy.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163wamlxnqe.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163telxbyqj.html


<!-- 参考信息 -->