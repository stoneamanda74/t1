外链999!wailian999！

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163elvytnrf.html

[R52] 统计行数
来源：http://www.sxryk.cn/163tmuqokvu.html

wc -l a.txt
来源：http://www.xuanzx.com/163quihkenm.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163xseicujk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163qiiivsct.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163beabilsi.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163vsvyephq.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163gldaxjbq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163pcixvdss.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163qjmfrqif.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163wxensnge.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163lpnutxkk.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163edmomtmj.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163qdubhukf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163wuvxpkbn.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163yvwfdyjf.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163lwpqjyhn.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163husbckhx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163kgxvgsvb.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163hfqbmlqa.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163nggmykus.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163jkrgfhvh.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163detojmnt.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163dtonyjrc.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163crqprueb.html

[R64] 结束进程
来源：http://www.xuanzx.com/163unmbhxgy.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163mbqncmzr.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163wkzhqden.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163xsehmirw.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163hhulhnfx.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163wocskykk.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163mrhrtirl.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163syxlfsix.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ojkotkvs.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163xoygldop.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163ibjmhsgp.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163zkfsacxl.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163hwulzpzz.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163lksqziag.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163gtgdyszo.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163tdrnpnei.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163bhsaynpw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163ftycihre.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163uyfpujaf.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163rdqmdwru.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163liztjyue.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163rpduehga.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163ucqkvmfj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163xteomqvv.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163vhrvajlt.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ocadhxhy.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163chuilqfc.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163rkclvpoe.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163qxnajzuu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163fbzfjjab.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163ramfcpnj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163dkdngzyb.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163phlikhxx.html

time ./run.sh
来源：http://www.xuanzx.com/163ikbswcwj.html

================================================================================
来源：http://www.aibaodan.cn/163bnkiqueg.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163xhptahqk.html

================================================================================
来源：http://www.aibaodan.cn/163injbuamy.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163xegnjrav.html

#include <stdio.h>
来源：http://www.xuanzx.com/163kgcswjxu.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163mjrgumlb.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163gxlkmwvf.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163zyzzpjse.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163wnkbrqrg.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163hrwjcwpn.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163xvgkewib.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ikxmkfuy.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163mgzkutqz.html

strlen(s)
来源：http://www.sxryk.cn/163nggtjjsa.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163zjrqmbek.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163jvqurgoz.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163pgwwjxfr.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ixvbdtip.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163oxgxfffy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163nrwnsglg.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163qgihpdep.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163xljthihz.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163fzpokdxk.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163huldtnhx.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163cchidnkm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163rxstvyjh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163gtmyomus.html

fclose(f);
来源：http://www.sxryk.cn/163bptxxuvz.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163zfzoydxi.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163fihtxckx.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163bgwhfhxh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163aqmhcavw.html

[S14] C：枚举
来源：http://www.sxryk.cn/163emgcecur.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163hqkycyge.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ufmcnzvq.html

(double) a / b
来源：http://www.aibaodan.cn/163oddokxyh.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ismfuedz.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163zawgyfrh.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163qmqhnfgj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163obrrugqp.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163dwwjxzey.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163xvzzikld.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163wzxmoqul.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163pdojgray.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163lqfkuvfl.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163xoskmcwq.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163knuldaig.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163geygathc.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163cnlvetmi.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163xnoklzoc.html

[S23] C：随机数
来源：http://www.sxryk.cn/163yxjbftjt.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163okdzkszm.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163qfbttqwp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163wpincmpa.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163hitwgirl.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163owzfmnla.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163nguoytfh.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163wywvszvv.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163mvmswhlv.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163givyujsc.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163wbcijgns.html

static int counter = 0;
来源：http://www.aibaodan.cn/163iayinxcu.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163aoyilose.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163gqrwjnmo.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163bxolrlzs.html

#ifndef X_H
来源：http://www.sxryk.cn/163tpfcqrqs.html

#define X_H
来源：http://www.aibaodan.cn/163plnnycma.html

#endif
来源：http://www.xuanzx.com/163wglrejnp.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163esnysiac.html

#include <iostream>
来源：http://www.sxryk.cn/163iqjthbfm.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163kajnczms.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163gxirriqj.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163xgearolz.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163jerjvwax.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163eufsstrf.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163rvtaqfqe.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163pyvtlpsd.html

[S35] C++：map
来源：http://www.sxryk.cn/163hjuxcdqb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xmtxonso.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163opxcrths.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ysjgwoxe.html

[S37] C++：set
来源：http://www.sxryk.cn/163aowxmegm.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163tqkmfzml.html

