外链999!wailian999！

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163prriggjq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163znziggpr.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163rfkptohe.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163ltewooqh.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163dsepjrzr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163iqfxdjkh.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163psuusptl.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163clskzhfd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163cdkouiqk.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163dljjfwdy.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163dzigvbpw.html

================================================================================
来源：http://www.sxryk.cn/163xdggrsje.html

R. Bash 专题
来源：http://www.aibaodan.cn/163sxznwlgb.html

================================================================================
来源：http://www.sxryk.cn/163hmssjaxe.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163ronvwecw.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163xqspzevk.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ntryegyx.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163jtnlgdfn.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163dnyjbhpl.html

[R03] 只读变量
来源：http://www.xuanzx.com/163vtemcnns.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163omllpjpu.html

[R04] 位置参数
来源：http://www.sxryk.cn/163hvuahrlw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163irfnellm.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163vujfeutl.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163yznmnfzv.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163cdmlqlzj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163upajxbgv.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163fmusmiaz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163dkzjfrdn.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163gdyvikjc.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163ukxugcht.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163mhyeoedd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163psvvbsxz.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163hxfjzgsh.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163cecwpmuh.html

[R11] case 多分支
来源：http://www.xuanzx.com/163etlhiatk.html

case "$1" in
来源：http://www.sxryk.cn/163jhiyvsdo.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163zfgnscov.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163pgjcgtak.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163wkqeuqwd.html

esac
来源：http://www.sxryk.cn/163gbubxvfv.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163oejthcwl.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163sezmpyrw.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163whudzoee.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ttpbzxbi.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ybgprqbp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163tzrociwc.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163hevghgfx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163dxgfdnhe.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163lwybqart.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163qosuojaw.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163byedjkkw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163tvwcxemt.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163aljauqwy.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163nzyfkdcj.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163vjqzvefp.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163ahirffih.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163nxxxlajv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163lycgsxuq.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163jbaecrtz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163wudfquaw.html

[R22] 截取子串
来源：http://www.xuanzx.com/163fztgilwy.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163gmgpgvee.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163lsgmcybd.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163djqcjlyd.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163rwcgvpnw.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163remwanqn.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163cotcpmvq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163iuwfxxzq.html

[R26] 命令替换
来源：http://www.sxryk.cn/163irnlotui.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163erlnastk.html

[R27] 算术展开
来源：http://www.sxryk.cn/163iacppale.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ucpddgjq.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163swynwjwf.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163iixcijsb.html

[R29] 定义函数
来源：http://www.sxryk.cn/163psseulkc.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ixtjzjip.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163wqbtjcss.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163lhncoolb.html

[R31] 局部变量
来源：http://www.xuanzx.com/163jivykiiy.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ktsbtkbp.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163zttvppzo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163mnysfmni.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163vvrvyyth.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ymejxong.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163oyxtzrnb.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163joengqin.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163vadcmbus.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163dwdidmkf.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163nsxyrkan.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163nsnbxjlm.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163qbgeidym.html

files=$(ls -1)
来源：http://www.xuanzx.com/163nswagesc.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163hsvylxum.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163oeximdej.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163xisongey.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163hobhbqad.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163fwiwvsjz.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163thxlcodo.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163nxhqwian.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163gwmusywj.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163gnzfwmdv.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163mubmlovo.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163qhnvorsi.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163hfaxslje.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163jzozfkpy.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163wcwinewb.html

[R45] 批量删除
来源：http://www.sxryk.cn/163shksgbkb.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163bikgxvox.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163pnderaxy.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163vyrgwtaw.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163hgjeqfnw.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163hbbseiml.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163bhuhdqmq.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163azuisort.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163dlueepbi.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163oranveoj.html

[R50] awk 求和
来源：http://www.sxryk.cn/163zlejcact.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163njjzelvb.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163pvcporsf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163wmpwlavm.html

[R52] 统计行数
来源：http://www.sxryk.cn/163cizfimyx.html

