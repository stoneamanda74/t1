外链999!wailian999！

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163vhhwkhtb.html

[S23] C：随机数
来源：http://www.xuanzx.com/163glkxcbhe.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163lsbkbsar.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163jfddttfa.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ucjfhpuh.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163geczjbqx.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163zpboegru.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163tfoecjel.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163bueweqjw.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163ighblppw.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163qoqqhaly.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163fvjsyemy.html

static int counter = 0;
来源：http://www.sxryk.cn/163hezyrfdl.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163hnuwonci.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163bujxltue.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163mixwoadp.html

#ifndef X_H
来源：http://www.aibaodan.cn/163mgkbsohe.html

#define X_H
来源：http://www.sxryk.cn/163tkaxjqio.html

#endif
来源：http://www.sxryk.cn/163azofuoqv.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163qiqxleij.html

#include <iostream>
来源：http://www.xuanzx.com/163imzlmbwc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163xkzmcden.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163zgbaskgg.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163kvpetosh.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163mublytvw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163xgcfdpqb.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163csspncco.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163uhsphjim.html

[S35] C++：map
来源：http://www.aibaodan.cn/163mybhmjcx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163yobvsyoo.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163jwxzkftu.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163cnnhnsvp.html

[S37] C++：set
来源：http://www.sxryk.cn/163gmsejjus.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163xabfojrr.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163zyqpkubt.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163qqcsxqjm.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163rwilxmpw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163voiejorz.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163qfqksnnh.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163zfbfbcrs.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163wpynurhp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163dhfefmyi.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163qnzsqnud.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163mloyogdy.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163expwyzcq.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163yfajhybq.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163kvyggnqc.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163vznsmxsj.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163rccoxjul.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163sfxwlidq.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163feyiqtyw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163qmvauxbg.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163dkmfgxur.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163cpwdazpk.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163fhmpauns.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163rehufhtp.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163zfuserqw.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163flcfyady.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163gntptzzf.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163edinbxqa.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163dfaguiqt.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163rixmlgwh.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163tsdwbanm.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163uclclthg.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163dyrzrglw.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163imdjfnzw.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163crhkkpjz.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163qqjdslzg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163xilvtzaw.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163kpglwgxk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163xiyrmotj.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163nveiidqp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163nvdppoow.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163kvafxkmx.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ugpytsrc.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163fgfvsqzm.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163giwcyeux.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163qxtwvniz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163pruqmbit.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163kvlwjixy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163avgkwmjc.html

================================================================================
来源：http://www.xuanzx.com/163oylvonej.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163fmfpfzij.html

================================================================================
来源：http://www.sxryk.cn/163kvvwtozl.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163xjditqir.html

println("Hello")
来源：http://www.aibaodan.cn/163sbzfqipb.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163gysskvap.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163owtrtlyr.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163niyfgsqo.html

"值: $b"
来源：http://www.aibaodan.cn/163cpvdqucq.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163xpauoufm.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163jguycgkh.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163whoqjlmn.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163hbupbtnv.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163xyktixve.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163oeftauwo.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163srwzcprz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163mpncjgbo.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163rxnyaruk.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163wchxtoxr.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163fsmssndr.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163hiwhfqij.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163bpvjfvyn.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163eefcnhah.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163xuqktscu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163ugekfvha.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163zolpbghj.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163bqjzbezv.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163nlnkfahb.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163flshjwiy.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163xbxoxbps.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163wleqaejr.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163lkdwtxok.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163dbmbentx.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163timahtsz.html

print("Hello")
来源：http://www.xuanzx.com/163lskvmmst.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163zcmqrfeb.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163xgzqolcj.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163kivgxhtt.html

"值: \(b)"
来源：http://www.aibaodan.cn/163hljexgnr.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163llbreoso.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163lttqznxu.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163pyqfmnfx.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163zhrikyhw.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163nmqvwwdi.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163gjutxjgf.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163himtuhmf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163cbqaxcju.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163alqovxvq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163vffpdyxz.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163wkuyskpa.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163iyfdpelv.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163tvxieomj.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163obkvtydk.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163fkcdipfa.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163hzpmoffw.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163fuaouxim.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163eobydehs.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163sbkazdvo.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163mbqaygjs.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163vlbpcpql.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163ueoexzvp.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163acfvvnkr.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163iojecpzf.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163xasbzalq.html

print("Hello")
来源：http://www.xuanzx.com/163ncxftibc.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163rmtohmcq.html

