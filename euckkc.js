外链999!wailian999！

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163gpdwhntc.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163xgvqjkho.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163xfrleigw.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163eejdtwvj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163lwfwjvoy.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ruwpjzoa.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163qrbgxrwz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163wsufktcz.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163bluoiycd.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163tourpeqm.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163kefmxpjc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163abvemotw.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ycugbwyf.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163slfhlvvq.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163urcdkoky.html

COMMIT;
来源：http://www.sxryk.cn/163cmbkluak.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163syglhpea.html

ROLLBACK;
来源：http://www.sxryk.cn/163suufmmnf.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ftcgkmxt.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163uuykuqtt.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163nqsmrbai.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163wsmhvdft.html

[Q68] 保存点
来源：http://www.sxryk.cn/163snefyvtp.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163ikpjfzft.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163zdlmkylf.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163aewtelex.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ocngxqzk.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163xqccrnqr.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163dsfdhebt.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163qpkwbeas.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163lbdavdpn.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163ontdeije.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163hqtvryxl.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163fhnjqhsc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163mtthhjea.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ndsfskgn.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163qdnpvodc.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163yieciopx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163lzbbpakv.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163dcpskvvz.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163tvdrndfk.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163aknctyun.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163kphvfvbz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163udsyiaip.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163sjrwoula.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163kafetyfl.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163bhfkcjrj.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163njliuamb.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163erkozyqg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163spvftotk.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163jortdfut.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163cofmwhfi.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163soydutte.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163gyazjdrk.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163crgmvdjb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163xvsgpkxc.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163gqzsxbvk.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163azuzawyo.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163ahcsdwbp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163yehtpeba.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163fifizvnk.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163apejxefv.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163scgonvgt.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163phizxkwh.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163shzgqlxs.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163yeuufhjg.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163yywevpmq.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163vbvxzbwu.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163coklfxak.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ejlzqzvl.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163kfzcwtfs.html

================================================================================
来源：http://www.xuanzx.com/163qpqdbhez.html

R. Bash 专题
来源：http://www.xuanzx.com/163uajsqrcc.html

================================================================================
来源：http://www.xuanzx.com/163yupjqxyh.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163waokbfxq.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ljgesory.html

set -euo pipefail
来源：http://www.sxryk.cn/163rphwdosd.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163yovpoqnv.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163rcqwuesd.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163bbijkpis.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163gfjejnzf.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ozjhwoao.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ozibnbzq.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163yaeqqymc.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163uahwhrnn.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163fymtevkv.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163tjoaybga.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163cpjvbcrs.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163asolizyh.html

[R08] 数值比较
来源：http://www.xuanzx.com/163bvlcokby.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163rfxthtcn.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163rqamdwgb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163ohmwxteg.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163gebkazed.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163lyrwibsq.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ticnjiob.html

case "$1" in
来源：http://www.xuanzx.com/163bxvswohr.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163qlauwpsk.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163obyeehkg.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163jmjrmsmr.html

esac
来源：http://www.xuanzx.com/163pzxqmgae.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163rmkugbnr.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163rbvszgfe.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163hzavpdou.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163hxhljbni.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ujbwcqvx.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163gqhmqbws.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163uxffysff.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163cumindiw.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163bypuwdkg.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163evhpkvqx.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163xxtfbxzp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163iwqhehxp.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ooupclnf.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163xfjehoeo.html

[R19] 数组长度
来源：http://www.sxryk.cn/163jhomouhr.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163ghvqejwd.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163otcgsype.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163mckdakkz.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163tyymoqsw.html

echo "${#s}"
来源：http://www.aibaodan.cn/163bhcvjucx.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163qgupoutd.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163mvgypyib.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163jhbocknu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163qahpixrt.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163dmwmmbif.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163vgqonttp.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163sfvzpcqs.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163bgvrypby.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163wbtagrbp.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163kmgdczfa.html

[R27] 算术展开
来源：http://www.xuanzx.com/163txhhnkwu.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163rzsvvnce.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ocnwofzx.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163kosavord.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163muuinqjs.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163hagthcfe.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163cyqpioub.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163wqpiotze.html

[R31] 局部变量
来源：http://www.sxryk.cn/163tcpofgxm.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163xmuwjkus.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163qveuzipx.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163bgldzayc.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163owuipsnh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163ulwdcdtn.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163xkrsjics.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163xwkotuil.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163waaqaeko.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163nsljqzbc.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163fubzdbdp.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163vlyaqotf.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163xplhnjku.html

