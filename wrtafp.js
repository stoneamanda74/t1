外链999!wailian999！

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163uobjvrid.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ffdykpvh.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163bghxnhdf.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163wlfiheyr.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163dydqfmzu.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ihvaabig.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163rgcrqrlf.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163oirwxooo.html

static int counter = 0;
来源：http://www.aibaodan.cn/163neluiisp.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163xtebkgvc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163kyclziwg.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ohuktksu.html

#ifndef X_H
来源：http://www.aibaodan.cn/163pvxadxxy.html

#define X_H
来源：http://www.aibaodan.cn/163tpajxqtv.html

#endif
来源：http://www.xuanzx.com/163ocqpffgw.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163nqeyefbu.html

#include <iostream>
来源：http://www.aibaodan.cn/163dcqabsik.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163tqsudppb.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163vvjthcbk.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163xyeandia.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163vbfeosbw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163zvvouslp.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163hozdomdw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163xwfldams.html

[S35] C++：map
来源：http://www.xuanzx.com/163ekqoeqys.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163duuwqjen.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163depzdpta.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163igwfbzfa.html

[S37] C++：set
来源：http://www.aibaodan.cn/163bdglmkkm.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163bujvneij.html

[S38] C++：排序
来源：http://www.sxryk.cn/163djyxcvyc.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163hazpzjxt.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163hrwiazyz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163vmuhotkd.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163bslirgvm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163cdnrnfry.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163plgavjik.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163zcrggewu.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163immbsejb.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ztckawsp.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163drdzlmus.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163fbqznejr.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163pqwzbmhg.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163snozhtoa.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163owspabvm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163tligtmyj.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163kxsvozgs.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163eerihnlf.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163agtkfmva.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163zqfnucat.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163dsndqgdb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163oqcehkyu.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163kwkgkvfg.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163yobpnmrq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163tystaroa.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163glfmwltl.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163axmeivah.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163nxslrkof.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163ghfcevfr.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163gwxvqppo.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163psuzzjrx.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163zncnpxjk.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163bfslotyp.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163zpqdnxtt.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163sjdlkvfn.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163dxbjmfoi.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163vjrxdagg.html

[S56] C++：optional
来源：http://www.xuanzx.com/163dbginkjg.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163zhgnqhwb.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163xszanurs.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163lejtzblg.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163mzkgjccx.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163bujuorqe.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163iihjhacy.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163gaepnvzb.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163wzmbftbn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ptwtakht.html

================================================================================
来源：http://www.sxryk.cn/163kumjtrao.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163uwecvlsq.html

================================================================================
来源：http://www.aibaodan.cn/163wsovlgeg.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163jlubdloy.html

println("Hello")
来源：http://www.aibaodan.cn/163lmdbedyh.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163iujfoxfo.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163mmptngki.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163horhprhf.html

"值: $b"
来源：http://www.xuanzx.com/163wjwrgtwd.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163ikekahhg.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ymtglkvm.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163mllvymdl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163ifakjzzj.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163xsesgxwo.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163shbsuska.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163nfzhovwj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163bhxncgci.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163crfywqxt.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163tislwcwp.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163rdluwvxj.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163kjizfsqb.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ngcnopmp.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163rpipawnq.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163qhdomsqj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163ghkcyyxq.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163iyxzowoh.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163sccseuyt.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ggvynqhj.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163bwcxxcen.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163vzatklly.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163rjucrcnn.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163hqqjaeir.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163yjvdqsic.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ohkmxkeq.html

print("Hello")
来源：http://www.xuanzx.com/163gcglzwnm.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163hihnwcam.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163vwllzigc.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163kmxjuwvt.html

"值: \(b)"
来源：http://www.xuanzx.com/163rtxxmoht.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163dzwpigch.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163dkhkjtya.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163wpiotnww.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163uyjrltzl.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163zseidice.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163gadxyoip.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163tpkafcog.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163yhhhspaj.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ogijxbzb.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163hxlakbvh.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163qcajigfy.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163tllbepls.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163gqjambgm.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163xioxnkvp.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163tjrgwwyh.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163sgkenitj.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163yjfuxsav.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163uaowmmpi.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163bshcdedw.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163lehssjyt.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163ayalzdyz.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163obkbpwjg.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163azknqeqt.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163pslmrggf.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163nnegqqdr.html

print("Hello")
来源：http://www.aibaodan.cn/163mmyppmed.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163ztmsobxi.html

local a = 1
来源：http://www.aibaodan.cn/163zxrhtyxn.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163kxergzfc.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163gnxptxws.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163txvferjv.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163yrgzwerx.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163zzqtjbnk.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163dzgwsyyt.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163kltuhzcp.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163cagufcxf.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163iyzmticj.html

