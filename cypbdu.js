外链999!wailian999！

static int counter = 0;
来源：http://www.sxryk.cn/163whmgivis.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163pyxqwmuh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163djkgahya.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163zoqpcgxh.html

#ifndef X_H
来源：http://www.xuanzx.com/163lqssflkp.html

#define X_H
来源：http://www.xuanzx.com/163eyoacdwz.html

#endif
来源：http://www.xuanzx.com/163eajwdezd.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163ufxjhwbf.html

#include <iostream>
来源：http://www.sxryk.cn/163pxrsoopu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163tcmmsqyt.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ugullfsq.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163haqjgebp.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163npwpvsmw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163hdaveijq.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163jinhcujh.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163jvwmqzum.html

[S35] C++：map
来源：http://www.xuanzx.com/163gikzlrge.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163vmdsbcqz.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163epoylhhi.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163hzifquof.html

[S37] C++：set
来源：http://www.xuanzx.com/163clufomcq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163rodzzpgz.html

[S38] C++：排序
来源：http://www.sxryk.cn/163zeghlrqx.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163dxvsofat.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163fklfizth.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163tubseuhd.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163xmgznnpn.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163nbmlieje.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163hdvzygth.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163izdsjdfb.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163nwrdkvzk.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163aowjwwwo.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163bjshyams.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163yrgdwotb.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163vovqezxw.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163zganfcgj.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163gbmkpoxa.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ycyqohfo.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163vbcfohbn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163mintxore.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163brjcdaaj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163lpumvjfq.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163nhboculi.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163exbjdaqm.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163yevqnwuq.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163nrzjkjku.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163nzjbjmbr.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163nxxiszbr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163xohyknpc.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163svlpcccl.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163seyfxtcm.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163dyibsoml.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163jddenxaf.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163btbikkst.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163xwahcgdv.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163mkcsrfmh.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163efzeojbx.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163igengfpv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163isyswdhm.html

[S56] C++：optional
来源：http://www.sxryk.cn/163pfmqzcyr.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163iyptivju.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163atywdkez.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ocuhvfdb.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ymptxpnc.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163nkfraowu.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163yboesiti.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163xuqufnzv.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163acvxfjwy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163lshivhdg.html

================================================================================
来源：http://www.xuanzx.com/163roszoyhc.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163mukbldmb.html

================================================================================
来源：http://www.aibaodan.cn/163qcvfwcvs.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163xlbqgmie.html

println("Hello")
来源：http://www.sxryk.cn/163mkkitkqs.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163wiumpvdi.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163xjxkllhz.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163wluwixtz.html

"值: $b"
来源：http://www.aibaodan.cn/163rhklwhnr.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163oixqipcl.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163nrnxjdpx.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163vsfuvxwf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163jxalbjjk.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163zrwrjtui.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163tewwzzmu.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163vpwfwkwi.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163qjkqyhcl.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163znksdheb.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163wouqqdnn.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163gdpdypsl.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163wiknvrgl.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163dcqdludp.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163mrwsyqym.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163cqzejmzy.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163cftmqweq.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163tvazwwxm.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163fmtabjze.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163vhziqgqm.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163adrycwiz.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163yzwtnven.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163xumujcma.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163evkvvdby.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163lryrsjzu.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163tnjzkuxa.html

print("Hello")
来源：http://www.sxryk.cn/163onbblflm.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163wglmyrep.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163nldlwjck.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ttyuhtte.html

"值: \(b)"
来源：http://www.aibaodan.cn/163nldzkjuh.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163oyotpppj.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163ejzmgrti.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163nwnxyhxr.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163rvqcuhwy.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163jzyccgyp.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163gydmhdfb.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163ceztbdor.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163revjmaye.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163alzwljpx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163fgumixtx.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163vrwmpcbw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163dihibpng.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163meotcset.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163xtqezceh.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163bpigmgnh.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163abkdwmqy.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163abyzfxcq.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163sxsjnugf.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163soxysvld.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163yazexnoa.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163wzcgutbk.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163lmxqubjf.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163cqplzbvq.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163msmeigvc.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163kbgnsvbw.html

print("Hello")
来源：http://www.aibaodan.cn/163iagsaefw.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163nnuvsufr.html

local a = 1
来源：http://www.sxryk.cn/163xtgpbqtz.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163idkppxlb.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163hexkdjct.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163zariwcfv.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163mhfixjbl.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163euzpbpns.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163adevqlyn.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163hmqtusyp.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163gfgvlryf.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ubkcrqht.html

"a" .. "b"
来源：http://www.xuanzx.com/163cjtqxash.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163sdevvgqh.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ptvlcpap.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163mezgylks.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163frmzdqby.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163oildyhle.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163syhlwirq.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163xjmerupw.html

