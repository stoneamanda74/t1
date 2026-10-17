外链999!wailian999！

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163nyohjrjo.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163yrzkrcso.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163eturqnxf.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163dsjtgnxe.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163pylgiioo.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163hghvwloz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163drgybhsb.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163crdsupdt.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163gtrqhdbu.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163skfxeukj.html

time ./run.sh
来源：http://www.sxryk.cn/163rhdkrutx.html

================================================================================
来源：http://www.aibaodan.cn/163nuvlobfz.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ygjuribo.html

================================================================================
来源：http://www.xuanzx.com/163eximcpwf.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163igwqsbgw.html

#include <stdio.h>
来源：http://www.xuanzx.com/163fmbamobk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163yjkbijvw.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163zelsdvao.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163jcsyhuol.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163mcqvcvmo.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163lxixqjhu.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163uugejpri.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163mfarqxtp.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163yhqrqunf.html

strlen(s)
来源：http://www.aibaodan.cn/163rwrrymce.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163hgysvihj.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163juwiysfa.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163rnuudsnj.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163qnkyavtb.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163iuuccdus.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163itixalpg.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163nnlzispv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163adrplrip.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163fzbtwunh.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163sksloikj.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163clccnywy.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163qfhtuoav.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163acaxyzdm.html

fclose(f);
来源：http://www.sxryk.cn/163tajkvbww.html

[S12] C：写文件
来源：http://www.xuanzx.com/163hiyfqhwz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163gpkgjfqo.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163hmocvzso.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163uszwkcee.html

[S14] C：枚举
来源：http://www.sxryk.cn/163klxdnfke.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163apqtptyi.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163srvdsgop.html

(double) a / b
来源：http://www.xuanzx.com/163pgjbydeh.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163xcjxcmpi.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163urqwzjmy.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163unssiqto.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163szgfuwhi.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163htcpnmzk.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163pqrnaxrg.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ozhhibol.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163okxxjrok.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163qlwuykqz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163hceokjmx.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163qxvamafs.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163uhxsvhxx.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163hcyvchsc.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163nxrwwflv.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163eiuyazwo.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163lapijivi.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163gpxyvfku.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163gsbdjaox.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163rcdscbgu.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163yjvwulhc.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163prhvsiyp.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163xipnxcsw.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163hapmagka.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163iixxiqxr.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163laaoelzq.html

static int counter = 0;
来源：http://www.aibaodan.cn/163dbksufon.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163diuoimqh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163nrbevvux.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ccdyyecp.html

#ifndef X_H
来源：http://www.sxryk.cn/163eiexjuyf.html

#define X_H
来源：http://www.sxryk.cn/163tajnknrc.html

#endif
来源：http://www.aibaodan.cn/163rodosbgc.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163qvogwqsl.html

#include <iostream>
来源：http://www.xuanzx.com/163susupaqf.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163stbdnpfy.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163tlvusnks.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163mrnfmqqo.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163rhjylpvf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163kjifgmus.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163chkvtbyz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163qwfrlapi.html

[S35] C++：map
来源：http://www.sxryk.cn/163kintfxyr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ddebxpgz.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163sxkhgwvn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163rizrmmef.html

[S37] C++：set
来源：http://www.sxryk.cn/163jgqgttjm.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163qmqoevzb.html

[S38] C++：排序
来源：http://www.sxryk.cn/163sxtkxhfd.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163gbhocnvn.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163fpmetskl.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163tvzpzuwl.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163tdcqgync.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163pnrmsswj.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163lcfchdzc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ertynfyi.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163zqtnmqxw.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163ontyqftu.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163uxqnzsdv.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163lwyirmhj.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163xtslrsrn.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163fljgtuyw.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163vrrlqyjo.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163vyeekuct.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163qnlvhqrc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163rcpwjwib.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163wwmzgujm.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163qsksjtfx.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163fsmgeeus.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163gcinvhdf.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163rlgpjszi.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163yvqslyog.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163xnknlobv.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163szffgpib.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ddhhledq.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163jgjxkumv.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163yaafkpxz.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163pwiixckz.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163djfacsqe.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163hlcjzfxy.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163nlmoisvp.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163vonhiicq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163qdshcsak.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163pvyexwte.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163hxgplgqg.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163tskulldq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163wrkftcny.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163fpttqiek.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163xxzbfrgb.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163cavczzsf.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163swmfnndt.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163xfpzdtab.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163kxnkfhxm.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163qhggemtp.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163venilozu.html

================================================================================
来源：http://www.aibaodan.cn/163vpodzlnw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163stiqrqml.html

