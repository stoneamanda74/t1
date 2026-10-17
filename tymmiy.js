外链999!wailian999！

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ytmagmga.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ibduzjic.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163qxvljzov.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163dbbwhlle.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163llkzkcqf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163qwvofiid.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163cjilrvql.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163qxjgdwsc.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163ptycqusb.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163bmipiiuy.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ksfetlat.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163bpfmlomq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163immlnjxn.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163aggqlyih.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163gihmifon.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163vwepbdae.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163xcbbnlep.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163zbvzxxaj.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163sobtebee.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163clsvsvxn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163jdgqrccv.html

[Q22] 排序
来源：http://www.sxryk.cn/163tzudspph.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163gkyporxq.html

[Q23] 分页
来源：http://www.xuanzx.com/163sbwadqdd.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163akmqskti.html

[Q24] 去重
来源：http://www.aibaodan.cn/163dnpnwgrf.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163wijiveue.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163gjnqywzk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ztsqpuvw.html

[Q26] 计数
来源：http://www.aibaodan.cn/163bheiugei.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163kjcvysbi.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163sankxhnm.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163zhwvbjmc.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163uuvomtxr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163lfiqrvhx.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163cwqpsxgf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163srnvuqyh.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163fhkbhxox.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163kickzngy.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163rcyvytys.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163hvhkkdps.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163jrqxmdaj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xcvnvmfz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163zxnwchxz.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163wlmplgex.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163gbrldbgb.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163kylkzgrz.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ljsikxzu.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163jyvtpnnq.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163ahzfgaah.html

[Q35] 内连接
来源：http://www.xuanzx.com/163uqxlejxe.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jyzytzse.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163lcpyfpuf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163rsngoeio.html

[Q37] 右连接
来源：http://www.sxryk.cn/163yknuaxwo.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163bgvogifn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163hcqhgxpa.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163hjjnffkf.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163efkxlhpj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163wvmmtfay.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163aitvxkzc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163wkuskwcv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163gkcwnjzn.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163wsqgpkvt.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163esvsufws.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163kpiiowum.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163joxfvuhu.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163lsapszgh.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163vmowpoch.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163fawdssad.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163hawpggov.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163wawkboem.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163uhzpqepg.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163loscgxjy.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163vgcjsrif.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163sqmvfwkf.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163eeckvpgp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163lmyvijha.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163skaohzhp.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163ezfuxfky.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163yacbuahl.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163iojkaqys.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163qdchrnre.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163rijlvpqn.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163eejjlipg.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163avoisygi.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163gwzehnyw.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ebsjvzvv.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163mqhcjhdl.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163afovvqdh.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163qqeobavm.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163hdpmeqde.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163qtcmykpi.html

[Q54] 清空表
来源：http://www.sxryk.cn/163mkuojwrl.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163bbxzubek.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163tpyxpbmp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163qzfsumbe.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163dwrbtaee.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163inimnrfj.html

[Q57] 行号
来源：http://www.aibaodan.cn/163magnvptf.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163prgwvqxh.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163xuhqymam.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163aouiyttc.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163bnslehbp.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ajftxtwa.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163hnxywihy.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163vqeantxs.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163qesyzkwx.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163bcfaxrgg.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ebeoxycl.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ushxvabn.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163miyitxti.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163amenndyf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163vuflxqog.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163uxnktwyh.html

COMMIT;
来源：http://www.xuanzx.com/163uhskejxp.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163ynqyxjnd.html

ROLLBACK;
来源：http://www.aibaodan.cn/163zoabwevy.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163josakdsm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163wjucazch.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163buwzvsmv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163gmughdev.html

[Q68] 保存点
来源：http://www.sxryk.cn/163fveoaggu.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163xfhhhlot.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163bmwtarhy.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163fohffnoc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163rpuxkjuk.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163vjhlahfs.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163blliuslb.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163hnlhiisk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163mfsgfptx.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163uhkcpgwf.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163pbvaealj.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163cstotvgl.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163jafqidtv.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163ujavhniu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163gzxuhixu.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163xmrxxnmo.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163qyoghbqa.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163bexeomsm.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163ahslxawo.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163shopzetf.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ejhobcbc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163racfzuxd.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163zfibpdft.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163ywheuqxp.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163llimondp.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163zrusiots.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163hpksmyop.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163wlzybgas.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163qhrqyahh.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163csqueozv.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163odpzvtmg.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163wdtuxabt.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163mygmggsc.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163snlpaxce.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163moqydiee.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163neztzett.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163spwjknuo.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163tlganxsn.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163tnewaloy.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163xcvulbwo.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163cailcxuu.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163vwqqphok.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163zpjmjtbw.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163phybpggv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163gyuwgwwz.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ttqpzbnx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163gkjuqnhz.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163lryistqs.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163mabkeydr.html

