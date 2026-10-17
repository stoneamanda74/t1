外链999!wailian999！

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163bnjvcfzl.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163oldrlbfw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163wggxcnrv.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163clkiowzj.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163xkbpfcrh.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163wsxoyohe.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163mztodztt.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163fjnuefxk.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163wlgbswgm.html

[R64] 结束进程
来源：http://www.xuanzx.com/163cmmiwhns.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163vlpdudto.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163mvmoustq.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163jfagaurb.html

[R66] 定时任务
来源：http://www.xuanzx.com/163gviofofu.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163xlguwhna.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163vnhazimf.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163vvbtjmee.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163pepjwnru.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163xofccipq.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163uizfvprn.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163gutsowpl.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163hkrwcubt.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163jozxxjwy.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163hsuenipk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163qmmbdion.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163nxiehher.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163wmjvfdjh.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163fhsizsid.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ypqyqmgn.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163erbekxwh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163lxvppypk.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163pglunafo.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163prtxdmce.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163jkwyecif.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163aczekyil.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163kdvtvrcj.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163ivsrrbbd.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163bpylxxse.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163yijbdpyl.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163yddetqyd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163vwcqaqje.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163dftzndnt.html

time ./run.sh
来源：http://www.aibaodan.cn/163kxvscwda.html

================================================================================
来源：http://www.aibaodan.cn/163kadedzjv.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163qwlkrryf.html

================================================================================
来源：http://www.aibaodan.cn/163gbqnrhim.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163luohptyy.html

#include <stdio.h>
来源：http://www.xuanzx.com/163kziiunpx.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163maxajrkb.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163fiytrjot.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163jsrhrzdk.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163irsxoygl.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163tkywdbth.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163oovwbger.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163nmzhsann.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163qlklxhzy.html

strlen(s)
来源：http://www.xuanzx.com/163bgdtodlg.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163gwbgckuh.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163jafifdqn.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163bpysknvm.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163kvsaviiw.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163zimsafgz.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163etjmthaa.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163istjglol.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163piosesuy.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163qmhftgas.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163bjoqvadh.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163izxemsbz.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163sjvfebib.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163boempcnc.html

fclose(f);
来源：http://www.sxryk.cn/163yifeobmn.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ydkszjtj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163pmbwfiar.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163onexomkv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163nybwwmnv.html

[S14] C：枚举
来源：http://www.sxryk.cn/163qkrixzqd.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163tozatywp.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163lptpvijd.html

(double) a / b
来源：http://www.sxryk.cn/163vngnoteu.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163bijfvnot.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163embitrub.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163ifjuepyb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163irnwvafv.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163dvlrkupe.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163rxwxjujs.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163xrplgqun.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163fjghlhcp.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163serpzjkb.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163eokmrdzm.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163yosgvxrt.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163zbdbfxbn.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163yzcvmnck.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ezjnjurq.html

[S23] C：随机数
来源：http://www.sxryk.cn/163jezujbhg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163uivtarou.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163pszfzcgu.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163eucqvnru.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163cyzviwcs.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163bkdfohxp.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163mnljscvc.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ltkykprf.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163vglerfvk.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163unykfteb.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163kahzuzhc.html

static int counter = 0;
来源：http://www.sxryk.cn/163dqguxclh.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163vixotjoj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163gclhrzui.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163stxwqtuv.html

#ifndef X_H
来源：http://www.sxryk.cn/163yzlaglxq.html

#define X_H
来源：http://www.xuanzx.com/163tdfhqszj.html

#endif
来源：http://www.aibaodan.cn/163kktrnatc.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163ngpxuodi.html

#include <iostream>
来源：http://www.xuanzx.com/163dwavuvkv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163uaothoko.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163zvskpdpd.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163wnpjbavb.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163kyngmxrw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163icrlicwm.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163rqbwqpyy.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163rvppvygh.html

[S35] C++：map
来源：http://www.xuanzx.com/163epzvgcnr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163qqvdcjvm.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163zqrfoyzn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163eyyuozam.html

[S37] C++：set
来源：http://www.xuanzx.com/163lzhdjtwx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163ioxtpomc.html

[S38] C++：排序
来源：http://www.sxryk.cn/163hssovgqi.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163bwtzchmw.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163zoxadtuz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163tlueisuw.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163hlfxzhow.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163vjybrhmx.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163odbszmqt.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163xvsgbgmo.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ukvvtmnq.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163yjaufbvm.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163awizmqlw.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163zbbkwhmc.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163xpdtwsky.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163pjnbsohf.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163dabsqsat.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163cupefuhh.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163onulrouw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ttkcytfn.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163jfpfasfj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163kdlqepwo.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ueqalosb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163lanwrokt.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ophiqaap.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163dqqdhtcf.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163dbizwkzr.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163xfynlbrj.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163metaljov.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163nkuojzbi.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163wdihhohr.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163hfkvzvma.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163bfrxcjtg.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163vqkfyyxb.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163hjjojqsu.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163ozqcqckv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163uiqozbag.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163iuwwmxjn.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163fimrunki.html

