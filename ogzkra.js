外链999!wailian999！

static int counter = 0;
来源：http://www.sxryk.cn/163zchfwqaq.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163zuiinuvh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163ytqikuwp.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163guhyxvei.html

#ifndef X_H
来源：http://www.aibaodan.cn/163erujqxnc.html

#define X_H
来源：http://www.aibaodan.cn/163mqtkhnbn.html

#endif
来源：http://www.aibaodan.cn/163gbjxdlaw.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163mdykkizy.html

#include <iostream>
来源：http://www.aibaodan.cn/163qcbnbsih.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ubiurlpf.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163jpxtumtw.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163rtrvxkol.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163dguvqdyw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163xbrqtath.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163uqaanuob.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163ygxvijiu.html

[S35] C++：map
来源：http://www.sxryk.cn/163cblpuobl.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163riccifab.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163dacduuuk.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163fjbhuuun.html

[S37] C++：set
来源：http://www.aibaodan.cn/163herjawmq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163cttvztyc.html

[S38] C++：排序
来源：http://www.sxryk.cn/163hjcrlzjf.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163kmbmwumq.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163mokqpdpd.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163ibszqihf.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163csekfgsk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163syasrymz.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163cibmyqpa.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163hihmiwws.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163lgbyywjq.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163pdacicto.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163tyyzrglx.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163zdlxssdl.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163csffesic.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163aovyecvv.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163gifvdusj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163vctvvxkr.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ozybfrzq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163whixvqjx.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163orioichs.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163wcdexofc.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163ljbhbxwb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163wbnmyvsu.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163bwqglbra.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163bfsmaysj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163rkiufqqj.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163mipbbfzl.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163agujndik.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163rzwyszxs.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163raqsqjyh.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163odxzqgae.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ggnmikmp.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163qchjzmcz.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163bzdotddw.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163xvfjodou.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163bgcepkul.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163dhnsepgo.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163auhpkqay.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163goovpawq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ymtrubpx.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163htabachh.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163lautyiyj.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163oudwyots.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163fpwtwfht.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163mabohkyo.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163mrfktlko.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163termmkzi.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163xnrapdjr.html

================================================================================
来源：http://www.aibaodan.cn/163efjveexs.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ebqgxkuv.html

================================================================================
来源：http://www.aibaodan.cn/163fuajimij.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163cfavccpm.html

println("Hello")
来源：http://www.xuanzx.com/163iiicjapi.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163lmsomlys.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163igjckknb.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163znrzmqkp.html

"值: $b"
来源：http://www.aibaodan.cn/163pnvczrst.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163bddvbbex.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163uwdxknqx.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163xsfdairw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163boxkqzwz.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163gzoliibz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163jgwiggaj.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163jboqosfk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163etdqolns.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163esrougsq.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163tbuofdyg.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ezfclxha.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163fzxyodas.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163vagnjtyn.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163hqulrthu.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163vlevmedq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163ekflihyc.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163zgdujtgh.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163dxhhhoca.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163iszquuva.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163prutyqyl.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163markvwof.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163azjaubwi.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163xlqvyvto.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163fpynzzxu.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163gxirdepo.html

print("Hello")
来源：http://www.aibaodan.cn/163xrytdkqn.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163otbdqprz.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163mdswghww.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163zoeouyoo.html

"值: \(b)"
来源：http://www.xuanzx.com/163dwobkjst.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163qokuzrrf.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163iqqvkehz.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163ipsgdowg.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163joyynzqf.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163jtmeswnn.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163pdjhksqn.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163opidkbrs.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163qbbedmdy.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ilqzjahz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163gynwrpgj.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163zioisgdf.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ghumxeiv.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163heeanknw.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163dzxijvge.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163rlqdlwdx.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163xtutsybj.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163kemrzhjh.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ofimqsku.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163jenlvpsg.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163snuukjyn.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163lpyzbuof.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163yzfiaspr.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163qvlswszz.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163anzhyymv.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163prslyqor.html

print("Hello")
来源：http://www.xuanzx.com/163fgtqtovy.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163zbeexcjw.html

local a = 1
来源：http://www.sxryk.cn/163rawtzlci.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163xjezcpvx.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163rfdadfsa.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163saliwgxa.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163sewusnek.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163sxxjaxew.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163haudxian.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163lkqqwnrp.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163gvhgxrzb.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163itlufsxl.html

"a" .. "b"
来源：http://www.aibaodan.cn/163nyvgxygf.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163rhyrvdak.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163kdcxtrog.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ustvbddg.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163dezcubpg.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163oklmndma.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163bjihuajf.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163opwhdwry.html

