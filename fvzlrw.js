外链999!wailian999！

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163okeexsll.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163mvmopmzy.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163tkjgdwcz.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163viysshfi.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163wscuemty.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163aqhyecmj.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163fdiodfjf.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163pqhqpgsq.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163jxhzqsou.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163kraojolk.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163vyarrjgq.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163thmwhrqs.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ideevjhz.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ihttboob.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163pbaazxuh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163aqvlqdqk.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163urfycmub.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163jkywhhtm.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163qlucciig.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163gxooyepi.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163burcyzrn.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163qphrboas.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163ayjoslkf.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163nixykyif.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163jcroyjit.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ktsjhpsb.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163hpuyxysc.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163cdimkkqc.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163imdbstqf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163wgnwomtv.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163zakailxe.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ghmklqcx.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163awdteklw.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163yjewqzyc.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163fikolkks.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163hxtkixjv.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163laxeccps.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163aqcuuanj.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ldkrnlyh.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163adhlenod.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163uirpdlnr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ggvbfovf.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163vdrrhsge.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163xkmigcxh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163gswpjzib.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163fyryddqm.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ccsoteaf.html

================================================================================
来源：http://www.aibaodan.cn/163xwzxkzft.html

R. Bash 专题
来源：http://www.aibaodan.cn/163kvlyugiy.html

================================================================================
来源：http://www.sxryk.cn/163wxuhjyze.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163qbmscpsm.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163uqabbmth.html

set -euo pipefail
来源：http://www.sxryk.cn/163cbdcofjt.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ukeapxkt.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163joucvwlw.html

[R03] 只读变量
来源：http://www.sxryk.cn/163cfrewtcg.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ghmxbzpk.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163flpzjekk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163eajwqetm.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163wqxabayi.html

name="${1:-default}"
来源：http://www.sxryk.cn/163upebgaci.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163xxdsrtzf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163pczrkqzj.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163gknrupwx.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163qcfveuix.html

[R08] 数值比较
来源：http://www.xuanzx.com/163grbvgzbd.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163tsnmrmhx.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163hbxckeps.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163tzueaeuy.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163ricmqidf.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163mzwtwjni.html

[R11] case 多分支
来源：http://www.sxryk.cn/163ypwetfrf.html

case "$1" in
来源：http://www.xuanzx.com/163xariytia.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163zuokuazh.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163lrclqpzq.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163jpjgsenp.html

esac
来源：http://www.sxryk.cn/163rcawkswf.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163hyrxgpby.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163johetugg.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163jcjcuuut.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163myfyorxq.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163nxspndbc.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163hpzmomqo.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163eqeeympu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163qewpzjxp.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163xeommrqn.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163phfhjlcr.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163wkjykkic.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163imxsosab.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163hqaffhdd.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163nwtepots.html

[R19] 数组长度
来源：http://www.sxryk.cn/163dqikqewc.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163vvkphitc.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163getnuoml.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ozrktypo.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163emjovpbf.html

echo "${#s}"
来源：http://www.sxryk.cn/163bjrvqdgy.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163mvycgtqd.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163rrxnrioy.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163rakwkmkg.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163qttfobjt.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163zhwtqtqz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163gywidftv.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163cvdptbpy.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163nwrsxvil.html

[R26] 命令替换
来源：http://www.xuanzx.com/163zaatlcfx.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163gomsenyi.html

[R27] 算术展开
来源：http://www.sxryk.cn/163vxdauvil.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163nawoohmm.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163uibxcntb.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163reieuqwg.html

[R29] 定义函数
来源：http://www.sxryk.cn/163pvlptvsq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163lvtqxngx.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ouannxjk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163dwwvaung.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163tssvlsvi.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163iptbocwl.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163bjqvuzwa.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163tnfontpm.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163cnzybtsw.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163pmaiwryt.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163whagbgfs.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163rdetmquc.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163rnrywfax.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163muttktxd.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163xzavlgdh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163nmhgyper.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163hsjvgcpz.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163fuveellw.html

[R38] 管道串联
来源：http://www.sxryk.cn/163dyagkjil.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163artmhcms.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163acvcmvby.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163poskkgsb.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163mgmexqfi.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163mfmmwluh.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163lrnbwnof.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163oigggnhv.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163jbliyvzd.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163wtvqefha.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163hbdoqwlp.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163qokfruhl.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163khayutna.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163iktgqgvh.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163dxrhqepc.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163dhrhxhgg.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163jpyvuwki.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163ucibmckx.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163kanhsnxh.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163dpjhnegn.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163mrneszep.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163xowbrhqd.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163gmjpzkxd.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ceckvdzn.html

