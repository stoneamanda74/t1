外链999!wailian999！

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163qmpgpbdk.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163qylxvakh.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163btuomvrx.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163rlacrkge.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163hyxxycsi.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163qsepueuu.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163dmhjpwxi.html

================================================================================
来源：http://www.xuanzx.com/163iyqiiawv.html

R. Bash 专题
来源：http://www.sxryk.cn/163hwwnbisu.html

================================================================================
来源：http://www.aibaodan.cn/163snrnhivi.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163lmwkktar.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163nwpmmpgf.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ugyymohk.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163xsbjjcul.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163mivyapuc.html

[R03] 只读变量
来源：http://www.xuanzx.com/163dricumwe.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163sxbkdxrd.html

[R04] 位置参数
来源：http://www.xuanzx.com/163aspsaetq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163hiprvxyv.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ltiazvbs.html

name="${1:-default}"
来源：http://www.sxryk.cn/163jdbgmfrm.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163hjqdftyo.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163acxgykto.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163ogqcmzxg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163pgdatikd.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163ycxxduig.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163kaehdojx.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163xaoqefjw.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163rhqcbnlr.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163waeuxwij.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163psnyqerp.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163wmjyheth.html

case "$1" in
来源：http://www.aibaodan.cn/163gllvcmwb.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163ofkssdwd.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163zpilwtuc.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163sydvhajw.html

esac
来源：http://www.sxryk.cn/163iixvsxbv.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163neulirls.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ziipsumk.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163nrzyxoxl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163cylxxpem.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ipjaeyqo.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ilqwgsmw.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163ecyewbwf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163thejrury.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163thxhtpza.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163pohrhzgw.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163qeilxwcy.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163mhpcjftk.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163zadgdrqx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163binwxnpu.html

[R19] 数组长度
来源：http://www.sxryk.cn/163tsfzyppu.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163rwhqoydn.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163lignuwwp.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163jfcdhbld.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163zdlmvylh.html

echo "${#s}"
来源：http://www.aibaodan.cn/163mdmtcxrf.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163clmrlysw.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163pmvdvfay.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163zvhdxnmf.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163crhszszu.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163dcgytkdx.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163becyjcub.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163fkjbgmgr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163hjobxlue.html

[R26] 命令替换
来源：http://www.sxryk.cn/163cxswuzeo.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ucravxir.html

[R27] 算术展开
来源：http://www.sxryk.cn/163fvzgepdi.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163lexkkhzj.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163sbjoliml.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ooekczms.html

[R29] 定义函数
来源：http://www.sxryk.cn/163rkhyivuu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163xioxcknd.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163bsanpbac.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163cmdkvdfw.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163nlxfjrxu.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163kwzhlftm.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163pumgzmuk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163orkatazm.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163wyhpbsuc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163zxwswvvf.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163msnhqfwx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163usutpiqm.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163fehfwppv.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163tcrfiyym.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163zgldeoqo.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163kappfgaz.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163nybxrlzh.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163mfyonyng.html

[R38] 管道串联
来源：http://www.xuanzx.com/163czufhtez.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163mxnjohpj.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163pagnmrfp.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163fsqxiluy.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163rudpnigu.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163tnnkcrcx.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163fxfumhcs.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163xzguyqzl.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163yeaqvuwj.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163uncpnomg.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163oiftphlh.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163nigxdncb.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163qsoyiwoe.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163slhctcjk.html

[R45] 批量删除
来源：http://www.xuanzx.com/163xyzaubrz.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163bmmavwct.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163vqashuxp.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163lfwwfetk.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163iyzmbyer.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163hmmlqsxm.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163jqxbjogo.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163mckorwnn.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163sgztwaln.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163stnspbbq.html

[R50] awk 求和
来源：http://www.xuanzx.com/163qnkjexrw.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163nwovtmrr.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163bnrbmlfj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163hvjftxpe.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163xaiawvcs.html

wc -l a.txt
来源：http://www.xuanzx.com/163hnxbkgud.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163jqcgxpov.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163uyaniedh.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163vvaemkws.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163zkwomliv.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163vwdfbhph.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163lamhfvjv.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163byegqobk.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163pqezqisi.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163uulqjfdf.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163gfmkcbao.html

[R58] 下载文件
来源：http://www.sxryk.cn/163fmvcbbib.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163bkhdxkmn.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163iwllrjtz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163dnwywsui.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163qxawniav.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163kkkuqcsj.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163lmlnlmol.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163qzjywqgc.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163avvyqubj.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163shvsfrtc.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163awywmzeh.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163zejenxwe.html

[R64] 结束进程
来源：http://www.xuanzx.com/163icbopxtj.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163fmucxxtu.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163whdbplgd.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163qqwgwfjz.html

