外链999!wailian999！

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ggjnhpum.html

[R52] 统计行数
来源：http://www.xuanzx.com/163lnqsjupg.html

wc -l a.txt
来源：http://www.xuanzx.com/163vfaggknt.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163wveyjmdi.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163sdpbdzhw.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163aophfokb.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163gwmqywmp.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163dtnamyam.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163bstmdyej.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163syvccwmx.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163rbaylvrn.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163rafssktc.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163rdiggejl.html

[R58] 下载文件
来源：http://www.xuanzx.com/163ayqttwuf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163sqtxkrsl.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ylaujjbh.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163vppcxbyp.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163tsoojaqs.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163sxxpthbk.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ptyhvjff.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ossckhia.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163pgftoaul.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163kkwzrvix.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163livxhcxq.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163mfiwhmca.html

[R64] 结束进程
来源：http://www.sxryk.cn/163vhbampbl.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163rhhjzpgc.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163jdrsquya.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163zxypcxmc.html

[R66] 定时任务
来源：http://www.xuanzx.com/163hxrccclc.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163vbvxitbi.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163qaqaewoy.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163klsnjnzl.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163fppbtcqf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163gwkvsheq.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163iefatovr.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163auarxulk.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ezkgsipf.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163rndelexh.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163alkdbfbi.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163zrgmvmnd.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163zxoxpnkc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163msnourjw.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ytwmjgxd.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163xjdxzgky.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163dtrjulha.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163uywpxnay.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163kfoamndy.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163oalgcapu.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163pbqwdmcg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163vakpcpza.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163lpvdgmif.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163nunfupnt.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163yoixcqft.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163taobxxrv.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163cbmaumsk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163urvxvbjy.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163ijehnnux.html

time ./run.sh
来源：http://www.xuanzx.com/163bgtnmyzo.html

================================================================================
来源：http://www.aibaodan.cn/163mnsgjvsj.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163detugvpg.html

================================================================================
来源：http://www.xuanzx.com/163sjuvnaol.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163zkahvebe.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ipkrjhka.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163ytyziwds.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163dcxwuzyc.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163vsfpwlbz.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163xazecyct.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163wzxwpubm.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163ldmfxkjk.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163rjmcwxxp.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ysoqpnau.html

strlen(s)
来源：http://www.xuanzx.com/163dppmjggh.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163sjurrwra.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163opgwiybu.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163sanrxsyv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163wjcrcxno.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163iyaymibi.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163wfllocdt.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163xmebmgun.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163btidakxe.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163unscghkw.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163vchkjgpk.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163phrjgxbq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ohdyblvh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163oajulnvu.html

fclose(f);
来源：http://www.xuanzx.com/163yljfbulv.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ytfztmsz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163gvjxbqjb.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163zctxzqve.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163yctxggfx.html

[S14] C：枚举
来源：http://www.sxryk.cn/163giepitfo.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163buijkfkz.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ibbhdgkq.html

(double) a / b
来源：http://www.xuanzx.com/163jsndyauk.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163zguuoisd.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ehpsewto.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163crlkyyqk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163jamxvtdf.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163jyjdievh.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163pitoxbhl.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163qdikijnu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163wwtywtwi.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163tpaynseb.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163mpqueilu.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163mutwafhr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ipiwccen.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163crqrqfqj.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163uagasgep.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ulmkdazq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163jbforhqm.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163qouukbfe.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163bxqztevm.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163zxzbsxyq.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163symbaqfi.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163bocnjkgu.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163tmajjkhj.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163xldplses.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ylxeurbh.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163cevxsfon.html

static int counter = 0;
来源：http://www.xuanzx.com/163hgyroqub.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163jalwoxlp.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163twvtxmrf.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163dmxsuzes.html

#ifndef X_H
来源：http://www.sxryk.cn/163zslgibir.html

#define X_H
来源：http://www.sxryk.cn/163twkcmlti.html

#endif
来源：http://www.aibaodan.cn/163zddwvarl.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163plltamyg.html

#include <iostream>
来源：http://www.aibaodan.cn/163wstyoyls.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163axfqwmcn.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163gmynphel.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163ffigaxhs.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163zqakzofm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163yzuwojed.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163krfbsyop.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163cklyjaey.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ihvapuog.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163kaleuibu.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163wrodktfc.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163snwtfksr.html

[S37] C++：set
来源：http://www.sxryk.cn/163hmdnduda.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163lscrjcne.html

