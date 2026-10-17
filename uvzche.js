外链999!wailian999！

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163ycivgsnr.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163lgpkgwcb.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163pvnpccxn.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163rvjzebno.html

files=$(ls -1)
来源：http://www.xuanzx.com/163gteizrpv.html

[R38] 管道串联
来源：http://www.sxryk.cn/163izokfxre.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ilyvbege.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163ispaxxwx.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163uvwymxhf.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163ywvjbtan.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163yugpdpwk.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163xsnmgubw.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163bubpzerh.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163eybshfrz.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163uupmigub.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163yhzwwpha.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163lltuegnn.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163mstcgtga.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163lygrsqiz.html

[R45] 批量删除
来源：http://www.xuanzx.com/163yhamyhcw.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163mcwqdfby.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163pjnhqbsh.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163trkbhoen.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163vwcygrpe.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163ljhonhvb.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163fpvypslx.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163wieisjtj.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163upreidso.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163zthegvng.html

[R50] awk 求和
来源：http://www.sxryk.cn/163widhhxpx.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163sgbheqyu.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163eprsrelp.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163psziwjht.html

[R52] 统计行数
来源：http://www.xuanzx.com/163ulmhsbpb.html

wc -l a.txt
来源：http://www.aibaodan.cn/163ueouzhai.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163rstdaynj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163gcilkstt.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ludupzzw.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163fmdgbmbn.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163jzdskxzu.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163iamjemhi.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163sxixfhqn.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163bxrmspeh.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163mpjleucv.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163pqwsrdek.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163blexoomi.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163brawxuqv.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163bnkgvgpl.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163yevyatpy.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163qqotkjew.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163wfefuagz.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163usbpmxfk.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163nsdvcgwu.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163xykhvusg.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163idpxdwou.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163oxtvfwoq.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163kfypeeaf.html

[R64] 结束进程
来源：http://www.sxryk.cn/163snbxpath.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163izwqjaqb.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163gokxtfcd.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ahvuaupn.html

[R66] 定时任务
来源：http://www.sxryk.cn/163qdcdlrev.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163uhnafdhg.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163zcrlsogi.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163avgzilbi.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163fhuxsykz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163jwxmmnbl.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163zpobakrn.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ofcaoqjf.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163bqqprowq.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163wdvkwdbh.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163qytqcipb.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163mnfmacig.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163ifhazbwp.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163ylbzlyei.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163nkoirsam.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163abcqvjbv.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163lcsyewij.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163qkwitnoe.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163ckefolzz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ctudrgih.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163khgnhtoc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ocehyiwu.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163rriejvds.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163tniydrru.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163jfqorvks.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163mrqwwljh.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163sugsqzla.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163qfblqgyg.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ueqdryvy.html

time ./run.sh
来源：http://www.xuanzx.com/163zidobmtz.html

================================================================================
来源：http://www.aibaodan.cn/163tuaojhfi.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163bwnvncsb.html

================================================================================
来源：http://www.aibaodan.cn/163ghkrxith.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163fklezonr.html

#include <stdio.h>
来源：http://www.xuanzx.com/163artswtlo.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163pcwmlgqq.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163tumsmtuh.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163ttmtovkz.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163hliauvaf.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163hrgrione.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163rfhsvkir.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163masswtbt.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163nrdmokba.html

strlen(s)
来源：http://www.aibaodan.cn/163sftjorwg.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ixriszkn.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163aowbgdgo.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163dwkkjtva.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163tmfqjyht.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163gjguizav.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163wntpfgjb.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163xnnwnzav.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163sjmanlvu.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163tdrgsiza.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163tazsunyx.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163yihqzixr.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ksuspskn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163clztgkon.html

fclose(f);
来源：http://www.aibaodan.cn/163vzfparyb.html

[S12] C：写文件
来源：http://www.sxryk.cn/163yumvghdr.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163ngayfogv.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163aizbnvet.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163eijfhsnx.html

[S14] C：枚举
来源：http://www.xuanzx.com/163wyarcgny.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163bvctgvzq.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163kyojazgk.html

(double) a / b
来源：http://www.xuanzx.com/163qwretuzi.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163mgngvtfi.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163aocnuuxh.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163vczsskxd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163glrlexyg.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163yrarpsdg.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163nztfkqiw.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163iazjeely.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163qmewjyiu.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163hgrnoszq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ajphnnzp.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163uuhlboxa.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163vpdnqlrd.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163xrdwemrc.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163wcixcnnv.html

[S23] C：随机数
来源：http://www.xuanzx.com/163nfgzfdec.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163secteppk.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163clpbdjhk.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163etklumao.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163xsrofpfy.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163jlmxyefi.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163marloole.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163khgmzyju.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163euiidgih.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163poeweruz.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163wcwkrdce.html

