外链999!wailian999！

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163vokidsmh.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163dgqtblqr.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163vnpowyfk.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163qujyqxwt.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163xoupcwyv.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163kcwgmtdl.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163bzrenusa.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163eoqjsevj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163dmlkkvvx.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163tjzrzqmy.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163tcxobuxa.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163anafxasu.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163mejwkokv.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163eslknquc.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163sfairqxt.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163ivopcznv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163crkwhadf.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163xrrgffbu.html

time ./run.sh
来源：http://www.xuanzx.com/163qvbsvlus.html

================================================================================
来源：http://www.sxryk.cn/163wtavufnf.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163jwygygvt.html

================================================================================
来源：http://www.xuanzx.com/163jpgjwpxc.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163qziainnd.html

#include <stdio.h>
来源：http://www.sxryk.cn/163xsmbazro.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163adhachjg.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163oolhkuve.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163baoltdxy.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163xxexvgqj.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163xvdpkhjp.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163abmhtfdf.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163sqjabnnj.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163juybhgcd.html

strlen(s)
来源：http://www.sxryk.cn/163msnlgvoz.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163xzmhrdlu.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163qfxtszom.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163advvjvrg.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163csxsbqvk.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163hkeckarc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163tzohwdqz.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163ylxdmobn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163gowqqebd.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ajahvlwa.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163qknlqhnu.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163xrhpwsno.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163mdprliqb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163farnicpy.html

fclose(f);
来源：http://www.sxryk.cn/163amgkmiiw.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ilwmjqwu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163ycmnvtoj.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163wkuzklej.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163xzsifilh.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ytacofgs.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163xtbzhymu.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163kswgbavd.html

(double) a / b
来源：http://www.sxryk.cn/163hqphdrnt.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163mouakkgv.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163uoqaijwv.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163iatzlfeq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163qdjkmyfm.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163alrwixnh.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163bddpbtmn.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ocmulzag.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163fuletdlm.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163fizxjgjf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163roxbidpe.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163mugdkisw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163tsfgrwxl.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163acugqmos.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163ypvkderz.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163gpvvcrgn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163dpmztibh.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163vfcmfszy.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163tdfiantd.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ckbhmznd.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163romzjuin.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163dlzmzime.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163uuqkrbma.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163fzkxtriz.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163myymgxio.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163dzrqrgbn.html

static int counter = 0;
来源：http://www.xuanzx.com/163bjrekomf.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163utsbueyj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163kibtoniw.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163taeclyxj.html

#ifndef X_H
来源：http://www.xuanzx.com/163zzkmsirx.html

#define X_H
来源：http://www.xuanzx.com/163dwkrsyqh.html

#endif
来源：http://www.sxryk.cn/163iddypxqn.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163fuatusqk.html

#include <iostream>
来源：http://www.sxryk.cn/163aunmmtde.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163nmsdohkf.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163fbuinmvx.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163tsrrqyse.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163rueikkde.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163pjnzrgau.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163wfooxqls.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163gplentkt.html

[S35] C++：map
来源：http://www.xuanzx.com/163znxgdepq.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163mduuunlj.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163xogsmnbi.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163mwidwpwn.html

[S37] C++：set
来源：http://www.xuanzx.com/163vsebjgpe.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163whsgavmd.html

[S38] C++：排序
来源：http://www.sxryk.cn/163bkussinu.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163wbwonthy.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163hucozjlp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163nvkkfvmf.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163xnjrlags.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163pzljqjfv.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163lghbgwii.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163whwjalst.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163rrhpawpa.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163gzdcygww.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163hjwnmkbs.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163whykhocn.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163dgszubey.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163yrwjdbol.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163aejaoqyr.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ejrpuzim.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163qbwtljag.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163kxenqmin.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163cmdiyywi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163hjqnkwzn.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163cxasqvxd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163rzngtedl.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163eifijsmz.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163mgzfdssp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163qywjcety.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163rpgpujtk.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163fswprahv.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ydsthkqn.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163qxrgunuf.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163cefflfdx.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163iicascjb.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ctqnrtxb.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163qahfahvg.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163ljhpdigh.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163mgzvrlpv.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163xdihkgyv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163qujedsha.html

[S56] C++：optional
来源：http://www.sxryk.cn/163axlrpyzk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163hzfwxbam.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163bkwnyyhc.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163yatgsdda.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163irqajgmo.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163uibxkvsu.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163brlfinqj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ehckdhaq.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163amqpksyq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163zvuuzxqs.html

================================================================================
来源：http://www.sxryk.cn/163zsgpuumn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163gynyadoo.html

