外链999!wailian999！

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163mchosfgl.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163ewwbgidc.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163weywtgxq.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163hmssrmih.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163opaaykzt.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163xwcflrom.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163kjxukzwx.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163oorpwjtp.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163mtoxfzzj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163azoadyui.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163bvwtburi.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163qvphnreh.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163uxvsnkem.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163mtskxjgy.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163iikldfbc.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163zxcucgep.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163ehfnfvil.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163fpegnwbo.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163jsoynwki.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ezqvwthd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163saghvltm.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163rpditkwc.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163xjnjavht.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163tsichepl.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163sbapgggm.html

[Q54] 清空表
来源：http://www.xuanzx.com/163vickojry.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163dagypzie.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163btgvtsiq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163diaadgju.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163znrfrqrc.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163shzhijyt.html

[Q57] 行号
来源：http://www.sxryk.cn/163tdwcxywe.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163fscagodh.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163tmhrrxft.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163xoqogofg.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163spsvcmtu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163svtejopq.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163ipoesoge.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163qcmeekzi.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163xvyurstw.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163wzlyrtah.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163jimudwba.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163tmmsyquq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163todwuhbq.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163fwglcqrx.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163xypuypcm.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163cbjnjlul.html

COMMIT;
来源：http://www.aibaodan.cn/163adbtzhrl.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163vaadmrux.html

ROLLBACK;
来源：http://www.xuanzx.com/163supfnabg.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163rcqutxnx.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163juohqxfe.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163zzirnnxy.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163aprqdtct.html

[Q68] 保存点
来源：http://www.xuanzx.com/163lbjvsxxm.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163shbvgmpv.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163hphpdtls.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163vipvdsnm.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163pmyswlpb.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163oznxolfg.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163idfcwfmi.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163wqrtpwun.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163tacrpvfi.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163yrjhenux.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163mqeptsss.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163efsqmsla.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163lecluwjw.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163mcrxohpn.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163zkvectwq.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163tbltccyj.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163dgwtzcod.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163vxtrtgxz.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163rezwebyx.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163cwcfkzlx.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163wzzhvkta.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163kdhuidnb.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163uachwlaq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163cyikngim.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163stceuplx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163agliiboc.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163xxnfpmte.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163cxpqxhck.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163tzgvdolr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163ksbqkrgv.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163telwmfan.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163ciscwbqq.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163dtxmxedl.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163rncwcotu.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163hgjjcpjx.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163msqpmdzn.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163bjlrkclu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163rwkifcry.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163zfgofhbu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163bgckmadn.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163oklofmxq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163qctrajhs.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163ldyltpob.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163zgqgupbh.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163rzqcguef.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163holussth.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163yyuvednc.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163vnbnzqgx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163tllivdtr.html

================================================================================
来源：http://www.aibaodan.cn/163fblhoike.html

R. Bash 专题
来源：http://www.aibaodan.cn/163uyshbqqv.html

================================================================================
来源：http://www.aibaodan.cn/163sqzhyvkb.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163plwoguie.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163bbtuqfzd.html

set -euo pipefail
来源：http://www.sxryk.cn/163krrikdmw.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163mbwvfzby.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163pmqosijt.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163gyuaiqet.html

readonly PI=3.14
来源：http://www.sxryk.cn/163gywvaywi.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ieuibwwi.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163wiubwqmg.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163qdqnqakr.html

name="${1:-default}"
来源：http://www.sxryk.cn/163odtcnoxd.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163uxazdenk.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163hypjnvpz.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163xvptmosf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163gheewpca.html

[R08] 数值比较
来源：http://www.xuanzx.com/163eeqexzdo.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163bmckcbpf.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163qnotkoml.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163ttfqfliy.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163enpddodp.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163clhqfoxp.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ajmctysz.html

case "$1" in
来源：http://www.aibaodan.cn/163rxfsxdvs.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163yrhugoxf.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163tpttzyve.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163swpiowug.html

esac
来源：http://www.aibaodan.cn/163sxvhvffs.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163woepucaz.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163juvxfujz.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163bgrlqjyi.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163wvlwrcih.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163fuypoyyv.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163sfqxutur.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163mebfnnlk.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163djkppzen.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163zqurltxh.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163yttozyqm.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163hyewewet.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163ylrzluba.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163lfjgmvdk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163lndvfycw.html

[R19] 数组长度
来源：http://www.xuanzx.com/163erbmapju.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163usvqmxrk.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163lxsgsxaa.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163kbauedbh.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163ncilnkzv.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ytlitawd.html

