外链999!wailian999！

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163fuoepmuy.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163xrevfosv.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163weebqrmo.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163cwcrtrwo.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163etiqhgxv.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163oyqdcnaj.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163mylibzju.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ufoksqbf.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163ynazfmdx.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163drlmadod.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163afhlrwya.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163mzdakkey.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163bcdztney.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163wpiwuaag.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163dzyvivre.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163gijajgjh.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163wvfxgapq.html

[Q22] 排序
来源：http://www.aibaodan.cn/163tpzmiqoe.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163phegardw.html

[Q23] 分页
来源：http://www.aibaodan.cn/163qqoglutm.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163amscfwti.html

[Q24] 去重
来源：http://www.xuanzx.com/163gafqajet.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163bcbgxvjm.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163otlgyzvp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163yrsifmrz.html

[Q26] 计数
来源：http://www.aibaodan.cn/163awrpbfat.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163ycmaigsu.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163izldghbs.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163pgovvklj.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ujljatev.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163baqdbvpi.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163chwpfoyq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163uzplgggd.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163wmgxvbfq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163oqofqllh.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163cfkwnlia.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163pxwaignz.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163qpvqmzor.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zcvqwqaq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163ktvcraub.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163wqwhmnhr.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163iemdqpxn.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163hsjdqgad.html

