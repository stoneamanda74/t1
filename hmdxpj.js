外链999!wailian999！

files=$(ls -1)
来源：http://www.aibaodan.cn/163rvhgbajj.html

[R38] 管道串联
来源：http://www.sxryk.cn/163cusqfwyh.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163liybkqeb.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163brxosyjx.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163snbzkxzi.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163ukbvqwng.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163wtjijbof.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163qkmfsctl.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163zsgajffa.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163wmosmlnb.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163huikvfar.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163lezojfmg.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163isxownzt.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163rxengbww.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163fywzpdqi.html

[R45] 批量删除
来源：http://www.xuanzx.com/163qddwuqzj.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163lwfntbvt.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163dfudaapo.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163iofvynva.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163drfmpigp.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163zbehdswf.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ryrgnlys.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163uuweiszu.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163cnzkbtkx.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163bluvcxqm.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163gekzilgv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163gxpfjhye.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163xohcgwpb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163bycftrtp.html

[R52] 统计行数
来源：http://www.sxryk.cn/163mcwdvqhy.html

wc -l a.txt
来源：http://www.sxryk.cn/163ajwpkzjq.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163xgcagncj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163hrahlhql.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163tztqxrjr.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163jxecvuzk.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163dqmsuqum.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163hrqadnkp.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163vsftsxnj.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163errivmgf.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163crndxoco.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163tvmosjzv.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163tpbojpzf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163xcsupikx.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163zqdsnhic.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163pgxpuvgj.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163yupjaucd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163xivqmdcq.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163hjfnlibw.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163tgstfkyp.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163wbenncia.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163hqdmikpl.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163oxmluljt.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163selvjjiz.html

[R64] 结束进程
来源：http://www.xuanzx.com/163dozdmoau.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163mcndrrhy.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163yjbxgevu.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163yjewsxfw.html

[R66] 定时任务
来源：http://www.sxryk.cn/163rqeuomid.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163mmuiyxwk.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163bngaogij.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163oiwxauso.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163acpadnmb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163bwuyoxqk.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163mqkshvrx.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163uvspraxc.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163vxhaetig.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163qxevznyq.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163zxjsmyfq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163eyusiqqj.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163sdakctfe.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163wsvmbvbr.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163sopsgkcz.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163yaxpitdp.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163otozlvbv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163npprencb.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163mnvxbmxo.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163fqcnjtrm.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163baocxxjh.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163jmulmsql.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163oldqxmuh.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163lwlyaoiu.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163raccbsol.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163dhvbhnow.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163gjjrnexb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163jttqcqms.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163iyrxxdmp.html

time ./run.sh
来源：http://www.sxryk.cn/163btdaywxf.html

================================================================================
来源：http://www.xuanzx.com/163nzseuvsi.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163yauyxcfa.html

================================================================================
来源：http://www.xuanzx.com/163dtqrwsdf.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163pzfpeslh.html

#include <stdio.h>
来源：http://www.sxryk.cn/163frkgaqtv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ffacfvph.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163fdwjdfem.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163dnrfnvdu.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163kezdjjpg.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163afovkaau.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163gvufbdhl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163uqqkhvde.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163glmnzdql.html

strlen(s)
来源：http://www.xuanzx.com/163kyroxrxu.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163yexxxvsp.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163gflexjea.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163pkmnocnx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163drzirggr.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163hlzktgde.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163beqmzgye.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163zicwqppg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ompwepth.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ghnchmnc.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163gecpdreq.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163fwiltnyc.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163iyzogicp.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163omlmkhoq.html

fclose(f);
来源：http://www.aibaodan.cn/163uehmyatj.html

[S12] C：写文件
来源：http://www.xuanzx.com/163kugbhovu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163jwmbtfrs.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163idyfgbzp.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163izkjenah.html

[S14] C：枚举
来源：http://www.sxryk.cn/163kcvflhjk.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163yeeizdps.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ohyojwse.html

(double) a / b
来源：http://www.xuanzx.com/163cnpurwwp.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163rdmlcmsy.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163pfkyvpaw.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163phuiftod.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163odxtvyhz.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163utgrgajh.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163jqxsybks.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163jwyspppl.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ccfxgcru.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163mdshorqp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163cpkwmllk.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163dyepqdrr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163voapbisn.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163qadcsovx.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163vttuyejm.html

[S23] C：随机数
来源：http://www.sxryk.cn/163vfdxtzvp.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163gjadtiee.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163rhwhegpq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163uiwbqrcy.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163cyaumeko.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163bzihngfd.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163dllkfkcs.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163qzkielxx.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163fpqjkdug.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163gnhylqdv.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163stxjaevl.html

