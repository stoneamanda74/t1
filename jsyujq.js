外链999!wailian999！

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163kkwamjgp.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163qlfmfmur.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ngbejpol.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163zndbkeum.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163ggzhlgve.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163wrlktxwd.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163wuuulqem.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163izxnyqxd.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163tfxndiji.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163yhlefwie.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163bnsjxfkd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163vvadygbw.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163mcfugytk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163helphuxn.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163obkbgxxi.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163utgyzzwb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163vwmkxpps.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163suuqdgur.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163fciahujg.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163iqwcpmby.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163uyvfjmxe.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163flmyhfmy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163yunjehed.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163lqlbzwau.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163zqckqfmy.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163bbrgunyg.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hvhjgdsy.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163qomdtdbh.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163euhtjieh.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163kwtxbdlb.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163hkqcgywe.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163sijeyfjy.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163trkfjwse.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ipmrmwjt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ebljdfjq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163fagsblpr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163cclvoror.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163ajflfwrc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163jqbrrvwf.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163drcphwxk.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163axsegdtu.html

TS:   /error/gim
来源：http://www.sxryk.cn/163rbtqlpsm.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163dhverbmt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163whjeaxrw.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ipwulfnu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163zjmfadcn.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163rzddurof.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163cnldntwn.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163soovgdhh.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163rrlulwip.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163tbltkjli.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163tkpyeesn.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163sdtekdds.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163ynjzhuqp.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163occyxhdl.html

================================================================================
来源：http://www.aibaodan.cn/163sdxggvyi.html

J. 日期与时间
来源：http://www.aibaodan.cn/163kzxvorcy.html

================================================================================
来源：http://www.sxryk.cn/163uewnxzdm.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163knzlkovl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ggzxyymf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163buwobssd.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163fvqcrgjs.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163nepdbapd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163aijcdblh.html

Go:   time.Now()
来源：http://www.xuanzx.com/163edfudluw.html

Ruby: Time.now
来源：http://www.xuanzx.com/163vzcmmlza.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163txygiacx.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ckrpzdop.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163lcdimlyd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163gdkusobz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163pzelhzpo.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163mamubdoq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163qfskjngx.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163ejgcbumx.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ptntypdr.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163jrqzftji.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163vxrbmmfh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163tamckthg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163mntjtsae.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163fdxsefjy.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163fdtcvgdr.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163uvwjnxuz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163nmvxmaqp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163tizubutp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163rtcayuoj.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163hkvvzyxq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163wcqsjzcd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163nyzunldx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163abctnpgw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163wavfxwsd.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ybqvzgrm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163zinwxolg.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163pyddcagy.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163isllpxlk.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163deervrsc.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163fmzngpqr.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163lfaioscb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163lcumklpi.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163lybaauga.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163khoqyhkm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163muhlihas.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163kgvdpqcw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163aocrpbzb.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ydepkngu.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ogcdcnbj.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163yutzvsas.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163qskaesvj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163jsapakpk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163omxmgncr.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163tjfzxpcu.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163iyllwqgt.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163osptmxhi.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163wrqgszws.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ilunmfoz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163bmgecfdn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ltpfglvk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163hhycjrac.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163aalanetq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163zgngyxcv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fyxqfsqi.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163nrozvfgo.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163lgupcftq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163cwdyiaiy.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163acjklrup.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163emdxlyqt.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163lqryjqow.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163ajyspmty.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ukidenpm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163lowvwpzy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ewlrpeez.html

[J09] 时区处理
来源：http://www.xuanzx.com/163rkyfvcit.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163ozvorfqg.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163bfkylgtw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163huwzpfdi.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163frnezypz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163sognjtwx.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163gtfvgzar.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163vualfexa.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ivhtmqwd.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163haccmpvu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163yuykasdc.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163lwwshqmp.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163cpunnexf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ejhnaich.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163tbzbwzzh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163hjqflphh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163urncfxea.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163vrfhmtqm.html

