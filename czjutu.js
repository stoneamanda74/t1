外链999!wailian999！

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ejzdjzvy.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163mlkbpdie.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163twbsmzgg.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ssmrcldy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163pubdbtgu.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163fdnmcqks.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163gonbnzqc.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163jqntywoq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ifehlyts.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163cpxdutlo.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163tcscyplu.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163irvzrcxu.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163enfmepxz.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163uhdaaiqg.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163hzdeitmq.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163jocodbjb.html

static int counter = 0;
来源：http://www.aibaodan.cn/163jskseexp.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163vbatkbhp.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163njcdskir.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163yqyzvtng.html

#ifndef X_H
来源：http://www.aibaodan.cn/163hgrqnuws.html

#define X_H
来源：http://www.xuanzx.com/163qlgrugwb.html

#endif
来源：http://www.aibaodan.cn/163kcjnwilf.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163mwvtpwwt.html

#include <iostream>
来源：http://www.sxryk.cn/163nhajwggp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163nbvdmdzr.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163bcxelwrh.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163qurkoetm.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163komzjmwj.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163lnsysvyp.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163dcdeuuus.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163nhkdgtrc.html

[S35] C++：map
来源：http://www.aibaodan.cn/163solzxcpz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zbnlbout.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163saenvces.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163fizbnkrh.html

[S37] C++：set
来源：http://www.sxryk.cn/163jkxunroj.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163vgbesjnh.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163rcdogwxl.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163pascajib.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163tdixozdl.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163zicpvdlw.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163vckmqhvl.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ickmcfdv.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163irhpdliu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ylkkcbru.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163teztkwfr.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163zkxorodf.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163uqwcodsq.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163timpaqkn.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163djaxfwzb.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163tniabyqd.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163aihlbzim.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ovazngdv.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ilovokxt.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163qvulaodn.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163yqxsykej.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163sbsmnwqp.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163kjotvclo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163rvoclohn.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163oymftclz.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163xkmmqkoz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163dnkkdnva.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163arexleby.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163mriztqnw.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163mdobwrzg.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ihbnhoyi.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163nlqjridf.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163xersvgkh.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163fazlushe.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ctdjyjhb.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163nceupaqz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163kzhyeoiw.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163xzurfcen.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163czzdswyq.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163tbjdypjl.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163scllbdky.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163jlrhylyj.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163bldctvrz.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163qjqjlxwn.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163hiwulnpn.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163gqsyueau.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163dtxnniho.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163jcnemydy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163shpfnoab.html

================================================================================
来源：http://www.sxryk.cn/163nvfuozmf.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163irbujtyq.html

================================================================================
来源：http://www.sxryk.cn/163afpxajgd.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163shadqekh.html

println("Hello")
来源：http://www.xuanzx.com/163zspsxplb.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163zffmcmlu.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163emdrucpx.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163lgbccsit.html

"值: $b"
来源：http://www.aibaodan.cn/163vtllcxxq.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163tqfrymls.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163fduionsn.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163rvmiqlnu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163tizwjbzv.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163jnddcori.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ffhwjjmo.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163zqkdjwhw.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163iibefrjw.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ebtvkpjt.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163zeembwmk.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163bikemual.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163mbkyyirs.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ufttvcsi.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163sptnzdic.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163ycabwytd.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163hptyjkid.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163tthaxock.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163jfclemjh.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163bzqhcgns.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163dqufnhtn.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ufrjahbu.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163dieadnmv.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163vaiaqask.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163qtnsfszq.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ltwuepzt.html

print("Hello")
来源：http://www.aibaodan.cn/163vqjtqsfk.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163ptvspinn.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163hitwzpiu.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163qvvspqnj.html

"值: \(b)"
来源：http://www.sxryk.cn/163cwbutcrr.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163bogpjhdu.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ufoexxqt.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163irmsdrnw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163rgbfyvpz.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163nzpfwkjb.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163krgfttqe.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163gyzmgrqy.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163gmhtaimd.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163iicaoykr.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163ckazqhrc.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163fpszoops.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163kmkyjwot.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ztgpihnu.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163qujdnzfn.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163cncyhpdh.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ekdjdrom.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163sggqnvxj.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163rmytntrp.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163irgorifo.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163dulphhmm.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163vpcdlugo.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163bhmgiflb.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163bfhaddug.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163mhnwskyl.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163inoyrjmr.html

print("Hello")
来源：http://www.xuanzx.com/163smljordp.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163vxwivdkb.html

