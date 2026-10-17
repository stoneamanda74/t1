外链999!wailian999！

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163psxvgsyz.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163hmpzaddk.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163sgxskrav.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163mfkcpunq.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163cprlbgpp.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163iqjpiipb.html

wc -l < a.txt
来源：http://www.xuanzx.com/163cufaapic.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ujytnglr.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163hqgwgraz.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163cmgivrhx.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163yrpikthy.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163jusxypnr.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163tmtcmasa.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163jrdczqzf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163czzivcyx.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163sdywpszo.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163tnumtqgm.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163amztzcrt.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163alvluwyo.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163cftpxigc.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ouaskgkz.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163pibmyods.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163canlxubz.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163xtncqqjg.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163iqaloyyu.html

[R52] 统计行数
来源：http://www.sxryk.cn/163fxrhumrc.html

wc -l a.txt
来源：http://www.xuanzx.com/163zdbjmbcm.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ldujgyqa.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163asthezgz.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ebrudlbn.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163hsjnalem.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163auuofnae.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163ixvpsnen.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163hmcehhtu.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163ejwfcigd.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163vtviwbfq.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163zzrousan.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163bqfadrdn.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163mrmzgtcu.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163pfscvsrr.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ypysynjg.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163knhxnlvl.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163vphmmvdi.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163auyzgkfc.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163szzxcvue.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163szgdzvvz.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163oozyrtna.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163cciytnkn.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163dqnipnig.html

[R64] 结束进程
来源：http://www.sxryk.cn/163pfujjrbk.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163zqwzuels.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163veateiba.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163juhfjdhx.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163julyhlus.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163enwofvuy.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163nwxjlrxa.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163vkpgiuwl.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ageyxtmb.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163tvsoaqvj.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163wgijgypv.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163sekarvif.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163brikxxis.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163synfrubn.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163iibaiaag.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163limkghuk.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163dkektycc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163yzphnpms.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163dugbprcz.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163vbytyzjz.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163eotoeblu.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ykflnaew.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163jeadicqn.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163wutmsgyr.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ukwgkmak.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163mnbxlbgz.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163baalpkep.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163wqjwvofo.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163tgnzgqba.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163nnafsnxc.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163xquzhzfc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163lrernhyi.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163bpqtzmky.html

time ./run.sh
来源：http://www.aibaodan.cn/163qnbitvdf.html

================================================================================
来源：http://www.aibaodan.cn/163yjukyare.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163dtbopito.html

================================================================================
来源：http://www.sxryk.cn/163zgdjkfof.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163rhzwkgfn.html

#include <stdio.h>
来源：http://www.sxryk.cn/163vfsuvkld.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163eabvxbhk.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163wcekjdan.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163xgikighg.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163lqklzkjw.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163pipduyus.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163zozzpmyc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163clcuatis.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163tvdeqbdy.html

strlen(s)
来源：http://www.aibaodan.cn/163uwkveblz.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163sewrnhpw.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163pxkbfxzc.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163mkjozuhk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163uuqkpejm.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ylunaeop.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163qgbqjmrg.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163gzpvgqcr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163shqbhdct.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163jsxirtoi.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163gpxcfueb.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163axcjipbt.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163trmosisu.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163kbzqbuxh.html

fclose(f);
来源：http://www.sxryk.cn/163xxhguiim.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163qwwgfhef.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163vckoqvly.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163raaqcrpt.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163sojgnlfg.html

[S14] C：枚举
来源：http://www.xuanzx.com/163qmuwgslo.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163qobecaxc.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163imxylfgg.html

(double) a / b
来源：http://www.sxryk.cn/163vlbjjbcu.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163cnmbknfr.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163rwqdimty.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163baorcocj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163rdennmif.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163geszsxdl.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163nrwwsxhn.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163qnnccbbv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163fqiobakm.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163fvznitex.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wuiuxloy.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163slmczray.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163mbyyhzvn.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163cfdpxmux.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163nbrjifsu.html

[S23] C：随机数
来源：http://www.sxryk.cn/163qjrimlut.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163odtpptkp.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ubzfbrug.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163loikmujg.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ulgjulqj.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163fiuplndw.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163iixyodoc.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163rblokihh.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163tfagactg.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163uupynvho.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163kpstschw.html

static int counter = 0;
来源：http://www.aibaodan.cn/163eqiznify.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163odxftopx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163wnbputum.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163muxpvtof.html

#ifndef X_H
来源：http://www.aibaodan.cn/163lkbtgglj.html

