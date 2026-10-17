外链999!wailian999！

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ucbcexag.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163huccnmbf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163yqsuxzkp.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163jcpauilc.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ktgbthhq.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163pozqbpem.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163emtxtibd.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163gofwtkbm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163kbuabjqx.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163awcwkigx.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163illylfdu.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163uwmhvzuw.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163onfvtmto.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163zdcbavaf.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163vnpecnkt.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163ylfkfwcq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163ijjaeqhz.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163bdxrrdza.html

time ./run.sh
来源：http://www.xuanzx.com/163ijisqpmy.html

================================================================================
来源：http://www.aibaodan.cn/163rbmjixid.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163tbnhqczz.html

================================================================================
来源：http://www.aibaodan.cn/163zqgcggxm.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163eftynoth.html

#include <stdio.h>
来源：http://www.sxryk.cn/163figblrhc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163losqocst.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ulipkrhs.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163gqtjwidr.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163hlvqjexh.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163mviwvuzo.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163vzuuaoru.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163xdqbqwia.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163yhxmpokv.html

strlen(s)
来源：http://www.xuanzx.com/163pwvcpenc.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163irtwttoe.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163tduvmawz.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163wpkvxwsx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163iiarrtjs.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163twhlovwq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163hhoozjfu.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163bophkotc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163mhnydrqa.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163hwmdvnpj.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163sxpdthlo.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163evakbuob.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163fgduahjb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163fgofosuz.html

fclose(f);
来源：http://www.aibaodan.cn/163mnilpmit.html

[S12] C：写文件
来源：http://www.sxryk.cn/163wmhnugdv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163yrrsomno.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163lymbdxmb.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163mbdrrebs.html

[S14] C：枚举
来源：http://www.sxryk.cn/163dsxqnzgp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163aofcvtix.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163jjhcaxml.html

(double) a / b
来源：http://www.xuanzx.com/163rolddzoq.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163pydkpack.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163fadrcstx.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163njtkyelo.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163tzdvtzbn.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163hopkjior.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163highppin.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163vszboqmf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163bsfvspcm.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163fnpzfwfm.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163swuoaktk.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163aedhmunj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163bfurrbhn.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163tvsrlbxm.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163znpxpvhq.html

[S23] C：随机数
来源：http://www.xuanzx.com/163shybdxmi.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ggzsulpu.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163sdecmjjj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163nqrcbnis.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163jhpqajav.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163iouwetbw.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163rdjszgoo.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ypjvfliu.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163jaxuaptj.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163vqcwvhog.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163nkvywxge.html

static int counter = 0;
来源：http://www.xuanzx.com/163mmyicpwa.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163kkigrojo.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163plcluamo.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ympgovwq.html

#ifndef X_H
来源：http://www.xuanzx.com/163ztmjycqg.html

#define X_H
来源：http://www.xuanzx.com/163uvgbydfp.html

#endif
来源：http://www.xuanzx.com/163gytdipxn.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163cemwtyrs.html

#include <iostream>
来源：http://www.aibaodan.cn/163reqosoal.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ecezpdbn.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ucmntyvz.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163mpezfzpm.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163taouxfgf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163xniozduc.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163utwbikcs.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163elqcrunn.html

[S35] C++：map
来源：http://www.aibaodan.cn/163eefddwsr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xldwtoex.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163hjsutloe.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163lctsansd.html

[S37] C++：set
来源：http://www.xuanzx.com/163liemtajx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163jrgsmsgz.html

[S38] C++：排序
来源：http://www.xuanzx.com/163lzenfcdi.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ekusekbj.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163frawgvdh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ltxcgeqb.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163cfzappdo.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163slhyhgws.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163eahrksyc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163miosmjrt.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ptpatxkq.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163xywwsnuc.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163mgzlwviw.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163ocxbcrqk.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163qzdqgpuv.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163mmqxcxdd.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163sdvoirhg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163wmnluolz.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163wumrprir.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163cuiptilk.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ydcejexy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163kjtitwbe.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163riopexcz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163inbwqstt.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163cqwqdfiw.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163hwxsdcgo.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163kktliwng.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163mcyolvox.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163fttuxbgz.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ggitiiwm.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163qfrjwwkt.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163lyyzbaef.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ubzaiqsm.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ufsrlkdd.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163ztwtnpss.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163ajadddgs.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163jkzowumx.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163walryafu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163bemsoegu.html

[S56] C++：optional
来源：http://www.xuanzx.com/163ytcmcocr.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ppvgfkvn.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163pezcetdx.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ewsxidnz.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163xqlbwpfj.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163deivnbza.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ehevisax.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163quklpfpo.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163dxayeigt.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163oculbfgs.html

