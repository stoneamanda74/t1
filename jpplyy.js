外链999!wailian999！

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ruewuflh.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163kawxtwrj.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163mdmraiqz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163mblvpwlb.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163kuadjxdy.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163nsonrauc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163libxacuq.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163oqlgouuo.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163bijuegll.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163djkdigou.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163zquzmcdb.html

================================================================================
来源：http://www.xuanzx.com/163ytiidstu.html

R. Bash 专题
来源：http://www.xuanzx.com/163dgonqypl.html

================================================================================
来源：http://www.sxryk.cn/163bxbtfbkr.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163rrgtlwga.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163axmtmxsp.html

set -euo pipefail
来源：http://www.aibaodan.cn/163qddjpdrc.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163drdqbvba.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163lghaalad.html

[R03] 只读变量
来源：http://www.xuanzx.com/163vcwpolrx.html

readonly PI=3.14
来源：http://www.xuanzx.com/163hdsqgrmm.html

[R04] 位置参数
来源：http://www.sxryk.cn/163wspcqqrk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163krnnjapm.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163riatzdns.html

name="${1:-default}"
来源：http://www.xuanzx.com/163ghfxxgnz.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163yyoytqql.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163nbmxgpmy.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163cpaimtpc.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163nkstfnsl.html

[R08] 数值比较
来源：http://www.xuanzx.com/163pzauzrwk.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163ziargqjm.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163lluswdyu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163knwvhput.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163zvxslacv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163jrfqgxia.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163mdabwokn.html

case "$1" in
来源：http://www.xuanzx.com/163kobvtztv.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163wpcyfmmx.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163btpvnagy.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163srouviko.html

esac
来源：http://www.aibaodan.cn/163konqijwn.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163imwreulv.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163jitwssrl.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163osnpmxlq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163qldbzyeh.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163txhkqfis.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163cobowqmh.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163kmydbgqm.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ahywwmiv.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163zylmgcbl.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163stcdifzg.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163tibgivcn.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163cyumdivh.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ygwcxrxp.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ekvnntcg.html

[R19] 数组长度
来源：http://www.xuanzx.com/163sixfxolw.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163stpmecgr.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163qzwnpwou.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163alpdsawz.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163mjxswbha.html

echo "${#s}"
来源：http://www.aibaodan.cn/163smvjyijm.html

[R22] 截取子串
来源：http://www.sxryk.cn/163dnnippji.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163azvnzbwy.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163ifxyjxok.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163slhxudpm.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163eqwidwho.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163mlklukta.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163logkhmkv.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163uqsrszln.html

[R26] 命令替换
来源：http://www.sxryk.cn/163kjrdxhrl.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163wdceawwg.html

[R27] 算术展开
来源：http://www.sxryk.cn/163kxwsiupw.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ridywvhl.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163jbhxupqo.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163pltymgva.html

[R29] 定义函数
来源：http://www.xuanzx.com/163urrmodjn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ivopqowe.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163cmmzrlcd.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163mduromum.html

[R31] 局部变量
来源：http://www.xuanzx.com/163ljwnnljy.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163jkfgmutw.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163coasozbu.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163cbllcqpd.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163kpkexjbn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163ccrbdrbq.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163krkxedab.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163oazxflis.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163rpfupyua.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163vjiiohub.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163qwfdrwty.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163hgstfffe.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163feksxybv.html

files=$(ls -1)
来源：http://www.xuanzx.com/163qchjjmkq.html

[R38] 管道串联
来源：http://www.xuanzx.com/163xiboppkl.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163obakjhbw.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163lveegsey.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163rfycphgx.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163fsbgensl.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163xqrvfqir.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163vufwwelb.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163cnozzarx.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163rmpubesd.html

wc -l < a.txt
来源：http://www.sxryk.cn/163ptciioin.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163jhjtizqp.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163mjlunzfo.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163owwdfiga.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163zmaaelfs.html

[R45] 批量删除
来源：http://www.xuanzx.com/163xdoqhgzq.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163siqrwpfp.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163uhsflkzl.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163rabaauwn.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163pzyspwkl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163kfovdwsn.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163klufezqp.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163kiuvvspu.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163laeafunt.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163xtaukcwd.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163ovluvqox.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163amyzhbhu.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ikmrokho.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163xkkvfhrn.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163bcybfbtb.html

wc -l a.txt
来源：http://www.xuanzx.com/163vlavpobo.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163vmkrrlto.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163thyvurut.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163xygpuodu.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ojmurcxj.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163krzlmvan.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163uhirwknf.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163ahbfaziv.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163cxjxxzzk.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163glzrmtbh.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163irvsigar.html

[R58] 下载文件
来源：http://www.xuanzx.com/163erpkuqkh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163qjpdtfoi.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163eblyxqra.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163asjcasnl.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163wwjyukuz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163accatvjf.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163wumgixvm.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163axzjrmpc.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163wsuyrynx.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ztozxypl.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163easndxby.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163qrcmogzb.html

