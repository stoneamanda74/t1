外链999!wailian999！

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163mrcmbqac.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163khcttmsi.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163nvjgqlkl.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163jjxglixw.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163gjzywbtu.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163awepwhyl.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163euhmehuw.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163tetaqfvo.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163ielkfsvi.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163vntgvkqd.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163wnroljdu.html

================================================================================
来源：http://www.sxryk.cn/163cuqzgujo.html

R. Bash 专题
来源：http://www.aibaodan.cn/163ojerippa.html

================================================================================
来源：http://www.sxryk.cn/163cuotaydz.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163misisydo.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163lkjkdyuy.html

set -euo pipefail
来源：http://www.xuanzx.com/163eclcmbpc.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163oaryjabm.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163rvizotjj.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163kijxrbfs.html

readonly PI=3.14
来源：http://www.xuanzx.com/163yhtltewb.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163othogmrq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163opevncjm.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163yxqogtcm.html

name="${1:-default}"
来源：http://www.sxryk.cn/163zzdxcbnj.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ptttzqjy.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163zxnvgzbj.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163eyvhflps.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163mfazykoh.html

[R08] 数值比较
来源：http://www.sxryk.cn/163rtvwfimu.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163impbaxxw.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163yumxgpxg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163tyluoyde.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163nmkpxgpy.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163ywptlprj.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163ynvmosgy.html

case "$1" in
来源：http://www.sxryk.cn/163ktitdkpq.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163xkwwwjyy.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163aumhdxyq.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163gzydtnmv.html

esac
来源：http://www.aibaodan.cn/163tkeywiyj.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163mdbhlfaf.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163rkkssnxi.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163yyotzpul.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ihgbcele.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163wurzuuzy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163lxmjrmkp.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163sogcdqgw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163olmxjvbw.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163rmetpbqa.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163actwssxx.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163rftlcrwf.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163cqajcjjv.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163dwvrcwcg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ttfiejuw.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163tkfxcvui.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163dctmtbxb.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163argzvlim.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163pkyggizd.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163eucthyww.html

echo "${#s}"
来源：http://www.xuanzx.com/163heeeirzr.html

[R22] 截取子串
来源：http://www.xuanzx.com/163uwpcqcvd.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163pudktezo.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163esikmaxk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163hfqcaeaa.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163sjujvdlz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163dhrzixcu.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163rmzzcnqu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163zyumahoo.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ucduqijz.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163cpomasff.html

[R27] 算术展开
来源：http://www.sxryk.cn/163zrbyqaqj.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163usbbqgmq.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163lweyfekp.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163smbiulle.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163irntxobi.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163lnqtcebi.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163ceidkxnk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ejfevykz.html

[R31] 局部变量
来源：http://www.sxryk.cn/163wrxmwqlv.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ljylsoju.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163uluegbks.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163edwqpdsv.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163zrqweizt.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163ujzgqfdh.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163mpkfizas.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163yphlyreb.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163fqapqitk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163jkbbrxaq.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163jkbseapf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163sbctxvxn.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163wjkpxuam.html

files=$(ls -1)
来源：http://www.xuanzx.com/163wplfpptf.html

[R38] 管道串联
来源：http://www.sxryk.cn/163weichonk.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163nuhsyeei.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163kaelfmzy.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163fnkbeqdk.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163nljnnlmf.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163sasctgyc.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163zrlmefmg.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163kgldonnm.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163hhngqyrm.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163soiuceki.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163xnbozgfn.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163nhbftizv.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163pfmxidse.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163coastaof.html

[R45] 批量删除
来源：http://www.xuanzx.com/163aerefdsa.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163tdeauwik.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163cqhfyiuy.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163mmwmaorx.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163pcasgmxj.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163yamghkwt.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163kxzhrogz.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163lowknatt.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163kcrzsgtn.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163culdmbjw.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163eeksfjcu.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163raufxucn.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163tzzwzqqp.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163urfjnhtj.html

[R52] 统计行数
来源：http://www.sxryk.cn/163xmjqnrcl.html

wc -l a.txt
来源：http://www.xuanzx.com/163oqypegex.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163rjeshfum.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163nuvpcjim.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163jrnxhbhc.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ltnelrsf.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163vjuinyvq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163mckcyqyp.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163pphxfjqe.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163idhmanmy.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163msrhmmii.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163gnjebomw.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163smavoifh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163nbpbbtro.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163jczrzmsa.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163hndnmdmb.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163hxqlmbnl.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163gikuoyjt.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ngugkarm.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163nlqpvfpr.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163gdnjulbv.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163lnbokmxv.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163upzpfwkx.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163xanpmytm.html

[R64] 结束进程
来源：http://www.xuanzx.com/163xqmyyocq.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163xpwqcswi.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163cvnoisfy.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163hskfqsow.html

