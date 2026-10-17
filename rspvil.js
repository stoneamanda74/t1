外链999!wailian999！

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163zbvroyrl.html

[R50] awk 求和
来源：http://www.sxryk.cn/163uwjetqly.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ugneamjy.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163pmosntye.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163yhcgzkvr.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163keorrqkz.html

wc -l a.txt
来源：http://www.sxryk.cn/163nhmqzrlc.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163ehyyeqjz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163rgnqepvo.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163dlibkqbk.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163gpdgomsz.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163rcsqunyv.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163jeycqksg.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163agnbzdbt.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163uxjdpffe.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163vmhjavpb.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163qyqsbbgi.html

[R58] 下载文件
来源：http://www.sxryk.cn/163fyleegev.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163vumgijxx.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163lwiqgfsp.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163nmersyvx.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163amakzocc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163cthlssaw.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163yqztxuvp.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163qoxsqoud.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163yakbgmjr.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163bzqtwisz.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163wzdgfroi.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163jffpnfot.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163grfqpijg.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163iloeowwx.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163rncjmtgt.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163hzsamdsl.html

[R66] 定时任务
来源：http://www.sxryk.cn/163qdexbvsc.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163wobeimdo.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163avkduvff.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163mgjqpsuu.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163mmlthrjz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163svkxgtto.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ssrwkfvc.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163reddujey.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163jrwyslkv.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163ylnooqhx.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163xyrxkkrn.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163zxafyfpc.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163yodhjzia.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163oczbimam.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163ogvadloe.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163dkiuxtnu.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163sfzzpjvn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163sksgpjsi.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163tsezlryq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163zdzcmtit.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163gfrpcmql.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163nbkjdoss.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163bomgtstd.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163rbiihnyj.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163lvdfzvke.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163gxerskje.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163scwkkdbw.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163wcktfetw.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163vzccfdok.html

time ./run.sh
来源：http://www.xuanzx.com/163lgmycdnc.html

================================================================================
来源：http://www.sxryk.cn/163awtftjhc.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163vhybxelg.html

================================================================================
来源：http://www.aibaodan.cn/163rtnahahu.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163sbmbnesw.html

#include <stdio.h>
来源：http://www.sxryk.cn/163mxqhchzv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163kodumdzn.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163nrhppdfs.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ahqzdyuf.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163hbgtvyif.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163ucpuuqnq.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163rrbfcymh.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163bonfbtua.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163zxneoihu.html

strlen(s)
来源：http://www.xuanzx.com/163vsliftkc.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163twsrpkkq.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163cgvlnnja.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163xmhcfxbm.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163pzobyksi.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163eqguogpp.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163rmcozmwm.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163dekpsgas.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163kjqgaubd.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163viqntbdo.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163mgvkasnm.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ubswoadq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163zxjwmqgp.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163myiocbes.html

fclose(f);
来源：http://www.sxryk.cn/163hekdbrcu.html

[S12] C：写文件
来源：http://www.xuanzx.com/163uppvzdrl.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ybyawove.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163zicavtpo.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163sqsfqabf.html

[S14] C：枚举
来源：http://www.xuanzx.com/163wvbhrsiu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163eoxrwuji.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163fprkkpdm.html

(double) a / b
来源：http://www.xuanzx.com/163lkrdlqak.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163vithvgpc.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163wirdwpqx.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163uwnwlhhd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163hkalbrjh.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163vkezweef.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163pemebbcd.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163vrtiqiab.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163uelbwtzn.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163htkursbs.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163oogewdhs.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163oqixjwnd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163hqhzcduq.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163zqynelxe.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163zwebxfjq.html

[S23] C：随机数
来源：http://www.xuanzx.com/163hwlcqwsa.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163klgsklqg.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163jurawcsg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163feendshx.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ycjpzzem.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163dfzxnnqw.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163wuydxhpn.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163uflobhpl.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ijkpewhq.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163wumsijas.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163vrbnaeuu.html

static int counter = 0;
来源：http://www.aibaodan.cn/163aqnpnaof.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163lqtqudqn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163fqkzethi.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163tisejzal.html

#ifndef X_H
来源：http://www.xuanzx.com/163dfiddzty.html

#define X_H
来源：http://www.sxryk.cn/163yjgjsbzk.html

#endif
来源：http://www.xuanzx.com/163lcczcdpk.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163veaxrvue.html

#include <iostream>
来源：http://www.sxryk.cn/163mahjstpa.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163eusfdrjs.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163huyqgswe.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163vxtymius.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ruhxssmb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163elpjbjkx.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163ixirimzc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ttnhfiov.html

[S35] C++：map
来源：http://www.xuanzx.com/163tssyxfma.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163idhmqsfz.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163syhinemn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163kubnrcfv.html

