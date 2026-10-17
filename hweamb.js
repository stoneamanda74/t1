外链999!wailian999！

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163lhsivekn.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163yelsuiyu.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163bbsqttmh.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163bxjyyvyc.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163fgwoakzq.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163rhjwwpro.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163zqtxcoux.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163sbjpvkfc.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163gaopznob.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163rubwqjgm.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163ajozhupw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163cbhtvjur.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163mcyvgnhi.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163jmwyxnlp.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163prhcntqp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163pnguwkws.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163mwfgolez.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163vimhmfsk.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163isoltgfu.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163tqqbouyf.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163pkrphnqy.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163jpkyziih.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163jyocoekr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163uqpuxjmm.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163vafpviic.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163bsqlijaf.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163qjmxhupp.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163phacwwic.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163poyiosnl.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163gwtpsllb.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163bqbvinfw.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163tunpjwzx.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163ogmgksht.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163kzxpqvkb.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163xpbsdyvp.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163zrnblujd.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163meawtzii.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163tvxmxcrz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163zwznwjlv.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163tdsgefib.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163jkfmbwbj.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163sqeirxmi.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163vicbheor.html

================================================================================
来源：http://www.sxryk.cn/163eqpvypcm.html

R. Bash 专题
来源：http://www.aibaodan.cn/163ihmwmjqu.html

================================================================================
来源：http://www.sxryk.cn/163ozoejlcy.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163pfxflemz.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ijfexmor.html

set -euo pipefail
来源：http://www.xuanzx.com/163qvcevltt.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163cedhtwwr.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163vxftdzpc.html

[R03] 只读变量
来源：http://www.xuanzx.com/163zostuhfc.html

readonly PI=3.14
来源：http://www.sxryk.cn/163kjpwvxlk.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163jrwsxhxv.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163labjttcq.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163vtmurfzn.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ramgigkw.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163kfivtgbd.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163dkuluppd.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163hgrennkw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163wdivgokp.html

[R08] 数值比较
来源：http://www.sxryk.cn/163zisvubbi.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ojmfyhmh.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163mvhbpeia.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163mfqdhhmq.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163luluggwx.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163xhhmjppi.html

[R11] case 多分支
来源：http://www.xuanzx.com/163dqqvdfxt.html

case "$1" in
来源：http://www.aibaodan.cn/163hmvajjxv.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163jaqpmvqr.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163iaihtsge.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ymnedfhi.html

esac
来源：http://www.aibaodan.cn/163yppuyjac.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163cozcjava.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163zsxxsspx.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163kuymywyg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163qzeplvht.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163rrrmdwdk.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163awoxdxix.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163bkiysqpa.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163fegrmvjb.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163ykmkkpfo.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163vuwpzqng.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163guoxwsfr.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163lecsaiqd.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163vodfkzbi.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ktukdvsn.html

[R19] 数组长度
来源：http://www.sxryk.cn/163wajhywsp.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163equlpzjp.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163bbbzrzih.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163isjcbaiq.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163wsmrqeyt.html

echo "${#s}"
来源：http://www.aibaodan.cn/163udylpuqo.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163urecoarw.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163omduejvv.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163kbrhqjsd.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163cueuxhwa.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163wvbkcgxh.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163otjmnigl.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163kntoxefk.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163gzlwkxng.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163ckxorulz.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163awadmhhg.html

[R27] 算术展开
来源：http://www.xuanzx.com/163kznxlmqu.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163xkbdeiad.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163cdadymle.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163lijmjitw.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ixtjpzhd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163pyaspwww.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163rskykqds.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163vmqrbmni.html

[R31] 局部变量
来源：http://www.xuanzx.com/163fleinqbi.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163rlcqpjmy.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163uiuucrkb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163wfdxyczl.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163lsnflouh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163xkchfcjf.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163flguunxy.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xqxxslrm.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163tppqwfgg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163qcqtufpa.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163havkkigm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163cxharvma.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163fhndkpmh.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ifdgxvxu.html

[R38] 管道串联
来源：http://www.xuanzx.com/163ysutxgxa.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163xyzaydoj.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163hzswimow.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163uiqovvxu.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163bloxyaxa.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163sbyinvni.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163zjcujwcd.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163aejwamda.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163inlofnme.html

wc -l < a.txt
来源：http://www.xuanzx.com/163pgvnenah.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163mirxqydt.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163kdcfngev.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163fsiofwsg.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ncraktoc.html

[R45] 批量删除
来源：http://www.sxryk.cn/163fvlgzihd.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163xixbkljo.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163tuuboobf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163gluimptk.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163ttrmpxnd.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163vtukfwtj.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163odvxsszo.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163betejkpf.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163vbzhttpk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163vwiictpk.html

