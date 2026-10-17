外链999!wailian999！

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163vvlcumoo.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163pyndldot.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163cysbwowt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163hubjmxye.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163zttywvtb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163iawjdgry.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163ynccsbno.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163oosfkewo.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163gqjrumwk.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163qolorpia.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163rjfiqlot.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ofranedl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163cirschcy.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163jgqttkld.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163ndwfdcga.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163fmqwiziu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163zvgghpxu.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ljzjlcla.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163uklzybrg.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163djmcgntp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163hyekpzlb.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163jmhlcseo.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163pekksujx.html

[Q57] 行号
来源：http://www.aibaodan.cn/163fyxvudad.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163jefkywqn.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163znubrerq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163msdtlufe.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163qhlxpnfp.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163ixklhqaa.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163cnmyroeb.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163jfvvavyj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163izpatbfy.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163yuomfyzn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163gzelcylt.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163jnhkxzmc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163jmlhrilw.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163juidxios.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163wouxcuqx.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163ygsbfgsk.html

COMMIT;
来源：http://www.xuanzx.com/163rjplpfcw.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163hgjznlne.html

ROLLBACK;
来源：http://www.aibaodan.cn/163cntsnyih.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163pnfnacwu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163alspgews.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163hvucebxd.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163trlonzyr.html

[Q68] 保存点
来源：http://www.xuanzx.com/163fjxmfefl.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163xqnpvtsw.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163juqlmhqz.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163drdogmop.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163biatjasb.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163svjevwoh.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163rbbcgbrw.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163teobzwnf.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163qowxpvph.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163xytymspt.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163rcoeydht.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163cmoiagqz.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163wggqdmff.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163iamsoskd.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163jucevkam.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163mdmconlb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ypfoiild.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163vjgnevjp.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163pnhdahee.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163bajeafur.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163gkksexkc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163uzkwtmia.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163desgiocr.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163dsgtowal.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163wazzugkw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163czzjwjus.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163tofxdfqg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163ldtvqdph.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163gepxklam.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163rpwmgoro.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163zqbcrupk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163qjwiyuht.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163yiixzuan.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163koedomwu.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163zxiiwnov.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163cnxkmckw.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163hcbrtkgo.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163evwyozou.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ycptejrz.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163zrupfviz.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163eyiwpgie.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163jjmehcyq.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163tuikaecs.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163xstoubbq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163yxkigdwi.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163gizwrgum.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163aoncdmeg.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ikznptnm.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ldrpdtvs.html

================================================================================
来源：http://www.aibaodan.cn/163vsxxrqrl.html

R. Bash 专题
来源：http://www.sxryk.cn/163ftmsonoe.html

================================================================================
来源：http://www.sxryk.cn/163ghrzbtcd.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163gwcpgrkp.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ncelhaqt.html

set -euo pipefail
来源：http://www.aibaodan.cn/163cnmrzzxo.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163cwgkribl.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163pjvvcasl.html

[R03] 只读变量
来源：http://www.xuanzx.com/163wvfbsuxd.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163hsuopwmk.html

[R04] 位置参数
来源：http://www.xuanzx.com/163htewdefi.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163wacbwlgi.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163aruojtds.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163ioodjtax.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163yovtiole.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163dqjzoasb.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163obelmzqo.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163zsonrixo.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163iprlnhks.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163bqxdqync.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163qfqwvsyd.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163tmjofwva.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163fwkaztob.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163ogvyrryx.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163dffuxrtt.html

case "$1" in
来源：http://www.aibaodan.cn/163ldjgxbvm.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163eiijgwxw.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163zaydwanu.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163biaawcxt.html

esac
来源：http://www.xuanzx.com/163scizsgwr.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163itvdobwy.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163lterlxbh.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163mfbmrvjl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163mzsfoveo.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ncogmmch.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163joflgknh.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163nsumldub.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163svuyxsqk.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163dribikga.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163uydalwni.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163yxwgzydp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163ijbdzswf.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163wgftzkkm.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163cwnuiiky.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ulpdckbu.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163fmdzlhfi.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163imeaotab.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ciqdnglr.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163qurbldmb.html

echo "${#s}"
来源：http://www.sxryk.cn/163gzmhaawl.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163qbwiudve.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163fqawrtgn.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163pncsarho.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163zxrfkwaa.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163arxrxihu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163zrwoabhw.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163zjitrddh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163apsylbeb.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163nchqnlvi.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163ycsvtyqh.html