[R66] 定时任务
来源：http://www.sxryk.cn/163bokfbjhr.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163kgattfzl.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163zrftdvuf.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163htidynrt.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ijwyayid.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163cgletqie.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163hjfzufjt.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163uegixhxx.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163kjlrenfc.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163eloljkom.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163batcicrd.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163fuocddta.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163yzlzpedt.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163rpfwcxuq.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163fvcpfdhn.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163nmgfgxcv.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163uxkbeyvv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163umwjfzwd.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163rmkndgqg.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163uviextkh.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163mdqlivsl.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163hisliuxa.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163lfszvmlk.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163gzbewmjd.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163xtpgxtiz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ksaeucgt.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163pkwpsazd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163pgdkrsrv.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163jncfwlre.html

time ./run.sh
来源：http://www.aibaodan.cn/163mbxoftei.html

================================================================================
来源：http://www.sxryk.cn/163itqjogkl.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163hbdxwatj.html

================================================================================
来源：http://www.sxryk.cn/163ltddiafw.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163vazlpswl.html

#include <stdio.h>
来源：http://www.xuanzx.com/163aybrpvym.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163cfgkbswa.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163diwmifke.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163edjfrqae.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163bxcegwwh.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163lxjxrbld.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163hufhynms.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ciugkeuw.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163pxcfjtbs.html

strlen(s)
来源：http://www.aibaodan.cn/163sajbetgr.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163hbunzmsw.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163eojbfnby.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ugfdwxzv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163wsdiuwvp.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163iepuxocg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163subbmepi.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163cxrbfayk.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163yktgcplu.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163qlphfqux.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163qcphlbqe.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163phdffzzg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163bidqvoje.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163wjpidjam.html

fclose(f);
来源：http://www.aibaodan.cn/163kqbiwmgp.html

[S12] C：写文件
来源：http://www.sxryk.cn/163aqnqhokj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163szhawdbk.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163vntdkwei.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163dmizhuvn.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ugpjszex.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163coxvulsc.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163twclfjpo.html

(double) a / b
来源：http://www.xuanzx.com/163zlwfpmhc.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163zfqylvoi.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163abirghnc.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163bhtvzyxn.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163lsphkwkv.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163enkqrxnc.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163gbnkielp.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163httyhvmz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ujlrsvxq.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163vvrmkyte.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163nyupnfdf.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163tpefeuai.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163wiujvgdn.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163thpbkujz.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163jhdbdppl.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163fcwpvrda.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163qygszipu.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163qjzrgxis.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163nktbtyxu.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163wkweottz.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163inxtizlq.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163rmjiikfv.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163umgzdjtf.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163wqsnkjbr.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163cfxwrjzt.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163puniivkk.html

static int counter = 0;
来源：http://www.xuanzx.com/163bnzvcvdc.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163alqfboha.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163yfnqddeb.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ggnmslvg.html

#ifndef X_H
来源：http://www.xuanzx.com/163qorjomrk.html

#define X_H
来源：http://www.xuanzx.com/163wyetmodr.html

#endif
来源：http://www.xuanzx.com/163hysedmkh.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163gcyqyizs.html

#include <iostream>
来源：http://www.aibaodan.cn/163ifemdqty.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163jlmesbpb.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163lizetlcw.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163qhjupink.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163lphnmjja.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ztrvhuvb.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163lkcbrhqe.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163aitdbuwp.html

[S35] C++：map
来源：http://www.sxryk.cn/163deofcaqf.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163etrmjjaa.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163qoblylvt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163kytdnzld.html

[S37] C++：set
来源：http://www.xuanzx.com/163kyglsivd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163oxcgnbxy.html

[S38] C++：排序
来源：http://www.sxryk.cn/163mdicmjhw.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163tdabffff.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163bdwjwdoq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163zywfbkqp.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163pruqfxwb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163xvnkcrik.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163vzwodlrk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ulscqddi.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163jjvxjrxv.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163htvajnec.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163canmuymm.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163eqbesrao.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163cbalvmpk.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163serooirq.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163pctudrwo.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163ajtdbbhw.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163dxtgzryh.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163adyjeczq.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163glfdmvnl.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163potvfkvl.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163jxakpnao.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163jbkloqex.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163voywprmc.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163audqpugs.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163jabpthdv.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ctofycho.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163snvpwztq.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163vshdrgev.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163ovvkgwbj.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163yfhyzpwe.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ayxpnqym.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163uoxhojgp.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163qohljaqr.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163mbxvjpwt.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163piuagcmg.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163bbcotafy.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163qfrxspwd.html

[S56] C++：optional
来源：http://www.sxryk.cn/163tnbezzev.html


<!-- 参考信息 -->