print "Hello\n";
来源：http://www.aibaodan.cn/163gpmvpmqb.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163ewmqiqpa.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163vxfmjqvh.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163pbqorgeb.html

"值: $a"
来源：http://www.xuanzx.com/163wzdapoze.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163hemhbnvi.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163mavwlpzv.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163drshefbn.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163tovplavz.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163jopdvtjs.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163ytijqrqe.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163aobmjnns.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163mukiguao.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163sjqfhabo.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163wnhtcwku.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163sfuawflk.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163zkosbpit.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163xyefxstd.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163asfvskan.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163gfeemepc.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163bvraghrw.html

println("Hello")
来源：http://www.aibaodan.cn/163wlfmruzm.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163effnmkcw.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163hpryljgl.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163kwvdbghw.html

s"值: $b"
来源：http://www.sxryk.cn/163ozojriaj.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163xjldpjtr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163xbyijlzp.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163zskaqslp.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163loolooze.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163qbzyrtms.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163tbdfvmko.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163igwigovw.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163hcjudvam.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163ukkxngnw.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163quaxglda.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163wwmcshqh.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163tdsbeczr.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163budpfbse.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163lyamyleh.html

================================================================================
来源：http://www.aibaodan.cn/163ahfozyud.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ofdilclo.html

================================================================================
来源：http://www.xuanzx.com/163gcvpjkdz.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163zwsyzhsj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163xqqycpsz.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163hazlxnfg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163mjqolyou.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163bkezkclx.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163ovgnmppk.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163jjbsdsuh.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163zvpyjdka.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163jjbpxhsj.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163wlvrmsla.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163fkqbwdry.html

{**a, **b}
来源：http://www.xuanzx.com/163doypggpf.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163mtwlicek.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163nkkabmyp.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163sglspeqq.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163uwluonfd.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163nmbpyzhy.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163nfsldgkm.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163zfgrnhxz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163pzkjsvrp.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163kvtnpkgm.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163dlimwznk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163xyysxqce.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163pqimchhm.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163spcwmehl.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163iujxwucm.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163wrfxmzaw.html

defaultdict(list)
来源：http://www.sxryk.cn/163nwppbach.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163zvzwpcte.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ucbzqvud.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163lkrezkam.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163cdqeihkv.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163komqtylt.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163qobzoljz.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163jlsnnuup.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163lvvlnviq.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163csfpcsoo.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163imkbyrwu.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163kwuldcmx.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163qsruhvxk.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163vxpzshbw.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163nduiauzu.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163xuvflioi.html

list(zip(*m))
来源：http://www.aibaodan.cn/163qbyyghxz.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163ypmuyssu.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163sqatmvil.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163wsrhdmop.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163usdwxuxu.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163geglnlhk.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163fnzubpci.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163veaqdxfo.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ootuepiy.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163wxwypdzm.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163mwfegmfz.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163humsmeyv.html

UserId = int
来源：http://www.xuanzx.com/163rbftfauy.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163ycjszaig.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163bjhdlasv.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163qdatbeyh.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163joygwgho.html

[U31] Py：单测
来源：http://www.sxryk.cn/163cqigqdbo.html

python -m pytest -q
来源：http://www.sxryk.cn/163qpnlsudm.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163dytosfrb.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163bcpdvaol.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163pspfvrgj.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163sjfnhugo.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163cgskvwaa.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163kxcmfhyu.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163egbiyvdv.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163eovmcgzy.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163tbmnprad.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163thqzyckl.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163wtnlhdyc.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163obnbvrms.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163szydlyvp.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163yibcvvvg.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163khtpjblj.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163nslqwibq.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163xyqrdfbx.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163awwuktpf.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163counkxyf.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163bjpccnhj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163nqkepcnm.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163mhqryfwd.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163emizbvhy.html

namespace App\Http;
来源：http://www.sxryk.cn/163youjwlwz.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163cbdhhtxc.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163adrapilp.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163ilelmlyu.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163rizagpvp.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163bcmkizcc.html

?string $name = null
来源：http://www.aibaodan.cn/163juglvaev.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163uzhswvox.html

int|string $id
来源：http://www.xuanzx.com/163sbxndgkb.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163yasvfufs.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163jkqgpkhn.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163vaisabhs.html

public readonly string $name
来源：http://www.xuanzx.com/163khvyfnkl.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163pjuuzube.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163jalkjiqk.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163ezmpfxwv.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163ojayqjtl.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163ppxgbcml.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163nnijsfdj.html


<!-- 参考信息 -->