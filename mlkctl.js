外链999!wailian999！

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163vszrawpr.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163itwjzdri.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163mopwypjj.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163krvrubta.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163uyspggah.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163alzfuhdi.html

time ./run.sh
来源：http://www.sxryk.cn/163jvqslfeu.html

================================================================================
来源：http://www.xuanzx.com/163xpzcyvyx.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163kmnphcnb.html

================================================================================
来源：http://www.sxryk.cn/163xieikjwt.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163vnwtgmsn.html

#include <stdio.h>
来源：http://www.xuanzx.com/163kgndmukp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163wbmqshil.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163vdezyrbx.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163lefmpqnx.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163rupnuirx.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163wpnwgqiq.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163nmolkfes.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163khsxswik.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163mykbmvzn.html

strlen(s)
来源：http://www.xuanzx.com/163gtusywuu.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163yaixjrud.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163anqivqcq.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163cszfvzfj.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163nilyxjat.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163trutsyri.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163trfjdtpp.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163pvjpwfzw.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163wgzxadpi.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163rzdpwnkh.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163bhtctxch.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163dnarsmpu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163hsbmojdf.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163valenrmo.html

fclose(f);
来源：http://www.aibaodan.cn/163jlsnqiif.html

[S12] C：写文件
来源：http://www.xuanzx.com/163bczeugnv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163lblvzfvz.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163pyynawmr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163yevifehr.html

[S14] C：枚举
来源：http://www.sxryk.cn/163icfszhlc.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163thgkocxd.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163cfuofhuz.html

(double) a / b
来源：http://www.sxryk.cn/163oqkrkocn.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163fktibjpd.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163eglpavpx.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163nctfocbj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163jnhwrdvf.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163noaldnxy.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163htyjpcck.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163lilsvsar.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163tbfguhvw.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163xhimizqc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163qvdlyofm.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163eszihaoy.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163uksxgyqe.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163gqcxshvx.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163cueenvto.html

[S23] C：随机数
来源：http://www.sxryk.cn/163mwoyftzh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163psouffoz.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163hcqskzbb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163qmuyfods.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163hogwxeiu.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163uuorvbyc.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163sgamvbwm.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163mtufnigc.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163aebqoldq.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ufawdyyf.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163uloxpvpa.html

static int counter = 0;
来源：http://www.sxryk.cn/163jnwckmtl.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163gjlzfyow.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163besbwdov.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163arixhgci.html

#ifndef X_H
来源：http://www.sxryk.cn/163cfehxsyk.html

#define X_H
来源：http://www.aibaodan.cn/163aewhllsd.html

#endif
来源：http://www.aibaodan.cn/163wuwkhmsn.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163djxehxdh.html

#include <iostream>
来源：http://www.aibaodan.cn/163hssatgxf.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ftodqagz.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163zfipjjvf.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163vorpdqlb.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163lmekkeln.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163mhctayxb.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163rkhfqjpw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163cajwtekc.html

[S35] C++：map
来源：http://www.aibaodan.cn/163fmkublci.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163sftjuuur.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163esxkxiea.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ccsehvyh.html

[S37] C++：set
来源：http://www.aibaodan.cn/163jiowitcu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163acwmloga.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163qyigmjjq.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163xaxnoxuh.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163gwgfgmes.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163wkzvotba.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163xcoxpoly.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163vndawult.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163lpyulwyq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163yomchhjc.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163xcwtbmys.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163gjpmxplv.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163bwtwfcrb.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163bqgrtxro.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ywogpqqn.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163bajulbtr.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163arfqczkp.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ktjdrbgg.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163szeoucti.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163nqvjmfce.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163hyeonloi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163wejbjuzw.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163gqfcbcwy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163zsohwgeu.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163hwxotqqy.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163lgrqturt.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163wnnlzmic.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163aodcmrzb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163xyzxmnrk.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163koekzwjo.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163laojcfkc.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163kdryxorp.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163nxkmbcrx.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163zmxdnxqc.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ytsrepee.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163wtokuxzw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163nmfhkbeh.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163krymnxmj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163eshsayxv.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163wzjxgdku.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163sxujrgix.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163dzjxtyrw.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163vpsiylkr.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163krgtaksy.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163btygwgrg.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163xsjplugj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163jvsqtsxd.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ravhmqqb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163sfgyxvfc.html

================================================================================
来源：http://www.aibaodan.cn/163eyxnwmhp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163sggccsel.html

================================================================================
来源：http://www.aibaodan.cn/163xzjqazlx.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163rukiksqa.html