wc -l a.txt
来源：http://www.xuanzx.com/163eufvaotn.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163wcncootk.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163qvsmgkde.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163qdscikrr.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163kkydtlmt.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163gjupzois.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163aedxddlr.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163zhxtwgtm.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163krffawck.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163xstlzigi.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163mkvapqvj.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ggsgpzvx.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163voexflqf.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163nxqfchmi.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163wjklmnnr.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163dkwwvtgu.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163mltxdcjj.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163snysyosr.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163zhixrkts.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163riqkvcxz.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163gscjgppo.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163xdnhtnhg.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163ghzxinyr.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163cpupwtnw.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163htnovmgy.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163wuqpgvcf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163gnkjuktk.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163rwawetdi.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163eiemmquz.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163bgzcinsk.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163cbhnsytu.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163czhdfkkj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ljyixeaw.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163sosomdlk.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163lgnqwsrk.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163rmepghkz.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163lpoylfcr.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163vgbjavyd.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ngdaupgy.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163pcxxhnlp.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163ezbpoztw.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163hfoyzqdw.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ierrlxij.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163sbhwiukw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163nscelmwp.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163qkyovzxs.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163silzzyhh.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163yarwzwfd.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163uoddhldf.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163krfjpjtx.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163lwgzpfiy.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163ysfpoele.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163nczzvirv.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163sgymjrdp.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163mcnympho.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163droptdyn.html

time ./run.sh
来源：http://www.xuanzx.com/163mxplhkfw.html

================================================================================
来源：http://www.xuanzx.com/163lhxjmvbd.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163utrkitsf.html

================================================================================
来源：http://www.aibaodan.cn/163zehvwelx.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163wvqnjrcb.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163vfpwlvda.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163dykxbevb.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163nfmkouav.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163nriqjvtz.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163logmsyno.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163xuoekpde.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163ewrwjeqp.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163mpzlntaz.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163iueudjgz.html

strlen(s)
来源：http://www.aibaodan.cn/163tlhlwdwj.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163dxvbbwqi.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163ambifswf.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163pnfsarct.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163thqthtny.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163mghxkflv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163ilfheepl.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163dmfsarnf.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ryizmdgd.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ygdsdgct.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163ijxuwotj.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163abelyjdj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163hnpzidju.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163tajhnfcy.html

fclose(f);
来源：http://www.aibaodan.cn/163ucyxrvpo.html

[S12] C：写文件
来源：http://www.sxryk.cn/163svfdelcq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163jqcunmkt.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163ehedsnbs.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163ypcakfes.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163rgvuhcec.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163rfshsjqj.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163dpwiggxe.html

(double) a / b
来源：http://www.aibaodan.cn/163dltmsgwl.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163dyyqnnah.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163exswlwhj.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163vlvlvdep.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163usihjahc.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163twwvsech.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163swybiggf.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163nvopaskz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163jthwyaew.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163mwgwccpm.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163mssndaph.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163yjeaztle.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ggtdoimb.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ldqhnpew.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163llylgiio.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163khkrvpcx.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163itcvclgo.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163owllwrkw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163olgavenc.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163trsuiuwa.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163nsedrvak.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163yjgxvavq.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163gziofuqc.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163vkggmgox.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163xjmcvaee.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ipdxjixe.html

static int counter = 0;
来源：http://www.aibaodan.cn/163fubeswuj.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163tjbtzotb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ymcwlxom.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163wsjbukzt.html

#ifndef X_H
来源：http://www.aibaodan.cn/163iittveyv.html

#define X_H
来源：http://www.aibaodan.cn/163ltfeipnn.html

#endif
来源：http://www.aibaodan.cn/163ymhflvzk.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163jtyaexxv.html

#include <iostream>
来源：http://www.aibaodan.cn/163zwhetula.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163pgnqjvnp.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163pjfcbqzr.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163dmdtljje.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163wtxqbiuq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163xoonrnee.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163iwdzqvuf.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163akheizmj.html

[S35] C++：map
来源：http://www.xuanzx.com/163znphymhq.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163xangsnnc.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163zsvoxplf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163xwjwivgu.html

[S37] C++：set
来源：http://www.sxryk.cn/163bsuynimn.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163qgecjagz.html

[S38] C++：排序
来源：http://www.sxryk.cn/163pixlmcmu.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163mqkawaub.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ugmnuclk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163rjpvhawm.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163rpionkbx.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163xotojupl.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163uizzzmxt.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163gftzhdmz.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163wrvizelb.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163zqvgztle.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ttahivbe.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163hdjiuzvr.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ljafrory.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163naddgfbd.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163pqrrhjtu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163wcmzcmol.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163xbwqrwfr.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163fizwrliu.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163bnbxijkk.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163jlorfpas.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163hsxehefl.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163lestbzhe.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163lfckkgbf.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163rynjhndd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163gaodegyo.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163rstbmtsi.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163hmmgxkrk.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163caropnfu.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163vaejkyil.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163kavousjk.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163ecawitpn.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ytdcjlyw.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163tuqlazkk.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163apechwpy.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163uxdrdkpw.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163dqdaphbd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163bnjyztum.html

[S56] C++：optional
来源：http://www.xuanzx.com/163knceeasm.html


<!-- 参考信息 -->