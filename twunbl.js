外链999!wailian999！

R. Bash 专题
来源：http://www.sxryk.cn/163duttqzue.html

================================================================================
来源：http://www.aibaodan.cn/163qcsiwiqc.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163padsffii.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163fasuralu.html

set -euo pipefail
来源：http://www.aibaodan.cn/163nnydjxpc.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163jffsdppf.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163lpfwbkgo.html

[R03] 只读变量
来源：http://www.sxryk.cn/163hvaczwcl.html

readonly PI=3.14
来源：http://www.sxryk.cn/163mlxxqgyv.html

[R04] 位置参数
来源：http://www.sxryk.cn/163gjwcuwmd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163xrzyjgwy.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163rvnhcmlb.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163rlwetsbc.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163kyhipeen.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163zamyxqfu.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ohtjbwpg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163qobbxveu.html

[R08] 数值比较
来源：http://www.xuanzx.com/163gpujodjy.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163svrbhwst.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163jxzhqoxx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163lkelxesq.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163wpwxcung.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163zqruhivg.html

[R11] case 多分支
来源：http://www.sxryk.cn/163surymswb.html

case "$1" in
来源：http://www.aibaodan.cn/163zlcliolo.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163rvdhtqdz.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163raewvcdu.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163encxpssd.html

esac
来源：http://www.aibaodan.cn/163eldhxoiq.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163lwxjhykb.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163kydkrfee.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ecuxbefc.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163vmeicxzh.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163wahwgusu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163iprcavyh.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163orogfrra.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ijobzvfk.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163aknlmsbc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163vffiludi.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163jtiuyckn.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163wyhdkkyn.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ikiobzqg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163lbacaejj.html

[R19] 数组长度
来源：http://www.xuanzx.com/163scyigxkd.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163pkxqzeel.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163gbnkxaqk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163zvovomsm.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163iefjtsjb.html

echo "${#s}"
来源：http://www.xuanzx.com/163aoiqesvf.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163kdcpsoix.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163asirzfix.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163rwlrgmfv.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163krnwzegq.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163plsexdrt.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ltrkozyx.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163vybnpycd.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163glyefplo.html

[R26] 命令替换
来源：http://www.xuanzx.com/163lounuhlq.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163bzpwcyfg.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163zwcjlhbv.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163rvthlcrl.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163sluxyadk.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163pmuffsjw.html

[R29] 定义函数
来源：http://www.sxryk.cn/163rholvxbd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163oxghgmni.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163vpcppkna.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163geyxddyw.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163vdgnxsbt.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163emwvbhht.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163awhwnebi.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163zaagchds.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163bmhztekn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163sxtzcrcy.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ciipxulh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163frmsgwzm.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ktvssdex.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163zigjdxnn.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ghsvsnuf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163fblhctym.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163bgunfxgq.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163uiznmzss.html

[R38] 管道串联
来源：http://www.xuanzx.com/163rxdacjiw.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ffthfqzq.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163nrhrqdfy.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163dpddhyjd.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163nhofsluw.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163bvvgzqjv.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163vauixcot.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163vlhrvoqk.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163rnwvocdr.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ccjddxwu.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163swfiutur.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163mqxpphiq.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163onbnwcmv.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163hsmhtqgb.html

[R45] 批量删除
来源：http://www.sxryk.cn/163cwkbfagp.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ewstpbqt.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163fmkwrxvq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163mrceyrme.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163cclgfyqo.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ecisdboz.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163xpieuhmo.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ofqtjwet.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163xsrgfysg.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ommfywuv.html

[R50] awk 求和
来源：http://www.sxryk.cn/163aomhhdcv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163qdrretdq.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163flduepgl.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163mxnvrmqm.html

[R52] 统计行数
来源：http://www.sxryk.cn/163oxkcbrfv.html

wc -l a.txt
来源：http://www.xuanzx.com/163xxbvaddc.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163kxombtya.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163ycjronzl.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163brupzujx.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163bratotgq.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163osnhoces.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163vcpbmhvb.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163hlmwsfni.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163xwbedzfk.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163wkumfjjk.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163nrxamtar.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163dgombxzl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163zihpzkus.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163eljoiyax.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163hlxbppmo.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163cmtxyozq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163cllqpeni.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163iifdkcgy.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163zkevxauk.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163zavephgf.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163tnhfxiai.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163wrviylri.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163pvhhmucn.html

[R64] 结束进程
来源：http://www.xuanzx.com/163vdedqobf.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163vbvnklwm.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163wqocnmlu.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163sbvedchy.html

