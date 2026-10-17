外链999!wailian999！

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163jtmkytue.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163jjqjesqn.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163xoxxotbc.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163defrdhpu.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163phlsuqqw.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163opkefrqm.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163zlfrxtni.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163lhglxost.html

static int counter = 0;
来源：http://www.xuanzx.com/163qefwtrnq.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163jubmuune.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ocirxnzc.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163utvbeurq.html

#ifndef X_H
来源：http://www.aibaodan.cn/163fdwwcivk.html

#define X_H
来源：http://www.sxryk.cn/163ifjwqtde.html

#endif
来源：http://www.aibaodan.cn/163cennamro.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163muhawpqm.html

#include <iostream>
来源：http://www.sxryk.cn/163apbmzufq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163pyeklahj.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163yolyptjm.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163rxxsmhoc.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163czwrluav.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163mlumbvzu.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163vvtzbtfw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163phnyrpjg.html

[S35] C++：map
来源：http://www.xuanzx.com/163avjgudep.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163tlkuujae.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163zrqdgjhy.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163fumwmghk.html

[S37] C++：set
来源：http://www.aibaodan.cn/163kmntyxdf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163cgekshwc.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163pmoglckv.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163wkaolgqs.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163aocgmzny.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ollmrqex.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163gdgllxhp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163wbndzvvd.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163rtuixwnx.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163jmpyhoua.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ebctnsca.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163fkluafyp.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163wasbjhlj.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163wlygyrcz.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163uzdgxfsu.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163suxemeyv.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163rahcpnyk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163apzamghv.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163nevnrjgg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163dmqwdzer.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163zmktzsnu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163fwnrqzya.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163cgjhvnqd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163bljsnacm.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163wwyimqvv.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163turgydkg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163gjtotezt.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163arajwtoz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163hddgrfuh.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163mixjirtj.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163lixuxajl.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163fnljqnfz.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163pllynuhp.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163bvvwkzpz.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163mztnjmwp.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163twyjvdkg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163jfxdgcky.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163wrnxfnrv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163hzvlwiss.html

[S56] C++：optional
来源：http://www.sxryk.cn/163cvkcdqte.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163lbjjcyhe.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163qmmfdhzf.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163cymtzxuw.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163esxnfibv.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163uvdkimnq.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163dmsjsaxv.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163xfdsliqd.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163tkimofyo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163qpoyrwgu.html

================================================================================
来源：http://www.sxryk.cn/163cfjitajm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163gevstdwp.html

================================================================================
来源：http://www.aibaodan.cn/163npvcobup.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163klatsvik.html

println("Hello")
来源：http://www.xuanzx.com/163oniusdve.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163lcbrbxtz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163gqfhqtsd.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163vqtrgtpz.html

"值: $b"
来源：http://www.aibaodan.cn/163urlvfgzv.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163pnynbvjr.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163txlvxzjc.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163dqfqzdfb.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163tlmldsew.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163nprjzfyc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163dbmrmcgq.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163gngpanvk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163xrkbydvq.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163xsyeppcx.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163thfddmky.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163cvznxbev.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163dnugkjmn.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ihhchwgu.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163dtayiccd.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163vxgzcgea.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163fijtvjrb.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163tlsarxng.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163dwyssggx.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163iyyowrko.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163vvvjocmc.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163krblyqnu.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163wjxobllz.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163wytstjzj.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163jbedbsoo.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163itoayzkh.html

print("Hello")
来源：http://www.aibaodan.cn/163aphcyybk.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163owmelsvm.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163zrfgrwkq.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163lpfdggwf.html

"值: \(b)"
来源：http://www.xuanzx.com/163safgnpbz.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163kzmcrpeo.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163aqjhpbzb.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163koymmkev.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163unizogsp.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163eomohjph.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163cqolgwlh.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163lqywggbd.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163pelxwtxv.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163sqhrwkbr.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163txumunnm.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163iklkjoat.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163cdnskhsu.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163qobwoomj.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163zkfjegqa.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163cfiuhmza.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163qrfgpvrr.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163koyakekc.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163wykvxzae.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163xjfleneb.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163qznjievf.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163idwbfqjf.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163uwjwjdzc.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163yiqhtghk.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163yajfwfpg.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163rbhwyizi.html

print("Hello")
来源：http://www.xuanzx.com/163hcgkfjeq.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163ziiabptu.html

local a = 1
来源：http://www.sxryk.cn/163cnibyjcw.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163axkgxufe.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163lsbzmpwv.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163czvtibrl.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163zplayeni.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163snfvvggh.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163bpunmucv.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163tildzypl.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163jcjertgt.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163ubxabihg.html

