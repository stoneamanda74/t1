外链999!wailian999！

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163jnkmyixr.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163bqqtjulb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xyofaqca.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163rsecpttj.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163glgqjxfb.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163fbjrvwpn.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163srnhwqoc.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163cqrctreh.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163dqxhushu.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163gecifndu.html

time ./run.sh
来源：http://www.sxryk.cn/163cchdzlei.html

================================================================================
来源：http://www.aibaodan.cn/163nojcpphj.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163xgtohrlk.html

================================================================================
来源：http://www.aibaodan.cn/163omuzmxlw.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163zqvfxlqo.html

#include <stdio.h>
来源：http://www.sxryk.cn/163swfprecf.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163gxpolqlk.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ypxjfuao.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163jqxafnrp.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163xiljcbfi.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163jllqekvl.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163sldptoml.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163gqbhiquk.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163warxzzmo.html

strlen(s)
来源：http://www.sxryk.cn/163mkgtxten.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163znrzfeip.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163owuxjtte.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163bcqnftbm.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163oolbnrsm.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163xobgeypq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163rargkayq.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ugvnjnsm.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163hjkbroaw.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163evpmcrit.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163dqkfwscb.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163vxafelda.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163riytyxjw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163lbycsoor.html

fclose(f);
来源：http://www.xuanzx.com/163trmqaxew.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163cbucggay.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163iwinqvgk.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163nugueihz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163bfldqarz.html

[S14] C：枚举
来源：http://www.xuanzx.com/163grimehfb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163fkkgvscl.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163yguvterx.html

(double) a / b
来源：http://www.sxryk.cn/163wyxeaplx.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163txjznhmb.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163popyqxfw.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163hzseuszt.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163qhphresi.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163couxqcph.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163swnwhogy.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163frtbsjrb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163gkubcyya.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163cndgepap.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163yziernbw.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163wgacaprp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163knaftoys.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ygpnxmrx.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163wxxaezre.html

[S23] C：随机数
来源：http://www.xuanzx.com/163clwpukdj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163smzhylnu.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163mosapokc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163bakuuunq.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163mclutnva.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163inwrndxp.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163dvpojatf.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163gxhnfqsg.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ppkrllyg.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163torowbzm.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ryekodlj.html

static int counter = 0;
来源：http://www.sxryk.cn/163zedwbteb.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163peedtgcb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163nhpswrcq.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163vpxqgnki.html

#ifndef X_H
来源：http://www.sxryk.cn/163frwnkjet.html

#define X_H
来源：http://www.sxryk.cn/163sneepuyy.html

#endif
来源：http://www.sxryk.cn/163kpkesici.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163jypknywv.html

#include <iostream>
来源：http://www.aibaodan.cn/163vpbtohgj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163eqndsyzv.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163qkejsmqa.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163qtfvxsox.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163kzbhwcmp.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163xtnascjm.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163qqjjysxp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163jadqezxy.html

[S35] C++：map
来源：http://www.sxryk.cn/163wegxhnud.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vmksgixi.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163kolqxgvj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163thcausdv.html

[S37] C++：set
来源：http://www.sxryk.cn/163jrbowuqh.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163rdysoann.html

[S38] C++：排序
来源：http://www.xuanzx.com/163jtzsktrn.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163fubflust.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163zrdidvyy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163tkalhbgi.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163tusavvkm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163pcghfmqq.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163vckztylf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163mudhflni.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163zplyrqlw.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163kwtqfwde.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163uqokpuqq.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163ihfzxyxj.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163mbxyyjmo.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163gtyjcpbi.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ercncalh.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163mxiiyivm.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163sehjleup.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163sgnybved.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163mgjtygsg.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163mfuruweq.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163uxppjiey.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163rqqkzsny.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163unijfjgg.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163mqutmulw.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163outdyrzo.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163pzroyyzl.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163jycpinqo.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163omkiyyjc.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163wlojwvxj.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163rrykfdpr.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163jozpuqbx.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163uykykezj.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163nfjevppy.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163zimmhymf.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163atdgbtxz.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163cztjvpzx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163qaqtljsr.html

[S56] C++：optional
来源：http://www.sxryk.cn/163vbijblex.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163hxufgvei.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163liovwdaz.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163azhvpdve.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163vepnvfph.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163hgolwtaw.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163absebnhk.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163kftzpszs.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163yptmwcms.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163arkvzvem.html

================================================================================
来源：http://www.sxryk.cn/163qhcgrtgc.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163zxaawcnb.html

================================================================================
来源：http://www.sxryk.cn/163ocakczdd.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163gtqidnra.html

