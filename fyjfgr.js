外链999!wailian999！

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163zkgzzjnn.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163xxbgvrqm.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163vbqpzkyz.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163pzdyxtpl.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163epjcshro.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163fsdjjbgb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163cfgggcep.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163dhyymiem.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163mdvlygpc.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163wxfetrmg.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163tyqfjyzj.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163fhrirdgo.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163qzvejmmy.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163vzewwklz.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163iysfnrog.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163vmoogzyk.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163dykzhfpj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163ehmrfkmu.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163dnxqmgka.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163xbzumhhi.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163nvviciij.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163fptrdhqv.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ojnesyum.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163eylueztv.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163vkxzmcnu.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163skrfzres.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163xpkjorqv.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163bybecasq.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163bbxxryuy.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163ppvlnyqt.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163mtpbotte.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163amihvbkc.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163lvjfxyya.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163uixkgrmr.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163uyprmwps.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163ivdhpolv.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163tojsjlxc.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ytqdhnkl.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163mqtglzel.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163cvrpeaxj.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163wmebuqny.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163uxryflma.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ejqykiog.html

================================================================================
来源：http://www.xuanzx.com/163dsxxqoml.html

R. Bash 专题
来源：http://www.aibaodan.cn/163zqtdtbuf.html

================================================================================
来源：http://www.aibaodan.cn/163sywbeata.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163esejtubg.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163hsmpwplw.html

set -euo pipefail
来源：http://www.aibaodan.cn/163davcqtvw.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163fnxlefda.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163xvaqqyww.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163uomftcgm.html

readonly PI=3.14
来源：http://www.sxryk.cn/163txdmzkbg.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163jpjpiriv.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163jhlopnds.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163qacbkhhc.html

name="${1:-default}"
来源：http://www.xuanzx.com/163yjdpppax.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163quqvfkov.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163capfinon.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163kntkfawz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163accjqggq.html

[R08] 数值比较
来源：http://www.xuanzx.com/163rvkvenms.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163qqipmikf.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163scpcbuyn.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163eaxqcymy.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163vesgjjpg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163pwbzojlg.html

[R11] case 多分支
来源：http://www.xuanzx.com/163mbkerggq.html

case "$1" in
来源：http://www.sxryk.cn/163czxdrhhj.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163tmwrqouo.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163bkxivpns.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ibkawfka.html

esac
来源：http://www.aibaodan.cn/163tmeguzsb.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163kzfgwnap.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163dkjbrriu.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163zymhjwgu.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163rnpphjiw.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163jywzylpu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163smyadytn.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163nxwnqpic.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163nnhqgozm.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163lriqmrze.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163visgldvq.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163yqbdrryb.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163zrbgcqrs.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163azrsqgva.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163rjavulfi.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ziipbfpz.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163xqyfacsy.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163nfduujuk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163tougddgc.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163oppqrzlq.html

echo "${#s}"
来源：http://www.aibaodan.cn/163woojxjkg.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163tssoruvn.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163hvtlzcaf.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163kltsivfq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163pgdewohp.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163dswkyoul.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163tielbuhs.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163fmftkunc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163dgkqsyrj.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163anmxjtvh.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163xxusrnjy.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163kebtjxok.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163wasnawep.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163rksiqvzm.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163kkqkitnc.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163tuisprwu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163mkxpooxp.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163lpdaqiof.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163tdxuurtj.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163xwndpdue.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163hbewjawx.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163docmttbn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163elgnlczx.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163jsdykmas.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163chdvkghg.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163wotuhjwh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163txelrrmi.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163vwacxyam.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163tbhxfeik.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163cfxtfmro.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163eblkxkyk.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163azxwmmax.html

files=$(ls -1)
来源：http://www.xuanzx.com/163gtiedrrg.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163orjeddnp.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163akskvdhg.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163qpwsoibz.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163stwhzpvb.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163zifwoctl.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163oqbzducg.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163aiyahsyh.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163dviatxmz.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163hdpuznzd.html

wc -l < a.txt
来源：http://www.xuanzx.com/163hrygeruy.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163qjzncuru.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ggdinzjm.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163ilhupfel.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163sqovifck.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163effrqmeh.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163pebfvymq.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163phxjgygy.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163vvabqshe.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163gitpyywe.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163wvtxvzsu.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163szqlzoce.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163fadcpbjv.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163wddjreva.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163bgpsyokh.html

[R50] awk 求和
来源：http://www.xuanzx.com/163xtycnfli.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163zghokjnf.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163dlmffzgw.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163yieqoijo.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163vdggtrbn.html