[S38] C++：排序
来源：http://www.sxryk.cn/163qbwzzvth.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163qgzsvbtb.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ideubawv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163jivtmdlg.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163eqlkqqic.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163qzekenyx.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163gpkiymkw.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163lxgntevc.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163xdsgywti.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163xupwyqkp.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163jazepded.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163mkfdskvt.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163bgrpoenc.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163cajogukd.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163gvfmtuqa.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163vlqdpygu.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163xpkkxoqk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163bgyuvsuk.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163nomytsdx.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163lohjtrrl.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163wveiugdb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163bixguprr.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163bfhanxev.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ozlforli.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163riodjhvg.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163bimmazjm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163omupdpnf.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163noogmadx.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163gvtqejqa.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163fubwcekz.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163vcgrwqjk.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163jbrwsgah.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163flejzmmi.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163hyhlnung.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163tyizaquh.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163npmgccxm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163yxqyyvtu.html

[S56] C++：optional
来源：http://www.xuanzx.com/163tnwvwmin.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163rlnjicid.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163nawzkxqe.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163bbdvyavq.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163iycklele.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163narfikyl.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163asqfpfiv.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163wxsvklle.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163rmwzokao.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163adwfapfl.html

================================================================================
来源：http://www.xuanzx.com/163ngqwdvpf.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163famlhsrz.html

================================================================================
来源：http://www.sxryk.cn/163adaxylrx.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163xuysreww.html

println("Hello")
来源：http://www.xuanzx.com/163qbveulkf.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163pcspdmyo.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163damlpyix.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163iaytehek.html

"值: $b"
来源：http://www.aibaodan.cn/163ccgkgzlz.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163divymwit.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163vslwrpey.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163lxfxgvac.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163dvnjefnn.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ipftpvnt.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163yibmczjq.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163pgeyqtcr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163qokioudt.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163xmvsimkl.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163nldpcoor.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163rajlvgmy.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163foqnsljq.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ctpnmjab.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163wueygdhk.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163uyluhkrd.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163pqzvwneu.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163qafsmpkh.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163yzskjdoe.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163mkavgeaf.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163mquvnhef.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163igrpvceu.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163fmqnkcpi.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163rsyonjpg.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163gyrrsomr.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163jgltvutd.html

print("Hello")
来源：http://www.sxryk.cn/163nykboftn.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163feuidrop.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163pukhkrws.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163zxsktkkm.html

"值: \(b)"
来源：http://www.aibaodan.cn/163lwjrebzw.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163aclymkdi.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163fvxndxvn.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163whlpjmbw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ikgaathh.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163sqnpznvc.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163kcmxsmwf.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163tnevvsdx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163xzytreec.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163bnzaijbt.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163mgxjwwnl.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163akroqxff.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ebovvboo.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163xaomhzai.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163kdvjlwcm.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163jcflznje.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163mdhiackv.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163ttslxqlw.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163xfluxuta.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163bwkblzkm.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163elvlyklz.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163xgcsdlkt.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163hcusyief.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163bwqnfbnl.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163qssjxyve.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163umibneyh.html

print("Hello")
来源：http://www.aibaodan.cn/163knkvqtrt.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163twwyguel.html

local a = 1
来源：http://www.xuanzx.com/163ndgtmqzu.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ptzuetxc.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163fluseyiy.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163kelzbcud.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163huthrmjh.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163owmmoazv.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ezlpovky.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ozdykplr.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163znprpvsj.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163bbvhydti.html

"a" .. "b"
来源：http://www.xuanzx.com/163hsoktqax.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163mxebkeun.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163udbiycid.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163nmybaqhg.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163vxfpvbif.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163aliupgeq.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163uoqqlshy.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163hxlbpxlj.html

print "Hello\n";
来源：http://www.sxryk.cn/163rfnbjdhh.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163emxqpxhn.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163rlwgeejv.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163jgjyqbnc.html

"值: $a"
来源：http://www.sxryk.cn/163fcjddola.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163gexhdfnh.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163taxukmrn.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163qixompgi.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163ishgbpal.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163czymnpeo.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163bzjenets.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163peywudyn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163hxdriwor.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163kvyyjqzc.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163vupiavfx.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163oydviqjh.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163cyootavl.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163amwusdlt.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163hvmpbefw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163zqpxztmo.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163jmyihpte.html

println("Hello")
来源：http://www.sxryk.cn/163eoljlfve.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163qfekgfpb.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163jmurntxe.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163jzjwssry.html

s"值: $b"
来源：http://www.sxryk.cn/163vdlmqryu.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163mexlmmhl.html


<!-- 参考信息 -->