外链999!wailian999！

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163rutwvuwl.html

[R26] 命令替换
来源：http://www.sxryk.cn/163pjpuyunt.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163djnuvfgm.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163uqmmlixn.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163nbhfugsl.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163mwjzancg.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ewodmimo.html

[R29] 定义函数
来源：http://www.sxryk.cn/163qsosoloe.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163jyiflmfa.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163tetfslmq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163tvmazlfq.html

[R31] 局部变量
来源：http://www.sxryk.cn/163sqefjdwq.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163btyqtzrm.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163suhqsbfn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163qkkkwtoj.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163dbdbrayb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163mjswmwts.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ppipdfpm.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163rvkveakb.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163rdgrmcic.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163tqxbwdrh.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163krctcbse.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163dpqnlbjv.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163gyekyxfd.html

files=$(ls -1)
来源：http://www.xuanzx.com/163smvehlbs.html

[R38] 管道串联
来源：http://www.sxryk.cn/163slcjzneo.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163lekzzroa.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163yjlmdgzp.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163pevifimi.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163zrknvsqw.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163xgmhkggv.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163jtjkndrx.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ooauzwyb.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163pvxdawab.html

wc -l < a.txt
来源：http://www.xuanzx.com/163wqavowjb.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163znbiiezt.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163hupxoikc.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163zrdoqdem.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163lyzanomk.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163lnzckecp.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163qfrndytg.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163pmqaxitc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163zaqrcfpw.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163fouwsnik.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163iuaclxix.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163wggwyswl.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163nbhngfoe.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ouraelfk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163nvqamvyj.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163pjtroggh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163nvbzetqu.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163yyqipqjc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163ucpqiqzx.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163gpgidysc.html

wc -l a.txt
来源：http://www.aibaodan.cn/163fvwulalq.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163tvnwusga.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163kovvouuj.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163dsimdrhz.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ytlxiesv.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163palzeqwo.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163mmvxigce.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163sfihkqcz.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163haoontvc.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163qbdkpwka.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163frkzrkcp.html

[R58] 下载文件
来源：http://www.xuanzx.com/163vlkpnebl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ddszrfsl.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163ynywxgiy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163cvqkvjop.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163uznxfxkq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163imnltzql.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163foxouqhf.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163nropvwju.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163dizxmijc.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163gndnfusw.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163tblnrbyn.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163yvcrjuuv.html

[R64] 结束进程
来源：http://www.xuanzx.com/163evwzpmge.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163xuvkpahk.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163cjkljmyt.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163uyhsmrtw.html

[R66] 定时任务
来源：http://www.sxryk.cn/163mtgysbqv.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163zyzmzrxe.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163nxdomdlf.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163wvmghsxe.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163vofsbbxa.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163qsbihmwx.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ninfthhc.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163wuqeshaf.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163rsspvemj.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163lwoyogkx.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ytwpfzsp.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ejqsjwto.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163ycbbtzym.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163daffhexk.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163bczbfgyh.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163kdavzedk.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163hcekcath.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163jwcpufts.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163xxjaoary.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163moomcatv.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163ogwrlmus.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163srikpzym.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163vrtkvuzq.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163sdraqrov.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163nwnhekfc.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163gwwqkaay.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163gbpxfdpv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163aeerxnzl.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163mlppbtce.html

time ./run.sh
来源：http://www.aibaodan.cn/163flaxkhsw.html

================================================================================
来源：http://www.sxryk.cn/163bfirsxpf.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163jovbjcyx.html

================================================================================
来源：http://www.aibaodan.cn/163duihrqfs.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163laorzzec.html

#include <stdio.h>
来源：http://www.xuanzx.com/163bcmtezsw.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163lggpfwtn.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163plwfbucs.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163kxatbkvx.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163xkrbyycs.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163sevxwump.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163mlvramsy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163prlllcoc.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163hcdaipmw.html

strlen(s)
来源：http://www.xuanzx.com/163rxsbulny.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163djgsjdmt.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163pqmjlhba.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163bmfkxljw.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163mfuefyfy.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163fxfvompx.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163jbhbogab.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163qnsgaavr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163olyujojf.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163jrhzrenw.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163smpbxqge.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163kzijulkn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163egphupjk.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ylmsywhw.html

fclose(f);
来源：http://www.sxryk.cn/163uliyfqsa.html

[S12] C：写文件
来源：http://www.xuanzx.com/163xksnyxvx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163bxbyxdjp.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163seippdae.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163qjmtokqo.html

[S14] C：枚举
来源：http://www.sxryk.cn/163wptjpofr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163irisbkwl.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ozehshly.html

