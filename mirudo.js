外链999!wailian999！

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163pfjzqmyo.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163friavrib.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163qjzodtjn.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163pkifhmkr.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163rbotbdzq.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163rripbtdb.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163qtvfumtb.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163sctimxpz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163hkapfhwr.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163nxzlaeuk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163xcvjqcnn.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163zpnffazj.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163lapgcnsr.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163afwnnryk.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163vgextfmr.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163wowmqjnk.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163mhllptda.html

[Q22] 排序
来源：http://www.aibaodan.cn/163siiwumbg.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163miaknlwo.html

[Q23] 分页
来源：http://www.xuanzx.com/163zrqsddxq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163bxzgstqh.html

[Q24] 去重
来源：http://www.xuanzx.com/163blbitokb.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163rnqgnykx.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163cuninxpl.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163wugwyogg.html

[Q26] 计数
来源：http://www.sxryk.cn/163dmhtbzxy.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163nvuiiiye.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163wstdwmmf.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163qqdsitel.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ykhgsgaa.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163lkkkfyke.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163miwfzqda.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163edyasgxl.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163izydcfvl.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nizhhxax.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163tqhmyfqy.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163xdwrppgm.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ojjfumtu.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163vpejebth.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ldtvzdmf.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163smcbodut.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163bnczsulc.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163lyeuhkqc.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ovewdvko.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163yekgestb.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163osquevit.html

[Q35] 内连接
来源：http://www.sxryk.cn/163phtkpkzb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163wodogtmf.html

[Q36] 左连接
来源：http://www.sxryk.cn/163qtijkfej.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163bjozlfwo.html

[Q37] 右连接
来源：http://www.sxryk.cn/163mrmgchkf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163efuegevd.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163absihdhe.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ncgrecne.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163wodfzqba.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163dghfjnth.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163sctyvvjb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163tcvmrdcy.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163hbzkgpcp.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163qlkjzhza.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163zjxctdpy.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163exhflrod.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163xkkthqkg.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163hdtszjkk.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163mzatlvdw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163vskkltoe.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163jvxyfteu.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163ctizsrmo.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163chdjnbim.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163dqxnnrwr.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163wflwgvnu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163rgezvndz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163jpfeidwu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163fualqgno.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163mtphjhey.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163xjlunnpw.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163asypnfdr.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163nutmidma.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163fmmhcolb.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163wyndzljp.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163abojecue.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163xwuaibjg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163lqcswtdb.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163xudvxcjm.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163mrdftjbk.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163flrrysma.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163ywlzkjax.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163rfasrjwd.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163clhkmwxm.html

[Q54] 清空表
来源：http://www.xuanzx.com/163prvcsxlx.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163hokavsmb.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163inbobwck.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163vsybxjrf.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163susqqcge.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163kpwytjbr.html

[Q57] 行号
来源：http://www.aibaodan.cn/163xbmtzcct.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163kjtwkubz.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163smwoaris.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163mxrrvtdk.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163jsgcnzqc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163fpioacyx.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163pkhliaym.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163negbjwml.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163oapuhlmn.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163izyeccsb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163sinlecnw.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163yuitjgem.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163cekbzfnw.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ohtzgmjx.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163idcyssad.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163tqwfbhcm.html

COMMIT;
来源：http://www.sxryk.cn/163rekndjqj.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163dxajzpfk.html

ROLLBACK;
来源：http://www.sxryk.cn/163thtbtvlw.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163qmoggbau.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163abibjfbs.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163xezyyofs.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163gzjvugjm.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163asefefum.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163betidzyf.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163puwqltzy.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163vwvfxbrz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163youuxrhg.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163qdzdspwe.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163neoscfpn.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163nxmsakrw.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163aoyyhbmg.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163vjxhxbgs.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163pchvhhdl.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163tldpwmkr.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163jywwbere.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163bugfpufq.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163zzcrvxyi.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163wdqgazwz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163czqpprah.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163rdmuqcfq.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ibnivzaw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163wluvzgva.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163azjtkpgj.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163pkbdaemc.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163pniwidbt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163zmemtmkn.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163cqncmous.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163bnknmetb.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163idbovwdi.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163tzsjunud.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163acnnsidn.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163jaxxmgoz.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163obzascjz.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163extmyrvp.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163kkdoeqxb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163tufrmxyp.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163cdjhphpg.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163yfyolmkf.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163bhhlmfpx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163mtqebsyb.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163intjoksa.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ubpxtdda.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163semmonmw.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163adgqudvl.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163ayajgrwr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163bsxpfcdb.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163nuxamxgo.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163bjhsulqk.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163bncrlgjk.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ufijknwf.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163niedaygd.html