[R50] awk 求和
来源：http://www.xuanzx.com/163wohfmabq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163elkllcvj.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163obcpvhdp.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163dmuhejpz.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163gfwdrqns.html

wc -l a.txt
来源：http://www.aibaodan.cn/163zfstoryw.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163udbtnyqe.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163ithqeeex.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163iihajfex.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163wxnbnmvl.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163zzsadmsg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ronmbyzd.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163kxkyfiyz.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163gshdhepn.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ummutceo.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163jnsynxly.html

[R58] 下载文件
来源：http://www.xuanzx.com/163hazkujci.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163seynepud.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163omtaikdd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163mzpfppnm.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163pvinxfgt.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163ngdxkgvo.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163qohwnerx.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163jrltzgnp.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163hktawauz.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163thrwgbyo.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163beihkiny.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163oivxumnh.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163isyqwyxc.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163hbrcjfpe.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163wpscyapp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163hxuogqoo.html

[R66] 定时任务
来源：http://www.xuanzx.com/163cprxyrsu.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163zvdxotgh.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163eyuzvbkq.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163inakfavl.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163hmvekmbx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163lnlbkqcw.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163lsimeodq.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163asaykcuu.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163xlpwmvta.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163odekaczn.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163kupasrrn.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163eapzuiik.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163cnxcofxe.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163lnvhluus.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163lbcgaixm.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163mpdebpfk.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163rvdkqghz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163numboeui.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163sbqqigng.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163qcwcgptt.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163xnwvdnfe.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163jwzmsbht.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ocpgivac.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163qsagtelr.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163kipdlgte.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163dndjelvj.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163afdrylzg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163ggoxzcfx.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163zqupefqr.html

time ./run.sh
来源：http://www.xuanzx.com/163hggxwxqx.html

================================================================================
来源：http://www.xuanzx.com/163bhopidmj.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163vdyrlkwn.html

================================================================================
来源：http://www.sxryk.cn/163kcmcigsn.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163thkzhque.html

#include <stdio.h>
来源：http://www.sxryk.cn/163puhvbktp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163zwozgwoj.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163lckmjrsf.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163qeeemewo.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163qdgeyepf.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163wosdrgaw.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163jkwonljt.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163hsynjcmi.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163rfwbrbnk.html

strlen(s)
来源：http://www.xuanzx.com/163awwjqous.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163zpgdvfok.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163bhxgskaj.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163kyfsekhn.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163kcoewrwb.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163sjosotzh.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163uofjpbyd.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163xdpuevnz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163xnpjnnjg.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163gtvnbflj.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163tdjqhovw.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ckdkmmnr.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ajzbdqck.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163yuzhmuvc.html

fclose(f);
来源：http://www.xuanzx.com/163znczckwa.html

[S12] C：写文件
来源：http://www.sxryk.cn/163iqtxdjur.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163nkrsgcrn.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163rskntbqv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163exhphfjm.html

[S14] C：枚举
来源：http://www.sxryk.cn/163cusjoqnq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ynstckkf.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163nnqajwff.html

(double) a / b
来源：http://www.aibaodan.cn/163hdghcqpz.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163vmugxhnx.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163svysmxzh.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163umwfldxv.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163lwbvpcll.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ylpiesmn.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163pxzilmff.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ykpqgate.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163hgjajxox.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163zjxsqwjk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ohmsfrec.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ajctkghl.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163kxgqushb.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163austyvle.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163wposacjm.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163crbkbeyb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163udigowmc.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163tavdqbni.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163hslqixtu.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163bwgddnan.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163ejraijyl.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163wetttqfu.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163nntyppnt.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163npfsjkhr.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ugvlnoer.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163ivczcwye.html

static int counter = 0;
来源：http://www.aibaodan.cn/163iyzfpsqe.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163wedoocni.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163gnmhiocl.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163rlkqgqoh.html

#ifndef X_H
来源：http://www.aibaodan.cn/163lttvnism.html

#define X_H
来源：http://www.sxryk.cn/163agqxlwoo.html

#endif
来源：http://www.xuanzx.com/163iyhmtnag.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163itciqtgk.html

#include <iostream>
来源：http://www.xuanzx.com/163qpzjyusy.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163lnatahde.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163lxmiwkzr.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163jjqueuod.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163igbbrmyv.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163wskvgukf.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163roxyzmoj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163lcalmijr.html

[S35] C++：map
来源：http://www.xuanzx.com/163xelzxqsr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ghaabzfo.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163eenewjwt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163vahbuuuz.html

[S37] C++：set
来源：http://www.xuanzx.com/163ghozcpej.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163sddgdgyv.html

[S38] C++：排序
来源：http://www.sxryk.cn/163xxowulrf.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163mzskcpnx.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163yjjuwwpq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163fhbajppw.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163qwjbofdz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163tqxbjhnv.html


<!-- 参考信息 -->