外链999!wailian999！

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163yalvysun.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163lwnndbkx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163rknwolmo.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163hvcuixpa.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163olnfbspl.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163tsxvwzap.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163uckyfbam.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163wrljmbpf.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163ivpzyygx.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ropdlnvm.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163vaodryjy.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163ovqhmjna.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163aqktwyqq.html

[R66] 定时任务
来源：http://www.xuanzx.com/163yacpcluy.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163askenspq.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ymowzsau.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163sdjpqtnl.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163fsyoarcr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163lceltuyd.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163pzhkabht.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163nstnssmd.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163qahxjnxe.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163qsvzduur.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163jnamutfj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163nkweyhgi.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163clkuiiwn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163qyddwxcz.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163vqfiheae.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163nhdtnkoa.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163jxmkypwv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163jkbhojua.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163jsmhzhav.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163oonhqjoj.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163mgihqdfa.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163hsqpifcl.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163axmyefxf.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163wcglgaup.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163iqxgqnqk.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163cqqkrqrf.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163fvpbcohw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163lryhxcha.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163vshfonbg.html

time ./run.sh
来源：http://www.sxryk.cn/163jkazwnzd.html

================================================================================
来源：http://www.xuanzx.com/163mmghmomi.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163znknhoab.html

================================================================================
来源：http://www.aibaodan.cn/163eljxhxgm.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163skwtebuv.html

#include <stdio.h>
来源：http://www.sxryk.cn/163kgdkizls.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ahgtuetb.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163nuszcvpf.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163lytuisfa.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163qgrbrswb.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163vdkqcesa.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163kzluciuj.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163xicmhgpa.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163lwtmumwr.html

strlen(s)
来源：http://www.aibaodan.cn/163edftnjer.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163fyregdhb.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163xlxkgfgq.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163dowaalsn.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163deczxvsx.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ekbcrdnc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163zkumdtbw.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163axphsgds.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163rlpfejlr.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163tuzqretr.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163nodfmljf.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163kwdngcre.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163rfmwkvhd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163bbzhdlnr.html

fclose(f);
来源：http://www.aibaodan.cn/163rtkxxutg.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163tkabnvbg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163rhtqophb.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163zymgqddl.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163zlydzuos.html

[S14] C：枚举
来源：http://www.sxryk.cn/163kzkkraca.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163zhqgnbfp.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163dkgpmqix.html

(double) a / b
来源：http://www.xuanzx.com/163inyegets.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163pygirqiz.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163plgwhkkd.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163pspmzofw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163yncetjpz.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163hhuhftrt.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163imzxhtzf.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163fzqsnfqu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163zxzchvov.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163kukkusel.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163nklmwcli.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163imnltnbw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163isrinnzl.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163pdirvvci.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163wdvkqvkt.html

[S23] C：随机数
来源：http://www.sxryk.cn/163lxvqtuet.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163sslpauoh.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163rscxtvgf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163stwhgrix.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163fzgttmhd.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163qmhjlafw.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163tmfgxwrh.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163cuniqigf.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163omvhmvro.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163diakuxbw.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163bpqjsvrl.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ybdzkxcz.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163bcznypso.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163vnuaovtt.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163sppdihtm.html

#ifndef X_H
来源：http://www.aibaodan.cn/163kfgpueav.html

#define X_H
来源：http://www.xuanzx.com/163crwwhnok.html

#endif
来源：http://www.aibaodan.cn/163ztmdmwas.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163skzxeivw.html

#include <iostream>
来源：http://www.sxryk.cn/163pemsfmgb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163zednvega.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163bprnavqn.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163wthyazfu.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163xqnwhhqs.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163sltfdqnw.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163bkxngwch.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163hxmhxzqe.html

[S35] C++：map
来源：http://www.xuanzx.com/163fnxnugkm.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163nxmoylvx.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163zfjgwbwz.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163hkkygpfj.html

[S37] C++：set
来源：http://www.xuanzx.com/163vdnnowts.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163zmnrwzzt.html

[S38] C++：排序
来源：http://www.xuanzx.com/163qwgllseh.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163blurebpd.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163tozdwwco.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163eroltvrh.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163uduesbns.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163jpqwfbsb.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163lwrkxwiq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163tfcpzmsa.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ubmfnaur.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163mvusgnwk.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163nrsjjotp.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163rufmdmey.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163mpejwtzm.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163zdalocjw.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163csxsijgb.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163tcpbspli.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163cflnskun.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163jumkbzlz.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163vfiafbti.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163sldgdimh.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163xkisgayo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163gfjcnvfl.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163fyitpygj.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163gcapoyst.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163qbvgtseu.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163eoypxohb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163jbvxdvjx.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163iwlzldus.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163djfcbtcv.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163rkjxfdkr.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163jhxolobw.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163lgobffgh.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163potgmhqn.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163hazjvkon.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163epyrefdf.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163phokbeow.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163pcvefmrt.html

