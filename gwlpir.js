外链999!wailian999！

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163qeywphex.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163libjrixi.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163rzfegqmp.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163ksbwwskq.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163douhmydm.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163dqvztkim.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163wallemlg.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163odtqhjbc.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163zscbhvwe.html

[Q54] 清空表
来源：http://www.xuanzx.com/163zozzxtpa.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163njwpbwgx.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163pduzuwoz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163fgilunjc.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163wlnztltt.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163mpevnutp.html

[Q57] 行号
来源：http://www.xuanzx.com/163eexeuvaw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163zxcrhbpy.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163kfsxtnap.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163fkebybrw.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163tcwbefuh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163kwibxteh.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163vjvuxoui.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163dontcclt.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163kigmvamp.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163mhzvojvf.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163rdfbkypa.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163bthuxfce.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163sjrxvppd.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163qpbblqiu.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163vgvkmdgw.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163rphthrxq.html

COMMIT;
来源：http://www.xuanzx.com/163herjawom.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163pneztemd.html

ROLLBACK;
来源：http://www.aibaodan.cn/163chskyxjn.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163hzacpmux.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163urmexhcc.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163phzklhwe.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163bhfxjbgy.html

[Q68] 保存点
来源：http://www.sxryk.cn/163kdvzjgbh.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163zvkbjlja.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163eutrowjr.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163vmmnysuh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ugvfwcdr.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ipkyvgan.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163pvwenrto.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163desmvjfr.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163trrkvlnd.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163iborjxhd.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163yybmsczg.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163uwuewfii.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163dfcugazm.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163eabgdltp.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ozjimcne.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163ollsemzp.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163enxlguph.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163hsnhknha.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163fgivrtfg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163tcuhbccy.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ylolpitf.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163bthqoeno.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163metlsjlu.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163bxzznfiq.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163drnbxhjz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163xsrtvwza.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163wynfsnqp.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163zkbhffyl.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163bzrrbrde.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163dmkznjow.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163raxlnwmo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163qukvvloh.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163utvzcicj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163bsopbfiu.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163elofskbo.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163mnnwtxag.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163yqtmqcam.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163dmeeypwk.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163wgwdfzmh.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163oaucqept.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163fkpclvas.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163isfasmfl.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163onwkbiij.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163iflwxejy.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ojvboboe.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163jsxzmmxh.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163kdhhvtyj.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163kkuebcuv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163wkmgvjvf.html

================================================================================
来源：http://www.sxryk.cn/163iunrnwzm.html

R. Bash 专题
来源：http://www.aibaodan.cn/163bsqhaytv.html

================================================================================
来源：http://www.sxryk.cn/163ezthhnrr.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163nsvmzmgr.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163rjixrtdp.html

set -euo pipefail
来源：http://www.xuanzx.com/163bmkvwyua.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163tgyugwcy.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ueigiwhd.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163vwunferx.html

readonly PI=3.14
来源：http://www.sxryk.cn/163fasxuqou.html

[R04] 位置参数
来源：http://www.sxryk.cn/163nidkfwwj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163ymywchho.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163cppmchcr.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163zflldomx.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163wogpupuo.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163mfihoark.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163ojvccjwx.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163sufyoptv.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163auviqnag.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163iuztydbf.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163kzdffwfs.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163rkyyqxqj.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163acykbrzd.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163lkeaqwug.html

[R11] case 多分支
来源：http://www.sxryk.cn/163mooajdyg.html

case "$1" in
来源：http://www.sxryk.cn/163qtuovvua.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163ogjrdysy.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163mxqjexew.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163towyjyks.html

esac
来源：http://www.sxryk.cn/163gtzszrkr.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163wxbobdie.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163lrmaosse.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163qjbonacn.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163evfihthp.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163fsdmenbp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163igptuanp.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163epxylfsr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163wwsbhewj.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163osqgibwz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163lmdtlbjs.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163atsxyril.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163tdbduabl.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163hyhvpufx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163sbvlowvt.html

[R19] 数组长度
来源：http://www.xuanzx.com/163snwkrnsj.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163avrgkqdu.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163fwvcvkao.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163beeftcyd.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163hcpqvyki.html

echo "${#s}"
来源：http://www.xuanzx.com/163ilcmaysu.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163usaypfdf.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163shvrwtkl.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163eweuzwxz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163ureungnn.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163eqsdgxfy.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163nwktkkfc.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163nouqarnn.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163wxhrqfoj.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163thdzkatt.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163jzvvcajo.html

[R27] 算术展开
来源：http://www.sxryk.cn/163puuevvru.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163vnwwibbz.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163hvsqdvhw.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163lfqlqzos.html

