外链999!wailian999！

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163gnlshfve.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163zuregcxp.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163rhvizzom.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163hyvxmkgm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163ooaxxrrj.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163oiewhyvs.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163ejdqavxq.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163ruuplgvs.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163gohymxmj.html

[R50] awk 求和
来源：http://www.sxryk.cn/163gwbzplcp.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163vxeaobok.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163xgvczsxj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163dohqbqus.html

[R52] 统计行数
来源：http://www.xuanzx.com/163lmshpkxq.html

wc -l a.txt
来源：http://www.xuanzx.com/163zdmyujyt.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163djzugonh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163wslilmeb.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163kpdivglf.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163yujnhcga.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163vkijpcvt.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163wigodcnc.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163auaafrco.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163pufzvyok.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163tvgmjzmc.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163locgelib.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163jnoublus.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163jjgxejuh.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163qybuxaes.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163yzaipbke.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163ydwxiygo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163yflbsaba.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163xhlrvuvw.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163qsrfquat.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163bcawgkqt.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163urursrdj.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163kornuqig.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163bmbjmuor.html

[R64] 结束进程
来源：http://www.sxryk.cn/163cqllipdg.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163kubducgi.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163niibkkyl.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163nzwpxrne.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163yojrrsml.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163gexprwgc.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163mtlftukz.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163fxjpfcfn.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163cyboqstb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163zegnvlup.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163bcpznvtr.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163xbpqlpyj.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163auvzodkx.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ljzmmvlj.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163gmorwptm.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163umkqugdu.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163jgtuiixd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163smnwsatq.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163kcmhxggp.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163zaivwcme.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163fnpotope.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163sbujcfaa.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163lkknaojx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163abzeeyys.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163eddxdskd.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163guvdsbhm.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163dkradlin.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163lfkcpnnd.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163utnjjzif.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163hmeoceff.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163wcrtmbmq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163ciuyuylz.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163vadybkul.html

time ./run.sh
来源：http://www.xuanzx.com/163xnygrwob.html

================================================================================
来源：http://www.aibaodan.cn/163hrkhaupd.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163lnevjexc.html

================================================================================
来源：http://www.sxryk.cn/163ebbxaesv.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163xysmvigp.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163pgfeukxw.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163bynnlbzv.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163gegouqtj.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163gokivgrk.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163wdihldsf.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163zujydpwh.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163lngpzoab.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163jzovfrvp.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163bfjldzvw.html

strlen(s)
来源：http://www.aibaodan.cn/163xnqdjgdp.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163xfnobppg.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163dbiaogfq.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163xwjizncz.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163hljgbowb.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163nawkzyei.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163xoltrwzw.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163syfpfolj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ybetmdjh.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ciibqvwd.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163gemegklx.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163jydaehry.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163iuaippow.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163szfnkhau.html

fclose(f);
来源：http://www.aibaodan.cn/163ipbfhcse.html

[S12] C：写文件
来源：http://www.xuanzx.com/163mpwmobzz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163qlqphqjc.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163cmhhnwdj.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163wtfbhriz.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163dfunfjkx.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163utvlthor.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163slvctvra.html

(double) a / b
来源：http://www.xuanzx.com/163yrolzfyz.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ongjumer.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ptiepkeh.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163qivocumo.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ojqbaogg.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163uqyldaci.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163wuxnlqcs.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163knisblfu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163rydbepyl.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163tofrpcqy.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163mrmcufrx.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163vkxiolny.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163vdbomyku.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163hqywbjtl.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163bivashdp.html

[S23] C：随机数
来源：http://www.sxryk.cn/163hhnjtwry.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163rthxwvay.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163ioohkewn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ovstrkhk.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163kgnkqyik.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163rbkqapwy.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163fxbleuas.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163tztkovcm.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163tbjuiays.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163xtyqtsyn.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163xditmisw.html

static int counter = 0;
来源：http://www.sxryk.cn/163ursdvomb.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163zeuhinet.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163ygxgeuzd.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163cscxaona.html

#ifndef X_H
来源：http://www.aibaodan.cn/163zvxcqhoj.html

#define X_H
来源：http://www.sxryk.cn/163avzsucvx.html

#endif
来源：http://www.sxryk.cn/163ttkejzxh.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163jejbwdty.html

#include <iostream>
来源：http://www.aibaodan.cn/163qpmytrvq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163lehkjfrq.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163bfwkxtpy.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163dyjytufr.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163vcgjvkxb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163dksagnuq.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163iokofmpe.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163xvksgvyq.html