"a" .. "b"
来源：http://www.sxryk.cn/163jbejtszx.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163flyinhiu.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163woijfiyv.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163todbjmzm.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163pufgqqje.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163itmaequc.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163khyprluk.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163tdfwjtke.html

print "Hello\n";
来源：http://www.xuanzx.com/163qwcnwxow.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163uxdbwayd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163gkmiripd.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163tpjvzkxm.html

"值: $a"
来源：http://www.sxryk.cn/163iprjkdqs.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163dugekkrp.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163hyavbotz.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163zehtpoin.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ptfmhjpf.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163xpeutphl.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163mwrupium.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163rrkgugrt.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163aanadfza.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163dgvxljrb.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163xbnlixri.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163sairujix.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163xgbrbgua.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163ysrxpeyg.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163suiogrre.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163fyzgdhfx.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163dyxevjmx.html

println("Hello")
来源：http://www.xuanzx.com/163rsndlsvk.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163kofmxnhw.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163mjoqrhbs.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163mxkevxtv.html

s"值: $b"
来源：http://www.aibaodan.cn/163iqkhcuok.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163csjvqhya.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163zjqjbysq.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163qtaejfod.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163lwlywyou.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163uqhelxec.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ryicbqcy.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163oxrxbdui.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163cojjehbl.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163wltyznxp.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163aqlmpmvh.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163fpphtlaq.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163gjfwnmix.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163sdrxpymf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163ijbhmzqo.html

================================================================================
来源：http://www.sxryk.cn/163vdagibmc.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163zrwwqrgn.html

================================================================================
来源：http://www.sxryk.cn/163cjdzohck.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163bmhfojlf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163edddiovt.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163tbyihksg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163iaxusstd.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163amsjffrw.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163qbayitiy.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163mbdritbm.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163mlelfbls.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163frdueknk.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163blhxcbpf.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163jxyhhcur.html

{**a, **b}
来源：http://www.aibaodan.cn/163qkgvbqdh.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163hblwkzyu.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ffyipiye.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163fjxczcjv.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163mzislcmo.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163qotcnbcf.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163ouhzugvv.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163vngepjcx.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163ozjilqhm.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163xkwshtmy.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163hruyuabc.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163myfvwfcs.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163xxmkjmpr.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163eldvevre.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163nxiguxqr.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163nphqngya.html

defaultdict(list)
来源：http://www.sxryk.cn/163cmtcygly.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163ioxdvpen.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163wjikgzia.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163idcipbww.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163vwnhlyay.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163ynhhlcrd.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163ovvcalfm.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163pxktuchx.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163gflsoctq.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163uegjmxkd.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163lfscypvj.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ywrhxsay.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163mebzmrge.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163gouhgdty.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163mibhyoac.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163rlnjzemh.html

list(zip(*m))
来源：http://www.aibaodan.cn/163acnegppi.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163jbkvdbtf.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163iqekcuaj.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163jcbbeamd.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163qblwbieq.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163jgcvpmjz.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163zoenxqkh.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163thdbepni.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163odaglntn.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163lgrgwowa.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163klkhtnog.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163pqhtjdkd.html

UserId = int
来源：http://www.sxryk.cn/163btbfiwkn.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163xlzfwzom.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163ycoliezp.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163xldrresa.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163lhoirlcz.html

[U31] Py：单测
来源：http://www.xuanzx.com/163knmbpdkp.html

python -m pytest -q
来源：http://www.xuanzx.com/163yodglbua.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163nifgmkys.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163vxbogetv.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163wuqdvhsq.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163kgrlrbin.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163luowoacm.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163lroxlzhk.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163hxepsoqa.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163vxoufcvq.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163xcisfzey.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163fpuhqejx.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163tfvmpded.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163grymjtgr.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163vwkloyzb.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163mmatwzsz.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163shvmqjrq.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163sgatzghj.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163xuhquyoe.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qvioqxee.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163iqedztfz.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163quqzrqil.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163pzukmumo.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163uzgcaqvu.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163rejewepo.html

namespace App\Http;
来源：http://www.xuanzx.com/163fvxsmkek.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163azylowvr.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163cgxarpkg.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163xhrtyknb.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163rvzctggn.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163ciuobvtu.html

?string $name = null
来源：http://www.xuanzx.com/163subtiiix.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163vhpgopcd.html

int|string $id
来源：http://www.sxryk.cn/163xarobhfy.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163umbgsygu.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163nbogssel.html


<!-- 参考信息 -->