外链999!wailian999！

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163zljyjrzl.html

[Q22] 排序
来源：http://www.sxryk.cn/163yskbvnzz.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163xntottnc.html

[Q23] 分页
来源：http://www.aibaodan.cn/163dggzvcru.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163tcjbxznj.html

[Q24] 去重
来源：http://www.aibaodan.cn/163gjfzbhcf.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163deymlarm.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163uwbylirr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163hcsktaar.html

[Q26] 计数
来源：http://www.xuanzx.com/163vdckdipa.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163hadcqzca.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163vozdpexl.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163uglxqpnz.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163kqxooxrm.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163vnayygee.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163hkuqqkyf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163bsqgxthw.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163apeiutgj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163jscocdbn.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163redyryde.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163demkbugh.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163ldjjnspd.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163fjenostz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ltehkyma.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163rahamlhh.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163xkinejnf.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163ctlidrji.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163yfrijvkb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163afchrrcn.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163tblzsekj.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163pfrgtroe.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163zebpnvqw.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163onhoxlws.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163nopfxvcc.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163usyanney.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163kuyzfbdd.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163kqtlvaxi.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163imroxlmn.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163idcppezo.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163sueccokr.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163rzlvbijv.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163brdbzveo.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163khgqafjg.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163urtfvyck.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163iodiddxh.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163fuxhehwh.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163zidfjade.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163hnkrccxf.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163heaytiit.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163amgjpfuk.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163xxzetvnp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163srctvpfh.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163nxsyvtba.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163sbmkgcin.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163yvatogky.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163iuvpvsin.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163qdoumumw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163upfkkheq.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163tylrxcuo.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163jfcqnxuh.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163disfevdj.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163rrwxrryy.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163vmudqcnf.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163repdidbx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163qkjzzmsf.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163zojeoqnt.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163jwaelyvi.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163xynfqech.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163wviubrld.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163wyiekaag.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163pqsnkkxq.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163uiciwmqp.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ldjljxsw.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163tvcncilw.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163umanswkg.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163vlmcqary.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163oazfgfpi.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163xzruhhzv.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163gwbfvkho.html

[Q57] 行号
来源：http://www.xuanzx.com/163qxcvdsgr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163yvcvntwy.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163oobtnwbb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163fllyohro.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163dieyrbvq.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163hrktxarq.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163vlqrhgkt.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163ldzwbbmv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163ciouhjfz.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163bevmfxbc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163mrwzyhhd.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163hkjnvwyt.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163fqsfpmuz.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163hmjrcxql.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163rozpdbpq.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163iiydgzjo.html

COMMIT;
来源：http://www.sxryk.cn/163ebwsxepl.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163badrhhwf.html

ROLLBACK;
来源：http://www.sxryk.cn/163xblfyttc.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163qzuzftkt.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163kjkbgavm.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163nungwmyc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163linahwie.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163ormocnzw.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163lnafrvgz.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163flmmzirb.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163ckgbkqiy.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163gwgncobh.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ussfmtjp.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163uorwxemw.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163rsesvysd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163nltlfktn.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163jiszvqjd.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163qomuahga.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163jiyphlky.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163puyirovc.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163yrlihgaf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163adzcbyng.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163kpxhvmdi.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163ixbsdoec.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163mezpvbnq.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163kzwvasbk.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163skutqzvk.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163xstvpwmi.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163vwcfgywn.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163xeeibxei.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163gjrddzpo.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163tbrbhpja.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163ftegckbw.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163taljwrwg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163tzbpmcfh.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ifemgvxg.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163irgailax.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163zjydxugf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163jwlysmbg.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163roxxkrha.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163apviyljk.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163mdnwgnld.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163bhvkpjbm.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163fkrdymby.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163edgcfako.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163nqrjaheq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163djfwscvo.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163sutbiudx.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163nvyowycp.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163fgstdvtb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163qncvitkb.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163vbmdeqjn.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163mkenlvpn.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163vnqylufb.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163itxleard.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163szbghtyg.html

================================================================================
来源：http://www.aibaodan.cn/163zxaniwka.html

R. Bash 专题
来源：http://www.sxryk.cn/163kwoaeinq.html

================================================================================
来源：http://www.sxryk.cn/163jdupauvy.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163lqbrebgw.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163chthdhel.html

