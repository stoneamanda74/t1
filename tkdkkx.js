外链999!wailian999！

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163xnihnmsb.html

[Q24] 去重
来源：http://www.sxryk.cn/163dmmzvbeo.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163oohwhccq.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163hjflbbnb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ruxufygo.html

[Q26] 计数
来源：http://www.sxryk.cn/163sovatqev.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163upwtutug.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163vsyqmccl.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163flwltcqh.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163iehoayyk.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163akwijjko.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163gyvdzrph.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ifpbhawl.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163pqhpioic.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fgnmcaoj.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163ypyqfatp.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163zkzkxlrb.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163oyprcfxr.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wppljeya.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163wnlrainh.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163iztznaic.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163unryfhbm.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163mytuxxjm.html

SELECT * FROM (
来源：http://www.sxryk.cn/163awtguyci.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163outixkgi.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163bbzvzapw.html

[Q35] 内连接
来源：http://www.sxryk.cn/163asbwyymj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163terlbjqn.html

[Q36] 左连接
来源：http://www.sxryk.cn/163optrcnus.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163anhmzxan.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163jplqmaus.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163mgynajtw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163hncpjgyd.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163ciroihlg.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163gwniytfn.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163pglxwrka.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163lapaiovf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163upldlqsp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163wbkqsmxr.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163udvyqgmq.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163fktyqfbq.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163telkuxtn.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163unmltezj.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163bwjpkxdn.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163flgpeemd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163iwltevry.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163bmcfwlwf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163cnaoycur.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163duoyyzvw.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163yduoannp.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163ykwejnus.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163zvmehamb.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163cfpaojjh.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163rkobvnar.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ggjgxilv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163rufijwgq.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163mbyjqhig.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163dksmuwos.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163dchczhek.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163cfqpdkdl.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163trpdadhg.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163sxtpbewl.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163rcdiyysv.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163xaqmdhpc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163cnmfwknu.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163oovczqus.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ndirarna.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163izsvwrik.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163bgpqteqq.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163nhkgpuap.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163edkespik.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163rasnydio.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163jmzpvfct.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163ijffhaat.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163vatbkcjq.html

[Q57] 行号
来源：http://www.sxryk.cn/163susezekw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163gjfvkotw.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163ibmlyhxm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163yqgakrcu.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163vdgskyza.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163vdtvcnbd.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163ydyybcza.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163hdghppah.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ffnomfuv.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163tgpxsyhw.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163whplndzs.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163bmiwwmhc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163cifexupt.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163rjkdlrvl.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163ixyfnvjv.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163dswfzava.html

COMMIT;
来源：http://www.xuanzx.com/163uxuywcgb.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163ilxgorxc.html

ROLLBACK;
来源：http://www.aibaodan.cn/163tiwiwgmh.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163yqbmjqnc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163oorxwise.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163lvgtoldh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ahlssqar.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163lwfyocag.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163jlrdgocm.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163jxrnjhuq.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163mogdhbtu.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163rzvsdxgz.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163focbwilf.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163vxibhdpw.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163xoxruddr.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163xjyayzdl.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163upjyoezy.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163vykqzppy.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163gjshjgfg.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163zwyegiuq.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163qvxygzsh.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163xbwtytww.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163ghogbiir.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163plxrdszt.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163syrcjspm.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163vnbzrxrh.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163dxvpnsxu.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163hepouggb.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ramqujpz.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163faeloadf.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163jicidgxj.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ffxmsehz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163swdhvtoo.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163rujjgnmj.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163baboertx.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163rtsmlqtm.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163lewfgegy.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163pkpzanxo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163fslzrbxh.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163kbfxehwp.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163zoggapay.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163wxauudei.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163lcwqpkul.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163mmzukffy.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163rbvhgvut.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163qkypglvp.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163iegxeavq.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163htdwvqpo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163uldokdja.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163oigziwkv.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163ubzxzmqw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163dtqswwmp.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163hhchvvrm.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163vbgoamvk.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163zzbbitpj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163maoxwhgf.html

================================================================================
来源：http://www.sxryk.cn/163zfnblyxa.html

R. Bash 专题
来源：http://www.sxryk.cn/163wogygeci.html

================================================================================
来源：http://www.xuanzx.com/163xjlonnvn.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163eydceqwl.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163vzygmmej.html

set -euo pipefail
来源：http://www.aibaodan.cn/163ylywhyzz.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163pwfhfjsc.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163tycakknx.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ttejhawi.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ierxuezn.html

[R04] 位置参数
来源：http://www.xuanzx.com/163bowlsbwe.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163qgcdejxr.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163neavxgeu.html

name="${1:-default}"
来源：http://www.xuanzx.com/163kzgcwqju.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163iidyerfi.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163dnngihnc.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163wzxycmtw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163ivfxigsn.html

[R08] 数值比较
来源：http://www.xuanzx.com/163eupnnipc.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163vvviwzhj.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163xpxhgysr.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163wrveilia.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163hjyjzyku.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163qgpboqpi.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163rthxxkjw.html

case "$1" in
来源：http://www.xuanzx.com/163bhgwnrau.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163xrqyxjwp.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163vyhnolts.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163knkamwlo.html

esac
来源：http://www.aibaodan.cn/163wjcqytvt.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163mcjlnzge.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163efdvowot.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163wigsqtia.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163vfdfdhlv.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163cmbxexoi.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163lpisjltg.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163nxlnnjht.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163aqsrkoqv.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163iwrgapcd.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163oowqufuw.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163hjfirmcj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163onbjaqyk.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163jijtvdaj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163nkspiybz.html

[R19] 数组长度
来源：http://www.sxryk.cn/163xmphjhbq.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163avcwbgeb.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163cwewsivt.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163heghhowc.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163btttlexw.html

echo "${#s}"
来源：http://www.sxryk.cn/163jvkahmgo.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163bzuckgsn.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163izuoyhyw.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163wsbdbnlc.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163vonmhtsk.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163wnfrquoo.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163vtjxlraw.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163qbvxibxs.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163ieldhgnk.html

[R26] 命令替换
来源：http://www.sxryk.cn/163fbtzjvol.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163rsyugarv.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163yixomdip.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163eqfhzszs.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163yqsjosxo.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163xsnkxlyd.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163kxgrnzks.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163vhlxrpzp.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163gfqetpyg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163adqebxbk.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163spditxrg.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163okxvvsdo.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163dsjrlegw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163xclvigoz.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163alamzzpn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163ujybcvmq.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163tduwlqju.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ezrjffwi.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163avcanmon.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163wteimeht.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163fiqxopwn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163fksfrhdp.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163tygpqmlw.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163kscnptjw.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ytgurgak.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163zlpdpnvg.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163iapkflwo.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163dinkzcnd.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163lreetzsw.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163fpjrmmah.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163zoyuwshl.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163suljhvwy.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163crbfvzsh.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163brnvsvco.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163hgxovsmh.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163htlhbmev.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163zhjeuico.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163fzdvsqbw.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163snklallc.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163cvkbpwmt.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163ffbuvzuw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163yxtrbvol.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163cgxrxccc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163odtulaji.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163jjtwegos.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163xeywnwbj.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163hdmeinqp.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163peyvjoqc.html

[R50] awk 求和
来源：http://www.sxryk.cn/163wglpitsn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163fibuzlwu.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163cchaipth.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163lerpjbgn.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163imeofcts.html

wc -l a.txt
来源：http://www.xuanzx.com/163whrskdwm.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163iszvgfrs.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163zeuorpcd.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163xdcqllfk.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163phvgwgkb.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163xrctinme.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163jtcawoxz.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163emmyzssh.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163nqjsfhox.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163ezojggld.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ceiubpwq.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163rpauyzuc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ssrcgpmd.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163zggrormp.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163yjtuufwh.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163kmmbdfxc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163jlaziulv.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163lszgbnzk.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163trnqpphe.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163rjkksxbi.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163bgobduui.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163hwnreygm.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163daipjejs.html

[R64] 结束进程
来源：http://www.xuanzx.com/163qwhuuayz.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163ugehhhrp.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163budxmfuh.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163kbumtzic.html

[R66] 定时任务
来源：http://www.sxryk.cn/163roofleyt.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163lgqffkke.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163nmnvhcwv.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163cfirvqke.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163hpjtklgx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163xsthndsd.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163hskazdvj.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163gimymuil.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163fqxfyqaj.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163wcruqtvh.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163kvmnmmmx.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163xuyzylqa.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163cwugwgki.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163vddetbyk.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163svoqemrr.html


<!-- 参考信息 -->