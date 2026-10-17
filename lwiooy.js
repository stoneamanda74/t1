外链999!wailian999！

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163zdxfiamc.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163efnpndnq.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163tmdoxnsi.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163cmbklhdq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163gqdpnjwv.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163sryywggz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163brjaatkh.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163sirijbcu.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163zmszpqmc.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163einpxhii.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163bmtkukdh.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163hnsvjhtq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163cbsrbtdd.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163tuxxlekn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ympdcjsh.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163xcekyxkm.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163bfxwbvne.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163owshzmzs.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163pobnndip.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163udtvmjyr.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163sxoffstr.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163wkczkdwg.html

time ./run.sh
来源：http://www.sxryk.cn/163obmasfgz.html

================================================================================
来源：http://www.aibaodan.cn/163vfncazdh.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163wiigunjo.html

================================================================================
来源：http://www.xuanzx.com/163zgbsmehd.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ptkdhyia.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163oayhlpsw.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163wexvknkx.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163oulpawtn.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163pprabpjn.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163orclsgui.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163porfitjx.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163yjfsayiy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163kehgtvrp.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163zujdssac.html

strlen(s)
来源：http://www.aibaodan.cn/163vyalaizz.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163iwlarjqq.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163uzfwvrff.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163wpkrgoru.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163yubzlllc.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163gfyzrkgq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163sasxejda.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163byvukpyr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163trumjgre.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163hwicpldg.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163ffhhymti.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163pydjfpjf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163hekujaai.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163vcoqwiol.html

fclose(f);
来源：http://www.sxryk.cn/163cvjwvymr.html

[S12] C：写文件
来源：http://www.xuanzx.com/163onezflep.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163iqzdyefk.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163ickkwery.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163mxyabccu.html

[S14] C：枚举
来源：http://www.sxryk.cn/163wbrablmf.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163djwsoyrr.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163rnslgtql.html

(double) a / b
来源：http://www.xuanzx.com/163hqbjgulp.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163casazvji.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163oqycnphu.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163uneeiajc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ncblxcgf.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163noddiepx.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163dnfbjsia.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163fpthudmn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163yqrntqmq.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163vbgwhljv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163igkiggks.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163vyqcgzvg.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163hxpijxva.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163zhqvhiqf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163zejtvnqx.html

[S23] C：随机数
来源：http://www.xuanzx.com/163phainyov.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163erhgaqsr.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163aamlfhsv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163yuexqvrt.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163lltzdqjm.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163htvgyvol.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163vlvdvzyf.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163yfpcsidn.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163eypkjzuk.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163jslcoqvb.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163wkuoaqxe.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ursnwhfa.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163xuoujcey.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163slebfdpr.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163jweihkew.html

#ifndef X_H
来源：http://www.aibaodan.cn/163thdtewvw.html

#define X_H
来源：http://www.xuanzx.com/163daxhbfqk.html

#endif
来源：http://www.xuanzx.com/163lmslbmzj.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163niwneouf.html

#include <iostream>
来源：http://www.aibaodan.cn/163rbargusd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163oksrhlhz.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163zkmbypyq.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163ctvlxovr.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163wohpbikt.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163wjibeicl.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163bnhaheif.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163abvfxzzg.html

[S35] C++：map
来源：http://www.aibaodan.cn/163bavczmyy.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163zjllwadc.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163uiluzpxd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163lckhosuc.html

[S37] C++：set
来源：http://www.sxryk.cn/163wqpvpemy.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163qdgrqkid.html

[S38] C++：排序
来源：http://www.sxryk.cn/163srhfwekx.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163kbkqvgap.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163zhuvrprl.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163udrcpbbb.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163dkanvpzs.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163yqlzmnbi.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163ukcseoyu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163eeyyoqvo.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ndfktqnv.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163gezxwcpo.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163imijkvkb.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163vjvrofyv.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163fjckmsfd.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163dvrkeril.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163oknnnyli.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163yigveppz.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163lyhooevj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163wyillmmo.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163qeznczkk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163gxdvynel.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163bovlpqef.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163tnfxukch.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163dshsodei.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163uddwvnjf.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163wlyedfza.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163bavqexxk.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163guefstmk.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163blinhsmo.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163vnvkbjba.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ppcjxdiw.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163nuaiscuz.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163sgqddfqu.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163azpnhllt.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163umezunaf.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163pwyvgdfh.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163xrtpdxsa.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163unrzkuyy.html

[S56] C++：optional
来源：http://www.sxryk.cn/163cbhjwjap.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163olodvwzi.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163zntyulge.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163otxhrgqf.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163drxsrlsy.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163dzjhkzba.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163rwczsbqa.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163uqkwsbwg.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163oricatyh.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ienplanp.html