set -euo pipefail
来源：http://www.aibaodan.cn/163spthpmyp.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163lyglanxy.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163kjfpqazs.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163zhwwlrzy.html

readonly PI=3.14
来源：http://www.xuanzx.com/163errwceii.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163hdeqzflm.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163vxindwge.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163qrfhwedy.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163fjzycwva.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163saeqwmve.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ujtcmjej.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163nurnjmwl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163cvupnnbc.html

[R08] 数值比较
来源：http://www.xuanzx.com/163imwspjbb.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163kqgfdgig.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163tjstdlgb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163qfqcrjay.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163miujdbmd.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163ilkhmqml.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ciycezeb.html

case "$1" in
来源：http://www.sxryk.cn/163gkaiwsha.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163naiqoess.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163pzzhcsjf.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163uaviwfda.html

esac
来源：http://www.sxryk.cn/163umnsbfih.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163gstiepsc.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163arzmdooj.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163obtrdawf.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163gfwwjzxb.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163lfeivfwj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163mjtewcxx.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ovmvntrb.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163ozpvilop.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163xalrcgtk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163ssqfwtfo.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163pbqnjfqe.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163jtpfwqws.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163gzwaxfcm.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163jmlmspux.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163wqofesjv.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163sqxhoclt.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163uuglpqnq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163plsywphw.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163dkleavaq.html

echo "${#s}"
来源：http://www.sxryk.cn/163vxhmwzuy.html

[R22] 截取子串
来源：http://www.sxryk.cn/163wpgxsukt.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163rhozmulr.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163yojkuprd.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163tlbyapqj.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163nzgrztim.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163vugdygdv.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163crrmhwtz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163thossgbg.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163fxhquuep.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ofetoanh.html

[R27] 算术展开
来源：http://www.xuanzx.com/163rpbcbzfi.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163umkvzkib.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163wuujjlot.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163lyrmyjow.html

[R29] 定义函数
来源：http://www.xuanzx.com/163lnsdkxkm.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163thntexqe.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163yjlechni.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163zscvccmw.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163pfagpsxp.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163mzgxkezz.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163wugqizqo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163wwftnrqw.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163rsxrhrzo.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163hoeptfoh.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163sxfrihmv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163dieadnlc.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163zngcxjuz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163sfabneyw.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163nonjbatz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163elspseuk.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163suofgwdz.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163wyefxiqr.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163xscabbhc.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163bjzmdfyt.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163zudvcmsd.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163llzdxxem.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163fpqczngl.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163qxxyklet.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163hhldlnmd.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ztrhzkiv.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163bkwhjodi.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163reioraoi.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163isgzqvgx.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163sajpkuqz.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163tnogjxtk.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163cnlmuvts.html

[R45] 批量删除
来源：http://www.xuanzx.com/163zmcffpez.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163ldltwlml.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163fbwfhwyk.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163debototd.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163mkmztcro.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163aqetfxsb.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163tajopxlp.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163svsmabmi.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163biipjyvr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163eodqjdij.html

[R50] awk 求和
来源：http://www.sxryk.cn/163qdudvgtg.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163cgqkeguu.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163fefvyczr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163jrbxfowe.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163zycxfsld.html

wc -l a.txt
来源：http://www.sxryk.cn/163ndtoomws.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163pnodmpgh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163lrvzxvno.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163lsbjzqtt.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163wrcetdxp.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163xankqwfd.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163genhligl.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163aerlefyh.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163zohjntpj.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163jwuaquvq.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163heiqkloz.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163tdibpkck.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163motvtyeb.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163rlzzljvv.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163hqjtfgyn.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163xqbqkhle.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163kdvqnnue.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163cmmkasgb.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163bnwrrvkh.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163kzpuqsdz.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163pwjaqdqv.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163hljhvpko.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163nunecjgs.html

[R64] 结束进程
来源：http://www.xuanzx.com/163xeeprihl.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163pmvjxquq.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163wgleusuv.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163dhhkcapb.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163tmmzqapx.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163qbcjeqrs.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163nftwuuit.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163iuthtepg.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163dluggrpj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163dndppdsh.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163wksnubak.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163dworlnmj.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163vwedwowc.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163cuoidvuk.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163ezbeaylw.html


<!-- 参考信息 -->