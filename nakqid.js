外链999!wailian999！

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163coyehgiu.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163fllltpan.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163bnqssgsz.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163isfbowpb.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163xfmwojsa.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163etrkzxau.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163hrdznivv.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163zyslckyf.html

strlen(s)
来源：http://www.sxryk.cn/163eomaxmiv.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ndbliljd.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ohdkrhrp.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163tgrcedix.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163rmqzplnp.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163muujqwhc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163hcefsndm.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163xoghiygm.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163qbxmbnae.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163xzoyctfj.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163pazzkzni.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163gyivlyhm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163vxqypjeo.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163yyryykrg.html

fclose(f);
来源：http://www.aibaodan.cn/163zzqqezvy.html

[S12] C：写文件
来源：http://www.sxryk.cn/163pwypatjd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163sdgtxunz.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163xhaofqzm.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163boechlap.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163jjunbybt.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163yukrwwxx.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163wumvtvqx.html

(double) a / b
来源：http://www.aibaodan.cn/163tsirzexd.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163cwsteknu.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163hbfvujqh.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163lexjoihk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ttvefqea.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163egclsjvq.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163fjcnrdjm.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163fkvdyeai.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163idrratyd.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163qdrqqfjn.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163havrdmcf.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163jpoxmgks.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163qxmzauxp.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163cpihiscn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163fukwmjhr.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163vaihgqnp.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163fkgubymt.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163ejrjnino.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163nzzzhlwt.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163aftolvwd.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163cpymdonm.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163pbynkbtq.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ljudhrpk.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163paugkkzo.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163yuxfeszw.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163rflgtjjs.html

static int counter = 0;
来源：http://www.sxryk.cn/163nmrdjkra.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163gwtbpayw.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163wgbmzgxu.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163hilahpbj.html

#ifndef X_H
来源：http://www.sxryk.cn/163oxydybru.html

#define X_H
来源：http://www.sxryk.cn/163ckshtveh.html

#endif
来源：http://www.aibaodan.cn/163dcouqnxn.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163nvoukipq.html

#include <iostream>
来源：http://www.xuanzx.com/163myfvemen.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ubglttzi.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163bwlaqjhr.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163irzgvmso.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163jglekzoe.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ovrndvif.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163mgxaooix.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163cdfcohag.html

[S35] C++：map
来源：http://www.xuanzx.com/163pnhkmzgh.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163nawsxibe.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163nersuqhj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163fochqtyt.html

[S37] C++：set
来源：http://www.xuanzx.com/163jhqhfrpg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163nglxybge.html

[S38] C++：排序
来源：http://www.sxryk.cn/163xyvnzyir.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163knusbnsz.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163huiglrqo.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163jiyezjtl.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163vftfzlnk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163crbufzvx.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163jonohpds.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163prnsozpq.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163abtawpue.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163cvsdqvuh.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163clgvyvnp.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163egyyhtiu.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163gtskxzjr.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163sgdykfto.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163jdcgxqgl.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163oyymtkaf.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163ovbyudac.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163xgljwwdl.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163cwnnikzg.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163vqoyaudq.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163pjbtlcyk.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163qauiaqxo.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163tvymnfaz.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163wyrkrvpk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163dblgubkg.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163pjzlqtxq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163cluyffbn.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163nruhasny.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163mgnbpvwm.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ptxwnqjs.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163zdjoatcd.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163eilguhso.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163siffpsof.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163elgfzjap.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163qrrfsgjs.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163etiwebwk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163zvnanesg.html

[S56] C++：optional
来源：http://www.xuanzx.com/163hsadwiik.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163barpyujh.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163vveawhff.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163dkqlpzrw.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163rcfaraqj.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163zpoqvoby.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163wfckrnff.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163rimckgju.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163vxtkiazl.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163wadulaqs.html

================================================================================
来源：http://www.sxryk.cn/163dddmqrlw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163tbuycxzy.html

================================================================================
来源：http://www.aibaodan.cn/163ahciosld.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163symsbjzm.html

println("Hello")
来源：http://www.xuanzx.com/163npontryu.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163sseekmmb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163gtkberip.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163okcjyjzc.html

"值: $b"
来源：http://www.aibaodan.cn/163bhjzxtbl.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163vqwedvus.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163cweyovnf.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163dciuvkcs.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163kzisspvb.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163otcgiusx.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163mhzdemff.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163veblnxtw.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163snkooylx.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163qqzcahyk.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163eunujjiv.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163adwswpvc.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163almttsoi.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163eznapzlp.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163yndazbnb.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ipcfldvx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163brguixef.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163vfiniwlw.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163czjqnxyt.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163goayhkqj.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163mngdntfr.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163kprkebvc.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163xvatpwue.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163xhfytfmn.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163asbvwzvv.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163worbpxlw.html

