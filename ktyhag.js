外链999!wailian999！

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163mlvjpppg.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163dszaxyof.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163egzixuui.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163ecoaotju.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163dcoqnacr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ojklmtlf.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163dodojzbv.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163okivxsiy.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ngtuanfj.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163migaggpm.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163bvdkpvvw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163hjisxthk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163pkpkmqux.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163edhelzxq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163mjqtmfmv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163dpmmrphu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163lnazituy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163uhqjqwiy.html

[I04] 正则替换
来源：http://www.xuanzx.com/163afrslslp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ljknovfg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163hhwghtzo.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163zmifekof.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tggnbexs.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163tsnupnwl.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163pirzwuly.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163foolfryg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163wxrjjofi.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163bygxrair.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ssqvxdyl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163iojkicmx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163eelkmlrw.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jrrridrk.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163olbhyypu.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163rmllawgq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163lqvqqtwr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163lsbhrfbm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163qsgalege.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163czwknjjf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163agcuhmbq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163rlmrwymv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163wbooiczo.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163gzdarsln.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163kwurnpqb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163iqviqbxs.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163etieugvg.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163hvenobxb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163mulrgbvx.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163fdvkvcmi.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163scqimqff.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ioxxujgv.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163tolermzk.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163mihclats.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163vklascyk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163hvthknct.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163wqletwol.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163tmxyfulb.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163skdnwilp.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wpeqmoyk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163wnrswaoy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163vphubnmd.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163mczqwcwp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163dofsnete.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163cprziahm.html

================================================================================
来源：http://www.aibaodan.cn/163saulcukr.html

J. 日期与时间
来源：http://www.xuanzx.com/163jpokerqc.html

================================================================================
来源：http://www.xuanzx.com/163oqzcumgy.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163yxxhtfvx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163pqpmazrb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163svfzmiww.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163otyvjagg.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mmyarnrj.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163vtvalbtm.html

Go:   time.Now()
来源：http://www.xuanzx.com/163tljatwrz.html

Ruby: Time.now
来源：http://www.sxryk.cn/163jdnzbytw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163qxtdvblh.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163swqavvnl.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163elrougxc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rvvbuage.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163swakjhaa.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163sjbfsbpw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163mkblmoxn.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163caxyhivr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163yymyxvtp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163gfltmjvd.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163yghmilik.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163sxdpmtch.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163wlsbexcv.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163tjietact.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163lufdifqs.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163zszwtmcp.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163yfemaizl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163jvuordpq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163xsmbiovu.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163shuwrmdt.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163wnvbyqiz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163nttfuthr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163hjzbfhhq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163tbuognek.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163xqdaugay.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163xxucixbp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163pvlruzpi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163sxuamnti.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163edfcfjea.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163kbtcozsb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163vpuirjch.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wjejuxdf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163edwsmkwn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163bkbcxbap.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163kdfggubw.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163xeqwyzxn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163upobsfhs.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163zmbstbla.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163xrecasue.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163zowfrjhn.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163vkwfrcax.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163fwvwpxwd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163cbcpttov.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163hepfuuhx.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163jnfaqyce.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163svwwuhes.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163bmkdauwj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hwgmdgay.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163amfuqffj.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xyulutmt.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163odbhfmru.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163lfbgugvn.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163cncmdwth.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163irlojhas.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163fmogwhcd.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ljpnrjoz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163iazvwjvx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ypoumsrd.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163vykbxryy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163acojiiry.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163dijyppwf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163yxnfrauu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163sntenjjn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163brofshzy.html

[J09] 时区处理
来源：http://www.sxryk.cn/163jycirxcn.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163wuexynnz.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163qgxczcmp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163iyjcdvul.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163jkareuqq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163igiwxmbt.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163wwdglcjg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163hubrvefv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163fulwtdhd.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163fheeicxi.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163mhqhpuka.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ernjhfpu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163rayhubmm.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163toztoizr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163roodrocb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163tqbuxnrf.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163yhrcsuup.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163uclvjuik.html

