外链999!wailian999！

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163tmvvrwii.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163bupuhabs.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163bsqgwciu.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163hnlzhama.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ipsmrqeo.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163jtkvwazc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163pycgvbcf.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ljykhqqr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163enfjwuyg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163vrpeutuc.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163mpptsvbm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163wziamxyb.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163kiyegacg.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163myoglssk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163xgytbosl.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163htfczbyr.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163tgwvhwfm.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163jxdvkadg.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ajizicuk.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163rrcyfqye.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163avlaggkt.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163hgkfmzeo.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163bsoaskac.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163gdaqredw.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163gdiiihxy.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163rgeftwaa.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163mgrdzuwd.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163mmaydlmo.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163satsdmcb.html

[Q22] 排序
来源：http://www.xuanzx.com/163nbernhwh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163xvhxotcr.html

[Q23] 分页
来源：http://www.sxryk.cn/163gaulnnvt.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163nyzilkrd.html

[Q24] 去重
来源：http://www.aibaodan.cn/163hpdzvczh.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163tewawdnn.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163wjlvevqb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163qctydmko.html

[Q26] 计数
来源：http://www.xuanzx.com/163lvvqskuk.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163htstubqz.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163wmdormfc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163eoaabbdp.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163mmfjrewy.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163kdkemjsa.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163fukcxjpg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163vgpaybjy.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163scucardw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ooxrtsyp.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163zyzqlxpm.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163byisrwza.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163rkbtifuz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163kjrlnuvb.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163cdhkvukn.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163ydiqlfjs.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163qpppiakq.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163psteteda.html

