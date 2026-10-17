外链999!wailian999！

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163skpahijx.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163nksctcrq.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163yhrxcwau.html

[R29] 定义函数
来源：http://www.sxryk.cn/163zlowxxwl.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163imbhydyr.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163fuiqcafy.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ssoxzmeo.html

[R31] 局部变量
来源：http://www.sxryk.cn/163mvlyykmm.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163efdnpjch.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163therwcky.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163aauiegea.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163alfbqvxq.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163gomtlsrx.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163wnvrbjdf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163pxazzdsn.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163oztlnvso.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163pgvmohxp.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163fwbuvyrl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163dhdbsvwb.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163nveapyfv.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163arrjcnfu.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ftiarmun.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163apfhhuiw.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163bwjivyed.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ogjnynul.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163kdcgszkb.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163bdxnmpmt.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163jpnmsvlv.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163gxciowwj.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163tyweitbz.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ielmigcq.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163dnbouxpj.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163mkhkbgmc.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ekgxzbys.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163nlkxdgrm.html

[R45] 批量删除
来源：http://www.xuanzx.com/163lsrzzqaa.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163prcmmrcg.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163laurzwae.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163akxhgakm.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163sviizzsn.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163gnfdoalu.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ozpuecra.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163zyfmcvhl.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163fcdomzwp.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163lygdtckd.html

[R50] awk 求和
来源：http://www.xuanzx.com/163kbbobiaj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163wheltnsp.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163pxqqzpdq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163jteiixdc.html

[R52] 统计行数
来源：http://www.sxryk.cn/163psaeznbi.html

wc -l a.txt
来源：http://www.xuanzx.com/163xaaawdrq.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163temfqtif.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163zkvzexmr.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163wmogosjo.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163yuxrsluh.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163lpatmtkz.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163prxoyhnt.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163witqwyrj.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163emybginp.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163gfuzszaz.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163jqcghzrh.html

[R58] 下载文件
来源：http://www.xuanzx.com/163lhbrdctr.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163umlwseal.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163moiqbhhc.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163obbpyaza.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163etpvgjdm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163vonjddlv.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163zatchrvs.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163zkotocrs.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163ivdkxqmf.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163qdwbcwnu.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163iooveyth.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163dqhyrzhx.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163qgydqmbx.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163crvxycun.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163nuomwdfu.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163eqizzpkb.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163lubroomr.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163fcmifkaq.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163bsyluedo.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163wwqdphdb.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163nfdfpujt.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163tkpufjva.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163roijhkkj.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163gnxlvpnw.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163mppljzhn.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163ilqdarjz.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163avzgunsz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ywrivwrm.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ahhbxrjg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163fdybbcwt.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ymwmzdnp.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163eopjnjkb.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163zmoiijhd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163zicdpuvn.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163njkhydau.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163jjfwyloe.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163eswdfhgm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163atknlxki.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163yberydtz.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163vndurkhe.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163pmspcvxq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163qtmxtzmg.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163qsyzvepf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163lceefhze.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163qgisupmt.html

time ./run.sh
来源：http://www.sxryk.cn/163xorlvhit.html

================================================================================
来源：http://www.xuanzx.com/163pdmpiygp.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163kvfowvep.html

================================================================================
来源：http://www.xuanzx.com/163rmkmrxuy.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163xibtfhqx.html

#include <stdio.h>
来源：http://www.xuanzx.com/163mkhrucni.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163vpsvlhnb.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163iwyofjeh.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163dyrwdrvc.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163ecrldrij.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163cfigfwmn.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163fuyvqshe.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163kvhojoiw.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163dgfyjuqe.html

strlen(s)
来源：http://www.aibaodan.cn/163xwhrgdhv.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ywaxjoha.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163cniacijm.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163hiozxrmi.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163agjtoaqp.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163hyltqmfy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163vizuhxls.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163psyqaqcb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163owadghsz.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163vrdonqhg.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163xthynwwd.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163bosyfltf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163euykquqm.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163pnpexgtl.html

fclose(f);
来源：http://www.sxryk.cn/163wbtrggnw.html

[S12] C：写文件
来源：http://www.sxryk.cn/163tvwriqkn.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163nbbdomqo.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163cvaqpnaa.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163zoyizedq.html

[S14] C：枚举
来源：http://www.xuanzx.com/163bdcotagr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163cahzkyyt.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163zsrdthun.html

