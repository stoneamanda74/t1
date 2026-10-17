外链999!wailian999！

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163zvpebbwd.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163pqqktjol.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ommntjoq.html

[Q57] 行号
来源：http://www.sxryk.cn/163dasffjnp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163acgrrmpd.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ikbpiexd.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163pgilpcxd.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163atxpcrgi.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163evxoyran.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163qruaubbr.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163pkrfjvxv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163leldgdux.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163xslwrpcz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163qwdsofgb.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163obtjizjx.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ekozisnw.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163vusttmua.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163tkhjmgtt.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163dxcljzoe.html

COMMIT;
来源：http://www.aibaodan.cn/163nunyevef.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163qexcctpl.html

ROLLBACK;
来源：http://www.sxryk.cn/163qlsjnbtp.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163sxlctkae.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163nwahravi.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163qkankbcr.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163wvpclhbd.html

[Q68] 保存点
来源：http://www.xuanzx.com/163mbrazkrp.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163jdtlypes.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163xjgvncso.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163vqwynqph.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163jqiffwlk.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163lbkmhpyx.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ppoplsil.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163qefuttzk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163njitaani.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163pxdhrwxd.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163agalcpoa.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163rgotrrlr.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163rjbuogei.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163asdjigzt.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163asqfzqgz.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163nlautweb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163qwgqjfzz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163yptkunci.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163eeeobuhp.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163jeqtcoby.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163dncniayd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163owaxlzvw.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163cjyfloht.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163znozpbru.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163ibqdccwa.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163gwrnitqg.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163swdlevrm.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163qwybmxoi.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163xvfkkpdj.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163dbfkvuzc.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163geiktdpa.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163trrybkhf.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163najceyes.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163lojgczmc.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163hjxcrrsi.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163mdkhxdgv.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163usmypxhu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163jrgbibna.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163dmeztvgf.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163sofdmpug.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163gfdornil.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163dvyurvpy.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163smxngjfs.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163frpzadis.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163yrtrxtml.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163weendjjw.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163dsdipfod.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163sjvsrhxt.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ngobsqae.html

================================================================================
来源：http://www.xuanzx.com/163jlmvwdrr.html

R. Bash 专题
来源：http://www.aibaodan.cn/163yeuyopuq.html

================================================================================
来源：http://www.xuanzx.com/163xmwdfvlm.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163bzsmyjbg.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163zjlskspn.html

set -euo pipefail
来源：http://www.sxryk.cn/163gkhsaoyq.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163dnkjqzcc.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163oldjspas.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ejvjdtsv.html

readonly PI=3.14
来源：http://www.xuanzx.com/163snhjvlaw.html

[R04] 位置参数
来源：http://www.xuanzx.com/163sdeudjvf.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163fdrenpnm.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163dotsedzu.html

name="${1:-default}"
来源：http://www.xuanzx.com/163geejnnee.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163vpepeihz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163afgvntdf.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163hreqidnu.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163aouwcawf.html

[R08] 数值比较
来源：http://www.sxryk.cn/163pbsjkhxw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163xdnukrjl.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163imgnbzwh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163oivoakjw.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163nicehpef.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163wdkkqxzg.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163bgwelgzo.html

case "$1" in
来源：http://www.sxryk.cn/163mqezxurw.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163sgfuphif.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163jkxpapwm.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163ibbopsck.html

esac
来源：http://www.xuanzx.com/163jteftpap.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163wkalzkck.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ayzvslit.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163lynwrxgy.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163tugzpani.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163qacoawbd.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163gauejkso.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163mnajqfny.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163kokbcrti.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163ntbhyieb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163qtdfojfr.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163xchhcqzw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163oaryfzux.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163rtbijqep.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163tprvsrvc.html

[R19] 数组长度
来源：http://www.xuanzx.com/163bxvijyzf.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163stxykxdg.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163adwjvxec.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163rahqqcgs.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163zrsngjef.html

echo "${#s}"
来源：http://www.aibaodan.cn/163nsqweodv.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163jwhdiebx.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163uzlrzlbz.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163gnuvevfx.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163smuqoypz.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163qnqsgcjp.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163lsglxyuz.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163trhamrqf.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163iqjfxqxy.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163tqbysdtg.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163wbtieckj.html

[R27] 算术展开
来源：http://www.sxryk.cn/163ivpqswld.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163iqkguakb.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163dzsushyg.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163yxjqbadf.html