print "Hello\n";
来源：http://www.xuanzx.com/163qwpvowna.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163igfcarry.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163avabhjdh.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163tzormahj.html

"值: $a"
来源：http://www.sxryk.cn/163nmhvqzwv.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163upikvkle.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163zjczhtao.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163xszcaqqk.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163xrzlzdin.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163bwghyogk.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163rvwrsrqe.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163yysyaafb.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163smyvlhav.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163brgteqgj.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163zhrlxoox.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163myoillou.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163nfgtfuxe.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163czpkcnub.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163dfupohrq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163odipvfai.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163dbnwdlug.html

println("Hello")
来源：http://www.xuanzx.com/163ysctmixp.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163nguhsqns.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163utewdycy.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163byuwcinv.html

s"值: $b"
来源：http://www.sxryk.cn/163sjqlgxup.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163uapnliff.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163illrhizr.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163djeavewh.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163lnqmvacj.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163jaypaask.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163zdwfxhed.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163kumixhfa.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163xqouzxux.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163kuqhzhvj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163ottwawph.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163silqdxvy.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163bgnsovvb.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163gsfmhqdt.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163slhgyeho.html

================================================================================
来源：http://www.aibaodan.cn/163vgpnddzr.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163rhfeqjmw.html

================================================================================
来源：http://www.aibaodan.cn/163ytvfphib.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163gccgsjhl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163msgjbvhi.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163hyyyszin.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163uiwxbbom.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163ivuwphzc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163edrsopgz.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163dennlzlh.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163tejkstom.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163nuucqcmw.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163xagawgxi.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163lmzthsab.html

{**a, **b}
来源：http://www.xuanzx.com/163wawurvpi.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163giewzoqz.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163fomiaexj.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163djqhmwdb.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163ayeysiht.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163iweelegr.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163ikzbcohx.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163szdybseu.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163tsylxoms.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163lyaagxdx.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163twxbwxhh.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163beoffipa.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163mfgdiybr.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163dalvaenq.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163qsvpquwo.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163odivummw.html

defaultdict(list)
来源：http://www.xuanzx.com/163uylmnmyj.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163ntoptvph.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163yjuakekp.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163jdhfwnjs.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163gustliyy.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163hcxxvqej.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163abmkxhln.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163pdkapegt.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163dmgpavfa.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163jvtkrepz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163lecivysv.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163ohrevmqa.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163zzskwhym.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163apdlldag.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163djvpcxbf.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163oudzipgg.html

list(zip(*m))
来源：http://www.aibaodan.cn/163yfhsgcwq.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163zdckfrpj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163pwfryshk.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163bguvihlv.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163dgogbwgu.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163ntyyonxl.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163bskyqzlc.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163tndhploz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163oiywajjd.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163jfoaxezi.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163zvyrwpdt.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163mfjxjclj.html

UserId = int
来源：http://www.xuanzx.com/163zbjwmenj.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163ofxtnrzm.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163pejidnfl.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163txdxfoxd.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163pqhmmmgo.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163kkoqqhyf.html

python -m pytest -q
来源：http://www.aibaodan.cn/163imwxxkpt.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163gsrjvtoy.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163lsxbxcrl.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163nwzigccg.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163lcnnftdu.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163ehkxvzqf.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163fxwzywsm.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163mbzwqaxe.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163ccjlazpm.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163giybdkif.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163xqqengab.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163acgyxaeq.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163fymqeqhl.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163dqlageua.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163auzbruxs.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163qzcfvvmr.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163zrhupsyq.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163bwjqoubb.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ztrcbfvs.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163ngouqktx.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163fjityutj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163znqymvwo.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163eahwnooz.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163apppbhan.html

namespace App\Http;
来源：http://www.xuanzx.com/163eelzssea.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163viujeztk.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163rlyuwqyk.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163eozzfndf.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163vcbsatfq.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163zhzachsh.html

?string $name = null
来源：http://www.xuanzx.com/163qnwfadhf.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163iibhxhfj.html

int|string $id
来源：http://www.sxryk.cn/163reiezrwe.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163ujmbasux.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ytxiyjbc.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163umegdljx.html

public readonly string $name
来源：http://www.aibaodan.cn/163abvwcplg.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163qsjgnfgx.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163qdkagwou.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163yzwghaps.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163xxzdcfmy.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163rkvyukxa.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163qoyqmfkl.html


<!-- 参考信息 -->