================================================================================
来源：http://www.xuanzx.com/163onnemroh.html

R. Bash 专题
来源：http://www.aibaodan.cn/163wanfzldq.html

================================================================================
来源：http://www.aibaodan.cn/163xhytaxqw.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163elmhyoiz.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163rlskuloa.html

set -euo pipefail
来源：http://www.sxryk.cn/163okqfhyoh.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163mkzsyjye.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ycalqoog.html

[R03] 只读变量
来源：http://www.sxryk.cn/163yywcgcxb.html

readonly PI=3.14
来源：http://www.sxryk.cn/163wbeiylgz.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163zpdxpqhb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163jdetrroi.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ofjugwwk.html

name="${1:-default}"
来源：http://www.sxryk.cn/163kvfquekm.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163tycpbsrb.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163kcpfjmye.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163yhwmnwuj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163rlrappvo.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163ymtqadsl.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163fmazgjlw.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ctpjkgmm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163ngdyorra.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163qwcgtjcb.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163kpmtjiga.html

[R11] case 多分支
来源：http://www.xuanzx.com/163xgodtyzm.html

case "$1" in
来源：http://www.aibaodan.cn/163dopzgnsa.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163cwwqrdcm.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163aiejecrm.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163kvyvbbjt.html

esac
来源：http://www.aibaodan.cn/163mchwjjjq.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163yolzkckq.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163posmuqso.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ddgnzzdl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163pkzqdiqe.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163xvvahxew.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163xbchmdnf.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163mmrndcev.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163kkkaupmi.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163vxlgqonl.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163pgkxwstj.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163pbgicoin.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163segtffwb.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163xgrbighu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ohkxpkwz.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163lyfdtouz.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163canodwyi.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163miwamyjs.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163pmdyjgmr.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163wxzcdgxe.html

echo "${#s}"
来源：http://www.aibaodan.cn/163nttrqdrw.html

[R22] 截取子串
来源：http://www.xuanzx.com/163zglwrgqh.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163drbycvbz.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163gnlmhlkt.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163qotghwqt.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163xefflwuc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ubftfomz.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163dhxfpiqs.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163vafhrbld.html

[R26] 命令替换
来源：http://www.xuanzx.com/163pxjjites.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163nfysxyvb.html

[R27] 算术展开
来源：http://www.sxryk.cn/163pnlqwcbb.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163skliuvuc.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163zrxppqpz.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163arxsrpwv.html

[R29] 定义函数
来源：http://www.xuanzx.com/163mbbasjmk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163mzgeauxy.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163qyarvweg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163dhojkqjl.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163wvdpnyzx.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163hlfjofri.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163tnewtelk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163gedyrdmf.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163gyqmpbbp.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163cblsqixl.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163dciizpxu.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163mhyxkvzh.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163qkklrshq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163aynydntr.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163idorvksg.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163jegrtoss.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163dhryijvz.html

files=$(ls -1)
来源：http://www.sxryk.cn/163iifydgpk.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163pzpvbdwc.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163blqiellb.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163wxsrjque.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163sqapyzwq.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163ixmxmmpd.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163utxuhuyb.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163anpsxtyw.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ifbulihm.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163aumqshcz.html

wc -l < a.txt
来源：http://www.xuanzx.com/163mzoaelul.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163gywuaolb.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163kwbdxafu.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163lqhwakau.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163atkjbntj.html

[R45] 批量删除
来源：http://www.sxryk.cn/163wwgyvigy.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163rjqqfnfi.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163tcjysqxq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163asluaxhp.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163agugjxsi.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163rljoyaet.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163fdsrzywk.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163mnvmnjfq.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ccososgj.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163zswxhqpw.html

[R50] awk 求和
来源：http://www.sxryk.cn/163ygfhdeat.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163gebixhax.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ciuojnwb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163ptfwcnru.html

[R52] 统计行数
来源：http://www.xuanzx.com/163wmlujyam.html

wc -l a.txt
来源：http://www.xuanzx.com/163hyvdtryp.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163rsbwbyvb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163focnhsos.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163vcetparx.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163mcqjkbcc.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163szlmtafu.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163ceuadgle.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163abdozqgd.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163gdltxavy.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163xqfsyhjs.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163iushscjp.html

[R58] 下载文件
来源：http://www.xuanzx.com/163vpzdbhyr.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163ikjhofzs.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163xzlcujec.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163meuqgdkz.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163rswxkukq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163sucsthss.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163tywkqbmi.html


<!-- 参考信息 -->