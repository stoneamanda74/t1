外链999!wailian999！

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163pfjkhyen.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163rmvcawgh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163itdjmrus.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163ffjendmv.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163jkyuobtp.html

[R38] 管道串联
来源：http://www.xuanzx.com/163yvsongpa.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163smhysxmy.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163flvsdpyd.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163bdzmibyb.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163wmsaslxm.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163gldmdeau.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163rhitsngs.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163zetyzkzu.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163vpvcrfrm.html

wc -l < a.txt
来源：http://www.sxryk.cn/163xceqlvhy.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163vtqjluve.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163nhtggkmz.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163rpfazksn.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163bevalyzg.html

[R45] 批量删除
来源：http://www.sxryk.cn/163ndgelnbb.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163ahxpsqso.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163lugadwzk.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163cgbrqljh.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163bcgticvq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163jkoqscmw.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163yvpqxgmm.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163inosaqgn.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163cibfphjj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163qzfvizhv.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163zvvwsvoe.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163mjzkmbtw.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163evskzztj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163sfvpdldo.html

[R52] 统计行数
来源：http://www.xuanzx.com/163ovgpybxw.html

wc -l a.txt
来源：http://www.aibaodan.cn/163lurtaonp.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163xsdgabso.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163zeyhjcev.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163gquksnvd.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163uswncpue.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163doutescj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163atnzzqjz.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163mxxvgpiz.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163izjixzlv.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163jdvjmbhw.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163iesejauk.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163weqihjow.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163sedicpid.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163tzbhrrfy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163ukpdgmcf.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163keypbsqd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163cvhgvfrc.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163csnhguoo.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163gnsepinj.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163hgdrdrpr.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163ehcqvhxu.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163cbszrycg.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163vxcvwhle.html

[R64] 结束进程
来源：http://www.xuanzx.com/163elklcbua.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163qnxzaekv.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163nmfifxeh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163arclucwn.html

[R66] 定时任务
来源：http://www.xuanzx.com/163dhjsyabs.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163vvvpvdqp.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163dxjuajwr.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163qwbtjlqx.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163vepwgqvs.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163hlktizef.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163gyoufeyr.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163gvrjrrog.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163rfcisjiy.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163ebnhgqay.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163sjxvseci.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163vswfidfc.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163sqpmhdpz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163udhhxxqq.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163kytmipqs.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163kjrxsynn.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163xpseymui.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163kqhjidof.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163nhidozwp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163dwgtzcpg.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163bqxplwat.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163hjypwhan.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163hpcmbowf.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163gipsneqp.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163xqrdfitm.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163ukccccvx.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163ygazqnlb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163vqmoxudj.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163gwrxvtdp.html

time ./run.sh
来源：http://www.aibaodan.cn/163luhnvlcz.html

================================================================================
来源：http://www.xuanzx.com/163krgspacc.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163emgxrjba.html

================================================================================
来源：http://www.sxryk.cn/163oumkpoqn.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163axqucpnm.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163kwrvxflx.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163agyfrsos.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163krfansjw.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163cwsrxivv.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163convgukc.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163wnptasws.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163qbdftvhw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163bmthcsga.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163ysdcigtm.html

strlen(s)
来源：http://www.xuanzx.com/163drptenaz.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163fhjkmhnv.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163mwujckke.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163wpiuheiw.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163fhevsjib.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163octmoqlc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163ozabqylv.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163lvgpvlql.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163kjnosnaz.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163qfvoykzo.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163fqrentzf.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163flmuleqs.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163aocwancj.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163polrutez.html

fclose(f);
来源：http://www.aibaodan.cn/163ymqmwdoa.html

[S12] C：写文件
来源：http://www.sxryk.cn/163fcxxfcuw.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ldfgrcxf.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163jgxvmowx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163vrhtjymw.html

[S14] C：枚举
来源：http://www.xuanzx.com/163amzaewkn.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ygimfmwk.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163pmsrwklp.html

(double) a / b
来源：http://www.aibaodan.cn/163uztnadqt.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163laakwksv.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163yeqvdwot.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163rgobjvtl.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163thpaopmd.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163wgciyrxl.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163sckblsit.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163wiyozwuo.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163izksaljy.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ynbwqgbj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163tnsrwmsu.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163umowtfom.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163bjteadtd.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163hueqnbei.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163gblzawat.html

[S23] C：随机数
来源：http://www.xuanzx.com/163yxuudrpk.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163ladnerug.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163gfxtunci.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163jfcxnceo.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163yzwhbiki.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163gplyrona.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163qpaiqubm.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163qwjjaatu.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163fshkmoyv.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163qluwtqwh.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163frcrhjub.html