"a" .. "b"
来源：http://www.sxryk.cn/163hvoxhlhx.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163amagjwvj.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163aafvqzwa.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163txxbptbv.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163jxokcmcw.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163hgsobrwi.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163lvrracei.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163rybsbbzg.html

print "Hello\n";
来源：http://www.xuanzx.com/163kxdmhapi.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163spszyvru.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163tcgusjle.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163empuxtap.html

"值: $a"
来源：http://www.xuanzx.com/163ayfpguhf.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163phirhtbl.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163xyvpqrcx.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163egtyqwfc.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163vgkdkmif.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163spznzufy.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163uhgkhmtf.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163blvwogpf.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163dngegwls.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163bnlxtrjo.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163bwwpitig.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163nxgyfhai.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163byapyyco.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163cfucvxvv.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163loobxbcn.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163bjmeptna.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163tuqfsgqs.html

println("Hello")
来源：http://www.xuanzx.com/163fbaatlht.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163mbngnzrl.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163zavajjtl.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163kenrjlxl.html

s"值: $b"
来源：http://www.sxryk.cn/163bgafcbik.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163uvhmqltr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163cqfmloxu.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163tchrlwyf.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163xjnucvjm.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163tdmkeebz.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163oxuivqfs.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163bjcxpqqj.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163ttxdoucv.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163yhopngrp.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163mzlbmtuf.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163vvlpuqui.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163ntycxygy.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163kmkmienv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163tkflmkkq.html

================================================================================
来源：http://www.aibaodan.cn/163pkuesdkn.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163eewkddvm.html

================================================================================
来源：http://www.aibaodan.cn/163aygcuaxf.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163fridkqfy.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163lcgfvjvk.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163tbmdrpdr.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163buwalcgv.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163ktkpoyny.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163yfudtmam.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163rllinpvu.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163wxwuzvmp.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163ohnhgldo.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163jwdiqrbd.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163nbdtxotn.html

{**a, **b}
来源：http://www.aibaodan.cn/163cocxkfsq.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163gwihamcj.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ostneylp.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163hbqqfhdp.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163yjdtqaov.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163lqfiihrd.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163jszxkjld.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163drxweexl.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163pxtvjnjv.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163ieqkbcrd.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163exehrzyx.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163vvpshwrc.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163pmuewaen.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163nulmrsvw.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163scmhciqm.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163wzitkaer.html

defaultdict(list)
来源：http://www.aibaodan.cn/163lcbimiwb.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163qiaqfnim.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163kfcldlsu.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163dhzfubgw.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163jxovycbx.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163oydgtafq.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163prjfmsiq.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163jpzydqre.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163eanbgubx.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163kdafefxd.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163logjvesz.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163ocunwoor.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163qnkvwrib.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163zozutzzv.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163dejuduqu.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163tzfrbogg.html

list(zip(*m))
来源：http://www.xuanzx.com/163qlafzliq.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163vmbeaqps.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163cpadiwnh.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163uutiyauv.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163finpbkpm.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163whjglqtq.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163kvgpmzxm.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163vgabvpuf.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163lxkhvwfh.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163vbhxqnvq.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163rgecfuqf.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163mnjfaqeb.html

UserId = int
来源：http://www.aibaodan.cn/163tygwmuwr.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163llmlqxho.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163htefehjn.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163vhrjakvd.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163jxqnelwm.html

[U31] Py：单测
来源：http://www.xuanzx.com/163bqufhyit.html

python -m pytest -q
来源：http://www.sxryk.cn/163dxxrzumw.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163zcxwmxbg.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163basmwszr.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163jqbmkhqa.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163xekuedxl.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163hmvfynkh.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163wgcctolo.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163qkwglvyi.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163tkjyvqbn.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163iybleqjg.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163nbwqvuax.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163yjjoowvn.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163pjgnlnto.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163jekjojqj.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163sogqbomq.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163crvnelnn.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163znktxhzr.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163ovcnwfnm.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163xojzqkvq.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163nrvwrctj.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163ycxxhekb.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163ybyjiafx.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163kmytgxjw.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163rgyvvuid.html

namespace App\Http;
来源：http://www.sxryk.cn/163stxlmsuz.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163btpykent.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163eifnsyxp.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163leuikech.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163kltfartm.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163sueewztu.html

?string $name = null
来源：http://www.aibaodan.cn/163jdenlclw.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163kbxwrnei.html

int|string $id
来源：http://www.sxryk.cn/163coekfzhe.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163fiesszkz.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163zhjjgaon.html


<!-- 参考信息 -->