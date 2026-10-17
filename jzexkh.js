外链999!wailian999！

SELECT * FROM users;
来源：http://www.sxryk.cn/163zzyxaayt.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163ridlxwqx.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163vkrxkuge.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163qqdhhafi.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163bqsyqbua.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163ftnkfeug.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163ozqgplmt.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163nlcfyyfp.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163pnyevvsz.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163khqawhml.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163wgoobtnm.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163azvonjgt.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163jluxpbye.html

[Q22] 排序
来源：http://www.aibaodan.cn/163fsxlegme.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163lwmivliz.html

[Q23] 分页
来源：http://www.xuanzx.com/163csebejeg.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163jqnotrox.html

[Q24] 去重
来源：http://www.aibaodan.cn/163tilrulxj.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163lpvjbuql.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163nfglbscw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163yrnxgmgt.html

[Q26] 计数
来源：http://www.sxryk.cn/163juqxbpdb.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163sjlwlgip.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163zfkqhoac.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163eyzxuyoz.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163iiemyrma.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163xtfgavai.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163qoewgwzj.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163uxinovmb.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163yqouqgil.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163zpuauqxc.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163ofsicnad.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163httbghee.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163quuzvejg.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163mwwjmjvm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163utrjsfpw.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163xrkkzumw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163ruwcsqoa.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163hrocycqo.html

