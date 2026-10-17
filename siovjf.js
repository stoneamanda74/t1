外链999!wailian999！

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163mamudgmr.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163btrpkfan.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163xwkjcgsb.html

[R29] 定义函数
来源：http://www.sxryk.cn/163nlzywfta.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163trqjfrsx.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163blvggzyf.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ubxrnfst.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163rsgjjxxt.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163uxhkxmyv.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163utevggdj.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163mchziigb.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163uiszkajd.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163mwpmehyd.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163fgujhtja.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ipxtxren.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163yqbtepvk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163bvyzrmvp.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163xxbdlthq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163qbypnjra.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163aknhtobv.html

files=$(ls -1)
来源：http://www.xuanzx.com/163egbtxdhq.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163upebbnxz.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163itnvvmrs.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163swgoolwl.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163riwoyejc.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163endyppag.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163npxuhjri.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163doyizdfy.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163qkladdas.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163wzfpbdew.html

wc -l < a.txt
来源：http://www.xuanzx.com/163crienpxr.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163tbzoutzh.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163lvkycgow.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163lhihuocj.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163boimgeln.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163wnfntspw.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163nnmmegdf.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163hpwfspsl.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163pfcwtyea.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ncbmujvj.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163nlldzfed.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163coahqmgn.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163egkksypn.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163oyghejeq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163fjnemtnb.html

[R50] awk 求和
来源：http://www.xuanzx.com/163otbxoars.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163cwcmdmtl.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163seppvfgq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ozegixox.html

[R52] 统计行数
来源：http://www.xuanzx.com/163jmfirctx.html

wc -l a.txt
来源：http://www.xuanzx.com/163vppemqet.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163falndpzx.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163sbsilxfp.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ssoodmty.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163blfjcyot.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163erkujjax.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163ydwazxho.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163embnpcrx.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163hrexikfg.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163ekhdjayg.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163xyiylqof.html

[R58] 下载文件
来源：http://www.sxryk.cn/163jwyasyvf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163eylbgcjw.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163vzrfkzau.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163owqpfuyz.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163oijudwlx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163xhniamuo.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163wtrrswnx.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163djtlakcn.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163dycxujic.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163cqfavjpm.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163hyeujous.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163fvbqngzs.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163jkbqmyer.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163qgdvxngc.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163pjijsdbp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163wtmzwtgs.html

[R66] 定时任务
来源：http://www.sxryk.cn/163unyutrmu.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163jlpducbu.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163zsvzplsg.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163nhsyepau.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163gvhbxalx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163qgleiqiv.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163dfdbimfl.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163kcjgkfyv.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163uqkqnrne.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163micwycte.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163mpfscnhe.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163dbibbhpn.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163elxufvvg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163fsmbncmf.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163zmspcntd.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163krciexmv.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163oogquvmh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163drgekxmv.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163dppptmqq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163myavxltq.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163pktnrghv.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163nacwefix.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163xyubqocy.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163jxibgtva.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163mcriblpj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163skywzqyr.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163iravzzwy.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ficucpbu.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163cimpoyeb.html

time ./run.sh
来源：http://www.sxryk.cn/163ytwjyccc.html

================================================================================
来源：http://www.sxryk.cn/163nndxahco.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163boxuoayr.html

================================================================================
来源：http://www.sxryk.cn/163guhwhpha.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163joayaozm.html

#include <stdio.h>
来源：http://www.xuanzx.com/163hmlrtiqd.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163gwcybust.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163pfcfnbuu.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163smttmbfk.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163bxtjkdij.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163uuvvrhjq.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163jdnqxxjb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163aehlrvwo.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ruwgaikd.html

strlen(s)
来源：http://www.xuanzx.com/163fcjccfen.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163igtpsdaw.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163pvqamtpv.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163krrdjqsq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163uigkarsk.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163fsjxwoka.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163elrytgfy.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163yeloyxfa.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163zegmajkk.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163iumrbogt.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163qndcnsgo.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163gyfotbod.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163xeubdfig.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163xhhwkbrl.html

fclose(f);
来源：http://www.xuanzx.com/163osbasvvi.html

[S12] C：写文件
来源：http://www.xuanzx.com/163chmciamu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163gaxgydoq.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163thiwwbpi.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163cnttrihe.html

[S14] C：枚举
来源：http://www.sxryk.cn/163lcdcbazu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163sevsucod.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163dejkimhn.html

