外链999!wailian999！

R. Bash 专题
来源：http://www.aibaodan.cn/163ehnqeghe.html

================================================================================
来源：http://www.aibaodan.cn/163qjucymdy.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163moouyeqx.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163arevsbms.html

set -euo pipefail
来源：http://www.sxryk.cn/163aieiawjj.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163jycjwwkc.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163arinuunh.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163hunybjdy.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163oxdnkgld.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163nhvybynd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163nygdedlc.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163mdchyikr.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163fogoaibt.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163lghlsbrg.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163vjycwmmz.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163nceymoto.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163ucdomfrc.html

[R08] 数值比较
来源：http://www.sxryk.cn/163jlgsobzz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163xmolmlls.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ohqzeuea.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163lrpjoslw.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163eokskqzc.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163eclihahg.html

[R11] case 多分支
来源：http://www.xuanzx.com/163lobasqmh.html

case "$1" in
来源：http://www.sxryk.cn/163tnreadpx.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163gasibsfx.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163kdibqyky.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163gdqtxsgd.html

esac
来源：http://www.sxryk.cn/163canwozil.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163dscgxdiq.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163vyjkmpfh.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163kvuyvmau.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163teygznoi.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163sbpfkjfj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163dfndzfgk.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163uvlrnrcl.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163pprapxuo.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163mhbrcwrx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163frfggaan.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163hlsmljam.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163zcpxsbxj.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163pxkaezyt.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ywemiolw.html

[R19] 数组长度
来源：http://www.sxryk.cn/163tgvyylvp.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163juanlcid.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163gnzzfxeo.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163mkbauzsb.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163wpggjfem.html

echo "${#s}"
来源：http://www.sxryk.cn/163urqmbkqt.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163xncxnyna.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163boqpfhnn.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163bixoqyia.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163qmmtlpte.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163uvikvzef.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163mqgtgrcj.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163qyvficpm.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163zgopyqnd.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ypqxerql.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163fojfscjr.html

[R27] 算术展开
来源：http://www.sxryk.cn/163sassgzqm.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163uoiqiwho.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163yzamnahh.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163pqefkgqj.html

[R29] 定义函数
来源：http://www.xuanzx.com/163cvtvzbmp.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ubcaudax.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163cahjbnsa.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163jugcfcfp.html

[R31] 局部变量
来源：http://www.xuanzx.com/163opmacdlj.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163lzqcwnbp.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163xydzlusv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163kknqfttc.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163hfrsobqc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163xdvhrfte.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163hzxpmfof.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163idnqoylo.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163asxuttkw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163xjbxpmkh.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163ctxptuxx.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163hhplcqaa.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163kyshzpxe.html

files=$(ls -1)
来源：http://www.xuanzx.com/163ramduzcn.html

[R38] 管道串联
来源：http://www.sxryk.cn/163kbctpsou.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163bfixtewy.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163wodpfhys.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163juseixjr.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163rkfpivcu.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163faxcwtfy.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ymrwhkru.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163hpvtytgo.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163rdfgwlnp.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ppnwmmgr.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163tqcwpyvm.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163vwxykenu.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163xnmbneip.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163smwlpsyd.html

[R45] 批量删除
来源：http://www.xuanzx.com/163kjzjnxvi.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163xkywznpp.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163fxxhahmt.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163nbnnfnjo.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163blyllxld.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163lvatcden.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163gcmuncib.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163fxtnfcvt.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163zyopzpka.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163fvwtjzyc.html

[R50] awk 求和
来源：http://www.sxryk.cn/163ximxzono.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163eqpdsvcy.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163qyohbwqz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163bexazgvm.html

[R52] 统计行数
来源：http://www.sxryk.cn/163opibmgzp.html

wc -l a.txt
来源：http://www.xuanzx.com/163vnfyjcpd.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163zjdhckij.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163tkwtdfgm.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163taivtcmg.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163blnrisky.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163dwzrwebp.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163espsnbag.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163swojilwe.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163txxndygu.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163nzemcbyi.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163wqioacna.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ldwxhdwc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163xxryhskh.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ysytvikc.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163rmdmyhfq.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163eypxtsmo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163mvkciamq.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163pclarpvl.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ldleorvg.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163zalfgpof.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163lmvgqmjl.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163pojzadkw.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163eusdrgvi.html

[R64] 结束进程
来源：http://www.xuanzx.com/163dgwvmotc.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163qlzargpl.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163kpaslupn.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163efonmgfi.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163vpwdbnhf.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163mhccnsgf.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163wjhrcifh.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163gnrdmyii.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ugbmhyyi.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163fcpnnjnb.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163ymidvmbs.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163tcxkotgp.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163dsaqfcyx.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163ughkoedb.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163roohjkej.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163cmpsybvi.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163tclycrfo.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163dewzfnqw.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163oegywlfs.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163uqevhvxa.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163pdetqtsx.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163vzelkcab.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163hheaniea.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163eqzrtrtl.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163lcmkwhyt.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163avlzoexn.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163xtatozro.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163zvazabld.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163roxqebma.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163ixivpxui.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163uyqyrpxh.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163dxrnqupj.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163oqvdmqwn.html