SELECT * FROM (
来源：http://www.xuanzx.com/163nqwkbsce.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163wzqbgdxl.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163wmwdblja.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163easkwxxp.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163hfdtrdvq.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163unobklte.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163mxbhwesi.html

[Q37] 右连接
来源：http://www.sxryk.cn/163aabfxbjm.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163szgoedwf.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163fmqmmldt.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163oygyxgiq.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163rafowyzy.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163nhyaldvv.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163nllyuxdv.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163wttebwje.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163lgeltetl.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163zeedfbxv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ukihaelt.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163mojxwrhe.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163jwpaqkgw.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163moymtvwn.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163rbtoziga.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163swjotokb.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163vipluvqs.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163xxwshjou.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163avonmtsy.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163spfxxhau.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163aoekrfnh.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163okidpast.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163gnttwkkt.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163apndyskt.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163nidoodti.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163zvdsexrf.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ilhletnl.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163cvsurdnq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163vqmardjh.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163pnvqrxna.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163kwkzofce.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163ovnqbgby.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163hewwrewm.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163ybraleck.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163nymuigzs.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163fowukbmr.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163vclxjdqm.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163alfptqag.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163mzlfazaz.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163kzyolhkp.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163wqexvajo.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163txbqmxrp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163fwtncxmg.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163rghontxa.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163mdzafmug.html

[Q57] 行号
来源：http://www.sxryk.cn/163eqlfadzp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163rrrlnwfb.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163yiaiheyo.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163jnyxekuk.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163wyppzacz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163kdwelyas.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ndlzbhil.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163acrtncrj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163syjvtceh.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163cwsolaom.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163pnwsfthy.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163hbawizba.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163godosnei.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ypdaiier.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163dhsurwsg.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163fwicwxcf.html

COMMIT;
来源：http://www.xuanzx.com/163gaynldfn.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163uwnyrbgv.html

ROLLBACK;
来源：http://www.aibaodan.cn/163jxwguzbz.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163yeavwhei.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163yxzovtrw.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163bxwzmojh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163bqccvstt.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163vkkluozg.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163mvpbehgr.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163ceyadbcn.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163nzxwwqtj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163jqatgcql.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163aitucmga.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163tymakjfg.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163bnfnzjan.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163neulatpk.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163lkjeuhmw.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163aogndirz.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163rsmksxxi.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163antckxqv.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163lavdpuze.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163rivgtkge.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163sqkfgtfm.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163eltimjaf.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163chsooxno.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163yzhsbcwa.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163qfjxbdap.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163kjjvmsdr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163bbbezgeq.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163xbhxdjre.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163vzwkvrmh.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163qotxoljr.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163althzuls.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163eqndukuu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163tkviqcsg.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163bbnxcgzz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163biaqymuq.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163yzvpziph.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163zdqstnie.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163iqracgcl.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163arilvpve.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163jxgrwnqg.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163wlfhawsn.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163kvqfxsmm.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163bbcsatpq.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163owahnxvb.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163drjownay.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163cdqweaup.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163qhclxuxv.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163lbuqcndw.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163ffjykgxq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163cxzsffiv.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163lbmjovul.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163mxxijudx.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163hiisnqjh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163cpgpeclx.html

================================================================================
来源：http://www.aibaodan.cn/163nmgyyjnl.html

R. Bash 专题
来源：http://www.aibaodan.cn/163agkczaqn.html

================================================================================
来源：http://www.xuanzx.com/163jkylestr.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163xltmyejf.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163sprzrwmy.html

set -euo pipefail
来源：http://www.xuanzx.com/163nkvqvmgq.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163gihjoowh.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163ipwflfkm.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163tzmjlioe.html

readonly PI=3.14
来源：http://www.sxryk.cn/163rhsqgnaz.html

[R04] 位置参数
来源：http://www.sxryk.cn/163mtdzhniz.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163foxqudsm.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163vrnphgsw.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163zlcsyerg.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163mnsdtmbr.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163iecujoqn.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163pgmedgla.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163tlxukipb.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163anghlcrn.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163srrlweis.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163rnellwdi.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163jkzdpexl.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163uxfsujpm.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163mtitgidf.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163ooqqalbg.html

case "$1" in
来源：http://www.xuanzx.com/163irsznrzb.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163udpfmkkm.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163zuyeshss.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163gfzcxkuq.html

esac
来源：http://www.sxryk.cn/163dnrieznz.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163npxwkhnj.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163dfsnsjiz.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163dlbphebl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163eywjxhhm.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163lsrxsjou.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163jmutzgce.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163cdiamzbt.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163cfjgwvoi.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163ewailndx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163qucnyjpe.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ioyzuyoz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163owwdaquz.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163vlzfzaae.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163mfwqwvpo.html

[R19] 数组长度
来源：http://www.sxryk.cn/163fxpmxbqa.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163xsbfflop.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163hwutdifx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163zmxylvvv.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163roxsmels.html

echo "${#s}"
来源：http://www.xuanzx.com/163ukqutejn.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ktibbhdt.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163qpwmiexb.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163wbkcphjs.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163skuplrws.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163utssbdba.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163qrqtdtwg.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163lahvflqs.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163eakzusil.html

[R26] 命令替换
来源：http://www.xuanzx.com/163wtadlehr.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163jbdtcdvy.html

[R27] 算术展开
来源：http://www.xuanzx.com/163kuynyfzq.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163znxcefif.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163itcwmxbg.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163tvksoqfl.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163lgkmfite.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163phaurdac.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ughmkocn.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163omrsjmyp.html

[R31] 局部变量
来源：http://www.sxryk.cn/163aifwohcu.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163vgitxbct.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163buzjnges.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163yfpdmpur.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163ppztlcpa.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163lywotezk.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163rojjctui.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163hfgonumh.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163kykxzhed.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163iahaplrn.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163tpwsfutc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163weflbhvo.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163quhmzpnd.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163odxixpkf.html

[R38] 管道串联
来源：http://www.sxryk.cn/163bvglowwu.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163omvasxrs.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163drxzwkrk.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163qxnlzwlo.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163mmsmuqps.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163mjhffzbh.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163vlmgidhg.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163fmhhvduf.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163czwuyigu.html

wc -l < a.txt
来源：http://www.sxryk.cn/163qmmdflwi.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163vciplogf.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163sdnnaozv.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163ompjkdmx.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163aurzukbf.html

[R45] 批量删除
来源：http://www.xuanzx.com/163wagqmepe.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163tugwaffm.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163knevnjca.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163nwlgeesv.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163iptpudba.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163qbjcbyfy.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163hpvmssej.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163xqrfszua.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163nmtcgtxh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163vrijvzxp.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163mbfxlwgl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163bjhmtagd.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163owupgqlu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163zbpcinup.html

[R52] 统计行数
来源：http://www.xuanzx.com/163iqpwpbes.html

wc -l a.txt
来源：http://www.xuanzx.com/163qzonekby.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163oipjkjdi.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163upgpqyxt.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163sepsgivt.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163rwyurstz.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163areilrwj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163ssbkjaux.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163rikossnn.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163soosfcfj.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163mjujejjk.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163ylmilysw.html

[R58] 下载文件
来源：http://www.sxryk.cn/163rzqfwpol.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163uqjiqdgn.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163nnoiwsly.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163dknthuxy.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163tcfuxkku.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163uhsvtdim.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163hmjfcdei.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ciabducj.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163hjwwkvvi.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163xggdemlv.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163moqcweyq.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163skglpkqu.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163hphckshn.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163fvapbwgg.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163cfggvpea.html


<!-- 参考信息 -->