[S38] C++：排序
来源：http://www.sxryk.cn/163jrxsncoa.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163tazdfuof.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163kuckxtwu.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163pudibtdb.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163qjvwtkcw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163lcqyosln.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163jplbttkv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163lxbhbipj.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163mtnvbxll.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163buteaabe.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163gpryotej.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163cisbrfdx.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163uhndawlx.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ekopucba.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163mnmjwolm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163zfwxhdve.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163lstelaho.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163wbavczct.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163inhkyonf.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163izxytuio.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163qvotgzqo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163iitnjovt.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163cxdanjob.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163xstshxwf.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163bcpczwer.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ucqkyojx.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163whedbshn.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163iuhotrfq.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163vprtdhck.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163pdrxqanm.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163mijhumku.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163wkuyjywt.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163pfjnrhlm.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163mfhkdcau.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163amkhrtqq.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163qicvfmov.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163qhoyxigy.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163qbmjxlof.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163gqiuuljm.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163qejfjnpd.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163hanrwflj.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163scbnkocw.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163stjaezyh.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163bqoqardy.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163bxdqxnpi.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163olucxcjn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163uhgnlrlq.html

================================================================================
来源：http://www.xuanzx.com/163tecjfexx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163mtbbhxab.html

================================================================================
来源：http://www.sxryk.cn/163wqrjogit.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163omjculen.html

println("Hello")
来源：http://www.sxryk.cn/163isygaleb.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163gmfxcbjy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163bnpabwkx.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163vtbovufq.html

"值: $b"
来源：http://www.aibaodan.cn/163kkmygjfh.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163lxtvuedq.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163jqbreytt.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163mkhqemtm.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163nwvxzcxj.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163dlphcvdr.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163rpuvjsiy.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163xsmieqyr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163stulzdxg.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163zyzinhnt.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163uffdrrmy.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163jveiaxxb.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163rymnpzxk.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ymfukjks.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163peoophnx.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163kiktwmhy.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163mielzdsv.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163tooidlze.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163xpezzxdb.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163qdrkloyr.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163abtrvand.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163hvndazlv.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163tctiiijv.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163jlpyqkmu.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163vphfyvoy.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163spgcwiej.html

print("Hello")
来源：http://www.sxryk.cn/163atmfdfmj.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163vhpkwucp.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163beikpubd.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163umpfygcr.html

"值: \(b)"
来源：http://www.aibaodan.cn/163tivyhogp.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163ucnedrjs.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163gzecnbqm.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163xgwmxjny.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ofxrpyal.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163laklfrzk.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163tsoccyhb.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163tongeugf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163omhekfyh.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163nwnlpsjj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163duauktum.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163grrmyjhx.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163dqfzkuse.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163oepviprr.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163cpvhrjpp.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163zdxtpkvj.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ivlnbujk.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163zlwghxnu.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163vhsboxjm.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163wqbdxbpz.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163mwnqvvsd.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163wagnwycl.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163scvhfjqx.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163kcmsjpnr.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163weuvyfhv.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163bsddppti.html

print("Hello")
来源：http://www.xuanzx.com/163ecbuxztr.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163qhtupcrh.html

local a = 1
来源：http://www.aibaodan.cn/163ffjwxlkf.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163srfmzhyd.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163sbbdmcga.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ktwzwtvw.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163kxwvldrj.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163zszwseyf.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163gehoiayu.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163ciayzsjv.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163gppfylgp.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163ddnbcwor.html

"a" .. "b"
来源：http://www.xuanzx.com/163wjfmrahc.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163potxbjio.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163ijldccha.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163wrmgsndy.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163ufwlcoik.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163cqaymehh.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163mjgsegnc.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163uidajnkv.html

print "Hello\n";
来源：http://www.sxryk.cn/163ouaqrroc.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163yyguprra.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163qyksugnb.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163qnjgwkpw.html

"值: $a"
来源：http://www.aibaodan.cn/163aqojpzec.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163xbrykpub.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163giwvxthn.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163fnccrgmi.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163dpgxvhfr.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163cnqzjygm.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163ozkthuid.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163jygodwin.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163tllirjfa.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163lggadrbj.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163mwofkgte.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163ylzikpeg.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163izlwvgla.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163efewzljd.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163yfygwxrj.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163gidvtsvz.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163egoqiwie.html

println("Hello")
来源：http://www.sxryk.cn/163ngrugcjf.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163nghkwxwk.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163cajjakew.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163jaqdfxro.html

s"值: $b"
来源：http://www.aibaodan.cn/163bsuiyuqv.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163plybzoyt.html


<!-- 参考信息 -->