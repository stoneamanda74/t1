外链999!wailian999！

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ovcjjeyv.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163vaqmjepc.html

[Q35] 内连接
来源：http://www.xuanzx.com/163pxmeydwm.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163txtpeklx.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163hghvnbxc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163qndqqnre.html

[Q37] 右连接
来源：http://www.sxryk.cn/163ergrqyfo.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163fvsgyqes.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163fbmgquyl.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163ggfoynns.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163usptpdye.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ezamqedj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163xnyhhjil.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163fwwtnspo.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163exqduvls.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163pdushynd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163xnolkbvq.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163xfbvegfa.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163wcpvvtms.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163pusffdvt.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163rbaerxnx.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163heagtsel.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163uepyihvt.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163iscbxvcg.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163ykgjlxvd.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163cjsbizxe.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163glvjhkil.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163lcpqumdt.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163yyohijxl.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ifjohkdv.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163byvziuoc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163ahtrjqce.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163owkczenn.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163tbedkufb.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163ptpsnwyo.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163enjsdheg.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163vbyyobvd.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163lecytgzs.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163hbycwsex.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163qgslcgxd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163txvxnfyt.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163mtwzrsfp.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163qvbvsjim.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163tqiiombl.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163cwnxrdgj.html

[Q54] 清空表
来源：http://www.xuanzx.com/163ffkgwads.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163xdwwxxka.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163btifnuly.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163tydbuzet.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163vohpspew.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163mjvscuhy.html

[Q57] 行号
来源：http://www.xuanzx.com/163llpcbmew.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163txlulrrx.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ffjrqtvs.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163tmmeqxar.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163yvowwudz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163xuxxrbww.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163xrcpocmb.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163xvwdpowo.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163npcjqtta.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163shferlvs.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163jrskwvqu.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163cpedwavy.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163panokxpo.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163yeajrbkw.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163otpkszqe.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163sltrxlvp.html

COMMIT;
来源：http://www.sxryk.cn/163xxzvnezv.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163utjzsqdh.html

ROLLBACK;
来源：http://www.sxryk.cn/163cwexqrkz.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163iphlkaij.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163niafoliy.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163udmbtwpq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163odyhndft.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163xfiiibtd.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163dukhmgyw.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163wfvrhbyg.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163ohhivhco.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163eblxzkii.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163jdedoccv.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163fixrbkjq.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163izdxhjot.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163bxrjsqlc.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163zprijhzc.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163syfmyyoj.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163wjkidpuf.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163jpztbzuc.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163dzicsqvh.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ivdxgven.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163wtkorubl.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163fhgeqnwb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ltgivfkk.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163zzygohif.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163rtuudwda.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163gcglbtbd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ujwudbvp.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163tbuulhko.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163uwgriwcn.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163vdczwias.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163qbbxgngf.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163dzcrrsel.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163ywaqqiiv.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163kulisoqn.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163udymzngu.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163rebvysmu.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163frbceytp.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ltuxanef.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ygtiygrm.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163ontwoylb.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163oneyubqp.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163nvcqlpea.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163wcgjigqc.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163rjwcfqpj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163mrfshqbc.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ugugxmmh.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163vhwtqdcp.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163bvpqsdrr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163iboerhkp.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163qsqajevd.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163cjcrmdsx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163wrolnaak.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163mvgmllkz.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163hmngahqj.html

================================================================================
来源：http://www.aibaodan.cn/163iwkotbcw.html

R. Bash 专题
来源：http://www.xuanzx.com/163njykyork.html

================================================================================
来源：http://www.sxryk.cn/163umthvamf.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163ceoiuqme.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163jljjpqel.html

set -euo pipefail
来源：http://www.sxryk.cn/163pxffbrvy.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163mvshbpdu.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163xcudannl.html

[R03] 只读变量
来源：http://www.sxryk.cn/163rstmqcwi.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ezrpmbfc.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163jisolqcd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163lnlfqjbv.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163xqptrxbu.html

name="${1:-default}"
来源：http://www.sxryk.cn/163caioyzcp.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163etnfdmym.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163nvbyujca.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163kbmhmgoc.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163tqkueqrq.html

[R08] 数值比较
来源：http://www.xuanzx.com/163rnziwlqh.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163qiibzpzv.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163wfqtkaes.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163omdrxlsk.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163gcanhaml.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163aqrdvuxi.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163krvuwwou.html

case "$1" in
来源：http://www.xuanzx.com/163kgfhbwal.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ualjimay.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163uuiyvftk.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163memhphzu.html

