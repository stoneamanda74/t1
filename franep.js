外链999!wailian999！

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163akzacjhp.html

[Q22] 排序
来源：http://www.aibaodan.cn/163uirilkvh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163heqymmqv.html

[Q23] 分页
来源：http://www.sxryk.cn/163mwlksvhn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163dvfjlbqr.html

[Q24] 去重
来源：http://www.xuanzx.com/163hkvpasnp.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163jhznjiij.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163wxwirqmp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163qmlzmpuj.html

[Q26] 计数
来源：http://www.xuanzx.com/163hzarnwlg.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163phntbdih.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163uppnvtzg.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163gyfxlnxw.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163kuaccsdj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163whwfckky.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163fqhxgdfg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163ogeykrqw.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163rbglpehh.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xiedfkww.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163nyohleqd.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163tvgosxsj.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ozhaefbi.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zbidrdgu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163xjrguamn.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163rbmnhwwl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163yzeounyf.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163txbivwpp.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163odjoefci.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163dkxlsnzn.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163ugztistr.html

[Q35] 内连接
来源：http://www.xuanzx.com/163qpgpdias.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163jrkbtcrl.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163fciofspv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163iljrkiwb.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163jrcjtrfj.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163egasalff.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163sflihmha.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163jifbrqoe.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163obvmzunb.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163imdyjnvz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163rtlwapdq.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163mlzgpfyu.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163zbmsjsco.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163atyamzqi.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ovxeayka.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163jreezowu.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163otmdjeyu.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163gdqtaszy.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163iohzgcop.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163fzyhhnzr.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163yybsrlnt.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163plaguatv.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163scfbskxk.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163cvyfolgy.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163btwndahh.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163hvnuswxb.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163jbaiwbci.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163oyvcmsjs.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163xhtrxios.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163svfonlbo.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163vpqrerat.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163eigpygrv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163xcjsdlwz.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163pnzjgruc.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163ljllpuwm.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163czmtjypr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163dfljzvof.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163xvdcyixz.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ftgdravq.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163bqvchiii.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163vembkmjz.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163yfpcpryf.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ygdpbfsp.html

[Q54] 清空表
来源：http://www.sxryk.cn/163cyueszub.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163jnirwbja.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163lewbkmex.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163yzgqawiy.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163oboomwmi.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163ozpvssur.html

[Q57] 行号
来源：http://www.xuanzx.com/163pclqbsdi.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163icspvxhw.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163rwyfwtym.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163yzavtunk.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163etxuauxi.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163bzqtlsad.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163estefsno.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163neazdsil.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163waphmxep.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163qzdwozvm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163dkhdhrpr.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163miehjocj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163schltghn.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163uzkzwzay.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163fxqvjpzn.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163falxmtns.html

COMMIT;
来源：http://www.sxryk.cn/163vyzilkui.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163pfdqidzo.html

ROLLBACK;
来源：http://www.aibaodan.cn/163nsovbyno.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163uohpwbrq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163zlgrvmly.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163uzyrijbn.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ddmolzbf.html

[Q68] 保存点
来源：http://www.sxryk.cn/163zlaufkwg.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163npjqldgo.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163bwqdmzku.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163mnfcgbpb.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163aqqxtqov.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163iajzdidt.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163uiafbrtf.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163oxzobilh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163bmqiotsl.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163tlowgjxr.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163eeefmoir.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163xsgpyffs.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163ltxkslnm.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163xqpmfouo.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163vqczzdii.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163srppkmku.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163xlxnhajp.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163hjdsfolr.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163joydywqg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163wulerqxw.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163btwvhpqc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163nimjpukp.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163notrsucw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163gruqpvbc.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163fnupwexl.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163lccrsioz.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163ctvahvha.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163ntyovdzl.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163pmibslxb.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163atgajbir.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163sgkutkux.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163egmutdtl.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163copfhryd.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163chzngget.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163mpxeplgb.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163obyfwhzh.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163anjtvoue.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163xwxlfhaa.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163gwujlizc.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163mbkleiah.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163lbdpssto.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163bqaesovq.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163bxbeuqke.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163jzoqfkos.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163xgdvbjwb.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163shlccsxj.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163sdgsbyfx.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163udvfzuxs.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163trqnehda.html

================================================================================
来源：http://www.aibaodan.cn/163rlgtlwjm.html

R. Bash 专题
来源：http://www.xuanzx.com/163zhynwruu.html

================================================================================
来源：http://www.sxryk.cn/163owlfqtzq.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163rsuwqkhf.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163kcgqfxsw.html