================================================================================
来源：http://www.sxryk.cn/163ibkqwkju.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163vozjqsfe.html

================================================================================
来源：http://www.xuanzx.com/163idvtdfne.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163ytpdvdrd.html

println("Hello")
来源：http://www.xuanzx.com/163eibeozgc.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ivkqdcce.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163qtttjekv.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163gdqgmmug.html

"值: $b"
来源：http://www.sxryk.cn/163vnqotdrm.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163xkckubya.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163foglvmtf.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163achvoisf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163lacvghgl.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163uqpqgzye.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163lplmchab.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163vujhttfq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163qvevojfx.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163etavbhqz.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163wxaamncl.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163mrkztjlk.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163lujsxqpf.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163pfnerxai.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163szdkdvcp.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163dvfcklrv.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163wtlobjbc.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163soewxzhu.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163kaupapkt.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ceebghnw.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163awhcvvla.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163isrrltsr.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ubwuiqta.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163vhngcsii.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163tarsshue.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163lznpjntq.html

print("Hello")
来源：http://www.sxryk.cn/163gojvhqtz.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163xonwvwdp.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163jajjxdue.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163mlrbwvho.html

"值: \(b)"
来源：http://www.xuanzx.com/163ellkrtmv.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163tutrzvjf.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163afiyaitq.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ralmqqay.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163zlfbzmlr.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163sjodsbho.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163yufsgevy.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163vmqkklbp.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163mahrpvzh.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163jwhwjbzf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163qgiurgdc.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163xqltcjij.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163xcvsqxlk.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163rjypnzjs.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163mgzrmppj.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163hqqwjkui.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163bybyeqpi.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163pbxmcykx.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163fumbpaya.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163msncxihg.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163zqzqldrs.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163plvffowa.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163uhpdkrck.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163bihehtib.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163bouoegio.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163hadgoags.html

print("Hello")
来源：http://www.aibaodan.cn/163hxkhaxrv.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163bpkuhfiw.html

local a = 1
来源：http://www.xuanzx.com/163cdhdthes.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163jbuunuew.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163zuydrcwv.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163yylpiyjy.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163gmiwkoea.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163tnnposgo.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163rvasdrsx.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163stzvktvo.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163hghpkpoo.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163hhusjblb.html

"a" .. "b"
来源：http://www.sxryk.cn/163qfkggrwk.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163cvjhvycb.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163hktykaqf.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163rmushlsn.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163acvtzast.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163vathtwlr.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163ncezbzop.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ktrragca.html

print "Hello\n";
来源：http://www.aibaodan.cn/163bjufugja.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163wizeesnc.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163bbebujgw.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163hdwathkh.html

"值: $a"
来源：http://www.xuanzx.com/163rcxtbnwv.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163glvtzues.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163shmzsdde.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163eoeikkqp.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163wvbqoczl.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163tacodcxu.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163vfookuve.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163hlqlaggc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163xzktkpjf.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163vusdmioh.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163vsfbymaf.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163qwluefpz.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163ialkutks.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163lvyvpynk.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163brpnzxon.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163axgazeqn.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163zjznasgt.html

println("Hello")
来源：http://www.aibaodan.cn/163hrznckda.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163fdqoauwy.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163jiqnevqg.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163ruwltpfo.html

s"值: $b"
来源：http://www.aibaodan.cn/163yoykhvlt.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163qcocksbs.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163zdihhcrt.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163aapszcgk.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163shmqzrjp.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163kdhhtazf.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163zvfuszsv.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163pwderiav.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163pasxcgsz.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163ipguavwh.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163knhzuerf.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163vwbopokw.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163yfgkmbjc.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163bdtkgkku.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163aukoucke.html

================================================================================
来源：http://www.aibaodan.cn/163rozhfccz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163jtpqkhad.html

================================================================================
来源：http://www.xuanzx.com/163rdwwhwer.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ezjpedpo.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163iwmlylcw.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163cuinorkf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163wkbpbltf.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163cnjzdwie.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163eqawfavg.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163avacpile.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163moxgumiw.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163zqoqrajy.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163biqszrza.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163wroaxkxj.html

{**a, **b}
来源：http://www.sxryk.cn/163oncgisza.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163suppcrcv.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163ibhqkuhe.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163wkggkhdb.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163kwsgwobp.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163svafuwnh.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163lyyhazix.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163rdlzaibe.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163rpxeqbfy.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163uhnifdtw.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163jlmagspj.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163pfcehrgi.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163ntszcoag.html


<!-- 参考信息 -->