================================================================================
来源：http://www.xuanzx.com/163tkruynui.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163xhzotvqj.html

================================================================================
来源：http://www.xuanzx.com/163fatnbwsp.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163fdrdenjw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163zyncihgg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ywujtfxz.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163gztcxwsr.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163qrblukhl.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163lfivqios.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163majmifad.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163vwzfholj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163fkelgesk.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163zfobrtsa.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163nlbhyvvf.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163fjjvgzvq.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163biqyziqf.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163inmufmbb.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163yxxjgavn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ryztdsnk.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163rdoqzmtq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163fzlbnnso.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163lthwydoy.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163rgccqsnv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zzxmnshy.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163nxgkjefv.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163zdesmjrx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163imckydnn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163rgflfbti.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163ngtzbffu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163rbdqyshv.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163vcyakkkw.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163nerylnsx.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163bodzrrgc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163rexfnauc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163deyltxpi.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163wbmdigew.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dosqhzuk.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163hpwvwlqp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163hbqgoasd.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163jpgonfyo.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163abzyysoo.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163unyfhyea.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163oqracfqs.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163bppnaooe.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163cyjywrqc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163hqmftyvu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163qjibsuui.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163hgbzobfz.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163jvftilij.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163hrfykseo.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163fiaecnum.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163slynvzmg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163vexfdkml.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163mfubtuyk.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163uyotzkzy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163zoulueol.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163emogakpd.html

[K07] 进制转换
来源：http://www.xuanzx.com/163kpujqtyb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163xpacjtyl.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163nwzzjpsh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163oebkcyvg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163gewathzd.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163qkzlerph.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163cxfowcyi.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163itgkssju.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163plkhxqxq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163hlwkexpc.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163mfvxhczs.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163njhkjaxw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163cchjhlmn.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163yadyggpt.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163yldelxdw.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163hizshzye.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163xnclzdaa.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163vmbkjevo.html

================================================================================
来源：http://www.aibaodan.cn/163wiiftted.html

L. 网络请求
来源：http://www.aibaodan.cn/163breqxnzr.html

================================================================================
来源：http://www.sxryk.cn/163lytxpwgw.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163ukpxwruq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163mzjfsniz.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163vsrutznn.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163nhqvsley.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163nokiyfip.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163fjjduizh.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163lofzrjyp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163lbrtovad.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ofcfyawt.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163pzommapo.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163jarreycv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163usegtrbg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163xhwenfui.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163pezipvoi.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163zmpmdoli.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163lsdeizcd.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163lvvyakip.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163lhpxwxpn.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163wiluurhs.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163vlhulwnb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ngrwyabm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163xpytmptt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163yddwugei.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163emktoptd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ptnsqkns.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163frghhqlv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163mrmocrhb.html

[L04] 设置超时
来源：http://www.xuanzx.com/163gudujoof.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163rchqkjsu.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163lafzvrjb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163dymmepki.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xfieshys.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163misvaqbe.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163ektlcakw.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163udrkvhfj.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163hegagbim.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163tzloopiq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163jrsjcvah.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163gilbulan.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ddspgjwg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163eaxwgyku.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163jvyrerux.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163upmusgjp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163okdtbaeh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163srzvktgr.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163hvwtzsko.html

Py:   resp.json()
来源：http://www.xuanzx.com/163bgnbswep.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163lzawfofg.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163camburyv.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ahvunsop.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163wkpajckb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163inyeckdr.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163tmnmrgla.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163epvysmsx.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163hefylxoz.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163vfjcfndw.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163jwzbayjv.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163agasmmsb.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163xcvpkjhi.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163rfpsofqu.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163nooaihfs.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163jfzwhypm.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163zutfiujo.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163wgxyadgf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163kamfyeyq.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163nxfywljx.html


<!-- 参考信息 -->