================================================================================
来源：http://www.sxryk.cn/163zpkligbu.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163jfxnekjs.html

println("Hello")
来源：http://www.xuanzx.com/163dczialap.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163woronobi.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163txrgrmlg.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163qcxehwmv.html

"值: $b"
来源：http://www.aibaodan.cn/163cjpwygch.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163mazeioap.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163mecalqrm.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163rqkrzskx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163pclogkex.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163pmjscyvd.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163qxlroapz.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ebbfzizz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163wcfqdanc.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163swucydso.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163tpiuvuoq.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163qogglvdw.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163wjjoyqdz.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163dyrqsbde.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163trsqzanw.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163vqmnxwbv.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163gnfvvyqc.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163jfgooasn.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163lgjqrqhj.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163hkecqads.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163rghscuqz.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163qbsazmrt.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163xgeyykvn.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163gkykszen.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163rukctwuw.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163stqszcdi.html

print("Hello")
来源：http://www.xuanzx.com/163hykpiesf.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163vaolawyc.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163vrzmubrv.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163mcebsqmq.html

"值: \(b)"
来源：http://www.xuanzx.com/163xtjkkxpr.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163rxuwagnj.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163jzayhygu.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163rpfmowaz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163nnxbvtap.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163aqoeeljw.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163qovyhbzp.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163isrkpcwh.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163cqrmyanv.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163ontatsuf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163oqxmdwtq.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163uafddfqn.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ljmjsvcy.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163dcitaelf.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163aqiqjfue.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163wecloncu.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163beymqzgd.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163cwrvtjuj.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163pyryxprp.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163cigdtvmd.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163rdxgdyiq.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163banfelqs.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163sibnaygu.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163wkrrcqdp.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163hkxgkbwa.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163rkajablg.html

print("Hello")
来源：http://www.aibaodan.cn/163crrengpq.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163otoxlbdr.html

local a = 1
来源：http://www.aibaodan.cn/163gtkfktxr.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163fewpnbmh.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163sjhaxjbu.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163vrcemnqb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163qbnscrlu.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163bdhxlimj.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163djdwovun.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163gxhculqn.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163zjuwkiou.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163oqwrqhyk.html

"a" .. "b"
来源：http://www.sxryk.cn/163rnvjbskj.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163luzihyue.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163hpjdebiq.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163tqncptpn.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163wdrerwlw.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163iniwnsvv.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163hhhmxoda.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163dnwmkjus.html

print "Hello\n";
来源：http://www.sxryk.cn/163fylakyas.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163qzpdbpbn.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163rgoyhbdr.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163bedkibgd.html

"值: $a"
来源：http://www.xuanzx.com/163biehnsek.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163foeyxjts.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163bbrewthh.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163lxsocbdx.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163mijsbtgm.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163ikvwswkl.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163vppstskm.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ryxyqppn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163bjayzrkt.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163tlreotzb.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163nvshseyc.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163xxfmzzwy.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163znazmgdr.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163kbxwmjzo.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163yyynwgep.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163aljyetca.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163hztpxorz.html

println("Hello")
来源：http://www.aibaodan.cn/163zgrlqwwl.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163mkuqmkhh.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163pzjnaqsa.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163uscfldan.html

s"值: $b"
来源：http://www.aibaodan.cn/163rkwyskuw.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163kquazhwl.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163xdcgcbyv.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163lpwrmpvu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163szuugbza.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163yhnnctxl.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163spqrkwgj.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163drgxnokm.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163zccrcvnd.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163zcwmhlyy.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163ijyqanhj.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163qtemnxae.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163zobjrzyz.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163uatofqhx.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163roeklnql.html

================================================================================
来源：http://www.xuanzx.com/163geyxgkda.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163phswmfif.html

================================================================================
来源：http://www.aibaodan.cn/163bpmfofcz.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163ipujtlix.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163clphherc.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163swwcrxcs.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163vcpamlsm.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163mhzejhto.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163wsiunlel.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163ixdwqmxb.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163tulqiwql.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163wbgxiurb.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163nvaqvzfh.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163xtadmnif.html

{**a, **b}
来源：http://www.aibaodan.cn/163yuvtxozb.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163tgqwhwei.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163ctktixim.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163tpppqoqm.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163jmkyjauq.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163rzzhstto.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163wdtljfix.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163fiedldrf.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163fcjirvyh.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163osfmgcjr.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163ixpnaadp.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163wkxbtdvo.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163uhcgxtld.html


<!-- 参考信息 -->