static int counter = 0;
来源：http://www.sxryk.cn/163qnsdwqrn.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163dprkvhnz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163zbhbxewl.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163dsbotspa.html

#ifndef X_H
来源：http://www.aibaodan.cn/163zrzjinfc.html

#define X_H
来源：http://www.aibaodan.cn/163qchtcczl.html

#endif
来源：http://www.sxryk.cn/163kqagqtmk.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163wntxdcmb.html

#include <iostream>
来源：http://www.sxryk.cn/163tnovhfdk.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163dicakaxf.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163dpckomwz.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163eiptsqaq.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163wlzewnvs.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163hsfpcotd.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163lldiquot.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163dqyafxbe.html

[S35] C++：map
来源：http://www.sxryk.cn/163alhsldfw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163jlvezkkg.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163gbnncquh.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163beziepjm.html

[S37] C++：set
来源：http://www.aibaodan.cn/163qzcicxis.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163mldoffel.html

[S38] C++：排序
来源：http://www.sxryk.cn/163zcwquaek.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163gzekszha.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163wdhiseai.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163nvsvoapc.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163wimgwtbz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163cuqyadmo.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163qhgzwjwe.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163rewuukpx.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163nyukfirc.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163gsfmdcri.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163ieaoyikw.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163zerzulvh.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163ghmehezi.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163bqowkyib.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163hjtpngmw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163pobshory.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163eknwygmd.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163kbcelxhr.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163itwkihcu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163tplvypsm.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ygbfwdek.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163qfgvykql.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163adwygzey.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163bwrfqgrk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163jcrbzcgf.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163rxeyghai.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163peipdtsn.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ygsoxenz.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163tyzhwthp.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163xzoiesxc.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163itbgluhg.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ayuomryz.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163cceootik.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163moicxnlw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163gclebpzn.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163qomuqrjs.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163egymspfi.html

[S56] C++：optional
来源：http://www.sxryk.cn/163yfrelssn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163robodkus.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163tgdcjraf.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163mcthmzhw.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163mpvvmvaw.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163flxfmpxh.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163rearuolh.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163fcxnmkxp.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163gzecjaod.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163yuckptqn.html

================================================================================
来源：http://www.aibaodan.cn/163vjpsyfct.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163physydbq.html

================================================================================
来源：http://www.sxryk.cn/163vmfnekdl.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163fwgquulp.html

println("Hello")
来源：http://www.aibaodan.cn/163ikvfyvnn.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ewxubplr.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163mgjasnjt.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163nqnprlzy.html

"值: $b"
来源：http://www.sxryk.cn/163amngngjm.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163duspkjzw.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163aabjuxvi.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163bjkkxtgg.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163gcufujvh.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163rodmxarn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ovjhrlab.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163xgkwrvxc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163vnkknwcy.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163yquibzuc.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ioqmvuwd.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163fyypqmqx.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163vzulkfol.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163zuiqrwwb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163peabgdwl.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163uwymzguf.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163wqzcgkyb.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163zdjwjvjs.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163sixcbhdh.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163skodlbbr.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163sveacqdm.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163dlkkxhjh.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163homxsbdt.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163sthatgrz.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163aecenbta.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163mdviqfdy.html

print("Hello")
来源：http://www.sxryk.cn/163vkyzlorp.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163nfhdmrte.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163utqqkeul.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163quizthhp.html

"值: \(b)"
来源：http://www.sxryk.cn/163zjhzpwcv.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163sbkzngoi.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163tbybyrxy.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163stloxhge.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163dgkpgike.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163wtxfkneh.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163lntnytsw.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163xrlpzffj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163pdfmkhod.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163bhjquwvm.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163scfnrhbt.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163gmzkdyrj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163tzdenjol.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163oyseratr.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163wzwirzic.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163hyjmlzdw.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163pffikicl.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ctgmrbzq.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163cqfqmtpe.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163rgkprfwj.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163zqcibuld.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163wystctqy.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163umcteebf.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163clzoesam.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163wdxmgwnf.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ryfpgsvw.html

print("Hello")
来源：http://www.xuanzx.com/163kbvmurxw.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163pplmsuvi.html

local a = 1
来源：http://www.aibaodan.cn/163pbhcoabc.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163phyibkur.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163yrjkwicb.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163cdhiyaic.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163xvtjtnvj.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163fxphminf.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163emqzoxhu.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163eriwchmc.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163iagdvkwp.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ncqdynsp.html

"a" .. "b"
来源：http://www.sxryk.cn/163uhzufabt.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163mkzoarqh.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163bqbxnlfr.html


<!-- 参考信息 -->