[S56] C++：optional
来源：http://www.sxryk.cn/163qfyyiwxk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163cghrmrpg.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163aswmbpwb.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163odtjbakk.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163gyujqhkp.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163pjrxergz.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163xbdpnuhm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163jqdouwdn.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163cbemdxhe.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163eggorcai.html

================================================================================
来源：http://www.xuanzx.com/163dastnsem.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163mkxjwyit.html

================================================================================
来源：http://www.sxryk.cn/163xkserjco.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163bjglvkye.html

println("Hello")
来源：http://www.sxryk.cn/163laoqoqdr.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163rmupdwms.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163wlmwbkkw.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163mgoxvsmv.html

"值: $b"
来源：http://www.xuanzx.com/163hknfmhhe.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163xovpjujo.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ujbofvvz.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163cctcqpsf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163yibkvrqk.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163mccxetoj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163fzegfumq.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163navytzvk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163lfblxtnz.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163wbmszlvk.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ruxbxbjt.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163criethcv.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163braltkuj.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163yczmayph.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163scopsflp.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163xufylqwk.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163xcnhivfm.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163nhvdzdbp.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163wbrldadm.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ejbjzcit.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163pdrahxbo.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163urtzthqj.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163hzlibypg.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163xcmwjjfd.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163cdrlfhpv.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163jiojqyyh.html

print("Hello")
来源：http://www.xuanzx.com/163ersrleld.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163nenaehml.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163pfkubnld.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163gmcvdbty.html

"值: \(b)"
来源：http://www.xuanzx.com/163ftlunlpf.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163tlqrjlgi.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163tgxvbynv.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163injissou.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163nlwqbszg.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163gmwsxrki.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163siebjlti.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163itbdkwks.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163fpsazodd.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163zyfqwihz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163ihpruydt.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163fuevcplg.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163xcvljpwa.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ncfpvfsr.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163cgflsdjo.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163vgrymkeu.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163wavzrukl.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163sxgdqdip.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163xsmotnnu.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163wmaizcns.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163ryeretbq.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163txixcyhd.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163cutaeinz.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163zmlxtipp.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163xkyhnsbs.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163dklfckcg.html

print("Hello")
来源：http://www.aibaodan.cn/163vnawaevl.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163zuxffwpt.html

local a = 1
来源：http://www.sxryk.cn/163agjtmwlk.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163fykmzhep.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163gxymcrat.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163apowtlcf.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163nqennhgi.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163ahdgkdve.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163clovdlod.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163qutmqnjh.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163jclkqhzg.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163jrrjcacg.html

"a" .. "b"
来源：http://www.sxryk.cn/163ydtmjgsi.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163xzrxbpns.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163byxttgjw.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163sdzpmgug.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163ldejscmv.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163sncqudox.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163rtzujaiu.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163cpbupmcc.html

print "Hello\n";
来源：http://www.xuanzx.com/163zkkgbaki.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163owaqelps.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163uqbwzmsy.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163tlpljelm.html

"值: $a"
来源：http://www.sxryk.cn/163vmzfwtve.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163krzhjepa.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163mwqxfsfv.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163bzusbgxj.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163msrgketb.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163yypagpbr.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163tshncfbq.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163mzbppyph.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163fwjufmgn.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163lmpxinuv.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163qbmpirrk.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163ddipxrcc.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163dnmvixwf.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163ibdrivxl.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163xomrwufx.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163qrmjvtix.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163ygnhmgqu.html

println("Hello")
来源：http://www.sxryk.cn/163ennfyidh.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163gvxtursl.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163uwvukosn.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163vivvkvjs.html

s"值: $b"
来源：http://www.sxryk.cn/163tlqmuoqk.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163kvbikwxq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163xcvgxjcs.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ilhtuebf.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163pdmkujnq.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163dapyvrfl.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163irbzsohl.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163nzawctbl.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163cmxqqigc.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163vpyfkrxy.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163dqqizdoi.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163wjdblcod.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163ddsixdwc.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163qncvudqr.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163lcjidosd.html

================================================================================
来源：http://www.aibaodan.cn/163scnegmhl.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163xuyiihnl.html

================================================================================
来源：http://www.xuanzx.com/163ptvkeocw.html


<!-- 参考信息 -->