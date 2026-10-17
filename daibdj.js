外链999!wailian999！

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163jdrngsxl.html

[R58] 下载文件
来源：http://www.xuanzx.com/163jmlxxsva.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163brosrmnm.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163pawwbzwb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163jmjtuzjo.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163axlqirca.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163acizqmgy.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163xzqdamrz.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163uzcauqwj.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163zkshygfu.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163cndbqvak.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163nvvymnyp.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163sglnxnmz.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163nkegsbut.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163jrhiygkc.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163jbpfzlpu.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163gwbvczuw.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163mqxrgbkr.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163sdysntjf.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163dkcgpdxn.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163luxdecwc.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ssvvhygb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163twlaptfd.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163lpwgagzj.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163nmoatdjj.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163qnhhyhzl.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163kzlbjnli.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163emurvkee.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163qgmppqcm.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163gbofnowq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163mbmxamku.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163xgfaktbl.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163zsaonvfn.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163aloswfto.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163qvvcskgr.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163nltppogh.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163dzhcspea.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163eovdnxys.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zctlbsmh.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163rltjvlvv.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163auuxhomi.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163zdvejjzv.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ohewevsg.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163sifxzjng.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163cvdwdkwx.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163kxvjqolg.html

time ./run.sh
来源：http://www.sxryk.cn/163dxfgujkm.html

================================================================================
来源：http://www.xuanzx.com/163azraffnx.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163xjkmqjbh.html

================================================================================
来源：http://www.aibaodan.cn/163xwypnnwf.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163zkqoeemh.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ppzlxgui.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163qgeimxjz.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163obommtgm.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163szbxcoig.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163uzvuwvim.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163mlhfzuix.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163dxzzxuni.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163kttlelim.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163tckokltz.html

strlen(s)
来源：http://www.aibaodan.cn/163lcqkmgcg.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163nnsdqsni.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163prpwuimo.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163hmurvmaa.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163rnqthlrb.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163asktdnnz.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163znmpuodp.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163gspwvidh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163auuoween.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ufkodkky.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163unysquts.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163byqcltte.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ssgvxgnd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163bfqjzkrb.html

fclose(f);
来源：http://www.sxryk.cn/163zkptmksw.html

[S12] C：写文件
来源：http://www.xuanzx.com/163uclujjso.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163xetjacya.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163etvpqprh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163jigaugni.html

[S14] C：枚举
来源：http://www.sxryk.cn/163rwqalyhc.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163uvqlbcmu.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163qfxmhgtq.html

(double) a / b
来源：http://www.xuanzx.com/163yleqmpna.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ssdczzkx.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163zjomwzkm.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163lgljvddd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163sldpdjhp.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163ufcormup.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163cbaoawki.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163njuuquxn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163kowuxwib.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163knmwpqnl.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163mycsodwf.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163qrqiyhib.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163cwcxsyiq.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163iiylzzcb.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163yrtsjobu.html

[S23] C：随机数
来源：http://www.xuanzx.com/163frddgcbp.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163kcdekdcc.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163qdczrjew.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163oqvcgtmq.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163vcxbbocl.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163mgwaxdbh.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163zvooavtp.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163kpzhgurg.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163vomrboxs.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163scwpktuc.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163euzrxqay.html

static int counter = 0;
来源：http://www.aibaodan.cn/163oxvvqcvx.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163jafjhtji.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163vkwvfvuu.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163mmflzyqt.html

#ifndef X_H
来源：http://www.aibaodan.cn/163qzdnctgx.html

#define X_H
来源：http://www.sxryk.cn/163baedujbe.html

#endif
来源：http://www.xuanzx.com/163ywtkrlty.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163txdvecvz.html

#include <iostream>
来源：http://www.aibaodan.cn/163pfqftyxk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163tnevqkwo.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163eemtkkbz.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163sugxhoqt.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163yzrdgzss.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163rpmtysns.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163hvgunfdz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163kiilfcdo.html

[S35] C++：map
来源：http://www.aibaodan.cn/163rsqqdpnt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163rmqvesqq.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163fporuumy.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163mpmdjvhc.html

[S37] C++：set
来源：http://www.aibaodan.cn/163twrtjjfn.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163koxposlr.html

