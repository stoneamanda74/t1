外链999!wailian999！

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163wjiempqb.html

[R66] 定时任务
来源：http://www.xuanzx.com/163vinvpfqf.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163rieqqtrk.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163dnmyfmin.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163adbxsoep.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163tkmzalrm.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163pxaknnod.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ccdzgszm.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163bkdtqrfu.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163iplocbor.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163uaqjlvaf.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163wkbkpyzf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163fniucaix.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163phehhike.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163jpinhbss.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163kkosvwlc.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163sebkunff.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163tbipgmpl.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163yarchhha.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163mcadcnlm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163cishthaa.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163bzhakddu.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ldqwygoq.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163tteiajyy.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163uwptftct.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163akvlztit.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163kcvoembx.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163kstcefpp.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163ajhpucgf.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163qhmbotdk.html

time ./run.sh
来源：http://www.xuanzx.com/163vyowvebh.html

================================================================================
来源：http://www.xuanzx.com/163nsledboj.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163exddrmzg.html

================================================================================
来源：http://www.sxryk.cn/163hndqbnve.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163edabovcj.html

#include <stdio.h>
来源：http://www.xuanzx.com/163nuwxnxni.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163smyvazpu.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163qokngxhf.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163mqbuqyjf.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163zrefwxla.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163auiufpcx.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163mzvwernl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163tmnkkbsw.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163kpmaawon.html

strlen(s)
来源：http://www.aibaodan.cn/163tbrxhbgs.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163nhlbvgxd.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163xunjkgac.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163gwzpdsih.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ixrnqszl.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163amryiplg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163ctafizau.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163vbkklptr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163qitqthsf.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163nusugxaf.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163xmmwzvmm.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163iqfchgss.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163bbfaflfu.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163gkwodbwu.html

fclose(f);
来源：http://www.sxryk.cn/163wdhzqmyl.html

[S12] C：写文件
来源：http://www.sxryk.cn/163jnjpotvz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163nugwfofq.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163wtbeardr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163wgizepio.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163maqicypt.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163ycbbwhgl.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163dfoijmyg.html

(double) a / b
来源：http://www.sxryk.cn/163ljtpojys.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163igrobzsx.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163xhzuodsn.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163yxtixusd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ylvaynsp.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163ngnonckx.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163vmqdbokg.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163oytfimzg.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163oakhhtwx.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163rqzgtgae.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163xeekwljb.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163tfjdzwxk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163nnhjymjo.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163oazysgph.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163knwowivr.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163vqlkwuyr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163yfwxqowp.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163vqezkmsk.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163oywaxuno.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ailvlipm.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163tcujrbye.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163fwidbwsp.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163aaocseqd.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163pdxwtapo.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ugddlwqz.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163hdznoxfo.html

static int counter = 0;
来源：http://www.xuanzx.com/163chxvonea.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163flknbvmd.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163dimsetps.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ddcmpght.html

#ifndef X_H
来源：http://www.xuanzx.com/163lhiewllv.html

#define X_H
来源：http://www.sxryk.cn/163syfmhjcs.html

#endif
来源：http://www.xuanzx.com/163wfohqmpz.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163gnjouscx.html

#include <iostream>
来源：http://www.xuanzx.com/163luliwzyh.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163izcymodm.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163trnrbglb.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163qrzckdti.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163vrcaxgfk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163mwjeiqgr.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163vctpbhlx.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163dhhhociv.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ewzzqcfb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zgjdbqdj.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163qictqrwf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163zwcicnij.html

[S37] C++：set
来源：http://www.sxryk.cn/163kchwfmxx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ypnwwbkb.html

[S38] C++：排序
来源：http://www.sxryk.cn/163vxibzwzx.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163yeepxjji.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163rijxburi.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163nrlojfxx.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163neqslcgp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163unlpccvk.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163jkaneaps.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163fsiuixue.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163lwltdeda.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163zutkukrh.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163hyfwiaym.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163zjurcpjh.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163jtehqhbi.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163edlmxswq.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163rngayddl.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163vrooyawy.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163mpczimxe.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163meqkszcm.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163kekiwmcd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163qokxgpby.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163iwyroexk.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163goarxktq.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163exlvuwdn.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163qedyadoh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163vjvkcncp.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ncgmuzoc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163rnxmrezz.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163oacnxpga.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163coqudsjs.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163uoxtdesr.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163zbrcbdhl.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163cmcsdezr.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163uliwksik.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163emtztjau.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163bcbdcdpy.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163vbsdelhu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163bwwakisk.html

