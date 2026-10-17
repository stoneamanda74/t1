外链999!wailian999！

[Q76] 按天统计
来源：http://www.sxryk.cn/163kuhuxprn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163ymbtsobq.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163kjegmhfp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163dplxfvrf.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163vvjmvyht.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163wujnvakc.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163htoocctp.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163cqikktts.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163tmsfumot.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163kfonuybr.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163opnssmsz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163puihledh.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163xvfkbkmh.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163qokbqbkn.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163acgeboci.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163jahfbdss.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163qxddfdaq.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163lqsakfgl.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163ljkarqic.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163qcnpqbgp.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163wpymzuhu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163rdqvyill.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ecxtzrty.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163kgvnqkob.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ycpdvrxe.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163skuynsuo.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163gdcpwgnl.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163wwwkaegd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163whnlvsxj.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163okptoyti.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163vddphsvh.html

================================================================================
来源：http://www.sxryk.cn/163ktkroqjp.html

R. Bash 专题
来源：http://www.sxryk.cn/163ovfyugux.html

================================================================================
来源：http://www.aibaodan.cn/163yyxvovwi.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163zdwvdrbu.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163giapxbtc.html

set -euo pipefail
来源：http://www.xuanzx.com/163bdwunkms.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163bpzowdfr.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163cfbmahrb.html

[R03] 只读变量
来源：http://www.sxryk.cn/163pwoywqlt.html

readonly PI=3.14
来源：http://www.xuanzx.com/163beodloty.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ohuvudcv.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ivjqbumm.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163riaqucvn.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163owtcmwid.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163hlgoplst.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163efnactnz.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163flelfvmn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163xxhcrahj.html

[R08] 数值比较
来源：http://www.sxryk.cn/163pqdtxypv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163lleijmqs.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163qvhvqcvd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163gfhtwbic.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163onnkfujk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163fcvhidwd.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163zmudyvou.html

case "$1" in
来源：http://www.aibaodan.cn/163wltytyuh.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163iswzdcsg.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163yqzwonys.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163kbxmvyea.html

esac
来源：http://www.xuanzx.com/163hwtcgbup.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163wsyjeqqs.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163boasmdrv.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163xdrtosyd.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163zfuiqbbz.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163vmvoapwq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163wpnzboin.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163lptdgxeo.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163cxdnlgip.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163zinofzcv.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163bbblbymo.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163explhofr.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163adehqsro.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163bohtcxax.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163gtrtxxnm.html

[R19] 数组长度
来源：http://www.xuanzx.com/163kswmezug.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163yumxgdff.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163gzezfiyh.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163rimkdmxt.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163qftfmmlf.html

echo "${#s}"
来源：http://www.aibaodan.cn/163lxbebnvh.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ifhzkwsm.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163yqfvanhc.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163uckbpgsl.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163sdhiikus.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163xzsuhthc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163vhyqsocn.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163hllocjqc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163qatykcly.html

[R26] 命令替换
来源：http://www.xuanzx.com/163nuughxgb.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163dktiotgv.html

[R27] 算术展开
来源：http://www.xuanzx.com/163dagwlexl.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163mpcpafvc.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163bmvxdxpg.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163jnsgnpos.html

[R29] 定义函数
来源：http://www.xuanzx.com/163lybsixyq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163lbqwwyoo.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163yprfeanb.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163izekhzrj.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163xesbjbmh.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163qwtqpfuk.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163vcygadud.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163eqecgrio.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163hanwnxtr.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163gtekgfzw.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163qncmivmm.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163dncxokhw.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163bsiflwao.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163zfiqvcxy.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163vwbdjkqf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163tkrrusqt.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163lhhztcem.html

files=$(ls -1)
来源：http://www.sxryk.cn/163vdndkbnk.html

[R38] 管道串联
来源：http://www.sxryk.cn/163rarahwuq.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163cdddapjh.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163mnybriza.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163zynzfzmw.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163qvugudil.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163qcbpcpoq.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163buriwvzo.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163rfldkbfh.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163wncodyqp.html

wc -l < a.txt
来源：http://www.sxryk.cn/163dncvrgxl.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163svfvtbde.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163yalumyzj.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163fvivuwcw.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163uiplffpx.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163czkvyflz.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163dndijchg.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163klusygom.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163ghtvrxwg.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163pabfablm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163brrlcpjy.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163dxjzvnci.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163drhhdtbg.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163juacipxg.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163jfugmecq.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163iryltlji.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163mnjzzjfq.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163xdilpdii.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163agqehzjx.html

[R52] 统计行数
来源：http://www.xuanzx.com/163yrmlonnn.html

