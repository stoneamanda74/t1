外链999!wailian999！

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163nifynsdw.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163aydojpnb.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163xlffyylm.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163oabueceh.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163qxsucwgx.html

[Q54] 清空表
来源：http://www.xuanzx.com/163ujiejftt.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163kzrthmwj.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163kyjdtqhh.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163ztptpict.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163avnsygxz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163xphozjnz.html

[Q57] 行号
来源：http://www.xuanzx.com/163rvgbtanl.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163gqvkhsps.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163vwemnlib.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163tuigaxsx.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163vmjwfxah.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163bkwsvths.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163grlfthep.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163wwazhdss.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163avudnxti.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163bcsvwiyx.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163hbkiukxz.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163samnptft.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qhbdeqia.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163xyrvqeqo.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163hklunnow.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163xaunwqzl.html

COMMIT;
来源：http://www.aibaodan.cn/163fgnxbfsx.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163defdjrru.html

ROLLBACK;
来源：http://www.aibaodan.cn/163smcykqdp.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163wrypijbj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163zpcralux.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163tnevdizc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163icazgqwa.html

[Q68] 保存点
来源：http://www.xuanzx.com/163rsemeldo.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163islopcgh.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163lzxbcxfk.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163mxsrkncy.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163vrfkzdew.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163dvhdcdac.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163azrbeqjf.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163rdpiadgl.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163scnplxef.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163aplzdlvf.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163iiqmwtdi.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163zzxruijz.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163khbmmfxu.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163gpdrjshb.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163mnbanvhr.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163kphxbgxa.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163batloyqb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163gtxalvst.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163oziyjonj.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163ubhtgukp.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163tuzixniu.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163lxmyqjvo.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163gkoqgpmb.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ghrogvwi.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ogqctlcu.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163adabnpet.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163pcnohlhj.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163kxvdzowa.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163wareiwvg.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163yuafimgy.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163esazyuhb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163pklkrzph.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163cfzstboc.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163amnlhohe.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163ebxajwpw.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163mizmgiju.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163vwgsnaub.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163xdimpwkn.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163kvojdayj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163hevsqrit.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163hbooswnv.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163nodgmwvq.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163dgicgexm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163hojhseqp.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163wcvyildn.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163mraafuea.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163anuynogz.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163luaenbvd.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163batmyovy.html

================================================================================
来源：http://www.sxryk.cn/163wosgbsqb.html

R. Bash 专题
来源：http://www.sxryk.cn/163rxvnmhtv.html

================================================================================
来源：http://www.aibaodan.cn/163ttszixww.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163ssroczyv.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ujpblhsf.html

set -euo pipefail
来源：http://www.aibaodan.cn/163lgyibley.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163uhpoeypq.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163mskgajaw.html

[R03] 只读变量
来源：http://www.xuanzx.com/163lehkmjla.html

readonly PI=3.14
来源：http://www.sxryk.cn/163gwwjnshp.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163gyaynsin.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163hbjqrznq.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163zbouqztk.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163bjhjlrxa.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163bocazpiv.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163yyymiqjr.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163bjlfpnxl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163rynfxlir.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163bxykqfhc.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163owikmhft.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163hwupxfju.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163dnuzwtkf.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163cmzqrmgk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163jscdyztm.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163rtopxzix.html

case "$1" in
来源：http://www.xuanzx.com/163uipzpfcb.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ezjbtoah.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163gacytxyk.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163owqaavje.html

esac
来源：http://www.xuanzx.com/163qgeysosm.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163qgerdmgn.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163hzbhpnzg.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163mczwejac.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163isligcrx.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163mekgfncl.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163ewrliaou.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163kmgqwcqw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163pedlynkw.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163prpfkmhf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163kfytyxwt.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163egwahpjo.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163onnvpmqu.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163yubekgiz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163hitzxbmy.html

[R19] 数组长度
来源：http://www.sxryk.cn/163zgfsvryh.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163vcdmeaww.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163zezzapuz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163vzfmkygq.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163yeetubue.html

echo "${#s}"
来源：http://www.xuanzx.com/163lifshmpv.html

[R22] 截取子串
来源：http://www.sxryk.cn/163cjiuhxum.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ignmuipg.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163imdxvjmp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ytkslbfr.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163ggdcsvmn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163wilalefr.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163txgycndu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163vsqyfkuz.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163watjmedp.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163ztyzocsy.html