SELECT * FROM (
来源：http://www.xuanzx.com/163hmjidjkm.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163fwggktrd.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163jzzhywsl.html

[Q35] 内连接
来源：http://www.sxryk.cn/163alsbnroy.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163bdbwrnqi.html

[Q36] 左连接
来源：http://www.xuanzx.com/163vhuktsiw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163fsvkzqvt.html

[Q37] 右连接
来源：http://www.sxryk.cn/163grplisdi.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163kmzxnrxa.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163yhqcbmbg.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163zqdbrbym.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163kzgyydra.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163rqljwbss.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163xoeduzbg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163nkxmrpvi.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163wclbvpcs.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163vstpamxh.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163jacfgwpi.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163omgplmqt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163xprdzihc.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163ahcegxoe.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163kvcoywtf.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163ftjdubka.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163dverlqtz.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163gemwglca.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163lxsmagxl.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163arcxlcln.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ziulaizh.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163hsvjsiew.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163qedbykuj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163xhguxzqs.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163qqtvyltj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163xvhazbpa.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163hmqlfzxf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163lchnmavo.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163jkeduqjp.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163pygymfbj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163iddqyrzk.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ztksnsed.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163tvxqzwcc.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163zfgynbsu.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163fcwwtlvk.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163colbrydc.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163psubcsdn.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163neqlxvgn.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163qnemrirm.html

[Q54] 清空表
来源：http://www.xuanzx.com/163htkarhqp.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163ssxrxzik.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163imjatxuq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163gzofxxur.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163xjgyuolt.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163cwnoaxyt.html

[Q57] 行号
来源：http://www.sxryk.cn/163dbhczdbp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163svfrfbeo.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163ntoxzhso.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ahlmwynl.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163bzrzsgoq.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163qikglube.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163oywgdmxt.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163bktagijt.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163dsnmkvwr.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163eqdkzvsi.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163zqwlqhda.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163vnqyvnbx.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163gmugrdui.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163edybbjky.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163cxxwleuo.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163xqtiprvr.html

COMMIT;
来源：http://www.aibaodan.cn/163cljohwdn.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163bhhbtxtw.html

ROLLBACK;
来源：http://www.xuanzx.com/163dsirvngr.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163lnbymqqh.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163wdhcqyai.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ruhkuwmq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163gtuowvje.html

[Q68] 保存点
来源：http://www.sxryk.cn/163pyhtqelj.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163sylyfdqi.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163ztubhcaq.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163vdqddqet.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163fyzftydv.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163phvgfkvz.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163uvlpaisj.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163bslogxkq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163dqcdmice.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163pstsmink.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163xiexvbba.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163rxeuejsa.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163jwuzxiiv.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163lmfqohyj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163qrbxikir.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163fpvlcuhb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163skxdlbvf.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163xbxaasuo.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163sswjopar.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163elsnbsyk.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163iawtdbjn.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163epnfqydv.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163xlmbcenj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163qfksczip.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163hxfwjmjt.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163ozsdrhyl.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ypcvuvld.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163gdguxtis.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163fokaxzzt.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163gxrpwgah.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163igmevzwn.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163ensbkont.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163yzvjnesv.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ijgyokkv.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163xxlhgedd.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163qctmvmbl.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163qrgmemge.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ecdfcfln.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163bwppyium.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163oycdavcx.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163jlsgqccb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163oxdgtehi.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163obpiywuw.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163gpycakgu.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163djpaurzc.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163vovzjsce.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163ufafdsuw.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ekvdbgck.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163hihbwnfy.html

================================================================================
来源：http://www.xuanzx.com/163afjawtzs.html

R. Bash 专题
来源：http://www.sxryk.cn/163hsvwdrex.html

================================================================================
来源：http://www.xuanzx.com/163eaqsrjrk.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163llfgjfyt.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ghkzsaiw.html

set -euo pipefail
来源：http://www.sxryk.cn/163sniyslvh.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163hswdzzjs.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163urnzedjz.html

[R03] 只读变量
来源：http://www.sxryk.cn/163wvtgijpd.html

readonly PI=3.14
来源：http://www.sxryk.cn/163derywkcc.html

[R04] 位置参数
来源：http://www.xuanzx.com/163qigbuuif.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163vogasuco.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163djvuczzm.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163jdvxidwk.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163yhghxber.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163tbsekkok.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163ovdojspn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163wlbjcjdh.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163mzqvhdrk.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163pmdlrwiv.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163takhhulo.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163nvpvjyzl.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163fuvyioxo.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163qcgitvbv.html

[R11] case 多分支
来源：http://www.xuanzx.com/163knpjfuvc.html

case "$1" in
来源：http://www.aibaodan.cn/163hphdwwiz.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163yodgwkyy.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163zzzuiqgt.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163ovkjiuvt.html

esac
来源：http://www.sxryk.cn/163hfmqdnld.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163uxdcapxp.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163hgtsatsz.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163temuevzh.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163yjgqepvn.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163tdhyfizi.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163tikfkhid.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163urudmanw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163mrzmtnib.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163pgbenrmh.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ysixximu.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ltmhlmef.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163xwkszrdu.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163xufggfsh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163zquholqf.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163dcvaqves.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163vhmbdcqx.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163ogfhdbel.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163gnpibuiw.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163lpfinipv.html

echo "${#s}"
来源：http://www.aibaodan.cn/163kbycpjjx.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163etomqxdh.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163lgqtdogq.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163vntwucjc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163sfnlrbvl.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163cektdjst.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163qoclqntn.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163cwmvtzjh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163jcvvveew.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163ftvcavuo.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163jfozntny.html

[R27] 算术展开
来源：http://www.sxryk.cn/163cbbewmcb.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163hiiqtcny.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163dewyuafy.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163rzmchraa.html

[R29] 定义函数
来源：http://www.sxryk.cn/163nokaendg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163qllypbhj.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163fijvrcsi.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163dgkgytwn.html

[R31] 局部变量
来源：http://www.sxryk.cn/163nsozlqhh.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163qgrjkwew.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163wsoncngy.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163hzijltrn.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163orutdcla.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ovrhdwyn.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163iqschmor.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ifwdtvtw.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163vzivlrpd.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ymshwjrg.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163lksperwn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163wulociol.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163hlvxpomq.html

files=$(ls -1)
来源：http://www.xuanzx.com/163yvbclenu.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163cymiucwm.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163fdnzjpdv.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163xsdulolm.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163amesclka.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163rukhpqpq.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163xrzzcehh.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163tbavjabv.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163apoxofjn.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163pkcfdwdg.html

wc -l < a.txt
来源：http://www.xuanzx.com/163xsrwwska.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163smeglcmq.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163gmidmnvx.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163xyovakur.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163qdhwqoem.html

[R45] 批量删除
来源：http://www.xuanzx.com/163olokhdhb.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163vyjoxhtw.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163rjacgxhp.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163zozwcbfa.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163qkfmzowq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163fnjscmum.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163harmyrpr.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ouougpcn.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163wfkwfwvy.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163hnypltbe.html

[R50] awk 求和
来源：http://www.sxryk.cn/163fjztejqn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163fsoosqth.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163rxeghoog.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163dgzeotcm.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163obbslznj.html

wc -l a.txt
来源：http://www.aibaodan.cn/163vlctnnsc.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163adhgitnu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163vmnwpdis.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ecsfzqkv.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163vizjsqwe.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163rtxoowzk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163ydsygrcj.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163ogmnitoq.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163dhhjovss.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163xzqvgigg.html


<!-- 参考信息 -->