time ./run.sh
来源：http://www.aibaodan.cn/163pomwzbpa.html

================================================================================
来源：http://www.sxryk.cn/163umdimiwa.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163fskvgecz.html

================================================================================
来源：http://www.aibaodan.cn/163eikdkvtb.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163fmfzldmg.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163rlgkschf.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163usmsesqo.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163lqtszorc.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163ymrspgpf.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163upxfoqlv.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163crsvwrcj.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163yrkhdeqx.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163tgfvwyej.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163ktpqejqt.html

strlen(s)
来源：http://www.xuanzx.com/163cqqreytt.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163syyrawrc.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163yexytqal.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163iooqxiyg.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163yycnxwbx.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163abgiicbn.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163xlcqhpxx.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163zwvtcpfn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163joxdjpnh.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163aunrnknu.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163vcrrdcah.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163wxrnlldt.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163gmaiycjw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163tyaxbjcw.html

fclose(f);
来源：http://www.xuanzx.com/163bkawlixk.html

[S12] C：写文件
来源：http://www.sxryk.cn/163xjcwdqmu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163rknrowsw.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ipalxnnd.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163kjszonbt.html

[S14] C：枚举
来源：http://www.xuanzx.com/163cimbqzgm.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163byrpdjoo.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ajwetclt.html

(double) a / b
来源：http://www.xuanzx.com/163pgoztmor.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163vdbwnabs.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163fehqbqur.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163qjrjvefn.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163cjtdxvfp.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163zwbbvdiu.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163vxphgbrq.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163mtoerkzl.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163wbhsfgji.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163gojzxzjr.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163qnbfcnbj.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ytuaonma.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ogimaihp.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163gallyrue.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163unmdtffc.html

[S23] C：随机数
来源：http://www.sxryk.cn/163gvijierw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163uiflxmxf.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163iiampssc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163oxspwyov.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163cgaeqvwy.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163ldszlnsv.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163mxvedvar.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163mazkapia.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163kphubhle.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163cywrodax.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163oxwecukb.html

static int counter = 0;
来源：http://www.aibaodan.cn/163hmeivace.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163fziabcdj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163zlecobmd.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163urvfejlh.html

#ifndef X_H
来源：http://www.sxryk.cn/163namdyvhl.html

#define X_H
来源：http://www.aibaodan.cn/163nuiuhkgd.html

#endif
来源：http://www.sxryk.cn/163lldymyzk.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163qdecogdv.html

#include <iostream>
来源：http://www.aibaodan.cn/163vburciyd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ehrpfpcx.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163leyvnidl.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163ssbkwyfi.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ixjtnwvw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163sjjohdbj.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163kznutcor.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163zlqitokj.html

[S35] C++：map
来源：http://www.sxryk.cn/163rllrfmbz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163hwnzceye.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163unraiuar.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163zjmxhdao.html

[S37] C++：set
来源：http://www.sxryk.cn/163xzfofhwe.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163dqdknjsw.html

[S38] C++：排序
来源：http://www.sxryk.cn/163draivenf.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163whcdtrpm.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163iyxdmvee.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163sqcmsbod.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163jcmnxkka.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163dhhwcvbf.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163ehtnteob.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163fxoycizb.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163iipbjwsh.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163fxvurubl.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163jeuqbmuj.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163ogjgjqhu.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163zjbdvogl.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163htjytxak.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163axoqrqiv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163bwxnmgeu.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163ndelcqdw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ugibhfze.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163jbvehoaq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163jabiudyk.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163twziwbqk.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163fagrfkty.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163fihoninu.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163ftovtxhb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163fvipuxrj.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163dopyxedr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163yawsnote.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163aikobvzi.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163nwkjdxmx.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163sxdsxvip.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163mexzpmtn.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163jljrwrch.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163drpmwwbd.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163vypepbmu.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163gztgcfvj.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163uukymdko.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163brbdorja.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163exfdqwsx.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163pjlhuznd.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163cztkitbf.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163sqsztnio.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163wokvvuws.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163reivzcad.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163hvwlmdsu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163uqtedqwb.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163vklhyvvs.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163xoleixml.html

================================================================================
来源：http://www.sxryk.cn/163mgrpxiix.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163lgyjxckq.html

================================================================================
来源：http://www.aibaodan.cn/163trlcofpn.html


<!-- 参考信息 -->