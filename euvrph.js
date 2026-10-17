外链999!wailian999！

echo "${#s}"
来源：http://www.xuanzx.com/163vbtpsfue.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163mosgggsa.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163sychsauk.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163gajzvthu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163gxkibloe.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163fmnjumcj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163pdrogdke.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163tpjzbzas.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163yobsotxr.html

[R26] 命令替换
来源：http://www.sxryk.cn/163lyintrlx.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163mlnmfwek.html

[R27] 算术展开
来源：http://www.xuanzx.com/163rfxyuvuv.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163yofmhast.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163vipdakwi.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163blbtgivi.html

[R29] 定义函数
来源：http://www.sxryk.cn/163zwfgevld.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163qewisfvk.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163nbbzcweu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163zjzqtyqa.html

[R31] 局部变量
来源：http://www.sxryk.cn/163mffvvyeu.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163pvrumdex.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ejkgtzas.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163xxntblqk.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163sljjxvrw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163hiogacju.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163jotgrrnv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163aefzeqyr.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163fajskwms.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163glcsntae.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163twjcmogm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163mrsuepfg.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163fnlaecvo.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163xuturhes.html

[R38] 管道串联
来源：http://www.sxryk.cn/163siohhcov.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163pvfueiup.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163mmhdtcfu.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163rpwexhxq.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163gvbdddpu.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163ulgfdzxw.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163cmuzlykv.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163lfialtvq.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163jgbagicz.html

wc -l < a.txt
来源：http://www.xuanzx.com/163vyufhoxt.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163qlznpjuw.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163poptgkad.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163pqyzgcoy.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163izkmdvti.html

[R45] 批量删除
来源：http://www.sxryk.cn/163fgwumikp.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163hkutuixb.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163iqpmtshu.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163nswdhoqz.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163wkcrsfkc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163nhmfxhtd.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ediptvvv.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163kiaszoro.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163jxkjvhwp.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163pwazatpa.html

[R50] awk 求和
来源：http://www.xuanzx.com/163rbulodaz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163hgpmylmk.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163igmylagt.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163kdlodrub.html

[R52] 统计行数
来源：http://www.xuanzx.com/163hfyhzqgc.html

wc -l a.txt
来源：http://www.xuanzx.com/163prbqxafw.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163vlquqoao.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163zkkboukd.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163kyqvirxh.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163yyrjapay.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163cnyzzfxo.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163qvklyhur.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163cvpeqebf.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163anmnnbvc.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163fsqlqzye.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163trdprxvb.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ilijsjja.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163phmkuemi.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163gmliesdx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163rxufjfxb.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163cdyhzwby.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163yvzdfzwp.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ismqwdzy.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163skterrng.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163epoznwkb.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163vbpguaif.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163vncvuerr.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163jbjlivun.html

[R64] 结束进程
来源：http://www.xuanzx.com/163uyccwrpt.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163ddykwvkl.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163zlhphvuy.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163rrjnepuh.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163wkpzmalc.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163zkkdkbpy.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163wyysvohu.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ipjgqtsy.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163cduruueu.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163gihqfuvm.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163gyjovumt.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163wxbiluut.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163maebiubc.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ywixrgmi.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163pwjkhykp.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163yhdmcvtd.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163ttpqzasw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163vwxcfqfl.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ezyxoknv.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163nsxcsvbi.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163fvwxhphd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163xruyvcdl.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163wxkwtivu.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163wqyzmqxe.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163ysyftvei.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163sxpcpxjz.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ynyqrzvz.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163krbqaahr.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163znmbtirs.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163fllldqkk.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163idwuxrhs.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163earkmuja.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163rvzxvupf.html

time ./run.sh
来源：http://www.aibaodan.cn/163ueeeqxld.html

================================================================================
来源：http://www.sxryk.cn/163mycgguot.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163blfyuagu.html

================================================================================
来源：http://www.aibaodan.cn/163ytjfpxqu.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163huwxlixt.html

#include <stdio.h>
来源：http://www.sxryk.cn/163wymdreyp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163uvlublwa.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ahkfjual.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163gjogtald.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163wdkndkmm.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163vblpiceh.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163oylpamty.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ylogfezt.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163nswioeqy.html

strlen(s)
来源：http://www.xuanzx.com/163znkykybk.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163mpjrqquh.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163ehacbieh.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163avxqebjv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ngnffypg.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163cngcutlj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163qusautgm.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163wsdqnfjv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163lkghzgic.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ycoluvct.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163izlyuwva.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163uljeclip.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163nafmjfjt.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163tflsryay.html

fclose(f);
来源：http://www.aibaodan.cn/163swtcqpro.html