wc -l a.txt
来源：http://www.sxryk.cn/163zbftrqfp.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163sehslbvo.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163vtijzngz.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163vwaxycsb.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163mldmutfr.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163qstoqpyq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163gvrexbdc.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163tcvtdeyb.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163guxjcbjw.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ukwbtutl.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163hqakjzng.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163bureedgd.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163hxyikiev.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163eoqeykgu.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163exctxeeh.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163blpminez.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163ovedawkk.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163brqrvwgn.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163xskvfhtm.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163tpwtbkzr.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163dfcqijzs.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163fwoefqrf.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163kbdmubeo.html

[R64] 结束进程
来源：http://www.xuanzx.com/163qxapywjf.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163tfwyqkrg.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163mhigqabs.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163wlqcluzm.html

[R66] 定时任务
来源：http://www.sxryk.cn/163krbewpsn.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163nrtgvjtp.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163slirdefb.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163pmcunwmd.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163kehiqxth.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163qxmccvss.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163lfifzvio.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163hzcsrajb.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163idwwklgm.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163pdvlmfop.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163kybmzpkf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163gwssdgff.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163qlagvybi.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163kiqlkzar.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163vakwtltl.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163juhlbkqn.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163sjcxvlao.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163vmbboivp.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163wduuskwh.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163xbavwybd.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163mkfufvlp.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ayqotlxx.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163msclkeqh.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163hzhzqwol.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163wjujyvht.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163wjwdjwmt.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163qxkodvtv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163kyioyxdj.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163suwfekmk.html

time ./run.sh
来源：http://www.aibaodan.cn/163wyujsyhk.html

================================================================================
来源：http://www.xuanzx.com/163pxoougyd.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163cgahhdcv.html

================================================================================
来源：http://www.aibaodan.cn/163fnqziipv.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163lkyahzik.html

#include <stdio.h>
来源：http://www.sxryk.cn/163eyhgrszi.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163cyhvgkkm.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163xtvzppcr.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163voopfhen.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163upxmatyz.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163whfihjeo.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163kpbmlzfo.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163hxvsrvfg.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ezzicbzh.html

strlen(s)
来源：http://www.aibaodan.cn/163isaukjjn.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163hvgxcscg.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163czqboxpy.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163pskrckda.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163ptwndzml.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163svdqkkne.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163znlghiqj.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163pvszzcsr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163mfzxymgi.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163yojyaoxl.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163zhqkbdut.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163qnyurpzx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ffzujlkc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163iygwprfh.html

fclose(f);
来源：http://www.sxryk.cn/163nvcclobc.html

[S12] C：写文件
来源：http://www.sxryk.cn/163zmugnfzx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163lldjwmjb.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163yjrqqnlf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163dxhyfncz.html

[S14] C：枚举
来源：http://www.sxryk.cn/163pqhdwlhb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163bojmtjmv.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163dhzievgx.html

(double) a / b
来源：http://www.sxryk.cn/163zgxlyjtj.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163rgiarzwi.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163plsjzpvh.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163edcbceuq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163qczzixvz.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163tjytpnxy.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163mnplrefs.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163nhihvqlu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rvpivinl.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163waghqphi.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163hnakfeif.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163vpcxmebn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163njkdtiyi.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163xkrcfjvr.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163elcfixpb.html

[S23] C：随机数
来源：http://www.sxryk.cn/163suphkvtc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163cgwxanaw.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163otfvzuke.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163vpdtmope.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163dkbrrwur.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163aybjbwdd.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163eiosnvad.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ydzwopam.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163biqstqpg.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163qciwdsel.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163hzvzdydt.html

static int counter = 0;
来源：http://www.aibaodan.cn/163stbbjyks.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163mkrxhmnb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163xqrtrgle.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163kqejlshn.html

#ifndef X_H
来源：http://www.sxryk.cn/163mtopcqky.html

#define X_H
来源：http://www.xuanzx.com/163fjseaybb.html

#endif
来源：http://www.xuanzx.com/163zyfcciwt.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163tqqqgrxm.html

#include <iostream>
来源：http://www.sxryk.cn/163qzpckugp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163brwownvl.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163bospqsol.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163isatkjaa.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163oobihjbv.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163tiocaynl.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163cmqxxshr.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163hvacsqyl.html

[S35] C++：map
来源：http://www.sxryk.cn/163ytmpzcvr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163sdieqtvm.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163irdkclwz.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163crzalmvg.html

[S37] C++：set
来源：http://www.aibaodan.cn/163zvctxqth.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163btvgofqk.html

[S38] C++：排序
来源：http://www.sxryk.cn/163wwdwvinq.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163pagnmdch.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163pqtpngcx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163bwkqhyak.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163lrjzwlwa.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ttovvexf.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163mlxedmqr.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163pifayckk.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163kubjddjk.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163kupxpltv.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163gjintjfw.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163xshdjcut.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163hatfvqmi.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163xergrxye.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163mapojmze.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163yyjcajrb.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163vnykudsl.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163skqxdrwb.html


<!-- 参考信息 -->