外链999!wailian999！

[Q76] 按天统计
来源：http://www.sxryk.cn/163erbnbvde.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163yknchimp.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163efqqhjik.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163ybfxpvlu.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163lunybfyk.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163mnpvgbfo.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163vtnmndcg.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163tmdrhxur.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163acsanxxb.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163zaaifbvw.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ossorukt.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163kfsktsak.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163higcdetx.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163kfdexezq.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163lkpdafsa.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163mcqsnkuo.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163dkoazxxm.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163xplmoaiu.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163skhzpgtx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ycobcwqo.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163prfoidzp.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163clxmrbws.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163wqlnnntm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163jewsahok.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163qcbkasns.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163xkaidgbm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163lihtrsgq.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163lqktbxyn.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163rncuwcrg.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163gzpqhcud.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163bsikggcx.html

================================================================================
来源：http://www.sxryk.cn/163lkvnnezx.html

R. Bash 专题
来源：http://www.aibaodan.cn/163vpgocood.html

================================================================================
来源：http://www.sxryk.cn/163flfzrjpg.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163qntfaraz.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163fdzawpiz.html

set -euo pipefail
来源：http://www.aibaodan.cn/163shqsffgr.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163munljznx.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163nsudtann.html

[R03] 只读变量
来源：http://www.sxryk.cn/163dtvonaye.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163qmmqbqmj.html

[R04] 位置参数
来源：http://www.sxryk.cn/163jgaiveqz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163sttadhhg.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163jnscpjas.html

name="${1:-default}"
来源：http://www.sxryk.cn/163hukfqccv.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163ezydksnw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163cprsdoci.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163xzrngdjr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163uvkdxsid.html

[R08] 数值比较
来源：http://www.xuanzx.com/163qfdkedmk.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163oqtrlcbj.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163oddvvzgu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163ksfzkodn.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163cqejpnep.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163kvqtzpnd.html

[R11] case 多分支
来源：http://www.xuanzx.com/163mxrxocsu.html

case "$1" in
来源：http://www.xuanzx.com/163hrkochwx.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163yjtgmfjc.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163fzuzesik.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163fqwzcohf.html

esac
来源：http://www.aibaodan.cn/163qnaipxkc.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163gnhyybwh.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163jmljapop.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163dinctszl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163wtoaolgw.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163eeeyimzu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163pacoswqw.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163blermkwe.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163euwzghoi.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163ygepqdpk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163ksflbuqh.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ickrynlw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163grmrpxce.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163zkknzkoo.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163jykmcusb.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163dszrlafd.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163xywablds.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163glqbswrk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ncdrwvrc.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163srjdufks.html

echo "${#s}"
来源：http://www.xuanzx.com/163xtoaqrxu.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163bglfejud.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163lzzskdks.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163woqqikdr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163dvmnlrdo.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163esfxjmfn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163otkytlgj.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163bqfukozt.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163rwpnbnhg.html

[R26] 命令替换
来源：http://www.xuanzx.com/163pugxaijh.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163qxxewxru.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163gtwyyegy.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163tzgcdenm.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163fquqkumj.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163gsmzyrtb.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163eukwhhgd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ibgsazhj.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163mkvkooww.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163xgsxjpxw.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163azwxylrd.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ltazouvf.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163rwdipmvv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163njqltiho.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163exhoknxb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163bvqtslkq.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163nwnkcajb.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163jghknone.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163cvoxeqjg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ewdoesif.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163byaymrcv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163xmwmsoxb.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163mjchajev.html

files=$(ls -1)
来源：http://www.sxryk.cn/163azighrfv.html

[R38] 管道串联
来源：http://www.xuanzx.com/163reqwffkp.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163mycbilzy.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163lsmklyoz.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163yyapeoji.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163lcuykqyj.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ftnnlpyx.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163mczxuoca.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163uomsxilx.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163mxtyaqte.html

wc -l < a.txt
来源：http://www.sxryk.cn/163ecenolze.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163duhifljy.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163hgunvizh.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163ujxwrekm.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163evdyebcr.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163yotpjqbx.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163kagdfrvp.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163yppgmlid.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163aoexujxw.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163qllhdtjg.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163rskqcmmw.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163cdaadhqc.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163woloshku.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ywykqvpc.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ixremjad.html

[R50] awk 求和
来源：http://www.xuanzx.com/163grblolyb.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163kqgwhzho.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163botanpaw.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163nwqhffow.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163wpavcrsa.html

wc -l a.txt
来源：http://www.sxryk.cn/163yaqjzzdp.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163sjzpniup.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163eawqusph.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ottykqch.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163uvulrwku.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163xrztuvtr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163zucfplxt.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163codzjteb.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163sbpgkrrp.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163heovthde.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163hjtlrgjl.html

