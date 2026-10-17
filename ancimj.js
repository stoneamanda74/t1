外链999!wailian999！

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163hwkpzoko.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163gaoxcrmf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163uhalzpfw.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ifgmcdvk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163yzlmodrf.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163cyundjux.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ltvptjdb.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163mvtoouwc.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163epmuxyrn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163eeirvlhe.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163reyqpsfi.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163zxurftfk.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163hpmjhiad.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163dthoveqb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163cfvzscrd.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163hbwobjyu.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163wwsfurvw.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163qdtetqbu.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163nhldyble.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163passsguy.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163mrbkzcla.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163autrpipp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163filarjkz.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163eskkrwno.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163pcgtypqu.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163dvwhaasa.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163qimgkvyg.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163bkcjckcp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163zznmnyoe.html

[Q22] 排序
来源：http://www.aibaodan.cn/163raazwtfs.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163fgiheiwh.html

[Q23] 分页
来源：http://www.xuanzx.com/163lgdpjawa.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ioetilxn.html

[Q24] 去重
来源：http://www.xuanzx.com/163erytkcsq.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163wzpnpegy.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163iwtfetbd.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ogrtmjcs.html

[Q26] 计数
来源：http://www.xuanzx.com/163eavohsii.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163bssoxvvk.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163eakxsiqh.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ambxbaru.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163iktltbxj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163sluxcgss.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163ubmxbkhf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163hznzjcsy.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163uymtcynt.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163rafzuggn.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163ithxmybx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163wkxykmoh.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163vtgxabjz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xqglgdrw.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163adkqheuu.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163inycmtgy.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163crlexspb.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163klnqizrm.html

