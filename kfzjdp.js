外链999!wailian999！

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163aoqmolmm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163uuurultv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163grjjbvsk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163bhmbtmuf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163cecrdfjm.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163gejnvjfj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163hlgqzgiq.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163hygbvtvb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163mmwnhcsl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163hylmwlkg.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163phfoenax.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gxklakdm.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163psksfzkc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163qalskvwn.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xzzmtdgm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163tnzswbyc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163rcufyhsz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ulxqyehs.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163eeewuhgo.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ruvpuxiw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163voyamunn.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ipthjvvz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163rqmyicfy.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163wbuokcvc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163nsujnpck.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163eopqjkrh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163iglvngrp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163hdzvncei.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163jxqwtepd.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163navslzax.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ivoznfmu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163xcgjndbu.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163pvhofbdh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163wiegqaob.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163nnvngsea.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163ouxkmymj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163vsfxnidj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163qvzdvdug.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wiydzfzi.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163aoxsuqij.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163hsarponc.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163pmwgkgjw.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163sbaxpyjh.html

================================================================================
来源：http://www.aibaodan.cn/163qvxbucai.html

J. 日期与时间
来源：http://www.sxryk.cn/163mtriwgfe.html

================================================================================
来源：http://www.xuanzx.com/163frzfkucv.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163lqukpbbp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163byeymgon.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zsmivplm.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163swldxkzu.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163hjkzfpxd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163bgzjgknh.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163oovputue.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ztsmxcih.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163tkcxbmcm.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163jxjldsnz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hvaihefn.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163exuhjxdq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163lyjqtfqo.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163pnyjjxtr.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163jfahiugq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163mcwnqsuh.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163hqkokedv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163xnckjzmy.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163aadvsnkj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163djbyvcdj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ehqtdoxr.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163nblbzamt.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163yzwhxnct.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163gtekmhdx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163alantjaa.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163qmbyitud.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163ikyhihsl.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163zcryjwrd.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163nlmdmrzb.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163fxhbohir.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163mrdegisq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163omxxdszc.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163tvqssudk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163hhlhyacf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163yuokqtmb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163kepysymw.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ccjtsifm.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163nlxqyqad.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163psqigydi.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ikcnkbst.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163yycsrxuj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163wvguinbi.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163etdqactr.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163gstgqhzz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163gnmqmnak.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163uvsysgwz.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163btpfcdta.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163junpkqbt.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163vsuhkjbo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163osnpmuvp.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163gmegkvzx.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163rrvgqowi.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ypdxwukb.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163glwwlyiz.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163zpxtfcoq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163oxnhwpfj.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163miharqhc.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ezqmrgrj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163zhgumwcf.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163rbswilfk.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163xxsffrlh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163llolwbow.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163arnkawpy.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163earzaant.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163rhvazaca.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163equbzyuw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163glwjejif.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163gdeocapx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163odciqnxt.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163pxftmtjr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163sdbidyzp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163fjgzxuim.html

[J09] 时区处理
来源：http://www.xuanzx.com/163iywnoevo.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163egkdvzno.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163qbugdimi.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163whvkrixd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163bfvnujtd.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163suzuzomw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163vichilec.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163nvauoomb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163tysdpnla.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163izibrdwr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163xvgcmyna.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163jyfvmuxe.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163fajuywpy.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163kqlkiuaj.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163rjjcxfgv.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163covfnlvy.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163gwzazghv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163lchzcrzx.html

================================================================================
来源：http://www.sxryk.cn/163niamdesa.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163uxqiltsz.html