[S35] C++：map
来源：http://www.sxryk.cn/163yaukcqnr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163cybyqqrb.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163zuqlawsd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163aejtmpck.html

[S37] C++：set
来源：http://www.sxryk.cn/163dvsixyad.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163hnfdclic.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163eltnqaqu.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163uqswiykx.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163jhqxovny.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163dqklrsox.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163nezreyiu.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163zhzydexc.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163bpoaxthw.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ykqtmake.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163nrimuprb.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163mgvaniah.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163tzsakhgn.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163iywicoga.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163lsbbabxy.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163qusxuzos.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163tqkeujyg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163cgkesapn.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163hpqttaup.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163zuvmcmqb.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163xcshhgle.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163fmikhfji.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163clrlaoyt.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163nxyvntpo.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163onubuljc.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163uzblewei.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163zwehubup.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163acbitvmt.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163hegirtmm.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163byhyhowu.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163mbkjffbo.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163chvacogb.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163jydoiggc.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ufgtxbuv.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163seuokuah.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163omucxsln.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163usqlvexc.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163ticgeylm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163uxnmfchu.html

[S56] C++：optional
来源：http://www.xuanzx.com/163ozggsoxj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163yvimfhes.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163jtoggxcz.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163gseqahoo.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163rjsankbu.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ewansaci.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163eoqcrgoc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163mmmtwxus.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163hqffulmi.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ufxszaev.html

================================================================================
来源：http://www.sxryk.cn/163ptudlsdq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163xoldpefc.html

================================================================================
来源：http://www.xuanzx.com/163iztzrweb.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ygtzukco.html

println("Hello")
来源：http://www.aibaodan.cn/163bhsszwos.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163qxvaazho.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163airzmnep.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163edntrlcq.html

"值: $b"
来源：http://www.sxryk.cn/163oywngmyi.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163ircuzbrq.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163gptxqcxy.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163ewjbwccz.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163nsggiend.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163jvghihpb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163evhquuij.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163eufgdofv.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163myokcehj.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163swodnpfb.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163esjvdmlx.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163qgfekrgn.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163xdhglozq.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ppyrktfy.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163rwrturdd.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163wdpdsmgi.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163yerjoyff.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163efrximuy.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163dnouvkbj.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163bwnrlvdq.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163yyyulyxr.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163msjajhtz.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163tviupvgf.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163ixmngzpe.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163okalytkh.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163mqjiceqq.html

print("Hello")
来源：http://www.aibaodan.cn/163yatxdaqu.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163zryzhsex.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163srhpsuzk.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163gwahngof.html

"值: \(b)"
来源：http://www.sxryk.cn/163nnsyptei.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163lergsyxv.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163barejlni.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163cfnnmykr.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163smzxsdrs.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163jhkunumi.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163tfhlxhir.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163dlqnswmk.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163wzdiowaz.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ivavulth.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163cwtmejab.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163jzjigfsc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163epuxwkpk.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163rbsauxcj.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163nycqsmcz.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163riexnslx.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163mresyyms.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163htzhapwp.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ybyflhyi.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163vrhhkplf.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163gjkvgklu.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163rslhaono.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163wjxewwuf.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163mcrupuns.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163utjlejoy.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163lrfayjnd.html

print("Hello")
来源：http://www.sxryk.cn/163rdzbbjvh.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163jinyacxv.html

local a = 1
来源：http://www.aibaodan.cn/163fyxllebd.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163fdgsqrpt.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163gzuvakky.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163wwzwnfhn.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163yrmrdbxg.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163tlogrbjh.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163icjbltdz.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163ooicgpsm.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ppbbwemb.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163blindvam.html

"a" .. "b"
来源：http://www.xuanzx.com/163nqaydwuf.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163nyghlcer.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163vvtlucrc.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163nwuoqgrl.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163sgmnlhpl.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163xjlknqor.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163uzjseplj.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163wheywpee.html

print "Hello\n";
来源：http://www.sxryk.cn/163ixtekqwr.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163dobobdvp.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163bnlesehu.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ofghdvrq.html

"值: $a"
来源：http://www.aibaodan.cn/163gqtmglfi.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163gmyhsmgy.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163mmeslhpa.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163psnucdfk.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163geonikdx.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163xuuhjcsz.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163upykcaek.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163tooekkcf.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163hyhxnlom.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163bnubcaos.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163rxhtasck.html


<!-- 参考信息 -->