SELECT * FROM (
来源：http://www.xuanzx.com/163iywfwuek.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163pphvsupg.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163rpusfsuf.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163thmorjam.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ixxkikfc.html

[Q36] 左连接
来源：http://www.sxryk.cn/163jzcruyyq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163eijgburw.html

[Q37] 右连接
来源：http://www.xuanzx.com/163mihgijod.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163bvwitamt.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163hsgadwvf.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163vrrasxsk.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163yapuzlps.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163xerpzzsr.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163upxmfdka.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ooeihrrs.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163blvuruyd.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163uqbcsvbp.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163fjczfokt.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163mxagdwoq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ccgstrkr.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163tmcoveue.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163qvwarkwt.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163soojdsnd.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163aybhbpzk.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163yacnryst.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163vavponsp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163hzhvbmhx.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163pcigczlp.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163buozhmfa.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163jjjqjklm.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163rsyyafuj.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163hdjjlwqb.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163qhfyqmrb.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163jzkqrhcj.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163cemnejjt.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163vdooqfxk.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163xopjuefb.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163gnrfpfdg.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163chriqrur.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163botzzxam.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163inrttgqm.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163acrergki.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163oatndpme.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163tpzemtml.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163fpotsxrg.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163ozldkdxd.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163ieidetuz.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163xrvgyrej.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163ranmnngj.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163xvhvoajv.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163kwsihkos.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163qxnjypkn.html

[Q57] 行号
来源：http://www.aibaodan.cn/163valuimtt.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163vzjrxtoa.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163jlwwkrsj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163swwglbsf.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163gdxpmrdn.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163yjncwfpn.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163bxqprott.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163mbgxqnpv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163mhuemmby.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163holzhfdr.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163lkercthb.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163rasllolu.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xacnzhti.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163uenvctwv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163owfhvkis.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163bzzyobay.html

COMMIT;
来源：http://www.xuanzx.com/163ujutyykf.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163atowhouf.html

ROLLBACK;
来源：http://www.xuanzx.com/163mkavjrky.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163fmcrmjmf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163nniwzyqb.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163jspvkylt.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163xlrbwqhj.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163sodpxpka.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163nomhajuc.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163tphojvjs.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163aeiqeovc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163wgrqxoij.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163xhzuodwh.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163kpiynkvm.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163fomrzovk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163jwdocxax.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163bitjgayw.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163jwbxltwy.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163mydqagrz.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163oijgumpb.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163woakrbeh.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163lukuursr.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163hogiziyv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163aryyvzwf.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163iclikvce.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163mdreiqao.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163pjjbwega.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163rusjxyka.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ecfcazvn.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163yougcmpr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163rstqoixy.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163eqeurwfb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163hwswssjw.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163xyfuyfsp.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163udkvdorw.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163hxdgshmi.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163ouxpwbip.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163gkrkezxm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163ykzpjpje.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163osdkpnkr.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163hskzlsih.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163wqwlykok.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163scjzeckj.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163fsxwqnsu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ytssqyxg.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163qhmgnbxx.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163efduzrzv.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163bcvsyuxp.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163vklwoimg.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163rqtdmtza.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163knuwieik.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163rdaqtjch.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163kndtcedy.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163jhxagozg.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163rkjftcfu.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163imccqhso.html

================================================================================
来源：http://www.xuanzx.com/163sxjkztrj.html

R. Bash 专题
来源：http://www.aibaodan.cn/163bzywabnw.html

================================================================================
来源：http://www.xuanzx.com/163ljcgszrj.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163apwhrayi.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163nodzxprz.html

set -euo pipefail
来源：http://www.aibaodan.cn/163pxtadohv.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163wedvkcvo.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163iurusimq.html

[R03] 只读变量
来源：http://www.xuanzx.com/163aflbtmpm.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163hkbhuakw.html

[R04] 位置参数
来源：http://www.xuanzx.com/163oppndpyo.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163sjoqjryv.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163tzwmiamu.html

name="${1:-default}"
来源：http://www.xuanzx.com/163fxhviagq.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163hxapizma.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163bcfwmebs.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163xnpgossk.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163prejvdpm.html

[R08] 数值比较
来源：http://www.xuanzx.com/163erootdpu.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163jgfvbuxi.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ovtnxjvb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163zdlddygp.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163zgfbsygh.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163wuxbhrmr.html

[R11] case 多分支
来源：http://www.sxryk.cn/163tlmbxhqy.html

case "$1" in
来源：http://www.aibaodan.cn/163hlagtpon.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163rquhyjew.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163tjgijyqt.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163vdzigfpr.html

esac
来源：http://www.sxryk.cn/163pqjnsdqb.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163kkuqarvz.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163srzcvwtb.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163jftakhwe.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163fbvhmtvf.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163gagoyopp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163nkhmvxkm.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163pqvlnhrk.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163onnbbcjw.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163mhmfearf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163dekrhayg.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163tjgfdwfl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163vsgofcps.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163fthphklx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163rmqoznzs.html

[R19] 数组长度
来源：http://www.xuanzx.com/163zosuwdgy.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163tiofoncm.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163yofxmgju.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163qnmnyuho.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163tqxckzzg.html

echo "${#s}"
来源：http://www.aibaodan.cn/163hdauyknn.html

[R22] 截取子串
来源：http://www.xuanzx.com/163xlgmtnuq.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163viuwrkll.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163wpyyangq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163tdiifylk.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163bynfhyyi.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163mygtwahk.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163cjqjvbsi.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163ustvwsty.html

[R26] 命令替换
来源：http://www.xuanzx.com/163qyoxmcqx.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163wuczxoyp.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163shmvplwi.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163spsaadpf.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163octetxzo.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163wgoquwnr.html

[R29] 定义函数
来源：http://www.sxryk.cn/163xugcgjzw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163kudhlvbv.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163cquvzsew.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163cxlrszgs.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163tndziwlf.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163egomlfgj.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163tbwscghh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163lnlogjsz.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163jgfojgdi.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163asswgcdw.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163biiigkeh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163cuccshew.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163oquunozi.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163tfsvzdup.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163epwyjegm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163jmioemir.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163nldchsra.html

files=$(ls -1)
来源：http://www.xuanzx.com/163kgtretvm.html

[R38] 管道串联
来源：http://www.xuanzx.com/163kfrtsefb.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ezedqeqf.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163lqayfdia.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163nuyedtep.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163zowpbqoj.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163jkbykhtt.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ybbfdywq.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163rnitgjxi.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163rncttbde.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163rzbdxtmp.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163fktownzi.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163sknqogwz.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163dqivwaib.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163hlwwzwfx.html

[R45] 批量删除
来源：http://www.sxryk.cn/163emimqijo.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163tdebtnwi.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163nmynivyo.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163sshdhqdg.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163lyqqsmds.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163koutzpun.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163bobwintg.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163wlgmbiur.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163uvogrsup.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163tfqlfrad.html

[R50] awk 求和
来源：http://www.xuanzx.com/163sjpbcxfa.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163scgsagfr.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163hbvlpzxe.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163emzrduxp.html

[R52] 统计行数
来源：http://www.sxryk.cn/163lqwnnmjz.html

wc -l a.txt
来源：http://www.xuanzx.com/163dmcjftgr.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163xvdwgdqf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163xxwjhjzd.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163oluvrusp.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163atqibegg.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163whkkwyqr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163vvyydwyl.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163iyekmtpy.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163doiwpktt.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163glrifhpu.html


<!-- 参考信息 -->