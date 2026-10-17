外链999!wailian999！

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163qdbytuxv.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163fgehagls.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163zlunyhqe.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163fyucgpjm.html

files=$(ls -1)
来源：http://www.sxryk.cn/163qeqzinvw.html

[R38] 管道串联
来源：http://www.sxryk.cn/163mnqpodlu.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163yswuzode.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163ismumzjb.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ulvmvggc.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163eqcbgapw.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163yqegiyil.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163uohwcqbi.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163nfvwcczx.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163cmgkalzh.html

wc -l < a.txt
来源：http://www.xuanzx.com/163rtkniotv.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163hhpnoyhs.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163yvrzcent.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163pffjvtsw.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163zvwtqfco.html

[R45] 批量删除
来源：http://www.xuanzx.com/163vocpmsfq.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163baaojzui.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163wfpisaec.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163megdttkq.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163qyvqqkbz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163etgtkluc.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163kcfubkyw.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163hziboddt.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163gfaouiyr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163pacjxkys.html

[R50] awk 求和
来源：http://www.sxryk.cn/163rajkepoz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163rwycsgwr.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163yqteoxgn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163zadxfhsp.html

[R52] 统计行数
来源：http://www.sxryk.cn/163qjzjupqm.html

wc -l a.txt
来源：http://www.aibaodan.cn/163tjqpzsvk.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163paovxkkw.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163kiprnvsh.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163nlkuwgts.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163sxxcgjkf.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163bdwgikwm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163vygdbsjp.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163ugtauvoe.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163malknzwb.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163zlguqjct.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163tcrnedxp.html

[R58] 下载文件
来源：http://www.sxryk.cn/163dkomqhuy.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163hpnzoihh.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163nhwcfeth.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163bulrjprg.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163yebdwmni.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163ttwhgxgv.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163muykyzzt.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163cudhiiqc.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163adpvycyk.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163rfbwmgjp.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163vkklvhxl.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163yqkjucet.html

[R64] 结束进程
来源：http://www.sxryk.cn/163hcvkfxah.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163ahdwtnpl.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163tarmmsjv.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163wshsqatq.html

[R66] 定时任务
来源：http://www.xuanzx.com/163qhljzdyg.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163xlnampyt.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ccyczufk.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163jlasqfif.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163nscqxksx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163zkhsipxa.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163oslicavz.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163xppcqjkf.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163xwpkturi.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163smdvrkjt.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163fiyocxsu.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ghtwgtii.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163flwwwrpy.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163bzmlfvhy.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163arhiefqw.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163omebarjn.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163wkrnsbax.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163rkyxicyq.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163puqjojxn.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163afrogtnh.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163hwrgrqgw.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163yrhmbdzr.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163zxrkvsbk.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163fajyeaqx.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163uxsukaiw.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163jqrcevwr.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163godhywnc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163dpuuprsc.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163vinsvkrm.html

time ./run.sh
来源：http://www.sxryk.cn/163efxegkxp.html

================================================================================
来源：http://www.aibaodan.cn/163stagnwlj.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163yjitqplf.html

================================================================================
来源：http://www.xuanzx.com/163ljbukzbp.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163xlexrjeo.html

#include <stdio.h>
来源：http://www.sxryk.cn/163fbztevle.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163kbrycxvc.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ujywrhkp.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163ulghumou.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163snavoawm.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163nbkwinge.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163qfmsfwbk.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163bebtkshq.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163qmjtjbdt.html

strlen(s)
来源：http://www.sxryk.cn/163dnveawce.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163wdtuydbm.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163bsdjzhud.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163stpmwsgx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163rmdjhcsd.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163hzgulvww.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163mimfqqmp.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163rnugoiom.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163muselxel.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163wmgqhwif.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163zbvrkblp.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ikdnlvuf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163qigrajbb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163mxukejgw.html

fclose(f);
来源：http://www.xuanzx.com/163hzqggnqg.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163etjdwbxd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163gqyxlkkp.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ufefpivm.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163mfzkvoao.html

[S14] C：枚举
来源：http://www.xuanzx.com/163moumxoib.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163vrurbwal.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163msmoyojp.html

(double) a / b
来源：http://www.sxryk.cn/163gzjmpdfs.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163wgaorquh.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163kbxeyprd.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163fgjiahyu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163dfpnfput.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163uubzavrm.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163sauuksep.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163dhhykqft.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163uymimgpc.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163xazzpqar.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163dycpwthp.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163eingpbcu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163gulcebld.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163nazabanw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163yxwmiwjr.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163omfuxybh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163yjfnpyyr.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163xamapfoz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163gbrsihju.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163oshivalu.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163tieewsaj.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163puqvuhuv.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163xgmctnxj.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163fuaewuyi.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163gkondfwg.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163omyoxkgy.html