================================================================================
来源：http://www.aibaodan.cn/163lzyukqpm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163anzferyh.html

================================================================================
来源：http://www.aibaodan.cn/163dckfdytf.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163agpilnyv.html

println("Hello")
来源：http://www.xuanzx.com/163puhcmuwi.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163frvtrywa.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163hjdgduoj.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163jcdcdnkt.html

"值: $b"
来源：http://www.aibaodan.cn/163dvqljjgw.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163uqwlwgxv.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163hjovyzxd.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163exwihlzm.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ethqldmf.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ivofogrm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163tbajkegy.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163wvkhyucr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163cjqbapem.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163hkywtpdu.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163lmotgllq.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163nhhvyrvz.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163kdxzaemx.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163gitckvqi.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ljnzowgq.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163gmfzzrdc.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163wsqfqhjl.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163exkglgsf.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163cwcdalog.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163zcrlvfbd.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163bgkdsfba.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163wphtpezp.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163iaeomojn.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163nqpflcpq.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163balijbcg.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163ustebbwz.html

print("Hello")
来源：http://www.sxryk.cn/163koqwwlme.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163rnsjshrd.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163vvwsyjeh.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163egxcelkt.html

"值: \(b)"
来源：http://www.sxryk.cn/163lvopwonl.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163zswztqtv.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163zyavthqd.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163wcxmhnsa.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163yzrcrdfk.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163xqlingya.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163csoafvbs.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163vcfrspcd.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163jwkexpso.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163jrmaittq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163xprsjnee.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163rlnezyhs.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163rdvifnll.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163vvujdibs.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163qhyedpza.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163xlumxzbz.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163fomdzvxx.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163kriyxmqn.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163msazprem.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163tsrbfhpw.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163rkhwmjnt.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163shnktqwh.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163mldnwmww.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163qiirlrjc.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ltbnuris.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163aomhbsfi.html

print("Hello")
来源：http://www.aibaodan.cn/163loejdomn.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163mnkuklhe.html

local a = 1
来源：http://www.sxryk.cn/163lsgrklyn.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163rptbiuqu.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163lccefjpj.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163hfmytyis.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163xkaysjfe.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163zsadgxxm.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163jvqlsclu.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163vjevstks.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163kfqcswhj.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163rcojreoi.html

"a" .. "b"
来源：http://www.xuanzx.com/163rcxzgsvk.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163ktbwdnie.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163fwcgkaiy.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163gwwmvqwu.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163gqnazowp.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163qmtxluur.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163paqakzbp.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ckabhqrr.html

print "Hello\n";
来源：http://www.xuanzx.com/163cepeozqg.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163bqvclzhr.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163fqliyyop.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163hlbgjgcf.html

"值: $a"
来源：http://www.xuanzx.com/163owfzfhpg.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163dycfbvrs.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163xkffrrqd.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163comoqtbn.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163cbsffhtr.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ftjlhbzr.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ehisjdis.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163dkcrnmjw.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163rzdgouao.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ufjvhjhw.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163dbjtegwm.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163niygxnrs.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163efgolahu.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163eewucdma.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163tenxhfqv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163wqjsfjoh.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163viydvkdf.html

println("Hello")
来源：http://www.sxryk.cn/163feuaugzf.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ypxsujek.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163krzoxpjd.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163qtntkcyo.html

s"值: $b"
来源：http://www.sxryk.cn/163jmbsnbwc.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163vsrmhdye.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163rypzykil.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163kqnwvdqo.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163knfnjlle.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163zdgjihxw.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163znylkskn.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163qnujsjwu.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163ubgsjurd.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163utxroihl.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163kmgoflwv.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163cozdlxjk.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163bdfxfnob.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163udwulxma.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163qzycbyyy.html

================================================================================
来源：http://www.aibaodan.cn/163mtpvbvbv.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163uvahfxah.html

================================================================================
来源：http://www.sxryk.cn/163gzkgjsch.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163fsgzjwyo.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163jijslsey.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163gzarwfue.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163moxdlfjl.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163fmpfpgkq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163kblabvyo.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163wojooemo.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163zwxpqtyb.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163nteqlnpw.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163iffwqsoc.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163xozbnxjl.html

{**a, **b}
来源：http://www.sxryk.cn/163tdxgyfhy.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163psegiidk.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163wdvzvoon.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163qjigpstu.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163jxhslfbt.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163vsjkeckp.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163oleoflfb.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163jkvkmudh.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163astwpqud.html


<!-- 参考信息 -->