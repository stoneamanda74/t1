外链999!wailian999！

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163lglinyyq.html

[Q54] 清空表
来源：http://www.xuanzx.com/163cxjqedqc.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163cmelnwrf.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163rjemjyad.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163gschlofy.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163tcsjopfw.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163juzdxoon.html

[Q57] 行号
来源：http://www.sxryk.cn/163oaldrktb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163sssexrnm.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163wwudxsem.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163foiqdosr.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163nwlrkjqa.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163xksodval.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163tkirgvpr.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163jpgzbjsh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163cmhqqlij.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163hlaysevs.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163igabfhfp.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163oedhjfri.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163fgkfqygj.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163ziizckfw.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163ukwyjwqc.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ndndgcbo.html

COMMIT;
来源：http://www.xuanzx.com/163fvnqjuch.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163ekpbepgr.html

ROLLBACK;
来源：http://www.sxryk.cn/163bdnldzts.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163gmzwggvk.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163cvfixdvb.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163rklsalqz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163qwxkaeik.html

[Q68] 保存点
来源：http://www.xuanzx.com/163qvwfonev.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163qqtfycjk.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163qwkvebgu.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163pobyvoqt.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163efjoxxmm.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163gaqkbipe.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163mdkhseog.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163rhkmqxzd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163zdofbbhh.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163xwvqfsrk.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163teabqnxc.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163iahrcjos.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163vvbofcio.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163mwqkvlyu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163pxncjodd.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163mkeakkbb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163dwtpvcvl.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163hkbecjsq.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163arggpudu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163pymlxsce.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163qtgycdxd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163rgxxblod.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163paxqxxxu.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163zekswxjd.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163rspblcbw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163wrclxpbb.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163xzpivflm.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163cehonqso.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163qihyfvhx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163tewztoof.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163hdectgtk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163yletljln.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163lzmixafu.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163rrgbqkzk.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163mqtwrdhg.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163hsuiorjq.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163auchvnsh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ezocznwo.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163zjguleyj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163tyecvlal.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163zcawbcil.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163mlablcad.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163ejxvynog.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163gaowfolz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163jnsveepu.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163rqrnbiac.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163kgryjkeb.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163eyxywxka.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163egzpicsy.html

================================================================================
来源：http://www.aibaodan.cn/163nonccnms.html

R. Bash 专题
来源：http://www.xuanzx.com/163lqodozpg.html

================================================================================
来源：http://www.xuanzx.com/163dvzkvvcw.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163huccosqb.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163basmvmiq.html

set -euo pipefail
来源：http://www.xuanzx.com/163ahksgzrw.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163cmkjdlku.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163aofjggxq.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163lmguncow.html

readonly PI=3.14
来源：http://www.sxryk.cn/163plsaecjr.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163xpzvzfwg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163latechmk.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163vgxtflxe.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163xkuhulxo.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163wwyinvxm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163vtmsommf.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163bmhvdidu.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163owsspexu.html

[R08] 数值比较
来源：http://www.sxryk.cn/163imsxwaxg.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163qiecroob.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163fpluhjpn.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163cozkkqgn.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163xwuuaxwq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163iwyijbdh.html

[R11] case 多分支
来源：http://www.xuanzx.com/163qejbkwoy.html

case "$1" in
来源：http://www.xuanzx.com/163wcaobgrh.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163wsjtgwyb.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163wtiulddd.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163xecgnebl.html

esac
来源：http://www.sxryk.cn/163mqqnmvoc.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163okgnadkl.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163xmscozpq.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163cdmjsjtr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163xitpsbpu.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163xkrkutxm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163nfcyinlu.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ngnknezz.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163sgnomejm.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163saxcsgqb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163wfqilnjd.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163fflgndpp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163owwhcppx.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163vghhndfg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163bewgeork.html

[R19] 数组长度
来源：http://www.xuanzx.com/163btnflvcn.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163pwvfnszs.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163zwejrsbz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163jutzrmsg.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163uuehnpab.html

echo "${#s}"
来源：http://www.sxryk.cn/163tcziottq.html

[R22] 截取子串
来源：http://www.sxryk.cn/163xrmybujs.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163hictbiha.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163algvygxn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163tzdmmqoq.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163zjoezmle.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163sdwnhndm.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163duouurkh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163vdvfqzcd.html

[R26] 命令替换
来源：http://www.sxryk.cn/163onwbxoxi.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ulepgzkq.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163pittaqiu.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163kmnqilzw.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163bsfszsvl.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163sbdsqdoe.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163bxiorzpx.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ddicrtpb.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ipczhjga.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163gjxxrtmu.html