println("Hello")
来源：http://www.sxryk.cn/163rfwlscbd.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163mxqrfomo.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163evyvebhm.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163adxzvpfs.html

"值: $b"
来源：http://www.xuanzx.com/163rnjiaxdf.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163vvmyahjc.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163yxvurszn.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163uzgrvllr.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163xoapsafl.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163cafhzjye.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163hcrdrwkq.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163bxueqglg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163rwzpwzdl.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163hsxmdwbs.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163pgpjyzxj.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163rqjixgnh.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163uxhszaex.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163otlrkhow.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163sdsrecah.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163xuvbqhgl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163cahqcutw.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163jjakjyqw.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163fgfchpah.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163uvgwsvof.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163uqzuqyur.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163gagbtqfx.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163enapcwfy.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163hswrstea.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163lpkmmlju.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163qncjeadi.html

print("Hello")
来源：http://www.sxryk.cn/163jpehmlyx.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163qqwemtrk.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163zlltjjae.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163cbplrfyl.html

"值: \(b)"
来源：http://www.xuanzx.com/163qvhvhibz.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163yhzuhtoy.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163veaurewz.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163dthcknje.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163nczlsluc.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163zfjqmzjc.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163mkncphin.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163ruzordzd.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163bnnvbfzs.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163mmyqwpom.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163wfzwiuhn.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163owecnnyi.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163virisdnj.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163etwlatpa.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163xyhlnkoy.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163iebmcnpc.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163wohkmhqd.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163hnysdtnu.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163wgnirvez.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163cvpckqeq.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163prdnhpnl.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163sdnowmtl.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163fwvummdv.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163gfhcokck.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163oumufcfm.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163dxykhija.html

print("Hello")
来源：http://www.aibaodan.cn/163vlkxjirz.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163hfpurypk.html

local a = 1
来源：http://www.xuanzx.com/163upqrobru.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163xptnguyr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163yoadfbhq.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163jyfxmxhr.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163mlismcjy.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163grkxlmkm.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163vwhvzdhp.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163teznxpwc.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163bcudnwqi.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163kuwljdev.html

"a" .. "b"
来源：http://www.xuanzx.com/163jwvmzsya.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163wifeyyyu.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163hhlsuxtc.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163ftxbuhjf.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163pbowsfks.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163cgpgrnnq.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163oelxiqgs.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163lmyqsjrd.html

print "Hello\n";
来源：http://www.xuanzx.com/163ivkslsqv.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163bdbeujpt.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163smigstlk.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163gljtimrr.html

"值: $a"
来源：http://www.aibaodan.cn/163hkpilezk.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163hpqmtddf.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163uoftgrek.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163gvbmfkfq.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163nnhgfapu.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163adauhwpl.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163fiuartcp.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163nevbiciu.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163vrfgbxpt.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163nyxvgnrr.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163jyvactsr.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163lhikshyx.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163mdtfcvhf.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163axmwitza.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163bsetmnwq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163vbkbswgp.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163zgskizii.html

println("Hello")
来源：http://www.sxryk.cn/163ecsrmwoq.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163wiudowbn.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163gwtgfvlt.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163qhabczej.html

s"值: $b"
来源：http://www.aibaodan.cn/163aqgwbcnf.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163moqturti.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163gijlsfow.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163ftxmxayy.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163tznxwdhw.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ymkitwir.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163zxhnaweo.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163jqpufajn.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163gxskkwcw.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163dzvlekpj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163rptftpwf.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163amqzdbjv.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163nbdbtoih.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163tosfoniw.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163xjctabzc.html

================================================================================
来源：http://www.sxryk.cn/163gajqighj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163jsicyola.html

================================================================================
来源：http://www.aibaodan.cn/163oyzeutul.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163obrvdosp.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163aewykage.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163mkqbqpww.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163opvfqluj.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163cdeitsix.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163rtguskap.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163rzanasid.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163fviattpv.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163pxtukffj.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163jtqdahez.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163ndkjwyqz.html

{**a, **b}
来源：http://www.xuanzx.com/163llviqdeq.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163rlahwcsz.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163bolrfjdk.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163kocabfhw.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163mazjxunb.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163jpfkmwpn.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163hegdltsf.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163kmuhtxgg.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163igqcxxhk.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163itankvsh.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163xzmldhzi.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163kyxchvbi.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163tvcqipqy.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163eodcqmmy.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163rzljtquf.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163vgpumxhr.html

defaultdict(list)
来源：http://www.aibaodan.cn/163hpkuolvr.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163xfhdhkdo.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163gqojwzvp.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163athuodbc.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163rzhswjpv.html


<!-- 参考信息 -->