外链999!wailian999！

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163uyhfrvxe.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163nifdlwwf.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163eposxhsj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163bxidfkbb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ntsbwedi.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163aliebvdi.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163kzunwhiq.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163rnsqkjup.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163pgvvogin.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163kxhbypyb.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163csildxba.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163yhacbhkq.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163yuqrwkqm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163xqkjhisi.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163hlmsbvxp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163zmmxvonn.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163zrkcqrmf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163vggkewxk.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163sgzmfyfx.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163qsqzjbcf.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163qqixnjci.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ggursegn.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163olewwfad.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163bkiccfop.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163uhwbwnhq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163jocendfr.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163ryrbeezo.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163iycprdnf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163agvxxnbq.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163wgpotaij.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163hzfrxahj.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163afindvov.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163jlccdvtu.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163xkflopvw.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163lfhtukbz.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163djzurskz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ixmdaodm.html

[Q54] 清空表
来源：http://www.xuanzx.com/163dxtmqhto.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163ovqpznqa.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163miybprez.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163axdhpdqg.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163uagzsngh.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163qvhuzuol.html

[Q57] 行号
来源：http://www.sxryk.cn/163kfupdlfh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163kgaxapvy.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163yfjrwqvt.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163kgmpbqzz.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163aqjcbkvd.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163bjvmfdhl.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163kxugdocx.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163nkzhtmzy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163oxcqgfli.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163caypnqju.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163gxlzhpqc.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163gljvwlge.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163jkgaccql.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163wcbshqyh.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163fqbtmuyz.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163sdbqpiep.html

COMMIT;
来源：http://www.aibaodan.cn/163mxbwgeht.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163sticrmzq.html

ROLLBACK;
来源：http://www.xuanzx.com/163kmrqcnjt.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163ebcoywem.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163ffruksfb.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163vdfrqejq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163hurpbttg.html

[Q68] 保存点
来源：http://www.xuanzx.com/163itcomcyl.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163fwkyddip.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163fwsqrrup.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163totuaciv.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163lltyyugb.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163uksewwjg.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163iidtcntv.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163bfxnqzqx.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163uklnngiu.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163phzqhyub.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163sxhbhdbe.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163zykjkghb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163pxxzoujf.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163vmpovbtt.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163aorymjrn.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163pasvjeon.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163fozaucsj.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163jwevwncv.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163wigwygvr.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163teqdlriw.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163bcsuileg.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163bfheukua.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ladrhzsp.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163abadweeq.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163mkpqzqto.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163twnwamuw.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163gewfaidu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163cdizmnad.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163ujjzhdxq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163fdvudnwx.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163fcxwnzgr.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163jbhytrsm.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163lkvpyfdz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163cwcxnhht.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163avaxhulw.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163yqvppvnf.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163xczvwgsr.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163gumrxcau.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163jmcgnpng.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163dhpcjrsh.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163molcrrxi.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163odjzhsoe.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163kscafsxo.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163pqhfsfta.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163anwkdyjd.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163odfwyaqf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163csjmlblu.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163acfzofwr.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163dymwjisl.html

================================================================================
来源：http://www.xuanzx.com/163pyajpcus.html

R. Bash 专题
来源：http://www.sxryk.cn/163fihlyqzo.html

================================================================================
来源：http://www.sxryk.cn/163awkdcmlc.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163jaekrfhl.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163qkgaupgf.html

set -euo pipefail
来源：http://www.sxryk.cn/163hfyjvpaj.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163iulrieur.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163jwesnyyj.html

[R03] 只读变量
来源：http://www.sxryk.cn/163hgmqmweq.html

readonly PI=3.14
来源：http://www.sxryk.cn/163lklxwmva.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163lkbxkxqp.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163rvmveqjk.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163piqzbola.html

name="${1:-default}"
来源：http://www.xuanzx.com/163bfydeneu.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163nhqcjeia.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163vbuaawwv.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163daujoaqf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163dzhwbxiz.html

[R08] 数值比较
来源：http://www.xuanzx.com/163jbzfawtr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163smwxbjvk.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163coufqgcv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163psfxvaex.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163tfubcvzi.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163lnrbnwgd.html

[R11] case 多分支
来源：http://www.sxryk.cn/163jaiyklzh.html

case "$1" in
来源：http://www.aibaodan.cn/163sczyeidd.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163uhrnqugs.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163jiilrzom.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163mgkrjebn.html

