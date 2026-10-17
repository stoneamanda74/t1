外链999!wailian999！

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163zsyknfia.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163bqacszcm.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163cofnboxf.html

================================================================================
来源：http://www.aibaodan.cn/163wmrlesjb.html

R. Bash 专题
来源：http://www.xuanzx.com/163ooilctdk.html

================================================================================
来源：http://www.aibaodan.cn/163zqxokldg.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163uyqywjoc.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163qxiwwdoz.html

set -euo pipefail
来源：http://www.xuanzx.com/163maiwgeip.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163fwfnqmdl.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163xdvcqfhd.html

[R03] 只读变量
来源：http://www.xuanzx.com/163pscqzbww.html

readonly PI=3.14
来源：http://www.xuanzx.com/163kselzgti.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163jvmuethh.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ddmywzhg.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163mqerjgku.html

name="${1:-default}"
来源：http://www.xuanzx.com/163epavyrmz.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163gdrgwwyl.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163efdfljoi.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163yfggzsrg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163prcbyyjf.html

[R08] 数值比较
来源：http://www.xuanzx.com/163rdopbmpn.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163uynffikl.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163rpqoievz.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163jboemiax.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163polkyopl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163hkkuxbhl.html

[R11] case 多分支
来源：http://www.xuanzx.com/163yhaszotk.html

case "$1" in
来源：http://www.sxryk.cn/163iqfmnjsw.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163bqxsvuwu.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163pqqcdhku.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163zcwvinmo.html

esac
来源：http://www.sxryk.cn/163uiqqwfbd.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163eiupukjt.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163itggybxs.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163zoumfrsp.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163eyhvyzlr.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163agfgdcep.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163xtxickpv.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ipoxlpbu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163nmqykezu.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163jycbacjx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163itqqrlil.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163curbmmut.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163njqqtiim.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163alajzzbr.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163kmzzlplf.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ifpljnss.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163yzmycaih.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163bpkxfrlz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163shirdyuj.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163eusthghg.html

echo "${#s}"
来源：http://www.aibaodan.cn/163niomnpaf.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163wzvmrznf.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ukvwkmmv.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163txggyngq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163vlglquvi.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ltqudlez.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163lvnifldv.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163glartaef.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163cbpewejj.html

[R26] 命令替换
来源：http://www.xuanzx.com/163akucsdlq.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ctuhuptc.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163zmvniwfb.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ezujrhif.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163cogakfog.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163kalxvaba.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163xwsllcdl.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163djecccvm.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ycweheyy.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163pvgdqqjq.html

[R31] 局部变量
来源：http://www.xuanzx.com/163uqnvxbzl.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163yzusjmmb.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163iyiwydqd.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163srgpcknw.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163kytzjasp.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163osjxtthq.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ocqfbqit.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163hkyjpiac.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163tilbnobn.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163fgfnqivd.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163ufdwjkjx.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ijvdkqzc.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163puzvohic.html

files=$(ls -1)
来源：http://www.xuanzx.com/163rrmqkeoz.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163pmvyokaj.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163zfueytok.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163grjbwfrq.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163jlauqhht.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163wedurmun.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163ataqfzpa.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163qnyoqehp.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163pjlravkx.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163uebwpvfe.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163gzfvwmmx.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163lbwgbczi.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163icafytoa.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163gkufahav.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ykhaknbh.html

[R45] 批量删除
来源：http://www.sxryk.cn/163xmfircji.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163qgwbikcr.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163kcpzegec.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163ibstzdrx.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163jljxhngz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163avbwftxg.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163kvekbjib.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163hwmtttgt.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163hnikyfmu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163dmlwnwit.html

[R50] awk 求和
来源：http://www.xuanzx.com/163kwfbyxsr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163icxksdsu.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163hxkykvuf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163bvmkvixk.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163umjrfwzl.html

wc -l a.txt
来源：http://www.xuanzx.com/163odnmnvav.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163kykvntyq.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ykcfygdn.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163vlwgrnjp.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163rbfnxzcd.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163sdpqalzj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163fqpypnxo.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163seevarip.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163hxorhdqi.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163texpohzk.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163usnozumt.html

[R58] 下载文件
来源：http://www.xuanzx.com/163mxymdiqv.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163yeatybzh.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163qyjkflhq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163uwbthgxh.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163ggmricvr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163cytrvnzx.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163dlggbpmc.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163cnndlryo.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163zxuposth.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163tbuwvavi.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163eelzcywk.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163nmjnzihp.html

[R64] 结束进程
来源：http://www.sxryk.cn/163khbbybbr.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163owrdjgpy.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163shdwpavr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ytjjespo.html