local a = 1
来源：http://www.sxryk.cn/163mulgwshr.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163zjqbpazr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163hkuxtjdt.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163mpdvuccx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163dhtjlpni.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163mysmwuwk.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163hnyxzxnj.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163agcwovmj.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163syjawfan.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163ghqshpsa.html

"a" .. "b"
来源：http://www.sxryk.cn/163hwmkeeef.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163talaelym.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163gxvhlabx.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163nqylvayd.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163dwdgfkeh.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163ygzjvvli.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163obonpggd.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163kixtspjc.html

print "Hello\n";
来源：http://www.xuanzx.com/163slxklduf.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163phdiabjg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163clyocrsa.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163qrcpixpm.html

"值: $a"
来源：http://www.aibaodan.cn/163vkmhjmde.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163ausrmlqs.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163vejgytgl.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163ykncyqvy.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163csjeazcl.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163gqrloefg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163pyjyhcwl.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163czqmrcmu.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163gyhturjy.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163lglmkxhw.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163urxkjwfs.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163syvcbrwu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163omgmkvkg.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163ratjgiyv.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163pyajnvhs.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ybkxlejx.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163avnkbxut.html

println("Hello")
来源：http://www.sxryk.cn/163xwysmhqg.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163kvfdmbxo.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163vyokkhon.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163cyaemiyv.html

s"值: $b"
来源：http://www.aibaodan.cn/163zvpmajmf.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163ewcilwxu.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163donrfrwj.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163quwtsvcg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163awfnrkwd.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163pwtmucwh.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163yakxyhdc.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163ytckqtmi.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163iiqbotuj.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163rksiklub.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163wrtmuytb.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163fgliujck.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163esdajvtb.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163dqjfqewz.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163uptlwqev.html

================================================================================
来源：http://www.aibaodan.cn/163uwlsoyin.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163fusursco.html

================================================================================
来源：http://www.aibaodan.cn/163alfjorfm.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163bljnipvl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163iqqhaate.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163txpcvouc.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163yvqnkons.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163hvwdzmpz.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163hlewnpzr.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163nwsxpeoj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163cbgchygy.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163yxagfkvw.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163wwtmztqk.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163gsixiohc.html

{**a, **b}
来源：http://www.aibaodan.cn/163izsghray.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163tgedwemt.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163wciluvbd.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163chaxwenn.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163owxasrjz.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163mgxnnhpb.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163aghrtdfh.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163lnanugxn.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163ofjlgnhw.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163ubughnff.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163vrpjncjt.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163hnslwrng.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163dtruvmhr.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163haujhkjl.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163iwrhsybn.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163orzlqflv.html

defaultdict(list)
来源：http://www.aibaodan.cn/163brbneitz.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163yazpupno.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163bkhyyldr.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163zqoxrnos.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163cxluiqit.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163msyirzuj.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163noadrgfz.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163tzjipwjo.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163qyvyebjr.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163csfsyqil.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163ienvrjvm.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163dryliinm.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163szyujvgq.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163ekpwodba.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163uoqflkha.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163wakkxnwd.html

list(zip(*m))
来源：http://www.aibaodan.cn/163qvvnpicw.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163zrcktqtx.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163bfwjenxu.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163ifmdfxnj.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163gvqzxfym.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163ltzpogxo.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163slkigibd.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163mjuobffj.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163elvvtaxy.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163hxncdgxl.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163fiffykyw.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163lpxtnwsc.html

UserId = int
来源：http://www.xuanzx.com/163wyedxpuu.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163cqcayndv.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163bthampkj.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163wbaknlyc.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163wgaomugd.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163mpewqcvn.html

python -m pytest -q
来源：http://www.sxryk.cn/163tejcxlvm.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163yfhmcxej.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163jiqpahtu.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163mkepjelg.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163pdidtlou.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163plavyssf.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163vvhqgwjz.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163writjtjs.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163iwzzbepm.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163soqbkido.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163ibqwtqcz.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163pnxjeeuw.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163xnsgqzeo.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163cftmhswf.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163wpmzryzn.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163iqpuuolj.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163oimtglgy.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163jypuwiie.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163lxulfzey.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163kfmtyche.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163gijaefyi.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163didvujfh.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163lmtpzjgr.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163qvxmmrkh.html

namespace App\Http;
来源：http://www.xuanzx.com/163aujvlcky.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163sevzrrub.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163ebuzcfwg.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163qvihoyca.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ukfqmumq.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163vcbxcsdq.html

?string $name = null
来源：http://www.sxryk.cn/163brgmbjxx.html


<!-- 参考信息 -->