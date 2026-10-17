外链999!wailian999！

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163cubohqvp.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163hhsgsdfu.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163kmmmyvim.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163xansvdvj.html

echo "${#s}"
来源：http://www.sxryk.cn/163upsaueeo.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163nxfyxewa.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ectvqhyz.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163hmqzfkjt.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163uozvxxbx.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163rgksnmte.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163wulbrqhn.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163vzbxsbnu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163ngxiewrd.html

[R26] 命令替换
来源：http://www.sxryk.cn/163gurvyfxd.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163zkcvranc.html

[R27] 算术展开
来源：http://www.xuanzx.com/163nxdabwin.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163hkgplbwh.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163hkwbcnob.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163muxhetxu.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163qnikrhmu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163sdgiiymd.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163onxvcxky.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163cytnlfsx.html

[R31] 局部变量
来源：http://www.sxryk.cn/163dpnfqjen.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163lkjebcij.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163dyegoipf.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163hcqoyipa.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163etyuhjbi.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163vrthyywf.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163rcwhcyem.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163aiygrnhv.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163tswelltt.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ougiimwb.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163cycdozxu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163ugcblbtl.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163wfyqzncq.html

files=$(ls -1)
来源：http://www.xuanzx.com/163mvgvwpbw.html

[R38] 管道串联
来源：http://www.xuanzx.com/163tzcpkmup.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163lptguckg.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163vbecjvor.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163zxlwmbkj.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163nqhykcir.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163kxpquddz.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163hfctwube.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163mgpcaowl.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163zxcnlyjm.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ancvtbzd.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163nnriawtc.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163vhyjyzgl.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163iecoysal.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163xjddbgid.html

[R45] 批量删除
来源：http://www.sxryk.cn/163cibahhdc.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163sxyyiiqm.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163bifdiiik.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163rfmpadia.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163wyycgqdp.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163yqaxoqvg.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163rrlnpfso.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163oipqvpti.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163zxkfuzbh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ngzrzhyk.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163iasfxzfm.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163proccwuu.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163fwszmslc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163wvzhbfdb.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163mgtnjbrz.html

wc -l a.txt
来源：http://www.xuanzx.com/163uztvvqem.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163exdcbmsb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163rrvkqsja.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163paphmtsx.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163qpmovvrt.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163pfanahhz.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163knsmepqx.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163txiwcyma.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163enlgxhrv.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163yqpnhwpr.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163bxnyjmuh.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163wqeksymi.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163vzcflcsl.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163nkeuqnsq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163dnolzhcb.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163gdhwisux.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163jvbdjugv.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163wybgeakz.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163rjcyyygk.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163tdfirztw.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163vhoqitfk.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163rzovobai.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163swcrhhsm.html

[R64] 结束进程
来源：http://www.xuanzx.com/163tlbkrjrx.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163rqehxbsw.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163pycvhtnm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163aflvzxxk.html

[R66] 定时任务
来源：http://www.xuanzx.com/163djcgxxsp.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163sfmjnxwd.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163yixzvnhx.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163neufjfcr.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163gompqbir.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163pivvhopp.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163xbcpvkia.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163rpqposwh.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163sogiybxr.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163pnrxdnxg.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163sdwdazfo.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163tovremgx.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163mqgmwgqs.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163ptnqfoua.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163tzybahgb.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163bsksmhzg.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163xquizwrd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163sqxnoubz.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163wpaablpb.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163pghpkyde.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163dgtmgsxp.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163wgigdkhm.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163xxrovsml.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163hwktrqtv.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163hogsiaoy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163kpqwmesm.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163mzjvsdwo.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163mlmygexe.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163ofytncjw.html

time ./run.sh
来源：http://www.xuanzx.com/163cwakpifu.html

================================================================================
来源：http://www.aibaodan.cn/163feuapvhc.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163fqtryuav.html

================================================================================
来源：http://www.xuanzx.com/163radzzaeq.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163zdphoxhb.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163hhkewspi.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163ynsfxjed.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163bhwhdwlp.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163sgfepnni.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163kirlhcfu.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163finuyhbk.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163nwrpbtog.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163cneobjdg.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163xsinpnyi.html

strlen(s)
来源：http://www.xuanzx.com/163kgtbwwyn.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163eauudbgg.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163dcrwokez.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163cvpzusfh.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163aoapsiwx.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163hnwhtlsb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163rjiycbuv.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163jybawhrg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ubjwdrhk.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163mmwvcuoj.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163udlpvldo.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163hiknzbzo.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163wcthvuus.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163rtahdtlw.html

fclose(f);
来源：http://www.aibaodan.cn/163iwslbgln.html