#define X_H
来源：http://www.xuanzx.com/163egcmecuh.html

#endif
来源：http://www.sxryk.cn/163djcpupab.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163rfubwurb.html

#include <iostream>
来源：http://www.sxryk.cn/163lndrxrjx.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163tvdzbmhm.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ndspgrfd.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163aonpffbd.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163oxiipbrj.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163qvfnceze.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163nzedbjhq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163meowftgq.html

[S35] C++：map
来源：http://www.aibaodan.cn/163pheahkkx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163oxleudrk.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163mzkrrapf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ajujfjaj.html

[S37] C++：set
来源：http://www.sxryk.cn/163nmekkfzf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163mvqzozut.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163saifpajm.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163pwxlyeqi.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163xycghexh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163uiqncthl.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163surpieyv.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163dwvricxi.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163arkfkegl.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163caoxakgp.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163cuyvzkcr.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163orzyhxbu.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163vvcbgieg.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163mlwynagj.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163ebvnaiag.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163cqumaoro.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163tckfbxls.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163ausdjfgj.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163nmyumnja.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163iuytdzcj.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163wjvusaxd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ljuabqmj.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163wvocvqys.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163swkvjvub.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163lozdvykh.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163gvffnznq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163kihtazjv.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163pbwebnij.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163azpotqxw.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163guxrdkbe.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163ghcnqymt.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163nghhbdyp.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163hgzbajgp.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163esxvqtxt.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163rgvsxslp.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163cvytabtf.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163jpywncrp.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163fwxpbbin.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163rzgiqlvp.html

[S56] C++：optional
来源：http://www.sxryk.cn/163qryhzlwv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ueufldnf.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163muqidqgw.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ewhackzn.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163fygnmrvd.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163znylhnzu.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ewoiuslz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163qjjgyldn.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163friwhiph.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163slydlczr.html

================================================================================
来源：http://www.aibaodan.cn/163vbktkfla.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ixgjgcnc.html

================================================================================
来源：http://www.xuanzx.com/163wzrwwzqr.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163kqrxvljp.html

println("Hello")
来源：http://www.xuanzx.com/163qlvmmmkh.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163tjvcysck.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163pauuelev.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163oaxocpno.html

"值: $b"
来源：http://www.aibaodan.cn/163uvrplrsi.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163jhihevyn.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163exzbowqu.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163dstybqgj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163qucwuqls.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163bjexctuf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163gletqisp.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163hnngvxqx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163biwcswby.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163chkuqgek.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163evblmlgb.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163dqvhvkbw.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163ngcqrzyy.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163bhcdjwxt.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163bkuppxdm.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163hgymexku.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163toozxbik.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163fomvdofm.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163bgdllohe.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163vdfkpawz.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163fecfvdfu.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163zinvopws.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163gmduowdu.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163uhdmiupb.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163drbybagf.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163bpihgxwy.html

print("Hello")
来源：http://www.xuanzx.com/163msxoimsd.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163iclbvzcx.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163bbuolyta.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163wilyidzq.html

"值: \(b)"
来源：http://www.xuanzx.com/163oarrbqgz.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163dmcbcwsq.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163yfhhcbig.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163pkkvteic.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163npztpsex.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163nxemnrjw.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163xjpuknri.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163gskxejhu.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163duwcfvzi.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163xmnvsstz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163sqnedwpc.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163euyhkufw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163cyjoelkn.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163xymdtwgv.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163denlchza.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163efvrkhoy.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163gokkxjgx.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163vyrrdqix.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163wnfiaatp.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163vcjfntmb.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163sreryiai.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163nmlqtdbb.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163nbnffbqe.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163psdctbwt.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163vpupbgec.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163mabjdhtx.html

print("Hello")
来源：http://www.aibaodan.cn/163vejtzurf.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163btoxhitf.html

local a = 1
来源：http://www.aibaodan.cn/163hwgbdzif.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163hlppypme.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163azajwtph.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163chuhhorl.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163bixgdgdo.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163lnnqefcd.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163lvykzbnj.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163qyujpaxp.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163pahmzhju.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163tqxvbhxj.html

"a" .. "b"
来源：http://www.xuanzx.com/163udmuvsfg.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163gpzhxjdp.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163zfcghbgm.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163sbwfjfiu.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163moqkwmac.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163mdyzuhpw.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163ouresaso.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163divvcvrw.html

print "Hello\n";
来源：http://www.aibaodan.cn/163fomvpnnc.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163vgznwkeu.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163vapzjvka.html


<!-- 参考信息 -->