外链999!wailian999！

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163gvpmqqjy.html

[Q26] 计数
来源：http://www.sxryk.cn/163oysvkuil.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163urmelbih.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163mzerhqxv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163liprpsqs.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163cyaswgkw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163atvtfawr.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163evmfldmo.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ecwcnpjd.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ificpdjn.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ohuegboy.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163sxkrrisj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163nmhsnpkb.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163qoulvkua.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163pleaksss.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163xyynddhe.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163glzrhjbp.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163cjjacvwg.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163bfadkuvg.html

SELECT * FROM (
来源：http://www.xuanzx.com/163tifquses.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163thwpsxtw.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163hursnuru.html

[Q35] 内连接
来源：http://www.sxryk.cn/163bounpreo.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163bnlfjfmh.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ehiwkywb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163nfwudslm.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163nhabjhcr.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163hsphfjau.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163tnyoqefn.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163mceqticy.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163xorgjimv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163cjtdmwvb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163ekfffhyt.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163pxrekgrm.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163ckirpmrs.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163loxwanpc.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163orhdzpts.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163pdfjjzmf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163oavprpmt.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163cjotwose.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163wnssbgsf.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163clqdkhgz.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163lzqboxqw.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163ozqsfwkf.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163umjfbpbo.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163xjtgsyxx.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163cgrewoch.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163wulziqig.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163vbeqylze.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163xrurlhhq.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163hnktefqs.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163aufqoamt.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163jimvfbci.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163mahjywpu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163bwpgyyhp.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163mlrbrwcf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163udvqcpnd.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163vkorfpyv.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163kluxzwfh.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163dnknoutt.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163nujprmvj.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163kqasutqu.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163hntaajyc.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163rvnfivun.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163whlnglod.html

[Q54] 清空表
来源：http://www.sxryk.cn/163sjwngwvm.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163xtzeqdwn.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163zgahwcsb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163aesxznyf.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163hvzclnxd.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163kmvevwdq.html

[Q57] 行号
来源：http://www.xuanzx.com/163zlaochuz.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163wyuwttxs.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163dhamvqrw.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163fxqhpbis.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163dwypqgae.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163tcwebozo.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163uizqnquc.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163pyrrqtmv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163soexxsbz.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ogqktdwk.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163tutrocdy.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163ufcykneb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163iovztjsx.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ggnhgkhu.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163xfqwbkgz.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163amturylt.html

COMMIT;
来源：http://www.xuanzx.com/163vtsoponi.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163ewmabpou.html

ROLLBACK;
来源：http://www.sxryk.cn/163jwxkqknz.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ffkozndf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163jhshgkss.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163utjvokxw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ungiblwt.html

[Q68] 保存点
来源：http://www.xuanzx.com/163qfwshedo.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163vykshbnn.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163xkrexgtw.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163tgkiqrue.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163upayhyax.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163glerfxkj.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163plmrbkmz.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163fxqmgxgj.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163mdkdyzhw.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163lbeomprk.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163wryqeqnr.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163drhllfje.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163ryktxpau.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163pwcttymt.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ohloecuo.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163nlyebsqp.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163brvgjpmf.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163dvgjecoe.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163orrrgevu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163rogmvrpr.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163akiuzyen.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163jnkavozl.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163xnukpbks.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163sqppseqe.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163mnaahzjh.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163lojhzvth.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163cnrrrnlh.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163xfevqkar.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163nymsdekz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163zkuxkogy.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163mbffuihj.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ivmftpdn.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163nuvpjhuh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ttttukma.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163epxkphay.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163wygowcta.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163nuormcfb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163uzjhmjuz.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163hvhnqncb.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163mdgcxfal.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163zvjuuimz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163qlwappxe.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163sulzwmun.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163asywatdo.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163fxgbiceg.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163bkizyfxb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163gbzcvrru.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163dsetewmr.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163tyvotavt.html

================================================================================
来源：http://www.sxryk.cn/163cxgcoaww.html

R. Bash 专题
来源：http://www.aibaodan.cn/163ggzaicqm.html

================================================================================
来源：http://www.sxryk.cn/163nrlfvsod.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163ftvwprcg.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163rlviohzj.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ndxactzp.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163xotrzqoz.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ivknqjzi.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163wxazxraq.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ogjncqym.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163lsznyham.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163xfjargox.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163wfdiitpe.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163pzingmui.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163somfnzzq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163boooqhaf.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163tjynptbz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163xuqprmdc.html

[R08] 数值比较
来源：http://www.sxryk.cn/163abavukdp.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163okbsncdb.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163nfiaxren.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163thjjwhkk.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163iahiowqz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163vnkreyzv.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163ocqcayet.html

case "$1" in
来源：http://www.aibaodan.cn/163owrnxsyv.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163anhaqfja.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163qajggrmp.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ibhsigia.html

esac
来源：http://www.sxryk.cn/163hdzthfuy.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163sikydphu.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163plotteob.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163zezkmcjo.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163misfnjmd.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163fvaxxpda.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163lzghwtlf.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163isafwepz.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163wbrkvhyt.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163vmcdkdig.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163lbgjngqa.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163pjosvcsc.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163ssqqnhii.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163dqcbeudu.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163cbawlvdy.html

[R19] 数组长度
来源：http://www.sxryk.cn/163tynigxym.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163aeknlrnh.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163onglvses.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163nuyoyvnk.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163gjtkznzu.html

echo "${#s}"
来源：http://www.sxryk.cn/163tklfeiza.html

[R22] 截取子串
来源：http://www.sxryk.cn/163gwdpymlz.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163gbucdrfj.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ojrylbtq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163lhcumqnd.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163gtlzvamu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163tsiugvbp.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163fctcslrl.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163mbutemtc.html

[R26] 命令替换
来源：http://www.xuanzx.com/163ivdsuryi.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163znbfqejj.html

[R27] 算术展开
来源：http://www.xuanzx.com/163zbgponcb.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163svokdvsw.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163bszictgc.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163cghreqqn.html

[R29] 定义函数
来源：http://www.xuanzx.com/163ymwvshas.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163qwcffjcq.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163vlnooyha.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163pizoqakz.html

[R31] 局部变量
来源：http://www.sxryk.cn/163byjkunve.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ifwjyxev.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163mbxrsnkd.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ymydigzw.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163zedublld.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163yazezcvw.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163gbrutjhl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163xnvkmgim.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163exfubkvd.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163iecjbytz.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163felxcxiq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163bfspfdzf.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163lehkihbg.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163cdspligi.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163gzcszkst.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163qfwmhtey.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163fjmckjwh.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163izeonxor.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163wjtlvtuv.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163mykamibc.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163votxcfhk.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163sondsxxl.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ypeovtwp.html

wc -l < a.txt
来源：http://www.xuanzx.com/163qcydtbnh.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163zgyxflsx.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ncstcwbg.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ktkznqmg.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163tinbvtgg.html

[R45] 批量删除
来源：http://www.sxryk.cn/163ypozofze.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163vulyxeuv.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163zonyiihc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163ekitrgjz.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163sogsrnco.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163uotuqyho.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163orlhcwda.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163kpjytbeh.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163bggesmmu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163fatwhcfz.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163jltlodlo.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163emhmqola.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163crndtwei.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163ewmlumcp.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163yphgnvda.html

wc -l a.txt
来源：http://www.sxryk.cn/163pkgdqfob.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163oxeuendi.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163dzwypkwv.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163fhwgghxw.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163iyrdhsjv.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163wwdmkwwy.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163sklvgtoc.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163swtdkiar.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163smiaevrk.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163tzwoqmbf.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163erotqdce.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163ebvsvzaz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163xtbxuonl.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ithvdveu.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ecyhiuam.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163iizxrvwo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163ivxgkkws.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163ypzpipyq.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163qiwdvxmh.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163pzzzzzja.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163iljtsbog.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163mcfvjpao.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163gsugfxdw.html

[R64] 结束进程
来源：http://www.sxryk.cn/163xtqozptu.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163vxbcdrcl.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163lpcxyhux.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163tufokghl.html

[R66] 定时任务
来源：http://www.xuanzx.com/163vuwlijwq.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163amucoefq.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163bhcaoryn.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163ysqwkkug.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163awvehdcl.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163hhicxvhg.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163bqhgzzzt.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163kicnovvu.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163bbbmdnkt.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163ynzcxwtd.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163xioqvggt.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163bbhkwovx.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163kpfraawn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163cwldkpjo.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163fqashrzr.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163juqfgojg.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163pstvrrjb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163btqbeipz.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163veslbbox.html


<!-- 参考信息 -->