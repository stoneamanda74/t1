外链999!wailian999！

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163xhpvsehy.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163dfdafzbi.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163giwwwoen.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163nlosrnpv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163vptdbiwc.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163hfwntaxq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163grsicazp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163sspfpiai.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163bhoyfajq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163bvmfvfbo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163zggzzmgl.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ggypmcve.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163hkwwhdbh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163vqazckja.html

[I04] 正则替换
来源：http://www.sxryk.cn/163wzmmouzx.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163puurxqmz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163tflcafzm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ilmgtcur.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163cjgkymkx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163gbdwjhil.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163gkjrczme.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163xdmjscwd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163pcsplhyk.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163axmdzait.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163sdeiisku.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163thietpkd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vgvwissg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xdlshbbn.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163xirfnqxx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163eujahvsz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ivtunijr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ewxmzmwx.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163pvigvhxz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163kkqfinuk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163rwsdcjdt.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163rioqknyx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ewjuxxbg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163mjivjckj.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ooycyblf.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163dupwgxld.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qmyquqlf.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163jbbigrfc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163erftdxqo.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ncyikeci.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163dbtnckky.html

TS:   /error/gim
来源：http://www.xuanzx.com/163enseador.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163vzgpooca.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163cfsdfpkt.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ydgnwden.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163yjbpyexv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163qdxqsulg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163kmaohcom.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163xybyonmv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163rehwtlzu.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xzenqnwd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163bamnbott.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163vrmgyjat.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163jgtyruqc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ghnuozuq.html

================================================================================
来源：http://www.sxryk.cn/163pddvtnbc.html

J. 日期与时间
来源：http://www.sxryk.cn/163tmyhrhzo.html

================================================================================
来源：http://www.aibaodan.cn/163xiqbltlx.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163azpkedlc.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163oaqzkxmq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ihkmkfpg.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ugbbqmvd.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163palfamde.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163kzlhsyrv.html

Go:   time.Now()
来源：http://www.sxryk.cn/163hkpskdnn.html

Ruby: Time.now
来源：http://www.xuanzx.com/163quqlwrhw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163oqpogqsv.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163cdwdaxqp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163mfxnravh.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163dzunrqwo.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163tfhozaqg.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163teclputm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163jkrjsyay.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163tgnxjkfb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163gutjzuym.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163famgntoz.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163eioobmzd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163yafrklib.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163byymlogc.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163jxldimxr.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163dlrqlkna.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163kqafzofd.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163epngngrl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163rrlqyswe.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163dtqeebah.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163vzrqckej.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163nkgmptbc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ocxywgzo.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163ydkweubd.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163iykthpxs.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163xensbkzy.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163oreprirl.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163osozpfzn.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163elsnynib.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163vjzrudhk.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163hpbupmlb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163kbrpnoea.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163spgckdby.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163hqezbdtk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163gotftvsj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163swughijp.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163bezjrhou.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163rcsqcxgw.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163sfhgtyid.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163fxrluggl.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163zrntxoqd.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163hxhwtwan.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163xidvuvxu.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163tdtagpad.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163kjhhnucq.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163zvcmvpbm.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163hloycqew.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163rqxlpcgd.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163oxgpnrpo.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163vmlumiey.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ikavoapq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163halrmcrk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163lmmmiord.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163vjagrxsz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wneguemb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tkojbexw.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ghdnrani.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163akmshzix.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163lvbbxcez.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163mnbbgknu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163kveywnyq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163bvdsnotp.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163vdbyxftm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163wiehpbtz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163gnpqxwql.html

[J09] 时区处理
来源：http://www.xuanzx.com/163uoavrwpi.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163sdqdybxw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163bftmpeds.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163jqassheb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163liqnwcak.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163nllfyodj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163nguhudcr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163mdaleivr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163wnhfueym.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163rybhajyk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163fyliojwb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163tcayyqmm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163whkeucdz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163pkcefjdp.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163xcebxiqt.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163dkfpkjph.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163appncbfw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163civzfdoh.html

================================================================================
来源：http://www.sxryk.cn/163cagshfrs.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163wzdwvmmv.html

================================================================================
来源：http://www.sxryk.cn/163relusogo.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163uwyaqrls.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163zsetvqaw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163icnglfbs.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163eicmddia.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163usqpymgc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163wonnpqtr.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163iikmdhfc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163clggfdoh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163whvmbgxp.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163qqfpqmzi.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163tniwsuno.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163csnvojoy.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163gdgtivcu.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mffzpycq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163jigqshab.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163pjvetcmi.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163rlnctszg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163afteagvg.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163svdxvjqp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ioxdzwla.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mgyguvkb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ijmusofo.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163brhlbokh.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ebohyjug.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163dynpdohp.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163hrvuedta.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163eafhqdvx.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ducmyvgr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163dkinbnkv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163xtpndmyf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xboduijp.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163esferysv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163vwuxzaxt.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163vrsbqifb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163amehdvup.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163vywxylnx.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163dwipdtvo.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163dlveooeh.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163pmvvwbbc.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hfnernxr.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vfsxwegd.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163jborsbzf.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163isunippc.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163emnkwcse.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163jzoeuiyc.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163yoakdhio.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163quytijya.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163iodbhjdi.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163pffayrtl.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163wwzthlzz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163qancktwf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163cbtgtfnd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163tynhnrqr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163xupwjxim.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163bvsfebjc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163coxkqowz.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163oscjwuzg.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ollqhohw.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163zrdsfywn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vwgzkuvt.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163fkptvvjk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ibeqdjlt.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163ojunoawx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163siavspeo.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163nefuqcnm.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163xowbqyse.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163wuofrull.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163qnwgbstr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163gplkpvop.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163euurjgox.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163dlmzjrav.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163melwyeul.html

================================================================================
来源：http://www.sxryk.cn/163fvtbvoxj.html

L. 网络请求
来源：http://www.sxryk.cn/163hexgghvd.html

================================================================================
来源：http://www.xuanzx.com/163hpfcdkos.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163reevderd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163parrqrpi.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163dyxhaleq.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163mzzlydvh.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163qljbvsny.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163xnolgdkv.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163eluiavre.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ikmajrhs.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163cbvgpodc.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163zklupsvp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163odymgbnk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163gdbwebrp.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qpaqifbx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163bzbcrifs.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163tdpppcoa.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ztfyslky.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163vxkycgzw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163tlbjyzsx.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163xrxakmir.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163rxqusaqz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163xxupwmwi.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163dwwzlbxo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163svazzggx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163nejdvxlm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163tyzdchod.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163bzrbiucn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ujndzdip.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163utkeocre.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ggeeiiti.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163elqxgkrc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163fsvzjmfu.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163qatddxfz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163lsltgcdi.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163rokjmrgt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163eupocbsu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163bgsvsgwv.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163yssjkebm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163rlyzzddb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163sbhzkxwy.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163axwvwunk.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163xwosrldd.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163suctkzux.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ouyailwy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163egyhwbnp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163nmceuluk.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163nvumzfiq.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163buefmhtg.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163wnsxcjfk.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163wsahoinp.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163flmxglzh.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163urfnatvm.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163copyobca.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163baheiquz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163tqhnusfk.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163xzfmjcmd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163xijljczt.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163oeczqqus.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ezsfluuf.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163lbstrhum.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163umrqpocs.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163aulrsyyy.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163kmvardhh.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ahrmfrke.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163lnkyhczs.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163pmztalko.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163zgunnlcg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ciizbxik.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163biunsysc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163dggbspxm.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163cyvqecyq.html


<!-- 参考信息 -->