================================================================================
来源：http://www.xuanzx.com/163ichfbioo.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163ranidiwm.html

================================================================================
来源：http://www.aibaodan.cn/163nhujbzno.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163vfvptfef.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ngxpmsih.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163dlpoesmd.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163hnavsrfy.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163fozubvis.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163clcszqup.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163jenuesys.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163uxielyds.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163nznjfnve.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163vwuvpuzk.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163lefcldxm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ipxoycmn.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163gkpaqbmb.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163cladlpqv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163mkgjbwzo.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ejvirnmh.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163excsuako.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163vxgiflwf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163gdgazitu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163eprjehhs.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163awuugmeg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xvasmmxl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163emcolvak.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163qzvgnkvg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163duwcxgjo.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163mzsqfiwn.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163pahvtuve.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163atmarkrt.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163vvvwxjcq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163ksmzuxlx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163usbnhgmb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163fnyrijgm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163jonohbea.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163tdbwanhb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163bfqufamf.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163zyuxuntv.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163tqayrued.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163nzkzdmxl.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163gpsocvvq.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163pihoebzc.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163cevpxwxx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163xkalmkls.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163jfkrlyei.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163icbttmpi.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ypvijlrc.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163xwhplcfc.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163jgnmpixk.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163ttuwmurx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163mtsnunyk.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163jwcwusql.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163lvejmgyq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163byojamql.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163weszzlob.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163gqbndtbx.html

[K07] 进制转换
来源：http://www.xuanzx.com/163jwqcgwmp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163oxcopylv.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163jnxfbqvs.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163vhgmtqwn.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163evrhjnfd.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xoqylwqs.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ojqyafye.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163hsphwlxu.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163fqenvmpy.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163udiryvlu.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163qkdxmjrv.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163zczxsmln.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ehmytxms.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163rogxqvnx.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163pwurgaxc.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163tdzwxkdf.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163delcocux.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163iqzlvleu.html

================================================================================
来源：http://www.sxryk.cn/163bjippxlt.html

L. 网络请求
来源：http://www.sxryk.cn/163orxikzqz.html

================================================================================
来源：http://www.xuanzx.com/163dlbosovf.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163vgwalvgf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163tdkxfabd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163gpigimxn.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163psbwwmcn.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163zeantfov.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ejmmtevt.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ugxiwlii.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163iktahyal.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163yavhhnef.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163frxcooiy.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163fnwlpuzy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163liyoxyan.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163uhzbjmts.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163bsgkajrm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163gittczlr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163jdfuwezp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163iyxtezwr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163oinzdlix.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163stzsznzp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ctpptnru.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163sximubby.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163kuygqulj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ngtejpkf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163zjyyawhc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163oeonfkqr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163vckptwzo.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163vlpinbnf.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163kcxlliud.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163iiqjafrn.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163dobkbbdf.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163hnombqfh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163cdgtgqex.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163srwtpbjj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163wqrlmccv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163yhzwvjvs.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ornnrtep.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163vmpbxbcw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163chxlztrw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163prdxvvdi.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163qwpfigxi.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163fnhfgmqt.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163xaaarolm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ckgxxxou.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163hqdihrad.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163chrzqfge.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163tkygywtu.html

Py:   resp.json()
来源：http://www.sxryk.cn/163tkqiwtmh.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163plpnemnr.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163gkpnzhqs.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163gjhphwdn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163cyrsquyg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163xfrvqxdr.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163bbixicay.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ifioptry.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163nxfyxrnf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163blydpkem.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163gsfooacw.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163bqsdvyuj.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163bcsjbxrz.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ldgfdgwg.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ruxrwgaw.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163jskyyaky.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163xdoigabg.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163lpsmxeor.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163kqhehkuy.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163ypxevqyz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163autreksv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kmbbcnpg.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163kwislhrk.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163gfmwoodt.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163mllzmrvu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163jrnyxicn.html

================================================================================
来源：http://www.xuanzx.com/163ogizzegx.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163jkfingsp.html


<!-- 参考信息 -->