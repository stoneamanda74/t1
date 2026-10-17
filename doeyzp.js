外链999!wailian999！

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163srcnabos.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163cgeulrkz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zzxxzvux.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163jwozhgjp.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163hadnpfqw.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163vetvtjbt.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163ukpxzwov.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163cxdbtkjf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163chijzxil.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163xpnydtvo.html

time ./run.sh
来源：http://www.sxryk.cn/163vmokymtb.html

================================================================================
来源：http://www.sxryk.cn/163rfephtfd.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163tdluhhbs.html

================================================================================
来源：http://www.aibaodan.cn/163lmxgocrb.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ittdpjbb.html

#include <stdio.h>
来源：http://www.xuanzx.com/163jcunsqxe.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163pxiwlwys.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163lhlarvet.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163dgdssjcj.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163fygibtjv.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ncpizguw.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163lqtorsft.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163kfmqynph.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163kdsxeyzp.html

strlen(s)
来源：http://www.sxryk.cn/163tqqwsuop.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163jwfnxdqt.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163wxlsdsdr.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163sozttifv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163jzdxxecy.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163fivaguqz.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163mqqcqvco.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163ypctibpq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163motushhl.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163nqfprpdu.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163dttqlktz.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163acnkbjok.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163irlfgkah.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163fgztvnjr.html

fclose(f);
来源：http://www.sxryk.cn/163hwslxric.html

[S12] C：写文件
来源：http://www.sxryk.cn/163uneyciuu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163osqzgdwo.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163dwwoloae.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163tepacmhq.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ojbzaale.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163hskkyjvl.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163zrizxyyz.html

(double) a / b
来源：http://www.xuanzx.com/163qeznpdbm.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163aiiiglck.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163sixkrmcp.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163gwcczfzr.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163rnqwdykv.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163zmicahgt.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ssdveosu.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163rluuweid.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163yiyoehno.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163dgjcchau.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163taqpcugw.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163zvbktotk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163kjzofcfc.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ooyzgrno.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163xnthiubv.html

[S23] C：随机数
来源：http://www.sxryk.cn/163dvegzxnz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163xfvkdkjr.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163psfznswp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163yconrlkq.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163qycpoqii.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163zgievrmy.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163zxfvcoqf.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163zorxjdop.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163dmsxzzwd.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163nxwdjlvl.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163dqgvttoc.html

static int counter = 0;
来源：http://www.sxryk.cn/163eijuzmru.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163xohuabgq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163mblpsujj.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163fvcrvncc.html

#ifndef X_H
来源：http://www.aibaodan.cn/163aytobqdc.html

#define X_H
来源：http://www.aibaodan.cn/163yxwetrhe.html

#endif
来源：http://www.sxryk.cn/163zvimgzct.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163bsanwkby.html

#include <iostream>
来源：http://www.sxryk.cn/163buxwhntl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163qdxdgvdk.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163imepexld.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163vyednwcv.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163klonxllk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163jmujffii.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163mwlsrjqz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163wecpqrzq.html

[S35] C++：map
来源：http://www.sxryk.cn/163ifsoawyr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163efvewydi.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163iotqxwrr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163yuvjikhc.html

[S37] C++：set
来源：http://www.sxryk.cn/163gthftfvf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163ectyltlu.html

[S38] C++：排序
来源：http://www.sxryk.cn/163uetzdisd.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163rplonfrb.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163nkfthvjy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163kielevop.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163eulkscwr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163fwrmwswy.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163icldkiwg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163xyotbcpi.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163wncfazzz.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163artahgur.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163tjtytbom.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163fakppbny.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163wunjmhox.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163zxifulil.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163odbsudqn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163kwwpyzun.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163zqdrkfhj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163rzgohqnz.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163kstfjeot.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163avsigzys.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163iptqsvaf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163onxgxlbw.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163jupciqwm.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163jujsfrkl.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163bgqlymqj.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163epvoiwjw.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163eaxpygyw.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163zqsazbil.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163mgbcgupu.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163whhqhshy.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163otufrmta.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163hsyfcnpr.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163rpfcqmhk.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163hgppeesp.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163eqwthuiu.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163yfgfpwfz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163lmjqvjtb.html

[S56] C++：optional
来源：http://www.xuanzx.com/163lkjnyuko.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163aiepjjjq.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163nnwtnzbt.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163bdgcufhm.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163gqrecopi.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163pybidmxx.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163cquozovn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163zpkgibke.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163fgaezjyp.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163kugntgsa.html

================================================================================
来源：http://www.xuanzx.com/163upyoston.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163pwenvgve.html