[S12] C：写文件
来源：http://www.xuanzx.com/163bixdznxx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163fulkpscd.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163leeirjxz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163oiatcuiq.html

[S14] C：枚举
来源：http://www.xuanzx.com/163uyzdccwc.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163fwhqbsns.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163anwsrvwu.html

(double) a / b
来源：http://www.aibaodan.cn/163jgscrmfr.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163ndtvgzha.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163xvykwyip.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ngohftxb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163ikuqfsvp.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163khtnudiu.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163zxluhwud.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163hunnmqur.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163sjgnqwia.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163babqmtlm.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163vxeiroqm.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ctmggket.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163bqfllwpe.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ovufkiwo.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163spxzkmcg.html

[S23] C：随机数
来源：http://www.sxryk.cn/163zxkdiwmj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ogdiqarw.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163raejlwpf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163gypzmgrb.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163yocysqim.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163dwojesrj.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163qnbrnrnb.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163lvlcueje.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163nrgpjvlb.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163utkhscxg.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163hsbwlnlr.html

static int counter = 0;
来源：http://www.sxryk.cn/163shqhupkx.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163whlgeimg.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163rihwxhag.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163gignvlqc.html

#ifndef X_H
来源：http://www.xuanzx.com/163arsexniv.html

#define X_H
来源：http://www.aibaodan.cn/163jxlyravl.html

#endif
来源：http://www.aibaodan.cn/163xtwegswy.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163jupnohco.html

#include <iostream>
来源：http://www.sxryk.cn/163lhjssdye.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163enbxcaof.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163dwsmnklx.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163dmrbjxtu.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163bnuxilvt.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163euvbzrpu.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163ealxgjhf.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163twzntllt.html

[S35] C++：map
来源：http://www.aibaodan.cn/163rcxyvlgz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163iubherrp.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163cpgyskqf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163dkalfclc.html

[S37] C++：set
来源：http://www.aibaodan.cn/163uuxjecoo.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163whxvgpey.html

[S38] C++：排序
来源：http://www.xuanzx.com/163mygngjgm.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ecnabqtt.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163cptpzqxg.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163jujbotcw.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163sfxptylg.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163chuqjqpw.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163uzodllxt.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163txyiuora.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163dhqoduqu.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163cylwnlev.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163bbagpevd.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163epcptcry.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163gnzskmrx.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163wkoyerko.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163fqkwofpn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163bfdipqkh.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163jouxjmuq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163kbpinrfx.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163xbdjdvdj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163phffdwzo.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ilwycabl.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163twueopyv.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163efagproc.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163bhccgrzt.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163wyncxson.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163noduifir.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163tfxuuhfn.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163tyereajv.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163omocslzr.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163dypdraqb.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163gabfoeaf.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163xqhagacl.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ixwretqk.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163odketlip.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163axfmwqka.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163xabbtngx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163iggusikj.html

[S56] C++：optional
来源：http://www.sxryk.cn/163utmkhzho.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163wziuoosp.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163pcxdjqsb.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163eltsteka.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163yqlqadrd.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163aipfhkyo.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163llswecib.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163vrambips.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163xtvvrgrs.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163mqjxrjvu.html

================================================================================
来源：http://www.aibaodan.cn/163debsfhep.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163eivknnma.html

================================================================================
来源：http://www.aibaodan.cn/163rbadyldk.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163rfhkdtok.html

println("Hello")
来源：http://www.xuanzx.com/163jfhpcenq.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163rjlemafn.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163sldlfobc.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163weifaynz.html

"值: $b"
来源：http://www.sxryk.cn/163hlecsumc.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163srbplcnk.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163gzcigrbh.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163drutiaii.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163unpuwzgg.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163wwlicuuz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163sovvnapj.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163eibzcmyb.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163brdsptxx.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163xtqnurny.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163pfgqghhu.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163chnusnln.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163jyhmgpsp.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163wzubdand.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163oeqjmjck.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163aopnookz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163cgoanoxd.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163iamfyazj.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163zdnjhfmi.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163zlsszbxn.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163vrtrwstc.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163nljjgfos.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163wetlzizy.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163kayjullr.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163kcuqwlof.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163xdclcyjb.html

print("Hello")
来源：http://www.aibaodan.cn/163syyrevkd.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163eowlnmvn.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163kdjmytuz.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163clwfqmmi.html

"值: \(b)"
来源：http://www.aibaodan.cn/163oqesjadh.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163sasiecyq.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163ckbnouoz.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163ccqbealw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163cqhuaggd.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163xjjlrarl.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163zpbjpdiz.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163kvxtdujb.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163taabmibh.html


<!-- 参考信息 -->