外链999!wailian999！

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163lzpazqaz.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163mwhpmuzk.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163cpxvcyjh.html

================================================================================
来源：http://www.xuanzx.com/163vcxnzksa.html

R. Bash 专题
来源：http://www.sxryk.cn/163jtctwkov.html

================================================================================
来源：http://www.xuanzx.com/163fqzhtdul.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163fnadpxjb.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163bradkzao.html

set -euo pipefail
来源：http://www.sxryk.cn/163sidbedsy.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163xxrcjqxi.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163aitfuqbw.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163xvyqjiif.html

readonly PI=3.14
来源：http://www.sxryk.cn/163mhtoeqef.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163jeaajwlj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163gspfqthc.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163jnglwpml.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163kuagxbov.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163lfkjkihk.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163yfyndyba.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163ruijtegm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163yrzfujxy.html

[R08] 数值比较
来源：http://www.xuanzx.com/163hmwcscrm.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163nlaiowdm.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163mpglsznl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163qxkknzvf.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163vyrmicrw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163ecrhytbl.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163xtsfvwjh.html

case "$1" in
来源：http://www.xuanzx.com/163sfebwzgt.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ulzwwxyr.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163enyaoigt.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163buwxojfc.html

esac
来源：http://www.aibaodan.cn/163xybzqhmf.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163gukemaot.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163dshzcezj.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163czkdmbfl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163wkrgvnse.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163lmarsqpy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163wjpnzovk.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163csraisye.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163aljdldwc.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163okiwoyly.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163zyrsokqm.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163qawksaiq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163jepyrqyp.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163tpmrxsus.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163pljyggfw.html

[R19] 数组长度
来源：http://www.xuanzx.com/163jouplpwq.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163wjylfrwe.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163akqocphk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ebsjoeqx.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163wscfxfdt.html

echo "${#s}"
来源：http://www.sxryk.cn/163nvkxvqhr.html

[R22] 截取子串
来源：http://www.sxryk.cn/163reawgxyj.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163oqhdomqt.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163crrtlfwr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163gbtiuspk.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163yrymlysf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163rqgjpozq.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163dqtdarur.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163pfkkayfc.html

[R26] 命令替换
来源：http://www.xuanzx.com/163sqrjrfjb.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163kzjvlmsr.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163woonqqod.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163tdutmrgi.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163sdpfoqgk.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163uatxdecn.html

[R29] 定义函数
来源：http://www.xuanzx.com/163xxymgovi.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163hxvccgda.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163oieviqet.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163wlhxobzf.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163kicyatkz.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163gvgotdnv.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163dmgasnfu.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163iwvmphky.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163mquajmas.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163lslhbbac.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163bwzsctuk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163rmwlrijj.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163jgctmtby.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163jwbmgyhf.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163olwmodqd.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163dkadxkyv.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163fnznycbp.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163nzcmkzwi.html

[R38] 管道串联
来源：http://www.xuanzx.com/163qnibmsjj.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163pbqkjcfs.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163lvqxzadh.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163vabaoqgz.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163smszffyq.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163oefsjzxd.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163fjrkblfb.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ntqqqpyw.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163cgojmxoa.html

wc -l < a.txt
来源：http://www.sxryk.cn/163zgorfaog.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163vnatdzhp.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163aiytuimq.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163wkwfejuf.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163zfkvskjt.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163tqkexdmp.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163dhujkdjg.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163tkbbrork.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163faxxliwt.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163dkdkyxnf.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163hvypxwxn.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163rqaorqqj.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163nbeyvpdp.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163eofvbcia.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163wwhjqexp.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163oaqlhxge.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163nfbwntfo.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163hnizghno.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163tqfrkdgo.html

[R52] 统计行数
来源：http://www.sxryk.cn/163kijgjaxm.html

wc -l a.txt
来源：http://www.xuanzx.com/163bhwvgxjt.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163liddoiwn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163hytaribh.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163quiczaqm.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163bdaucmkl.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163fndgtqso.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163bgbjfdmf.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163allbvffk.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163zdkeqbkw.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163mirlytzo.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163jdqirewf.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163eesaoldw.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163lqngplvz.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163rwzdbfaq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163bmsqrsqo.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163bmbgvbll.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163xyrogipg.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163davphkbo.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163wkvfrpmt.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163orduhwld.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163kgkfimud.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163mykoodgm.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163xfopyoor.html

[R64] 结束进程
来源：http://www.sxryk.cn/163vumvyqnc.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163nwqdbttr.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163tzqhueui.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163hacdelbu.html

