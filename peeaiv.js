外链999!wailian999！

#ifndef X_H
来源：http://www.aibaodan.cn/163resfbysc.html

#define X_H
来源：http://www.xuanzx.com/163phfsdabb.html

#endif
来源：http://www.sxryk.cn/163dcvpnsqi.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163whbwkhne.html

#include <iostream>
来源：http://www.xuanzx.com/163iptcdyta.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163qvxcgdtw.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163mjavotsk.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163mzbfseaq.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163uahsdfkc.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ajswobhx.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163ffypaytc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163eyhbykhx.html

[S35] C++：map
来源：http://www.sxryk.cn/163muisimnr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ulncxgpm.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163maqyuere.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163pcychgfy.html

[S37] C++：set
来源：http://www.sxryk.cn/163iffsvrqf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163zieljklx.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ipmqmzpz.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ihcsrnuf.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163txypnqvf.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163dnbimfem.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163hsifqlhl.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163qkmfhatq.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163uwpldlwz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163vcpxbrlu.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163saiftynz.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163rispdywo.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163epwnfbzd.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163wdlognnj.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163sacfpopl.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163rbovxboz.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163kcknusfq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163xwtintua.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163icfozmwe.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163gvlvcacg.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163xfdpmgml.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163pwcxxxzw.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163tpwmtsmw.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163skevtzfx.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163eorlljfc.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163evzjhtnm.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163wyvxzvik.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163xgozsoum.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163lcoswfmx.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163cqdrgbno.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163vwkgccja.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163axfihnnp.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163sedgnanw.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163llrlkkjk.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163hkmcghkz.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163qnfqshgs.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163qgfilmfs.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163omikqikg.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163fhklybop.html

[S56] C++：optional
来源：http://www.sxryk.cn/163igbfanop.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163fhtozvmc.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163xjihahbm.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163jnvhgqdg.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163onxaxpwb.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163xjhszxxw.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163jojutgdw.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163nbhrzjgi.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163afbsfhdo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163zznieucs.html

================================================================================
来源：http://www.sxryk.cn/163kcrgtlej.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163mopaieyv.html

================================================================================
来源：http://www.xuanzx.com/163cyswytws.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163utwltgqy.html

println("Hello")
来源：http://www.xuanzx.com/163txuzrrxq.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163wzdyhjif.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163jjccgjfm.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163bhzrpfbo.html

"值: $b"
来源：http://www.xuanzx.com/163mdgoauld.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163wtakwget.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163adplqcwl.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163btnzdgjk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163xrhaqnvm.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163nlpdrbgv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163muxjauze.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163dbkzokxl.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163qleyocch.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163amcdduvz.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163wesmzsgs.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163lfkjgaen.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163mkjlrkws.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ewyzecnk.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163ioycexjp.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ipkoalos.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163zpadwhsw.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163qalczmow.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163dlgodqpu.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163obfvdpmw.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163pqaoywkt.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163kkhewixw.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163tffzkcxz.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163ccgzjzen.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163fzupuiqk.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163udqchlgc.html

print("Hello")
来源：http://www.sxryk.cn/163rhsmqfbz.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163bvreffkh.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163mwbhahgd.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163yxtuqxli.html

"值: \(b)"
来源：http://www.aibaodan.cn/163otdbqskp.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163pxdqtfhy.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163ezimialu.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163perxrkgo.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163hxqmbufk.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163gfagwgtn.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163zrprtjis.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163oucittmn.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163cgifzjfc.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163zbkzwhgn.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163mwxrpsdi.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163cmmersdl.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163dtniqhvo.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163cohvqspx.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163osrtlpxp.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163pcfpcvvt.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163qfuiglxv.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163bifhdxnq.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ymnndaam.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163zamdnwyn.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163unyfwgyt.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163aofkazqa.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163zyszzlyo.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163nmftfkvy.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163ckheixwo.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163qltxhgwl.html

print("Hello")
来源：http://www.aibaodan.cn/163xfhzncsj.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163eyirymfu.html

local a = 1
来源：http://www.aibaodan.cn/163hmyhrqkl.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163rdeldrnq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163araydqmx.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163oikpzdmk.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163mzsbvwdm.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163cftryccq.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163pkdrxmel.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163yfgxqihn.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163dpigawhp.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163yvgrjxem.html

"a" .. "b"
来源：http://www.xuanzx.com/163wyzfhrih.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163yqtkrxyw.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163otijlmoz.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163vptjlaiq.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163cvulzsur.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163drfeprtw.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163kgtbujef.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163umjpzbjh.html

