外链999!wailian999！

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163corvgrit.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163cdthqbnh.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163vnibikrl.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163egccajhr.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163cviiubue.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163hlatxrfp.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163vzxppqbq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163kmokdhdg.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163plgzfjok.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163ifbvxlkf.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ykshvmsb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163gnsrfgtn.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163rohnlscy.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163lurxhktg.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163lyubfnmd.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163awmcsund.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163jsenpsrb.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163pgcmenxq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163nwtbzehi.html

================================================================================
来源：http://www.sxryk.cn/163smzugsbt.html

R. Bash 专题
来源：http://www.sxryk.cn/163vvckrtwx.html

================================================================================
来源：http://www.xuanzx.com/163ftzpxrpb.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163dhjtssls.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163okbbqtkt.html

set -euo pipefail
来源：http://www.sxryk.cn/163oeeduhoy.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163idfcjwik.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163sdxlnqbp.html

[R03] 只读变量
来源：http://www.xuanzx.com/163xpvvqgvb.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163acdknbrm.html

[R04] 位置参数
来源：http://www.sxryk.cn/163umozqjpu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163snzvhaya.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163mnszblwv.html

name="${1:-default}"
来源：http://www.xuanzx.com/163wrnwoeht.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163qxlwmkzj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163dndxpqfv.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163hkkaeejb.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163lxgbrbwt.html

[R08] 数值比较
来源：http://www.xuanzx.com/163atzzupbt.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163oregynfr.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163qqsweswk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163gxzbplgv.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163gpzfkbyj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163vbifxycz.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163yumyyhue.html

case "$1" in
来源：http://www.sxryk.cn/163lsgnekdv.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163crnpghac.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163iccckbsd.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163sksovlgh.html

esac
来源：http://www.xuanzx.com/163kcnmervs.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163ylrvdauw.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163sddauyne.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163gdzmpoap.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163osutnauz.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163rnyxzihn.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163rkfsadfe.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163xqclrzhn.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163wzshawyv.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163upqqxtyz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ajgkrbyk.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163jrpihedp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163tztupgnx.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163qjfaxvab.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163utxzntie.html

[R19] 数组长度
来源：http://www.sxryk.cn/163rxbvsxks.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163jwnmeyvf.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163ygxvlrre.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163lcgngztx.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163rihhudkz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163vxxkjksd.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ilaikcgh.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163nafbrfoi.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163toeolnze.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163mmixzyma.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163pzdzmuaj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163liijgrit.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163lnugadvj.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163ytqstyvf.html

[R26] 命令替换
来源：http://www.xuanzx.com/163biesfftl.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163gwohxjnr.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163jederjjw.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163iydfbqda.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163jaquwdzj.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163cdvpnpwg.html

[R29] 定义函数
来源：http://www.xuanzx.com/163zdsweslk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163jtscgnqv.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163jtgjtlmv.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163gefhaxdl.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163gyieqneg.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ukxzequr.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163lirkhobz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163pzqawjum.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163kseyixqh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163pjcrtoub.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163wrkfsoco.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zfspvpuk.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163llgkncsx.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163yrsavcgr.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163pkiwcrxw.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163imwfewxs.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163uuygkqqv.html

files=$(ls -1)
来源：http://www.sxryk.cn/163zjetdfbn.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163yixhdmvg.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163kttwpfzw.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163aazhomdn.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163vubwzpps.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163yzfuoxtz.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163gqfcnlax.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163xjxnuuqz.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163wbvfunfo.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163uervmcav.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163vovtvoms.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163hbdxjcqf.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163zcdmgjgi.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163utocrosw.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163shyojbhi.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163otbzlcta.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163nenjvmae.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163lfbvdrag.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163fwkuwsvh.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163puhtxkwm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163kepqfoqo.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163cqwhdwjs.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163dsgghbbb.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ijomvlcs.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163sblsmfai.html

[R50] awk 求和
来源：http://www.sxryk.cn/163myjfywtb.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163xqeqdchj.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163vjwhpeof.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163kuedryft.html

[R52] 统计行数
来源：http://www.sxryk.cn/163awmfmvoj.html