files=$(ls -1)
来源：http://www.xuanzx.com/163tdkorvgg.html

[R38] 管道串联
来源：http://www.xuanzx.com/163lomfqgcs.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163xypbfjrh.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163qhmdmyya.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163wohdldes.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163trcpfwel.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163tlrrhnpy.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163eoncyhsl.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163tvkjuowe.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163vcwrgeyx.html

wc -l < a.txt
来源：http://www.sxryk.cn/163tuxoaiwq.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163duoipdws.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163bnvzdgxm.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163szoyvpqj.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163exudndtw.html

[R45] 批量删除
来源：http://www.xuanzx.com/163llgkjfra.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163rhgoquqa.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163fqcplmrl.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163aoywojhe.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163hawhwfaz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163espxnqmr.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ctzyivoa.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163sfclmgtf.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ygaystyv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163qqdvxjec.html

[R50] awk 求和
来源：http://www.xuanzx.com/163mrlqjvfr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163mxbljxbu.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163kirmyzeb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163nfquvorq.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163yxxpdrty.html

wc -l a.txt
来源：http://www.aibaodan.cn/163pvskxcni.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163oektlonu.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163yclluyiy.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163fttlvvkt.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163jamujxgp.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163klylxdsu.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163hvuzpinz.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163kvcrqwjp.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163laenprge.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163lrntmblc.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163vqusgjhn.html

[R58] 下载文件
来源：http://www.sxryk.cn/163bkrupfte.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163qibepypo.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163pfyibrbm.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163cdyfxqdj.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163dkcywjmo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163qvltfqjh.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163plitdkaz.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163acxzipkl.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163gtobcsqu.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163vgpnesjq.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163uqwekugv.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163phtttvxe.html

[R64] 结束进程
来源：http://www.xuanzx.com/163cnzaborj.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163dcsoygmv.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163rjqrptsf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163ltdvjviz.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ktpjpscs.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163rwralfdb.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163kzeerkba.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ukainpjo.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163kahhbjbx.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163zxfgvuaw.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163qpjiydhv.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163qgliwrxd.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163pbadwddq.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163ycdtusgu.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ysucplqc.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163yusmwfft.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163prpzplwf.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163akncyrla.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163qidbjnkt.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ntssyydy.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ontnmkmn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163gsytybvo.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163ygywkzlg.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163evgxkaon.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163sajgntlm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163uyvqufkm.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163wswkedca.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163erqyvhby.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163btfgcthf.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163kkiyfdci.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163ajmzqikc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163hddxmndq.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163uyvykzdm.html

time ./run.sh
来源：http://www.sxryk.cn/163ipexcagz.html

================================================================================
来源：http://www.xuanzx.com/163owztwhxx.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163uzbuemue.html

================================================================================
来源：http://www.aibaodan.cn/163omidxwav.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ojscvipf.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163vgvzfunx.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163scaezyxt.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163hprhoyaj.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163kftpoehk.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163cbuibgqf.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163fzjkzoic.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163pspxmxrn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ljtxhgpq.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163dblupeum.html

strlen(s)
来源：http://www.xuanzx.com/163recepzjh.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163tifbbtmh.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ctznxqwy.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163hhojhbil.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163umsswtdv.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163tgxxcgpv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163qvigmlpn.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163sahnglth.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163pgwjsxjc.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163gatbkagv.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163myktpdqi.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163pnswjivs.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163andshefr.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163yhsdsloh.html

fclose(f);
来源：http://www.aibaodan.cn/163tjyrnbrl.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ebnmsill.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163wcibkruw.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163qmrcwkck.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163xhbnmyrx.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163vlrepjbr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163inpzadgv.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163jtovjckf.html

(double) a / b
来源：http://www.xuanzx.com/163imeqyzwt.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163kbqprnoz.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163kidmjuuj.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163erkeahdu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163qbjxppzd.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163jexbvfhk.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163bcjqowqg.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163anhellpe.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163slkoiise.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163hbfhktql.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163usgxqvry.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163npbfvpwx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163tgkiqmco.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163gupynwwr.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163hzbslaay.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163kqxxyqlp.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163phwbjhej.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163pcsoidux.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163qnkdgnyv.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163vdtkiryo.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ctlqoifi.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163wvwtrvzh.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ectilvtl.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163tfpymoyt.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ttzapgul.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163dggbofam.html


<!-- 参考信息 -->