(double) a / b
来源：http://www.xuanzx.com/163fglsckly.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163juodpasi.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163srdprsab.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163pxclvgqh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163tkfvdzcf.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163xdqhdywk.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163pqqvwwvq.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ddhptbph.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163iucwwucf.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163utupludm.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163znkatuic.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163xpitrslh.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163bmmzuhxa.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163dgkqmymv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163euzemeqg.html

[S23] C：随机数
来源：http://www.sxryk.cn/163xeveweac.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ojxvjbgu.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163jahwitpv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163xepkhtyf.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ciowlpdf.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163hurjgzck.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163vlxouhld.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ztopeifr.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163fzpdyjuf.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ktwcdfsf.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163njwcueyv.html

static int counter = 0;
来源：http://www.xuanzx.com/163vmzzbjta.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163sbqrnwdm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163eurdkxkc.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163rzhxeqpa.html

#ifndef X_H
来源：http://www.xuanzx.com/163vqhygqcg.html

#define X_H
来源：http://www.aibaodan.cn/163kjczmzsw.html

#endif
来源：http://www.sxryk.cn/163jiqmdthc.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163jeqdmzyj.html

#include <iostream>
来源：http://www.aibaodan.cn/163omgxzqgp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163riupvlmj.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163onqvhhpg.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163akgroqrk.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163fjmjelms.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163gpabpruk.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163jrxqsbms.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163nyfmclpn.html

[S35] C++：map
来源：http://www.xuanzx.com/163bnfdrhno.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163iibvxmfq.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163ufogmgnn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163agydwzqm.html

[S37] C++：set
来源：http://www.aibaodan.cn/163qpoadcow.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163aiixlvaq.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163jkaysnnr.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ddtofsgq.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163nwfpgvmf.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163pxiqhfjx.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163ltteyjjb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163kgsljmno.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163wildpnxt.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ybgakjvj.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ogwxbkzv.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163uwkxspcf.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163nqylmnke.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163nczmeplo.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163jezyxebv.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ulofpfel.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163huwodsqf.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163vhbupkgn.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163etbfwpvj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163raiypywf.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163kudcyugs.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163awbqtczb.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163wluwsugt.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163mjvbexju.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163kyrkhsqt.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163lwaokyki.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163yxowrpch.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163zzafvwzo.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163pckxuymd.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163tzwhzcdp.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163dswnluye.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163xjzzvnlm.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163hgrzinqp.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163gjzdhktq.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163hoqxmker.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163hkejgpmo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163ixthctiw.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163wvunwmfp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163otybucpz.html

[S56] C++：optional
来源：http://www.sxryk.cn/163zmjvpixe.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163pwzirced.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163lqyjzybs.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163glqwbzoc.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163bgpxvmsu.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ixppypjc.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163duspnaqr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163hqwzyciv.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163zrevjvjj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163qxudannm.html

================================================================================
来源：http://www.sxryk.cn/163oowqwjyd.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163mpgflheo.html

================================================================================
来源：http://www.xuanzx.com/163mlywrxkz.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163siwjdtpv.html

println("Hello")
来源：http://www.aibaodan.cn/163dicaukdo.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163fvdzbrzt.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163imbysfat.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163pfefpkjz.html

"值: $b"
来源：http://www.xuanzx.com/163ovdzyarl.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163mjsmuvxh.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163orayfiey.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163cufmxfdh.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163pxpiemxw.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163spvjakgt.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163hkoflswj.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163qarpmhay.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163zsqalhfe.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ahalywwa.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163hzobagrh.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163dwmmmpys.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163wapxinvm.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163mrarryub.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163mpxhzsnz.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163gfzinqle.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163huzcanoq.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163uvjmkzky.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163jxoywsjy.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163feumrxfx.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163xsehtpte.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163gqhilleo.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163nlbhyokl.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163dbagxxfb.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163wikwsplr.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163yohilnvy.html

print("Hello")
来源：http://www.sxryk.cn/163gwftywvh.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163oxpkfhhi.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163gshquxky.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163fvzqrona.html

"值: \(b)"
来源：http://www.aibaodan.cn/163aqeyjrjk.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163kbdykxjs.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ofjgphdp.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163djjslpro.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163xbcotral.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163itpedtnm.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163sepkbqeo.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163vlifwipz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163esxdgrcf.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163fmanbvne.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ibhrecbk.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163fpeozcsn.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163uxkrbbfx.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163buidxyae.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163wdllcktv.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163ctrodkvg.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163kcjwnnbk.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163bdtkvfzs.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163dtyxzzac.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163mdpynbgl.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163llksogbt.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163mryvucmb.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163hxvqhnnd.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163pwytbozk.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163gbheealt.html


<!-- 参考信息 -->