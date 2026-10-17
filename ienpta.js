外链999!wailian999！

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163xwfyrxkh.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163heftydsz.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163xxgjevax.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163gtokjeup.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163vuzkgbfm.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163vitpbbtp.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163oejwjujy.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163mnstcivb.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163dahbzfls.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163yghajyoi.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163nooxusow.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163agluwiul.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163oknqiryd.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163fseslrtb.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163eiekoyit.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163nulycrxp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163sqxxwjeh.html

[Q22] 排序
来源：http://www.aibaodan.cn/163crfpqjgj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163trzdlurn.html

[Q23] 分页
来源：http://www.aibaodan.cn/163gkqcqlpc.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163bmvngttj.html

[Q24] 去重
来源：http://www.sxryk.cn/163sczufecs.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163trgcytsg.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163tkfvxtni.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163hjrgrdlf.html

[Q26] 计数
来源：http://www.aibaodan.cn/163aslaxwqy.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163vtercuxx.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163nmidlviz.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ofuftdcd.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163rbtpchdc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163mmzpqhke.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163yoxriajf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163nnqpooxh.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163rrcchbrb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163coarbzii.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163yldmzixk.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163vddwxumz.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163dizkkbmf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163luivyamf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ywkspkua.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163mcsljakx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163yolowhlf.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163oozpcqyz.html

