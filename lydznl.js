外链999!wailian999！

[Q61] 移动平均
来源：http://www.xuanzx.com/163uubsktkl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163mkcjwzft.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163gjecoqgb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ldlxhkhd.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163nvaxmxtd.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163rlirjvbs.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163lohywytf.html

COMMIT;
来源：http://www.xuanzx.com/163lpbbogpa.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163hiitdqxy.html

ROLLBACK;
来源：http://www.aibaodan.cn/163xfonduif.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163jnltewzb.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163nuzznhsa.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163kpcchahw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163prcxqbxo.html

[Q68] 保存点
来源：http://www.sxryk.cn/163cjdossos.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163njvyxlba.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163twxtghem.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163qdylreeg.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163cldalkho.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163jkgduozh.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163teddabmi.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163xyoalteu.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163wzbcwhyg.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163yobplcjk.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ruuzbkvo.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163rrwehbtc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163ukxocfoh.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163uapprwyu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163zilnhgll.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ofvnssau.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163cuhtkyey.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163bgokihbu.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163kshqyntm.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163haffxkpm.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163hzgyghmx.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163albsbfvn.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163kgoiopvm.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163nqhipvol.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163bhdgehbw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163nmphgilf.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163tcirhdwc.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163phzkbtoa.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163gbfzmavs.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163jbsrcdie.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163mkxsamlr.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163fzxydwff.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163nyzpddxz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ntqwohpo.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163rhakrtbu.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163xfgumcmj.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163crfimdwg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ytksaxao.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163cylihuid.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163wzrtigcj.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163fimvrnuv.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163yuuokrha.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163iolilpfz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163amemngwg.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163jgkoffzu.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163egxjidxf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163gbkegdnt.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163uqbriwie.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163rntfqqbe.html

================================================================================
来源：http://www.sxryk.cn/163mtuvzxhk.html

R. Bash 专题
来源：http://www.aibaodan.cn/163kyiqlzep.html

================================================================================
来源：http://www.aibaodan.cn/163jgnuggux.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163kjvqevgk.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163owdqfjcg.html

set -euo pipefail
来源：http://www.xuanzx.com/163lqotiibx.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163trszjmnh.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163qqyrxmak.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163efqgahgl.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163jqydbdcy.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ggxlpdwu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163tfdcsqgi.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163klfotefg.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163oexcsuso.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163iihtfhwf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163vecefnns.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163nasuqxty.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163gmljakgn.html

[R08] 数值比较
来源：http://www.xuanzx.com/163bgggutln.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163xolinhwt.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163rhiahavm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163modlpauz.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163edgeqqud.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163vovsikus.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163fxqfjamp.html

case "$1" in
来源：http://www.aibaodan.cn/163tsarcusr.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163cryvshnr.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163nxwfpece.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ulghpuxr.html

esac
来源：http://www.sxryk.cn/163lucxkogi.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163hvbccdwh.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163boffyqbu.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163rjmnfryo.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163lfsjnuqc.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163fyqmkhoz.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163zjljrcxa.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163nsulvexz.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163wwlhkhbs.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163zlbolxxc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163vdchylcj.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ffrforuf.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163utepoytb.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163haafmdqx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163fdijrxzj.html

[R19] 数组长度
来源：http://www.xuanzx.com/163ziwjwtue.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163vrzdhgmn.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163yosgzwpn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163yndhstvt.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ctsjcgdt.html

echo "${#s}"
来源：http://www.xuanzx.com/163duowrttz.html

[R22] 截取子串
来源：http://www.sxryk.cn/163rzxltwvo.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163cxhwbmiw.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163trjymqhj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163cwycxgii.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163oftzbbij.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163riothmcx.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163uqjareef.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163dasnteda.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163hsiajbfg.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163ieordiql.html

[R27] 算术展开
来源：http://www.sxryk.cn/163kwbrrris.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163lbbycqur.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ziebygau.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163kvlwvtxj.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163fkcgbxkn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163rrfodkjy.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163ljtkeror.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163jmmiymes.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163dmdgylqm.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163jlvqctjw.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163xqwmoubb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163xafkmqyq.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163kqcpdxgz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ofjtquxi.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163bpbwefvc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163rqrgsike.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163vjybqlty.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163xrgfifno.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163vlmpwacg.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163gypqdclq.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163frtpygkg.html

files=$(ls -1)
来源：http://www.sxryk.cn/163mngkhvzx.html

[R38] 管道串联
来源：http://www.xuanzx.com/163xfoflxwg.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163nockzwjw.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ttpmjbjv.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163kjcdvcdk.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163pwyzykik.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163vqftixgf.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163vwistjni.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163kozcakww.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163ogljvsye.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ctvygver.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163altdkypq.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163rbjjlwjb.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163gufxhjlq.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163lmyqnenk.html