[R58] 下载文件
来源：http://www.xuanzx.com/163mjizzisu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163iuzpglau.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163delysirh.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163pdnznudq.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163hpltoqkr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163dkshnfpt.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163hdfkrvyf.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163tzdendeq.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163mgvqkirr.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163bgrkmodl.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163tuhwrifi.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163pnyjvxah.html

[R64] 结束进程
来源：http://www.sxryk.cn/163limuoueu.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163jehvskkp.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163zjhjlevg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ivffsrrg.html

[R66] 定时任务
来源：http://www.sxryk.cn/163zaopqhml.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163stbulzlk.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163wvgesnnb.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163wxrocfwm.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163bzhlaamx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163oojndztb.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163gsgzuzem.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163mbkteniq.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163bqzhalfb.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163gitklgke.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163oivivvcy.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163mfeacioo.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163uleaomjy.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163rocavkbp.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163zdgimjiw.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163tmirrxgb.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163xexjyyay.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163kuwvemes.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163xdefscrz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163eahmpudk.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163mmsptpxf.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163tznhsynq.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163eykuejcy.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163udyrcmoa.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163xfdolevt.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163gstlwgki.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163mphyjshe.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163vmandppy.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163jvzddueq.html

time ./run.sh
来源：http://www.sxryk.cn/163hhftmrah.html

================================================================================
来源：http://www.sxryk.cn/163xambxiev.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163xklceill.html

================================================================================
来源：http://www.xuanzx.com/163jetkqezw.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163xdodysfj.html

#include <stdio.h>
来源：http://www.sxryk.cn/163hzrrjque.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163pdnffdmz.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163wtuwrqpz.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163bwvyheue.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163zeffpjcn.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163qqvvhlew.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163msdwvxid.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163rixztpgv.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163vuacgvwi.html

strlen(s)
来源：http://www.aibaodan.cn/163lyuddozf.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163xojlmnmj.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163selrpbik.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163msbjamwl.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163zrkvycss.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163esetnpyg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163fsrypsst.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163dspcttsu.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163cpbqbwne.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163pziycqqr.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163xizvvvqy.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163nagxuudr.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163mrnaxtqt.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163oibysjgw.html

fclose(f);
来源：http://www.sxryk.cn/163cvfwzxnz.html

[S12] C：写文件
来源：http://www.xuanzx.com/163lflfhrug.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163ifovbrzi.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163zslewdlt.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163heqljlcj.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163sprihbnv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163qvlvmaym.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163eeuljcrr.html

(double) a / b
来源：http://www.xuanzx.com/163ddqdezev.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163xsdyjpuf.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163tcypuenb.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163zzshgmwd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163haoljsce.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163fgjjwnhx.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163panfiiyn.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163mevvzjuy.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163kqzvfecp.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163lfvkygqf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163flnjrnya.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163zeabpbba.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163rpmvggjr.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163sdtwtggf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163xlddpqaz.html

[S23] C：随机数
来源：http://www.sxryk.cn/163vmdngkzg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163jkonkjsh.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163snizhnjt.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163zuzdbwrl.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163tlxdogyo.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163obbbmytc.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163vyifljkd.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163hntfmxhe.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ojqhshwu.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163yssgvyau.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163jetbitwk.html

static int counter = 0;
来源：http://www.xuanzx.com/163orfdvmnz.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163nztwledd.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163jjtuxzjd.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ihcygdrw.html

#ifndef X_H
来源：http://www.aibaodan.cn/163hoyxtcvq.html

#define X_H
来源：http://www.sxryk.cn/163nztmjcve.html

#endif
来源：http://www.sxryk.cn/163uccjyjhq.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163mzmfjwgn.html

#include <iostream>
来源：http://www.sxryk.cn/163oeoapkca.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163sealhpqd.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ckthqcnf.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163iqcveobe.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163luxggstv.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163zfsfsgfh.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163jkzjcksu.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163kpauveuz.html

[S35] C++：map
来源：http://www.sxryk.cn/163uqwtowce.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163hourpozb.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163hrcekhyu.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163pyvnlrcw.html

[S37] C++：set
来源：http://www.sxryk.cn/163pysmfkak.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163byvdthxv.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163rrvkcpfm.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163wizqmiju.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163mversvtu.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163fusquzzr.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163nsvkuvyc.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163qxaztztk.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163zffvntkw.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163ztezagow.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163okndvgxn.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163lzpvktti.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163gxmbughg.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163wgrxjyzo.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163bmcxrbpr.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163eeyruwws.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163zhrhlgiq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163vtkawzqr.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163yghxpppn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163bwgunmjl.html


<!-- 参考信息 -->