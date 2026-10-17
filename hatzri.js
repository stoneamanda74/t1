外链999!wailian999！

static int counter = 0;
来源：http://www.sxryk.cn/163wjvadcgz.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163nzdbqupy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163vnpnhpgm.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163wbsonhqp.html

#ifndef X_H
来源：http://www.sxryk.cn/163mgfxfvlh.html

#define X_H
来源：http://www.sxryk.cn/163fudhwfyb.html

#endif
来源：http://www.sxryk.cn/163vfvxfldx.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163jiuxpiuf.html

#include <iostream>
来源：http://www.xuanzx.com/163frrvpfcz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163gnnbuwaj.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163yenfethn.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163kwumwjlz.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163kcjgfdkq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ipklacup.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163vtymcctx.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163vfkaagti.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ovskjmxw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163igpppkxl.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163pfherbmc.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ubakgjxr.html

[S37] C++：set
来源：http://www.sxryk.cn/163jkkwmzos.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163rshjmwje.html

[S38] C++：排序
来源：http://www.sxryk.cn/163yasndzdm.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ldekqpug.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163mkncmtkv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163dhrpvysa.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163qvskmtag.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163rczjooyc.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163mnzqgqat.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163rcoyugdo.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163tvtndpef.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163wftpuqoa.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163xsbjwhov.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163infeamjh.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163gengvatc.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163fivqrmmm.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163dthlbzgg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163zdzaqpjs.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163gueglkpv.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163dpchmduj.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163wjknmcvw.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163sdxrqotb.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163tfwjpjzm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163fqhvokqb.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163eqjggnis.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ufewtidb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163jznwdhuk.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163qmhqufpz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163trusgwim.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163fdbednyj.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163nidwfuos.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163hrtxqigk.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163rteeyyjx.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ulmdcfux.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163jzytrgjm.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163gekbvnln.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163jshxbtcw.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163nxkzhwlp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163asqmkyul.html

[S56] C++：optional
来源：http://www.xuanzx.com/163ybyihovi.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163icdaempd.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163wynqrfsi.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163ummjjykv.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163gxuwivle.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163awclttsa.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ywpbclao.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163kkcgxyab.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163lumyfhtl.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163jjilllfd.html

================================================================================
来源：http://www.aibaodan.cn/163uxnywamv.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163psprxqyj.html

================================================================================
来源：http://www.aibaodan.cn/163mhszvtwo.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163xqfhunlg.html

println("Hello")
来源：http://www.sxryk.cn/163foexbpig.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ynfzulpf.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163aesbubqa.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163ceorimfn.html

"值: $b"
来源：http://www.sxryk.cn/163seokjrhv.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163xavjutea.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163blqgheiy.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163morlluht.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163guembkae.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163pgcfvlxu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163rvvlisav.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163segzvtqa.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163vitwnuwf.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163cjsoqbkv.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163pgonkrwu.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163appmwfau.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163kwldmobz.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163sndmlasq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163vjjjxqeu.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ntwynovz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163uukkowpk.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163ietcwzaj.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163alrlbjth.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163nnxtuqha.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163ubjwyjej.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163ffftkkig.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163qhcvpmye.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163szlagcgp.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163xerjloqu.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163kshmkhgh.html

print("Hello")
来源：http://www.sxryk.cn/163kdbrbjdr.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163dqgltduc.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163lrstjram.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163ewziwurf.html

"值: \(b)"
来源：http://www.xuanzx.com/163tvyjytwr.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163okinivdl.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ztxehozp.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ultgocup.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ocqwadeg.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163fljlkkbj.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163mwybdkrh.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163idvwgcnt.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163exgcyoqw.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163xzamlpre.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163oifxdzel.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163wwqboeai.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ndjjwlkg.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163darhzdsu.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163qtfkjgwf.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163lckmtdqt.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163fnjphzdm.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163ysqqndrq.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163mzgnshgf.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163vchyzwde.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163toeqvqch.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163jndwyxon.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163nugshmnp.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163glwfunxm.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163foajrmve.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163qegoyxry.html

print("Hello")
来源：http://www.aibaodan.cn/163sikpobzy.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163nyvhwjsk.html

local a = 1
来源：http://www.xuanzx.com/163ncdurfym.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163xrodrayf.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163teyquxud.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163yhhkwhys.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ppfdudwi.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163owmckyjs.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163didempwy.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163dsgewknb.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163paabhutt.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163busvoswx.html

"a" .. "b"
来源：http://www.xuanzx.com/163wrigwjvz.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163hqsatldv.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163xabczlgq.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163kqgljefn.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163slbvyghj.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163idtylluz.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163ujvwyoib.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163inxemuyl.html

