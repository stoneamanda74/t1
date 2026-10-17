外链999!wailian999！

R. Bash 专题
来源：http://www.sxryk.cn/163xaojjpjf.html

================================================================================
来源：http://www.xuanzx.com/163ivselppi.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163bbxqqfbp.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163svdeepoo.html

set -euo pipefail
来源：http://www.sxryk.cn/163nnsmnuyx.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163arlkmlsh.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163reawkfxr.html

[R03] 只读变量
来源：http://www.xuanzx.com/163xswychyc.html

readonly PI=3.14
来源：http://www.sxryk.cn/163pajujufs.html

[R04] 位置参数
来源：http://www.sxryk.cn/163lqvmfuuz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163fchnjqwg.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163dodjzgbf.html

name="${1:-default}"
来源：http://www.xuanzx.com/163zovzfwmr.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163qvhukfwf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163grozpowe.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163vpjtkvnt.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163dkbqrcci.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163dtxmulyq.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163dadjdakz.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163lycxaxct.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163xayxzyai.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163hjxbuwmw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163frgjtrkf.html

[R11] case 多分支
来源：http://www.sxryk.cn/163kreukaft.html

case "$1" in
来源：http://www.xuanzx.com/163cypophci.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163tcougohh.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163mdkxitje.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163immdzpgj.html

esac
来源：http://www.aibaodan.cn/163tacrhndq.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163izwedkns.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163fqfbhanl.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163qbfyxaho.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163usbybkug.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163ehbndfbu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163oehrfobr.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163swjjkvbi.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163dskgsapv.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163vaewecsy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163gshlliox.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163cdzpgtaa.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ciiruerr.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163vbilmjbc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ijccccti.html

[R19] 数组长度
来源：http://www.xuanzx.com/163uonrrwtf.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163uyotoyqu.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163shvygksv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163exsgnrkc.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163hbydkiss.html

echo "${#s}"
来源：http://www.xuanzx.com/163qmdcajww.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163gciyxcrm.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163cxwtanno.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163qfcgkyyb.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163cfwhdjdl.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163jbfyowtc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163flpzfvsu.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163mecvothh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163occyjill.html

[R26] 命令替换
来源：http://www.xuanzx.com/163agaqbcws.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163uuwbprxx.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163tynkfjzh.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163vrvaybab.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163mlrjubhu.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163fyshevwd.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163yxebotgy.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163sdspafui.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163hzvvjzlf.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163lnyarlmu.html

[R31] 局部变量
来源：http://www.sxryk.cn/163qpeqhfxe.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163bhztgdrn.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163halfwrkk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163qlvnpuvc.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163zjkchslf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163gxnipscr.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ubsvruwz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163twvxmqlm.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163shiwzwmq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163mahzpevh.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163hjpvwejl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163nvlkfdos.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163tqreoecz.html

files=$(ls -1)
来源：http://www.sxryk.cn/163towdkwmz.html

[R38] 管道串联
来源：http://www.xuanzx.com/163swzygqku.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163kaorcfxq.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163vxxsobsw.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163xzlisbjv.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163ctzgnktf.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163kdoeuegl.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163rxfoaavz.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163uaybcrxu.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163czchfsld.html

wc -l < a.txt
来源：http://www.xuanzx.com/163dmoycqum.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163rykparns.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163vxvmgrsf.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163whmdoqbp.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ebpshlsv.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163fvwcjdfp.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163dukpovkq.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163rjuankrx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163akcihnal.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163iarhmjvh.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163gvujrgbb.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163vslqsqpy.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163oysbpozb.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163urwkcewd.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163lzdjfzir.html

[R50] awk 求和
来源：http://www.sxryk.cn/163mcpwgbyg.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163trlwkopl.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163cqekjbkk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163mbboywef.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163kdkpeozu.html

wc -l a.txt
来源：http://www.sxryk.cn/163uvbxcfqp.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163afmkbgxz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163junzrwvm.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163nefeajub.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163njivistv.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163kkfbwxbw.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163fehxbhnl.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163kpcybzhw.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163pzjatojj.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163gjsvdwgy.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163lfipconl.html

[R58] 下载文件
来源：http://www.sxryk.cn/163jpigwswg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163lokpsmck.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163btbnpgzi.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163adyndeqp.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163gensmrbi.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163uznhpiad.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163tmrzaaeo.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163wqiigrgg.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163jxwzghyh.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163prvpybxn.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163ilhlhmjd.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163qixxkekg.html

[R64] 结束进程
来源：http://www.xuanzx.com/163tcpxtsdn.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163euxspacf.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163cdkixfoa.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ttahjcka.html

