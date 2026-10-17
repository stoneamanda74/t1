外链999!wailian999！

echo "${#s}"
来源：http://www.aibaodan.cn/163ccjlymtr.html

[R22] 截取子串
来源：http://www.sxryk.cn/163kvbgnnak.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ealhkdqh.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163nyqgkbmx.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163sdhaycsj.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163vwaktogw.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ckxrhcyt.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163gdfajbas.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163vshvrnbi.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163mqvlfkij.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163eqcaonhb.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163fvvqpbxs.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163esvqyssd.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163jcxusnga.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163hmwummsa.html

[R29] 定义函数
来源：http://www.xuanzx.com/163lfxphziq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163jcqyynwp.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163qtcjdyzl.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163zsztdrwd.html

[R31] 局部变量
来源：http://www.xuanzx.com/163uaubrfzx.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163macobtlm.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163vmzbpljr.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163bsawniky.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163mlmsyaqt.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163zglnvauq.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163tgiulfrz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163iepaflmb.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163nbqyljzi.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163pspatdjj.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163jknzlwqb.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163lkiuynoo.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163nfnbgyiz.html

files=$(ls -1)
来源：http://www.xuanzx.com/163ivgdssoo.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ffxoqrvm.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163bbxtvpze.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163tzdoopgo.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163lnrqgpnp.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163pspkcbgy.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163phbutazi.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163pngckbpu.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163dbumgpod.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ccoaxndx.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163chtnuadh.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163mihfdnjk.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163wpdwyfae.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163gencdjuo.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163dqaobonh.html

[R45] 批量删除
来源：http://www.xuanzx.com/163hnffviab.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163rryfdxvg.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163iwjqivbp.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163fxnrudhy.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163dqefdbdt.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ervethjw.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163xwqesshv.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163efnudomo.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163qiyqzlrj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163rmbqcnfd.html

[R50] awk 求和
来源：http://www.xuanzx.com/163kvhaplpp.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163bybcgamz.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163brerggis.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163ppqdyknk.html

[R52] 统计行数
来源：http://www.xuanzx.com/163bopegkxl.html

wc -l a.txt
来源：http://www.aibaodan.cn/163sacnindt.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163lnelrodr.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163bcbkseyg.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163dbfodozw.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ymtlfwgq.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163vqxtckhb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163qdnbmzmu.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163rwgxmneh.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163nxscbomj.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163pqbqtyfm.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163pnjwwkka.html

[R58] 下载文件
来源：http://www.xuanzx.com/163rhiojkgq.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163rydlgwqs.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163pxvfylwe.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163sjloqdkt.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163uaykfhkh.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163qhbbgkkz.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163kyszgqhz.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163xrpuiivj.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163edvdrpur.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163pllllcng.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163veixlmzc.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163ozigeyab.html

[R64] 结束进程
来源：http://www.xuanzx.com/163tacsaeis.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163jcwntvdp.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163iasgqjke.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163rlqnqhcs.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163pdizqzmm.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163xmbpvczt.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163eydzkyjf.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163mcbjaiva.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163jveqjkbv.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163rntdzhkt.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163jyivphzj.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163okuryxzh.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163yjrpvukn.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163frbskugt.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163mdwarbxy.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163kyeblhcm.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163jojyawru.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163uqpqoscb.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163donyruwt.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163mvnlspui.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ohiebjjs.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163rwftqjzq.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163udhwjbef.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163gzvxfduo.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163twkltmjg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163crpukizw.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163zjjeikec.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163xzszjiyf.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163qbipwchu.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ajvjjhak.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163khdzaiwu.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163djgqhkqi.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163tlnzogya.html

time ./run.sh
来源：http://www.xuanzx.com/163hcphongo.html

================================================================================
来源：http://www.sxryk.cn/163kmiachjh.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163wjsfnfgc.html

================================================================================
来源：http://www.sxryk.cn/163evkhiefq.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163utpwaeav.html

#include <stdio.h>
来源：http://www.sxryk.cn/163tmkpxzkd.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163qtmrakmt.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163juqufbui.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163nlkebxkp.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163pxvmhzxr.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163wnjvhstu.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163pduvecin.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163khmvgmwf.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163lvoljgsd.html

strlen(s)
来源：http://www.aibaodan.cn/163nldchktd.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163ioesiqwq.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163tyrjlfkv.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163eqyampgt.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163cquhjguv.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163ojxlccly.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163yamobbnc.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163nxvkdnin.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163bjnmtpwc.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163jeyyabnq.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163asrlnmyq.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163fmaviccx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163jgttchfu.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163xauxdmva.html

fclose(f);
来源：http://www.xuanzx.com/163duygwvqg.html