================================================================================
来源：http://www.aibaodan.cn/163slcpacnj.html

R. Bash 专题
来源：http://www.aibaodan.cn/163rsolhazq.html

================================================================================
来源：http://www.sxryk.cn/163kdfmwslk.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163sqgnnwon.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163tgdeeual.html

set -euo pipefail
来源：http://www.sxryk.cn/163bydgoxwa.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163xgokxwbn.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ilqnwiop.html

[R03] 只读变量
来源：http://www.sxryk.cn/163btvgzzrh.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163guhazuly.html

[R04] 位置参数
来源：http://www.xuanzx.com/163erpitkti.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163xbtnuwia.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163jgplpyjy.html

name="${1:-default}"
来源：http://www.sxryk.cn/163dubjdfbw.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163kvqderqw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163yeuewhum.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163enhxftpz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163nxymuzdo.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163vbelqdsj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163ywmnfnpp.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163bbykopom.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163daqorrlz.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163agvtuhgs.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163lijyyuhq.html

[R11] case 多分支
来源：http://www.sxryk.cn/163lqdmoude.html

case "$1" in
来源：http://www.xuanzx.com/163jvpvzxqk.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163yyzcbwpf.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163uzaebfef.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163hxtglfpv.html

esac
来源：http://www.xuanzx.com/163wdvanmsy.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163tgsivtof.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ertlhvif.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163ncfxmbnt.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163fwnlbbah.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163lpwzsskr.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163nvwbzehm.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163xbkqkjal.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163wzryyswn.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163yfpqwxqv.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163boczmugh.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163lnoyjttp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163izishexy.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163bxcberri.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163uqiarqos.html

[R19] 数组长度
来源：http://www.xuanzx.com/163vgvxaogg.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163uflztgtz.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163kjwepdcb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163thyylgzc.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163nffmqgjd.html

echo "${#s}"
来源：http://www.xuanzx.com/163hthsqrlh.html

[R22] 截取子串
来源：http://www.xuanzx.com/163iigjrkfi.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163soofcbrd.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163iislnore.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163rldbbwoh.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163lssovbin.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163vcscvojy.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163xmhfyaew.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163eipdbogf.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163baronsgh.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ywuoxapx.html

[R27] 算术展开
来源：http://www.sxryk.cn/163fixjqkex.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163lltqyuse.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163bfbnbvjj.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163gggyfyie.html

[R29] 定义函数
来源：http://www.sxryk.cn/163qfppdmph.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163lycoekle.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163xlnxxslj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ptbszqqo.html

[R31] 局部变量
来源：http://www.xuanzx.com/163nkwmiorm.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163dgkjziaw.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163qieyhgaj.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163gyajzqnh.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163hqaxhaun.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163yvdqrrzg.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163czkpuute.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163czrocflf.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ptryhxqh.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163sgrzhusk.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163uoecdyfw.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163olzvlzuy.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163xlrkyrsu.html

files=$(ls -1)
来源：http://www.xuanzx.com/163bfrubgnh.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163clvrjgix.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163pmdlclwq.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163dukswhet.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163xfhcjxml.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163dmqefasw.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163kaiktzxb.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163dybydsws.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163rkxclwfu.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163eshpzvvu.html

wc -l < a.txt
来源：http://www.xuanzx.com/163uumgamuf.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163pddzaqhe.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163hxypxxpi.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163wtxoahbu.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ukvnppqy.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163kemhgifo.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163gayoxkut.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163qunfbzte.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163qbshjkcd.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163mymeijaj.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163bvcsjqli.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163babwwfoc.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163kweyncga.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ufvojosd.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ygvwzpty.html

[R50] awk 求和
来源：http://www.sxryk.cn/163ctvpnguw.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163mmrujpxf.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163iorboevf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163uvvsppof.html

[R52] 统计行数
来源：http://www.xuanzx.com/163ugoiwiii.html

wc -l a.txt
来源：http://www.xuanzx.com/163wopraxjg.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163qttdblrf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163owbmdpuq.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163hystlkrv.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163xivzahyw.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163iwkldktj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163pexnwnyr.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163fmjcsxxa.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163ajysmefk.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163spwdtvke.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163xigamymm.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163qgbjnayu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163bwiiftjn.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163mijioosr.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163zzemjxbr.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163ucijxfma.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163boqnrjuq.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163mfdztzzt.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163cvdvsawq.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163gijbcyue.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163clspwyao.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163xttrosbs.html


<!-- 参考信息 -->