[S37] C++：set
来源：http://www.xuanzx.com/163fnxdswte.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163sfubnjfl.html

[S38] C++：排序
来源：http://www.sxryk.cn/163ppnadjbd.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163emanlfry.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163igdyuvut.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163lwfnntlm.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163twvwdhlb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ekcympzs.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163kfcnfgnu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163badeuqew.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163qellneek.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163znjkoarn.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163qsdzbkfx.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163lbpsouov.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163xlrltpli.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163enceannn.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163fsntzbzt.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163cmeyiufc.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163xixukoqy.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ajguqdmj.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163lhvcmfcl.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163hpgzhtcr.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163fhasansr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163gjwwsiwa.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163spdhguzn.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163pewndiqz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163vngehobf.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163qxuojqzt.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163aysfzfvb.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163mjkgdicq.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163cwpuffnh.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163pvkwvsgy.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163bsuitcqg.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ustewckk.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163mvgvuaqd.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163dbiiqvnd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163ywyuwmgi.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163sutjikbr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163oiddjnmp.html

[S56] C++：optional
来源：http://www.sxryk.cn/163cpnmtqlb.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163gsiycvzr.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163rqqnglvz.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163dfesvztp.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163rkpbbdfb.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163zgehwdly.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ippshvsb.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ypypdptf.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163xfocivnv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163lijaixta.html

================================================================================
来源：http://www.sxryk.cn/163dmpkdvgm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163slgmnrrl.html

================================================================================
来源：http://www.aibaodan.cn/163jsylxdfo.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163lmgksfpj.html

println("Hello")
来源：http://www.sxryk.cn/163blrmkwnj.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163bahnihkd.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163uoxjdbmi.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163pguwzjxz.html

"值: $b"
来源：http://www.sxryk.cn/163thqytiyo.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163nrvravah.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ysybgfjn.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163tflzadax.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163igedgcys.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163nxgiujoq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163xgjgpnxz.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163lrpwftcd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163jfszzlgs.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163cedpgxtn.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163uljjxfoj.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163lifvptjk.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163umovhoyv.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163kwplsdqq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163edchsruh.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163fudbiqhx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163ndvxfjlv.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163fuoftdcy.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163vrwowoga.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163ejivekhy.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163hrxyivkj.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163ycqdyeys.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163dtioojhf.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163nlyhtujh.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163mmecjvxc.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ssuxcttg.html

print("Hello")
来源：http://www.xuanzx.com/163iyhkcwqw.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163nuecpgfw.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163cfegakcr.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163hbexcvha.html

"值: \(b)"
来源：http://www.aibaodan.cn/163yebmpvgl.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163mruuqcif.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163ulowhsxh.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163gcohesqw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163nhcalzxv.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163zaqhobth.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163mgqrrwee.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163zgdundcp.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163rurnkfef.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163mbrlchmy.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163tzqioimu.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163wrzipalu.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163ifnhoewr.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163obecwkxy.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163vczbkkjn.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163pizkenua.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163dwmxwcvc.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163qjfxldoo.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163hdeivomi.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163sjbwrqai.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163qdjfoxwl.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163qsgmrwlc.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163vvshvhto.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163vtgrcqfh.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163iphclnnv.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163zxfvjmlp.html

print("Hello")
来源：http://www.sxryk.cn/163cqxizroc.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163kraacteb.html

local a = 1
来源：http://www.aibaodan.cn/163sppfiycg.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163pbyefijv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163ncymyhxg.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163tefcdnhs.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ivordrgi.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163nwrqjpjt.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163iedezdls.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163huvrxels.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163fflricog.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163srnownxb.html

"a" .. "b"
来源：http://www.aibaodan.cn/163cbfggmmk.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163lefmxibi.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163xutebtyx.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163avsztxuo.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163gcbxmsly.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163vbnwrdco.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163nttzgrka.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163efbbatqw.html

print "Hello\n";
来源：http://www.aibaodan.cn/163tkqakfry.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163sjdqxgtk.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163hmaolgwi.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163idqdaons.html

"值: $a"
来源：http://www.xuanzx.com/163tuioubuz.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163qvhnbfic.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163kklrnnuo.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163icmyyruq.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163nijvicye.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163jefuajcg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163twvnljqy.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163cypkjklr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163xaairexk.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163bfxmogzv.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163vntlrfiw.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163dyzutnha.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163vrdfuztv.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163zolayopp.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163xiirnfem.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163pbsbhlpx.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163lhlkjwzk.html

println("Hello")
来源：http://www.aibaodan.cn/163xpdrddqz.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163hsxibsnh.html


<!-- 参考信息 -->