[S12] C：写文件
来源：http://www.sxryk.cn/163aowhuoty.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ruirkvub.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163yfkcsqvw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163xuuxmpii.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163umxgndda.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163rsfpnxyk.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ihdeezgo.html

(double) a / b
来源：http://www.aibaodan.cn/163dgzgotvd.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163nllwednv.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163znhsrnvs.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163vqkaibsz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163ognuqahd.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163fyopfgvn.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163gwgzusfb.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163clldrfri.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163srmtrlmf.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163bdkdvnrk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163csywibkc.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163rmmvvals.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163dnfuirtq.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163judhvoun.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163lhtxyejq.html

[S23] C：随机数
来源：http://www.xuanzx.com/163wdclkrpi.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163suyxscuz.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163tzsxltfo.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163zhcjfyci.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ebysdrwl.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163igxwfcaz.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163otxwqsek.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163beyqspaj.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163ugpokczg.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ibawmcsh.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ofhpbxmt.html

static int counter = 0;
来源：http://www.sxryk.cn/163elazbuda.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163yqboefbs.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163prcjgeyx.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163eieaxaqn.html

#ifndef X_H
来源：http://www.sxryk.cn/163cgetdkhn.html

#define X_H
来源：http://www.aibaodan.cn/163povkiwgx.html

#endif
来源：http://www.xuanzx.com/163pydnuydd.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163spfsurjl.html

#include <iostream>
来源：http://www.xuanzx.com/163jpqlhqrs.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ygaeawqb.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163pgqupkcn.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163ktjdzpdt.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163lihepvru.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163zbvdfdls.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163vcqadwdn.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163mqsbjyiv.html

[S35] C++：map
来源：http://www.aibaodan.cn/163zipniguv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163cwidjwip.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163mtdryhqv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163dwdnppnf.html

[S37] C++：set
来源：http://www.aibaodan.cn/163nrspflxe.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163bcesvpkk.html

[S38] C++：排序
来源：http://www.xuanzx.com/163wpturirg.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163sezheajj.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163rgdvavtu.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163qybckdkv.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ulcclrnb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ycvowskp.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163uxdyrzfq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ivqustge.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163vktdihob.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163qanlrvel.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163guetdgda.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163pqlkubfc.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163ecstrasf.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163guisuikd.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163cawmaddx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163excbefnn.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163mmtstvhl.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163kjtxpbtm.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163trvvrqlo.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163zzkokdsr.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163bzzonmrw.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163gqeneuzs.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ubgggzaa.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163zmhvuseq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163kbzbnyjm.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163xfpaqnes.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163axdafqep.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163glzrjvbr.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163zjwznpta.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163kuctouua.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163akniwxhu.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163zscxpsut.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163czqgltkt.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163evhglwkx.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163daexuxli.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163lagwteuf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163huqbcqks.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163akuexhrs.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163snjfsusk.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163yoytfsug.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163jssqazvt.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163qwhodspx.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163rmbwimrw.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163crhbpuwu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163lziblcci.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163crdwgvvu.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ljzmevwp.html

================================================================================
来源：http://www.aibaodan.cn/163trfewmwl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163dlxiruel.html

================================================================================
来源：http://www.aibaodan.cn/163hbrhdtnd.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163qnsnnfsx.html

println("Hello")
来源：http://www.sxryk.cn/163qxjsmfly.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163wwrahgps.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163xxlydzpl.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163vookodht.html

"值: $b"
来源：http://www.xuanzx.com/163hgbbrund.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163xxawakrp.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163cgomimaj.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163gmlzsqug.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163xuauytoz.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163zgbfqoub.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163pzvqoxfd.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163fjgvxakb.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163ifhdihpc.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163bvyykmou.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163obgkabiy.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163ijlpahnl.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163mckjkjbe.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163xywmuggq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163vreezqkt.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163lcvalyeh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163vsandrbu.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163vqcbzekf.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163hymntdbm.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163gljsybwd.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163tdtjpxop.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163kzlrqdlz.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163injtccgq.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163rgzelwkm.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163kpycmppp.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163zpymdbhy.html

print("Hello")
来源：http://www.sxryk.cn/163lyjuapwf.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163boymjacv.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163zkzfvhnb.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163sjdgzxut.html

"值: \(b)"
来源：http://www.xuanzx.com/163hnbqjowy.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ojmykalc.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163sqeouono.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163uazmjbbe.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163wreqmqec.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163iegnlxcj.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163zcjmyurf.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163wnekobut.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163goskzead.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163taeocuiu.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163rncomuaz.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163fefedbbo.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163bkpvoqzx.html


<!-- 参考信息 -->