static int counter = 0;
来源：http://www.xuanzx.com/163vmpyhatf.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163zdlhcpww.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163khaaoyrg.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ohckbrjt.html

#ifndef X_H
来源：http://www.xuanzx.com/163hpsupbfj.html

#define X_H
来源：http://www.sxryk.cn/163podywcuz.html

#endif
来源：http://www.sxryk.cn/163dpazfeoy.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163egyexizu.html

#include <iostream>
来源：http://www.sxryk.cn/163qowssvsw.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163fxpwihye.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ugrydthm.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163dywhkynu.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163jnnuzxym.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163idkahctq.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163tifeolmc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163eodmofhw.html

[S35] C++：map
来源：http://www.sxryk.cn/163lzcstvdd.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163jssxdffj.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163rbxjgmzj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163fohzzsgb.html

[S37] C++：set
来源：http://www.aibaodan.cn/163fnkvtjxf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163eiocwxop.html

[S38] C++：排序
来源：http://www.sxryk.cn/163tgmnuxvz.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163ksbjhnhx.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163twowghzp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163etckytdi.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163mecemoqd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163cflsmnch.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163mpgdbwps.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163fymmdkeh.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163neegvftt.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163myetuwxn.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ygygztwr.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163hwbhyumj.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163knzuhati.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163fwoexkjz.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163yridqunn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163fbbpychj.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163xcvcwave.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163kswjvxbb.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163vhfjnohz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163slfdbtki.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163aafihfff.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163ntcyixee.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163jsrcrhlt.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163hluyixdo.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163wwoxhkoi.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163wlyfiiiq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ufwnbvzw.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163kafdorvx.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163lbgpawiy.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163rjifhrme.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163apwrnrcg.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163dlqwpqtz.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163oefwzahv.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163zcaewewr.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163tyemecuk.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163wapzgwnr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163yymuudvj.html

[S56] C++：optional
来源：http://www.sxryk.cn/163kvclwrgu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163pddwjffn.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163sqhxpfwr.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163pkiknkyl.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163vhnwiksf.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163qjltghdh.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163vcebnyxv.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163qsdgwfdw.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163fjwaxfiq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163owudoubi.html

================================================================================
来源：http://www.sxryk.cn/163xeyawbgb.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ocxvbcjl.html

================================================================================
来源：http://www.xuanzx.com/163lrrldtvc.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163xrkzucwq.html

println("Hello")
来源：http://www.aibaodan.cn/163fqjawbnl.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ryexscrk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163wakbmlbe.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ihhyckxo.html

"值: $b"
来源：http://www.sxryk.cn/163roampcwb.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163hnflygkh.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ekodnicx.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163osgwsqpg.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163jbdgpfcn.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163dslfdlge.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163mscbtoau.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163anpgkqub.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163pzuunyef.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163hlmabblk.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163mwseqgjd.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ltzwnqef.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163utnzjonf.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163wsqakyec.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163ggbwhahg.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163wskcijxm.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163emyqjdrp.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163dxocwnyc.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163vpoqwhnk.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163ghykwhzk.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163afbfbpfi.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ijnluyxr.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ajxxatzj.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163mxdzoxpl.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163nhzswnrf.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163zogskuxe.html

print("Hello")
来源：http://www.xuanzx.com/163djhzbsce.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163rwzymlyg.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163jwqrigje.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163tmnzyhtm.html

"值: \(b)"
来源：http://www.aibaodan.cn/163ghikbssl.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163shonucwo.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ziyxjcsg.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163syrbrwav.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163eacwmnye.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163uossgycp.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163joevhllg.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163vwilfsyp.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163bejqgpkf.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163oepbeirh.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163xaxcgpqz.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163oeuwwtlr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163cmisvqhe.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163vljruwyp.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163vzfvqdku.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163vamoitel.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163cjfuvung.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163zyfsooyw.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163keiougkj.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163bthitfai.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163zzlzmirr.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163iaxhbqwj.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163stxgscys.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163aivhqpeh.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163kubtvmdn.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163hxjpbrvx.html

print("Hello")
来源：http://www.aibaodan.cn/163dukzzdbj.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163hxwjpazw.html

local a = 1
来源：http://www.xuanzx.com/163gmhqxrgq.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163axhixtlx.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163lijoncja.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163xyfaqzts.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163mcegcrbo.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163wpgscpwp.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163iqxuhtek.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163jzvogtjh.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163twyhdluy.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163azkmkbzs.html

"a" .. "b"
来源：http://www.xuanzx.com/163nfjzahxy.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163zyvmnslm.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163ajwgajuk.html


<!-- 参考信息 -->