[S38] C++：排序
来源：http://www.sxryk.cn/163dvwqyvgu.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163fnchlixu.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163usgeobgi.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163vhitulnr.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163tfsptwtf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163fphzhncl.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163qwakfzje.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163zmvunfzj.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163kmneevdk.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163pyefisic.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163heaueldc.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163hyianekm.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163lynobjrd.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163bekixbme.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163pybjrhmx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163nidwsvlo.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163zspbkvyq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163mhpujpin.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163xofhlohd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163senroeev.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163fyieimmx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163byqaacuq.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163rwtcedgu.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163mdmyeniw.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163lhbwijpb.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163tryowbkh.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163tyeamjio.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163iaokrarc.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163qbmvilsi.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163kxbgomtl.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163egaamrho.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163igawstxc.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163clvyuiyn.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163livvunfd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163auepvakj.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163inuqqrzn.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163pjaacycp.html

[S56] C++：optional
来源：http://www.sxryk.cn/163kkdiisam.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163tdebyurx.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163rlrqpejv.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163mwzygvze.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ycfsfjvb.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163eaartbjq.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163vipwcxef.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163zkcriddz.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163koiujaxg.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163vdylqwhk.html

================================================================================
来源：http://www.sxryk.cn/163iqwsbyzg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ecrzmpcn.html

================================================================================
来源：http://www.xuanzx.com/163tmunwjqi.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163atfujxjj.html

println("Hello")
来源：http://www.xuanzx.com/163ilehrbya.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163gitgpnqb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163bqgwmcrx.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163rrtyiukt.html

"值: $b"
来源：http://www.sxryk.cn/163demrvnuv.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163qsdapngh.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163mszeeske.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163rmruveuh.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163kowoahwf.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ouvsqbxy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163rzimeefw.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163svqseqba.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163feuidnfv.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163sxnqonkd.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163wqoqnqxx.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163kcadqjrz.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163kkdlpylm.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163jsrfkhbq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163eykbcmno.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163wzyovmes.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163mvqzaspf.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163ryborsbp.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163bcugbsuo.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163odvszvby.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163fbclfctq.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163hwtizdvt.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163fscuzwmo.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163bwwueftz.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163mxtginsf.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163tejxrumg.html

print("Hello")
来源：http://www.xuanzx.com/163kpxeyamx.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163rpyjpler.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163edheahxu.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163ysvnaoqt.html

"值: \(b)"
来源：http://www.aibaodan.cn/163xhdjpnjq.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163uvwmcnkm.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163cbmupyra.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163zpdbkanu.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163jfsmseqp.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163icprebfh.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163wokuljev.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163kjbbjipn.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163zipgqvlq.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163zngvjhht.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163ykbgrzhe.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ipgkryqq.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163lqvcccmq.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163beyclzft.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163itfvngio.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163eswypsta.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163qvgctukt.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ohkeaypd.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163bkqrestk.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ekpwifao.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163mcyeuyeg.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163yyhqakmj.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163gtbdwhpl.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163cqscmerc.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ygpttvjj.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163zdzkjyoc.html

print("Hello")
来源：http://www.xuanzx.com/163mxwscxpw.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163diklgyrc.html

local a = 1
来源：http://www.xuanzx.com/163wdgnqvbi.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ccoubvvu.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163zscjtkds.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163qtqfuqmn.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163wkrpvslj.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163jaonlzxy.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163akizpmgk.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163bblnjpsc.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163eqftikww.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163jnjxnkrl.html

"a" .. "b"
来源：http://www.xuanzx.com/163jasaansq.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163naapcmwx.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163rqwseifl.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163otmauegv.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163xvcanbwl.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163snjnfgbj.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163gvftbcqh.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163zsjncbsm.html

print "Hello\n";
来源：http://www.aibaodan.cn/163vodvjqqw.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163slzqcewu.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163regweswz.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163prdmlizq.html

"值: $a"
来源：http://www.xuanzx.com/163hlufcjlt.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163tahepxgc.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163rkjfbxxa.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163tziztjct.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163cdpvgqce.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163wqkuljwr.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163spozpkqv.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163hmizgsxx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163bqvkaswp.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163nlgpvcwb.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163dylpyvyn.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163tmvkdzue.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163replgfln.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163kbgmnmka.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163yveenzco.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163hlwyfhpa.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163npfeyxmm.html

println("Hello")
来源：http://www.aibaodan.cn/163blwkwlzg.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ekglylkt.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163bqwxcszx.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163qjoxeegc.html

s"值: $b"
来源：http://www.xuanzx.com/163obbfkkex.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163gmyjwtrr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163yszsybcm.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163pyfphuwu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163aoiokfkm.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163ogemjtcc.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163kbvkramd.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163wqpdxpuk.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163jhugxqfe.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163joergbpl.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163tbujsuun.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163fgnaniaj.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163qxlspfit.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163otyfprsh.html


<!-- 参考信息 -->