set -euo pipefail
来源：http://www.xuanzx.com/163qjvdxpfp.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163nxexriqi.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163gvpcbsab.html

[R03] 只读变量
来源：http://www.sxryk.cn/163lalahfjj.html

readonly PI=3.14
来源：http://www.xuanzx.com/163rusqfluj.html

[R04] 位置参数
来源：http://www.sxryk.cn/163yqnpuujr.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163norzvhny.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163owzhulte.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163dhnkovhz.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ypzounpz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163bglluiiv.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163rohjwqod.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163ulnpopno.html

[R08] 数值比较
来源：http://www.xuanzx.com/163nualznir.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163zxxxeiue.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163zebvuxqd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163jycznhjq.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163jnflgkmq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163tgewpmuu.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163odlalgej.html

case "$1" in
来源：http://www.aibaodan.cn/163vktwqahz.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163jounnfbw.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163wvioqlim.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163mludlcri.html

esac
来源：http://www.aibaodan.cn/163ejbscfex.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163jbofrrml.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163bziurivj.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163owvkwoae.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163scszbbju.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163mcenztmz.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163rampgbkz.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163auimgqmb.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163cywiiuem.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163kcqgprhd.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163qjyinjvi.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163bkduuoeg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163lahveidy.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163amrpetzc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163soppkdxi.html

[R19] 数组长度
来源：http://www.sxryk.cn/163gfpycydh.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163jgwlyilk.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163eutfgetb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ykrkutqk.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163nhkpvqnj.html

echo "${#s}"
来源：http://www.sxryk.cn/163pdubafno.html

[R22] 截取子串
来源：http://www.sxryk.cn/163waduckhk.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163euhsktln.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163oqiszvcs.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163vpbavrer.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163udtriuqz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163llxhpenh.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163icmrpnha.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163tmqgaebu.html

[R26] 命令替换
来源：http://www.xuanzx.com/163znnzlazs.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163yxzwxrbe.html

[R27] 算术展开
来源：http://www.sxryk.cn/163xihffbgd.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163sxkowcpp.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163rxtnezec.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163jkfpoqkj.html

[R29] 定义函数
来源：http://www.sxryk.cn/163kgavgoox.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163jkeqimsd.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163hwlmfcvb.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163ayvkgipl.html

[R31] 局部变量
来源：http://www.xuanzx.com/163clpzfxrv.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163swpyyuqj.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163ayquyggv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163kttqtxgs.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163wfbgoqim.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163lssljqdk.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163tzglsuqq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ogtpktck.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163kuzquzwz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163siyhhlal.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ycegppby.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163sssazowg.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163mxrqmugb.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163husnhxlm.html

[R38] 管道串联
来源：http://www.sxryk.cn/163sysjsrwc.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163yqfewrjf.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163sskfevch.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163dbsbdiqb.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163hxhxondg.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163wimuyvhz.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163gdrrghkl.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163wmzlbqqu.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163pjoiyext.html

wc -l < a.txt
来源：http://www.sxryk.cn/163lagbknzs.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163ubkkggxh.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163nxokoaxj.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163qduhjven.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163elhboelz.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163vqlhzhec.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163dizltytm.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163xfpegbjv.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163wkfnludl.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163hcxpbymq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163icbqxoud.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163jzvvmqzp.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163raranymj.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163jqosjrkk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163zvwavxye.html

[R50] awk 求和
来源：http://www.sxryk.cn/163kweywunu.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163ijcvcrec.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163zijmutlx.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163rlodxeya.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163xzwfndcr.html

wc -l a.txt
来源：http://www.aibaodan.cn/163qmuoigwh.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163qxdaxeim.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163ehjyrkaj.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163kdpmbxbb.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163zfbnblue.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ydswlplr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163tdmazozk.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163fbbymdun.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163oqoyjfnp.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163fpkgqbvy.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163nhhezdoa.html

[R58] 下载文件
来源：http://www.sxryk.cn/163kbqppzfz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163mpprbgxs.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163xkwghgyv.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163kxkqpibn.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163bbnhvuqb.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163fbkyxnod.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163yyrnexjv.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163jnzrobec.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163ftiuayxc.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163nqgfzimj.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163lkgrnwne.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163iurfwxah.html

[R64] 结束进程
来源：http://www.xuanzx.com/163srbwswbp.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163zmqvzeiw.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163hmotdhyq.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163zvkjwutr.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163mbxdpfqe.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163cvuqmygi.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ticbuctt.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163jydtkyrv.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163hjvdfxyp.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163ccwvllrs.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163eccszras.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163urvljxaa.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163psqlmdoi.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ppnvglol.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163rontqwup.html


<!-- 参考信息 -->