[R50] awk 求和
来源：http://www.xuanzx.com/163nmmucscj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163fzzbihho.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163kqvppfaq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163uqkpmjbz.html

[R52] 统计行数
来源：http://www.sxryk.cn/163qvvkbkcr.html

wc -l a.txt
来源：http://www.aibaodan.cn/163murngvtm.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163kohwwzsc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163qbypalux.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163athtwnbm.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163wrylowxn.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163mfwwhwuv.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ibbugbld.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163smmnzzey.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163gwnfptnh.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163vpvxlxoo.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163hccdehxn.html

[R58] 下载文件
来源：http://www.sxryk.cn/163pixfjbta.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163otvebpqh.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163bparksbc.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163aotfbtaa.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163fmzpybvx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163yufgassk.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163bbgaogxg.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163elfsqvzd.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163coqbijhs.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163iluobeyu.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163qgryeobn.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ypidklyb.html

[R64] 结束进程
来源：http://www.sxryk.cn/163usyrrtzr.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163ybixkfcl.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163ytnpcsan.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163dvdarpah.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ujveoylc.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163gkouefuu.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163edaqxoms.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163eygwmlez.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ohldtset.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163pvjrewnn.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163htkpqjbe.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163jcjtyxal.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163lfqexxbt.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163zegnrmhh.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163mozrvtyg.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163lwivjsnb.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163xuojcndm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163ftzofejx.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163vkcaygib.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ypvxhfra.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163cdcssotd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163rlcdvnhh.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163uiytotqd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163dbrzhatw.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163ziedxowz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ctqyqksg.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ifnkcpuo.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163gxbbctlv.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163ylkrfdkj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163qiovsflj.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163wqwugmvu.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163mdzdjaca.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163rugilwyr.html

time ./run.sh
来源：http://www.aibaodan.cn/163mlhydlke.html

================================================================================
来源：http://www.aibaodan.cn/163vhmyexim.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163issqqxuc.html

================================================================================
来源：http://www.sxryk.cn/163lkftwiva.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163kfgvmkmn.html

#include <stdio.h>
来源：http://www.sxryk.cn/163lxavrsze.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ytchucrp.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163jhgjpndm.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163bypkhivu.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163ivtyrync.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163xlgbalsp.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163mbplvstr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163iiyyvemt.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ceovkoti.html

strlen(s)
来源：http://www.xuanzx.com/163jpjkymkt.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163bipiahsr.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163ajwaiajv.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ksdfkfre.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163buhqdlel.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163njrleogv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163hjpspmts.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163rzmlrcgg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163wxxlcxgd.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163wikabgyv.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ivydvzfb.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163rqhjvtdu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163gqrdxlqt.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163yskryaqt.html

fclose(f);
来源：http://www.sxryk.cn/163hopuxryn.html

[S12] C：写文件
来源：http://www.sxryk.cn/163ibgadvtz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163achspxjw.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163axortdyn.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163ptduwave.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ujnuhslb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163folvtgsj.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163jewwjaht.html

(double) a / b
来源：http://www.xuanzx.com/163fjisgtri.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163fivbchtm.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163vdszvsov.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ztxgkdug.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163qduqepwr.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163iklclesn.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163otjaiusc.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163ufiawezj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163jfmbrsju.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163tbhrpcdq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163wjguzxwa.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ihpgzwca.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163lzyvyoqs.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163rrkqtlsc.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163djsmnjhh.html

[S23] C：随机数
来源：http://www.xuanzx.com/163uafmwkfp.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163pnmvtkdi.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163gjsdflzw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163zcatrfeh.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163lwnyclkr.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163tiyxveio.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163jcrvvcyp.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163wsonzuck.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163euyislly.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163cvesrnlf.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163vbmyrpnv.html

static int counter = 0;
来源：http://www.xuanzx.com/163ojevfyay.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ffoebcci.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163yhveqpiv.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163casvekzx.html

#ifndef X_H
来源：http://www.xuanzx.com/163qzeunfuq.html

#define X_H
来源：http://www.sxryk.cn/163gzwqfjtb.html

#endif
来源：http://www.aibaodan.cn/163nrmxctxh.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163otxqqmrh.html

#include <iostream>
来源：http://www.sxryk.cn/163bpyserln.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163kdplqtrh.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163vqellaox.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163fuycagyg.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163wdqbcxjn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163woulcdvi.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163wugxmazn.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163flufkgzc.html

[S35] C++：map
来源：http://www.xuanzx.com/163mfgpgwbu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163yzgdsntb.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163sgaluwkx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163fhyraxil.html

[S37] C++：set
来源：http://www.xuanzx.com/163mldrslpq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163mupftjni.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163kqdkeupm.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163axztyexu.html


<!-- 参考信息 -->