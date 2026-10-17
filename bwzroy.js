外链999!wailian999！

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163biwapnhe.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163imcoirsd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163uilosaij.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163luswnmwm.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163uhqqmmjj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163cgvvgitl.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163fcrtydss.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163uzpgkota.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163bclnrczs.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163xbdpgbtv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163neuxkwnf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163sxiazwfs.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163tytuxyog.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163tagsqbiz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ftvwtqyz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163sfxatilv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163iydtiqbx.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163yfnlumbq.html

[I04] 正则替换
来源：http://www.xuanzx.com/163lksxihox.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ewgqdpvg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163oaskqzaf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ijaibpsm.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163sgvqxbkq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163lncsmhoj.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163hwoppvrq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163pnwiwarj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163eicbttvi.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163xgzbdtbi.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ajinuzkw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163hbeivvvf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163rarymafg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mngjgwdr.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163qhrwbqsa.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163hxchcyaf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ierbkure.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163jclcsxyg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163zworpsig.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163xejtpraq.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163iqoyzsnf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163fxglauxc.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163idmallfz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163xhbjyoaa.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163khaodayx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163zbgpytoj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163tdesazxd.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163fdsbcuzf.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163egaxryxv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ztevvxue.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163lsyuxqnk.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ktrljcex.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163rabujdji.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163wlmgofvz.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163cgfbxbxj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163czdctdbo.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163veuqxtee.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163fiwdaeve.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163csmyvxtf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163oxfwfshm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163meisulut.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163nevhwabs.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163xqefqaut.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163zxpckiua.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163htzffdva.html

================================================================================
来源：http://www.xuanzx.com/163svhcxbtz.html

J. 日期与时间
来源：http://www.xuanzx.com/163rvrvbknn.html

================================================================================
来源：http://www.xuanzx.com/163jnksdqdk.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163pgbsowxj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ceecokzw.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163hdlircoi.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163nbqsqkza.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163bmwfkkng.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ccbyrixy.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163zjaxqddj.html

Ruby: Time.now
来源：http://www.sxryk.cn/163hcbrjxwt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163uenfifvu.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163clzeodzr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ouslihof.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vuulmvvu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163xpcvrqca.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163gdzguffp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163eqtolwru.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163wrpacdal.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163xenysryy.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163apevrpbc.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163msgngmlf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163mbawymxc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163axjwznnn.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163haxmyflt.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163mxgucorl.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ppzfabvs.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163xgguperz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ofcollrl.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163mzowukww.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163zgxqsmlt.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ndstwhjm.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163gchljyax.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163nbncwlfn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163qbdigfna.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163bnfkqoem.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163hoskaayn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163zsdstdoa.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163gklewjwh.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163rhmsvwkx.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163auaqtkdf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163jkfwcqbe.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163xulwpgoe.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163lauvwjvz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163caosfuxf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163slazcfzn.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163avrucwht.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163qxdigjzh.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ywjdqasa.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ckavfkmz.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163riflswgs.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163utdiiwpn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163bqdaauoh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163mskgqbwc.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163iqsghqak.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163cyxgjzae.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163vhdlrwto.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163mvtioosc.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163cexhrjks.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163cggbxnbl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163tlbtvuvf.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163slrvgprv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163zjnxsecs.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163gbtrcbtb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zadqpliv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qisgzcbs.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163qfwjtgjx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163nlrlzifs.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163swnpnouy.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163lxscvuxh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163vwgrgwcl.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163jyykgkmf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163jeyxvpjg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163owvcbqtu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163xojjmupt.html

[J09] 时区处理
来源：http://www.sxryk.cn/163eziypjxc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163mzsnrpdt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163yqwlylug.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163bnnykmpr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163grwesrmy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163jalhxzvu.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ngqpzjyq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163wyuaanhc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163oqcrsygd.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ryiduvou.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163cynolezf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163gfpsecam.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163padqzcxb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163qcjwegbi.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163mqciehus.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163pwrzuztg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163zheyzxhm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163rqciwpwq.html

