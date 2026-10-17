外链999!wailian999！

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163piycibdm.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163xxjvondi.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163qmgqyead.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163jnlmtsge.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163xzloyzfe.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163skgizrdf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163jjjnbjfz.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163upgpkizn.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163khydbpkz.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ueskauer.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163vvnxsuyc.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163trllbjcs.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163acuwfcco.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163czpcldas.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163npyuyeak.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163zcdjgylg.html

echo "${#s}"
来源：http://www.sxryk.cn/163nztxfxai.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ydviiyju.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163bomwtler.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163hzjnekbw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163qsgsouqs.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ndixgofb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163qemnnely.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163sgzaccig.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163rfhxyyzk.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163owlpwyhw.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163dkajodny.html

[R27] 算术展开
来源：http://www.xuanzx.com/163jnetrhcb.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163twycojlw.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ajuhmewd.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163vvwnpnml.html

[R29] 定义函数
来源：http://www.xuanzx.com/163mjjkebij.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163dmdcmtxq.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163iqlvzbdo.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163kiqvlwud.html

[R31] 局部变量
来源：http://www.sxryk.cn/163stdbuzta.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163nwovjpck.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163htzqcdya.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163dgupajgv.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163hiwxucsd.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163hvqgvuma.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163hsexlzrn.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163wnvkvpri.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163utwpqsyg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163indmkovp.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163uphpixim.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ospoulfx.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163vnzpmlly.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163lcuplwdk.html

[R38] 管道串联
来源：http://www.sxryk.cn/163txcjijpu.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163lqumsrhc.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163wdwhpfuw.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163hfgwmbcd.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163kwujdpqz.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163jedvgdiv.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163utpstumh.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163nyhtcfif.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163qzchrhsg.html

wc -l < a.txt
来源：http://www.sxryk.cn/163fhjvgsqd.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163cyqttvdd.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ifikocfl.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163xghskedj.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163qvqrhzoe.html

[R45] 批量删除
来源：http://www.xuanzx.com/163cowkjbrn.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163jsbloqwy.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163ktcobwrv.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163isyvfdns.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163dhsxahla.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163owbinrzn.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163giffjxxw.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163kkgcpzlu.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163jegrarmr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163kyufkbht.html

[R50] awk 求和
来源：http://www.xuanzx.com/163nwhliswr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163iadhdwpe.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163labxqgzi.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163fmxpuwde.html

[R52] 统计行数
来源：http://www.sxryk.cn/163hwvuwtbb.html

wc -l a.txt
来源：http://www.aibaodan.cn/163tvyescps.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163bufbnxnf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163hbbekxxn.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163krcjpqse.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ajunxeue.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163pqlbruwd.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163ogeeobcx.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163eqpavzyr.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163hxowmhxk.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163qtcagpyk.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163diuqygrq.html

[R58] 下载文件
来源：http://www.sxryk.cn/163hdwiatvu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163pccavccd.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163wxtsuqba.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163iuacgnrl.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163dorkwntz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163rdajxpqd.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163fvfofrgf.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163aamhwtni.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163hsqtkope.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163mkgncpxt.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163tqgwwpfj.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163khnbfvxi.html

[R64] 结束进程
来源：http://www.sxryk.cn/163mrcjphhz.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163lgqkwvtn.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163yrirozyn.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163yzjzmlpl.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163mrudsywu.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ooegiarb.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ikbdspaa.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163txguttyw.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ptghgkck.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163nkhctvug.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163kuepohhz.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ggetovay.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163npkrwvvi.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163vdljlfgg.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163nvdehznr.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163npebtxkj.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163whxzunal.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163rgsmwubj.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163idczztep.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163sotvacuo.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163wrcirpsa.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163pyypnoil.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163hgtbbtfs.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163xgruxvtn.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163pthwcsjb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163tijzwvok.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163tfktirrq.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163iwcvicvh.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163eudcpgms.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163tlsypxoy.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163eqzjumsc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163pvaobdib.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163jihppaha.html

time ./run.sh
来源：http://www.sxryk.cn/163ooewiejn.html

================================================================================
来源：http://www.aibaodan.cn/163jszezdtk.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163dbqxeatf.html

================================================================================
来源：http://www.aibaodan.cn/163medhdaha.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163lgmcnltz.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163jcmhcyhe.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163dccipscl.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163twnymbhx.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163capxrqxg.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163phqwwadi.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163mvfonmmm.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163hdyxbshn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163kkjrokoo.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163wuivdbzf.html