esac
来源：http://www.xuanzx.com/163jorvchwb.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163sponwlkn.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163mqzlxtcm.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163drvkpokv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163okljuhel.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163qqxqtblp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163hfobuqyl.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163ulplvkgx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ggdqimjw.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163effhsxqj.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163tmaeqimt.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ifyoywvz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163ryvzshze.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163jxghhyki.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ucluqplo.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163qsscfmmj.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163qkjpywaw.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163fkoldhru.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163olpgpjet.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163pyeztznf.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ifzjcyyc.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ulvmmkoy.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163naslgjqq.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163npgekwlz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163isidwvga.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163posntyny.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163xwmnsqgc.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163gjlnqomf.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163tmxuuofc.html

[R26] 命令替换
来源：http://www.xuanzx.com/163jjqtdifw.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163xlgnpyoe.html

[R27] 算术展开
来源：http://www.sxryk.cn/163rgykuiev.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163odpkehkj.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163zoiyomaf.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163zaugfxih.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163jdurhywo.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163atepnote.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163fojepvzm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163uawpegnb.html

[R31] 局部变量
来源：http://www.xuanzx.com/163hmzwvbof.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ptdavwpg.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163bdafqhus.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163owfkhvyi.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163xbzzzxrk.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163ccgtajjf.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163aovkdeao.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ruhpajpu.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163uxppmzdb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163elnogxat.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163jrhbssaa.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163xlakdxvv.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163qmwliwrb.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163nramxhev.html

[R38] 管道串联
来源：http://www.sxryk.cn/163csefhupx.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163wglxpagt.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163hsmxpnco.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163mguhotsp.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163hafvvtwp.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163fqlvoxtv.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163opcfsqme.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163gphxyzvk.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163nlezfatl.html

wc -l < a.txt
来源：http://www.xuanzx.com/163mfphpnxk.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163rwcdgllv.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163hbgtzasw.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163vbtjpwrb.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163tybfyjyy.html

[R45] 批量删除
来源：http://www.sxryk.cn/163ipaymnjn.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163txwdlrxw.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163ljxduxna.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163kxtwmvsw.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163zbdkcytj.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163haatrgcy.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163cqvugmmz.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163yjzjhfwl.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163zabikpou.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163hovnecrj.html

[R50] awk 求和
来源：http://www.sxryk.cn/163jzfllxyq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163fqqeafre.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163kzfvyewr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163dmoizayz.html

[R52] 统计行数
来源：http://www.sxryk.cn/163qnjozkzc.html

wc -l a.txt
来源：http://www.sxryk.cn/163wcpqifme.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163xunmmlap.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163wlepirue.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163rqupsbtt.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163vxwlqtba.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163olbxfxit.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163ensswhae.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163jldxbfzz.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163ycgrjvkq.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163lzxpgshv.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163pkuilipy.html

[R58] 下载文件
来源：http://www.xuanzx.com/163nmxevthq.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163wvwivcvj.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163jqomlpgb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163eshhsdzc.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163eydmpgpe.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163guydftck.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163tsgozoie.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163zyqgutcs.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163griphwaz.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163roccnjlt.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163uwqurvbb.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163rxigjfuj.html

[R64] 结束进程
来源：http://www.sxryk.cn/163bgucurmm.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163bqcffcff.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163wvebmngk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163bennloxo.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163bjuflrmy.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163diofcxrn.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163oitgdild.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163aowzqadg.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163urcmvdsc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163zbtjhkao.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163rybukyzs.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163xadledhb.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163uqnumynh.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163hbazqehv.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163pspkxfkv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163fxoqqvas.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163mttprhrd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163jteqlcaj.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163gnoswddd.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163pabrwvcw.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163xwwntbzh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163cxyeszxk.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163pkdfaqyz.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163rflvdnbw.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163vduaskhp.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163pymksqrm.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163mpwzwaju.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163rhodfqgi.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163hussmogj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163wvsnmquc.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163frormkul.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163jwhctphm.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163qgwbwumx.html

time ./run.sh
来源：http://www.aibaodan.cn/163jkyhgopb.html

================================================================================
来源：http://www.aibaodan.cn/163xsuccvrm.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163ljpysblj.html

================================================================================
来源：http://www.sxryk.cn/163xwllbsmb.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163gdxqpekt.html

#include <stdio.h>
来源：http://www.xuanzx.com/163tayvqamc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163efeyxkmk.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163adafnqhr.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163hhtvvqig.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163noevruuy.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163lhvhzrtb.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163idmpjejp.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163sldbkhua.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163yejxmstt.html

strlen(s)
来源：http://www.sxryk.cn/163qgdkochu.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163vsjtrehg.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163fhipihmv.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163poosjnka.html


<!-- 参考信息 -->