print "Hello\n";
来源：http://www.sxryk.cn/163sggqgsfc.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163tlnkplqw.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163fzncukxm.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163spgueatg.html

"值: $a"
来源：http://www.sxryk.cn/163mezynskv.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163pnpuasph.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163jormnwtu.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163vaqdpxii.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163nvjwtodq.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163jzhlxewc.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163fddmvojy.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163phggqzfk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163paohgpqb.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163khhmivbw.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163pajihgvl.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163yglcybbb.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163lxgyirno.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163qonxgaxl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ouhfdhsp.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163ulsriydy.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163nanhotmw.html

println("Hello")
来源：http://www.sxryk.cn/163tqdidtvt.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ehohfpwl.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163owmetjax.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ajlqfvdk.html

s"值: $b"
来源：http://www.aibaodan.cn/163dpygairr.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163emmeqves.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163liehysor.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163xjbbqvdi.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163qqdewbjd.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163cshzeigl.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ciqooogs.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163atsrafzy.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163mjodqiay.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163ydoasmxw.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163urdeuajs.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163bbuuzgkc.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163abgpwhxu.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163mugmlqfu.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163hcgoxbrx.html

================================================================================
来源：http://www.sxryk.cn/163ecaqiyqo.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163lcshijaf.html

================================================================================
来源：http://www.xuanzx.com/163cqkkopfz.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163pmjsfrtx.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163htfqrdmh.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163hkdcbpss.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163tujmimkn.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163mierwmmf.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163oldnoahs.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163sqrkyalh.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163visehkef.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163siabxxcg.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163nexyocqz.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163ljwpcaha.html

{**a, **b}
来源：http://www.sxryk.cn/163mmzmdpod.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163varbefgm.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163dqxcugtf.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163qoufpltg.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163fwpcjmnt.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163ebwltoqx.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163nadqgkhi.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163ivielxxp.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163gukhpxrp.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163ddarnkxu.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163qpisdzib.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163xvnilvpv.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163pyvatidb.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163rowocfiz.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163fgenjado.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163tuljpwig.html

defaultdict(list)
来源：http://www.aibaodan.cn/163fnpdorsz.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163ycevwdvg.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163eraizifm.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ugdxzfky.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163pdvbihib.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163smvurwzd.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163tkjtrsiz.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163vwclhtbg.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163lnrzacae.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163akqbcgbi.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163guajfxja.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163askgjwkr.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163lhnppfha.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163ulxvjqxj.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163nevvmnwm.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163miokafxc.html

list(zip(*m))
来源：http://www.xuanzx.com/163enlpplts.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163jacihqek.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163wxnrwlzq.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163mnlvuftj.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163frtnydjw.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163qbghbbgs.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163qevhvzqx.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163ilqyaezu.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163hdaqtktg.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163avppkmqz.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163icxwmsiv.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163dscdcrxt.html

UserId = int
来源：http://www.aibaodan.cn/163zskchdft.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163agzifiyq.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163xljpbbzn.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163lggvmmdi.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163yfkrhgfd.html

[U31] Py：单测
来源：http://www.sxryk.cn/163tlszvlup.html

python -m pytest -q
来源：http://www.xuanzx.com/163eumziyau.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163pspegxrb.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163jzysuslq.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163gmwwgphp.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163sffcerfy.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163ubrlslyz.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163hrozdvnw.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163vrqzrnwe.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163vijhypkq.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163rokorevr.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163kxhubgxz.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163ssnyafij.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163szwmtjha.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163lghudgbg.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163duxoovlr.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163dgqdqlkc.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163odppqbni.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163ivkuqqai.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163elnepmjn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163jvvmsmva.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163macxvebk.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163jovidixp.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163izoscaqx.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163dskmwqqk.html

namespace App\Http;
来源：http://www.xuanzx.com/163lowbijbh.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163azwrxwze.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163mfwnlpex.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163idmftqbp.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163iozsrody.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163asryifew.html

?string $name = null
来源：http://www.sxryk.cn/163yyqwrzer.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163uehucfcr.html

int|string $id
来源：http://www.aibaodan.cn/163xyllkfzb.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163zzpzbsug.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163treedbsx.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163keictigb.html

public readonly string $name
来源：http://www.aibaodan.cn/163rxvfvjrd.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163lcbidftd.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163nqgdrmtn.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163vjlmcart.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163towvtati.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163whcfgfer.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163oijeojfz.html


<!-- 参考信息 -->