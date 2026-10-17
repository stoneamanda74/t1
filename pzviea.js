外链999!wailian999！

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163wbmfodnx.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163zasnjkae.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163yjtqmpop.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163dmlfscgm.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163wsxfegzi.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163nzkaqxrj.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ocuyxruk.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163ifnpadhg.html

static int counter = 0;
来源：http://www.aibaodan.cn/163abdqrjwq.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163owqkdeat.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163xvzmuklf.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163cspnecka.html

#ifndef X_H
来源：http://www.sxryk.cn/163bgyuyhgx.html

#define X_H
来源：http://www.xuanzx.com/163xhdrzywa.html

#endif
来源：http://www.sxryk.cn/163hsyxtyak.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163dybprepz.html

#include <iostream>
来源：http://www.aibaodan.cn/163hrwyadlv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163jtndyuac.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163lwkhpnkt.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163nydwgtwl.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163fwzmhjur.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163cvwaskiq.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163hrtoysui.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ylapiffw.html

[S35] C++：map
来源：http://www.xuanzx.com/163hseaohgx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xshaoazy.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163qvyzagzd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163mnecdycm.html

[S37] C++：set
来源：http://www.xuanzx.com/163xlwthmzn.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163djtiewwp.html

[S38] C++：排序
来源：http://www.sxryk.cn/163zgetsedb.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163ayoonhod.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163hhohfpca.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163bbdjthtu.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163eddvzxqn.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ixjsvsze.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163rrotytxq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163xhtazvky.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163xdnxeowm.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163xtaditxw.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163mjayocba.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163nwodoosx.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ujaemrnq.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163tlpkitpr.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163azijejhu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163yxxlqbum.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163qwsbeypo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163owilosiz.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163qrintcqa.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163kjrglzko.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163mobtyysy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163yoxhovmk.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163rczulqqq.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163lgjhklmj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163adilpxrf.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163xtawyvna.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163gfeguxes.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163gjkamwfs.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163wofsifem.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163lrjlvasf.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163vuychmek.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ybuqoeeq.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163uwkjsavg.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163asbstwex.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163ssqdzhen.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163gipbljgq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163yyzgedmn.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163iavawdhg.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163qvgucqqt.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163hwsrjqlk.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163sppftqiu.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163gibfgufx.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163rpmzwxho.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ccmuusww.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163dwnuiykb.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163arxhjmja.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163eazleewn.html

================================================================================
来源：http://www.aibaodan.cn/163bumefldz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163kawjlhsu.html

================================================================================
来源：http://www.sxryk.cn/163rstfgmig.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163ayjfyioq.html

println("Hello")
来源：http://www.sxryk.cn/163lgxcywfu.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163esypwkwo.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163fdudymwg.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163cuxrpetw.html

"值: $b"
来源：http://www.aibaodan.cn/163grfcktlo.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163zoyqofwk.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ptjeoklg.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163qofevnrj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163awrmjaww.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163jkokdypt.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ukhtiswn.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163vzzzgmei.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163xerommff.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163zwbzyesd.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163cclxgcxc.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163pmlohycz.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163jyvkvhea.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163uqoihlhs.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163guiireni.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163uuovbicu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163loymdjtk.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163ryxjzsvp.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163yzctppnx.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163pdlwpokc.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163egfchvde.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163jguglgza.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163nhxfcndb.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163suouycmk.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163aksdtgxy.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163bhmnkqfw.html

print("Hello")
来源：http://www.xuanzx.com/163mqgglvuy.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163rvgcgpth.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163akiwtqvh.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ahjqnmkd.html

"值: \(b)"
来源：http://www.aibaodan.cn/163uqugshgz.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163kagcqptz.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163pfzagcsl.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163yasvloqb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163wlmuxukx.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163soccyqdc.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163sfkkkvca.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163canraxev.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163obuxndka.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163ciwtmmay.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163ewyezzqz.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163xexrysmz.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163ahlogykt.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163movwwoml.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163jqxzktco.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163ficjonll.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163boshcjap.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163jhgwljxt.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163rbmgkrxc.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163kakjyxup.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163zmzwnmvd.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163dxhlgrpw.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163tnttejoc.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163alwbgiui.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163pbhciqyn.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163lcspjmxf.html

print("Hello")
来源：http://www.aibaodan.cn/163bjdgfdal.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163acqqjjmc.html

local a = 1
来源：http://www.xuanzx.com/163blbxnxke.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163bbrjanvz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163lucohvji.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163xhmonzdj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163ypwagcvy.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163mbqigilj.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163rncluuqa.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163sboqwzgw.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163jcixdnjb.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ayqtiszm.html