[R22] 截取子串
来源：http://www.xuanzx.com/163qgnofulp.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163sfquqpuk.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163nkrmsabs.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163ghalfaiu.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163osvvjmzl.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163tuftafbx.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163eutgknkk.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163lvdvpnhm.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163xuenapyi.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ufmtvghz.html

[R27] 算术展开
来源：http://www.xuanzx.com/163yusrnrbt.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163yalyahmu.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163kpmxsokx.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163oedflddf.html

[R29] 定义函数
来源：http://www.xuanzx.com/163uvswjoou.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163cqwuyxmt.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163bfymjble.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ivevmgiz.html

[R31] 局部变量
来源：http://www.xuanzx.com/163uzedcnxq.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ksumpzdj.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163swmerkoj.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163cfzucfet.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163sxcgctzb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163qasjpizn.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ssgrcfks.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163rdqnicya.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163qsqxkrll.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163yaxldflh.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163brreohgh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163zkbqvgtk.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163felvfhch.html

files=$(ls -1)
来源：http://www.sxryk.cn/163xhhxwfrs.html

[R38] 管道串联
来源：http://www.xuanzx.com/163fgpwdgrm.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163cvxywddv.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163bchhttsu.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163eyrrfmnp.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163ghjssvjb.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163ctvykujk.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163czrqykoc.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163oivjduuc.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163nxjadfog.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163xcalltpo.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163bybuuire.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163lmdmvglv.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163komxgvyi.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163ygfgzues.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163xblsixyn.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163blvnpzyj.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163ylnwxbou.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163fljuuwln.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163jdizmolz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163fowoqpfe.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163jkdgzlfi.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163gzxziity.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163aslzxkmb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163xikohkfi.html

[R50] awk 求和
来源：http://www.sxryk.cn/163qgxaostq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163pqdmtlmw.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163ulvkcczn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163axmizczr.html

[R52] 统计行数
来源：http://www.xuanzx.com/163jbqzcjba.html

wc -l a.txt
来源：http://www.sxryk.cn/163cmexcqcs.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163uduytngj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ujrltlna.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163mvzgsnlf.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163oooaumsb.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163raotzegp.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163owvotllz.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ozeiyjph.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163agkakjtl.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163ynhabalx.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163gchtltzo.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163uftgdgxy.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163swwqkwih.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163vtvvyvll.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163gdvturqp.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163vavcfpoo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163jqspevwl.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163vguxmutm.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ctfjhydt.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163qwydqsgc.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163lrvespuf.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163zbsqdkji.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163spiuhdxq.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163bczqctml.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163amswijaj.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163pqulubjh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163epbqtskm.html

[R66] 定时任务
来源：http://www.xuanzx.com/163agoywjwi.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163hjlyaqzd.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163atpgpway.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163xevmxhzk.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163tqsiyyey.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163shxojhob.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163zldicbkz.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163kqztfqyp.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163bidyjxfk.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163lkyzdixx.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163cogetlcz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163vgirgvma.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163eknvhhux.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163dwqhzptf.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163jrknpyit.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163qbcafghq.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163wuqrsvrl.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163tgciqwdn.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163sgwygvsv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163iuwasvwj.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163yuikdkrc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ewikbddm.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163lxabuize.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163asuzmfxc.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163rukqsziy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163bhakhhyh.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163tmvylpaf.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163yltjuezr.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ltkmlywm.html

time ./run.sh
来源：http://www.aibaodan.cn/163qrtudgot.html

================================================================================
来源：http://www.sxryk.cn/163ieirpbha.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163sctiryrk.html

================================================================================
来源：http://www.aibaodan.cn/163eqppinwi.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163sctutnfr.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163qbqubmck.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163eexjndfe.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163jttmsmgi.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163wvruoqbe.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163hlyawhhj.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163wugcucid.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163coljpgrn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163ycidseyp.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163xxirdqxa.html

strlen(s)
来源：http://www.aibaodan.cn/163nyryuxuc.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163kiqblids.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163cpxoocla.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163rtjtljmb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163xcniuxvx.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163iktwbkrz.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ajjagrnl.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163mtndszdq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163akbspedr.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163fvknmgpd.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163phijenkb.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163cxxxfmft.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163dkdinxkf.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163nmqjywhl.html

fclose(f);
来源：http://www.sxryk.cn/163pkehmers.html

[S12] C：写文件
来源：http://www.sxryk.cn/163xieimkkr.html


<!-- 参考信息 -->