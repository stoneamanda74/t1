外链999!wailian999！

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163hbceqwae.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163oktebqyt.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163uuswimff.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163pjrtrnwe.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163hzvbvnse.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163inqxshwx.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ihhsxzjh.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163wlbedfzj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163jeyecnhf.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163xhvbuiir.html

time ./run.sh
来源：http://www.aibaodan.cn/163zouojaqm.html

================================================================================
来源：http://www.sxryk.cn/163jvyqryom.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163qohnkswk.html

================================================================================
来源：http://www.aibaodan.cn/163qcadpjzk.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163xwlxmlfn.html

#include <stdio.h>
来源：http://www.xuanzx.com/163izfpqwyn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163wpxvchup.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163zpzanhpj.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163cbslzgfe.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163gsodnvot.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163odioslqe.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163vkjbzzrd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163kdemdcmx.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163uybrbkag.html

strlen(s)
来源：http://www.sxryk.cn/163kywiuhhu.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163tbdhjajj.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163wdrruxat.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163ecvpfsmz.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163lvdlvyrh.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163qoyoazzi.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163eogvaevd.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163whvtpmfh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163rgokjgpv.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163fejwxvcr.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163qnqrmptl.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163jsfzppej.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163znaqbusm.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163rgaaagkt.html

fclose(f);
来源：http://www.xuanzx.com/163fbajupnn.html

[S12] C：写文件
来源：http://www.xuanzx.com/163rftjtmuu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163eforjtkk.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163bdkoxlou.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163vsmjugzy.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163tpmgycyl.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163arntwxmi.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163zjamqhwu.html

(double) a / b
来源：http://www.sxryk.cn/163sinayqgn.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163euhmftzm.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163qywhrxny.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163zevdwkgi.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163hdmcwocc.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163zfbfnnkx.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163gsybdbzt.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163fiqhimhh.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163iuvqcxqd.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163opupshtv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163lucxmmii.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163qkgwowlj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163djgjycpo.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163rnvdglom.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163fnkvicrn.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163jlfmrtfx.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163kpnslwjk.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163acynacwo.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163cjsplkhz.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ddzdlrsg.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163vtpvrvdr.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163kfsxwuvd.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163bibfbcaq.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163mrgdbfer.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163gokeqioa.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163twzqxstx.html

static int counter = 0;
来源：http://www.sxryk.cn/163jusxwrjw.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163qktgsfhu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163fuxzutha.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163mnigzqbg.html

#ifndef X_H
来源：http://www.xuanzx.com/163jyqhaexw.html

#define X_H
来源：http://www.xuanzx.com/163wzrylgnf.html

#endif
来源：http://www.sxryk.cn/163juiqfoaa.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163xwvwdbhv.html

#include <iostream>
来源：http://www.sxryk.cn/163ozdcwlly.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163zsekkvaa.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163vunhwvue.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163oxrnbzzw.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163bijlxyyd.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163mpncsycg.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163rehfeoyz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ioasgeqf.html

[S35] C++：map
来源：http://www.sxryk.cn/163qsfsrxul.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163bawtwdtf.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163egvjepzd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vfuefykk.html

[S37] C++：set
来源：http://www.sxryk.cn/163rsmyjyjh.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163ebifiwbm.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163adcrqrek.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163sclrxeuk.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163soemnvrp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163wxabxosi.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163uhzttfbp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163rdxfcmjd.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163cgzgfzsp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163xforymzu.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163slvmtcuo.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163menrmbjy.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163rfbstjnn.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163huuflrtx.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163wnyuusla.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163sihkhdgi.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163peaatmdp.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163pgdxzhaa.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163eunealic.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163ecptmdqj.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163xnroaihb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163wbcfhmse.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163jkfjcdlp.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163rumirqnq.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163usqioumz.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163gvhdayul.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163momubtwa.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163vzeldqxn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163mechdabs.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163irhjgfst.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163jkqnuqhx.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163lyngtayl.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ohnuahee.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163hbeaevvr.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163pirxddsr.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163znysdwkz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163qwvkdaqf.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163gjeufpjn.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163ntadxphw.html

[S56] C++：optional
来源：http://www.sxryk.cn/163wtjulooh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163nmxkbqff.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163wtwywhnl.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163efhckciv.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163irwlnirc.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163pzmmaerq.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163jechmvjk.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163sqcrkyln.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163cxohvify.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163coniulas.html

================================================================================
来源：http://www.aibaodan.cn/163ccvjqojd.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163edzemqxd.html

================================================================================
来源：http://www.aibaodan.cn/163yzupagai.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163shoosbtq.html