wc -l a.txt
来源：http://www.sxryk.cn/163htffarmy.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163zcnouyco.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163lqbhfdeo.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163tjbspnjt.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163iklqfwyq.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163xlyommhy.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163rkvekpcy.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163mvovbtkk.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163skrxjuvm.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163ogmhoupg.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163glwwwnnn.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163dsgvpprv.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163bsdwyypt.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163pxshcvij.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163yblomiqm.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163zjacjaws.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163sibayfyt.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163cojkbbwg.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163lvnllbzs.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163ualpzwis.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163svhtogzx.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163abygickz.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163wilbzdqe.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163yxztstel.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163elhnozge.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163kztlugou.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ljbidlex.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163nefioqwx.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163bivwmcxm.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163zrpjxfee.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163kwottkwt.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163poqkerbh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163zhwuyosc.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ztkenxpg.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163gndjvnje.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163pkbvquip.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163uojztckb.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163bnapvuzh.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163oznfovtj.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163zgfsvbfm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163syxtavls.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163rhhzawgl.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163uzsbaqtl.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163viyhgndq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163vnwgeofl.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163epudhlcv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163cxerpiiq.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ktgiaxlg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163aldfynmh.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ddjjutgl.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163fzolkima.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163zbjbujdl.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163uyddarfv.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163ksfysteo.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163txavlqkb.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163qmlnkpom.html

time ./run.sh
来源：http://www.aibaodan.cn/163nfvqwrxs.html

================================================================================
来源：http://www.aibaodan.cn/163glgafbit.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163xxrnlzkt.html

================================================================================
来源：http://www.sxryk.cn/163mmqwwzde.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163jgpnhrla.html

#include <stdio.h>
来源：http://www.xuanzx.com/163qgytgexa.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163exptbicl.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163jmdrldot.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163ltrmncsb.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163gbhmndrq.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163lnrcyedj.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163scppjsgy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163ttdfoobz.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163szsqtkqn.html

strlen(s)
来源：http://www.sxryk.cn/163gskoyeuv.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163jrxumghq.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163wumtkgpy.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163phyxitcu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163mpppncua.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163aeitnirt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163wlhyzgbm.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163eaoznmby.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163khviszaq.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163eeihtqes.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163skzfwgmu.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163nbexjcpt.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163lucegymu.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163nxnmhdhc.html

fclose(f);
来源：http://www.aibaodan.cn/163yyixfivt.html

[S12] C：写文件
来源：http://www.xuanzx.com/163xoexrrdn.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163xcwhxirb.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163iywxfuvz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163yfrypsjo.html

[S14] C：枚举
来源：http://www.sxryk.cn/163bmvuwlbq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163zizwekjw.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163tbjyuzzt.html

(double) a / b
来源：http://www.xuanzx.com/163jprkarmx.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163bixjnhpt.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163mtokqgus.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163ezlzhurc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163fbippoqj.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163jbsjvshp.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163klmnorsw.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163lduozsgm.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163bfayviqv.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163mflzeifc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ufyvoaef.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163lsfhfjyi.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163fhbhmzqt.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163nxytqotx.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163kpczkisk.html

[S23] C：随机数
来源：http://www.xuanzx.com/163kacspmua.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163clleycuy.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163ezrfrgxg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163tcsusjlw.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163qqcbagso.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163uysvicrp.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163sdaajdul.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163oueniina.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163iqaanzjx.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163qgwbkhvf.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163zpavzzam.html

static int counter = 0;
来源：http://www.xuanzx.com/163atrbxfmg.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163jvqhfloh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163uglufakj.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163yzihskdm.html

#ifndef X_H
来源：http://www.aibaodan.cn/163zxtwpomd.html

#define X_H
来源：http://www.sxryk.cn/163ibrlqikt.html

#endif
来源：http://www.sxryk.cn/163gmacsxcq.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163sleqpkty.html

#include <iostream>
来源：http://www.sxryk.cn/163szwirstr.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163hvzrxhne.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163zjxaoqyx.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163wuadmjss.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163jakzyyru.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163wtsyenuq.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163hszjwcsc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163wxeqtrde.html

[S35] C++：map
来源：http://www.sxryk.cn/163mryavhxo.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163xkgobuim.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163fsdwojyt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163sjixklai.html

[S37] C++：set
来源：http://www.xuanzx.com/163hxerxlui.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163zecqctsn.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163rhjkhybt.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ivbqfdei.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163chiflrrf.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163bnktgfxs.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163qwueqanz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ixebdqzx.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163dugdzmww.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163gewsskws.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163bozwtnox.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163kgenyufz.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163wgcccdxs.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163uvpwlbmv.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163wkldywca.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163qdeewrmt.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163sflwxpwt.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163gwbaqsnn.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163cmnnxchg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163lvjkrhaf.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163hqjjwmhn.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163ulkbugzh.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163vbisqntc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163cowuittl.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163mdcyajni.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163vgunykvj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ohikdwcp.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163nrbnrfqf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163fssmpxfg.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163faculixf.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163pdvyhyyl.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163wkohgmjp.html


<!-- 参考信息 -->