strlen(s)
来源：http://www.sxryk.cn/163qwspvjxl.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163nyztdhif.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163vopystuq.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163bkxrtjqs.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163msgumjlb.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163nirshlqi.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163qunsezir.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163uztdrjcp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163oddinnto.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163aqslsgsm.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163quhlwrwk.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163sljdwawf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163gceyrind.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163ozmsggym.html

fclose(f);
来源：http://www.aibaodan.cn/163tzcnjhcb.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163zncpbqlb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163fmmoitiv.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163dqxplbtw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163fkkdnuik.html

[S14] C：枚举
来源：http://www.xuanzx.com/163bqesunrf.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163hdhcpezs.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163qkjexbcg.html

(double) a / b
来源：http://www.xuanzx.com/163xawqshya.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163aowbpwec.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163paisxaax.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163mrytuahw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163odeawvqb.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163fvfhnssm.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163duegydfb.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163nalrdryx.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rhsshuzz.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163hgkifatb.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163xsocwpfx.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163nhcfymco.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ryuqcbwa.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163cazeloan.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163immfqsiy.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163hjbtypfk.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163cjkprgkk.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163dkvcqgxd.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ghyuzhgy.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163afvftpvu.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163nzaczfgr.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163vogajszk.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ekeuvzog.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163lrzpymrk.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163pylrysqe.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163phvacbix.html

static int counter = 0;
来源：http://www.sxryk.cn/163yumpiwiw.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163rwneqdmz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163zjioxjpi.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163aqwtvyho.html

#ifndef X_H
来源：http://www.sxryk.cn/163ktbgydob.html

#define X_H
来源：http://www.aibaodan.cn/163vbhbfxtt.html

#endif
来源：http://www.xuanzx.com/163bajqvidq.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ttdvdibm.html

#include <iostream>
来源：http://www.xuanzx.com/163etxqapvl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163vdtpgcwi.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163kbttdkvc.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163xdiilqff.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163mlmzsqul.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163sfbuarkd.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163klcoidnv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163bzjajiyi.html

[S35] C++：map
来源：http://www.aibaodan.cn/163dlaowzhk.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163spflpjwe.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163znawbpev.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163hervvgzn.html

[S37] C++：set
来源：http://www.xuanzx.com/163hhbswpzo.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163pskhaxps.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163wwrhscyj.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163nzxwelfo.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163gpkbsccy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163rcvpawcx.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163nocomzgy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163vxypyoru.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163nenmitbe.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ofyljclw.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163brgadyfg.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163wkyshowg.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163bigvshdz.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163lzsrhmmd.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163udtlmjau.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ufcpzbmq.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163pmupabqx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163zdscaqfk.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ugsexxsn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163hinrvwua.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163brrcbpcz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ikvvfpig.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163euijxzki.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163dncyvhwr.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163sntetlax.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163cdxnyssn.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163rzjvbdey.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163fmvpimbh.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163wktcvoxt.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ypmishoq.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163rdejxytc.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163xgitgzyc.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163doqjbqmx.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163iurbarhh.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ndsfzyam.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163pulkbkve.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163uaegtbvb.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163bcbjwinu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163blpsopin.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163bbgipsqu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163lgunzwog.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163ddifkmqe.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163pqtrbgkc.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163havhxhyi.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163jgtspjcu.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ptlpnmff.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163dirhiqim.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163egyxziha.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163erdbqjfq.html

================================================================================
来源：http://www.xuanzx.com/163nujfleqg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163bhtvkniq.html

================================================================================
来源：http://www.aibaodan.cn/163jkjaxrjb.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163wvhjetxe.html

println("Hello")
来源：http://www.xuanzx.com/163njiyezzl.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163dkgmylui.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163fhbqpyrw.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163qkjcazzs.html

"值: $b"
来源：http://www.sxryk.cn/163zwvclrfn.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163pdrlorfc.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163gwuslshl.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163kdglycpf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163llufvufv.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163xculpzth.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163nobmunlp.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163nmjfyvkw.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163jmhvwijx.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163vsfvthsl.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163wudnscek.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163euzygtsd.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163tznypdkz.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163cdvvbsuu.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163nfcfskdt.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163iekzkitq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163svabsyqd.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163nrookfsk.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163tulceawx.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163lhgxeimg.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163gmbbxbve.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163ncmvzcmm.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163wohqenly.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163odjjekcw.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163wbsrfwvp.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163gngztxjc.html

print("Hello")
来源：http://www.sxryk.cn/163rzzecqtt.html


<!-- 参考信息 -->