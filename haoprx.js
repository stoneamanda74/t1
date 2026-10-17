外链999!wailian999！

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163fprixkzc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163gyqhqjjx.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163hsafcopr.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vozrbvys.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163uiytbmol.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ebxtitsb.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163pcbbponk.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163cklexnau.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163gdtvdvdd.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ffktvbyu.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163odhhmufb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163yvadxxys.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163blyqmjso.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163yorhypnv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163txdwwdmx.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163jofixpcl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163iwpaiqio.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163tlaiiaum.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163nhxuzhdo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163mascwdkv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163euukhukt.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163qtvbgxmz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163isjxhlvr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163luhkztgr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163qkeenrwk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163zpqkaogw.html

[I04] 正则替换
来源：http://www.sxryk.cn/163gqqmrpph.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163bktbrkze.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163qajbjgvd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163enbkwwwx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163mjocwfvy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163finlwsrb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163yicmxcom.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163lttozeka.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163corkhldz.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163snfunfiu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163qigfnzvr.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163pcmwnowd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jdwyjxrk.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rykqqyzp.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163ygxgooxy.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163vyzcxweq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163khhftemd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163zertjlnc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163uhshgeou.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163taymxciz.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163boxlsidv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163qwhfmkux.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163rcyrjuzt.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163jogwkdpu.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163qequkrng.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163nswjumpu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163swambdwo.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163gikpnfns.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163peqivlad.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163iijxquid.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163kkjskvmp.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163lsiygmhz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163zpamhrpl.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163cwoyyzzh.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163jnqucwdh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163ddqdlyrw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163rhhgkjqw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163oxtbtnhl.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163jdopqgeg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163dneywqry.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163uujehltg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163acjnbgou.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ogswhtop.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163tyfwbqkt.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163zblntadk.html

================================================================================
来源：http://www.aibaodan.cn/163qmrzuzwd.html

J. 日期与时间
来源：http://www.sxryk.cn/163oedslvmt.html

================================================================================
来源：http://www.sxryk.cn/163warybfar.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163mitutmkh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163jrsobkhx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163dmoekbzq.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163lhikymbs.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163cmmnisnz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163knwvwkzp.html

Go:   time.Now()
来源：http://www.sxryk.cn/163letnvrdm.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163eywdgzkm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163srqdqsqr.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163bigsyclr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163yptazeby.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163izudkmqu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163rdrwaues.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163eopajygp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163doehowhk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163flhfrqmr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163dmjinjyz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163dbhdxsmb.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163vtgkjryp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163slymkfqo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163qnaybwqk.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ygwawoce.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163dssycefm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163wtofigsj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163jyhdhitc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163bdqkuasc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ywxffaat.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ofjqdtrr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ejkbnguo.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163fhifkmly.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163gfqlpcxt.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163glegddaw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163drctbqqq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163tsenxugn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163sndontww.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163abaoaehe.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163mlfjerkg.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163hyqsfvsi.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163dxulstqh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163pyirshkf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163fmmnzbda.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ctwxwapa.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163esniixql.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163lqlpzsym.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163qrzubigg.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163yqsunaub.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163gxjcvkhe.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163tlhljfbx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163mjxfhzzb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163uzogqsrl.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163autevhwh.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163qpfkjonb.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163eqparouo.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163zankbfal.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163duzjlved.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163yxktffce.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163gytbmlsw.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163vyycqnnx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163kjjwemai.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163owbdeigg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163tvmbxcop.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vqkzwsnf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lnnvcaii.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163mpmwwama.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163gyqhvgdz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163mzlessko.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163xlcvrurk.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163frqqqbge.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163vzwwpeuc.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163lchhqkmc.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163yyanyscf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163blbscoce.html

[J09] 时区处理
来源：http://www.xuanzx.com/163idaauqlf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163npcptplj.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163nqsrrwyt.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163tychyito.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163epujbcss.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ijdealhe.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163obmixppn.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163lkerknnk.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163tflculki.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163csktgukv.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163jnhfsioz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ovzlfxhd.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163nuwmowvg.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163sxnlkffw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163ldxieffz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163uoeplecc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163yxczfknb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163fjmqwmyr.html

================================================================================
来源：http://www.xuanzx.com/163piwgyyxl.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163xqkfcyhd.html

================================================================================
来源：http://www.aibaodan.cn/163bxdkgwvd.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163eslhbmfr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163bxersfbn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163htyujjpf.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163tfdnbakd.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rdmjnago.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163lihvkese.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163hnyxorkm.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163svcopbos.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ikqkgdpx.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163locwbtps.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163ktwdbwhd.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163wbodmfrl.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163yztwkxdj.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163vfnyigen.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163rfbbozxw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163wiqlktsl.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163bmcnzjwi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163dnlkqllv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ukuzbhxo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163juqbrbsx.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ayzhvsbc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163bjxutbaz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163eizgmisc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163kghiornt.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ieiipoih.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163bolaffgc.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163odwgdkjh.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163nargmayx.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ffjpiklu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ngdsnqxm.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163vbcwfkku.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163wlzfmbhe.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163bepyybso.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163dvwrlphz.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163ftnmiipj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ycgxlzsp.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163coapkghj.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163kldaboqe.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163jczueroz.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163yotlsivz.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163zppxhsnc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163fofnedlp.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163fteegvdh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163inwivfrh.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163wgqkpmzl.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163bihgirxj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163dlvvnqwf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163hebocufx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163gejnhmez.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163eyrvevoh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163ihvmbkgw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163yjanwkfo.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163rsfsxvtl.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163vlckbfek.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ypglxekv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ainxqfgd.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163dvxpwmuf.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163pxazhsqe.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163fvhdhfck.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ovdtcmsb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163tngqgpeq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163dnrzahtw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163vwbeufwl.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163hmeceaco.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163edlxyknx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163rfhcpeql.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163srzydcbq.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163dyzqjvgi.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163rkaxrcfm.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163gjtotttf.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163uvncysat.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163zfaboggq.html

================================================================================
来源：http://www.aibaodan.cn/163ielkydie.html

L. 网络请求
来源：http://www.sxryk.cn/163mbznldku.html

================================================================================
来源：http://www.aibaodan.cn/163zcetgmik.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163anierwno.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163cdtrydtt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ghihmort.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163mpykyemd.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163hilcfptv.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163rsnbzptr.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ozothkov.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163nkfkvrgu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163laichbwn.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163qcqmqpti.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163tueqvkwl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163jqlwwswn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163hvallhku.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163aoeckzml.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163vhcycaaa.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163flqodchz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163yulcziau.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163offqbnsh.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163pkoclgpd.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163hqawpgym.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163uxfmyklm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163acjfwgth.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163iouqzidr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163isnnmebc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163iioocqoo.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163htpvkwtq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163zsubaomv.html

[L04] 设置超时
来源：http://www.sxryk.cn/163yqkypwwn.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163jozhsari.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163zpvvggak.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163fxsckifi.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163pgjnoeel.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163nuttyemc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163dhclkqal.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163lyoculnq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163dfkmbchu.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163yhmntbgc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163grhqsnum.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163yexlnlgq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163zuvlmney.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163liaywwqr.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163kbwclujj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163yglrswkk.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163frpvekbo.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ewcdbgqs.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163xgzapepd.html

Py:   resp.json()
来源：http://www.xuanzx.com/163iknmeyvh.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ttuqpdwj.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163dhmncsif.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163exdrcldn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163kjavpkrl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163tuasbrex.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ubdpnnuc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163vagxuzgc.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163mjmfdwkf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163yfgxfpgw.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163foaygnge.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163hwltvlac.html


<!-- 参考信息 -->