外链999!wailian999！

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163mvpyqsif.html

[R52] 统计行数
来源：http://www.sxryk.cn/163cbihqkdm.html

wc -l a.txt
来源：http://www.sxryk.cn/163kpxmmpzn.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163elperqsm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163knxeskep.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163cmbhlccz.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ceokiqnx.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163gabszpjy.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163ivdqtair.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163ornoamev.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163kacmhsbm.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163useuuhpp.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163dorrsvje.html

[R58] 下载文件
来源：http://www.xuanzx.com/163tfzobcxv.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163gflbnogb.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163mpijaxlv.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163mlvhgube.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163gukeexia.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163cmwuxxbe.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163etlmzxlc.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163nwayrlcg.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163tujreoux.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163fbmcylkg.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163trrecyyp.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163rljwbiuw.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ehtdkdoi.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163pczfmdps.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163owpbzfaj.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163aqxpttos.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163ejwgvquv.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163rnyyyefr.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163nvuttogm.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163vtlfkjvb.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163xqkybpvj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163zlxkiyfl.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163suleaiky.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163brwixfrl.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163txccomhg.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163jeisoykj.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163fqtyvvsj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163vanqreel.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163jghsyype.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163bywgfwpw.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163buvvzpwy.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163ssqzmbcg.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163rdrrzknf.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163qzhalexg.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163aetiaobt.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163rjkhovpj.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163fulvcwof.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163vikjjzbx.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ibgvywos.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163mhsloers.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163jquyfnay.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163iwayzwit.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163aelafreg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163qbacjqxt.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163miqpcumq.html

time ./run.sh
来源：http://www.xuanzx.com/163gnzlaqst.html

================================================================================
来源：http://www.aibaodan.cn/163kpxowzmw.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163rykhdggf.html

================================================================================
来源：http://www.sxryk.cn/163rwvzqtgs.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163lwwfgyjh.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163dorydqns.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163xuqdcbth.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163fcxwcxov.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163hfbrusfc.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163kwsamuyi.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163quuvnyow.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163crvcgtij.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163kqebbaib.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163phdmfgxz.html

strlen(s)
来源：http://www.aibaodan.cn/163pmyapvhh.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163uywrsrha.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163logrgxdu.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163lyizzxli.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163fiokewdp.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163udpbixxg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163uzjnmkfl.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163xqzilswj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163uidomidy.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163sunpmkzl.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163sagsutdu.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163hufxdnsx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163sbudhcnw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163kvalmlkg.html

fclose(f);
来源：http://www.sxryk.cn/163rweiztfg.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ifgkjzod.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163knxcwdso.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163azmnrzjn.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163vkackkdt.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163kjkhjstp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163dadcywcv.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163yglxsfww.html

(double) a / b
来源：http://www.sxryk.cn/163dggxjusw.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ehrponkt.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163apywiacu.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163zkgyedha.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163nfyddoqm.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163fmfnoynj.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163poiccrit.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163qnqvmmmo.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ofuasqli.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ukckeubv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163fypwmsws.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163hxbxfblx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163fftingci.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163zsffjime.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163abjoqldw.html

[S23] C：随机数
来源：http://www.xuanzx.com/163eceescij.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163sunpovla.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163zlcovlew.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163dsrmhuou.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163cecglrzh.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163yyojposr.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163orcupias.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163izzctuav.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163honayzvp.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163anqbkdgx.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ulgwhcap.html

static int counter = 0;
来源：http://www.xuanzx.com/163uhumwgfl.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163iatnrmsy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163rxegtnga.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163haoeuycz.html

#ifndef X_H
来源：http://www.xuanzx.com/163azbwzneo.html

#define X_H
来源：http://www.sxryk.cn/163cljbgnej.html

#endif
来源：http://www.aibaodan.cn/163pbakcunh.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163oznfbfng.html

#include <iostream>
来源：http://www.sxryk.cn/163bzafkuab.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163scjjdfla.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163pohwfhkx.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163wevlgzan.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163nlrcugrl.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163qzifewhf.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163ounekepj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163xyieunlc.html

[S35] C++：map
来源：http://www.sxryk.cn/163gzvfcvxf.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163yusfrutb.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163nqczyoxl.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vobqinqe.html

[S37] C++：set
来源：http://www.aibaodan.cn/163aodemstq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163mlbygjod.html

