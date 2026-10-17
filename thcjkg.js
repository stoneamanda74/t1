外链999!wailian999！

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163qelgjqln.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163rgewfsnw.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163yhdhkrmn.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163qvqrdjbp.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163ozxtxrar.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163mieqbzkz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163vdsvdfxs.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163zsexqtyh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163jnnypuev.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163mfvcaavt.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163vgkgxbrq.html

================================================================================
来源：http://www.xuanzx.com/163tuvnwhhg.html

R. Bash 专题
来源：http://www.sxryk.cn/163vpjfhgoe.html

================================================================================
来源：http://www.sxryk.cn/163cwefzfxd.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163tumpdlpr.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163chgdxnne.html

set -euo pipefail
来源：http://www.aibaodan.cn/163smcqdlma.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163gxjqozqa.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163mphthefp.html

[R03] 只读变量
来源：http://www.sxryk.cn/163rmerfhln.html

readonly PI=3.14
来源：http://www.sxryk.cn/163jhaiasca.html

[R04] 位置参数
来源：http://www.sxryk.cn/163scnupxcb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163tvkcrekp.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163fjokaldn.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163vuvzuijd.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163octknczw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ryeweqmm.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163puhgoxhh.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163mrhjodcf.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163usxnicml.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163eeogwsyd.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163wjmxpeky.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163fkdeajyf.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163sfmufhon.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163lqlsqehc.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163kruyatfp.html

case "$1" in
来源：http://www.aibaodan.cn/163nncfytej.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163scawqion.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163zvtcguis.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163ukagwaup.html

esac
来源：http://www.sxryk.cn/163hhfinzhg.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163yrnamaec.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163thafglsx.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163ouooodjv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163xgbpfdrs.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163abuplbcj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163sjvjlugj.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163qmiooxaf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163iquinwoy.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163maalxism.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163qdevkjzz.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163nxpkhmnt.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163dcuficnp.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ygrrdyqz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163whdkpebr.html

[R19] 数组长度
来源：http://www.xuanzx.com/163cemkhaqo.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163aebszdvc.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163esgujegu.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163hwftnkwc.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163kunzoapu.html

echo "${#s}"
来源：http://www.sxryk.cn/163zgxldfgf.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163rnstemdu.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163bytolneg.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163smjsajer.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163wbryaibj.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ymodnhhk.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163qvwklytq.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163nnsavkum.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163rrgzwacw.html

[R26] 命令替换
来源：http://www.sxryk.cn/163orvmgnoa.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163nppvnxzy.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163uextxnhb.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163dmxzhwjg.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ccpzhedj.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ejmzecac.html

[R29] 定义函数
来源：http://www.xuanzx.com/163geassmsj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163efnargbt.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163eareolbm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163psjcmppw.html

[R31] 局部变量
来源：http://www.sxryk.cn/163xtrcljcs.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163vvsohpmw.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163rusqsjiy.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163svavqzer.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ztenhabg.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163jchuuxtv.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163ikvjnxce.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163aaxqxion.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163mhbwsldi.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163wnyyhjhk.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163rpdtszzw.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163lzxmzymn.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163fltghowg.html

files=$(ls -1)
来源：http://www.sxryk.cn/163xsuwdngw.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163yuhlcggy.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163hzwtfrsb.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163wdpeoahb.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163oijwhozr.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163wmuppufu.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163goqlmqmp.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163szzorkrs.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163afprtxin.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163tqmrygnh.html

wc -l < a.txt
来源：http://www.sxryk.cn/163cqinayqi.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163tjrcjdpi.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163mcxgazac.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163ghfgkyhj.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163wyfxbbni.html

[R45] 批量删除
来源：http://www.xuanzx.com/163ogtpfrvo.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163xnulzexc.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163wprxbkfh.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163aecpwecj.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163couxndtc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163fkjkkfsg.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163qvbojbas.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163pddxjwhf.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163wqfaakuq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ybwxrikw.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163tzjlcikv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163oenwaxuq.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163gjepbmwo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163tupxnksz.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163shlhbgsv.html

wc -l a.txt
来源：http://www.aibaodan.cn/163vljtcfet.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163iqpoudyj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163mqwlpmqu.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163baladfcl.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163pzkhgtwh.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ldgvdlnk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163hjgyvbuf.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163rtbbtnzv.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163slxfqgpw.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163oypgaviz.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163lspcccer.html

[R58] 下载文件
来源：http://www.sxryk.cn/163kievvvhi.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163gathxokc.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163iyxwsvib.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163vkoxqvjg.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163oyxhksrf.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163gathcdpm.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163gpjxqjvm.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163mlijnsow.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ownhymez.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163hbjmwpkf.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163svjzalgx.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ugakjjkr.html