SELECT * FROM (
来源：http://www.xuanzx.com/163vrdtlkpl.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163gbgmwsuc.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163ciynooyq.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163xsqlnaqt.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163mxkmkzqj.html

[Q36] 左连接
来源：http://www.xuanzx.com/163ogmmyntp.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qomiteli.html

[Q37] 右连接
来源：http://www.xuanzx.com/163vfaqrhdb.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163mzapvudp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163qiejajxk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163gsnodqmc.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163aoyaqlwi.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163iqtiltgg.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163kltixmig.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163oznumbhj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163gngxnozj.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163cqrxdyzq.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163kjoaavcq.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163qtyxvvxt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163emkjpshs.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163tmxevkub.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163ipuqetxz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163jhcuvidg.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163iougwyja.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163mrscpxyt.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163msbayoap.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163lkqpmqes.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163alukrceg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163jjnbqlkx.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163dszfuzgn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163xgwotgvi.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163wwprdbza.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163rqjlvvpw.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163sgcfmubu.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163hunmmhrm.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163qtzkxmuw.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163pchbgdau.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163shlehcyn.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163dfkyankz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163nlceavwg.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163cfkqeeyl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163rjnqbitk.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163rltbpraz.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163bomlyypa.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163blnjlhkv.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163zgpgcvme.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163kmrygzjz.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163dtnnlrac.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163mqptarqw.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163tcvxzyfm.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163fukvkqnd.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163kcbrvdqj.html

[Q57] 行号
来源：http://www.xuanzx.com/163ysaxjhii.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163zytnwjnt.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163ptqnjlaq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163fyodjacu.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163lziyecuu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163qjunfxqq.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163zhpfkmzz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163hhresvvj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163oinngqfx.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163aexyroud.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163onnvjssa.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163lpqpvtdg.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nyoqfecu.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163cxkzevvg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163swdwtagg.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163vnaclhnf.html

COMMIT;
来源：http://www.xuanzx.com/163lfvfgnrw.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163ussctwlq.html

ROLLBACK;
来源：http://www.xuanzx.com/163vpdthzdm.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163fuufbhkh.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163qumhsdoy.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163wwwsluoj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163jfozahqv.html

[Q68] 保存点
来源：http://www.sxryk.cn/163krrittwt.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163jqszuaqw.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163wrjcitmg.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163vafrttvy.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163rodzygww.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163mbderuzt.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163jkklruxe.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163cmcbiksq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163ofjmmonc.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163tojvclpu.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163mahskosj.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163nvigfbcw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163lflgpace.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163wgmhtxgf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163lknawcqg.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163hdqvbkhx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163onmbhure.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ejbkeosm.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163gerdfzjq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163okysywhr.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163vfddrcfg.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163vqzwgjkn.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163uufqwhaz.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163ffwajpdc.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ectrvwcp.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163viwczkth.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163yjfobdas.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163ttsgnmtv.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163yrnxoxmr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163qabddpjt.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163wyntwawm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ysxrmqpn.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163wiwstwuz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163prmscaad.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163lffyzycq.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163uxhqaplj.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163qyjsgmyl.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163trqsxrhx.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163fivsygop.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163jwrhjjjw.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163rudklwtm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163tscrtnkv.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163xezxjgsr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163oylyfiac.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163bqftcuhe.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163qyukdjju.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163acuqtrbq.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163gpqwpgem.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ckyhijon.html

================================================================================
来源：http://www.aibaodan.cn/163ojutpqth.html

R. Bash 专题
来源：http://www.xuanzx.com/163ipwhetvy.html

================================================================================
来源：http://www.sxryk.cn/163tdeojxrx.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163riisxykg.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163hkrfgbyr.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ysxmqsrv.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163xtishlfe.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163lfjrdngi.html

[R03] 只读变量
来源：http://www.xuanzx.com/163cflojqov.html

readonly PI=3.14
来源：http://www.sxryk.cn/163lvtnohme.html

[R04] 位置参数
来源：http://www.sxryk.cn/163hxhwlsva.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163irjerxbh.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ncfdnakz.html

name="${1:-default}"
来源：http://www.sxryk.cn/163umcxesir.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163hokzvwwh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163jcctpptb.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163hegvjbmn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163auefjjvz.html

[R08] 数值比较
来源：http://www.sxryk.cn/163rhnpjdgv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163ltcqrzwz.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163shnsfrtj.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163evqaoaka.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163tcozqnhq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163edjidfde.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163ktceexru.html

case "$1" in
来源：http://www.xuanzx.com/163waosddli.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163qbdfoqfd.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163liwjfddf.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163wkrqzbzs.html

esac
来源：http://www.xuanzx.com/163dryzdzvi.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163almnpdxp.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163xmkajvpg.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163kswdqxct.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163uvhcpvps.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163bxptrewc.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163izqzsrba.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163uigqmvko.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163cmrnnzhz.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163ijesvntl.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163zbbeakde.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163tnxzltuy.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163fcmfxfqy.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163zvwntlvj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163acyrxeyp.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163bwigpttg.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163sdbjytkv.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163xrcjvxjv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163iblnkvhu.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163crnjgsbq.html

echo "${#s}"
来源：http://www.xuanzx.com/163lzqyraur.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163obfngcev.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163rtbkkfzy.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163fwqcyshw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163kiolklcu.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163mnzhpqis.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163jsllgayk.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163qezxhffi.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163rwjrpyid.html

[R26] 命令替换
来源：http://www.xuanzx.com/163raekwyuo.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163japljscj.html

[R27] 算术展开
来源：http://www.sxryk.cn/163hxfegzjy.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163dhipiwep.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163vugxssdv.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163vqmabpfl.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163plhwfyjz.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ylmtagcs.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163jvcugonf.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163ljcwohld.html

[R31] 局部变量
来源：http://www.sxryk.cn/163vcbaoeni.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163fwlibhpf.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163mpvxivuy.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163hkgknpgt.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163xdlntzgu.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163aguuwlzw.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163tggwmncp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163uzzqqxbs.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163cdkjudyg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163bebbycqd.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163paqosrau.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163ngqwhpog.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163qtagmwly.html

files=$(ls -1)
来源：http://www.xuanzx.com/163fmfgymqs.html

[R38] 管道串联
来源：http://www.xuanzx.com/163rgdinngk.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163bqyakozy.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163odejcdna.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163hnmcmawz.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163jzxkxlgy.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163msgkfzrl.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163efalxgxv.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163dadmmodw.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163vdwnofzk.html

wc -l < a.txt
来源：http://www.sxryk.cn/163dukrrsje.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163qmtqjfct.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163omfxyxtv.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163andaqdny.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163bggjdxnd.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163acmkezdc.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163ngouipjc.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163cmdtcygb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163kgwnrxhi.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163uvhuixma.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163hhebvmtf.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163dfvkrpgy.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163nmwgqhps.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163oqkalaih.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163skhoudjt.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163duntaunn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163icekqncl.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163wimtkvup.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163wmefkmfj.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163uexyoqav.html

wc -l a.txt
来源：http://www.sxryk.cn/163oehtysjc.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163fylrpdse.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163frabwgms.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163ypdjghrp.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163zvnsriam.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163xdargqpm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163zxumutde.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163bzbvapaq.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163rpsklros.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163kjtsvwgo.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163nayrodpp.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163rzfuqctx.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163xrkopcye.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163xxuapzgv.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163qjakqgug.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163zmteiwha.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163xagescgw.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163mrxvltfp.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163jcqyfvds.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163krerpdum.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163bknrkdzj.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163nqmrnzuo.html


<!-- 参考信息 -->