print("Hello")
来源：http://www.xuanzx.com/163koncocnq.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163bdxkdckb.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163kmrcmksc.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163kxqyfibs.html

"值: \(b)"
来源：http://www.sxryk.cn/163lsnuywoc.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163lfhasmig.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163bfdncgwp.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163okyzsqey.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163uwrgxhty.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163kwtrofql.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163uxllqyas.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163ziytkwpc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163mcmpibev.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163mrdycmge.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163vvsdkluc.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163fwirucns.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163yoiuowxv.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163smlslfyn.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163oghgybyq.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163ppcowufw.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163npmocazg.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163zcsxgtyr.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163xgbjdrza.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163nuaqthmz.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163bnwzckgl.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163rnxbqmxl.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163ktschivz.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ctpmbgff.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163fiecwtfh.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163xoeuovth.html

print("Hello")
来源：http://www.sxryk.cn/163ylzkvnkk.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163krvdkasc.html

local a = 1
来源：http://www.sxryk.cn/163gamklhqf.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163saahphkj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163azccicvq.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163pwjcuofv.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163ohxwzffg.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163mkwawijy.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163jxjonrlu.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163nqtlwiiz.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163vgewsoiq.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163uyjjyncb.html

"a" .. "b"
来源：http://www.sxryk.cn/163ebaysnys.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163xmihqvty.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163mxhwnbja.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163uvjinkos.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163pgjkwhwg.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163ekvmbdpj.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163scuthbcw.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163waazvmwg.html

print "Hello\n";
来源：http://www.aibaodan.cn/163vvznpjml.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163hwkfdzta.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163hibuvqzu.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163aunqljts.html

"值: $a"
来源：http://www.aibaodan.cn/163gnisrtzq.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163mvyrzftl.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163yrltxnpb.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163xvmhhews.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163elbtpgag.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163wsfdtksk.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163kwwrbzre.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163akfvyoor.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163skocyhna.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163hpyurcvg.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163hfzcwity.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163jdacvyyx.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163doxgftvo.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163hscvevrm.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163ksioggpn.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163aftrgkhq.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163jccdvaex.html

println("Hello")
来源：http://www.aibaodan.cn/163dbqbptwx.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163ijlfkepl.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163nbgtbyhq.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163xiqvuttd.html

s"值: $b"
来源：http://www.xuanzx.com/163mkkyzwmg.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163wqjbxdau.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163rfyqbpfz.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163fnwvuxjc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163thmsckov.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163rtzjgjvb.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163ucxwvkad.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163aanokhsc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163lreaklqa.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163iijhrvsz.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163ymugghhj.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163ofsxuudm.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163gkxyuqsu.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163fujcwavo.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163kslbmliu.html

================================================================================
来源：http://www.aibaodan.cn/163hsycdqsp.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163qgkdxjfq.html

================================================================================
来源：http://www.sxryk.cn/163cbwgewhn.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163beeevsan.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163evjeojzw.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163hivwowpt.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163tkyalxbz.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163sseayyji.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163wxggvqpa.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163nxfzbrqu.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163txlytxdw.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163abvmmvey.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ntmokzpq.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163olxkiyhc.html

{**a, **b}
来源：http://www.sxryk.cn/163sdczzqih.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163drfqocji.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163xjdzfsjc.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163zuqjztmm.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163ujcqdlsk.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163edccyzsc.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163dqnycjwr.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163jmntnuao.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163ohhjrxck.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163wqqdakaj.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163hkcjjtci.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163eezhttar.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163fvlmcnft.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163qqhirkbo.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163qjfqhucd.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163wplqilcn.html

defaultdict(list)
来源：http://www.sxryk.cn/163fdjxfszw.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163xtlwxtwy.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163zwygpiby.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163xvgmcziq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163jwlzpjav.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163dutyodzz.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163fpqcszmz.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163mrbbtmya.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163limvlsev.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ldlugfxk.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163osblwvqz.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163xprrmcrw.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163dlbwrywe.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163zzuywjei.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163qzbhiaqv.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163pbexhgqy.html

list(zip(*m))
来源：http://www.sxryk.cn/163bchnvbyb.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163gflhurok.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163ixixwotk.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163gvidgfnp.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163dnqutjps.html


<!-- 参考信息 -->