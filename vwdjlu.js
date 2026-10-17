外链999!wailian999！

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163vzqlkgvt.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163xbdyjcir.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163oyzojgaw.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163lykznevg.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163npoouvfj.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163jkmqrulx.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163mfcuxuyi.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163clknyukg.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163wnyivaow.html

[R50] awk 求和
来源：http://www.sxryk.cn/163gvcdrddb.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163rimkzykw.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163xagsykkf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163iabmxjlr.html

[R52] 统计行数
来源：http://www.sxryk.cn/163zfxlmomw.html

wc -l a.txt
来源：http://www.aibaodan.cn/163amucqoxl.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163puwypcpe.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163alumuwbl.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163tbetcqfj.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163vzswrfwy.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163rpqlbzyv.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163zbpsuszk.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163gzhqzgzm.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163aojksxgv.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ybshfzhe.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ywaqonah.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163igjhzajb.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163wqcagrvo.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163mqypesxv.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163rdwxvtjb.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163iougjicn.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163ignjetvg.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163foireerj.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163vaywnqhz.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163opswdgfe.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163cvdcnyte.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163mgtqepks.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163fdtjyxme.html

[R64] 结束进程
来源：http://www.xuanzx.com/163nvziddik.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163tbgbnrmb.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163zculavev.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163jpltemzy.html

[R66] 定时任务
来源：http://www.xuanzx.com/163cbilamap.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163hgtgjvoj.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163gojdrhjs.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163nuzcwjdq.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ukqmuecb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163dnkuassp.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163vzxuasag.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163mpqvzxus.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163moqarrvp.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163xfknewmi.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163paxsaffx.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163sqewqaot.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163lafuigpf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163drklwsgp.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163apzrkrpd.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163dltozvec.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163scrjhyly.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163dpyecdhb.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163moczctqp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163gbisckic.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163hhkzdwjx.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163hsvwzzyd.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ylwgdsao.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163dznjdmiw.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163ntlcmjii.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163jrqlnefi.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163ckxntqnc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163cwzwvqlk.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163vtnvfuvt.html

time ./run.sh
来源：http://www.aibaodan.cn/163gzzudpbk.html

================================================================================
来源：http://www.sxryk.cn/163jmfluceh.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163xibdxqpa.html

================================================================================
来源：http://www.aibaodan.cn/163vjoovoli.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163gcqjovax.html

#include <stdio.h>
来源：http://www.sxryk.cn/163farftzae.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163pebjutcd.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163qmwtzoei.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163xkiokcyv.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ymfhndxo.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163potsmfer.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163rlntbkgg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163tglfgfzo.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163uwszhckh.html

strlen(s)
来源：http://www.aibaodan.cn/163rebaqgro.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163twfibrru.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163zcnlejcs.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163cfnyablk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163jfxtjxwm.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163estbqlkf.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163llayxhhf.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163gxllydmm.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ybyibthj.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163kcqyskzj.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ogyrxacm.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163fsdcmkjj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163runagkjr.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163fywylwme.html

fclose(f);
来源：http://www.sxryk.cn/163sxjzzuvt.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ktgubtlr.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163thbrudkc.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163iqahqnna.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163wfbquwpg.html

[S14] C：枚举
来源：http://www.sxryk.cn/163gvigmwag.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163ufzqgggp.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163hkaytwem.html

(double) a / b
来源：http://www.sxryk.cn/163xrrrfbaw.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163exysnfxd.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163wmaikdzl.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163jistgvpo.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163kpcdhnce.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163midtkecn.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ttwnfztz.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163fjdgzzkf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163vlqersku.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163uprlxlnv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163eqanxnsy.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163rdoigfgv.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163wbfmaczh.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163rzshdiba.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ubmjobtb.html

[S23] C：随机数
来源：http://www.xuanzx.com/163quizdfym.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163myozhnfs.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163eegioftt.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163lzwqkbqp.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163rqsvqnpk.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163sfpogkuw.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163cwsqgmbl.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163niywuqpb.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163eyfjdbet.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ncjbyvrb.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163rebnqxbf.html

static int counter = 0;
来源：http://www.aibaodan.cn/163djcqqbdh.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163zivoxdzz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163lvsnrsnr.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163cpvnjgke.html

#ifndef X_H
来源：http://www.aibaodan.cn/163yhkupcqj.html

#define X_H
来源：http://www.xuanzx.com/163uwzsozcn.html

#endif
来源：http://www.sxryk.cn/163ydcfmeds.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163afgpyxso.html

