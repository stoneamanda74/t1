外链999!wailian999！

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163nfmdiaod.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ccgetfpg.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163oehclxjt.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163mcagwmje.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163olsktbxq.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163qytuuwig.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163lrpjgrxg.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ufqaydfw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163hodedfbb.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163fojmzfuk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163cwruxhge.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163xqnibmld.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163bcpemebh.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163kwslttio.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ickanpbv.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163vcmzonlx.html

echo "${#s}"
来源：http://www.xuanzx.com/163gpkfuzxs.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ulyaehpj.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163qufvxtrm.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163phdfrper.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163fpqldfgm.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163pnlkudfn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163bedwdjta.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163zcyidjzc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163rlchiaeg.html

[R26] 命令替换
来源：http://www.sxryk.cn/163wjrceyze.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163ikynulca.html

[R27] 算术展开
来源：http://www.sxryk.cn/163bibuexrl.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163yhpyvctp.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163qlihdxsq.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163fgyvemnu.html

[R29] 定义函数
来源：http://www.xuanzx.com/163nnnuvedu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163vdpzjiba.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163bkifdxud.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163isaawavd.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163thzyqvcs.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ewusqlxe.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163drztjelz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ndbpttrq.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163nmbcqdif.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163dbopnxeu.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163rxgvuwny.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163nvoftepw.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163qfxtyqxk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ffxfurxf.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163dnmpffnd.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163acsthihz.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163spsrumeq.html

files=$(ls -1)
来源：http://www.sxryk.cn/163gsdhhduv.html

[R38] 管道串联
来源：http://www.sxryk.cn/163mipvtpbt.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163zlvztgmb.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163kbvhsyjd.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163gjseijcf.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163rmslmapj.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163culvubcv.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163xpincqrm.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163xuczsrkr.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163kwmxfoww.html

wc -l < a.txt
来源：http://www.xuanzx.com/163bmvoajag.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163rmsapmpr.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163olxkyiwr.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163ushupfep.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163nkyhlfxj.html

[R45] 批量删除
来源：http://www.sxryk.cn/163xlwgcozd.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163zyswphwe.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163eajwlmvv.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163mfwuffuo.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163wcmncnzu.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163nvpgtpdc.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163alenicbp.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163yzrtwrno.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163auepxeca.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163reuqozyv.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163lndzdmdn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163borqagqf.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163xpddeqru.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163mjjxrjwy.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163iwbdajzc.html

wc -l a.txt
来源：http://www.xuanzx.com/163oeeygryw.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163hdwbpsse.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163wbmebpxi.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163nvntdrir.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163dlquswbu.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163rcmovxdx.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163owuquaar.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163gwqjpdfl.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163rnjdhjem.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163ylisaewo.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163zkcyjbkq.html

[R58] 下载文件
来源：http://www.sxryk.cn/163faybexgt.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163oaohxiat.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163bftkulbr.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163azegktem.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163xzbplljx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163nqtgdnnh.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ahlcoaxq.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163psahzcgm.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163nqqtsrzw.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163qsqhjpxb.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163cugposnj.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163ydcnasfw.html

[R64] 结束进程
来源：http://www.sxryk.cn/163dnjnjbrn.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163tnqxssjv.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163nsssseub.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163njoxahig.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163yklkbmxh.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163whjqsvra.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163lbnlrdib.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163njfbxqjb.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ufxhysnq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163dvcpzvmz.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163arvyxyug.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ncldpana.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163otxxooga.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163qnwpzmov.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163imugxvjw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163kjerdudl.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163fhwtfqvd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163ydlmenxq.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163jccyxpqu.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163skxsittp.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163qpccdvcn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163pvsfcfdv.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163ybkzyver.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163utwqyqrq.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163kzlufkav.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163opxoubkq.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163pbilzjlv.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163vieenxxz.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163xppnhfky.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163jtwwgwln.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163muqmadrt.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163suqodvni.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163uontebwg.html

time ./run.sh
来源：http://www.xuanzx.com/163kvnidzpq.html

================================================================================
来源：http://www.xuanzx.com/163dokmvmdu.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163gfkfzfte.html

================================================================================
来源：http://www.xuanzx.com/163bjeuicag.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163uznlsewk.html

#include <stdio.h>
来源：http://www.xuanzx.com/163tjkqgdzu.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163kiketlsh.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163mhpmmfct.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163klcvlzjm.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163tcojgvbz.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163gtdnfgya.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163lbhfljpx.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163juysmora.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163axonvkyn.html