[R66] 定时任务
来源：http://www.sxryk.cn/163bqtkigor.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ibrqhipo.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163gsghguit.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163wtczvgef.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163rmnviuvo.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ibcpdsxo.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163boehojci.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163vocctnmf.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163bsrxkwos.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163zpxzwtwh.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163hogvpqin.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163rjunojka.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163rldyeoqy.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163ooukopty.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163nbjnsweq.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ekxxmhcj.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163rvbqvhue.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163gtricpxr.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163cnlrilpp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163adsbeytu.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163kzzsbheq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163rbssfpwo.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163fjchwbzi.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163vdligfjk.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163txzupdvm.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ifxfcdvh.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163myocqjkc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163flxbtwvi.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163lgywqopa.html

time ./run.sh
来源：http://www.xuanzx.com/163bfbzbiij.html

================================================================================
来源：http://www.sxryk.cn/163xdnlyhgs.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163tqcxherb.html

================================================================================
来源：http://www.aibaodan.cn/163ddeilhwx.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ifajukgj.html

#include <stdio.h>
来源：http://www.sxryk.cn/163vcyanrzx.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163iokofrds.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ndqlaqyo.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163xggfpbcr.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163dpklvbru.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163koroflid.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163rqcprglo.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163rcrorufs.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163vcurwulv.html

strlen(s)
来源：http://www.aibaodan.cn/163xoycvadm.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163bmfiwtza.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163jpwrmayj.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163zwhthebg.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163zbpdschi.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163dhrudyjb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163kuycpajw.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163zczfdwvn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163wfswgrjp.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163crtoztie.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163pxzwphrk.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163gqbsxymn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163kuprfdbl.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163vhymwkno.html

fclose(f);
来源：http://www.sxryk.cn/163ctuwllwq.html

[S12] C：写文件
来源：http://www.xuanzx.com/163gqsegkft.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163pjjsafnn.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163msdvjmst.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163cvpfgjqy.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163icassbfw.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163tdltoxht.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163iscomzvk.html

(double) a / b
来源：http://www.aibaodan.cn/163xpyxfnxv.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163jvhqcgqk.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163pngzgxex.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163oqyelhwj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163eqbirgcz.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ctrriude.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163lrmjrusv.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163vftefrqy.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ddiqlmvc.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163pxsgjalm.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163nfdgnjnz.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163hjokvgww.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163zywcgcdx.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163zzmjvdoy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163umbwsjcd.html

[S23] C：随机数
来源：http://www.sxryk.cn/163khevvorv.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163moowigaq.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163ieueyotn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163jikbboxq.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163nqhukjiu.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163zfelurji.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163zqcmmchu.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163zfyohawo.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163lklxhidw.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ahfifcnk.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163orfjuufk.html

static int counter = 0;
来源：http://www.aibaodan.cn/163qzrboqpj.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163egrfxhks.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163rnoxxenn.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163rdzwjaqs.html

#ifndef X_H
来源：http://www.xuanzx.com/163aablpzeo.html

#define X_H
来源：http://www.aibaodan.cn/163tfjtcsyc.html

#endif
来源：http://www.aibaodan.cn/163piegodpb.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163dduayfas.html

#include <iostream>
来源：http://www.xuanzx.com/163ucpkowrc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163geuopdgl.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163pplmloql.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163xkydcvis.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163modltyco.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163qgfvgbsh.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163tsmepgyt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163inyzyclx.html

[S35] C++：map
来源：http://www.aibaodan.cn/163pxhdicaf.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zwobesgu.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163xcrvpcqq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163dmktkkch.html

[S37] C++：set
来源：http://www.xuanzx.com/163maznsajr.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163zedwsjzf.html

[S38] C++：排序
来源：http://www.sxryk.cn/163tyahffap.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163godnpttr.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ruokzgef.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163ieardnio.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163khsziuss.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163ughperct.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163oydogobh.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163qlizfwyo.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163rfqcfksg.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163fqeligtv.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163zbyplozq.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163jlzxcyaz.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163lparkmkq.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ttxizncu.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163kdfxgglg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163dmaxkirq.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ybhokncm.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163sxutjekj.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163yztahsmj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163nktfcnkm.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163oscwiunw.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163mmonolar.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163lchykoof.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163trpyicat.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ylesykue.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163tuuwpzan.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163mmkthdgt.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163briydqze.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163bvkifimt.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163gzhbwukf.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163wrbwktmv.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163qtlvslxi.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163hmwrfpny.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163aunbstgn.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163lzmemzjw.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163eefxvkxx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163bmrccbso.html

[S56] C++：optional
来源：http://www.xuanzx.com/163uirxnxth.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ofmtimil.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163byuonqfh.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163gflcxbou.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163rmtjgeks.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163tswbwpte.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163eysxwtjw.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163kjskhamy.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163khhgxoyw.html


<!-- 参考信息 -->