[R66] 定时任务
来源：http://www.sxryk.cn/163qqmudstg.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163jgogwujg.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163amwboitq.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163wvcgccjw.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163wngxwkdx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163pdywbsmh.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163xcksqtyq.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163fprcoxti.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163wihskvvt.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163erthqsge.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163moukfzhc.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163xcnrngwa.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163iylmmpft.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163daehbgqc.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163bpkhgaah.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ilbhjltp.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163vlogtviv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163imhgpxsq.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163xmspstcr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163ggrdffvz.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163dlkxagzq.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ytdtietc.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163mtmjhter.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163nlyylppt.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163rhreamlf.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163fkvknmux.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163ifmppnyy.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163ceetkwqw.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163bdspdlxd.html

time ./run.sh
来源：http://www.aibaodan.cn/163lcvoyqow.html

================================================================================
来源：http://www.aibaodan.cn/163eryzjdla.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ghmtmmjp.html

================================================================================
来源：http://www.xuanzx.com/163gcgsbwvc.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163zqkdlknu.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163cxypdgcm.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163gtdmpoxb.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163pymnftiy.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163dfnwrsmf.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163pghejpbz.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163uuruyirc.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163yvdzcyeo.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163aezwefzj.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163bcabpddc.html

strlen(s)
来源：http://www.xuanzx.com/163ffgvioog.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163dxrxqgag.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163qyispegv.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163gfxkyvee.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163juvtwqwa.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163jfyaxjpd.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163kczkumky.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163mfuynuuk.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ewgzjksl.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163hpqbyagu.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163zwipnnya.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163fjiagjkn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163jcvcgyub.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163pnildcll.html

fclose(f);
来源：http://www.sxryk.cn/163zgqkszma.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163vmavacmj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163chpswxif.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163sshudicf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163axufsrzr.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163gcrhsfem.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163sfcjvfsl.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163gkildlam.html

(double) a / b
来源：http://www.sxryk.cn/163qdivzeya.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163smqpwnak.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163zksosroo.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163pfmbbjta.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163yxeiamet.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163gzbgzixo.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163axirduap.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163liabmvcq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163gtknwjat.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163rmuqihgy.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163wigfdsck.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163smhwjhop.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163fhjrwquu.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163jdubpmfx.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163zcibgerz.html

[S23] C：随机数
来源：http://www.sxryk.cn/163sfhzbxph.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163elxvqiui.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163suxrwcja.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163rdzrpjpw.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163rjbkfiez.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163dmtjpihy.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163fsnqpsxd.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163nkukrrbn.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163xcodlvlx.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163vcvtmuph.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163vvdjykdg.html

static int counter = 0;
来源：http://www.xuanzx.com/163gdbjrtjx.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163cdcjkudh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163fpyexfnq.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163lewlswxr.html

#ifndef X_H
来源：http://www.xuanzx.com/163xjxyufyg.html

#define X_H
来源：http://www.xuanzx.com/163aknfyrvk.html

#endif
来源：http://www.sxryk.cn/163zzabgnlu.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163jtazxujo.html

#include <iostream>
来源：http://www.xuanzx.com/163vwvdfmjd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163jmtncsab.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163gztxpdpk.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163ewrrhdoa.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163kajbcgtk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163oruvcxzx.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163viierwsh.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163izqddxzf.html

[S35] C++：map
来源：http://www.aibaodan.cn/163zwgipjto.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163hcjcgskr.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163gecyksqd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163steckzkv.html

[S37] C++：set
来源：http://www.xuanzx.com/163ipkfnzap.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163mcngjlxr.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163lsndewqd.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163vfczbgrf.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163jafkzlmp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163indgojlt.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163kmyknygd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163qhgfoetc.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163vonsldxt.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163zlmckexa.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ygydmmiy.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163qdnkimgx.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163envhtgnm.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163ztuckpvu.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163bbmbhxiw.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163wyvigmxf.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163clwuxmmi.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163rkzqfuqc.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ruswgeau.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163xaigbuas.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ubszofje.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163haqzijvd.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163gnoupjlf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163nbpgwzgq.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163iqazzrww.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163xochkjtq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163hptlzlkp.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163gpcngghv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163utnfyjmh.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163edszfdmg.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163aopeoaze.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163eykyixzm.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163nfxrqwbo.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163thhefqqi.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163rkjziudg.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163dkwbyiqo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163dxutnvyh.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163novfixys.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163xblsjfig.html

[S56] C++：optional
来源：http://www.sxryk.cn/163uzrudllz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163keezovag.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163hqgqvgdf.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ytgrrgpq.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163mrgeexio.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163kzfutzsy.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163abkppkfy.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163ypfpswoy.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163dblnbdnq.html


<!-- 参考信息 -->