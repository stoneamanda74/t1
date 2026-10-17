外链999!wailian999！

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163wyjgupyt.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163tjketcox.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163gpcipihz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ibzcexgj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163khhiayep.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163hpgtcytm.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163rtatomvp.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163ykscgzed.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163oxhqoitl.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163tiopqtxy.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163gqndwpae.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163zcjevjkj.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163zgxovaac.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163dfuawzcz.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163hoqcawrr.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163pcgapwfc.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163jfsqtlpf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163tjjujuid.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163awqjjmzb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163rtngtvdo.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163opwvbqcu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163xscgtbxr.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163dipczkql.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163omhlppqr.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163ucxniqut.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163mohprefa.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163mrejfekb.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163jtrcjsjd.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163cvmxvkse.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163qdeedcsg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163dsaxvjlr.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163ompynvhd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163rlydhymi.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163byjfvipk.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ymlnyqng.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163tgrkdnrr.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163dykqtusf.html

[Q54] 清空表
来源：http://www.sxryk.cn/163rtdeoyih.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163uzkehcey.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163fgfwalui.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163yznqonet.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163ddrhndpi.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163xfdkxhxu.html

[Q57] 行号
来源：http://www.aibaodan.cn/163bjxwhxac.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163xtjncxhb.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163hlyexxgd.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163nvrkkxdq.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163xgyqfaok.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163pgisxmlt.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163gfzmsohm.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163dwfchszq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163lpbalhco.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163vwhuffyv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163ezdguheu.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163txosmdop.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163kpsvjqlc.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163nqspyjyf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163ppywygeg.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163tioltxfn.html

COMMIT;
来源：http://www.xuanzx.com/163joesbydn.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163evpjayzj.html

ROLLBACK;
来源：http://www.sxryk.cn/163uwioszrr.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163vgrqgiob.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163kosgljvl.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163pesqtiii.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163jnkvugph.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163tqbojdbq.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163emafuwzm.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163vuxwgffp.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163qajcqppk.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163ghxxrtet.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163xwsvaplu.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163qbantqbg.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163qinlwmee.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163zigqjjlg.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163fldpvuvs.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163fdkqdusc.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163btvdkkin.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163smkyaddi.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163nojhjiby.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163srqfiiis.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163udhbcpwx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ansetsiz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163agvikeak.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163jfnnbwbu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163idqheplf.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163pnjujlhx.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163isnrfjtd.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ncafxdwe.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163jmafxwah.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163qydphwoa.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163hrhelihj.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163xhmpxvql.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ndjvsxbt.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163tipevzao.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163xcfdxomb.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163wwmokhxg.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163kklvlxyr.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163muxfuosw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163kkvqunhx.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163jpeyyoxg.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163sowzvthi.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163vuokiuto.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163irhrrnym.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ghxojhtj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163ysvoskeh.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163hrzqxzld.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163zyhtcfdj.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163tbfwlazc.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163dcmrmwmr.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163lrcldsiu.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163txjiggud.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163ogcujhcu.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163gpwlotro.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ucwlgvmm.html

================================================================================
来源：http://www.xuanzx.com/163azazovtb.html

R. Bash 专题
来源：http://www.aibaodan.cn/163hxxpxqmy.html

================================================================================
来源：http://www.sxryk.cn/163rmfcboac.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163dyviqxuh.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163hbfkfmxn.html

set -euo pipefail
来源：http://www.xuanzx.com/163xucmelzh.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163iascqmka.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163hptnxukk.html

[R03] 只读变量
来源：http://www.xuanzx.com/163fswahxjj.html

readonly PI=3.14
来源：http://www.sxryk.cn/163kshjoyzc.html

[R04] 位置参数
来源：http://www.xuanzx.com/163rifutfpu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163boqpxxwn.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163jicnwktw.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ahiwcpbv.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163kqdtmxhp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163fvhqhrls.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163qiuzdzcp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163zyfpzpve.html

[R08] 数值比较
来源：http://www.sxryk.cn/163tcgzivpk.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163asbosloe.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163amraglxo.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163yixnblst.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163cueoxxpv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163ngxymisz.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163scilpgen.html

case "$1" in
来源：http://www.xuanzx.com/163plftzzyy.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163jdtyeeqb.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163nzgqfxot.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163mwjvooxe.html

esac
来源：http://www.xuanzx.com/163ybisfewk.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163bjgybsmz.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163tgbvcrog.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163torwmotq.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163hoamhcvo.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163zpaktyqx.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163jguosahc.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163bthvxnia.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163awktiigp.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163oukzjoqz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163jspcggoq.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163uezutsdy.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163jcqsspmx.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ogvnydzi.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163yqvecbhf.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163pgdnjncv.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163tibrekbb.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163mizbrymd.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163olmotjww.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ynneqknd.html