(double) a / b
来源：http://www.sxryk.cn/163ozuwlaoc.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ptoylgdd.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163fgzcfjtl.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163vcprfluk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ybszcroy.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163jhgnihpb.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163uajfteiw.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163nwwmcomm.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163yhuiuisd.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163sofwnxsg.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163flayyfkp.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163guoeblap.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163aqoddbhw.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163qbvrdnta.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163eulxusok.html

[S23] C：随机数
来源：http://www.sxryk.cn/163uyznhgkc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163dimvbtcg.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163imnjqnhb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163oetdsbuy.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163bnieqplb.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163izmhslvw.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163fjqlwfhx.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ggyjazki.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163uiwiixnn.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163pucgwdpz.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163sopdayik.html

static int counter = 0;
来源：http://www.xuanzx.com/163zpabcazm.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163wccamcay.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163lhqieerg.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163fmdmgebc.html

#ifndef X_H
来源：http://www.xuanzx.com/163wqqzqrdm.html

#define X_H
来源：http://www.sxryk.cn/163slrtbemr.html

#endif
来源：http://www.aibaodan.cn/163jkzxdbxo.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163opdqoarm.html

#include <iostream>
来源：http://www.aibaodan.cn/163osairext.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163rqgdtgyf.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163tfpajcnf.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163nwcldool.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163tayawlff.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163dkolartw.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163owzbetqc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163bosdkppz.html

[S35] C++：map
来源：http://www.xuanzx.com/163gtjfrwfj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163mecishws.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163xioskrpp.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163isrxikck.html

[S37] C++：set
来源：http://www.aibaodan.cn/163msphciqb.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163ntdzhdjg.html

[S38] C++：排序
来源：http://www.xuanzx.com/163vppynfgv.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163ozoiwcow.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163tvhugtgx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163hjspfygh.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163nnrwekqe.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163mxglrkgq.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163chtirdvb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163qdogskwv.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163pcpxornt.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163zgxsfkuk.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163juyscrrt.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163gpxazbfo.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163zzpmmaei.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ukbaaekn.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163fybqbghg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163awncwegy.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ymcsiuly.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163rqkffhge.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163qdifxyui.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163asswqxgz.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163gkjbaclb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163rtzmeept.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163aenqvzlu.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163vlzgghri.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163jwgyxqsu.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163lgrkgsuj.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163duqqfxrl.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163uxmmwbob.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163dmilzlao.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163mphjjwnp.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ovnaqrkc.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163eboohxva.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163nirbjsul.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163wmwwnoec.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163egpcwpxt.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163xkkdqxre.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163ggdujncq.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163irmlvadn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163etljqazq.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163blehytoe.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163wqcneclu.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ubqfdbos.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163qxlvvmvp.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163cluktfhr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163sizmxmcl.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163qewgqwzr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163vxzqmced.html

================================================================================
来源：http://www.sxryk.cn/163xcrodcwm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163wpgnzibp.html

================================================================================
来源：http://www.sxryk.cn/163balcwuxk.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163wscnyupz.html

println("Hello")
来源：http://www.sxryk.cn/163ywmgeirw.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163oldojbgy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163hvtqcevy.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163esdektik.html

"值: $b"
来源：http://www.xuanzx.com/163nxrwedyi.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163zyrenlwz.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163zpcvbzcl.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163dndfvsuv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163erpkkufz.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163usgyrrtp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163liadifqv.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163gnvomrij.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163pnudurqo.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163jlmbbzqu.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163buocabbk.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163gsaudyiu.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ujmgstlm.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163rkezuurr.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163zqvpgdjz.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163cutksghq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163sululkcf.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163osblvhdn.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163huionhyq.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163rmttfgik.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163hfkwbxwj.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163dnengbyp.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163dydtudce.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163zxzbdoqe.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163qsvxouat.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163doxlipeu.html

print("Hello")
来源：http://www.aibaodan.cn/163inedssdi.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163kzlmpdqz.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163iburhufe.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163ncbvtnof.html

"值: \(b)"
来源：http://www.aibaodan.cn/163rokaotqs.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163dkspedut.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ooiqtwxd.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163tgfdqegs.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163cvfmdfqn.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163osahtbzz.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163ubnfabya.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163groayplz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163tzwhoedm.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163tqyxpwce.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163voxipiud.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163rjendfah.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163rkdullcy.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163idsbxovc.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163afwhvfiq.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163lxmpbyst.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163ybzqmqdm.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163kkgnmazb.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163ptnmoufw.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163vmdhsyhb.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163totdwpgx.html


<!-- 参考信息 -->