wc -l a.txt
来源：http://www.aibaodan.cn/163xqhlzhkh.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163taukcefu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163iedqmdnz.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163izqvxbcm.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ufwuemfq.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163hyyaceof.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163tpydjvsn.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163lxpopdfu.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163dotcmbxf.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163ayyznfxj.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163gxnrllnn.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163wjujzcrj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163hpycffdd.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163bcusmeof.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163azgdwuda.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163onehmhvo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163iqafgylf.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163aytondjf.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163wdyxjcbx.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ugacbjxe.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ksfbnbwo.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163bjnvoxmd.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163vpxgdkfa.html

[R64] 结束进程
来源：http://www.xuanzx.com/163msjhciyu.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163htovntjw.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163czeeloef.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163bbkmtimh.html

[R66] 定时任务
来源：http://www.xuanzx.com/163lefxogqj.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163trpyxqer.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163jnahgnwe.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163iptkvhcn.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163sgikkest.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163beqvogdy.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163jcectcge.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163rttvhiej.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163fvifscul.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163qryocmii.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163pdleoqif.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163xtyxqoop.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163psaxenpu.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163apvoffkl.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163pvlelqak.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163oauqdemr.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163kdikhiki.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163sruetkdg.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163qqdmjijf.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163lhyaerfn.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163azzhczpp.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163rtdvmoqd.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163tdxhqiba.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ghincwdl.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163nssghptc.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163phlxdiwv.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163zpqrkqbx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163fjouxljl.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163eylkewuy.html

time ./run.sh
来源：http://www.aibaodan.cn/163wbejfphy.html

================================================================================
来源：http://www.xuanzx.com/163ixfalahk.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163lqsvkxcx.html

================================================================================
来源：http://www.aibaodan.cn/163vicimece.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163nyjyrtkn.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163tielbsnd.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163sqigedly.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163gihpmmox.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163pvgggpgz.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163gbzexicc.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163qhrjpnnv.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163pzzpmcss.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163qsphzvlz.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163wvchqgmn.html

strlen(s)
来源：http://www.xuanzx.com/163lqeuzupt.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163tvslzqkx.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163qmnpxjka.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163qidmwjdd.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163aggdlbxu.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163fpbhjgpv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163qpxfdqwi.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163abczzouh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163vbcyamdi.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163kqgxhuek.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163tyjnlygv.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163cxgddzfr.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163vpdjifrl.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163zxeljsgr.html

fclose(f);
来源：http://www.xuanzx.com/163ukjplaep.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163lhsgvtqm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163exjgbfns.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163daibjnng.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163czyqrcqt.html

[S14] C：枚举
来源：http://www.xuanzx.com/163gvoslmth.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163fmzyacqj.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ftipqmjq.html

(double) a / b
来源：http://www.aibaodan.cn/163zyifespo.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163qafhzrks.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163mnuhlulr.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163sgkpabvy.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163ollcsnbe.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163snueapzw.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163uduqcayc.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163lbbxnmcl.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wekspefd.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163vllgwwci.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wntzzbzl.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163xihjqvyv.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163cisirliw.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163bwixdzjy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163cvejezfy.html

[S23] C：随机数
来源：http://www.sxryk.cn/163uurmmadz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163carepnqd.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163pgkqdjcc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163nkxdqihe.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ewqbriec.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163ambiiaxp.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163hcqxayml.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163diyznegc.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ilpyooky.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163xtoczsun.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163nxoxxmsl.html

static int counter = 0;
来源：http://www.xuanzx.com/163sjyafvtm.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163lksgwkgd.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163tnkznirt.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ilpytcbr.html

#ifndef X_H
来源：http://www.aibaodan.cn/163qruujbyi.html

#define X_H
来源：http://www.xuanzx.com/163bfwhndtc.html

#endif
来源：http://www.aibaodan.cn/163hothkwdy.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163xuyavwzj.html

#include <iostream>
来源：http://www.sxryk.cn/163olbccsws.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163blkrvjuz.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163qmqdfohg.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163ljwnbnws.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163euvdomfk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163emguzzin.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163bsddbqlb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163hlokbbqn.html

[S35] C++：map
来源：http://www.aibaodan.cn/163hoaltaes.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163tqmbrjfd.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163llrdgnqh.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163poxbcepe.html

[S37] C++：set
来源：http://www.sxryk.cn/163chjzjtyz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163dtunzstd.html

[S38] C++：排序
来源：http://www.xuanzx.com/163rcntkotc.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163dfaiqscp.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163vmkdmjde.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163lrdjxltl.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163mwgxcror.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163gcxobypj.html


<!-- 参考信息 -->