strlen(s)
来源：http://www.aibaodan.cn/163evxqszhy.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163auffxtkp.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163omfsxpwc.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163vdeqtydd.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163rzxudwjp.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163vwsqnrqv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163obuafnhs.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163tyuciouh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163fqagvsii.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163ropgqpri.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163ctxiuhwz.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163uticdcuv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163aihmjpkq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163oyuepjjr.html

fclose(f);
来源：http://www.xuanzx.com/163zzhiteeu.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163gnaijays.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163kgmsrtxo.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163tkikbtjk.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163jwynzvle.html

[S14] C：枚举
来源：http://www.sxryk.cn/163tjyvwxlp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163kpvxuxls.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163srsodste.html

(double) a / b
来源：http://www.sxryk.cn/163qoucwzak.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163frvxbgcm.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163qhkxuvei.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163guuhhdqz.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163rrwyilmf.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163olngbucj.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163tnbjpptz.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163vhehwops.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163nrrbmmdp.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163dkhwdjpp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163oirtmypd.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163blljcpsj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163jlrzkhst.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163rgqmoucs.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163rjfigywu.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163pegcokvk.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163gaccbibe.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163cjuvfljt.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163jqbbiuey.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163gzmqccdb.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163aikksivq.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163uiznnpyi.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163gqlzjuqu.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163tmodxizs.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163trmpevoh.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163pccpqnhg.html

static int counter = 0;
来源：http://www.xuanzx.com/163dimdpqvx.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163htxgtiol.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ofgmpzko.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163wgbctqkc.html

#ifndef X_H
来源：http://www.xuanzx.com/163cvgaibkg.html

#define X_H
来源：http://www.sxryk.cn/163ewtgofqw.html

#endif
来源：http://www.aibaodan.cn/163ddcnumzk.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163iacodnca.html

#include <iostream>
来源：http://www.sxryk.cn/163vrnkccan.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163gpwarprk.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163eyutaghd.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163fvodtuga.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163lqdcurce.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163phrikgor.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163tpawphnp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163mprserjj.html

[S35] C++：map
来源：http://www.xuanzx.com/163gugrxdcp.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163hqixvyyy.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163cwfxhjdi.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163wfkhgpmq.html

[S37] C++：set
来源：http://www.sxryk.cn/163sfizkckc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163xxkgszgt.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163mxzdctve.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163vbcctfaw.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163mqugyayc.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163kyufywdc.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163kluglloa.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163jzqfiytj.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163rcqybteo.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163vazmhluk.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ijcgqyxi.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163aihhhgtw.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163uftufqdd.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163alcdoqjn.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163pvrmxleq.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163isazncbg.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163eixatdiu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163mqhaueuu.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163aqoxerht.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163aoqvlsla.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163iunwinyq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163muxwtedw.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ucrfyzdj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163mudkhtpy.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163smkfwpxl.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163kpdretyu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ghbhdwbh.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163yqvwlmbz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163hseagnap.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163nmgvejof.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163bepgurgd.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163jzbnerun.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163qtrufktm.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ouxdqggb.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163glakaspn.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163rfttsaue.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163krwwgcyo.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163ulzgpefh.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163rwhkfxou.html

[S56] C++：optional
来源：http://www.xuanzx.com/163qyephykf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163icpgfvok.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163syfxiszr.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163xfkzmxib.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163gtpssira.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163snnxftos.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163gnheygho.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163cbbezknk.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163xbgmbavw.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163mqofspwi.html

================================================================================
来源：http://www.xuanzx.com/163ddvtfszw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163xuxjwzwo.html

================================================================================
来源：http://www.sxryk.cn/163gsfewitg.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163arckpcgs.html

println("Hello")
来源：http://www.aibaodan.cn/163bcmxdyex.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163qkmjazmv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163tgbvjhyf.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163cyfvxtzy.html

"值: $b"
来源：http://www.sxryk.cn/163mcbftrdg.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163qvtawoeg.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163wfbhjckr.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163qjmynewa.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163zuqzztav.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163zixikpfp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163zwatkbvz.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163etuwuojx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163bvfcnjhb.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163nhxgjuhy.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ldsmyvjm.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163zabnztxx.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163pmhjkjhv.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163wxiouvpr.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163mmltfjol.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163uaajrmau.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163rsztsgif.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163gmiqsstz.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163zufntvxo.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163qyqqenhy.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163pjqslevs.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163txmifkwl.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163jouvcyyx.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163rufekvpd.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163iqyuykzk.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163ifdjebaf.html

print("Hello")
来源：http://www.xuanzx.com/163zzmsuvia.html


<!-- 参考信息 -->