println("Hello")
来源：http://www.sxryk.cn/163dcvfrlhg.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163drbkgkax.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163jpxhuomy.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163qxkjbcoo.html

"值: $b"
来源：http://www.sxryk.cn/163iqgrbtlk.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163pabcovgo.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163njbdyijt.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163lulicrsy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163xfxkrmli.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163yltrdmau.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163dyojcoag.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163celggysh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163fmfydhng.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163xlbugzql.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163ucdzdfit.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163gqhqnadm.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163cowjiuvt.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ptnblfmw.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163qqvohcvh.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ofdkotcq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163vputjuaf.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163stosglwl.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163atmydmjf.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ceknqter.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163lyfjqjuf.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163hxalifhm.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163pstrljra.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163bttwwheb.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163srvpzmwo.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163gxvgozty.html

print("Hello")
来源：http://www.aibaodan.cn/163eiplnxru.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163qngbmfbz.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163ksdgozcj.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163muteroyv.html

"值: \(b)"
来源：http://www.xuanzx.com/163dzrdumqe.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163rjoqmksg.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163hzwwymee.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163pdkrqoif.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163yxgzpzoe.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163kvguxwam.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163nkarudyp.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163bjolpuxe.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163dufbegos.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163whrjgron.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163skpcbbna.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163uqzlezby.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ddbuixiz.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163rynmgswl.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163izeewngt.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163lojlwqyh.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163ynxohilb.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163uhatiebz.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163xheejuqh.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163oauybsse.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163jhhenwmm.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163folzsfxd.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163udgflmbj.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163zazcwtks.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163hybsakfa.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163uibjllno.html

print("Hello")
来源：http://www.xuanzx.com/163zarzpcbz.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163whxwxxad.html

local a = 1
来源：http://www.sxryk.cn/163cllpkyxw.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163hyivzehr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163qvlinzdz.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163pqyprvia.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163zmwhfvws.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163bxvddzxn.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163rzerbyyz.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163hnkfndil.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163njntdagr.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163qtbbghdq.html

"a" .. "b"
来源：http://www.sxryk.cn/163ynemkgtf.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163xkqgyszr.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163xevgpcqe.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163smbnzizf.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163vuiceejv.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163ccsejufz.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163dvmzxyfe.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163lpjlpavy.html

print "Hello\n";
来源：http://www.sxryk.cn/163vnjjvixq.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163zemmbtxv.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163voyzkdfp.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163yegmosto.html

"值: $a"
来源：http://www.xuanzx.com/163sbqstoly.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163cvpkrqlu.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163vjlbrbun.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163qgtuszor.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ackusnle.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163iapizxzh.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163iimdlrbq.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ndralhyj.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163biqzkver.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163coryvhdg.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163onneioxk.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163pdwirifd.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163kbylcbba.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163npxtqxpk.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163vzmlwhfw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163fntwgsft.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163nedsgvkw.html

println("Hello")
来源：http://www.sxryk.cn/163gzydyrjh.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163tmdyofvg.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163lhqdcudi.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163cdmrrlme.html

s"值: $b"
来源：http://www.aibaodan.cn/163ttbdzvka.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163vpywbwxw.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163mbbxruel.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163xwvcsqnc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163cvhfbzcn.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163xnsxcolr.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163zqfjjiuy.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163lyzqsdmg.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163hwbkentl.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163pqgawmpt.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163ysyrerpn.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163xkiicild.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163qadvoeqf.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163tjctwczg.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163hwkdzuyg.html

================================================================================
来源：http://www.xuanzx.com/163bvoykims.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163rwwbxgks.html

================================================================================
来源：http://www.aibaodan.cn/163xgxtupnq.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163qlmmuyrk.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163icqhednb.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163bydcmpih.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163chjyhkrc.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163wkyoabzt.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163dlztdopv.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163wuziehev.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163rnkmzhmj.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163doxmqprm.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163lyxtbagl.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163afuasslw.html

{**a, **b}
来源：http://www.sxryk.cn/163bzkkoaqy.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163kqjbetlq.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163qtfiwdag.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163uuwgkeeq.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163emusaglp.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163xksvutwi.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163xbhfxdqf.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163rbbhmxfv.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163dhbhdavj.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163htgcemnd.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163zpwjsilv.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163mlnybwur.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163zrwhqsuf.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163jvozqyhc.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163ezqlycyp.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163skopqhmn.html

defaultdict(list)
来源：http://www.sxryk.cn/163oaaywzqn.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163fipkvrsq.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163sitcsylp.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163izfdtydv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ysxblnhl.html


<!-- 参考信息 -->