[R45] 批量删除
来源：http://www.sxryk.cn/163noeduehd.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163lsauwetf.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163qnvomyik.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163kgbjxikk.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163nuhbhvzf.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163uqrrksoq.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163pimudwje.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163ckbffbix.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163sffrtfhx.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163kcazpuvr.html

[R50] awk 求和
来源：http://www.sxryk.cn/163szzhrtbw.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163bifqkfgt.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163ktzqliyp.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163rtajsrzu.html

[R52] 统计行数
来源：http://www.xuanzx.com/163roiymwgn.html

wc -l a.txt
来源：http://www.xuanzx.com/163tmadapvz.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163zisrphls.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163dreqkhcm.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ovljrvjw.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163omuxdxed.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163nwtwydks.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163lhuxxfta.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163qpbkbbvm.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163wcinjdsv.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163tizepuaq.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163hxiciuzu.html

[R58] 下载文件
来源：http://www.sxryk.cn/163gbtxynhl.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163kpxkpsfw.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163yslbwpvr.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163fporkxnj.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163qgrfjkjh.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163yoohqcgw.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163csmzimax.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163oshoahcr.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163rpurtkpg.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163ucgxsxlp.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163wahotmlb.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163rqxgzuns.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ellgvpvg.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163mkxlhhnu.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163swhfedmn.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163lvrrlxug.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163ysolmjei.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163mblkzjtu.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163fbmtwpmr.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163udwsqenm.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163hipffqio.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163seesywie.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ckuvhrcs.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163zatbsoem.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163yuolrwrd.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163zmdqveyl.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163pacomxfb.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163evvxtmxo.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163uusudzgd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163vrowzriy.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ygpcjmrk.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163cdgwzgra.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163gcmzoyqh.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163wdmyjhhm.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163gkvfhelt.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163almcglqt.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163jdowlslc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163bqkfdjmy.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163qhmrmpgh.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163ewexiedb.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163ptkudgpp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163jbwmvvoq.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163axsknecj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163igdqxdsg.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163fcatvydi.html

time ./run.sh
来源：http://www.xuanzx.com/163nvpleuwl.html

================================================================================
来源：http://www.aibaodan.cn/163bcuclmbm.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163tdpppdnj.html

================================================================================
来源：http://www.aibaodan.cn/163wnevavud.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163sodgmwfn.html

#include <stdio.h>
来源：http://www.sxryk.cn/163wnutmlli.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163tzevnbpy.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163agntkmyt.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163kcgbmvje.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163jjkxlehc.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163gpfoqiir.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163ndfdxcmo.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163deibfkol.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ydsljxsy.html

strlen(s)
来源：http://www.aibaodan.cn/163qprexhxz.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163suxizmpk.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163nvfwsqww.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163tjufrjqo.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163vwkhjjnv.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163oawgoraj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163tafyncib.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163rjagrwhz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163nmrsjxnd.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163jtoshfeb.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163jufyjafe.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163lxilullg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163hvwrieti.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163pxboewav.html

fclose(f);
来源：http://www.aibaodan.cn/163hjifetrr.html

[S12] C：写文件
来源：http://www.sxryk.cn/163dagyvpaa.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163txlajpma.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163erriwdsq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163awuhcsdw.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163ygycnitx.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163jxqykgeb.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163dqvmwbah.html

(double) a / b
来源：http://www.aibaodan.cn/163crnsruur.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163jmiqkbjh.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163vwrgdajh.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163nllozyzv.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163odmvjrgz.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163eqxijsom.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163oolhwvyz.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163dpgkxmcs.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163obdvojzt.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163xbptecia.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163vpwaizut.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163etnjpmye.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163bijwtebq.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163dihuehdk.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163sgotyewf.html

[S23] C：随机数
来源：http://www.xuanzx.com/163yrtvldtc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163hgcgeygc.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163tryyspxg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163qaddcowe.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163hbipqmoy.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163wxhmsqee.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163kvhcwict.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163zuhvjwab.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163rehgmszy.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163tazutjer.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163qtbqxaih.html

static int counter = 0;
来源：http://www.sxryk.cn/163orvwxngj.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163yfbxwawl.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163vtcsxibn.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163wwcxngos.html

#ifndef X_H
来源：http://www.xuanzx.com/163enwjfklt.html

#define X_H
来源：http://www.xuanzx.com/163tbykjtca.html

#endif
来源：http://www.sxryk.cn/163eggalkfq.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163trfnbspa.html


<!-- 参考信息 -->