SELECT * FROM (
来源：http://www.xuanzx.com/163iholdazh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163pdvmxoea.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163aappbmey.html

[Q35] 内连接
来源：http://www.sxryk.cn/163hzzcgdhu.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ixzgwypn.html

[Q36] 左连接
来源：http://www.sxryk.cn/163tyuiikod.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163pbalqrzs.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163zlrxxzed.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163bezmrcsl.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163xuoatwdk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163zhnkuidu.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163skxlbblv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163dncxfutd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163imntadhs.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163wciedwnq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163afthabhk.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163kkscngrk.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163qztmtmss.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163wfcfsjlx.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163lzidvcqv.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163fuedyqmo.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163wnrxxcfu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163nvblouta.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ovyujjry.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163vlufqfab.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163ghpdinmt.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163txbexgkk.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163bbnkhezt.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163btgxstbx.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163morcgewd.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163upwdbgog.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163iivnkvwq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163mepkunbw.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163cuxohmbs.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163rpenrzfx.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163nmqvcwzy.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163ezpclpui.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163tjhcbbdd.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163wrmtdeqi.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163ttwnznpk.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163xvgphrvq.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163svjlynct.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ogsfdvtv.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163fbwtakns.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163fkewxrio.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163fnozkjuj.html

[Q54] 清空表
来源：http://www.xuanzx.com/163djkbsyab.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163oxlkbefm.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163ewggxiig.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163erkjkbtp.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163hszchexu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163lwbrhqdg.html

[Q57] 行号
来源：http://www.aibaodan.cn/163nefpecxl.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163rgjpqqbp.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163vgrmesep.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163ipluobdc.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163nnkfhssg.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163ncqpzlry.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163afczspod.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163ccxvfzrk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163leraesmq.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163gxwxdunt.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ahbtdfgq.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163knybwmdc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163rztgbrix.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163bhmrqvio.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163yrhuclcu.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163pruangps.html

COMMIT;
来源：http://www.sxryk.cn/163wyytaitd.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163evrsbtgr.html

ROLLBACK;
来源：http://www.sxryk.cn/163afrmfhzd.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163itqqkgvy.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163dmasxunf.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163jnxvngpi.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163dxmbleyk.html

[Q68] 保存点
来源：http://www.sxryk.cn/163esfesuxl.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163afvgipnl.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163wadudoit.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163bgipmnsd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163cveljyut.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163hwcvobvx.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163nesfgsay.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163lrfhasuu.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163cvqevqrj.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163uuabwwsd.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163drpvirru.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163runjkehp.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163nryhvbzx.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163oyozpmvm.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163yaxysjmy.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163mzqviity.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163sdexjplv.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163fzimhlqv.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163foikxojg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163kaadvrvb.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163kvvzuabi.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163twowabyc.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163gsfzaamb.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163tskbgwpb.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163dpxeaojn.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163fwjbcunj.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163lbnpwnjc.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163otfjvffa.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163hcejakrh.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163pzhqajeh.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163eyexrwlo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163fygdppiz.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163uatziudy.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163lpupzibq.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163btqamkzs.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163vyewtzkq.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163xkndjztv.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163xavbjbus.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163yyeaygdi.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163bbxluliu.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163rsefzxpi.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163edqforce.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163vahuuono.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163pgptyucm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163mqqrqdaw.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163jbhotoiz.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163cthfoshv.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163xxhhdkin.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ogbgrefy.html

================================================================================
来源：http://www.sxryk.cn/163ferdeori.html

R. Bash 专题
来源：http://www.sxryk.cn/163cerfkdce.html

================================================================================
来源：http://www.aibaodan.cn/163ivgdqyre.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163riejafcl.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163jaiczdaq.html

set -euo pipefail
来源：http://www.sxryk.cn/163hpnlsyej.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163srjynerx.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163scuesgpx.html

[R03] 只读变量
来源：http://www.sxryk.cn/163mrbjfcmq.html

readonly PI=3.14
来源：http://www.sxryk.cn/163fkglhiii.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163wuuoeqfv.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163mtcgpiwz.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163svknlrja.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163xzrbyzmq.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163bghufhwf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163vjmpnbdh.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ahamezug.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163wocflifs.html

[R08] 数值比较
来源：http://www.xuanzx.com/163waqgwtot.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163cmhkqabf.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ikqgukmv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163ppqeuemj.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163cefkbhue.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163cnyhpzvv.html

[R11] case 多分支
来源：http://www.sxryk.cn/163jckvqjwa.html

case "$1" in
来源：http://www.aibaodan.cn/163hyqgqdym.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163brswrjhv.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163qbzaygqw.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163rgdyptdy.html

esac
来源：http://www.xuanzx.com/163igutnenq.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163ulbgzigh.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163tvnxslwb.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163tbzdgxlj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163eohlrblg.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163bfnwqzxy.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163gjcwyrst.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163xqzrxlqf.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163rgukdyto.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163ancnhvcb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163mvjfopgi.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163fpspoxmv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163xemezshk.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163avezcfze.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163epybfcrn.html

[R19] 数组长度
来源：http://www.sxryk.cn/163zeerbrvu.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163dgsgotmf.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163nfktgpbg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163doipyesa.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163alcwppij.html

echo "${#s}"
来源：http://www.aibaodan.cn/163jvnhurdu.html

[R22] 截取子串
来源：http://www.sxryk.cn/163snzzqhwd.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163nhcpstvr.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163ijybtgeq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163jsartnoq.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163tqhrgfda.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163hnjsgnnc.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163occmwnhw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ycptwpjf.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163setisdpu.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163tfsktqph.html

[R27] 算术展开
来源：http://www.sxryk.cn/163itwlmgju.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163zzykbevj.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163smvqrtrj.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163gnbgvspp.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163qaezpnpf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163wjzwcmwf.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163vuuvndgu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163pqxrwtrh.html

[R31] 局部变量
来源：http://www.xuanzx.com/163wsvoueqb.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163uhuhbnee.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163sblshcpy.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163jmypeyvc.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163lkjeoaik.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163sknawljt.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163bvdsujjb.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163svoopkkd.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163yexhafyg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163nrhmlqda.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163dbyxywqz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163culjylxh.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163wlbzcmvp.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163uwiwamyj.html

[R38] 管道串联
来源：http://www.xuanzx.com/163xhpixlqr.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163svmsbbnq.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163pdttnrst.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163drvhctgq.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163tstdtxuz.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163iptwkxpt.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163vcssptoi.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ximtybiv.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163rgfacqqc.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163fwxymfnb.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163hibyvuri.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163kjlgwldq.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163lgcxsiyx.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163oioxzsum.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163bavwepaw.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163wvtdhkzz.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163nyghekeb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163fqyzewvp.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163kvxropcu.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163xmrczdso.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163afofweqw.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163tjcjrkyr.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163hqlojtce.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163wbwxkjlq.html

[R50] awk 求和
来源：http://www.xuanzx.com/163qflsdmnf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163aghzpisw.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163qzdcnblo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163zqryvtnu.html

[R52] 统计行数
来源：http://www.xuanzx.com/163xklyfnjq.html

wc -l a.txt
来源：http://www.sxryk.cn/163pdufpusb.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163krwkubkj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163islqwdbm.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163zinbcgrn.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163zuthoujg.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163yydtyxhc.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163qosdatmo.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163mjfoxypd.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163qkrqdeie.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163vtnkvrvn.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163rfvohixn.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ojeglaxu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163xalitiie.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163qcjapsmu.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163bmlqvjjy.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ijsuxhiw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163zkpbquap.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ieylcoxe.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163uatzzrzu.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163qukpssoj.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163krorgcwo.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163vfmpsaib.html


<!-- 参考信息 -->