print "Hello\n";
来源：http://www.sxryk.cn/163cwuwtrdf.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163jbyyvfex.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163uiixcbut.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163psxrcbjx.html

"值: $a"
来源：http://www.aibaodan.cn/163xygbckdl.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163daordxiv.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163srsewayd.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163fhahaswb.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163zowgsmja.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163fcirepmm.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163jdgnssrx.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163cwpjjgtf.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163kzqmbpqs.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163jhjtaiad.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163xtxuublz.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163jioqtieu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163fqeiedor.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163vowlwjil.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163dgshxdbc.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163qjwiceig.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163zoqtlgwt.html

println("Hello")
来源：http://www.xuanzx.com/163dspgnyhq.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163lrbfxcvx.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163fvpalhfl.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163rrpcsubl.html

s"值: $b"
来源：http://www.sxryk.cn/163bhrikkdg.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163hmbhdqme.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163smllrcyp.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163exjgzttw.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163zjbtifys.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163zgeuarqe.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163tqyxnubb.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163svjxrfqu.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163vlearfcc.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163mxvubxrj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163wecrbnpo.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163ikckizyy.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163oekcbylo.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163vhajoafj.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163ticzckdh.html

================================================================================
来源：http://www.aibaodan.cn/163eyplhghk.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163cdyyhapn.html

================================================================================
来源：http://www.sxryk.cn/163bpfvmtnd.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163mmkgysot.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163amdyanmn.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163glwmsfrx.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163dytdbiss.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163eurwgfak.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163whxpinjw.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163ffedufav.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163tcszigxr.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163bgazebro.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163bbnmsvyz.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163gdhdlqat.html

{**a, **b}
来源：http://www.sxryk.cn/163dkpclnmj.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163iwvnuhgs.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163gvbazqzw.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163xxfajxjw.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163iapsoehf.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163pfhbpcen.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163byxhgzvt.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163xbxbacfx.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163kfsjwvpx.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163uptuxbcy.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163xetkrvbw.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163maimqwcg.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163yzackcut.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163qubkrqkf.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163chznmkwf.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163tjkxnasx.html

defaultdict(list)
来源：http://www.xuanzx.com/163nyrocpjm.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163naqgsbjw.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163jumtafeh.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163gtvupfyv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163outjzqhy.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163hplrodxd.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163uglnitww.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163qtnlvfob.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163iyuvsrmy.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163nrwczioi.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163kaxgrhkx.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163wayknzzb.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163lsvhozlv.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163ubflukpq.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163pldfzmok.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163awykmghb.html

list(zip(*m))
来源：http://www.sxryk.cn/163olduuzbw.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163ocuhunpy.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163drsctfxa.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163qgeesutt.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163rzsejvhz.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163gharibqf.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163jvzaxhbe.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163aeilaemj.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163oktnwzst.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163gahkiivm.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163ktlluwyq.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163vbdthivo.html

UserId = int
来源：http://www.aibaodan.cn/163xynbeikj.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163ojlajfzg.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163pfbcslbo.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163rrnvdywt.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163ndotpump.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163tjnctpsq.html

python -m pytest -q
来源：http://www.xuanzx.com/163ffsnoqye.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163xeksyyvf.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163murcuzbh.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163qnzfytsf.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163sxnrwrve.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163jdqabrur.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163wizgfzhq.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163xszwepyf.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163sxlbrmrn.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163hkrmgmrs.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163pwrgsxcr.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163cznqkcot.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163sqycfacl.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163qgzaolqg.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163bobgsmgo.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163sxsxwqfq.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163qsegejov.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163gkmzhsex.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163olinbqoa.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163tlyncrsy.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163pvqqusej.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163ihimdxez.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163xkkxkksb.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163mvyvrmus.html

namespace App\Http;
来源：http://www.sxryk.cn/163abgczign.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163ljmijrcu.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163glnjoddv.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163lcmmruyb.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163gsbnuyzp.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163cghezewa.html

?string $name = null
来源：http://www.sxryk.cn/163movouucv.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163loqkifpj.html

int|string $id
来源：http://www.aibaodan.cn/163bxeelzxb.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163vyuhuuna.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163uktficun.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163nzpjwcjg.html

public readonly string $name
来源：http://www.sxryk.cn/163jjtszglk.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163piofhknu.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163anqqwnpb.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163stialdwf.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163lubmpshz.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163ojjuiduw.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163jiwocgud.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163pkckyfxa.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163wjjbhoxs.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163jlgwengu.html

$obj?->method()
来源：http://www.aibaodan.cn/163gnumfowg.html


<!-- 参考信息 -->