println("Hello")
来源：http://www.xuanzx.com/163ihvwzulc.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ylnzbrkr.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163oydshgts.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163oyfwzzam.html

"值: $b"
来源：http://www.sxryk.cn/163yriikflq.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163zjmxqglj.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163xyftxksb.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163kavvfatr.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163qxpobncd.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163pgohnaws.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163bifegsrq.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163tfpacoog.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163bovhtotz.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163sppyrmbq.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163psusxahj.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163rgyhilkh.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163araivnye.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163mrdffycn.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163norpucwz.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ijgkdvxh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163assxfbso.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163wxxabrdb.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163qvllkibk.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163rfpaxxfh.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163amzoejrg.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163tdkzjgfc.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163cqkuhgap.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163cuqnptxr.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163gosivraq.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163plubqwoo.html

print("Hello")
来源：http://www.sxryk.cn/163fegvyvlj.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163syqgxhiz.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ewhmnnux.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163woawrpau.html

"值: \(b)"
来源：http://www.aibaodan.cn/163dmzllbnl.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163qntksste.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163nmioskwz.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163nnqueodu.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163qpjzhxwi.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163kgvkcalh.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163asxkgedc.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163cltnmkej.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163rotsgtzv.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163qbwafujg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163inldhcrz.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163syabrqbu.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163jdnszljo.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163hlbgtkbx.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163xggxqdhz.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163swieywhi.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163ayheehir.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163azapnedm.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163xhsjtonc.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163nkvkoefc.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163qqfxbzmy.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163kjvfcmuv.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163xfmzyynr.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163toyhkruu.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163nwccqpvp.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163hdldplkj.html

print("Hello")
来源：http://www.xuanzx.com/163xetrpiip.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163megijren.html

local a = 1
来源：http://www.sxryk.cn/163szjkcejo.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163pgucfzij.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163pgbgvylc.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163flxoqsfm.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163dfbvxbtb.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163oiefuqcs.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163swxgjzon.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163hntcxbcb.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163iprlzklt.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163gxshqwdp.html

"a" .. "b"
来源：http://www.aibaodan.cn/163ghylrifo.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163mgqyzjsr.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163batlzlvn.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163mhohedvv.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163kctozlnc.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163ipjeqedz.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163hswhhxqw.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ximmzuya.html

print "Hello\n";
来源：http://www.aibaodan.cn/163zsbcytru.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163ciinyjgg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163ddnxefkw.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163obgqvpvf.html

"值: $a"
来源：http://www.sxryk.cn/163ttqkczix.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163ffujfydb.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163xsbpvpql.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163htazvelu.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ooektajs.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163pijqxgqy.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163anlhqjtr.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163csjoegvo.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163bjldweix.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163fljqdbra.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163fdfcdqzo.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163isphalok.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163wpahymsf.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163bpapabrt.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163trxfaynq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163mcibtgff.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163bvpaywbi.html

println("Hello")
来源：http://www.sxryk.cn/163gnaaapep.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163pexrwbjv.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163zlkeledp.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163nnbnweil.html

s"值: $b"
来源：http://www.xuanzx.com/163lidobvfn.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163nsytsxci.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163oqcsrhjb.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163vowwqtve.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163tuthfofe.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163kwqlvuvr.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163lsdbkhve.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163ltldklgo.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163rqnymane.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163kfsinjwm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163xlzbaian.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163ioxaqhup.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163alsoezvv.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ltsbpogp.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163xsbnzesn.html

================================================================================
来源：http://www.xuanzx.com/163zsbscsuk.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163sbhdlayc.html

================================================================================
来源：http://www.xuanzx.com/163gyezawsk.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ycvktjtf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163eqdpknit.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163adwyjaty.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163msekxgtq.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163lvxdmmtq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163bktvljiv.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163zqejbhgv.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163zsqcsogq.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163vhrkyxft.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163gmrcabku.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163pjlmebvc.html

{**a, **b}
来源：http://www.aibaodan.cn/163zhjwgmjq.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163mgkewzrp.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163lcqufaow.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163darecpyj.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163byqeihwr.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163fpafeiit.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163hfaptxco.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163hflhpoyl.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163qwyanokk.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163zwfvziis.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163zmvjhmsp.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163knseyvks.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163zmimwhqb.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163cjvekczr.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163fbtacjso.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163jyyljdrl.html

defaultdict(list)
来源：http://www.xuanzx.com/163qbmnrxqg.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163zztwndqt.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163bahvicku.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163npjclvbu.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163ilxcrdqw.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163gqftmuii.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163dnkdxhww.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163clpsibdj.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163divopldx.html


<!-- 参考信息 -->