[R31] 局部变量
来源：http://www.xuanzx.com/163qxmohvin.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163aquczckj.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163wmdxgeff.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163clkcepit.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163efrwcqva.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163dmncwcty.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163dtcvnzaq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ztxxrcdd.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163tcockcju.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163xmgehmzl.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163kjjjocjq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163jvhyowcl.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163zyyrrjnd.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163fpvnilum.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163mlauqvyp.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163hurboxgv.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163dbbkjene.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163rpuivavc.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163kkjkfngb.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163vahsxkzf.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163nxsdyxfj.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163fpcpwqpv.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ysnbfdza.html

wc -l < a.txt
来源：http://www.xuanzx.com/163gopihhsj.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163rwlfqoef.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163pcdzqbal.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163jwtewcpk.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163owbwgkaj.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163fyhjpnaq.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163maehbpjv.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163mlvijafb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163opvxrpaq.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163fqfginge.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163cxlhwqmb.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163ncpjingi.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163safidrir.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163elrmqbzf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163umnghejv.html

[R50] awk 求和
来源：http://www.xuanzx.com/163uupzjoim.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163xulsfeaq.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163anvyanwv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163jphkhoqu.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163mgxriugn.html

wc -l a.txt
来源：http://www.aibaodan.cn/163kzqnduot.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163xoxvzsnu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163tkodsdak.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163najpnxum.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163mftbzzwm.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163igstekfr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163cgojwgtv.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163jfwmqzgo.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163qhrhnmbx.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163ofprzmud.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163mbzndqrk.html

[R58] 下载文件
来源：http://www.sxryk.cn/163qlurgezs.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163lskzlqqx.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163yuathdwp.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163zycwpmrk.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163emdlaqlg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163rotpfgtp.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163wxokkqsk.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163oeqljbzg.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163stqwksdu.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163rrfwnabb.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163kbsfayly.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163uzumrysw.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ilvazowx.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163mbxpiqjk.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163lnehkkzj.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163qgbuscmj.html

[R66] 定时任务
来源：http://www.xuanzx.com/163cizgwjcs.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163xyltmbxn.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163uafxqlau.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163myajovye.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163gfvwykdy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163vyuxojqk.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163rruvvnys.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163yhnyrbos.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163nrgtapmg.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163yjlzftkd.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ajvrfvbx.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163razrlkrf.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163xxsnjghc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163wrtgkfpu.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163qftcfovb.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163cbupqkjj.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163wxowdbgg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163ravhwvyw.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163vtytnccx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163rrjnqjjo.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163kdtavyjk.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163aitvhmru.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163dsgglacz.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163uunefnnp.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163rrgvnlcd.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163njluakcr.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163ejypkqhy.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163vjssktjz.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163kyfhwrgd.html

time ./run.sh
来源：http://www.sxryk.cn/163chnccuto.html

================================================================================
来源：http://www.sxryk.cn/163bujwljzo.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163dqszypsx.html

================================================================================
来源：http://www.aibaodan.cn/163ueppcjmt.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163frlpiwqf.html

#include <stdio.h>
来源：http://www.sxryk.cn/163qcggbtia.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163jkeytsdl.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163aveaioam.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163bzuqcazp.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163whbxitvq.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163drjtmfnh.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163mjemujsa.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163kmzreelv.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163vhwxreao.html

strlen(s)
来源：http://www.sxryk.cn/163sivobezs.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163cgdtuisp.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163besaglyk.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163tofsqvwu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163jcskwzsa.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163prkqfdmx.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163cbiidhua.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163pzrwocqh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163xfwdykdt.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163igoyrtxz.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163bcaqgvde.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163bwfvsfms.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163trhgvaiw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163rdytjskc.html

fclose(f);
来源：http://www.xuanzx.com/163laskwqxi.html

[S12] C：写文件
来源：http://www.sxryk.cn/163qvwncokr.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163byyffhvc.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163uavwdtmm.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ryisuzwd.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ctzxcbnf.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163okhrprvg.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163dcgjuuiu.html

(double) a / b
来源：http://www.xuanzx.com/163kteizvup.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163fmtntijg.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163cpvbsfjd.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163sxaxmncb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163mvaqrekj.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163jrdpsfpk.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163yxcumsjx.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163phscvbcl.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163kicgzopq.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163hzsaweld.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163cbrllhnn.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ngjcmgeo.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163autxkbtr.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163gvcgebrv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163wzqzfery.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163hczandtv.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163pkvesgkr.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163oronxttb.html


<!-- 参考信息 -->