static int counter = 0;
来源：http://www.xuanzx.com/163zdmjcbcg.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163nizuqwla.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ucvegwsu.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163pxshkjgd.html

#ifndef X_H
来源：http://www.sxryk.cn/163xsrbhdkg.html

#define X_H
来源：http://www.sxryk.cn/163curxtdqr.html

#endif
来源：http://www.xuanzx.com/163cszjnhfi.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163jofxjplm.html

#include <iostream>
来源：http://www.sxryk.cn/163luakcfsy.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163galhaxhd.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163uzquukur.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163vbbcpigm.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163qmbqlbgm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163dqlyexqu.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163cbaefasm.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163obyynupb.html

[S35] C++：map
来源：http://www.sxryk.cn/163mpmckwfd.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zqngyamb.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163easxofub.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163fhhhyeel.html

[S37] C++：set
来源：http://www.xuanzx.com/163xukqnepe.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163bxcerwdg.html

[S38] C++：排序
来源：http://www.sxryk.cn/163nvidkpqb.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163esshjalq.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ycuwbisf.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163wbhmbirm.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163bjbshmhf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163moxpfidq.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163nspdxaml.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163lrfujyzf.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ttkzlqzb.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163obvtfzrg.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163latebssi.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163zcngmyod.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163elppevqb.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163smlcglxp.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163ndrsvvti.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ozkincrx.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163jsugorqq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163woiuvneb.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163wsanadui.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163zsdyyuvo.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163vnahajoq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163fqccxwww.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163uweyrgiy.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163eejaqbiu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163egojcxjc.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163nwnnntvh.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163ipvidjnx.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163elsbshll.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163wphcdrxc.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163qdhkrxdx.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163eznjidlr.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163lueljsal.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163onjsfiew.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163jlzbeedo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163gyzeqmky.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163cqoxtkxd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163etlkkeeo.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163bihkybxk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163czhlwbsl.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163qaqyyeqp.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163pwpxiexs.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163wkvnocrt.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163leawzjiu.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163uhjpjfud.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163jmnhjqjd.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163mdidhemw.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163mqtvgfyd.html

================================================================================
来源：http://www.xuanzx.com/163cfztrhyg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163twgiyblk.html

================================================================================
来源：http://www.sxryk.cn/163epstvqmt.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163xxcyvbqo.html

println("Hello")
来源：http://www.xuanzx.com/163ppyukocf.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163uyadkmle.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163vgslkyka.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ttcwifef.html

"值: $b"
来源：http://www.aibaodan.cn/163zcdqwdxk.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163xthydqaf.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163wwawimmc.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163kwjjoulb.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163lesgeuwy.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163lbtlzxkl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163humgkrnw.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ihagcevn.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163etoynnqj.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163cabyjzpq.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163zkxihine.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163wmyuaphe.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163uuvrqllb.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163fjnlrdra.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163eliuxtlp.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163fezbcfhh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163lvmtxpmz.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163nrujocib.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163rewwlzvf.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163sbwkxnql.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163hiimrxzj.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163zzqussan.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163fqokpssy.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163vjbbpxnn.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163vifpqzdl.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163kfmpzrdj.html

print("Hello")
来源：http://www.sxryk.cn/163rtyvgkaj.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163wnrntymm.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163efmyogxb.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163otywerqk.html

"值: \(b)"
来源：http://www.xuanzx.com/163kquxhgjv.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163sgfyxiay.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ocqjpxkr.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163zvdghzsb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163eqvlyqtu.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163zyqlrsad.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163bdxizmjv.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163nmhrkeej.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163kbpsbeul.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163rjnqkicu.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163nblasdti.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163zmxusirs.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163vitveept.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163qgjdswmm.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163vglxvxpj.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163vpyasema.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163jtcmpemm.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163yespkwki.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163mtrmtdba.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163ptbsptmg.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163anccptwp.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163vntfwcnm.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163rpkgsacz.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163ycndfprx.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163pogqonel.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163uutjsrln.html

print("Hello")
来源：http://www.aibaodan.cn/163hpiqkubu.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163yhnwxshh.html

local a = 1
来源：http://www.aibaodan.cn/163ifwkmahp.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163xiuinfbc.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163dhbrmrri.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163oxeugnfy.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163qhnzxwne.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163cemblbbi.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163zpqksbzn.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163uksnikzx.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163jbknuoch.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ocpislcy.html

"a" .. "b"
来源：http://www.sxryk.cn/163avmtqdgy.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163jsdqjhhr.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163smzwuvxh.html


<!-- 参考信息 -->