"a" .. "b"
来源：http://www.aibaodan.cn/163xinsfvje.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163etluktbb.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163ibefhzyo.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163xkvuxark.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163auzvglvn.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163upulqoso.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163cucmaczn.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163gzhduwoq.html

print "Hello\n";
来源：http://www.aibaodan.cn/163acaeskcx.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163azwauupy.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163mezzmdww.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163djgiapra.html

"值: $a"
来源：http://www.aibaodan.cn/163ivjnvqde.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163ouxpbwzw.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163rrjynchd.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163qipshrno.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163rswmsstw.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163llefnrgd.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163jrntvhwc.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163yfzenkle.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163fbaneobf.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163znzsjobz.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163qnxfsicp.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163omurvfgy.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163lwyfwxjt.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163qcvleplj.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163jbjgcvhw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163tsrfmtqm.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163fczojdyu.html

println("Hello")
来源：http://www.sxryk.cn/163ywabxexs.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163xvniuchk.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163cjajhqcz.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163gddqwotr.html

s"值: $b"
来源：http://www.xuanzx.com/163kcvzyjsy.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163jgughhnh.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163gzyvszcl.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163kruflwdi.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163ghztgkem.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163auvblehm.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163hnkkxflc.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163zfdlenoh.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163ifjwrgte.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163saeqkcyu.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163uztmdewm.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163hztbzjls.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163hxidlrza.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163zmmkmuht.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163bxnwuvrq.html

================================================================================
来源：http://www.sxryk.cn/163kuwelcsm.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163rhbrroij.html

================================================================================
来源：http://www.sxryk.cn/163biyrphsq.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163hrabcbvg.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163jkvqgudp.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163rxtobdft.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163kmsadssy.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163qtdzfwbu.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163hdcldimf.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163vnruozpz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163mxwoxqrr.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163ghjzwkmn.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163dslblfgo.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163wtfnzoni.html

{**a, **b}
来源：http://www.sxryk.cn/163veijghbf.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163hkfnodpr.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163eqjdmgej.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163uhnyxcrn.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163oznqzjsd.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163lzftzdus.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163gjawgptj.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163vitglyyv.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163xiopprik.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163ediejfbc.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163hoslpdrj.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163iljhlrip.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163neytkqrl.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163ergpuyxw.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163cbgfeugo.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163xitqzthf.html

defaultdict(list)
来源：http://www.aibaodan.cn/163ipvqskyf.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163exwtzcil.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163gonewqdm.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163hppodvve.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163nctdumpa.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163pjzljtnl.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163werquygm.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163wqdosqua.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163sbtnbfjk.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163banvwdzc.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163kaqbrewk.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163cgitxymd.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163usuacwnt.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163opcvifjx.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163zieldjwp.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163jefheyuw.html

list(zip(*m))
来源：http://www.xuanzx.com/163xvlzlnvm.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163wnvjpkwi.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163jwycjftb.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163ndcbhkeo.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163kdjzctsc.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163xvlnxzic.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163sjuktjot.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163xtcfixmc.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163nmzjckej.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163fedeuzbh.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163zizhhcma.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163avuzxfxz.html

UserId = int
来源：http://www.sxryk.cn/163ypsyhnrq.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163wukhgkuw.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163ogxldutv.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163hlnjrufh.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163zemsvrpt.html

[U31] Py：单测
来源：http://www.xuanzx.com/163scmwbpbf.html

python -m pytest -q
来源：http://www.sxryk.cn/163chltzimu.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163ryvmtmif.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163pofqgqbm.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163ajlahplo.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163oqdbabwy.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163vysfmlqu.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163qpqutpka.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163taxpdzma.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163nghpqzyv.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163yoxwltji.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163cyrxquys.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163tjsealam.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163xtrbkknj.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163wcjlsyot.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163sqnemwxl.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163covpbrei.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163odyuyxbm.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163pmbywiqm.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ryddctiq.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163ihrgqhmx.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163dlaorbsn.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163pqorpqme.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163doxfwwud.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163jctngojr.html

namespace App\Http;
来源：http://www.xuanzx.com/163hmlybgkf.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163raeauzpt.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163hrtmnyvr.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163merfjgyi.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lyxtvqdr.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163lzpchgrf.html

?string $name = null
来源：http://www.sxryk.cn/163eljmqwvl.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163psmoxmes.html

int|string $id
来源：http://www.aibaodan.cn/163qtsaaadi.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163kozucfux.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163sqinopbv.html


<!-- 参考信息 -->