[R29] 定义函数
来源：http://www.sxryk.cn/163adssnlub.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163fpotzqav.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163vdjxcaoq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163rkfsukgu.html

[R31] 局部变量
来源：http://www.sxryk.cn/163zboziqxg.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163pmvufsdl.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163hehskikm.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163ugioooju.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163wmpfrfwa.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163sgucewuq.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163nhdsqrxf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163wfmffsui.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ukeinwmi.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163pgahscby.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163lsqixevd.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163wzdxjgrk.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163qoowazkf.html

files=$(ls -1)
来源：http://www.xuanzx.com/163jlrjvgqz.html

[R38] 管道串联
来源：http://www.sxryk.cn/163vlliwqfb.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ozaasgim.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163gsfrzmve.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163lbeoqsqh.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163nzhtnllu.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163spooqlas.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163efzmdkek.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163pcrdxvjp.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163oyvogpvt.html

wc -l < a.txt
来源：http://www.xuanzx.com/163wvqlvmim.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ambinrey.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163dzjroklz.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163vvwsgnbp.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ynughorb.html

[R45] 批量删除
来源：http://www.xuanzx.com/163rcdlobbu.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163azykreuj.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163kjmlfcag.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163oftnszdo.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163tolvydhz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163wukonwzm.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163qvbrtaou.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163iddvtkvh.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163zpzmlglt.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163tsamqoje.html

[R50] awk 求和
来源：http://www.xuanzx.com/163etjrhsvy.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163feojpgtc.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163nttkqubq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163pdabgozl.html

[R52] 统计行数
来源：http://www.xuanzx.com/163idokjukw.html

wc -l a.txt
来源：http://www.xuanzx.com/163plcufzpg.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163qtolqhtd.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163jdaivlul.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163aiyjukrb.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163iqmlvrhv.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163vfrouiga.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163mksztibf.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163mvrwvyam.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163mjegeqir.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163npeqbvxt.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163ploygytd.html

[R58] 下载文件
来源：http://www.sxryk.cn/163kopknbkt.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ulfykpxc.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163eiyuvxsb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163vvaevyeo.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163lsxicpfy.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163ypigpagm.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163szqyxdhb.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163kvocrsgy.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163rsweylvv.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163zhrbxjtc.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163nhlxbaqg.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163kmgrqozr.html

[R64] 结束进程
来源：http://www.sxryk.cn/163gjcacstm.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163aqxgprpp.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163dhvombcf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ugnsmpqo.html

[R66] 定时任务
来源：http://www.sxryk.cn/163vbazhivz.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163ugnbzpav.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163flapsqnb.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163iqpppmuy.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163khhbtupo.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163utdfgdhm.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163fwipbkvs.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163wrizjhwv.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163cderafrx.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163dwifpcrt.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163eeuuiqzt.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163eejsjglg.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163tjghkkas.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163iotutbwo.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163heowvdod.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163yolyllgj.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163qsaqceym.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163rofmwyvj.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163lhartosy.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163eyanbknj.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ufcgbfzj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163uwkoiqsd.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163qrydwotc.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163eortuzie.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163fbobcwvo.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163imflewgj.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163hooxbmsj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163xjkquavp.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163cklybzzp.html

time ./run.sh
来源：http://www.sxryk.cn/163vyqyqjva.html

================================================================================
来源：http://www.aibaodan.cn/163zoxjppzt.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163gjeitkgu.html

================================================================================
来源：http://www.aibaodan.cn/163hyadvucu.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163vdwretoo.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ivqeksdk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163dronfxdg.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163jvmnclmu.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163fxgjynjm.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163cvntmqgg.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163jccjrwlc.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163bgrozsjg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163zekwscxb.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163xgitqahi.html

strlen(s)
来源：http://www.sxryk.cn/163luaqyzog.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163bvgcdrrz.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163imkyyiqr.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163bqeetrlf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163ohvslfxr.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163scazqzbz.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163aiirpkuf.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163qmnavjwy.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163awdgcmww.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163xbcfnubj.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163zsyzbzds.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ipbropgm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163ahdfirsa.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163xkzevwth.html

fclose(f);
来源：http://www.xuanzx.com/163dkpyadvl.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163tatmsfam.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163gziwousb.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163rywqlpbf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ufcfspjh.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163hsntcvmr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163fokoffyx.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163gjouqxuu.html

(double) a / b
来源：http://www.aibaodan.cn/163iqcrkxet.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163gtwqhijf.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163zxctdhrk.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163fuparlov.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163yjwirmka.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163iufbbbaj.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163dsvlwtxt.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163fxdlrham.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163tbrjmmpv.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163cbvsxtfd.html


<!-- 参考信息 -->