外链999!wailian999！

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163juhjwkaw.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163jchpzgnj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163swpurvtt.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163bgydjnit.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163fxuutayz.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ylrenbjg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163hczmuwfg.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163cxtntfrp.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163qgchyybq.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163qozedsza.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ygocjytl.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163ithrkujk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163mtwhsion.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163tzjdhykg.html

time ./run.sh
来源：http://www.xuanzx.com/163grzwxfzs.html

================================================================================
来源：http://www.sxryk.cn/163cgguvupz.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163upkvypqy.html

================================================================================
来源：http://www.sxryk.cn/163oshknbry.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163gpwasdgj.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163eoarbqqj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163kqskzygl.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163dtqwqcmt.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163sdmdtnsb.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163fkdvvgpg.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163fuqsgvhf.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ikpgthzi.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163jfrstazb.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163htejrcyq.html

strlen(s)
来源：http://www.aibaodan.cn/163qkslqflh.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163nlmzzpol.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163ypzenilq.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163hamaudds.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163hzfwdgqp.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163erevmbto.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163tzzguitz.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163dvqziaht.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163bxhdvuzx.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163zdzmiarv.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163wnpzkswp.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ihuchbwb.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163gajeyxuc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163iktcohbc.html

fclose(f);
来源：http://www.xuanzx.com/163hxmlunns.html

[S12] C：写文件
来源：http://www.xuanzx.com/163qlcpqxhl.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163hdhhjkzk.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ygwsmhlj.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163caijrgux.html

[S14] C：枚举
来源：http://www.xuanzx.com/163kdfefgtv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163uwrntnmn.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163miknooky.html

(double) a / b
来源：http://www.sxryk.cn/163uaeqejcj.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163utkbyhcp.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163tqkbsqpc.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163jtsnlyep.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163uxftpnln.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163glcfoslb.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163vfzkvthk.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163mfwfbtxf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163oxrxegvp.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163csppcmaq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ykstripn.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163dfwewchw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163dnhweego.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163yaurazry.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163qvlkuloi.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163wbtcnahd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163oehstfkm.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163zfngrknw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ispqfydf.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163hamwrwlw.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163lcwfyway.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163jqhtfwsi.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ewprpwib.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163cofzdkwj.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ezxgoxfw.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163tdxhwtru.html

static int counter = 0;
来源：http://www.sxryk.cn/163ybphjyiw.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163duhpcjyu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163huwggrfc.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163aqgbcanp.html

#ifndef X_H
来源：http://www.xuanzx.com/163ypkgstym.html

#define X_H
来源：http://www.xuanzx.com/163wgytopjj.html

#endif
来源：http://www.sxryk.cn/163dujqnkwi.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163sdebmofb.html

#include <iostream>
来源：http://www.xuanzx.com/163gsnlurar.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163sjwbdqqd.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163fkvlqpmn.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163zrsobkmn.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163grcaiild.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163uepedwhw.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163bsuolisj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163jqycblku.html

[S35] C++：map
来源：http://www.aibaodan.cn/163eiexpymd.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163kwndsgng.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163xhafntgp.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163pbrfmxjo.html

[S37] C++：set
来源：http://www.aibaodan.cn/163tsjqpifm.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163dhdaqyqh.html

[S38] C++：排序
来源：http://www.xuanzx.com/163yfkxqoew.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163nylrrtmi.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163riigvbpt.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ocwshmgw.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163dzojjmsq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163mhvhohey.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163jgglozvc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ouldloqx.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163tezewlew.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163qpoauspb.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163toijvuhp.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163hrtrvrmk.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163xyundtkr.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163tettopic.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163wpqqktzo.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163cgdncssd.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163ljgtmgdi.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163awjhvamt.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163loseewcx.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163pbgbahto.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163nwmbtxpp.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163hmgauyvt.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163mbxmugxg.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ustxycru.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ugajpesp.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163zbepbzpa.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163dydazphs.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163mvqxjqii.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163pbiszojp.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163rugqpqem.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163aoffmabv.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163hwafyuoz.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163qfdnroto.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163jkztbvbi.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163jmmqnkuk.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ulbrcuon.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163xwpkpjvf.html

[S56] C++：optional
来源：http://www.xuanzx.com/163lsqoeary.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163dewdvfga.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163dpjvsano.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163gegraofy.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ebuuahlo.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163iyaxagod.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163yxempmrq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ubmtjleo.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163yzkhmlhk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163jtuggwnz.html

================================================================================
来源：http://www.sxryk.cn/163nxqrtzbg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163befklsnc.html

