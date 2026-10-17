外链999!wailian999！

df -h;  du -sh *
来源：http://www.sxryk.cn/163qbwtwows.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163usvwfcia.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163ddqlkotf.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163vosuzzgp.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163rpdixwqs.html

[R64] 结束进程
来源：http://www.sxryk.cn/163fnvkyigs.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163diinshos.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163exggqqlp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163oetdkzlo.html

[R66] 定时任务
来源：http://www.xuanzx.com/163hufehkdt.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ecrxesnc.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163bsoxeyxw.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163xxbpnuuj.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163itfkjcgd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163kadwqwvs.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163jfidzlwr.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163yvubevxa.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163grbwpmos.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163oqiteicw.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163vyjhizap.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163mbwcubma.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163brqwpvif.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163mtqodeyu.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163hvepcpwt.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163jpdruuvz.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163mveoknqg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163desckeis.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163drypmbay.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ojtkhpdo.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163tqackfxq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163itmgdbwu.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ntiwibtu.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163wvdtrizp.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163wklysfmt.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163kgsrwoox.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163vieynuky.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163mrwwphyq.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163iauoziot.html

time ./run.sh
来源：http://www.sxryk.cn/163gxzvkqjp.html

================================================================================
来源：http://www.xuanzx.com/163sjdurbfb.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163pumksmts.html

================================================================================
来源：http://www.aibaodan.cn/163qncagcgy.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163bizcxbdm.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163lamkorht.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163egaqland.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163muxlyqlk.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163stxroqml.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163sygaohtt.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163pgkfmzgf.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163tzqeyhbp.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163ooriwgva.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ndiltigy.html

strlen(s)
来源：http://www.xuanzx.com/163yzgnukfj.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163qgluaufk.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163saycyvdf.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163qnpeazoh.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163puwgxutj.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163hezdbyel.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163knsdmuke.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163fpdtlesu.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163rhyrgkbp.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163upnyjirb.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163xtcoefln.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163jzltssqb.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163dfbluamn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163lbgqzeiy.html

fclose(f);
来源：http://www.sxryk.cn/163wngikedr.html

[S12] C：写文件
来源：http://www.xuanzx.com/163zbhbwlze.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ocqrmmor.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163txrbuast.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163xmszmytu.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163sdobwafz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ahtuvxfs.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163exdorbye.html

(double) a / b
来源：http://www.sxryk.cn/163frhfoofa.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163exekppjr.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163vdpgrvef.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163evfuoinf.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163uetrbhrr.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163psukfllc.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ypiolhgw.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163yubtjsfs.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163khsijrfr.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163jytoyhcf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163hemsbzmu.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163mjsyaehx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163bzeocdze.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163djkchokm.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163kcyhubnk.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ottqlpqm.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163nztsuyze.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163iactpmra.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163fcqarxbi.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163vierbvjb.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163qvnqungg.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163cgcgmcsz.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163obyebbpf.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ypsrrtze.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163pnozzsyo.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163hrzfmhlt.html

static int counter = 0;
来源：http://www.sxryk.cn/163zvjyibld.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ytjwdggg.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163czfwtosz.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163aupfggml.html

#ifndef X_H
来源：http://www.sxryk.cn/163kcmykptd.html

#define X_H
来源：http://www.sxryk.cn/163zymvpyxu.html

#endif
来源：http://www.sxryk.cn/163elzxkgiv.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163gwtoqpis.html

#include <iostream>
来源：http://www.xuanzx.com/163kmjodcfg.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163mfrnbawm.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163gcgfwtxs.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163botyrlvu.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163fkslwhak.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163pbsszhvs.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163uzlqzsyu.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163gvsswijq.html

[S35] C++：map
来源：http://www.xuanzx.com/163mztwlxvv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163lqwmeixj.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163lpusuous.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ebyrxfki.html

[S37] C++：set
来源：http://www.aibaodan.cn/163serhuvih.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163cemnodrh.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163dqgdsppt.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163cdglpmlw.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163dddengrh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163hjjylvkj.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163zjouvrut.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163zivejiqp.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163cxejknff.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163keycnnpj.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163zpgrckjg.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163vfshbmat.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163jswrckiz.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163bplqgxly.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163cyvnfjtp.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163vhnbqltw.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163zexvyqcq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163elbwgqpc.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163obwesngg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163volrwxrc.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163mgvlbraf.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163mobmhyjb.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163dvjctriv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163bdxvidoz.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163zzzfnggd.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163zjhixckp.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163xbxhcgdy.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163brpcljwe.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163keubvvzi.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ugxfbnsj.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163odfzatlc.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163dzabtwmp.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163pcvnekpp.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163gsovdkfy.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163vfcxlzuf.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163tnjtsxnz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163hktfyxbk.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163ojpssqkd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163tkyogwjb.html