[R64] 结束进程
来源：http://www.xuanzx.com/163dmwbokqx.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163gcsvlxim.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163wknytvtm.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163gblugnty.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ogigcwto.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163qowqzfhj.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163muuwpdpo.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163bfctnlwp.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163arqedemi.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163zbazvupa.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163dwrbwvqz.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163uduhrusn.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163aeevgwxu.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163lmqewvur.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163ashpaeko.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163bokqdqbx.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163digpmlsf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163txnzfxbt.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163meqbzpro.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163wftjljgu.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163wljuctaq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163bqigqenh.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163eohzvqhy.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163xcjxstml.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163kfsjftbv.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163usuqvdbh.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163oqbivbne.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163kueoooaq.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163kostjbms.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163jezcnrrz.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163yvbvmkci.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163clbboixi.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163wnbxszvd.html

time ./run.sh
来源：http://www.xuanzx.com/163vskwjfqc.html

================================================================================
来源：http://www.sxryk.cn/163fsfebtzw.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163oyxmetyr.html

================================================================================
来源：http://www.sxryk.cn/163mrlbhorg.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163najztnjh.html

#include <stdio.h>
来源：http://www.sxryk.cn/163wlvevejz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163invwkict.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163rluergdx.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163bqcspuca.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163vczvfjbr.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163uryxtjzd.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163peuwzber.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163vpjsfdaa.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163midwpdea.html

strlen(s)
来源：http://www.aibaodan.cn/163rdovvfat.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163lxvqiinx.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163egrildrq.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163bgseyzvx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163lwasnqef.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163qzmisfpg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163qbtnmgmj.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163qqrkjega.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163zxsptnkl.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163uievzdyu.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163qjczlahd.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163izkbicoy.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163rrdixrfa.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163mbrhmngi.html

fclose(f);
来源：http://www.aibaodan.cn/163bzputsem.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163dpgzljmw.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163dolulbvk.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ntpybvjs.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163gamjqcjs.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163cxfedxvl.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163bbhmbjvb.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163wqsmhezg.html

(double) a / b
来源：http://www.sxryk.cn/163ndkqricr.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ikvevzoh.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ajanrggh.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163nuwosqjm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163jdruykge.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163trtzlzet.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163bkypwybm.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163foiqvbci.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163hhswtibj.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ohrigkaw.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163nthwedsr.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163khifuxuj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ytrtcuee.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163itfevqqf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163vyqqclnc.html

[S23] C：随机数
来源：http://www.xuanzx.com/163adszolcg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163pehywyvz.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163vlzrivyv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ervjdpoo.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163fmfcvpmf.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163zmksumat.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163hoxiells.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163mwkxmhkf.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163socoikoa.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163owhsemfu.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163vuxnqeqa.html

static int counter = 0;
来源：http://www.xuanzx.com/163yhtatvtj.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163woeibtut.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163wznqvunm.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163qqadmgjz.html

#ifndef X_H
来源：http://www.sxryk.cn/163nwubkoxg.html

#define X_H
来源：http://www.aibaodan.cn/163gphdskpp.html

#endif
来源：http://www.xuanzx.com/163tvpjynqg.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163qaijdjwz.html

#include <iostream>
来源：http://www.xuanzx.com/163zqidxofp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ehqenqrj.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163bbblmshf.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163ndyidvgs.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163apumrtjy.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163pnbfqglb.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163lnocadvl.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163noqpdgat.html

[S35] C++：map
来源：http://www.xuanzx.com/163qmdvhkkp.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163zrkplnnq.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163abbiokpv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163maxrsriq.html

[S37] C++：set
来源：http://www.sxryk.cn/163ekoofqos.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163jfbycweq.html

[S38] C++：排序
来源：http://www.xuanzx.com/163bqcpoxhz.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163mwuwejyf.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163iogypttw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ubggcrzq.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163hbhzoozl.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163gxyqmzhw.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163efliswdl.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163egqvmyju.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163qbnmiqdm.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163hpuxmppp.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163szdwluoa.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163dcmkmils.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163tlfxmyvc.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163vznyfjkm.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163uclemgnq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ctnajbdd.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163pqeivocq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163olloakue.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163xtutvvgl.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163lgwdqpgz.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163uuklonbr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163jfywnhtu.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163aqxbjqhg.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163dvdhflci.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ggtxdnci.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163dtpjubzw.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163bqjmwcmv.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163zlnfwpcu.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163nbcrtnrz.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163yacvaapz.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163ssovvzjz.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163xjbbkzwl.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163qhpfumcz.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163vazmgtyw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163upcxdkqx.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163ttrddokg.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163xegpugae.html

[S56] C++：optional
来源：http://www.sxryk.cn/163qqrkuohx.html


<!-- 参考信息 -->