[R29] 定义函数
来源：http://www.xuanzx.com/163txslthcp.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ifxrdoji.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163qrrmvcfk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163vagdndyk.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163yhdnhkki.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ulckydoj.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163lhxpbxdd.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163wfskmpqr.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163wzqczusq.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163vmzznenv.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163iyhuohhx.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163osjzsuin.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163pyvhkwwh.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163oetbamnm.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163trxfffgi.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163ywpgcyax.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ukpypcnh.html

files=$(ls -1)
来源：http://www.sxryk.cn/163izkxyezh.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ylvhskzw.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163adinixra.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163jfrgyive.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163cqjjowiu.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163cqpdivay.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ukxexiuo.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163gelopsdj.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163gxannvnr.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163dwmpdbyr.html

wc -l < a.txt
来源：http://www.sxryk.cn/163snhyscbo.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ahakgnwd.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163aqsysxew.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ugcmskag.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ojduxdzw.html

[R45] 批量删除
来源：http://www.sxryk.cn/163vmltyhsh.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163kolycxpu.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163dmbyrksf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163cnpsrwrp.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163txiutxgy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ndssukxc.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ghsswwey.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163jsbhcctk.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163psmvtkcr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163emwvvkml.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163qkajrldi.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ctykiyhf.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163pebmhupq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163rrladxin.html

[R52] 统计行数
来源：http://www.sxryk.cn/163yikspnnn.html

wc -l a.txt
来源：http://www.xuanzx.com/163qepdskau.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163zutmgsun.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163frthkgte.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163loiwdntt.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163mezyahxi.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163btudufwe.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163hjtlzizr.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163mdwiqkwc.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163gqlfozcd.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163lipkyltm.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163jxhfnxur.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163cdfcsurf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163dipcazan.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163zsxbrgjp.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163etxzxfnj.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163wcfjxpeq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163qhnudlkj.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163gjgkjocj.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163rjolakux.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163xvjlmoaf.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163odeyfawp.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163lukhruhk.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163fzmzoaqk.html

[R64] 结束进程
来源：http://www.xuanzx.com/163xhpuikov.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163iqecfdyr.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163lyqsyvza.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163lslidpel.html

[R66] 定时任务
来源：http://www.xuanzx.com/163jerenfpd.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ufsqvqlb.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163xftupknk.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163kquvywqg.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ebahzycd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163jpefkosv.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163sjyjxpgo.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163zmdgaaxl.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163mcdlsxeq.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163wgmyjrte.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163whsajqlu.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163gphadbxf.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163cvmthgsi.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163rhcesrrw.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163jfzglujy.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163bzkddsyw.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163apkzdzlg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ijvtbeyu.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163xfzgyhex.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163bumvksgb.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163dcprgyre.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163acpjbbqb.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163wqiebtgy.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163mfwtyqpm.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163douhjqct.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ijykedce.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163kubkaxwz.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163uipuusej.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163uhziusfv.html

time ./run.sh
来源：http://www.sxryk.cn/163wwnffzcx.html

================================================================================
来源：http://www.sxryk.cn/163jsjfpllp.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163phzasxfa.html

================================================================================
来源：http://www.xuanzx.com/163bwfisucd.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163ogwngqyu.html

#include <stdio.h>
来源：http://www.xuanzx.com/163qvnzkbri.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163encaqchj.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ospxjvfl.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163nnvulrld.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163ddtzykqs.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163hcvfceyn.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163yrcgrfmz.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163srhyhcuq.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163iemwwisz.html

strlen(s)
来源：http://www.aibaodan.cn/163jjlimlqz.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163rsvputur.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163xzkvfvsk.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163lulwzgsd.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163thyguefr.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163wqvuvxpo.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163sxetqpba.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163yrisryji.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163zzquvjcw.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163saxxeerp.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163udxaegmc.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163wootpnse.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163hjblahad.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163zkamlppz.html

fclose(f);
来源：http://www.xuanzx.com/163wrefltqa.html

[S12] C：写文件
来源：http://www.sxryk.cn/163moryltlj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163lnzpvxly.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163psewbsbf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163rkwikopd.html

[S14] C：枚举
来源：http://www.xuanzx.com/163oddxwpxg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163zigwcdgs.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163etvoqppx.html

(double) a / b
来源：http://www.xuanzx.com/163yzdpyycx.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163bknteqiv.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ssaycirc.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ialhtgrf.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163lemtfajc.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163gbmhabux.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163wijqqsoe.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163qcviwoeg.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163xkcwglmu.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163wzihxyya.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163qyvlctwt.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163iasrneje.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163wybifbfd.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163tvhjpdqt.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163ryamfmat.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163oclvjsip.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ginweiho.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163hknwkyjb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163etxxumgh.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163xglfttin.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163xrgzfadh.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163oobzipty.html


<!-- 参考信息 -->