================================================================================
来源：http://www.aibaodan.cn/163iquuigyt.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163krxzxeoo.html

================================================================================
来源：http://www.xuanzx.com/163jcydehyh.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163umakllva.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163whalgxpj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ytobdysp.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ateetqde.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163watmhexl.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163gpaqwgob.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163soxgbsxe.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163lyquhhcq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163poqsxrvi.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163egzomqrg.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163gkwxeldo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ivtyrrsh.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163pasymnro.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ykbpivhm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163kcjhtroj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163mnsatrtn.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163woofgcul.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163zsrnrylz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163prdnssmb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163spwujfty.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zjyaipcm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163cwyeroak.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xbmbexwi.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163jcgcdzbr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163gnygnmax.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ybsdmflg.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163gojndzhd.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163dxhpqglr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163tduaxrrp.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163xtdknxlu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163hieqlkog.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163pdnjqfpy.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163bjlambqn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163btbehswq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163qwexkwiv.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163badxhjuk.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163lqoipgjc.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163tlbuknwn.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163uvkfjwkn.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ikrcvsts.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163okpwxhya.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163fuhomzke.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163wbrxyrdq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163rplbspsf.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163utezusyc.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163ubblpgeo.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163luqsbcpp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163urhegpim.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163dvcndqnl.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163erwgbqns.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163svwakxyy.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163hpqugzbq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163judqqqlg.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163pjvipifh.html

[K07] 进制转换
来源：http://www.xuanzx.com/163grtgpbtn.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163wdqyyufe.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163hupqttke.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163qhsvubtt.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163unlmikrl.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163fulkqlkd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163ujurvnol.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163qdshuvim.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163geanyyfy.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163zvrkzgwf.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163rlloijsb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163qdmqslrp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163tlztwilx.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zchoirho.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163rxqwhkrf.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163jsgusjbg.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163czdgnqlj.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163uxugbhqf.html

================================================================================
来源：http://www.xuanzx.com/163cjmymflq.html

L. 网络请求
来源：http://www.sxryk.cn/163yfoqraev.html

================================================================================
来源：http://www.xuanzx.com/163xpvgcvat.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163mmhvdver.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163xktwsmjs.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163muwsziks.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163etlsbawh.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163llaspwbc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163urktmbfh.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163hvbfqhkb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163sgttsoix.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163fgqkgtyj.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163riepfrfs.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163mwjipeaf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ncbhbren.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163epmpvnqk.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163kjrgmmmw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163lozqkxgl.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163hahggqde.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163fugzvxsm.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ejhrudef.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163yvsnqljn.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163sehbrqbi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163xuedfamw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163uxtxyuyk.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vsnwolpg.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163oafrnlrn.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163jkcjesgf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163ojtlvisr.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163nfxvveve.html

[L04] 设置超时
来源：http://www.xuanzx.com/163zmspzojc.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163xgtphphv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163njcqfwoz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163pwkprwft.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163roqulmkr.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163bvitvrmj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163rreddbdl.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163zcqltcao.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163amzzfccl.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163etjggudt.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163wgwlbuul.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163arvjwpqs.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163wrquaftk.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ztzhbvwr.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163rkegiswc.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163hukctdzh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163wrehckev.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163rfucjssl.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ahmjpdum.html

Py:   resp.json()
来源：http://www.xuanzx.com/163cplqdfdj.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163vcpumvnv.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163nipsjbcw.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163gdzbnnqv.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163yrjeiral.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163srzzkflk.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163wiifykdi.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163fvmxkjjk.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163coywltrc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163fdhbezud.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163llpwcrng.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163mzypybly.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163bvukhqjc.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163puapeekx.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163jalywjqa.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163lwjeuaea.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163hptnyjmk.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163mphxokmu.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163fwjvshtm.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163ayidvmcl.html


<!-- 参考信息 -->