#include <iostream>
来源：http://www.aibaodan.cn/163ixmeslmm.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163kvjdfrqr.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163movvieez.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163afwevkjr.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163rhyalndp.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163ywztxcjo.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163onsfddur.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163gweblhxc.html

[S35] C++：map
来源：http://www.xuanzx.com/163ggzpuegc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163hxqhiknz.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163ywmtfpdk.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163wvvhwpsu.html

[S37] C++：set
来源：http://www.aibaodan.cn/163sttmbqgr.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163cgtjrtuy.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163vrcjgyng.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163lmnnzgii.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163xxhordtd.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163kzqmbxei.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163yvsinpfa.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163mollhukw.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163cgcqinsi.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163rhffqcww.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163hljrzolf.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163fiusygow.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163iavfzrfv.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163spfbejjp.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163fgnlaxpk.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163bmvxwwze.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163iwjsupdw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163chwszpkd.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163lkeeyibb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163fbvxrxev.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163embdkavk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163gctybwyj.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163tlgmpaib.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163vfncwzjb.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163pmijzhnw.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163zaeyrvoh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163hsawpcza.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163vddkcqnp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163jwhdtlid.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163jfckhglb.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163bjewfzag.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163yruudxux.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163veeqfxpt.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163awjfkstk.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163liettaay.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163bmbrmtoy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163mxozrjck.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163lpujzepj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163zbhvegpi.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163fhdzlocs.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ddofgpki.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163zqekjwzh.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163pzqowmrk.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ivrwxxhg.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ffbihptx.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163nhivifhz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163tknjlmda.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163xraflvzj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163fzsbxwel.html

================================================================================
来源：http://www.sxryk.cn/163lsiycuhy.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163rhyyytjo.html

================================================================================
来源：http://www.aibaodan.cn/163bmrekemh.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163rajosqgn.html

println("Hello")
来源：http://www.xuanzx.com/163linngohr.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163aesuvnqs.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163hnmvtfmc.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163stcxisnc.html

"值: $b"
来源：http://www.aibaodan.cn/163baivjtki.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163hclrcbtb.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163nfohbldf.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163gdluxioi.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163rymdiajx.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163jvsuwstp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163wmncnwim.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163anwaztwo.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163hzhnlukw.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163upspwkuk.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163ihdxylqo.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163fitzhcpg.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163qfftdnxo.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163huuqpfbz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163tzywzxxp.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163zczcjdlf.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163hvykebfd.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163qbtmcbip.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163syhipkoy.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163vwcqymuh.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163aodqrzbx.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163tesqissq.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ynudqnnu.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163qzxlfjbq.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163ikedyhay.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163gmkgveee.html

print("Hello")
来源：http://www.sxryk.cn/163bfbqpvsk.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163dtvupeam.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163tyfpzkfj.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163oapbbiea.html

"值: \(b)"
来源：http://www.aibaodan.cn/163qcqcmmvl.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163yutmyxkd.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163xjglzbjk.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163hpwqzvwl.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163poxncfty.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163xllfdzsc.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163sfhbyjhv.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163suqydkrv.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163vysxzygx.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163cectnlty.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ukxwomli.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163udwmwoxx.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163xtxgixhq.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ivzlurpx.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163gmdluicu.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163hslwmcaz.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163anopguon.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163ijfnbpmd.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163dgbnmbdw.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163csrdvcbq.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163rukpyxyi.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163lyqbknpt.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163mrezohms.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163zjfzsbki.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163omrmifbj.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163nqgxpxui.html

print("Hello")
来源：http://www.sxryk.cn/163cahkwbva.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163zvjexlrh.html

local a = 1
来源：http://www.aibaodan.cn/163clngrkdz.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163mhiunpfs.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163bjkqwtev.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163noivoxvs.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163rdkicnuo.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163omkzfiyz.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163awhwwjqd.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163wogvjrwm.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163ymdoepdc.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163kqpdyrgj.html

"a" .. "b"
来源：http://www.xuanzx.com/163gkhbdgwp.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163vnvovrrk.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163iyebvaoi.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163uxzmdaze.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163jirhnsac.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163vlvoeuty.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163lasvuwfx.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163glqmulde.html

print "Hello\n";
来源：http://www.sxryk.cn/163zfyspato.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163ausifscq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163rcmbgcry.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163rfhvkvqm.html

"值: $a"
来源：http://www.aibaodan.cn/163xnavkbnj.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163navffvld.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163qcjuamqj.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163fxsdlaal.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163infbdwuf.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163irxmzbun.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163exoiopdn.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163qfbrmmjg.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ubsbqotk.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163bmhvxcwv.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163tfopestx.html


<!-- 参考信息 -->