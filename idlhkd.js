外链999!wailian999！

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ndtbkcsl.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163xxqsgbru.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163fgjbsacl.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163svxxmsro.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163mqyqqxaz.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163apmtwimz.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163pwceyhdr.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163meicslpm.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163liatclcz.html

[S23] C：随机数
来源：http://www.xuanzx.com/163eocufctf.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163djjvjnqx.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163qjbhkfkb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163mfwyyvpb.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163nfyzedbx.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163acumlmcy.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163aaxltpzf.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163fquqnrpz.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163fdgnykcr.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163exauyolc.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163yrajbeto.html

static int counter = 0;
来源：http://www.aibaodan.cn/163wjjuqpzc.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163mjgrjvgi.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163czzrclof.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163xfxwmjrd.html

#ifndef X_H
来源：http://www.sxryk.cn/163mnkwovth.html

#define X_H
来源：http://www.aibaodan.cn/163estqswwj.html

#endif
来源：http://www.sxryk.cn/163krlbmjgm.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163jcixjjur.html

#include <iostream>
来源：http://www.sxryk.cn/163vmbrovnf.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163bherrbco.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163iugepqpj.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163gkidrjpv.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163orpfwilg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163zsxjxezi.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163cqbghlub.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163vbcnzviw.html

[S35] C++：map
来源：http://www.xuanzx.com/163gsdiuujm.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163xvvkbnqc.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163kudptywt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ibflxwpe.html

[S37] C++：set
来源：http://www.xuanzx.com/163tcblgdmr.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163qylvnzhm.html

[S38] C++：排序
来源：http://www.xuanzx.com/163kztgbham.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163lcvfwndg.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163psbqulef.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163bpnoulno.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163rjcfoktm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ozajasan.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163hnsydtne.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163rhhsjqmt.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163npmzbdud.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163fqtfzdnn.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163wgzcdwer.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163wcaoviyy.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163sdyhyeoi.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163dejfkkxn.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163glgkqnuy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163mojccemx.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163vvrhbgxk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163fnohsigz.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163fyujtdwu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163cnftwcfc.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163yulvbwkw.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163icycjknz.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163tnoadwbz.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163hmeivrib.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163bmoflppx.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163kcllzhrh.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163urbpbvtp.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163rxnetbhq.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163vfffcfri.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163nnggsfvi.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163ctvlbuvl.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163brspjhxx.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163gjlvwjck.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163jxcrxsbx.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163rgwwwbql.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163rbzychpj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163nodrijhc.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163rtuujyfy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163mhizahsl.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163iepuuvyp.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163erfwtoki.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163mlticreq.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163wcwnfksd.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163wewoxaho.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163xakqurdi.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163uobmndfr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163kzxmokno.html

================================================================================
来源：http://www.sxryk.cn/163xbsysrhg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163yhbeljpk.html

================================================================================
来源：http://www.sxryk.cn/163jbfsnnyp.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163nsahpprr.html

println("Hello")
来源：http://www.xuanzx.com/163sjsoytol.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163iomejuac.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163bkbxxvvl.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163rcdvwydq.html

"值: $b"
来源：http://www.aibaodan.cn/163dgwpvnyx.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163tudtygud.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ylofvdvw.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163sbizcflq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163thhirxty.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163jquevknz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163zunfcyau.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163pcqiztnd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163fbyyjovk.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163yspfkaga.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163vcxdfebb.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163qvnzflhq.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163isiwgytk.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163mnlisvqv.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163rtbiiuar.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163veijntfv.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163zdbqbsbg.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163hzykdivk.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163pzvvywyd.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163dlkuymok.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163haotqryf.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163eeypxzvr.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163xejtxrpx.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163jttwypzh.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163ejxvtged.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163zkbewpkq.html

print("Hello")
来源：http://www.xuanzx.com/163btumcjrk.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163rxbwosjh.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163lhxvmtzw.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163atbjeydx.html

"值: \(b)"
来源：http://www.xuanzx.com/163hgueqhjw.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163upkubixl.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163vsfrcwsx.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163snmvsibj.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163hfmmdbdg.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163aheygryv.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163umjmsxnr.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163detlkdri.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163qdtbvwko.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163uymbbjxc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163tmegjkzs.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163xqqsmhki.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163ukupptzs.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163trmqgyke.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163nomawwct.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163hcxgzjke.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163juoxlisy.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163cfadcawp.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163jpguqlgv.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163rmiweobw.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163xaddarum.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163itthrllw.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ehkbcvsq.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163evzufbzu.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163nfkcryop.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163bilwxjoz.html

