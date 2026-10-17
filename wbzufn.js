外链999!wailian999！

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163mhznzzen.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163duwcuknh.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163vnwmwzdg.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163qxvuatms.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ojnyfztv.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163xknqwywx.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163nfhwhjew.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163nnrowpvj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163xrbaoxov.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163sbegcigl.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163scufrrad.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163rtreeezg.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163smyxhjeu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163wvxewihv.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163gwjzuwsv.html

SELECT * FROM (
来源：http://www.sxryk.cn/163bkjsheio.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ouwfnbdk.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163jtqysjrl.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ptcaemml.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163fzzxyroz.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ubiocvck.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163fxdaxkwr.html

[Q37] 右连接
来源：http://www.sxryk.cn/163oaqceszg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163nphkikbr.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ukxpllcl.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163qvtkdctn.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163kvqxzpei.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163orzvyems.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163lsoxcpzq.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163uvlopymc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163vqsxfkpz.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163kdbammov.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163bibzowhb.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163wsimbdml.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ckjecoqy.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163xmsgukex.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163dmbktxgx.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ibmohoxr.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163nyncssei.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163cmhatjzh.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163xagtqjbe.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163xphqgvfo.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163ttctjatu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163tfsfllnr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163waxfxsle.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163szvtwfvq.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163lbqiqgat.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163gxnljwnr.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163oqnhvhkx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163vazkbxrp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163pvwfbfup.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163fzsxmidp.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163zngvsifl.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163xaqlxrcd.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163vihdaejl.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163rwxcmxvi.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163isheyqui.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163pazkdvqi.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163sxviuclf.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163okvxhkhx.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163wlhbjszg.html

[Q54] 清空表
来源：http://www.xuanzx.com/163kifbqtow.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163bvsnacjm.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163lyynbgim.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ixmnsznp.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163koxlexyr.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163mykgbrpg.html

[Q57] 行号
来源：http://www.sxryk.cn/163mmpymqom.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163hchnbebf.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163yiqkgxmu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163zhuvcbka.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163iaxzudzk.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163elydaxyj.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163vfakxhso.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163dfwwhrcr.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163dlyanzaj.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163uausppdp.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163enhrdcpg.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163nsqqvfxo.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163yjumdjfr.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163wezjmtfz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163spmzbgwd.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163nvgsjqne.html

COMMIT;
来源：http://www.sxryk.cn/163sjflvwud.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163kvownsht.html

ROLLBACK;
来源：http://www.aibaodan.cn/163rhyrgjdz.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163cuwvcvsr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163pyvbmsqp.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163xjsyjbyj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163pcpjjnfm.html

[Q68] 保存点
来源：http://www.sxryk.cn/163pcvvywvw.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163knxeipmu.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163yppdmllz.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163pgeunjzw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163iexfgrmq.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163bvlqqups.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163mtpsprex.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163dzckanja.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163gprevedz.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163jukkxdbc.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ipeqghph.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163fmecqvhh.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163wafzkjzw.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163uglhchqy.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163vcfkdzsx.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163wxgwwpsp.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163ryewqlww.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163gvinkqqg.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163mizdwfkl.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163zgwvifbb.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163tpxniwnw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163adfbshvk.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ocpmdflc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163sbdvbfpp.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ippumpmu.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ooqmetlc.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163hdqmbrvg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163msdujsru.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163wwmuawre.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163xgpavobh.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163dmwyaprl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163lcgedbjl.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163oqhgecsf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163bowgijly.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163ldjptoff.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163ayhqzjod.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163jfmslmvh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163yzpubpgw.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163vvfkgzvc.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163jhuehwlh.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163rczqyzsp.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163tckouhcu.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163vlhrovho.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163xqgjwext.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163rxxpwvvc.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163amhxvkxs.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163pttswkdn.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163qdoultwc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163zetcgrpt.html

================================================================================
来源：http://www.sxryk.cn/163mlxdlydc.html

R. Bash 专题
来源：http://www.xuanzx.com/163cgyqsnik.html

================================================================================
来源：http://www.aibaodan.cn/163ycrjewbl.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163wvwwduoc.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163slbynwny.html

set -euo pipefail
来源：http://www.sxryk.cn/163slxyucel.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163zfennqzo.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163racydkor.html

[R03] 只读变量
来源：http://www.xuanzx.com/163zyysagdz.html

readonly PI=3.14
来源：http://www.xuanzx.com/163gznlstmo.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163vhpwlnck.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163ivpqqelo.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163mzbknnvl.html

name="${1:-default}"
来源：http://www.xuanzx.com/163mxeagahx.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163rrlubxay.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163fdplcnca.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163dzzdkytj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163waeqvqct.html

[R08] 数值比较
来源：http://www.xuanzx.com/163ravwilhb.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163nbrmfcvg.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163cubchnhp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163gnyewdtb.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163javqzejf.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163wtpnqued.html

[R11] case 多分支
来源：http://www.sxryk.cn/163gmohingk.html

case "$1" in
来源：http://www.xuanzx.com/163nqyahnzt.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163pgvwqhpc.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163ymcmmyjb.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163jjhyfpbi.html

esac
来源：http://www.xuanzx.com/163hggiduqm.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163cvxmvbqd.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163tccczsfq.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163cxtkbbip.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163kzrqkzob.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163uacqsapc.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ifbmxsfs.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163sbyewpph.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163nukdwpnb.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163wmtydgao.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163eqbxnknn.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163mkbzvlrj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163gayhancw.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163zztalsoi.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ijwkntay.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163ofuiqnxo.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163toaiiknd.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163lhjqnkkx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ddujxgiu.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163iuuvkvwm.html

echo "${#s}"
来源：http://www.sxryk.cn/163elinoddc.html

[R22] 截取子串
来源：http://www.xuanzx.com/163rklxpepk.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163nuaprqng.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163xkgjqrea.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163hhshlhro.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163ebcjejtz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163czlqoymb.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163rfzewawl.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163bbznpfsg.html

[R26] 命令替换
来源：http://www.xuanzx.com/163ittvtmil.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163juzkxgae.html

[R27] 算术展开
来源：http://www.xuanzx.com/163uqgzezlm.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163dcsbzets.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163knwlrfaf.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163lgyisqpt.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163pgwrmqgr.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163atlprcmx.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163ovcqmybu.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163qxtydisd.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163gifhbbwf.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ocpqjhgw.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163kwvdpwyn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163byauffwf.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163wkrqsbof.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163inxgdquj.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163gudydcwy.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zbafulbs.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163rqdfbfgk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ewceyddn.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ddmuqnab.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163lzxeukwn.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163qjyqnhcx.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163pithmozw.html

[R38] 管道串联
来源：http://www.sxryk.cn/163rpettynj.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163jnpcoibt.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163zftnldti.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163wnlzggpp.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163dbpprovx.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163qxjegvsr.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163hpxlnsbn.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163trsistst.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163aomrcxbm.html

wc -l < a.txt
来源：http://www.sxryk.cn/163zcwnbcif.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163uwdlbmos.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163jpddissd.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163igbkvynh.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163lkkawrry.html

[R45] 批量删除
来源：http://www.xuanzx.com/163ihnzltva.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163gcpjwcdd.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163owunhmsw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163cfdqcbbg.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163aosmzqcb.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163cmqoltws.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163lhfenaiq.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ecujsggp.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163ghcgydbh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163luihvgop.html

[R50] awk 求和
来源：http://www.sxryk.cn/163jjskzihq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ancynxcc.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ujgfiwsr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163gctboksm.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163nbimcqwz.html

wc -l a.txt
来源：http://www.xuanzx.com/163wtnbrbkb.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163yrqbgoyt.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163zhxcusub.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163jetuiiqu.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163kyftvlpk.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163gbrhxlno.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163rdtjptrw.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163tvmvsrjp.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163hdbqciof.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163ulcpwdpo.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163cbpvhiuz.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163nphspyjo.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163jrubwbri.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163rwvvdiej.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163ijseoevo.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163mrxpanif.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163kmebhozx.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163gjigmipt.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163wuacpzlw.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163aqcbytsb.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163piwlnrlm.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163lqakkiyu.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163jximwlbi.html

[R64] 结束进程
来源：http://www.sxryk.cn/163wbmbxdlq.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163ohoqltsg.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163jjooeiqa.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163twkgmtwr.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ijphrkdv.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163jeflpxwd.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163hzxufmie.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163vjoqqvaq.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163dimarkxm.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163mpldcdog.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163zqiplkse.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163rfpmbruk.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163vjxwsafm.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163vmrtpeam.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163volvkdvu.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163boqndjqp.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163cadyxqlj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163lezuaape.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163yrpdawev.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163zkmupmyz.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163gaanwqdh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163sobpeyom.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ceqsuocs.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163wlhvecrv.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163pkniatrt.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163aqpttgid.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163awvokneo.html


<!-- 参考信息 -->