[S56] C++：optional
来源：http://www.xuanzx.com/163bvyfnymh.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163qgcixahs.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163nfxzkcpy.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163suyuygxc.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163cfukywgl.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163spezberu.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163asnatygq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163jcfvvhik.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163lntvyuxd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163xbqsgojm.html

================================================================================
来源：http://www.sxryk.cn/163pfikaoqp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163oxvdddeo.html

================================================================================
来源：http://www.aibaodan.cn/163fgrfyotu.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163hvvoohuf.html

println("Hello")
来源：http://www.xuanzx.com/163buqyjxpu.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ddvmofkq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163bwrrvjuc.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163nunfcchl.html

"值: $b"
来源：http://www.aibaodan.cn/163sysvefkv.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163xqxkffkd.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163aohiuwmu.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ehygwbuh.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163zylspvxh.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163bwdxrwna.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ezpdbpez.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163nzqnckgf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163sithiilg.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163mwvkjkdg.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163uuyerpxd.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163bwiwvuko.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163srtdgjoa.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163imdichiz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163kyjljjmd.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163qaazkabc.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ispdulpw.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163soxuopip.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163eplivuce.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163xxeamfic.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163gcomappb.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163salrdfrq.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163hfbbjwbq.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163kziqvppu.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163qeivnjma.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163bukohfgo.html

print("Hello")
来源：http://www.xuanzx.com/163ikfcngun.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163lpwrxfnv.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163fqquilwt.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ixjfaohd.html

"值: \(b)"
来源：http://www.aibaodan.cn/163tiasshdr.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163pttllpyd.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163drtlynyx.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163evxstqnm.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163awvftfic.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163zhftviax.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163fddluact.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163spjoqrdm.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163tmqzpylp.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163drqcoihj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163daozusss.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163wxdlubot.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163lufajqus.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163rejywrop.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163dgetlqpy.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163uwaukche.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163kmmadktt.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163hmdiobdz.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163xyuohxpq.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163eqdjvrug.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163umfsvbsg.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163zsxrarpb.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163jwmmpebi.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163mlkfnjzp.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163qveymnwz.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163akqqblyy.html

print("Hello")
来源：http://www.sxryk.cn/163equbsswa.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163ghzibtep.html

local a = 1
来源：http://www.sxryk.cn/163dkabtmza.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163oawzqzyd.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163cynwzhst.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163szsqxgol.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163uwaawgom.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163giwqddtf.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163znuzqscp.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163vezkxgnj.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163imjoewqp.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163eofuygji.html

"a" .. "b"
来源：http://www.aibaodan.cn/163nrqgzcja.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163nimblbby.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163vmwrbgav.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163fbzsrupx.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163lczttcfk.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163clfbkwki.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163hwocpluj.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163kqoooxno.html

print "Hello\n";
来源：http://www.aibaodan.cn/163xqjuobji.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163wxyntroj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163vqwkxpux.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ogtinksm.html

"值: $a"
来源：http://www.sxryk.cn/163svbrmoac.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163bhhozajc.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163yaqyjddu.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ufrqqpte.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163tgkpmzpr.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163goafdusn.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163zftzbwng.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163dgcwftag.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163pivmeujq.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163iodvzfau.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163exyjotpz.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163swgilljf.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163lmyokilb.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163dshuqblm.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163hleiqivp.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163anolpeby.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163ktruleop.html

println("Hello")
来源：http://www.sxryk.cn/163sndykdsm.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163prfnpzkh.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163zwpvzjfx.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163jitbnubv.html

s"值: $b"
来源：http://www.sxryk.cn/163hnbqfkdi.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163mxgacxxw.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163eumvpwee.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163bwmxbgfv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163pupsaiko.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163mvnzmals.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163xpahkhmq.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163ihetefsf.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163nhliltnm.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163dkqrqlbm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163csdciyxa.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163trkvvqpj.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163mqkrcqkn.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163ughwzpzt.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163warfqxeg.html

================================================================================
来源：http://www.xuanzx.com/163aomjmmmy.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163glmsegnc.html

================================================================================
来源：http://www.xuanzx.com/163omaszfmg.html


<!-- 参考信息 -->