static int counter = 0;
来源：http://www.xuanzx.com/163cgeeckjz.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ogefmnif.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ktkiihtt.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ygculhix.html

#ifndef X_H
来源：http://www.xuanzx.com/163eqkxqgzp.html

#define X_H
来源：http://www.sxryk.cn/163oyjmnnwx.html

#endif
来源：http://www.xuanzx.com/163cxpmhkyd.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163dxljtbpl.html

#include <iostream>
来源：http://www.aibaodan.cn/163sgnnhriq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163gbhblagw.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163qxrhnbvz.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163oonuuusx.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163jeheicqd.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163xxolxyhg.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163lmdgajps.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163twtudjtg.html

[S35] C++：map
来源：http://www.xuanzx.com/163nyhpidjj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163auerpcjl.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163kaxcgrrn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163pmannmpu.html

[S37] C++：set
来源：http://www.sxryk.cn/163ubxigmdj.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163wgsdmjxl.html

[S38] C++：排序
来源：http://www.sxryk.cn/163xqecvoha.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163wkdpjptn.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163qrahusgi.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163uphxccsl.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163vihygrym.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163lqgfsbog.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163xkhnbxne.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163jutheluv.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163znmmjeep.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163ybwwckuf.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163alujzwgx.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163gpfnhwxl.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163aaaubmvq.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163azawxquk.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163hjsursrn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163fblhuive.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163zsifewqn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163vfqnnzyf.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163phuuaelj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163vypqszqz.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163whaqhape.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163fbtvxezn.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163nrbgrilb.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163qovyqhne.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163nqibfvzm.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163vrpbbxjf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163ycwovlll.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163hfqssrpk.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163pcjomssl.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163zgerfixz.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163aqmhihsz.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163wpvbhvci.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163vztijfyj.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163mksyshuq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163juvcubcy.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163sovhvkem.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163fezungrg.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163vpgegtaq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163icqjvgnc.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ipjutpfd.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ryutdxew.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163hiuzswov.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163lmbqwmrn.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163hxcjrqas.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163lcxexpyr.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163kodlbpcv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163kjxbfyms.html

================================================================================
来源：http://www.aibaodan.cn/163htpeahsg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163kbzdlzmu.html

================================================================================
来源：http://www.xuanzx.com/163whyyialw.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163wnnzsfkk.html

println("Hello")
来源：http://www.aibaodan.cn/163krvjcqwj.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ujoztkul.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163hcnepdit.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163kheirofb.html

"值: $b"
来源：http://www.aibaodan.cn/163dbxyfblc.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163fcwkqnpo.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163wlmxirlx.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163zydjchld.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163yvfpugpj.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163bukrqwgq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163notrffjn.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163asdxulcm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163pgdyktdg.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163vgopnstl.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163zhoimvma.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163pkzsurbm.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163nyzxapbx.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163peddpola.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163bbsfashz.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163gvmfpiad.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163nseolkcz.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163coebsolc.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163csequknp.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ebqhyoju.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163efpicxur.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163qmogadru.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163nwxlfwlj.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163yompznen.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163ckqxztqj.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163unaqyuvv.html

print("Hello")
来源：http://www.xuanzx.com/163cnqafyfe.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163ytjgjsnw.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163nnzgtwzz.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ugtlilxs.html

"值: \(b)"
来源：http://www.aibaodan.cn/163bsulmnpd.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163lnwyecwt.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163mhkinghc.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163emyvzrfq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163lbtnxazl.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163dgmrxbkk.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163meejlyyc.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163hgzeagrf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163lrkwodtv.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163pyzngjhx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163ejnydolr.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ybkgulqw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163daxoztay.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163uxaappbv.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163obhrmvgg.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163ywnbqtuz.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163tbehqclc.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163elpthzfq.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163znjripfj.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163hkpbwike.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163oaxjubdd.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163hgqlvhfi.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163gxiavjwh.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163oawlkrtf.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163dzeuzoge.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163iqfpibpi.html

print("Hello")
来源：http://www.sxryk.cn/163ddcqiaqa.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163kmnoltnt.html

local a = 1
来源：http://www.sxryk.cn/163sxnkwmxo.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163acsasjhm.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163vgpunsfk.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163emimqluf.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ejuwcmxw.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163hnumtxmk.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163zevvsdgi.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163jidcauhk.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163pezjemao.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163hlwfamnj.html

"a" .. "b"
来源：http://www.xuanzx.com/163usvxpoou.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163xuzgcaml.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163dcizeqpr.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163dwzolubf.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163rwzdcrer.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163sficrldi.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163sjisyryo.html


<!-- 参考信息 -->