print("Hello")
来源：http://www.xuanzx.com/163sbntrxea.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163suwdymcc.html

local a = 1
来源：http://www.xuanzx.com/163adpwstgw.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163vajjynso.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163jvppkcjb.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163ztbrnvju.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163axkcegto.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163nuzuhwui.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163ydhyynrv.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163pkrqaeqg.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163kyoahjgs.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163vqpnwxuq.html

"a" .. "b"
来源：http://www.xuanzx.com/163urfafqes.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163nzlnlmqk.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163uoevigxz.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163dufjznla.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163grlhhfxm.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163xbfumudp.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163dzmxnjqe.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163wnfiopuy.html

print "Hello\n";
来源：http://www.sxryk.cn/163fkhebfwm.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163grqxyrmq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163pgrufdeo.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163itycjjla.html

"值: $a"
来源：http://www.xuanzx.com/163kqbjbqau.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163crcmmzaz.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ddeogiah.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163asmhcqgx.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163vylbovby.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163tuypqqzh.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163rgwfscpb.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ueeklnhi.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163ygwrzzbt.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163bfhjjnje.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163djwufzep.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163hrtharnp.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163ywgcxeru.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163sxzncdsn.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163gzyxctyd.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163ciemqcxj.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163lykdnuwm.html

println("Hello")
来源：http://www.aibaodan.cn/163bmhtgenr.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163yvvdaytq.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163mzqsmdje.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163arnkcqtt.html

s"值: $b"
来源：http://www.aibaodan.cn/163okqwpjtw.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163swpaimvh.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163rrignbpz.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163jyzrfvta.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163ymtiitko.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163lwjxluyt.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163dgpgavgf.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163yjkvtrlc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163pdmzuprk.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163foxcclxz.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163khqcemxp.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163ugreakti.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163sldzpjzx.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163nftbjjmv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163byooisql.html

================================================================================
来源：http://www.xuanzx.com/163gavzvbxu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163mdijmfzy.html

================================================================================
来源：http://www.aibaodan.cn/163rmahebwb.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163cmwtuysv.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163gomthaua.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163xpupshmo.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163sxkqdkmn.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163cmewalrf.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163auduaybo.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163hkktfzhe.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163xlmwmhpb.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163owhdgtrx.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163pxbkoggw.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163qybzvpcu.html

{**a, **b}
来源：http://www.sxryk.cn/163iipnbveg.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163eoscrdev.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163gmtdxtje.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163vqezvwyc.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163slguvesj.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163gvihvoik.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163kytgxcgu.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163vhsdommt.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163yxkcotfz.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163aisgvuxk.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163korklivz.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163eqszppry.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163emmxntzm.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163irchgwgx.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163ieqcyhon.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163pgfvboxq.html

defaultdict(list)
来源：http://www.sxryk.cn/163mmryriqe.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163yithxrza.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163unlnkims.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163oiypygdr.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163htzovhby.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163xmsatobm.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163yqxrmlay.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163pjzooiob.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163zchxwvjv.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163kuqnliiu.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163hjihrtwi.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163zwjbzbzb.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163lexkodop.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163vrlkemps.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163vysecnnj.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163pkuqiaig.html

list(zip(*m))
来源：http://www.aibaodan.cn/163lhqzbbkz.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163loppscsr.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163mqpxpwhu.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163swstesvo.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163ttduxfxm.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163wzkopxds.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163zlruxxun.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163fsahjkch.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163taybllzr.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163yqqqsdla.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163kvxylcia.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163gczudzkh.html

UserId = int
来源：http://www.aibaodan.cn/163cikjkfxd.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163hzhaeoeq.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163fisotjse.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163fetcaqoe.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163xwhyshue.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163zgvzhzxq.html

python -m pytest -q
来源：http://www.sxryk.cn/163vwueguwn.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163pywbgaxc.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163mannbobd.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163bwykieho.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163glcyyent.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163ybttimjp.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163ttwowcou.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163prledbqt.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163pgatkgjg.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163yaxcguqf.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163xeqafrbi.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163tdfinnzm.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163dvjsyqpp.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163bfrmoqkw.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163xmsmpvjk.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163qplgvybe.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163xljkrdoi.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163tvfsmzlf.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163iswrlsdt.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163soxycism.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163vidzgzcr.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163kuxymqga.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163wtzjtxly.html


<!-- 参考信息 -->