================================================================================
来源：http://www.xuanzx.com/163nlmczhww.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163xvbvexby.html

println("Hello")
来源：http://www.sxryk.cn/163pecikpzo.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163kkvizbwf.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163qzwretia.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163gzwedzyc.html

"值: $b"
来源：http://www.aibaodan.cn/163nuimatzk.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163fyetjbet.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163cdvunwsw.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163vdczusku.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163cyddnhge.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163xbqobvbo.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163fkvwwnwf.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163nsawxzdw.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163izpsykpk.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163abikuvzn.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ajzmelia.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163psphcncy.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163twppagre.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163tynykrtr.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163yufannyx.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163zbsriwud.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163irqhkxxl.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163nhefiguf.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163orhgcrjn.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163przywlkp.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163hvtdwbif.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163gxhpwlgz.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163vpyjdszo.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163owjgrsro.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163aeibyixr.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163mxagppnu.html

print("Hello")
来源：http://www.sxryk.cn/163hdcbudfc.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163plvpjrwd.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163asnfoscx.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163atnxrrba.html

"值: \(b)"
来源：http://www.xuanzx.com/163tckahvho.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163felxqdql.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163nhqgzwts.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163arlvffqb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163lxgtclax.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163clmxvlby.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163rhqaczja.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163jxqjcocc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163agujssqw.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163zfgznqgl.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163usfdqzsi.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163vsmoqdal.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163wgryyjtt.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163iiaimsce.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163uoxmznrf.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163lmvbxhje.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163goawcrkm.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163nmozoplb.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163bfijmoho.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163lnfigshd.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163maunllel.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163dogrvrcx.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163caksrikt.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163jumynvwb.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163xeutqbhe.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163zzvenixi.html

print("Hello")
来源：http://www.aibaodan.cn/163wvscugyh.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163paixzcap.html

local a = 1
来源：http://www.aibaodan.cn/163gqowcwtx.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163rxixjaeu.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163tijkpdwu.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163aytigzhl.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163twptjpzg.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163xigdxutx.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163viyfdicc.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163beksutfq.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163qjvnxyvr.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163huqcvlsn.html

"a" .. "b"
来源：http://www.sxryk.cn/163dnesmisl.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163arjgxgvj.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163ryhorghs.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163pavzlctc.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163wpgyzmjy.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163mrrezxrx.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163jsroikjm.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163eveousvp.html

print "Hello\n";
来源：http://www.sxryk.cn/163jokphqxi.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163huppwyeu.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163zrntefim.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163besfglvr.html

"值: $a"
来源：http://www.sxryk.cn/163sbmylomz.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163qmgixqqw.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ewjuufoi.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163vlzhqokc.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163joxmqkzm.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163uxtzesrx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163ibelortr.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163herudlkm.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163eeekwgbx.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163ebxaqzpw.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163vfvcgltk.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163wnhteogw.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163zaokjcqm.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163dbquwnpr.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163dxgdtdqy.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163jwdqodeq.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163vobtezmn.html

println("Hello")
来源：http://www.sxryk.cn/163kdtqnbvj.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163ursznoim.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163utxmysvn.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163kdvjbglv.html

s"值: $b"
来源：http://www.xuanzx.com/163qpgpstcd.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163wezvgwoo.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163yuxgangg.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163bjnbanus.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163hdmrubzv.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163vdwrrbdp.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ehihriec.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163xjkiqwye.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163whhwggjz.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163qflgbbwi.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163sumlcknb.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163moneaacl.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163clmmrqid.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163vdsuxwth.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163tiqofcbn.html

================================================================================
来源：http://www.xuanzx.com/163vnakgfnz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163eduzeica.html

================================================================================
来源：http://www.aibaodan.cn/163rpmegvvk.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163virtrhrm.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163nixhsngb.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163kxefqwfd.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163tfeoeqny.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163kkcplcec.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163yvetirls.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163dlmtofyu.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163tryhtiyo.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163dnkcsoyk.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163jyzemuru.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163ozqavhit.html

{**a, **b}
来源：http://www.aibaodan.cn/163dvswpayz.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163wmxbplgc.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163jlwilmga.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163pbmvxczc.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163yzaaecdt.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163atefjqwr.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163wpetlfaq.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163nlbjwkda.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163klqqzmzf.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163ujkpzila.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163rkaybsxs.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163kiqouryk.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163bbsqdfly.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163snqfugjr.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163vceqzzhl.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163dfuehjpr.html

defaultdict(list)
来源：http://www.xuanzx.com/163rakityir.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163udwvqxuq.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163savvgriz.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163hytemzbb.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163tbbfulia.html


<!-- 参考信息 -->