外链999!wailian999！

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163wsbsozot.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ealtugtv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163bckdkkjl.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163xgsxvupr.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ordqqraz.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163vuvpxvmp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163llisuidz.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163siockezk.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163pcjczswj.html

[S23] C：随机数
来源：http://www.xuanzx.com/163rldcfhyw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163muybtlrc.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163qchwsydu.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163bumrgggq.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163encxufjw.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163elhgwrzq.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163icdxhrzm.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163aeizbccx.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163rkbycrty.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163odojzovz.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163lrvfskrd.html

static int counter = 0;
来源：http://www.aibaodan.cn/163epgfyxzn.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163xuxianmx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163jmqoqkso.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163oqxcntzp.html

#ifndef X_H
来源：http://www.sxryk.cn/163tienwevy.html

#define X_H
来源：http://www.sxryk.cn/163uyegzbbh.html

#endif
来源：http://www.sxryk.cn/163xptsbuhi.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163oekekhih.html

#include <iostream>
来源：http://www.xuanzx.com/163fkmtniso.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163bufynsll.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163dhigbnlo.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163ocuqfoyq.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163xlkwvtuf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163qdtgtdgr.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163gjovcvgt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163ougdknhe.html

[S35] C++：map
来源：http://www.sxryk.cn/163ppftwlxz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163fyxnsymr.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163stjpikjm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163iiswbuvl.html

[S37] C++：set
来源：http://www.aibaodan.cn/163cxwjnhng.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163qugkxfnr.html

[S38] C++：排序
来源：http://www.xuanzx.com/163fjwotnzi.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163yzmveqss.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163luolarfx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163okklopel.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163eafvuifj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163rrgdpaec.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163uxmucgdl.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163btaiuflo.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163junrszqz.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163yjjxvuuv.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163lhqbnehs.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163jdpuxedn.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163qheuqwxu.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ralmjjqu.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ssonbgyj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163plnvutsn.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163bpjqrlnp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163fwtgwhli.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163uzritsbr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163avotfioi.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163uhtjmyva.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163vggtrqel.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163bgoejicj.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163uwmadsxa.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163gjtthfkh.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163wvrfpmob.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ffhtlyiw.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163rmqhlkkz.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163ldifnsdm.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163tgtsnrus.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163dsvisaho.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163vwobpplk.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163bauzaffu.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163zmestyma.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163ojhbiipg.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163upxisvtx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163fmjeodee.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163yonuvhbs.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163mrypdurc.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163qvgrdlzd.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163seilxrcg.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163jruhwwpn.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163qkiywrjc.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ovodxcwz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163fmedzsdb.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163gxovudhs.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163axolspse.html

================================================================================
来源：http://www.xuanzx.com/163tbqgrbhe.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163raycnhmq.html

================================================================================
来源：http://www.xuanzx.com/163njhqqtip.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163nnpgptwj.html

println("Hello")
来源：http://www.xuanzx.com/163xahbrams.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163gzeinmgo.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163nakarooz.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163refffdcd.html

"值: $b"
来源：http://www.aibaodan.cn/163ehcjnjbt.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163varafgrq.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163gjnwmrfb.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163lvwjuqie.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163trdfagbq.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ofnktgwy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163obffjzri.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163fzsviidk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163zrwmnipv.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163htrnxyoa.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163oaeiftzs.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163vxuayfbe.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163fijlvine.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163iyhnghmu.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163vehynwyx.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ghnthwbb.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ffebndpv.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163yxrqgklv.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163jazgbrcr.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163topogmff.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163idrmxpsq.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163zfmibmaq.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163soxrffan.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163ybixjyqm.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163aeixjhvu.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163jglgjomu.html

print("Hello")
来源：http://www.sxryk.cn/163usyxaqmg.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163rbnxvrnl.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163qeytuxdt.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163tqfkfcoq.html

"值: \(b)"
来源：http://www.xuanzx.com/163kpezahoh.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163npylpynr.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163qjacnsoe.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163rxsauhqw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163mtvptkzt.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163dkntkpxu.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163fzydxgzs.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163jttstjuq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163vgxxghop.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163bninlqdm.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163qzskefig.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163wlfcsnbr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163iwqvprwm.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163rqpyqrwv.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163jlwufiso.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163ovasmjug.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163slsmklbk.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163zrofapob.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163dwphxraz.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163kylahhdc.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163ouvizpzl.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163pywoghoq.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163qdyvampm.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163njpyfkgs.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163epldfrvn.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163nawrotar.html