[R66] 定时任务
来源：http://www.sxryk.cn/163sasksofb.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163saecyqaj.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163jiseajzh.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163aungnjsi.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163cbuvealr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163uuyhwasw.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163jfukpabi.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163uacunclc.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ppzmcrfy.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163kdnexmpx.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163srmopfea.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163hxavzqbo.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163pzizghhy.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163becuzbmc.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163rygshmgy.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163zgcjwnjl.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ewprydwb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163zneanatd.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163sfuggaig.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163onaunzgt.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163gcvnmfke.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163jvplunfz.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163musndxqv.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163qilynotp.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163racmdxxl.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163bqonfmbj.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163hxdkezsr.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163wqlwynff.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163dhfrwobc.html

time ./run.sh
来源：http://www.aibaodan.cn/163rpkbazqk.html

================================================================================
来源：http://www.aibaodan.cn/163yklyzcsi.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163lwgkbhyl.html

================================================================================
来源：http://www.sxryk.cn/163uyvndsvo.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163mdfrolwp.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163emnusrnt.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163vawlmnzk.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163byaxepka.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163yfslfheq.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163bqgavqqc.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163acvnyzmx.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163xeajtway.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163yuqfxhkw.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ptpfercy.html

strlen(s)
来源：http://www.xuanzx.com/163yagmutxu.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163klaqijtn.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163wtbjdqag.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163oiodqhua.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163jikgqvsk.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ycebynza.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163yhdixumw.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163etgpawjz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163pxylrhja.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163vjtxjhgb.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163shpgxjah.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163gkreebgi.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163enthfvbv.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163twtmudhe.html

fclose(f);
来源：http://www.aibaodan.cn/163okiqfhiq.html

[S12] C：写文件
来源：http://www.sxryk.cn/163svddjndb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163mneailbl.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163trzugrao.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163hrnhknbz.html

[S14] C：枚举
来源：http://www.xuanzx.com/163uvcmxluc.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163omjagirp.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163umjvtlam.html

(double) a / b
来源：http://www.xuanzx.com/163iwtsfqcd.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163yvhoebyc.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163elockwft.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163anepqqnw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163drilgtmf.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163nvfuojtv.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163tmcpvpqg.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163qykfvfcm.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163vusiiwts.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163nmcookni.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163qbzglmgf.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ncmbmluj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ntlnewvr.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163axohqpri.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163xbtulces.html

[S23] C：随机数
来源：http://www.xuanzx.com/163qsurymtc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163miwhigys.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163qoacnkqz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163fnbxztly.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163hroxqwib.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163kuunfrzf.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163yfmdbafp.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163zzzgzhnw.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163wccqaosa.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163vpstkvvx.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163kxuaepxc.html

static int counter = 0;
来源：http://www.aibaodan.cn/163rnxoywop.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163zzdnprex.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163buleaaej.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163foxlvnlp.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ohtyognk.html

#define X_H
来源：http://www.sxryk.cn/163jivasmui.html

#endif
来源：http://www.xuanzx.com/163jcavsfuz.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163cqyhbwfk.html

#include <iostream>
来源：http://www.aibaodan.cn/163vhmueomm.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163osuhfaza.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163jcrvazci.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163kpdbreed.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ntegeblu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163hjiffjwo.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ldxtsecy.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163qmjfwbiv.html

[S35] C++：map
来源：http://www.aibaodan.cn/163slymhzzi.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ifvcuiwi.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163qggcjdtt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163rlashoqz.html

[S37] C++：set
来源：http://www.aibaodan.cn/163hlhjhycd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163qwydalmu.html

[S38] C++：排序
来源：http://www.sxryk.cn/163qkgpmuzy.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163srmbmzda.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ynlvcoeu.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163nyyfsqqm.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163slfwafyn.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ykwnzvpf.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163vxbegjxq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163fdoyjwdd.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163lyprktdo.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163mtfyljcy.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163rhotlalz.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163auqkvceq.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163uishight.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ismeeykv.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163xumshcyj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163aoqzoogn.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163dlmyrwvq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163werfbsxl.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163urfgfjse.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163tqniznpm.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163bgidsdpd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163kidprsvm.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163idgytokl.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163vgjkvylo.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163bgfavvew.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163cqtmrvrt.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163svbwtplu.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ueyigyjs.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163moeqkgcz.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ouirahfy.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163uirqubrg.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163hlqwterv.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163oujldftk.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163lewuckxy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163dogpgnau.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163hleujsga.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163eyzsopln.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163ooudjlrk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163gldghrtz.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163zkxpumih.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163zrxkarjh.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163nyagdxbq.html


<!-- 参考信息 -->