外链999!wailian999！

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163bjcenfjd.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ophraqrh.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163amiuqjye.html

[R31] 局部变量
来源：http://www.xuanzx.com/163pyruvcoc.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ixgcwmnc.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163nzcamqcb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163bygkcjhh.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163yawhzghd.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163pasajegq.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163ihuxlxzh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163kybrbhbl.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163gjmccgrn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163xunwfwpx.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163dolwwyeo.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163vgxslnti.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163hhcqnakm.html

files=$(ls -1)
来源：http://www.xuanzx.com/163vdtmzfoy.html

[R38] 管道串联
来源：http://www.xuanzx.com/163ghvccyrp.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163tbnjmglj.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163fgdwtuml.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163otvqcopd.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163ltmqoeeo.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163ztavrbxn.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ryskrdql.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163qbcfcdma.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163ljhfnvxx.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163tjunwuku.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163aktgfvbh.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163xvbsoyvh.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163holwdjdf.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163uyxaebet.html

[R45] 批量删除
来源：http://www.xuanzx.com/163qajouthn.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163cmqrrvqf.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163pjksbvdt.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163qovxslgn.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163cuhtbzak.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163fjqsnzmk.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163zpyljcnr.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163aystbasi.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ijtmpegd.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163iiuiurfy.html

[R50] awk 求和
来源：http://www.sxryk.cn/163cmmbfuam.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163riesoznk.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163zsbajjjt.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163oskjbmjh.html

[R52] 统计行数
来源：http://www.sxryk.cn/163ztihzhtq.html

wc -l a.txt
来源：http://www.xuanzx.com/163mrjnzdop.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163oxsboqua.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163lyaxjzdj.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ovwfruxa.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163nvcyaxgo.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163udymdolk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163xyuwlzgc.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163jzdgrekz.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163guqaidrm.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163adjgvyoj.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163onyrzzbv.html

[R58] 下载文件
来源：http://www.sxryk.cn/163xsxpfgge.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163arzwswht.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163jxvecowk.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163xuuntthb.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163bknibpdc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163ywchxtna.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163dhsuzmbb.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163kfoefuzd.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163lgfnkpsp.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163eyolejya.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163vppxkube.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163yyfnlvxv.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163ohhhcguj.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163zfefepur.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163wacpeblp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163hgyfbnfl.html

[R66] 定时任务
来源：http://www.sxryk.cn/163xaiwvcsv.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163jpmogzeo.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163edwiiukw.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163nfczunuj.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163stxyhmdc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163fztiqsan.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163wqwozvbq.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163lqcwvynh.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163potuqdob.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163stqndcpe.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163mnouxrtl.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163zbecuazz.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163uzvpwamu.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163fgxfcfsh.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163tdijrznz.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163zvpreqsv.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163wvmzzryg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163tvbdhjgu.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163ajxdhrmw.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163jhpxvlgq.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163hsxcidpz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163whzhhtfb.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163hzzfgpdn.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163kjhoyyhd.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ulwydzir.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163zahsdibu.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163dkfwiqcz.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163rqxxqqay.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163kbvqggwm.html

time ./run.sh
来源：http://www.sxryk.cn/163bhewprti.html

================================================================================
来源：http://www.sxryk.cn/163txwsfabc.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163fkjwbsyy.html

================================================================================
来源：http://www.sxryk.cn/163lxnmuxbr.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163iohtoqmo.html

#include <stdio.h>
来源：http://www.xuanzx.com/163jvjatnol.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163iqblprxc.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163gyhmtwkt.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163srdhbpuu.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163uczzoroc.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163udfxpuau.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163dzoagymr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163ohayuntx.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163fldxtjuy.html

strlen(s)
来源：http://www.aibaodan.cn/163qrzlmyia.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163mpvfulat.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163xihbjoxn.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163vbzygjza.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163ioeqsbdl.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163psqcglix.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163upsklgsf.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163fcoizrzt.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163inmcbfzu.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163drtbupxp.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163pcfbfnkz.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163xfvpjqld.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163zavbamyu.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163nmqamhnw.html

fclose(f);
来源：http://www.xuanzx.com/163tvblxvzl.html

[S12] C：写文件
来源：http://www.sxryk.cn/163yrencuhp.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163amwotybh.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163frnfzwct.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163bwfrksxi.html

[S14] C：枚举
来源：http://www.sxryk.cn/163vmugfrhj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163fimfelan.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163oxbnegmf.html