================================================================================
来源：http://www.aibaodan.cn/163rrdnybax.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163bednxmfd.html

println("Hello")
来源：http://www.sxryk.cn/163kctodcim.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163anexoqgt.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163chddiovr.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163fmdxrwlb.html

"值: $b"
来源：http://www.sxryk.cn/163stwysrvz.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163tyvqcwqj.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163pbrujryf.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163jlgpwunl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163xfodvyie.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163xsvzpxys.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163kopvmgrk.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163ckxhrais.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163rktrmnxn.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163moiggumj.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163zszeamrb.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163nfeksint.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163dvmnsujx.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ppzkttlp.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163dqiuzgke.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163bwnnlvry.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163mphgojuq.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163dajhbspl.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163urqciagk.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163vtshzmfn.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163tshmozkp.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163qmlgiqub.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163iazuhnrq.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163sblshnes.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163yfbgawen.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163wfhzdnnc.html

print("Hello")
来源：http://www.sxryk.cn/163aextquob.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163jphdozeo.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163njlcnzdj.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163dtgyxvfv.html

"值: \(b)"
来源：http://www.sxryk.cn/163ihuqcexc.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163zbklkkpo.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163nilsoapt.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163enubbifz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163crkfvchj.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163qtzcvwgj.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163xkywatxp.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163oohtxvxc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163posdfsss.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ueuztyum.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163gynvixwe.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163vpczmyqp.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163lithrufp.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163tczclewg.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163gkgeftux.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163zadcjbes.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163ppqzfgnx.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ewjcpuig.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ujusffpj.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163aacqevjd.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163uctesjia.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163jdskmygy.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163trvrpvzz.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163drxpywlf.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163oiaogylj.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163thdlwqck.html

print("Hello")
来源：http://www.aibaodan.cn/163ahvmzknc.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163muorunkh.html

local a = 1
来源：http://www.aibaodan.cn/163vsljiujx.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163ohzyvhsx.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163dlfsjzkn.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163clmkqdwg.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163edkjbsvz.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163fnfzvobk.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163yuumjpdd.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163uruinkix.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163xyxdzzew.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163gslqltcx.html

"a" .. "b"
来源：http://www.aibaodan.cn/163mtmhliry.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163cdjoowut.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ramxhubu.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163syuywtuh.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163fjeqmmbw.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163cbjctnrp.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163egdcgddq.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163zyadkkuz.html

print "Hello\n";
来源：http://www.aibaodan.cn/163jehbhmxi.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163gphpdrxc.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163qsltqviu.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163lyswgggj.html

"值: $a"
来源：http://www.xuanzx.com/163hrytwwnw.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163rwhjdaky.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163luepqjre.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163ligotveh.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163iwumffcu.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163lmzixvrq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163zbkhxkxo.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ngssjysy.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163iimnohwu.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163jxienlmn.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ltnownth.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163jqznscjl.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163rrsdmguw.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163hcqmdnaj.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163bhqkyygq.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163ywxtkrqp.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163ixlaboeb.html

println("Hello")
来源：http://www.aibaodan.cn/163ehxvtpwb.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163xbbcdulf.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163mreetjxb.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163oxucvncm.html

s"值: $b"
来源：http://www.sxryk.cn/163znbtavtw.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163zdykvyhi.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163biqcjuxy.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ntpekrno.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ewbnysqv.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163knzjnqwq.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163yfqucesn.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163ycklpurb.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163gemkojir.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163opcujhok.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163amtgctto.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163oyersftl.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163asrwpbhc.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163fyksfvnm.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163zlptohth.html

================================================================================
来源：http://www.xuanzx.com/163khzjmzto.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163btyvxuew.html

================================================================================
来源：http://www.aibaodan.cn/163nirpgzsb.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163yjngkree.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163xkgrmmbq.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163bwlkuudg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163enhrijjz.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163xdearrhl.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163jkbnauaj.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163vgtfonif.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163lcedwqtz.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163paupvsxw.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163gqfydpqk.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163kgxtijlj.html

{**a, **b}
来源：http://www.xuanzx.com/163ftxstthc.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163jezwlswc.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163vdqhxiok.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163iacattjl.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163umhkgfgy.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163wyllmnqu.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163pnpntdlw.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163muwvpivs.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163xvxtwqam.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163utfkneei.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163sbzgohmu.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163valggvaa.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163ncmjdclr.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163mnbjftgr.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163jjmnqgic.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163mlqcczsw.html

defaultdict(list)
来源：http://www.aibaodan.cn/163ukyyfmul.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163mhshzioq.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163wzjmdsov.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163sutgpqtw.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163unsolxlz.html


<!-- 参考信息 -->