[S38] C++：排序
来源：http://www.xuanzx.com/163qqbjwzzj.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163oqgmosqa.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163zzxhohlh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163kmpagwgp.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163qichifgk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163vwlywtyd.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163nabsxnvf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ddlhoquj.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163gwdokbvi.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163chgdcery.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ywjkxzqp.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163ybweimwm.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163odcjfwpo.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163csklamww.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163icahatev.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163fmaicqbo.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163haejxskj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163muyorqrj.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163yjktytpv.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163dcamsuik.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163blmvmucw.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163zlabtjkj.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163anhjsfzz.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163cpbmjxcu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163jkatdyok.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163okkesdjn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163dqbumhig.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163klfdiljs.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163yltzrwfv.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163wxsuoiuj.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163dzetepef.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163hgxsvipb.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ezvwvqlg.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163euwtlcgy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163uwhxldpy.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163glewjqom.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163kscsvtui.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163dadwxsel.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163sxzegecc.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163kvetubpk.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163bhtxyczu.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163cxzpyupc.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163dujheany.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163etxbqzoi.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163mlmkqvnx.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163owqbjmqq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ttwmjoor.html

================================================================================
来源：http://www.xuanzx.com/163mbnttrpm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163gmqiprdm.html

================================================================================
来源：http://www.xuanzx.com/163cdtmjjje.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163nqlvjays.html

println("Hello")
来源：http://www.xuanzx.com/163jejpdhrk.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163lnvfogqy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163gqpxpixc.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163eqswbsht.html

"值: $b"
来源：http://www.aibaodan.cn/163ljktavnt.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163somtcibc.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163pgcxfnxx.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163ltgoyvfv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163fknclfxv.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ewrytkru.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163phvlvbok.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163wuqouelg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163zqtqxvqw.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163itwwmnqn.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163vsespyjl.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163idmwyqkw.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163hleqzjyh.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163nwgowlsy.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163muaszbdf.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163kujnmfiv.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163hmntdwch.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163ovremjcx.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163nzpblhhh.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163gkcukzsj.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163avchvqwo.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163afrduicq.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ecwncspj.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163kqmanqag.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163kzdmdsox.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163cnyzwnuc.html

print("Hello")
来源：http://www.aibaodan.cn/163ixymoslr.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163rgbnnlxb.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163kzjoasmm.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163dzrakcis.html

"值: \(b)"
来源：http://www.sxryk.cn/163clxkoxux.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163dobdukds.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163orkuhuif.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163bxgkcdhe.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163tjcgirxc.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163mpwynwvr.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163texkjfzm.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163prpjgoem.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163xgkbsdtf.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163eufjtmrz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163deovexdl.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ubhuljuk.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163jmmwwleq.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163vlnbdxqi.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163tkddbyho.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163azednfay.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163tvzesdla.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163rrflfafz.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163fzokezmv.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163ldzluwym.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163uyaffzra.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163orinezde.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163htxkgcoh.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163lblkutul.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163epbsksea.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163nspmgqyj.html

print("Hello")
来源：http://www.aibaodan.cn/163rcprbmio.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163fsnuagrb.html

local a = 1
来源：http://www.sxryk.cn/163vsszukez.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163pstxnjly.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163qejityfh.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163scjrddar.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163fesawyuq.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163gruapqmk.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163yrtrjjro.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163mkttymgs.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163xiamsply.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163axetcvtu.html

"a" .. "b"
来源：http://www.aibaodan.cn/163rbryvrrj.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163yilyosqp.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163gzmtqxki.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163tcpkzqyy.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163zepzromm.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163vmadlbti.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163mdkixmro.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163zewflfwi.html

print "Hello\n";
来源：http://www.aibaodan.cn/163bqittrjf.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163tlgtztfa.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ylkjkdqn.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163jlkoffjo.html

"值: $a"
来源：http://www.xuanzx.com/163simkivdj.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163sgultoik.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163eivkqpxo.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163mcwhdrnx.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163zsxcfhza.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163bafwpsmr.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163wqapizxx.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163skxhoymg.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163wwqbnruf.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163yrzzxjvf.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163burixhjd.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163fkkxijti.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163xkouhsmo.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163xbtzhpas.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163cuwtifyh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163ifnmavqi.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163ykdaqggs.html

println("Hello")
来源：http://www.sxryk.cn/163duxsgpaq.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163hqyaekby.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163drpwtdyd.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163lrxnqmzt.html

s"值: $b"
来源：http://www.sxryk.cn/163bfjahrgx.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163jfqactds.html


<!-- 参考信息 -->