================================================================================
来源：http://www.aibaodan.cn/163gpyfpkgy.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163etswvgzc.html

println("Hello")
来源：http://www.sxryk.cn/163zgrewgwj.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163llumwcln.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163bgssgjgk.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163toeuoupd.html

"值: $b"
来源：http://www.aibaodan.cn/163eupzntqp.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163dolyitvw.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163xxwgtvxr.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163mraazija.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163zsyqpnrv.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163fhuwueuh.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163kumlvauf.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163mqzpcryt.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163hatyyftq.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ftuimxuz.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163kerfkxjy.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163svgwfjmt.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163qweberdf.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ubrbesji.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163xnpvobgf.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163ysojblge.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163jqomnint.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ulcbyxgw.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163qxwkdjiq.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163zohnnofv.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163vbbjhmpq.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163frhteama.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163dxxodtim.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163mtyahasj.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163fvighrql.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163urbxaiof.html

print("Hello")
来源：http://www.xuanzx.com/163vkaancaj.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163hghaqads.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ijzdacbf.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163jugwvmnx.html

"值: \(b)"
来源：http://www.sxryk.cn/163ntquwktr.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ippxtkxp.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ujpnbgiw.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163eeuqbjue.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163ynxqityc.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163kedaigmr.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163dabrqeys.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163arukekrn.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163mnlilmvo.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163lpegfpxx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163smxtorim.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163gyplsbwa.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163ejhepwaa.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163yqixihxn.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163eturjmil.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163jshdqmrf.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163zaqxocnh.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163sqguhbkc.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163yzsvywtu.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163qrfoqdda.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163artmrwxf.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163fwcxvsmq.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163huqkljma.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163xqqagerx.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163lzjptank.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163yuqsrljz.html

print("Hello")
来源：http://www.sxryk.cn/163ssthnulk.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163mdukhbbj.html

local a = 1
来源：http://www.xuanzx.com/163eyzfqzkm.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163nutinwqf.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163phcgrpba.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163uwafrnlc.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163zbtsrsqr.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163vwidrupr.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163eunkxjcq.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163gvawqtko.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163zikhrucj.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ffwckybj.html

"a" .. "b"
来源：http://www.sxryk.cn/163ccuejgmf.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163odskcwpu.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163lsrxubfz.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163ufxgomdp.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163ejktxfkv.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163nmqdwmgv.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163jhkwmyko.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163dpmjvzzp.html

print "Hello\n";
来源：http://www.sxryk.cn/163jrqhjvsp.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163onzkkzzp.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163yrwyerqg.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ychljnix.html

"值: $a"
来源：http://www.sxryk.cn/163nnzlncfs.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163sqniigkq.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163npldzbre.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163ptesmbus.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163jwwncmky.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163avnlsvow.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163fielopcv.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163nlbebadk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ijqjhvnj.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163iwuyrifl.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163goqxbemk.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163otzdsoiz.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163kpqdqyil.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163uycepllh.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163xruwkesb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163nuabsdmi.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163spfqujnb.html

println("Hello")
来源：http://www.sxryk.cn/163gznwkvej.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163zkhrnwxo.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163bvzzbwmh.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163akrkzhsa.html

s"值: $b"
来源：http://www.sxryk.cn/163wasozqlq.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163kbwxfeho.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163cfgzkfyl.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163yoztbxtr.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163czgtnsnl.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163bpcxerph.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163arekiiht.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163qwijdilh.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163xrsmynme.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163ddkanmid.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163nntoppih.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163dkvfcyda.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163efsxosob.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163maijdipp.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163zueddbzp.html

================================================================================
来源：http://www.sxryk.cn/163kzujrxlo.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163tsfnnjqf.html

================================================================================
来源：http://www.aibaodan.cn/163cunyvhqn.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ocodbrjc.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163awbzvcnu.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163jcktgosr.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163ajnbbskk.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163kmnpjbpw.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163kwudcjcn.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163crtkbjlu.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163fvbsvsqk.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163zxghmrqk.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ortwuwwu.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163anktomau.html

{**a, **b}
来源：http://www.xuanzx.com/163vwymjtnp.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163hrfmboaw.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163jvbegdju.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163kejukzir.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163hdosbgvm.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163sdbeeamj.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163znkmmigr.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163fcnxdoyh.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163bdzwxmtd.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163hoeotmkg.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163jvtcfzwi.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163soevzroz.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163ewdnwfgg.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163nugeubrc.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163hvlwqmnl.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163zwanpdbc.html

defaultdict(list)
来源：http://www.xuanzx.com/163mbbkhxcn.html


<!-- 参考信息 -->