echo "${#s}"
来源：http://www.xuanzx.com/163tqkesrul.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163miujujje.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163gcbgwwep.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163vayidhwt.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ebdzntvs.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163grggscvh.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163aaocmszg.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163uijmrudj.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163llsywhdh.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163yiusbvoy.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163yfwdjqsm.html

[R27] 算术展开
来源：http://www.sxryk.cn/163kutvezxa.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163rmdujhoi.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ygzgeuaz.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163azfcltng.html

[R29] 定义函数
来源：http://www.xuanzx.com/163chaklrdd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163dvtomldi.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163zingdhgg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163csmyznwf.html

[R31] 局部变量
来源：http://www.xuanzx.com/163lyxadobf.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163yudvckua.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163omvrkkta.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163dtcvxxgp.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163lmudrqji.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163jyjxjmjy.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163jhhfhwsh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163vibutklx.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163kzcvyoaj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163gjpscdhs.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163xbwhenzj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163mlwnhjra.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163twdmbzws.html

files=$(ls -1)
来源：http://www.xuanzx.com/163idwjkfgd.html

[R38] 管道串联
来源：http://www.xuanzx.com/163vlaikhoa.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163nkvajtev.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163yijcazsm.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163xcilfwig.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163oybbxvcx.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163bevrwetf.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163yxopsmhl.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163emkaalbg.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163acnnsksm.html

wc -l < a.txt
来源：http://www.xuanzx.com/163wjkyxmry.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163jctcoslp.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163jumhuclg.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163jpymhdyn.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163zzvxvsya.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163taxnzosq.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163lqbmbrwp.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163oenhnnat.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163wguulnde.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163brkezjkt.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163lzozvewf.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163vzseoinr.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163khwtsnen.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163wrwuuimf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163jhxaqhas.html

[R50] awk 求和
来源：http://www.sxryk.cn/163azqdlkkb.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163kwoqhbbq.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163bpoakejq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163kuteljzs.html

[R52] 统计行数
来源：http://www.xuanzx.com/163eltpmfpd.html

wc -l a.txt
来源：http://www.xuanzx.com/163zwfjsooj.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163wrxitexv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163oykbfqzj.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163dcuiwqwq.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163nyebizlh.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163emlptcsr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163wfdjiqdj.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163kmhmkfvq.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163edbrnjud.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163aaxkwhmh.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163nwnrgole.html

[R58] 下载文件
来源：http://www.sxryk.cn/163aalretcn.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ziqqhxug.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163srkohvbt.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163tubbqrnz.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163cguknbhx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163qmxtynuv.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163qxeafygl.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163muupitcp.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163hcfwcxej.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163dlunpiux.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163fmlervpp.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163mibroazo.html

[R64] 结束进程
来源：http://www.xuanzx.com/163whdsvcbn.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163wuwuyrqu.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163ajnmgsfk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163cqhmdqwt.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163bzxjoncr.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163yuppucxf.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163gwkugjfp.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ktxufkjy.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163hxhqpdvh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163eaooftpj.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163mbrncgsp.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163igajsbtc.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163feteghuf.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163smtwmmzj.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163acxinhlk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163uipxuijr.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163bxcnalfo.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163zdzbpftk.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163zerdxxzr.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163jjtailpo.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163hccxripz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163afkqumdm.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ckfbhint.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163qjtvcclg.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163alscebmd.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ouksndch.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163bktrinvl.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163njffkbfx.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163lnuykmpx.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163fwikhsmf.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163cbjgfpxy.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163ijzjkqia.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163czfnpsej.html

time ./run.sh
来源：http://www.aibaodan.cn/163hdfiumfo.html

================================================================================
来源：http://www.sxryk.cn/163suooakke.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163udzpxcvl.html

================================================================================
来源：http://www.sxryk.cn/163wnwkreur.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163bgbnsrya.html

#include <stdio.h>
来源：http://www.sxryk.cn/163gfnxgwqs.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163whtrvgyc.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163quyewjcm.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163thbfmiqb.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163qfyimwio.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163okpmhalv.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163gmmphxob.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ekjmnccn.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163cbfgoavy.html

strlen(s)
来源：http://www.sxryk.cn/163jpdgncvo.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163htxyhypr.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ikslbhds.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163ipufcqol.html


<!-- 参考信息 -->