[S56] C++：optional
来源：http://www.sxryk.cn/163lmnssime.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163qgvczszj.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163sdvlnuxm.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163rlcwvhky.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163aytlkedu.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163hrunpxhk.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163bvtaytlw.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163cfexfrpq.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163gvrrhslt.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163frrqecfo.html

================================================================================
来源：http://www.xuanzx.com/163kdeihoyq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163wgotsvgs.html

================================================================================
来源：http://www.aibaodan.cn/163lvapsryh.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ywnqcnqo.html

println("Hello")
来源：http://www.sxryk.cn/163lgfwgwmu.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163lzjwhuan.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163mpuomlrv.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163tvfzcbhg.html

"值: $b"
来源：http://www.xuanzx.com/163ruttwwxf.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163kxxgypqv.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163qalrufbl.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163kmehwqii.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163yvypjlpu.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163jritphtc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ypooclok.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ufhabkkv.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163srlogtlr.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163jqeqbsnr.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163oracyfcu.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163rnvlcoce.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163mgfkgcwt.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163hrcuxlgt.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163smnaybsz.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163whtzzsfj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163zimpjpvh.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163cfmvtiwu.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163orenoaxw.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163dsspoufp.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163utqadzih.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163qhmimwuw.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163vewbgdkg.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163ulvhhdgc.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ochzhogq.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163osqxlyua.html

print("Hello")
来源：http://www.sxryk.cn/163cotsiofu.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163arcrnriu.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ttifomda.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163trfyzkyn.html

"值: \(b)"
来源：http://www.aibaodan.cn/163mpclxiwa.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163cgtgtjwn.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163fmrcdiib.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163zucypssa.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163fkddpbxc.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163ejyxpvmo.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163xinpncgf.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163sbdzzhyd.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163xuriiozf.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163uixersix.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163zoqwfzlf.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163zedzjsle.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163vylhpyaj.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163bhqlgkkb.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163xhkkqtgm.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163zdftusjd.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163idhmpegy.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163qjazqinv.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163anmvurmo.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163uiprpemo.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163eudliyla.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163nalbvxrk.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163ralikeoe.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163embmbelc.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163tfbgbikx.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163yuovghbc.html

print("Hello")
来源：http://www.aibaodan.cn/163fxenrido.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163xrrswkud.html

local a = 1
来源：http://www.sxryk.cn/163jhvzdppf.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163oplkxmxv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163coskkrbf.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163xfeedtbt.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163mdoscewu.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163vojmuzvw.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163izvnfhyb.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163fwfrgilt.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163nxstzoes.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163aunufcbr.html

"a" .. "b"
来源：http://www.xuanzx.com/163bqujqwqm.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163wiluqtcv.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163aarrlqqm.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163afziaceu.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163dyjtcfmf.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163zidamace.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163asddbdms.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163mnghfczx.html

print "Hello\n";
来源：http://www.sxryk.cn/163xvmctfbq.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163jatphhvj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163nzctsonl.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163vjelhjil.html

"值: $a"
来源：http://www.aibaodan.cn/163hafctmbd.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163rkrzfnvd.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163nppibzeu.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163fdzgxhos.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163tuhgmeeu.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163kexneiaj.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163pqjvtary.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163zqeqgyji.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163pkvzphaa.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163xsqkfkwz.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163dqcfowvl.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163xzuvcpra.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163xsvonkcv.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163djzxjylc.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163dnigzzhg.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163jdyuylht.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163ylmazlqs.html

println("Hello")
来源：http://www.aibaodan.cn/163nycednwe.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163fglxshvn.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163ijswzclo.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163flwefdly.html

s"值: $b"
来源：http://www.sxryk.cn/163dstikzgh.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163ocrhxvfu.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163fjvujddw.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163gocaklut.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163grqvrznz.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163fdfjfait.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163xjvrrdjy.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163fqtvsdqa.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163ezotafir.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163kebbadod.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163bvtfzgax.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163uqkgcxdg.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163nybjehgb.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163dwzkmtbi.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163ldoxiyzk.html

================================================================================
来源：http://www.sxryk.cn/163zodcugqo.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163cnmrdkyo.html

================================================================================
来源：http://www.xuanzx.com/163mzekgejj.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163dijqtthz.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163orpiawac.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163uzngbrbg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163tdqanwrc.html


<!-- 参考信息 -->