local a = 1
来源：http://www.sxryk.cn/163pwdsjesd.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163jwklrmjg.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163esdrdylz.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163kdhouyzf.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163aqubngvn.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163cpfrnbep.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163pmbsrtkf.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163gucdlicx.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163ysgnhroz.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163ldbuifar.html

"a" .. "b"
来源：http://www.aibaodan.cn/163uymfothk.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163dawpllso.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163vqrvcscg.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163aadxecqs.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163modmynkf.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163cyytepnf.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163rdbawjjt.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163loskpkom.html

print "Hello\n";
来源：http://www.aibaodan.cn/163beixidek.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163fapxfvxy.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163ulgcnftg.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163amgrgcyz.html

"值: $a"
来源：http://www.aibaodan.cn/163wuacvywj.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163rrgjsygl.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163aroxuzxl.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163mguaspuw.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163wzobxrcw.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163hypdzlvg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163tdhrhcoc.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163diohvhpu.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163vcpcjzvy.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163xmcilhwl.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163btysafki.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163tzlylpev.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163sseajtbp.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163ocwjwgnn.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163rwxbdyuf.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163fmymzdpf.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163huwznolq.html

println("Hello")
来源：http://www.aibaodan.cn/163hntjscub.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163keucebts.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163oprtaflf.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163tbessbvf.html

s"值: $b"
来源：http://www.xuanzx.com/163uukizelw.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163qvnxbqad.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163noqhlnne.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163irmoipby.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163dlxrdmls.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163szgwprof.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163pcwfrbdf.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163bbnvvjag.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163rbmxkdta.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163xdaxmmxw.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163wjejlecb.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163jjpecfbn.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163yahkmhad.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163jgsovcen.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163gxvsssuv.html

================================================================================
来源：http://www.xuanzx.com/163cebvpdvd.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163qolzhxab.html

================================================================================
来源：http://www.xuanzx.com/163siorgwrg.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163uznviiwf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163haiifnid.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163oenkprpt.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163ypvfucvf.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163skqosdcl.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163suvxbmlj.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163ukodnlwd.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163wwwpeeab.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163dqskuidr.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163hxnkgqch.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163klelmzbk.html

{**a, **b}
来源：http://www.sxryk.cn/163xkynptss.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163czfsjydc.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163povxbtwu.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163hydjupws.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163gnhtszcs.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163sozcnspz.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163vlyengaw.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163flfsefpu.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163qzpldxmz.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163hyelkrlb.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163pbfxrnnf.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163mgzhzyow.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163ufbugxdi.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163kynsalyi.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163kkgcgypb.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163zsbezxde.html

defaultdict(list)
来源：http://www.aibaodan.cn/163hmlobhlw.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163zylleyuf.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163wsovpvok.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163dlektzlt.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163btyxatly.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163fumdeyho.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163cghfxzoj.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163pstyirkv.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163udrdqjrw.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163hyegfiod.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163rmmhjqho.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163jnnwkmxm.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163hpxlfozn.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163wzdlxlww.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163mfdczeai.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163iwanqfqv.html

list(zip(*m))
来源：http://www.sxryk.cn/163rmyklccd.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163hrouqdou.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163pmuxxzrv.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163dixcpohz.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163myhhngyw.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163wirboini.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163bfxdscik.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163utxvlhik.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163rsfyaesz.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163xnkjgeat.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163zjsblrsl.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163eogfloig.html

UserId = int
来源：http://www.sxryk.cn/163kynohgrh.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163wrynpvjh.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163lonxbsaw.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163vuvzyqbq.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163tggqmzel.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163lvadmlif.html

python -m pytest -q
来源：http://www.xuanzx.com/163hubddlal.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163nrkqempj.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163zdwvbigt.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163tapczous.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163ekdjcbsi.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163wzcdpluc.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163wxalwwum.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163apybmvsd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163whlchnxy.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163sephlgqe.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163jawogecu.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163dypzaepe.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163tuefonlq.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163bagxrphw.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163ksyjbdrc.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163qvmtnbrk.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163tnruxrzs.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163mwgieozf.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163mvnoqnaw.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163kelgughh.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163iomspkyg.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163euitrvxo.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163lzaffxkg.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163wgziizsm.html

namespace App\Http;
来源：http://www.sxryk.cn/163ezauovns.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163dldqzklh.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163ekvmvyqe.html


<!-- 参考信息 -->