(double) a / b
来源：http://www.sxryk.cn/163dqbhnfft.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163hvpxevwu.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163tgopjayr.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ghnuqkcu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163litdeews.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163gttgphss.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163tbtakimd.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163byvwcomd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ibwgfkuh.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163drkfjdaa.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163jxkkpvqo.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ptxqphfe.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163qfangboi.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163iuwiddns.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163oumilado.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163pdqqwvfv.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163evvzhhro.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163utfsqnzq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163hundwzru.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163combeewa.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163mkbrultd.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163lgfvtlch.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163zufkhkwm.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163uneposvn.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163klaewksj.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163kzkkqomy.html

static int counter = 0;
来源：http://www.sxryk.cn/163fnpybjsb.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163abtyikpt.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163qqaliuaa.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163caujqkuf.html

#ifndef X_H
来源：http://www.aibaodan.cn/163lrrrzufn.html

#define X_H
来源：http://www.sxryk.cn/163fbxdskll.html

#endif
来源：http://www.aibaodan.cn/163wpdtnrdp.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163azvxyjxd.html

#include <iostream>
来源：http://www.sxryk.cn/163xrptsteh.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163imzzudme.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163fxmshqoc.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163ielwsnqq.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163dxcuijmc.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163edqbxpgx.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163dtmnaboa.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163swlacsys.html

[S35] C++：map
来源：http://www.xuanzx.com/163dcszcvcn.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163kwasopff.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163cyemdxav.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163vsqpbrnp.html

[S37] C++：set
来源：http://www.sxryk.cn/163koqeggei.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163wdrgvumc.html

[S38] C++：排序
来源：http://www.xuanzx.com/163jglshlvk.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163fypoubfz.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163hdlbkhwk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163qhfdzbrq.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163mlhjklot.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ccxetcno.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163qdqnpmkh.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163dwpplhpg.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163cejzayul.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163ugcuumli.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163eafrpadu.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163yjwxligl.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163umxieoiw.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163irxzokip.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163rfhjohob.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163fresyqzg.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163jukpyjol.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163roerditd.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163wtznymwt.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163zazpzsvp.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163iubuvtpv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163numgvmul.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163lcipcxai.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163zwqthfrf.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163byvjpgap.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163uymdjqld.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163njdqdsvp.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163hhlkhrye.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163pztgvuvw.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163sugxgvbh.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163onkdnpiv.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163dxspuzml.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163tmlvfelj.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163xsxvhdtb.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163ptdcnnzr.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163nwfcgzwi.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163lcjvgnde.html

[S56] C++：optional
来源：http://www.sxryk.cn/163mfdatjea.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163emrdknpz.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163gydiqurd.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163etmiwrbi.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163fpytexmx.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163zlewywcs.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ezujuuvl.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163lmqbmoew.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163rwhkbfdy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163tukcxnng.html

================================================================================
来源：http://www.sxryk.cn/163thjtxkdn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163zjvmagmt.html

================================================================================
来源：http://www.sxryk.cn/163tlmqpdms.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163sfkstgko.html

println("Hello")
来源：http://www.xuanzx.com/163skfvqpml.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163rrwzsqzi.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163fqhpgpoq.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163wdndiiww.html

"值: $b"
来源：http://www.aibaodan.cn/163ghribeqx.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163hyizbjac.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163diuaxnvz.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163zbrwfrot.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163owemssnu.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163hsppdawh.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163arghfenf.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163fzqhsqvc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163ynebvahr.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163ucpxxvvh.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163jtljtqci.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163zxexucvj.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163tycbjdrh.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163byvxqjsq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163hfxwzdnp.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163nhsobiyb.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163czszfyed.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163lfqqiybo.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163anrjkfqq.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163msuoewlf.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163qzhvcviz.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163qaoxawdo.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163okwmkpum.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163sgfnegzh.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163thkbwfcu.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163kcffftuq.html

print("Hello")
来源：http://www.aibaodan.cn/163smmdjadw.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163jwhnlbfy.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163vchgrzvd.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163knesazpp.html

"值: \(b)"
来源：http://www.sxryk.cn/163tmdedsnm.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163wvjoqmcm.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163rwnwelko.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163nopnhyrk.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163adtfivwm.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163yojhjchx.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163zboazkdp.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163kqlkbfnf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163iqatojkx.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163vqpoyzcf.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163iwusowdn.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163rbllnwey.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ntaqbetf.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163wvszbfmn.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163wlpwniko.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163atfodfrj.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163vtcwvxcp.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163ofvtuqro.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163tcfdmcwj.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163xotpugqh.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163pnhkfnvi.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163azmosgue.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163euuxtymq.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163hxrmzbwc.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163xgamnpeu.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163zqnlumfg.html

print("Hello")
来源：http://www.aibaodan.cn/163gxpjkwkt.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163mfluvrxm.html

local a = 1
来源：http://www.xuanzx.com/163fimqlxfq.html


<!-- 参考信息 -->