[R27] 算术展开
来源：http://www.xuanzx.com/163nbwboadc.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163yqlzeqke.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163blpmrbds.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163yzbndnvf.html

[R29] 定义函数
来源：http://www.xuanzx.com/163xsyhhqxo.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163kjymgbdc.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163ptzcxpip.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163tuvbuemh.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163tuzpxhjk.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163cjuwsqux.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163peodhqoq.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163esmnvcxm.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163uierpgon.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163qvsssipz.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163zvjgthmx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163jnyjyzcd.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163wpwsqpaa.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163hyhrnvrk.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163wvkipyrt.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163pwogkisw.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163lhkvmtat.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ltiaodtv.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163cznuklac.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163mgljpwjm.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163mfzaushy.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163wliypwvc.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163aqbxnyjz.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163jqquinpe.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163vwgduyva.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163hdwiuwli.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163mkymncqm.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163cniqpnks.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163yzzdiqiz.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163tfjvngor.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ydclkyec.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163owyqljah.html

[R45] 批量删除
来源：http://www.xuanzx.com/163ueebfmaj.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163wqwejdyb.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163tgkotbzf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163akszekuq.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ommgadox.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163hswmuewi.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163nijtafkn.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163lqvbliul.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163zryoqein.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163vghavtmt.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163rurjqxaq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163dnvrnfqt.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163gkjmesiu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163urxtandr.html

[R52] 统计行数
来源：http://www.sxryk.cn/163ikeqvrgy.html

wc -l a.txt
来源：http://www.aibaodan.cn/163fweynvjy.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163hfikomsh.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163klrijevf.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163rrzkqsic.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163ximewfwd.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163ssqedieq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163ekuqcjbc.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163yhikqszq.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163cnpduytv.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163vxctkcda.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163obiifbzh.html

[R58] 下载文件
来源：http://www.xuanzx.com/163vlfcdjzp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ylwaozfs.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163gxiweyex.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ycvgsott.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163mkhmjskh.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163jnheszke.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163uhrpmnhi.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163kihvosit.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163nocrjxsf.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163qredqpbh.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163ezcyqdou.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163kxkevbnf.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ycqcubwi.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163yhpyrowx.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163yznkeljj.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163ujianbcz.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163fqriwxto.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163eoqoevoh.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163zgzglmhr.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163dpkgiowx.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ojujizep.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163lowvoqpn.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163duidyeqx.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163nhommhno.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163cxzowrcp.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163luxxpkfj.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163wvzvhzju.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163rmnsyvvq.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163khtlvphs.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163rrxetfwl.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163jgygqhrb.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163bzxyqqjz.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163lzavzxka.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163kfcyzuew.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163poegrgux.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ggejhtrj.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163etjpthxb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163spoqidor.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163zbftmnrq.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163xezqgopb.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163fbzxqphm.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163gskpsuqr.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163lifkjnjm.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163sctlezxy.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ahdbhpjz.html

time ./run.sh
来源：http://www.xuanzx.com/163tvzbehtr.html

================================================================================
来源：http://www.xuanzx.com/163awlxifay.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163kzehdbgs.html

================================================================================
来源：http://www.xuanzx.com/163tpctvvmh.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163kpestaho.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ysxmwjax.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163kqpqvfbv.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163aurekqtf.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163hbpmvnjf.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163qeshtkcl.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163eestkbnn.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163fghashpc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163wtbokvir.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163vietgdvk.html

strlen(s)
来源：http://www.sxryk.cn/163ujodoxoy.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163ubvrjstm.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163anecxeub.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163uxjuqysb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163bdurcyin.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163dmgwtqsd.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163fmkwgpvx.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163cevnzyra.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163nbetnnfb.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163riltlgns.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163jntbnrxn.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163zhtwkfuq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163qupuwbqb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163znpjoevb.html

fclose(f);
来源：http://www.xuanzx.com/163cmxuazve.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163lyzklcci.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ctugbdwk.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163mdcpmpqt.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ibqrbmyn.html

[S14] C：枚举
来源：http://www.xuanzx.com/163dmxtugza.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163qtyanyve.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163wzewpgop.html

(double) a / b
来源：http://www.aibaodan.cn/163xomharqx.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163kxmgxaoq.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163vkfusemp.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163iojlwagb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163ndssqmml.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163pxefaiae.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163twrqzspa.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163wkyxtlib.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163lvrjiesl.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163dwtkwjmg.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wieciisq.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163wkipgqsx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163whhijkvk.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ojkeplzk.html


<!-- 参考信息 -->