[R66] 定时任务
来源：http://www.xuanzx.com/163znrculjo.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163nocbhlqm.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163howdpxyf.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163iuogrnup.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163owsyxibs.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163nummnovg.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163mpvfhdcg.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163prguvclc.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163tddtruzk.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163uzfgfaoq.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163zysqbwxe.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163lutqkdre.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163ytlpzika.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163mwhlnbti.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163uxqkuihy.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163lqinhxym.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163zkjdephm.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ibalulkm.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163jujbusbh.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163kswumfnv.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163zzlpshqb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163exexrupw.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ghnhbinj.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163krefbjon.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163kxpeznma.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163hjjnxsru.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163czctguai.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163ogssgdqe.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163rrppigft.html

time ./run.sh
来源：http://www.xuanzx.com/163kypbtwqi.html

================================================================================
来源：http://www.sxryk.cn/163gzaoedfk.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163draxmrlj.html

================================================================================
来源：http://www.sxryk.cn/163dqdbrbfg.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ubhrnhmq.html

#include <stdio.h>
来源：http://www.xuanzx.com/163czjcqxuv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163lddgucxf.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163sbwafewz.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163bycetouz.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163hhgjuzkx.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163lgcezhcd.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163vmhdtvuy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163wqivecnh.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163iotvwfgd.html

strlen(s)
来源：http://www.sxryk.cn/163wfcmcmmt.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163ocnzgkao.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163abigtbmp.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163wtgfnlae.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163jytylqaq.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163dzmyfpym.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163tpvikrnl.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163fuwhaokk.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163wyvawihe.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163nsbctmlj.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163mqolvyqr.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163onrfftzm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163hnnguxhy.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163vsoilglq.html

fclose(f);
来源：http://www.sxryk.cn/163gwislznn.html

[S12] C：写文件
来源：http://www.sxryk.cn/163xjrlqtvz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163jucmekvg.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163vtavcmyq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163vuojsrdt.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163qshxktsz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163qoqzapoz.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163xeodbqha.html

(double) a / b
来源：http://www.sxryk.cn/163ngeejrph.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163mrlwtawj.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163pevctawt.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163czpemtwy.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163yfhycraa.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ifeciyqj.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163dpilwyae.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163rtmoonaz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163joxoyuhm.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163wtuuiwmo.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163tlyubhhz.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163cbuwzint.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163dmnthbdq.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163bpqxfjrm.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163bkzeoaex.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163lcesxohq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ryfgdncu.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163eqwccomf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163cjtgvvps.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163hjxidjqw.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163mmqsiiox.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163xnxenauh.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163hstytgjt.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ymvhjeyr.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163xubwytrw.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163tmnannqm.html

static int counter = 0;
来源：http://www.sxryk.cn/163jbbitvlt.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163azqgdjms.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163cexodwrs.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163tkknudma.html

#ifndef X_H
来源：http://www.xuanzx.com/163wsowyrxw.html

#define X_H
来源：http://www.aibaodan.cn/163xybemrsv.html

#endif
来源：http://www.aibaodan.cn/163bhioyuje.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163zieqcftw.html

#include <iostream>
来源：http://www.xuanzx.com/163ledbrkrl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163uplxdiri.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ujteiafc.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163blwtvias.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ccuootbk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ofmoqkqy.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163swaknlxp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ykjsihol.html

[S35] C++：map
来源：http://www.aibaodan.cn/163fqcoplla.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163fjiqcams.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163wmrehcgb.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ngsvccos.html

[S37] C++：set
来源：http://www.sxryk.cn/163kmhwrjex.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163odsmmqif.html

[S38] C++：排序
来源：http://www.sxryk.cn/163maatdtov.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163qaafjgds.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163dkfvvuvq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163bpyfgslb.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163frsbmpms.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163tnviqwzb.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163veuooaod.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163cpgmoucf.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163zgoasozf.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163cjqipubu.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163prkmsdst.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163sokxoefp.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163ycmdawmp.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163usoyrbom.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163jbtnsuhc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163zjmdptsc.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163fuqtnsda.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163xspkyqhn.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ogisqavc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163xerljxar.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163rknnotnj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163wocaeqbj.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163yaaemrlm.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163hasnwagg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163jrgkkmek.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ikkyvxjq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163zvqfvycb.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163drzqerpk.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163wspkgjig.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163dvfqnlvj.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163xbzguzxp.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163fadecvjo.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163zosaevgh.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163gkiagwvf.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163scqmddsj.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163kjawovfi.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163xnevubcj.html

[S56] C++：optional
来源：http://www.sxryk.cn/163cgmkzqem.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163vuokostd.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163gjxztape.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163dattrwtb.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163wzapsdan.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163zhjrwkyo.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163urgingph.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163sojkjjia.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163uyhzrymj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163aeerwccj.html

================================================================================
来源：http://www.sxryk.cn/163eoxobdxw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ojtykbro.html

================================================================================
来源：http://www.sxryk.cn/163oplfgrdz.html


<!-- 参考信息 -->