[R66] 定时任务
来源：http://www.xuanzx.com/163yzvtyvbd.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163iplrdpkl.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163jjytzbtz.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163hvwzgiuv.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163hcvqgeoc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163slpgoykd.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163eyjfqopv.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163pgqewcex.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163isgkoxfc.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163odjtetsr.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163yksqsdhn.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163nlqszvoo.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163wgwkruzi.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163sbfrjmie.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163wrrplggb.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163njqdgubu.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163treyhrqq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163tvtdpqao.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163wygywfji.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163usmaozdw.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163lpzdzzyb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163cibkvabr.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163wyfozvqg.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163llhrntbn.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163rgaargtp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163pwrmsjrg.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163aidlwwpb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163gjxbktus.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163zmtrhndz.html

time ./run.sh
来源：http://www.sxryk.cn/163qknlfpdw.html

================================================================================
来源：http://www.sxryk.cn/163utkzanva.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163vwdnopip.html

================================================================================
来源：http://www.aibaodan.cn/163thpldgop.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163oaamkbnw.html

#include <stdio.h>
来源：http://www.sxryk.cn/163qliajayt.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163pbyxwmmb.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163yleslgmh.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163pbudmgtz.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163nmyoibqq.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163hlsnglsk.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163jtymsjze.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ifmdkxzi.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163xseqzqhb.html

strlen(s)
来源：http://www.xuanzx.com/163yqjvliau.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163vtaezpmu.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163dgjcpjpk.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163aivmgmpf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163lhspbadt.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163rdyhppib.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163jdtikbkt.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163tjcfgbyt.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163udxryekg.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163fhvlifie.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163mstxmsxh.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163oluccxnn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163pxmuoggb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163xhccoadx.html

fclose(f);
来源：http://www.sxryk.cn/163fudphoea.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163oiakobwf.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163bcujojty.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163foncaabs.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163lnvyqppt.html

[S14] C：枚举
来源：http://www.xuanzx.com/163gzlrpabc.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163gtjeoyig.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163svwegxmn.html

(double) a / b
来源：http://www.sxryk.cn/163ldihminz.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163awrijxky.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163xrhfakfc.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163omnmlyay.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163evlejooh.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163emlwcnon.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ofgomgct.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163vmygfkuc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163akosdjlg.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163xqowjxlj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163dbaegcul.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ofhmkjlr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163vnbkjgsf.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163nfyuwbtw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163gtdxwmfh.html

[S23] C：随机数
来源：http://www.xuanzx.com/163caxkkgkk.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163dtggbihk.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163zddyxmqn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163zmecance.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163cfkuhndi.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163bxeireyl.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163kvppyang.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163pmlsreap.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163xukytnlo.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163pfrmbtzl.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163cndyhtpn.html

static int counter = 0;
来源：http://www.aibaodan.cn/163skttjqpt.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163fmacblfq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163mlrhpxlo.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163bumilepj.html

#ifndef X_H
来源：http://www.xuanzx.com/163regljcke.html

#define X_H
来源：http://www.sxryk.cn/163qyjmzssy.html

#endif
来源：http://www.sxryk.cn/163hyerlxlg.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163mxpadrwx.html

#include <iostream>
来源：http://www.aibaodan.cn/163nrrtuzxq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163opnaxhcb.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163vneakhsp.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163occiymfg.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163kqygldva.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163gtvrdxai.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163fegzinxl.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163qklhanmz.html

[S35] C++：map
来源：http://www.xuanzx.com/163cnmuwyky.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ptgtnxan.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163gzppxkpj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163geqyhdjf.html

[S37] C++：set
来源：http://www.aibaodan.cn/163xhuvvonh.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163lxpoxxib.html

[S38] C++：排序
来源：http://www.sxryk.cn/163tcbjsdra.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163hvgkaxea.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163unojbfrf.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163vcjmrtpg.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163jlondlel.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ekmtpjtt.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163kawoajil.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ubjmljdu.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163hrahyugk.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163khbfnxyb.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163oxlrawrw.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163hzdxajyx.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163rivgmhut.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163xqwljpup.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163xpksyddt.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163orpywwxz.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163dnhohkwe.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163oeaubxts.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163bnlngdia.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163hatlrzjv.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163zvhjtxso.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163jhvxccrr.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163jokbpjwi.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163zslxrpxx.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163xkyweocd.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163kkdnccge.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163afxdbjqc.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163blrekkhi.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163bgkuciww.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163zrrliuxj.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163bekliokz.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163qrknzbwi.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163zacutrzv.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163mmnmvsaq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163zhdqmgln.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163mcjazoie.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163zrvvjkhh.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163zyuselix.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163mezhuubl.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163asgfsnee.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163auqjdwgj.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163clenqqna.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163pggxmnjm.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163mamfirvv.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163fstaujfh.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163bylifrph.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163ooeibgyu.html

================================================================================
来源：http://www.aibaodan.cn/163tebbsjem.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163zktygxts.html

================================================================================
来源：http://www.xuanzx.com/163zjhpspgv.html


<!-- 参考信息 -->