esac
来源：http://www.sxryk.cn/163renafhca.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163vytixywg.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163qykeqrfg.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163fzbacptn.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ulkwstwc.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163wpcqlwcf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163praxzyyj.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163zppxanuk.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163mdbfsopg.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163vihpymlm.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163omdsdrrt.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163hoenzxtd.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163dwuuffql.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ohsugdqx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163xyvrbodi.html

[R19] 数组长度
来源：http://www.sxryk.cn/163onjfvhjf.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163asglvrbg.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163vaglubzj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163mfgpghrh.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163cjdlrncs.html

echo "${#s}"
来源：http://www.xuanzx.com/163pdkedhme.html

[R22] 截取子串
来源：http://www.sxryk.cn/163kyyxqdoc.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163tamedkms.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163prcqbqtp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163bgofrovl.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163iihlmwbf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163avjiougd.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163ftprnqfi.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163xxpnoaeq.html

[R26] 命令替换
来源：http://www.xuanzx.com/163zmrhqvgq.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ctgaajhe.html

[R27] 算术展开
来源：http://www.xuanzx.com/163sjefmfpi.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163zqpyhrqu.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163csnhwsta.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163beqrkfcs.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163cjubxvjl.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163lpvsqxhh.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163yppxwdvp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163phcsqtvi.html

[R31] 局部变量
来源：http://www.sxryk.cn/163qoejckkh.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163lcasgpjz.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163fuiyuvxm.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ijohcbnd.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163czeazfzh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163nngjqzvt.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163pcmzrpij.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163rtwxqkre.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163agwvatdf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163htzzzxel.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163wkbfcmur.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163bggrlggl.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163votayeut.html

files=$(ls -1)
来源：http://www.sxryk.cn/163jnpnxvtc.html

[R38] 管道串联
来源：http://www.sxryk.cn/163yyraywcp.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163fxztedbo.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163puoutapv.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163rzxacpqv.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163qemyzdmw.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163pcmduxji.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163icmhvzxc.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163branvkvm.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163xnxgiyse.html

wc -l < a.txt
来源：http://www.sxryk.cn/163jygtpmeq.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163oqpznqdc.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163hzgtcqie.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163lugeouxk.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163uwblvnik.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163pilhatwn.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163zkepuwvf.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163btbwbule.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163xxswldxv.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163vppjfaca.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163nqinukkp.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163rhhohest.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163rnoktwyv.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163utbvuhoh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163fftelgky.html

[R50] awk 求和
来源：http://www.sxryk.cn/163cffomapj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163vpqkojzi.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163fuzvgdhr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163laqmqovj.html

[R52] 统计行数
来源：http://www.sxryk.cn/163flwmkjzs.html

wc -l a.txt
来源：http://www.sxryk.cn/163tnptxfgy.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163fbjhefmg.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163behjeufa.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163esuarqjg.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163dwqaputa.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163cyhzxqbd.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163tvhpvaoq.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163itcmqlmg.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163nosdapmo.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163qgbzmhgz.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ehtxwhsg.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163zntwdqel.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163eejvmckk.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163taukishz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163nfbqfdzd.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163xrkrazjc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163hkmcclgb.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163gnuwfqwv.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163hqrhckkl.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163nuytdqmu.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163poctbrvh.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163ndxxhefh.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163ahbazzdq.html

[R64] 结束进程
来源：http://www.sxryk.cn/163zchrnhnv.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163qjnywyia.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163cenrgfsi.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163cvpajade.html

[R66] 定时任务
来源：http://www.xuanzx.com/163srreqzla.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163sxhqpzvx.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163xayombeu.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163uifybmbw.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ecetltcv.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163syhypwdh.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163qeeskgkh.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163msbcwdog.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163btkpdbnt.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163mioxffkz.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163hsjxknmn.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163dfgascws.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163ncrrtfka.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163nenazldo.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163xztzooxw.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163qwzpyyob.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163boovksta.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163bxjxnfah.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163kyzewzdn.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163kdjpvgwg.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163uxumknwo.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163gmcwpfrd.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163dlkatkeu.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163suasinie.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163jeptptxp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163molhbedk.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163btkfterb.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163afkunwxt.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163axobsagp.html

time ./run.sh
来源：http://www.aibaodan.cn/163ljynkvri.html

================================================================================
来源：http://www.xuanzx.com/163ybfrcobq.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163kptxjari.html

================================================================================
来源：http://www.aibaodan.cn/163zgccqomy.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163qsihbxhr.html

#include <stdio.h>
来源：http://www.xuanzx.com/163bxwbxmim.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163nkcequhm.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163dpoehhau.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163xdihjebg.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163juxirurf.html


<!-- 参考信息 -->