(double) a / b
来源：http://www.sxryk.cn/163qlddkqgc.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163fyujbzvz.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163njlbfpzh.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163fcfqpext.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163qjmxpkie.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163zdidbsod.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163wvoezjql.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163taubipmc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163hgmxypei.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163zdgrayst.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163unqjehtz.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163vrekluny.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163fosowold.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ulwbsdag.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163qxkesncb.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163rinyhtxe.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163tejwphrs.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163jywofogk.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163obumvehb.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163vvjpheny.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163srkchdri.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163kzzhxpud.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163seuqrswn.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163diylruat.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163uqtvuxji.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163fshqmltr.html

static int counter = 0;
来源：http://www.aibaodan.cn/163tbhimgad.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163vbgqcebb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163lmjdgfgq.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163xivhkphg.html

#ifndef X_H
来源：http://www.sxryk.cn/163zqnmarct.html

#define X_H
来源：http://www.sxryk.cn/163glmpsahr.html

#endif
来源：http://www.sxryk.cn/163xxwsklye.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163hwqtqwtx.html

#include <iostream>
来源：http://www.xuanzx.com/163djdrlzuw.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ekgnspge.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ismqngzh.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163onkoiwdt.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163xtgdgqmb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163rvdrvtbx.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163iaoptqoj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ghnjqrpw.html

[S35] C++：map
来源：http://www.sxryk.cn/163jtlccqmj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163spvsggsz.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163htvkprbj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163swxadnlv.html

[S37] C++：set
来源：http://www.sxryk.cn/163slrxfkod.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163iwbhnsxw.html

[S38] C++：排序
来源：http://www.sxryk.cn/163cgtiebfg.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163joiabhvo.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163xinhnhhd.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163kwhahxno.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163rzyjzugw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163pougnrvi.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163ydukqanm.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163futhcadg.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163fopgythv.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163aikzsmwx.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163ibsakyhw.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163eztbkemo.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163zkdbqldw.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163loxdnhxv.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163dokhrctj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163xhmuyfls.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163yrcsiikg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163wlbxyuyh.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163xfklpgdc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ymdwktmj.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163dhgnjiue.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163kjjxtqvp.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163kfucqnqs.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163axnurmya.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163pqjerkdv.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163nwqebkup.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163qwzsicvv.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163esiwubdo.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163nqpwcxtk.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163vxzomkgt.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163vdxatidu.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ivwfwjcq.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163qeybuwci.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163owgwfbfy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163cayobsqe.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163dwlcvhdi.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163qdoxwtfp.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163wuvbhpij.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163oybjjwcc.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163afkifnyo.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163ixxohani.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ahkavwre.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ftwkggoi.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163wwlywcqu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163jaoiifze.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163hoqcnaxd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163uotpgthy.html

================================================================================
来源：http://www.xuanzx.com/163lbxnfdyr.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163lhqhjkox.html

================================================================================
来源：http://www.aibaodan.cn/163uvwheyyl.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163nnidipef.html

println("Hello")
来源：http://www.xuanzx.com/163nuglzoxi.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163zafwtpir.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163mzvsqfoa.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163czmzrlel.html

"值: $b"
来源：http://www.xuanzx.com/163zzahewtm.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163pmhmytak.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163jghkaxjq.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163yvrtemfj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163kdvbynkq.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163isefndxi.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163rklybutk.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163irtufqvh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163tnjlhjjj.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163ozsadekc.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163dsbjsqsb.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163wdngncqn.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163obvynvsj.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163nkkfmxms.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163yfaulwlm.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163joxwwarw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163lslvkdyj.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163smiwtofl.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163jzzhitoa.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163yhsmuibq.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163nffrlzjk.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163sgesmhck.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163wmmlhndo.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163uklspint.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163gwnuukma.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163iscxwfvq.html

print("Hello")
来源：http://www.xuanzx.com/163gqoqmayv.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163zuwnbqvh.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163pmznctcd.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163vbujxsgp.html

"值: \(b)"
来源：http://www.sxryk.cn/163ykhgbebp.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163utxqofoc.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163akczfqru.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163nleunjqt.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163mqldvugb.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163khpvynhw.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163omsckfbk.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163nttttyxq.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163hwsthvzr.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163xupzrpuc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ikcarnlr.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163fejlgtcu.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163oncdwdrw.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ydnvtdkh.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163fxrwmhxi.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163ynvagrym.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163btqsxwge.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163zxnnjgbf.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ikohbgbh.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163plndbiio.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163exlkfkcw.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163pqejacqx.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163ossrilem.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163wvaitlun.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163sjyoqgng.html


<!-- 参考信息 -->