[R27] 算术展开
来源：http://www.xuanzx.com/163pkvmkruq.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163onbgmjmj.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163blbewtpl.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163avpdffva.html

[R29] 定义函数
来源：http://www.xuanzx.com/163muzauhpg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163khhwfmbh.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163smvlsdsk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163wqxacirs.html

[R31] 局部变量
来源：http://www.xuanzx.com/163yobjucfy.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163fzgfrgxe.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163yxjogohr.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163siwhfitn.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163zhrznexa.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163yomdqjti.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ztqnutaz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163cpbbhymw.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163idybgsai.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ycsipqdl.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163sofqjuzp.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163hqeuqtsp.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163gimfixsi.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163tbwiqpnv.html

[R38] 管道串联
来源：http://www.xuanzx.com/163vnidjpbm.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163qswitndv.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163xxnaljxc.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163rlugxjwh.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163aqdftgla.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163cukvjlfg.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163nkeelfin.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163ktofmxvi.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163exvvaqhh.html

wc -l < a.txt
来源：http://www.xuanzx.com/163mszezwku.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163sjwiectq.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163tpcxnaad.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163yixgubdd.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163bkekjldf.html

[R45] 批量删除
来源：http://www.sxryk.cn/163qocwzshr.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163ucdmtdpx.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163iiznxlvw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163vviwtqlk.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163kpyebttn.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163yoaxqrpf.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163nbzyziaj.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163venapbzn.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163lwagvgmt.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ibbugpoa.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163octnzedk.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163mgqvpusi.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163justcnxb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163qzssvixn.html

[R52] 统计行数
来源：http://www.sxryk.cn/163osjsoeuj.html

wc -l a.txt
来源：http://www.aibaodan.cn/163zmbiyvbh.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163kyrrwmeh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163zaqpseuz.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163sajiiump.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163dezkrwdt.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163jjachmyb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163vftclucg.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163cfmeostw.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163zuqukbgq.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163iueprlwu.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163jbbvbere.html

[R58] 下载文件
来源：http://www.xuanzx.com/163qkeynuti.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163zirzdjue.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163deurafed.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ybiygkgk.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163vzeosfoq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163tixkdbxu.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163pqbrvakp.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ezbylasf.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163gbxujetr.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163locldzyf.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163tvcawstn.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163imcdyjxc.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163suvrympd.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163jdhzxpsc.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163lbansmun.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163exihvftn.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ealvacaf.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163jsnlkkxm.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163bvrszjmm.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163rjvsdyoo.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163wbpikbee.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163xvbfaqrd.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163wjqlxauj.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163wqeyiinz.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163yornmofu.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163eummypoy.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163dqanroac.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163xvjxnndg.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163yztddozf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163pvveyxyt.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163ieratruw.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163bdskomrl.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163zkjuvafm.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163ulspwtnv.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163pwnoibeh.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163wpekpiiw.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163wrzpejje.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163lufpdpyt.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163vdygfobj.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163gdulafzt.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163echddoua.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163tbnadkzp.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163zvyjxlyu.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163zvzvuvev.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163jaiiyjux.html

time ./run.sh
来源：http://www.aibaodan.cn/163foebmdlr.html

================================================================================
来源：http://www.xuanzx.com/163quedniwe.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163tnnedeez.html

================================================================================
来源：http://www.sxryk.cn/163hvlsnwaq.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163fuvlxuyx.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163qguyxmwc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163zoyxbigb.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163xwaszsnc.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163vcaolcwu.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163pahreafm.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163cpxxabkt.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163cclnxfvy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163zmopwiky.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163hrdckmel.html

strlen(s)
来源：http://www.aibaodan.cn/163cwrylgcz.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163aktljbnc.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163xfiyniaw.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163pexlviiv.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163vwyekecl.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163hldtdeby.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163rxcmjjjh.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163abmerbjs.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163mdovwzer.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ieovjrvy.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163bhrwjmuw.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163rfvmsqeu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ufgjcyhy.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163mqvmtiob.html

fclose(f);
来源：http://www.xuanzx.com/163qlxsvmui.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163rixitlfj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163zbqczlzm.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163dgpdqbsz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163dwlcacxv.html

[S14] C：枚举
来源：http://www.sxryk.cn/163qzdwjfia.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163mhblaqfl.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163hiohyjxl.html

(double) a / b
来源：http://www.xuanzx.com/163fmyfcwit.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163hnqmvhpp.html


<!-- 参考信息 -->