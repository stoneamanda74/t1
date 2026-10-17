外链999!wailian999！

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163jjsermom.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163kvwitwxo.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163fubzoanw.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163tudtgytn.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163xhxwabgb.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163gqmxfdlx.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ddgxfcnr.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163icrbdlvv.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163okifdabe.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163huyswmbn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kctwfapj.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163vpncgppt.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163gozlqndn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163lzynjrkr.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163ftvlftyf.html

SELECT * FROM (
来源：http://www.sxryk.cn/163midmuiod.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163esupmyra.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ahrnfylu.html

[Q35] 内连接
来源：http://www.xuanzx.com/163qttdyytp.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163rrntmgfg.html

[Q36] 左连接
来源：http://www.xuanzx.com/163cztobamo.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163nmuezhlt.html

[Q37] 右连接
来源：http://www.sxryk.cn/163vlexjhoh.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163exjtdvqn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163wnytzwvu.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163motsjbgu.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163kchnvlns.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163svoehksl.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163ondhhtpi.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ocqvjwgg.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163zfjoglaa.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163zimszhdl.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163isbiumea.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163nqzafpcf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163yhfmvwsl.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163asoremjw.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163uuqmpyhi.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163tuvlbpud.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163cbpmdmik.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163apacqavo.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163usysmxeo.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163pqrpkbmr.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163nmbzvgfm.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163whekturw.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163rumkqoci.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163wbufyzrn.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163bsscwydc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163attwdxtw.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163wtggmpdr.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163rnfoikpa.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163aerdbaiz.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163gkcxmryk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163kwkjdgbf.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163jdepdahq.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163npszfbxs.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163uvlxexsq.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163gepzodpp.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163pjvdwtki.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163lumhpfaf.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163wtdnwgxe.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163tzacgokr.html

[Q54] 清空表
来源：http://www.sxryk.cn/163kuvryluj.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163tkbpsunt.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163gmrzpklm.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163lniwqvys.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163azhhoqfw.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163cuwybaxb.html

[Q57] 行号
来源：http://www.sxryk.cn/163igiqekwv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163ukhwujdj.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163dytaqmtr.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163bighhszt.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163xjyhvgzq.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163zkyddxdu.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163yqfthbzb.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163dyeynwwu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163alcyahlg.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163lcoiulgz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163bnypuvyq.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163nsoleakv.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ufhyrpve.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163xhigbdkc.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163tayecpsn.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163gtwchwge.html

COMMIT;
来源：http://www.xuanzx.com/163mbxvntdn.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163cjrofvah.html

ROLLBACK;
来源：http://www.aibaodan.cn/163tswalwil.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163zuzaplah.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163yvsnthow.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163aorpgjmp.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163qmnzgcoo.html

[Q68] 保存点
来源：http://www.xuanzx.com/163wfcsoczr.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163yfwgsddm.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163xrlruwlx.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163kgightce.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163tkmkcwsc.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163sibawzuq.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163emargvsr.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163wrxijocz.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163pzbkoavq.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163hkrlkpxh.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163chfjbmzo.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163vmykjmsk.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163euvvgrvi.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163veuqpwis.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163mqokpjaa.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163sozasprt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163gpespjhz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163jdevttli.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163gkfhkndw.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163umdcedmc.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163bratbgod.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163xjhdxtgf.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163dyiuusvw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163cjzmziqi.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163azlvixwn.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163hiwywmts.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163deldsmpk.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163qqqwvyrk.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163mthvpdde.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163arzeffgt.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163arzgqrvm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163idcttxnc.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163hhvyskld.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163vooloexg.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163ktccfwac.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163qcgzardj.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163luaikwbp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163zwqrirou.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163bbcmnkny.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163vevoftcv.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163fwcqpzvl.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163ihsqboxz.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163jofteudm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163srokcceh.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163pplxjwwh.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163mfywthuw.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163wcqvcpha.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163jfrrpxli.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163wejrqzrd.html

================================================================================
来源：http://www.aibaodan.cn/163usauvijo.html

R. Bash 专题
来源：http://www.sxryk.cn/163cjgvvusm.html

================================================================================
来源：http://www.aibaodan.cn/163bionjjjx.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163jxdossuo.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163hbkpejle.html

set -euo pipefail
来源：http://www.aibaodan.cn/163gnorvaby.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ecfsdlki.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163gaeyuruu.html

[R03] 只读变量
来源：http://www.xuanzx.com/163qnbbcrgx.html

readonly PI=3.14
来源：http://www.sxryk.cn/163iqdygrke.html

[R04] 位置参数
来源：http://www.xuanzx.com/163kliynlea.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163egfcvhci.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163fufctduh.html

name="${1:-default}"
来源：http://www.sxryk.cn/163mbfqdqmb.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163alpmahsz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163btpyzszb.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163sdkoibwh.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163iixdefau.html

[R08] 数值比较
来源：http://www.sxryk.cn/163ddgikrlk.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163juknasbq.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163ddmlyxxb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163plnrmkji.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163chmqecjz.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163gcnvnykc.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163dvjgolln.html

case "$1" in
来源：http://www.aibaodan.cn/163qzpzdlgb.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163uwznizsy.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163aeelgrho.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163pnlpnpbt.html

esac
来源：http://www.xuanzx.com/163jgpmhdtf.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163mupvjduu.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163xbgorqtu.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163cpynfhtc.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ohncsnsm.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163ymefjytu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163gmjndihz.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163fynbysda.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163dbcizqqc.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163ivjwmqdl.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163dpcinwfe.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163mmpoctvj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163qdsdgulc.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163ivzpgkfw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163smovfhah.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163rcloojsh.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163tncywzmy.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163zonzqxct.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163jrlasygx.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163imdbbfoz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163elulrqbe.html

[R22] 截取子串
来源：http://www.sxryk.cn/163nvgkwzpy.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163wlmfatsj.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ueephtqs.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163rtneysyq.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163pwutlrkz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163mqmggrei.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163gwzbocgj.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163kahnmnef.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163zpwesrdw.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163pkwxbhuv.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163faalpqvr.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ijuitium.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163dhrnxgpj.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163dpmvfeek.html

[R29] 定义函数
来源：http://www.sxryk.cn/163kwcullvk.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163leyxsrci.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163edhsbveg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163jcdsvzcm.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163ngnbdhsh.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163rzlhrtzh.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163pycxzuzn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163eurytnjm.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163mzniasey.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163vpafxssc.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163nwhnrcch.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dcoowprm.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163nripjiry.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163tprgqgxj.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163iavalspt.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163ujqbjfqh.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163cfrrbygr.html

files=$(ls -1)
来源：http://www.xuanzx.com/163kdnqpvfb.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163lpkzdbfz.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ecuxnaln.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163uugtncme.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163smnfkaki.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163npbwrnfb.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163keqmhrxg.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163pubezonw.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ihicogon.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163ecepywnr.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163gktobhez.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163mrzjrigo.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163jesvnqww.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163jrfluulh.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163fokgjvqi.html

[R45] 批量删除
来源：http://www.xuanzx.com/163zmguzmtt.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163miqdtauj.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163ohvhtitc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163fzyhhoyq.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163cnbrydhq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163mlpamyxd.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163fjxubynq.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163ybzhqznb.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163oanorpro.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163cisnriqa.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163idpkqxox.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163eqfhkbjh.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163ruyxuucj.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163hpbvxgyj.html

[R52] 统计行数
来源：http://www.sxryk.cn/163vnfxfvqi.html

wc -l a.txt
来源：http://www.xuanzx.com/163cqbcggwj.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163gjlzvvis.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163apikgkqu.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163mmootjai.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163ijqzyasy.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163kwxidebo.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163duamoofr.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163zokjannt.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163thgbpqtw.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163unmkqjvi.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163umqppqsu.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163qomnbyxq.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163lenwopyo.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163wrbwxukb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163svbzwbvh.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163skeiguwl.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163eqhkyulx.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ldoxyehv.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163vjahfwzf.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163hiqfyiph.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163znhxsmsc.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163umztrigh.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163zcxmriwh.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163grrwwwvb.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163zkscbzxk.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163vmzmjmqo.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163rnjvfwfb.html

[R66] 定时任务
来源：http://www.sxryk.cn/163dfwaolkw.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163bzalwhjr.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163mlxaxewe.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163evhobpmw.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163alrydalr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163gswjuuyt.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163gpydnxxa.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163mirfoyfn.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163vizpvigt.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163ftbwbmcg.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163ixykfpou.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163dxwnecsh.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163odoaomsm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163newlqhgj.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163bwpralnq.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ilgshvpq.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ryluvinr.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163bstyyvha.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163omtjvrxx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163jiordqmo.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163ptacnnhd.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163puvaufeq.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163shhcndox.html


<!-- 参考信息 -->