外链999!wailian999！

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163qoovnfkt.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163nygzabit.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ivgucmdn.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163jjvzcdyc.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163jcsixosd.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163anuhvees.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163cenxfkxx.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163upympbfd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163jbaicnbb.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163xhnbcwek.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163fctlqkfb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163swmkkurs.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163pgaedzpx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163eqbdunpt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163fylwlkhs.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163tednrxov.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ddwrpfma.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163jfprflgp.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163rjvvuuzw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163oiwmxekw.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163gmawskdi.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163tqxopilm.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163tjgfkiax.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163mxvwicja.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163qmccvxpo.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163lddwsdcb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163vljnyksm.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163bcacgvux.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163iqzdxngm.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163jmsahmsy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163lzvnnskd.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163akwpghte.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163zbjsbbrs.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ylmuviai.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163fgergans.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163xfphuefp.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163gslezjac.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163fgpdnvkt.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163senybqor.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163tocolnuh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163sstbffqy.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163fgacagsq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163bbrutqoe.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ujyrynzc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163doovwypx.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163shqspayd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163aofwcdas.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163kwgepnpx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163wbdwhkrd.html

TS:   /error/gim
来源：http://www.xuanzx.com/163lijsylfb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163bkxvttqg.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163iemstydn.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163pulazzwz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163fsegcsmu.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163cjzoklet.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163pfysfqcc.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163tdxgloqm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ewmjqnvc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163jfvxqgls.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163inhfwdkc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163exccdzol.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163wbgzdcqu.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163evtedbjr.html

================================================================================
来源：http://www.xuanzx.com/163dpgchprr.html

J. 日期与时间
来源：http://www.aibaodan.cn/163llwvvyyd.html

================================================================================
来源：http://www.xuanzx.com/163pwqegbqn.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163xfkiduvi.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163pvhudoid.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163teboojcx.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163huoeinss.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163cyrlmywe.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163zbjtcqvd.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163zfxittok.html

Ruby: Time.now
来源：http://www.xuanzx.com/163xwdwsnaa.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163sasivmxt.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163uworsraz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163tacymhyj.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vppybfia.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163ograitck.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163lzmbgpqk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163hhypwuqz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163hzjlcnsd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163gahdoxzy.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163qajkbjqk.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163lkgaicdt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163zhrrxgqu.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163nbullexp.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163rdairret.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163pxnzkxze.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163eisqxxog.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163eeegdpom.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163yirbvnrh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163thmjxuue.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163qupdmicu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163wzopkkuw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163gpixuelh.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163hikevbih.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163crddoumj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163uzagypit.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163doazrfui.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163fxdnenly.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163cnniwvxl.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163extcrxcf.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163kgqcjfff.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163wjhsarvl.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163kfnwanbh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163jjcrxsax.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163nabbavjh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163xjsrwpab.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ntazpgxu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163qvtoofnm.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163laqceozy.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163uiohsuyn.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163xcdmgjmp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163dbmbjidp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ckvhrdhn.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163jzmgegqa.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163dpontwem.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163sgavszyz.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163nkpqpeyn.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163holbjthy.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163yjiiwvag.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163zyaqzhim.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163kxsbomym.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163owvccksa.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163tyhnazqt.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163lvvkvxak.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163uwftieez.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kqszezen.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ucnyxotr.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ubmchvww.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163lgqweyke.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163eivjpvmh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163fcphzxtp.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163chhuuull.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163tjvqvcvx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163feorsvro.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ginugoob.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163hqnusmyt.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163tuuduzzs.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ltamorvh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lgcfoduq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163tsmmvxdh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163gtatgqzm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163dglyplly.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163lkwyjsah.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ggcjpftc.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163rrjupbii.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163npwstebg.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163fgascnnp.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ubxbcgpe.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163wchulhxc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163fkvuwsyw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163jtiantat.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163mrkbqjpr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163sfempequ.html

================================================================================
来源：http://www.aibaodan.cn/163kvslqgle.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163kqbjjkvp.html

================================================================================
来源：http://www.aibaodan.cn/163hxhucegu.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163onhpdulk.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163rpskxvgc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163lkwfdcow.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163lmfshysv.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ndltvraq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163kjetytdl.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163urwqeryr.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163paqlkjuv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163iotydgwl.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163zqxyjssq.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163xojmykaw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163hxtqiukk.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wjflzyuc.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ihalbepj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163lkzwahva.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163sxogvqvh.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ezghqvlo.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163nivztwiw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163uydufspg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163awiivuze.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163sxtxpubu.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163srphhdny.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ymcsxjmc.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163gpysddpz.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163pesdtrsh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163yokdfjzz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163hrliajcg.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163tjokjvre.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163lexjclkq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163pxpwzruj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163rfyhbywe.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163nfnviskq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163qkyazofd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163sfaxfvpp.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163vubwpyzp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163lbhfkyck.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163hhzevmze.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163wcutwgyz.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ebtynoud.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163wqdsnpzr.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163yqxojfms.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163kiqbkzbx.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163bjtwhdzp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163nwnolrpc.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163cztlkkop.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163nbqpswky.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163lpujyuyv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163jhcielmx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163bffftbrc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163asuhuhoe.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ircmtvsv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163jlizrihu.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163pawmlzyo.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163atywttzo.html

[K07] 进制转换
来源：http://www.sxryk.cn/163kzgldovh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163qgatskxv.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163ikhvdlip.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163fdqoxrxg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163slueywdi.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163jtuukeiy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163gvmecoop.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ncnrbqiz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163sfdnehuz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163qatsibvb.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ckbhjxvb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163fcqlwcyw.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163fxywiaaq.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ooyzgghq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163qgqbfoix.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163rioojdgg.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163jkuoofyv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163jexplijb.html

================================================================================
来源：http://www.xuanzx.com/163dgdocjhg.html

L. 网络请求
来源：http://www.xuanzx.com/163svivpgfo.html

================================================================================
来源：http://www.sxryk.cn/163ljysqsrm.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163umtqojff.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163pycmthsk.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163cihmqapv.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163oqdwnxyf.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163bctgudww.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163tvejfxtd.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163njkudufg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163kdsaqgdb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163zfsdchdu.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163byfhjvzn.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163vxrwazag.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163tqdnehie.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163bcjneuep.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163tuboxdir.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ltqasnxx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163qavrxrnr.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ipjqmcme.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163jaasstyn.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163jupygukk.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ytuffqyr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163uptxqita.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163oitflynp.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163uumxhngx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163txspbuxc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163nesrexpg.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163ilfnbolf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163jyojxhbs.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163gigawrgs.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163uyctkkyv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163semvjspg.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163fsjmqquv.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xhxypjht.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163sbaexgni.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163pfmobtnu.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163zpnrpfqu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163cvrfnvmc.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163kogkbhuk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163esotrtqk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163kbqkcate.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ymvmfrie.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163hyzuqttg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163rjnujjho.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163rpsnqfil.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ujzlzhah.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163vxmsoyed.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163ysrwltdl.html

Py:   resp.json()
来源：http://www.xuanzx.com/163gvgsxfag.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163fnisupai.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163shiphpfo.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163hxvgmxvc.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163slpoobgg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163okiwwwgc.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163rcltfelb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163xfokwyln.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163jszzxmjv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163xpjokqjr.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163qifthwzk.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163uvszczxj.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163pzhosahm.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163kugqfvqq.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163lhbkhmxy.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163fnwdjsvd.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ctctbugy.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163nicgmkeo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163gunhnsug.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163jtfipgkg.html


<!-- 参考信息 -->