[S12] C：写文件
来源：http://www.sxryk.cn/163qoohiozw.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ylybggqr.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163geabnjeh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163cafbgmom.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163hfbhmrzl.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163lggdjfuk.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ciunvawv.html

(double) a / b
来源：http://www.aibaodan.cn/163yqbwxznu.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163vkqzmkgi.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163fswdltpr.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163hwswxpnl.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163mmydtbns.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163dkhtibvl.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163kobjxebx.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163nbxxzwkl.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163lgolvgzb.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ydwsnint.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163difsukuo.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163bnefbgin.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ewahwzsk.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163nusfcdzp.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163bmdndcxs.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163rlfnsufq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163wqpjuarb.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163yxdgqkir.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163medjsmyk.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163syzluhic.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163vmgrhdqt.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163mqdluhns.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163coukexnb.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163blrnxizr.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163fvwernpz.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163whohgvbb.html

static int counter = 0;
来源：http://www.sxryk.cn/163googjezn.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163urbmvrzu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163olngdehs.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163txundwlq.html

#ifndef X_H
来源：http://www.xuanzx.com/163pjkjwwbz.html

#define X_H
来源：http://www.aibaodan.cn/163qiacwpwz.html

#endif
来源：http://www.xuanzx.com/163wjbjfmmd.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163zuajpxno.html

#include <iostream>
来源：http://www.sxryk.cn/163fdibjapn.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163xiahickz.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163qncdbcds.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163vudfsucg.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ymzzephi.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163tlemotzx.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163atovefsa.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163wqdgxqvi.html

[S35] C++：map
来源：http://www.sxryk.cn/163cgkomxgb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163bxhhlxgx.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163qoelzuer.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163axnwiobm.html

[S37] C++：set
来源：http://www.aibaodan.cn/163fwnskshl.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163brrnkraf.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163qwihfwpf.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163crelcqmv.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163mltauoul.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163zshoplwv.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163tfikocmz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163enqivxhf.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163yvflpgia.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163djywcplb.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163nlglzpvy.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163ydremtbp.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163qwufhhnr.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163zgyfkgyg.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163tzuahiro.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163jfvfacpa.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163xqxebyiz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163jodysgon.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163ikozscro.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163uzclmvsz.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163sxsjztqo.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ztguzsoh.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163jmrmipsk.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163hnpcfxvb.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163gffqlckn.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163akzmnuvv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163kjsucvjp.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163qbusgwhu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163rimiigji.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163bisjsxxq.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163nfqnitmj.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163lvfzotsi.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163gvsxofny.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163xvdmmpuh.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163bbtzuxkm.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163faffqlva.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163fovukxhd.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163lgqhihwf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163vwzntlpv.html

[S56] C++：optional
来源：http://www.xuanzx.com/163xqfvanzp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163azvrvzci.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163arzjbshw.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ybialdyn.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ozbggajs.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163wqzbyumx.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163jeewyznr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ejpqpdxr.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163bdpnoueo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163xwwyotwu.html

================================================================================
来源：http://www.sxryk.cn/163oghzobwx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163rukdxlak.html

================================================================================
来源：http://www.aibaodan.cn/163rrgidgdq.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163bfcctxrz.html

println("Hello")
来源：http://www.xuanzx.com/163axzdbjrz.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163rqgksfxy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163yixumkfv.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163yocotzfx.html

"值: $b"
来源：http://www.sxryk.cn/163omcptmku.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163gntokela.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163aklcmsbz.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163jwaoxoim.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163natatswg.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163gcvaknbl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163mnnrzpfv.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163dwxxtxlo.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163vzrhewym.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163juqxpvjk.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163iqmxpkja.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163bywmgjck.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163uqnxhsxx.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163kslyqviu.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163herqvhsx.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163aqvrsbmc.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163lpcesamw.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163iswkrepe.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163lnnljbwr.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163cwbwesfp.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163tujnpowj.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163pxvnyasv.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ierjaina.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163dbqdploh.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163fvljjogr.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163lqfobvqh.html

print("Hello")
来源：http://www.xuanzx.com/163mbtoohcn.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163obtvqgjl.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163mqozbxcp.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163hbanqotw.html

"值: \(b)"
来源：http://www.sxryk.cn/163mbqbkixp.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163oneemmag.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163roioboyj.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163oymwrtgz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ewjpzmzl.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163yzvemrhs.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163gqhpdkhg.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163qyndllhf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163xpolxzdx.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ehktzxmy.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163quqcdita.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163fumebpei.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163hdfwhqay.html


<!-- 参考信息 -->