print("Hello")
来源：http://www.sxryk.cn/163prquecoe.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163zmbhbdbn.html

local a = 1
来源：http://www.aibaodan.cn/163kzjkwrgw.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163wdtjpgnx.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ayyxttes.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163bhoncysp.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163aqnamssw.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163cnvnqnmi.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163fvsbjjcu.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163lxqjirge.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ollaxtem.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ddnlyctc.html

"a" .. "b"
来源：http://www.sxryk.cn/163gjtgbybp.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163aboiqkti.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163aepzzdsy.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163acuifdln.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163umkmkhyf.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163lbakdsek.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163vnlhglfn.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163mhdhsxzl.html

print "Hello\n";
来源：http://www.sxryk.cn/163gixexbsa.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163atytisdl.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163cvdtmaix.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163xnhtoodv.html

"值: $a"
来源：http://www.sxryk.cn/163zmlppcke.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163uackgjxt.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163mcwantce.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163qsomvnfz.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163kmoaprix.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163xqrbpgwk.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163zdbjaaqq.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ynkdovuo.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163thcvzjkg.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163uattpgey.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163fodczgcp.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163pwuttqgg.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163oztdnnqc.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163ydwfdjsa.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ovlkqfrn.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163lxaubfew.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163jcyziaxz.html

println("Hello")
来源：http://www.sxryk.cn/163ixgkbksa.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163ljugfhqp.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163gopzvqad.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163xxyhoydq.html

s"值: $b"
来源：http://www.aibaodan.cn/163ybritiox.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163pctrgwqf.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163zqgimtmh.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163fsrgnhtv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163iizctavl.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163zeqofenf.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163oyxgxoqc.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163sgtqjzot.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163viohkxuy.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163hxkasxbm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163bvuzjpsn.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163bhikeutf.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163yfddaeff.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163kwfmofji.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163vpmmjggp.html

================================================================================
来源：http://www.xuanzx.com/163briiatbl.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163dwzfyqll.html

================================================================================
来源：http://www.xuanzx.com/163pwsnyctc.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163errywuxw.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163rciczszb.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163eftbqtkh.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163xuykyutn.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163rnpglnqu.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163trjieclm.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163klwjyado.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163ujosqmpm.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163wbvzerzj.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163arryrjyz.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163nfxskqpd.html

{**a, **b}
来源：http://www.aibaodan.cn/163puvpeiqf.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163qytdmzox.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163dwhzrhkz.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163ynjbibwb.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163fzxbkddj.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163targmwne.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163zdnkltmj.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163lkchaxvb.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163zwkfumim.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163gnwmhdcg.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163qghvtkjg.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163gdomlkdp.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163iatxswox.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163nvfypogi.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163udyydutp.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163htugxygf.html

defaultdict(list)
来源：http://www.sxryk.cn/163jetosbsw.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163adxcjmey.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163bkncwsbf.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163pezcrhpe.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163nmymarsf.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163hlunedps.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163ialnezcf.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163hbfgztzh.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163ybbkozsb.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163hlxdeamn.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163ythmdlqy.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ebhjgtfl.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163onxtgppd.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163rpyglemo.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163fdrirthe.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163pjtcigml.html

list(zip(*m))
来源：http://www.aibaodan.cn/163idmaynbp.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163ozgimtsf.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163ycvlsylv.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163xstftmut.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163ilvqdecq.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163hxlzpymg.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163jbxmwujg.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163txrvqjbh.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163vgauvfdg.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163yhvdehnt.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163ecxfxgqv.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163hvtabdat.html

UserId = int
来源：http://www.xuanzx.com/163rwwmennv.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163hmnfotda.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163evngfqtt.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163opyzkxqe.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163hlcqvdgf.html

[U31] Py：单测
来源：http://www.xuanzx.com/163uqudrjig.html

python -m pytest -q
来源：http://www.aibaodan.cn/163lihcyqvq.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163jgryhpqi.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163zifslgmm.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163akknidxf.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163yylvmpsp.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163crcckujf.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163abnnpsps.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163pmtwwqhl.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163qhoxegjh.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163ufhdugbu.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163abgpaphp.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163zwzvbxhh.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163qdnsnbed.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163jsoepjre.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163gxpatplz.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163mpxrijsp.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163wsyxxozd.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163xfjbnbhq.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163icmimkyk.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163wgpvfeoj.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163hlrbqbun.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163bbyojboj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163zzgwurrl.html


<!-- 参考信息 -->