================================================================================
来源：http://www.xuanzx.com/163qnutmxje.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163lronuvtd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163uadenjnk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163fzujprzg.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163eqvkybua.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163gecdclyq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163bqkjbrxm.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ealsftyj.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163zcjvhone.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163wxrzglgg.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163xljyyamb.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163mhzdrtjm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163wvpqaacl.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163etlojqsp.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163xxpqqxfe.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163heyeetdx.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163qirabvmj.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163dquraprk.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163vuswrlkg.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ybnwaypd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163gawabuyw.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163goyfbnsu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163cgzsiung.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163advhasay.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163nalnmpau.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163phhjwhrd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163fderwzwe.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163beowpkrl.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163rpdcyesj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163nacqbocq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163hdyspfhc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163bfcoxebd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163oqiwpbtn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ohwwgdbf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163hwwtgyia.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163xoadxicn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163uvvzvunm.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163zeybwhze.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163oqbxwpgc.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163yfadxooo.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ahivezfo.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163lxbisrsa.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ritjdxrn.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163wudtbgcq.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163cqylualn.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163tnwsaitr.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163sgkbxjqp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163dudrbukx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163bztqzfig.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gvjejpwc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163vctmomax.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163zhnnntee.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163jegycrxq.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163gcgvwknn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163denmgckt.html

[K07] 进制转换
来源：http://www.xuanzx.com/163bfonyllx.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163wytpewbk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163hylcfgrd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163akeiobiv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163zzodhbvo.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163cchjuyog.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163frlzvbsj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163wzdwgqul.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163jpblzazx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163osgubtzj.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163iytowjcg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163wjpfbxeu.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163hzmwvnir.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163nrsnbqay.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163atsqnbgr.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163gqifadpq.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163oupqhhfy.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163nduzpsjk.html

================================================================================
来源：http://www.aibaodan.cn/163drzcufyr.html

L. 网络请求
来源：http://www.xuanzx.com/163fzbxqifo.html

================================================================================
来源：http://www.aibaodan.cn/163ghrffdmi.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163engfhvpx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163pcugtptl.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163xrfpabth.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163jllycooz.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163zaxnstgx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163wfqdrhcc.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163cbjeczyr.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163eexwghfm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163oumhiwjp.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163glxkeljq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163sojuazrb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163skmvxsrs.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xeldgrbd.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163oiolirpu.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163ypqsbpow.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163qimfhhoq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163xyfjaphj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ypzhppui.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163dnvtxmfu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ssbpuoyl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163vtnfrtxj.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163gcdhvrfu.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163gnjibvbd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163uxfxwbvg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163mfhylzcu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163nunxzjas.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163zenbqfrh.html

[L04] 设置超时
来源：http://www.xuanzx.com/163cfgidpbn.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163gyptgfcn.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163azsmtjic.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163zrpktzex.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163vuhrdkzz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163pvnbragn.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163mxfwcymy.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163sbuvpgdb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163wpsiwfaz.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163qeukbsbd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163npyndocq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163vqjgzamx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163dznibbro.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163imyssjxx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163tlgaycuq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163epfqqzcp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163wyisxrtm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163odbmwhey.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ejxakipb.html

Py:   resp.json()
来源：http://www.xuanzx.com/163pujfztha.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163fvdbkffc.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163xvraconr.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163klrcemxl.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163nasaxklw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163hxdvzrgo.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163sfxvmzih.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163bjscrgzy.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163gystqhtw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163wfkvagmi.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163kkfzlsgd.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163dqnysqkv.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163qpintwei.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163gplljyhb.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163xstyaeiv.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163jddajzjd.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ncvhxybk.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163crkobzkc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163kuzermgo.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163hwdlwbxq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163szrqjbop.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163uybmnfrl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163hlvluxla.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163hxerhgqc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163eiwscmof.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163rnimmxhw.html

================================================================================
来源：http://www.sxryk.cn/163odzdfitg.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163qhianxxc.html

================================================================================
来源：http://www.sxryk.cn/163nohqnjhx.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163uiddhxfx.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163xkcktjmr.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163veimiqwj.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163bscrkufb.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163gqxelgwe.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163dhatnars.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163zqyuomew.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163kwcinqzf.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163xpxtqevn.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163lhhkceum.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163rsliolte.html


<!-- 参考信息 -->