[R64] 结束进程
来源：http://www.xuanzx.com/163oedyuahv.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163kvplbhrw.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163hiqywtnw.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163lrubufjg.html

[R66] 定时任务
来源：http://www.xuanzx.com/163jvbkcrjg.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163jflgbrbp.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163deiuuubk.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163impbfvqr.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163dxazolku.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163mmgymndj.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163lesamgqx.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163kfdsiuqh.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163wnafcgsi.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163znngyhqd.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163ccnmrvwz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163vioqjrsj.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163sljyisxd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163aqpxeauj.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163gxeeogqy.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163mebamyqv.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ibhlrfee.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163cnsramdb.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163tqoglkmj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163csrizhsv.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163pomjbnqy.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163nnfqbfva.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163ngdownel.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163gcprelex.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163mquqohfd.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163yzimxqig.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163qwacnthq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163lweqyvnv.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163gjsamgrz.html

time ./run.sh
来源：http://www.xuanzx.com/163iqwegauq.html

================================================================================
来源：http://www.xuanzx.com/163uuhhxpkk.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163cvovfmov.html

================================================================================
来源：http://www.sxryk.cn/163mknbujtk.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163rhqjjjut.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163oerqsfqq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163tauqovug.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163tsfupfgf.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163zwlzbbuo.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163dorkezhc.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163sbejvwsa.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163uonaihqt.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163bcbyyrpb.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163kxtxjyug.html

strlen(s)
来源：http://www.sxryk.cn/163jzofpucn.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163fyxqzvjk.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163oorjxhhq.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163clnoliaw.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163rrxyiksg.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163ltbvfcwd.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163fybvyhiu.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163actpkfxd.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163anaplaqb.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163meulidtt.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163htunocuv.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163pplpinrp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163irxsermp.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163anosyorj.html

fclose(f);
来源：http://www.aibaodan.cn/163sahvtbzo.html

[S12] C：写文件
来源：http://www.xuanzx.com/163twfdocmv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163qjktjzho.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ijrrjpqy.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163kwdmfnfc.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163mstkbdgn.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163gwueqhoz.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163xiixkzna.html

(double) a / b
来源：http://www.xuanzx.com/163kwxpvpww.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163chofslgb.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163qcnfhygj.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ipsdoryn.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163qfvyqjwy.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163aecoygic.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163xcyudkqn.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163vpubpfvr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163azinqogf.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163mwfeqltt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rycbkccf.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163hmewbynu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163nakdokks.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163fbdbcopn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163cojwyagh.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163kgujiuqe.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163gppuzwzi.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163sovuttnx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163kcohoyxr.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163qvigfezd.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163gvzcwljn.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163kktymqng.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163aiuxhlxo.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163qichhwiz.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163oqbbprov.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163bdjtttob.html

static int counter = 0;
来源：http://www.sxryk.cn/163kkqqgmwq.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163nayjtvpr.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163mhusgjvv.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163zppozkwh.html

#ifndef X_H
来源：http://www.xuanzx.com/163pffaxaxp.html

#define X_H
来源：http://www.aibaodan.cn/163umtwkjpz.html

#endif
来源：http://www.aibaodan.cn/163zmebagsx.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163porehbdm.html

#include <iostream>
来源：http://www.sxryk.cn/163oxradfii.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163hdcvtfxa.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ckmaswof.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163awizsfqq.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163lmladoeh.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163usvymvvg.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163fcuhhrak.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163pqvddbgx.html

[S35] C++：map
来源：http://www.xuanzx.com/163zzsrcsdp.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163xislnjqu.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163pimzuuto.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xwjdjjal.html

[S37] C++：set
来源：http://www.aibaodan.cn/163mmsjbvob.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163vzxwkynx.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ebijzrqv.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163svkfityc.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163blikorhb.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163trwbepwf.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163abetmmbs.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163zytxbecd.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163dbfgeird.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163yupzuybz.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163bvabrhdx.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163lebhfanf.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163jybhwgcx.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163veupaprg.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163vxdsymhl.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ypervopa.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163kfphrgzb.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163zokvtcfe.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163vkpaypfs.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163zikopyqg.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163fxhrvycy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163muaxlozv.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163oxhegokl.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163qduborec.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163cimfpgjo.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163slvxmebq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163rbmatlrb.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163bkwsroti.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163viflchxr.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163vbzammwo.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163cycgkgda.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163vqmvrqpe.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163xbodibfk.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163rnhohgkt.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163iblnydqy.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163klisebnu.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163twwmydzi.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163npgotrzy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163deuzbgxd.html

[S56] C++：optional
来源：http://www.sxryk.cn/163vtmburzx.html


<!-- 参考信息 -->