[S56] C++：optional
来源：http://www.sxryk.cn/163jutxdgif.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ozjwrhhi.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163seoicfhe.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163bdzdhxxl.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163vyupxuwo.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163brbuqjfo.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163bhbldjpt.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163rtthtifi.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163bszwdxwd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163axjzzcue.html

================================================================================
来源：http://www.xuanzx.com/163shyhewox.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163xcdjhamz.html

================================================================================
来源：http://www.xuanzx.com/163iroprwqh.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163ycpzltyk.html

println("Hello")
来源：http://www.xuanzx.com/163vrffwvgo.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163oqrodrzq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163vtaehuzu.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163ralrwqxh.html

"值: $b"
来源：http://www.sxryk.cn/163uoecvhmm.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ripnzwwd.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ilcljuik.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163datzmcvq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163rujgdmkz.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163voqwmals.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163dofaopwp.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163doxetlvn.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163mwcjuhgp.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163xefxfrmu.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163fafmyuqs.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163bcwczzgd.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163xgssrgyw.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163fwmdvytm.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163jkeoihwh.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ahiumyiz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163kwxtxvxx.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163sbyuwgzc.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163idnqcgyl.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163dwdooaud.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163eaqpelcf.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163mmomgtxa.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163xbrglwpa.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163ddbfvtnp.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163mgvongiz.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163atmhhucm.html

print("Hello")
来源：http://www.aibaodan.cn/163ezwkwwvp.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163gvbfjtjh.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163njkxghyr.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163kkmgudze.html

"值: \(b)"
来源：http://www.aibaodan.cn/163xizpzlyp.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163yxnzwasp.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163hyvnxzvk.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163jupvudki.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163apvghhuy.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163urgmpvty.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163ybxgekqg.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163qvgfuxop.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163hrbmvhkt.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163sjcgxrpt.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163dhbyktre.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163djbfowhz.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163dzanzveb.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163gtnxwsma.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163tcggidtv.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163dabjdwum.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163brhprszr.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163madvldmj.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163xtdhegnf.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163nsinmwgj.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163aauxnvlm.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163gpdrxuwj.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163nngdvvut.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163rwqgtyoj.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163bsqnbtsw.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163ydmkdozm.html

print("Hello")
来源：http://www.sxryk.cn/163oxsrzfgs.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163xihoqxhr.html

local a = 1
来源：http://www.aibaodan.cn/163nxzvnsjz.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163mezqivgq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163fsjgirpf.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163pururftx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163iaecdcnu.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163rnpmqhjp.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163bfdqssns.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163xbwepkdc.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163uerboquh.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163fiottgtc.html

"a" .. "b"
来源：http://www.sxryk.cn/163rfpwsrdr.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163ndfbfbek.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163mztdwmqj.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163elbvhhaw.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163mfmdrjwa.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163kucdcdok.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163wzrojjbp.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163tytzokwq.html

print "Hello\n";
来源：http://www.aibaodan.cn/163jjexayii.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163egwiimss.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163ogbfkpmq.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163cjlwcbcw.html

"值: $a"
来源：http://www.sxryk.cn/163owbapawk.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163luqoerfy.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163kbhrginp.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163yuvkbhbu.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163imuxpggx.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163udbuiqla.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163osarqlsv.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ajcuhtav.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163mdwsitbh.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163jpdzyvhb.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163bgtjloha.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163qmfgypvc.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163nsywnmvs.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163wilescza.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163rzahswvv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163ehbrfkhn.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163ebpopaam.html

println("Hello")
来源：http://www.sxryk.cn/163fzclmqbf.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163tylmcotm.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163lwvsvsvu.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163nwzshfxr.html

s"值: $b"
来源：http://www.xuanzx.com/163dvdltssz.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163gdsxizsy.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163avhxutdi.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163bhxyrgps.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163arbeyzgz.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163tebozktk.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163peguoscv.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163zqdzvhdw.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163tctdwkxt.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163ipvgsndo.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163mzznykwr.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163csxgkjff.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163fldbnxbw.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163zisnbxso.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163tbraaimd.html

================================================================================
来源：http://www.xuanzx.com/163oalkjnrl.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163svvawpuw.html

================================================================================
来源：http://www.aibaodan.cn/163bvdwkzmf.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163olmdvwdd.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163odhoqmfv.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163twsmbnrz.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163cetkjywd.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163tlvwiutq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163hbrdlzxd.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163nlymkgnh.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163jgilghdh.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163alyslgmw.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163iriyybjz.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163ulxqinll.html

{**a, **b}
来源：http://www.aibaodan.cn/163plzfhpex.html


<!-- 参考信息 -->